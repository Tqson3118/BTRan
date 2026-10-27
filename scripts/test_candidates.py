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

candidates = []
for ch_id, qs in all_chapters:
    for q in qs:
        lens = [len(opt) for opt in q['options']]
        c_len = lens[0]
        min_l = min(lens)
        max_l = max(lens)
        if c_len > min_l and c_len <= min_l + 6:
            candidates.append((ch_id, q['num'], c_len, min_l, max_l, lens, q['options'][0]))

print(f"Found {len(candidates)} candidates where option 0 is within 6 chars of min length:")
for c in candidates[:15]:
    print(f"Ch{c[0]} Q{c[1]}: opt0_len={c[2]}, min={c[3]}, max={c[4]}, lens={c[5]}")
    print(f"   Opt 0: {c[6]}")
