import { Flashcard } from '../../types';

import { chapter1Flashcards } from './flashcards-ch1';
import { chapter2Flashcards } from './flashcards-ch2';
import { chapter3Flashcards } from './flashcards-ch3';
import { chapter4Flashcards } from './flashcards-ch4';
import { chapter5Flashcards } from './flashcards-ch5';
import { chapter6Flashcards } from './flashcards-ch6';
import { chapter7Flashcards } from './flashcards-ch7';

export const allFlashcards: Flashcard[] = [
  ...chapter1Flashcards,
  ...chapter2Flashcards,
  ...chapter3Flashcards,
  ...chapter4Flashcards,
  ...chapter5Flashcards,
  ...chapter6Flashcards,
  ...chapter7Flashcards,
];

export { chapter1Flashcards } from './flashcards-ch1';
export { chapter2Flashcards } from './flashcards-ch2';
export { chapter3Flashcards } from './flashcards-ch3';
export { chapter4Flashcards } from './flashcards-ch4';
export { chapter5Flashcards } from './flashcards-ch5';
export { chapter6Flashcards } from './flashcards-ch6';
export { chapter7Flashcards } from './flashcards-ch7';
