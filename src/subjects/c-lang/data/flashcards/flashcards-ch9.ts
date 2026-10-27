/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch9.ts
 * Thẻ ghi nhớ Flashcard Chương 9 (12 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh9: CFlashcard[] = [
  {
    "id": "c-fc-ch9-001",
    "chapterId": 9,
    "question": "Luồng Xuất Nhập std::cout và std::cin",
    "answer": "C++ dùng toán tử chèn << và trích >> trong <iostream>, an toàn kiểu dữ liệu, không cần mã định dạng %d.",
    "frontConcept": "Luồng Xuất Nhập std::cout và std::cin",
    "backDefinition": "C++ dùng toán tử chèn << và trích >> trong <iostream>, an toàn kiểu dữ liệu, không cần mã định dạng %d.",
    "codeHighlight": "#include <iostream>\nstd::cout << \"Nhap x: \";\nstd::cin >> x;",
    "referencePage": "UTT tr.72 / HCMUTE tr.20",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Luồng Xuất Nhập std::cout và std::cin"
    ]
  },
  {
    "id": "c-fc-ch9-002",
    "chapterId": 9,
    "question": "Biến Tham Chiếu (Reference int &ref)",
    "answer": "Là bí danh (Alias) của một biến đã tồn tại. Bắt buộc khởi tạo ngay khi khai báo; thao tác trên ref chính là trên biến gốc.",
    "frontConcept": "Biến Tham Chiếu (Reference int &ref)",
    "backDefinition": "Là bí danh (Alias) của một biến đã tồn tại. Bắt buộc khởi tạo ngay khi khai báo; thao tác trên ref chính là trên biến gốc.",
    "codeHighlight": "int a = 10;\nint &ref = a;\nref = 20; // a tro thanh 20!",
    "referencePage": "UTT tr.74 / HCMUTE tr.22",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Biến Tham Chiếu (Reference int &ref)"
    ]
  },
  {
    "id": "c-fc-ch9-003",
    "chapterId": 9,
    "question": "Truyền Tham Chiếu vào Hàm C++",
    "answer": "Cú pháp tự nhiên như truyền tham trị nhưng bản chất sửa đổi biến gốc trực tiếp mà không cần dùng toán tử con trỏ *.",
    "frontConcept": "Truyền Tham Chiếu vào Hàm C++",
    "backDefinition": "Cú pháp tự nhiên như truyền tham trị nhưng bản chất sửa đổi biến gốc trực tiếp mà không cần dùng toán tử con trỏ *.",
    "codeHighlight": "void swap(int &a, int &b) {\n    int tmp = a; a = b; b = tmp;\n}\n// Goi: swap(x, y);",
    "referencePage": "UTT tr.75 / HCMUTE tr.24",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Truyền Tham Chiếu vào Hàm C++"
    ]
  },
  {
    "id": "c-fc-ch9-004",
    "chapterId": 9,
    "question": "Cấp Phát Động new và delete",
    "answer": "Toán tử C++ thay thế malloc/free: tự động tính kích thước byte và tự động gọi hàm khởi tạo Constructor của đối tượng.",
    "frontConcept": "Cấp Phát Động new và delete",
    "backDefinition": "Toán tử C++ thay thế malloc/free: tự động tính kích thước byte và tự động gọi hàm khởi tạo Constructor của đối tượng.",
    "codeHighlight": "int *p = new int(100);\ndelete p;\np = nullptr;",
    "referencePage": "UTT tr.76 / HCMUTE tr.121",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Cấp Phát Động new và delete"
    ]
  },
  {
    "id": "c-fc-ch9-005",
    "chapterId": 9,
    "question": "Bẫy new[] và delete[] cho Mảng",
    "answer": "Cấp phát mảng động new[] bắt buộc phải giải phóng bằng delete[]. Dùng delete thường sẽ gây rò rỉ bộ nhớ hoặc sập chương trình.",
    "frontConcept": "Bẫy new[] và delete[] cho Mảng",
    "backDefinition": "Cấp phát mảng động new[] bắt buộc phải giải phóng bằng delete[]. Dùng delete thường sẽ gây rò rỉ bộ nhớ hoặc sập chương trình.",
    "codeHighlight": "int *arr = new int[50];\ndelete[] arr; // Dung quy tac cap phat mang",
    "referencePage": "UTT tr.77 / HCMUTE tr.122",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Bẫy new[] và delete[] cho Mảng"
    ]
  },
  {
    "id": "c-fc-ch9-006",
    "chapterId": 9,
    "question": "Nạp Chồng Hàm (Function Overloading)",
    "answer": "Nhiều hàm có cùng tên trong cùng phạm vi nhưng khác nhau về danh sách tham số (số lượng hoặc kiểu dữ liệu).",
    "frontConcept": "Nạp Chồng Hàm (Function Overloading)",
    "backDefinition": "Nhiều hàm có cùng tên trong cùng phạm vi nhưng khác nhau về danh sách tham số (số lượng hoặc kiểu dữ liệu).",
    "codeHighlight": "int add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }",
    "referencePage": "UTT tr.78 / HCMUTE tr.123",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Nạp Chồng Hàm (Function Overloading)"
    ]
  },
  {
    "id": "c-fc-ch9-007",
    "chapterId": 9,
    "question": "Tham Số Mặc Định (Default Arguments)",
    "answer": "Cho phép gán sẵn giá trị mặc định cho tham số từ phải sang trái. Nếu người gọi không truyền đối số, giá trị mặc định được dùng.",
    "frontConcept": "Tham Số Mặc Định (Default Arguments)",
    "backDefinition": "Cho phép gán sẵn giá trị mặc định cho tham số từ phải sang trái. Nếu người gọi không truyền đối số, giá trị mặc định được dùng.",
    "codeHighlight": "void log(const char *msg, int level = 1) {\n    // level mac dinh la 1\n}",
    "referencePage": "UTT tr.79 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Tham Số Mặc Định (Default Arguments)"
    ]
  },
  {
    "id": "c-fc-ch9-008",
    "chapterId": 9,
    "question": "Bản Chất Class trong OOP C++",
    "answer": "Đóng gói dữ liệu (thuộc tính) và hàm (phương thức). Mặc định các thành viên trong class có phạm vi private (khác struct là public).",
    "frontConcept": "Bản Chất Class trong OOP C++",
    "backDefinition": "Đóng gói dữ liệu (thuộc tính) và hàm (phương thức). Mặc định các thành viên trong class có phạm vi private (khác struct là public).",
    "codeHighlight": "class HinhTron {\nprivate:\n    double r;\npublic:\n    HinhTron(double banKinh) : r(banKinh) {}\n};",
    "referencePage": "UTT tr.80 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Bản Chất Class trong OOP C++"
    ]
  },
  {
    "id": "c-fc-ch9-009",
    "chapterId": 9,
    "question": "Hàm Khởi Tạo (Constructor)",
    "answer": "Tự động gọi khi đối tượng được sinh ra. Cùng tên với class, không có kiểu trả về. Dùng để khởi tạo giá trị ban đầu cho thuộc tính.",
    "frontConcept": "Hàm Khởi Tạo (Constructor)",
    "backDefinition": "Tự động gọi khi đối tượng được sinh ra. Cùng tên với class, không có kiểu trả về. Dùng để khởi tạo giá trị ban đầu cho thuộc tính.",
    "codeHighlight": "class Diem {\npublic:\n    int x, y;\n    Diem(int xVal, int yVal) : x(xVal), y(yVal) {}\n};",
    "referencePage": "UTT tr.81 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Hàm Khởi Tạo (Constructor)"
    ]
  },
  {
    "id": "c-fc-ch9-010",
    "chapterId": 9,
    "question": "Hàm Hủy (Destructor)",
    "answer": "Tự động gọi khi đối tượng ra khỏi phạm vi sống. Có tiền tố ~ClassName(), không có tham số và kiểu trả về. Dùng dọn dẹp bộ nhớ động.",
    "frontConcept": "Hàm Hủy (Destructor)",
    "backDefinition": "Tự động gọi khi đối tượng ra khỏi phạm vi sống. Có tiền tố ~ClassName(), không có tham số và kiểu trả về. Dùng dọn dẹp bộ nhớ động.",
    "codeHighlight": "class MangDong {\n    int *data;\npublic:\n    ~MangDong() { delete[] data; }\n};",
    "referencePage": "UTT tr.81 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Hàm Hủy (Destructor)"
    ]
  },
  {
    "id": "c-fc-ch9-011",
    "chapterId": 9,
    "question": "Bẫy Hàm Hủy Ảo (Virtual Destructor)",
    "answer": "Khi xóa đối tượng con qua con trỏ lớp cha đa hình Base *p = new Derived(); delete p; nếu Base thiếu virtual ~Base(), hàm hủy Derived bị bỏ qua.",
    "frontConcept": "Bẫy Hàm Hủy Ảo (Virtual Destructor)",
    "backDefinition": "Khi xóa đối tượng con qua con trỏ lớp cha đa hình Base *p = new Derived(); delete p; nếu Base thiếu virtual ~Base(), hàm hủy Derived bị bỏ qua.",
    "codeHighlight": "class Base {\npublic:\n    virtual ~Base() {} // Bat buoc phai co virtual!\n};",
    "referencePage": "UTT tr.82 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Bẫy Hàm Hủy Ảo (Virtual Destructor)"
    ]
  },
  {
    "id": "c-fc-ch9-012",
    "chapterId": 9,
    "question": "Quy Tắc Tam Đại (Rule of Three)",
    "answer": "Nếu một class quản lý tài nguyên động cần tự viết Destructor, nó bắt buộc phải tự cài đặt cả Copy Constructor và Copy Assignment Operator.",
    "frontConcept": "Quy Tắc Tam Đại (Rule of Three)",
    "backDefinition": "Nếu một class quản lý tài nguyên động cần tự viết Destructor, nó bắt buộc phải tự cài đặt cả Copy Constructor và Copy Assignment Operator.",
    "codeHighlight": "// 1. Destructor: ~MyClass()\n// 2. Copy Constructor: MyClass(const MyClass&)\n// 3. Assignment Operator: operator=",
    "referencePage": "UTT tr.82 / HCMUTE tr.124",
    "masteryLevel": "learning",
    "tags": [
      "Chương 9",
      "Flashcard",
      "Quy Tắc Tam Đại (Rule of Three)"
    ]
  }
];
