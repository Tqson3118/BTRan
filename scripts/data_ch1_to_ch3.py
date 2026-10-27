"""
scripts/data_ch1_to_ch3.py
Ngân hàng câu hỏi trắc nghiệm Chương 1, 2, 3 (90 câu hỏi)
- Chương 1: 25 câu (10 Theory, 7 Output, 5 Debug, 3 Fill-in)
- Chương 2: 30 câu (12 Theory, 9 Output, 6 Debug, 3 Fill-in)
- Chương 3: 35 câu (14 Theory, 11 Output, 7 Debug, 3 Fill-in)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

QUESTIONS_CH1 = []
QUESTIONS_CH2 = []

# --- CHƯƠNG 1 (25 CÂU) ---
# 1.1 - 1.10: Theory (10 câu)
QUESTIONS_CH1.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch1-01",
    "content": "Ngôn ngữ lập trình C được Dennis Ritchie phát triển lần đầu tiên tại đâu và vào năm nào?",
    "options": [
        "Tại phòng thí nghiệm Bell Labs của tập đoàn AT&T vào năm 1972.",
        "Tại viện công nghệ MIT trong khuôn khổ dự án GNU vào năm 1983.",
        "Tại trung tâm nghiên cứu Xerox PARC ở California vào năm 1969.",
        "Tại phòng thí nghiệm của tập đoàn máy tính IBM vào năm 1975."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.21 và HCMUTE tr.9: Ngôn ngữ C được Dennis Ritchie phát triển tại Bell Labs vào năm 1972 để viết lại hệ điều hành UNIX.",
    "ref": {"uttPage": "Trang 21 - 25", "hcmutePage": "Trang 9 - 13", "section": "1.1"}
})

QUESTIONS_CH1.append({
    "num": 2, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch1-01",
    "content": "Vì sao ngôn ngữ lập trình C thường được xếp vào nhóm ngôn ngữ bậc trung (Middle-level language)?",
    "options": [
        "Vì C kết hợp cấu trúc cấp cao với khả năng thao tác trực tiếp vùng nhớ.",
        "Vì cú pháp của C có độ phức tạp nằm ở mức trung bình so với các ngôn ngữ.",
        "Vì C yêu cầu môi trường thông dịch trung gian trước khi nạp chạy vào CPU.",
        "Vì C chỉ hỗ trợ tập kiểu dữ liệu số nguyên và số thực ở mức cơ bản."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.23 và HCMUTE tr.11: C được gọi là ngôn ngữ bậc trung vì nó vừa cung cấp các cấu trúc điều khiển cấp cao, vừa cho phép thao tác trực tiếp với bộ nhớ và bit thông qua con trỏ.",
    "ref": {"uttPage": "Trang 21 - 25", "hcmutePage": "Trang 9 - 13", "section": "1.1"}
})

QUESTIONS_CH1.append({
    "num": 3, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch1-02",
    "content": "Theo chuẩn C99/C11, hàm main() trong chương trình C độc lập có kiểu trả về chuẩn là gì?",
    "options": [
        "Kiểu int (trả về mã số nguyên báo hiệu trạng thái cho hệ điều hành).",
        "Kiểu void (quy ước hàm chính không cần hoàn trả dữ liệu cho hệ thống).",
        "Kiểu bool (trả về trạng thái đúng hoặc sai cho trình quản lý luồng).",
        "Kiểu char* (trả về chuỗi thông báo kết thúc thực thi của chương trình)."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.26 và HCMUTE tr.20: Chuẩn C99/C11 quy định hàm main có kiểu trả về bắt buộc là int (int main(void)), trong đó return 0 báo hiệu chương trình kết thúc thành công.",
    "ref": {"uttPage": "Trang 25 - 32", "hcmutePage": "Trang 20 - 26", "section": "1.1"}
})

QUESTIONS_CH1.append({
    "num": 4, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch1-03",
    "content": "Chuẩn ANSI C89 quy định danh sách từ khóa dành riêng (Keywords) gồm bao nhiêu từ?",
    "options": [
        "Gồm 32 từ khóa cơ bản được định nghĩa chính thức trong ngôn ngữ.",
        "Gồm 48 từ khóa mở rộng cho các hệ thống máy tính cá nhân 32-bit.",
        "Gồm 64 từ khóa hỗ trợ thêm các tính năng hướng đối tượng nâng cao.",
        "Gồm 24 từ khóa nguyên thủy kế thừa từ ngôn ngữ tiền thân B/BCPL."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.32 và HCMUTE tr.23: Chuẩn ANSI C89 định nghĩa chính xác 32 từ khóa dành riêng.",
    "ref": {"uttPage": "Trang 32 - 37", "hcmutePage": "Trang 23 - 26", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch1-03",
    "content": "Quy tắc đặt tên định danh (tên biến, tên hàm, hằng số) nào sau đây là hoàn toàn hợp lệ trong C?",
    "options": [
        "Tên bắt đầu bằng chữ cái hoặc dấu gạch dưới, không chứa ký tự đặc biệt.",
        "Tên có thể bắt đầu bằng chữ số nếu độ dài tổng thể không vượt quá 8 ký tự.",
        "Tên có thể chứa dấu gạch ngang giữa các từ để phân tách cấu trúc biến.",
        "Tên có thể trùng hoàn toàn với từ khóa nếu được viết in hoa một chữ cái."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.33 và HCMUTE tr.24: Tên định danh chỉ được chứa chữ cái, chữ số và gạch dưới; bắt buộc bắt đầu bằng chữ cái hoặc dấu gạch dưới '_'.",
    "ref": {"uttPage": "Trang 32 - 37", "hcmutePage": "Trang 23 - 26", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 6, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch1-04",
    "content": "Sự khác biệt căn bản giữa chỉ thị #include <file.h> và #include \"file.h\" là gì?",
    "options": [
        "#include <...> tìm ở thư viện hệ thống, \"...\" ưu tiên tìm ở thư mục dự án.",
        "#include <...> chỉ dùng cho file tiêu đề C, còn \"...\" chỉ dùng cho C++.",
        "#include <...> tự động nạp mã máy, còn \"...\" yêu cầu biên dịch lại file.",
        "#include <...> không cho phép định nghĩa macro, còn \"...\" cho phép macro."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.68 và HCMUTE tr.195: Cặp ngoặc <> tìm kiếm trong thư mục thư viện chuẩn hệ thống; cặp ngoặc kép \"\" ưu tiên tìm trong thư mục hiện hành trước.",
    "ref": {"uttPage": "Trang 68 - 75", "hcmutePage": "Trang 195 - 205", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 7, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch1-04",
    "content": "Cơ chế Header Guards (#ifndef ... #define ... #endif) có mục đích kỹ thuật chính là gì?",
    "options": [
        "Ngăn chặn lỗi định nghĩa lặp lại khi một tệp header được include nhiều lần.",
        "Mã hóa các định nghĩa hàm để bảo vệ bản quyền mã nguồn của thư viện.",
        "Tăng tốc độ đọc đĩa bằng cách nén dung lượng các tệp tiêu đề hệ thống.",
        "Ép buộc trình biên dịch cấp phát trước vùng nhớ Stack cho các hàm ngoài."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.71 và HCMUTE tr.204: Header Guards ngăn chặn việc nội dung của một file header bị include trùng lặp trong cùng một đơn vị biên dịch.",
    "ref": {"uttPage": "Trang 68 - 75", "hcmutePage": "Trang 195 - 205", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 8, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch1-05",
    "content": "Thứ tự chính xác của 4 bước trong chu trình biên dịch mã nguồn C tiêu chuẩn là gì?",
    "options": [
        "Tiền xử lý (Preprocessing) -> Biên dịch (Compilation) -> Hợp dịch -> Liên kết.",
        "Biên dịch (Compilation) -> Tiền xử lý (Preprocessing) -> Liên kết -> Nạp chạy.",
        "Liên kết (Linking) -> Tiền xử lý (Preprocessing) -> Hợp dịch -> Thực thi.",
        "Hợp dịch (Assembly) -> Tiền xử lý -> Biên dịch (Compilation) -> Liên kết."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.35 và HCMUTE tr.27: Chu trình gồm 4 giai đoạn: Tiền xử lý (.i) -> Biên dịch sang Assembly (.s) -> Hợp dịch sang mã máy (.o) -> Liên kết Linker (.exe).",
    "ref": {"uttPage": "Trang 35 - 37", "hcmutePage": "Trang 27 - 30", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 9, "subtype": "theory", "diff": "hard", "articleId": "c-art-ch1-05",
    "content": "Tệp có phần mở rộng .o (hoặc .obj trên Windows) sinh ra sau giai đoạn nào?",
    "options": [
        "Sinh ra sau bước Hợp dịch (Assembly) và chứa mã máy nhị phân của module.",
        "Sinh ra sau bước Tiền xử lý (Preprocessing) sau khi đã bung các macro.",
        "Sinh ra sau bước Liên kết (Linking) và có thể kích hoạt chạy trực tiếp.",
        "Sinh ra trong quá trình gỡ lỗi để lưu thông tin bảng ký hiệu biến số."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.36 và HCMUTE tr.28: Bước Hợp dịch (Assembler) chuyển đổi file hợp ngữ .s thành tệp mã máy đối tượng .o (.obj).",
    "ref": {"uttPage": "Trang 35 - 37", "hcmutePage": "Trang 27 - 30", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 10, "subtype": "theory", "diff": "hard", "articleId": "c-art-ch1-04",
    "content": "Bản chất hoạt động của bộ tiền xử lý (Preprocessor) trong ngôn ngữ C là gì?",
    "options": [
        "Thực hiện thay thế văn bản thuần túy trước khi trình biên dịch phân tích cú pháp.",
        "Kiểm tra tính đúng đắn về kiểu dữ liệu của các biểu thức toán học phức tạp.",
        "Cấp phát trước các ô nhớ tĩnh trên RAM cho các biến toàn cục và hằng số.",
        "Tối ưu hóa mã máy để loại bỏ các vòng lặp rỗng không mang lại giá trị."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.68 và HCMUTE tr.195: Bộ tiền xử lý chỉ hoạt động trên mức văn bản thuần túy (Text substitution), không hiểu ngữ nghĩa hay kiểm tra kiểu dữ liệu.",
    "ref": {"uttPage": "Trang 68 - 75", "hcmutePage": "Trang 195 - 205", "section": "1.2"}
})

# 1.11 - 1.17: Output & Trace (7 câu)
QUESTIONS_CH1.append({
    "num": 11, "subtype": "output", "diff": "easy", "articleId": "c-art-ch1-04",
    "content": "Cho đoạn mã định nghĩa macro sau đây, giá trị được in ra màn hình là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n#define VAL 10 + 5\n\nint main(void) {\n    int res = VAL * 2;\n    printf(\"%d\", res);\n    return 0;\n}",
    "options": [
        "Giá trị in ra là 20 (do quy tắc thay thế văn bản thành 10 + 5 * 2).",
        "Giá trị in ra là 30 (do macro được tính toán trước thành 15 rồi nhân 2).",
        "Giá trị in ra là 15 (do phép nhân chỉ áp dụng cho toán tử đầu tiên).",
        "Chương trình báo lỗi biên dịch cú pháp do thiếu dấu ngoặc tròn bao quanh."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy tiền xử lý kinh điển: VAL * 2 được thay thế văn bản thành 10 + 5 * 2 = 10 + 10 = 20!",
    "ref": {"uttPage": "Trang 69", "hcmutePage": "Trang 198", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 12, "subtype": "output", "diff": "easy", "articleId": "c-art-ch1-02",
    "content": "Đoạn chương trình sau in ra kết quả gì trên màn hình console?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello\\rHi\\n\");\n    return 0;\n}",
    "options": [
        "In ra chuỗi 'Hillo' trên màn hình (ký tự '\\r' đưa con trỏ về đầu dòng).",
        "In ra chuỗi 'Hello Hi' nằm trên cùng một dòng có khoảng cách trắng.",
        "In ra chuỗi 'Hi' hoàn toàn và xóa sạch các ký tự trước đó trên màn hình.",
        "Chương trình báo lỗi ký tự điều khiển không hợp lệ trong chuỗi định dạng."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.117: Ký tự '\\r' (Carriage Return) đưa con trỏ về đầu dòng hiện tại và ghi đè hai ký tự đầu 'He' thành 'Hi', tạo thành 'Hillo'.",
    "ref": {"uttPage": "Trang 117", "hcmutePage": "Trang 26", "section": "1.1"}
})

QUESTIONS_CH1.append({
    "num": 13, "subtype": "output", "diff": "medium", "articleId": "c-art-ch1-04",
    "content": "Kết quả in ra màn hình của đoạn mã sau là gì?",
    "codeSnippet": "#include <stdio.h>\n#define SQUARE(x) x * x\n\nint main(void) {\n    int a = SQUARE(2 + 3);\n    printf(\"%d\", a);\n    return 0;\n}",
    "options": [
        "In ra số 11 (do macro thay thế thành 2 + 3 * 2 + 3 = 11).",
        "In ra số 25 (do tính toán (2 + 3) bình phương bằng 25).",
        "In ra số 13 (do tính 2 + 3 * 3 rồi cộng thêm phần dư).",
        "Báo lỗi biên dịch vì macro không hỗ trợ biểu thức số học."
    ],
    "correct": 0, "mock": True,
    "explanation": "SQUARE(2 + 3) thay thế thành 2 + 3 * 2 + 3. Phép nhân ưu tiên trước: 3 * 2 = 6; 2 + 6 + 3 = 11.",
    "ref": {"uttPage": "Trang 70", "hcmutePage": "Trang 200", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 14, "subtype": "output", "diff": "medium", "articleId": "c-art-ch1-04",
    "content": "Cho đoạn mã sử dụng chỉ thị #ifdef dưới đây, kết quả hiển thị là gì?",
    "codeSnippet": "#include <stdio.h>\n#define DEBUG_MODE\n\nint main(void) {\n#ifdef DEBUG_MODE\n    printf(\"ON \");\n#else\n    printf(\"OFF \");\n#endif\n    printf(\"END\");\n    return 0;\n}",
    "options": [
        "In ra chuỗi 'ON END' (nhánh #ifdef được kích hoạt khi macro tồn tại).",
        "In ra chuỗi 'OFF END' (do macro không được gán giá trị cụ thể số 1).",
        "In ra toàn bộ chuỗi 'ON OFF END' do không có lệnh ngắt rẽ nhánh.",
        "Báo lỗi cú pháp vì chỉ thị #define thiếu giá trị gán phía sau tên."
    ],
    "correct": 0, "mock": False,
    "explanation": "#ifdef kiểm tra sự tồn tại của tên macro; DEBUG_MODE đã được định nghĩa nên khối #ifdef được biên dịch, in 'ON END'.",
    "ref": {"uttPage": "Trang 72", "hcmutePage": "Trang 202", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch1-04",
    "content": "Toán tử nối chuỗi tiền xử lý ## trong macro sau sẽ cho kết quả gì?",
    "codeSnippet": "#include <stdio.h>\n#define CONCAT(a, b) a ## b\n\nint main(void) {\n    int xy = 100;\n    printf(\"%d\", CONCAT(x, y));\n    return 0;\n}",
    "options": [
        "In ra số 100 (toán tử ## ghép ký tự x và y thành định danh biến xy).",
        "In ra chuỗi ký tự 'xy' trực tiếp lên màn hình mà không cần định dạng.",
        "In ra giá trị tổng x + y của hai biến nếu được khai báo trước đó.",
        "Báo lỗi cú pháp vì toán tử ## không được hỗ trợ trong chuẩn C89."
    ],
    "correct": 0, "mock": False,
    "explanation": "Toán tử ## là toán tử ghép token (Token concatenation) của bộ tiền xử lý, ghép token x và y thành định danh xy, truy xuất giá trị 100.",
    "ref": {"uttPage": "Trang 74", "hcmutePage": "Trang 204", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 16, "subtype": "output", "diff": "hard", "articleId": "c-art-ch1-04",
    "content": "Toán tử chuỗi hóa # trong macro sau cho kết quả hiển thị là gì?",
    "codeSnippet": "#include <stdio.h>\n#define PRINT_STR(x) printf(\"%s\", #x)\n\nint main(void) {\n    PRINT_STR(HCMUTE 2023);\n    return 0;\n}",
    "options": [
        "In ra chuỗi 'HCMUTE 2023' (toán tử # chuyển tham số thành chuỗi ký tự).",
        "Báo lỗi biên dịch vì đối số chứa khoảng trắng không đặt trong ngoặc kép.",
        "In ra giá trị của biến HCMUTE nếu đã được định nghĩa trong chương trình.",
        "Chỉ in ra từ đầu tiên 'HCMUTE' và bỏ qua phần văn bản phía sau dấu cách."
    ],
    "correct": 0, "mock": False,
    "explanation": "Toán tử # là toán tử chuỗi hóa (Stringizing operator), biến token truyền vào thành một chuỗi hằng trong ngoặc kép \"HCMUTE 2023\".",
    "ref": {"uttPage": "Trang 74", "hcmutePage": "Trang 204", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 17, "subtype": "output", "diff": "hard", "articleId": "c-art-ch1-04",
    "content": "Cho đoạn mã sử dụng chỉ thị #undef dưới đây, kết quả in ra là gì?",
    "codeSnippet": "#include <stdio.h>\n#define NUM 50\n\nint main(void) {\n    int a = NUM;\n#undef NUM\n#define NUM 100\n    int b = NUM;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
    "options": [
        "In ra '50 100' (chỉ thị #undef hủy macro cũ để định nghĩa lại macro mới).",
        "In ra '100 100' (macro NUM mới ghi đè lên toàn bộ phạm vi file nguồn).",
        "In ra '50 50' (chỉ thị #undef bị bỏ qua do khai báo bên trong hàm main).",
        "Báo lỗi biên dịch vì macro không được phép định nghĩa lại trong cùng file."
    ],
    "correct": 0, "mock": False,
    "explanation": "#undef hủy định nghĩa của NUM; tại dòng gán biến a, NUM là 50; sau khi định nghĩa lại, NUM tại dòng gán b là 100.",
    "ref": {"uttPage": "Trang 73", "hcmutePage": "Trang 203", "section": "1.2"}
})

# 1.18 - 1.22: Debug (5 câu)
QUESTIONS_CH1.append({
    "num": 18, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch1-04",
    "content": "Đoạn mã sau bị lỗi biên dịch tại dòng nào và do nguyên nhân kỹ thuật gì?",
    "codeSnippet": "1: #include <stdio.h>\n2: #define PI 3.14159;\n3: \n4: int main(void) {\n5:     double s = PI * 2;\n6:     printf(\"%f\", s);\n7:     return 0;\n8: }",
    "options": [
        "Lỗi tại dòng 5 do dấu ';' ở cuối dòng 2 được thay thế vào thành '3.14159; * 2'.",
        "Lỗi tại dòng 2 do chỉ thị tiền xử lý #define không hỗ trợ số thực thập phân.",
        "Lỗi tại dòng 5 do biến s khai báo kiểu double nhưng công thức dùng kiểu float.",
        "Lỗi tại dòng 6 do mã định dạng %f không tương thích với biến kiểu double."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy tiền xử lý kinh điển: dấu ';' sau #define PI 3.14159; biến dòng 5 thành double s = 3.14159; * 2; gây lỗi cú pháp.",
    "ref": {"uttPage": "Trang 69", "hcmutePage": "Trang 198", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 19, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch1-03",
    "content": "Khai báo biến nào dưới đây sẽ gây ra lỗi biên dịch ngay lập tức (Syntax Error)?",
    "codeSnippet": "int _temp = 10;     // (1)\nint default = 20;   // (2)\nint score_1 = 30;   // (3)\nint $val = 40;      // (4)",
    "options": [
        "Khai báo (2) do sử dụng từ khóa 'default' làm tên định danh biến.",
        "Khai báo (1) do tên biến không được phép bắt đầu bằng dấu gạch dưới.",
        "Khai báo (3) do tên biến chứa chữ số ở vị trí ký tự kết thúc danh sách.",
        "Khai báo (4) do dấu $ là ký tự bắt buộc trong các định nghĩa biến toàn cục."
    ],
    "correct": 0, "mock": True,
    "explanation": "'default' là từ khóa dành riêng trong switch-case, không được dùng làm tên định danh biến.",
    "ref": {"uttPage": "Trang 32", "hcmutePage": "Trang 23", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 20, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch1-02",
    "content": "Đoạn chương trình sau đây phát sinh lỗi ở bước nào trong chu trình phát triển?",
    "codeSnippet": "#include <stdio.h>\n\nvoid greet();\n\nint main(void) {\n    greet();\n    return 0;\n}",
    "options": [
        "Lỗi ở bước Liên kết (Linker Error) vì hàm greet() chỉ có prototype mà không có thân.",
        "Lỗi ở bước Tiền xử lý (Preprocessor) vì tệp stdio.h không chứa định nghĩa greet.",
        "Lỗi ở bước Biên dịch (Compiler Error) do gọi hàm trước khi có giá trị trả về.",
        "Chương trình vẫn chạy bình thường và tự động gán thân hàm mặc định rỗng."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trình biên dịch chấp nhận prototype, nhưng khi sang bước Linker, trình liên kết không tìm thấy mã máy thân hàm greet() -> Lỗi 'undefined reference to greet'.",
    "ref": {"uttPage": "Trang 36", "hcmutePage": "Trang 29", "section": "1.1"}
})

QUESTIONS_CH1.append({
    "num": 21, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch1-03",
    "content": "Tên biến nào sau đây không hợp lệ theo chuẩn ANSI C nhưng có thể gây nhầm lẫn?",
    "options": [
        "Tên biến '2nd_player' vì bắt đầu bằng chữ số theo quy tắc định danh.",
        "Tên biến '__count' vì chứa hai dấu gạch dưới liên tiếp ở đầu chuỗi.",
        "Tên biến 'TotalScore' vì sử dụng chữ hoa ở đầu từ theo quy tắc lạc đà.",
        "Tên biến 'max_speed_kmh' vì có độ dài vượt quá 10 ký tự cho phép."
    ],
    "correct": 0, "mock": False,
    "explanation": "Quy tắc định danh C: Tên định danh tuyệt đối không được bắt đầu bằng chữ số (2nd_player vi phạm).",
    "ref": {"uttPage": "Trang 33", "hcmutePage": "Trang 24", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 22, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch1-04",
    "content": "Đoạn mã sau bị lỗi gì khi cố gắng bảo vệ tệp tiêu đề (Header Guards)?",
    "codeSnippet": "#ifndef CONFIG_H\n#define CONFIG_H\n\nint g_setting = 100;\n\n#endif",
    "options": [
        "Định nghĩa biến int g_setting trong header gây lỗi trùng lặp khi include ở nhiều file .c.",
        "Chỉ thị #endif thiếu phần chú thích tên tệp tiêu đề ở vị trí kết thúc khối.",
        "Giá trị khởi tạo 100 không được phép gán trong vùng khai báo của tệp tiêu đề.",
        "Cặp chỉ thị #ifndef và #define bắt buộc phải viết liền nhau trên cùng dòng."
    ],
    "correct": 0, "mock": False,
    "explanation": "Định nghĩa biến (khởi tạo bộ nhớ) trong header sẽ khiến mỗi file .c include nó đều tạo 1 bản sao biến -> Lỗi Linker 'multiple definition of g_setting'. Phải dùng 'extern int g_setting;' trong header.",
    "ref": {"uttPage": "Trang 71", "hcmutePage": "Trang 204", "section": "1.2"}
})

# 1.23 - 1.25: Fill-in (3 câu)
QUESTIONS_CH1.append({
    "num": 23, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch1-04",
    "content": "Điền cặp chỉ thị tiền xử lý còn thiếu vào chỗ trống (...) để bảo vệ tệp header an toàn:",
    "codeSnippet": "... MATH_UTIL_H\n#define MATH_UTIL_H\n\ndouble canBacHai(double x);\n\n#endif",
    "options": [
        "Điền chỉ thị '#ifndef' để kiểm tra xem macro MATH_UTIL_H đã tồn tại hay chưa.",
        "Điền chỉ thị '#ifdef' để kích hoạt khối mã khi macro đã được định nghĩa trước.",
        "Điền chỉ thị '#include' để nạp toàn bộ cấu trúc thư viện vào vùng làm việc.",
        "Điền chỉ thị '#undef' để xóa bỏ các định nghĩa trùng tên có sẵn từ trước."
    ],
    "correct": 0, "mock": True,
    "explanation": "Cú pháp chuẩn của Header Guards: #ifndef HEADER_NAME_H / #define HEADER_NAME_H ... #endif.",
    "ref": {"uttPage": "Trang 71", "hcmutePage": "Trang 204", "section": "1.2"}
})

QUESTIONS_CH1.append({
    "num": 24, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch1-02",
    "content": "Cần điền từ khóa nào vào chỗ trống (...) để khai báo hàm main không nhận bất kỳ đối số nào?",
    "codeSnippet": "#include <stdio.h>\n\nint main(...) {\n    printf(\"Khong co tham so\\n\");\n    return 0;\n}",
    "options": [
        "Điền từ khóa 'void' để thông báo danh sách tham số hoàn toàn rỗng.",
        "Điền từ khóa 'null' để biểu thị đối số con trỏ không chứa địa chỉ.",
        "Điền giá trị '0' để quy định số lượng tham số dòng lệnh bằng không.",
        "Để trống hoàn toàn để trình biên dịch tự động bỏ qua kiểm tra đối số."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C, int main(void) thể hiện tường minh rằng hàm main không nhận bất kỳ tham số nào (khác với int main() trong C cũ có thể nhận số lượng tham số bất kỳ).",
    "ref": {"uttPage": "Trang 26", "hcmutePage": "Trang 20", "section": "1.1"}
})

QUESTIONS_CH1.append({
    "num": 25, "subtype": "fill-in", "diff": "hard", "articleId": "c-art-ch1-04",
    "content": "Điền biểu thức định nghĩa macro an toàn vào chỗ trống (...) để tính giá trị tuyệt đối:",
    "codeSnippet": "#define ABS(x) ...",
    "options": [
        "Điền biểu thức '(((x) < 0) ? -(x) : (x))' có đủ ngoặc bảo vệ.",
        "Điền biểu thức '(x < 0 ? -x : x)' không cần các cặp ngoặc đơn phụ.",
        "Điền biểu thức 'if ((x) < 0) return -(x); else return (x);' có cấu trúc.",
        "Điền biểu thức '((x) * -1)' áp dụng đồng đều cho mọi số nguyên âm dương."
    ],
    "correct": 0, "mock": False,
    "explanation": "Macro hàm bắt buộc phải đóng mở ngoặc đơn quanh từng đối số (x) và quanh toàn bộ biểu thức ba ngôi để tránh lỗi ưu tiên toán tử.",
    "ref": {"uttPage": "Trang 70", "hcmutePage": "Trang 200", "section": "1.2"}
})

print(f"Loaded Chapter 1: {len(QUESTIONS_CH1)} questions")

# --- CHƯƠNG 2 (30 CÂU) ---
# 2.1 - 2.12: Theory (12 câu)
QUESTIONS_CH2.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch2-01",
    "content": "Kích thước bộ nhớ chuẩn của kiểu dữ liệu char trong ngôn ngữ C luôn là bao nhiêu?",
    "options": [
        "Luôn có kích thước chính xác là 1 byte theo định nghĩa chuẩn của ngôn ngữ.",
        "Có kích thước 2 bytes để hỗ trợ bảng mã Unicode 16-bit mở rộng.",
        "Có kích thước 4 bytes trên kiến trúc hệ thống máy tính 32-bit và 64-bit.",
        "Kích thước phụ thuộc hoàn toàn vào cấu hình của từng trình biên dịch cụ thể."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.89 và HCMUTE tr.31: sizeof(char) luôn được ngôn ngữ C định nghĩa bằng 1 byte.",
    "ref": {"uttPage": "Trang 89 - 95", "hcmutePage": "Trang 31 - 36", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 2, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch2-01",
    "content": "Kiểu dữ liệu unsigned char có miền giá trị biểu diễn số nguyên nào sau đây?",
    "options": [
        "Từ 0 đến 255 (biểu diễn toàn bộ 256 trạng thái không âm trong 8 bit).",
        "Từ -128 đến 127 (sử dụng bit dấu theo quy ước bù 2 tiêu chuẩn).",
        "Từ 0 đến 65535 (tương đương với kiểu số nguyên ngắn không dấu).",
        "Từ -256 đến 255 (mở rộng thêm phạm vi số âm cho việc tính toán)."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.91: unsigned char (1 byte = 8 bit không dấu) có miền giá trị từ 0 đến 2^8 - 1 = 255.",
    "ref": {"uttPage": "Trang 89 - 95", "hcmutePage": "Trang 31 - 36", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 3, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch2-01",
    "content": "Toán tử sizeof() trong ngôn ngữ C trả về giá trị có kiểu dữ liệu chuẩn nào?",
    "options": [
        "Kiểu size_t (số nguyên không dấu biểu thị kích thước tính bằng byte).",
        "Kiểu int (số nguyên có dấu thông thường của kiến trúc vi xử lý).",
        "Kiểu long long (số nguyên lớn để tránh bị tràn khi đo bộ nhớ).",
        "Kiểu float (số thực chấm động biểu diễn dung lượng theo megabyte)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.94 và HCMUTE tr.36: sizeof trả về kiểu size_t, là kiểu số nguyên không dấu định nghĩa trong <stddef.h>.",
    "ref": {"uttPage": "Trang 89 - 95", "hcmutePage": "Trang 31 - 36", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 4, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch2-05",
    "content": "Mã định dạng nào trong hàm printf() được dùng để in một số nguyên có kiểu long?",
    "options": [
        "Mã định dạng '%ld' (hoặc '%li' cho số nguyên kiểu long có dấu).",
        "Mã định dạng '%d' (áp dụng mặc định cho tất cả các kiểu số nguyên).",
        "Mã định dạng '%lf' (dành riêng cho các số có độ dài lớn gấp đôi).",
        "Mã định dạng '%lu' (chỉ định số nguyên có dấu với kích thước dài)."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.115: %d dùng cho int, %ld dùng cho long, %lld dùng cho long long, %lf dùng cho double.",
    "ref": {"uttPage": "Trang 114 - 118", "hcmutePage": "Trang 26 - 29", "section": "2.3"}
})

QUESTIONS_CH2.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch2-02",
    "content": "Quy tắc ép kiểu ngầm định (Implicit Type Promotion) trong biểu thức số học của C là gì?",
    "options": [
        "Tự động chuyển đổi toán hạng có kiểu nhỏ hơn lên kiểu dữ liệu lớn hơn.",
        "Tự động làm tròn số thực về số nguyên gần nhất để tăng tốc tính toán.",
        "Luôn ưu tiên chuyển đổi tất cả các toán hạng về kiểu nguyên int mặc định.",
        "Chuyển đổi theo thứ tự từ phải sang trái bất kể kích thước byte của biến."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.97 và HCMUTE tr.38: Khi tính toán biểu thức hỗn hợp, C tự động nâng cấp kiểu nhỏ lên kiểu lớn hơn (char, short -> int -> unsigned -> long -> float -> double).",
    "ref": {"uttPage": "Trang 96 - 100", "hcmutePage": "Trang 37 - 40", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 6, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch2-03",
    "content": "Toán tử tiền tố ++x và hậu tố x++ khác nhau căn bản ở điểm nào?",
    "options": [
        "++x tăng trước rồi lấy giá trị; x++ lấy giá trị cũ rồi mới tăng.",
        "++x chỉ dùng cho biến nguyên, còn x++ dùng được cho cả số thực.",
        "++x thực hiện hai lần phép cộng, còn x++ chỉ cộng duy nhất một lần.",
        "++x có độ ưu tiên thấp hơn x++, còn lại hành vi hoàn toàn giống nhau."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.102 và HCMUTE tr.41: Tiền tố ++x tăng x lên 1 trước rồi mới tính biểu thức; Hậu tố x++ trả về giá trị cũ của x trước khi tăng.",
    "ref": {"uttPage": "Trang 100 - 108", "hcmutePage": "Trang 41 - 44", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 7, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch2-03",
    "content": "Hiện tượng đoản mạch logic (Short-circuit Evaluation) xảy ra trong trường hợp nào?",
    "options": [
        "Toán tử && bỏ qua vế phải nếu vế trái sai; || bỏ qua nếu vế trái đúng.",
        "Toán tử số học bị tràn bộ nhớ dẫn đến ngắt mạch thực thi của CPU.",
        "Biểu thức logic chứa quá nhiều dấu ngoặc đơn gây lỗi biên dịch cú pháp.",
        "Các biến số bị gán nhầm địa chỉ con trỏ vào ô nhớ của thanh ghi điều khiển."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.105 và HCMUTE tr.42: Trong A && B, nếu A = 0 thì B không được chạy; trong A || B, nếu A != 0 thì B không được chạy.",
    "ref": {"uttPage": "Trang 100 - 108", "hcmutePage": "Trang 41 - 44", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 8, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch2-04",
    "content": "Toán tử thao tác bit XOR (ký hiệu '^') có bảng chân trị hoạt động như thế nào?",
    "options": [
        "Trả về 1 khi hai bit khác nhau; trả về 0 khi hai bit giống nhau.",
        "Trả về 1 khi cả hai bit cùng bằng 1; các trường hợp khác trả về 0.",
        "Trả về 1 khi có ít nhất một bit bằng 1; chỉ trả về 0 khi cả hai bit là 0.",
        "Đảo ngược toàn bộ các bit từ 0 sang 1 và từ 1 sang 0 của một số nguyên."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.109 và HCMUTE tr.44: Toán tử XOR (Exclusive OR) trả về 1 nếu hai bit khác nhau (0 ^ 1 = 1, 1 ^ 0 = 1) và trả về 0 nếu giống nhau (0 ^ 0 = 0, 1 ^ 1 = 0).",
    "ref": {"uttPage": "Trang 108 - 114", "hcmutePage": "Trang 43 - 46", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 9, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch2-04",
    "content": "Phép dịch bit sang trái (x << n) đối với số nguyên dương tương đương với phép toán nào?",
    "options": [
        "Tương đương với phép nhân số nguyên x với lũy thừa 2 mũ n (x * 2^n).",
        "Tương đương với phép chia lấy phần nguyên của số x cho 2 mũ n.",
        "Tương đương với phép cộng dồn giá trị n vào biến x liên tiếp n lần.",
        "Tương đương với phép tính số dư của x khi chia cho lũy thừa 2 mũ n."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.111 và HCMUTE tr.45: Dịch trái n bit tương đương nhân với 2^n; dịch phải n bit tương đương chia nguyên cho 2^n.",
    "ref": {"uttPage": "Trang 108 - 114", "hcmutePage": "Trang 43 - 46", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 10, "subtype": "theory", "diff": "hard", "articleId": "c-art-ch2-01",
    "content": "Biểu diễn số âm trong bộ nhớ máy tính của ngôn ngữ C hầu hết sử dụng phương pháp nào?",
    "options": [
        "Phương pháp mã bù 2 (Two's Complement: đảo bit rồi cộng thêm 1).",
        "Phương pháp mã bù 1 (One's Complement: chỉ đảo bit giữ nguyên dấu).",
        "Phương pháp dấu lượng (Sign-Magnitude: dùng bit đầu làm dấu âm dương).",
        "Phương pháp độ dời thiên vị số mũ (Excess/Biased Notation của chuẩn IEEE)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.92 và HCMUTE tr.34: Hầu hết phần cứng hiện đại và trình biên dịch C biểu diễn số nguyên có dấu theo phương pháp bù 2 (Two's Complement).",
    "ref": {"uttPage": "Trang 89 - 95", "hcmutePage": "Trang 31 - 36", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 11, "subtype": "theory", "diff": "hard", "articleId": "c-art-ch2-06",
    "content": "Tại sao việc sử dụng lệnh fflush(stdin) để xóa bộ nhớ đệm bàn phím bị coi là xấu trong C chuẩn?",
    "options": [
        "Vì chuẩn ANSI C quy định fflush chỉ áp dụng cho luồng xuất (Output Stream).",
        "Vì lệnh fflush(stdin) làm chậm tốc độ xử lý do phải truy cập đĩa cứng.",
        "Vì lệnh này bắt buộc phải nạp thêm thư viện conio.h không có sẵn ở Linux.",
        "Vì fflush sẽ xóa sạch toàn bộ các biến số nguyên đã nhập trước đó trong RAM."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.120: Chuẩn ANSI C quy định fflush() chỉ định nghĩa cho output stream; áp dụng trên stdin là Undefined Behavior (hành vi không xác định).",
    "ref": {"uttPage": "Trang 118 - 124", "hcmutePage": "Trang 29 - 31", "section": "2.3"}
})

QUESTIONS_CH2.append({
    "num": 12, "subtype": "theory", "diff": "hard", "articleId": "c-art-ch2-05",
    "content": "Mã định dạng '%p' trong hàm printf() được sử dụng để hiển thị thông tin gì?",
    "options": [
        "Hiển thị địa chỉ ô nhớ của con trỏ dưới dạng hệ cơ số 16 (Hexadecimal).",
        "Hiển thị tỷ lệ phần trăm tiến độ xử lý tác vụ của chương trình.",
        "Hiển thị giá trị số thực có độ chính xác kép ở dạng ký hiệu khoa học.",
        "Hiển thị số hiệu định danh luồng (Process ID) đang chạy trong hệ thống."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.115: %p in giá trị con trỏ (địa chỉ bộ nhớ) dưới dạng hex (thường có tiền tố 0x).",
    "ref": {"uttPage": "Trang 114 - 118", "hcmutePage": "Trang 26 - 29", "section": "2.3"}
})

# 2.13 - 2.21: Output & Trace (9 câu)
QUESTIONS_CH2.append({
    "num": 13, "subtype": "output", "diff": "easy", "articleId": "c-art-ch2-02",
    "content": "Kết quả hiển thị trên màn hình của đoạn mã sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    float x = 5 / 2;\n    printf(\"%.1f\", x);\n    return 0;\n}",
    "options": [
        "In ra '2.0' (do phép chia nguyên 5 / 2 được tính trước rồi mới ép kiểu).",
        "In ra '2.5' (do biến x khai báo kiểu float nên C tự chia số thực).",
        "In ra '2' (do phép chia nguyên bỏ qua phần thập phân hoàn toàn).",
        "Chương trình báo lỗi biên dịch do gán số nguyên cho biến kiểu float."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy chia nguyên: 5 / 2 = 2. Gán 2 vào float x được 2.0f; in với %.1f cho ra 2.0.",
    "ref": {"uttPage": "Trang 98", "hcmutePage": "Trang 39", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 14, "subtype": "output", "diff": "easy", "articleId": "c-art-ch2-03",
    "content": "Giá trị của hai biến a và b sau khi thực thi đoạn mã sau là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a = 5;\n    int b = a++;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
    "options": [
        "Giá trị in ra là '6 5' (toán tử hậu tố gán giá trị cũ cho b rồi mới tăng a).",
        "Giá trị in ra là '6 6' (toán tử tăng thực hiện trước rồi gán giá trị mới cho b).",
        "Giá trị in ra là '5 5' (biến a không bị thay đổi do phép gán được ưu tiên).",
        "Giá trị in ra là '5 6' (biến b nhận giá trị tăng trước còn a giữ nguyên)."
    ],
    "correct": 0, "mock": True,
    "explanation": "b = a++: b nhận giá trị ban đầu là 5, sau đó a mới tăng lên 6 -> In: 6 5.",
    "ref": {"uttPage": "Trang 102", "hcmutePage": "Trang 41", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch2-03",
    "content": "Giá trị của biến x được in ra sau khi thực thi biểu thức đoản mạch sau là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    int y = 0;\n    if (y && ++x) {}\n    printf(\"%d\", x);\n    return 0;\n}",
    "options": [
        "In ra 10 (do y bằng 0 nên biểu thức đoản mạch bỏ qua phép toán ++x).",
        "In ra 11 (do toán tử tiền tố ++x luôn được thực thi trước phép logic).",
        "In ra 0 (do kết quả của toàn bộ biểu thức logic được gán vào biến x).",
        "Chương trình báo lỗi vì điều kiện if không có phần thân lệnh xử lý."
    ],
    "correct": 0, "mock": True,
    "explanation": "Trong A && B: vì y = 0 (sai), vế phải ++x bị đoản mạch bỏ qua hoàn toàn -> x vẫn giữ nguyên 10.",
    "ref": {"uttPage": "Trang 105", "hcmutePage": "Trang 42", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 16, "subtype": "output", "diff": "medium", "articleId": "c-art-ch2-04",
    "content": "Giá trị của biểu thức thao tác bit sau khi thực thi là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a = 6;  // 00000110\n    int b = 3;  // 00000011\n    printf(\"%d\", a ^ b);\n    return 0;\n}",
    "options": [
        "In ra số 5 (kết quả phép XOR bit: 0110 ^ 0011 = 0101 nhị phân).",
        "In ra số 2 (kết quả của phép AND bit giữa hai số nguyên).",
        "In ra số 7 (kết quả của phép OR bit giữa hai số nguyên).",
        "In ra số 9 (kết quả của phép cộng thông thường hai số)."
    ],
    "correct": 0, "mock": False,
    "explanation": "6 nhị phân là 0110, 3 là 0011. XOR từng cặp bit: 0^0=0, 1^0=1, 1^1=0, 0^1=1 -> 0101 (bằng 5 thập phân).",
    "ref": {"uttPage": "Trang 109", "hcmutePage": "Trang 44", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 17, "subtype": "output", "diff": "medium", "articleId": "c-art-ch2-04",
    "content": "Kết quả in ra của phép dịch bit trong đoạn mã sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int x = 5;\n    printf(\"%d\", (x << 2) + (x >> 1));\n    return 0;\n}",
    "options": [
        "In ra kết quả là số 22 (do x << 2 cho 20 và x >> 1 cho giá trị 2).",
        "In ra kết quả là số 25 (tương đương biểu thức số học 5 * 4 + 5 / 1).",
        "In ra kết quả là số 12 (do phép dịch bit ưu tiên thấp hơn cộng số).",
        "In ra kết quả là số 10 (do phép dịch phải loại bỏ các bit trọng số)."
    ],
    "correct": 0, "mock": False,
    "explanation": "5 << 2 = 5 * 4 = 20. 5 >> 1 = 5 / 2 = 2. Tổng 20 + 2 = 22.",
    "ref": {"uttPage": "Trang 111", "hcmutePage": "Trang 45", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 18, "subtype": "output", "diff": "medium", "articleId": "c-art-ch2-05",
    "content": "Định dạng in chuỗi với căn lề sau đây hiển thị kết quả như thế nào?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    printf(\"|%-6s|%6d|\", \"C\", 42);\n    return 0;\n}",
    "options": [
        "In ra '|C     |    42|' (chuỗi căn trái 6 ký tự, số căn phải 6 ký tự).",
        "In ra '|     C|42    |' (chuỗi căn phải 6 ký tự, số căn trái 6 ký tự).",
        "In ra '|C-6   |42    |' (in kèm dấu gạch ngang của mã định dạng).",
        "In ra '|C|42|' (bỏ qua khoảng trắng vì độ dài chuỗi không vượt quá 6)."
    ],
    "correct": 0, "mock": False,
    "explanation": "%-6s căn lề trái trên 6 cột ('C     '); %6d căn lề phải trên 6 cột ('    42').",
    "ref": {"uttPage": "Trang 116", "hcmutePage": "Trang 28", "section": "2.3"}
})

QUESTIONS_CH2.append({
    "num": 19, "subtype": "output", "diff": "hard", "articleId": "c-art-ch2-03",
    "content": "Giá trị của biểu thức điều kiện ba ngôi lồng nhau sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a = 3, b = 5, c = 2;\n    int res = (a > b) ? a : (b > c ? b : c);\n    printf(\"%d\", res);\n    return 0;\n}",
    "options": [
        "In ra số 5 (nhánh ngoài sai nên thực thi nhánh trong và lấy b = 5).",
        "In ra số 3 (lấy giá trị của biến a do phép so sánh đầu tiên).",
        "In ra số 2 (lấy giá trị của biến c sau khi duyệt qua toàn bộ điều kiện).",
        "Báo lỗi cú pháp vì toán tử ba ngôi không cho phép lồng ghép nhiều cấp."
    ],
    "correct": 0, "mock": False,
    "explanation": "a > b (3 > 5) là false, nhảy sang vế false là (b > c ? b : c). 5 > 2 là true -> trả về b = 5.",
    "ref": {"uttPage": "Trang 113", "hcmutePage": "Trang 43", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 20, "subtype": "output", "diff": "hard", "articleId": "c-art-ch2-01",
    "content": "Hiện tượng tràn số nguyên không dấu (Unsigned Overflow) sau cho kết quả gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    unsigned char c = 255;\n    c = c + 2;\n    printf(\"%u\", c);\n    return 0;\n}",
    "options": [
        "In ra số 1 (do tràn số nguyên không dấu quay vòng modulo 256).",
        "In ra số 257 (do kiểu unsigned tự động mở rộng dung lượng lên 16-bit).",
        "In ra số -1 (do bit dấu bị bật thành số âm theo quy ước bù 2).",
        "Chương trình bị sập ngay lập tức với mã lỗi Arithmetic Overflow Exception."
    ],
    "correct": 0, "mock": False,
    "explanation": "unsigned char có miền 0 đến 255 (modulo 256). 255 + 2 = 257 % 256 = 1.",
    "ref": {"uttPage": "Trang 93", "hcmutePage": "Trang 35", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 21, "subtype": "output", "diff": "hard", "articleId": "c-art-ch2-03",
    "content": "Kết quả in ra màn hình của đoạn mã sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a = 1, b = 2;\n    int c = a++ + ++b;\n    printf(\"%d %d %d\", a, b, c);\n    return 0;\n}",
    "options": [
        "In ra '2 3 4' (a lấy 1 tăng lên 2; b tăng lên 3; c = 1 + 3 = 4).",
        "In ra '2 3 5' (cả hai biến đều được tăng trước khi cộng dồn).",
        "In ra '1 3 4' (biến a chỉ tăng sau khi toàn bộ hàm main kết thúc).",
        "In ra '2 2 3' (toán tử hậu tố ghi đè lên kết quả của toán tử tiền tố)."
    ],
    "correct": 0, "mock": False,
    "explanation": "a++ trả về 1 (sau đó a thành 2); ++b tăng b lên 3 rồi trả về 3 -> c = 1 + 3 = 4. Cuối cùng a=2, b=3, c=4.",
    "ref": {"uttPage": "Trang 102", "hcmutePage": "Trang 41", "section": "2.2"}
})

# 2.22 - 2.27: Debug (6 câu)
QUESTIONS_CH2.append({
    "num": 22, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch2-06",
    "content": "Lệnh nhập dữ liệu sau đây phát sinh lỗi nghiêm trọng nào khi thực thi?",
    "codeSnippet": "int n;\nscanf(\"%d\", n);",
    "options": [
        "Lỗi thiếu toán tử địa chỉ '&n' dẫn đến ghi dữ liệu vào ô nhớ rác gây crash.",
        "Lỗi sai mã định dạng vì số nguyên int bắt buộc phải nhập bằng '%i'.",
        "Lỗi biến n chưa được khởi tạo giá trị ban đầu trước khi gọi lệnh scanf.",
        "Lệnh scanf không hỗ trợ đọc trực tiếp vào biến số nguyên đơn lẻ."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy scanf kinh điển: scanf đòi hỏi địa chỉ của biến (&n). Truyền n (chứa rác) sẽ ghi đè ô nhớ rác gây crash (Segfault).",
    "ref": {"uttPage": "Trang 118", "hcmutePage": "Trang 29", "section": "2.3"}
})

QUESTIONS_CH2.append({
    "num": 23, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch2-06",
    "content": "Đoạn mã sau bị lỗi trôi lệnh không nhập được ký tự ch. Nguyên nhân là gì?",
    "codeSnippet": "int age;\nchar ch;\nscanf(\"%d\", &age);\nscanf(\"%c\", &ch);",
    "options": [
        "Do phím Enter sau khi nhập age để lại '\\n' trong stdin và scanf(\"%c\") đọc ngay ký tự đó.",
        "Do hàm scanf không cho phép gọi hai lần liên tiếp trong cùng một khối hàm main.",
        "Do biến age khai báo kiểu int xung đột với bảng mã ASCII của biến ký tự ch.",
        "Do thiếu thư viện conio.h để kích hoạt chức năng nhận tín hiệu bàn phím."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy trôi lệnh: Phím Enter để lại '\\n' trong stdin; scanf(\"%c\") nhận ngay '\\n' và kết thúc. Sửa bằng scanf(\" %c\", &ch).",
    "ref": {"uttPage": "Trang 120", "hcmutePage": "Trang 30", "section": "2.3"}
})

QUESTIONS_CH2.append({
    "num": 24, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch2-05",
    "content": "Đoạn mã sau phát sinh lỗi gì khi cố gắng in số thực có độ chính xác kép?",
    "codeSnippet": "double d = 3.1415926535;\nprintf(\"%f\", d);",
    "options": [
        "Mã nguồn hợp lệ trong C vì printf tự thăng cấp float lên double theo quy ước biến đối.",
        "Lỗi biên dịch vì biến kiểu double bắt buộc phải in bằng mã định dạng '%lf'.",
        "Lỗi runtime do kích thước 8 bytes của double làm tràn vùng nhớ đệm in của %f.",
        "Giá trị in ra bị sai lệch do số thực double bị ép kiểu ngược về số nguyên."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong printf, tham số kiểu float tự động được thăng cấp ngầm định lên double (Default argument promotion), nên dùng %f để in double là hoàn toàn hợp lệ.",
    "ref": {"uttPage": "Trang 115", "hcmutePage": "Trang 27", "section": "2.3"}
})

QUESTIONS_CH2.append({
    "num": 25, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch2-02",
    "content": "Đoạn mã sau bị lỗi chia cho 0 tiềm ẩn (Division by Zero) ở trường hợp nào?",
    "codeSnippet": "int a = 10, b = 0;\nint c = (b != 0) ? (a / b) : 0;",
    "options": [
        "Không bao giờ bị chia cho 0 do toán tử ba ngôi chỉ thực thi nhánh hợp lệ.",
        "Luôn luôn bị lỗi chia cho 0 vì trình biên dịch tính toán cả hai nhánh cùng lúc.",
        "Bị lỗi chia cho 0 khi tối ưu hóa mã nguồn với cờ biên dịch tối đa -O3.",
        "Bị lỗi biên dịch cú pháp do phép chia số nguyên cho biến chưa xác định."
    ],
    "correct": 0, "mock": False,
    "explanation": "Toán tử ba ngôi chỉ tính toán nhánh được chọn (nếu điều kiện sai thì chỉ tính nhánh false). b != 0 là sai -> chỉ lấy 0, không chạy a / b.",
    "ref": {"uttPage": "Trang 113", "hcmutePage": "Trang 43", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 26, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch2-03",
    "content": "Biểu thức gán phức hợp sau bị cảnh báo hành vi không xác định (Undefined Behavior) vì sao?",
    "codeSnippet": "int i = 5;\ni = ++i + i++;",
    "options": [
        "Sửa đổi giá trị biến i nhiều lần giữa hai điểm tuần tự (Sequence Points).",
        "Toán tử tiền tố và hậu tố không được phép xuất hiện trong cùng một biểu thức.",
        "Biến i không thể vừa làm toán hạng vừa làm đích của phép gán trong cùng dòng.",
        "Trình biên dịch không xác định được kiểu dữ liệu trả về của phép cộng dồn."
    ],
    "correct": 0, "mock": False,
    "explanation": "Theo chuẩn C, việc sửa đổi cùng một biến nhiều hơn 1 lần giữa hai Sequence Points là Undefined Behavior (kết quả tùy thuộc trình biên dịch).",
    "ref": {"uttPage": "Trang 103", "hcmutePage": "Trang 41", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 27, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch2-04",
    "content": "Lỗi logic trong việc kiểm tra số chẵn lẻ bằng toán tử bit sau là gì?",
    "codeSnippet": "if (x & 1 == 0) {\n    printf(\"So chan\");\n}",
    "options": [
        "Toán tử '==' có độ ưu tiên cao hơn '&' nên biểu thức bị tính thành 'x & (1 == 0)'.",
        "Toán tử & không thể áp dụng cho việc kiểm tra số chẵn lẻ trong ngôn ngữ C.",
        "Giá trị x & 1 luôn trả về 1 đối với tất cả các số nguyên âm trong máy tính.",
        "Biểu thức thiếu dấu chấm phẩy ở sau điều kiện so sánh bằng của lệnh if."
    ],
    "correct": 0, "mock": False,
    "explanation": "Độ ưu tiên toán tử: == có độ ưu tiên cao hơn &. x & 1 == 0 tương đương x & (1 == 0) -> x & 0 = 0 (luôn false). Phải viết: (x & 1) == 0.",
    "ref": {"uttPage": "Trang 110", "hcmutePage": "Trang 44", "section": "2.2"}
})

# 2.28 - 2.30: Fill-in (3 câu)
QUESTIONS_CH2.append({
    "num": 28, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch2-02",
    "content": "Cần điền đoạn mã ép kiểu nào vào chỗ trống (...) để biến res nhận giá trị chính xác 2.5?",
    "codeSnippet": "int a = 5, b = 2;\nfloat res = ... a / b;",
    "options": [
        "Điền '(float)' để ép kiểu số nguyên a sang số thực trước khi thực hiện phép chia.",
        "Điền '(int)' để giữ nguyên kiểu dữ liệu của biến a trong quá trình tính toán.",
        "Điền '(double*)' để chuyển địa chỉ ô nhớ sang con trỏ số thực có độ dài lớn.",
        "Điền '(char)' để giảm kích thước lưu trữ của biến trước khi chia số nguyên."
    ],
    "correct": 0, "mock": True,
    "explanation": "Ép kiểu tường minh (float)a / b: a trở thành 5.0f, phép chia thực hiện trên số thực cho kết quả 2.5f.",
    "ref": {"uttPage": "Trang 98", "hcmutePage": "Trang 39", "section": "2.1"}
})

QUESTIONS_CH2.append({
    "num": 29, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch2-04",
    "content": "Cần điền toán tử bit nào vào chỗ trống (...) để bật (set) bit thứ k của biến x lên 1?",
    "codeSnippet": "x = x ... (1 << k);",
    "options": [
        "Điền toán tử '|' (hoặc '|=') để thực hiện bật bit bằng phép toán OR nhị phân.",
        "Điền toán tử '&' (hoặc '&=') để chỉ giữ lại các bit có giá trị bằng 1 trước đó.",
        "Điền toán tử '^' (hoặc '^=') để đảo trạng thái của bit từ 1 sang 0 liên tục.",
        "Điền toán tử '~' (hoặc '~=') để phủ định toàn bộ các bit nằm trong mặt nạ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Kỹ thuật mặt nạ bit: Bật bit thứ k dùng x |= (1 << k); Tắt bit thứ k dùng x &= ~(1 << k); Đảo bit dùng x ^= (1 << k).",
    "ref": {"uttPage": "Trang 110", "hcmutePage": "Trang 45", "section": "2.2"}
})

QUESTIONS_CH2.append({
    "num": 30, "subtype": "fill-in", "diff": "hard", "articleId": "c-art-ch2-06",
    "content": "Cần điền định dạng nào vào chỗ trống (...) trong scanf để đọc một chuỗi có khoảng trắng an toàn?",
    "codeSnippet": "char hoten[50];\nscanf(\"...\", hoten);",
    "options": [
        "Điền '%49[^\\n]' để đọc tối đa 49 ký tự cho đến khi gặp ký tự xuống dòng '\\n'.",
        "Điền '%s' để tự động đọc toàn bộ dòng văn bản có chứa các dấu cách trắng.",
        "Điền '%*s' để bỏ qua các từ đầu tiên và chỉ lưu lại phần họ tên cuối cùng.",
        "Điền '%50c' để đọc chính xác 50 ký tự bất kể người dùng có nhấn phím Enter."
    ],
    "correct": 0, "mock": False,
    "explanation": "%49[^\n] là kỹ thuật scanset trong scanf: đọc tối đa 49 ký tự cho đến khi gặp phím Enter (\n), chừa 1 byte cho '\0'.",
    "ref": {"uttPage": "Trang 119", "hcmutePage": "Trang 30", "section": "2.3"}
})

print(f"Loaded Chapter 2: {len(QUESTIONS_CH2)} questions")

QUESTIONS_CH3 = []


# ==========================================
# 1. THEORY (14 câu: Q1 -> Q14)
# ==========================================

# Q1 (Mock)
QUESTIONS_CH3.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-01",
    "content": "Trong ngôn ngữ C, một biểu thức điều kiện trong cấu trúc if được xem là ĐÚNG (true) khi nào?",
    "options": [
        "Khi biểu thức đó lượng giá ra một giá trị số học khác không (khác 0).",
        "Khi biểu thức đó bắt buộc phải có giá trị số học nguyên dương lớn hơn 0.",
        "Khi biểu thức đó phải trả về một hằng số đúng kiểu boolean chuẩn logic.",
        "Khi biểu thức đó có kết quả đúng bằng giá trị 1 và không nhận giá trị âm."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.126 và HCMUTE tr.47: Trong C chuẩn, không có kiểu boolean nguyên thủy (trước C99); mọi giá trị khác 0 (kể cả số âm) đều được xem là true, chỉ duy nhất giá trị 0 là false.",
    "ref": {"uttPage": "Trang 126", "hcmutePage": "Trang 47", "section": "3.1"}
})

# Q2
QUESTIONS_CH3.append({
    "num": 2, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-01",
    "content": "Quy tắc kết hợp mệnh đề else trong cấu trúc if lồng nhau (Dangling else) được quy định như thế nào?",
    "options": [
        "Mệnh đề else luôn được tự động ghép nối với câu lệnh if chưa có else gần nhất đứng trước nó.",
        "Mệnh đề else luôn được ghép nối với câu lệnh if đầu tiên của toàn bộ khối lệnh đang thực thi.",
        "Mệnh đề else sẽ ghép nối ngẫu nhiên tùy thuộc vào mức độ thụt đầu dòng của lập trình viên.",
        "Trình biên dịch sẽ báo lỗi cú pháp mơ hồ nếu không có các dấu ngoặc nhọn bao quanh từng if."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.131 và HCMUTE tr.52: Trong C, mệnh đề else luôn tự động kết hợp với if gần nhất chưa có else trước đó, trừ khi được nhóm lại bằng dấu ngoặc nhọn {}.",
    "ref": {"uttPage": "Trang 131", "hcmutePage": "Trang 52", "section": "3.1"}
})

# Q3
QUESTIONS_CH3.append({
    "num": 3, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-01",
    "content": "Toán tử điều kiện ba ngôi (Ternary operator '? :') trong ngôn ngữ C có đặc điểm quan trọng nào?",
    "options": [
        "Là một biểu thức có giá trị trả về nên có thể dùng trực tiếp bên trong phép gán biến.",
        "Là một câu lệnh điều khiển luồng thuần túy và hoàn toàn không trả lại bất kỳ giá trị nào.",
        "Bắt buộc cả hai nhánh kết quả phải có cùng kiểu dữ liệu void và không được gán cho biến.",
        "Chỉ có thể áp dụng cho các kiểu dữ liệu số nguyên và không thể dùng cho kiểu số thực."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.134 và HCMUTE tr.55: Toán tử ? : tạo ra một biểu thức có giá trị, cho phép gán trực tiếp: x = (a > b) ? a : b;",
    "ref": {"uttPage": "Trang 134", "hcmutePage": "Trang 55", "section": "3.1"}
})

# Q4 (Mock)
QUESTIONS_CH3.append({
    "num": 4, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-02",
    "content": "Biểu thức điều khiển trong cấu trúc switch(expr) trong ngôn ngữ C bắt buộc phải có kiểu dữ liệu gì?",
    "options": [
        "Phải có kiểu dữ liệu số nguyên (char, short, int, long hoặc enum liệt kê).",
        "Có thể thuộc bất kỳ kiểu số nào bao gồm cả kiểu số thực dấu phẩy động float.",
        "Bắt buộc phải là kiểu chuỗi ký tự dạng con trỏ char* hoặc mảng các ký tự.",
        "Chỉ chấp nhận duy nhất kiểu dữ liệu số nguyên int có dấu 4 bytes tiêu chuẩn."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.140 và HCMUTE tr.59: switch chỉ nhận kiểu dữ liệu nguyên (hoặc kiểu chuyển đổi về nguyên được như char, enum). Không thể dùng float, double, struct hay string.",
    "ref": {"uttPage": "Trang 140", "hcmutePage": "Trang 59", "section": "3.2"}
})

# Q5
QUESTIONS_CH3.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-02",
    "content": "Giá trị của nhãn case trong cấu trúc switch-case trong ngôn ngữ lập trình C phải tuân thủ điều kiện gì?",
    "options": [
        "Bắt buộc phải là một hằng số nguyên hoặc biểu thức hằng tính toán được khi biên dịch.",
        "Có thể là một biến số nguyên có giá trị được nhập từ bàn phím khi chương trình chạy.",
        "Có thể là một biểu thức so sánh logic chứa các toán tử quan hệ lớn hơn hoặc nhỏ hơn.",
        "Có thể là một chuỗi ký tự bất kỳ được đặt trong cặp dấu ngoặc kép để so khớp chuỗi."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.141 và HCMUTE tr.60: Nhãn case phải là một biểu thức hằng nguyên (constant integral expression), không được chứa biến hoặc điều kiện quan hệ.",
    "ref": {"uttPage": "Trang 141", "hcmutePage": "Trang 60", "section": "3.2"}
})

# Q6
QUESTIONS_CH3.append({
    "num": 6, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-02",
    "content": "Hiện tượng trôi nhánh (Fall-through) trong cấu trúc switch xảy ra khi lập trình viên thực hiện điều gì?",
    "options": [
        "Bỏ qua câu lệnh break ở cuối mỗi khối case khiến luồng chạy tiếp tục thực thi case liền kề.",
        "Quên khai báo nhãn default dẫn đến trình biên dịch bỏ qua toàn bộ khối switch khi thực thi.",
        "Khai báo hai nhãn case có giá trị hằng số hoàn toàn trùng lặp nhau trong cùng cấu trúc.",
        "Sử dụng biểu thức điều khiển có giá trị nằm ngoài phạm vi giá trị của tất cả các nhãn case."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.143 và HCMUTE tr.62: Nếu một case không có lệnh break, CPU sẽ tự động rơi (fall-through) xuống thực hiện tiếp các câu lệnh của case bên dưới mà không kiểm tra điều kiện.",
    "ref": {"uttPage": "Trang 143", "hcmutePage": "Trang 62", "section": "3.2"}
})

# Q7
QUESTIONS_CH3.append({
    "num": 7, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-02",
    "content": "Nhãn default trong cấu trúc switch-case có vị trí và vai trò như thế nào trong chương trình C?",
    "options": [
        "Thực thi khi không có case nào khớp và có thể đặt ở bất kỳ vị trí nào trong khối lệnh switch.",
        "Bắt buộc phải luôn được đặt ở dòng đầu tiên của khối lệnh switch trước tất cả các nhãn case.",
        "Chỉ được thực thi khi biểu thức điều khiển switch có giá trị tính toán ra đúng bằng số 0.",
        "Là một thành phần bắt buộc phải có, nếu thiếu trình biên dịch sẽ báo lỗi không thực thi."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.144 và HCMUTE tr.63: Nhãn default là tùy chọn, kích hoạt khi không có case nào khớp, và có thể đặt ở đầu, giữa hoặc cuối khối switch (thường đặt ở cuối).",
    "ref": {"uttPage": "Trang 144", "hcmutePage": "Trang 63", "section": "3.2"}
})

# Q8
QUESTIONS_CH3.append({
    "num": 8, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-03",
    "content": "Trong vòng lặp for(khoi_tao; dieu_kien; buoc_nhay), thành phần khoi_tao được thực hiện bao nhiêu lần?",
    "options": [
        "Chỉ được thực thi đúng một lần duy nhất trước khi vòng lặp bắt đầu kiểm tra điều kiện lặp.",
        "Được thực thi lại ở đầu mỗi lần lặp trước khi thân vòng lặp bắt đầu nhận quyền thực thi.",
        "Được thực thi ở cuối mỗi lần lặp sau khi các câu lệnh trong thân vòng lặp hoàn thành xong.",
        "Được thực thi hai lần: một lần khi khởi tạo chương trình và một lần khi vòng lặp dừng lại."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.150 và HCMUTE tr.72: Biểu thức khởi tạo trong vòng lặp for chỉ chạy đúng 1 lần duy nhất ngay trước khi bắt đầu kiểm tra điều kiện.",
    "ref": {"uttPage": "Trang 150", "hcmutePage": "Trang 72", "section": "3.3"}
})

# Q9
QUESTIONS_CH3.append({
    "num": 9, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-03",
    "content": "Khi bỏ trống thành phần điều kiện trong vòng lặp for: for(init; ; step), điều gì sẽ xảy ra?",
    "options": [
        "Trình biên dịch tự động xem điều kiện luôn đúng (true) và tạo ra một vòng lặp vô tận.",
        "Trình biên dịch sẽ báo lỗi cú pháp biên dịch do thiếu biểu thức logic kiểm tra điều kiện.",
        "Vòng lặp sẽ tự động dừng lại ngay lập tức mà không thực hiện thân vòng lặp bất kỳ lần nào.",
        "Trình biên dịch sẽ mặc định điều kiện lặp là biến đếm bước nhảy phải có giá trị lớn hơn 0."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.153 và HCMUTE tr.75: Khi khuyết biểu thức điều kiện trong for, C mặc định nó mang giá trị 1 (luôn đúng), biến thành vòng lặp vô tận trừ khi có break.",
    "ref": {"uttPage": "Trang 153", "hcmutePage": "Trang 75", "section": "3.3"}
})

# Q10 (Mock)
QUESTIONS_CH3.append({
    "num": 10, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-04",
    "content": "Điểm khác biệt cốt lõi nhất giữa vòng lặp while và vòng lặp do-while trong ngôn ngữ C là gì?",
    "options": [
        "Vòng lặp do-while luôn thực hiện thân lặp ít nhất một lần còn while có thể không thực hiện lần nào.",
        "Vòng lặp while cho phép duyệt mảng an toàn hơn vòng lặp do-while khi xử lý chuỗi ký tự bộ nhớ.",
        "Vòng lặp do-while chỉ sử dụng được với các số nguyên còn vòng lặp while dùng được cho số thực.",
        "Vòng lặp while có tốc độ thực thi chỉ lệnh máy tính nhanh hơn do-while trên mọi kiến trúc CPU."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.160 và HCMUTE tr.78: while kiểm tra điều kiện trước (tiền kiểm tra), nếu sai ngay từ đầu thân lặp chạy 0 lần. do-while kiểm tra sau, thân lặp luôn chạy ít nhất 1 lần.",
    "ref": {"uttPage": "Trang 160", "hcmutePage": "Trang 78", "section": "3.4"}
})

# Q11
QUESTIONS_CH3.append({
    "num": 11, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-05",
    "content": "Quy tắc cú pháp nào sau đây là BẮT BUỘC khi kết thúc một cấu trúc vòng lặp do-while trong C?",
    "options": [
        "Phải có một dấu chấm phẩy ';' ngay sau biểu thức điều kiện đóng ngoặc while(condition);.",
        "Không được phép đặt dấu chấm phẩy ';' sau while(condition) vì sẽ gây ra vòng lặp vô tận.",
        "Phải có từ khóa enddo hoặc endwhile đặt ngay sau ngoặc nhọn đóng của khối thân vòng lặp.",
        "Phải có ít nhất một lệnh return hoặc break đặt bên trong thân vòng lặp để tránh treo máy."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.165 và HCMUTE tr.81: Cú pháp chuẩn của do-while là do { ... } while (condition); - bắt buộc phải có dấu chấm phẩy ';' sau biểu thức while.",
    "ref": {"uttPage": "Trang 165", "hcmutePage": "Trang 81", "section": "3.5"}
})

# Q12
QUESTIONS_CH3.append({
    "num": 12, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-06",
    "content": "Câu lệnh break có phạm vi tác động như thế nào khi được đặt bên trong các vòng lặp lồng nhau?",
    "options": [
        "Chỉ chấm dứt và thoát ra khỏi vòng lặp hoặc cấu trúc switch trực tiếp chứa nó ở trong cùng.",
        "Ngay lập tức thoát ra khỏi tất cả các vòng lặp đang lồng nhau và trả quyền điều khiển về main.",
        "Chỉ bỏ qua các câu lệnh còn lại trong lượt lặp hiện tại và nhảy tới lượt lặp tiếp theo của nó.",
        "Tạm dừng việc thực thi vòng lặp hiện tại để chuyển sang thực hiện vòng lặp ngoài cùng nhất."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.172 và HCMUTE tr.85: Lệnh break chỉ thoát khỏi vòng lặp hoặc cấu trúc switch nằm ở cấp sâu nhất trực tiếp bao quanh nó, các vòng lặp bên ngoài vẫn tiếp tục.",
    "ref": {"uttPage": "Trang 172", "hcmutePage": "Trang 85", "section": "3.6"}
})

# Q13
QUESTIONS_CH3.append({
    "num": 13, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch3-06",
    "content": "Khi gặp câu lệnh continue trong thân một vòng lặp for, chương trình sẽ xử lý như thế nào?",
    "options": [
        "Bỏ qua các lệnh còn lại của thân lặp hiện tại và nhảy trực tiếp đến biểu thức bước nhảy step.",
        "Thoát ngay lập tức khỏi toàn bộ vòng lặp for và thực thi câu lệnh tiếp theo sau vòng lặp.",
        "Khởi động lại toàn bộ vòng lặp từ đầu và chạy lại biểu thức khởi tạo giá trị biến ban đầu.",
        "Tạm dừng chương trình và chờ đợi người dùng nhập thêm dữ liệu từ bàn phím để tiếp tục lặp."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.174 và HCMUTE tr.86: Trong vòng for, continue bỏ qua các câu lệnh còn lại phía sau trong thân lặp và chuyển điều khiển ngay tới biểu thức bước nhảy (step), rồi kiểm tra điều kiện.",
    "ref": {"uttPage": "Trang 174", "hcmutePage": "Trang 86", "section": "3.6"}
})

# Q14
QUESTIONS_CH3.append({
    "num": 14, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch3-06",
    "content": "Vì sao các tài liệu lập trình cấu trúc hiện đại luôn khuyến cáo hạn chế tối đa việc sử dụng lệnh goto?",
    "options": [
        "Vì goto làm phá vỡ cấu trúc tuần tự rõ ràng, tạo ra mã nguồn spaghetti rất khó bảo trì và gỡ lỗi.",
        "Vì lệnh goto làm tiêu tốn rất nhiều tài nguyên bộ nhớ Heap của hệ điều hành khi chuyển nhãn lệnh.",
        "Vì trình biên dịch C hiện đại theo chuẩn C99/C11 đã chính thức loại bỏ hoàn toàn lệnh goto này.",
        "Vì goto chỉ có thể nhảy ngược lên dòng lệnh phía trước chứ không cho phép nhảy xuôi về phía sau."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.178 và HCMUTE tr.88: Lệnh goto nhảy tự do không cấu trúc tạo ra mã spaghetti rối rắm, khó theo dõi luồng thực thi và dễ sinh lỗi tiềm ẩn.",
    "ref": {"uttPage": "Trang 178", "hcmutePage": "Trang 88", "section": "3.6"}
})


# ==========================================
# 2. OUTPUT / TRACE (11 câu: Q15 -> Q25)
# ==========================================

# Q15 (Mock)
QUESTIONS_CH3.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-01",
    "content": "Đoạn mã sau in ra kết quả gì màn hình khi được biên dịch và thực thi?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a = 0;\n    if (a = 5)\n        printf(\"Dung: %d\", a);\n    else\n        printf(\"Sai\");\n    return 0;\n}",
    "options": [
        "In ra 'Dung: 5' (do phép gán a = 5 trả về giá trị 5 mang chân lý đúng).",
        "In ra 'Sai' (vì biến a ban đầu được khởi tạo giá trị bằng số 0 mang chân lý sai).",
        "Chương trình gặp lỗi biên dịch vì toán tử gán không được phép đặt trong điều kiện if.",
        "Chương trình rơi vào vòng lặp vô tận và không in ra bất kỳ chuỗi văn bản nào cả."
    ],
    "correct": 0, "mock": True,
    "explanation": "Đây là bẫy kinh điển: Trong điều kiện là phép gán (a = 5), giá trị trả về của biểu thức gán là 5. Vì 5 khác 0 nên mang chân trị true, thực thi nhánh then và in 'Dung: 5'.",
    "ref": {"uttPage": "Trang 128", "hcmutePage": "Trang 49", "section": "3.1"}
})

# Q16
QUESTIONS_CH3.append({
    "num": 16, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-02",
    "content": "Giá trị in ra màn hình của đoạn chương trình sử dụng cấu trúc switch-case sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int x = 2;\n    switch (x) {\n        case 1: printf(\"A\");\n        case 2: printf(\"B\");\n        case 3: printf(\"C\");\n        default: printf(\"D\");\n    }\n    return 0;\n}",
    "options": [
        "In ra chuỗi 'BCD' (do khớp case 2 và trôi lệnh liên tiếp qua case 3 và default).",
        "Chỉ in ra duy nhất ký tự 'B' (vì biểu thức biến x có giá trị khớp với case 2).",
        "In ra chuỗi 'ABCD' (vì switch sẽ duyệt tuần tự qua tất cả các case có trong mã).",
        "Chương trình báo lỗi biên dịch do các mệnh đề case không hề có câu lệnh break."
    ],
    "correct": 0, "mock": False,
    "explanation": "x = 2 khớp case 2, in 'B'. Do không có break, luồng thực thi rơi qua case 3 in 'C', rồi rơi vào default in 'D'. Kết quả in ra là 'BCD'.",
    "ref": {"uttPage": "Trang 143", "hcmutePage": "Trang 62", "section": "3.2"}
})

# Q17
QUESTIONS_CH3.append({
    "num": 17, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-03",
    "content": "Số lần in ra màn hình chữ cái 'X' trong đoạn mã sử dụng vòng lặp for sau đây là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 10; i += 2) {\n        printf(\"X\");\n    }\n    return 0;\n}",
    "options": [
        "In ra đúng 5 lần (tương ứng với các giá trị biến lặp i lần lượt là 1, 3, 5, 7, 9).",
        "In ra đúng 10 lần (do điều kiện biên kiểm tra của vòng lặp là biến i <= 10).",
        "In ra đúng 4 lần (tương ứng với các giá trị biến lặp i lần lượt là 1, 3, 5, 7).",
        "In ra đúng 6 lần (tương ứng với các giá trị biến lặp i lần lượt là 1, 3, 5, 7, 9, 11)."
    ],
    "correct": 0, "mock": False,
    "explanation": "i bắt đầu từ 1, tăng mỗi bước 2: i = 1, 3, 5, 7, 9 (5 lần). Khi i = 11 > 10, vòng lặp kết thúc. In 5 chữ 'X'.",
    "ref": {"uttPage": "Trang 151", "hcmutePage": "Trang 73", "section": "3.3"}
})

# Q18
QUESTIONS_CH3.append({
    "num": 18, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-04",
    "content": "Kết quả in ra của biến đếm count sau khi vòng lặp while sau đây kết thúc là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int n = 3, count = 0;\n    while (n-- > 0) {\n        count += n;\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    "options": [
        "In ra số 3 (lần 1 n=3>0 giảm còn 2 cộng vào count; lần 2 n=2>0 giảm còn 1; lần 3 n=1>0 giảm còn 0).",
        "In ra số 6 (do biến n nhận các giá trị 3, 2, 1 và tổng dồn tương ứng là 3 + 2 + 1 = 6).",
        "In ra số 0 (do biểu thức giảm n-- được tính toán sau khi toàn bộ vòng lặp kết thúc xong).",
        "In ra số 2 (do vòng lặp chỉ thực thi được hai lần trước khi biến n nhận giá trị âm)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Vòng 1: n=3 (>0 đúng), sau điều kiện n còn 2, count += 2 -> count = 2. Vòng 2: n=2 (>0), n thành 1, count += 1 -> count = 3. Vòng 3: n=1 (>0), n thành 0, count += 0 -> count = 3. Vòng 4: n=0 (sai), n thành -1, thoát. Kết quả count = 3.",
    "ref": {"uttPage": "Trang 162", "hcmutePage": "Trang 79", "section": "3.4"}
})

# Q19
QUESTIONS_CH3.append({
    "num": 19, "subtype": "output", "diff": "easy", "articleId": "c-art-ch3-05",
    "content": "Giá trị của biến số nguyên x sau khi thực hiện đoạn mã do-while sau đây là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int x = 10;\n    do {\n        x += 5;\n    } while (x < 10);\n    printf(\"%d\", x);\n    return 0;\n}",
    "options": [
        "In ra số 15 (thân do-while thực thi một lần tăng x lên 15 rồi kiểm tra 15 < 10 sai và dừng).",
        "In ra số 10 (vì điều kiện kiểm tra x < 10 sai ngay từ đầu nên thân lệnh không được chạy).",
        "In ra số 20 (thân lệnh do-while được trình biên dịch tự động thực hiện hai lần liên tiếp).",
        "Chương trình chạy vô tận do điều kiện logic trong mệnh đề while không bao giờ thỏa mãn."
    ],
    "correct": 0, "mock": False,
    "explanation": "do-while chạy thân trước: x tăng từ 10 thành 15. Sau đó mới kiểm tra điều kiện (15 < 10), nhận kết quả sai và thoát ngay. In ra 15.",
    "ref": {"uttPage": "Trang 166", "hcmutePage": "Trang 82", "section": "3.5"}
})

# Q20
QUESTIONS_CH3.append({
    "num": 20, "subtype": "output", "diff": "hard", "articleId": "c-art-ch3-07",
    "content": "Tổng số dấu hoa thị '*' được in ra màn hình bởi đoạn mã hai vòng lặp lồng nhau sau là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int count = 0;\n    for (int i = 0; i < 3; i++) {\n        for (int j = i; j < 3; j++) {\n            count++;\n        }\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    "options": [
        "In ra số 6 (với i=0 vòng trong chạy 3 lần; với i=1 chạy 2 lần; với i=2 chạy 1 lần; tổng 3+2+1=6).",
        "In ra số 9 (do hai vòng lặp lồng nhau chạy từ 0 đến bé hơn 3 nên số lần chạy là 3 x 3 = 9).",
        "In ra số 3 (do vòng lặp bên trong chỉ phụ thuộc vào giá trị của biến chỉ số lặp bên ngoài i).",
        "In ra số 5 (do lượt lặp cuối cùng khi biến chỉ số i đạt giá trị 2 bị bỏ qua không thực hiện)."
    ],
    "correct": 0, "mock": False,
    "explanation": "i=0: j chạy 0, 1, 2 (3 lần). i=1: j chạy 1, 2 (2 lần). i=2: j chạy 2 (1 lần). Tổng cộng count = 3 + 2 + 1 = 6.",
    "ref": {"uttPage": "Trang 180", "hcmutePage": "Trang 90", "section": "3.7"}
})

# Q21
QUESTIONS_CH3.append({
    "num": 21, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-06",
    "content": "Kết quả in ra của biến sum sau khi chạy xong hai vòng lặp có lệnh break sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int sum = 0;\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            if (j == 2) break;\n            sum++;\n        }\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    "options": [
        "In ra số 3 (mỗi lượt i vòng trong chỉ chạy được j=1 rồi break ngay; 3 lượt cho tổng 3).",
        "In ra số 1 (lệnh break thoát ngay khỏi cả hai vòng lặp lồng nhau sau lần lặp đầu tiên).",
        "In ra số 6 (mỗi lượt của biến ngoài i vòng trong chạy được hai lần j=1 và j=2 xong dừng).",
        "In ra số 0 (do điều kiện j == 2 kích hoạt break trước khi biến sum kịp thực hiện phép cộng)."
    ],
    "correct": 0, "mock": False,
    "explanation": "break chỉ thoát vòng lặp for (j) trong cùng. Với mỗi i (1, 2, 3), j=1 tăng sum lên 1, đến j=2 thì break thoát ra vòng ngoài. Tổng sum tăng 3 lần, kết quả là 3.",
    "ref": {"uttPage": "Trang 173", "hcmutePage": "Trang 85", "section": "3.6"}
})

# Q22
QUESTIONS_CH3.append({
    "num": 22, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-06",
    "content": "Đoạn chương trình C sử dụng lệnh continue sau đây in ra chuỗi kết quả nào?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 5; i++) {\n        if (i % 2 == 0) continue;\n        printf(\"%d\", i);\n    }\n    return 0;\n}",
    "options": [
        "In ra chuỗi '135' (lệnh continue bỏ qua thao tác in ra đối với tất cả các số chẵn 2 và 4).",
        "In ra chuỗi '24' (lệnh continue chỉ cho phép in các giá trị thỏa mãn điều kiện chia hết cho 2).",
        "In ra chuỗi '12345' (lệnh continue không có tác dụng làm thay đổi luồng thực thi lệnh in).",
        "In ra chuỗi '1' (chương trình dừng ngay tại giá trị chẵn đầu tiên khi gặp lệnh continue)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Khi i chẵn (2, 4), i % 2 == 0 là true, lệnh continue bỏ qua printf và nhảy sang bước tăng i++. Do đó chỉ các số lẻ 1, 3, 5 được in ra.",
    "ref": {"uttPage": "Trang 175", "hcmutePage": "Trang 87", "section": "3.6"}
})

# Q23
QUESTIONS_CH3.append({
    "num": 23, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-01",
    "content": "Giá trị của biến result sau khi thực hiện biểu thức toán tử ba ngôi lồng nhau sau là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a = 5, b = 10, c = 7;\n    int result = (a > b) ? a : ((b > c) ? b : c);\n    printf(\"%d\", result);\n    return 0;\n}",
    "options": [
        "In ra số 10 (do (a > b) sai nên lượng giá nhánh thứ hai ((b > c) ? b : c) trả về số 10).",
        "In ra số 5 (do biểu thức điều kiện đầu tiên lấy trực tiếp giá trị của biến a đặt vào kết quả).",
        "In ra số 7 (do nhánh cuối cùng trong biểu thức ba ngôi lồng nhau được ưu tiên thực thi).",
        "Chương trình gặp lỗi biên dịch do toán tử điều kiện ba ngôi không cho phép viết lồng nhau."
    ],
    "correct": 0, "mock": False,
    "explanation": "a > b (5 > 10) là False. Chuyển sang vế sau: (b > c) ? b : c -> (10 > 7) là True -> trả về b (10). Kết quả là 10 (tìm max của 3 số).",
    "ref": {"uttPage": "Trang 135", "hcmutePage": "Trang 56", "section": "3.1"}
})

# Q24
QUESTIONS_CH3.append({
    "num": 24, "subtype": "output", "diff": "medium", "articleId": "c-art-ch3-03",
    "content": "Giá trị in ra của biến i sau khi vòng lặp for sau đây kết thúc bình thường là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int i;\n    for (i = 0; i < 5; i++) {\n        // Không làm gì\n    }\n    printf(\"%d\", i);\n    return 0;\n}",
    "options": [
        "In ra số 5 (khi biến i tăng lên đến giá trị 5 thì điều kiện i < 5 sai và vòng lặp dừng lại).",
        "In ra số 4 (vì lượt lặp hợp lệ cuối cùng bên trong thân vòng lặp ứng với giá trị biến i = 4).",
        "In ra số 0 (do sau khi kết thúc vòng lặp biến i tự động được hoàn trả về giá trị ban đầu).",
        "Biến i không tồn tại ngoài vòng lặp dẫn đến chương trình phát sinh lỗi không biên dịch được."
    ],
    "correct": 0, "mock": False,
    "explanation": "Biến i được khai báo bên ngoài for. Vòng lặp dừng khi điều kiện i < 5 trở thành false, tức là lúc i đạt giá trị 5. Vì vậy sau vòng lặp, i có giá trị bằng 5.",
    "ref": {"uttPage": "Trang 152", "hcmutePage": "Trang 74", "section": "3.3"}
})

# Q25
QUESTIONS_CH3.append({
    "num": 25, "subtype": "output", "diff": "hard", "articleId": "c-art-ch3-04",
    "content": "Đoạn mã sau tính toán và in ra màn hình giá trị là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int x = 1234, sum = 0;\n    while (x > 0) {\n        sum += x % 10;\n        x /= 10;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    "options": [
        "In ra số 10 (chương trình tách từng chữ số của 1234 và tính tổng tích lũy: 4 + 3 + 2 + 1 = 10).",
        "In ra số 4 (chương trình chỉ lấy được chữ số hàng đơn vị cuối cùng trước khi vòng lặp dừng).",
        "In ra số 1234 (do phép chia x /= 10 không làm thay đổi giá trị thực tế của biến nguyên x).",
        "In ra số 24 (chương trình thực hiện tính tích phân phối của tất cả các chữ số nguyên)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Thuật toán kinh điển tách chữ số: x % 10 lấy chữ số cuối, x /= 10 bỏ chữ số cuối. Các chữ số lần lượt cộng vào sum: 4, 3, 2, 1. Tổng = 10.",
    "ref": {"uttPage": "Trang 163", "hcmutePage": "Trang 80", "section": "3.4"}
})


# ==========================================
# 3. DEBUG (7 câu: Q26 -> Q32)
# ==========================================

# Q26
QUESTIONS_CH3.append({
    "num": 26, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch3-01",
    "content": "Lập trình viên muốn kiểm tra nếu x bằng 0 thì in 'Zero', nhưng đoạn mã sau luôn in 'Non-Zero'. Nguyên nhân do đâu?",
    "codeSnippet": "int x = 0;\nif (x = 0)\n    printf(\"Zero\");\nelse\n    printf(\"Non-Zero\");",
    "options": [
        "Do dùng nhầm toán tử gán '=' thay vì toán tử so sánh '==', phép gán x = 0 trả về 0 mang chân trị false.",
        "Do biến x không được phép khai báo giá trị khởi tạo bằng số 0 trước khi đưa vào cấu trúc if.",
        "Do câu lệnh printf(\"Zero\") thiếu dấu chấm phẩy kết thúc khiến trình biên dịch tự động bỏ qua.",
        "Do kiểu số nguyên int trong C không thể so sánh trực tiếp với hằng số 0 trong biểu thức điều kiện."
    ],
    "correct": 0, "mock": False,
    "explanation": "if (x = 0) là phép gán biến x bằng 0. Giá trị của biểu thức gán là 0 (mang nghĩa false), do đó luôn nhảy vào nhánh else in 'Non-Zero'. Cần sửa thành if (x == 0).",
    "ref": {"uttPage": "Trang 129", "hcmutePage": "Trang 50", "section": "3.1"}
})

# Q27 (Mock)
QUESTIONS_CH3.append({
    "num": 27, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch3-03",
    "content": "Đoạn mã sau có lỗi logic gì khiến chữ 'Hello' chỉ được in ra duy nhất một lần thay vì 5 lần?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    for (int i = 0; i < 5; i++);\n    {\n        printf(\"Hello\\n\");\n    }\n    return 0;\n}",
    "options": [
        "Do có dấu chấm phẩy ';' đặt ngay sau câu lệnh for, biến thân vòng lặp thành một câu lệnh rỗng.",
        "Do cặp dấu ngoặc nhọn '{ }' phía dưới không hợp lệ trong cấu trúc khối lệnh của ngôn ngữ C.",
        "Do biến i được khai báo trực tiếp bên trong mệnh đề for gây ra xung đột tầm vực bộ nhớ.",
        "Do điều kiện i < 5 chỉ thỏa mãn một lần duy nhất khi biến i nhận giá trị khởi tạo ban đầu là 0."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy dấu chấm phẩy sau for: 'for (...);' tạo một vòng lặp rỗng chạy 5 lần không làm gì. Khối lệnh { printf(\"Hello\"); } trở thành một khối lệnh độc lập ngoài for, chỉ chạy 1 lần.",
    "ref": {"uttPage": "Trang 154", "hcmutePage": "Trang 76", "section": "3.3"}
})

# Q28
QUESTIONS_CH3.append({
    "num": 28, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch3-04",
    "content": "Đoạn chương trình sau đây phát sinh lỗi gì khi được nạp chạy trong thực tế?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int i = 0;\n    while (i < 5);\n    {\n        printf(\"%d \", i);\n        i++;\n    }\n    return 0;\n}",
    "options": [
        "Bị treo trong vòng lặp vô tận ngay tại dòng while do dấu chấm phẩy ';' làm thân vòng lặp rỗng.",
        "Chương trình in ra dãy số từ 0 đến 4 rồi kết thúc bình thường mà không hề có bất kỳ lỗi nào.",
        "Trình biên dịch báo lỗi cú pháp biên dịch vì lệnh while không bao giờ được phép có dấu chấm phẩy.",
        "Chương trình in ra ngay giá trị số 0 rồi tự động kết thúc thoát ra khỏi hệ điều hành máy chủ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Dấu ';' sau while (i < 5); khiến thân while rỗng. Vì i = 0 luôn < 5 và không bao giờ được tăng trong thân while rỗng, chương trình rơi vào vòng lặp vô tận tại dòng đó.",
    "ref": {"uttPage": "Trang 161", "hcmutePage": "Trang 79", "section": "3.4"}
})

# Q29
QUESTIONS_CH3.append({
    "num": 29, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch3-02",
    "content": "Trình biên dịch GCC sẽ báo lỗi gì khi biên dịch đoạn mã cấu trúc switch sau đây?",
    "codeSnippet": "float score = 8.5;\nswitch (score) {\n    case 8.5: printf(\"Gioi\"); break;\n    default: printf(\"Kha\");\n}",
    "options": [
        "Báo lỗi biên dịch vì biểu thức điều khiển của cấu trúc switch không được phép là số thực float.",
        "Báo lỗi biên dịch vì giá trị nhãn case 8.5 không được phép có phần số dư thập phân lẻ phía sau.",
        "Báo lỗi cảnh báo thiếu ngoặc nhọn bao quanh từng câu lệnh thực thi nằm bên trong các case.",
        "Không có lỗi biên dịch nào, chương trình vẫn chạy và in ra chuỗi chữ 'Gioi' bình thường."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ chuẩn C: Biểu thức switch(expr) bắt buộc phải có kiểu nguyên (integer type). Truyền biến float score gây lỗi biên dịch: 'switch quantity not an integer'.",
    "ref": {"uttPage": "Trang 140", "hcmutePage": "Trang 59", "section": "3.2"}
})

# Q30
QUESTIONS_CH3.append({
    "num": 30, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch3-02",
    "content": "Vì sao đoạn chương trình C sử dụng switch-case sau đây không thể biên dịch thành công?",
    "codeSnippet": "int x = 2, target = 2;\nswitch (x) {\n    case target: printf(\"Khop\"); break;\n    default: printf(\"Khong khop\");\n}",
    "options": [
        "Do nhãn case bắt buộc phải là một hằng số xác định khi biên dịch, không được phép dùng biến target.",
        "Do hai biến số nguyên x và target có cùng giá trị bằng 2 gây ra xung đột nội bộ trong cấu trúc.",
        "Do lệnh break chỉ được dùng trong các vòng lặp for/while chứ không được dùng trong switch.",
        "Do mệnh đề default bắt buộc phải có câu lệnh break đặt ở cuối để ngăn tràn dữ liệu nhớ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C, nhãn case phải là hằng số nguyên (compile-time constant). Biến 'target' dù có khởi tạo vẫn là biến (variable) nên gây lỗi 'case label does not reduce to an integer constant'.",
    "ref": {"uttPage": "Trang 141", "hcmutePage": "Trang 60", "section": "3.2"}
})

# Q31
QUESTIONS_CH3.append({
    "num": 31, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch3-04",
    "content": "Đoạn mã tìm số nguyên tố sau mắc lỗi logic nghiêm trọng nào khiến chương trình bị treo?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int i = 2, n = 7;\n    while (i < n) {\n        if (n % i == 0) break;\n    }\n    return 0;\n}",
    "options": [
        "Quên lệnh tăng bước nhảy i++ bên trong thân vòng lặp dẫn đến lặp vô tận vì i luôn bằng 2.",
        "Điều kiện i < n bị sai khiến cho vòng lặp while không bao giờ thực thi một lần nào cả.",
        "Toán tử chia lấy dư % không thể hoạt động chính xác khi hai toán hạng đều là số nguyên.",
        "Lệnh break làm sập chương trình vì nó chỉ được phép kích hoạt bên trong cấu trúc switch."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong vòng lặp while, biến i = 2 không được tăng (thiếu i++). Vì n = 7 không chia hết cho 2, if không kích hoạt break, dẫn đến lặp vô tận với i = 2.",
    "ref": {"uttPage": "Trang 161", "hcmutePage": "Trang 79", "section": "3.4"}
})

# Q32
QUESTIONS_CH3.append({
    "num": 32, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch3-05",
    "content": "Chương trình sau phát sinh lỗi biên dịch ở dòng lệnh nào và cần khắc phục như thế nào?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int k = 1;\n    do {\n        printf(\"%d \", k);\n        k++;\n    } while (k <= 3)\n    return 0;\n}",
    "options": [
        "Lỗi thiếu dấu chấm phẩy ';' ở cuối mệnh đề while (k <= 3); trong cấu trúc lặp do-while.",
        "Lỗi khai báo biến k bên ngoài thân khối lệnh do-while dẫn đến xung đột bộ nhớ cục bộ.",
        "Lỗi sử dụng toán tử tăng hậu tố k++ bên trong thân lệnh của khối cấu trúc do-while.",
        "Lỗi thiếu câu lệnh break đặt bên trong thân vòng lặp để chặn vòng lặp chạy quá giới hạn."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cấu trúc do-while trong C bắt buộc kết thúc bằng dấu chấm phẩy: } while (k <= 3);. Thiếu dấu ';' sẽ dẫn đến lỗi cú pháp 'expected ';' before 'return''.",
    "ref": {"uttPage": "Trang 165", "hcmutePage": "Trang 81", "section": "3.5"}
})


# ==========================================
# 4. FILL-IN (3 câu: Q33 -> Q35)
# ==========================================

# Q33 (Mock)
QUESTIONS_CH3.append({
    "num": 33, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch3-02",
    "content": "Cần điền từ khóa nào vào vị trí (...) để ngăn không cho chương trình trôi lệnh xuống case kế tiếp?",
    "codeSnippet": "switch (color) {\n    case 1: printf(\"Red\"); ...\n    case 2: printf(\"Blue\"); break;\n}",
    "options": [
        "Điền từ khóa 'break;' để lập tức thoát ra khỏi toàn bộ cấu trúc chọn đa nhánh switch.",
        "Điền từ khóa 'continue;' để bỏ qua các câu lệnh còn lại và kiểm tra case tiếp theo.",
        "Điền từ khóa 'return;' để kết thúc vòng lặp hiện tại mà không làm tắt chương trình.",
        "Điền từ khóa 'exit;' để giải phóng bộ nhớ của cấu trúc switch trước khi chuyển nhánh."
    ],
    "correct": 0, "mock": True,
    "explanation": "Lệnh 'break;' dùng để ngắt dòng thực thi và thoát khỏi switch, ngăn hiện tượng fall-through sang các case bên dưới.",
    "ref": {"uttPage": "Trang 143", "hcmutePage": "Trang 62", "section": "3.2"}
})

# Q34
QUESTIONS_CH3.append({
    "num": 34, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch3-06",
    "content": "Cần điền câu lệnh nào vào chỗ trống (...) để chỉ in ra các số lẻ trong đoạn từ 1 đến 10?",
    "codeSnippet": "for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) ...;\n    printf(\"%d \", i);\n}",
    "options": [
        "Điền lệnh 'continue' để bỏ qua lệnh printf bên dưới khi gặp giá trị biến i là số chẵn.",
        "Điền lệnh 'break' để dừng ngay lập tức vòng lặp for khi phát hiện số chẵn đầu tiên.",
        "Điền lệnh 'return' để chuyển quyền điều khiển chương trình về lại hệ điều hành máy chủ.",
        "Điền lệnh 'goto end' để kết thúc toàn bộ việc in các số còn lại trong dãy số nguyên."
    ],
    "correct": 0, "mock": False,
    "explanation": "Khi i chẵn, 'continue;' sẽ bỏ qua câu lệnh printf phía dưới và nhảy trực tiếp đến bước tăng i++ để xét số lẻ tiếp theo.",
    "ref": {"uttPage": "Trang 175", "hcmutePage": "Trang 87", "section": "3.6"}
})

# Q35
QUESTIONS_CH3.append({
    "num": 35, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch3-03",
    "content": "Cần điền điều kiện nào vào chỗ trống (...) trong vòng lặp for để duyệt mảng ngược từ phần tử n-1 về 0?",
    "codeSnippet": "for (int i = n - 1; ...; i--) {\n    printf(\"%d \", a[i]);\n}",
    "options": [
        "Điền điều kiện 'i >= 0' để đảm bảo chỉ số mảng dừng lại chính xác tại phần tử đầu tiên a[0].",
        "Điền điều kiện 'i > 0' để vòng lặp tự động dừng lại trước khi chỉ số mảng bị giảm về số âm.",
        "Điền điều kiện 'i == 0' để vòng lặp chỉ kích hoạt đúng một lần tại vị trí chỉ số gốc đầu mảng.",
        "Điền điều kiện 'i <= n' để vòng lặp kiểm tra toàn bộ kích thước của mảng trong bộ nhớ máy."
    ],
    "correct": 0, "mock": False,
    "explanation": "Mảng có n phần tử có chỉ số từ 0 đến n-1. Duyệt ngược từ n-1 về 0 thì điều kiện lặp là 'i >= 0'. Nếu dùng 'i > 0' sẽ bị sót phần tử a[0].",
    "ref": {"uttPage": "Trang 151", "hcmutePage": "Trang 73", "section": "3.3"}
})


print(f"Loaded Chapter 3: {len(QUESTIONS_CH3)} questions")
