/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch6.ts
 * Thẻ ghi nhớ Flashcard Chương 6 (16 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh6: CFlashcard[] = [
  {
    "id": "c-fc-ch6-001",
    "chapterId": 6,
    "question": "Con Trỏ và Toán Tử Địa Chỉ &",
    "answer": "Con trỏ lưu địa chỉ ô nhớ RAM. Toán tử &x trả về địa chỉ ô nhớ của biến x.",
    "frontConcept": "Con Trỏ và Toán Tử Địa Chỉ &",
    "backDefinition": "Con trỏ lưu địa chỉ ô nhớ RAM. Toán tử &x trả về địa chỉ ô nhớ của biến x.",
    "codeHighlight": "int x = 100;\nint *p = &x; // p luu dia chi cua x",
    "referencePage": "UTT tr.320 / HCMUTE tr.121",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Con Trỏ và Toán Tử Địa Chỉ &"
    ]
  },
  {
    "id": "c-fc-ch6-002",
    "chapterId": 6,
    "question": "Toán Tử Giải Tham Chiếu *",
    "answer": "Toán tử *p truy xuất trực tiếp vào giá trị lưu tại ô nhớ mà con trỏ p đang trỏ tới.",
    "frontConcept": "Toán Tử Giải Tham Chiếu *",
    "backDefinition": "Toán tử *p truy xuất trực tiếp vào giá trị lưu tại ô nhớ mà con trỏ p đang trỏ tới.",
    "codeHighlight": "int x = 10;\nint *p = &x;\n*p = 20; // Sửa giá trị x thành 20",
    "referencePage": "UTT tr.322 / HCMUTE tr.122",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Toán Tử Giải Tham Chiếu *"
    ]
  },
  {
    "id": "c-fc-ch6-003",
    "chapterId": 6,
    "question": "Kích Thước Của Biến Con Trỏ",
    "answer": "Con trỏ luôn có kích thước cố định: 4 bytes trên 32-bit và 8 bytes trên 64-bit, bất kể kiểu dữ liệu trỏ tới.",
    "frontConcept": "Kích Thước Của Biến Con Trỏ",
    "backDefinition": "Con trỏ luôn có kích thước cố định: 4 bytes trên 32-bit và 8 bytes trên 64-bit, bất kể kiểu dữ liệu trỏ tới.",
    "codeHighlight": "printf(\"%zu %zu\", sizeof(char*), sizeof(double*));\n// In: 8 8 (tren he thong 64-bit)",
    "referencePage": "UTT tr.324 / HCMUTE tr.123",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Kích Thước Của Biến Con Trỏ"
    ]
  },
  {
    "id": "c-fc-ch6-004",
    "chapterId": 6,
    "question": "Con Trỏ NULL",
    "answer": "Con trỏ trỏ vào địa chỉ 0 (không trỏ vào vùng nhớ hợp lệ nào). Dùng để khởi tạo an toàn và đánh dấu kết thúc.",
    "frontConcept": "Con Trỏ NULL",
    "backDefinition": "Con trỏ trỏ vào địa chỉ 0 (không trỏ vào vùng nhớ hợp lệ nào). Dùng để khởi tạo an toàn và đánh dấu kết thúc.",
    "codeHighlight": "int *ptr = NULL;\nif (ptr != NULL) { *ptr = 5; }",
    "referencePage": "UTT tr.325 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Con Trỏ NULL"
    ]
  },
  {
    "id": "c-fc-ch6-005",
    "chapterId": 6,
    "question": "Con Trỏ Hoang Dã (Wild Pointer)",
    "answer": "Con trỏ chưa được khởi tạo mang địa chỉ rác ngẫu nhiên. Giải tham chiếu *p gây sập chương trình Segmentation Fault.",
    "frontConcept": "Con Trỏ Hoang Dã (Wild Pointer)",
    "backDefinition": "Con trỏ chưa được khởi tạo mang địa chỉ rác ngẫu nhiên. Giải tham chiếu *p gây sập chương trình Segmentation Fault.",
    "codeHighlight": "int *p; // Chưa khởi tạo\n// *p = 10; // Cực kỳ nguy hiểm, crash ngay!",
    "referencePage": "UTT tr.326 / HCMUTE tr.125",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Con Trỏ Hoang Dã (Wild Pointer)"
    ]
  },
  {
    "id": "c-fc-ch6-006",
    "chapterId": 6,
    "question": "Số Học Con Trỏ (Pointer Arithmetic)",
    "answer": "Khi cộng p + n, con trỏ nhảy thêm n * sizeof(*p) bytes trong bộ nhớ. Phép trừ p2 - p1 trả về số lượng phần tử ở giữa.",
    "frontConcept": "Số Học Con Trỏ (Pointer Arithmetic)",
    "backDefinition": "Khi cộng p + n, con trỏ nhảy thêm n * sizeof(*p) bytes trong bộ nhớ. Phép trừ p2 - p1 trả về số lượng phần tử ở giữa.",
    "codeHighlight": "int arr[5]; int *p = arr;\np = p + 2; // Dịch sang arr[2], tăng 8 byte",
    "referencePage": "UTT tr.330 / HCMUTE tr.127",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Số Học Con Trỏ (Pointer Arithmetic)"
    ]
  },
  {
    "id": "c-fc-ch6-007",
    "chapterId": 6,
    "question": "Độ Ưu Tiên *p++ vs (*p)++",
    "answer": "*p++: lấy giá trị hiện tại rồi tăng địa chỉ con trỏ p lên. (*p)++: tăng giá trị ô nhớ mà p trỏ tới lên 1 đơn vị.",
    "frontConcept": "Độ Ưu Tiên *p++ vs (*p)++",
    "backDefinition": "*p++: lấy giá trị hiện tại rồi tăng địa chỉ con trỏ p lên. (*p)++: tăng giá trị ô nhớ mà p trỏ tới lên 1 đơn vị.",
    "codeHighlight": "int a[] = {10, 20};\nint *p = a;\nint v1 = *p++;   // v1 = 10, p tro toi a[1]\nint v2 = (*p)++; // v2 = 20, a[1] tro thanh 21",
    "referencePage": "UTT tr.332 / HCMUTE tr.128",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Độ Ưu Tiên *p++ vs (*p)++"
    ]
  },
  {
    "id": "c-fc-ch6-008",
    "chapterId": 6,
    "question": "Tương Đương Giữa Mảng và Con Trỏ",
    "answer": "Tên mảng a là một hằng con trỏ trỏ tới a[0]. Do đó a[i] hoàn toàn tương đương với *(a + i).",
    "frontConcept": "Tương Đương Giữa Mảng và Con Trỏ",
    "backDefinition": "Tên mảng a là một hằng con trỏ trỏ tới a[0]. Do đó a[i] hoàn toàn tương đương với *(a + i).",
    "codeHighlight": "int a[5] = {1, 2, 3};\nprintf(\"%d\", *(a + 1)); // In: 2 (tuong duong a[1])",
    "referencePage": "UTT tr.335 / HCMUTE tr.129",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Tương Đương Giữa Mảng và Con Trỏ"
    ]
  },
  {
    "id": "c-fc-ch6-009",
    "chapterId": 6,
    "question": "Con Trỏ Hằng vs Hằng Con Trỏ",
    "answer": "const int *p: không sửa được giá trị qua *p. int * const p: không đổi được địa chỉ p trỏ tới. const int * const p: cấm cả hai.",
    "frontConcept": "Con Trỏ Hằng vs Hằng Con Trỏ",
    "backDefinition": "const int *p: không sửa được giá trị qua *p. int * const p: không đổi được địa chỉ p trỏ tới. const int * const p: cấm cả hai.",
    "codeHighlight": "int x = 5;\nconst int *p1 = &x; // *p1 = 10 (Loi!)\nint * const p2 = &x; // p2 = &y (Loi!)",
    "referencePage": "UTT tr.338 / HCMUTE tr.130",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Con Trỏ Hằng vs Hằng Con Trỏ"
    ]
  },
  {
    "id": "c-fc-ch6-010",
    "chapterId": 6,
    "question": "Vùng Nhớ Heap và Cấp Phát Động",
    "answer": "Heap là vùng nhớ lớn dùng cho cấp phát động lúc runtime. Kích thước linh hoạt nhưng phải tự giải phóng thủ công bằng free().",
    "frontConcept": "Vùng Nhớ Heap và Cấp Phát Động",
    "backDefinition": "Heap là vùng nhớ lớn dùng cho cấp phát động lúc runtime. Kích thước linh hoạt nhưng phải tự giải phóng thủ công bằng free().",
    "codeHighlight": "// Cap phat tren Heap giup linh hoat kich thuoc\nint *a = (int*)malloc(n * sizeof(int));",
    "referencePage": "UTT tr.401 / HCMUTE tr.131",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Vùng Nhớ Heap và Cấp Phát Động"
    ]
  },
  {
    "id": "c-fc-ch6-011",
    "chapterId": 6,
    "question": "Hàm malloc() trong <stdlib.h>",
    "answer": "Cấp phát vùng nhớ size bytes trên Heap, chứa giá trị rác ngẫu nhiên. Trả về void* hoặc NULL nếu hết bộ nhớ.",
    "frontConcept": "Hàm malloc() trong <stdlib.h>",
    "backDefinition": "Cấp phát vùng nhớ size bytes trên Heap, chứa giá trị rác ngẫu nhiên. Trả về void* hoặc NULL nếu hết bộ nhớ.",
    "codeHighlight": "int *p = (int*)malloc(10 * sizeof(int));\nif (p == NULL) { /* Xu ly het RAM */ }",
    "referencePage": "UTT tr.403 / HCMUTE tr.132",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Hàm malloc() trong <stdlib.h>"
    ]
  },
  {
    "id": "c-fc-ch6-012",
    "chapterId": 6,
    "question": "Hàm calloc() vs malloc()",
    "answer": "calloc(n, size) cấp phát n phần tử và tự động xóa mọi byte về 0; chậm hơn malloc một chút nhưng an toàn hơn.",
    "frontConcept": "Hàm calloc() vs malloc()",
    "backDefinition": "calloc(n, size) cấp phát n phần tử và tự động xóa mọi byte về 0; chậm hơn malloc một chút nhưng an toàn hơn.",
    "codeHighlight": "int *p = (int*)calloc(10, sizeof(int));\n// Tat ca 10 phan tu deu khoi tao bang 0",
    "referencePage": "UTT tr.405 / HCMUTE tr.132",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Hàm calloc() vs malloc()"
    ]
  },
  {
    "id": "c-fc-ch6-013",
    "chapterId": 6,
    "question": "Hàm realloc() Thay Đổi Kích Thước",
    "answer": "Thay đổi kích thước vùng nhớ Heap đã cấp phát trước đó. Giữ nguyên dữ liệu cũ, tự động dời vùng nhớ nếu cần.",
    "frontConcept": "Hàm realloc() Thay Đổi Kích Thước",
    "backDefinition": "Thay đổi kích thước vùng nhớ Heap đã cấp phát trước đó. Giữ nguyên dữ liệu cũ, tự động dời vùng nhớ nếu cần.",
    "codeHighlight": "p = (int*)realloc(p, 20 * sizeof(int));\n// Tang kich thuoc tu 10 len 20 phan tu",
    "referencePage": "UTT tr.406 / HCMUTE tr.133",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Hàm realloc() Thay Đổi Kích Thước"
    ]
  },
  {
    "id": "c-fc-ch6-014",
    "chapterId": 6,
    "question": "Hàm free() và Rò Rỉ Bộ Nhớ",
    "answer": "free(ptr) giải phóng vùng nhớ Heap trả về cho OS. Quên gọi free() gây rò rỉ bộ nhớ (Memory Leak), cạn kiệt RAM.",
    "frontConcept": "Hàm free() và Rò Rỉ Bộ Nhớ",
    "backDefinition": "free(ptr) giải phóng vùng nhớ Heap trả về cho OS. Quên gọi free() gây rò rỉ bộ nhớ (Memory Leak), cạn kiệt RAM.",
    "codeHighlight": "free(p);\np = NULL; // Tránh con trỏ treo (Dangling)",
    "referencePage": "UTT tr.408 / HCMUTE tr.134",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Hàm free() và Rò Rỉ Bộ Nhớ"
    ]
  },
  {
    "id": "c-fc-ch6-015",
    "chapterId": 6,
    "question": "Con Trỏ Cấp 2 (Pointer to Pointer)",
    "answer": "Biến con trỏ lưu trữ địa chỉ của một con trỏ khác: int **pp = &p;. Thường dùng quản lý ma trận động hoặc mảng chuỗi.",
    "frontConcept": "Con Trỏ Cấp 2 (Pointer to Pointer)",
    "backDefinition": "Biến con trỏ lưu trữ địa chỉ của một con trỏ khác: int **pp = &p;. Thường dùng quản lý ma trận động hoặc mảng chuỗi.",
    "codeHighlight": "int x = 10, *p = &x, **pp = &p;\nprintf(\"%d\", **pp); // In ra 10",
    "referencePage": "UTT tr.410 / HCMUTE tr.135",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Con Trỏ Cấp 2 (Pointer to Pointer)"
    ]
  },
  {
    "id": "c-fc-ch6-016",
    "chapterId": 6,
    "question": "Con Trỏ Hàm (Function Pointer)",
    "answer": "Con trỏ lưu địa chỉ bắt đầu của mã máy hàm trong Code Segment. Dùng cho hàm callback hoặc bảng điều phối sự kiện.",
    "frontConcept": "Con Trỏ Hàm (Function Pointer)",
    "backDefinition": "Con trỏ lưu địa chỉ bắt đầu của mã máy hàm trong Code Segment. Dùng cho hàm callback hoặc bảng điều phối sự kiện.",
    "codeHighlight": "int cong(int a, int b) { return a + b; }\nint (*pFunc)(int, int) = cong;\nprintf(\"%d\", pFunc(2, 3)); // In: 5",
    "referencePage": "UTT tr.411 / HCMUTE tr.135",
    "masteryLevel": "learning",
    "tags": [
      "Chương 6",
      "Flashcard",
      "Con Trỏ Hàm (Function Pointer)"
    ]
  }
];
