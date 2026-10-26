/**
 * src/data/chapters/index.ts
 * Barrel export tập trung toàn bộ dữ liệu 7 Chương Giáo trình Pháp luật đại cương (HCMUTE 2023)
 */

import { Chapter } from '../../types';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';
import { chapter7 } from './chapter7';

export { chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7 };

export const allChapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
];

export const chaptersMap: Record<number, Chapter> = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
  6: chapter6,
  7: chapter7,
};
