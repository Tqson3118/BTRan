/**
 * src/subjects/c-lang/data/questions/questions-ch4.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 4: Hàm, Phạm vi biến & Đệ quy
 * Số lượng: 30 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh4: CQuestion[] = [
  {
    id: 'q-c-ch4-001',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Khai báo nguyên mẫu hàm (Function Prototype) trong C có mục đích chính là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Cấp phát sẵn vùng nhớ Stack cho các biến cục bộ ngay khi chương trình bắt đầu khởi động." },
      { id: 'B', text: "Báo trước cho trình biên dịch tên hàm, kiểu trả về và danh sách kiểu của các tham số." },
      { id: 'C', text: "Liên kết trực tiếp các tệp thư viện nhị phân vào tệp mã nguồn trước khi biên dịch xong." },
      { id: 'D', text: "Tự động tối ưu hóa tốc độ thực thi của hàm bằng cách chèn trực tiếp mã máy nội tuyến." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.214 và HCMUTE tr.138: Nguyên mẫu hàm (prototype) giúp trình biên dịch kiểm tra tính hợp lệ về kiểu trả về và kiểu tham số khi gọi hàm trước khi hàm được định nghĩa.",
    tags: ["c-lang", "ch4", "theory", "easy"],
    reference: {
      uttPage: 'Trang 214',
      hcmutePage: 'Trang 138',
      section: '4.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch4-002',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Trong ngôn ngữ C, cơ chế truyền đối số mặc định cho các biến số thông thường vào hàm là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Truyền theo tham chiếu (Pass by Reference), hàm thao tác trực tiếp trên ô nhớ gốc." },
      { id: 'B', text: "Truyền theo địa chỉ biến con trỏ một cách tự động mà không cần dùng đến toán tử &." },
      { id: 'C', text: "Truyền theo cơ chế chia sẻ bộ nhớ dùng chung giữa hàm gọi và hàm nhận tham số." },
      { id: 'D', text: "Truyền theo giá trị (Pass by Value), hàm chỉ nhận và thao tác trên bản sao của đối số." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.220 và HCMUTE tr.140: C chuẩn chỉ hỗ trợ duy nhất cơ chế truyền tham trị (pass by value). Mọi thay đổi đối số trong hàm chỉ tác động lên biến bản sao cục bộ.",
    tags: ["c-lang", "ch4", "theory", "easy"],
    reference: {
      uttPage: 'Trang 220',
      hcmutePage: 'Trang 140',
      section: '4.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-003',
    chapterId: 4,
    articleId: 'c-art-ch4-02',
    content: "Điều gì xảy ra khi một hàm có kiểu trả về là void gặp câu lệnh 'return;' bên trong thân hàm?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Hàm lập tức kết thúc thực thi và trao quyền điều khiển trở lại cho nơi đã gọi hàm đó." },
      { id: 'B', text: "Trình biên dịch báo lỗi cú pháp vì hàm kiểu void tuyệt đối không được dùng lệnh return." },
      { id: 'C', text: "Chương trình sẽ tự động trả về giá trị số 0 cho hệ điều hành rồi thoát hoàn toàn." },
      { id: 'D', text: "Hàm sẽ khởi động lại từ câu lệnh đầu tiên và chạy lại toàn bộ thân hàm một lần nữa." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.223 và HCMUTE tr.142: Lệnh 'return;' không kèm biểu thức hoàn toàn hợp lệ trong hàm void, dùng để thoát hàm sớm bất cứ khi nào cần thiết.",
    tags: ["c-lang", "ch4", "theory", "easy"],
    reference: {
      uttPage: 'Trang 223',
      hcmutePage: 'Trang 142',
      section: '4.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-004',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Biến cục bộ tĩnh (Static local variable) trong ngôn ngữ C có đặc tính lưu trữ nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Được tự động giải phóng khỏi bộ nhớ Stack ngay sau khi hàm chứa nó kết thúc thực thi." },
      { id: 'B', text: "Có thể truy cập trực tiếp từ bất kỳ hàm nào khác trong toàn bộ dự án chương trình." },
      { id: 'C', text: "Được cấp phát trên vùng dữ liệu tĩnh và bảo lưu giá trị giữa các lần gọi hàm khác nhau." },
      { id: 'D', text: "Bắt buộc phải được gán lại giá trị khởi tạo mới ở mỗi lần hàm được gọi đến trong mã." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.235 và HCMUTE tr.146: Biến static cục bộ nằm trong vùng nhớ tĩnh (Data segment), khởi tạo đúng 1 lần khi nạp chương trình và giữ nguyên giá trị xuyên suốt các lần gọi hàm.",
    tags: ["c-lang", "ch4", "theory", "medium"],
    reference: {
      uttPage: 'Trang 235',
      hcmutePage: 'Trang 146',
      section: '4.3',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch4-005',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Biến toàn cục (Global variable) trong C có phạm vi truy cập và thời gian tồn tại như thế nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Chỉ có phạm vi sử dụng bên trong hàm main và tự động bị hủy khi hàm main kết thúc." },
      { id: 'B', text: "Có phạm vi truy cập từ điểm khai báo đến hết tệp và tồn tại suốt vòng đời chương trình." },
      { id: 'C', text: "Có thể sử dụng ở tất cả mọi nơi nhưng sẽ bị hủy ngay khi hàm đầu tiên gọi nó hoàn tất." },
      { id: 'D', text: "Chỉ có phạm vi trong khối lệnh bao quanh nó và được lưu trữ trên ngăn xếp Call Stack." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.231 và HCMUTE tr.145: Biến toàn cục tồn tại trong suốt quá trình chạy chương trình và có thể được truy xuất bởi mọi hàm đứng sau vị trí khai báo của nó.",
    tags: ["c-lang", "ch4", "theory", "medium"],
    reference: {
      uttPage: 'Trang 231',
      hcmutePage: 'Trang 145',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-006',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Từ khóa extern được sử dụng trong ngôn ngữ lập trình C nhằm mục đích chủ yếu nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Yêu cầu CPU ưu tiên cấp phát vùng nhớ thanh ghi siêu tốc cho biến được khai báo." },
      { id: 'B', text: "Ngăn chặn việc sửa đổi nội dung giá trị của biến bởi bất kỳ hàm nào trong dự án." },
      { id: 'C', text: "Khai báo một biến hoặc hàm đã được định nghĩa ở một tệp mã nguồn (file .c) khác." },
      { id: 'D', text: "Cấp phát bộ nhớ động trên vùng nhớ Heap cho biến trước khi chương trình khởi chạy." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.238 và HCMUTE tr.148: Từ khóa 'extern' dùng để thông báo biến/hàm tồn tại ở module/file khác, giúp liên kết các file nguồn trong dự án đa file.",
    tags: ["c-lang", "ch4", "theory", "medium"],
    reference: {
      uttPage: 'Trang 238',
      hcmutePage: 'Trang 148',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-007',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Hai thành phần BẮT BUỘC phải có trong bất kỳ một hàm đệ quy (Recursive function) chuẩn là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Phải có một biến cục bộ kiểu static và một vòng lặp vô tận while(1) bên trong hàm." },
      { id: 'B', text: "Phải có ít nhất hai câu lệnh return và một mảng tĩnh dùng làm bộ đệm chứa kết quả." },
      { id: 'C', text: "Phải có toán tử ba ngôi '? :' và con trỏ trỏ tới địa chỉ của chính bản thân hàm đó." },
      { id: 'D', text: "Phải có điều kiện dừng (Base case) và bước gọi đệ quy thu hẹp kích thước bài toán." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.245 và HCMUTE tr.150: Mọi hàm đệ quy đúng đắn đều phải có: 1) Neo/điều kiện dừng (Base case) để thoát đệ quy; 2) Bước đệ quy (Recursive step) thu hẹp bài toán về trường hợp dừng.",
    tags: ["c-lang", "ch4", "theory", "easy"],
    reference: {
      uttPage: 'Trang 245',
      hcmutePage: 'Trang 150',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-008',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Hiện tượng tràn bộ nhớ ngăn xếp (Stack Overflow) khi thực thi đệ quy thường do nguyên nhân nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Hàm đệ quy sử dụng quá nhiều phép toán chia lấy phần dư trên các biến số thực." },
      { id: 'B', text: "Hàm đệ quy trả về một con trỏ trỏ tới vùng nhớ cục bộ được cấp phát tự động." },
      { id: 'C', text: "Bộ nhớ Heap của hệ thống bị phân mảnh sau nhiều lần gọi hàm cấp phát malloc." },
      { id: 'D', text: "Hàm đệ quy gọi lặp lại quá sâu do thiếu điều kiện dừng hoặc điều kiện dừng không đạt." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.249 và HCMUTE tr.152: Mỗi lần gọi hàm, một Stack Frame được đẩy vào Call Stack. Đệ quy vô tận hoặc quá sâu làm cạn kiệt bộ nhớ Stack, gây crash chương trình (Stack Overflow).",
    tags: ["c-lang", "ch4", "theory", "medium"],
    reference: {
      uttPage: 'Trang 249',
      hcmutePage: 'Trang 152',
      section: '4.4',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch4-009',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Khi truyền một mảng một chiều vào hàm trong C, bản chất đối số được truyền vào thực tế là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Địa chỉ của phần tử đầu tiên trong mảng (con trỏ trỏ tới phần tử có chỉ số là 0)." },
      { id: 'B', text: "Toàn bộ bản sao độc lập của tất cả các phần tử có trong mảng dữ liệu ban đầu." },
      { id: 'C', text: "Một cấu trúc struct chứa kích thước số phần tử và con trỏ quản lý vùng nhớ đệm." },
      { id: 'D', text: "Số lượng phần tử tối đa mà mảng đó có thể chứa được trong phân vùng bộ nhớ." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.225 và HCMUTE tr.141: Trong C, tên mảng khi truyền vào hàm tự động suy biến (decay) thành con trỏ trỏ tới phần tử đầu tiên (&arr[0]). Mảng không bao giờ được truyền theo tham trị.",
    tags: ["c-lang", "ch4", "theory", "easy"],
    reference: {
      uttPage: 'Trang 225',
      hcmutePage: 'Trang 141',
      section: '4.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-010',
    chapterId: 4,
    articleId: 'c-art-ch4-02',
    content: "Giá trị mặc định của biến toàn cục và biến cục bộ tĩnh (static) khi chưa được khởi tạo là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Mang giá trị rác ngẫu nhiên phụ thuộc vào dữ liệu tồn tại sẵn trên ngăn xếp Stack." },
      { id: 'B', text: "Được tự động gán giá trị bằng 0 (hoặc con trỏ NULL đối với kiểu dữ liệu con trỏ)." },
      { id: 'C', text: "Trình biên dịch bắt buộc lập trình viên phải khởi tạo, nếu không sẽ dừng biên dịch." },
      { id: 'D', text: "Được tự động gán giá trị bằng số nguyên 1 đối với tất cả các kiểu dữ liệu số học." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.233 và HCMUTE tr.147: Mọi biến có thời gian lưu trữ tĩnh (static storage duration - gồm biến toàn cục và biến static) đều được tự động xóa về 0/NULL (vùng BSS).",
    tags: ["c-lang", "ch4", "theory", "medium"],
    reference: {
      uttPage: 'Trang 233',
      hcmutePage: 'Trang 147',
      section: '4.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-011',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Khái niệm con trỏ hàm (Function Pointer) trong ngôn ngữ lập trình C được hiểu chính xác là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Một hàm đặc biệt có kiểu dữ liệu trả về bắt buộc phải là một con trỏ trỏ ô nhớ." },
      { id: 'B', text: "Một kỹ thuật cấp phát bộ nhớ động dành riêng cho các tham số hình thức của hàm." },
      { id: 'C', text: "Một biến con trỏ lưu trữ địa chỉ vùng nhớ chứa mã lệnh thực thi của một hàm cụ thể." },
      { id: 'D', text: "Một macro tiền xử lý cho phép thay thế tên hàm bằng một biểu thức hằng số nguyên." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.256 và HCMUTE tr.155: Con trỏ hàm là biến chứa địa chỉ bắt đầu của khối mã nhị phân của hàm trong phân vùng Code/Text, cho phép gọi hàm gián tiếp hoặc truyền hàm làm tham số.",
    tags: ["c-lang", "ch4", "theory", "medium"],
    reference: {
      uttPage: 'Trang 256',
      hcmutePage: 'Trang 155',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-012',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Điều gì xảy ra nếu một hàm trong C được gọi trước khi nó có nguyên mẫu hoặc định nghĩa?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Chương trình sẽ tự động định nghĩa một hàm rỗng và chạy tiếp mà không phát sinh lỗi." },
      { id: 'B', text: "Chương trình luôn luôn biên dịch thành công mà không bao giờ đưa ra bất kỳ cảnh báo nào." },
      { id: 'C', text: "Hệ điều hành sẽ từ chối nạp mã thực thi của chương trình vào bộ nhớ RAM của máy tính." },
      { id: 'D', text: "Trình biên dịch chuẩn cũ ngầm định hàm trả về kiểu int hoặc báo cảnh báo/lỗi biên dịch." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ C90: Trình biên dịch giả định hàm trả về int (implicit int). Tuy nhiên chuẩn C99/C11 đã cấm quy tắc này và yêu cầu bắt buộc phải có khai báo hàm trước khi gọi.",
    tags: ["c-lang", "ch4", "theory", "easy"],
    reference: {
      uttPage: 'Trang 215',
      hcmutePage: 'Trang 139',
      section: '4.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-013',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Kết quả in ra của chương trình truyền tham số cho hàm hoán vị sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

int main(void) {
    int x = 5, y = 10;
    swap(x, y);
    printf("%d %d", x, y);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '5 10' (do C truyền tham trị nên hàm swap chỉ thao tác trên bản sao của biến)." },
      { id: 'B', text: "In ra '10 5' (hai biến x và y trong hàm main đã được hoán đổi giá trị thành công)." },
      { id: 'C', text: "In ra '0 0' (các biến cục bộ bị giải phóng dẫn đến dữ liệu trong main bị xóa sạch)." },
      { id: 'D', text: "Chương trình bị lỗi biên dịch vì hàm swap có kiểu void không thể nhận hai tham số." },
    ],
    correctAnswers: ['A'],
    explanation: "Bẫy kinh điển về truyền tham trị: x và y được truyền giá trị vào a và b. Hàm swap chỉ đổi giá trị giữa hai biến bản sao a, b; hai biến x, y trong hàm main hoàn toàn không thay đổi.",
    tags: ["c-lang", "ch4", "output", "easy"],
    reference: {
      uttPage: 'Trang 221',
      hcmutePage: 'Trang 140',
      section: '4.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-014',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Kết quả in ra sau ba lần gọi hàm có chứa biến static sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

void dem(void) {
    static int c = 1;
    printf("%d ", c);
    c++;
}

int main(void) {
    dem(); dem(); dem();
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi '1 1 1 ' (mỗi lần gọi hàm biến c đều được khởi tạo lại bằng giá trị 1)." },
      { id: 'B', text: "In ra chuỗi '1 2 3 ' (biến static c chỉ khởi tạo một lần và bảo lưu giá trị tăng dần)." },
      { id: 'C', text: "In ra chuỗi '2 3 4 ' (biến static tự động tăng thêm một đơn vị trước khi in giá trị)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do biến cục bộ không được phép sử dụng từ khóa static." },
    ],
    correctAnswers: ['B'],
    explanation: "Biến static c = 1 chỉ khởi tạo duy nhất một lần. Lần 1: in 1, c thành 2. Lần 2: in 2, c thành 3. Lần 3: in 3, c thành 4. Chuỗi in ra là '1 2 3 '.",
    tags: ["c-lang", "ch4", "output", "medium"],
    reference: {
      uttPage: 'Trang 236',
      hcmutePage: 'Trang 146',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-015',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Giá trị in ra của hàm đệ quy tính giai thừa f(4) trong chương trình sau là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}

int main(void) {
    printf("%d", f(4));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 24 (tích các lời gọi đệ quy giai thừa tính toán là: 4 * 3 * 2 * 1 = 24)." },
      { id: 'B', text: "In ra số 10 (tổng các lời gọi đệ quy cộng dồn liên tiếp là: 4 + 3 + 2 + 1 = 10)." },
      { id: 'C', text: "In ra số 1 (do hàm đệ quy gặp điều kiện dừng sớm và trả về kết quả cơ sở là 1)." },
      { id: 'D', text: "Chương trình báo lỗi tràn ngăn xếp Stack do lời gọi đệ quy không thể thu hẹp." },
    ],
    correctAnswers: ['A'],
    explanation: "f(4) = 4 * f(3) = 4 * (3 * f(2)) = 4 * 3 * (2 * f(1)) = 4 * 3 * 2 * 1 = 24.",
    tags: ["c-lang", "ch4", "output", "medium"],
    reference: {
      uttPage: 'Trang 246',
      hcmutePage: 'Trang 151',
      section: '4.4',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch4-016',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Hàm đệ quy in ngược số nguyên sau đây sẽ hiển thị kết quả nào lên màn hình khi gọi printReverse(123)?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

void printReverse(int n) {
    if (n == 0) return;
    printf("%d", n % 10);
    printReverse(n / 10);
}

int main(void) {
    printReverse(123);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi số '123' (các giá trị được lưu trong ngăn xếp Call Stack rồi in sau cùng)." },
      { id: 'B', text: "In ra chuỗi số '0321' (chương trình in thêm giá trị điều kiện dừng của biến số n)." },
      { id: 'C', text: "In ra chuỗi số '321' (lệnh printf in chữ số hàng đơn vị n%10 trước khi gọi đệ quy n/10)." },
      { id: 'D', text: "Chương trình rơi vào vòng lặp vô hạn do biểu thức chia nguyên n/10 không giảm về 0." },
    ],
    correctAnswers: ['C'],
    explanation: "Lần 1: n=123, in 123%10 = 3, gọi printReverse(12). Lần 2: in 12%10 = 2, gọi printReverse(1). Lần 3: in 1%10 = 1, gọi printReverse(0). Lần 4: n=0 return. Kết quả in là '321'.",
    tags: ["c-lang", "ch4", "output", "hard"],
    reference: {
      uttPage: 'Trang 248',
      hcmutePage: 'Trang 153',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-017',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Xem xét thứ tự thực thi của hàm đệ quy sau, chuỗi số được in ra màn hình là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

void f(int n) {
    if (n > 0) {
        f(n - 1);
        printf("%d ", n);
    }
}

int main(void) {
    f(3);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi '3 2 1 ' (các giá trị của đối số được in ra ngay trước khi hàm đệ quy tự gọi lại)." },
      { id: 'B', text: "In ra chuỗi '0 1 2 3 ' (điều kiện dừng n>0 cho phép in thêm giá trị cơ sở ban đầu là 0)." },
      { id: 'C', text: "In ra chuỗi '3 3 3 ' (giá trị đối số n không đổi trong suốt quá trình quay lui ngăn xếp)." },
      { id: 'D', text: "In ra chuỗi '1 2 3 ' (lời gọi đệ quy thực thi trước, lệnh printf được chạy khi quay lui Stack)." },
    ],
    correctAnswers: ['D'],
    explanation: "f(3) gọi f(2); f(2) gọi f(1); f(1) gọi f(0). f(0) dừng. Khi tháo ngăn xếp (unwinding): f(1) in 1, f(2) in 2, f(3) in 3. Kết quả in ra là '1 2 3 '.",
    tags: ["c-lang", "ch4", "output", "hard"],
    reference: {
      uttPage: 'Trang 250',
      hcmutePage: 'Trang 154',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-018',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Xung đột tầm vực biến: Kết quả in ra của chương trình sử dụng biến trùng tên sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int x = 100; // Biến toàn cục

void show(void) {
    int x = 20; // Biến cục bộ
    printf("%d ", x);
}

int main(void) {
    show();
    printf("%d", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '20 100' (biến cục bộ x trong hàm show che khuất biến toàn cục x khi thực thi)." },
      { id: 'B', text: "In ra '100 100' (biến toàn cục x luôn có mức ưu tiên cao hơn mọi biến cục bộ khác)." },
      { id: 'C', text: "In ra '20 20' (việc gán giá trị x=20 trong hàm show đã làm thay đổi giá trị toàn cục)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do có hai biến được đặt cùng tên x trong cùng một tệp." },
    ],
    correctAnswers: ['A'],
    explanation: "Biến cục bộ che khuất (shadows) biến toàn cục cùng tên trong phạm vi hàm của nó. Do đó trong hàm show in ra 20, còn trong hàm main in ra giá trị của biến toàn cục là 100.",
    tags: ["c-lang", "ch4", "output", "hard"],
    reference: {
      uttPage: 'Trang 232',
      hcmutePage: 'Trang 145',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-019',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Hàm tính dãy số Fibonacci đệ quy sau đây sẽ thực hiện bao nhiêu lần gọi hàm fib khi tính fib(3)?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int count = 0;
int fib(int n) {
    count++;
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

int main(void) {
    fib(3);
    printf("%d", count);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 3 (do đối số truyền vào hàm có giá trị bằng 3 nên số lần gọi tương ứng là 3)." },
      { id: 'B', text: "In ra số 5 (cây đệ quy gồm: fib(3), fib(2), fib(1), fib(0) và nhánh con fib(1) thứ hai)." },
      { id: 'C', text: "In ra số 4 (mỗi nhánh đệ quy chỉ kích hoạt tối đa hai lần gọi hàm con trên Call Stack)." },
      { id: 'D', text: "In ra số 2 (kết quả trả về của phép tính số học Fibonacci thứ 3 trong dãy chuẩn là 2)." },
    ],
    correctAnswers: ['B'],
    explanation: "Cây gọi đệ quy: fib(3) gọi fib(2) và fib(1). fib(2) gọi fib(1) và fib(0). Tổng số lần gọi hàm: fib(3), fib(2), fib(1), fib(0), fib(1) = 5 lần gọi.",
    tags: ["c-lang", "ch4", "output", "hard"],
    reference: {
      uttPage: 'Trang 252',
      hcmutePage: 'Trang 154',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-020',
    chapterId: 4,
    articleId: 'c-art-ch4-02',
    content: "Giá trị in ra của chương trình có hàm tính lũy thừa theo cách nhân dồn sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int power(int base, int exp) {
    int res = 1;
    while (exp > 0) {
        res *= base;
        exp--;
    }
    return res;
}

int main(void) {
    printf("%d", power(2, 3));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 6 (hàm lấy cơ số nhân với số mũ tương đương biểu thức số học 2 * 3 = 6)." },
      { id: 'B', text: "In ra số 1 (do biến res được khởi tạo bằng 1 và không bị thay đổi bởi hàm lặp)." },
      { id: 'C', text: "In ra số 8 (hàm nhân dồn biến base với giá trị 2 liên tục qua 3 lần lặp: 2^3 = 8)." },
      { id: 'D', text: "Chương trình bị lỗi biên dịch do từ khóa exp trùng với hàm mũ trong math.h." },
    ],
    correctAnswers: ['C'],
    explanation: "power(2, 3): vòng lặp chạy 3 lần, exp giảm từ 3 về 0: res = 1*2=2, 2*2=4, 4*2=8. Trả về 8.",
    tags: ["c-lang", "ch4", "output", "medium"],
    reference: {
      uttPage: 'Trang 227',
      hcmutePage: 'Trang 143',
      section: '4.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-021',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Đoạn chương trình đệ quy lồng biến static sau đây sẽ in ra kết quả số học nào?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int test(int n) {
    static int val = 0;
    if (n <= 0) return val;
    val += n;
    return test(n - 1);
}

int main(void) {
    printf("%d", test(3));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 0 (do điều kiện dừng n <= 0 trả về giá trị khởi tạo gốc của biến val ban đầu)." },
      { id: 'B', text: "In ra số 3 (do chỉ có giá trị truyền vào đầu tiên của đối số n được cộng vào biến val)." },
      { id: 'C', text: "Chương trình gặp lỗi bộ nhớ do biến static không được phép sử dụng trong hàm đệ quy." },
      { id: 'D', text: "In ra số 6 (biến static val cộng dồn các giá trị n qua từng bước đệ quy: 3 + 2 + 1 = 6)." },
    ],
    correctAnswers: ['D'],
    explanation: "val khởi tạo 0 một lần. Bước 1 (n=3): val += 3 -> val = 3. Bước 2 (n=2): val += 2 -> val = 5. Bước 3 (n=1): val += 1 -> val = 6. Bước 4 (n=0): return val = 6.",
    tags: ["c-lang", "ch4", "output", "hard"],
    reference: {
      uttPage: 'Trang 254',
      hcmutePage: 'Trang 155',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-022',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Đoạn chương trình sau đây phát sinh lỗi biên dịch do nguyên nhân nào?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int kq = tinhTong(3, 4);
    printf("%d", kq);
    return 0;
}

int tinhTong(int a, int b) {
    return a + b;
}`,
    options: [
      { id: 'A', text: "Hàm tinhTong được gọi trước khi được định nghĩa và thiếu dòng khai báo nguyên mẫu hàm." },
      { id: 'B', text: "Hàm main không được phép gọi một hàm khác khi hàm đó có kiểu trả về là số nguyên int." },
      { id: 'C', text: "Hai tham số hình thức a và b trùng kiểu dữ liệu int dẫn đến tranh chấp không biên dịch được." },
      { id: 'D', text: "Thiếu thư viện con trỏ chuẩn stdlib.h để nạp định nghĩa của các phép toán cộng hai số." },
    ],
    correctAnswers: ['A'],
    explanation: "Trong C99 trở lên, việc gọi một hàm chưa hề được khai báo trước đó dẫn đến lỗi 'implicit declaration of function' hoặc 'conflicting types'. Cần đặt prototype 'int tinhTong(int, int);' trước main.",
    tags: ["c-lang", "ch4", "debug", "medium"],
    reference: {
      uttPage: 'Trang 215',
      hcmutePage: 'Trang 139',
      section: '4.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-023',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Lỗi nghiêm trọng nào sẽ xảy ra khi thực thi hàm đệ quy sau đây trong thực tế?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int countUp(int n) {
    return countUp(n + 1);
}`,
    options: [
      { id: 'A', text: "Lỗi truy cập vùng nhớ cấm (Segmentation Fault) do đối số n bị tràn số nguyên âm." },
      { id: 'B', text: "Lỗi tràn bộ nhớ ngăn xếp (Stack Overflow) do hoàn toàn không hề có điều kiện dừng." },
      { id: 'C', text: "Lỗi chia cho số không (Division by zero) do biến n tăng liên tục qua các chu kỳ lặp." },
      { id: 'D', text: "Chương trình tự động phát hiện lặp và ngắt thoát ngay sau lượt gọi đệ quy thứ mười." },
    ],
    correctAnswers: ['B'],
    explanation: "Hàm countUp không có neo dừng (Base case). Mỗi lần gọi làm tăng kích thước Stack Frame cho đến khi cạn kiệt bộ nhớ ngăn xếp và hệ điều hành buộc dừng chương trình (Stack Overflow).",
    tags: ["c-lang", "ch4", "debug", "medium"],
    reference: {
      uttPage: 'Trang 249',
      hcmutePage: 'Trang 152',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-024',
    chapterId: 4,
    articleId: 'c-art-ch4-02',
    content: "Đoạn mã sau có lỗi logic gì khiến kết quả trả về của hàm không xác định?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int timMax(int a, int b) {
    if (a > b) {
        return a;
    }
    // Thiếu trường hợp còn lại
}`,
    options: [
      { id: 'A', text: "Hàm bắt buộc phải có câu lệnh else đi kèm ngay cả khi nhánh if đã có câu lệnh return rồi." },
      { id: 'B', text: "Kiểu dữ liệu của các tham số a và b phải được khai báo bằng từ khóa unsigned int hợp lệ." },
      { id: 'C', text: "Nếu a <= b hàm kết thúc mà không gặp lệnh return khiến giá trị trả về là rác không xác định." },
      { id: 'D', text: "Trình biên dịch cấm việc đặt câu lệnh return bên trong thân của cấu trúc rẽ nhánh if." },
    ],
    correctAnswers: ['C'],
    explanation: "Nếu a <= b, nhánh if không chạy, hàm đi tới dấu đóng } mà không có lệnh return giá trị nào. Hàm trả về một giá trị rác ngẫu nhiên trên thanh ghi, gây lỗi undefined behavior.",
    tags: ["c-lang", "ch4", "debug", "medium"],
    reference: {
      uttPage: 'Trang 224',
      hcmutePage: 'Trang 142',
      section: '4.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-025',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Vì sao hàm hoán vị sau đây không thể thay đổi giá trị của hai biến x và y ngoài hàm main?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}`,
    options: [
      { id: 'A', text: "Do biến tạm temp có phạm vi toàn cục nên việc gán hoán đổi bị xung đột tầm vực nhớ." },
      { id: 'B', text: "Do tham số a và b là các bản sao cục bộ trên Stack, thay đổi chúng không ảnh hưởng biến gốc." },
      { id: 'C', text: "Do hàm swap không trả về giá trị bằng lệnh return nên giá trị của hai biến bị hoàn tác." },
      { id: 'D', text: "Do hai biến a và b bị đóng băng giá trị bởi trình biên dịch ngay khi vào trong hàm." },
    ],
    correctAnswers: ['B'],
    explanation: "Trong C, biến số thông thường được truyền theo tham trị (pass by value). Để thay đổi hai biến ngoài main, hàm phải nhận con trỏ (int *a, int *b) và gọi dạng swap(&x, &y).",
    tags: ["c-lang", "ch4", "debug", "medium"],
    reference: {
      uttPage: 'Trang 221',
      hcmutePage: 'Trang 140',
      section: '4.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch4-026',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Lỗi quản lý bộ nhớ nguy hiểm nào xuất hiện trong đoạn mã trả về con trỏ sau đây?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int* taoBien(void) {
    int x = 100;
    return &x;
}`,
    options: [
      { id: 'A', text: "Biến con trỏ trả về không có kiểu dữ liệu khớp với kiểu dữ liệu của biến số nguyên x." },
      { id: 'B', text: "Toán tử lấy địa chỉ & không được phép áp dụng cho các biến được khai báo bên trong hàm." },
      { id: 'C', text: "Hàm kiểu int* bắt buộc phải có ít nhất một tham số đầu vào là con trỏ trỏ tới vùng nhớ." },
      { id: 'D', text: "Trả về địa chỉ của biến cục bộ tự động x (biến này sẽ bị hủy ngay khi hàm taoBien kết thúc)." },
    ],
    correctAnswers: ['D'],
    explanation: "Bẫy con trỏ lơ lửng (Dangling pointer): Biến cục bộ x nằm trên Stack Frame của taoBien. Khi hàm thoát, vùng nhớ này bị thu hồi. Trả về &x dẫn đến con trỏ trỏ vào vùng nhớ không hợp lệ.",
    tags: ["c-lang", "ch4", "debug", "hard"],
    reference: {
      uttPage: 'Trang 237',
      hcmutePage: 'Trang 147',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-027',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Hàm đệ quy tính tổng S = 1 + 2 + ... + n sau đây bị lỗi logic ở trường hợp nào?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}`,
    options: [
      { id: 'A', text: "Nếu truyền số âm n < 0 thì n-1 sẽ giảm mãi về âm vô cùng và không bao giờ chạm neo n == 0." },
      { id: 'B', text: "Điều kiện dừng n == 0 không thể xử lý được trường hợp cơ sở khi biến n nhận giá trị bằng 1." },
      { id: 'C', text: "Phép cộng n + sum(n - 1) bị lỗi tràn số ngay từ lời gọi đệ quy đầu tiên với giá trị n = 2." },
      { id: 'D', text: "Hàm sum bắt buộc phải khai báo thêm một con trỏ trung gian để lưu trữ tổng tích lũy." },
    ],
    correctAnswers: ['A'],
    explanation: "Nếu n < 0 (ví dụ n = -1), sum(-1) gọi sum(-2)... không bao giờ đạt n == 0, dẫn đến lặp đệ quy vô tận và Stack Overflow. Cần sửa neo thành 'if (n <= 0) return 0;'.",
    tags: ["c-lang", "ch4", "debug", "hard"],
    reference: {
      uttPage: 'Trang 251',
      hcmutePage: 'Trang 153',
      section: '4.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-028',
    chapterId: 4,
    articleId: 'c-art-ch4-01',
    content: "Cần điền khai báo tham số nào vào chỗ trống (...) của hàm hoán vị để có thể đổi giá trị hai biến số thực?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `void swap(float ... , float ... ) {
    float temp = *a;
    *a = *b;
    *b = temp;
}`,
    options: [
      { id: 'A', text: "Điền '&a' và '&b' để khai báo kiểu tham chiếu trực tiếp theo đúng cú pháp chuẩn ngôn ngữ C." },
      { id: 'B', text: "Điền '*a' và '*b' để hàm nhận hai địa chỉ con trỏ và thao tác trực tiếp trên vùng nhớ gốc." },
      { id: 'C', text: "Điền 'a[]' và 'b[]' để truyền hai mảng dữ liệu một chiều chứa các số thực tương ứng vào hàm." },
      { id: 'D', text: "Điền 'const a' và 'const b' để bảo vệ giá trị của hai biến số thực không bị thay đổi ngẫu nhiên." },
    ],
    correctAnswers: ['B'],
    explanation: "Trong C, để mô phỏng truyền tham chiếu cần truyền con trỏ: void swap(float *a, float *b).",
    tags: ["c-lang", "ch4", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 222',
      hcmutePage: 'Trang 141',
      section: '4.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-029',
    chapterId: 4,
    articleId: 'c-art-ch4-03',
    content: "Cần điền từ khóa nào vào chỗ trống (...) để biến đếm counter giữ nguyên giá trị qua mỗi lần gọi hàm?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `void tick(void) {
    ... int counter = 0;
    counter++;
    printf("%d ", counter);
}`,
    options: [
      { id: 'A', text: "Điền từ khóa 'extern' để biến counter tự động đồng bộ hóa với biến toàn cục trong toàn dự án." },
      { id: 'B', text: "Điền từ khóa 'register' để đưa biến counter lưu trực tiếp vào thanh ghi của vi xử lý CPU." },
      { id: 'C', text: "Điền từ khóa 'static' để cấp phát biến trong vùng nhớ tĩnh và bảo lưu giá trị giữa các lần gọi." },
      { id: 'D', text: "Điền từ khóa 'const' để cố định giá trị của biến counter và ngăn chặn các phép gán đè sau đó." },
    ],
    correctAnswers: ['C'],
    explanation: "Từ khóa 'static' biến cục bộ giúp biến được lưu ở vùng Data, khởi tạo 1 lần và bảo lưu giá trị suốt vòng đời ứng dụng.",
    tags: ["c-lang", "ch4", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 235',
      hcmutePage: 'Trang 146',
      section: '4.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch4-030',
    chapterId: 4,
    articleId: 'c-art-ch4-04',
    content: "Cần điền biểu thức nào vào vị trí (...) trong hàm đệ quy sau để hoàn thiện điều kiện dừng khi tính lũy thừa a^n?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `long luyThua(int a, int n) {
    if (...) return 1;
    return a * luyThua(a, n - 1);
}`,
    options: [
      { id: 'A', text: "Điền 'n == 1' vì lũy thừa bậc 1 của bất kỳ số nguyên nào luôn có kết quả tính ra bằng số 1." },
      { id: 'B', text: "Điền 'a == 0' vì khi cơ số giảm về 0 thì hàm đệ quy không thể tiếp tục thực hiện phép nhân." },
      { id: 'C', text: "Điền 'a == 1' vì cơ số bằng 1 thì không cần phải thu hẹp thêm kích thước của bài toán nữa." },
      { id: 'D', text: "Điền 'n == 0' vì theo định nghĩa toán học thì mọi số a khác 0 nâng lên lũy thừa 0 đều bằng 1." },
    ],
    correctAnswers: ['D'],
    explanation: "a^0 = 1 là trường hợp cơ sở (base case) của phép tính lũy thừa. Khi n == 0, return 1.",
    tags: ["c-lang", "ch4", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 247',
      hcmutePage: 'Trang 151',
      section: '4.4',
    },
    mockExamPreset: false,
  },
];
