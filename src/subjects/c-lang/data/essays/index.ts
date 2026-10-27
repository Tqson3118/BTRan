/**
 * src/subjects/c-lang/data/essays/index.ts
 * Barrel export tập trung toàn bộ 32 bài tập tự luận lập trình C/C++
 */

import type { CEssay } from '../../types/index';
import { essaysCh1 } from './essays-ch1';
import { essaysCh2 } from './essays-ch2';
import { essaysCh3 } from './essays-ch3';
import { essaysCh4 } from './essays-ch4';
import { essaysCh5 } from './essays-ch5';
import { essaysCh6 } from './essays-ch6';
import { essaysCh7 } from './essays-ch7';
import { essaysCh8 } from './essays-ch8';
import { essaysCh9 } from './essays-ch9';

export {
  essaysCh1,
  essaysCh2,
  essaysCh3,
  essaysCh4,
  essaysCh5,
  essaysCh6,
  essaysCh7,
  essaysCh8,
  essaysCh9
};

export const allCEssays: CEssay[] = [
  ...essaysCh1, ...essaysCh2, ...essaysCh3, ...essaysCh4, ...essaysCh5, ...essaysCh6, ...essaysCh7, ...essaysCh8, ...essaysCh9
];

export const getEssaysByChapter = (chapterId: number): CEssay[] => {
  return allCEssays.filter(e => e.chapterId === chapterId);
};
