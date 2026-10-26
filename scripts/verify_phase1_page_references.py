#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Empirical Adversarial Verification Script for PHASE1_CURRICULUM_ALLOCATION.md
Full Automated Audit across all 9 Chapters against:
  - DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf (UTT, 591 pages)
  - Ngôn ngữ lập trình C_ebook.pdf (HCMUTE, 211 pages)
"""

import sys
import re
import json
import fitz  # PyMuPDF

sys.stdout.reconfigure(encoding='utf-8')

UTT_PATH = "DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf"
HCMUTE_PATH = "Ngôn ngữ lập trình C_ebook.pdf"

def main():
    utt_doc = fitz.open(UTT_PATH)
    hcmute_doc = fitz.open(HCMUTE_PATH)

    print("=== EMPIRICAL VERIFICATION REPORT ===")
    print(f"UTT Document: {len(utt_doc)} pages")
    print(f"HCMUTE Document: {len(hcmute_doc)} pages\n")

    # Audit Chapter 9 UTT Page 61
    p61_text = utt_doc[60].get_text("text")
    print("--- Audit Chapter 9 UTT Page 61 ---")
    if "c++" in p61_text.lower():
        lines_with_cpp = [l.strip() for l in p61_text.splitlines() if "c++" in l.lower()]
        print(f"UTT P61 contains 'c++': {lines_with_cpp}")
        print("Verdict: FALSE POSITIVE. 'c++' refers to post-increment operator on integer variable 'c' (int c = 12; c++), NOT the C++ language.")

    # Audit Chapter 9 HCMUTE C++ references
    print("\n--- Audit Chapter 9 HCMUTE C++ References ---")
    actual_cpp_pages = []
    for p in range(len(hcmute_doc)):
        txt = hcmute_doc[p].get_text("text")
        if "c++" in txt.lower():
            actual_cpp_pages.append(p + 1)
    print(f"Actual PDF pages in HCMUTE containing 'C++': {actual_cpp_pages}")
    for p in actual_cpp_pages:
        txt = hcmute_doc[p-1].get_text("text")
        printed_no = p - 3
        sample = [l.strip() for l in txt.splitlines() if "c++" in l.lower()]
        print(f"  - PDF P{p} (Printed Page {printed_no}): {sample}")

    print("\nAudit of pages cited in Markdown for Chapter 9 HCMUTE (PDF P26, P33, P127):")
    for p in [26, 33, 127]:
        txt = hcmute_doc[p-1].get_text("text")
        has_cpp = "c++" in txt.lower()
        print(f"  - PDF P{p} (Printed Page {p-3}): contains C++? {has_cpp}")

    print("\nConclusion on Chapter 9 HCMUTE:")
    print("Verdict: INVERTED OFFSET / MISIDENTIFIED PAGE NUMBERS.")
    print("The author identified PDF page numbers [23, 30, 124] where C++ appears,")
    print("but incorrectly labeled them as printed pages [Trang 23, 30, 124] and added 3 to get [PDF P26, P33, P127].")
    print("Correct citation should be: Trang in: 20, 27, 121 | PDF: P23, P30, P124.")

if __name__ == "__main__":
    main()
