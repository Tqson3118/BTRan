/**
 * src/types/exam.ts
 * Đặc tả máy trạng thái và kết quả mô phỏng Kỳ thi trắc nghiệm
 */
import { Question, OptionId, Option, Explanation } from './question';

/** Trạng thái vòng đời phiên thi */
export type ExamStatus = 'idle' | 'in_progress' | 'submitted' | 'expired';

/** Xếp loại kết quả thi */
export type ExamGrade = 'Xuất sắc' | 'Giỏi' | 'Khá' | 'Trung bình' | 'Cần ôn luyện';

/**
 * Cấu hình khởi tạo đề thi
 */
export interface ExamConfig {
  /** Số lượng câu hỏi (mặc định: 40 câu; tùy chọn: 20, 30, 40, 60) */
  questionCount: number;
  /** Thời gian làm bài tính theo phút (mặc định: 50 phút; tương ứng 75s/câu) */
  durationMinutes: number;
  /** Danh sách các chương tham gia sinh đề (mặc định: [1, 2, 3, 4, 5, 6, 7]) */
  chapterIds: number[];
  /** Tỷ lệ phân bổ độ khó (mặc định: 30% dễ, 50% vừa, 20% khó) */
  difficultyDistribution?: {
    easyPercent: number;
    mediumPercent: number;
    hardPercent: number;
  };
  /** Có xáo trộn thứ tự câu hỏi không (mặc định: true) */
  shuffleQuestions: boolean;
  /** Có xáo trộn thứ tự phương án A, B, C, D không (mặc định: false) */
  shuffleOptions: boolean;
}

/**
 * Phiên thi thử đang hoạt động (Đồng bộ vào sessionStorage)
 */
export interface ExamSession {
  /** Mã định danh phiên thi, ví dụ "exam_1730001234567" */
  id: string;
  /** Cấu hình áp dụng cho đề thi này */
  config: ExamConfig;
  /** Danh sách câu hỏi đã được chọn và xáo trộn */
  questions: Question[];
  /** Bảng phương án thí sinh đã chọn: { [questionId]: 'A' hoặc ['A', 'B'] } */
  userAnswers: Record<string, OptionId | OptionId[]>;
  /** Danh sách questionId được thí sinh đánh dấu cắm cờ xem lại */
  flaggedQuestionIds: string[];
  /** Thời điểm bắt đầu tính theo epoch ms */
  startedAt: number;
  /** Tổng thời gian tính bằng giây */
  totalSeconds: number;
  /** Số giây còn lại (đếm ngược mỗi giây) */
  remainingSeconds: number;
  /** Trạng thái hiện tại */
  status: ExamStatus;
  /** Vị trí câu hỏi đang xem trên giao diện (0-indexed) */
  currentQuestionIndex: number;
}

/**
 * Chi tiết kết quả từng câu hỏi sau khi nộp bài
 */
export interface ExamQuestionResult {
  questionId: string;
  chapterId: number;
  articleId: string;
  questionContent: string;
  options: Option[];
  userAnswer?: OptionId | OptionId[];
  correctAnswer?: OptionId;
  correctAnswers?: OptionId[];
  isCorrect: boolean;
  explanation: Explanation;
  tags: string[];
}

/**
 * Phân tích điểm số theo từng chương
 */
export interface ChapterScoreBreakdown {
  chapterId: number;
  chapterTitle: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  scoreRatio: number; // Tỷ lệ đúng (0.0 đến 1.0)
}

/**
 * Kết quả chung cuộc của bài thi
 */
export interface ExamResult {
  /** Khóa trùng với ExamSession.id */
  id: string;
  /** Thời điểm hoàn thành thi (epoch ms) */
  examDate: number;
  /** Cấu hình đề đã thi */
  config: ExamConfig;
  /** Tổng số câu trong đề */
  totalQuestions: number;
  /** Số câu trả lời đúng */
  correctCount: number;
  /** Số câu trả lời sai */
  wrongCount: number;
  /** Số câu chưa làm */
  unansweredCount: number;
  /** Điểm số thang điểm 10 (làm tròn 2 chữ số thập phân, ví dụ: 8.75) */
  score10: number;
  /** Xếp loại tốt nghiệp/học phần */
  grade: ExamGrade;
  /** Đạt hay Không đạt (điểm >= 5.0) */
  passed: boolean;
  /** Thời gian thực tế đã làm bài tính bằng giây */
  timeSpentSeconds: number;
  /** Đánh giá năng lực theo từng chương */
  chapterBreakdown: Record<number, ChapterScoreBreakdown>;
  /** Danh sách kết quả chi tiết từng câu */
  questionResults: ExamQuestionResult[];
}
