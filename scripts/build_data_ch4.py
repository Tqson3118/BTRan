# -*- coding: utf-8 -*-
"""
scripts/build_data_ch4.py
Tạo 30 câu hỏi trắc nghiệm Chương 4: Hàm & Đệ quy
- 12 Theory (Q1 -> Q12)
- 9 Output/Trace (Q13 -> Q21)
- 6 Debug (Q22 -> Q27)
- 3 Fill-in (Q28 -> Q30)
- 5 Mock Exam Preset (Q1, Q4, Q8, Q15, Q25)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

QUESTIONS_CH4 = []

# ==========================================
# 1. THEORY (12 câu: Q1 -> Q12)
# ==========================================

# Q1 (Mock)
QUESTIONS_CH4.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch4-01",
    "content": "Khai báo nguyên mẫu hàm (Function Prototype) trong C có mục đích chính là gì?",
    "options": [
        "Báo trước cho trình biên dịch tên hàm, kiểu trả về và danh sách kiểu của các tham số.",
        "Cấp phát sẵn vùng nhớ Stack cho các biến cục bộ ngay khi chương trình bắt đầu khởi động.",
        "Liên kết trực tiếp các tệp thư viện nhị phân vào tệp mã nguồn trước khi biên dịch xong.",
        "Tự động tối ưu hóa tốc độ thực thi của hàm bằng cách chèn trực tiếp mã máy nội tuyến."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.214 và HCMUTE tr.138: Nguyên mẫu hàm (prototype) giúp trình biên dịch kiểm tra tính hợp lệ về kiểu trả về và kiểu tham số khi gọi hàm trước khi hàm được định nghĩa.",
    "ref": {"uttPage": "Trang 214", "hcmutePage": "Trang 138", "section": "4.1"}
})

# Q2
QUESTIONS_CH4.append({
    "num": 2, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch4-01",
    "content": "Trong ngôn ngữ C, cơ chế truyền đối số mặc định cho các biến số thông thường vào hàm là gì?",
    "options": [
        "Truyền theo giá trị (Pass by Value), hàm chỉ nhận và thao tác trên bản sao của đối số.",
        "Truyền theo tham chiếu (Pass by Reference), hàm thao tác trực tiếp trên ô nhớ gốc.",
        "Truyền theo địa chỉ biến con trỏ một cách tự động mà không cần dùng đến toán tử &.",
        "Truyền theo cơ chế chia sẻ bộ nhớ dùng chung giữa hàm gọi và hàm nhận tham số."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.220 và HCMUTE tr.140: C chuẩn chỉ hỗ trợ duy nhất cơ chế truyền tham trị (pass by value). Mọi thay đổi đối số trong hàm chỉ tác động lên biến bản sao cục bộ.",
    "ref": {"uttPage": "Trang 220", "hcmutePage": "Trang 140", "section": "4.1"}
})

# Q3
QUESTIONS_CH4.append({
    "num": 3, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch4-02",
    "content": "Điều gì xảy ra khi một hàm có kiểu trả về là void gặp câu lệnh 'return;' bên trong thân hàm?",
    "options": [
        "Hàm lập tức kết thúc thực thi và trao quyền điều khiển trở lại cho nơi đã gọi hàm đó.",
        "Trình biên dịch báo lỗi cú pháp vì hàm kiểu void tuyệt đối không được dùng lệnh return.",
        "Chương trình sẽ tự động trả về giá trị số 0 cho hệ điều hành rồi thoát hoàn toàn.",
        "Hàm sẽ khởi động lại từ câu lệnh đầu tiên và chạy lại toàn bộ thân hàm một lần nữa."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.223 và HCMUTE tr.142: Lệnh 'return;' không kèm biểu thức hoàn toàn hợp lệ trong hàm void, dùng để thoát hàm sớm bất cứ khi nào cần thiết.",
    "ref": {"uttPage": "Trang 223", "hcmutePage": "Trang 142", "section": "4.2"}
})

# Q4 (Mock)
QUESTIONS_CH4.append({
    "num": 4, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Biến cục bộ tĩnh (Static local variable) trong ngôn ngữ C có đặc tính lưu trữ nào?",
    "options": [
        "Được cấp phát trên vùng dữ liệu tĩnh và bảo lưu giá trị giữa các lần gọi hàm khác nhau.",
        "Được tự động giải phóng khỏi bộ nhớ Stack ngay sau khi hàm chứa nó kết thúc thực thi.",
        "Có thể truy cập trực tiếp từ bất kỳ hàm nào khác trong toàn bộ dự án chương trình.",
        "Bắt buộc phải được gán lại giá trị khởi tạo mới ở mỗi lần hàm được gọi đến trong mã."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.235 và HCMUTE tr.146: Biến static cục bộ nằm trong vùng nhớ tĩnh (Data segment), khởi tạo đúng 1 lần khi nạp chương trình và giữ nguyên giá trị xuyên suốt các lần gọi hàm.",
    "ref": {"uttPage": "Trang 235", "hcmutePage": "Trang 146", "section": "4.3"}
})

# Q5
QUESTIONS_CH4.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Biến toàn cục (Global variable) trong C có phạm vi truy cập và thời gian tồn tại như thế nào?",
    "options": [
        "Có phạm vi truy cập từ điểm khai báo đến hết tệp và tồn tại suốt vòng đời chương trình.",
        "Chỉ có phạm vi sử dụng bên trong hàm main và tự động bị hủy khi hàm main kết thúc.",
        "Có thể sử dụng ở tất cả mọi nơi nhưng sẽ bị hủy ngay khi hàm đầu tiên gọi nó hoàn tất.",
        "Chỉ có phạm vi trong khối lệnh bao quanh nó và được lưu trữ trên ngăn xếp Call Stack."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.231 và HCMUTE tr.145: Biến toàn cục tồn tại trong suốt quá trình chạy chương trình và có thể được truy xuất bởi mọi hàm đứng sau vị trí khai báo của nó.",
    "ref": {"uttPage": "Trang 231", "hcmutePage": "Trang 145", "section": "4.3"}
})

# Q6
QUESTIONS_CH4.append({
    "num": 6, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Từ khóa extern được sử dụng trong ngôn ngữ lập trình C nhằm mục đích chủ yếu nào?",
    "options": [
        "Khai báo một biến hoặc hàm đã được định nghĩa ở một tệp mã nguồn (file .c) khác.",
        "Yêu cầu CPU ưu tiên cấp phát vùng nhớ thanh ghi siêu tốc cho biến được khai báo.",
        "Ngăn chặn việc sửa đổi nội dung giá trị của biến bởi bất kỳ hàm nào trong dự án.",
        "Cấp phát bộ nhớ động trên vùng nhớ Heap cho biến trước khi chương trình khởi chạy."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.238 và HCMUTE tr.148: Từ khóa 'extern' dùng để thông báo biến/hàm tồn tại ở module/file khác, giúp liên kết các file nguồn trong dự án đa file.",
    "ref": {"uttPage": "Trang 238", "hcmutePage": "Trang 148", "section": "4.3"}
})

# Q7
QUESTIONS_CH4.append({
    "num": 7, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch4-04",
    "content": "Hai thành phần BẮT BUỘC phải có trong bất kỳ một hàm đệ quy (Recursive function) chuẩn là gì?",
    "options": [
        "Phải có điều kiện dừng (Base case) và bước gọi đệ quy thu hẹp kích thước bài toán.",
        "Phải có một biến cục bộ kiểu static và một vòng lặp vô tận while(1) bên trong hàm.",
        "Phải có ít nhất hai câu lệnh return và một mảng tĩnh dùng làm bộ đệm chứa kết quả.",
        "Phải có toán tử ba ngôi '? :' và con trỏ trỏ tới địa chỉ của chính bản thân hàm đó."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.245 và HCMUTE tr.150: Mọi hàm đệ quy đúng đắn đều phải có: 1) Neo/điều kiện dừng (Base case) để thoát đệ quy; 2) Bước đệ quy (Recursive step) thu hẹp bài toán về trường hợp dừng.",
    "ref": {"uttPage": "Trang 245", "hcmutePage": "Trang 150", "section": "4.4"}
})

# Q8 (Mock)
QUESTIONS_CH4.append({
    "num": 8, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch4-04",
    "content": "Hiện tượng tràn bộ nhớ ngăn xếp (Stack Overflow) khi thực thi đệ quy thường do nguyên nhân nào?",
    "options": [
        "Hàm đệ quy gọi lặp lại quá sâu do thiếu điều kiện dừng hoặc điều kiện dừng không đạt.",
        "Hàm đệ quy sử dụng quá nhiều phép toán chia lấy phần dư trên các biến số thực.",
        "Hàm đệ quy trả về một con trỏ trỏ tới vùng nhớ cục bộ được cấp phát tự động.",
        "Bộ nhớ Heap của hệ thống bị phân mảnh sau nhiều lần gọi hàm cấp phát malloc."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.249 và HCMUTE tr.152: Mỗi lần gọi hàm, một Stack Frame được đẩy vào Call Stack. Đệ quy vô tận hoặc quá sâu làm cạn kiệt bộ nhớ Stack, gây crash chương trình (Stack Overflow).",
    "ref": {"uttPage": "Trang 249", "hcmutePage": "Trang 152", "section": "4.4"}
})

# Q9
QUESTIONS_CH4.append({
    "num": 9, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch4-01",
    "content": "Khi truyền một mảng một chiều vào hàm trong C, bản chất đối số được truyền vào thực tế là gì?",
    "options": [
        "Địa chỉ của phần tử đầu tiên trong mảng (con trỏ trỏ tới phần tử có chỉ số là 0).",
        "Toàn bộ bản sao độc lập của tất cả các phần tử có trong mảng dữ liệu ban đầu.",
        "Một cấu trúc struct chứa kích thước số phần tử và con trỏ quản lý vùng nhớ đệm.",
        "Số lượng phần tử tối đa mà mảng đó có thể chứa được trong phân vùng bộ nhớ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.225 và HCMUTE tr.141: Trong C, tên mảng khi truyền vào hàm tự động suy biến (decay) thành con trỏ trỏ tới phần tử đầu tiên (&arr[0]). Mảng không bao giờ được truyền theo tham trị.",
    "ref": {"uttPage": "Trang 225", "hcmutePage": "Trang 141", "section": "4.1"}
})

# Q10
QUESTIONS_CH4.append({
    "num": 10, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch4-02",
    "content": "Giá trị mặc định của biến toàn cục và biến cục bộ tĩnh (static) khi chưa được khởi tạo là gì?",
    "options": [
        "Được tự động gán giá trị bằng 0 (hoặc con trỏ NULL đối với kiểu dữ liệu con trỏ).",
        "Mang giá trị rác ngẫu nhiên phụ thuộc vào dữ liệu tồn tại sẵn trên ngăn xếp Stack.",
        "Trình biên dịch bắt buộc lập trình viên phải khởi tạo, nếu không sẽ dừng biên dịch.",
        "Được tự động gán giá trị bằng số nguyên 1 đối với tất cả các kiểu dữ liệu số học."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.233 và HCMUTE tr.147: Mọi biến có thời gian lưu trữ tĩnh (static storage duration - gồm biến toàn cục và biến static) đều được tự động xóa về 0/NULL (vùng BSS).",
    "ref": {"uttPage": "Trang 233", "hcmutePage": "Trang 147", "section": "4.2"}
})

# Q11
QUESTIONS_CH4.append({
    "num": 11, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Khái niệm con trỏ hàm (Function Pointer) trong ngôn ngữ lập trình C được hiểu chính xác là gì?",
    "options": [
        "Một biến con trỏ lưu trữ địa chỉ vùng nhớ chứa mã lệnh thực thi của một hàm cụ thể.",
        "Một hàm đặc biệt có kiểu dữ liệu trả về bắt buộc phải là một con trỏ trỏ ô nhớ.",
        "Một kỹ thuật cấp phát bộ nhớ động dành riêng cho các tham số hình thức của hàm.",
        "Một macro tiền xử lý cho phép thay thế tên hàm bằng một biểu thức hằng số nguyên."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.256 và HCMUTE tr.155: Con trỏ hàm là biến chứa địa chỉ bắt đầu của khối mã nhị phân của hàm trong phân vùng Code/Text, cho phép gọi hàm gián tiếp hoặc truyền hàm làm tham số.",
    "ref": {"uttPage": "Trang 256", "hcmutePage": "Trang 155", "section": "4.3"}
})

# Q12
QUESTIONS_CH4.append({
    "num": 12, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch4-01",
    "content": "Điều gì xảy ra nếu một hàm trong C được gọi trước khi nó có nguyên mẫu hoặc định nghĩa?",
    "options": [
        "Trình biên dịch chuẩn cũ ngầm định hàm trả về kiểu int hoặc báo cảnh báo/lỗi biên dịch.",
        "Chương trình sẽ tự động định nghĩa một hàm rỗng và chạy tiếp mà không phát sinh lỗi.",
        "Chương trình luôn luôn biên dịch thành công mà không bao giờ đưa ra bất kỳ cảnh báo nào.",
        "Hệ điều hành sẽ từ chối nạp mã thực thi của chương trình vào bộ nhớ RAM của máy tính."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ C90: Trình biên dịch giả định hàm trả về int (implicit int). Tuy nhiên chuẩn C99/C11 đã cấm quy tắc này và yêu cầu bắt buộc phải có khai báo hàm trước khi gọi.",
    "ref": {"uttPage": "Trang 215", "hcmutePage": "Trang 139", "section": "4.1"}
})


# ==========================================
# 2. OUTPUT / TRACE (9 câu: Q13 -> Q21)
# ==========================================

# Q13
QUESTIONS_CH4.append({
    "num": 13, "subtype": "output", "diff": "easy", "articleId": "c-art-ch4-01",
    "content": "Kết quả in ra của chương trình truyền tham số cho hàm hoán vị sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nvoid swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main(void) {\n    int x = 5, y = 10;\n    swap(x, y);\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
    "options": [
        "In ra '5 10' (do C truyền tham trị nên hàm swap chỉ thao tác trên bản sao của biến).",
        "In ra '10 5' (hai biến x và y trong hàm main đã được hoán đổi giá trị thành công).",
        "In ra '0 0' (các biến cục bộ bị giải phóng dẫn đến dữ liệu trong main bị xóa sạch).",
        "Chương trình bị lỗi biên dịch vì hàm swap có kiểu void không thể nhận hai tham số."
    ],
    "correct": 0, "mock": False,
    "explanation": "Bẫy kinh điển về truyền tham trị: x và y được truyền giá trị vào a và b. Hàm swap chỉ đổi giá trị giữa hai biến bản sao a, b; hai biến x, y trong hàm main hoàn toàn không thay đổi.",
    "ref": {"uttPage": "Trang 221", "hcmutePage": "Trang 140", "section": "4.1"}
})

# Q14
QUESTIONS_CH4.append({
    "num": 14, "subtype": "output", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Kết quả in ra sau ba lần gọi hàm có chứa biến static sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nvoid dem(void) {\n    static int c = 1;\n    printf(\"%d \", c);\n    c++;\n}\n\nint main(void) {\n    dem(); dem(); dem();\n    return 0;\n}",
    "options": [
        "In ra chuỗi '1 2 3 ' (biến static c chỉ khởi tạo một lần và bảo lưu giá trị tăng dần).",
        "In ra chuỗi '1 1 1 ' (mỗi lần gọi hàm biến c đều được khởi tạo lại bằng giá trị 1).",
        "In ra chuỗi '2 3 4 ' (biến static tự động tăng thêm một đơn vị trước khi in giá trị).",
        "Chương trình gặp lỗi biên dịch do biến cục bộ không được phép sử dụng từ khóa static."
    ],
    "correct": 0, "mock": False,
    "explanation": "Biến static c = 1 chỉ khởi tạo duy nhất một lần. Lần 1: in 1, c thành 2. Lần 2: in 2, c thành 3. Lần 3: in 3, c thành 4. Chuỗi in ra là '1 2 3 '.",
    "ref": {"uttPage": "Trang 236", "hcmutePage": "Trang 146", "section": "4.3"}
})

# Q15 (Mock)
QUESTIONS_CH4.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch4-04",
    "content": "Giá trị in ra của hàm đệ quy tính giai thừa f(4) trong chương trình sau là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nint f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 1);\n}\n\nint main(void) {\n    printf(\"%d\", f(4));\n    return 0;\n}",
    "options": [
        "In ra số 24 (tích các lời gọi đệ quy giai thừa tính toán là: 4 * 3 * 2 * 1 = 24).",
        "In ra số 10 (tổng các lời gọi đệ quy cộng dồn liên tiếp là: 4 + 3 + 2 + 1 = 10).",
        "In ra số 1 (do hàm đệ quy gặp điều kiện dừng sớm và trả về kết quả cơ sở là 1).",
        "Chương trình báo lỗi tràn ngăn xếp Stack do lời gọi đệ quy không thể thu hẹp."
    ],
    "correct": 0, "mock": True,
    "explanation": "f(4) = 4 * f(3) = 4 * (3 * f(2)) = 4 * 3 * (2 * f(1)) = 4 * 3 * 2 * 1 = 24.",
    "ref": {"uttPage": "Trang 246", "hcmutePage": "Trang 151", "section": "4.4"}
})

# Q16
QUESTIONS_CH4.append({
    "num": 16, "subtype": "output", "diff": "medium", "articleId": "c-art-ch4-04",
    "content": "Hàm đệ quy in ngược số nguyên sau đây sẽ hiển thị kết quả nào lên màn hình khi gọi printReverse(123)?",
    "codeSnippet": "#include <stdio.h>\n\nvoid printReverse(int n) {\n    if (n == 0) return;\n    printf(\"%d\", n % 10);\n    printReverse(n / 10);\n}\n\nint main(void) {\n    printReverse(123);\n    return 0;\n}",
    "options": [
        "In ra chuỗi số '321' (lệnh printf in chữ số hàng đơn vị n%10 trước khi gọi đệ quy n/10).",
        "In ra chuỗi số '123' (các giá trị được lưu trong ngăn xếp Call Stack rồi in sau cùng).",
        "In ra chuỗi số '0321' (chương trình in thêm giá trị điều kiện dừng của biến số n).",
        "Chương trình rơi vào vòng lặp vô hạn do biểu thức chia nguyên n/10 không giảm về 0."
    ],
    "correct": 0, "mock": False,
    "explanation": "Lần 1: n=123, in 123%10 = 3, gọi printReverse(12). Lần 2: in 12%10 = 2, gọi printReverse(1). Lần 3: in 1%10 = 1, gọi printReverse(0). Lần 4: n=0 return. Kết quả in là '321'.",
    "ref": {"uttPage": "Trang 248", "hcmutePage": "Trang 153", "section": "4.4"}
})

# Q17
QUESTIONS_CH4.append({
    "num": 17, "subtype": "output", "diff": "hard", "articleId": "c-art-ch4-04",
    "content": "Xem xét thứ tự thực thi của hàm đệ quy sau, chuỗi số được in ra màn hình là gì?",
    "codeSnippet": "#include <stdio.h>\n\nvoid f(int n) {\n    if (n > 0) {\n        f(n - 1);\n        printf(\"%d \", n);\n    }\n}\n\nint main(void) {\n    f(3);\n    return 0;\n}",
    "options": [
        "In ra chuỗi '1 2 3 ' (lời gọi đệ quy thực thi trước, lệnh printf được chạy khi quay lui Stack).",
        "In ra chuỗi '3 2 1 ' (các giá trị của đối số được in ra ngay trước khi hàm đệ quy tự gọi lại).",
        "In ra chuỗi '0 1 2 3 ' (điều kiện dừng n>0 cho phép in thêm giá trị cơ sở ban đầu là 0).",
        "In ra chuỗi '3 3 3 ' (giá trị đối số n không đổi trong suốt quá trình quay lui ngăn xếp)."
    ],
    "correct": 0, "mock": False,
    "explanation": "f(3) gọi f(2); f(2) gọi f(1); f(1) gọi f(0). f(0) dừng. Khi tháo ngăn xếp (unwinding): f(1) in 1, f(2) in 2, f(3) in 3. Kết quả in ra là '1 2 3 '.",
    "ref": {"uttPage": "Trang 250", "hcmutePage": "Trang 154", "section": "4.4"}
})

# Q18
QUESTIONS_CH4.append({
    "num": 18, "subtype": "output", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Xung đột tầm vực biến: Kết quả in ra của chương trình sử dụng biến trùng tên sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint x = 100; // Biến toàn cục\n\nvoid show(void) {\n    int x = 20; // Biến cục bộ\n    printf(\"%d \", x);\n}\n\nint main(void) {\n    show();\n    printf(\"%d\", x);\n    return 0;\n}",
    "options": [
        "In ra '20 100' (biến cục bộ x trong hàm show che khuất biến toàn cục x khi thực thi).",
        "In ra '100 100' (biến toàn cục x luôn có mức ưu tiên cao hơn mọi biến cục bộ khác).",
        "In ra '20 20' (việc gán giá trị x=20 trong hàm show đã làm thay đổi giá trị toàn cục).",
        "Chương trình gặp lỗi biên dịch do có hai biến được đặt cùng tên x trong cùng một tệp."
    ],
    "correct": 0, "mock": False,
    "explanation": "Biến cục bộ che khuất (shadows) biến toàn cục cùng tên trong phạm vi hàm của nó. Do đó trong hàm show in ra 20, còn trong hàm main in ra giá trị của biến toàn cục là 100.",
    "ref": {"uttPage": "Trang 232", "hcmutePage": "Trang 145", "section": "4.3"}
})

# Q19
QUESTIONS_CH4.append({
    "num": 19, "subtype": "output", "diff": "hard", "articleId": "c-art-ch4-04",
    "content": "Hàm tính dãy số Fibonacci đệ quy sau đây sẽ thực hiện bao nhiêu lần gọi hàm fib khi tính fib(3)?",
    "codeSnippet": "#include <stdio.h>\n\nint count = 0;\nint fib(int n) {\n    count++;\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main(void) {\n    fib(3);\n    printf(\"%d\", count);\n    return 0;\n}",
    "options": [
        "In ra số 5 (cây đệ quy gồm: fib(3), fib(2), fib(1), fib(0) và nhánh con fib(1) thứ hai).",
        "In ra số 3 (do đối số truyền vào hàm có giá trị bằng 3 nên số lần gọi tương ứng là 3).",
        "In ra số 4 (mỗi nhánh đệ quy chỉ kích hoạt tối đa hai lần gọi hàm con trên Call Stack).",
        "In ra số 2 (kết quả trả về của phép tính số học Fibonacci thứ 3 trong dãy chuẩn là 2)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cây gọi đệ quy: fib(3) gọi fib(2) và fib(1). fib(2) gọi fib(1) và fib(0). Tổng số lần gọi hàm: fib(3), fib(2), fib(1), fib(0), fib(1) = 5 lần gọi.",
    "ref": {"uttPage": "Trang 252", "hcmutePage": "Trang 154", "section": "4.4"}
})

# Q20
QUESTIONS_CH4.append({
    "num": 20, "subtype": "output", "diff": "medium", "articleId": "c-art-ch4-02",
    "content": "Giá trị in ra của chương trình có hàm tính lũy thừa theo cách nhân dồn sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint power(int base, int exp) {\n    int res = 1;\n    while (exp > 0) {\n        res *= base;\n        exp--;\n    }\n    return res;\n}\n\nint main(void) {\n    printf(\"%d\", power(2, 3));\n    return 0;\n}",
    "options": [
        "In ra số 8 (hàm nhân dồn biến base với giá trị 2 liên tục qua 3 lần lặp: 2^3 = 8).",
        "In ra số 6 (hàm lấy cơ số nhân với số mũ tương đương biểu thức số học 2 * 3 = 6).",
        "In ra số 1 (do biến res được khởi tạo bằng 1 và không bị thay đổi bởi hàm lặp).",
        "Chương trình bị lỗi biên dịch do từ khóa exp trùng với hàm mũ trong math.h."
    ],
    "correct": 0, "mock": False,
    "explanation": "power(2, 3): vòng lặp chạy 3 lần, exp giảm từ 3 về 0: res = 1*2=2, 2*2=4, 4*2=8. Trả về 8.",
    "ref": {"uttPage": "Trang 227", "hcmutePage": "Trang 143", "section": "4.2"}
})

# Q21
QUESTIONS_CH4.append({
    "num": 21, "subtype": "output", "diff": "hard", "articleId": "c-art-ch4-04",
    "content": "Đoạn chương trình đệ quy lồng biến static sau đây sẽ in ra kết quả số học nào?",
    "codeSnippet": "#include <stdio.h>\n\nint test(int n) {\n    static int val = 0;\n    if (n <= 0) return val;\n    val += n;\n    return test(n - 1);\n}\n\nint main(void) {\n    printf(\"%d\", test(3));\n    return 0;\n}",
    "options": [
        "In ra số 6 (biến static val cộng dồn các giá trị n qua từng bước đệ quy: 3 + 2 + 1 = 6).",
        "In ra số 0 (do điều kiện dừng n <= 0 trả về giá trị khởi tạo gốc của biến val ban đầu).",
        "In ra số 3 (do chỉ có giá trị truyền vào đầu tiên của đối số n được cộng vào biến val).",
        "Chương trình gặp lỗi bộ nhớ do biến static không được phép sử dụng trong hàm đệ quy."
    ],
    "correct": 0, "mock": False,
    "explanation": "val khởi tạo 0 một lần. Bước 1 (n=3): val += 3 -> val = 3. Bước 2 (n=2): val += 2 -> val = 5. Bước 3 (n=1): val += 1 -> val = 6. Bước 4 (n=0): return val = 6.",
    "ref": {"uttPage": "Trang 254", "hcmutePage": "Trang 155", "section": "4.4"}
})


# ==========================================
# 3. DEBUG (6 câu: Q22 -> Q27)
# ==========================================

# Q22
QUESTIONS_CH4.append({
    "num": 22, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch4-01",
    "content": "Đoạn chương trình sau đây phát sinh lỗi biên dịch do nguyên nhân nào?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int kq = tinhTong(3, 4);\n    printf(\"%d\", kq);\n    return 0;\n}\n\nint tinhTong(int a, int b) {\n    return a + b;\n}",
    "options": [
        "Hàm tinhTong được gọi trước khi được định nghĩa và thiếu dòng khai báo nguyên mẫu hàm.",
        "Hàm main không được phép gọi một hàm khác khi hàm đó có kiểu trả về là số nguyên int.",
        "Hai tham số hình thức a và b trùng kiểu dữ liệu int dẫn đến tranh chấp không biên dịch được.",
        "Thiếu thư viện con trỏ chuẩn stdlib.h để nạp định nghĩa của các phép toán cộng hai số."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C99 trở lên, việc gọi một hàm chưa hề được khai báo trước đó dẫn đến lỗi 'implicit declaration of function' hoặc 'conflicting types'. Cần đặt prototype 'int tinhTong(int, int);' trước main.",
    "ref": {"uttPage": "Trang 215", "hcmutePage": "Trang 139", "section": "4.1"}
})

# Q23
QUESTIONS_CH4.append({
    "num": 23, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch4-04",
    "content": "Lỗi nghiêm trọng nào sẽ xảy ra khi thực thi hàm đệ quy sau đây trong thực tế?",
    "codeSnippet": "int countUp(int n) {\n    return countUp(n + 1);\n}",
    "options": [
        "Lỗi tràn bộ nhớ ngăn xếp (Stack Overflow) do hoàn toàn không hề có điều kiện dừng.",
        "Lỗi truy cập vùng nhớ cấm (Segmentation Fault) do đối số n bị tràn số nguyên âm.",
        "Lỗi chia cho số không (Division by zero) do biến n tăng liên tục qua các chu kỳ lặp.",
        "Chương trình tự động phát hiện lặp và ngắt thoát ngay sau lượt gọi đệ quy thứ mười."
    ],
    "correct": 0, "mock": False,
    "explanation": "Hàm countUp không có neo dừng (Base case). Mỗi lần gọi làm tăng kích thước Stack Frame cho đến khi cạn kiệt bộ nhớ ngăn xếp và hệ điều hành buộc dừng chương trình (Stack Overflow).",
    "ref": {"uttPage": "Trang 249", "hcmutePage": "Trang 152", "section": "4.4"}
})

# Q24
QUESTIONS_CH4.append({
    "num": 24, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch4-02",
    "content": "Đoạn mã sau có lỗi logic gì khiến kết quả trả về của hàm không xác định?",
    "codeSnippet": "int timMax(int a, int b) {\n    if (a > b) {\n        return a;\n    }\n    // Thiếu trường hợp còn lại\n}",
    "options": [
        "Nếu a <= b hàm kết thúc mà không gặp lệnh return khiến giá trị trả về là rác không xác định.",
        "Hàm bắt buộc phải có câu lệnh else đi kèm ngay cả khi nhánh if đã có câu lệnh return rồi.",
        "Kiểu dữ liệu của các tham số a và b phải được khai báo bằng từ khóa unsigned int hợp lệ.",
        "Trình biên dịch cấm việc đặt câu lệnh return bên trong thân của cấu trúc rẽ nhánh if."
    ],
    "correct": 0, "mock": False,
    "explanation": "Nếu a <= b, nhánh if không chạy, hàm đi tới dấu đóng } mà không có lệnh return giá trị nào. Hàm trả về một giá trị rác ngẫu nhiên trên thanh ghi, gây lỗi undefined behavior.",
    "ref": {"uttPage": "Trang 224", "hcmutePage": "Trang 142", "section": "4.2"}
})

# Q25 (Mock)
QUESTIONS_CH4.append({
    "num": 25, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch4-01",
    "content": "Vì sao hàm hoán vị sau đây không thể thay đổi giá trị của hai biến x và y ngoài hàm main?",
    "codeSnippet": "void swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}",
    "options": [
        "Do tham số a và b là các bản sao cục bộ trên Stack, thay đổi chúng không ảnh hưởng biến gốc.",
        "Do biến tạm temp có phạm vi toàn cục nên việc gán hoán đổi bị xung đột tầm vực nhớ.",
        "Do hàm swap không trả về giá trị bằng lệnh return nên giá trị của hai biến bị hoàn tác.",
        "Do hai biến a và b bị đóng băng giá trị bởi trình biên dịch ngay khi vào trong hàm."
    ],
    "correct": 0, "mock": True,
    "explanation": "Trong C, biến số thông thường được truyền theo tham trị (pass by value). Để thay đổi hai biến ngoài main, hàm phải nhận con trỏ (int *a, int *b) và gọi dạng swap(&x, &y).",
    "ref": {"uttPage": "Trang 221", "hcmutePage": "Trang 140", "section": "4.1"}
})

# Q26
QUESTIONS_CH4.append({
    "num": 26, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Lỗi quản lý bộ nhớ nguy hiểm nào xuất hiện trong đoạn mã trả về con trỏ sau đây?",
    "codeSnippet": "int* taoBien(void) {\n    int x = 100;\n    return &x;\n}",
    "options": [
        "Trả về địa chỉ của biến cục bộ tự động x (biến này sẽ bị hủy ngay khi hàm taoBien kết thúc).",
        "Biến con trỏ trả về không có kiểu dữ liệu khớp với kiểu dữ liệu của biến số nguyên x.",
        "Toán tử lấy địa chỉ & không được phép áp dụng cho các biến được khai báo bên trong hàm.",
        "Hàm kiểu int* bắt buộc phải có ít nhất một tham số đầu vào là con trỏ trỏ tới vùng nhớ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Bẫy con trỏ lơ lửng (Dangling pointer): Biến cục bộ x nằm trên Stack Frame của taoBien. Khi hàm thoát, vùng nhớ này bị thu hồi. Trả về &x dẫn đến con trỏ trỏ vào vùng nhớ không hợp lệ.",
    "ref": {"uttPage": "Trang 237", "hcmutePage": "Trang 147", "section": "4.3"}
})

# Q27
QUESTIONS_CH4.append({
    "num": 27, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch4-04",
    "content": "Hàm đệ quy tính tổng S = 1 + 2 + ... + n sau đây bị lỗi logic ở trường hợp nào?",
    "codeSnippet": "int sum(int n) {\n    if (n == 0) return 0;\n    return n + sum(n - 1);\n}",
    "options": [
        "Nếu truyền số âm n < 0 thì n-1 sẽ giảm mãi về âm vô cùng và không bao giờ chạm neo n == 0.",
        "Điều kiện dừng n == 0 không thể xử lý được trường hợp cơ sở khi biến n nhận giá trị bằng 1.",
        "Phép cộng n + sum(n - 1) bị lỗi tràn số ngay từ lời gọi đệ quy đầu tiên với giá trị n = 2.",
        "Hàm sum bắt buộc phải khai báo thêm một con trỏ trung gian để lưu trữ tổng tích lũy."
    ],
    "correct": 0, "mock": False,
    "explanation": "Nếu n < 0 (ví dụ n = -1), sum(-1) gọi sum(-2)... không bao giờ đạt n == 0, dẫn đến lặp đệ quy vô tận và Stack Overflow. Cần sửa neo thành 'if (n <= 0) return 0;'.",
    "ref": {"uttPage": "Trang 251", "hcmutePage": "Trang 153", "section": "4.4"}
})


# ==========================================
# 4. FILL-IN (3 câu: Q28 -> Q30)
# ==========================================

# Q28
QUESTIONS_CH4.append({
    "num": 28, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch4-01",
    "content": "Cần điền khai báo tham số nào vào chỗ trống (...) của hàm hoán vị để có thể đổi giá trị hai biến số thực?",
    "codeSnippet": "void swap(float ... , float ... ) {\n    float temp = *a;\n    *a = *b;\n    *b = temp;\n}",
    "options": [
        "Điền '*a' và '*b' để hàm nhận hai địa chỉ con trỏ và thao tác trực tiếp trên vùng nhớ gốc.",
        "Điền '&a' và '&b' để khai báo kiểu tham chiếu trực tiếp theo đúng cú pháp chuẩn ngôn ngữ C.",
        "Điền 'a[]' và 'b[]' để truyền hai mảng dữ liệu một chiều chứa các số thực tương ứng vào hàm.",
        "Điền 'const a' và 'const b' để bảo vệ giá trị của hai biến số thực không bị thay đổi ngẫu nhiên."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C, để mô phỏng truyền tham chiếu cần truyền con trỏ: void swap(float *a, float *b).",
    "ref": {"uttPage": "Trang 222", "hcmutePage": "Trang 141", "section": "4.1"}
})

# Q29
QUESTIONS_CH4.append({
    "num": 29, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch4-03",
    "content": "Cần điền từ khóa nào vào chỗ trống (...) để biến đếm counter giữ nguyên giá trị qua mỗi lần gọi hàm?",
    "codeSnippet": "void tick(void) {\n    ... int counter = 0;\n    counter++;\n    printf(\"%d \", counter);\n}",
    "options": [
        "Điền từ khóa 'static' để cấp phát biến trong vùng nhớ tĩnh và bảo lưu giá trị giữa các lần gọi.",
        "Điền từ khóa 'extern' để biến counter tự động đồng bộ hóa với biến toàn cục trong toàn dự án.",
        "Điền từ khóa 'register' để đưa biến counter lưu trực tiếp vào thanh ghi của vi xử lý CPU.",
        "Điền từ khóa 'const' để cố định giá trị của biến counter và ngăn chặn các phép gán đè sau đó."
    ],
    "correct": 0, "mock": False,
    "explanation": "Từ khóa 'static' biến cục bộ giúp biến được lưu ở vùng Data, khởi tạo 1 lần và bảo lưu giá trị suốt vòng đời ứng dụng.",
    "ref": {"uttPage": "Trang 235", "hcmutePage": "Trang 146", "section": "4.3"}
})

# Q30
QUESTIONS_CH4.append({
    "num": 30, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch4-04",
    "content": "Cần điền biểu thức nào vào vị trí (...) trong hàm đệ quy sau để hoàn thiện điều kiện dừng khi tính lũy thừa a^n?",
    "codeSnippet": "long luyThua(int a, int n) {\n    if (...) return 1;\n    return a * luyThua(a, n - 1);\n}",
    "options": [
        "Điền 'n == 0' vì theo định nghĩa toán học thì mọi số a khác 0 nâng lên lũy thừa 0 đều bằng 1.",
        "Điền 'n == 1' vì lũy thừa bậc 1 của bất kỳ số nguyên nào luôn có kết quả tính ra bằng số 1.",
        "Điền 'a == 0' vì khi cơ số giảm về 0 thì hàm đệ quy không thể tiếp tục thực hiện phép nhân.",
        "Điền 'a == 1' vì cơ số bằng 1 thì không cần phải thu hẹp thêm kích thước của bài toán nữa."
    ],
    "correct": 0, "mock": False,
    "explanation": "a^0 = 1 là trường hợp cơ sở (base case) của phép tính lũy thừa. Khi n == 0, return 1.",
    "ref": {"uttPage": "Trang 247", "hcmutePage": "Trang 151", "section": "4.4"}
})

print(f"Constructed Chapter 4: {len(QUESTIONS_CH4)} questions.")

# Verify length delta <= 20%
failed = 0
for q in QUESTIONS_CH4:
    lens = [len(opt) for opt in q["options"]]
    max_l = max(lens)
    min_l = min(lens)
    delta = (max_l - min_l) / max_l
    if delta > 0.20:
        print(f"FAIL Q{q['num']}: delta={delta:.1%}: {lens}")
        failed += 1

if failed == 0:
    print("ALL 30 QUESTIONS IN CHAPTER 4 PASSED LENGTH DELTA <= 20%!")
else:
    print(f"FAILED {failed} questions in Chapter 4.")
