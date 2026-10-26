/**
 * src/data/index.ts
 * Central Registry kết nối toàn bộ dữ liệu Giáo trình, Ngân hàng 195 MCQ, 98 Flashcards và Công cụ Tìm kiếm
 */

import { Chapter, Question, Flashcard, QuestionFilter } from '../types';
import { allChapters, chaptersMap, chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7 } from './chapters';
import { allQuestions, questionsByChapterMap, getQuestionsByChapter, getQuestionById, filterQuestions } from './questions';
import { allFlashcards, chapter1Flashcards, chapter2Flashcards, chapter3Flashcards, chapter4Flashcards, chapter5Flashcards, chapter6Flashcards, chapter7Flashcards } from './flashcards';
import { generateMockExamSession, evaluateExamSession, EXAM_PRESETS, isQuestionAnswerCorrect } from '../utils/examGenerator';
import { removeVietnameseAccents, searchMatch, matchAllKeywords } from '../utils/vietnamese';

// Re-export constants & data arrays
export {
  allChapters,
  chaptersMap,
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  allQuestions,
  questionsByChapterMap,
  allFlashcards,
  chapter1Flashcards,
  chapter2Flashcards,
  chapter3Flashcards,
  chapter4Flashcards,
  chapter5Flashcards,
  chapter6Flashcards,
  chapter7Flashcards,
  EXAM_PRESETS,
  getQuestionsByChapter,
  getQuestionById,
  filterQuestions,
  generateMockExamSession,
  evaluateExamSession,
  isQuestionAnswerCorrect,
  removeVietnameseAccents,
  searchMatch,
};

export function getChapter(id: number): Chapter | undefined {
  return chaptersMap[id];
}

export function getAllChapters(): Chapter[] {
  return allChapters;
}

export function getAllQuestions(): Question[] {
  return allQuestions;
}

export function getAllFlashcards(): Flashcard[] {
  return allFlashcards;
}

export function getFlashcardsByChapter(chapterId: number): Flashcard[] {
  return allFlashcards.filter(fc => fc.chapterId === chapterId);
}

export interface SearchResultItem {
  type: 'article' | 'question' | 'flashcard';
  chapterId: number;
  chapterTitle: string;
  articleId?: string;
  id: string;
  title: string;
  snippet: string;
  badge: string;
  sourcePage?: number;
}

/**
 * Tìm kiếm toàn văn tiếng Việt không dấu xuyên suốt 7 chương lý thuyết, 195 MCQ và 98 Flashcards
 */
export function searchContent(query: string, limit: number = 30): SearchResultItem[] {
  const cleanQ = query.trim();
  if (!cleanQ || cleanQ.length < 2) return [];

  const results: SearchResultItem[] = [];

  // 1. Tìm trong các tiểu mục lý thuyết (Articles & Sections)
  for (const ch of allChapters) {
    for (const sec of ch.sections) {
      for (const art of sec.articles) {
        const artBody = Array.isArray(art.content) ? art.content.join(' ') : String(art.content);
        const fullText = `${art.title} ${artBody} ${art.keyPoints?.join(' ') || ''} ${art.keywords?.join(' ') || ''} ${art.lawCitations?.map(s => s.lawName + ' ' + s.article + ' ' + (s.contentSnippet || '')).join(' ') || ''}`;
        if (matchAllKeywords(fullText, cleanQ)) {
          const snippetText = artBody.length > 160 ? artBody.substring(0, 160) + '...' : artBody;
          const pStart = art.citations?.pageStart;
          const pEnd = art.citations?.pageEnd;
          results.push({
            type: 'article',
            chapterId: ch.id,
            chapterTitle: ch.title,
            articleId: art.id,
            id: art.id,
            title: `${art.code} ${art.title}`,
            snippet: snippetText,
            badge: `Chương ${ch.id} • ${pStart ? `Tr. ${pStart}${pEnd && pEnd !== pStart ? '-' + pEnd : ''}` : 'Lý thuyết'}`,
            sourcePage: pStart,
          });
        }
      }
    }
  }

  // 2. Tìm trong Ngân hàng 195 câu hỏi trắc nghiệm
  for (const q of allQuestions) {
    const ch = chaptersMap[q.chapterId];
    const expText = typeof q.explanation === 'string' ? q.explanation : `${q.explanation.summary} ${q.explanation.correctReason}`;
    const fullText = `${q.content} ${q.options.map(o => o.text).join(' ')} ${expText} ${q.tags?.join(' ') || ''}`;
    if (matchAllKeywords(fullText, cleanQ)) {
      results.push({
        type: 'question',
        chapterId: q.chapterId,
        chapterTitle: ch ? ch.title : `Chương ${q.chapterId}`,
        articleId: q.articleId,
        id: q.id,
        title: q.content,
        snippet: `Đáp án: ${q.correctAnswers.join(', ')} • ${expText.substring(0, 140)}...`,
        badge: `Câu hỏi Ch${q.chapterId} • ${q.difficulty === 'easy' ? 'Dễ' : q.difficulty === 'medium' ? 'Trung bình' : 'Khó'}`,
        sourcePage: q.sourcePage,
      });
    }
  }

  // 3. Tìm trong 98 Thẻ ghi nhớ Flashcards
  for (const fc of allFlashcards) {
    const ch = chaptersMap[fc.chapterId];
    const fullText = `${fc.term} ${fc.definition} ${fc.keyPoints?.join(' ') || ''} ${fc.examTip || ''}`;
    if (matchAllKeywords(fullText, cleanQ)) {
      results.push({
        type: 'flashcard',
        chapterId: fc.chapterId,
        chapterTitle: ch ? ch.title : `Chương ${fc.chapterId}`,
        articleId: fc.articleId,
        id: fc.id,
        title: fc.term,
        snippet: fc.definition.length > 140 ? fc.definition.substring(0, 140) + '...' : fc.definition,
        badge: `Flashcard Ch${fc.chapterId} • ${fc.bookPage ? `Tr. ${fc.bookPage}` : 'Thuật ngữ'}`,
        sourcePage: fc.bookPage,
      });
    }
  }

  return results.slice(0, limit);
}
