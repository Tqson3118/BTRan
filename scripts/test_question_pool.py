import sys, os
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

import data_ch1_to_ch3 as d13
import build_data_ch4 as d4
import build_data_ch5 as d5
import build_data_ch6 as d6
import build_data_ch7 as d7
import build_data_ch8 as d8
import build_data_ch9 as d9

all_chapters = [
    (1, d13.QUESTIONS_CH1),
    (2, d13.QUESTIONS_CH2),
    (3, d13.QUESTIONS_CH3),
    (4, d4.QUESTIONS_CH4),
    (5, d5.QUESTIONS_CH5),
    (6, d6.QUESTIONS_CH6),
    (7, d7.QUESTIONS_CH7),
    (8, d8.QUESTIONS_CH8),
    (9, d9.QUESTIONS_CH9)
]

total_qs = 0
shortest_correct = 0
strict_diff = 0
mock_count = 0

for ch_id, qs in all_chapters:
    print(f"Chapter {ch_id}: {len(qs)} questions")
    total_qs += len(qs)
    for q in qs:
        if q.get('mock'):
            mock_count += 1
        lens = [len(opt) for opt in q['options']]
        c_len = lens[0] # option 0 is correct
        min_l = min(lens)
        max_l = max(lens)
        if min_l != max_l:
            strict_diff += 1
            if c_len == min_l:
                shortest_correct += 1

print(f"\nTotal Questions: {total_qs} (Target: 270)")
print(f"Total Mock Preset: {mock_count} (Target: 45)")
print(f"Strict Diff Questions: {strict_diff}")
print(f"Shortest Correct (currently): {shortest_correct} ({shortest_correct/total_qs:.1%}) [Target: >= 20%]")
