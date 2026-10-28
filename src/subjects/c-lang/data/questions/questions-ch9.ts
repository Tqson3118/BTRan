/**
 * src/subjects/c-lang/data/questions/questions-ch9.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 9: C++ Căn bản & Lập trình Hướng đối tượng (OOP)
 * Số lượng: 25 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh9: CQuestion[] = [
  {
    id: 'q-c-ch9-001',
    chapterId: 9,
    articleId: 'c-art-ch9-01',
    content: "Bản chất của biến tham chiếu (Reference variable, ví dụ: int &ref = x) trong C++ là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Là một biến con trỏ thông thường có khả năng tự do thay đổi địa chỉ trỏ sang các biến số khác." },
      { id: 'B', text: "Là một bản sao độc lập của biến gốc được cấp phát tự động trên phân vùng bộ nhớ động Heap." },
      { id: 'C', text: "Là một biến hằng số chỉ đọc (Read-only) không bao giờ cho phép người dùng thay đổi giá trị." },
      { id: 'D', text: "Là một bí danh (Alias) cùng chia sẻ một vị trí ô nhớ và bắt buộc phải khởi tạo ngay khi khai báo." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ chuẩn C++: Biến tham chiếu là bí danh (alias) của biến đã có. Tham chiếu không có ô nhớ riêng để chứa địa chỉ như con trỏ và bắt buộc phải gắn với một lvalue ngay khi khai báo.",
    tags: ["c-lang", "ch9", "theory", "easy"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch9-002',
    chapterId: 9,
    articleId: 'c-art-ch9-01',
    content: "Điểm khác biệt căn bản nhất giữa biến tham chiếu và biến con trỏ trong ngôn ngữ C++ là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tham chiếu không thể mang giá trị NULL và không thể gán lại để trỏ sang một biến số khác." },
      { id: 'B', text: "Tham chiếu có thể giải tham chiếu bằng toán tử '*' tương tự như biến con trỏ thông thường." },
      { id: 'C', text: "Con trỏ bắt buộc phải được khởi tạo ngay khi khai báo còn biến tham chiếu thì không cần." },
      { id: 'D', text: "Tham chiếu tiêu tốn gấp đôi dung lượng bộ nhớ RAM so với biến con trỏ trên hệ thống 64-bit." },
    ],
    correctAnswers: ['A'],
    explanation: "Khác với con trỏ: 1) Tham chiếu không thể null; 2) Tham chiếu không thể trỏ sang đối tượng khác sau khi đã gắn; 3) Cú pháp truy cập không cần dùng toán tử giải tham chiếu *.",
    tags: ["c-lang", "ch9", "theory", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-003',
    chapterId: 9,
    articleId: 'c-art-ch9-02',
    content: "Quy tắc định danh để hai hàm được xem là nạp chồng (Function Overloading) hợp lệ trong C++ là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Chỉ cần khác nhau về kiểu dữ liệu trả về của hàm còn danh sách tham số hoàn toàn giống nhau." },
      { id: 'B', text: "Cùng tên hàm nhưng phải khác nhau về danh sách kiểu dữ liệu hoặc số lượng của các tham số." },
      { id: 'C', text: "Cùng tên hàm và cùng tham số nhưng một hàm bắt buộc phải có từ khóa inline đứng phía trước." },
      { id: 'D', text: "Bắt buộc hai hàm phải được khai báo ở hai không gian tên namespace hoàn toàn tách biệt nhau." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ C++ overload resolution: Nạp chồng hàm yêu cầu khác biệt về chữ ký hàm (function signature: số lượng, kiểu, hoặc thứ tự tham số). Chỉ khác kiểu trả về sẽ gây lỗi biên dịch.",
    tags: ["c-lang", "ch9", "theory", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-004',
    chapterId: 9,
    articleId: 'c-art-ch9-03',
    content: "Ưu điểm vượt trội của cặp toán tử new / delete trong C++ so với cặp hàm malloc / free trong C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tự động kích hoạt hàm khởi tạo (Constructor) và hàm hủy (Destructor) của đối tượng được tạo." },
      { id: 'B', text: "Toán tử new không thể gây ra lỗi tràn bộ nhớ ngay cả khi hệ thống cạn kiệt dung lượng RAM." },
      { id: 'C', text: "Toán tử delete tự động giải phóng toàn bộ các con trỏ khác đang trỏ vào cùng một vùng nhớ." },
      { id: 'D', text: "Toán tử new tự động giải phóng vùng nhớ khi đối tượng ra khỏi phạm vi khối lệnh cục bộ." },
    ],
    correctAnswers: ['A'],
    explanation: "Toán tử `new` tính toán kích thước tự động và gọi Constructor; `delete` gọi Destructor trước khi trả bộ nhớ. `malloc/free` chỉ cấp phát/thu hồi byte thô mà không gọi Constructor/Destructor.",
    tags: ["c-lang", "ch9", "theory", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.3',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch9-005',
    chapterId: 9,
    articleId: 'c-art-ch9-03',
    content: "Quy tắc giải phóng mảng động đối tượng được cấp phát bằng toán tử 'new ClassName[N]' là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Có thể sử dụng toán tử 'delete ptr;' thông thường vì trình biên dịch tự động đếm số phần tử." },
      { id: 'B', text: "Chỉ cần gọi hàm free(ptr) của ngôn ngữ C là có thể thu hồi hoàn toàn mảng động trong C++." },
      { id: 'C', text: "Bắt buộc phải sử dụng toán tử 'delete[] ptr;' để kích hoạt đầy đủ hàm hủy của từng đối tượng." },
      { id: 'D', text: "Mảng động trong C++ sẽ được bộ gom rác tự động giải phóng mà không cần lập trình viên can thiệp." },
    ],
    correctAnswers: ['C'],
    explanation: "Cấp phát bằng `new[]` phải giải phóng bằng `delete[]`. Nếu dùng `delete`, chỉ hàm hủy của phần tử đầu tiên được gọi (Undefined Behavior).",
    tags: ["c-lang", "ch9", "theory", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-006',
    chapterId: 9,
    articleId: 'c-art-ch9-04',
    content: "Phạm vi truy cập mặc định (Default access specifier) của các thành viên trong một class C++ là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Mặc định là public (tất cả các hàm bên ngoài đều có thể truy cập tự do vào các thuộc tính)." },
      { id: 'B', text: "Mặc định là protected (chỉ class hiện tại và các lớp dẫn xuất kế thừa mới được phép truy cập)." },
      { id: 'C', text: "Mặc định là static (các thành viên được chia sẻ chung cho tất cả các đối tượng của lớp đó)." },
      { id: 'D', text: "Mặc định là private (chỉ các phương thức nội bộ bên trong class mới có quyền truy cập trực tiếp)." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C++, `class` mặc định các thành viên là `private`. Trong `struct`, mặc định là `public`. Đây là điểm khác biệt duy nhất giữa class và struct trong C++.",
    tags: ["c-lang", "ch9", "theory", "easy"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-007',
    chapterId: 9,
    articleId: 'c-art-ch9-04',
    content: "Đặc điểm nhận diện cú pháp của hàm khởi tạo (Constructor) trong một lớp C++ là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Có tên trùng hoàn toàn với tên của class và tuyệt đối không có kiểu dữ liệu trả về (kể cả void)." },
      { id: 'B', text: "Có tên bắt đầu bằng dấu ngã '~' và có kiểu dữ liệu trả về mặc định là số nguyên int có dấu." },
      { id: 'C', text: "Bắt buộc phải có từ khóa virtual đứng trước và có tham số đầu vào là con trỏ đối tượng this." },
      { id: 'D', text: "Có tên là init và bắt buộc phải được khai báo trong phần phạm vi truy cập công khai public." },
    ],
    correctAnswers: ['A'],
    explanation: "Constructor có cùng tên với class, không có kiểu trả về (kể cả void), tự động thực thi khi đối tượng được tạo ra.",
    tags: ["c-lang", "ch9", "theory", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-008',
    chapterId: 9,
    articleId: 'c-art-ch9-04',
    content: "Thời điểm mà hàm hủy (Destructor) của một đối tượng tự động trong C++ được kích hoạt là khi nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Khi đối tượng được truyền dưới dạng đối số tham chiếu vào trong một hàm thành viên khác." },
      { id: 'B', text: "Ngay khi đối tượng đó ra khỏi phạm vi tồn tại (Scope) hoặc khi giải phóng bằng toán tử delete." },
      { id: 'C', text: "Khi toàn bộ chương trình kết thúc và trả quyền điều khiển về lại cho hệ điều hành máy tính." },
      { id: 'D', text: "Chỉ khi nào lập trình viên chủ động gọi tường minh tên của hàm hủy thông qua con trỏ this." },
    ],
    correctAnswers: ['B'],
    explanation: "Destructor (`~ClassName()`) tự động chạy khi đối tượng Stack ra khỏi scope (gặp dấu closing brace `}`), hoặc khi `delete ptr;` đối với đối tượng cấp phát động.",
    tags: ["c-lang", "ch9", "theory", "easy"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-009',
    chapterId: 9,
    articleId: 'c-art-ch9-05',
    content: "Vì sao lớp cơ sở đa hình (Polymorphic Base Class) trong C++ BẮT BUỘC phải có hàm hủy ảo (Virtual Destructor)?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Để ngăn chặn việc người dùng khởi tạo các đối tượng độc lập thuộc về lớp cơ sở ban đầu." },
      { id: 'B', text: "Để đảm bảo hàm hủy của lớp dẫn xuất được kích hoạt khi xóa đối tượng qua con trỏ lớp cơ sở." },
      { id: 'C', text: "Để tăng tốc độ giải phóng vùng nhớ trên phân vùng Heap thông qua bảng phương thức ảo vtable." },
      { id: 'D', text: "Để cho phép các lớp con có thể truy cập trực tiếp vào các thuộc tính riêng tư private của cha." },
    ],
    correctAnswers: ['B'],
    explanation: "Nếu `Base *p = new Derived(); delete p;`, nếu Destructor của Base không phải `virtual`, compiler chỉ gọi `~Base()`, bỏ qua `~Derived()`, gây rò rỉ tài nguyên ở lớp con.",
    tags: ["c-lang", "ch9", "theory", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.5',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch9-010',
    chapterId: 9,
    articleId: 'c-art-ch9-05',
    content: "Một lớp trong C++ được gọi là lớp trừu tượng (Abstract Class) khi thỏa mãn điều kiện nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Có tất cả các thuộc tính dữ liệu đều được khai báo trong phạm vi truy cập riêng tư private." },
      { id: 'B', text: "Không hề có bất kỳ một phương thức thành viên nào mà chỉ chứa các trường khai báo biến số." },
      { id: 'C', text: "Chứa ít nhất một phương thức thuần ảo (Pure Virtual Function, ví dụ: virtual void f() = 0;)." },
      { id: 'D', text: "Được khai báo kết hợp đồng thời với từ khóa static và không cho phép tạo con trỏ trỏ tới." },
    ],
    correctAnswers: ['C'],
    explanation: "Lớp có ít nhất một hàm thuần ảo (`= 0`) là Abstract Class. Không thể khởi tạo đối tượng trực tiếp từ abstract class.",
    tags: ["c-lang", "ch9", "theory", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.5',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-011',
    chapterId: 9,
    articleId: 'c-art-ch9-01',
    content: "Kết quả in ra của chương trình truyền tham chiếu C++ sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <iostream>

void tang(int &n) {
    n += 10;
}

int main() {
    int a = 5;
    tang(a);
    std::cout << a;
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 5 (hàm tang chỉ thao tác trên biến bản sao cục bộ mà không thay đổi biến ngoài main)." },
      { id: 'B', text: "In ra số 10 (giá trị 10 ghi đè hoàn toàn lên giá trị khởi tạo ban đầu của biến số nguyên a)." },
      { id: 'C', text: "Chương trình gặp lỗi biên dịch do không truyền địa chỉ bằng toán tử '&a' khi gọi hàm tang." },
      { id: 'D', text: "In ra số 15 (tham số tham chiếu int &n cho phép hàm thay đổi trực tiếp giá trị của biến a)." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C++, tham số `int &n` nhận tham chiếu trực tiếp của `a`. Lệnh `n += 10` tăng biến `a` từ 5 lên 15. In ra 15.",
    tags: ["c-lang", "ch9", "output", "easy"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-012',
    chapterId: 9,
    articleId: 'c-art-ch9-02',
    content: "Giá trị in ra của chương trình có tham số mặc định (Default Argument) sau đây là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <iostream>

int tinh(int a, int b = 2, int c = 3) {
    return a + b * c;
}

int main() {
    std::cout << tinh(5, 4);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 17 (a nhận giá trị 5, b nhận 4 ghi đè giá trị mặc định, c nhận giá trị mặc định 3: 5 + 4*3 = 17)." },
      { id: 'B', text: "In ra số 11 (tham số mặc định b=2 và c=3 được ưu tiên sử dụng thay thế cho đối số truyền vào)." },
      { id: 'C', text: "In ra số 27 (các đối số được gán từ phải sang trái dẫn đến thứ tự tính toán bị thay đổi hoàn toàn)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do hàm tinh chỉ được cung cấp 2 đối số thay vì đủ 3 tham số." },
    ],
    correctAnswers: ['A'],
    explanation: "tinh(5, 4): a = 5, b = 4 (ghi đè 2), c = 3 (mặc định). Biểu thức 5 + 4 * 3 = 17.",
    tags: ["c-lang", "ch9", "output", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-013',
    chapterId: 9,
    articleId: 'c-art-ch9-04',
    content: "Thứ tự kích hoạt hàm khởi tạo và hàm hủy trong đoạn mã đối tượng C++ sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <iostream>

class Demo {
public:
    Demo() { std::cout << "A"; }
    ~Demo() { std::cout << "B"; }
};

int main() {
    {
        Demo d;
    }
    std::cout << "C";
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi 'ACB' (hàm hủy chỉ kích hoạt sau khi câu lệnh cuối cùng của hàm main hoàn tất)." },
      { id: 'B', text: "In ra chuỗi 'ABC' (hàm dựng chạy in 'A', thoát scope hàm hủy chạy in 'B', cuối cùng in 'C')." },
      { id: 'C', text: "In ra chuỗi 'CAB' (lệnh in bên ngoài khối lệnh luôn có mức ưu tiên thực thi cao hơn khối con)." },
      { id: 'D', text: "Chương trình chỉ in duy nhất chữ 'A' do đối tượng tự động không thể gọi hàm hủy trên Stack." },
    ],
    correctAnswers: ['B'],
    explanation: "Vào khối {}: `Demo d;` tạo đối tượng -> Constructor in 'A'. Gặp dấu `}`: d ra khỏi scope -> Destructor in 'B'. Sau đó in 'C'. Kết quả: 'ABC'.",
    tags: ["c-lang", "ch9", "output", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-014',
    chapterId: 9,
    articleId: 'c-art-ch9-05',
    content: "Tính đa hình động: Kết quả in ra của chương trình có phương thức ảo virtual sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <iostream>

class Base {
public:
    virtual void show() { std::cout << "Base "; }
};

class Derived : public Base {
public:
    void show() override { std::cout << "Derived "; }
};

int main() {
    Base *p = new Derived();
    p->show();
    delete p;
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra 'Base ' (con trỏ kiểu Base* nên trình biên dịch luôn liên kết tĩnh tới phương thức của Base)." },
      { id: 'B', text: "In ra 'Base Derived ' (cả hai phương thức của lớp cơ sở và lớp con đều lần lượt được thực thi)." },
      { id: 'C', text: "In ra 'Derived ' (nhờ từ khóa virtual, phương thức show() của lớp dẫn xuất được liên kết động)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do không thể gán con trỏ lớp con cho con trỏ lớp cha trong C++." },
    ],
    correctAnswers: ['C'],
    explanation: "Đa hình động (Dynamic dispatch): Vì `show()` là hàm `virtual`, lời gọi `p->show()` tra bảng vtable tại runtime và kích hoạt phương thức của đối tượng thực tế (`Derived::show()`).",
    tags: ["c-lang", "ch9", "output", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.5',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch9-015',
    chapterId: 9,
    articleId: 'c-art-ch9-02',
    content: "Kết quả phân giải nạp chồng hàm trong đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <iostream>

void in(int x) { std::cout << "Int "; }
void in(double x) { std::cout << "Double "; }

int main() {
    in(5);
    in(3.14);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi 'Int Int ' (tất cả các hằng số số học đều được tự động ép về kiểu số nguyên trong C++)." },
      { id: 'B', text: "In ra chuỗi 'Double Double ' (trình biên dịch luôn ưu tiên phiên bản hàm có độ chính xác cao hơn)." },
      { id: 'C', text: "Chương trình báo lỗi biên dịch do không thể nạp chồng hai hàm có cùng tên gọi trong cùng một tệp." },
      { id: 'D', text: "In ra chuỗi 'Int Double ' (5 là hằng số nguyên int, 3.14 là hằng số số thực dấu phẩy động double)." },
    ],
    correctAnswers: ['D'],
    explanation: "5 là literal int -> gọi `in(int)`. 3.14 là literal double -> gọi `in(double)`. In ra 'Int Double '.",
    tags: ["c-lang", "ch9", "output", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-016',
    chapterId: 9,
    articleId: 'c-art-ch9-01',
    content: "Giá trị in ra của biến x khi thay đổi thông qua biến tham chiếu ref là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <iostream>

int main() {
    int x = 20;
    int &ref = x;
    ref = 50;
    std::cout << x << " " << ref;
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '20 50' (ref là biến độc lập nên chỉ có giá trị của riêng biến ref được cập nhật lên 50)." },
      { id: 'B', text: "In ra '50 20' (giá trị của x thay đổi nhưng ref vẫn lưu giữ bản sao giá trị cũ ban đầu là 20)." },
      { id: 'C', text: "In ra '50 50' (vì ref là bí danh của x nên thay đổi ref cũng chính là thay đổi trực tiếp biến x)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do không thể gán lại giá trị cho một biến tham chiếu trong C++." },
    ],
    correctAnswers: ['C'],
    explanation: "ref và x là cùng 1 ô nhớ. `ref = 50` làm giá trị ô nhớ đó thành 50. In ra '50 50'.",
    tags: ["c-lang", "ch9", "output", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-017',
    chapterId: 9,
    articleId: 'c-art-ch9-04',
    content: "Thứ tự thực thi của Constructor trong quan hệ kế thừa đơn sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <iostream>

class Cha {
public:
    Cha() { std::cout << "1"; }
};

class Con : public Cha {
public:
    Con() { std::cout << "2"; }
};

int main() {
    Con c;
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi '12' (Constructor của lớp cơ sở Cha luôn luôn được thực thi trước Constructor của Con)." },
      { id: 'B', text: "In ra chuỗi '21' (Constructor của lớp dẫn xuất Con được gọi trước để định hình cấu trúc đối tượng)." },
      { id: 'C', text: "Chỉ in duy nhất số '2' (Constructor của lớp con ghi đè hoàn toàn Constructor của lớp cơ sở)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do lớp con không gọi tường minh Constructor của lớp cha trong mã." },
    ],
    correctAnswers: ['A'],
    explanation: "Khi khởi tạo đối tượng lớp con, Constructor của lớp cha luôn chạy trước để khởi tạo phần thừa kế, sau đó mới tới Constructor của lớp con. In ra '12'.",
    tags: ["c-lang", "ch9", "output", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-018',
    chapterId: 9,
    articleId: 'c-art-ch9-01',
    content: "Vì sao dòng lệnh khai báo tham chiếu sau đây phát sinh lỗi biên dịch ngay lập tức?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `int &ref; // Bi loi bien dich`,
    options: [
      { id: 'A', text: "Ngôn ngữ C++ không cho phép khai báo biến tham chiếu cho các kiểu dữ liệu số nguyên int." },
      { id: 'B', text: "Biến tham chiếu bắt buộc phải được khởi tạo gắn với một biến có sẵn ngay tại thời điểm khai báo." },
      { id: 'C', text: "Thiếu từ khóa pointer đặt trước tên biến để trình biên dịch cấp phát ô nhớ quản lý địa chỉ." },
      { id: 'D', text: "Toán tử '&' chỉ được phép sử dụng trong các câu lệnh nhập liệu bằng hàm scanf của ngôn ngữ C." },
    ],
    correctAnswers: ['B'],
    explanation: "Tham chiếu là bí danh (alias), không thể tồn tại độc lập mà không trỏ vào biến nào. Lỗi: 'error: 'ref' declared as reference but not initialized'.",
    tags: ["c-lang", "ch9", "debug", "easy"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-019',
    chapterId: 9,
    articleId: 'c-art-ch9-03',
    content: "Lỗi quản lý tài nguyên nào xuất hiện khi giải phóng mảng đối tượng động trong đoạn mã sau?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `class Test {
    // Co cap phat dong ben trong
};
Test *arr = new Test[10];
delete arr; // Dung sai toan tu`,
    options: [
      { id: 'A', text: "Không được phép cấp phát mảng đối tượng động bằng toán tử new trên ngôn ngữ lập trình C++." },
      { id: 'B', text: "Toán tử delete bắt buộc phải đi kèm với kích thước số lượng phần tử truyền vào trong ngoặc vuông." },
      { id: 'C', text: "Dùng sai toán tử 'delete' thay vì 'delete[]', dẫn đến chỉ có phần tử đầu tiên được gọi hàm hủy." },
      { id: 'D', text: "Mảng đối tượng động arr sẽ tự động bị xóa hai lần làm hỏng cấu trúc phân vùng nhớ của Heap." },
    ],
    correctAnswers: ['C'],
    explanation: "Bẫy `delete` vs `delete[]`: Cấp phát mảng bằng `new[]` thì phải hủy bằng `delete[]`. Dùng `delete arr` là Undefined Behavior, chỉ hủy phần tử đầu tiên, gây rò rỉ tài nguyên của 9 phần tử còn lại.",
    tags: ["c-lang", "ch9", "debug", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-020',
    chapterId: 9,
    articleId: 'c-art-ch9-05',
    content: "Đoạn mã đa hình sau đây gây ra lỗi rò rỉ bộ nhớ nghiêm trọng nào khi thực thi?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `class Base {
public:
    ~Base() { /* ... */ }
};
class Derived : public Base {
    int *data;
public:
    Derived() { data = new int[100]; }
    ~Derived() { delete[] data; }
};
Base *p = new Derived();
delete p;`,
    options: [
      { id: 'A', text: "Lớp con Derived không được phép cấp phát bộ nhớ động bằng toán tử new bên trong Constructor." },
      { id: 'B', text: "Toán tử delete p không thể giải phóng được vùng nhớ của con trỏ p trỏ tới đối tượng lớp cha." },
      { id: 'C', text: "Con trỏ p bắt buộc phải được ép kiểu sang kiểu con trỏ void* trước khi gọi toán tử giải phóng delete." },
      { id: 'D', text: "Hàm hủy ~Base() không có từ khóa virtual khiến ~Derived() không được gọi, làm rò rỉ mảng data." },
    ],
    correctAnswers: ['D'],
    explanation: "Bẫy thiếu Virtual Destructor: Vì `~Base()` không phải hàm ảo, `delete p` (với p là Base*) chỉ kích hoạt `~Base()`, bỏ qua `~Derived()`. Mảng `data` (400 bytes) không bao giờ được giải phóng.",
    tags: ["c-lang", "ch9", "debug", "hard"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.5',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch9-021',
    chapterId: 9,
    articleId: 'c-art-ch9-02',
    content: "Vì sao khai báo hàm có tham số mặc định sau đây bị trình biên dịch C++ báo lỗi cú pháp?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `void func(int a = 1, int b) { // Bi loi
    // ...
}`,
    options: [
      { id: 'A', text: "Các tham số có giá trị mặc định bắt buộc phải được khai báo liên tục từ phải sang trái." },
      { id: 'B', text: "Ngôn ngữ C++ chỉ cho phép thiết lập tham số mặc định cho duy nhất một tham số cuối cùng." },
      { id: 'C', text: "Hàm có kiểu trả về là void tuyệt đối không được phép sử dụng bất kỳ tham số mặc định nào." },
      { id: 'D', text: "Giá trị mặc định phải là một hằng số số thực dấu phẩy động thay vì một hằng số nguyên int." },
    ],
    correctAnswers: ['A'],
    explanation: "Quy tắc tham số mặc định trong C++: Nếu một tham số có giá trị mặc định, tất cả các tham số đứng sau nó (bên phải nó) cũng bắt buộc phải có giá trị mặc định. Đúng: `void func(int b, int a = 1)`.",
    tags: ["c-lang", "ch9", "debug", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-022',
    chapterId: 9,
    articleId: 'c-art-ch9-04',
    content: "Vì sao đoạn mã sau phát sinh lỗi biên dịch khi truy xuất thuộc tính của đối tượng trong hàm main?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `class Nguoi {
    int tuoi;
};

int main() {
    Nguoi n;
    n.tuoi = 20; // Bi loi bien dich
    return 0;
}`,
    options: [
      { id: 'A', text: "Đối tượng n bắt buộc phải được cấp phát động bằng toán tử new trước khi gán các thuộc tính số." },
      { id: 'B', text: "Toán tử chấm '.' chỉ được dùng cho cấu trúc struct chứ không được phép áp dụng cho lớp class." },
      { id: 'C', text: "Biến tuoi bắt buộc phải được khai báo kiểu dữ liệu long mới có thể nhận giá trị bằng số 20." },
      { id: 'D', text: "Thuộc tính tuoi trong class có phạm vi mặc định là private nên hàm main bên ngoài không thể truy cập." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C++, các thành viên của `class` mặc định là `private`. Để truy xuất trực tiếp từ ngoài, phải khai báo dưới phạm vi `public:` hoặc dùng struct.",
    tags: ["c-lang", "ch9", "debug", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-023',
    chapterId: 9,
    articleId: 'c-art-ch9-03',
    content: "Cần điền toán tử nào vào vị trí (...) để cấp phát động một đối tượng số nguyên trong C++?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `int *p = ... int(100);`,
    options: [
      { id: 'A', text: "Điền toán tử 'malloc' để phân bổ bộ nhớ thô mà không cần gọi hàm khởi tạo của hệ thống." },
      { id: 'B', text: "Điền toán tử 'new' để cấp phát bộ nhớ động trên Heap và khởi tạo giá trị 100 cho ô nhớ đó." },
      { id: 'C', text: "Điền toán tử 'create' để tạo một phiên bản đối tượng mới trong không gian địa chỉ bộ nhớ." },
      { id: 'D', text: "Điền toán tử 'alloc' để thiết lập vùng đệm dữ liệu tạm thời trên bộ nhớ ngăn xếp Call Stack." },
    ],
    correctAnswers: ['B'],
    explanation: "Cú pháp cấp phát động trong C++: `int *p = new int(100);`.",
    tags: ["c-lang", "ch9", "fill-in", "easy"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-024',
    chapterId: 9,
    articleId: 'c-art-ch9-05',
    content: "Cần điền từ khóa nào vào vị trí (...) trước khai báo phương thức để cho phép lớp con ghi đè đa hình?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `class Hinh {
public:
    ... void ve();
};`,
    options: [
      { id: 'A', text: "Điền từ khóa 'static' để biến phương thức thành hàm dùng chung cho tất cả các đối tượng lớp." },
      { id: 'B', text: "Điền từ khóa 'inline' để yêu cầu trình biên dịch chèn trực tiếp mã máy của hàm vào nơi gọi." },
      { id: 'C', text: "Điền từ khóa 'virtual' để khai báo phương thức ảo cho phép liên kết động tại thời điểm chạy." },
      { id: 'D', text: "Điền từ khóa 'friend' để cho phép các hàm bên ngoài truy cập vào dữ liệu riêng tư của lớp." },
    ],
    correctAnswers: ['C'],
    explanation: "Từ khóa `virtual` dùng để khai báo phương thức ảo, kích hoạt cơ chế đa hình động trong C++.",
    tags: ["c-lang", "ch9", "fill-in", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.5',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch9-025',
    chapterId: 9,
    articleId: 'c-art-ch9-01',
    content: "Cần điền ký tự nào vào vị trí (...) để khai báo tham số tham chiếu hoán đổi hai số nguyên trong C++?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `void swap(int ... a, int ... b) {
    int t = a; a = b; b = t;
}`,
    options: [
      { id: 'A', text: "Điền ký tự '*' vào cả hai vị trí để khai báo hai biến con trỏ trỏ tới địa chỉ ô nhớ dữ liệu." },
      { id: 'B', text: "Điền ký tự '%' vào cả hai vị trí để biểu thị phép toán lấy phần dư trên các biến số nguyên." },
      { id: 'C', text: "Điền từ khóa 'ref' vào cả hai vị trí theo đúng quy chuẩn cú pháp định nghĩa hàm của C++." },
      { id: 'D', text: "Điền ký tự '&' vào cả hai vị trí để truyền tham chiếu trực tiếp biến gốc vào trong hàm swap." },
    ],
    correctAnswers: ['D'],
    explanation: "Cú pháp truyền tham chiếu C++: `void swap(int &a, int &b)`.",
    tags: ["c-lang", "ch9", "fill-in", "medium"],
    reference: {
      uttPage: 'Chuẩn ISO/IEC 14882:2011 (C++11)',
      hcmutePage: 'Không có trong GT C HCMUTE (Chuẩn ISO/IEC 14882:2011 C++11)',
      section: '9.1',
    },
    mockExamPreset: false,
  },
];
