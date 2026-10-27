/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch7.ts
 * Thẻ ghi nhớ Flashcard Chương 7 (14 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh7: CFlashcard[] = [
  {
    "id": "c-fc-ch7-001",
    "chapterId": 7,
    "question": "Kiểu Cấu Trúc (Struct)",
    "answer": "Kiểu dữ liệu tự tạo cho phép gom nhóm các biến có kiểu dữ liệu khác nhau lại thành một thực thể có ý nghĩa.",
    "frontConcept": "Kiểu Cấu Trúc (Struct)",
    "backDefinition": "Kiểu dữ liệu tự tạo cho phép gom nhóm các biến có kiểu dữ liệu khác nhau lại thành một thực thể có ý nghĩa.",
    "codeHighlight": "struct SinhVien {\n    char mssv[10];\n    float diem;\n};",
    "referencePage": "UTT tr.421 / HCMUTE tr.159",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Kiểu Cấu Trúc (Struct)"
    ]
  },
  {
    "id": "c-fc-ch7-002",
    "chapterId": 7,
    "question": "Toán Tử Chấm '.' vs Mũi Tên '->'",
    "answer": "Dùng dấu chấm '.' cho biến struct thông thường: sv.diem. Dùng mũi tên '->' cho con trỏ trỏ struct: p->diem (tương đương (*p).diem).",
    "frontConcept": "Toán Tử Chấm '.' vs Mũi Tên '->'",
    "backDefinition": "Dùng dấu chấm '.' cho biến struct thông thường: sv.diem. Dùng mũi tên '->' cho con trỏ trỏ struct: p->diem (tương đương (*p).diem).",
    "codeHighlight": "struct SinhVien sv, *p = &sv;\nsv.diem = 8.5;\np->diem = 9.0; // Tuong duong (*p).diem",
    "referencePage": "UTT tr.425 / HCMUTE tr.162",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Toán Tử Chấm '.' vs Mũi Tên '->'"
    ]
  },
  {
    "id": "c-fc-ch7-003",
    "chapterId": 7,
    "question": "Từ Khóa typedef cho Struct",
    "answer": "Tạo bí danh ngắn gọn cho struct để không phải gõ lại chữ 'struct' mỗi khi khai báo biến mới.",
    "frontConcept": "Từ Khóa typedef cho Struct",
    "backDefinition": "Tạo bí danh ngắn gọn cho struct để không phải gõ lại chữ 'struct' mỗi khi khai báo biến mới.",
    "codeHighlight": "typedef struct {\n    int x, y;\n} Point;\nPoint p1 = {10, 20};",
    "referencePage": "UTT tr.430 / HCMUTE tr.165",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Từ Khóa typedef cho Struct"
    ]
  },
  {
    "id": "c-fc-ch7-004",
    "chapterId": 7,
    "question": "Mảng Các Cấu Trúc (Array of Structs)",
    "answer": "Tập hợp danh sách nhiều phần tử struct, tổ chức như bảng cơ sở dữ liệu thu nhỏ trong bộ nhớ.",
    "frontConcept": "Mảng Các Cấu Trúc (Array of Structs)",
    "backDefinition": "Tập hợp danh sách nhiều phần tử struct, tổ chức như bảng cơ sở dữ liệu thu nhỏ trong bộ nhớ.",
    "codeHighlight": "typedef struct { char ten[30]; int tuoi; } Nguoi;\nNguoi ds[50];\nds[0].tuoi = 20;",
    "referencePage": "UTT tr.435 / HCMUTE tr.168",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Mảng Các Cấu Trúc (Array of Structs)"
    ]
  },
  {
    "id": "c-fc-ch7-005",
    "chapterId": 7,
    "question": "Đệm Bộ Nhớ Struct Padding",
    "answer": "Trình biên dịch tự chèn byte rác (Padding) để căn chỉnh địa chỉ theo bội số trường lớn nhất, tối ưu tốc độ CPU.",
    "frontConcept": "Đệm Bộ Nhớ Struct Padding",
    "backDefinition": "Trình biên dịch tự chèn byte rác (Padding) để căn chỉnh địa chỉ theo bội số trường lớn nhất, tối ưu tốc độ CPU.",
    "codeHighlight": "struct Demo {\n    char c; // 1 byte + 3 byte padding\n    int i;  // 4 byte\n}; // sizeof(Demo) = 8 bytes!",
    "referencePage": "UTT tr.446 / HCMUTE tr.172",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Đệm Bộ Nhớ Struct Padding"
    ]
  },
  {
    "id": "c-fc-ch7-006",
    "chapterId": 7,
    "question": "Kỹ Thuật Sắp Xếp Trường Struct",
    "answer": "Khai báo các trường có kích thước byte từ lớn đến nhỏ sẽ giúp giảm thiểu tối đa các byte đệm padding thừa thãi.",
    "frontConcept": "Kỹ Thuật Sắp Xếp Trường Struct",
    "backDefinition": "Khai báo các trường có kích thước byte từ lớn đến nhỏ sẽ giúp giảm thiểu tối đa các byte đệm padding thừa thãi.",
    "codeHighlight": "struct ToiUu {\n    double d; // 8B\n    int i;    // 4B\n    char c;   // 1B + 3B padding = 16B tong\n};",
    "referencePage": "UTT tr.450 / HCMUTE tr.174",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Kỹ Thuật Sắp Xếp Trường Struct"
    ]
  },
  {
    "id": "c-fc-ch7-007",
    "chapterId": 7,
    "question": "Truyền Struct vào Hàm",
    "answer": "Truyền struct theo giá trị sao chép toàn bộ byte (chậm nếu struct lớn). Nên truyền qua con trỏ hằng const Struct* để tối ưu.",
    "frontConcept": "Truyền Struct vào Hàm",
    "backDefinition": "Truyền struct theo giá trị sao chép toàn bộ byte (chậm nếu struct lớn). Nên truyền qua con trỏ hằng const Struct* để tối ưu.",
    "codeHighlight": "void inSV(const SinhVien *sv) {\n    printf(\"%s: %.1f\\n\", sv->ten, sv->diem);\n}",
    "referencePage": "UTT tr.455 / HCMUTE tr.175",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Truyền Struct vào Hàm"
    ]
  },
  {
    "id": "c-fc-ch7-008",
    "chapterId": 7,
    "question": "Cấu Trúc Lồng Nhau (Nested Struct)",
    "answer": "Một struct có thể chứa trường là một struct khác đã được định nghĩa trước đó.",
    "frontConcept": "Cấu Trúc Lồng Nhau (Nested Struct)",
    "backDefinition": "Một struct có thể chứa trường là một struct khác đã được định nghĩa trước đó.",
    "codeHighlight": "typedef struct { int ngay, thang, nam; } NgayThang;\ntypedef struct { char ten[30]; NgayThang ns; } NhanVien;\nNhanVien nv; nv.ns.nam = 2000;",
    "referencePage": "UTT tr.458 / HCMUTE tr.176",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Cấu Trúc Lồng Nhau (Nested Struct)"
    ]
  },
  {
    "id": "c-fc-ch7-009",
    "chapterId": 7,
    "question": "Bản Chất Kiểu Hợp (Union)",
    "answer": "Mọi thành viên trong union chia sẻ chung một địa chỉ bộ nhớ bắt đầu. Kích thước bằng thành viên lớn nhất.",
    "frontConcept": "Bản Chất Kiểu Hợp (Union)",
    "backDefinition": "Mọi thành viên trong union chia sẻ chung một địa chỉ bộ nhớ bắt đầu. Kích thước bằng thành viên lớn nhất.",
    "codeHighlight": "union Data {\n    int i;     // 4 bytes\n    float f;   // 4 bytes\n    char str[10]; // 10 bytes -> sizeof = 10\n};",
    "referencePage": "UTT tr.462 / HCMUTE tr.178",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Bản Chất Kiểu Hợp (Union)"
    ]
  },
  {
    "id": "c-fc-ch7-010",
    "chapterId": 7,
    "question": "Ghi Đè Thành Viên trong Union",
    "answer": "Gán giá trị vào một thành viên trong union sẽ ghi đè và làm hỏng giá trị của các thành viên còn lại.",
    "frontConcept": "Ghi Đè Thành Viên trong Union",
    "backDefinition": "Gán giá trị vào một thành viên trong union sẽ ghi đè và làm hỏng giá trị của các thành viên còn lại.",
    "codeHighlight": "union Data d;\nd.i = 42;\nd.f = 3.14f; // Ghi de, d.i khong con la 42!",
    "referencePage": "UTT tr.465 / HCMUTE tr.180",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Ghi Đè Thành Viên trong Union"
    ]
  },
  {
    "id": "c-fc-ch7-011",
    "chapterId": 7,
    "question": "Kiểu Liệt Kê (Enum)",
    "answer": "Tập hợp các hằng số nguyên có tên định danh gợi nhớ. Mặc định giá trị bắt đầu từ 0 và tự tăng 1.",
    "frontConcept": "Kiểu Liệt Kê (Enum)",
    "backDefinition": "Tập hợp các hằng số nguyên có tên định danh gợi nhớ. Mặc định giá trị bắt đầu từ 0 và tự tăng 1.",
    "codeHighlight": "enum Thu { THU_HAI = 2, THU_BA, THU_TU };\nenum Thu t = THU_BA; // t = 3",
    "referencePage": "UTT tr.476 / HCMUTE tr.184",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Kiểu Liệt Kê (Enum)"
    ]
  },
  {
    "id": "c-fc-ch7-012",
    "chapterId": 7,
    "question": "Ứng Dụng Enum trong Máy Trạng Thái",
    "answer": "Dùng enum định nghĩa các trạng thái hữu hạn (FSM) giúp code sáng rõ, tránh dùng các số nguyên ma thuật (Magic numbers).",
    "frontConcept": "Ứng Dụng Enum trong Máy Trạng Thái",
    "backDefinition": "Dùng enum định nghĩa các trạng thái hữu hạn (FSM) giúp code sáng rõ, tránh dùng các số nguyên ma thuật (Magic numbers).",
    "codeHighlight": "typedef enum { IDLE, RUNNING, STOPPED } State;\nState curState = IDLE;",
    "referencePage": "UTT tr.480 / HCMUTE tr.186",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Ứng Dụng Enum trong Máy Trạng Thái"
    ]
  },
  {
    "id": "c-fc-ch7-013",
    "chapterId": 7,
    "question": "Trường Bit (Bit-fields) trong Struct",
    "answer": "Quy định số bit cụ thể cho từng thành viên số nguyên để tiết kiệm bộ nhớ khi lập trình nhúng / giao thức mạng.",
    "frontConcept": "Trường Bit (Bit-fields) trong Struct",
    "backDefinition": "Quy định số bit cụ thể cho từng thành viên số nguyên để tiết kiệm bộ nhớ khi lập trình nhúng / giao thức mạng.",
    "codeHighlight": "struct Header {\n    unsigned int version : 4; // chi ton 4 bit\n    unsigned int flags   : 4;\n};",
    "referencePage": "UTT tr.488 / HCMUTE tr.190",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Trường Bit (Bit-fields) trong Struct"
    ]
  },
  {
    "id": "c-fc-ch7-014",
    "chapterId": 7,
    "question": "Phép Gán Hai Biến Struct",
    "answer": "C cho phép gán trực tiếp struct1 = struct2 nếu cùng kiểu (sao chép từng byte). Union cũng làm được điều này.",
    "frontConcept": "Phép Gán Hai Biến Struct",
    "backDefinition": "C cho phép gán trực tiếp struct1 = struct2 nếu cùng kiểu (sao chép từng byte). Union cũng làm được điều này.",
    "codeHighlight": "Point p1 = {3, 4};\nPoint p2 = p1; // p2 co x=3, y=4",
    "referencePage": "UTT tr.428 / HCMUTE tr.164",
    "masteryLevel": "learning",
    "tags": [
      "Chương 7",
      "Flashcard",
      "Phép Gán Hai Biến Struct"
    ]
  }
];
