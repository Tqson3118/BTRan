/**
 * src/subjects/c-lang/data/questions/questions-ch2.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 2: Kiểu dữ liệu, Biểu thức & Vào/Ra chuẩn
 * Số lượng: 30 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh2: CQuestion[] = [
  {
    id: 'q-c-ch2-001',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Kích thước bộ nhớ chuẩn của kiểu dữ liệu char trong ngôn ngữ C luôn là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Có kích thước 2 bytes để hỗ trợ bảng mã Unicode 16-bit mở rộng một cách chi tiết." },
      { id: 'B', text: "Có kích thước 4 bytes trên kiến trúc hệ thống máy tính 32-bit và 64-bit một cách chi tiết." },
      { id: 'C', text: "Luôn có kích thước chính xác là 1 byte theo định nghĩa chuẩn của ngôn ngữ." },
      { id: 'D', text: "Kích thước phụ thuộc hoàn toàn vào cấu hình của từng trình biên dịch cụ thể." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.89 và HCMUTE tr.31: sizeof(char) luôn được ngôn ngữ C định nghĩa bằng 1 byte.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-002',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Kiểu dữ liệu unsigned char có miền giá trị biểu diễn số nguyên nào sau đây?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Từ -128 đến 127 (sử dụng bit dấu theo quy ước bù 2 tiêu chuẩn) một cách chi tiết." },
      { id: 'B', text: "Từ 0 đến 255 (biểu diễn toàn bộ 256 trạng thái không âm trong 8 bit)." },
      { id: 'C', text: "Từ 0 đến 65535 (tương đương với kiểu số nguyên ngắn không dấu) một cách chi tiết." },
      { id: 'D', text: "Từ -256 đến 255 (mở rộng thêm phạm vi số âm cho việc tính toán) một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.91: unsigned char (1 byte = 8 bit không dấu) có miền giá trị từ 0 đến 2^8 - 1 = 255.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-003',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Toán tử sizeof() trong ngôn ngữ C trả về giá trị có kiểu dữ liệu chuẩn nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Kiểu int (số nguyên có dấu thông thường của kiến trúc vi xử lý) một cách chi tiết." },
      { id: 'B', text: "Kiểu long long (số nguyên lớn để tránh bị tràn khi đo bộ nhớ) một cách chi tiết." },
      { id: 'C', text: "Kiểu size_t (số nguyên không dấu biểu thị kích thước tính bằng byte)." },
      { id: 'D', text: "Kiểu float (số thực chấm động biểu diễn dung lượng theo megabyte) một cách chi tiết." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.94 và HCMUTE tr.36: sizeof trả về kiểu size_t, là kiểu số nguyên không dấu định nghĩa trong <stddef.h>.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-004',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Mã định dạng nào trong hàm printf() được dùng để in một số nguyên có kiểu long?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Mã định dạng '%d' (áp dụng mặc định cho tất cả các kiểu số nguyên)." },
      { id: 'B', text: "Mã định dạng '%lf' (dành riêng cho các số có độ dài lớn gấp đôi)." },
      { id: 'C', text: "Mã định dạng '%lu' (chỉ định số nguyên có dấu với kích thước dài)." },
      { id: 'D', text: "Mã định dạng '%ld' (hoặc '%li' cho số nguyên kiểu long có dấu)." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.115: %d dùng cho int, %ld dùng cho long, %lld dùng cho long long, %lf dùng cho double.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 114 - 118',
      hcmutePage: 'Trang 26 - 29',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-005',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Quy tắc ép kiểu ngầm định (Implicit Type Promotion) trong biểu thức số học của C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tự động chuyển đổi toán hạng có kiểu nhỏ hơn lên kiểu dữ liệu lớn hơn." },
      { id: 'B', text: "Tự động làm tròn số thực về số nguyên gần nhất để tăng tốc tính toán." },
      { id: 'C', text: "Luôn ưu tiên chuyển đổi tất cả các toán hạng về kiểu nguyên int mặc định." },
      { id: 'D', text: "Chuyển đổi theo thứ tự từ phải sang trái bất kể kích thước byte của biến." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.97 và HCMUTE tr.38: Khi tính toán biểu thức hỗn hợp, C tự động nâng cấp kiểu nhỏ lên kiểu lớn hơn (char, short -> int -> unsigned -> long -> float -> double).",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 96 - 100',
      hcmutePage: 'Trang 37 - 40',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-006',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Toán tử tiền tố ++x và hậu tố x++ khác nhau căn bản ở điểm nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "++x chỉ dùng cho biến nguyên, còn x++ dùng được cho cả số thực." },
      { id: 'B', text: "++x tăng trước rồi lấy giá trị; x++ lấy giá trị cũ rồi mới tăng." },
      { id: 'C', text: "++x thực hiện hai lần phép cộng, còn x++ chỉ cộng duy nhất một lần." },
      { id: 'D', text: "++x có độ ưu tiên thấp hơn x++, còn lại hành vi hoàn toàn giống nhau." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.102 và HCMUTE tr.41: Tiền tố ++x tăng x lên 1 trước rồi mới tính biểu thức; Hậu tố x++ trả về giá trị cũ của x trước khi tăng.",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 100 - 108',
      hcmutePage: 'Trang 41 - 44',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-007',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Hiện tượng đoản mạch logic (Short-circuit Evaluation) xảy ra trong trường hợp nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Toán tử số học bị tràn bộ nhớ dẫn đến ngắt mạch thực thi của CPU một cách chi tiết." },
      { id: 'B', text: "Biểu thức logic chứa quá nhiều dấu ngoặc đơn gây lỗi biên dịch cú pháp." },
      { id: 'C', text: "Các biến số bị gán nhầm địa chỉ con trỏ vào ô nhớ của thanh ghi điều khiển." },
      { id: 'D', text: "Toán tử && bỏ qua vế phải nếu vế trái sai; || bỏ qua nếu vế trái đúng." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.105 và HCMUTE tr.42: Trong A && B, nếu A = 0 thì B không được chạy; trong A || B, nếu A != 0 thì B không được chạy.",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 100 - 108',
      hcmutePage: 'Trang 41 - 44',
      section: '2.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-008',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Toán tử thao tác bit XOR (ký hiệu '^') có bảng chân trị hoạt động như thế nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Trả về 1 khi cả hai bit cùng bằng 1; các trường hợp khác trả về 0." },
      { id: 'B', text: "Trả về 1 khi có ít nhất một bit bằng 1; chỉ trả về 0 khi cả hai bit là 0." },
      { id: 'C', text: "Trả về 1 khi hai bit khác nhau; trả về 0 khi hai bit giống nhau." },
      { id: 'D', text: "Đảo ngược toàn bộ các bit từ 0 sang 1 và từ 1 sang 0 của một số nguyên." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.109 và HCMUTE tr.44: Toán tử XOR (Exclusive OR) trả về 1 nếu hai bit khác nhau (0 ^ 1 = 1, 1 ^ 0 = 1) và trả về 0 nếu giống nhau (0 ^ 0 = 0, 1 ^ 1 = 0).",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 108 - 114',
      hcmutePage: 'Trang 43 - 46',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-009',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Phép dịch bit sang trái (x << n) đối với số nguyên dương tương đương với phép toán nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tương đương với phép chia lấy phần nguyên của số x cho 2 mũ n." },
      { id: 'B', text: "Tương đương với phép cộng dồn giá trị n vào biến x liên tiếp n lần." },
      { id: 'C', text: "Tương đương với phép tính số dư của x khi chia cho lũy thừa 2 mũ n." },
      { id: 'D', text: "Tương đương với phép nhân số nguyên x với lũy thừa 2 mũ n (x * 2^n)." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.111 và HCMUTE tr.45: Dịch trái n bit tương đương nhân với 2^n; dịch phải n bit tương đương chia nguyên cho 2^n.",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 108 - 114',
      hcmutePage: 'Trang 43 - 46',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-010',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Biểu diễn số âm trong bộ nhớ máy tính của ngôn ngữ C hầu hết sử dụng phương pháp nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Phương pháp mã bù 2 (Two's Complement: đảo bit rồi cộng thêm 1)." },
      { id: 'B', text: "Phương pháp mã bù 1 (One's Complement: chỉ đảo bit giữ nguyên dấu)." },
      { id: 'C', text: "Phương pháp dấu lượng (Sign-Magnitude: dùng bit đầu làm dấu âm dương)." },
      { id: 'D', text: "Phương pháp độ dời thiên vị số mũ (Excess/Biased Notation của chuẩn IEEE)." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.92 và HCMUTE tr.34: Hầu hết phần cứng hiện đại và trình biên dịch C biểu diễn số nguyên có dấu theo phương pháp bù 2 (Two's Complement).",
    tags: ["c-lang", "ch2", "theory", "hard"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-011',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Tại sao việc sử dụng lệnh fflush(stdin) để xóa bộ nhớ đệm bàn phím bị coi là xấu trong C chuẩn?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Vì lệnh fflush(stdin) làm chậm tốc độ xử lý do phải truy cập đĩa cứng một cách chi tiết." },
      { id: 'B', text: "Vì chuẩn ANSI C quy định fflush chỉ áp dụng cho luồng xuất (Output Stream)." },
      { id: 'C', text: "Vì lệnh này bắt buộc phải nạp thêm thư viện conio.h không có sẵn ở Linux một cách chi tiết." },
      { id: 'D', text: "Vì fflush sẽ xóa sạch toàn bộ các biến số nguyên đã nhập trước đó trong RAM." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.120: Chuẩn ANSI C quy định fflush() chỉ định nghĩa cho output stream; áp dụng trên stdin là Undefined Behavior (hành vi không xác định).",
    tags: ["c-lang", "ch2", "theory", "hard"],
    reference: {
      uttPage: 'Trang 118 - 124',
      hcmutePage: 'Trang 29 - 31',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-012',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Mã định dạng '%p' trong hàm printf() được sử dụng để hiển thị thông tin gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Hiển thị tỷ lệ phần trăm tiến độ xử lý tác vụ của chương trình." },
      { id: 'B', text: "Hiển thị giá trị số thực có độ chính xác kép ở dạng ký hiệu khoa học." },
      { id: 'C', text: "Hiển thị địa chỉ ô nhớ của con trỏ dưới dạng hệ cơ số 16 (Hexadecimal)." },
      { id: 'D', text: "Hiển thị số hiệu định danh luồng (Process ID) đang chạy trong hệ thống." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.115: %p in giá trị con trỏ (địa chỉ bộ nhớ) dưới dạng hex (thường có tiền tố 0x).",
    tags: ["c-lang", "ch2", "theory", "hard"],
    reference: {
      uttPage: 'Trang 114 - 118',
      hcmutePage: 'Trang 26 - 29',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-013',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Kết quả hiển thị trên màn hình của đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    float x = 5 / 2;
    printf("%.1f", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '2.0' (do phép chia nguyên 5 / 2 được tính trước rồi mới ép kiểu)." },
      { id: 'B', text: "In ra '2.5' (do biến x khai báo kiểu float nên C tự chia số thực) một cách chi tiết." },
      { id: 'C', text: "In ra '2' (do phép chia nguyên bỏ qua phần thập phân hoàn toàn) một cách chi tiết." },
      { id: 'D', text: "Chương trình báo lỗi biên dịch do gán số nguyên cho biến kiểu float một cách chi tiết." },
    ],
    correctAnswers: ['A'],
    explanation: "Bẫy chia nguyên: 5 / 2 = 2. Gán 2 vào float x được 2.0f; in với %.1f cho ra 2.0.",
    tags: ["c-lang", "ch2", "output", "easy"],
    reference: {
      uttPage: 'Trang 98',
      hcmutePage: 'Trang 39',
      section: '2.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-014',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Giá trị của hai biến a và b sau khi thực thi đoạn mã sau là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 5;
    int b = a++;
    printf("%d %d", a, b);
    return 0;
}`,
    options: [
      { id: 'A', text: "Giá trị in ra là '6 6' (toán tử tăng thực hiện trước rồi gán giá trị mới cho b)." },
      { id: 'B', text: "Giá trị in ra là '5 5' (biến a không bị thay đổi do phép gán được ưu tiên)." },
      { id: 'C', text: "Giá trị in ra là '5 6' (biến b nhận giá trị tăng trước còn a giữ nguyên)." },
      { id: 'D', text: "Giá trị in ra là '6 5' (toán tử hậu tố gán giá trị cũ cho b rồi mới tăng a)." },
    ],
    correctAnswers: ['D'],
    explanation: "b = a++: b nhận giá trị ban đầu là 5, sau đó a mới tăng lên 6 -> In: 6 5.",
    tags: ["c-lang", "ch2", "output", "easy"],
    reference: {
      uttPage: 'Trang 102',
      hcmutePage: 'Trang 41',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-015',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Giá trị của biến x được in ra sau khi thực thi biểu thức đoản mạch sau là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 10;
    int y = 0;
    if (y && ++x) {}
    printf("%d", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra 10 (do y bằng 0 nên biểu thức đoản mạch bỏ qua phép toán ++x)." },
      { id: 'B', text: "In ra 11 (do toán tử tiền tố ++x luôn được thực thi trước phép logic)." },
      { id: 'C', text: "In ra 0 (do kết quả của toàn bộ biểu thức logic được gán vào biến x)." },
      { id: 'D', text: "Chương trình báo lỗi vì điều kiện if không có phần thân lệnh xử lý." },
    ],
    correctAnswers: ['A'],
    explanation: "Trong A && B: vì y = 0 (sai), vế phải ++x bị đoản mạch bỏ qua hoàn toàn -> x vẫn giữ nguyên 10.",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 105',
      hcmutePage: 'Trang 42',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-016',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Giá trị của biểu thức thao tác bit sau khi thực thi là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 6;  // 00000110
    int b = 3;  // 00000011
    printf("%d", a ^ b);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 2 (kết quả của phép AND bit giữa hai số nguyên) một cách chi tiết." },
      { id: 'B', text: "In ra số 5 (kết quả phép XOR bit: 0110 ^ 0011 = 0101 nhị phân)." },
      { id: 'C', text: "In ra số 7 (kết quả của phép OR bit giữa hai số nguyên) một cách chi tiết." },
      { id: 'D', text: "In ra số 9 (kết quả của phép cộng thông thường hai số) một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "6 nhị phân là 0110, 3 là 0011. XOR từng cặp bit: 0^0=0, 1^0=1, 1^1=0, 0^1=1 -> 0101 (bằng 5 thập phân).",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 109',
      hcmutePage: 'Trang 44',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-017',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Kết quả in ra của phép dịch bit trong đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 5;
    printf("%d", (x << 2) + (x >> 1));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra kết quả là số 25 (tương đương biểu thức số học 5 * 4 + 5 / 1)." },
      { id: 'B', text: "In ra kết quả là số 12 (do phép dịch bit ưu tiên thấp hơn cộng số)." },
      { id: 'C', text: "In ra kết quả là số 22 (do x << 2 cho 20 và x >> 1 cho giá trị 2)." },
      { id: 'D', text: "In ra kết quả là số 10 (do phép dịch phải loại bỏ các bit trọng số)." },
    ],
    correctAnswers: ['C'],
    explanation: "5 << 2 = 5 * 4 = 20. 5 >> 1 = 5 / 2 = 2. Tổng 20 + 2 = 22.",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 111',
      hcmutePage: 'Trang 45',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-018',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Định dạng in chuỗi với căn lề sau đây hiển thị kết quả như thế nào?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    printf("|%-6s|%6d|", "C", 42);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '|     C|42    |' (chuỗi căn phải 6 ký tự, số căn trái 6 ký tự)." },
      { id: 'B', text: "In ra '|C-6   |42    |' (in kèm dấu gạch ngang của mã định dạng)." },
      { id: 'C', text: "In ra '|C|42|' (bỏ qua khoảng trắng vì độ dài chuỗi không vượt quá 6)." },
      { id: 'D', text: "In ra '|C     |    42|' (chuỗi căn trái 6 ký tự, số căn phải 6 ký tự)." },
    ],
    correctAnswers: ['D'],
    explanation: "%-6s căn lề trái trên 6 cột ('C     '); %6d căn lề phải trên 6 cột ('    42').",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 116',
      hcmutePage: 'Trang 28',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-019',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Giá trị của biểu thức điều kiện ba ngôi lồng nhau sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 3, b = 5, c = 2;
    int res = (a > b) ? a : (b > c ? b : c);
    printf("%d", res);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 3 (lấy giá trị của biến a do phép so sánh đầu tiên) một cách chi tiết." },
      { id: 'B', text: "In ra số 5 (nhánh ngoài sai nên thực thi nhánh trong và lấy b = 5)." },
      { id: 'C', text: "In ra số 2 (lấy giá trị của biến c sau khi duyệt qua toàn bộ điều kiện)." },
      { id: 'D', text: "Báo lỗi cú pháp vì toán tử ba ngôi không cho phép lồng ghép nhiều cấp." },
    ],
    correctAnswers: ['B'],
    explanation: "a > b (3 > 5) là false, nhảy sang vế false là (b > c ? b : c). 5 > 2 là true -> trả về b = 5.",
    tags: ["c-lang", "ch2", "output", "hard"],
    reference: {
      uttPage: 'Trang 113',
      hcmutePage: 'Trang 43',
      section: '2.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-020',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Hiện tượng tràn số nguyên không dấu (Unsigned Overflow) sau cho kết quả gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    unsigned char c = 255;
    c = c + 2;
    printf("%u", c);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 1 (do tràn số nguyên không dấu quay vòng modulo 256)." },
      { id: 'B', text: "In ra số 257 (do kiểu unsigned tự động mở rộng dung lượng lên 16-bit)." },
      { id: 'C', text: "In ra số -1 (do bit dấu bị bật thành số âm theo quy ước bù 2)." },
      { id: 'D', text: "Chương trình bị sập ngay lập tức với mã lỗi Arithmetic Overflow Exception." },
    ],
    correctAnswers: ['A'],
    explanation: "unsigned char có miền 0 đến 255 (modulo 256). 255 + 2 = 257 % 256 = 1.",
    tags: ["c-lang", "ch2", "output", "hard"],
    reference: {
      uttPage: 'Trang 93',
      hcmutePage: 'Trang 35',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-021',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Kết quả in ra màn hình của đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 1, b = 2;
    int c = a++ + ++b;
    printf("%d %d %d", a, b, c);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '2 3 5' (cả hai biến đều được tăng trước khi cộng dồn)." },
      { id: 'B', text: "In ra '2 3 4' (a lấy 1 tăng lên 2; b tăng lên 3; c = 1 + 3 = 4)." },
      { id: 'C', text: "In ra '1 3 4' (biến a chỉ tăng sau khi toàn bộ hàm main kết thúc)." },
      { id: 'D', text: "In ra '2 2 3' (toán tử hậu tố ghi đè lên kết quả của toán tử tiền tố)." },
    ],
    correctAnswers: ['B'],
    explanation: "a++ trả về 1 (sau đó a thành 2); ++b tăng b lên 3 rồi trả về 3 -> c = 1 + 3 = 4. Cuối cùng a=2, b=3, c=4.",
    tags: ["c-lang", "ch2", "output", "hard"],
    reference: {
      uttPage: 'Trang 102',
      hcmutePage: 'Trang 41',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-022',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Lệnh nhập dữ liệu sau đây phát sinh lỗi nghiêm trọng nào khi thực thi?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `int n;
scanf("%d", n);`,
    options: [
      { id: 'A', text: "Lỗi sai mã định dạng vì số nguyên int bắt buộc phải nhập bằng '%i' một cách chi tiết." },
      { id: 'B', text: "Lỗi biến n chưa được khởi tạo giá trị ban đầu trước khi gọi lệnh scanf một cách chi tiết." },
      { id: 'C', text: "Lỗi thiếu toán tử địa chỉ '&n' dẫn đến ghi dữ liệu vào ô nhớ rác gây crash." },
      { id: 'D', text: "Lệnh scanf không hỗ trợ đọc trực tiếp vào biến số nguyên đơn lẻ một cách chi tiết." },
    ],
    correctAnswers: ['C'],
    explanation: "Bẫy scanf kinh điển: scanf đòi hỏi địa chỉ của biến (&n). Truyền n (chứa rác) sẽ ghi đè ô nhớ rác gây crash (Segfault).",
    tags: ["c-lang", "ch2", "debug", "easy"],
    reference: {
      uttPage: 'Trang 118',
      hcmutePage: 'Trang 29',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-023',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Đoạn mã sau bị lỗi trôi lệnh không nhập được ký tự ch. Nguyên nhân là gì?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int age;
char ch;
scanf("%d", &age);
scanf("%c", &ch);`,
    options: [
      { id: 'A', text: "Do hàm scanf không cho phép gọi hai lần liên tiếp trong cùng một khối hàm main một cách chi tiết." },
      { id: 'B', text: "Do biến age khai báo kiểu int xung đột với bảng mã ASCII của biến ký tự ch một cách chi tiết." },
      { id: 'C', text: "Do thiếu thư viện conio.h để kích hoạt chức năng nhận tín hiệu bàn phím một cách chi tiết." },
      { id: 'D', text: "Do phím Enter sau khi nhập age để lại '\n' trong stdin và scanf(\"%c\") đọc ngay ký tự đó." },
    ],
    correctAnswers: ['D'],
    explanation: "Bẫy trôi lệnh: Phím Enter để lại '\n' trong stdin; scanf(\"%c\") nhận ngay '\n' và kết thúc. Sửa bằng scanf(\" %c\", &ch).",
    tags: ["c-lang", "ch2", "debug", "medium"],
    reference: {
      uttPage: 'Trang 120',
      hcmutePage: 'Trang 30',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-024',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Đoạn mã sau phát sinh lỗi gì khi cố gắng in số thực có độ chính xác kép?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `double d = 3.1415926535;
printf("%f", d);`,
    options: [
      { id: 'A', text: "Mã nguồn hợp lệ trong C vì printf tự thăng cấp float lên double theo quy ước biến đối." },
      { id: 'B', text: "Lỗi biên dịch vì biến kiểu double bắt buộc phải in bằng mã định dạng '%lf' một cách chi tiết." },
      { id: 'C', text: "Lỗi runtime do kích thước 8 bytes của double làm tràn vùng nhớ đệm in của %f một cách chi tiết." },
      { id: 'D', text: "Giá trị in ra bị sai lệch do số thực double bị ép kiểu ngược về số nguyên một cách chi tiết." },
    ],
    correctAnswers: ['A'],
    explanation: "Trong printf, tham số kiểu float tự động được thăng cấp ngầm định lên double (Default argument promotion), nên dùng %f để in double là hoàn toàn hợp lệ.",
    tags: ["c-lang", "ch2", "debug", "medium"],
    reference: {
      uttPage: 'Trang 115',
      hcmutePage: 'Trang 27',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-025',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Đoạn mã sau bị lỗi chia cho 0 tiềm ẩn (Division by Zero) ở trường hợp nào?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int a = 10, b = 0;
int c = (b != 0) ? (a / b) : 0;`,
    options: [
      { id: 'A', text: "Luôn luôn bị lỗi chia cho 0 vì trình biên dịch tính toán cả hai nhánh cùng lúc." },
      { id: 'B', text: "Bị lỗi chia cho 0 khi tối ưu hóa mã nguồn với cờ biên dịch tối đa -O3 một cách chi tiết." },
      { id: 'C', text: "Không bao giờ bị chia cho 0 do toán tử ba ngôi chỉ thực thi nhánh hợp lệ." },
      { id: 'D', text: "Bị lỗi biên dịch cú pháp do phép chia số nguyên cho biến chưa xác định một cách chi tiết." },
    ],
    correctAnswers: ['C'],
    explanation: "Toán tử ba ngôi chỉ tính toán nhánh được chọn (nếu điều kiện sai thì chỉ tính nhánh false). b != 0 là sai -> chỉ lấy 0, không chạy a / b.",
    tags: ["c-lang", "ch2", "debug", "hard"],
    reference: {
      uttPage: 'Trang 113',
      hcmutePage: 'Trang 43',
      section: '2.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-026',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Biểu thức gán phức hợp sau bị cảnh báo hành vi không xác định (Undefined Behavior) vì sao?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int i = 5;
i = ++i + i++;`,
    options: [
      { id: 'A', text: "Toán tử tiền tố và hậu tố không được phép xuất hiện trong cùng một biểu thức." },
      { id: 'B', text: "Sửa đổi giá trị biến i nhiều lần giữa hai điểm tuần tự (Sequence Points)." },
      { id: 'C', text: "Biến i không thể vừa làm toán hạng vừa làm đích của phép gán trong cùng dòng." },
      { id: 'D', text: "Trình biên dịch không xác định được kiểu dữ liệu trả về của phép cộng dồn." },
    ],
    correctAnswers: ['B'],
    explanation: "Theo chuẩn C, việc sửa đổi cùng một biến nhiều hơn 1 lần giữa hai Sequence Points là Undefined Behavior (kết quả tùy thuộc trình biên dịch).",
    tags: ["c-lang", "ch2", "debug", "hard"],
    reference: {
      uttPage: 'Trang 103',
      hcmutePage: 'Trang 41',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-027',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Lỗi logic trong việc kiểm tra số chẵn lẻ bằng toán tử bit sau là gì?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `if (x & 1 == 0) {
    printf("So chan");
}`,
    options: [
      { id: 'A', text: "Toán tử & không thể áp dụng cho việc kiểm tra số chẵn lẻ trong ngôn ngữ C một cách chi tiết." },
      { id: 'B', text: "Giá trị x & 1 luôn trả về 1 đối với tất cả các số nguyên âm trong máy tính một cách chi tiết." },
      { id: 'C', text: "Toán tử '==' có độ ưu tiên cao hơn '&' nên biểu thức bị tính thành 'x & (1 == 0)'." },
      { id: 'D', text: "Biểu thức thiếu dấu chấm phẩy ở sau điều kiện so sánh bằng của lệnh if một cách chi tiết." },
    ],
    correctAnswers: ['C'],
    explanation: "Độ ưu tiên toán tử: == có độ ưu tiên cao hơn &. x & 1 == 0 tương đương x & (1 == 0) -> x & 0 = 0 (luôn false). Phải viết: (x & 1) == 0.",
    tags: ["c-lang", "ch2", "debug", "hard"],
    reference: {
      uttPage: 'Trang 110',
      hcmutePage: 'Trang 44',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-028',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Cần điền đoạn mã ép kiểu nào vào chỗ trống (...) để biến res nhận giá trị chính xác 2.5?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `int a = 5, b = 2;
float res = ... a / b;`,
    options: [
      { id: 'A', text: "Điền '(int)' để giữ nguyên kiểu dữ liệu của biến a trong quá trình tính toán một cách chi tiết." },
      { id: 'B', text: "Điền '(double*)' để chuyển địa chỉ ô nhớ sang con trỏ số thực có độ dài lớn một cách chi tiết." },
      { id: 'C', text: "Điền '(char)' để giảm kích thước lưu trữ của biến trước khi chia số nguyên một cách chi tiết." },
      { id: 'D', text: "Điền '(float)' để ép kiểu số nguyên a sang số thực trước khi thực hiện phép chia." },
    ],
    correctAnswers: ['D'],
    explanation: "Ép kiểu tường minh (float)a / b: a trở thành 5.0f, phép chia thực hiện trên số thực cho kết quả 2.5f.",
    tags: ["c-lang", "ch2", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 98',
      hcmutePage: 'Trang 39',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-029',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Cần điền toán tử bit nào vào chỗ trống (...) để bật (set) bit thứ k của biến x lên 1?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `x = x ... (1 << k);`,
    options: [
      { id: 'A', text: "Điền toán tử '|' (hoặc '|=') để thực hiện bật bit bằng phép toán OR nhị phân." },
      { id: 'B', text: "Điền toán tử '&' (hoặc '&=') để chỉ giữ lại các bit có giá trị bằng 1 trước đó." },
      { id: 'C', text: "Điền toán tử '^' (hoặc '^=') để đảo trạng thái của bit từ 1 sang 0 liên tục." },
      { id: 'D', text: "Điền toán tử '~' (hoặc '~=') để phủ định toàn bộ các bit nằm trong mặt nạ." },
    ],
    correctAnswers: ['A'],
    explanation: "Kỹ thuật mặt nạ bit: Bật bit thứ k dùng x |= (1 << k); Tắt bit thứ k dùng x &= ~(1 << k); Đảo bit dùng x ^= (1 << k).",
    tags: ["c-lang", "ch2", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 110',
      hcmutePage: 'Trang 45',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-030',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Cần điền định dạng nào vào chỗ trống (...) trong scanf để đọc một chuỗi có khoảng trắng an toàn?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'hard',
    codeSnippet: `char hoten[50];
scanf("...", hoten);`,
    options: [
      { id: 'A', text: "Điền '%s' để tự động đọc toàn bộ dòng văn bản có chứa các dấu cách trắng một cách chi tiết." },
      { id: 'B', text: "Điền '%49[^\n]' để đọc tối đa 49 ký tự cho đến khi gặp ký tự xuống dòng '\n'." },
      { id: 'C', text: "Điền '%*s' để bỏ qua các từ đầu tiên và chỉ lưu lại phần họ tên cuối cùng một cách chi tiết." },
      { id: 'D', text: "Điền '%50c' để đọc chính xác 50 ký tự bất kể người dùng có nhấn phím Enter một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "%49[^\n] là kỹ thuật scanset trong scanf: đọc tối đa 49 ký tự cho đến khi gặp phím Enter (\n), chừa 1 byte cho ' '.",
    tags: ["c-lang", "ch2", "fill-in", "hard"],
    reference: {
      uttPage: 'Trang 119',
      hcmutePage: 'Trang 30',
      section: '2.3',
    },
    mockExamPreset: false,
  },
];
