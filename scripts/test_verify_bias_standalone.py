import sys, os
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
import data_ch1_to_ch3 as d

print("Testing Chapters 1, 2, and 3...")
failed = 0
total = 0
for ch_name, qs in [("Chapter 1", d.QUESTIONS_CH1), ("Chapter 2", d.QUESTIONS_CH2), ("Chapter 3", d.QUESTIONS_CH3)]:
    print(f"Checking {ch_name} ({len(qs)} questions)...")
    total += len(qs)
    for q in qs:
        lens = [len(opt) for opt in q["options"]]
        max_l = max(lens)
        min_l = min(lens)
        delta = (max_l - min_l) / max_l
        if delta > 0.20:
            print(f"[{ch_name}] Q{q['num']} FAIL delta={delta:.1%}: {lens}")
            for idx, opt in enumerate(q['options']):
                print(f"   Opt {idx} ({len(opt)} chars): {opt}")
            failed += 1

print(f"Total failed questions in Ch1, Ch2, Ch3: {failed} / {total}")
