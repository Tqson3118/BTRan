/**
 * src/subjects/c-lang/data/questions/index.ts
 * Ngân hàng câu hỏi trắc nghiệm hợp nhất 9 chương Lập trình C/C++ (270 câu hỏi)
 */

import type { CQuestion } from '../../types/index';
import { questionsCh1 } from './questions-ch1';
import { questionsCh2 } from './questions-ch2';
import { questionsCh3 } from './questions-ch3';
import { questionsCh4 } from './questions-ch4';
import { questionsCh5 } from './questions-ch5';
import { questionsCh6 } from './questions-ch6';
import { questionsCh7 } from './questions-ch7';
import { questionsCh8 } from './questions-ch8';
import { questionsCh9 } from './questions-ch9';

export const allCQuestions: CQuestion[] = [
  ...questionsCh1,
  ...questionsCh2,
  ...questionsCh3,
  ...questionsCh4,
  ...questionsCh5,
  ...questionsCh6,
  ...questionsCh7,
  ...questionsCh8,
  ...questionsCh9,
];

export const cQuestionsByChapter: Record<number, CQuestion[]> = {
  1: questionsCh1,
  2: questionsCh2,
  3: questionsCh3,
  4: questionsCh4,
  5: questionsCh5,
  6: questionsCh6,
  7: questionsCh7,
  8: questionsCh8,
  9: questionsCh9,
};

export const cMockExamQuestions: CQuestion[] = allCQuestions.filter(q => q.mockExamPreset === true);

export {
  questionsCh1,
  questionsCh2,
  questionsCh3,
  questionsCh4,
  questionsCh5,
  questionsCh6,
  questionsCh7,
  questionsCh8,
  questionsCh9,
};
