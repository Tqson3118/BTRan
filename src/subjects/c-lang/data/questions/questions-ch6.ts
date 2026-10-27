/**
 * src/subjects/c-lang/data/questions/questions-ch6.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 6: Con trỏ & Quản lý bộ nhớ động
 * Số lượng: 35 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh6: CQuestion[] = [
  {
    id: 'q-c-ch6-001',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Bản chất cốt lõi của một biến con trỏ (Pointer variable) trong ngôn ngữ C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Là một biến đặc biệt dùng để lưu trữ địa chỉ ô nhớ của một biến khác trong bộ nhớ RAM." },
      { id: 'B', text: "Là một biến số nguyên có giá trị tự động tăng gấp đôi kích thước qua mỗi chu kỳ đồng hồ." },
      { id: 'C', text: "Là một vị trí ô nhớ phần cứng vĩnh viễn trên vi xử lý dùng để tăng tốc độ tính toán CPU." },
      { id: 'D', text: "Là một nhãn chỉ mục giúp hệ điều hành quản lý việc đọc ghi dữ liệu từ đĩa cứng vật lý." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.315 và HCMUTE tr.121: Biến con trỏ là biến chứa giá trị là địa chỉ bộ nhớ của một biến/đối tượng khác.",
    tags: ["c-lang", "ch6", "theory", "easy"],
    reference: {
      uttPage: 'Trang 315',
      hcmutePage: 'Trang 121',
      section: '6.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch6-002',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Kích thước bộ nhớ của biến con trỏ kiểu int* so với kiểu char* trên cùng hệ thống 64-bit là như thế nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Con trỏ int* có kích thước 4 bytes còn con trỏ char* có kích thước 1 byte theo kiểu trỏ tới." },
      { id: 'B', text: "Cả hai đều có kích thước bằng nhau (đều là 8 bytes trên kiến trúc vi xử lý hệ thống 64-bit)." },
      { id: 'C', text: "Con trỏ int* lớn gấp bốn lần con trỏ char* do cần thêm ô nhớ để lưu trữ dấu của số nguyên." },
      { id: 'D', text: "Kích thước con trỏ phụ thuộc hoàn toàn vào giá trị của biến số học mà con trỏ đó đang trỏ tới." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.317 và HCMUTE tr.122: Mọi con trỏ trên cùng kiến trúc đều có cùng kích thước (8 bytes trên 64-bit, 4 bytes trên 32-bit), bất kể kiểu dữ liệu đích.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 317',
      hcmutePage: 'Trang 122',
      section: '6.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-003',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Toán tử giải tham chiếu '*' (Dereference operator) khi áp dụng lên con trỏ p có tác dụng gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Lấy ra địa chỉ bộ nhớ vật lý của chính bản thân biến con trỏ p trên ngăn xếp bộ nhớ." },
      { id: 'B', text: "Nhân giá trị của biến con trỏ p với kích thước số byte của kiểu dữ liệu mà nó đang trỏ." },
      { id: 'C', text: "Truy xuất trực tiếp hoặc thay đổi giá trị của ô nhớ tại địa chỉ mà con trỏ p đang trỏ tới." },
      { id: 'D', text: "Giải phóng vùng bộ nhớ mà con trỏ p đang tham chiếu về lại cho hệ điều hành quản lý." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.318 và HCMUTE tr.123: &p lấy địa chỉ của p; *p là toán tử giải tham chiếu, truy xuất giá trị tại ô nhớ p trỏ tới.",
    tags: ["c-lang", "ch6", "theory", "easy"],
    reference: {
      uttPage: 'Trang 318',
      hcmutePage: 'Trang 123',
      section: '6.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-004',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Nguyên lý số học con trỏ: Biểu thức 'p + 1' (với p là con trỏ kiểu int*) sẽ làm dịch chuyển địa chỉ bao nhiêu bytes?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Luôn luôn dịch chuyển đúng chính xác 1 byte trong bộ nhớ bất kể kiểu dữ liệu con trỏ trỏ tới." },
      { id: 'B', text: "Dịch chuyển đúng 1 * sizeof(int) bytes (thường là 4 bytes trên các trình biên dịch hiện đại)." },
      { id: 'C', text: "Dịch chuyển đúng 1 * sizeof(p) bytes (tức là 8 bytes trên tất cả các hệ thống máy tính 64-bit)." },
      { id: 'D', text: "Địa chỉ con trỏ giữ nguyên và giá trị của ô nhớ được tăng thêm một đơn vị số học thông thường." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.322 và HCMUTE tr.126: Phép toán số học con trỏ (p + k) dịch địa chỉ đi một khoảng k * sizeof(*p) bytes.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 322',
      hcmutePage: 'Trang 126',
      section: '6.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch6-005',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Hiệu của hai con trỏ trỏ tới các phần tử trong cùng một mảng (p2 - p1) trả về kết quả có ý nghĩa gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Số lượng byte địa chỉ tuyệt đối chênh lệch nhau giữa hai vị trí ô nhớ trong bộ nhớ RAM." },
      { id: 'B', text: "Tổng giá trị số học của các phần tử nằm trong khoảng vị trí được giới hạn bởi hai con trỏ." },
      { id: 'C', text: "Một giá trị boolean logic biểu thị việc con trỏ p2 có đứng sau con trỏ p1 hay không." },
      { id: 'D', text: "Số lượng phần tử nằm giữa hai con trỏ theo kiểu dữ liệu đích (có kiểu là ptrdiff_t)." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.324 và HCMUTE tr.127: Phép trừ hai con trỏ (p2 - p1) cho kết quả là khoảng cách số phần tử giữa chúng ((địa chỉ p2 - địa chỉ p1) / sizeof(*p)), kiểu ptrdiff_t.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 324',
      hcmutePage: 'Trang 127',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-006',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Mối quan hệ cú pháp giữa tên mảng arr và con trỏ trong biểu thức truy xuất phần tử là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Biểu thức arr[i] hoàn toàn tương đương với *(arr + i), *(i + arr) và cả cú pháp i[arr]." },
      { id: 'B', text: "Tên mảng arr là một biến con trỏ thông thường và có thể gán thay đổi địa chỉ bằng toán tử =." },
      { id: 'C', text: "Biểu thức arr[i] có tốc độ truy xuất chậm hơn đáng kể so với việc dùng toán tử *(arr + i)." },
      { id: 'D', text: "Tên mảng arr luôn được hệ điều hành cấp phát trên vùng nhớ Heap còn con trỏ nằm trên Stack." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.325 và HCMUTE tr.128: arr[i] là đường vòng của *(arr + i). Vì phép cộng giao hoán, *(i + arr) == i[arr]. Tên mảng là hằng con trỏ không thể gán lại.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 325',
      hcmutePage: 'Trang 128',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-007',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Đặc tính quan trọng của con trỏ kiểu void* (Generic Pointer) trong ngôn ngữ C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Có thể giải tham chiếu trực tiếp bằng toán tử *void mà không cần chuyển đổi về kiểu dữ liệu đích." },
      { id: 'B', text: "Có thể chứa địa chỉ của bất kỳ kiểu dữ liệu nào nhưng bắt buộc phải ép kiểu trước khi giải tham chiếu." },
      { id: 'C', text: "Có kích thước bộ nhớ bằng 0 byte vì nó không hề trỏ tới bất kỳ vùng nhớ cụ thể nào trong RAM." },
      { id: 'D', text: "Chỉ có thể dùng để lưu trữ địa chỉ của các hàm void và hoàn toàn không thể trỏ tới các biến số." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.328 và HCMUTE tr.130: void* là con trỏ vô kiểu, trỏ được mọi kiểu nhưng không thể giải tham chiếu trực tiếp (*p) hoặc làm toán tử số học con trỏ mà phải ép kiểu trước.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 328',
      hcmutePage: 'Trang 130',
      section: '6.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-008',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Điểm khác biệt cốt lõi nhất giữa hai hàm cấp phát bộ nhớ động malloc() và calloc() là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "malloc() cấp phát bộ nhớ trên ngăn xếp Stack còn calloc() thực hiện cấp phát bộ nhớ trên phân vùng Heap." },
      { id: 'B', text: "malloc() có khả năng tự động giải phóng vùng nhớ khi hàm kết thúc còn calloc() bắt buộc phải gọi free()." },
      { id: 'C', text: "calloc() tự động xóa toàn bộ các byte trong vùng nhớ về giá trị 0 còn malloc() để lại giá trị rác." },
      { id: 'D', text: "calloc() chỉ cấp phát được tối đa 1024 bytes bộ nhớ còn malloc() không bị giới hạn kích thước tối đa." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.330 và HCMUTE tr.132: malloc(size) không khởi tạo dữ liệu (chứa giá trị rác); calloc(num, size) khởi tạo tất cả các byte được cấp phát về 0.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 330',
      hcmutePage: 'Trang 132',
      section: '6.4',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch6-009',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Điều gì xảy ra nếu hệ thống không còn đủ bộ nhớ RAM khi gọi hàm cấp phát malloc(size)?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Chương trình sẽ tự động sập ngay lập tức và đưa ra thông báo ngoại lệ chia cho số không." },
      { id: 'B', text: "Hệ điều hành sẽ tự động đóng các ứng dụng khác đang chạy ngầm để lấy thêm dung lượng nhớ." },
      { id: 'C', text: "Hàm malloc sẽ trả về một địa chỉ ngẫu nhiên trong vùng nhớ chỉ đọc của hệ điều hành máy tính." },
      { id: 'D', text: "Hàm malloc sẽ trả về con trỏ NULL để báo hiệu thao tác cấp phát bộ nhớ động đã bị thất bại." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.331 và HCMUTE tr.133: Khi hết bộ nhớ Heap, malloc/calloc trả về con trỏ NULL. Luôn phải kiểm tra `if (ptr == NULL)` sau khi cấp phát.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 331',
      hcmutePage: 'Trang 133',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-010',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Hàm realloc(ptr, new_size) thực hiện hành vi nào khi cấp phát lại kích thước vùng nhớ động?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Luôn luôn giữ nguyên địa chỉ ô nhớ ban đầu của ptr và mở rộng bộ nhớ sang các phân vùng bên cạnh." },
      { id: 'B', text: "Tự động xóa sạch toàn bộ nội dung dữ liệu cũ của con trỏ ptr về các byte có giá trị bằng số 0." },
      { id: 'C', text: "Thay đổi kích thước vùng nhớ, bảo lưu dữ liệu cũ, có thể di dời sang địa chỉ mới nếu cần mở rộng." },
      { id: 'D', text: "Chỉ cho phép thu hẹp kích thước vùng nhớ chứ hoàn toàn không thể cấp phát mở rộng kích thước." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.332 và HCMUTE tr.134: realloc có thể mở rộng tại chỗ hoặc cấp khối mới ở vùng khác, chép dữ liệu cũ sang rồi giải phóng khối cũ, trả về con trỏ mới.",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 332',
      hcmutePage: 'Trang 134',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-011',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Hành vi giải phóng một vùng nhớ động bằng câu lệnh 'free(ptr);' thực tế làm công việc gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Đánh dấu khối bộ nhớ đó trên Heap là khả dụng để tái sử dụng mà không tự động xóa giá trị con trỏ ptr." },
      { id: 'B', text: "Xóa sạch toàn bộ dữ liệu vật lý trong RAM và tự động gán địa chỉ của con trỏ ptr về giá trị NULL." },
      { id: 'C', text: "Thu hồi toàn bộ vùng nhớ Stack của tất cả các hàm con đã kết thúc thực thi trong chương trình C." },
      { id: 'D', text: "Khóa vùng nhớ đó vĩnh viễn để không một chương trình nào khác trong hệ điều hành có thể ghi đè." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.333 và HCMUTE tr.135: free(ptr) trả vùng nhớ Heap lại cho hệ thống nhưng ptr vẫn giữ nguyên địa chỉ cũ (dangling pointer). Lập trình viên nên gán `ptr = NULL;` sau free.",
    tags: ["c-lang", "ch6", "theory", "easy"],
    reference: {
      uttPage: 'Trang 333',
      hcmutePage: 'Trang 135',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-012',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Ý nghĩa khai báo của 'const int *p' so với 'int * const p' trong ngôn ngữ C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "const int *p không cho đổi địa chỉ con trỏ; int * const p không cho sửa giá trị ô nhớ mà nó trỏ tới." },
      { id: 'B', text: "const int *p không cho sửa giá trị ô nhớ trỏ tới; int * const p không cho đổi địa chỉ của con trỏ." },
      { id: 'C', text: "Cả hai cách khai báo đều hoàn toàn tương đương nhau và ngăn cấm mọi thao tác ghi trên con trỏ p." },
      { id: 'D', text: "const int *p là con trỏ lưu trên bộ nhớ tĩnh ROM còn int * const p là con trỏ lưu trên ngăn xếp Stack." },
    ],
    correctAnswers: ['B'],
    explanation: "Quy tắc đọc ngược: `const int *p` là pointer to const int (giá trị *p cố định); `int * const p` là const pointer to int (địa chỉ p cố định).",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 327',
      hcmutePage: 'Trang 129',
      section: '6.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-013',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Con trỏ cấp hai (Double Pointer, ví dụ int **pp) trong ngôn ngữ C được sử dụng để làm gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Nhân đôi tốc độ truy cập dữ liệu mảng thông qua việc bỏ qua bộ nhớ đệm Cache của vi xử lý CPU." },
      { id: 'B', text: "Cấp phát một mảng hai chiều liên tục với kích thước cố định trực tiếp trên bộ nhớ ngăn xếp Stack." },
      { id: 'C', text: "Lưu trữ địa chỉ của một biến con trỏ khác, thường dùng để sửa đổi con trỏ qua tham số của hàm." },
      { id: 'D', text: "Thay thế hoàn toàn cho cấu trúc struct khi cần lưu trữ các kiểu dữ liệu không đồng nhất trong C." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.329 và HCMUTE tr.131: Con trỏ cấp 2 lưu địa chỉ con trỏ cấp 1, cho phép hàm thay đổi địa chỉ của con trỏ ngoài hàm hoặc quản lý mảng con trỏ (mảng chuỗi, ma trận động).",
    tags: ["c-lang", "ch6", "theory", "medium"],
    reference: {
      uttPage: 'Trang 329',
      hcmutePage: 'Trang 131',
      section: '6.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-014',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Hằng số con trỏ NULL trong các tệp tiêu đề chuẩn của ngôn ngữ C được định nghĩa bằng giá trị nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Là một ký tự rỗng '\0' có mã số ASCII bằng 0 và chiếm dung lượng chính xác là 1 byte trong RAM." },
      { id: 'B', text: "Là một giá trị số nguyên âm bất kỳ nằm ngoài giới hạn kích thước tối đa của bộ nhớ phân trang." },
      { id: 'C', text: "Là một địa chỉ ô nhớ ảo đặc biệt do hệ điều hành cấp riêng cho các biến toàn cục chưa khởi tạo." },
      { id: 'D', text: "Là một con trỏ hằng trỏ tới địa chỉ ô nhớ số 0 ((void *)0), biểu thị con trỏ không trỏ vào đâu." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.319 và HCMUTE tr.124: NULL được định nghĩa trong <stdio.h> / <stdlib.h> là `((void *)0)` hoặc `0`, đại diện cho địa chỉ rỗng không thể giải tham chiếu.",
    tags: ["c-lang", "ch6", "theory", "easy"],
    reference: {
      uttPage: 'Trang 319',
      hcmutePage: 'Trang 124',
      section: '6.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-015',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Bẫy đề thi kinh điển: Kết quả in ra của biểu thức '*p++' trong đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[] = {10, 20, 30};
    int *p = a;
    printf("%d ", *p++);
    printf("%d", *p);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '11 11' (toán tử ++ tăng giá trị của phần tử a[0] từ 10 lên 11 trước khi in ra màn hình)." },
      { id: 'B', text: "In ra '20 20' (toán tử ++ tăng địa chỉ con trỏ p lên trước rồi mới thực hiện giải tham chiếu ô nhớ)." },
      { id: 'C', text: "In ra '10 10' (phép toán tăng hậu tố hoàn toàn không có hiệu lực đối với các biến con trỏ mảng)." },
      { id: 'D', text: "In ra '10 20' (*p++ trả về giá trị ban đầu *p=10 rồi sau đó mới tăng địa chỉ con trỏ p trỏ sang a[1])." },
    ],
    correctAnswers: ['D'],
    explanation: "Toán tử hậu tố ++ ưu tiên cao hơn giải tham chiếu *, nhưng giá trị trả về của p++ là giá trị cũ của p. Do đó *p++ lấy *p cũ (10), rồi p tăng lên trỏ tới a[1]. Printf thứ hai in *p mới (20).",
    tags: ["c-lang", "ch6", "output", "hard"],
    reference: {
      uttPage: 'Trang 323',
      hcmutePage: 'Trang 126',
      section: '6.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch6-016',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "So sánh với câu trước: Kết quả in ra của biểu thức '(*p)++' trong đoạn chương trình sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[] = {10, 20, 30};
    int *p = a;
    printf("%d ", (*p)++);
    printf("%d", *p);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '10 11' (lấy giá trị cũ *p=10 in ra rồi tăng giá trị ô nhớ mà p trỏ tới lên 11, p không đổi vị trí)." },
      { id: 'B', text: "In ra '10 20' (toán tử tăng hậu tố dịch chuyển địa chỉ con trỏ p sang phần tử kế tiếp trong mảng)." },
      { id: 'C', text: "In ra '11 11' (giá trị ô nhớ được tăng lên 11 trước khi câu lệnh in thứ nhất được thực thi xong)." },
      { id: 'D', text: "In ra '20 30' (cả giá trị ô nhớ và địa chỉ con trỏ p đều đồng thời được tăng thêm một đơn vị)." },
    ],
    correctAnswers: ['A'],
    explanation: "Dấu ngoặc (*p)++ chỉ định giải tham chiếu trước. Biểu thức in ra giá trị hiện tại của *p là 10, sau đó tăng giá trị ô nhớ a[0] lên 11. Con trỏ p vẫn trỏ a[0]. Printf thứ hai in 11.",
    tags: ["c-lang", "ch6", "output", "hard"],
    reference: {
      uttPage: 'Trang 323',
      hcmutePage: 'Trang 126',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-017',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Chương trình sau in ra giá trị gì sau khi biến x bị thay đổi gián tiếp qua con trỏ p?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 5;
    int *p = &x;
    *p += 10;
    printf("%d", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 5 (biến x hoàn toàn không bị ảnh hưởng do phép cộng chỉ thực hiện trên biến con trỏ p)." },
      { id: 'B', text: "In ra số 15 (thao tác *p += 10 làm thay đổi trực tiếp giá trị của biến x mà con trỏ p đang trỏ tới)." },
      { id: 'C', text: "In ra số 10 (giá trị 10 ghi đè hoàn toàn lên giá trị khởi tạo ban đầu của biến số nguyên x)." },
      { id: 'D', text: "In ra địa chỉ ô nhớ của biến x trên bộ nhớ máy tính dưới dạng số nguyên cơ số mười sáu." },
    ],
    correctAnswers: ['B'],
    explanation: "p trỏ tới x, nên *p chính là x. Phép toán *p += 10 tương đương x += 10 -> x = 15.",
    tags: ["c-lang", "ch6", "output", "medium"],
    reference: {
      uttPage: 'Trang 318',
      hcmutePage: 'Trang 123',
      section: '6.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-018',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Giá trị in ra của phép trừ hai con trỏ trong đoạn chương trình mảng sau đây là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p1 = &arr[1];
    int *p2 = &arr[4];
    printf("%td", p2 - p1);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 12 (chênh lệch số byte địa chỉ bộ nhớ giữa hai phần tử là 3 phần tử nhân 4 bytes)." },
      { id: 'B', text: "In ra số 4 (do con trỏ p2 trỏ tới phần tử thứ tư trong cấu trúc mảng dữ liệu ban đầu)." },
      { id: 'C', text: "In ra số 3 (hiệu hai con trỏ bằng chênh lệch chỉ số phần tử trong mảng: 4 - 1 = 3 phần tử)." },
      { id: 'D', text: "In ra số 1 (do hai con trỏ trỏ tới hai phần tử nằm liền kề nhau trên bộ nhớ phân vùng)." },
    ],
    correctAnswers: ['C'],
    explanation: "p2 - p1 = (4 - 1) = 3 phần tử. Trong C, phép trừ hai con trỏ cùng mảng trả về số phần tử chênh lệch (được chuẩn hóa theo sizeof(int)).",
    tags: ["c-lang", "ch6", "output", "medium"],
    reference: {
      uttPage: 'Trang 324',
      hcmutePage: 'Trang 127',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-019',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Kết quả in ra của con trỏ cấp 2 trong đoạn mã sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 100;
    int *p = &a;
    int **pp = &p;
    printf("%d", **pp + 5);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 100 (phép toán cộng 5 không thể thực hiện trực tiếp trên con trỏ cấp hai giải tham chiếu)." },
      { id: 'B', text: "In ra địa chỉ của biến con trỏ p cộng thêm 5 bytes địa chỉ trong không gian bộ nhớ máy tính." },
      { id: 'C', text: "Chương trình gặp lỗi biên dịch do không thể giải tham chiếu hai dấu sao liên tiếp trên pp." },
      { id: 'D', text: "In ra số 105 (giải tham chiếu hai lần **pp lấy được giá trị của biến a là 100 rồi cộng thêm 5)." },
    ],
    correctAnswers: ['D'],
    explanation: "*pp lấy con trỏ p, **pp lấy giá trị ô nhớ a (100). Do đó **pp + 5 = 100 + 5 = 105.",
    tags: ["c-lang", "ch6", "output", "medium"],
    reference: {
      uttPage: 'Trang 329',
      hcmutePage: 'Trang 131',
      section: '6.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-020',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Giá trị in ra của cú pháp mảng 'lạ' 2[a] trong chương trình sau là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[] = {10, 20, 30, 40};
    printf("%d", 2[a]);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 30 (cú pháp 2[a] tương đương *(2 + a) tức là *(a + 2) và cho ra giá trị phần tử a[2])." },
      { id: 'B', text: "Chương trình báo lỗi biên dịch vì chỉ số của mảng bắt buộc phải đặt sau tên biến mảng a." },
      { id: 'C', text: "In ra số 20 (chương trình lấy giá trị của phần tử có chỉ số bằng 2 chia cho phần tử đầu)." },
      { id: 'D', text: "In ra một giá trị rác ngẫu nhiên do trình biên dịch không thể phân giải biểu thức nghịch đảo." },
    ],
    correctAnswers: ['A'],
    explanation: "Theo chuẩn C, a[b] được định nghĩa là *((a) + (b)). Vì phép cộng giao hoán, 2[a] == *((2) + (a)) == *((a) + (2)) == a[2] = 30.",
    tags: ["c-lang", "ch6", "output", "hard"],
    reference: {
      uttPage: 'Trang 325',
      hcmutePage: 'Trang 128',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-021',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Giá trị in ra của vùng nhớ được cấp phát bằng hàm calloc sau đây là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *p = (int *)calloc(3, sizeof(int));
    if (p != NULL) {
        printf("%d", p[0] + p[1] + p[2]);
        free(p);
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra một số rác không xác định vì bộ nhớ động trên Heap không bao giờ tự khởi tạo." },
      { id: 'B', text: "In ra số 0 (hàm calloc tự động khởi tạo toàn bộ các phần tử bộ nhớ về giá trị bằng 0)." },
      { id: 'C', text: "In ra số 3 (do hàm calloc tự động gán giá trị mặc định bằng số lượng phần tử cấp phát)." },
      { id: 'D', text: "Chương trình bị lỗi biên dịch do con trỏ p chưa được cấp phát vùng đệm trên Stack." },
    ],
    correctAnswers: ['B'],
    explanation: "calloc khởi tạo mọi byte cấp phát bằng 0, do đó p[0]=0, p[1]=0, p[2]=0. Tổng là 0 + 0 + 0 = 0.",
    tags: ["c-lang", "ch6", "output", "medium"],
    reference: {
      uttPage: 'Trang 330',
      hcmutePage: 'Trang 132',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-022',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Giá trị in ra của biểu thức '*++p' trong đoạn mã duyệt mảng sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[] = {5, 15, 25};
    int *p = a;
    printf("%d ", *++p);
    printf("%d", *p);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '5 15' (in giá trị ban đầu trước rồi mới tăng địa chỉ con trỏ sang phần tử tiếp theo)." },
      { id: 'B', text: "In ra '6 6' (giá trị của phần tử a[0] được tăng lên một đơn vị thành 6 trước khi in ra màn hình)." },
      { id: 'C', text: "In ra '15 15' (toán tử tiền tố ++p tăng địa chỉ con trỏ trước để trỏ sang a[1] rồi mới in giá trị 15)." },
      { id: 'D', text: "In ra '15 25' (lệnh in thứ hai tự động tăng thêm địa chỉ con trỏ thêm một bước nhảy kế tiếp)." },
    ],
    correctAnswers: ['C'],
    explanation: "*++p: ++ tiền tố tăng p trước, trỏ tới a[1]. Sau đó giải tham chiếu * lấy a[1] = 15. Cả 2 lệnh printf đều in 15.",
    tags: ["c-lang", "ch6", "output", "hard"],
    reference: {
      uttPage: 'Trang 323',
      hcmutePage: 'Trang 126',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-023',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Kết quả in ra của con trỏ trỏ tới chuỗi ký tự khi tăng địa chỉ p += 3 là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    char *p = "ABCDEF";
    p += 3;
    printf("%s", p);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi 'ABC' (chương trình cắt lấy 3 ký tự đầu tiên của chuỗi ký tự ban đầu để in)." },
      { id: 'B', text: "In ra đúng một ký tự 'D' (phép toán p += 3 làm cho con trỏ chỉ lưu trữ một ký tự duy nhất)." },
      { id: 'C', text: "Chương trình gặp lỗi biên dịch do con trỏ chuỗi không thể thực hiện phép toán cộng số học." },
      { id: 'D', text: "In ra chuỗi 'DEF' (con trỏ p dịch chuyển qua 3 ký tự và trỏ tới ký tự 'D' cho đến hết chuỗi)." },
    ],
    correctAnswers: ['D'],
    explanation: "p trỏ 'A'. p += 3 dịch con trỏ qua 'A', 'B', 'C' để trỏ tới 'D'. printf(\"%s\", p) in từ 'D' đến '\0', tức 'DEF'.",
    tags: ["c-lang", "ch6", "output", "medium"],
    reference: {
      uttPage: 'Trang 322',
      hcmutePage: 'Trang 126',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-024',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Đoạn mã sau thực hiện phép toán trên con trỏ và mảng sẽ in ra kết quả số học nào?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[] = {10, 20, 30, 40, 50};
    int *p = a + 4;
    printf("%d", *(p - 2));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 30 (p trỏ tới a[4] có giá trị 50, lùi lại 2 phần tử p-2 sẽ trỏ tới a[2] có giá trị 30)." },
      { id: 'B', text: "In ra số 48 (lấy giá trị của phần tử a[4] là 50 trừ đi hằng số 2 cho ra kết quả bằng 48)." },
      { id: 'C', text: "In ra số 20 (con trỏ lùi lại hai bước địa chỉ tính từ vị trí bắt đầu của mảng số nguyên)." },
      { id: 'D', text: "Chương trình gặp lỗi bộ nhớ do phép toán trừ số học không được phép áp dụng trên con trỏ." },
    ],
    correctAnswers: ['A'],
    explanation: "p = a + 4 = &a[4]. p - 2 = &a[4-2] = &a[2]. *(p - 2) = a[2] = 30.",
    tags: ["c-lang", "ch6", "output", "hard"],
    reference: {
      uttPage: 'Trang 322',
      hcmutePage: 'Trang 126',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-025',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Giá trị in ra của chương trình gán hai con trỏ trỏ cùng một biến sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int val = 10;
    int *p1 = &val;
    int *p2 = p1;
    *p2 = 25;
    printf("%d %d", *p1, val);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '10 25' (con trỏ p1 vẫn lưu giữ giá trị cũ 10 trước khi p2 thực hiện phép gán giá trị mới)." },
      { id: 'B', text: "In ra '25 25' (p1 và p2 cùng trỏ tới biến val nên thay đổi qua *p2 làm đổi giá trị của cả hai)." },
      { id: 'C', text: "In ra '25 10' (phép gán qua con trỏ chỉ làm thay đổi giá trị nội bộ của các biến con trỏ)." },
      { id: 'D', text: "Chương trình báo lỗi biên dịch do không thể gán trực tiếp hai biến con trỏ cùng kiểu với nhau." },
    ],
    correctAnswers: ['B'],
    explanation: "p2 = p1 nghĩa là p2 cùng trỏ tới val. *p2 = 25 làm val thành 25. Lúc này *p1 và val đều là 25.",
    tags: ["c-lang", "ch6", "output", "medium"],
    reference: {
      uttPage: 'Trang 318',
      hcmutePage: 'Trang 123',
      section: '6.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-026',
    chapterId: 6,
    articleId: 'c-art-ch6-01',
    content: "Lỗi con trỏ hoang dã (Wild Pointer) cực kỳ nguy hiểm nào xuất hiện trong đoạn mã sau?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `int *p;
*p = 100;`,
    options: [
      { id: 'A', text: "Con trỏ p chưa được khởi tạo mang địa chỉ rác ngẫu nhiên, giải tham chiếu *p gây sập chương trình ngay." },
      { id: 'B', text: "Thiếu từ khóa malloc đặt trước tên biến con trỏ để trình biên dịch biết kiểu cấp phát bộ nhớ." },
      { id: 'C', text: "Biến con trỏ p bắt buộc phải có dấu ngoặc tròn bao quanh (*p) khi thực hiện phép gán số học." },
      { id: 'D', text: "Hằng số 100 có giá trị quá lớn không thể lưu trữ vừa vào kích thước của một ô nhớ con trỏ." },
    ],
    correctAnswers: ['A'],
    explanation: "Bẫy con trỏ hoang dã (Wild Pointer): Con trỏ p chưa trỏ vào vùng nhớ hợp lệ nào (chứa địa chỉ rác). Ghi `*p = 100` ghi đè ô nhớ bất kỳ trong RAM, gây lỗi Access Violation / Segmentation fault.",
    tags: ["c-lang", "ch6", "debug", "easy"],
    reference: {
      uttPage: 'Trang 319',
      hcmutePage: 'Trang 124',
      section: '6.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch6-027',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Lỗi rò rỉ bộ nhớ (Memory Leak) trong đoạn chương trình cấp phát động sau xảy ra do đâu?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `void xuLy(void) {
    int *ptr = (int *)malloc(100 * sizeof(int));
    // Thao tac tren ptr
    return;
}`,
    options: [
      { id: 'A', text: "Cấp phát 100 phần tử số nguyên int làm tràn bộ nhớ ngăn xếp Stack của hàm khi thực thi." },
      { id: 'B', text: "Thiếu việc ép kiểu con trỏ trả về của hàm malloc sang kiểu dữ liệu số nguyên không dấu." },
      { id: 'C', text: "Thoát khỏi hàm mà không gọi free(ptr), làm mất con trỏ quản lý và vùng nhớ Heap không thể thu hồi." },
      { id: 'D', text: "Biến con trỏ ptr không được khai báo bằng từ khóa static trước khi gọi hàm cấp phát động." },
    ],
    correctAnswers: ['C'],
    explanation: "Bẫy rò rỉ bộ nhớ (Memory Leak): Khi xuLy() return, biến ptr trên Stack bị hủy, nhưng 400 bytes trên Heap vẫn bị chiếm dụng mà không có con trỏ nào trỏ tới để free.",
    tags: ["c-lang", "ch6", "debug", "medium"],
    reference: {
      uttPage: 'Trang 333',
      hcmutePage: 'Trang 135',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-028',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Lỗi nghiêm trọng 'Double Free' xảy ra khi lập trình viên thực hiện hành động nào sau đây?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int *p = (int *)malloc(sizeof(int));
free(p);
free(p);`,
    options: [
      { id: 'A', text: "Quên không giải phóng bộ nhớ động trước khi chương trình kết thúc và trả quyền về hệ điều hành." },
      { id: 'B', text: "Giải phóng một con trỏ có giá trị bằng NULL khiến hệ điều hành phát sinh ngoại lệ truy cập." },
      { id: 'C', text: "Sử dụng hàm free trên một biến con trỏ trỏ tới vùng nhớ cục bộ được cấp phát trên ngăn xếp Stack." },
      { id: 'D', text: "Giải phóng cùng một địa chỉ bộ nhớ động hai lần liên tiếp khiến trình quản lý bộ nhớ bị phá hủy." },
    ],
    correctAnswers: ['D'],
    explanation: "Gọi free(p) 2 lần trên cùng con trỏ gây lỗi 'Double Free' làm hỏng cấu trúc heap metadata (crash chương trình / lỗ hổng bảo mật). Để tránh, cần gán `p = NULL;` sau free đầu tiên.",
    tags: ["c-lang", "ch6", "debug", "medium"],
    reference: {
      uttPage: 'Trang 333',
      hcmutePage: 'Trang 135',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-029',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Lỗi sử dụng sau giải phóng (Use-After-Free) được minh họa bằng trường hợp nào sau đây?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int *p = (int *)malloc(sizeof(int));
*p = 10;
free(p);
printf("%d", *p);`,
    options: [
      { id: 'A', text: "Truy xuất và giải tham chiếu ô nhớ *p sau khi vùng nhớ đó đã được trả lại cho hệ thống quản lý." },
      { id: 'B', text: "Gọi hàm printf để in một số nguyên từ con trỏ được cấp phát bộ nhớ động trên phân vùng Heap." },
      { id: 'C', text: "Không thực hiện gán giá trị khởi tạo cho biến con trỏ p ngay tại dòng lệnh cấp phát malloc." },
      { id: 'D', text: "Cấp phát bộ nhớ cho biến con trỏ kiểu int với kích thước nhỏ hơn kích thước chuẩn của hệ thống." },
    ],
    correctAnswers: ['A'],
    explanation: "Use-after-free: sau free(p), ô nhớ không còn thuộc quyền sở hữu của chương trình. Đọc `*p` gây hành vi không xác định (Undefined Behavior) vì ô nhớ có thể đã bị cấp cho tiến trình khác.",
    tags: ["c-lang", "ch6", "debug", "medium"],
    reference: {
      uttPage: 'Trang 333',
      hcmutePage: 'Trang 135',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-030',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Vì sao phép toán giải tham chiếu trên con trỏ void* sau đây bị trình biên dịch từ chối?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int a = 10;
void *p = &a;
printf("%d", *p);`,
    options: [
      { id: 'A', text: "Vì địa chỉ của biến số nguyên a bắt buộc phải được lưu trữ trong con trỏ có cùng kiểu dữ liệu int*." },
      { id: 'B', text: "Vì con trỏ void* không có kiểu dữ liệu cụ thể nên trình biên dịch không biết cần đọc bao nhiêu bytes." },
      { id: 'C', text: "Vì con trỏ void* chỉ có thể trỏ tới các hàm không có giá trị trả về chứ không thể trỏ tới biến số." },
      { id: 'D', text: "Vì hàm printf không hỗ trợ in các giá trị được giải tham chiếu từ các biến con trỏ trong ngôn ngữ C." },
    ],
    correctAnswers: ['B'],
    explanation: "void* không có kích thước kiểu dữ liệu (incomplete type). Compiler không biết *p chiếm 1, 2, 4 hay 8 bytes nên cấm `*p`. Phải ép kiểu: `*(int *)p`.",
    tags: ["c-lang", "ch6", "debug", "medium"],
    reference: {
      uttPage: 'Trang 328',
      hcmutePage: 'Trang 130',
      section: '6.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-031',
    chapterId: 6,
    articleId: 'c-art-ch6-02',
    content: "Vì sao lệnh gán 'a = p;' sau đây gây lỗi biên dịch nghiêm trọng trong ngôn ngữ C?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int a[5];
int *p;
a = p;`,
    options: [
      { id: 'A', text: "Con trỏ p có kích thước bộ nhớ là 8 bytes lớn hơn kích thước tổng cộng của toàn bộ mảng dữ liệu a." },
      { id: 'B', text: "Hai biến a và p khác nhau về số chiều dữ liệu nên không thể tương thích trong phép gán địa chỉ nhớ." },
      { id: 'C', text: "Tên mảng a là một hằng con trỏ (Constant Pointer) cố định địa chỉ, không thể làm vế trái phép gán." },
      { id: 'D', text: "Trình biên dịch yêu cầu bắt buộc phải sử dụng toán tử giải tham chiếu '*' ở cả hai vế của phép gán." },
    ],
    correctAnswers: ['C'],
    explanation: "Tên mảng `a` là hằng con trỏ trỏ tới phần tử đầu của mảng. Nó là non-modifiable lvalue, không thể gán địa chỉ mới cho `a`. Ngược lại `p = a;` thì hoàn toàn hợp lệ.",
    tags: ["c-lang", "ch6", "debug", "hard"],
    reference: {
      uttPage: 'Trang 325',
      hcmutePage: 'Trang 128',
      section: '6.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-032',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Đoạn mã sau có lỗi logic gì khi sử dụng hàm realloc để mở rộng kích thước bộ nhớ?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int *p = (int *)malloc(10 * sizeof(int));
p = (int *)realloc(p, 1000000000 * sizeof(int));`,
    options: [
      { id: 'A', text: "Hàm realloc không thể nhận kích thước mới lớn hơn gấp mười lần so với kích thước ban đầu của nó." },
      { id: 'B', text: "Hàm realloc bắt buộc phải đi kèm với câu lệnh free(p) được gọi ngay trước khi thực hiện cấp phát." },
      { id: 'C', text: "Trình biên dịch cấm việc ép kiểu dữ liệu kết quả trả về của hàm realloc sang kiểu con trỏ số nguyên." },
      { id: 'D', text: "Nếu realloc thất bại trả về NULL, phép gán 'p = ...' làm mất luôn con trỏ tới vùng nhớ cũ gây rò rỉ." },
    ],
    correctAnswers: ['D'],
    explanation: "Bẫy realloc: Nếu không đủ RAM, realloc trả về NULL nhưng khối nhớ cũ vẫn còn nguyên. Nếu gán trực tiếp `p = realloc(p, ...)`, p thành NULL, mất dấu khối cũ -> rò rỉ bộ nhớ. Cần dùng biến tạm: `int *tmp = realloc(...)`.",
    tags: ["c-lang", "ch6", "debug", "medium"],
    reference: {
      uttPage: 'Trang 332',
      hcmutePage: 'Trang 134',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-033',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Cần điền câu lệnh nào vào chỗ trống (...) ngay sau khi giải phóng bộ nhớ để tránh lỗi con trỏ lơ lửng?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `free(ptr);
ptr = ...;`,
    options: [
      { id: 'A', text: "Điền '0x01' để đánh dấu con trỏ đã được hệ điều hành giải phóng thành công trên phân vùng nhớ Heap." },
      { id: 'B', text: "Điền 'NULL' để đưa con trỏ về trạng thái an toàn, ngăn chặn việc vô tình giải tham chiếu địa chỉ cũ." },
      { id: 'C', text: "Điền 'EOF' để báo hiệu con trỏ đã kết thúc chu kỳ hoạt động và chuẩn bị bị hủy khỏi bộ nhớ Stack." },
      { id: 'D', text: "Điền 'void' để chuyển đổi con trỏ về dạng con trỏ tổng quát sẵn sàng cho lần cấp phát kế tiếp theo." },
    ],
    correctAnswers: ['B'],
    explanation: "Gán `ptr = NULL;` sau khi `free(ptr);` là chuẩn lập trình an toàn trong C, triệt tiêu con trỏ lơ lửng (Dangling pointer).",
    tags: ["c-lang", "ch6", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 333',
      hcmutePage: 'Trang 135',
      section: '6.4',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch6-034',
    chapterId: 6,
    articleId: 'c-art-ch6-04',
    content: "Cần điền cú pháp nào vào chỗ trống (...) để cấp phát động một mảng gồm n số nguyên bằng malloc?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `int *a = (int *)malloc(...);`,
    options: [
      { id: 'A', text: "Điền 'n * sizeof(int)' để tính toán chính xác tổng số byte bộ nhớ cần thiết cho n phần tử nguyên." },
      { id: 'B', text: "Điền 'n' để yêu cầu hệ điều hành cung cấp đúng số lượng n ô nhớ trên phân vùng bộ nhớ động Heap." },
      { id: 'C', text: "Điền 'sizeof(n)' để xác định dung lượng bộ nhớ dựa trên kiểu dữ liệu của biến số lượng phần tử." },
      { id: 'D', text: "Điền 'sizeof(int *)' để cấp phát vùng nhớ có kích thước bằng kích thước của một con trỏ quản lý." },
    ],
    correctAnswers: ['A'],
    explanation: "malloc nhận số bytes. Để cấp n số nguyên int, cần truyền: n * sizeof(int).",
    tags: ["c-lang", "ch6", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 330',
      hcmutePage: 'Trang 132',
      section: '6.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch6-035',
    chapterId: 6,
    articleId: 'c-art-ch6-03',
    content: "Cần điền từ khóa nào vào vị trí (...) để khai báo một con trỏ có địa chỉ cố định không thể trỏ đi nơi khác?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `int x = 10, y = 20;
int * ... p = &x;
p = &y; // Bi loi bien dich`,
    options: [
      { id: 'A', text: "Điền từ khóa 'const' đặt trước kiểu dữ liệu (const int * p) để khóa không cho phép sửa đổi địa chỉ." },
      { id: 'B', text: "Điền từ khóa 'const' đặt sau dấu sao (int * const p) để tạo ra một con trỏ hằng cố định địa chỉ." },
      { id: 'C', text: "Điền từ khóa 'static' để biến con trỏ p được cố định địa chỉ vật lý trong suốt quá trình chạy máy." },
      { id: 'D', text: "Điền từ khóa 'register' để đưa con trỏ vào thanh ghi nhằm ngăn chặn mọi thao tác gán lại địa chỉ." },
    ],
    correctAnswers: ['B'],
    explanation: "`int * const p` là const pointer (địa chỉ của con trỏ cố định không đổi). Phép gán p = &y sẽ bị compiler báo lỗi.",
    tags: ["c-lang", "ch6", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 327',
      hcmutePage: 'Trang 129',
      section: '6.3',
    },
    mockExamPreset: false,
  },
];
