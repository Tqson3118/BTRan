/**
 * src/subjects/c-lang/types/index.ts
 * Type definitions chuyên biệt cho môn Lập trình C/C++ (HCMUTE)
 */

export type Difficulty = 'easy' | 'medium' | 'hard';
export type OptionId = 'A' | 'B' | 'C' | 'D';
export type QuestionType = 'single' | 'multiple' | 'single_choice' | 'multiple_choice';

/**
 * Đơn vị tiểu mục lý thuyết Lập trình C (Article)
 */
export interface CArticle {
  id: string;              // e.g. "c-art-ch1-01"
  code: string;            // e.g. "1.1"
  title: string;           // Tiêu đề tiểu mục
  content: string[];       // Nội dung lý thuyết chi tiết
  keyPoints: string[];     // Các điểm cốt lõi cần nhớ
  codeExamples?: {
    title: string;
    code: string;
    explanation?: string;
  }[];
  citations: {
    uttPage: string;       // Trang giáo trình UTT (591 trang)
    hcmutePage: string;    // Trang giáo trình HCMUTE (211 trang)
  };
}

/**
 * Mục lớn lý thuyết (Section)
 */
export interface CSection {
  id: string;              // e.g. "c-sec-ch1-01"
  code: string;            // e.g. "1.1"
  title: string;
  articles: CArticle[];
}

/**
 * Cấu trúc Chương học Lập trình C (Chapter)
 */
export interface CChapter {
  id: number;              // 1 đến 9
  slug: string;            // e.g. "tong-quan-ngon-ngu-c"
  title: string;           // Tiêu đề chương
  description: string;     // Mô tả ngắn
  totalMCQ: number;        // Tổng số câu trắc nghiệm
  totalFlashcards: number; // Tổng số flashcards
  totalEssays: number;     // Tổng số bài tự luận
  sections: CSection[];
  citations: {
    uttPage: string;
    hcmutePage: string;
  };
}

/**
 * Định dạng câu hỏi trắc nghiệm đặc thù của Lập trình C
 */
export type CQuestionSubtype = 'theory' | 'output' | 'debug' | 'fill-in';

export interface COption {
  id: OptionId;            // 'A' | 'B' | 'C' | 'D'
  text: string;
}

/**
 * Câu hỏi trắc nghiệm Lập trình C (tương thích ngược với Question của hệ thống)
 */
export interface CQuestion {
  id: string;                          // e.g. "c-q-ch1-001"
  chapterId: number;                   // 1 đến 9
  articleId: string;                   // Link tới CArticle để tra cứu Drawer
  content: string;                     // Nội dung câu hỏi
  questionType: QuestionType;          // 'single' | 'multiple'
  questionSubtype: CQuestionSubtype;   // 'theory' | 'output' | 'debug' | 'fill-in'
  difficulty: Difficulty;              // 'easy' | 'medium' | 'hard'
  codeSnippet?: string;                // Khối code C/C++ minh họa nếu có
  targetOutput?: string;               // Output mong đợi (cho câu dạng fill-in/output)
  options: COption[];
  correctAnswers: OptionId[];          // ['A'] hoặc ['A', 'B']
  explanation: string;                 // Lời giải thích chi tiết & bẫy đề thi
  tags: string[];
  reference: {
    uttPage: string;                   // Trang tham chiếu UTT
    hcmutePage: string;                // Trang tham chiếu HCMUTE
    section?: string;
  };
  mockExamPreset?: boolean;            // Thuộc đề thi thử chuẩn 45 câu / 90 phút
}

/**
 * Thẻ ghi nhớ Flashcard cho Lập trình C
 */
export interface CFlashcard {
  id: string;                          // e.g. "c-fc-ch1-001"
  chapterId: number;                   // 1 đến 9
  question: string;                    // Tương thích: Mặt trước (Khái niệm/Cú pháp)
  answer: string;                      // Tương thích: Mặt sau (Giải thích)
  frontConcept: string;                // Khái niệm cốt lõi mặt trước
  backDefinition: string;              // Định nghĩa ngắn gọn mặt sau (< 50 từ)
  codeHighlight?: string;              // Code ví dụ 3-6 dòng làm sáng tỏ
  referencePage: string;               // Trang giáo trình đối chiếu
  masteryLevel?: 'learning' | 'reviewing' | 'mastered';
  tags: string[];
}

/**
 * Bài tập tự luận lập trình (Programming Essay)
 */
export interface CEssay {
  id: string;                          // e.g. "PROG-01-01"
  chapterId: number;                   // 1 đến 9
  title: string;                       // Tiêu đề bài toán
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;                 // Đề bài chi tiết
  inputExample: string;                // Ví dụ đầu vào
  outputExample: string;               // Ví dụ đầu ra
  guidance: string[];                  // Hướng dẫn giải thuật từng bước
  starterCode?: string;                // Mã khung ban đầu cho thí sinh viết
  referenceCode: string;               // Lời giải mẫu chuẩn GCC/G++
  explanation?: string;                // Phân tích độ phức tạp O(N), bộ nhớ, lưu ý bẫy
  tags: string[];
}

/**
 * Cấu hình đề thi thử C/C++
 */
export interface CExamConfig {
  durationMinutes: number;             // Mặc định 90 phút
  questionCount: number;               // Mặc định 45 câu
}
