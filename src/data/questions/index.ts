/**
 * src/data/questions/index.ts
 * Barrel export tập trung toàn bộ 195 câu hỏi trắc nghiệm 7 Chương Giáo trình HCMUTE
 */

import { Question, QuestionFilter } from '../../types';
import { chapter1Questions } from './questions-ch1';
import { chapter2Questions } from './questions-ch2';
import { chapter3Questions } from './questions-ch3';
import { chapter4Questions } from './questions-ch4';
import { chapter5Questions } from './questions-ch5';
import { chapter6Questions } from './questions-ch6';
import { chapter7Questions } from './questions-ch7';

export {
  chapter1Questions,
  chapter2Questions,
  chapter3Questions,
  chapter4Questions,
  chapter5Questions,
  chapter6Questions,
  chapter7Questions,
};

export const allQuestions: Question[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions,
  ...chapter7Questions,
];

export const questionsByChapterMap: Record<number, Question[]> = {
  1: chapter1Questions,
  2: chapter2Questions,
  3: chapter3Questions,
  4: chapter4Questions,
  5: chapter5Questions,
  6: chapter6Questions,
  7: chapter7Questions,
};

export function getQuestionsByChapter(chapterId: number): Question[] {
  return questionsByChapterMap[chapterId] || [];
}

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find(q => q.id === id);
}

export function filterQuestions(
  questions: Question[],
  filter: QuestionFilter,
  completedIds: Set<string> = new Set(),
  correctIds: Set<string> = new Set(),
  bookmarkedIds: Set<string> = new Set()
): Question[] {
  return questions.filter(q => {
    if (filter.chapterId && filter.chapterId !== q.chapterId) {
      return false;
    }
    if (filter.difficulty && filter.difficulty !== 'all' && q.difficulty !== filter.difficulty) {
      return false;
    }
    if (filter.tag && (!q.tags || !q.tags.includes(filter.tag))) {
      return false;
    }
    if (filter.status && filter.status !== 'all') {
      if (filter.status === 'unanswered' && completedIds.has(q.id)) return false;
      if (filter.status === 'answered' && !completedIds.has(q.id)) return false;
      if (filter.status === 'correct' && !correctIds.has(q.id)) return false;
      if (filter.status === 'wrong' && (!completedIds.has(q.id) || correctIds.has(q.id))) return false;
      if (filter.status === 'bookmarked' && !bookmarkedIds.has(q.id)) return false;
    }
    return true;
  });
}
