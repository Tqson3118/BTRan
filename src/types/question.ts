/**
 * src/types/question.ts
 * Đặc tả ngân hàng câu hỏi trắc nghiệm 4 lựa chọn (MCQ)
 */

/** Mức độ khó của câu hỏi trắc nghiệm */
export type Difficulty = 'easy' | 'medium' | 'hard';

/** Loại câu hỏi: chọn 1 đáp án hoặc chọn nhiều đáp án đúng */
export type QuestionType = 'single' | 'multiple';

/** Định danh phương án trả lời */
export type OptionId = 'A' | 'B' | 'C' | 'D' | 'E';

/** Phương án lựa chọn */
export interface Option {
  id: OptionId;
  text: string;
}

/**
 * Giải thích chi tiết và phân tích bẫy đề thi
 */
export interface DetailedExplanation {
  /** Tóm tắt cốt lõi trong 1-2 câu ngắn gọn */
  summary: string;
  /** Lý giải căn cứ vì sao phương án đúng là chính xác */
  correctReason: string;
  /** Phân tích chi tiết vì sao các phương án còn lại là phương án nhiễu (sai) */
  distractorAnalysis?: Partial<Record<OptionId, string>>;
  /** Trích dẫn điều luật trực tiếp làm căn cứ */
  lawCitation?: string;
  /** Trích dẫn số trang giáo trình HCMUTE 2023 */
  bookCitation?: {
    page: number;
    quote?: string;
  };
  /** Cảnh báo bẫy thi thường gặp mà sinh viên hay mắc sai lầm */
  trapWarning?: string;
}

export type Explanation = string | DetailedExplanation;

/**
 * Cấu trúc hoàn chỉnh của một Câu hỏi trắc nghiệm
 */
export interface Question {
  /** Định danh duy nhất: ví dụ "q-ch1-001", "q-ch4-025" */
  id: string;
  /** Số chương trực thuộc (1 đến 7) */
  chapterId: number;
  /** ID mục lớn (Section) */
  sectionId?: string;
  /** ID tiểu mục lý thuyết (Article) để liên kết mở Drawer tra cứu tức thời */
  articleId: string;
  /** Nội dung câu hỏi (lý thuyết hoặc tình huống pháp lý thực tiễn) */
  content: string;
  /** Loại câu hỏi: 'single' = chọn 1 đáp án đúng, 'multiple' = chọn tất cả đáp án đúng */
  questionType: QuestionType;
  /** Hỗ trợ tương thích chuẩn type: 'single' | 'multiple' */
  type?: 'single' | 'multiple';
  /** Gồm 4 phương án A, B, C, D (hoặc 5 cho câu multiple) */
  options: Option[];
  /** Đáp án chính xác theo mã chữ cái — 1 phần tử cho 'single', nhiều phần tử cho 'multiple' */
  correctAnswers: OptionId[];
  /** Chỉ số đáp án chính xác (0-indexed: 0=A, 1=B, 2=C, 3=D, tùy chọn cho single-choice) */
  correctOption?: number;
  /** Danh sách chỉ số đáp án đúng (cho câu hỏi multiple hoặc kiểm tra mảng) */
  correctOptions?: number[];
  /** Lời giải thích tường minh */
  explanation: Explanation;
  /** Độ khó: easy (30%), medium (50%), hard (20%) */
  difficulty: Difficulty;
  /** Nhãn chủ đề phục vụ lọc và tìm kiếm */
  tags: string[];
  /** Từ khóa trọng tâm cần highlight trong Drawer khi mở lý thuyết */
  keyTerm?: string;
  /** Số trang đối chiếu trong giáo trình HCMUTE 2023 */
  sourcePage?: number;
  /** Điều luật tham chiếu ngắn gọn */
  statuteRef?: string;
}

/**
 * Bộ lọc câu hỏi cho giao diện Luyện tập
 */
export interface QuestionFilter {
  chapterId?: number;
  difficulty?: Difficulty | 'all';
  status?: 'all' | 'unanswered' | 'answered' | 'correct' | 'wrong' | 'bookmarked';
  tag?: string;
  searchQuery?: string;
}

/**
 * Thống kê phân bố câu hỏi
 */
export interface QuestionStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  byChapter: Record<number, number>;
}
