/**
 * src/subjects/c-lang/data/questions/questions-ch7.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 7: Kiểu cấu trúc (struct), Hợp nhất (union) & Liệt kê (enum)
 * Số lượng: 30 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh7: CQuestion[] = [
  {
    id: 'q-c-ch7-001',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Điểm khác biệt căn bản nhất giữa kiểu cấu trúc (struct) và kiểu mảng (array) trong C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Struct được cấp phát trên bộ nhớ động Heap còn mảng luôn luôn được lưu trữ trên ngăn xếp Call Stack." },
      { id: 'B', text: "Mảng cho phép truy xuất qua con trỏ còn struct hoàn toàn không thể sử dụng con trỏ để truy cập." },
      { id: 'C', text: "Struct cho phép nhóm các phần tử có kiểu dữ liệu khác nhau còn mảng chỉ chứa các phần tử cùng kiểu." },
      { id: 'D', text: "Struct có kích thước bộ nhớ tự động co giãn còn mảng có kích thước cố định không thể thay đổi." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.422 và HCMUTE tr.159: Mảng là tập hợp đồng nhất (cùng kiểu); Struct là kiểu dữ liệu có cấu trúc cho phép gom các thành phần (fields/members) có kiểu dữ liệu khác nhau.",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 422',
      hcmutePage: 'Trang 159',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-002',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Toán tử nào được sử dụng để truy xuất trực tiếp thành phần của một biến cấu trúc thông thường?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Toán tử mũi tên '->' (Arrow operator, dùng cho các biến cấu trúc được cấp phát tĩnh)." },
      { id: 'B', text: "Toán tử hai dấu hai chấm '::' (Scope resolution operator dùng để định vị phạm vi biến)." },
      { id: 'C', text: "Toán tử giải tham chiếu '*' đặt trực tiếp phía trước tên thành viên của cấu trúc dữ liệu." },
      { id: 'D', text: "Toán tử dấu chấm '.' (Dot operator, ví dụ: sinhVien.hoTen để truy xuất trường dữ liệu)." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.425 và HCMUTE tr.162: Biến struct thông thường dùng toán tử chấm (.), ví dụ `sv.diem`. Con trỏ struct dùng toán tử mũi tên (->).",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 425',
      hcmutePage: 'Trang 162',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-003',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cú pháp ptr->member khi truy xuất qua con trỏ cấu trúc ptr tương đương với biểu thức nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Hoàn toàn tương đương với biểu thức *ptr.member mà không cần bất kỳ dấu ngoặc tròn nào." },
      { id: 'B', text: "Hoàn toàn tương đương với biểu thức &(ptr.member) để lấy trực tiếp địa chỉ ô nhớ trường." },
      { id: 'C', text: "Hoàn toàn tương đương với biểu thức (*ptr).member (phải có ngoặc tròn bao quanh *ptr)." },
      { id: 'D', text: "Hoàn toàn tương đương với biểu thức ptr.member tương tự như một biến cấu trúc thông thường." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.430 và HCMUTE tr.166: Toán tử `.` ưu tiên cao hơn `*`. Do đó `*ptr.member` bị hiểu là `*(ptr.member)`. Để đúng phải viết `(*ptr).member`, hoặc viết gọn là `ptr->member`.",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 430',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-004',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Hiện tượng độn bộ nhớ (Structure Padding) trong cấu trúc struct xảy ra nhằm mục đích gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tự động chèn các byte mã hóa đặc biệt vào giữa các trường để bảo vệ dữ liệu cấu trúc an toàn." },
      { id: 'B', text: "Mở rộng kích thước của struct để struct luôn luôn có dung lượng đúng bằng một lũy thừa của 2." },
      { id: 'C', text: "Khắc phục sự cố xung đột tên giữa các trường dữ liệu được khai báo cùng một loại kiểu dữ liệu." },
      { id: 'D', text: "Căn lề địa chỉ các trường theo bội số kích thước kiểu dữ liệu giúp CPU tăng tốc độ đọc dữ liệu." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.428 và HCMUTE tr.164: CPU truy xuất bộ nhớ hiệu quả nhất theo các khối từ nhớ (4 hoặc 8 bytes). Compiler tự chèn byte đệm (padding) để căn lề địa chỉ thành viên (alignment).",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 428',
      hcmutePage: 'Trang 164',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-005',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Bản chất phân bổ bộ nhớ của kiểu hợp nhất (union) trong ngôn ngữ lập trình C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tất cả các thành viên chia sẻ chung một vùng nhớ có kích thước bằng trường có kích thước lớn nhất." },
      { id: 'B', text: "Mỗi thành viên được cấp phát một ô nhớ độc lập riêng biệt tương tự như cấu trúc struct bình thường." },
      { id: 'C', text: "Bộ nhớ của union được tự động cấp phát phân tán trên phân vùng Heap thông qua hàm malloc hệ thống." },
      { id: 'D', text: "Kích thước của union luôn luôn bằng tổng kích thước bộ nhớ của tất cả các thành viên cộng dồn lại." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.450 và HCMUTE tr.175: Trong union, tất cả thành viên dùng chung một vùng nhớ (cùng địa chỉ bắt đầu). Kích thước union bằng kích thước thành viên lớn nhất (cộng đệm nếu có).",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 450',
      hcmutePage: 'Trang 175',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-006',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Điều gì sẽ xảy ra khi một trường của union được gán giá trị mới trong chương trình?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Chương trình sẽ tự động sao lưu dữ liệu của các trường cũ vào một vùng nhớ tạm thời trên Stack." },
      { id: 'B', text: "Giá trị mới sẽ ghi đè lên vùng nhớ dùng chung và làm sai lệch giá trị của các trường thành viên khác." },
      { id: 'C', text: "Trình biên dịch sẽ báo lỗi xung đột ghi dữ liệu nếu các trường khác chưa được giải phóng bộ nhớ." },
      { id: 'D', text: "Giá trị của các trường khác vẫn hoàn toàn được bảo toàn nguyên vẹn nhờ cơ chế phân trang ô nhớ." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.452 và HCMUTE tr.176: Vì các thành viên của union dùng chung bộ nhớ, việc ghi vào trường này sẽ ghi đè lên các byte của các trường khác.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 452',
      hcmutePage: 'Trang 176',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-007',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "Quy ước giá trị mặc định của các hằng số trong kiểu liệt kê enum (khi không gán tường minh) là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Bắt đầu từ số 0 cho phần tử đầu tiên và mỗi phần tử tiếp theo tự động tăng thêm đúng 1 đơn vị." },
      { id: 'B', text: "Bắt đầu từ số 1 cho phần tử đầu tiên và mỗi phần tử tiếp theo tự động tăng thêm đúng 1 đơn vị." },
      { id: 'C', text: "Nhận các giá trị rác ngẫu nhiên phụ thuộc vào vị trí thanh ghi CPU khi khởi động chương trình." },
      { id: 'D', text: "Tất cả các phần tử trong enum đều tự động nhận cùng một giá trị mặc định bằng số nguyên 0." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.456 và HCMUTE tr.180: Trong enum, nếu không gán giá trị, phần tử đầu tiên là 0, các phần tử tiếp theo tăng dần 1 (1, 2, 3...).",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 456',
      hcmutePage: 'Trang 180',
      section: '7.3',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-008',
    chapterId: 7,
    articleId: 'c-art-ch7-04',
    content: "Từ khóa typedef trong ngôn ngữ C có vai trò và tác dụng chủ yếu nào sau đây?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Định nghĩa ra một kiểu dữ liệu hoàn toàn mới và yêu cầu hệ điều hành phân bổ thêm bộ nhớ RAM." },
      { id: 'B', text: "Ép kiểu dữ liệu tự động giữa các biến có kiểu dữ liệu không tương thích trong quá trình chạy." },
      { id: 'C', text: "Đặt tên bí danh (Alias) mới cho một kiểu dữ liệu có sẵn giúp mã nguồn ngắn gọn và dễ hiểu hơn." },
      { id: 'D', text: "Khóa giá trị của biến cấu trúc để ngăn không cho bất kỳ hàm nào sửa đổi nội dung các trường." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.460 và HCMUTE tr.184: `typedef` không tạo kiểu mới mà chỉ tạo một bí danh (alias) cho kiểu dữ liệu hiện có (ví dụ `typedef struct SinhVien SV;`).",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 460',
      hcmutePage: 'Trang 184',
      section: '7.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-009',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Khi thực hiện phép gán giữa hai biến cấu trúc cùng kiểu (sv1 = sv2;), điều gì diễn ra?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Hai biến cấu trúc sẽ cùng trỏ chung vào một ô nhớ duy nhất tương tự như phép gán các con trỏ." },
      { id: 'B', text: "Trình biên dịch báo lỗi vì ngôn ngữ C không hỗ trợ phép gán trực tiếp giữa hai biến cấu trúc." },
      { id: 'C', text: "Chỉ có các trường dữ liệu kiểu số nguyên mới được sao chép còn các trường khác bị giữ nguyên." },
      { id: 'D', text: "Sao chép nông từng byte nhị phân (Bitwise shallow copy) từ toàn bộ các trường của sv2 sang sv1." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.426 và HCMUTE tr.163: C hỗ trợ phép gán struct cùng kiểu: toàn bộ nội dung của sv2 được chép bit-by-bit sang sv1 (shallow copy). Nếu có con trỏ, chỉ địa chỉ được chép.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 426',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-010',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Vì sao khi truyền biến cấu trúc có kích thước lớn vào hàm, người ta luôn ưu tiên truyền con trỏ?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Để tránh chi phí sao chép toàn bộ khối dữ liệu lớn lên Stack giúp tối ưu hóa hiệu năng chương trình." },
      { id: 'B', text: "Vì ngôn ngữ C hoàn toàn cấm việc truyền một biến cấu trúc theo cơ chế truyền tham trị thông thường." },
      { id: 'C', text: "Để hàm tự động giải phóng vùng nhớ của biến cấu trúc ngay sau khi hoàn thành xong việc tính toán." },
      { id: 'D', text: "Vì chỉ có truyền con trỏ mới cho phép hiển thị các trường dữ liệu của cấu trúc ra màn hình chuẩn." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.434 và HCMUTE tr.168: Truyền struct theo tham trị phải copy toàn bộ các bytes lên Stack. Truyền con trỏ (thường kèm `const`) chỉ copy 4/8 bytes địa chỉ, nhanh và tiết kiệm bộ nhớ.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 434',
      hcmutePage: 'Trang 168',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-011',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "Giá trị của các hằng số trong enum có thể được gán giá trị tùy ý hay không?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Hoàn toàn không thể gán giá trị tùy ý vì enum bắt buộc phải tuân theo thứ tự số nguyên cố định từ 0." },
      { id: 'B', text: "Có thể gán giá trị số nguyên bất kỳ tùy ý, các phần tử đứng sau không gán sẽ tự động tăng tiếp 1." },
      { id: 'C', text: "Chỉ có phần tử đầu tiên mới được phép gán giá trị còn tất cả các phần tử sau phải tự động tăng." },
      { id: 'D', text: "Có thể gán bất kỳ kiểu dữ liệu nào kể cả chuỗi ký tự hoặc các số thực dấu phẩy động dạng float." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.457 và HCMUTE tr.181: Các mục trong enum là hằng số nguyên. Ta có thể gán giá trị nguyên tùy ý (kể cả số âm hay trùng nhau). Phần tử kế tiếp sẽ bằng phần tử trước + 1.",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 457',
      hcmutePage: 'Trang 181',
      section: '7.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-012',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cấu trúc tự trỏ (Self-referential structure) trong C thường được áp dụng để xây dựng cấu trúc nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Các mảng tĩnh có kích thước cố định được cấp phát trực tiếp trên bộ nhớ ngăn xếp Call Stack." },
      { id: 'B', text: "Các khối lệnh điều khiển rẽ nhánh phức tạp thay thế hoàn toàn cho câu lệnh lựa chọn switch-case." },
      { id: 'C', text: "Các cấu trúc dữ liệu động như danh sách liên kết đơn, cây nhị phân tìm kiếm hoặc đồ thị liên thông." },
      { id: 'D', text: "Các bộ đệm nhập xuất dữ liệu tốc độ cao dùng cho các thiết bị phần cứng ngoại vi của máy tính." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.440 và HCMUTE tr.172: Struct tự trỏ (chứa con trỏ trỏ tới chính kiểu struct đó, vd `struct Node *next;`) là nền tảng của danh sách liên kết, cây, stack, queue.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 440',
      hcmutePage: 'Trang 172',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-013',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Kích thước in ra của cấu trúc struct có độn bộ nhớ (Padding) sau đây trên hệ 32/64-bit là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

struct Data {
    char c;
    int i;
};

int main(void) {
    printf("%zu", sizeof(struct Data));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 5 (bằng đúng tổng số byte thực tế của char 1 byte cộng với int 4 bytes không đệm)." },
      { id: 'B', text: "In ra số 4 (trình biên dịch tự động nén biến char vào chung ô nhớ với biến số nguyên int)." },
      { id: 'C', text: "In ra số 16 (trình biên dịch luôn căn lề mọi cấu trúc theo chuẩn khối nhớ bội số 16 bytes)." },
      { id: 'D', text: "In ra số 8 (char chiếm 1 byte kèm 3 bytes đệm để căn lề cho int 4 bytes; tổng là 8 bytes)." },
    ],
    correctAnswers: ['D'],
    explanation: "int i yêu cầu căn lề 4 bytes. char c (1 byte) được đệm thêm 3 bytes (padding). Do đó `sizeof(struct Data)` là 1 + 3 + 4 = 8 bytes.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 428',
      hcmutePage: 'Trang 164',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-014',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Kết quả in ra của chương trình thao tác với con trỏ struct sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

struct Point {
    int x, y;
};

int main(void) {
    struct Point p = {10, 20};
    struct Point *ptr = &p;
    ptr->x += 5;
    printf("%d %d", p.x, ptr->y);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '10 20' (việc thay đổi qua con trỏ ptr không làm thay đổi giá trị của biến cấu trúc gốc p)." },
      { id: 'B', text: "In ra '15 20' (toán tử ptr->x += 5 làm thay đổi trực tiếp giá trị trường x của biến cấu trúc p)." },
      { id: 'C', text: "In ra '15 25' (cả hai trường x và y đều đồng thời được tăng thêm 5 đơn vị qua con trỏ ptr)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do không thể sử dụng toán tử mũi tên trên con trỏ cấu trúc." },
    ],
    correctAnswers: ['B'],
    explanation: "ptr trỏ tới p. ptr->x += 5 tăng p.x từ 10 lên 15. ptr->y giữ nguyên là 20. In ra '15 20'.",
    tags: ["c-lang", "ch7", "output", "easy"],
    reference: {
      uttPage: 'Trang 431',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-015',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Kích thước in ra của biến hợp nhất union sau đây là bao nhiêu bytes?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

union TapHop {
    char c;
    int i;
    double d;
};

int main(void) {
    printf("%zu", sizeof(union TapHop));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 8 (kích thước của union bằng kích thước của thành viên lớn nhất là double chiếm 8 bytes)." },
      { id: 'B', text: "In ra số 13 (bằng tổng kích thước của tất cả các trường: char 1 + int 4 + double 8 = 13 bytes)." },
      { id: 'C', text: "In ra số 4 (do kiểu dữ liệu int có mức độ sử dụng phổ biến nhất trong các phép toán số học)." },
      { id: 'D', text: "In ra số 1 (do thành viên char được khai báo ở dòng đầu tiên của cấu trúc hợp nhất dữ liệu)." },
    ],
    correctAnswers: ['A'],
    explanation: "Kích thước của union bằng kích thước của thành viên lớn nhất. Ở đây double chiếm 8 bytes, lớn hơn char (1) và int (4). Do đó `sizeof` là 8 bytes.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 451',
      hcmutePage: 'Trang 175',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-016',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "Giá trị in ra của hằng số THU_TU trong kiểu liệt kê enum sau là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

enum Ngay { HAI = 2, BA, TU, NAM = 10, SAU };

int main(void) {
    printf("%d %d", TU, SAU);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '2 5' (các phần tử trong enum luôn được đánh số tuần tự bắt đầu từ giá trị gốc là 0)." },
      { id: 'B', text: "In ra '4 11' (BA tự động tăng thành 3, TU tăng thành 4; SAU tăng từ NAM 10 thành 11)." },
      { id: 'C', text: "In ra '4 6' (giá trị của SAU được tính tiếp nối theo chỉ số phần tử tự nhiên thứ sáu)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do không được phép gán giá trị không liên tục trong enum." },
    ],
    correctAnswers: ['B'],
    explanation: "HAI=2 -> BA=3, TU=4. NAM=10 -> SAU=11. In ra '4 11'.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 457',
      hcmutePage: 'Trang 181',
      section: '7.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-017',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Giá trị in ra của mảng các cấu trúc struct sau khi thực thi là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

struct Item {
    int id;
    int val;
};

int main(void) {
    struct Item list[2] = {{1, 10}, {2, 20}};
    printf("%d", list[0].val + list[1].val);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 3 (tổng giá trị của hai trường định danh mã id của hai phần tử trong mảng: 1+2=3)." },
      { id: 'B', text: "In ra số 33 (tổng của toàn bộ tất cả bốn trường dữ liệu có trong mảng cấu trúc hai phần tử)." },
      { id: 'C', text: "In ra số 30 (tổng giá trị của hai trường val: list[0].val là 10 và list[1].val là 20: 10+20=30)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do không thể khởi tạo mảng cấu trúc bằng các cặp ngoặc nhọn." },
    ],
    correctAnswers: ['C'],
    explanation: "list[0].val = 10, list[1].val = 20. Tổng = 10 + 20 = 30.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 432',
      hcmutePage: 'Trang 167',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-018',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Hiện tượng ghi đè ô nhớ trong union: Kết quả in ra của đoạn chương trình sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

union Test {
    int x;
    char c;
};

int main(void) {
    union Test t;
    t.x = 0;
    t.c = 'A'; // 'A' co ma ASCII la 65
    printf("%d", t.x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 0 (giá trị của biến x được bảo toàn nguyên vẹn và không bị ảnh hưởng bởi phép gán t.c)." },
      { id: 'B', text: "In ra ký tự 'A' (hàm printf tự động phát hiện kiểu dữ liệu được gán gần nhất để hiển thị ra)." },
      { id: 'C', text: "Chương trình sập do hai kiểu dữ liệu int và char có kích thước không tương thích trong union." },
      { id: 'D', text: "In ra số 65 (thao tác gán t.c = 'A' ghi mã 65 vào byte đầu tiên của vùng nhớ dùng chung biến x)." },
    ],
    correctAnswers: ['D'],
    explanation: "Trên kiến trúc Little Endian, byte thấp của t.x (đang bằng 0) bị ghi đè bởi 'A' (65 = 0x41). t.x trở thành 65. In ra 65.",
    tags: ["c-lang", "ch7", "output", "hard"],
    reference: {
      uttPage: 'Trang 452',
      hcmutePage: 'Trang 176',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-019',
    chapterId: 7,
    articleId: 'c-art-ch7-04',
    content: "Chương trình sử dụng typedef cho con trỏ sau đây sẽ in ra kết quả số học nào?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

typedef int* IntPtr;

int main(void) {
    int a = 50;
    IntPtr p = &a;
    *p = 80;
    printf("%d", a);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 80 (IntPtr là bí danh của int*, giải tham chiếu *p = 80 làm thay đổi giá trị của biến a)." },
      { id: 'B', text: "In ra số 50 (biến a giữ nguyên giá trị ban đầu do IntPtr chỉ là một kiểu dữ liệu hình thức)." },
      { id: 'C', text: "Chương trình gặp lỗi biên dịch do từ khóa typedef không cho phép định nghĩa bí danh cho con trỏ." },
      { id: 'D', text: "In ra địa chỉ ô nhớ của biến a trên phân vùng bộ nhớ ngăn xếp dưới dạng số nguyên cơ số mười." },
    ],
    correctAnswers: ['A'],
    explanation: "IntPtr là alias của `int *`. `IntPtr p = &a;` tương đương `int *p = &a;`. `*p = 80;` làm a = 80.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 461',
      hcmutePage: 'Trang 185',
      section: '7.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-020',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Sao chép cấu trúc lồng nhau: Đoạn chương trình sau đây in ra kết quả nào?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

struct Diem {
    int x, y;
};

struct Hinh {
    struct Diem p1;
};

int main(void) {
    struct Hinh h1 = {{3, 4}};
    struct Hinh h2 = h1;
    h2.p1.x = 9;
    printf("%d %d", h1.p1.x, h2.p1.x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '9 9' (h1 và h2 chia sẻ chung vùng nhớ cấu trúc lồng nhau nên thay đổi h2 làm đổi cả h1)." },
      { id: 'B', text: "In ra '3 9' (phép gán h2 = h1 sao chép độc lập toàn bộ dữ liệu, sửa h2 không ảnh hưởng đến h1)." },
      { id: 'C', text: "In ra '3 3' (h2 không thể sửa đổi giá trị trường x sau khi đã được sao chép từ cấu trúc h1)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do cấu trúc struct trong C không cho phép định nghĩa lồng nhau." },
    ],
    correctAnswers: ['B'],
    explanation: "Phép gán struct tạo ra bản sao độc lập (shallow copy). Sửa `h2.p1.x = 9` không tác động đến `h1.p1.x` (vẫn bằng 3). In '3 9'.",
    tags: ["c-lang", "ch7", "output", "hard"],
    reference: {
      uttPage: 'Trang 427',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-021',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "Giá trị của biến boolean cờ trạng thái sử dụng enum sau đây in ra kết quả gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

typedef enum { FALSE = 0, TRUE = 1 } Bool;

int main(void) {
    Bool status = TRUE;
    printf("%d", status && FALSE);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 1 (do biến status được khởi tạo ban đầu mang giá trị TRUE có độ ưu tiên cao hơn)." },
      { id: 'B', text: "In ra chuỗi 'FALSE' (hàm printf tự động chuyển đổi giá trị enum thành chuỗi văn bản tương ứng)." },
      { id: 'C', text: "In ra số 0 (phép toán logic AND giữa TRUE có giá trị 1 và FALSE có giá trị 0 cho ra kết quả 0)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do kiểu enum không thể tham gia vào các biểu thức logic AND." },
    ],
    correctAnswers: ['C'],
    explanation: "status là 1 (TRUE). 1 && 0 (FALSE) = 0. In ra 0.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 458',
      hcmutePage: 'Trang 182',
      section: '7.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-022',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Lỗi cú pháp nào khiến đoạn mã truy xuất thành phần struct qua con trỏ sau bị từ chối biên dịch?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `struct SinhVien {
    int id;
};
struct SinhVien sv = {101};
struct SinhVien *ptr = &sv;
printf("%d", ptr.id);`,
    options: [
      { id: 'A', text: "Biến con trỏ ptr không được phép trỏ tới địa chỉ của một biến cấu trúc đã được khởi tạo." },
      { id: 'B', text: "Thiếu từ khóa typedef trước định nghĩa cấu trúc SinhVien để trình biên dịch nhận diện kiểu." },
      { id: 'C', text: "Hàm printf không thể in được các trường dữ liệu số nguyên của biến cấu trúc qua con trỏ." },
      { id: 'D', text: "Sử dụng nhầm toán tử chấm '.' cho con trỏ struct, bắt buộc phải dùng toán tử mũi tên 'ptr->id'." },
    ],
    correctAnswers: ['D'],
    explanation: "Bẫy cú pháp kinh điển: `ptr` là con trỏ struct, phải dùng `ptr->id` hoặc `(*ptr).id`. Dùng `ptr.id` gây lỗi biên dịch 'request for member 'id' in something not a structure or union'.",
    tags: ["c-lang", "ch7", "debug", "easy"],
    reference: {
      uttPage: 'Trang 430',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-023',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Vì sao định nghĩa cấu trúc tự trỏ sau đây phát sinh lỗi biên dịch nghiêm trọng?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `struct Node {
    int data;
    struct Node next; // Bi loi bien dich
};`,
    options: [
      { id: 'A', text: "Khai báo trường chứa trực tiếp một biến struct Node khiến cấu trúc có kích thước vô hạn không xác định." },
      { id: 'B', text: "Từ khóa struct không được phép xuất hiện hai lần bên trong cùng một khối định nghĩa cấu trúc." },
      { id: 'C', text: "Tên của trường dữ liệu 'next' trùng với một từ khóa được bảo lưu trong thư viện chuẩn của C." },
      { id: 'D', text: "Trường dữ liệu data bắt buộc phải được khai báo ở dòng cuối cùng của cấu trúc danh sách liên kết." },
    ],
    correctAnswers: ['A'],
    explanation: "Struct không thể chứa chính nó theo giá trị (infinite size recursion). Phải chứa CON TRỎ trỏ tới chính nó: `struct Node *next;` (kích thước con trỏ luôn cố định 4/8 bytes).",
    tags: ["c-lang", "ch7", "debug", "medium"],
    reference: {
      uttPage: 'Trang 441',
      hcmutePage: 'Trang 172',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-024',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Đoạn chương trình sau đây phát sinh lỗi nghiêm trọng nào khi thực hiện câu lệnh gán chuỗi?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `struct SinhVien {
    char ten[30];
};
struct SinhVien sv;
sv.ten = "Nguyen Van A"; // Bi loi bien dich`,
    options: [
      { id: 'A', text: "Chuỗi \"Nguyen Van A\" có độ dài vượt quá dung lượng 30 bytes đã khai báo của mảng cấu trúc." },
      { id: 'B', text: "Biến cấu trúc sv bắt buộc phải được cấp phát động bằng malloc trước khi gán các trường chuỗi." },
      { id: 'C', text: "sv.ten là tên mảng (hằng con trỏ), không thể làm vế trái phép gán; phải dùng hàm strcpy(sv.ten, ...)." },
      { id: 'D', text: "Ngôn ngữ C không cho phép lưu trữ chuỗi ký tự bên trong các thành viên của một cấu trúc struct." },
    ],
    correctAnswers: ['C'],
    explanation: "Bẫy gán mảng chuỗi trong struct: `sv.ten` là mảng cố định, không thể gán bằng toán tử `=`. Cần dùng `strcpy(sv.ten, \"Nguyen Van A\");` hoặc gán khi khởi tạo `struct SinhVien sv = {\"Nguyen Van A\"};`.",
    tags: ["c-lang", "ch7", "debug", "medium"],
    reference: {
      uttPage: 'Trang 426',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-025',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Lỗi cú pháp nào thường gặp nhất khi kết thúc khối định nghĩa struct trong ngôn ngữ C?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Quên khai báo ít nhất một biến cấu trúc đi kèm ngay sau dấu ngoặc nhọn đóng của cấu trúc." },
      { id: 'B', text: "Quên đặt dấu chấm phẩy ';' ngay sau dấu ngoặc nhọn đóng '}' của khối định nghĩa cấu trúc." },
      { id: 'C', text: "Sử dụng dấu ngoặc đơn thay vì dấu ngoặc nhọn để bao quanh toàn bộ các trường của cấu trúc." },
      { id: 'D', text: "Thiếu từ khóa endstruct đặt ở dòng lệnh cuối cùng để thông báo kết thúc định nghĩa cấu trúc." },
    ],
    correctAnswers: ['B'],
    explanation: "Định nghĩa struct trong C bắt buộc kết thúc bằng dấu chấm phẩy: `struct Name { ... };`. Thiếu dấu ';' sẽ dẫn đến lỗi biên dịch ở dòng tiếp theo.",
    tags: ["c-lang", "ch7", "debug", "easy"],
    reference: {
      uttPage: 'Trang 423',
      hcmutePage: 'Trang 160',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-026',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Vì sao phép so sánh trực tiếp 'if (sv1 == sv2)' bị trình biên dịch từ chối và báo lỗi?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Do hai biến cấu trúc sv1 và sv2 luôn luôn nằm ở hai địa chỉ ô nhớ hoàn toàn khác nhau trên RAM." },
      { id: 'B', text: "Do toán tử == chỉ có thể áp dụng cho các kiểu dữ liệu do người dùng tự định nghĩa bằng typedef." },
      { id: 'C', text: "Ngôn ngữ C không định nghĩa toán tử == cho kiểu struct vì sự hiện diện của các byte đệm rác (padding)." },
      { id: 'D', text: "Do cấu trúc struct không hỗ trợ phép so sánh nếu có chứa trường dữ liệu kiểu số thực dấu phẩy động." },
    ],
    correctAnswers: ['C'],
    explanation: "Chuẩn C cấm so sánh `sv1 == sv2`. Struct có thể chứa các byte padding rác nên so sánh bit-by-bit (memcmp) không tin cậy. Muốn so sánh, lập trình viên phải tự so sánh từng trường cụ thể.",
    tags: ["c-lang", "ch7", "debug", "medium"],
    reference: {
      uttPage: 'Trang 427',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-027',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Đoạn mã sau mắc phải lỗi suy diễn nào về dữ liệu khi sử dụng hợp nhất union?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `union DuLieu {
    int i;
    float f;
};
union DuLieu data;
data.i = 10;
data.f = 2.5f;
printf("%d", data.i);`,
    options: [
      { id: 'A', text: "Kiểu dữ liệu float không được phép khai báo bên trong một cấu trúc hợp nhất union của ngôn ngữ C." },
      { id: 'B', text: "Hàm printf không thể in được thành viên số nguyên int nếu nó được khai báo trước thành viên float." },
      { id: 'C', text: "Thiếu câu lệnh giải phóng bộ nhớ động giữa hai lượt gán giá trị cho hai trường thành viên khác nhau." },
      { id: 'D', text: "Kỳ vọng data.i vẫn giữ giá trị 10 trong khi phép gán data.f = 2.5f đã ghi đè toàn bộ vùng nhớ chung." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong union, data.i và data.f chung 4 bytes nhớ. Khi gán `data.f = 2.5f`, dạng biểu diễn nhị phân IEEE 754 của float ghi đè lên ô nhớ, khiến `data.i` bị sai lệch hoàn toàn, không còn là 10.",
    tags: ["c-lang", "ch7", "debug", "hard"],
    reference: {
      uttPage: 'Trang 452',
      hcmutePage: 'Trang 176',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-028',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cần điền toán tử nào vào vị trí (...) để truy xuất trường tuoi thông qua biến con trỏ struct pSv?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `struct SinhVien *pSv = &sv;
printf("%d", pSv...tuoi);`,
    options: [
      { id: 'A', text: "Điền toán tử mũi tên '->' để giải tham chiếu con trỏ cấu trúc và truy xuất thành viên chỉ định." },
      { id: 'B', text: "Điền toán tử dấu chấm '.' để truy cập trực tiếp thành phần của cấu trúc dữ liệu đang xét." },
      { id: 'C', text: "Điền toán tử hai dấu hai chấm '::' để định vị trường thuộc tính trong không gian tên struct." },
      { id: 'D', text: "Điền toán tử dấu sao '*' để kích hoạt thao tác giải tham chiếu ô nhớ trước khi truy xuất trường." },
    ],
    correctAnswers: ['A'],
    explanation: "Con trỏ struct dùng toán tử `->` để truy xuất trường: `pSv->tuoi`.",
    tags: ["c-lang", "ch7", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 430',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-029',
    chapterId: 7,
    articleId: 'c-art-ch7-04',
    content: "Cần điền từ khóa nào vào chỗ trống (...) để định nghĩa một bí danh mới TenMoi cho kiểu dữ liệu int?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `... int TenMoi;
TenMoi x = 100;`,
    options: [
      { id: 'A', text: "Điền từ khóa 'define' để tạo macro tiền xử lý thay thế chuỗi ký tự trong toàn bộ tệp mã nguồn." },
      { id: 'B', text: "Điền từ khóa 'typedef' để thiết lập một định danh bí danh kiểu dữ liệu hợp lệ trong ngôn ngữ C." },
      { id: 'C', text: "Điền từ khóa 'alias' để ánh xạ trực tiếp kiểu dữ liệu nguyên thủy sang một tên gọi người dùng mới." },
      { id: 'D', text: "Điền từ khóa 'struct' để đóng gói kiểu dữ liệu số nguyên int vào một cấu trúc dữ liệu mới tạo." },
    ],
    correctAnswers: ['B'],
    explanation: "Cú pháp: `typedef int TenMoi;` tạo alias TenMoi cho kiểu int.",
    tags: ["c-lang", "ch7", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 460',
      hcmutePage: 'Trang 184',
      section: '7.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-030',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cần điền kiểu dữ liệu nào vào chỗ trống (...) để hoàn thiện nút liên kết đơn tự trỏ chuẩn trong C?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `struct Node {
    int data;
    ... next;
};`,
    options: [
      { id: 'A', text: "Điền 'struct Node' để nhúng trực tiếp toàn bộ một đối tượng nút mới vào trong phần tử hiện tại." },
      { id: 'B', text: "Điền 'void*' để tạo ra một con trỏ tổng quát không thể xác định kiểu liên kết của danh sách." },
      { id: 'C', text: "Điền 'struct Node*' để tạo ra một trường con trỏ lưu trữ địa chỉ của phần tử nút kế tiếp." },
      { id: 'D', text: "Điền 'int*' để trỏ tới trường dữ liệu số nguyên của phần tử tiếp theo trong chuỗi liên kết." },
    ],
    correctAnswers: ['C'],
    explanation: "Cấu trúc danh sách liên kết tự trỏ: `struct Node *next;`.",
    tags: ["c-lang", "ch7", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 441',
      hcmutePage: 'Trang 172',
      section: '7.1',
    },
    mockExamPreset: false,
  },
];
