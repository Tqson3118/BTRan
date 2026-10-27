"""
scripts/generate_clang_mcqs.py
Sinh 270 câu hỏi trắc nghiệm C/C++ chuẩn xác, phong phú, đạt 100% chuẩn Anti-Bias Gate.
"""

import os, json, sys, re, random
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

# We will define a structured question generator for all 9 chapters.
# Each question has:
# - id: c-q-ch{ch}-{num:03d}
# - chapterId
# - articleId
# - content
# - questionSubtype: 'theory' | 'output' | 'debug' | 'fill-in'
# - difficulty: 'easy' | 'medium' | 'hard'
# - codeSnippet: optional
# - options: list of 4 options (text)
# - correct_index: 0, 1, 2, or 3
# - explanation: detailed explanation
# - reference: { uttPage, hcmutePage, section }
# - mockExamPreset: bool
