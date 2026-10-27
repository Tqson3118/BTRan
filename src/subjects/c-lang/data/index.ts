/**
 * src/subjects/c-lang/data/index.ts
 * Trung tâm Dữ liệu Toàn diện Môn học Lập trình C/C++ (HCMUTE)
 * Hợp nhất 9 Chương Lý thuyết, 270 Câu hỏi Trắc nghiệm, 125 Flashcards & 32 Tự luận
 */

import type { CChapter, CQuestion, CFlashcard, CEssay, CExamConfig } from '../types/index';

// 1. Re-export Chapters
export * from './chapters/index';

// 2. Re-export Questions
export * from './questions/index';

// 3. Re-export Flashcards
export * from './flashcards/index';

// 4. Re-export Essays
export * from './essays/index';

import { allCChapters } from './chapters/index';
import { allCQuestions, cMockExamQuestions, cQuestionsByChapter } from './questions/index';
import { allCFlashcards } from './flashcards/index';
import { allCEssays } from './essays/index';

/**
 * Chuẩn hóa chuỗi tiếng Việt bỏ dấu thanh & viết thường để tìm kiếm không dấu
 */
export function removeVietnameseTones(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

/**
 * Kết quả tìm kiếm dữ liệu Lập trình C
 */
export interface CSearchResult {
  query: string;
  totalMatches: number;
  questions: CQuestion[];
  flashcards: CFlashcard[];
  essays: CEssay[];
  chapters: {
    chapter: CChapter;
    matchedSections: string[];
  }[];
}

/**
 * Công cụ tìm kiếm chuyên sâu trong bộ nhớ (In-memory Search Index)
 * Hỗ trợ tra cứu tiếng Việt có dấu, không dấu, từ khóa mã lệnh C/C++
 */
export function searchCContent(query: string, limit = 20): CSearchResult {
  const normalizedQuery = removeVietnameseTones(query);
  if (!normalizedQuery) {
    return {
      query,
      totalMatches: 0,
      questions: [],
      flashcards: [],
      essays: [],
      chapters: [],
    };
  }

  const queryTerms = normalizedQuery.split(/\s+/).filter(t => t.length > 0);

  const matchesAllTerms = (text: string): boolean => {
    const normText = removeVietnameseTones(text);
    return queryTerms.every(term => normText.includes(term));
  };

  // 1. Tìm trong Questions
  const matchedQuestions = allCQuestions.filter((q: CQuestion) => {
    return (
      matchesAllTerms(q.content) ||
      matchesAllTerms(q.explanation) ||
      (q.codeSnippet && matchesAllTerms(q.codeSnippet)) ||
      q.tags.some((t: string) => matchesAllTerms(t)) ||
      q.options.some((opt: { text: string }) => matchesAllTerms(opt.text))
    );
  }).slice(0, limit);

  // 2. Tìm trong Flashcards
  const matchedFlashcards = allCFlashcards.filter((f: CFlashcard) => {
    return (
      matchesAllTerms(f.frontConcept) ||
      matchesAllTerms(f.backDefinition) ||
      matchesAllTerms(f.question) ||
      matchesAllTerms(f.answer) ||
      (f.codeHighlight && matchesAllTerms(f.codeHighlight)) ||
      f.tags.some((t: string) => matchesAllTerms(t))
    );
  }).slice(0, limit);

  // 3. Tìm trong Essays
  const matchedEssays = allCEssays.filter((e: CEssay) => {
    return (
      matchesAllTerms(e.title) ||
      matchesAllTerms(e.description) ||
      matchesAllTerms(e.referenceCode) ||
      (e.explanation && matchesAllTerms(e.explanation)) ||
      e.tags.some((t: string) => matchesAllTerms(t)) ||
      e.guidance.some((g: string) => matchesAllTerms(g))
    );
  }).slice(0, limit);

  // 4. Tìm trong Chapters
  const matchedChapters: { chapter: CChapter; matchedSections: string[] }[] = [];
  for (const ch of allCChapters) {
    const matchedSections: string[] = [];
    if (matchesAllTerms(ch.title) || matchesAllTerms(ch.description)) {
      matchedSections.push('Tổng quan chương');
    }
    for (const sec of ch.sections) {
      if (matchesAllTerms(sec.title)) {
        matchedSections.push(sec.title);
      }
      for (const art of sec.articles) {
        if (
          matchesAllTerms(art.title) ||
          art.keyPoints.some(kp => matchesAllTerms(kp)) ||
          art.content.some(c => matchesAllTerms(c))
        ) {
          if (!matchedSections.includes(sec.title)) {
            matchedSections.push(`${sec.title} > ${art.title}`);
          }
        }
      }
    }
    if (matchedSections.length > 0) {
      matchedChapters.push({ chapter: ch, matchedSections });
    }
  }

  const totalMatches =
    matchedQuestions.length +
    matchedFlashcards.length +
    matchedEssays.length +
    matchedChapters.length;

  return {
    query,
    totalMatches,
    questions: matchedQuestions,
    flashcards: matchedFlashcards,
    essays: matchedEssays,
    chapters: matchedChapters,
  };
}

/**
 * Cấu hình đề thi thử chuẩn HCMUTE
 */
export const DEFAULT_C_EXAM_CONFIG: CExamConfig = {
  durationMinutes: 90,
  questionCount: 45,
};

/**
 * Phân bổ số câu chuẩn cho đề thi thử 45 câu / 90 phút theo từng chương:
 * Ch1: 3, Ch2: 5, Ch3: 6, Ch4: 5, Ch5: 6, Ch6: 6, Ch7: 5, Ch8: 4, Ch9: 5 = 45 câu
 */
export const MOCK_EXAM_CHAPTER_QUOTA: Record<number, number> = {
  1: 3,
  2: 5,
  3: 6,
  4: 5,
  5: 6,
  6: 6,
  7: 5,
  8: 4,
  9: 5,
};

/**
 * Bộ tạo đề thi thử Lập trình C/C++ chuẩn 45 câu / 90 phút
 * @param usePreset Nếu true, sử dụng 45 câu được tuyển chọn sư phạm đặc biệt (mockExamPreset).
 *                  Nếu false, lấy mẫu ngẫu nhiên theo đúng tỷ lệ quota chuẩn của đề thi trường.
 */
export function generateCMockExamSession(usePreset = true): {
  config: CExamConfig;
  questions: CQuestion[];
} {
  if (usePreset) {
    return {
      config: DEFAULT_C_EXAM_CONFIG,
      questions: [...cMockExamQuestions],
    };
  }

  // Lấy mẫu theo đúng quota từng chương
  const selected: CQuestion[] = [];
  for (let chId = 1; chId <= 9; chId++) {
    const quota = MOCK_EXAM_CHAPTER_QUOTA[chId] || 5;
    const pool = [...(cQuestionsByChapter[chId] || [])];

    // Thuật toán xáo trộn Fisher-Yates
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    selected.push(...pool.slice(0, quota));
  }

  return {
    config: DEFAULT_C_EXAM_CONFIG,
    questions: selected,
  };
}

/**
 * Thống kê tổng hợp số liệu dữ liệu môn Lập trình C
 */
export function getCLangStatistics() {
  const byChapter: Record<
    number,
    {
      title: string;
      questions: number;
      flashcards: number;
      essays: number;
      mockQuestions: number;
    }
  > = {};

  for (let ch = 1; ch <= 9; ch++) {
    const chObj = allCChapters.find(c => c.id === ch);
    const qs = cQuestionsByChapter[ch] || [];
    const fcs = allCFlashcards.filter(f => f.chapterId === ch);
    const ess = allCEssays.filter(e => e.chapterId === ch);
    const mocks = qs.filter(q => q.mockExamPreset === true);

    byChapter[ch] = {
      title: chObj ? chObj.title : `Chương ${ch}`,
      questions: qs.length,
      flashcards: fcs.length,
      essays: ess.length,
      mockQuestions: mocks.length,
    };
  }

  return {
    totalChapters: allCChapters.length,
    totalQuestions: allCQuestions.length,
    totalFlashcards: allCFlashcards.length,
    totalEssays: allCEssays.length,
    totalMockQuestions: cMockExamQuestions.length,
    byChapter,
  };
}
