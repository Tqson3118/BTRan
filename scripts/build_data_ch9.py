# -*- coding: utf-8 -*-
"""
scripts/build_data_ch9.py
Tạo 25 câu hỏi trắc nghiệm Chương 9: C++ Căn bản & Hướng đối tượng (OOP)
- 10 Theory (Q1 -> Q10)
- 7 Output/Trace (Q11 -> Q17)
- 5 Debug (Q18 -> Q22)
- 3 Fill-in (Q23 -> Q25)
- 5 Mock Exam Preset (Q1, Q4, Q9, Q14, Q20)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

QUESTIONS_CH9 = []

# ==========================================
# 1. THEORY (10 câu: Q1 -> Q10)
# ==========================================

# Q1 (Mock)
QUESTIONS_CH9.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch9-01",
    "content": "Bản chất của biến tham chiếu (Reference variable, ví dụ: int &ref = x) trong C++ là gì?",
    "options": [
        "Là một bí danh (Alias) cùng chia sẻ một vị trí ô nhớ và bắt buộc phải khởi tạo ngay khi khai báo.",
        "Là một biến con trỏ thông thường có khả năng tự do thay đổi địa chỉ trỏ sang các biến số khác.",
        "Là một bản sao độc lập của biến gốc được cấp phát tự động trên phân vùng bộ nhớ động Heap.",
        "Là một biến hằng số chỉ đọc (Read-only) không bao giờ cho phép người dùng thay đổi giá trị."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ chuẩn C++: Biến tham chiếu là bí danh (alias) của biến đã có. Tham chiếu không có ô nhớ riêng để chứa địa chỉ như con trỏ và bắt buộc phải gắn với một lvalue ngay khi khai báo.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.1"}
})

# Q2
QUESTIONS_CH9.append({
    "num": 2, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch9-01",
    "content": "Điểm khác biệt căn bản nhất giữa biến tham chiếu và biến con trỏ trong ngôn ngữ C++ là gì?",
    "options": [
        "Tham chiếu không thể mang giá trị NULL và không thể gán lại để trỏ sang một biến số khác.",
        "Tham chiếu có thể giải tham chiếu bằng toán tử '*' tương tự như biến con trỏ thông thường.",
        "Con trỏ bắt buộc phải được khởi tạo ngay khi khai báo còn biến tham chiếu thì không cần.",
        "Tham chiếu tiêu tốn gấp đôi dung lượng bộ nhớ RAM so với biến con trỏ trên hệ thống 64-bit."
    ],
    "correct": 0, "mock": False,
    "explanation": "Khác với con trỏ: 1) Tham chiếu không thể null; 2) Tham chiếu không thể trỏ sang đối tượng khác sau khi đã gắn; 3) Cú pháp truy cập không cần dùng toán tử giải tham chiếu *.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.1"}
})

# Q3
QUESTIONS_CH9.append({
    "num": 3, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch9-02",
    "content": "Quy tắc định danh để hai hàm được xem là nạp chồng (Function Overloading) hợp lệ trong C++ là gì?",
    "options": [
        "Cùng tên hàm nhưng phải khác nhau về danh sách kiểu dữ liệu hoặc số lượng của các tham số.",
        "Chỉ cần khác nhau về kiểu dữ liệu trả về của hàm còn danh sách tham số hoàn toàn giống nhau.",
        "Cùng tên hàm và cùng tham số nhưng một hàm bắt buộc phải có từ khóa inline đứng phía trước.",
        "Bắt buộc hai hàm phải được khai báo ở hai không gian tên namespace hoàn toàn tách biệt nhau."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ C++ overload resolution: Nạp chồng hàm yêu cầu khác biệt về chữ ký hàm (function signature: số lượng, kiểu, hoặc thứ tự tham số). Chỉ khác kiểu trả về sẽ gây lỗi biên dịch.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.2"}
})

# Q4 (Mock)
QUESTIONS_CH9.append({
    "num": 4, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch9-03",
    "content": "Ưu điểm vượt trội của cặp toán tử new / delete trong C++ so với cặp hàm malloc / free trong C là gì?",
    "options": [
        "Tự động kích hoạt hàm khởi tạo (Constructor) và hàm hủy (Destructor) của đối tượng được tạo.",
        "Toán tử new không thể gây ra lỗi tràn bộ nhớ ngay cả khi hệ thống cạn kiệt dung lượng RAM.",
        "Toán tử delete tự động giải phóng toàn bộ các con trỏ khác đang trỏ vào cùng một vùng nhớ.",
        "Toán tử new tự động giải phóng vùng nhớ khi đối tượng ra khỏi phạm vi khối lệnh cục bộ."
    ],
    "correct": 0, "mock": True,
    "explanation": "Toán tử `new` tính toán kích thước tự động và gọi Constructor; `delete` gọi Destructor trước khi trả bộ nhớ. `malloc/free` chỉ cấp phát/thu hồi byte thô mà không gọi Constructor/Destructor.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.3"}
})

# Q5
QUESTIONS_CH9.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch9-03",
    "content": "Quy tắc giải phóng mảng động đối tượng được cấp phát bằng toán tử 'new ClassName[N]' là gì?",
    "options": [
        "Bắt buộc phải sử dụng toán tử 'delete[] ptr;' để kích hoạt đầy đủ hàm hủy của từng đối tượng.",
        "Có thể sử dụng toán tử 'delete ptr;' thông thường vì trình biên dịch tự động đếm số phần tử.",
        "Chỉ cần gọi hàm free(ptr) của ngôn ngữ C là có thể thu hồi hoàn toàn mảng động trong C++.",
        "Mảng động trong C++ sẽ được bộ gom rác tự động giải phóng mà không cần lập trình viên can thiệp."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cấp phát bằng `new[]` phải giải phóng bằng `delete[]`. Nếu dùng `delete`, chỉ hàm hủy của phần tử đầu tiên được gọi (Undefined Behavior).",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.3"}
})

# Q6
QUESTIONS_CH9.append({
    "num": 6, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch9-04",
    "content": "Phạm vi truy cập mặc định (Default access specifier) của các thành viên trong một class C++ là gì?",
    "options": [
        "Mặc định là private (chỉ các phương thức nội bộ bên trong class mới có quyền truy cập trực tiếp).",
        "Mặc định là public (tất cả các hàm bên ngoài đều có thể truy cập tự do vào các thuộc tính).",
        "Mặc định là protected (chỉ class hiện tại và các lớp dẫn xuất kế thừa mới được phép truy cập).",
        "Mặc định là static (các thành viên được chia sẻ chung cho tất cả các đối tượng của lớp đó)."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C++, `class` mặc định các thành viên là `private`. Trong `struct`, mặc định là `public`. Đây là điểm khác biệt duy nhất giữa class và struct trong C++.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.4"}
})

# Q7
QUESTIONS_CH9.append({
    "num": 7, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch9-04",
    "content": "Đặc điểm nhận diện cú pháp của hàm khởi tạo (Constructor) trong một lớp C++ là gì?",
    "options": [
        "Có tên trùng hoàn toàn với tên của class và tuyệt đối không có kiểu dữ liệu trả về (kể cả void).",
        "Có tên bắt đầu bằng dấu ngã '~' và có kiểu dữ liệu trả về mặc định là số nguyên int có dấu.",
        "Bắt buộc phải có từ khóa virtual đứng trước và có tham số đầu vào là con trỏ đối tượng this.",
        "Có tên là init và bắt buộc phải được khai báo trong phần phạm vi truy cập công khai public."
    ],
    "correct": 0, "mock": False,
    "explanation": "Constructor có cùng tên với class, không có kiểu trả về (kể cả void), tự động thực thi khi đối tượng được tạo ra.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.4"}
})

# Q8
QUESTIONS_CH9.append({
    "num": 8, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch9-04",
    "content": "Thời điểm mà hàm hủy (Destructor) của một đối tượng tự động trong C++ được kích hoạt là khi nào?",
    "options": [
        "Ngay khi đối tượng đó ra khỏi phạm vi tồn tại (Scope) hoặc khi giải phóng bằng toán tử delete.",
        "Khi đối tượng được truyền dưới dạng đối số tham chiếu vào trong một hàm thành viên khác.",
        "Khi toàn bộ chương trình kết thúc và trả quyền điều khiển về lại cho hệ điều hành máy tính.",
        "Chỉ khi nào lập trình viên chủ động gọi tường minh tên của hàm hủy thông qua con trỏ this."
    ],
    "correct": 0, "mock": False,
    "explanation": "Destructor (`~ClassName()`) tự động chạy khi đối tượng Stack ra khỏi scope (gặp dấu closing brace `}`), hoặc khi `delete ptr;` đối với đối tượng cấp phát động.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.4"}
})

# Q9 (Mock)
QUESTIONS_CH9.append({
    "num": 9, "subtype": "theory", "diff": "hard", "articleId": "c-art-ch9-05",
    "content": "Vì sao lớp cơ sở đa hình (Polymorphic Base Class) trong C++ BẮT BUỘC phải có hàm hủy ảo (Virtual Destructor)?",
    "options": [
        "Để đảm bảo hàm hủy của lớp dẫn xuất được kích hoạt khi xóa đối tượng qua con trỏ lớp cơ sở.",
        "Để ngăn chặn việc người dùng khởi tạo các đối tượng độc lập thuộc về lớp cơ sở ban đầu.",
        "Để tăng tốc độ giải phóng vùng nhớ trên phân vùng Heap thông qua bảng phương thức ảo vtable.",
        "Để cho phép các lớp con có thể truy cập trực tiếp vào các thuộc tính riêng tư private của cha."
    ],
    "correct": 0, "mock": True,
    "explanation": "Nếu `Base *p = new Derived(); delete p;`, nếu Destructor của Base không phải `virtual`, compiler chỉ gọi `~Base()`, bỏ qua `~Derived()`, gây rò rỉ tài nguyên ở lớp con.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.5"}
})

# Q10
QUESTIONS_CH9.append({
    "num": 10, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch9-05",
    "content": "Một lớp trong C++ được gọi là lớp trừu tượng (Abstract Class) khi thỏa mãn điều kiện nào?",
    "options": [
        "Chứa ít nhất một phương thức thuần ảo (Pure Virtual Function, ví dụ: virtual void f() = 0;).",
        "Có tất cả các thuộc tính dữ liệu đều được khai báo trong phạm vi truy cập riêng tư private.",
        "Không hề có bất kỳ một phương thức thành viên nào mà chỉ chứa các trường khai báo biến số.",
        "Được khai báo kết hợp đồng thời với từ khóa static và không cho phép tạo con trỏ trỏ tới."
    ],
    "correct": 0, "mock": False,
    "explanation": "Lớp có ít nhất một hàm thuần ảo (`= 0`) là Abstract Class. Không thể khởi tạo đối tượng trực tiếp từ abstract class.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.5"}
})


# ==========================================
# 2. OUTPUT / TRACE (7 câu: Q11 -> Q17)
# ==========================================

# Q11
QUESTIONS_CH9.append({
    "num": 11, "subtype": "output", "diff": "easy", "articleId": "c-art-ch9-01",
    "content": "Kết quả in ra của chương trình truyền tham chiếu C++ sau đây là gì?",
    "codeSnippet": "#include <iostream>\n\nvoid tang(int &n) {\n    n += 10;\n}\n\nint main() {\n    int a = 5;\n    tang(a);\n    std::cout << a;\n    return 0;\n}",
    "options": [
        "In ra số 15 (tham số tham chiếu int &n cho phép hàm thay đổi trực tiếp giá trị của biến a).",
        "In ra số 5 (hàm tang chỉ thao tác trên biến bản sao cục bộ mà không thay đổi biến ngoài main).",
        "In ra số 10 (giá trị 10 ghi đè hoàn toàn lên giá trị khởi tạo ban đầu của biến số nguyên a).",
        "Chương trình gặp lỗi biên dịch do không truyền địa chỉ bằng toán tử '&a' khi gọi hàm tang."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C++, tham số `int &n` nhận tham chiếu trực tiếp của `a`. Lệnh `n += 10` tăng biến `a` từ 5 lên 15. In ra 15.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.1"}
})

# Q12
QUESTIONS_CH9.append({
    "num": 12, "subtype": "output", "diff": "medium", "articleId": "c-art-ch9-02",
    "content": "Giá trị in ra của chương trình có tham số mặc định (Default Argument) sau đây là bao nhiêu?",
    "codeSnippet": "#include <iostream>\n\nint tinh(int a, int b = 2, int c = 3) {\n    return a + b * c;\n}\n\nint main() {\n    std::cout << tinh(5, 4);\n    return 0;\n}",
    "options": [
        "In ra số 17 (a nhận giá trị 5, b nhận 4 ghi đè giá trị mặc định, c nhận giá trị mặc định 3: 5 + 4*3 = 17).",
        "In ra số 11 (tham số mặc định b=2 và c=3 được ưu tiên sử dụng thay thế cho đối số truyền vào).",
        "In ra số 27 (các đối số được gán từ phải sang trái dẫn đến thứ tự tính toán bị thay đổi hoàn toàn).",
        "Chương trình gặp lỗi biên dịch do hàm tinh chỉ được cung cấp 2 đối số thay vì đủ 3 tham số."
    ],
    "correct": 0, "mock": False,
    "explanation": "tinh(5, 4): a = 5, b = 4 (ghi đè 2), c = 3 (mặc định). Biểu thức 5 + 4 * 3 = 17.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.2"}
})

# Q13
QUESTIONS_CH9.append({
    "num": 13, "subtype": "output", "diff": "medium", "articleId": "c-art-ch9-04",
    "content": "Thứ tự kích hoạt hàm khởi tạo và hàm hủy trong đoạn mã đối tượng C++ sau là gì?",
    "codeSnippet": "#include <iostream>\n\nclass Demo {\npublic:\n    Demo() { std::cout << \"A\"; }\n    ~Demo() { std::cout << \"B\"; }\n};\n\nint main() {\n    {\n        Demo d;\n    }\n    std::cout << \"C\";\n    return 0;\n}",
    "options": [
        "In ra chuỗi 'ABC' (hàm dựng chạy in 'A', thoát scope hàm hủy chạy in 'B', cuối cùng in 'C').",
        "In ra chuỗi 'ACB' (hàm hủy chỉ kích hoạt sau khi câu lệnh cuối cùng của hàm main hoàn tất).",
        "In ra chuỗi 'CAB' (lệnh in bên ngoài khối lệnh luôn có mức ưu tiên thực thi cao hơn khối con).",
        "Chương trình chỉ in duy nhất chữ 'A' do đối tượng tự động không thể gọi hàm hủy trên Stack."
    ],
    "correct": 0, "mock": False,
    "explanation": "Vào khối {}: `Demo d;` tạo đối tượng -> Constructor in 'A'. Gặp dấu `}`: d ra khỏi scope -> Destructor in 'B'. Sau đó in 'C'. Kết quả: 'ABC'.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.4"}
})

# Q14 (Mock)
QUESTIONS_CH9.append({
    "num": 14, "subtype": "output", "diff": "hard", "articleId": "c-art-ch9-05",
    "content": "Tính đa hình động: Kết quả in ra của chương trình có phương thức ảo virtual sau là gì?",
    "codeSnippet": "#include <iostream>\n\nclass Base {\npublic:\n    virtual void show() { std::cout << \"Base \"; }\n};\n\nclass Derived : public Base {\npublic:\n    void show() override { std::cout << \"Derived \"; }\n};\n\nint main() {\n    Base *p = new Derived();\n    p->show();\n    delete p;\n    return 0;\n}",
    "options": [
        "In ra 'Derived ' (nhờ từ khóa virtual, phương thức show() của lớp dẫn xuất được liên kết động).",
        "In ra 'Base ' (con trỏ kiểu Base* nên trình biên dịch luôn liên kết tĩnh tới phương thức của Base).",
        "In ra 'Base Derived ' (cả hai phương thức của lớp cơ sở và lớp con đều lần lượt được thực thi).",
        "Chương trình gặp lỗi biên dịch do không thể gán con trỏ lớp con cho con trỏ lớp cha trong C++."
    ],
    "correct": 0, "mock": True,
    "explanation": "Đa hình động (Dynamic dispatch): Vì `show()` là hàm `virtual`, lời gọi `p->show()` tra bảng vtable tại runtime và kích hoạt phương thức của đối tượng thực tế (`Derived::show()`).",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.5"}
})

# Q15
QUESTIONS_CH9.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch9-02",
    "content": "Kết quả phân giải nạp chồng hàm trong đoạn mã sau là gì?",
    "codeSnippet": "#include <iostream>\n\nvoid in(int x) { std::cout << \"Int \"; }\nvoid in(double x) { std::cout << \"Double \"; }\n\nint main() {\n    in(5);\n    in(3.14);\n    return 0;\n}",
    "options": [
        "In ra chuỗi 'Int Double ' (5 là hằng số nguyên int, 3.14 là hằng số số thực dấu phẩy động double).",
        "In ra chuỗi 'Int Int ' (tất cả các hằng số số học đều được tự động ép về kiểu số nguyên trong C++).",
        "In ra chuỗi 'Double Double ' (trình biên dịch luôn ưu tiên phiên bản hàm có độ chính xác cao hơn).",
        "Chương trình báo lỗi biên dịch do không thể nạp chồng hai hàm có cùng tên gọi trong cùng một tệp."
    ],
    "correct": 0, "mock": False,
    "explanation": "5 là literal int -> gọi `in(int)`. 3.14 là literal double -> gọi `in(double)`. In ra 'Int Double '.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.2"}
})

# Q16
QUESTIONS_CH9.append({
    "num": 16, "subtype": "output", "diff": "medium", "articleId": "c-art-ch9-01",
    "content": "Giá trị in ra của biến x khi thay đổi thông qua biến tham chiếu ref là gì?",
    "codeSnippet": "#include <iostream>\n\nint main() {\n    int x = 20;\n    int &ref = x;\n    ref = 50;\n    std::cout << x << \" \" << ref;\n    return 0;\n}",
    "options": [
        "In ra '50 50' (vì ref là bí danh của x nên thay đổi ref cũng chính là thay đổi trực tiếp biến x).",
        "In ra '20 50' (ref là biến độc lập nên chỉ có giá trị của riêng biến ref được cập nhật lên 50).",
        "In ra '50 20' (giá trị của x thay đổi nhưng ref vẫn lưu giữ bản sao giá trị cũ ban đầu là 20).",
        "Chương trình gặp lỗi biên dịch do không thể gán lại giá trị cho một biến tham chiếu trong C++."
    ],
    "correct": 0, "mock": False,
    "explanation": "ref và x là cùng 1 ô nhớ. `ref = 50` làm giá trị ô nhớ đó thành 50. In ra '50 50'.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.1"}
})

# Q17
QUESTIONS_CH9.append({
    "num": 17, "subtype": "output", "diff": "hard", "articleId": "c-art-ch9-04",
    "content": "Thứ tự thực thi của Constructor trong quan hệ kế thừa đơn sau đây là gì?",
    "codeSnippet": "#include <iostream>\n\nclass Cha {\npublic:\n    Cha() { std::cout << \"1\"; }\n};\n\nclass Con : public Cha {\npublic:\n    Con() { std::cout << \"2\"; }\n};\n\nint main() {\n    Con c;\n    return 0;\n}",
    "options": [
        "In ra chuỗi '12' (Constructor của lớp cơ sở Cha luôn luôn được thực thi trước Constructor của Con).",
        "In ra chuỗi '21' (Constructor của lớp dẫn xuất Con được gọi trước để định hình cấu trúc đối tượng).",
        "Chỉ in duy nhất số '2' (Constructor của lớp con ghi đè hoàn toàn Constructor của lớp cơ sở).",
        "Chương trình gặp lỗi biên dịch do lớp con không gọi tường minh Constructor của lớp cha trong mã."
    ],
    "correct": 0, "mock": False,
    "explanation": "Khi khởi tạo đối tượng lớp con, Constructor của lớp cha luôn chạy trước để khởi tạo phần thừa kế, sau đó mới tới Constructor của lớp con. In ra '12'.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.4"}
})


# ==========================================
# 3. DEBUG (5 câu: Q18 -> Q22)
# ==========================================

# Q18
QUESTIONS_CH9.append({
    "num": 18, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch9-01",
    "content": "Vì sao dòng lệnh khai báo tham chiếu sau đây phát sinh lỗi biên dịch ngay lập tức?",
    "codeSnippet": "int &ref; // Bi loi bien dich",
    "options": [
        "Biến tham chiếu bắt buộc phải được khởi tạo gắn với một biến có sẵn ngay tại thời điểm khai báo.",
        "Ngôn ngữ C++ không cho phép khai báo biến tham chiếu cho các kiểu dữ liệu số nguyên int.",
        "Thiếu từ khóa pointer đặt trước tên biến để trình biên dịch cấp phát ô nhớ quản lý địa chỉ.",
        "Toán tử '&' chỉ được phép sử dụng trong các câu lệnh nhập liệu bằng hàm scanf của ngôn ngữ C."
    ],
    "correct": 0, "mock": False,
    "explanation": "Tham chiếu là bí danh (alias), không thể tồn tại độc lập mà không trỏ vào biến nào. Lỗi: 'error: 'ref' declared as reference but not initialized'.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.1"}
})

# Q19
QUESTIONS_CH9.append({
    "num": 19, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch9-03",
    "content": "Lỗi quản lý tài nguyên nào xuất hiện khi giải phóng mảng đối tượng động trong đoạn mã sau?",
    "codeSnippet": "class Test {\n    // Co cap phat dong ben trong\n};\nTest *arr = new Test[10];\ndelete arr; // Dung sai toan tu",
    "options": [
        "Dùng sai toán tử 'delete' thay vì 'delete[]', dẫn đến chỉ có phần tử đầu tiên được gọi hàm hủy.",
        "Không được phép cấp phát mảng đối tượng động bằng toán tử new trên ngôn ngữ lập trình C++.",
        "Toán tử delete bắt buộc phải đi kèm với kích thước số lượng phần tử truyền vào trong ngoặc vuông.",
        "Mảng đối tượng động arr sẽ tự động bị xóa hai lần làm hỏng cấu trúc phân vùng nhớ của Heap."
    ],
    "correct": 0, "mock": False,
    "explanation": "Bẫy `delete` vs `delete[]`: Cấp phát mảng bằng `new[]` thì phải hủy bằng `delete[]`. Dùng `delete arr` là Undefined Behavior, chỉ hủy phần tử đầu tiên, gây rò rỉ tài nguyên của 9 phần tử còn lại.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.3"}
})

# Q20 (Mock)
QUESTIONS_CH9.append({
    "num": 20, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch9-05",
    "content": "Đoạn mã đa hình sau đây gây ra lỗi rò rỉ bộ nhớ nghiêm trọng nào khi thực thi?",
    "codeSnippet": "class Base {\npublic:\n    ~Base() { /* ... */ }\n};\nclass Derived : public Base {\n    int *data;\npublic:\n    Derived() { data = new int[100]; }\n    ~Derived() { delete[] data; }\n};\nBase *p = new Derived();\ndelete p;",
    "options": [
        "Hàm hủy ~Base() không có từ khóa virtual khiến ~Derived() không được gọi, làm rò rỉ mảng data.",
        "Lớp con Derived không được phép cấp phát bộ nhớ động bằng toán tử new bên trong Constructor.",
        "Toán tử delete p không thể giải phóng được vùng nhớ của con trỏ p trỏ tới đối tượng lớp cha.",
        "Con trỏ p bắt buộc phải được ép kiểu sang kiểu con trỏ void* trước khi gọi toán tử giải phóng delete."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy thiếu Virtual Destructor: Vì `~Base()` không phải hàm ảo, `delete p` (với p là Base*) chỉ kích hoạt `~Base()`, bỏ qua `~Derived()`. Mảng `data` (400 bytes) không bao giờ được giải phóng.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.5"}
})

# Q21
QUESTIONS_CH9.append({
    "num": 21, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch9-02",
    "content": "Vì sao khai báo hàm có tham số mặc định sau đây bị trình biên dịch C++ báo lỗi cú pháp?",
    "codeSnippet": "void func(int a = 1, int b) { // Bi loi\n    // ...\n}",
    "options": [
        "Các tham số có giá trị mặc định bắt buộc phải được khai báo liên tục từ phải sang trái.",
        "Ngôn ngữ C++ chỉ cho phép thiết lập tham số mặc định cho duy nhất một tham số cuối cùng.",
        "Hàm có kiểu trả về là void tuyệt đối không được phép sử dụng bất kỳ tham số mặc định nào.",
        "Giá trị mặc định phải là một hằng số số thực dấu phẩy động thay vì một hằng số nguyên int."
    ],
    "correct": 0, "mock": False,
    "explanation": "Quy tắc tham số mặc định trong C++: Nếu một tham số có giá trị mặc định, tất cả các tham số đứng sau nó (bên phải nó) cũng bắt buộc phải có giá trị mặc định. Đúng: `void func(int b, int a = 1)`.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.2"}
})

# Q22
QUESTIONS_CH9.append({
    "num": 22, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch9-04",
    "content": "Vì sao đoạn mã sau phát sinh lỗi biên dịch khi truy xuất thuộc tính của đối tượng trong hàm main?",
    "codeSnippet": "class Nguoi {\n    int tuoi;\n};\n\nint main() {\n    Nguoi n;\n    n.tuoi = 20; // Bi loi bien dich\n    return 0;\n}",
    "options": [
        "Thuộc tính tuoi trong class có phạm vi mặc định là private nên hàm main bên ngoài không thể truy cập.",
        "Đối tượng n bắt buộc phải được cấp phát động bằng toán tử new trước khi gán các thuộc tính số.",
        "Toán tử chấm '.' chỉ được dùng cho cấu trúc struct chứ không được phép áp dụng cho lớp class.",
        "Biến tuoi bắt buộc phải được khai báo kiểu dữ liệu long mới có thể nhận giá trị bằng số 20."
    ],
    "correct": 0, "mock": False,
    "explanation": "Trong C++, các thành viên của `class` mặc định là `private`. Để truy xuất trực tiếp từ ngoài, phải khai báo dưới phạm vi `public:` hoặc dùng struct.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.4"}
})


# ==========================================
# 4. FILL-IN (3 câu: Q23 -> Q25)
# ==========================================

# Q23
QUESTIONS_CH9.append({
    "num": 23, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch9-03",
    "content": "Cần điền toán tử nào vào vị trí (...) để cấp phát động một đối tượng số nguyên trong C++?",
    "codeSnippet": "int *p = ... int(100);",
    "options": [
        "Điền toán tử 'new' để cấp phát bộ nhớ động trên Heap và khởi tạo giá trị 100 cho ô nhớ đó.",
        "Điền toán tử 'malloc' để phân bổ bộ nhớ thô mà không cần gọi hàm khởi tạo của hệ thống.",
        "Điền toán tử 'create' để tạo một phiên bản đối tượng mới trong không gian địa chỉ bộ nhớ.",
        "Điền toán tử 'alloc' để thiết lập vùng đệm dữ liệu tạm thời trên bộ nhớ ngăn xếp Call Stack."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cú pháp cấp phát động trong C++: `int *p = new int(100);`.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.3"}
})

# Q24
QUESTIONS_CH9.append({
    "num": 24, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch9-05",
    "content": "Cần điền từ khóa nào vào vị trí (...) trước khai báo phương thức để cho phép lớp con ghi đè đa hình?",
    "codeSnippet": "class Hinh {\npublic:\n    ... void ve();\n};",
    "options": [
        "Điền từ khóa 'virtual' để khai báo phương thức ảo cho phép liên kết động tại thời điểm chạy.",
        "Điền từ khóa 'static' để biến phương thức thành hàm dùng chung cho tất cả các đối tượng lớp.",
        "Điền từ khóa 'inline' để yêu cầu trình biên dịch chèn trực tiếp mã máy của hàm vào nơi gọi.",
        "Điền từ khóa 'friend' để cho phép các hàm bên ngoài truy cập vào dữ liệu riêng tư của lớp."
    ],
    "correct": 0, "mock": False,
    "explanation": "Từ khóa `virtual` dùng để khai báo phương thức ảo, kích hoạt cơ chế đa hình động trong C++.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.5"}
})

# Q25
QUESTIONS_CH9.append({
    "num": 25, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch9-01",
    "content": "Cần điền ký tự nào vào vị trí (...) để khai báo tham số tham chiếu hoán đổi hai số nguyên trong C++?",
    "codeSnippet": "void swap(int ... a, int ... b) {\n    int t = a; a = b; b = t;\n}",
    "options": [
        "Điền ký tự '&' vào cả hai vị trí để truyền tham chiếu trực tiếp biến gốc vào trong hàm swap.",
        "Điền ký tự '*' vào cả hai vị trí để khai báo hai biến con trỏ trỏ tới địa chỉ ô nhớ dữ liệu.",
        "Điền ký tự '%' vào cả hai vị trí để biểu thị phép toán lấy phần dư trên các biến số nguyên.",
        "Điền từ khóa 'ref' vào cả hai vị trí theo đúng quy chuẩn cú pháp định nghĩa hàm của C++."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cú pháp truyền tham chiếu C++: `void swap(int &a, int &b)`.",
    "ref": {"uttPage": "Trang 72 - 82", "hcmutePage": "Chương 9 C++", "section": "9.1"}
})

print(f"Constructed Chapter 9: {len(QUESTIONS_CH9)} questions.")

# Verify length delta <= 20%
failed = 0
for q in QUESTIONS_CH9:
    lens = [len(opt) for opt in q["options"]]
    max_l = max(lens)
    min_l = min(lens)
    delta = (max_l - min_l) / max_l
    if delta > 0.20:
        print(f"FAIL Q{q['num']}: delta={delta:.1%}: {lens}")
        failed += 1

if failed == 0:
    print("ALL 25 QUESTIONS IN CHAPTER 9 PASSED LENGTH DELTA <= 20%!")
else:
    print(f"FAILED {failed} questions in Chapter 9.")
