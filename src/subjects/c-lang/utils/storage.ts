/**
 * src/subjects/c-lang/utils/storage.ts
 * Bộ máy lưu trữ tiến độ học tập môn Lập trình C/C++ (HCMUTE)
 * Khóa lưu trữ LocalStorage: hcmute_clang_progress_v1
 */

export const STORAGE_KEY_CLANG_PROGRESS = 'hcmute_clang_progress_v1';
export const STORAGE_KEY_CLANG_ACTIVE_EXAM = 'hcmute_clang_active_exam_v1';

export interface CExamHistoryRecord {
  id: string;
  timestamp: number;
  score: number;
  totalQuestions: number;
  correctCount: number;
  durationSeconds: number;
  answers: Record<string, string>;
  isPreset: boolean;
}

export interface CActiveExamSession {
  examId: string;
  startTime: number;
  durationMinutes: number;
  questionIds: string[];
  userAnswers: Record<string, string>;
  flaggedQuestionIds: string[];
  isPreset: boolean;
}

export interface CUserProgress {
  version: number;
  lastUpdated: number;
  completedQuestionIds: string[];
  correctQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  mistakes: Record<
    string,
    {
      questionId: string;
      chapterId: number;
      wrongCount: number;
      lastAttemptTimestamp: number;
      isResolved: boolean;
    }
  >;
  flashcardMastery: Record<string, 'learning' | 'reviewing' | 'mastered'>;
  essayDrafts: Record<string, string>; // essayId -> userCode
  examHistory: CExamHistoryRecord[];
}

export const DEFAULT_CLANG_PROGRESS: CUserProgress = {
  version: 1,
  lastUpdated: Date.now(),
  completedQuestionIds: [],
  correctQuestionIds: [],
  bookmarkedQuestionIds: [],
  mistakes: {},
  flashcardMastery: {},
  essayDrafts: {},
  examHistory: [],
};

class InMemoryStorage implements Storage {
  private store = new Map<string, string>();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number): string | null {
    return Array.from(this.store.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
}

const inMemoryFallback = new InMemoryStorage();

export function getSafeCStorage(type: 'localStorage' | 'sessionStorage' = 'localStorage'): Storage {
  if (typeof window !== 'undefined') {
    try {
      const storage = window[type];
      const testKey = '__c_storage_test__';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return storage;
    } catch {
      return inMemoryFallback;
    }
  }
  return inMemoryFallback;
}

/**
 * Nạp tiến độ học tập Lập trình C từ LocalStorage (tự phục hồi nếu file JSON lỗi)
 */
export function loadCLangProgress(): CUserProgress {
  const storage = getSafeCStorage();
  if (!storage) return { ...DEFAULT_CLANG_PROGRESS };

  try {
    const raw = storage.getItem(STORAGE_KEY_CLANG_PROGRESS);
    if (!raw) return { ...DEFAULT_CLANG_PROGRESS };

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return { ...DEFAULT_CLANG_PROGRESS };
    }

    return {
      version: parsed.version || 1,
      lastUpdated: parsed.lastUpdated || Date.now(),
      completedQuestionIds: Array.isArray(parsed.completedQuestionIds) ? parsed.completedQuestionIds : [],
      correctQuestionIds: Array.isArray(parsed.correctQuestionIds) ? parsed.correctQuestionIds : [],
      bookmarkedQuestionIds: Array.isArray(parsed.bookmarkedQuestionIds) ? parsed.bookmarkedQuestionIds : [],
      mistakes: parsed.mistakes && typeof parsed.mistakes === 'object' ? parsed.mistakes : {},
      flashcardMastery: parsed.flashcardMastery && typeof parsed.flashcardMastery === 'object' ? parsed.flashcardMastery : {},
      essayDrafts: parsed.essayDrafts && typeof parsed.essayDrafts === 'object' ? parsed.essayDrafts : {},
      examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
    };
  } catch (err) {
    console.warn('[C-Storage] Dữ liệu lưu trữ lỗi, tự phục hồi mặc định:', err);
    return { ...DEFAULT_CLANG_PROGRESS };
  }
}

/**
 * Lưu tiến độ học tập Lập trình C
 */
export function saveCLangProgress(progress: CUserProgress): void {
  const storage = getSafeCStorage();
  if (!storage) return;

  try {
    progress.lastUpdated = Date.now();
    storage.setItem(STORAGE_KEY_CLANG_PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('[C-Storage] Lỗi khi lưu dữ liệu:', err);
  }
}

/**
 * Ghi nhận kết quả trả lời một câu hỏi trắc nghiệm
 */
export function recordCQuestionAnswer(
  questionId: string,
  chapterId: number,
  _selectedOption: string,
  isCorrect: boolean
): CUserProgress {
  const current = loadCLangProgress();

  if (!current.completedQuestionIds.includes(questionId)) {
    current.completedQuestionIds.push(questionId);
  }

  if (isCorrect) {
    if (!current.correctQuestionIds.includes(questionId)) {
      current.correctQuestionIds.push(questionId);
    }
    if (current.mistakes[questionId]) {
      current.mistakes[questionId].isResolved = true;
      current.mistakes[questionId].lastAttemptTimestamp = Date.now();
    }
  } else {
    current.correctQuestionIds = current.correctQuestionIds.filter((id) => id !== questionId);
    if (!current.mistakes[questionId]) {
      current.mistakes[questionId] = {
        questionId,
        chapterId,
        wrongCount: 1,
        lastAttemptTimestamp: Date.now(),
        isResolved: false,
      };
    } else {
      current.mistakes[questionId].wrongCount += 1;
      current.mistakes[questionId].isResolved = false;
      current.mistakes[questionId].lastAttemptTimestamp = Date.now();
    }
  }

  saveCLangProgress(current);
  return current;
}

/**
 * Bật/tắt đánh dấu câu hỏi cần xem lại
 */
export function toggleCBookmark(questionId: string): CUserProgress {
  const current = loadCLangProgress();
  if (current.bookmarkedQuestionIds.includes(questionId)) {
    current.bookmarkedQuestionIds = current.bookmarkedQuestionIds.filter((id) => id !== questionId);
  } else {
    current.bookmarkedQuestionIds.push(questionId);
  }
  saveCLangProgress(current);
  return current;
}

/**
 * Cập nhật mức độ ghi nhớ Flashcard
 */
export function updateCFlashcardMastery(
  cardId: string,
  level: 'learning' | 'reviewing' | 'mastered'
): CUserProgress {
  const current = loadCLangProgress();
  current.flashcardMastery[cardId] = level;
  saveCLangProgress(current);
  return current;
}

/**
 * Lưu mã nguồn bài làm tự luận của người dùng
 */
export function saveCEssayDraft(essayId: string, code: string): CUserProgress {
  const current = loadCLangProgress();
  current.essayDrafts[essayId] = code;
  saveCLangProgress(current);
  return current;
}

/**
 * Lưu kết quả thi thử vào lịch sử
 */
export function recordCExamResult(result: Omit<CExamHistoryRecord, 'id' | 'timestamp'>): CUserProgress {
  const current = loadCLangProgress();
  const record: CExamHistoryRecord = {
    ...result,
    id: `c-exam-${Date.now()}`,
    timestamp: Date.now(),
  };
  current.examHistory.unshift(record);
  saveCLangProgress(current);
  return current;
}

/**
 * Đặt lại toàn bộ dữ liệu môn học
 */
export function resetCLangProgress(): CUserProgress {
  const storage = getSafeCStorage();
  if (storage) {
    storage.removeItem(STORAGE_KEY_CLANG_PROGRESS);
    storage.removeItem(STORAGE_KEY_CLANG_ACTIVE_EXAM);
  }
  return { ...DEFAULT_CLANG_PROGRESS };
}
