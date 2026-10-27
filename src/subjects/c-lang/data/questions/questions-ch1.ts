/**
 * src/subjects/c-lang/data/questions/questions-ch1.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 1: Tổng quan ngôn ngữ C & Môi trường phát triển
 * Số lượng: 25 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh1: CQuestion[] = [
  {
    id: 'q-c-ch1-001',
    chapterId: 1,
    articleId: 'c-art-ch1-01',
    content: "Ngôn ngữ lập trình C được Dennis Ritchie phát triển lần đầu tiên tại đâu và vào năm nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Tại viện công nghệ MIT trong khuôn khổ dự án GNU vào năm 1983." },
      { id: 'B', text: "Tại trung tâm nghiên cứu Xerox PARC ở California vào năm 1969." },
      { id: 'C', text: "Tại phòng thí nghiệm của tập đoàn máy tính IBM vào năm 1975." },
      { id: 'D', text: "Tại phòng thí nghiệm Bell Labs của tập đoàn AT&T vào năm 1972." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.21 và HCMUTE tr.9: Ngôn ngữ C được Dennis Ritchie phát triển tại Bell Labs vào năm 1972 để viết lại hệ điều hành UNIX.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 21 - 25',
      hcmutePage: 'Trang 9 - 13',
      section: '1.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch1-002',
    chapterId: 1,
    articleId: 'c-art-ch1-01',
    content: "Vì sao ngôn ngữ lập trình C thường được xếp vào nhóm ngôn ngữ bậc trung (Middle-level language)?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Vì C kết hợp cấu trúc cấp cao với khả năng thao tác trực tiếp vùng nhớ." },
      { id: 'B', text: "Vì cú pháp của C có độ phức tạp nằm ở mức trung bình so với các ngôn ngữ." },
      { id: 'C', text: "Vì C yêu cầu môi trường thông dịch trung gian trước khi nạp chạy vào CPU." },
      { id: 'D', text: "Vì C chỉ hỗ trợ tập kiểu dữ liệu số nguyên và số thực ở mức cơ bản một cách chi tiết." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.23 và HCMUTE tr.11: C được gọi là ngôn ngữ bậc trung vì nó vừa cung cấp các cấu trúc điều khiển cấp cao, vừa cho phép thao tác trực tiếp với bộ nhớ và bit thông qua con trỏ.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 21 - 25',
      hcmutePage: 'Trang 9 - 13',
      section: '1.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch1-003',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Theo chuẩn C99/C11, hàm main() trong chương trình C độc lập có kiểu trả về chuẩn là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Kiểu void (quy ước hàm chính không cần hoàn trả dữ liệu cho hệ thống)." },
      { id: 'B', text: "Kiểu int (trả về mã số nguyên báo hiệu trạng thái cho hệ điều hành)." },
      { id: 'C', text: "Kiểu bool (trả về trạng thái đúng hoặc sai cho trình quản lý luồng)." },
      { id: 'D', text: "Kiểu char* (trả về chuỗi thông báo kết thúc thực thi của chương trình)." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.26 và HCMUTE tr.20: Chuẩn C99/C11 quy định hàm main có kiểu trả về bắt buộc là int (int main(void)), trong đó return 0 báo hiệu chương trình kết thúc thành công.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 25 - 32',
      hcmutePage: 'Trang 20 - 26',
      section: '1.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch1-004',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Chuẩn ANSI C89 quy định danh sách từ khóa dành riêng (Keywords) gồm bao nhiêu từ?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Gồm 32 từ khóa cơ bản được định nghĩa chính thức trong ngôn ngữ." },
      { id: 'B', text: "Gồm 48 từ khóa mở rộng cho các hệ thống máy tính cá nhân 32-bit." },
      { id: 'C', text: "Gồm 64 từ khóa hỗ trợ thêm các tính năng hướng đối tượng nâng cao." },
      { id: 'D', text: "Gồm 24 từ khóa nguyên thủy kế thừa từ ngôn ngữ tiền thân B/BCPL." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.32 và HCMUTE tr.23: Chuẩn ANSI C89 định nghĩa chính xác 32 từ khóa dành riêng.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 32 - 37',
      hcmutePage: 'Trang 23 - 26',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-005',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Quy tắc đặt tên định danh (tên biến, tên hàm, hằng số) nào sau đây là hoàn toàn hợp lệ trong C?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tên có thể bắt đầu bằng chữ số nếu độ dài tổng thể không vượt quá 8 ký tự." },
      { id: 'B', text: "Tên có thể chứa dấu gạch ngang giữa các từ để phân tách cấu trúc biến." },
      { id: 'C', text: "Tên bắt đầu bằng chữ cái hoặc dấu gạch dưới, không chứa ký tự đặc biệt." },
      { id: 'D', text: "Tên có thể trùng hoàn toàn với từ khóa nếu được viết in hoa một chữ cái." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.33 và HCMUTE tr.24: Tên định danh chỉ được chứa chữ cái, chữ số và gạch dưới; bắt buộc bắt đầu bằng chữ cái hoặc dấu gạch dưới '_'.",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 32 - 37',
      hcmutePage: 'Trang 23 - 26',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-006',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Sự khác biệt căn bản giữa chỉ thị #include <file.h> và #include \"file.h\" là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "#include <...> tìm ở thư viện hệ thống, \"...\" ưu tiên tìm ở thư mục dự án." },
      { id: 'B', text: "#include <...> chỉ dùng cho file tiêu đề C, còn \"...\" chỉ dùng cho C++." },
      { id: 'C', text: "#include <...> tự động nạp mã máy, còn \"...\" yêu cầu biên dịch lại file." },
      { id: 'D', text: "#include <...> không cho phép định nghĩa macro, còn \"...\" cho phép macro." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.68 và HCMUTE tr.195: Cặp ngoặc <> tìm kiếm trong thư mục thư viện chuẩn hệ thống; cặp ngoặc kép \"\" ưu tiên tìm trong thư mục hiện hành trước.",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 68 - 75',
      hcmutePage: 'Trang 195 - 205',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-007',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cơ chế Header Guards (#ifndef ... #define ... #endif) có mục đích kỹ thuật chính là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Mã hóa các định nghĩa hàm để bảo vệ bản quyền mã nguồn của thư viện một cách chi tiết." },
      { id: 'B', text: "Ngăn chặn lỗi định nghĩa lặp lại khi một tệp header được include nhiều lần." },
      { id: 'C', text: "Tăng tốc độ đọc đĩa bằng cách nén dung lượng các tệp tiêu đề hệ thống một cách chi tiết." },
      { id: 'D', text: "Ép buộc trình biên dịch cấp phát trước vùng nhớ Stack cho các hàm ngoài một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.71 và HCMUTE tr.204: Header Guards ngăn chặn việc nội dung của một file header bị include trùng lặp trong cùng một đơn vị biên dịch.",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 68 - 75',
      hcmutePage: 'Trang 195 - 205',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-008',
    chapterId: 1,
    articleId: 'c-art-ch1-05',
    content: "Thứ tự chính xác của 4 bước trong chu trình biên dịch mã nguồn C tiêu chuẩn là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Biên dịch (Compilation) -> Tiền xử lý (Preprocessing) -> Liên kết -> Nạp chạy." },
      { id: 'B', text: "Liên kết (Linking) -> Tiền xử lý (Preprocessing) -> Hợp dịch -> Thực thi." },
      { id: 'C', text: "Tiền xử lý (Preprocessing) -> Biên dịch (Compilation) -> Hợp dịch -> Liên kết." },
      { id: 'D', text: "Hợp dịch (Assembly) -> Tiền xử lý -> Biên dịch (Compilation) -> Liên kết." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.35 và HCMUTE tr.27: Chu trình gồm 4 giai đoạn: Tiền xử lý (.i) -> Biên dịch sang Assembly (.s) -> Hợp dịch sang mã máy (.o) -> Liên kết Linker (.exe).",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 35 - 37',
      hcmutePage: 'Trang 27 - 30',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-009',
    chapterId: 1,
    articleId: 'c-art-ch1-05',
    content: "Tệp có phần mở rộng .o (hoặc .obj trên Windows) sinh ra sau giai đoạn nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Sinh ra sau bước Hợp dịch (Assembly) và chứa mã máy nhị phân của module." },
      { id: 'B', text: "Sinh ra sau bước Tiền xử lý (Preprocessing) sau khi đã bung các macro." },
      { id: 'C', text: "Sinh ra sau bước Liên kết (Linking) và có thể kích hoạt chạy trực tiếp." },
      { id: 'D', text: "Sinh ra trong quá trình gỡ lỗi để lưu thông tin bảng ký hiệu biến số." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.36 và HCMUTE tr.28: Bước Hợp dịch (Assembler) chuyển đổi file hợp ngữ .s thành tệp mã máy đối tượng .o (.obj).",
    tags: ["c-lang", "ch1", "theory", "hard"],
    reference: {
      uttPage: 'Trang 35 - 37',
      hcmutePage: 'Trang 27 - 30',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-010',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Bản chất hoạt động của bộ tiền xử lý (Preprocessor) trong ngôn ngữ C là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Kiểm tra tính đúng đắn về kiểu dữ liệu của các biểu thức toán học phức tạp một cách chi tiết." },
      { id: 'B', text: "Thực hiện thay thế văn bản thuần túy trước khi trình biên dịch phân tích cú pháp." },
      { id: 'C', text: "Cấp phát trước các ô nhớ tĩnh trên RAM cho các biến toàn cục và hằng số một cách chi tiết." },
      { id: 'D', text: "Tối ưu hóa mã máy để loại bỏ các vòng lặp rỗng không mang lại giá trị một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.68 và HCMUTE tr.195: Bộ tiền xử lý chỉ hoạt động trên mức văn bản thuần túy (Text substitution), không hiểu ngữ nghĩa hay kiểm tra kiểu dữ liệu.",
    tags: ["c-lang", "ch1", "theory", "hard"],
    reference: {
      uttPage: 'Trang 68 - 75',
      hcmutePage: 'Trang 195 - 205',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-011',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cho đoạn mã định nghĩa macro sau đây, giá trị được in ra màn hình là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>
#define VAL 10 + 5

int main(void) {
    int res = VAL * 2;
    printf("%d", res);
    return 0;
}`,
    options: [
      { id: 'A', text: "Giá trị in ra là 30 (do macro được tính toán trước thành 15 rồi nhân 2)." },
      { id: 'B', text: "Giá trị in ra là 15 (do phép nhân chỉ áp dụng cho toán tử đầu tiên)." },
      { id: 'C', text: "Giá trị in ra là 20 (do quy tắc thay thế văn bản thành 10 + 5 * 2)." },
      { id: 'D', text: "Chương trình báo lỗi biên dịch cú pháp do thiếu dấu ngoặc tròn bao quanh." },
    ],
    correctAnswers: ['C'],
    explanation: "Bẫy tiền xử lý kinh điển: VAL * 2 được thay thế văn bản thành 10 + 5 * 2 = 10 + 10 = 20!",
    tags: ["c-lang", "ch1", "output", "easy"],
    reference: {
      uttPage: 'Trang 69',
      hcmutePage: 'Trang 198',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-012',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Đoạn chương trình sau in ra kết quả gì trên màn hình console?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    printf("Hello\\rHi\\n");
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi 'Hello Hi' nằm trên cùng một dòng có khoảng cách trắng một cách chi tiết." },
      { id: 'B', text: "In ra chuỗi 'Hi' hoàn toàn và xóa sạch các ký tự trước đó trên màn hình." },
      { id: 'C', text: "Chương trình báo lỗi ký tự điều khiển không hợp lệ trong chuỗi định dạng." },
      { id: 'D', text: "In ra chuỗi 'Hillo' trên màn hình (ký tự '\r' đưa con trỏ về đầu dòng)." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.117: Ký tự '\r' (Carriage Return) đưa con trỏ về đầu dòng hiện tại và ghi đè hai ký tự đầu 'He' thành 'Hi', tạo thành 'Hillo'.",
    tags: ["c-lang", "ch1", "output", "easy"],
    reference: {
      uttPage: 'Trang 117',
      hcmutePage: 'Trang 26',
      section: '1.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-013',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Kết quả in ra màn hình của đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define SQUARE(x) x * x

int main(void) {
    int a = SQUARE(2 + 3);
    printf("%d", a);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 11 (do macro thay thế thành 2 + 3 * 2 + 3 = 11)." },
      { id: 'B', text: "In ra số 25 (do tính toán (2 + 3) bình phương bằng 25)." },
      { id: 'C', text: "In ra số 13 (do tính 2 + 3 * 3 rồi cộng thêm phần dư)." },
      { id: 'D', text: "Báo lỗi biên dịch vì macro không hỗ trợ biểu thức số học." },
    ],
    correctAnswers: ['A'],
    explanation: "SQUARE(2 + 3) thay thế thành 2 + 3 * 2 + 3. Phép nhân ưu tiên trước: 3 * 2 = 6; 2 + 6 + 3 = 11.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 70',
      hcmutePage: 'Trang 200',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-014',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cho đoạn mã sử dụng chỉ thị #ifdef dưới đây, kết quả hiển thị là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define DEBUG_MODE

int main(void) {
#ifdef DEBUG_MODE
    printf("ON ");
#else
    printf("OFF ");
#endif
    printf("END");
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi 'OFF END' (do macro không được gán giá trị cụ thể số 1)." },
      { id: 'B', text: "In ra chuỗi 'ON END' (nhánh #ifdef được kích hoạt khi macro tồn tại)." },
      { id: 'C', text: "In ra toàn bộ chuỗi 'ON OFF END' do không có lệnh ngắt rẽ nhánh." },
      { id: 'D', text: "Báo lỗi cú pháp vì chỉ thị #define thiếu giá trị gán phía sau tên." },
    ],
    correctAnswers: ['B'],
    explanation: "#ifdef kiểm tra sự tồn tại của tên macro; DEBUG_MODE đã được định nghĩa nên khối #ifdef được biên dịch, in 'ON END'.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 72',
      hcmutePage: 'Trang 202',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-015',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Toán tử nối chuỗi tiền xử lý ## trong macro sau sẽ cho kết quả gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define CONCAT(a, b) a ## b

int main(void) {
    int xy = 100;
    printf("%d", CONCAT(x, y));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi ký tự 'xy' trực tiếp lên màn hình mà không cần định dạng." },
      { id: 'B', text: "In ra giá trị tổng x + y của hai biến nếu được khai báo trước đó." },
      { id: 'C', text: "In ra số 100 (toán tử ## ghép ký tự x và y thành định danh biến xy)." },
      { id: 'D', text: "Báo lỗi cú pháp vì toán tử ## không được hỗ trợ trong chuẩn C89." },
    ],
    correctAnswers: ['C'],
    explanation: "Toán tử ## là toán tử ghép token (Token concatenation) của bộ tiền xử lý, ghép token x và y thành định danh xy, truy xuất giá trị 100.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 74',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-016',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Toán tử chuỗi hóa # trong macro sau cho kết quả hiển thị là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>
#define PRINT_STR(x) printf("%s", #x)

int main(void) {
    PRINT_STR(HCMUTE 2023);
    return 0;
}`,
    options: [
      { id: 'A', text: "Báo lỗi biên dịch vì đối số chứa khoảng trắng không đặt trong ngoặc kép." },
      { id: 'B', text: "In ra giá trị của biến HCMUTE nếu đã được định nghĩa trong chương trình." },
      { id: 'C', text: "Chỉ in ra từ đầu tiên 'HCMUTE' và bỏ qua phần văn bản phía sau dấu cách." },
      { id: 'D', text: "In ra chuỗi 'HCMUTE 2023' (toán tử # chuyển tham số thành chuỗi ký tự)." },
    ],
    correctAnswers: ['D'],
    explanation: "Toán tử # là toán tử chuỗi hóa (Stringizing operator), biến token truyền vào thành một chuỗi hằng trong ngoặc kép \"HCMUTE 2023\".",
    tags: ["c-lang", "ch1", "output", "hard"],
    reference: {
      uttPage: 'Trang 74',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-017',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cho đoạn mã sử dụng chỉ thị #undef dưới đây, kết quả in ra là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>
#define NUM 50

int main(void) {
    int a = NUM;
#undef NUM
#define NUM 100
    int b = NUM;
    printf("%d %d", a, b);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '50 100' (chỉ thị #undef hủy macro cũ để định nghĩa lại macro mới)." },
      { id: 'B', text: "In ra '100 100' (macro NUM mới ghi đè lên toàn bộ phạm vi file nguồn)." },
      { id: 'C', text: "In ra '50 50' (chỉ thị #undef bị bỏ qua do khai báo bên trong hàm main)." },
      { id: 'D', text: "Báo lỗi biên dịch vì macro không được phép định nghĩa lại trong cùng file." },
    ],
    correctAnswers: ['A'],
    explanation: "#undef hủy định nghĩa của NUM; tại dòng gán biến a, NUM là 50; sau khi định nghĩa lại, NUM tại dòng gán b là 100.",
    tags: ["c-lang", "ch1", "output", "hard"],
    reference: {
      uttPage: 'Trang 73',
      hcmutePage: 'Trang 203',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-018',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Đoạn mã sau bị lỗi biên dịch tại dòng nào và do nguyên nhân kỹ thuật gì?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `1: #include <stdio.h>
2: #define PI 3.14159;
3: 
4: int main(void) {
5:     double s = PI * 2;
6:     printf("%f", s);
7:     return 0;
8: }`,
    options: [
      { id: 'A', text: "Lỗi tại dòng 2 do chỉ thị tiền xử lý #define không hỗ trợ số thực thập phân một cách chi tiết." },
      { id: 'B', text: "Lỗi tại dòng 5 do dấu ';' ở cuối dòng 2 được thay thế vào thành '3.14159; * 2'." },
      { id: 'C', text: "Lỗi tại dòng 5 do biến s khai báo kiểu double nhưng công thức dùng kiểu float một cách chi tiết." },
      { id: 'D', text: "Lỗi tại dòng 6 do mã định dạng %f không tương thích với biến kiểu double một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "Bẫy tiền xử lý kinh điển: dấu ';' sau #define PI 3.14159; biến dòng 5 thành double s = 3.14159; * 2; gây lỗi cú pháp.",
    tags: ["c-lang", "ch1", "debug", "easy"],
    reference: {
      uttPage: 'Trang 69',
      hcmutePage: 'Trang 198',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-019',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Khai báo biến nào dưới đây sẽ gây ra lỗi biên dịch ngay lập tức (Syntax Error)?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int _temp = 10;     // (1)
int default = 20;   // (2)
int score_1 = 30;   // (3)
int \$val = 40;      // (4)`,
    options: [
      { id: 'A', text: "Khai báo (1) do tên biến không được phép bắt đầu bằng dấu gạch dưới." },
      { id: 'B', text: "Khai báo (3) do tên biến chứa chữ số ở vị trí ký tự kết thúc danh sách." },
      { id: 'C', text: "Khai báo (2) do sử dụng từ khóa 'default' làm tên định danh biến." },
      { id: 'D', text: "Khai báo (4) do dấu $ là ký tự bắt buộc trong các định nghĩa biến toàn cục." },
    ],
    correctAnswers: ['C'],
    explanation: "'default' là từ khóa dành riêng trong switch-case, không được dùng làm tên định danh biến.",
    tags: ["c-lang", "ch1", "debug", "medium"],
    reference: {
      uttPage: 'Trang 32',
      hcmutePage: 'Trang 23',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-020',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Đoạn chương trình sau đây phát sinh lỗi ở bước nào trong chu trình phát triển?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

void greet();

int main(void) {
    greet();
    return 0;
}`,
    options: [
      { id: 'A', text: "Lỗi ở bước Tiền xử lý (Preprocessor) vì tệp stdio.h không chứa định nghĩa greet một cách chi tiết." },
      { id: 'B', text: "Lỗi ở bước Biên dịch (Compiler Error) do gọi hàm trước khi có giá trị trả về một cách chi tiết." },
      { id: 'C', text: "Chương trình vẫn chạy bình thường và tự động gán thân hàm mặc định rỗng một cách chi tiết." },
      { id: 'D', text: "Lỗi ở bước Liên kết (Linker Error) vì hàm greet() chỉ có prototype mà không có thân." },
    ],
    correctAnswers: ['D'],
    explanation: "Trình biên dịch chấp nhận prototype, nhưng khi sang bước Linker, trình liên kết không tìm thấy mã máy thân hàm greet() -> Lỗi 'undefined reference to greet'.",
    tags: ["c-lang", "ch1", "debug", "medium"],
    reference: {
      uttPage: 'Trang 36',
      hcmutePage: 'Trang 29',
      section: '1.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-021',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Tên biến nào sau đây không hợp lệ theo chuẩn ANSI C nhưng có thể gây nhầm lẫn?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Tên biến '2nd_player' vì bắt đầu bằng chữ số theo quy tắc định danh." },
      { id: 'B', text: "Tên biến '__count' vì chứa hai dấu gạch dưới liên tiếp ở đầu chuỗi." },
      { id: 'C', text: "Tên biến 'TotalScore' vì sử dụng chữ hoa ở đầu từ theo quy tắc lạc đà." },
      { id: 'D', text: "Tên biến 'max_speed_kmh' vì có độ dài vượt quá 10 ký tự cho phép." },
    ],
    correctAnswers: ['A'],
    explanation: "Quy tắc định danh C: Tên định danh tuyệt đối không được bắt đầu bằng chữ số (2nd_player vi phạm).",
    tags: ["c-lang", "ch1", "debug", "hard"],
    reference: {
      uttPage: 'Trang 33',
      hcmutePage: 'Trang 24',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-022',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Đoạn mã sau bị lỗi gì khi cố gắng bảo vệ tệp tiêu đề (Header Guards)?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `#ifndef CONFIG_H
#define CONFIG_H

int g_setting = 100;

#endif`,
    options: [
      { id: 'A', text: "Chỉ thị #endif thiếu phần chú thích tên tệp tiêu đề ở vị trí kết thúc khối một cách chi tiết." },
      { id: 'B', text: "Định nghĩa biến int g_setting trong header gây lỗi trùng lặp khi include ở nhiều file .c." },
      { id: 'C', text: "Giá trị khởi tạo 100 không được phép gán trong vùng khai báo của tệp tiêu đề một cách chi tiết." },
      { id: 'D', text: "Cặp chỉ thị #ifndef và #define bắt buộc phải viết liền nhau trên cùng dòng một cách chi tiết." },
    ],
    correctAnswers: ['B'],
    explanation: "Định nghĩa biến (khởi tạo bộ nhớ) trong header sẽ khiến mỗi file .c include nó đều tạo 1 bản sao biến -> Lỗi Linker 'multiple definition of g_setting'. Phải dùng 'extern int g_setting;' trong header.",
    tags: ["c-lang", "ch1", "debug", "hard"],
    reference: {
      uttPage: 'Trang 71',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-023',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Điền cặp chỉ thị tiền xử lý còn thiếu vào chỗ trống (...) để bảo vệ tệp header an toàn:",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `... MATH_UTIL_H
#define MATH_UTIL_H

double canBacHai(double x);

#endif`,
    options: [
      { id: 'A', text: "Điền chỉ thị '#ifdef' để kích hoạt khối mã khi macro đã được định nghĩa trước." },
      { id: 'B', text: "Điền chỉ thị '#include' để nạp toàn bộ cấu trúc thư viện vào vùng làm việc một cách chi tiết." },
      { id: 'C', text: "Điền chỉ thị '#ifndef' để kiểm tra xem macro MATH_UTIL_H đã tồn tại hay chưa." },
      { id: 'D', text: "Điền chỉ thị '#undef' để xóa bỏ các định nghĩa trùng tên có sẵn từ trước một cách chi tiết." },
    ],
    correctAnswers: ['C'],
    explanation: "Cú pháp chuẩn của Header Guards: #ifndef HEADER_NAME_H / #define HEADER_NAME_H ... #endif.",
    tags: ["c-lang", "ch1", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 71',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-024',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Cần điền từ khóa nào vào chỗ trống (...) để khai báo hàm main không nhận bất kỳ đối số nào?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(...) {
    printf("Khong co tham so\\n");
    return 0;
}`,
    options: [
      { id: 'A', text: "Điền từ khóa 'null' để biểu thị đối số con trỏ không chứa địa chỉ." },
      { id: 'B', text: "Điền giá trị '0' để quy định số lượng tham số dòng lệnh bằng không." },
      { id: 'C', text: "Để trống hoàn toàn để trình biên dịch tự động bỏ qua kiểm tra đối số." },
      { id: 'D', text: "Điền từ khóa 'void' để thông báo danh sách tham số hoàn toàn rỗng." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C, int main(void) thể hiện tường minh rằng hàm main không nhận bất kỳ tham số nào (khác với int main() trong C cũ có thể nhận số lượng tham số bất kỳ).",
    tags: ["c-lang", "ch1", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 26',
      hcmutePage: 'Trang 20',
      section: '1.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-025',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Điền biểu thức định nghĩa macro an toàn vào chỗ trống (...) để tính giá trị tuyệt đối:",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'hard',
    codeSnippet: `#define ABS(x) ...`,
    options: [
      { id: 'A', text: "Điền biểu thức '(((x) < 0) ? -(x) : (x))' có đủ ngoặc bảo vệ." },
      { id: 'B', text: "Điền biểu thức '(x < 0 ? -x : x)' không cần các cặp ngoặc đơn phụ." },
      { id: 'C', text: "Điền biểu thức 'if ((x) < 0) return -(x); else return (x);' có cấu trúc." },
      { id: 'D', text: "Điền biểu thức '((x) * -1)' áp dụng đồng đều cho mọi số nguyên âm dương." },
    ],
    correctAnswers: ['A'],
    explanation: "Macro hàm bắt buộc phải đóng mở ngoặc đơn quanh từng đối số (x) và quanh toàn bộ biểu thức ba ngôi để tránh lỗi ưu tiên toán tử.",
    tags: ["c-lang", "ch1", "fill-in", "hard"],
    reference: {
      uttPage: 'Trang 70',
      hcmutePage: 'Trang 200',
      section: '1.2',
    },
    mockExamPreset: false,
  },
];
