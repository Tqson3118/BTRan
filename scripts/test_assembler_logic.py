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
    (1, d13.QUESTIONS_CH1, 3),
    (2, d13.QUESTIONS_CH2, 5),
    (3, d13.QUESTIONS_CH3, 6),
    (4, d4.QUESTIONS_CH4, 5),
    (5, d5.QUESTIONS_CH5, 6),
    (6, d6.QUESTIONS_CH6, 6),
    (7, d7.QUESTIONS_CH7, 5),
    (8, d8.QUESTIONS_CH8, 4),
    (9, d9.QUESTIONS_CH9, 5)
]

print("Verifying mock counts:")
for ch_id, qs, target_mock in all_chapters:
    # Reset mock flags so only target_mock have mock=True
    current_mocks = [q for q in qs if q.get('mock')]
    print(f"Ch{ch_id}: total={len(qs)}, target_mock={target_mock}, current_mock={len(current_mocks)}")
