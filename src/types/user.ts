/**
 * src/types/user.ts
 * Đặc tả dữ liệu lưu trữ bền vững của người học trên LocalStorage
 * Khóa lưu trữ: hcmute_law_progress_v1
 */
import { OptionId } from './question';
import { MasteryLevel } from './flashcard';
import { ExamGrade } from './exam';

/**
 * Bản ghi câu hỏi làm sai (Sổ tay câu sai / Mistake Notebook)
 */
export interface MistakeRecord {
  /** ID câu hỏi */
  questionId: string;
  /** Thuộc chương nào */
  chapterId: number;
  /** Thời điểm làm sai lần đầu (epoch ms) */
  firstFailedAt: number;
  /** Thời điểm làm sai lần gần nhất (epoch ms) */
  lastAttemptAt: number;
  /** Số lần làm sai lũy kế */
  wrongCount: number;
  /** Chỉ số phương án chọn sai (0: A, 1: B, 2: C, 3: D) - Tương thích PROJECT.md line 136 */
  chosenOptionIndex: number;
  /** Ký tự phương án chọn sai gần nhất */
  lastChosenOption?: OptionId;
  /** Đã khắc phục (trả lời đúng lại trong sổ tay câu sai) chưa */
  resolved: boolean;
  /** Số lần luyện tập lại */
  retryCount?: number;
}

/**
 * Bản ghi câu hỏi đánh dấu ghi nhớ (Bookmark)
 */
export interface Bookmark {
  questionId: string;
  chapterId: number;
  bookmarkedAt: number;
  note?: string;
}

/**
 * Lịch sử tóm tắt bài thi đã làm
 */
export interface ExamHistoryRecord {
  id: string;
  date: number;             // Timestamp làm bài
  score: number;            // Điểm thang 10
  total: number;            // Tổng số câu
  correct: number;          // Số câu đúng
  durationSeconds: number;  // Thời gian hoàn thành
  passed: boolean;          // Đạt / Không đạt
  grade: ExamGrade;         // Xếp loại
}

/**
 * Trạng thái tiến độ toàn diện được lưu vào LocalStorage
 * BẮT BUỘC tương thích 100% với hợp đồng tại PROJECT.md line 132-140
 */
export interface UserProgressState {
  /** Phiên bản dữ liệu, hỗ trợ migration */
  version: number;
  /** Danh sách ID các câu hỏi đã từng trả lời */
  completedQuestionIds: string[];
  /** Danh sách ID các câu hỏi đã trả lời đúng */
  correctQuestionIds: string[];
  /** Danh sách ID các câu hỏi được đánh dấu yêu thích */
  bookmarkedQuestionIds: string[];
  /** Sổ tay câu sai: Record<questionId, MistakeRecord> */
  mistakes: Record<string, MistakeRecord>;
  /** Lịch sử các lần thi thử */
  examHistory: ExamHistoryRecord[];
  /** Trạng thái nhớ thẻ flashcard: Record<cardId, 'mastered' | 'review'> */
  flashcardMastery: Record<string, MasteryLevel>;
  /** Giao diện sáng / tối */
  theme: 'light' | 'dark';
  /** Tự động mở Drawer tra cứu khi làm sai trắc nghiệm */
  autoOpenDrawerOnWrong: boolean;
  /** Bật âm thanh hiệu ứng đúng/sai */
  soundEnabled: boolean;
  /** Chương học gần nhất */
  lastActiveChapterId?: number;
  /** Thời điểm cập nhật cuối cùng */
  updatedAt: number;
}
