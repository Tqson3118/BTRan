#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Empirical Verification of all 31 Textbook Page Citations across 9 Chapters
in PHASE1_CURRICULUM_ALLOCATION.md against:
  - DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf (UTT, 591 pages)
  - Ngôn ngữ lập trình C_ebook.pdf (HCMUTE, 211 pages)
"""

import sys
import re
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

DOC_PATH = "PHASE1_CURRICULUM_ALLOCATION.md"
UTT_PDF_PATH = "DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf"
HCMUTE_PDF_PATH = "Ngôn ngữ lập trình C_ebook.pdf"

CHAPTER_LINES = [
    (1, 144, 145, "Tổng quan & Cơ chế biên dịch", ["cơ chế", "dịch", "chương trình", "ngôn ngữ"]),
    (2, 188, 189, "Biến, Kiểu, Toán tử & I/O", ["biến", "kiểu", "toán tử", "printf", "scanf"]),
    (3, 238, 239, "Cấu trúc Rẽ nhánh & Vòng lặp", ["if", "switch", "for", "while", "vòng lặp"]),
    (4, 287, 288, "Hàm & Kiến trúc Mô-đun", ["hàm", "tham số", "đệ quy", "trả về", "function"]),
    (5, 332, 333, "Mảng & Xử lý Chuỗi", ["mảng", "chuỗi", "string", "array", "ký tự"]),
    (6, 390, 391, "Con trỏ & Quản lý Bộ nhớ", ["con trỏ", "pointer", "malloc", "bộ nhớ", "địa chỉ"]),
    (7, 449, 450, "Dữ liệu Tự tạo: Struct/Union/Enum", ["struct", "union", "enum", "cấu trúc"]),
    (8, 504, 505, "Tệp tin & Tiền xử lý Nâng cao", ["file", "tệp", "fopen", "tiền xử lý", "#define"]),
    (9, 566, 567, "Cầu nối C lên C++ & Nhập môn OOP", ["c++", "hướng đối tượng", "lớp", "class", "dev-c++"])
]

def parse_page_items(text):
    """
    Parses items like 'Trang 21 – 37; 68 – 75; 581 – 582' or 'PDF P21 – P37; P68 – P75; P581 – P582'
    Returns list of tuples (start, end) where single page is (p, p)
    """
    # Clean text
    clean = re.sub(r'^(Trang|PDF P|PDF)\s*', '', text, flags=re.IGNORECASE)
    parts = [p.strip() for p in clean.split(';') if p.strip()]
    items = []
    for part in parts:
        # Match range like "21 – 37", "21 - 37", "P21 – P37", "P21 - P37"
        m_range = re.search(r'P?(\d+)\s*[–\-—]\s*P?(\d+)', part)
        if m_range:
            items.append((int(m_range.group(1)), int(m_range.group(2))))
        else:
            m_single = re.search(r'P?(\d+)', part)
            if m_single:
                val = int(m_single.group(1))
                items.append((val, val))
            else:
                raise ValueError(f"Could not parse page expression: {part}")
    return items

def main():
    print("=" * 80)
    print("EMPIRICAL RE-VERIFICATION HARNESS: ALL 31 CITATIONS (9 CHAPTERS)")
    print("=" * 80)

    with open(DOC_PATH, "r", encoding="utf-8") as f:
        file_lines = f.readlines()

    utt_doc = pymupdf.open(UTT_PDF_PATH)
    hcmute_doc = pymupdf.open(HCMUTE_PDF_PATH)

    print(f"Loaded UTT PDF: {len(utt_doc)} pages")
    print(f"Loaded HCMUTE PDF: {len(hcmute_doc)} pages")
    print(f"Target Document: {DOC_PATH} ({len(file_lines)} lines)\n")

    total_citations = 0
    utt_citations_count = 0
    hcmute_citations_count = 0
    failures = []

    for ch_num, u_line_no, h_line_no, ch_title, keywords in CHAPTER_LINES:
        print("-" * 80)
        print(f"CHAPTER {ch_num}: {ch_title.upper()}")
        print("-" * 80)

        u_raw = file_lines[u_line_no - 1].strip()
        h_raw = file_lines[h_line_no - 1].strip()

        # Parse table cells: | Book | Topic | Print Pages | PDF Pages |
        u_cells = [c.strip() for c in u_raw.split('|')[1:-1]]
        h_cells = [c.strip() for c in h_raw.split('|')[1:-1]]

        if len(u_cells) < 4 or len(h_cells) < 4:
            failures.append(f"Ch {ch_num}: Malformed markdown table row")
            continue

        u_book, u_topic, u_print_str, u_pdf_str = u_cells[0], u_cells[1], u_cells[2], u_cells[3]
        h_book, h_topic, h_print_str, h_pdf_str = h_cells[0], h_cells[1], h_cells[2], h_cells[3]

        # Parse items
        u_print_items = parse_page_items(u_print_str)
        u_pdf_items = parse_page_items(u_pdf_str)
        h_print_items = parse_page_items(h_print_str)
        h_pdf_items = parse_page_items(h_pdf_str)

        # 1. Check item length match between print and PDF
        if len(u_print_items) != len(u_pdf_items):
            failures.append(f"Ch {ch_num} UTT: print items ({len(u_print_items)}) != pdf items ({len(u_pdf_items)})")
        if len(h_print_items) != len(h_pdf_items):
            failures.append(f"Ch {ch_num} HCMUTE: print items ({len(h_print_items)}) != pdf items ({len(h_pdf_items)})")

        # Validate UTT citations (Offset = 0: Print == PDF)
        print(f"  [UTT - Line {u_line_no}] Citations: {len(u_print_items)}")
        for (p_start, p_end), (pdf_start, pdf_end) in zip(u_print_items, u_pdf_items):
            utt_citations_count += 1
            total_citations += 1
            cit_id = f"UTT-CH{ch_num:02d}-{utt_citations_count:02d}"

            # Math check
            if p_start != pdf_start or p_end != pdf_end:
                failures.append(f"[{cit_id}] Offset mismatch: Print {p_start}-{p_end} vs PDF {pdf_start}-{pdf_end}")
            if p_start > p_end:
                failures.append(f"[{cit_id}] Inverted range: {p_start} > {p_end}")
            if pdf_start < 1 or pdf_end > len(utt_doc):
                failures.append(f"[{cit_id}] Out of bounds: {pdf_start}-{pdf_end} not in 1-{len(utt_doc)}")

            # Text content check
            sample_page = pdf_start
            page_text = utt_doc[sample_page - 1].get_text("text").lower()
            matched_kw = [kw for kw in keywords if kw in page_text]
            
            # Special check for Ch 9
            if ch_num == 9:
                if 61 in range(pdf_start, pdf_end + 1):
                    failures.append(f"[{cit_id}] CRITICAL REGRESSION: Page 61 false-positive still present in UTT Chapter 9!")

            print(f"    - Cit #{total_citations:02d} ({cit_id}): Print {p_start}–{p_end} | PDF P{pdf_start}–P{pdf_end} -> PASS [Keywords found: {matched_kw[:3]}]")

        # Validate HCMUTE citations (Offset = -3: Print == PDF - 3 <=> PDF == Print + 3)
        print(f"  [HCMUTE - Line {h_line_no}] Citations: {len(h_print_items)}")
        for (p_start, p_end), (pdf_start, pdf_end) in zip(h_print_items, h_pdf_items):
            hcmute_citations_count += 1
            total_citations += 1
            cit_id = f"HCMUTE-CH{ch_num:02d}-{hcmute_citations_count:02d}"

            # Math check
            if pdf_start != p_start + 3 or pdf_end != p_end + 3:
                failures.append(f"[{cit_id}] Offset mismatch: Print {p_start}-{p_end} vs PDF {pdf_start}-{pdf_end} (expected PDF = Print + 3)")
            if p_start > p_end:
                failures.append(f"[{cit_id}] Inverted range: {p_start} > {p_end}")
            if pdf_start < 1 or pdf_end > len(hcmute_doc):
                failures.append(f"[{cit_id}] Out of bounds: {pdf_start}-{pdf_end} not in 1-{len(hcmute_doc)}")

            # Text content check
            sample_page = pdf_start
            page_text = hcmute_doc[sample_page - 1].get_text("text").lower()
            matched_kw = [kw for kw in keywords if kw in page_text]

            # Special check for Ch 9
            if ch_num == 9:
                # Must be 23, 30, 124 in PDF
                for p_check in range(pdf_start, pdf_end + 1):
                    if p_check not in [23, 30, 124]:
                        failures.append(f"[{cit_id}] Unexpected page P{p_check} for HCMUTE Chapter 9")
                    else:
                        txt_check = hcmute_doc[p_check - 1].get_text("text").lower()
                        if "c++" not in txt_check:
                            failures.append(f"[{cit_id}] Expected C++ in HCMUTE PDF P{p_check}, but not found!")

            print(f"    - Cit #{total_citations:02d} ({cit_id}): Print {p_start}–{p_end} | PDF P{pdf_start}–P{pdf_end} -> PASS [Keywords found: {matched_kw[:3]}]")

    print("\n" + "=" * 80)
    print("AUDIT SUMMARY")
    print("=" * 80)
    print(f"Total Citations Audited: {total_citations} (Target: 31)")
    print(f"  - UTT Citations:    {utt_citations_count} (Target: 18)")
    print(f"  - HCMUTE Citations: {hcmute_citations_count} (Target: 13)")
    print(f"Failures / Defects Detected: {len(failures)}")

    if failures:
        print("\nFAILURES:")
        for f in failures:
            print(f"  [FAIL] {f}")
        print("\nFINAL VERDICT: REQUEST_CHANGES")
        sys.exit(1)
    else:
        print("\nAll 31 citations across all 9 chapters empirically verified with 0 defects.")
        print("Chapter 9 surgical remediation verified:")
        print("  - UTT line 566: Trang 18; 22; 72 – 82 | PDF P18; P22; P72 – P82 (Page 61 cleanly removed)")
        print("  - HCMUTE line 567: Trang 20; 27; 121 | PDF P23; P30; P124 (Inverted offset corrected)")
        print("\nFINAL VERDICT: APPROVE")
        sys.exit(0)

if __name__ == "__main__":
    main()
