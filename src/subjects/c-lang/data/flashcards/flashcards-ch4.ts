/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch4.ts
 * Thẻ ghi nhớ Flashcard Chương 4 (14 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh4: CFlashcard[] = [
  {
    "id": "c-fc-ch4-001",
    "chapterId": 4,
    "question": "Nguyên Mẫu Hàm (Function Prototype)",
    "answer": "Khai báo kiểu trả về, tên hàm và tham số trước khi gọi, giúp trình biên dịch kiểm tra kiểu dữ liệu đối số chính xác.",
    "frontConcept": "Nguyên Mẫu Hàm (Function Prototype)",
    "backDefinition": "Khai báo kiểu trả về, tên hàm và tham số trước khi gọi, giúp trình biên dịch kiểm tra kiểu dữ liệu đối số chính xác.",
    "codeHighlight": "double tinhTong(double a, double b); // Prototype\n\nint main(void) {\n    printf(\"%.2f\", tinhTong(2.5, 3.5));\n}",
    "referencePage": "UTT tr.214 / HCMUTE tr.138",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Nguyên Mẫu Hàm (Function Prototype)"
    ]
  },
  {
    "id": "c-fc-ch4-002",
    "chapterId": 4,
    "question": "Bản chất Truyền Tham Trị (Pass-by-value)",
    "answer": "C chỉ có cơ chế truyền tham trị. Tham số hàm nhận một bản sao độc lập; sửa tham số trong hàm không đổi giá trị biến gốc ngoài main.",
    "frontConcept": "Bản chất Truyền Tham Trị (Pass-by-value)",
    "backDefinition": "C chỉ có cơ chế truyền tham trị. Tham số hàm nhận một bản sao độc lập; sửa tham số trong hàm không đổi giá trị biến gốc ngoài main.",
    "codeHighlight": "void tang(int x) { x++; }\nint main(void) {\n    int a = 5; tang(a);\n    printf(\"%d\", a); // Van in ra 5!\n}",
    "referencePage": "UTT tr.226 / HCMUTE tr.143",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Bản chất Truyền Tham Trị (Pass-by-value)"
    ]
  },
  {
    "id": "c-fc-ch4-003",
    "chapterId": 4,
    "question": "Mô phỏng Tham chiếu Bằng Con Trỏ",
    "answer": "Truyền địa chỉ của biến vào hàm con trỏ để giải tham chiếu (*p) sửa đổi trực tiếp ô nhớ của biến gốc.",
    "frontConcept": "Mô phỏng Tham chiếu Bằng Con Trỏ",
    "backDefinition": "Truyền địa chỉ của biến vào hàm con trỏ để giải tham chiếu (*p) sửa đổi trực tiếp ô nhớ của biến gốc.",
    "codeHighlight": "void swap(int *a, int *b) {\n    int tmp = *a; *a = *b; *b = tmp;\n}\n// Goi: swap(&x, &y);",
    "referencePage": "UTT tr.230 / HCMUTE tr.145",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Mô phỏng Tham chiếu Bằng Con Trỏ"
    ]
  },
  {
    "id": "c-fc-ch4-004",
    "chapterId": 4,
    "question": "Phạm vi Biến Cục Bộ (Local Scope)",
    "answer": "Khai báo bên trong cặp ngoặc nhọn {}; chỉ tồn tại và truy cập được bên trong khối đó; tự động hủy khi ra khỏi khối.",
    "frontConcept": "Phạm vi Biến Cục Bộ (Local Scope)",
    "backDefinition": "Khai báo bên trong cặp ngoặc nhọn {}; chỉ tồn tại và truy cập được bên trong khối đó; tự động hủy khi ra khỏi khối.",
    "codeHighlight": "void func(void) {\n    int local_var = 10; // Cục bộ trên Stack\n} // local_var bị hủy tại đây",
    "referencePage": "UTT tr.240 / HCMUTE tr.148",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Phạm vi Biến Cục Bộ (Local Scope)"
    ]
  },
  {
    "id": "c-fc-ch4-005",
    "chapterId": 4,
    "question": "Phạm vi Biến Toàn Cục (Global Scope)",
    "answer": "Khai báo bên ngoài mọi hàm; mọi hàm đều truy xuất được; tồn tại suốt vòng đời chương trình trong vùng Data Segment.",
    "frontConcept": "Phạm vi Biến Toàn Cục (Global Scope)",
    "backDefinition": "Khai báo bên ngoài mọi hàm; mọi hàm đều truy xuất được; tồn tại suốt vòng đời chương trình trong vùng Data Segment.",
    "codeHighlight": "int g_counter = 0; // Toan cuc\nvoid inc(void) { g_counter++; }",
    "referencePage": "UTT tr.242 / HCMUTE tr.149",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Phạm vi Biến Toàn Cục (Global Scope)"
    ]
  },
  {
    "id": "c-fc-ch4-006",
    "chapterId": 4,
    "question": "Bổ từ static cho Biến Cục Bộ",
    "answer": "Biến static cục bộ giữ nguyên giá trị giữa các lần gọi hàm khác nhau; chỉ được khởi tạo duy nhất 1 lần lúc nạp chương trình.",
    "frontConcept": "Bổ từ static cho Biến Cục Bộ",
    "backDefinition": "Biến static cục bộ giữ nguyên giá trị giữa các lần gọi hàm khác nhau; chỉ được khởi tạo duy nhất 1 lần lúc nạp chương trình.",
    "codeHighlight": "void dem(void) {\n    static int count = 0;\n    count++;\n    printf(\"%d \", count); // In 1, 2, 3...\n}",
    "referencePage": "UTT tr.245 / HCMUTE tr.151",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Bổ từ static cho Biến Cục Bộ"
    ]
  },
  {
    "id": "c-fc-ch4-007",
    "chapterId": 4,
    "question": "Bổ từ extern cho Biến Toàn Cục",
    "answer": "Khai báo biến toàn cục được định nghĩa ở file mã nguồn khác để liên kết dùng chung giữa nhiều file trong dự án.",
    "frontConcept": "Bổ từ extern cho Biến Toàn Cục",
    "backDefinition": "Khai báo biến toàn cục được định nghĩa ở file mã nguồn khác để liên kết dùng chung giữa nhiều file trong dự án.",
    "codeHighlight": "// file1.c: int global_score = 100;\n// file2.c: extern int global_score;",
    "referencePage": "UTT tr.248 / HCMUTE tr.152",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Bổ từ extern cho Biến Toàn Cục"
    ]
  },
  {
    "id": "c-fc-ch4-008",
    "chapterId": 4,
    "question": "Nguyên lý Đệ Quy (Recursion)",
    "answer": "Hàm gọi lại chính nó để giải bài toán nhỏ hơn cùng dạng. Bắt buộc phải có: (1) Điều kiện dừng Base case; (2) Bước đệ quy tiến về điểm dừng.",
    "frontConcept": "Nguyên lý Đệ Quy (Recursion)",
    "backDefinition": "Hàm gọi lại chính nó để giải bài toán nhỏ hơn cùng dạng. Bắt buộc phải có: (1) Điều kiện dừng Base case; (2) Bước đệ quy tiến về điểm dừng.",
    "codeHighlight": "long giaiThua(int n) {\n    if (n <= 1) return 1; // Base case\n    return n * giaiThua(n - 1); // Recursive\n}",
    "referencePage": "UTT tr.252 / HCMUTE tr.154",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Nguyên lý Đệ Quy (Recursion)"
    ]
  },
  {
    "id": "c-fc-ch4-009",
    "chapterId": 4,
    "question": "Khung Ngăn Xếp (Stack Frame) và Call Stack",
    "answer": "Mỗi lần gọi hàm, hệ thống đẩy một Stack Frame chứa địa chỉ trả về, tham số và biến cục bộ lên đỉnh ngăn xếp Call Stack.",
    "frontConcept": "Khung Ngăn Xếp (Stack Frame) và Call Stack",
    "backDefinition": "Mỗi lần gọi hàm, hệ thống đẩy một Stack Frame chứa địa chỉ trả về, tham số và biến cục bộ lên đỉnh ngăn xếp Call Stack.",
    "codeHighlight": "// Call stack khi goi factorial(3):\n// [fac(1)] -> [fac(2)] -> [fac(3)] -> [main]",
    "referencePage": "UTT tr.256 / HCMUTE tr.156",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Khung Ngăn Xếp (Stack Frame) và Call Stack"
    ]
  },
  {
    "id": "c-fc-ch4-010",
    "chapterId": 4,
    "question": "Tràn Ngăn Xếp (Stack Overflow)",
    "answer": "Xảy ra khi đệ quy quá sâu hoặc thiếu điều kiện dừng, khiến vùng nhớ Stack bị đầy tràn và hệ thống làm sập chương trình lập tức.",
    "frontConcept": "Tràn Ngăn Xếp (Stack Overflow)",
    "backDefinition": "Xảy ra khi đệ quy quá sâu hoặc thiếu điều kiện dừng, khiến vùng nhớ Stack bị đầy tràn và hệ thống làm sập chương trình lập tức.",
    "codeHighlight": "void voTan(void) {\n    voTan(); // Loi Stack Overflow vi khong co Base case!\n}",
    "referencePage": "UTT tr.258 / HCMUTE tr.157",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Tràn Ngăn Xếp (Stack Overflow)"
    ]
  },
  {
    "id": "c-fc-ch4-011",
    "chapterId": 4,
    "question": "Đệ Quy Đuôi (Tail Recursion)",
    "answer": "Lời gọi đệ quy là hành động cuối cùng của hàm trước khi return. Trình biên dịch tối ưu (Tail Call Optimization) có thể chuyển thành vòng lặp.",
    "frontConcept": "Đệ Quy Đuôi (Tail Recursion)",
    "backDefinition": "Lời gọi đệ quy là hành động cuối cùng của hàm trước khi return. Trình biên dịch tối ưu (Tail Call Optimization) có thể chuyển thành vòng lặp.",
    "codeHighlight": "long tailFact(int n, long acc) {\n    if (n <= 1) return acc;\n    return tailFact(n - 1, n * acc);\n}",
    "referencePage": "UTT tr.262 / HCMUTE tr.158",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Đệ Quy Đuôi (Tail Recursion)"
    ]
  },
  {
    "id": "c-fc-ch4-012",
    "chapterId": 4,
    "question": "Kỹ thuật Đệ Quy Nhớ (Memoization)",
    "answer": "Lưu lại kết quả bài toán con đã giải vào mảng tĩnh để tái sử dụng, giảm độ phức tạp từ O(2^N) xuống O(N) như dãy Fibonacci.",
    "frontConcept": "Kỹ thuật Đệ Quy Nhớ (Memoization)",
    "backDefinition": "Lưu lại kết quả bài toán con đã giải vào mảng tĩnh để tái sử dụng, giảm độ phức tạp từ O(2^N) xuống O(N) như dãy Fibonacci.",
    "codeHighlight": "long memo[100] = {0};\nlong fib(int n) {\n    if (n <= 1) return n;\n    if (memo[n] != 0) return memo[n];\n    return memo[n] = fib(n-1) + fib(n-2);\n}",
    "referencePage": "UTT tr.268 / HCMUTE tr.158",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Kỹ thuật Đệ Quy Nhớ (Memoization)"
    ]
  },
  {
    "id": "c-fc-ch4-013",
    "chapterId": 4,
    "question": "Hàm Kiểu Trả Về void",
    "answer": "Hàm thực hiện một chuỗi hành động mà không trả về kết quả nào cho nơi gọi. Dùng return; không kèm biểu thức để thoát sớm.",
    "frontConcept": "Hàm Kiểu Trả Về void",
    "backDefinition": "Hàm thực hiện một chuỗi hành động mà không trả về kết quả nào cho nơi gọi. Dùng return; không kèm biểu thức để thoát sớm.",
    "codeHighlight": "void inLoi(const char *msg) {\n    if (!msg) return;\n    printf(\"Loi: %s\\n\", msg);\n}",
    "referencePage": "UTT tr.218 / HCMUTE tr.140",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Hàm Kiểu Trả Về void"
    ]
  },
  {
    "id": "c-fc-ch4-014",
    "chapterId": 4,
    "question": "Hàm Nội Tuyến inline (C99)",
    "answer": "Gợi ý trình biên dịch thay thế lời gọi hàm bằng thân mã nguồn trực tiếp để loại bỏ chi phí gọi hàm (Call overhead), tăng tốc độ.",
    "frontConcept": "Hàm Nội Tuyến inline (C99)",
    "backDefinition": "Gợi ý trình biên dịch thay thế lời gọi hàm bằng thân mã nguồn trực tiếp để loại bỏ chi phí gọi hàm (Call overhead), tăng tốc độ.",
    "codeHighlight": "static inline int max(int a, int b) {\n    return (a > b) ? a : b;\n}",
    "referencePage": "UTT tr.270 / HCMUTE tr.158",
    "masteryLevel": "learning",
    "tags": [
      "Chương 4",
      "Flashcard",
      "Hàm Nội Tuyến inline (C99)"
    ]
  }
];
