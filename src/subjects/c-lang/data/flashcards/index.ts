/**
 * src/subjects/c-lang/data/flashcards/index.ts
 * Barrel export tập trung toàn bộ 125 thẻ ghi nhớ Flashcards Lập trình C/C++
 */

import type { CFlashcard } from '../../types/index';
import { flashcardsCh1 } from './flashcards-ch1';
import { flashcardsCh2 } from './flashcards-ch2';
import { flashcardsCh3 } from './flashcards-ch3';
import { flashcardsCh4 } from './flashcards-ch4';
import { flashcardsCh5 } from './flashcards-ch5';
import { flashcardsCh6 } from './flashcards-ch6';
import { flashcardsCh7 } from './flashcards-ch7';
import { flashcardsCh8 } from './flashcards-ch8';
import { flashcardsCh9 } from './flashcards-ch9';

export {
  flashcardsCh1,
  flashcardsCh2,
  flashcardsCh3,
  flashcardsCh4,
  flashcardsCh5,
  flashcardsCh6,
  flashcardsCh7,
  flashcardsCh8,
  flashcardsCh9
};

export const allCFlashcards: CFlashcard[] = [
  ...flashcardsCh1, ...flashcardsCh2, ...flashcardsCh3, ...flashcardsCh4, ...flashcardsCh5, ...flashcardsCh6, ...flashcardsCh7, ...flashcardsCh8, ...flashcardsCh9
];

export const getFlashcardsByChapter = (chapterId: number): CFlashcard[] => {
  return allCFlashcards.filter(f => f.chapterId === chapterId);
};
