/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch1.ts
 * Thẻ ghi nhớ Flashcard Chương 1 (12 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh1: CFlashcard[] = [
  {
    "id": "c-fc-ch1-001",
    "chapterId": 1,
    "question": "Lịch sử và Bản chất Ngôn ngữ C",
    "answer": "Được Dennis Ritchie phát triển năm 1972 tại Bell Labs để viết lại UNIX. C là ngôn ngữ bậc trung, có cấu trúc và tính khả chuyển cao.",
    "frontConcept": "Lịch sử và Bản chất Ngôn ngữ C",
    "backDefinition": "Được Dennis Ritchie phát triển năm 1972 tại Bell Labs để viết lại UNIX. C là ngôn ngữ bậc trung, có cấu trúc và tính khả chuyển cao.",
    "codeHighlight": "// Ngôn ngữ lập trình C (Dennis Ritchie, 1972)\n// Khả chuyển, hiệu năng cao, gần gũi phần cứng.",
    "referencePage": "UTT tr.21 / HCMUTE tr.9",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Lịch sử và Bản chất Ngôn ngữ C"
    ]
  },
  {
    "id": "c-fc-ch1-002",
    "chapterId": 1,
    "question": "Quy ước Hàm main()",
    "answer": "Điểm bắt buộc bắt đầu thực thi của mọi chương trình C. Chuẩn C99/C11 quy định int main(void) và trả về return 0 báo hiệu thành công.",
    "frontConcept": "Quy ước Hàm main()",
    "backDefinition": "Điểm bắt buộc bắt đầu thực thi của mọi chương trình C. Chuẩn C99/C11 quy định int main(void) và trả về return 0 báo hiệu thành công.",
    "codeHighlight": "int main(void) {\n    printf(\"Hello World!\\n\");\n    return 0;\n}",
    "referencePage": "UTT tr.25 / HCMUTE tr.20",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Quy ước Hàm main()"
    ]
  },
  {
    "id": "c-fc-ch1-003",
    "chapterId": 1,
    "question": "Chu trình Biên dịch 4 bước (GCC Pipeline)",
    "answer": "Quy trình chuyển mã nguồn thành file thực thi: (1) Tiền xử lý (.i) -> (2) Biên dịch sang Assembly (.s) -> (3) Hợp dịch sang mã máy (.o) -> (4) Liên kết Linker (.exe).",
    "frontConcept": "Chu trình Biên dịch 4 bước (GCC Pipeline)",
    "backDefinition": "Quy trình chuyển mã nguồn thành file thực thi: (1) Tiền xử lý (.i) -> (2) Biên dịch sang Assembly (.s) -> (3) Hợp dịch sang mã máy (.o) -> (4) Liên kết Linker (.exe).",
    "codeHighlight": "// gcc -E -> .i (Preprocessor)\n// gcc -S -> .s (Compiler)\n// gcc -c -> .o (Assembler)\n// gcc    -> .exe (Linker)",
    "referencePage": "UTT tr.35 / HCMUTE tr.27",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Chu trình Biên dịch 4 bước (GCC Pipeline)"
    ]
  },
  {
    "id": "c-fc-ch1-004",
    "chapterId": 1,
    "question": "Tập 32 Từ Khóa Chuẩn C89",
    "answer": "Các từ dành riêng cho trình biên dịch (như int, float, if, for, return, struct, void). Lập trình viên không được dùng từ khóa làm tên biến hay tên hàm.",
    "frontConcept": "Tập 32 Từ Khóa Chuẩn C89",
    "backDefinition": "Các từ dành riêng cho trình biên dịch (như int, float, if, for, return, struct, void). Lập trình viên không được dùng từ khóa làm tên biến hay tên hàm.",
    "codeHighlight": "// Sai: int default = 10; float for = 2.5;\n// Dung: int def_val = 10; float for_count = 2.5;",
    "referencePage": "UTT tr.32 / HCMUTE tr.23",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Tập 32 Từ Khóa Chuẩn C89"
    ]
  },
  {
    "id": "c-fc-ch1-005",
    "chapterId": 1,
    "question": "Quy tắc Đặt tên Định danh (Identifiers)",
    "answer": "Chỉ gồm chữ cái, chữ số và dấu gạch dưới '_'. Bắt buộc bắt đầu bằng chữ cái hoặc gạch dưới, KHÔNG được bắt đầu bằng chữ số. C phân biệt hoa thường.",
    "frontConcept": "Quy tắc Đặt tên Định danh (Identifiers)",
    "backDefinition": "Chỉ gồm chữ cái, chữ số và dấu gạch dưới '_'. Bắt buộc bắt đầu bằng chữ cái hoặc gạch dưới, KHÔNG được bắt đầu bằng chữ số. C phân biệt hoa thường.",
    "codeHighlight": "int _score1;  // Hop le\nint totalSum; // Hop le\n// int 1stVal; // Lỗi biên dịch: bắt đầu bằng số!",
    "referencePage": "UTT tr.33 / HCMUTE tr.24",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Quy tắc Đặt tên Định danh (Identifiers)"
    ]
  },
  {
    "id": "c-fc-ch1-006",
    "chapterId": 1,
    "question": "Chỉ thị #include: <...> vs \"...\"",
    "answer": "#include <...> ưu tiên tìm trong thư mục thư viện hệ thống chuẩn. #include \"...\" ưu tiên tìm trong thư mục hiện tại của dự án trước rồi mới tìm hệ thống.",
    "frontConcept": "Chỉ thị #include: <...> vs \"...\"",
    "backDefinition": "#include <...> ưu tiên tìm trong thư mục thư viện hệ thống chuẩn. #include \"...\" ưu tiên tìm trong thư mục hiện tại của dự án trước rồi mới tìm hệ thống.",
    "codeHighlight": "#include <stdio.h>    // Thu vien chuan he thong\n#include \"my_header.h\" // Thu vien noi bo du an",
    "referencePage": "UTT tr.68 / HCMUTE tr.195",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Chỉ thị #include: <...> vs \"...\""
    ]
  },
  {
    "id": "c-fc-ch1-007",
    "chapterId": 1,
    "question": "Chỉ thị Macro Hằng #define",
    "answer": "Chỉ thị tiền xử lý thay thế văn bản trước biên dịch. Bẫy nghiêm cấm: KHÔNG đặt dấu chấm phẩy ';' ở cuối chỉ thị #define.",
    "frontConcept": "Chỉ thị Macro Hằng #define",
    "backDefinition": "Chỉ thị tiền xử lý thay thế văn bản trước biên dịch. Bẫy nghiêm cấm: KHÔNG đặt dấu chấm phẩy ';' ở cuối chỉ thị #define.",
    "codeHighlight": "#define MAX_LEN 100 // Dung (khong co dau ';')\n// #define BAD 100;  // Sai! Se gay loi cu phap ngam",
    "referencePage": "UTT tr.69 / HCMUTE tr.198",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Chỉ thị Macro Hằng #define"
    ]
  },
  {
    "id": "c-fc-ch1-008",
    "chapterId": 1,
    "question": "Macro Hàm có Tham số",
    "answer": "Tạo hàm macro thay thế văn bản nhanh. Bắt buộc phải đóng mở ngoặc tròn quanh từng tham số và quanh toàn bộ biểu thức để tránh lỗi ưu tiên toán tử.",
    "frontConcept": "Macro Hàm có Tham số",
    "backDefinition": "Tạo hàm macro thay thế văn bản nhanh. Bắt buộc phải đóng mở ngoặc tròn quanh từng tham số và quanh toàn bộ biểu thức để tránh lỗi ưu tiên toán tử.",
    "codeHighlight": "#define SQUARE(x) ((x) * (x))\nint a = SQUARE(2 + 3); // ((2+3) * (2+3)) = 25",
    "referencePage": "UTT tr.70 / HCMUTE tr.200",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Macro Hàm có Tham số"
    ]
  },
  {
    "id": "c-fc-ch1-009",
    "chapterId": 1,
    "question": "Cơ chế Header Guards",
    "answer": "Dùng #ifndef, #define và #endif để ngăn chặn việc chèn lặp lại nội dung tệp tiêu đề nhiều lần gây lỗi trùng định nghĩa.",
    "frontConcept": "Cơ chế Header Guards",
    "backDefinition": "Dùng #ifndef, #define và #endif để ngăn chặn việc chèn lặp lại nội dung tệp tiêu đề nhiều lần gây lỗi trùng định nghĩa.",
    "codeHighlight": "#ifndef MY_LIB_H\n#define MY_LIB_H\n// Cac khai bao ham va struct\n#endif // MY_LIB_H",
    "referencePage": "UTT tr.71 / HCMUTE tr.204",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Cơ chế Header Guards"
    ]
  },
  {
    "id": "c-fc-ch1-010",
    "chapterId": 1,
    "question": "Chỉ thị Biên dịch có Điều kiện",
    "answer": "Cho phép biên dịch hoặc bỏ qua các đoạn mã tùy theo điều kiện macro định sẵn (#ifdef, #ifndef, #if, #elif, #else, #endif).",
    "frontConcept": "Chỉ thị Biên dịch có Điều kiện",
    "backDefinition": "Cho phép biên dịch hoặc bỏ qua các đoạn mã tùy theo điều kiện macro định sẵn (#ifdef, #ifndef, #if, #elif, #else, #endif).",
    "codeHighlight": "#ifdef DEBUG\n    printf(\"Gia tri bien x = %d\\n\", x);\n#endif",
    "referencePage": "UTT tr.72 / HCMUTE tr.202",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Chỉ thị Biên dịch có Điều kiện"
    ]
  },
  {
    "id": "c-fc-ch1-011",
    "chapterId": 1,
    "question": "Phân biệt Cú pháp vs Cảnh báo vs Runtime Error",
    "answer": "Syntax Error: sai quy tắc ngôn ngữ, chặn biên dịch. Warning: mã hợp lệ nhưng tiềm ẩn bọ. Runtime Error: lỗi phát sinh lúc đang chạy (chia 0, segfault).",
    "frontConcept": "Phân biệt Cú pháp vs Cảnh báo vs Runtime Error",
    "backDefinition": "Syntax Error: sai quy tắc ngôn ngữ, chặn biên dịch. Warning: mã hợp lệ nhưng tiềm ẩn bọ. Runtime Error: lỗi phát sinh lúc đang chạy (chia 0, segfault).",
    "codeHighlight": "// Syntax error: int a = ; \n// Warning: float x = 5 / 2; \n// Runtime error: int b = 5 / 0;",
    "referencePage": "UTT tr.36 / HCMUTE tr.28",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Phân biệt Cú pháp vs Cảnh báo vs Runtime Error"
    ]
  },
  {
    "id": "c-fc-ch1-012",
    "chapterId": 1,
    "question": "Ký tự Chú thích (Comments)",
    "answer": "// dùng cho chú thích một dòng (chuẩn C99). /* ... */ dùng cho chú thích một hoặc nhiều dòng liên tiếp. Không thể lồng chú thích /* /* */ */.",
    "frontConcept": "Ký tự Chú thích (Comments)",
    "backDefinition": "// dùng cho chú thích một dòng (chuẩn C99). /* ... */ dùng cho chú thích một hoặc nhiều dòng liên tiếp. Không thể lồng chú thích /* /* */ */.",
    "codeHighlight": "// Chu thich don dong\n/* Chu thich \n   nhieu dong */",
    "referencePage": "UTT tr.34 / HCMUTE tr.22",
    "masteryLevel": "learning",
    "tags": [
      "Chương 1",
      "Flashcard",
      "Ký tự Chú thích (Comments)"
    ]
  }
];
