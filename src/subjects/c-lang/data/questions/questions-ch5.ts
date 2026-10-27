/**
 * src/subjects/c-lang/data/questions/questions-ch5.ts
 * Ngân hàng câu hỏi trắc nghiệm Chuyên sâu Chương 5: Mảng, Chuỗi ký tự & Thư viện chuỗi
 * Số lượng: 35 câu hỏi chuẩn hóa
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 * Tuân thủ 100% Tiêu chuẩn Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh5: CQuestion[] = [
  {
    id: 'q-c-ch5-001',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Trong ngôn ngữ C, các phần tử của một mảng một chiều được bố trí trong bộ nhớ máy tính như thế nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Được lưu trữ rải rác tại các ô nhớ ngẫu nhiên trong bộ nhớ RAM và được liên kết bằng các con trỏ." },
      { id: 'B', text: "Được tự động thay đổi kích thước bộ nhớ một cách linh hoạt mỗi khi lập trình viên thêm phần tử mới." },
      { id: 'C', text: "Được cấp phát trong một khối ô nhớ liên tục với kích thước cố định và các phần tử cùng kiểu dữ liệu." },
      { id: 'D', text: "Được phân chia lưu trữ một nửa trên vùng nhớ ngăn xếp Stack và một nửa trên phân vùng nhớ Heap." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.276 và HCMUTE tr.93: Mảng trong C là tập hợp các phần tử cùng kiểu, nằm ở các ô nhớ liên tiếp nhau (contiguous memory allocation) với kích thước cố định.",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 276',
      hcmutePage: 'Trang 93',
      section: '5.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch5-002',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Chỉ số (Index) hợp lệ của một mảng có N phần tử trong ngôn ngữ lập trình C nằm trong giới hạn nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Chỉ số bắt đầu từ số 0 và kết thúc tại phần tử có chỉ số là N - 1 theo quy ước chỉ mục số học gốc 0." },
      { id: 'B', text: "Chỉ số bắt đầu từ số 1 và kết thúc tại phần tử có chỉ số là N theo quy ước số thứ tự tự nhiên." },
      { id: 'C', text: "Chỉ số có thể nhận bất kỳ giá trị nào từ -N đến +N mà không bị giới hạn bởi kích thước mảng." },
      { id: 'D', text: "Chỉ số bắt đầu từ 0 và kết thúc tại N, cho phép lập trình viên truy xuất tối đa N + 1 phần tử." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.277 và HCMUTE tr.94: C sử dụng zero-based indexing. Mảng n phần tử có chỉ số từ 0 đến n-1. a[n] là phần tử nằm ngoài mảng.",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 277',
      hcmutePage: 'Trang 94',
      section: '5.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-003',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Điều gì xảy ra với các phần tử còn lại khi khai báo mảng cục bộ khởi tạo một phần: int a[5] = {1, 2};?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Các phần tử còn lại sẽ giữ các giá trị rác ngẫu nhiên vốn có từ trước trên bộ nhớ ngăn xếp Stack." },
      { id: 'B', text: "Các phần tử còn lại a[2], a[3], a[4] sẽ được trình biên dịch tự động khởi tạo bằng giá trị số 0." },
      { id: 'C', text: "Trình biên dịch sẽ báo lỗi biên dịch vì danh sách khởi tạo không đủ số lượng 5 phần tử của mảng." },
      { id: 'D', text: "Mảng sẽ tự động bị thu hẹp kích thước lại chỉ còn đúng 2 phần tử tương ứng với dữ liệu truyền vào." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.280 và HCMUTE tr.96: Nếu mảng được khởi tạo một phần (ít nhất 1 phần tử), tất cả các phần tử còn lại chưa khởi tạo sẽ tự động được gán bằng 0.",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 280',
      hcmutePage: 'Trang 96',
      section: '5.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-004',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Chuỗi ký tự (String) trong ngôn ngữ lập trình C được định nghĩa và lưu trữ trên bộ nhớ theo cách nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Là một kiểu dữ liệu nguyên thủy độc lập tương tự như kiểu dữ liệu string trong các ngôn ngữ hiện đại." },
      { id: 'B', text: "Là một cấu trúc struct chứa sẵn trường độ dài chuỗi nguyên bản và con trỏ trỏ tới vùng đệm văn bản." },
      { id: 'C', text: "Là một mảng các ký tự bắt buộc phải có độ dài đúng bằng bội số của 8 bytes để căn lề bộ nhớ máy tính." },
      { id: 'D', text: "Là một mảng các ký tự kiểu char kết thúc bằng ký tự đặc biệt '\0' (NUL terminator có mã ASCII là 0)." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.334 và HCMUTE tr.106: C không có kiểu string nguyên thủy; chuỗi là mảng char kết thúc bằng ký tự rỗng '\0' (NUL, mã ASCII 0).",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 334',
      hcmutePage: 'Trang 106',
      section: '5.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch5-005',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Để lưu trữ một chuỗi ký tự có độ dài thực tế là N ký tự, cần khai báo mảng char với kích thước tối thiểu là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Chỉ cần đúng N bytes vì trình biên dịch tự động nén ký tự kết thúc vào phần thông tin tiêu đề." },
      { id: 'B', text: "Phải là 2 * N bytes để hệ thống lưu thêm bảng mã ánh xạ ký tự Unicode cho từng ký tự." },
      { id: 'C', text: "Tối thiểu phải là N + 1 bytes để chừa lại đúng 1 byte lưu trữ ký tự kết thúc chuỗi '\0'." },
      { id: 'D', text: "Phải là N + 4 bytes để lưu trữ thêm con trỏ kích thước và địa chỉ bắt đầu của chuỗi trong RAM." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.336 và HCMUTE tr.107: Mọi chuỗi C dài N ký tự cần N bytes cho nội dung và 1 byte cho ký tự '\0', tổng cộng là N + 1 bytes.",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 336',
      hcmutePage: 'Trang 107',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-006',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Hàm strlen(s) trong thư viện <string.h> thực hiện tính toán độ dài chuỗi theo nguyên tắc nào sau đây?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Trả về toàn bộ kích thước số byte bộ nhớ được khai báo ban đầu của mảng char bằng toán tử sizeof." },
      { id: 'B', text: "Đếm tất cả các ký tự bao gồm cả ký tự kết thúc '\0' và khoảng trắng nằm ở cuối mảng dữ liệu." },
      { id: 'C', text: "Trả về số dòng văn bản có trong chuỗi bằng cách đếm số lần xuất hiện của ký tự xuống dòng '\n'." },
      { id: 'D', text: "Đếm tổng số lượng ký tự tính từ đầu chuỗi cho đến khi gặp ký tự '\0' đầu tiên và không đếm ký tự '\0'." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.340 và HCMUTE tr.110: strlen(s) đếm số ký tự từ đầu chuỗi đến trước '\0', không tính '\0'. Trong khi sizeof(s) trả về kích thước mảng cấp phát.",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 340',
      hcmutePage: 'Trang 110',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-007',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Giá trị trả về của hàm so sánh chuỗi strcmp(s1, s2) trong thư viện chuẩn <string.h> có ý nghĩa gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Trả về 0 nếu s1 giống s2; trả về giá trị âm nếu s1 < s2; trả về giá trị dương nếu s1 > s2 theo mã ASCII." },
      { id: 'B', text: "Trả về 1 nếu hai chuỗi có cùng độ dài ký tự và trả về số 0 nếu hai chuỗi có độ dài hoàn toàn khác nhau." },
      { id: 'C', text: "Trả về địa chỉ con trỏ của chuỗi có kích thước ngắn hơn trong hai chuỗi tham số truyền vào hàm." },
      { id: 'D', text: "Trả về giá trị boolean true nếu hai chuỗi có cùng địa chỉ bắt đầu trên bộ nhớ ngăn xếp Stack." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.345 và HCMUTE tr.112: strcmp so sánh thứ tự từ điển (mã ASCII): = 0 nếu bằng nhau, < 0 nếu ký tự khác nhau đầu tiên của s1 nhỏ hơn s2, > 0 nếu ngược lại.",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 345',
      hcmutePage: 'Trang 112',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-008',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Vì sao hàm gets() đã chính thức bị loại bỏ hoàn toàn trong chuẩn ngôn ngữ lập trình C11?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Vì gets() không hỗ trợ đọc các ký tự chữ cái tiếng Việt có dấu trong bảng mã chuẩn Unicode mở rộng." },
      { id: 'B', text: "Vì gets() không kiểm tra kích thước bộ đệm đích dẫn đến nguy cơ tràn bộ nhớ đệm Buffer Overflow nghiêm trọng." },
      { id: 'C', text: "Vì gets() làm chậm hiệu năng xử lý của CPU do phải liên tục đồng bộ hóa luồng dữ liệu vào ra chuẩn." },
      { id: 'D', text: "Vì gets() chỉ cho phép nhập tối đa 255 ký tự văn bản trên mỗi lần thực thi câu lệnh đọc vào." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.338 và HCMUTE tr.108: gets() không nhận tham số kích thước mảng nên không thể ngăn nhập quá dung lượng bộ đệm, gây lỗi tràn bộ đệm (Buffer Overflow) bảo mật.",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 338',
      hcmutePage: 'Trang 108',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-009',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Ưu điểm vượt trội của hàm fgets(str, sizeof(str), stdin) so với hàm gets() truyền thống là gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Cho phép chỉ định giới hạn số ký tự tối đa được đọc vào, ngăn chặn hoàn toàn lỗi tràn bộ nhớ đệm." },
      { id: 'B', text: "Tự động loại bỏ tất cả các khoảng trắng dư thừa nằm ở đầu và cuối dòng văn bản khi người dùng nhập." },
      { id: 'C', text: "Tự động chuyển đổi các ký tự viết thường thành ký tự in hoa trước khi lưu trữ vào mảng bộ nhớ." },
      { id: 'D', text: "Cho phép đọc dữ liệu trực tiếp từ các cổng giao tiếp phần cứng mà không cần mở luồng tệp tin." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.339 và HCMUTE tr.109: fgets nhận tham số kích thước tối đa n (thường dùng sizeof(str)), chỉ đọc tối đa n-1 ký tự và luôn ghi '\0' ở cuối, an toàn tuyệt đối.",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 339',
      hcmutePage: 'Trang 109',
      section: '5.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch5-010',
    chapterId: 5,
    articleId: 'c-art-ch5-03',
    content: "Trong ngôn ngữ C, mảng hai chiều int a[M][N] được tổ chức lưu trữ trong bộ nhớ vật lý theo thứ tự nào?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Lưu trữ theo thứ tự ưu tiên cột (Column-Major Order), các phần tử của cùng một cột nằm liên tục nhau." },
      { id: 'B', text: "Lưu trữ theo các khối ma trận vuông đan xen nhằm tối ưu hóa việc đọc ghi trên bộ nhớ đệm Cache." },
      { id: 'C', text: "Lưu trữ theo thứ tự ưu tiên dòng (Row-Major Order), các phần tử của cùng một dòng nằm liên tục nhau." },
      { id: 'D', text: "Lưu trữ ngẫu nhiên và sử dụng một bảng chỉ mục con trỏ phụ để định vị tọa độ của từng phần tử." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.295 và HCMUTE tr.101: C lưu mảng đa chiều theo row-major order (ưu tiên hàng): hàng 0 xong đến hàng 1, hàng 2... liền kề trong bộ nhớ.",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 295',
      hcmutePage: 'Trang 101',
      section: '5.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-011',
    chapterId: 5,
    articleId: 'c-art-ch5-03',
    content: "Khi khai báo tham số là mảng hai chiều trong hàm: void xuLy(int a[][N], int m), quy tắc nào là BẮT BUỘC?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Bắt buộc phải chỉ định kích thước số dòng M còn kích thước số cột N thì có thể bỏ trống tùy ý." },
      { id: 'B', text: "Bắt buộc phải bỏ trống cả số dòng và số cột để hàm có thể nhận mọi kích thước ma trận khác nhau." },
      { id: 'C', text: "Bắt buộc cả hai kích thước dòng M và cột N đều phải được khai báo bằng các hằng số cụ thể." },
      { id: 'D', text: "Bắt buộc phải chỉ định kích thước số cột N để trình biên dịch có thể tính toán địa chỉ các dòng." },
    ],
    correctAnswers: ['D'],
    explanation: "Căn cứ UTT tr.299 và HCMUTE tr.103: Để tính địa chỉ a[i][j] = a + i*N + j, compiler cần biết số cột N. Vì vậy số cột là bắt buộc trong tham số mảng 2D (int a[][N]).",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 299',
      hcmutePage: 'Trang 103',
      section: '5.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-012',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Hàm strstr(haystack, needle) trong thư viện chuẩn <string.h> thực hiện chức năng gì?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Tìm kiếm sự xuất hiện đầu tiên của chuỗi con needle trong chuỗi haystack và trả về con trỏ trỏ tới vị trí đó." },
      { id: 'B', text: "Nối chuỗi ký tự needle vào phía sau chuỗi haystack và trả về con trỏ trỏ tới đầu chuỗi kết quả mới." },
      { id: 'C', text: "So sánh độ dài số lượng ký tự giữa hai chuỗi và trả về giá trị số học nguyên là hiệu độ dài hai chuỗi." },
      { id: 'D', text: "Thay thế tất cả các lần xuất hiện của chuỗi needle trong chuỗi haystack bằng một ký tự khoảng trắng." },
    ],
    correctAnswers: ['A'],
    explanation: "Căn cứ UTT tr.348 và HCMUTE tr.114: strstr tìm kiếm chuỗi con trong chuỗi mẹ. Nếu tìm thấy, trả về con trỏ trỏ tới vị trí bắt đầu chuỗi con; nếu không tìm thấy, trả về NULL.",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 348',
      hcmutePage: 'Trang 114',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-013',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Điều gì xảy ra khi sử dụng hàm strcpy(dest, src) nếu kích thước của mảng dest nhỏ hơn mảng src?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Hàm sẽ tự động cắt ngắn chuỗi nguồn src sao cho vừa khít với kích thước khai báo của mảng đích dest." },
      { id: 'B', text: "Gây ra lỗi tràn bộ nhớ đệm (Buffer Overflow), ghi đè lên các vùng nhớ lân cận và gây hành vi không xác định." },
      { id: 'C', text: "Trình biên dịch sẽ lập tức đưa ra lỗi biên dịch và từ chối tạo tệp mã máy thực thi chương trình." },
      { id: 'D', text: "Mảng đích dest sẽ được hệ điều hành tự động cấp phát mở rộng thêm bộ nhớ trên phân vùng Heap." },
    ],
    correctAnswers: ['B'],
    explanation: "Căn cứ UTT tr.342 và HCMUTE tr.111: strcpy không kiểm tra kích thước dest. Nếu src dài hơn dest, dữ liệu ghi tràn bộ đệm (Buffer Overflow), làm hỏng ô nhớ khác.",
    tags: ["c-lang", "ch5", "theory", "medium"],
    reference: {
      uttPage: 'Trang 342',
      hcmutePage: 'Trang 111',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-014',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Biểu thức sizeof(a) / sizeof(a[0]) thường được sử dụng nhằm mục đích gì trong ngôn ngữ lập trình C?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Tính toán dung lượng bộ nhớ RAM tính bằng kilobyte mà hệ thống đã cấp cho toàn bộ mảng dữ liệu." },
      { id: 'B', text: "Xác định kích thước số byte của kiểu dữ liệu của phần tử đầu tiên đang được lưu trữ trong mảng." },
      { id: 'C', text: "Tính toán số lượng phần tử thực tế của một mảng tĩnh được cấp phát cố định trong cùng phạm vi." },
      { id: 'D', text: "Tìm kiếm giá trị của phần tử có giá trị lớn nhất trong mảng bằng các phép toán đo lường số học." },
    ],
    correctAnswers: ['C'],
    explanation: "Căn cứ UTT tr.282 và HCMUTE tr.97: sizeof(a) là tổng số bytes của mảng, sizeof(a[0]) là số bytes của 1 phần tử. Phép chia cho ra đúng số lượng phần tử của mảng tĩnh.",
    tags: ["c-lang", "ch5", "theory", "easy"],
    reference: {
      uttPage: 'Trang 282',
      hcmutePage: 'Trang 97',
      section: '5.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-015',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Đoạn chương trình C sau đây sẽ in ra màn hình giá trị là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[5] = {10, 20, 30};
    printf("%d", a[1] + a[4]);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 50 (do các phần tử chưa khởi tạo tự động nhận giá trị nối tiếp của phần tử đứng trước)." },
      { id: 'B', text: "In ra số 20 (do a[1] có giá trị bằng 20 còn a[4] chưa khởi tạo nên tự động nhận giá trị bằng 0)." },
      { id: 'C', text: "In ra một giá trị rác ngẫu nhiên do truy xuất vào phần tử a[4] chưa được gán giá trị cụ thể." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch do mảng có 5 phần tử nhưng chỉ cung cấp 3 giá trị ban đầu." },
    ],
    correctAnswers: ['B'],
    explanation: "Khi khởi tạo mảng một phần {10, 20, 30}, các phần tử còn lại a[3], a[4] tự động bằng 0. Vậy a[1] = 20, a[4] = 0 -> tổng = 20 + 0 = 20.",
    tags: ["c-lang", "ch5", "output", "easy"],
    reference: {
      uttPage: 'Trang 281',
      hcmutePage: 'Trang 96',
      section: '5.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch5-016',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Giá trị in ra của hai phép đo sizeof và strlen trong chương trình sau là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>
#include <string.h>

int main(void) {
    char str[10] = "HCMUTE";
    printf("%zu %zu", sizeof(str), strlen(str));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '6 6' (cả hai toán tử và hàm đều trả về độ dài số lượng ký tự thực tế của chuỗi văn bản)." },
      { id: 'B', text: "In ra '10 7' (hàm strlen đếm cả ký tự kết thúc chuỗi '\0' nằm ở cuối chuỗi ký tự ban đầu)." },
      { id: 'C', text: "In ra '7 6' (toán tử sizeof tự động cắt bỏ phần dung lượng thừa không dùng đến của mảng char)." },
      { id: 'D', text: "In ra '10 6' (sizeof trả về kích thước cấp phát của mảng 10 bytes còn strlen đếm 6 ký tự)." },
    ],
    correctAnswers: ['D'],
    explanation: "sizeof(str) trả về kích thước mảng đã khai báo là 10 bytes. strlen(str) đếm số ký tự từ 'H' đến 'E', tức 6 ký tự. In ra '10 6'.",
    tags: ["c-lang", "ch5", "output", "easy"],
    reference: {
      uttPage: 'Trang 341',
      hcmutePage: 'Trang 110',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-017',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Kết quả in ra của chương trình gán ký tự kết thúc chuỗi sau đây là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#include <string.h>

int main(void) {
    char s[] = "LapTrinhC";
    s[3] = '\\0';
    printf("%s", s);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuỗi 'Lap' (do ký tự '\0' được đặt tại chỉ số 3 làm dấu mốc kết thúc chuỗi sớm)." },
      { id: 'B', text: "In ra chuỗi 'Lap rinhC' (ký tự tại vị trí chỉ số 3 được thay thế bằng một dấu cách trắng)." },
      { id: 'C', text: "In ra toàn bộ chuỗi 'LapTrinhC' (vì việc thay đổi phần tử không làm thay đổi độ dài gốc)." },
      { id: 'D', text: "Chương trình gặp lỗi bộ nhớ do không được phép tự ý sửa đổi ký tự kết thúc của chuỗi." },
    ],
    correctAnswers: ['A'],
    explanation: "s[0]='L', s[1]='a', s[2]='p', s[3]='T'. Gán s[3]='\0' biến chuỗi kết thúc ngay sau 'p'. printf(\"%s\", s) dừng tại '\0' nên chỉ in 'Lap'.",
    tags: ["c-lang", "ch5", "output", "medium"],
    reference: {
      uttPage: 'Trang 337',
      hcmutePage: 'Trang 107',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-018',
    chapterId: 5,
    articleId: 'c-art-ch5-03',
    content: "Giá trị in ra của phần tử ma trận trong đoạn chương trình C sau đây là bao nhiêu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    printf("%d", a[1][0]);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 2 (phần tử tại dòng chỉ số 0 và cột chỉ số 1 của ma trận nằm ở hàng đầu tiên)." },
      { id: 'B', text: "In ra số 4 (phần tử tại dòng chỉ số 1 và cột chỉ số 0 của ma trận là phần tử đầu tiên hàng hai)." },
      { id: 'C', text: "In ra số 1 (phần tử đầu tiên nằm tại góc trên cùng bên trái của ma trận hai chiều)." },
      { id: 'D', text: "In ra số 5 (phần tử nằm ở vị trí trung tâm của hàng thứ hai trong bảng dữ liệu mảng)." },
    ],
    correctAnswers: ['B'],
    explanation: "Dòng 0 là {1, 2, 3}. Dòng 1 là {4, 5, 6}. Phần tử a[1][0] là cột 0 của dòng 1, tức giá trị 4.",
    tags: ["c-lang", "ch5", "output", "medium"],
    reference: {
      uttPage: 'Trang 296',
      hcmutePage: 'Trang 102',
      section: '5.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-019',
    chapterId: 5,
    articleId: 'c-art-ch5-03',
    content: "Tổng các phần tử trên đường chéo chính của ma trận vuông sau khi chạy chương trình là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += m[i][i];
    }
    printf("%d", sum);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra số 45 (tổng của toàn bộ chín phần tử có trong ma trận vuông ba nhân ba từ 1 đến 9)." },
      { id: 'B', text: "In ra số 12 (tổng các phần tử nằm trên đường chéo phụ của ma trận là 3 + 5 + 7 = 15 trừ sai số)." },
      { id: 'C', text: "In ra số 15 (tổng các phần tử đường chéo chính m[0][0] + m[1][1] + m[2][2] là 1 + 5 + 9 = 15)." },
      { id: 'D', text: "In ra số 9 (chương trình chỉ cộng được giá trị của phần tử cuối cùng trên đường chéo chính)." },
    ],
    correctAnswers: ['C'],
    explanation: "Đường chéo chính có i == j: m[0][0] = 1, m[1][1] = 5, m[2][2] = 9. Tổng sum = 1 + 5 + 9 = 15.",
    tags: ["c-lang", "ch5", "output", "hard"],
    reference: {
      uttPage: 'Trang 302',
      hcmutePage: 'Trang 104',
      section: '5.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-020',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Kết quả của thao tác nối chuỗi strcat trong đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#include <string.h>

int main(void) {
    char s1[20] = "Hello ";
    char s2[] = "World";
    strcat(s1, s2);
    printf("%s", s1);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra 'World' (hàm strcat ghi đè hoàn toàn nội dung của s2 lên vị trí bắt đầu của s1)." },
      { id: 'B', text: "In ra 'Hello ' (hàm strcat chỉ có tác dụng trả về kết quả chứ không làm biến đổi mảng s1)." },
      { id: 'C', text: "Chương trình gặp lỗi biên dịch do mảng s2 không được khai báo rõ số lượng phần tử mảng." },
      { id: 'D', text: "In ra 'Hello World' (hàm strcat ghi tiếp nối nội dung s2 vào sau ký tự cuối cùng của s1)." },
    ],
    correctAnswers: ['D'],
    explanation: "strcat(s1, s2) nối chuỗi s2 vào sau s1. s1 có đủ 20 bytes bộ đệm nên chứa an toàn 'Hello World'.",
    tags: ["c-lang", "ch5", "output", "medium"],
    reference: {
      uttPage: 'Trang 344',
      hcmutePage: 'Trang 111',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-021',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Thuật toán sắp xếp nổi bọt (Bubble Sort) trên mảng a = {4, 2, 1} sau vòng lặp ngoài đầu tiên (i = 0) có thứ tự là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `int a[] = {4, 2, 1};
for (int j = 0; j < 2; j++) {
    if (a[j] > a[j+1]) {
        int t = a[j]; a[j] = a[j+1]; a[j+1] = t;
    }
}`,
    options: [
      { id: 'A', text: "Thứ tự mảng trở thành {2, 1, 4} (phần tử lớn nhất là số 4 được đẩy nổi về cuối mảng)." },
      { id: 'B', text: "Thứ tự mảng trở thành {1, 2, 4} (toàn bộ mảng đã được sắp xếp tăng dần hoàn chỉnh)." },
      { id: 'C', text: "Thứ tự mảng trở thành {4, 1, 2} (chỉ có hai phần tử cuối cùng được thực hiện hoán đổi)." },
      { id: 'D', text: "Thứ tự mảng không đổi vẫn là {4, 2, 1} do điều kiện so sánh lớn hơn chưa thỏa mãn." },
    ],
    correctAnswers: ['A'],
    explanation: "j=0: so sánh a[0]=4 > a[1]=2 -> hoán đổi thành {2, 4, 1}. j=1: so sánh a[1]=4 > a[2]=1 -> hoán đổi thành {2, 1, 4}. Số 4 nổi về cuối.",
    tags: ["c-lang", "ch5", "output", "hard"],
    reference: {
      uttPage: 'Trang 288',
      hcmutePage: 'Trang 99',
      section: '5.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-022',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Kết quả so sánh chuỗi strcmp trong đoạn chương trình sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#include <string.h>

int main(void) {
    char a[] = "apple";
    char b[] = "banana";
    if (strcmp(a, b) < 0)
        printf("Nho hon");
    else
        printf("Lon hon");
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra 'Lon hon' (vì chuỗi 'apple' có độ dài số lượng ký tự ngắn hơn chuỗi 'banana')." },
      { id: 'B', text: "In ra 'Nho hon' (vì mã ASCII của ký tự 'a' là 97 nhỏ hơn mã ASCII của ký tự 'b' là 98)." },
      { id: 'C', text: "In ra 'Lon hon' (vì hàm strcmp luôn ưu tiên chuỗi xuất hiện trước trong bảng từ điển)." },
      { id: 'D', text: "Chương trình gặp lỗi biên dịch vì hàm strcmp chỉ chấp nhận hai con trỏ cấp phát động." },
    ],
    correctAnswers: ['B'],
    explanation: "Ký tự đầu tiên 'a' (ASCII 97) so với 'b' (ASCII 98): 97 - 98 = -1 < 0. Do đó strcmp(a, b) < 0, in 'Nho hon'.",
    tags: ["c-lang", "ch5", "output", "medium"],
    reference: {
      uttPage: 'Trang 346',
      hcmutePage: 'Trang 113',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-023',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Kỹ thuật đảo mảng: Kết quả in ra của mảng sau khi chạy đoạn mã hoán đổi đối xứng là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a[] = {1, 2, 3, 4, 5};
    int n = 5;
    for (int i = 0; i < n / 2; i++) {
        int temp = a[i];
        a[i] = a[n - 1 - i];
        a[n - 1 - i] = temp;
    }
    for (int i = 0; i < n; i++) printf("%d", a[i]);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra dãy số '12345' (do vòng lặp chỉ chạy một nửa mảng nên các phần tử bị đảo hai lần)." },
      { id: 'B', text: "In ra dãy số '54345' (các phần tử phía sau chưa được sao chép ngược lại vị trí phía trước)." },
      { id: 'C', text: "In ra dãy số '54321' (các phần tử đối xứng qua tâm đã được hoán đổi đảo ngược hoàn toàn)." },
      { id: 'D', text: "In ra dãy số '52341' (chỉ có cặp phần tử đầu tiên và cuối cùng của mảng được hoán đổi)." },
    ],
    correctAnswers: ['C'],
    explanation: "n/2 = 2. i=0 đổi a[0] và a[4] -> {5, 2, 3, 4, 1}. i=1 đổi a[1] và a[3] -> {5, 4, 3, 2, 1}. Mảng được đảo ngược chính xác: 54321.",
    tags: ["c-lang", "ch5", "output", "hard"],
    reference: {
      uttPage: 'Trang 285',
      hcmutePage: 'Trang 98',
      section: '5.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-024',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Giá trị in ra của con trỏ tìm kiếm chuỗi con strstr trong đoạn mã sau là gì?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#include <string.h>

int main(void) {
    char text[] = "UTE_HCMUTE";
    char *p = strstr(text, "HCM");
    if (p != NULL)
        printf("%s", p);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra đúng ba ký tự 'HCM' (hàm strstr chỉ trả về đúng chuỗi con cần tìm kiếm ban đầu)." },
      { id: 'B', text: "In ra chuỗi 'UTE_HCMUTE' (hàm strstr trả về con trỏ trỏ tới đầu chuỗi mẹ ban đầu)." },
      { id: 'C', text: "Chương trình gặp lỗi truy cập bộ nhớ do con trỏ p trỏ vào vùng nhớ không được định vị." },
      { id: 'D', text: "In ra chuỗi 'HCMUTE' (con trỏ p trỏ tới vị trí chữ 'H' và printf in từ vị trí đó đến hết chuỗi)." },
    ],
    correctAnswers: ['D'],
    explanation: "strstr tìm thấy 'HCM' tại vị trí ký tự thứ 4 trong 'UTE_HCMUTE'. Con trỏ p trỏ tới 'H' này. printf(\"%s\", p) in chuỗi từ p đến hết ('\0'), tức 'HCMUTE'.",
    tags: ["c-lang", "ch5", "output", "medium"],
    reference: {
      uttPage: 'Trang 349',
      hcmutePage: 'Trang 114',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-025',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Lỗi nghiêm trọng nào xảy ra trong đoạn mã duyệt mảng có 5 phần tử sau đây?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `int a[5] = {1, 2, 3, 4, 5};
for (int i = 0; i <= 5; i++) {
    printf("%d ", a[i]);
}`,
    options: [
      { id: 'A', text: "Lỗi cú pháp do không được phép khai báo khởi tạo giá trị cho mảng ngay khi khai báo biến." },
      { id: 'B', text: "Lỗi toán tử tăng biến lặp i++ làm cho vòng lặp lặp vô hạn mà không bao giờ kết thúc được." },
      { id: 'C', text: "Lỗi truy xuất vượt quá chỉ số biên của mảng (Off-by-one), truy cập a[5] nằm ngoài mảng." },
      { id: 'D', text: "Lỗi in dữ liệu do câu lệnh printf không thể in được các phần tử có giá trị số nguyên lẻ." },
    ],
    correctAnswers: ['C'],
    explanation: "Mảng a[5] có chỉ số 0, 1, 2, 3, 4. Vòng lặp 'i <= 5' chạy đến i = 5, truy xuất a[5] là ô nhớ ngoài mảng, gây lỗi Out-of-bounds (Undefined Behavior). Cần dùng 'i < 5'.",
    tags: ["c-lang", "ch5", "debug", "easy"],
    reference: {
      uttPage: 'Trang 278',
      hcmutePage: 'Trang 94',
      section: '5.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch5-026',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Vì sao biểu thức so sánh 'if (str == \"admin\")' sau đây luôn cho kết quả sai dù người dùng đã nhập 'admin'?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `char str[20];
scanf("%19s", str);
if (str == "admin") {
    printf("Dung");
}`,
    options: [
      { id: 'A', text: "Toán tử '==' so sánh hai địa chỉ bộ nhớ khác nhau chứ không hề so sánh nội dung ký tự của chuỗi." },
      { id: 'B', text: "Do mảng str được cấp phát dung lượng 20 bytes nên không thể khớp kích thước với chuỗi 5 ký tự." },
      { id: 'C', text: "Do hàm scanf tự động thêm ký tự xuống dòng '\n' vào giữa nội dung chuỗi ký tự được nhập vào." },
      { id: 'D', text: "Do từ khóa admin được xem là từ khóa nội bộ của hệ điều hành nên trình biên dịch chặn so sánh." },
    ],
    correctAnswers: ['A'],
    explanation: "Bẫy kinh điển: Trong C, tên mảng str suy biến thành địa chỉ ô nhớ trong Stack, còn \"admin\" là địa chỉ vùng Literal. Hai địa chỉ luôn khác nhau. Phải dùng 'strcmp(str, \"admin\") == 0'.",
    tags: ["c-lang", "ch5", "debug", "medium"],
    reference: {
      uttPage: 'Trang 347',
      hcmutePage: 'Trang 113',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-027',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Khai báo chuỗi sau đây mắc phải lỗi thiết kế bộ nhớ nào khiến việc in ấn chuỗi bị in rác?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `char s[5] = "Hello";
printf("%s", s);`,
    options: [
      { id: 'A', text: "Trình biên dịch cấm việc khởi tạo chuỗi ký tự bằng cách đặt trong cặp dấu ngoặc kép trên mảng." },
      { id: 'B', text: "Mảng s chỉ có 5 bytes nên không còn chỗ cho ký tự kết thúc '\0', printf sẽ đọc tràn qua bộ nhớ lân cận." },
      { id: 'C', text: "Từ 'Hello' bắt buộc phải được khai báo bằng mảng có kiểu dữ liệu số nguyên không dấu unsigned char." },
      { id: 'D', text: "Hàm printf không thể in được mảng chuỗi nếu kích thước khai báo của mảng nhỏ hơn 10 bytes." },
    ],
    correctAnswers: ['B'],
    explanation: "Chuỗi \"Hello\" gồm 5 ký tự 'H','e','l','l','o' và 1 ký tự '\0', tổng 6 bytes. Khai báo s[5] chỉ chứa vừa 5 chữ cái, thiếu '\0'. printf(\"%s\") sẽ đọc tiếp vào vùng nhớ sau gây in rác.",
    tags: ["c-lang", "ch5", "debug", "medium"],
    reference: {
      uttPage: 'Trang 336',
      hcmutePage: 'Trang 107',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-028',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Lỗi vi phạm truy cập bộ nhớ nghiêm trọng nào xảy ra khi thực thi đoạn mã sửa chuỗi sau đây?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `char *str = "Hello";
str[0] = 'h';`,
    options: [
      { id: 'A', text: "Lỗi không tương thích kiểu dữ liệu giữa kiểu con trỏ char* và kiểu ký tự char độc lập trong C." },
      { id: 'B', text: "Lỗi thiếu hàm giải phóng bộ nhớ free() trước khi thực hiện thao tác gán giá trị ký tự mới." },
      { id: 'C', text: "Lỗi ghi vào vùng nhớ chỉ đọc (Read-Only Memory) của chuỗi hằng (String Literal), làm sập chương trình." },
      { id: 'D', text: "Chương trình không có lỗi nào và biến đổi chuỗi thành chữ 'hello' thành công mà không có cảnh báo." },
    ],
    correctAnswers: ['C'],
    explanation: "Chuỗi hằng \"Hello\" được lưu trong phân vùng nhớ Text/ROData (chỉ đọc). Con trỏ char *str trỏ tới vùng này. Thao tác ghi str[0] = 'h' gây vi phạm quyền truy cập (Segmentation fault / Access violation).",
    tags: ["c-lang", "ch5", "debug", "hard"],
    reference: {
      uttPage: 'Trang 335',
      hcmutePage: 'Trang 106',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-029',
    chapterId: 5,
    articleId: 'c-art-ch5-03',
    content: "Lỗi định dạng khai báo nào khiến hàm nhận mảng hai chiều sau đây bị từ chối biên dịch?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `void inMaTran(int a[][], int m, int n) {
    // Code in ma tran
}`,
    options: [
      { id: 'A', text: "Bỏ trống kích thước số dòng ở cặp ngoặc thứ nhất a[][], ngôn ngữ C yêu cầu phải ghi số dòng cụ thể." },
      { id: 'B', text: "Thiếu từ khóa con trỏ '*' đặt trước tên mảng a để trình biên dịch biết đây là một mảng động." },
      { id: 'C', text: "Các tham số m và n bắt buộc phải được khai báo bằng từ khóa const int để khóa kích thước." },
      { id: 'D', text: "Bỏ trống kích thước số cột ở cặp ngoặc thứ hai a[][], trình biên dịch không thể tính địa chỉ dòng." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C, khi truyền mảng 2D vào hàm, bắt buộc phải chỉ định số cột ở chiều thứ hai (ví dụ int a[][N]) để compiler tính được độ dịch dòng a + i*N + j.",
    tags: ["c-lang", "ch5", "debug", "medium"],
    reference: {
      uttPage: 'Trang 299',
      hcmutePage: 'Trang 103',
      section: '5.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-030',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Đoạn mã sau sử dụng hàm scanf để đọc họ và tên nhưng kết quả chỉ in ra được chữ 'Nguyen'. Nguyên nhân là gì?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `char name[50];
scanf("%s", name);
printf("%s", name);`,
    options: [
      { id: 'A', text: "Định dạng '%s' của hàm scanf tự động dừng đọc ngay khi gặp khoảng trắng đầu tiên trong chuỗi." },
      { id: 'B', text: "Mảng name có kích thước 50 bytes quá nhỏ để chứa trọn vẹn cả họ và tên đầy đủ của sinh viên." },
      { id: 'C', text: "Hàm printf bị lỗi hiển thị khi gặp chuỗi có chứa các dấu cách phân cách giữa các từ." },
      { id: 'D', text: "Thiếu toán tử lấy địa chỉ '&' đặt trước biến name trong câu lệnh gọi hàm nhập liệu scanf." },
    ],
    correctAnswers: ['A'],
    explanation: "Định dạng %s trong scanf coi khoảng trắng (space, tab, newline) là ký tự phân cách trường (delimiter). Khi gặp dấu cách sau 'Nguyen', scanf dừng lại. Để đọc cả dòng cần dùng fgets hoặc %49[^\n].",
    tags: ["c-lang", "ch5", "debug", "medium"],
    reference: {
      uttPage: 'Trang 337',
      hcmutePage: 'Trang 108',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-031',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Vì sao hàm sau không thể tính được số lượng phần tử của mảng truyền vào bằng sizeof?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int count(int a[]) {
    return sizeof(a) / sizeof(a[0]);
}`,
    options: [
      { id: 'A', text: "Toán tử sizeof chỉ có thể hoạt động bên trong hàm main chứ không hoạt động trong các hàm con tự định nghĩa." },
      { id: 'B', text: "Khi truyền mảng vào hàm, mảng tự động suy biến thành con trỏ, sizeof(a) chỉ trả về kích thước con trỏ (4 hoặc 8 bytes)." },
      { id: 'C', text: "Biểu thức sizeof(a[0]) luôn trả về kết quả bằng 0 do phần tử đầu tiên chưa được gán giá trị khởi tạo." },
      { id: 'D', text: "Hàm count bắt buộc phải có kiểu trả về là size_t thay vì kiểu số nguyên int có dấu thông thường." },
    ],
    correctAnswers: ['B'],
    explanation: "Array decay: Khi mảng làm tham số hàm int a[], nó thực chất là int *a. Do đó sizeof(a) là kích thước con trỏ (8 bytes trên 64-bit), không phải kích thước mảng. Số phần tử phải truyền riêng qua tham số n.",
    tags: ["c-lang", "ch5", "debug", "hard"],
    reference: {
      uttPage: 'Trang 283',
      hcmutePage: 'Trang 97',
      section: '5.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-032',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Cần điền câu lệnh nào vào chỗ trống (...) để loại bỏ ký tự xuống dòng '\n' mà fgets lưu vào chuỗi s?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `fgets(s, sizeof(s), stdin);
s[strcspn(s, "\\n")] = ...;`,
    options: [
      { id: 'A', text: "Điền ' ' để thay thế ký tự xuống dòng bằng một dấu cách trắng nhằm phân tách các từ kế tiếp." },
      { id: 'B', text: "Điền EOF để báo hiệu cho hệ điều hành biết rằng chuỗi dữ liệu đã kết thúc nhập từ luồng tệp tin." },
      { id: 'C', text: "Điền NULL để giải phóng con trỏ quản lý ô nhớ của ký tự xuống dòng trong mảng bộ đệm văn bản." },
      { id: 'D', text: "Điền '\0' để thay thế ký tự xuống dòng bằng ký tự kết thúc chuỗi NUL chuẩn mực trong ngôn ngữ C." },
    ],
    correctAnswers: ['D'],
    explanation: "Kỹ thuật chuẩn xử lý fgets: s[strcspn(s, \"\n\")] = '\0'; sẽ tìm vị trí '\n' đầu tiên và thay bằng '\0' để chuỗi gọn gàng, không bị xuống dòng thừa.",
    tags: ["c-lang", "ch5", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 339',
      hcmutePage: 'Trang 109',
      section: '5.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch5-033',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Cần điền hàm thư viện nào vào chỗ trống (...) để sao chép an toàn tối đa n ký tự từ chuỗi src sang chuỗi dest?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `...(dest, src, sizeof(dest) - 1);
dest[sizeof(dest) - 1] = '\\0';`,
    options: [
      { id: 'A', text: "Điền hàm 'strcpy' để sao chép toàn bộ nội dung của chuỗi nguồn sang chuỗi đích mà không cần đếm." },
      { id: 'B', text: "Điền hàm 'strcat' để nối chuỗi nguồn vào sau các ký tự đang có sẵn của chuỗi đích được chỉ định." },
      { id: 'C', text: "Điền hàm 'strncpy' để sao chép chuỗi với giới hạn số lượng ký tự tối đa nhằm chống tràn bộ nhớ đệm." },
      { id: 'D', text: "Điền hàm 'memcpy' để di chuyển trực tiếp các khối nhị phân phần cứng giữa hai địa chỉ bộ nhớ RAM." },
    ],
    correctAnswers: ['C'],
    explanation: "strncpy(dest, src, n) sao chép tối đa n ký tự, là phiên bản an toàn hơn strcpy.",
    tags: ["c-lang", "ch5", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 343',
      hcmutePage: 'Trang 111',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-034',
    chapterId: 5,
    articleId: 'c-art-ch5-02',
    content: "Cần điền biểu thức logic nào vào chỗ trống (...) để kiểm tra xem hai chuỗi str1 và str2 có nội dung hoàn toàn giống nhau?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `if (... == 0) {
    printf("Hai chuoi giong nhau");
}`,
    options: [
      { id: 'A', text: "Điền 'str1 == str2' để kiểm tra tính tương đương về mặt nội dung ký tự của hai chuỗi văn bản." },
      { id: 'B', text: "Điền 'strlen(str1) - strlen(str2)' để xác minh xem độ dài số lượng ký tự của hai chuỗi có bằng nhau." },
      { id: 'C', text: "Điền 'strstr(str1, str2)' để kiểm tra xem chuỗi thứ hai có xuất hiện bên trong chuỗi thứ nhất không." },
      { id: 'D', text: "Điền 'strcmp(str1, str2)' để gọi hàm so sánh chuỗi theo bảng mã ASCII và kiểm tra kết quả trả về bằng 0." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C, so sánh nội dung hai chuỗi dùng strcmp(s1, s2) == 0. Toán tử == chỉ so sánh hai địa chỉ con trỏ.",
    tags: ["c-lang", "ch5", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 346',
      hcmutePage: 'Trang 113',
      section: '5.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch5-035',
    chapterId: 5,
    articleId: 'c-art-ch5-01',
    content: "Cần điền biểu thức nào vào chỗ trống (...) để tìm kiếm nhị phân phần tử x trên mảng a đã sắp xếp tăng dần?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'hard',
    codeSnippet: `int mid = (left + right) / 2;
if (a[mid] == x) return mid;
else if (a[mid] < x) left = ...;
else right = mid - 1;`,
    options: [
      { id: 'A', text: "Điền 'mid + 1' để thu hẹp phạm vi tìm kiếm sang nửa bên phải của mảng phần tử lớn hơn." },
      { id: 'B', text: "Điền 'mid' để tiếp tục giữ lại phần tử ở vị trí giữa cho lượt kiểm tra tiếp theo của thuật toán." },
      { id: 'C', text: "Điền 'right - 1' để dịch chuyển biên trái tiến sát về phía biên phải của mảng đang tìm kiếm." },
      { id: 'D', text: "Điền '0' để khởi động lại quá trình tìm kiếm nhị phân từ vị trí phần tử đầu tiên của mảng." },
    ],
    correctAnswers: ['A'],
    explanation: "Thuật toán tìm kiếm nhị phân (Binary Search): Nếu a[mid] < x, vì mảng tăng dần nên x phải nằm ở nửa sau, do đó cập nhật 'left = mid + 1'.",
    tags: ["c-lang", "ch5", "fill-in", "hard"],
    reference: {
      uttPage: 'Trang 291',
      hcmutePage: 'Trang 100',
      section: '5.1',
    },
    mockExamPreset: false,
  },
];
