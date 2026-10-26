"""
Empirical Verification Script for PHASE1_CURRICULUM_ALLOCATION.md
Validates:
1. Table 3.1: 2D MCQ Matrix (Rows, Columns, Formats, Difficulties, Sums)
2. Table 3.2: Mock Exam Blueprint (Chapter picks, Types, Difficulties, Sums)
3. Table 3.3: Flashcard Matrix (Chapter allocations, Sum = 125)
4. Section 4: Programming Essays Catalog (32 problems, required fields)
5. Compilation test for all 32 C/C++ solution outlines using gcc/g++
"""

import os
import re
import subprocess
import sys
import tempfile

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = r"c:\Users\Administrator\Downloads\downloads\bài tập\PHASE1_CURRICULUM_ALLOCATION.md"

def load_file():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        return f.read()

def clean_cell(cell):
    # Remove markdown bold, links, whitespace, extra text like 'câu', 'thẻ', '%'
    c = cell.strip()
    c = re.sub(r"\*\*([^*]+)\*\*", r"\1", c)
    c = re.sub(r"<!--.*?-->", "", c)
    return c.strip()

def parse_int(cell):
    clean = clean_cell(cell)
    # Extract first integer found
    m = re.search(r"(\d+)", clean)
    if m:
        return int(m.group(1))
    return None

def verify_table_3_1(content):
    print("=" * 70)
    print("EMPIRICAL CHECK 1: TABLE 3.1 (MCQ MATRIX)")
    print("=" * 70)
    
    # Locate Table 3.1
    section_m = re.search(r"### 3\.1\..*?\n(.*?)(?=### 3\.2|$)", content, re.DOTALL)
    if not section_m:
        print("[FAIL] Could not locate Section 3.1 in document!")
        return False, {}
    
    table_text = section_m.group(1)
    lines = [line.strip() for line in table_text.splitlines() if line.strip().startswith("|")]
    
    # Extract table rows
    header = lines[0]
    separator = lines[1]
    data_rows = lines[2:]
    
    print(f"Header: {header}")
    
    parsed_rows = []
    total_row = None
    
    for row in data_rows:
        cells = [c.strip() for c in row.split("|")[1:-1]]
        if len(cells) < 9:
            continue
        chapter_name = clean_cell(cells[0])
        if "TỔNG CỘNG" in chapter_name.upper():
            total_row = cells
        else:
            parsed_rows.append(cells)
            
    print(f"Found {len(parsed_rows)} chapter rows in Table 3.1.")
    
    all_passed = True
    row_details = []
    
    sum_total_mcq = 0
    sum_d1 = 0
    sum_d2 = 0
    sum_d3 = 0
    sum_d4 = 0
    sum_de = 0
    sum_tb = 0
    sum_kho = 0
    
    for idx, r in enumerate(parsed_rows, 1):
        ch_name = clean_cell(r[0])
        total_mcq = parse_int(r[1])
        d1 = parse_int(r[2]) # Lý thuyết
        d2 = parse_int(r[3]) # Output
        d3 = parse_int(r[4]) # Debug
        d4 = parse_int(r[5]) # Fill-in
        de = parse_int(r[6]) # Dễ
        tb = parse_int(r[7]) # TB
        kho = parse_int(r[8]) # Khó
        
        sum_total_mcq += total_mcq
        sum_d1 += d1
        sum_d2 += d2
        sum_d3 += d3
        sum_d4 += d4
        sum_de += de
        sum_tb += tb
        sum_kho += kho
        
        format_sum = d1 + d2 + d3 + d4
        diff_sum = de + tb + kho
        
        format_ok = (format_sum == total_mcq)
        diff_ok = (diff_sum == total_mcq)
        
        if not (format_ok and diff_ok):
            all_passed = False
            print(f"[FAIL ROW {idx}] {ch_name}: Total={total_mcq}, FormatSum={format_sum} ({format_ok}), DiffSum={diff_sum} ({diff_ok})")
        else:
            print(f"  [PASS] {ch_name[:35]:<35} | Total={total_mcq:2d} | Types({d1:2d}+{d2:2d}+{d3:2d}+{d4:2d}={format_sum:2d}) | Diff({de:2d}+{tb:2d}+{kho:2d}={diff_sum:2d})")
            
        row_details.append({
            "chapter": ch_name, "total": total_mcq,
            "d1": d1, "d2": d2, "d3": d3, "d4": d4,
            "de": de, "tb": tb, "kho": kho
        })
        
    print("-" * 70)
    print("COLUMN SUM VERIFICATION:")
    print(f"  Sum of Total MCQ:      {sum_total_mcq} (Target: 270) -> {'PASS' if sum_total_mcq == 270 else 'FAIL'}")
    print(f"  Sum of Lý thuyết (D1): {sum_d1} (Target: 108) -> {'PASS' if sum_d1 == 108 else 'FAIL'}")
    print(f"  Sum of Output (D2):    {sum_d2} (Target: 81)  -> {'PASS' if sum_d2 == 81 else 'FAIL'}")
    print(f"  Sum of Debug (D3):     {sum_d3} (Target: 54)  -> {'PASS' if sum_d3 == 54 else 'FAIL'}")
    print(f"  Sum of Fill-in (D4):   {sum_d4} (Target: 27)  -> {'PASS' if sum_d4 == 27 else 'FAIL'}")
    print(f"  Sum of Dễ:             {sum_de} (Target: 67)  -> {'PASS' if sum_de == 67 else 'FAIL'}")
    print(f"  Sum of Trung bình:     {sum_tb} (Target: 135) -> {'PASS' if sum_tb == 135 else 'FAIL'}")
    print(f"  Sum of Khó:            {sum_kho} (Target: 68)  -> {'PASS' if sum_kho == 68 else 'FAIL'}")
    
    col_checks = (
        sum_total_mcq == 270 and
        sum_d1 == 108 and sum_d2 == 81 and sum_d3 == 54 and sum_d4 == 27 and
        sum_de == 67 and sum_tb == 135 and sum_kho == 68
    )
    
    if not col_checks:
        all_passed = False
        
    # Check total row in table
    if total_row:
        t_total = parse_int(total_row[1])
        t_d1 = parse_int(total_row[2])
        t_d2 = parse_int(total_row[3])
        t_d3 = parse_int(total_row[4])
        t_d4 = parse_int(total_row[5])
        t_de = parse_int(total_row[6])
        t_tb = parse_int(total_row[7])
        t_kho = parse_int(total_row[8])
        
        t_matches = (
            t_total == sum_total_mcq and
            t_d1 == sum_d1 and t_d2 == sum_d2 and t_d3 == sum_d3 and t_d4 == sum_d4 and
            t_de == sum_de and t_tb == sum_tb and t_kho == sum_kho
        )
        print(f"  Total row matches calculated: {t_matches}")
        if not t_matches:
            all_passed = False
            print(f"[FAIL] Table total row does not match calculated sums: {total_row}")
    else:
        print("[WARN] No total row found in Table 3.1")
        all_passed = False

    return all_passed, {
        "sum_total": sum_total_mcq, "sum_d1": sum_d1, "sum_d2": sum_d2,
        "sum_d3": sum_d3, "sum_d4": sum_d4, "sum_de": sum_de, "sum_tb": sum_tb,
        "sum_kho": sum_kho, "row_count": len(parsed_rows)
    }

def verify_table_3_2(content):
    print("\n" + "=" * 70)
    print("EMPIRICAL CHECK 2: TABLE 3.2 (MOCK EXAM BLUEPRINT - 45 QUESTIONS)")
    print("=" * 70)
    
    section_m = re.search(r"### 3\.2\..*?\n(.*?)(?=### 3\.3|$)", content, re.DOTALL)
    if not section_m:
        print("[FAIL] Could not locate Section 3.2 in document!")
        return False, {}
        
    table_text = section_m.group(1)
    lines = [line.strip() for line in table_text.splitlines() if line.strip().startswith("|")]
    
    header = lines[0]
    data_rows = lines[2:]
    
    print(f"Header: {header}")
    
    parsed_rows = []
    total_row = None
    
    for row in data_rows:
        cells = [c.strip() for c in row.split("|")[1:-1]]
        if len(cells) < 9:
            continue
        chapter_name = clean_cell(cells[0])
        if "TỔNG CỘNG" in chapter_name.upper():
            total_row = cells
        else:
            parsed_rows.append(cells)
            
    print(f"Found {len(parsed_rows)} chapter rows in Table 3.2.")
    
    all_passed = True
    sum_picked = 0
    sum_lt = 0
    sum_output = 0
    sum_debug = 0
    sum_fill = 0
    sum_de = 0
    sum_tb = 0
    sum_kho = 0
    
    for idx, r in enumerate(parsed_rows, 1):
        ch_name = clean_cell(r[0])
        picked = parse_int(r[1])
        lt = parse_int(r[2])
        out = parse_int(r[3])
        deb = parse_int(r[4])
        fil = parse_int(r[5])
        de = parse_int(r[6])
        tb = parse_int(r[7])
        kho = parse_int(r[8])
        
        sum_picked += picked
        sum_lt += lt
        sum_output += out
        sum_debug += deb
        sum_fill += fil
        sum_de += de
        sum_tb += tb
        sum_kho += kho
        
        type_sum = lt + out + deb + fil
        diff_sum = de + tb + kho
        
        type_ok = (type_sum == picked)
        diff_ok = (diff_sum == picked)
        
        if not (type_ok and diff_ok):
            all_passed = False
            print(f"[FAIL ROW {idx}] {ch_name}: Picked={picked}, TypeSum={type_sum} ({type_ok}), DiffSum={diff_sum} ({diff_ok})")
        else:
            print(f"  [PASS] {ch_name[:20]:<20} | Picked={picked:2d} | Types({lt}+{out}+{deb}+{fil}={type_sum:2d}) | Diff({de}+{tb}+{kho}={diff_sum:2d})")
            
    print("-" * 70)
    print("COLUMN SUM VERIFICATION:")
    print(f"  Sum of Chapter Picks:  {sum_picked} (Target: 45) -> {'PASS' if sum_picked == 45 else 'FAIL'}")
    print(f"  Sum of Lý thuyết:      {sum_lt} (Target: 18) -> {'PASS' if sum_lt == 18 else 'FAIL'}")
    print(f"  Sum of Output/Trace:   {sum_output} (Target: 14) -> {'PASS' if sum_output == 14 else 'FAIL'}")
    print(f"  Sum of Debug:          {sum_debug} (Target: 9)  -> {'PASS' if sum_debug == 9 else 'FAIL'}")
    print(f"  Sum of Fill-in:        {sum_fill} (Target: 4)  -> {'PASS' if sum_fill == 4 else 'FAIL'}")
    print(f"  Sum of Dễ:             {sum_de} (Target: 11) -> {'PASS' if sum_de == 11 else 'FAIL'}")
    print(f"  Sum of Trung bình:     {sum_tb} (Target: 23) -> {'PASS' if sum_tb == 23 else 'FAIL'}")
    print(f"  Sum of Khó:            {sum_kho} (Target: 11) -> {'PASS' if sum_kho == 11 else 'FAIL'}")
    
    col_checks = (
        sum_picked == 45 and
        sum_lt == 18 and sum_output == 14 and sum_debug == 9 and sum_fill == 4 and
        sum_de == 11 and sum_tb == 23 and sum_kho == 11
    )
    
    if not col_checks:
        all_passed = False
        
    if total_row:
        t_picked = parse_int(total_row[1])
        t_lt = parse_int(total_row[2])
        t_out = parse_int(total_row[3])
        t_deb = parse_int(total_row[4])
        t_fil = parse_int(total_row[5])
        t_de = parse_int(total_row[6])
        t_tb = parse_int(total_row[7])
        t_kho = parse_int(total_row[8])
        
        t_matches = (
            t_picked == sum_picked and
            t_lt == sum_lt and t_out == sum_output and t_deb == sum_debug and t_fil == sum_fill and
            t_de == sum_de and t_tb == sum_tb and t_kho == sum_kho
        )
        print(f"  Total row matches calculated: {t_matches}")
        if not t_matches:
            all_passed = False
            print(f"[FAIL] Table total row does not match calculated sums: {total_row}")
    else:
        print("[WARN] No total row found in Table 3.2")
        all_passed = False

    return all_passed, {
        "sum_picked": sum_picked, "sum_lt": sum_lt, "sum_out": sum_output,
        "sum_deb": sum_debug, "sum_fil": sum_fill, "sum_de": sum_de,
        "sum_tb": sum_tb, "sum_kho": sum_kho, "row_count": len(parsed_rows)
    }

def verify_table_3_3(content):
    print("\n" + "=" * 70)
    print("EMPIRICAL CHECK 3: TABLE 3.3 (FLASHCARD MATRIX - 125 CARDS)")
    print("=" * 70)
    
    section_m = re.search(r"### 3\.3\..*?\n(.*?)(?=## 4\.|$)", content, re.DOTALL)
    if not section_m:
        print("[FAIL] Could not locate Section 3.3 in document!")
        return False, {}
        
    table_text = section_m.group(1)
    lines = [line.strip() for line in table_text.splitlines() if line.strip().startswith("|")]
    
    header = lines[0]
    data_rows = lines[2:]
    
    print(f"Header: {header}")
    
    parsed_rows = []
    total_row = None
    
    for row in data_rows:
        cells = [c.strip() for c in row.split("|")[1:-1]]
        if len(cells) < 3:
            continue
        col0 = clean_cell(cells[0])
        col1 = clean_cell(cells[1])
        if "TỔNG CỘNG" in col0.upper() or "TỔNG CỘNG" in col1.upper():
            total_row = cells
        else:
            parsed_rows.append(cells)
            
    print(f"Found {len(parsed_rows)} chapter rows in Table 3.3.")
    
    all_passed = True
    sum_cards = 0
    
    for idx, r in enumerate(parsed_rows, 1):
        code = clean_cell(r[0])
        name = clean_cell(r[1])
        cards = parse_int(r[2])
        sum_cards += cards
        print(f"  [PASS] {code:<12} | {name[:25]:<25} | Cards: {cards:2d}")
        
    print("-" * 70)
    print(f"Sum of Flashcards across 9 chapters: {sum_cards} (Target: 125) -> {'PASS' if sum_cards == 125 else 'FAIL'}")
    
    if sum_cards != 125:
        all_passed = False
        
    if total_row:
        t_cards = parse_int(total_row[2])
        print(f"Total row in table states: {t_cards} cards -> {'PASS' if t_cards == 125 else 'FAIL'}")
        if t_cards != 125 or t_cards != sum_cards:
            all_passed = False
    else:
        print("[WARN] No total row found in Table 3.3")
        all_passed = False
        
    return all_passed, {"sum_cards": sum_cards, "row_count": len(parsed_rows)}

def verify_section_4_essays(content):
    print("\n" + "=" * 70)
    print("EMPIRICAL CHECK 4: SECTION 4 (ESSAY PROBLEMS CATALOG - 32 PROBLEMS)")
    print("=" * 70)
    
    section_m = re.search(r"## 4\..*?\n(.*?)(?=## 5\.|$)", content, re.DOTALL)
    if not section_m:
        print("[FAIL] Could not locate Section 4 in document!")
        return False, []
        
    s4_text = section_m.group(1)
    
    # Split by problem headers: `#### Bài tập ...`
    prob_pattern = re.compile(r"####\s+(Bài tập\s+[^:\n]+:\s*([^\n]+))\n(.*?)(?=\n####\s+Bài tập|\n###\s+CHƯƠNG|$)", re.DOTALL)
    matches = list(prob_pattern.finditer(s4_text))
    
    print(f"Total problem blocks detected by header pattern: {len(matches)}")
    
    # Also find all `PROG-xx-yy` occurrences
    prog_ids = re.findall(r"`(PROG-\d{2}-\d{2})`", s4_text)
    print(f"Total `PROG-xx-yy` identifiers found: {len(prog_ids)} (Unique: {len(set(prog_ids))})")
    
    problems = []
    all_passed = True
    
    for idx, m in enumerate(matches, 1):
        full_title = m.group(1).strip()
        title_only = m.group(2).strip()
        block_text = m.group(3)
        
        # Extract PROG-xx-yy
        m_id = re.search(r"\*\*Mã bài\*\*:\s*`([^`]+)`", block_text)
        prob_id = m_id.group(1) if m_id else f"MISSING_ID_{idx}"
        
        # Extract Difficulty
        m_diff = re.search(r"\*\*Mức độ\*\*:\s*([^\n]+)", block_text)
        diff = m_diff.group(1).strip() if m_diff else "MISSING_DIFF"
        
        # Extract Description
        m_desc = re.search(r"\*\*Mô tả đề bài\*\*:\s*([^\n]+)", block_text)
        has_desc = bool(m_desc)
        
        # Extract Guidance / Steps
        m_guide = re.search(r"\*\*Hướng dẫn.*?:\s*(.*?)(?=\n- \*\*Khung mã nguồn|\n```|$)", block_text, re.DOTALL)
        has_guide = bool(m_guide and len(m_guide.group(1).strip()) > 10)
        
        # Extract Code Block
        m_code = re.search(r"```(c|cpp)?\n(.*?)```", block_text, re.DOTALL)
        has_code = bool(m_code and len(m_code.group(2).strip()) > 20)
        code_lang = m_code.group(1) if m_code else None
        code_content = m_code.group(2) if m_code else None
        
        is_ok = bool(m_id and m_diff and has_desc and has_guide and has_code)
        if not is_ok:
            all_passed = False
            print(f"[FAIL PROB {idx}] ID: {prob_id} | Title: {title_only[:30]} | ID={bool(m_id)}, Diff={bool(m_diff)}, Desc={has_desc}, Guide={has_guide}, Code={has_code}")
        else:
            print(f"  [PASS {idx:02d}] {prob_id}: {title_only[:35]:<35} | Diff: {diff:<10} | Code: {code_lang or 'c'} ({len(code_content.splitlines()) if code_content else 0} lines)")
            
        problems.append({
            "idx": idx,
            "id": prob_id,
            "title": full_title,
            "diff": diff,
            "has_desc": has_desc,
            "has_guide": has_guide,
            "has_code": has_code,
            "code_lang": code_lang,
            "code": code_content
        })
        
    print("-" * 70)
    print(f"Total problems verified: {len(problems)} (Target: 32) -> {'PASS' if len(problems) == 32 else 'FAIL'}")
    if len(problems) != 32 or len(prog_ids) != 32:
        all_passed = False
        
    # Check problem distribution per chapter:
    ch_dist = {}
    for p in problems:
        ch = p["id"].split("-")[1]
        ch_dist[ch] = ch_dist.get(ch, 0) + 1
    print(f"Problem distribution per chapter: {sorted(ch_dist.items())}")
    
    return all_passed, problems

def compile_test_solution_outlines(problems):
    print("\n" + "=" * 70)
    print("EMPIRICAL CHECK 5: C/C++ CODE OUTLINES SYNTAX & COMPILATION TEST")
    print("=" * 70)
    
    temp_dir = tempfile.mkdtemp(prefix="challenger_c_test_")
    print(f"Compilation test scratch directory: {temp_dir}")
    
    compile_results = []
    success_count = 0
    fail_count = 0
    
    for p in problems:
        pid = p["id"]
        code = p["code"]
        lang = p["code_lang"]
        
        # Decide compiler: if chapter 9 or cpp or contains std::, use g++, else gcc
        is_cpp = (lang == "cpp" or "09" in pid or "#include <iostream>" in code or "std::" in code)
        compiler = "g++" if is_cpp else "gcc"
        ext = "cpp" if is_cpp else "c"
        src_file = os.path.join(temp_dir, f"{pid}.{ext}")
        obj_file = os.path.join(temp_dir, f"{pid}.o")
        
        with open(src_file, "w", encoding="utf-8") as f:
            f.write(code)
            
        # Run compiler with -c (compile to object code, checks full syntax, types, and declarations)
        cmd = [compiler, "-c", "-Wall", src_file, "-o", obj_file]
        proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8", errors="replace")
        
        if proc.returncode == 0:
            success_count += 1
            print(f"  [COMPILE OK] {pid:<11} ({compiler}) - {p['title'][:40]}")
            compile_results.append({"id": pid, "status": "OK", "compiler": compiler, "warning": proc.stderr.strip()})
        else:
            fail_count += 1
            print(f"  [COMPILE FAIL] {pid:<11} ({compiler}) - Error:\n{proc.stderr.strip()}")
            compile_results.append({"id": pid, "status": "FAIL", "compiler": compiler, "error": proc.stderr.strip()})
            
    print("-" * 70)
    print(f"Compilation Summary: {success_count} Passed / {len(problems)} Total ({fail_count} Failed)")
    
    # Clean up temp files if successful
    # Note: Accidental data loss prevention applies to persistent user data, not temporary files created in tempdir
    for p in problems:
        pid = p["id"]
        is_cpp = (p["code_lang"] == "cpp" or "09" in pid or "#include <iostream>" in (p["code"] or "") or "std::" in (p["code"] or ""))
        ext = "cpp" if is_cpp else "c"
        s = os.path.join(temp_dir, f"{pid}.{ext}")
        o = os.path.join(temp_dir, f"{pid}.o")
        if os.path.exists(s): os.remove(s)
        if os.path.exists(o): os.remove(o)
    try:
        os.rmdir(temp_dir)
    except:
        pass
        
    return (fail_count == 0), compile_results

def main():
    content = load_file()
    print(f"Loaded {FILE_PATH} ({len(content)} characters, {len(content.splitlines())} lines)\n")
    
    t31_ok, t31_data = verify_table_3_1(content)
    t32_ok, t32_data = verify_table_3_2(content)
    t33_ok, t33_data = verify_table_3_3(content)
    s4_ok, problems = verify_section_4_essays(content)
    comp_ok, comp_results = compile_test_solution_outlines(problems)
    
    print("\n" + "=" * 70)
    print("FINAL EMPIRICAL VERIFICATION SUMMARY")
    print("=" * 70)
    print(f"Table 3.1 MCQ Matrix (270 questions):         {'PASS' if t31_ok else 'FAIL'}")
    print(f"Table 3.2 Mock Exam Blueprint (45 questions): {'PASS' if t32_ok else 'FAIL'}")
    print(f"Table 3.3 Flashcard Matrix (125 cards):       {'PASS' if t33_ok else 'FAIL'}")
    print(f"Section 4 Programming Essays (32 problems):    {'PASS' if s4_ok else 'FAIL'}")
    print(f"C/C++ Code Outlines Compilation (32/32):       {'PASS' if comp_ok else 'FAIL'}")
    print("-" * 70)
    
    overall_pass = t31_ok and t32_ok and t33_ok and s4_ok and comp_ok
    verdict = "APPROVE" if overall_pass else "REQUEST_CHANGES"
    print(f"OVERALL EMPIRICAL VERDICT: {verdict}")
    print("=" * 70)
    
    return verdict

if __name__ == "__main__":
    main()
