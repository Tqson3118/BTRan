/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch5.ts
 * Thẻ ghi nhớ Flashcard Chương 5 (16 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh5: CFlashcard[] = [
  {
    "id": "c-fc-ch5-001",
    "chapterId": 5,
    "question": "Mảng Một Chiều trong Bộ Nhớ",
    "answer": "Các phần tử cùng kiểu được cấp phát liên tục nhau trên bộ nhớ. Chỉ số bắt đầu từ 0 đến N - 1.",
    "frontConcept": "Mảng Một Chiều trong Bộ Nhớ",
    "backDefinition": "Các phần tử cùng kiểu được cấp phát liên tục nhau trên bộ nhớ. Chỉ số bắt đầu từ 0 đến N - 1.",
    "codeHighlight": "int a[5] = {10, 20, 30, 40, 50};\n// a[0] o dia chi x, a[1] o x + 4...",
    "referencePage": "UTT tr.275 / HCMUTE tr.93",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Mảng Một Chiều trong Bộ Nhớ"
    ]
  },
  {
    "id": "c-fc-ch5-002",
    "chapterId": 5,
    "question": "Bẫy Lỗi Vượt Biên (Off-by-One)",
    "answer": "Duyệt vòng lặp for (int i = 0; i <= n; i++) sẽ truy cập phần tử a[n] ngoài biên mảng gây rò rỉ hoặc crash.",
    "frontConcept": "Bẫy Lỗi Vượt Biên (Off-by-One)",
    "backDefinition": "Duyệt vòng lặp for (int i = 0; i <= n; i++) sẽ truy cập phần tử a[n] ngoài biên mảng gây rò rỉ hoặc crash.",
    "codeHighlight": "int arr[5];\n// arr[5] = 100; // Loi nghiem trong: vuot bien mang!",
    "referencePage": "UTT tr.278 / HCMUTE tr.95",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Bẫy Lỗi Vượt Biên (Off-by-One)"
    ]
  },
  {
    "id": "c-fc-ch5-003",
    "chapterId": 5,
    "question": "Khởi Tạo Mảng Một Chiều",
    "answer": "Nếu danh sách khởi tạo ít hơn kích thước mảng, các phần tử còn lại tự động được gán bằng 0.",
    "frontConcept": "Khởi Tạo Mảng Một Chiều",
    "backDefinition": "Nếu danh sách khởi tạo ít hơn kích thước mảng, các phần tử còn lại tự động được gán bằng 0.",
    "codeHighlight": "int a[10] = {1, 2}; // a[0]=1, a[1]=2, a[2..9]=0\nint b[10] = {0};    // Tat ca 10 phan tu bang 0",
    "referencePage": "UTT tr.280 / HCMUTE tr.96",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Khởi Tạo Mảng Một Chiều"
    ]
  },
  {
    "id": "c-fc-ch5-004",
    "chapterId": 5,
    "question": "Truyền Mảng vào Hàm",
    "answer": "Mảng luôn bị suy biến (decay) thành con trỏ trỏ tới phần tử đầu tiên. Bắt buộc truyền kèm kích thước n.",
    "frontConcept": "Truyền Mảng vào Hàm",
    "backDefinition": "Mảng luôn bị suy biến (decay) thành con trỏ trỏ tới phần tử đầu tiên. Bắt buộc truyền kèm kích thước n.",
    "codeHighlight": "void xuat(int arr[], int n) {\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n}",
    "referencePage": "UTT tr.285 / HCMUTE tr.99",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Truyền Mảng vào Hàm"
    ]
  },
  {
    "id": "c-fc-ch5-005",
    "chapterId": 5,
    "question": "Kích Thước Mảng sizeof(arr)",
    "answer": "Trong phạm vi khai báo mảng, sizeof(arr) trả về tổng byte của mảng. Khi truyền vào hàm, sizeof(arr) chỉ là kích thước con trỏ!",
    "frontConcept": "Kích Thước Mảng sizeof(arr)",
    "backDefinition": "Trong phạm vi khai báo mảng, sizeof(arr) trả về tổng byte của mảng. Khi truyền vào hàm, sizeof(arr) chỉ là kích thước con trỏ!",
    "codeHighlight": "int a[10];\nint len = sizeof(a) / sizeof(a[0]); // len = 10",
    "referencePage": "UTT tr.288 / HCMUTE tr.100",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Kích Thước Mảng sizeof(arr)"
    ]
  },
  {
    "id": "c-fc-ch5-006",
    "chapterId": 5,
    "question": "Mảng Hai Chiều (Ma Trận)",
    "answer": "Lưu trữ dạng Row-major (hàng nối tiếp hàng) trong bộ nhớ phẳng. a[i][j] = *(a + i * COLS + j).",
    "frontConcept": "Mảng Hai Chiều (Ma Trận)",
    "backDefinition": "Lưu trữ dạng Row-major (hàng nối tiếp hàng) trong bộ nhớ phẳng. a[i][j] = *(a + i * COLS + j).",
    "codeHighlight": "int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\n// m[1][2] = 6",
    "referencePage": "UTT tr.300 / HCMUTE tr.105",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Mảng Hai Chiều (Ma Trận)"
    ]
  },
  {
    "id": "c-fc-ch5-007",
    "chapterId": 5,
    "question": "Truyền Mảng 2 Chiều vào Hàm",
    "answer": "Bắt buộc phải chỉ định số cột cố định để trình biên dịch tính bước nhảy hàng: void func(int m[][COLS], int rows).",
    "frontConcept": "Truyền Mảng 2 Chiều vào Hàm",
    "backDefinition": "Bắt buộc phải chỉ định số cột cố định để trình biên dịch tính bước nhảy hàng: void func(int m[][COLS], int rows).",
    "codeHighlight": "void inMaTran(int m[][3], int r) {\n    // Bắt buộc có số cột 3\n}",
    "referencePage": "UTT tr.305 / HCMUTE tr.108",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Truyền Mảng 2 Chiều vào Hàm"
    ]
  },
  {
    "id": "c-fc-ch5-008",
    "chapterId": 5,
    "question": "Bản Chất Chuỗi C-String",
    "answer": "Là mảng một chiều các ký tự kết thúc bằng ký tự rỗng '\\0' (mã ASCII = 0). Mảng cần tối thiểu strlen + 1 bytes.",
    "frontConcept": "Bản Chất Chuỗi C-String",
    "backDefinition": "Là mảng một chiều các ký tự kết thúc bằng ký tự rỗng '\\0' (mã ASCII = 0). Mảng cần tối thiểu strlen + 1 bytes.",
    "codeHighlight": "char s[6] = \"Hello\"; // 5 chu cai + '\\0'\nprintf(\"%s\", s);",
    "referencePage": "UTT tr.345 / HCMUTE tr.115",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Bản Chất Chuỗi C-String"
    ]
  },
  {
    "id": "c-fc-ch5-009",
    "chapterId": 5,
    "question": "Bẫy Khai Báo Thiếu Ký Tự '\\0'",
    "answer": "Khai báo char s[5] = \"Hello\"; làm mất '\\0', khi in bằng printf(\"%s\") sẽ đọc tràn ra vùng nhớ rác phía sau.",
    "frontConcept": "Bẫy Khai Báo Thiếu Ký Tự '\\0'",
    "backDefinition": "Khai báo char s[5] = \"Hello\"; làm mất '\\0', khi in bằng printf(\"%s\") sẽ đọc tràn ra vùng nhớ rác phía sau.",
    "codeHighlight": "char s[5] = \"Hello\"; // Thieu byte cho '\\0'!\n// printf(\"%s\", s) se in rac bo nho!",
    "referencePage": "UTT tr.348 / HCMUTE tr.116",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Bẫy Khai Báo Thiếu Ký Tự '\\0'"
    ]
  },
  {
    "id": "c-fc-ch5-010",
    "chapterId": 5,
    "question": "Hàm strlen() trong <string.h>",
    "answer": "Đếm số ký tự từ đầu chuỗi cho đến khi gặp '\\0' (không tính '\\0' vào kết quả).",
    "frontConcept": "Hàm strlen() trong <string.h>",
    "backDefinition": "Đếm số ký tự từ đầu chuỗi cho đến khi gặp '\\0' (không tính '\\0' vào kết quả).",
    "codeHighlight": "char s[] = \"HCMUTE\";\nsize_t len = strlen(s); // len = 6",
    "referencePage": "UTT tr.372 / HCMUTE tr.118",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Hàm strlen() trong <string.h>"
    ]
  },
  {
    "id": "c-fc-ch5-011",
    "chapterId": 5,
    "question": "Hàm strcpy() và strncpy()",
    "answer": "strcpy(dest, src) sao chép toàn bộ src sang dest. strncpy(dest, src, n) sao chép tối đa n ký tự an toàn hơn.",
    "frontConcept": "Hàm strcpy() và strncpy()",
    "backDefinition": "strcpy(dest, src) sao chép toàn bộ src sang dest. strncpy(dest, src, n) sao chép tối đa n ký tự an toàn hơn.",
    "codeHighlight": "char src[] = \"Lap trinh C\";\nchar dest[50];\nstrcpy(dest, src);",
    "referencePage": "UTT tr.375 / HCMUTE tr.119",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Hàm strcpy() và strncpy()"
    ]
  },
  {
    "id": "c-fc-ch5-012",
    "chapterId": 5,
    "question": "Hàm strcat() và strncat()",
    "answer": "Nối chuỗi src vào đuôi chuỗi dest (bắt đầu ghi đè từ ký tự '\\0' của dest). dest phải đủ lớn.",
    "frontConcept": "Hàm strcat() và strncat()",
    "backDefinition": "Nối chuỗi src vào đuôi chuỗi dest (bắt đầu ghi đè từ ký tự '\\0' của dest). dest phải đủ lớn.",
    "codeHighlight": "char s[50] = \"Xin \";\nstrcat(s, \"chao!\"); // s = \"Xin chao!\"",
    "referencePage": "UTT tr.378 / HCMUTE tr.119",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Hàm strcat() và strncat()"
    ]
  },
  {
    "id": "c-fc-ch5-013",
    "chapterId": 5,
    "question": "Hàm strcmp() So Sánh Chuỗi",
    "answer": "So sánh mã ASCII từng cặp ký tự. Trả về 0 nếu bằng nhau, âm nếu s1 < s2, dương nếu s1 > s2. Không so sánh bằng '=='.",
    "frontConcept": "Hàm strcmp() So Sánh Chuỗi",
    "backDefinition": "So sánh mã ASCII từng cặp ký tự. Trả về 0 nếu bằng nhau, âm nếu s1 < s2, dương nếu s1 > s2. Không so sánh bằng '=='.",
    "codeHighlight": "if (strcmp(s1, \"admin\") == 0) {\n    printf(\"Dang nhap thanh cong\\n\");\n}",
    "referencePage": "UTT tr.380 / HCMUTE tr.120",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Hàm strcmp() So Sánh Chuỗi"
    ]
  },
  {
    "id": "c-fc-ch5-014",
    "chapterId": 5,
    "question": "Hàm strstr() Tìm Chuỗi Con",
    "answer": "Tìm kiếm lần xuất hiện đầu tiên của chuỗi con needle trong chuỗi mẹ haystack. Trả về con trỏ tới vị trí tìm thấy hoặc NULL.",
    "frontConcept": "Hàm strstr() Tìm Chuỗi Con",
    "backDefinition": "Tìm kiếm lần xuất hiện đầu tiên của chuỗi con needle trong chuỗi mẹ haystack. Trả về con trỏ tới vị trí tìm thấy hoặc NULL.",
    "codeHighlight": "char *p = strstr(\"HCMUTE Dai hoc\", \"Dai\");\nif (p) printf(\"Tim thay tai: %s\", p);",
    "referencePage": "UTT tr.385 / HCMUTE tr.120",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Hàm strstr() Tìm Chuỗi Con"
    ]
  },
  {
    "id": "c-fc-ch5-015",
    "chapterId": 5,
    "question": "Nhập Chuỗi An Toàn với fgets()",
    "answer": "fgets(str, size, stdin) đọc tối đa size - 1 ký tự, tự động gắn '\\0' ở cuối và không gây tràn bộ đệm. Cấm dùng gets().",
    "frontConcept": "Nhập Chuỗi An Toàn với fgets()",
    "backDefinition": "fgets(str, size, stdin) đọc tối đa size - 1 ký tự, tự động gắn '\\0' ở cuối và không gây tràn bộ đệm. Cấm dùng gets().",
    "codeHighlight": "char ten[100];\nfgets(ten, sizeof(ten), stdin);\nten[strcspn(ten, \"\\n\")] = '\\0'; // Xoa '\\n'",
    "referencePage": "UTT tr.390 / HCMUTE tr.120",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Nhập Chuỗi An Toàn với fgets()"
    ]
  },
  {
    "id": "c-fc-ch5-016",
    "chapterId": 5,
    "question": "Mảng Chuỗi Ký Tự",
    "answer": "Mảng 2 chiều kiểu char chứa danh sách các chuỗi: char danhSach[N][MAX_LEN]; mỗi hàng là một chuỗi độc lập.",
    "frontConcept": "Mảng Chuỗi Ký Tự",
    "backDefinition": "Mảng 2 chiều kiểu char chứa danh sách các chuỗi: char danhSach[N][MAX_LEN]; mỗi hàng là một chuỗi độc lập.",
    "codeHighlight": "char menu[3][20] = {\"1. Bat dau\", \"2. Cai dat\", \"3. Thoat\"};\nprintf(\"%s\\n\", menu[0]);",
    "referencePage": "UTT tr.410 / HCMUTE tr.120",
    "masteryLevel": "learning",
    "tags": [
      "Chương 5",
      "Flashcard",
      "Mảng Chuỗi Ký Tự"
    ]
  }
];
