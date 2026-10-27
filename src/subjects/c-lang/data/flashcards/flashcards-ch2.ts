/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch2.ts
 * Thẻ ghi nhớ Flashcard Chương 2 (15 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh2: CFlashcard[] = [
  {
    "id": "c-fc-ch2-001",
    "chapterId": 2,
    "question": "Kích thước Kiểu Dữ liệu Nguyên thủy",
    "answer": "Chuẩn 32/64-bit: char 1 byte, short 2 bytes, int 4 bytes, long 4 hoặc 8 bytes, float 4 bytes, double 8 bytes.",
    "frontConcept": "Kích thước Kiểu Dữ liệu Nguyên thủy",
    "backDefinition": "Chuẩn 32/64-bit: char 1 byte, short 2 bytes, int 4 bytes, long 4 hoặc 8 bytes, float 4 bytes, double 8 bytes.",
    "codeHighlight": "printf(\"sizeof(int) = %zu\\n\", sizeof(int));\nprintf(\"sizeof(double) = %zu\\n\", sizeof(double));",
    "referencePage": "UTT tr.89 / HCMUTE tr.31",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Kích thước Kiểu Dữ liệu Nguyên thủy"
    ]
  },
  {
    "id": "c-fc-ch2-002",
    "chapterId": 2,
    "question": "Bổ từ signed vs unsigned",
    "answer": "signed dùng bit trọng số cao nhất làm dấu (bù 2). unsigned chỉ biểu diễn số không âm từ 0 đến 2^N - 1, tăng gấp đôi miền số dương.",
    "frontConcept": "Bổ từ signed vs unsigned",
    "backDefinition": "signed dùng bit trọng số cao nhất làm dấu (bù 2). unsigned chỉ biểu diễn số không âm từ 0 đến 2^N - 1, tăng gấp đôi miền số dương.",
    "codeHighlight": "unsigned char u = 255; // 0 den 255\nsigned char s = 127;   // -128 den 127",
    "referencePage": "UTT tr.91 / HCMUTE tr.33",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Bổ từ signed vs unsigned"
    ]
  },
  {
    "id": "c-fc-ch2-003",
    "chapterId": 2,
    "question": "Tràn Số Nguyên (Integer Overflow)",
    "answer": "Khi tính toán vượt quá giới hạn tối đa của kiểu dữ liệu, số nguyên có dấu gây hành vi không xác định, còn không dấu quay vòng về 0 modulo 2^N.",
    "frontConcept": "Tràn Số Nguyên (Integer Overflow)",
    "backDefinition": "Khi tính toán vượt quá giới hạn tối đa của kiểu dữ liệu, số nguyên có dấu gây hành vi không xác định, còn không dấu quay vòng về 0 modulo 2^N.",
    "codeHighlight": "unsigned char c = 255;\nc = c + 1; // c quay vong ve 0!",
    "referencePage": "UTT tr.93 / HCMUTE tr.35",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Tràn Số Nguyên (Integer Overflow)"
    ]
  },
  {
    "id": "c-fc-ch2-004",
    "chapterId": 2,
    "question": "Toán tử sizeof()",
    "answer": "Toán tử một ngôi tính toán kích thước byte của kiểu dữ liệu hoặc biểu thức ngay trong thời gian biên dịch (compile-time).",
    "frontConcept": "Toán tử sizeof()",
    "backDefinition": "Toán tử một ngôi tính toán kích thước byte của kiểu dữ liệu hoặc biểu thức ngay trong thời gian biên dịch (compile-time).",
    "codeHighlight": "int arr[10];\nsize_t n = sizeof(arr) / sizeof(arr[0]); // n = 10",
    "referencePage": "UTT tr.94 / HCMUTE tr.36",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Toán tử sizeof()"
    ]
  },
  {
    "id": "c-fc-ch2-005",
    "chapterId": 2,
    "question": "Ép kiểu Ngầm định vs Tường minh",
    "answer": "Ngầm định: C tự động nâng kiểu nhỏ lên kiểu lớn. Tường minh: lập trình viên chỉ định cụ thể bằng cú pháp (type)expr.",
    "frontConcept": "Ép kiểu Ngầm định vs Tường minh",
    "backDefinition": "Ngầm định: C tự động nâng kiểu nhỏ lên kiểu lớn. Tường minh: lập trình viên chỉ định cụ thể bằng cú pháp (type)expr.",
    "codeHighlight": "float a = (float)5 / 2; // a = 2.5f (tuong minh)\ndouble b = 3 + 4.5;      // 3 tu nang len double",
    "referencePage": "UTT tr.97 / HCMUTE tr.38",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Ép kiểu Ngầm định vs Tường minh"
    ]
  },
  {
    "id": "c-fc-ch2-006",
    "chapterId": 2,
    "question": "Bẫy Phép Chia Nguyên",
    "answer": "Khi 2 toán hạng đều là số nguyên, phép chia / luôn cắt cụt lấy phần nguyên. Viết float f = 5 / 2; thì f vẫn nhận giá trị 2.0.",
    "frontConcept": "Bẫy Phép Chia Nguyên",
    "backDefinition": "Khi 2 toán hạng đều là số nguyên, phép chia / luôn cắt cụt lấy phần nguyên. Viết float f = 5 / 2; thì f vẫn nhận giá trị 2.0.",
    "codeHighlight": "float sai = 5 / 2;    // sai = 2.0f\nfloat dung = 5.0 / 2; // dung = 2.5f",
    "referencePage": "UTT tr.98 / HCMUTE tr.39",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Bẫy Phép Chia Nguyên"
    ]
  },
  {
    "id": "c-fc-ch2-007",
    "chapterId": 2,
    "question": "Tiền tố ++x vs Hậu tố x++",
    "answer": "++x: tăng x lên 1 trước rồi mới lấy giá trị tính toán. x++: lấy giá trị cũ của x tính toán xong mới tăng x lên 1.",
    "frontConcept": "Tiền tố ++x vs Hậu tố x++",
    "backDefinition": "++x: tăng x lên 1 trước rồi mới lấy giá trị tính toán. x++: lấy giá trị cũ của x tính toán xong mới tăng x lên 1.",
    "codeHighlight": "int a = 5, b = ++a; // a = 6, b = 6\nint c = 5, d = c++; // c = 6, d = 5",
    "referencePage": "UTT tr.102 / HCMUTE tr.41",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Tiền tố ++x vs Hậu tố x++"
    ]
  },
  {
    "id": "c-fc-ch2-008",
    "chapterId": 2,
    "question": "Cơ chế Đoản Mạch Logic (Short-circuit)",
    "answer": "Trong A && B: nếu A sai thì B bị bỏ qua. Trong A || B: nếu A đúng thì B bị bỏ qua. Không chạy hàm hoặc toán tử tăng giảm ở nhánh bị bỏ qua.",
    "frontConcept": "Cơ chế Đoản Mạch Logic (Short-circuit)",
    "backDefinition": "Trong A && B: nếu A sai thì B bị bỏ qua. Trong A || B: nếu A đúng thì B bị bỏ qua. Không chạy hàm hoặc toán tử tăng giảm ở nhánh bị bỏ qua.",
    "codeHighlight": "int x = 0;\nif (0 && ++x) { /* khong vao */ }\n// x van bang 0 do doan mach!",
    "referencePage": "UTT tr.105 / HCMUTE tr.42",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Cơ chế Đoản Mạch Logic (Short-circuit)"
    ]
  },
  {
    "id": "c-fc-ch2-009",
    "chapterId": 2,
    "question": "Toán tử Thao tác Bit &, |, ^, ~",
    "answer": "& (AND bit), | (OR bit), ^ (XOR bit: khác nhau bằng 1), ~ (NOT bit: đảo mọi bit từ 0 sang 1 và ngược lại).",
    "frontConcept": "Toán tử Thao tác Bit &, |, ^, ~",
    "backDefinition": "& (AND bit), | (OR bit), ^ (XOR bit: khác nhau bằng 1), ~ (NOT bit: đảo mọi bit từ 0 sang 1 và ngược lại).",
    "codeHighlight": "unsigned char a = 5; // 00000101\nunsigned char b = 3; // 00000011\n// a & b = 1, a | b = 7, a ^ b = 6",
    "referencePage": "UTT tr.109 / HCMUTE tr.44",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Toán tử Thao tác Bit &, |, ^, ~"
    ]
  },
  {
    "id": "c-fc-ch2-010",
    "chapterId": 2,
    "question": "Toán tử Dịch Bit << và >>",
    "answer": "x << n: dịch trái n bit (tương đương x * 2^n). x >> n: dịch phải n bit (tương đương chia nguyên x / 2^n với số dương).",
    "frontConcept": "Toán tử Dịch Bit << và >>",
    "backDefinition": "x << n: dịch trái n bit (tương đương x * 2^n). x >> n: dịch phải n bit (tương đương chia nguyên x / 2^n với số dương).",
    "codeHighlight": "int x = 5;\nint nhan4 = x << 2; // 5 * 4 = 20\nint chia2 = x >> 1; // 5 / 2 = 2",
    "referencePage": "UTT tr.111 / HCMUTE tr.45",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Toán tử Dịch Bit << và >>"
    ]
  },
  {
    "id": "c-fc-ch2-011",
    "chapterId": 2,
    "question": "Toán tử Điều kiện Ba Ngôi (?:)",
    "answer": "Cú pháp: condition ? expr_true : expr_false. Rút gọn cấu trúc if-else đơn giản thành một biểu thức có giá trị trả về.",
    "frontConcept": "Toán tử Điều kiện Ba Ngôi (?:)",
    "backDefinition": "Cú pháp: condition ? expr_true : expr_false. Rút gọn cấu trúc if-else đơn giản thành một biểu thức có giá trị trả về.",
    "codeHighlight": "int max = (a > b) ? a : b;\nprintf(\"So lon nhat la %d\\n\", max);",
    "referencePage": "UTT tr.113 / HCMUTE tr.43",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Toán tử Điều kiện Ba Ngôi (?:)"
    ]
  },
  {
    "id": "c-fc-ch2-012",
    "chapterId": 2,
    "question": "Mã Định Dạng printf Thường Gặp",
    "answer": "%d (int), %u (unsigned), %ld (long), %f (float), %lf (double), %c (char), %s (chuỗi), %p (con trỏ địa chỉ), %x (hex).",
    "frontConcept": "Mã Định Dạng printf Thường Gặp",
    "backDefinition": "%d (int), %u (unsigned), %ld (long), %f (float), %lf (double), %c (char), %s (chuỗi), %p (con trỏ địa chỉ), %x (hex).",
    "codeHighlight": "printf(\"Tuoi: %d, Diem: %.2f, Dia chi: %p\\n\", 20, 8.75, (void*)&a);",
    "referencePage": "UTT tr.115 / HCMUTE tr.27",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Mã Định Dạng printf Thường Gặp"
    ]
  },
  {
    "id": "c-fc-ch2-013",
    "chapterId": 2,
    "question": "Độ Rộng và Căn Lề trong printf",
    "answer": "%5d: căn phải trên độ rộng 5 cột. %-5d: căn trái trên 5 cột. %.2f: giới hạn đúng 2 chữ số phần thập phân.",
    "frontConcept": "Độ Rộng và Căn Lề trong printf",
    "backDefinition": "%5d: căn phải trên độ rộng 5 cột. %-5d: căn trái trên 5 cột. %.2f: giới hạn đúng 2 chữ số phần thập phân.",
    "codeHighlight": "printf(\"|%-10s|%5d|\\n\", \"Alice\", 95);\nprintf(\"|%-10s|%5d|\\n\", \"Bob\", 100);",
    "referencePage": "UTT tr.116 / HCMUTE tr.28",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Độ Rộng và Căn Lề trong printf"
    ]
  },
  {
    "id": "c-fc-ch2-014",
    "chapterId": 2,
    "question": "Ký tự Escape Sequence",
    "answer": "\\n (xuống dòng), \\t (tab thụt lề), \\\\ (in ký tự gạch chéo), \\\" (in ngoặc kép), \\0 (ký tự kết thúc chuỗi null).",
    "frontConcept": "Ký tự Escape Sequence",
    "backDefinition": "\\n (xuống dòng), \\t (tab thụt lề), \\\\ (in ký tự gạch chéo), \\\" (in ngoặc kép), \\0 (ký tự kết thúc chuỗi null).",
    "codeHighlight": "printf(\"Dong 1\\tCot 2\\nIn dau ngoac: \\\"C\\\"\\n\");",
    "referencePage": "UTT tr.117 / HCMUTE tr.26",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Ký tự Escape Sequence"
    ]
  },
  {
    "id": "c-fc-ch2-015",
    "chapterId": 2,
    "question": "Bẫy Xóa Bộ Đệm stdin Sau scanf()",
    "answer": "scanf(\"%d\") để lại ký tự '\\n' trong bộ đệm khiến lệnh đọc ký tự tiếp theo đọc nhầm. Khắc phục: scanf(\" %c\") hoặc vòng lặp getchar().",
    "frontConcept": "Bẫy Xóa Bộ Đệm stdin Sau scanf()",
    "backDefinition": "scanf(\"%d\") để lại ký tự '\\n' trong bộ đệm khiến lệnh đọc ký tự tiếp theo đọc nhầm. Khắc phục: scanf(\" %c\") hoặc vòng lặp getchar().",
    "codeHighlight": "int n; char ch;\nscanf(\"%d\", &n);\nscanf(\" %c\", &ch); // Co khoang trang bo qua \\n",
    "referencePage": "UTT tr.120 / HCMUTE tr.30",
    "masteryLevel": "learning",
    "tags": [
      "Chương 2",
      "Flashcard",
      "Bẫy Xóa Bộ Đệm stdin Sau scanf()"
    ]
  }
];
