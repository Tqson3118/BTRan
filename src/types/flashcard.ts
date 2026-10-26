/**
 * src/types/flashcard.ts
 * Đặc tả hệ thống Thẻ ghi nhớ nhanh (Flashcards) 2 mặt
 */

/** Trạng thái làm chủ thẻ của người học */
export type MasteryLevel = 'review' | 'mastered' | 'new';

/**
 * Thẻ ghi nhớ thuật ngữ cốt lõi
 */
export interface Flashcard {
  /** Định danh duy nhất: ví dụ "fc-ch1-001", "fc-ch3-010" */
  id: string;
  /** Thuộc chương nào (1 đến 7) */
  chapterId: number;
  /** Liên kết tới Article để mở Drawer tra cứu sâu */
  articleId?: string;
  /** Mặt trước: Thuật ngữ / Khái niệm / Tình huống ngắn */
  term: string;
  /** Mặt sau: Định nghĩa chuẩn mực trích từ giáo trình HCMUTE */
  definition: string;
  /** Các ý cốt lõi hoặc dấu hiệu đặc trưng cần ghi nhớ */
  keyPoints?: string[];
  /** Căn cứ pháp lý điều luật */
  lawCitation?: string;
  /** Trang giáo trình HCMUTE 2023 */
  bookPage?: number;
  /** Mẹo nhớ nhanh hoặc lưu ý tránh bẫy */
  examTip?: string;
  /** Nhãn chủ đề */
  tags?: string[];
}

/**
 * Trạng thái của một phiên học thẻ
 */
export interface FlashcardDeckState {
  chapterId: number | 'all';
  cardIds: string[];
  currentIndex: number;
  isFlipped: boolean;
  shuffled: boolean;
}
