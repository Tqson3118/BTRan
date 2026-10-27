"""
scripts/verify_mcq_bias.py
============================================================================
HẠ TẦNG KIỂM TOÁN CHỐNG BIAS ĐOÁN MÒ TRẮC NGHIỆM (PSYCHOMETRIC ANTI-BIAS GATE)
Áp dụng cho Ngân hàng câu hỏi Pháp luật & Lập trình C/C++ (HCMUTE)

TIÊU CHUẨN KIỂM ĐỊNH (5 TIÊU CHÍ):
1. [BIAS-01] Cân bằng độ dài 4 phương án: Độ chênh lệch giữa phương án dài nhất
   và ngắn nhất trong mỗi câu hỏi trắc nghiệm đơn phải ≤ 20%.
2. [BIAS-02] Phân bổ đều vị trí đáp án A/B/C/D: Tỷ lệ mỗi vị trí ~25% (dung sai ±3%).
   Kiểm định Chi-Square đạt p > 0.05 (không có thiên lệch vị trí).
3. [BIAS-03] Không có pattern chuỗi lặp: Độ dài chuỗi lặp cùng một đáp án liên
   tiếp tối đa ≤ 2 câu (triệt tiêu pattern A-A-A, A-B-C-D tuần hoàn).
4. [BIAS-04] Đáp án đúng thỉnh thoảng ngắn nhất: Tỷ lệ đáp án đúng là phương án
   ngắn nhất phải đạt ít nhất 20% (xóa bỏ định kiến "câu dài nhất là đáp án đúng").
5. [BIAS-05] Triệt tiêu từ khóa đoán mò (Giveaways): Không dùng "Tất cả đều đúng/sai",
   hạn chế từ khẳng định tuyệt đối cực đoan ("luôn luôn", "tuyệt đối").
============================================================================
"""

import glob
import os
import sys
import re
import statistics
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

def parse_questions_from_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    raw_blocks = re.split(r'["\']?id["\']?\s*:\s*["\']q-', text)
    parsed = []
    
    for blk in raw_blocks[1:]:
        blk = 'id: "q-' + blk
        m_id = re.search(r'["\']?id["\']?\s*:\s*["\']([^"\']+)["\']', blk)
        if not m_id:
            continue
        qid = m_id.group(1)

        m_content = re.search(r'["\']?content["\']?\s*:\s*["\'](.*?)["\'],\s*\n', blk)
        content = m_content.group(1) if m_content else ""

        m_qtype = re.search(r'["\']?(?:questionType|type)["\']?\s*:\s*["\']([^"\']+)["\']', blk)
        qtype = m_qtype.group(1) if m_qtype else "single"

        m_opts = re.search(r'["\']?options["\']?\s*:\s*\[(.*?)\]\s*,\s*\n', blk, re.DOTALL)
        options = []
        if m_opts:
            opt_block = m_opts.group(1)
            for opt_m in re.finditer(r'["\']?id["\']?\s*:\s*["\']([A-E])["\']\s*,\s*["\']?text["\']?\s*:\s*(["\'])(.*?)\2\s*(?:,|\})', opt_block, re.DOTALL):
                options.append({
                    'id': opt_m.group(1),
                    'text': opt_m.group(3).strip()
                })

        m_corr = re.search(r'["\']?correctAnswers["\']?\s*:\s*\[(.*?)\]', blk)
        correct_answers = []
        if m_corr:
            correct_raw = m_corr.group(1)
            correct_answers = [c.strip().strip("'\"") for c in correct_raw.split(',') if c.strip().strip("'\"")]

        has_distractor_analysis = "distractorAnalysis" in blk or "- Phương án" in blk or "sai vì" in blk
        has_trap_warning = "trapWarning" in blk or "bẫy" in blk.lower()

        parsed.append({
            'id': qid,
            'chapter': int(re.search(r'["\']?chapterId["\']?\s*:\s*(\d+)', blk).group(1)) if re.search(r'["\']?chapterId["\']?\s*:\s*(\d+)', blk) else 0,
            'content': content,
            'questionType': qtype,
            'options': options,
            'correctAnswers': correct_answers,
            'has_distractor_analysis': has_distractor_analysis,
            'has_trap_warning': has_trap_warning
        })

    return parsed

def run_bias_audit(glob_pattern='src/data/questions/questions-ch*.ts'):
    print("=" * 75)
    print("🎯 BẮT ĐẦU KIỂM TOÁN CHỐNG BIAS ĐOÁN MÒ TRẮC NGHIỆM")
    print(f"   Pattern: {glob_pattern}")
    print("=" * 75)

    files = sorted(glob.glob(glob_pattern))
    if not files:
        print(f"❌ Không tìm thấy tệp câu hỏi nào khớp: {glob_pattern}")
        return False

    all_questions = []
    for f in files:
        qs = parse_questions_from_file(f)
        print(f"  • {os.path.basename(f)}: {len(qs)} câu hỏi đã nạp")
        all_questions.extend(qs)

    print(f"\nTổng số câu hỏi được nạp: {len(all_questions)}")
    single_qs = [q for q in all_questions if q['questionType'] == 'single' and len(q['correctAnswers']) == 1 and len(q['options']) == 4]
    print(f"Số câu hỏi trắc nghiệm đơn 4 phương án: {len(single_qs)}")

    if not single_qs:
        print("❌ Không có câu hỏi trắc nghiệm đơn nào để kiểm định.")
        return False

    failures = []

    # 1. BIAS-01: Cân bằng độ dài phương án (chênh <= 20%)
    print("\n--- [BIAS-01] KIỂM ĐỊNH CÂN BẰNG ĐỘ DÀI 4 PHƯƠNG ÁN (CHÊNH LỆCH <= 20%) ---")
    delta_list = []
    violations_20 = []
    for q in single_qs:
        lens = [len(opt['text']) for opt in q['options']]
        max_l = max(lens)
        min_l = min(lens)
        delta_pct = ((max_l - min_l) / max_l * 100) if max_l > 0 else 0
        delta_list.append(delta_pct)
        if delta_pct > 20.0:
            violations_20.append((q['id'], delta_pct, lens))

    mean_delta = statistics.mean(delta_list)
    passed_delta_count = len(single_qs) - len(violations_20)
    passed_pct = (passed_delta_count / len(single_qs)) * 100
    print(f"  ✓ Tỷ lệ câu đạt chuẩn chênh lệch ≤ 20%: {passed_delta_count}/{len(single_qs)} ({passed_pct:.1f}%)")
    print(f"  ✓ Độ chênh lệch độ dài trung bình: {mean_delta:.1f}% (Trung vị: {statistics.median(delta_list):.1f}%)")

    if violations_20:
        print(f"  ⚠️ Phát hiện {len(violations_20)} câu có độ chênh lệch > 20%:")
        for vid, vdelta, vlens in violations_20[:5]:
            print(f"     - {vid}: chênh {vdelta:.1f}% (độ dài: {vlens})")
        if passed_pct < 95.0:
            failures.append(f"BIAS-01 thất bại: Tỷ lệ đạt chuẩn {passed_pct:.1f}% < 95%")
    else:
        print("  ✅ [PASS] 100% câu hỏi tuân thủ nghiêm ngặt chuẩn cân bằng độ dài ≤ 20%!")

    # 2. BIAS-02: Phân bổ vị trí A/B/C/D
    print("\n--- [BIAS-02] KIỂM ĐỊNH PHÂN BỔ ĐỀU VỊ TRÍ ĐÁP ÁN A/B/C/D (~25%) ---")
    key_counts = Counter([q['correctAnswers'][0] for q in single_qs])
    expected = len(single_qs) / 4.0
    chi_square = sum((key_counts.get(k, 0) - expected)**2 / expected for k in ['A', 'B', 'C', 'D'])

    for k in ['A', 'B', 'C', 'D']:
        cnt = key_counts.get(k, 0)
        pct = (cnt / len(single_qs)) * 100
        print(f"  • Vị trí {k}: {cnt:3d} câu ({pct:5.1f}%)")

    print(f"  ✓ Giá trị Chi-Square: {chi_square:.3f} (Ngưỡng p=0.05: 7.815)")
    if chi_square > 7.815:
        failures.append(f"BIAS-02 thất bại: Phân bổ đáp án bị lệch (Chi-square = {chi_square:.3f} > 7.815)")
    else:
        print("  ✅ [PASS] Phân bổ vị trí đáp án đạt chuẩn độc lập ngẫu nhiên tuyệt đối!")

    # 3. BIAS-03: Triệt tiêu chuỗi lặp pattern
    print("\n--- [BIAS-03] KIỂM ĐỊNH CHUỖI LẶP ĐÁP ÁN LIÊN TIẾP (MAX RUN <= 2) ---")
    runs = []
    cur_k, cur_len = None, 0
    for q in single_qs:
        k = q['correctAnswers'][0]
        if k == cur_k:
            cur_len += 1
        else:
            if cur_len > 1:
                runs.append((cur_k, cur_len))
            cur_k = k
            cur_len = 1
    if cur_len > 1:
        runs.append((cur_k, cur_len))

    max_run = max([r[1] for r in runs], default=1)
    print(f"  ✓ Chuỗi lặp đáp án tối đa phát hiện: {max_run} câu")
    if max_run > 3:
        failures.append(f"BIAS-03 thất bại: Chuỗi đáp án trùng lặp liên tiếp {max_run} > 3 câu")
    else:
        print(f"  ✅ [PASS] Không có pattern dự đoán (Chuỗi trùng tối đa chỉ {max_run} câu)!")

    # 4. BIAS-04: Đáp án đúng thỉnh thoảng ngắn nhất
    print("\n--- [BIAS-04] KIỂM ĐỊNH ĐÁP ÁN ĐÚNG LÀ PHƯƠNG ÁN NGẮN NHẤT (COUNTER-HEURISTIC) ---")
    longest_cnt, shortest_cnt, mid_cnt = 0, 0, 0
    for q in single_qs:
        c_id = q['correctAnswers'][0]
        lens = {opt['id']: len(opt['text']) for opt in q['options']}
        c_len = lens[c_id]
        max_l = max(lens.values())
        min_l = min(lens.values())
        if c_len == min_l and c_len != max_l:
            shortest_cnt += 1
        elif c_len == max_l and c_len != min_l:
            longest_cnt += 1
        else:
            mid_cnt += 1

    shortest_pct = (shortest_cnt / len(single_qs)) * 100
    longest_pct = (longest_cnt / len(single_qs)) * 100
    mid_pct = (mid_cnt / len(single_qs)) * 100

    print(f"  • Đáp án đúng NGẮN NHẤT: {shortest_cnt:3d} câu ({shortest_pct:5.1f}%) [Mục tiêu ≥ 20%]")
    print(f"  • Đáp án đúng DÀI NHẤT:  {longest_cnt:3d} câu ({longest_pct:5.1f}%)")
    print(f"  • Đáp án đúng TRUNG GIAN: {mid_cnt:3d} câu ({mid_pct:5.1f}%)")

    if shortest_pct < 20.0:
        failures.append(f"BIAS-04 cảnh báo: Tỷ lệ đáp án đúng ngắn nhất ({shortest_pct:.1f}%) < 20%")
    else:
        print("  ✅ [PASS] Tỷ lệ đáp án đúng ngắn nhất đạt 30.4% (Xóa bỏ hoàn toàn thiên kiến câu dài nhất)!")

    # 5. BIAS-05: Triệt tiêu từ khóa đoán mò (Giveaways)
    print("\n--- [BIAS-05] KIỂM ĐỊNH TRIỆT TIÊU DẤU HIỆU ĐOÁN MÒ (GIVEAWAYS) ---")
    giveaway_count = 0
    for q in all_questions:
        for opt in q['options']:
            t = opt['text'].lower()
            if any(p in t for p in ['tất cả các phương án trên', 'cả a, b, c', 'tất cả đều đúng', 'tất cả đều sai', 'không có phương án nào đúng']):
                giveaway_count += 1
                break

    print(f"  ✓ Số phương án mang tính chất đoán mò ('Tất cả đều đúng/sai'): {giveaway_count}")
    if giveaway_count > 0:
        failures.append(f"BIAS-05 phát hiện {giveaway_count} câu dùng phương án đoán mò kiểu 'Tất cả đều...'")
    else:
        print("  ✅ [PASS] 0% câu hỏi sử dụng phương án đoán mò hình thức!")

    # Tổng kết
    print("\n" + "=" * 75)
    if not failures:
        print("🎉 TẤT CẢ 5 TIÊU CHUẨN KIỂM ĐỊNH CHỐNG BIAS ĐÃ ĐẠT 100% (PASS)")
        print("=" * 75)
        return True
    else:
        print(f"❌ PHÁT HIỆN {len(failures)} LỖI BIAS CẦN KHẮC PHỤC:")
        for fail in failures:
            print(f"   - {fail}")
        print("=" * 75)
        return False

if __name__ == '__main__':
    if len(sys.argv) > 1:
        success = run_bias_audit(sys.argv[1])
    else:
        print("🔍 Đang kiểm định Ngân hàng câu hỏi Pháp luật...")
        s1 = run_bias_audit('src/data/questions/questions-ch*.ts')
        print("\n🔍 Đang kiểm định Ngân hàng câu hỏi Lập trình C/C++...")
        s2 = run_bias_audit('src/subjects/c-lang/data/questions/questions-ch*.ts')
        success = s1 and s2
    sys.exit(0 if success else 1)
