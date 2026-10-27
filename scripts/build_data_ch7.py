# -*- coding: utf-8 -*-
"""
scripts/build_data_ch7.py
Tạo 30 câu hỏi trắc nghiệm Chương 7: Struct, Union, Enum
- 12 Theory (Q1 -> Q12)
- 9 Output/Trace (Q13 -> Q21)
- 6 Debug (Q22 -> Q27)
- 3 Fill-in (Q28 -> Q30)
- 5 Mock Exam Preset (Q1, Q4, Q7, Q14, Q24)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

QUESTIONS_CH7 = []

# ==========================================
# 1. THEORY (12 câu: Q1 -> Q12)
# ==========================================

# Q1 (Mock)
QUESTIONS_CH7.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Điểm khác biệt căn bản nhất giữa kiểu cấu trúc (struct) và kiểu mảng (array) trong C là gì?",
    "options": [
        "Struct cho phép nhóm các phần tử có kiểu dữ liệu khác nhau còn mảng chỉ chứa các phần tử cùng kiểu.",
        "Struct được cấp phát trên bộ nhớ động Heap còn mảng luôn luôn được lưu trữ trên ngăn xếp Call Stack.",
        "Mảng cho phép truy xuất qua con trỏ còn struct hoàn toàn không thể sử dụng con trỏ để truy cập.",
        "Struct có kích thước bộ nhớ tự động co giãn còn mảng có kích thước cố định không thể thay đổi."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.422 và HCMUTE tr.159: Mảng là tập hợp đồng nhất (cùng kiểu); Struct là kiểu dữ liệu có cấu trúc cho phép gom các thành phần (fields/members) có kiểu dữ liệu khác nhau.",
    "ref": {"uttPage": "Trang 422", "hcmutePage": "Trang 159", "section": "7.1"}
})

# Q2
QUESTIONS_CH7.append({
    "num": 2, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Toán tử nào được sử dụng để truy xuất trực tiếp thành phần của một biến cấu trúc thông thường?",
    "options": [
        "Toán tử dấu chấm '.' (Dot operator, ví dụ: sinhVien.hoTen để truy xuất trường dữ liệu).",
        "Toán tử mũi tên '->' (Arrow operator, dùng cho các biến cấu trúc được cấp phát tĩnh).",
        "Toán tử hai dấu hai chấm '::' (Scope resolution operator dùng để định vị phạm vi biến).",
        "Toán tử giải tham chiếu '*' đặt trực tiếp phía trước tên thành viên của cấu trúc dữ liệu."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.425 và HCMUTE tr.162: Biến struct thông thường dùng toán tử chấm (.), ví dụ `sv.diem`. Con trỏ struct dùng toán tử mũi tên (->).",
    "ref": {"uttPage": "Trang 425", "hcmutePage": "Trang 162", "section": "7.1"}
})

# Q3
QUESTIONS_CH7.append({
    "num": 3, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Cú pháp ptr->member khi truy xuất qua con trỏ cấu trúc ptr tương đương với biểu thức nào?",
    "options": [
        "Hoàn toàn tương đương với biểu thức (*ptr).member (phải có ngoặc tròn bao quanh *ptr).",
        "Hoàn toàn tương đương với biểu thức *ptr.member mà không cần bất kỳ dấu ngoặc tròn nào.",
        "Hoàn toàn tương đương với biểu thức &(ptr.member) để lấy trực tiếp địa chỉ ô nhớ trường.",
        "Hoàn toàn tương đương với biểu thức ptr.member tương tự như một biến cấu trúc thông thường."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.430 và HCMUTE tr.166: Toán tử `.` ưu tiên cao hơn `*`. Do đó `*ptr.member` bị hiểu là `*(ptr.member)`. Để đúng phải viết `(*ptr).member`, hoặc viết gọn là `ptr->member`.",
    "ref": {"uttPage": "Trang 430", "hcmutePage": "Trang 166", "section": "7.1"}
})

# Q4 (Mock)
QUESTIONS_CH7.append({
    "num": 4, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Hiện tượng độn bộ nhớ (Structure Padding) trong cấu trúc struct xảy ra nhằm mục đích gì?",
    "options": [
        "Căn lề địa chỉ các trường theo bội số kích thước kiểu dữ liệu giúp CPU tăng tốc độ đọc dữ liệu.",
        "Tự động chèn các byte mã hóa đặc biệt vào giữa các trường để bảo vệ dữ liệu cấu trúc an toàn.",
        "Mở rộng kích thước của struct để struct luôn luôn có dung lượng đúng bằng một lũy thừa của 2.",
        "Khắc phục sự cố xung đột tên giữa các trường dữ liệu được khai báo cùng một loại kiểu dữ liệu."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.428 và HCMUTE tr.164: CPU truy xuất bộ nhớ hiệu quả nhất theo các khối từ nhớ (4 hoặc 8 bytes). Compiler tự chèn byte đệm (padding) để căn lề địa chỉ thành viên (alignment).",
    "ref": {"uttPage": "Trang 428", "hcmutePage": "Trang 164", "section": "7.1"}
})

# Q5
QUESTIONS_CH7.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch7-02",
    "content": "Bản chất phân bổ bộ nhớ của kiểu hợp nhất (union) trong ngôn ngữ lập trình C là gì?",
    "options": [
        "Tất cả các thành viên chia sẻ chung một vùng nhớ có kích thước bằng trường có kích thước lớn nhất.",
        "Mỗi thành viên được cấp phát một ô nhớ độc lập riêng biệt tương tự như cấu trúc struct bình thường.",
        "Bộ nhớ của union được tự động cấp phát phân tán trên phân vùng Heap thông qua hàm malloc hệ thống.",
        "Kích thước của union luôn luôn bằng tổng kích thước bộ nhớ của tất cả các thành viên cộng dồn lại."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.450 và HCMUTE tr.175: Trong union, tất cả thành viên dùng chung một vùng nhớ (cùng địa chỉ bắt đầu). Kích thước union bằng kích thước thành viên lớn nhất (cộng đệm nếu có).",
    "ref": {"uttPage": "Trang 450", "hcmutePage": "Trang 175", "section": "7.2"}
})

# Q6
QUESTIONS_CH7.append({
    "num": 6, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch7-02",
    "content": "Điều gì sẽ xảy ra khi một trường của union được gán giá trị mới trong chương trình?",
    "options": [
        "Giá trị mới sẽ ghi đè lên vùng nhớ dùng chung và làm sai lệch giá trị của các trường thành viên khác.",
        "Chương trình sẽ tự động sao lưu dữ liệu của các trường cũ vào một vùng nhớ tạm thời trên Stack.",
        "Trình biên dịch sẽ báo lỗi xung đột ghi dữ liệu nếu các trường khác chưa được giải phóng bộ nhớ.",
        "Giá trị của các trường khác vẫn hoàn toàn được bảo toàn nguyên vẹn nhờ cơ chế phân trang ô nhớ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.452 và HCMUTE tr.176: Vì các thành viên của union dùng chung bộ nhớ, việc ghi vào trường này sẽ ghi đè lên các byte của các trường khác.",
    "ref": {"uttPage": "Trang 452", "hcmutePage": "Trang 176", "section": "7.2"}
})

# Q7 (Mock)
QUESTIONS_CH7.append({
    "num": 7, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch7-03",
    "content": "Quy ước giá trị mặc định của các hằng số trong kiểu liệt kê enum (khi không gán tường minh) là gì?",
    "options": [
        "Bắt đầu từ số 0 cho phần tử đầu tiên và mỗi phần tử tiếp theo tự động tăng thêm đúng 1 đơn vị.",
        "Bắt đầu từ số 1 cho phần tử đầu tiên và mỗi phần tử tiếp theo tự động tăng thêm đúng 1 đơn vị.",
        "Nhận các giá trị rác ngẫu nhiên phụ thuộc vào vị trí thanh ghi CPU khi khởi động chương trình.",
        "Tất cả các phần tử trong enum đều tự động nhận cùng một giá trị mặc định bằng số nguyên 0."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.456 và HCMUTE tr.180: Trong enum, nếu không gán giá trị, phần tử đầu tiên là 0, các phần tử tiếp theo tăng dần 1 (1, 2, 3...).",
    "ref": {"uttPage": "Trang 456", "hcmutePage": "Trang 180", "section": "7.3"}
})

# Q8
QUESTIONS_CH7.append({
    "num": 8, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch7-04",
    "content": "Từ khóa typedef trong ngôn ngữ C có vai trò và tác dụng chủ yếu nào sau đây?",
    "options": [
        "Đặt tên bí danh (Alias) mới cho một kiểu dữ liệu có sẵn giúp mã nguồn ngắn gọn và dễ hiểu hơn.",
        "Định nghĩa ra một kiểu dữ liệu hoàn toàn mới và yêu cầu hệ điều hành phân bổ thêm bộ nhớ RAM.",
        "Ép kiểu dữ liệu tự động giữa các biến có kiểu dữ liệu không tương thích trong quá trình chạy.",
        "Khóa giá trị của biến cấu trúc để ngăn không cho bất kỳ hàm nào sửa đổi nội dung các trường."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.460 và HCMUTE tr.184: `typedef` không tạo kiểu mới mà chỉ tạo một bí danh (alias) cho kiểu dữ liệu hiện có (ví dụ `typedef struct SinhVien SV;`).",
    "ref": {"uttPage": "Trang 460", "hcmutePage": "Trang 184", "section": "7.4"}
})

# Q9
QUESTIONS_CH7.append({
    "num": 9, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Khi thực hiện phép gán giữa hai biến cấu trúc cùng kiểu (sv1 = sv2;), điều gì diễn ra?",
    "options": [
        "Sao chép nông từng byte nhị phân (Bitwise shallow copy) từ toàn bộ các trường của sv2 sang sv1.",
        "Hai biến cấu trúc sẽ cùng trỏ chung vào một ô nhớ duy nhất tương tự như phép gán các con trỏ.",
        "Trình biên dịch báo lỗi vì ngôn ngữ C không hỗ trợ phép gán trực tiếp giữa hai biến cấu trúc.",
        "Chỉ có các trường dữ liệu kiểu số nguyên mới được sao chép còn các trường khác bị giữ nguyên."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.426 và HCMUTE tr.163: C hỗ trợ phép gán struct cùng kiểu: toàn bộ nội dung của sv2 được chép bit-by-bit sang sv1 (shallow copy). Nếu có con trỏ, chỉ địa chỉ được chép.",
    "ref": {"uttPage": "Trang 426", "hcmutePage": "Trang 163", "section": "7.1"}
})

# Q10
QUESTIONS_CH7.append({
    "num": 10, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Vì sao khi truyền biến cấu trúc có kích thước lớn vào hàm, người ta luôn ưu tiên truyền con trỏ?",
    "options": [
        "Để tránh chi phí sao chép toàn bộ khối dữ liệu lớn lên Stack giúp tối ưu hóa hiệu năng chương trình.",
        "Vì ngôn ngữ C hoàn toàn cấm việc truyền một biến cấu trúc theo cơ chế truyền tham trị thông thường.",
        "Để hàm tự động giải phóng vùng nhớ của biến cấu trúc ngay sau khi hoàn thành xong việc tính toán.",
        "Vì chỉ có truyền con trỏ mới cho phép hiển thị các trường dữ liệu của cấu trúc ra màn hình chuẩn."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.434 và HCMUTE tr.168: Truyền struct theo tham trị phải copy toàn bộ các bytes lên Stack. Truyền con trỏ (thường kèm `const`) chỉ copy 4/8 bytes địa chỉ, nhanh và tiết kiệm bộ nhớ.",
    "ref": {"uttPage": "Trang 434", "hcmutePage": "Trang 168", "section": "7.1"}
})

# Q11
QUESTIONS_CH7.append({
    "num": 11, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch7-03",
    "content": "Giá trị của các hằng số trong enum có thể được gán giá trị tùy ý hay không?",
    "options": [
        "Có thể gán giá trị số nguyên bất kỳ tùy ý, các phần tử đứng sau không gán sẽ tự động tăng tiếp 1.",
        "Hoàn toàn không thể gán giá trị tùy ý vì enum bắt buộc phải tuân theo thứ tự số nguyên cố định từ 0.",
        "Chỉ có phần tử đầu tiên mới được phép gán giá trị còn tất cả các phần tử sau phải tự động tăng.",
        "Có thể gán bất kỳ kiểu dữ liệu nào kể cả chuỗi ký tự hoặc các số thực dấu phẩy động dạng float."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.457 và HCMUTE tr.181: Các mục trong enum là hằng số nguyên. Ta có thể gán giá trị nguyên tùy ý (kể cả số âm hay trùng nhau). Phần tử kế tiếp sẽ bằng phần tử trước + 1.",
    "ref": {"uttPage": "Trang 457", "hcmutePage": "Trang 181", "section": "7.3"}
})

# Q12
QUESTIONS_CH7.append({
    "num": 12, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Cấu trúc tự trỏ (Self-referential structure) trong C thường được áp dụng để xây dựng cấu trúc nào?",
    "options": [
        "Các cấu trúc dữ liệu động như danh sách liên kết đơn, cây nhị phân tìm kiếm hoặc đồ thị liên thông.",
        "Các mảng tĩnh có kích thước cố định được cấp phát trực tiếp trên bộ nhớ ngăn xếp Call Stack.",
        "Các khối lệnh điều khiển rẽ nhánh phức tạp thay thế hoàn toàn cho câu lệnh lựa chọn switch-case.",
        "Các bộ đệm nhập xuất dữ liệu tốc độ cao dùng cho các thiết bị phần cứng ngoại vi của máy tính."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.440 và HCMUTE tr.172: Struct tự trỏ (chứa con trỏ trỏ tới chính kiểu struct đó, vd `struct Node *next;`) là nền tảng của danh sách liên kết, cây, stack, queue.",
    "ref": {"uttPage": "Trang 440", "hcmutePage": "Trang 172", "section": "7.1"}
})


# ==========================================
# 2. OUTPUT / TRACE (9 câu: Q13 -> Q21)
# ==========================================

# Q13
QUESTIONS_CH7.append({
    "num": 13, "subtype": "output", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Kích thước in ra của cấu trúc struct có độn bộ nhớ (Padding) sau đây trên hệ 32/64-bit là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nstruct Data {\n    char c;\n    int i;\n};\n\nint main(void) {\n    printf(\"%zu\", sizeof(struct Data));\n    return 0;\n}",
    "options": [
        "In ra số 8 (char chiếm 1 byte kèm 3 bytes đệm để căn lề cho int 4 bytes; tổng là 8 bytes).",
        "In ra số 5 (bằng đúng tổng số byte thực tế của char 1 byte cộng với int 4 bytes không đệm).",
        "In ra số 4 (trình biên dịch tự động nén biến char vào chung ô nhớ với biến số nguyên int).",
        "In ra số 16 (trình biên dịch luôn căn lề mọi cấu trúc theo chuẩn khối nhớ bội số 16 bytes)."
    ],
    "correct": 0, "mock": False,
    "explanation": "int i yêu cầu căn lề 4 bytes. char c (1 byte) được đệm thêm 3 bytes (padding). Do đó `sizeof(struct Data)` là 1 + 3 + 4 = 8 bytes.",
    "ref": {"uttPage": "Trang 428", "hcmutePage": "Trang 164", "section": "7.1"}
})

# Q14 (Mock)
QUESTIONS_CH7.append({
    "num": 14, "subtype": "output", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Kết quả in ra của chương trình thao tác với con trỏ struct sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nstruct Point {\n    int x, y;\n};\n\nint main(void) {\n    struct Point p = {10, 20};\n    struct Point *ptr = &p;\n    ptr->x += 5;\n    printf(\"%d %d\", p.x, ptr->y);\n    return 0;\n}",
    "options": [
        "In ra '15 20' (toán tử ptr->x += 5 làm thay đổi trực tiếp giá trị trường x của biến cấu trúc p).",
        "In ra '10 20' (việc thay đổi qua con trỏ ptr không làm thay đổi giá trị của biến cấu trúc gốc p).",
        "In ra '15 25' (cả hai trường x và y đều đồng thời được tăng thêm 5 đơn vị qua con trỏ ptr).",
        "Chương trình gặp lỗi biên dịch do không thể sử dụng toán tử mũi tên trên con trỏ cấu trúc."
    ],
    "correct": 0, "mock": True,
    "explanation": "ptr trỏ tới p. ptr->x += 5 tăng p.x từ 10 lên 15. ptr->y giữ nguyên là 20. In ra '15 20'.",
    "ref": {"uttPage": "Trang 431", "hcmutePage": "Trang 166", "section": "7.1"}
})

# Q15
QUESTIONS_CH7.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch7-02",
    "content": "Kích thước in ra của biến hợp nhất union sau đây là bao nhiêu bytes?",
    "codeSnippet": "#include <stdio.h>\n\nunion TapHop {\n    char c;\n    int i;\n    double d;\n};\n\nint main(void) {\n    printf(\"%zu\", sizeof(union TapHop));\n    return 0;\n}",
    "options": [
        "In ra số 8 (kích thước của union bằng kích thước của thành viên lớn nhất là double chiếm 8 bytes).",
        "In ra số 13 (bằng tổng kích thước của tất cả các trường: char 1 + int 4 + double 8 = 13 bytes).",
        "In ra số 4 (do kiểu dữ liệu int có mức độ sử dụng phổ biến nhất trong các phép toán số học).",
        "In ra số 1 (do thành viên char được khai báo ở dòng đầu tiên của cấu trúc hợp nhất dữ liệu)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Kích thước của union bằng kích thước của thành viên lớn nhất. Ở đây double chiếm 8 bytes, lớn hơn char (1) và int (4). Do đó `sizeof` là 8 bytes.",
    "ref": {"uttPage": "Trang 451", "hcmutePage": "Trang 175", "section": "7.2"}
})

# Q16
QUESTIONS_CH7.append({
    "num": 16, "subtype": "output", "diff": "medium", "articleId": "c-art-ch7-03",
    "content": "Giá trị in ra của hằng số THU_TU trong kiểu liệt kê enum sau là bao nhiêu?",
    "codeSnippet": "#include <stdio.h>\n\nenum Ngay { HAI = 2, BA, TU, NAM = 10, SAU };\n\nint main(void) {\n    printf(\"%d %d\", TU, SAU);\n    return 0;\n}",
    "options": [
        "In ra '4 11' (BA tự động tăng thành 3, TU tăng thành 4; SAU tăng từ NAM 10 thành 11).",
        "In ra '2 5' (các phần tử trong enum luôn được đánh số tuần tự bắt đầu từ giá trị gốc là 0).",
        "In ra '4 6' (giá trị của SAU được tính tiếp nối theo chỉ số phần tử tự nhiên thứ sáu).",
        "Chương trình gặp lỗi biên dịch do không được phép gán giá trị không liên tục trong enum."
    ],
    "correct": 0, "mock": False,
    "explanation": "HAI=2 -> BA=3, TU=4. NAM=10 -> SAU=11. In ra '4 11'.",
    "ref": {"uttPage": "Trang 457", "hcmutePage": "Trang 181", "section": "7.3"}
})

# Q17
QUESTIONS_CH7.append({
    "num": 17, "subtype": "output", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Giá trị in ra của mảng các cấu trúc struct sau khi thực thi là gì?",
    "codeSnippet": "#include <stdio.h>\n\nstruct Item {\n    int id;\n    int val;\n};\n\nint main(void) {\n    struct Item list[2] = {{1, 10}, {2, 20}};\n    printf(\"%d\", list[0].val + list[1].val);\n    return 0;\n}",
    "options": [
        "In ra số 30 (tổng giá trị của hai trường val: list[0].val là 10 và list[1].val là 20: 10+20=30).",
        "In ra số 3 (tổng giá trị của hai trường định danh mã id của hai phần tử trong mảng: 1+2=3).",
        "In ra số 33 (tổng của toàn bộ tất cả bốn trường dữ liệu có trong mảng cấu trúc hai phần tử).",
        "Chương trình gặp lỗi biên dịch do không thể khởi tạo mảng cấu trúc bằng các cặp ngoặc nhọn."
    ],
    "correct": 0, "mock": False,
    "explanation": "list[0].val = 10, list[1].val = 20. Tổng = 10 + 20 = 30.",
    "ref": {"uttPage": "Trang 432", "hcmutePage": "Trang 167", "section": "7.1"}
})

# Q18
QUESTIONS_CH7.append({
    "num": 18, "subtype": "output", "diff": "hard", "articleId": "c-art-ch7-02",
    "content": "Hiện tượng ghi đè ô nhớ trong union: Kết quả in ra của đoạn chương trình sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nunion Test {\n    int x;\n    char c;\n};\n\nint main(void) {\n    union Test t;\n    t.x = 0;\n    t.c = 'A'; // 'A' co ma ASCII la 65\n    printf(\"%d\", t.x);\n    return 0;\n}",
    "options": [
        "In ra số 65 (thao tác gán t.c = 'A' ghi mã 65 vào byte đầu tiên của vùng nhớ dùng chung biến x).",
        "In ra số 0 (giá trị của biến x được bảo toàn nguyên vẹn và không bị ảnh hưởng bởi phép gán t.c).",
        "In ra ký tự 'A' (hàm printf tự động phát hiện kiểu dữ liệu được gán gần nhất để hiển thị ra).",
        "Chương trình sập do hai kiểu dữ liệu int và char có kích thước không tương thích trong union."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trên kiến trúc Little Endian, byte thấp của t.x (đang bằng 0) bị ghi đè bởi 'A' (65 = 0x41). t.x trở thành 65. In ra 65.",
    "ref": {"uttPage": "Trang 452", "hcmutePage": "Trang 176", "section": "7.2"}
})

# Q19
QUESTIONS_CH7.append({
    "num": 19, "subtype": "output", "diff": "medium", "articleId": "c-art-ch7-04",
    "content": "Chương trình sử dụng typedef cho con trỏ sau đây sẽ in ra kết quả số học nào?",
    "codeSnippet": "#include <stdio.h>\n\ntypedef int* IntPtr;\n\nint main(void) {\n    int a = 50;\n    IntPtr p = &a;\n    *p = 80;\n    printf(\"%d\", a);\n    return 0;\n}",
    "options": [
        "In ra số 80 (IntPtr là bí danh của int*, giải tham chiếu *p = 80 làm thay đổi giá trị của biến a).",
        "In ra số 50 (biến a giữ nguyên giá trị ban đầu do IntPtr chỉ là một kiểu dữ liệu hình thức).",
        "Chương trình gặp lỗi biên dịch do từ khóa typedef không cho phép định nghĩa bí danh cho con trỏ.",
        "In ra địa chỉ ô nhớ của biến a trên phân vùng bộ nhớ ngăn xếp dưới dạng số nguyên cơ số mười."
    ],
    "correct": 0, "mock": False,
    "explanation": "IntPtr là alias của `int *`. `IntPtr p = &a;` tương đương `int *p = &a;`. `*p = 80;` làm a = 80.",
    "ref": {"uttPage": "Trang 461", "hcmutePage": "Trang 185", "section": "7.4"}
})

# Q20
QUESTIONS_CH7.append({
    "num": 20, "subtype": "output", "diff": "hard", "articleId": "c-art-ch7-01",
    "content": "Sao chép cấu trúc lồng nhau: Đoạn chương trình sau đây in ra kết quả nào?",
    "codeSnippet": "#include <stdio.h>\n\nstruct Diem {\n    int x, y;\n};\n\nstruct Hinh {\n    struct Diem p1;\n};\n\nint main(void) {\n    struct Hinh h1 = {{3, 4}};\n    struct Hinh h2 = h1;\n    h2.p1.x = 9;\n    printf(\"%d %d\", h1.p1.x, h2.p1.x);\n    return 0;\n}",
    "options": [
        "In ra '3 9' (phép gán h2 = h1 sao chép độc lập toàn bộ dữ liệu, sửa h2 không ảnh hưởng đến h1).",
        "In ra '9 9' (h1 và h2 chia sẻ chung vùng nhớ cấu trúc lồng nhau nên thay đổi h2 làm đổi cả h1).",
        "In ra '3 3' (h2 không thể sửa đổi giá trị trường x sau khi đã được sao chép từ cấu trúc h1).",
        "Chương trình gặp lỗi biên dịch do cấu trúc struct trong C không cho phép định nghĩa lồng nhau."
    ],
    "correct": 0, "mock": False,
    "explanation": "Phép gán struct tạo ra bản sao độc lập (shallow copy). Sửa `h2.p1.x = 9` không tác động đến `h1.p1.x` (vẫn bằng 3). In '3 9'.",
    "ref": {"uttPage": "Trang 427", "hcmutePage": "Trang 163", "section": "7.1"}
})

# Q21
QUESTIONS_CH7.append({
    "num": 21, "subtype": "output", "diff": "medium", "articleId": "c-art-ch7-03",
    "content": "Giá trị của biến boolean cờ trạng thái sử dụng enum sau đây in ra kết quả gì?",
    "codeSnippet": "#include <stdio.h>\n\ntypedef enum { FALSE = 0, TRUE = 1 } Bool;\n\nint main(void) {\n    Bool status = TRUE;\n    printf(\"%d\", status && FALSE);\n    return 0;\n}",
    "options": [
        "In ra số 0 (phép toán logic AND giữa TRUE có giá trị 1 và FALSE có giá trị 0 cho ra kết quả 0).",
        "In ra số 1 (do biến status được khởi tạo ban đầu mang giá trị TRUE có độ ưu tiên cao hơn).",
        "In ra chuỗi 'FALSE' (hàm printf tự động chuyển đổi giá trị enum thành chuỗi văn bản tương ứng).",
        "Chương trình gặp lỗi biên dịch do kiểu enum không thể tham gia vào các biểu thức logic AND."
    ],
    "correct": 0, "mock": False,
    "explanation": "status là 1 (TRUE). 1 && 0 (FALSE) = 0. In ra 0.",
    "ref": {"uttPage": "Trang 458", "hcmutePage": "Trang 182", "section": "7.3"}
})


# ==========================================
# 3. DEBUG (6 câu: Q22 -> Q27)
# ==========================================

# Q22
QUESTIONS_CH7.append({
    "num": 22, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Lỗi cú pháp nào khiến đoạn mã truy xuất thành phần struct qua con trỏ sau bị từ chối biên dịch?",
    "codeSnippet": "struct SinhVien {\n    int id;\n};\nstruct SinhVien sv = {101};\nstruct SinhVien *ptr = &sv;\nprintf(\"%d\", ptr.id);",
    "options": [
        "Sử dụng nhầm toán tử chấm '.' cho con trỏ struct, bắt buộc phải dùng toán tử mũi tên 'ptr->id'.",
        "Biến con trỏ ptr không được phép trỏ tới địa chỉ của một biến cấu trúc đã được khởi tạo.",
        "Thiếu từ khóa typedef trước định nghĩa cấu trúc SinhVien để trình biên dịch nhận diện kiểu.",
        "Hàm printf không thể in được các trường dữ liệu số nguyên của biến cấu trúc qua con trỏ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Bẫy cú pháp kinh điển: `ptr` là con trỏ struct, phải dùng `ptr->id` hoặc `(*ptr).id`. Dùng `ptr.id` gây lỗi biên dịch 'request for member 'id' in something not a structure or union'.",
    "ref": {"uttPage": "Trang 430", "hcmutePage": "Trang 166", "section": "7.1"}
})

# Q23
QUESTIONS_CH7.append({
    "num": 23, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Vì sao định nghĩa cấu trúc tự trỏ sau đây phát sinh lỗi biên dịch nghiêm trọng?",
    "codeSnippet": "struct Node {\n    int data;\n    struct Node next; // Bi loi bien dich\n};",
    "options": [
        "Khai báo trường chứa trực tiếp một biến struct Node khiến cấu trúc có kích thước vô hạn không xác định.",
        "Từ khóa struct không được phép xuất hiện hai lần bên trong cùng một khối định nghĩa cấu trúc.",
        "Tên của trường dữ liệu 'next' trùng với một từ khóa được bảo lưu trong thư viện chuẩn của C.",
        "Trường dữ liệu data bắt buộc phải được khai báo ở dòng cuối cùng của cấu trúc danh sách liên kết."
    ],
    "correct": 0, "mock": False,
    "explanation": "Struct không thể chứa chính nó theo giá trị (infinite size recursion). Phải chứa CON TRỎ trỏ tới chính nó: `struct Node *next;` (kích thước con trỏ luôn cố định 4/8 bytes).",
    "ref": {"uttPage": "Trang 441", "hcmutePage": "Trang 172", "section": "7.1"}
})

# Q24 (Mock)
QUESTIONS_CH7.append({
    "num": 24, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Đoạn chương trình sau đây phát sinh lỗi nghiêm trọng nào khi thực hiện câu lệnh gán chuỗi?",
    "codeSnippet": "struct SinhVien {\n    char ten[30];\n};\nstruct SinhVien sv;\nsv.ten = \"Nguyen Van A\"; // Bi loi bien dich",
    "options": [
        "sv.ten là tên mảng (hằng con trỏ), không thể làm vế trái phép gán; phải dùng hàm strcpy(sv.ten, ...).",
        "Chuỗi \"Nguyen Van A\" có độ dài vượt quá dung lượng 30 bytes đã khai báo của mảng cấu trúc.",
        "Biến cấu trúc sv bắt buộc phải được cấp phát động bằng malloc trước khi gán các trường chuỗi.",
        "Ngôn ngữ C không cho phép lưu trữ chuỗi ký tự bên trong các thành viên của một cấu trúc struct."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy gán mảng chuỗi trong struct: `sv.ten` là mảng cố định, không thể gán bằng toán tử `=`. Cần dùng `strcpy(sv.ten, \"Nguyen Van A\");` hoặc gán khi khởi tạo `struct SinhVien sv = {\"Nguyen Van A\"};`.",
    "ref": {"uttPage": "Trang 426", "hcmutePage": "Trang 163", "section": "7.1"}
})

# Q25
QUESTIONS_CH7.append({
    "num": 25, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Lỗi cú pháp nào thường gặp nhất khi kết thúc khối định nghĩa struct trong ngôn ngữ C?",
    "options": [
        "Quên đặt dấu chấm phẩy ';' ngay sau dấu ngoặc nhọn đóng '}' của khối định nghĩa cấu trúc.",
        "Quên khai báo ít nhất một biến cấu trúc đi kèm ngay sau dấu ngoặc nhọn đóng của cấu trúc.",
        "Sử dụng dấu ngoặc đơn thay vì dấu ngoặc nhọn để bao quanh toàn bộ các trường của cấu trúc.",
        "Thiếu từ khóa endstruct đặt ở dòng lệnh cuối cùng để thông báo kết thúc định nghĩa cấu trúc."
    ],
    "correct": 0, "mock": False,
    "explanation": "Định nghĩa struct trong C bắt buộc kết thúc bằng dấu chấm phẩy: `struct Name { ... };`. Thiếu dấu ';' sẽ dẫn đến lỗi biên dịch ở dòng tiếp theo.",
    "ref": {"uttPage": "Trang 423", "hcmutePage": "Trang 160", "section": "7.1"}
})

# Q26
QUESTIONS_CH7.append({
    "num": 26, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Vì sao phép so sánh trực tiếp 'if (sv1 == sv2)' bị trình biên dịch từ chối và báo lỗi?",
    "options": [
        "Ngôn ngữ C không định nghĩa toán tử == cho kiểu struct vì sự hiện diện của các byte đệm rác (padding).",
        "Do hai biến cấu trúc sv1 và sv2 luôn luôn nằm ở hai địa chỉ ô nhớ hoàn toàn khác nhau trên RAM.",
        "Do toán tử == chỉ có thể áp dụng cho các kiểu dữ liệu do người dùng tự định nghĩa bằng typedef.",
        "Do cấu trúc struct không hỗ trợ phép so sánh nếu có chứa trường dữ liệu kiểu số thực dấu phẩy động."
    ],
    "correct": 0, "mock": False,
    "explanation": "Chuẩn C cấm so sánh `sv1 == sv2`. Struct có thể chứa các byte padding rác nên so sánh bit-by-bit (memcmp) không tin cậy. Muốn so sánh, lập trình viên phải tự so sánh từng trường cụ thể.",
    "ref": {"uttPage": "Trang 427", "hcmutePage": "Trang 163", "section": "7.1"}
})

# Q27
QUESTIONS_CH7.append({
    "num": 27, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch7-02",
    "content": "Đoạn mã sau mắc phải lỗi suy diễn nào về dữ liệu khi sử dụng hợp nhất union?",
    "codeSnippet": "union DuLieu {\n    int i;\n    float f;\n};\nunion DuLieu data;\ndata.i = 10;\ndata.f = 2.5f;\nprintf(\"%d\", data.i);",
    "options": [
        "Kỳ vọng data.i vẫn giữ giá trị 10 trong khi phép gán data.f = 2.5f đã ghi đè toàn bộ vùng nhớ chung.",
        "Kiểu dữ liệu float không được phép khai báo bên trong một cấu trúc hợp nhất union của ngôn ngữ C.",
        "Hàm printf không thể in được thành viên số nguyên int nếu nó được khai báo trước thành viên float.",
        "Thiếu câu lệnh giải phóng bộ nhớ động giữa hai lượt gán giá trị cho hai trường thành viên khác nhau."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong union, data.i và data.f chung 4 bytes nhớ. Khi gán `data.f = 2.5f`, dạng biểu diễn nhị phân IEEE 754 của float ghi đè lên ô nhớ, khiến `data.i` bị sai lệch hoàn toàn, không còn là 10.",
    "ref": {"uttPage": "Trang 452", "hcmutePage": "Trang 176", "section": "7.2"}
})


# ==========================================
# 4. FILL-IN (3 câu: Q28 -> Q30)
# ==========================================

# Q28
QUESTIONS_CH7.append({
    "num": 28, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch7-01",
    "content": "Cần điền toán tử nào vào vị trí (...) để truy xuất trường tuoi thông qua biến con trỏ struct pSv?",
    "codeSnippet": "struct SinhVien *pSv = &sv;\nprintf(\"%d\", pSv...tuoi);",
    "options": [
        "Điền toán tử mũi tên '->' để giải tham chiếu con trỏ cấu trúc và truy xuất thành viên chỉ định.",
        "Điền toán tử dấu chấm '.' để truy cập trực tiếp thành phần của cấu trúc dữ liệu đang xét.",
        "Điền toán tử hai dấu hai chấm '::' để định vị trường thuộc tính trong không gian tên struct.",
        "Điền toán tử dấu sao '*' để kích hoạt thao tác giải tham chiếu ô nhớ trước khi truy xuất trường."
    ],
    "correct": 0, "mock": False,
    "explanation": "Con trỏ struct dùng toán tử `->` để truy xuất trường: `pSv->tuoi`.",
    "ref": {"uttPage": "Trang 430", "hcmutePage": "Trang 166", "section": "7.1"}
})

# Q29
QUESTIONS_CH7.append({
    "num": 29, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch7-04",
    "content": "Cần điền từ khóa nào vào chỗ trống (...) để định nghĩa một bí danh mới TenMoi cho kiểu dữ liệu int?",
    "codeSnippet": "... int TenMoi;\nTenMoi x = 100;",
    "options": [
        "Điền từ khóa 'typedef' để thiết lập một định danh bí danh kiểu dữ liệu hợp lệ trong ngôn ngữ C.",
        "Điền từ khóa 'define' để tạo macro tiền xử lý thay thế chuỗi ký tự trong toàn bộ tệp mã nguồn.",
        "Điền từ khóa 'alias' để ánh xạ trực tiếp kiểu dữ liệu nguyên thủy sang một tên gọi người dùng mới.",
        "Điền từ khóa 'struct' để đóng gói kiểu dữ liệu số nguyên int vào một cấu trúc dữ liệu mới tạo."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cú pháp: `typedef int TenMoi;` tạo alias TenMoi cho kiểu int.",
    "ref": {"uttPage": "Trang 460", "hcmutePage": "Trang 184", "section": "7.4"}
})

# Q30
QUESTIONS_CH7.append({
    "num": 30, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch7-01",
    "content": "Cần điền kiểu dữ liệu nào vào chỗ trống (...) để hoàn thiện nút liên kết đơn tự trỏ chuẩn trong C?",
    "codeSnippet": "struct Node {\n    int data;\n    ... next;\n};",
    "options": [
        "Điền 'struct Node*' để tạo ra một trường con trỏ lưu trữ địa chỉ của phần tử nút kế tiếp.",
        "Điền 'struct Node' để nhúng trực tiếp toàn bộ một đối tượng nút mới vào trong phần tử hiện tại.",
        "Điền 'void*' để tạo ra một con trỏ tổng quát không thể xác định kiểu liên kết của danh sách.",
        "Điền 'int*' để trỏ tới trường dữ liệu số nguyên của phần tử tiếp theo trong chuỗi liên kết."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cấu trúc danh sách liên kết tự trỏ: `struct Node *next;`.",
    "ref": {"uttPage": "Trang 441", "hcmutePage": "Trang 172", "section": "7.1"}
})

print(f"Constructed Chapter 7: {len(QUESTIONS_CH7)} questions.")

# Verify length delta <= 20%
failed = 0
for q in QUESTIONS_CH7:
    lens = [len(opt) for opt in q["options"]]
    max_l = max(lens)
    min_l = min(lens)
    delta = (max_l - min_l) / max_l
    if delta > 0.20:
        print(f"FAIL Q{q['num']}: delta={delta:.1%}: {lens}")
        failed += 1

if failed == 0:
    print("ALL 30 QUESTIONS IN CHAPTER 7 PASSED LENGTH DELTA <= 20%!")
else:
    print(f"FAILED {failed} questions in Chapter 7.")
