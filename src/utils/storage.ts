/**
 * src/utils/storage.ts
 * Bộ bọc an toàn tuyệt đối cho LocalStorage và SessionStorage
 * Đảm bảo ứng dụng 100% không bao giờ crash vì lỗi lưu trữ hoặc dữ liệu hỏng.
 */
import type {
  UserProgressState,
  ExamResult,
  ExamSession,
  OptionId,
  MasteryLevel,
  ExamHistoryRecord,
} from '../types';

export type { UserProgressState };

// ============================================================================
// HẰNG SỐ KHÓA LƯU TRỮ CHUẨN
// ============================================================================
export const STORAGE_KEY_PROGRESS = 'hcmute_law_progress_v1';
export const STORAGE_KEY_EXAM_SESSION = 'hcmute_law_active_exam_v1';
export const STORAGE_KEY_BACKUP = 'hcmute_law_progress_backup';

// ============================================================================
// TRẠNG THÁI MẶC ĐỊNH AN TOÀN
// ============================================================================
export const DEFAULT_USER_PROGRESS: UserProgressState = Object.freeze({
  version: 1,
  completedQuestionIds: [],
  correctQuestionIds: [],
  bookmarkedQuestionIds: [],
  mistakes: {},
  examHistory: [],
  flashcardMastery: {},
  theme: 'light',
  autoOpenDrawerOnWrong: false,
  soundEnabled: true,
  lastActiveChapterId: 1,
  updatedAt: Date.now(),
});

// ============================================================================
// IN-MEMORY STORAGE FALLBACK (Khi trình duyệt chặn hoặc môi trường test)
// ============================================================================
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
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
}

// Singletons cho in-memory fallback
const memoryLocalStorage = new InMemoryStorage();
const memorySessionStorage = new InMemoryStorage();

/**
 * Kiểm tra Storage có hoạt động thật sự không
 */
function isStorageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const storage = window[type];
    if (!storage) return false;
    const testKey = '__storage_test_key__';
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (_e) {
    return false;
  }
}

/**
 * Lấy storage an toàn (Fallback sang InMemoryStorage nếu lỗi)
 */
export function getSafeStorage(type: 'localStorage' | 'sessionStorage'): Storage {
  if (isStorageAvailable(type)) {
    return window[type];
  }
  return type === 'localStorage' ? memoryLocalStorage : memorySessionStorage;
}

// ============================================================================
// CÁC HÀM VALIDATE VÀ SANITIZE DỮ LIỆU
// ============================================================================

/**
 * Đảm bảo dữ liệu đọc ra từ Storage luôn có cấu trúc hợp lệ và đầy đủ trường
 */
export function sanitizeUserProgress(raw: any): UserProgressState {
  if (!raw || typeof raw !== 'object') {
    return { ...DEFAULT_USER_PROGRESS, updatedAt: Date.now() };
  }

  return {
    version: typeof raw.version === 'number' ? raw.version : 1,
    completedQuestionIds: Array.isArray(raw.completedQuestionIds)
      ? Array.from(new Set(raw.completedQuestionIds.map(String)))
      : [],
    correctQuestionIds: Array.isArray(raw.correctQuestionIds)
      ? Array.from(new Set(raw.correctQuestionIds.map(String)))
      : [],
    bookmarkedQuestionIds: Array.isArray(raw.bookmarkedQuestionIds)
      ? Array.from(new Set(raw.bookmarkedQuestionIds.map(String)))
      : [],
    mistakes: (raw.mistakes && typeof raw.mistakes === 'object') ? raw.mistakes : {},
    examHistory: Array.isArray(raw.examHistory) ? raw.examHistory : [],
    flashcardMastery: (raw.flashcardMastery && typeof raw.flashcardMastery === 'object')
      ? raw.flashcardMastery
      : {},
    theme: raw.theme === 'dark' ? 'dark' : 'light',
    autoOpenDrawerOnWrong: Boolean(raw.autoOpenDrawerOnWrong),
    soundEnabled: raw.soundEnabled !== false, // Mặc định true
    lastActiveChapterId: (typeof raw.lastActiveChapterId === 'number' && raw.lastActiveChapterId >= 1 && raw.lastActiveChapterId <= 7)
      ? raw.lastActiveChapterId
      : 1,
    updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
  };
}

// ============================================================================
// TIẾN ĐỘ NGƯỜI HỌC (LOCALSTORAGE)
// ============================================================================

/**
 * Tải toàn bộ tiến độ người học.
 * Tự động hồi phục về DEFAULT_USER_PROGRESS nếu không có dữ liệu hoặc dữ liệu lỗi.
 */
export function loadUserProgress(): UserProgressState {
  const storage = getSafeStorage('localStorage');
  try {
    const raw = storage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) {
      return { ...DEFAULT_USER_PROGRESS };
    }
    const parsed = JSON.parse(raw);
    return sanitizeUserProgress(parsed);
  } catch (error) {
    console.warn('[Storage] Phát hiện dữ liệu lưu trữ hỏng, tự phục hồi mặc định:', error);
    try {
      // Sao lưu dữ liệu lỗi sang khóa phụ trước khi ghi đè
      const corrupted = storage.getItem(STORAGE_KEY_PROGRESS);
      if (corrupted) storage.setItem(STORAGE_KEY_BACKUP, corrupted);
    } catch (_) {}
    return { ...DEFAULT_USER_PROGRESS };
  }
}

/**
 * Ghi đè tiến độ người học vào storage một cách an toàn
 */
export function saveUserProgress(state: UserProgressState): boolean {
  const storage = getSafeStorage('localStorage');
  try {
    const payload = JSON.stringify({
      ...state,
      updatedAt: Date.now(),
    });
    storage.setItem(STORAGE_KEY_PROGRESS, payload);
    return true;
  } catch (error) {
    console.error('[Storage] Không thể ghi dữ liệu (có thể do tràn quota):', error);
    return false;
  }
}

/**
 * Cập nhật tiến độ theo mô hình Atomic Updater
 * Tránh triệt để race conditions giữa các component React
 */
export function updateUserProgress(
  updater: (prev: UserProgressState) => UserProgressState
): UserProgressState {
  const current = loadUserProgress();
  const next = updater(current);
  saveUserProgress(next);
  return next;
}

// ============================================================================
// CÁC HÀM TIỆN ÍCH NGHIỆP VỤ NGUYÊN TỬ (ATOMIC MUTATION HELPERS)
// ============================================================================

/**
 * Ghi nhận kết quả trả lời câu hỏi trắc nghiệm
 */
export function recordQuestionAnswer(
  questionId: string,
  chapterId: number,
  chosenOption: OptionId,
  isCorrect: boolean
): UserProgressState {
  return updateUserProgress((prev) => {
    // 1. Đánh dấu đã hoàn thành
    const completedSet = new Set(prev.completedQuestionIds);
    completedSet.add(questionId);

    // 2. Cập nhật danh sách đúng
    const correctSet = new Set(prev.correctQuestionIds);
    if (isCorrect) {
      correctSet.add(questionId);
    } else {
      correctSet.delete(questionId);
    }

    // 3. Cập nhật sổ tay câu sai
    const newMistakes = { ...prev.mistakes };
    const optionIndex = ['A', 'B', 'C', 'D'].indexOf(chosenOption);

    if (isCorrect) {
      // Nếu câu này từng làm sai mà nay đã trả lời đúng lại
      if (newMistakes[questionId]) {
        newMistakes[questionId] = {
          ...newMistakes[questionId],
          resolved: true,
          lastAttemptAt: Date.now(),
          retryCount: (newMistakes[questionId].retryCount || 0) + 1,
        };
      }
    } else {
      // Nếu làm sai: thêm hoặc tăng số lần sai
      const existing = newMistakes[questionId];
      newMistakes[questionId] = {
        questionId,
        chapterId,
        firstFailedAt: existing ? existing.firstFailedAt : Date.now(),
        lastAttemptAt: Date.now(),
        wrongCount: (existing ? existing.wrongCount : 0) + 1,
        chosenOptionIndex: optionIndex >= 0 ? optionIndex : 0,
        lastChosenOption: chosenOption,
        resolved: false,
        retryCount: existing ? (existing.retryCount || 0) + 1 : 0,
      };
    }

    return {
      ...prev,
      completedQuestionIds: Array.from(completedSet),
      correctQuestionIds: Array.from(correctSet),
      mistakes: newMistakes,
      lastActiveChapterId: chapterId,
      updatedAt: Date.now(),
    };
  });
}

/**
 * Đổi trạng thái Bookmark của một câu hỏi (Toggle)
 */
export function toggleBookmark(
  questionId: string,
  _chapterId?: number
): { state: UserProgressState; isBookmarked: boolean } {
  let isBookmarked = false;
  const state = updateUserProgress((prev) => {
    const set = new Set(prev.bookmarkedQuestionIds);
    if (set.has(questionId)) {
      set.delete(questionId);
      isBookmarked = false;
    } else {
      set.add(questionId);
      isBookmarked = true;
    }
    return {
      ...prev,
      bookmarkedQuestionIds: Array.from(set),
      updatedAt: Date.now(),
    };
  });
  return { state, isBookmarked };
}

/**
 * Xóa một câu hỏi ra khỏi sổ tay câu sai (khi người học đã thuộc)
 */
export function removeMistake(questionId: string): UserProgressState {
  return updateUserProgress((prev) => {
    if (!prev.mistakes[questionId]) return prev;
    const nextMistakes = { ...prev.mistakes };
    delete nextMistakes[questionId];
    return {
      ...prev,
      mistakes: nextMistakes,
      updatedAt: Date.now(),
    };
  });
}

/**
 * Xóa sạch sổ tay câu sai
 */
export function clearAllMistakes(): UserProgressState {
  return updateUserProgress((prev) => ({
    ...prev,
    mistakes: {},
    updatedAt: Date.now(),
  }));
}

/**
 * Cập nhật mức độ thuộc thẻ Flashcard ('mastered' hoặc 'review')
 */
export function updateFlashcardMastery(
  cardId: string,
  mastery: MasteryLevel
): UserProgressState {
  return updateUserProgress((prev) => ({
    ...prev,
    flashcardMastery: {
      ...prev.flashcardMastery,
      [cardId]: mastery,
    },
    updatedAt: Date.now(),
  }));
}

/**
 * Lưu kết quả thi thử vào lịch sử
 */
export function saveExamResult(result: ExamResult): UserProgressState {
  const historyItem: ExamHistoryRecord = {
    id: result.id,
    date: result.examDate,
    score: result.score10,
    total: result.totalQuestions,
    correct: result.correctCount,
    durationSeconds: result.timeSpentSeconds,
    passed: result.passed,
    grade: result.grade,
  };

  return updateUserProgress((prev) => ({
    ...prev,
    examHistory: [historyItem, ...prev.examHistory].slice(0, 50), // Lưu tối đa 50 bài thi gần nhất
    updatedAt: Date.now(),
  }));
}

/**
 * Xóa lịch sử thi thử
 */
export function clearExamHistory(): UserProgressState {
  return updateUserProgress((prev) => ({
    ...prev,
    examHistory: [],
    updatedAt: Date.now(),
  }));
}

/**
 * Chuyển đổi giao diện sáng / tối
 */
export function setTheme(theme: 'light' | 'dark'): UserProgressState {
  return updateUserProgress((prev) => ({
    ...prev,
    theme,
    updatedAt: Date.now(),
  }));
}

/**
 * Thiết lập tự động mở Drawer tra cứu khi làm sai
 */
export function setAutoOpenDrawerOnWrong(enabled: boolean): UserProgressState {
  return updateUserProgress((prev) => ({
    ...prev,
    autoOpenDrawerOnWrong: enabled,
    updatedAt: Date.now(),
  }));
}

/**
 * Xóa toàn bộ tiến độ học tập (Reset về trạng thái ban đầu)
 */
export function resetAllProgress(): UserProgressState {
  const fresh = { ...DEFAULT_USER_PROGRESS, updatedAt: Date.now() };
  saveUserProgress(fresh);
  return fresh;
}

/**
 * Xuất dữ liệu tiến độ ra chuỗi JSON (Backup)
 */
export function exportProgressAsJson(): string {
  const current = loadUserProgress();
  return JSON.stringify(current, null, 2);
}

/**
 * Nhập dữ liệu tiến độ từ chuỗi JSON (Restore)
 */
export function importProgressFromJson(jsonString: string): { success: boolean; error?: string } {
  try {
    const parsed = JSON.parse(jsonString);
    const sanitized = sanitizeUserProgress(parsed);
    saveUserProgress(sanitized);
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e?.message || 'Chuỗi JSON không hợp lệ' };
  }
}

// ============================================================================
// PHIÊN THI THỬ ĐANG CHẠY (SESSIONSTORAGE - CHỐNG MẤT KHI F5)
// ============================================================================

/**
 * Lưu trạng thái phiên thi thử đang diễn ra vào sessionStorage
 */
export function saveActiveExamSession(session: ExamSession): boolean {
  const storage = getSafeStorage('sessionStorage');
  try {
    storage.setItem(STORAGE_KEY_EXAM_SESSION, JSON.stringify(session));
    return true;
  } catch (error) {
    console.warn('[Storage] Không thể lưu active exam session:', error);
    return false;
  }
}

/**
 * Tải phiên thi thử đang chạy nếu có (để khôi phục lại khi F5)
 */
export function loadActiveExamSession(): ExamSession | null {
  const storage = getSafeStorage('sessionStorage');
  try {
    const raw = storage.getItem(STORAGE_KEY_EXAM_SESSION);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.status !== 'in_progress') return null;
    return parsed as ExamSession;
  } catch (_error) {
    return null;
  }
}

/**
 * Xóa phiên thi thử khỏi sessionStorage (khi đã nộp bài hoặc hủy)
 */
export function clearActiveExamSession(): void {
  const storage = getSafeStorage('sessionStorage');
  try {
    storage.removeItem(STORAGE_KEY_EXAM_SESSION);
  } catch (_) {}
}

/**
 * Kiểm tra xem có phiên thi thử đang dở dang không
 */
export function hasActiveExamSession(): boolean {
  return loadActiveExamSession() !== null;
}
