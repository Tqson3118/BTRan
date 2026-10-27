# -*- coding: utf-8 -*-
"""
scripts/append_ch3.py
Tạo 35 câu hỏi trắc nghiệm Chương 3: Rẽ nhánh & Vòng lặp
- 14 Theory
- 11 Output/Trace
- 7 Debug
- 3 Fill-in
- 6 Mock Exam Preset
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

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

print(f"Constructed Chapter 3: {len(QUESTIONS_CH3)} questions.")

# Verify length delta <= 20% for Chapter 3
failed = 0
for q in QUESTIONS_CH3:
    lens = [len(opt) for opt in q["options"]]
    max_l = max(lens)
    min_l = min(lens)
    delta = (max_l - min_l) / max_l
    if delta > 0.20:
        print(f"FAIL Q{q['num']}: delta={delta:.1%}: {lens}")
        failed += 1

if failed == 0:
    print("ALL 35 QUESTIONS IN CHAPTER 3 PASSED LENGTH DELTA <= 20%!")
else:
    print(f"FAILED {failed} questions in Chapter 3.")
