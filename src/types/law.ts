/**
 * src/types/law.ts
 * Đặc tả cấu trúc dữ liệu Giáo trình Pháp luật đại cương (HCMUTE 2023)
 */

/**
 * Trích dẫn điều luật chính thức từ văn bản QPPL
 */
export interface LawCitation {
  /** Tên văn bản QPPL, ví dụ: "Hiến pháp 2013", "Bộ luật Hình sự 2015", "Bộ luật Lao động 2019" */
  lawName: string;
  /** Điều luật, ví dụ: "Điều 8", "Điều 12", "Điều 644" */
  article: string;
  /** Khoản, ví dụ: "Khoản 1", "Khoản 2" */
  clause?: string;
  /** Điểm, ví dụ: "Điểm a", "Điểm c" */
  point?: string;
  /** Đoạn trích dẫn nguyên văn văn bản pháp lý */
  contentSnippet?: string;
}

/**
 * Trích dẫn trang tài liệu trong Giáo trình Pháp luật đại cương (HCMUTE - 2023)
 */
export interface BookCitation {
  /** Tiêu đề giáo trình */
  bookTitle: string;
  /** Trang bắt đầu trong bản PDF giáo trình (12 - 298) */
  pageStart: number;
  /** Trang kết thúc trong bản PDF giáo trình */
  pageEnd: number;
  /** Danh sách trang cụ thể nếu trích dẫn chi tiết */
  exactPages?: number[];
}

/**
 * Đơn vị tiểu mục lý thuyết chi tiết (Article)
 * Đây là mục tiêu cuộn và highlight màu vàng của Drawer tra cứu lý thuyết
 */
export interface Article {
  /** Định danh duy nhất: ví dụ "art-ch1-sec1-01", "art-ch2-sec2-03" */
  id: string;
  /** Mã mục phân cấp: ví dụ "1.1.1", "2.2.3", "4.3.1" */
  code: string;
  /** Tiêu đề tiểu mục */
  title: string;
  /** Các đoạn văn bản lý thuyết chính quy trích xuất từ giáo trình */
  content: string[];
  /** Các luận điểm cốt lõi sinh viên cần ghi nhớ */
  keyPoints: string[];
  /** Trích dẫn số trang giáo trình HCMUTE 2023 */
  citations: BookCitation;
  /** Các điều luật liên quan trực tiếp */
  lawCitations?: LawCitation[];
  /** Danh sách từ khóa phục vụ tìm kiếm và highlight nhấp nháy */
  keywords: string[];
}

/**
 * Đơn vị mục lớn trong chương (Section)
 */
export interface Section {
  /** Định danh mục lớn: ví dụ "sec-ch1-01", "sec-ch2-02" */
  id: string;
  /** Số thứ tự chương (1 đến 7) */
  chapterId: number;
  /** Số thứ tự la mã hoặc số nguyên (1, 2, 3...) */
  order: number;
  /** Tiêu đề mục lớn: ví dụ "I. Nguồn gốc và bản chất của Nhà nước" */
  title: string;
  /** Mô tả tóm lược phạm vi kiến thức */
  description?: string;
  /** Danh sách các tiểu mục lý thuyết con */
  articles: Article[];
}

/**
 * Cấu trúc toàn diện của một Chương Giáo trình (Chapter)
 */
export interface Chapter {
  /** Số thứ tự chương: 1 đến 7 */
  id: number;
  /** Mã định danh: "ch1" đến "ch7" */
  code: string;
  /** Tên đầy đủ của chương */
  title: string;
  /** Tên rút gọn hiển thị trên tab điều hướng và thanh tiêu đề */
  shortTitle: string;
  /** Giới thiệu tóm tắt nội dung trọng tâm của chương */
  description: string;
  /** Phạm vi trang sách trong giáo trình HCMUTE 2023 */
  pageRange: {
    start: number;
    end: number;
  };
  /** Danh sách các khái niệm trọng tâm của chương */
  coreConcepts: string[];
  /** Danh sách các mục lớn cấu thành chương */
  sections: Section[];
  /** Tổng số tiểu mục (articles) thuộc chương */
  totalArticles?: number;
}

export type ChapterMap = Record<number, Chapter>;
export type ArticleMap = Record<string, Article>;
