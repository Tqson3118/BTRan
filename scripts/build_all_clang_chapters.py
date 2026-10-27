"""
scripts/build_all_clang_chapters.py
Tạo trọn vẹn 9 tệp lý thuyết tóm tắt và tệp index cho môn Lập trình C/C++
"""

import os, json, sys

sys.stdout.reconfigure(encoding='utf-8')

ALL_CHAPTERS = [
    {
        "id": 1,
        "slug": "tong-quan-ngon-ngu-c",
        "title": "Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình",
        "description": "Lịch sử C, cấu trúc hàm main, tập từ khóa, quy tắc định danh, tiền xử lý #include/#define, header guards và chu trình biên dịch.",
        "citations": { "uttPage": "Trang 21 - 75", "hcmutePage": "Trang 9 - 30; 195 - 205" },
        "totalMCQ": 25, "totalFlashcards": 12, "totalEssays": 3,
        "sections": [
            {
                "id": "c-sec-ch1-01", "code": "1.1", "title": "Lịch sử và Đặc trưng Ngôn ngữ C",
                "articles": [
                    {
                        "id": "c-art-ch1-01", "code": "1.1.1", "title": "Nguồn gốc và Đặc tính cốt lõi của C",
                        "content": [
                            "Ngôn ngữ C được Dennis Ritchie phát triển tại Bell Labs vào năm 1972 để viết lại hệ điều hành UNIX.",
                            "C là ngôn ngữ lập trình có cấu trúc (Structured Programming), bậc trung (Middle-level language), vừa cung cấp các cấu trúc điều khiển cấp cao vừa cho phép thao tác trực tiếp với bộ nhớ và bit thông qua con trỏ.",
                            "Tính khả chuyển (Portability) cao: Mã nguồn C có thể biên dịch và chạy trên hầu hết các nền tảng phần cứng và hệ điều hành khác nhau mà không cần sửa đổi lớn."
                        ],
                        "keyPoints": ["Dennis Ritchie 1972 tại Bell Labs", "Ngôn ngữ bậc trung (Middle-level)", "Thao tác bộ nhớ qua con trỏ", "Tính khả chuyển (Portability)"],
                        "citations": { "uttPage": "Trang 21 - 25", "hcmutePage": "Trang 9 - 13" }
                    },
                    {
                        "id": "c-art-ch1-02", "code": "1.1.2", "title": "Cấu trúc Chương trình C và Hàm main()",
                        "content": [
                            "Mọi chương trình C độc lập đều bắt buộc phải có một và chỉ một điểm bắt đầu thực thi: hàm main().",
                            "Chuẩn C99/C11 quy định hàm main có kiểu trả về là int: `int main(void)` hoặc `int main(int argc, char *argv[])`.",
                            "Giá trị trả về `return 0;` quy ước báo cho hệ điều hành biết chương trình kết thúc thành công. Trả về giá trị khác 0 báo hiệu mã lỗi."
                        ],
                        "keyPoints": ["Bắt buộc có duy nhất 1 hàm main()", "Kiểu trả về int main(void)", "return 0 báo hiệu thực thi thành công"],
                        "codeExamples": [
                            {
                                "title": "Cấu trúc chương trình C chuẩn C99",
                                "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Xin chao sinh vien HCMUTE!\\n\");\n    return 0;\n}",
                                "explanation": "Hàm main trả về kiểu int cho hệ điều hành."
                            }
                        ],
                        "citations": { "uttPage": "Trang 25 - 32", "hcmutePage": "Trang 20 - 26" }
                    }
                ]
            },
            {
                "id": "c-sec-ch1-02", "code": "1.2", "title": "Tập từ khóa, Định danh và Tiền xử lý",
                "articles": [
                    {
                        "id": "c-art-ch1-03", "code": "1.2.1", "title": "Tập từ khóa chuẩn và Quy tắc Định danh (Identifiers)",
                        "content": [
                            "Chuẩn ANSI C89 định nghĩa 32 từ khóa dành riêng (như auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while).",
                            "Tên định danh (Identifier) chỉ được chứa chữ cái (A-Z, a-z), chữ số (0-9) và dấu gạch dưới (_). Bắt buộc phải bắt đầu bằng chữ cái hoặc gạch dưới, KHÔNG được bắt đầu bằng chữ số.",
                            "Ngôn ngữ C có phân biệt chữ hoa và chữ thường (Case-sensitive): `count`, `Count` và `COUNT` là 3 biến hoàn toàn khác nhau."
                        ],
                        "keyPoints": ["32 từ khóa chuẩn C89", "Tên biến không được bắt đầu bằng chữ số", "Phân biệt hoa thường (Case-sensitive)"],
                        "citations": { "uttPage": "Trang 32 - 37", "hcmutePage": "Trang 23 - 26" }
                    },
                    {
                        "id": "c-art-ch1-04", "code": "1.2.2", "title": "Bộ Tiền Xử Lý, Macro và Header Guards",
                        "content": [
                            "Bộ tiền xử lý (Preprocessor) chạy trước khi trình biên dịch thực tế hoạt động, thực hiện thay thế văn bản thuần túy theo các chỉ thị bắt đầu bằng dấu `#`.",
                            "`#include <stdio.h>` tìm kiếm trong thư viện chuẩn hệ thống, còn `#include \"my_lib.h\"` ưu tiên tìm kiếm trong thư mục làm việc hiện tại của dự án.",
                            "`#define NAME value` định nghĩa hằng hoặc macro hàm. Lưu ý: KHÔNG đặt dấu chấm phẩy `;` sau `#define` vì sẽ làm phát sinh lỗi cú pháp khi macro được bung ra.",
                            "Cơ chế bảo vệ tệp tiêu đề (Header Guards) sử dụng `#ifndef HEADER_H` / `#define HEADER_H` ... `#endif` để ngăn chặn lỗi định nghĩa trùng lặp khi một file header được include nhiều lần."
                        ],
                        "keyPoints": ["Preprocessor thay thế văn bản trước biên dịch", "Không đặt dấu ';' sau #define", "Header guards chống đụng độ include"],
                        "codeExamples": [
                            {
                                "title": "Khai báo Macro hàm an toàn và Header Guard",
                                "code": "#ifndef MY_MATH_H\n#define MY_MATH_H\n\n#define SQUARE(x) ((x) * (x))\n\n#endif // MY_MATH_H",
                                "explanation": "Macro có tham số cần bọc ngoặc đơn quanh các tham số và cả biểu thức để tránh lỗi ưu tiên toán tử."
                            }
                        ],
                        "citations": { "uttPage": "Trang 68 - 75", "hcmutePage": "Trang 195 - 205" }
                    },
                    {
                        "id": "c-art-ch1-05", "code": "1.2.3", "title": "Chu trình Biên dịch và Môi trường Lập trình",
                        "content": [
                            "Quy trình 4 giai đoạn chuyển đổi mã nguồn C thành tệp thực thi: (1) Tiền xử lý (Preprocessing: mở rộng macro, include tệp tạo mã .i) -> (2) Biên dịch (Compilation: dịch sang hợp ngữ Assembly .s) -> (3) Hợp dịch (Assembly: tạo mã máy đối tượng .obj / .o) -> (4) Liên kết (Linking: kết nối các file .o và thư viện tạo tệp thực thi .exe / a.out).",
                            "Trình biên dịch phổ biến: GCC (MinGW trên Windows), Clang, MSVC. IDE thông dụng tại HCMUTE: Dev-C++, Code::Blocks, VS Code.",
                            "Lưu ý phân biệt Lỗi cú pháp (Syntax errors - phát hiện lúc biên dịch) với Cảnh báo (Warnings - mã hợp lệ nhưng tiềm ẩn rủi ro) và Lỗi thời gian chạy (Runtime errors như chia cho 0, segmentation fault)."
                        ],
                        "keyPoints": ["Chu trình 4 bước: Tiền xử lý -> Biên dịch -> Hợp dịch -> Liên kết", "Mã đối tượng (.obj/.o) vs Tệp thực thi (.exe)", "Syntax errors vs Runtime errors"],
                        "citations": { "uttPage": "Trang 35 - 37", "hcmutePage": "Trang 27 - 30" }
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "slug": "kieu-du-lieu-bieu-thuc-nhap-xuat",
        "title": "Chương 2: Các Kiểu Dữ Liệu Cơ Bản, Biểu Thức & Nhập/Xuất Chuẩn",
        "description": "Các kiểu nguyên thủy char, int, float, double, bổ từ unsigned/long, toán tử số học, logic, bitwise, toán tử ba ngôi, định dạng printf/scanf và kỹ thuật xóa bộ đệm stdin.",
        "citations": { "uttPage": "Trang 89 - 124", "hcmutePage": "Trang 20 - 46" },
        "totalMCQ": 30, "totalFlashcards": 15, "totalEssays": 4,
        "sections": [
            {
                "id": "c-sec-ch2-01", "code": "2.1", "title": "Kiểu Dữ Liệu Cơ Sở và Biểu Diễn Bộ Nhớ",
                "articles": [
                    {
                        "id": "c-art-ch2-01", "code": "2.1.1", "title": "Kích thước Kiểu dữ liệu và Bổ từ (Type Modifiers)",
                        "content": [
                            "Kích thước bộ nhớ chuẩn: char (1 byte), short (2 bytes), int (thường 4 bytes trên kiến trúc 32/64-bit hiện đại), long (4 hoặc 8 bytes), float (4 bytes, ~6 chữ số thập phân), double (8 bytes, ~15 chữ số thập phân).",
                            "Bổ từ signed (có dấu, bù 2) và unsigned (không dấu, từ 0 đến 2^N - 1).",
                            "Toán tử sizeof(type) hoặc sizeof(expr) trả về kích thước tính bằng byte trong thời gian biên dịch (kiểu size_t)."
                        ],
                        "keyPoints": ["char 1B, int 4B, float 4B, double 8B", "unsigned từ 0 đến 2^N - 1", "sizeof tính trong compile-time"],
                        "citations": { "uttPage": "Trang 89 - 95", "hcmutePage": "Trang 31 - 36" }
                    },
                    {
                        "id": "c-art-ch2-02", "code": "2.1.2", "title": "Ép Kiểu Dữ Liệu và Bẫy Phép Chia Nguyên",
                        "content": [
                            "Ép kiểu ngầm định (Implicit promotion): C tự động nâng kiểu nhỏ hơn lên kiểu lớn hơn khi tính toán biểu thức hỗn hợp.",
                            "Bẫy phép chia nguyên: Trong C, nếu cả hai toán hạng đều là số nguyên, phép chia `/` sẽ lấy phần nguyên (cắt cụt). Ví dụ `5 / 2` bằng `2`.",
                            "Cách khắc phục: Ép kiểu tường minh `(float)5 / 2` hoặc viết `5.0 / 2` để ra `2.5`."
                        ],
                        "keyPoints": ["5 / 2 = 2 (chia nguyên)", "Ép kiểu tường minh (float)a / b", "Tự động nâng kiểu lên double khi tính với số thực"],
                        "citations": { "uttPage": "Trang 96 - 100", "hcmutePage": "Trang 37 - 40" }
                    }
                ]
            },
            {
                "id": "c-sec-ch2-02", "code": "2.2", "title": "Hệ Thống Toán Tử và Biểu Thức",
                "articles": [
                    {
                        "id": "c-art-ch2-03", "code": "2.2.1", "title": "Toán tử Tăng Giảm (++ / --) và Đoản Mạch Logic",
                        "content": [
                            "Toán tử tiền tố `++x`: Tăng x lên 1 trước, sau đó mới trả về giá trị mới của x để tính biểu thức.",
                            "Toán tử hậu tố `x++`: Trả về giá trị hiện tại của x để tính biểu thức, sau đó mới tăng x lên 1.",
                            "Cơ chế đoản mạch: Trong `A && B`, nếu A sai thì B không được tính. Trong `A || B`, nếu A đúng thì B không được tính."
                        ],
                        "keyPoints": ["++x tăng trước, x++ tăng sau", "Short-circuit && và ||", "Lưu ý bẫy đoản mạch khi có toán tử tăng giảm"],
                        "citations": { "uttPage": "Trang 100 - 108", "hcmutePage": "Trang 41 - 44" }
                    },
                    {
                        "id": "c-art-ch2-04", "code": "2.2.2", "title": "Toán tử Thao tác Bit (Bitwise Operators)",
                        "content": [
                            "C cung cấp 6 toán tử bit: AND (&), OR (|), XOR (^), NOT (~), dịch trái (<<), dịch phải (>>).",
                            "Dịch trái `x << n` tương đương `x * (2^n)`. Dịch phải `x >> n` tương đương `x / (2^n)` (số dương).",
                            "Kỹ thuật mặt nạ bit: Bật bit k (`x |= (1 << k)`), tắt bit k (`x &= ~(1 << k)`), kiểm tra bit k (`(x >> k) & 1`)."
                        ],
                        "keyPoints": ["&, |, ^, ~, <<, >>", "x << 1 nhân 2, x >> 1 chia 2", "Kỹ thuật mặt nạ bit (Bitmasking)"],
                        "citations": { "uttPage": "Trang 108 - 114", "hcmutePage": "Trang 43 - 46" }
                    }
                ]
            },
            {
                "id": "c-sec-ch2-03", "code": "2.3", "title": "Nhập/Xuất Dữ Liệu Chuẩn (<stdio.h>)",
                "articles": [
                    {
                        "id": "c-art-ch2-05", "code": "2.3.1", "title": "Hàm printf() và Định dạng Xuất",
                        "content": [
                            "Mã định dạng: `%d` (int), `%u` (unsigned int), `%f` (float), `%lf` (double), `%c` (char), `%s` (chuỗi), `%p` (địa chỉ con trỏ).",
                            "Độ rộng và căn lề: `%5d` (căn phải độ rộng 5), `%-5d` (căn trái độ rộng 5), `%.2f` (làm tròn 2 chữ số thập phân)."
                        ],
                        "keyPoints": ["%d int, %f float, %lf double, %s chuỗi", "%.2f làm tròn 2 chữ số thập phân"],
                        "citations": { "uttPage": "Trang 114 - 118", "hcmutePage": "Trang 26 - 29" }
                    },
                    {
                        "id": "c-art-ch2-06", "code": "2.3.2", "title": "Hàm scanf() và Kỹ thuật Xóa Bộ Đệm stdin",
                        "content": [
                            "Cú pháp: `scanf(\"định_dạng\", &biến)`. Bắt buộc dùng toán tử địa chỉ `&` cho biến thường.",
                            "Bẫy trôi lệnh do phím Enter để lại `\\n` trong bộ đệm `stdin`, khiến lệnh đọc chuỗi/ký tự kế tiếp bị bỏ qua.",
                            "Khắc phục: `scanf(\" %c\", &ch)` hoặc vòng lặp `while ((c = getchar()) != '\\n' && c != EOF);`."
                        ],
                        "keyPoints": ["Bắt buộc dùng toán tử & trong scanf", "Bẫy ký tự \\n đọng lại trong stdin", "Khắc phục: scanf(\" %c\") hoặc while(getchar()!='\\n')"],
                        "citations": { "uttPage": "Trang 118 - 124", "hcmutePage": "Trang 29 - 31" }
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "slug": "cau-truc-dieu-khien-re-nhanh-vong-lap",
        "title": "Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp",
        "description": "Lệnh if-else, bẫy Dangling Else, chấm phẩy sau điều kiện, cấu trúc switch-case và cơ chế fall-through, vòng lặp for/while/do-while, lệnh break, continue và goto.",
        "citations": { "uttPage": "Trang 125 - 210", "hcmutePage": "Trang 47 - 92" },
        "totalMCQ": 35, "totalFlashcards": 14, "totalEssays": 4,
        "sections": [
            {
                "id": "c-sec-ch3-01", "code": "3.1", "title": "Cấu trúc Rẽ nhánh Điều kiện",
                "articles": [
                    {
                        "id": "c-art-ch3-01", "code": "3.1.1", "title": "Lệnh if, if-else và Bẫy Dangling Else",
                        "content": [
                            "Biểu thức điều kiện trong C nhận bất kỳ giá trị nào khác 0 là đúng (true), bằng 0 là sai (false). Bẫy phổ biến: viết nhầm toán tử gán `if (x = 5)` sẽ luôn luôn trả về 5 (true).",
                            "Bẫy dấu chấm phẩy: Viết `if (x > 0); x++;` thì dấu chấm phẩy kết thúc lệnh rỗng, khối lệnh `x++` luôn được thực thi dù `x > 0` đúng hay sai.",
                            "Bẫy Dangling Else: C quy ước `else` luôn kết hợp với lệnh `if` gần nhất phía trước nó chưa có `else`. Luôn bọc ngoặc nhọn `{}` cho khối lệnh để tường minh logic."
                        ],
                        "keyPoints": ["Khác 0 là true, 0 là false", "Bẫy if (x = 5) luôn true", "Bẫy ';' sau if", "Dangling Else gắn với if gần nhất"],
                        "citations": { "uttPage": "Trang 125 - 145", "hcmutePage": "Trang 47 - 60" }
                    },
                    {
                        "id": "c-art-ch3-02", "code": "3.1.2", "title": "Cấu trúc Lựa chọn Đa giá trị switch-case",
                        "content": [
                            "Biểu thức trong `switch(expr)` bắt buộc phải có kiểu nguyên (char, int, enum), KHÔNG được dùng số thực (float, double) hoặc chuỗi.",
                            "Mỗi nhánh `case constant:` phải là hằng số hoặc hằng biểu thức tính được lúc biên dịch, không được là biến số hoặc khoảng giá trị (như `case 1..5:`).",
                            "Cơ chế Fall-through: Nếu không có lệnh `break`, chương trình sẽ tiếp tục chạy tuột xuống các `case` phía dưới bất kể điều kiện có khớp hay không. Nhánh `default` thực thi khi không khớp case nào."
                        ],
                        "keyPoints": ["switch chỉ nhận kiểu nguyên (int, char, enum)", "Giá trị case phải là hằng số", "Quên break gây trôi lệnh (Fall-through)"],
                        "citations": { "uttPage": "Trang 145 - 158", "hcmutePage": "Trang 61 - 70" }
                    }
                ]
            },
            {
                "id": "c-sec-ch3-02", "code": "3.2", "title": "Cấu trúc Vòng lặp và Điều khiển Luồng",
                "articles": [
                    {
                        "id": "c-art-ch3-03", "code": "3.2.1", "title": "Vòng lặp for, while và do-while",
                        "content": [
                            "Vòng lặp `for (init; cond; step)`: Chu trình 4 bước: (1) Khởi tạo init -> (2) Kiểm tra cond -> (3) Thực thi thân vòng lặp -> (4) Cập nhật step -> lặp lại bước 2.",
                            "Vòng lặp tiền kiểm tra `while (cond)`: Kiểm tra điều kiện trước, có thể không thực thi lần nào nếu ban đầu điều kiện sai.",
                            "Vòng lặp hậu kiểm tra `do { ... } while (cond);`: Luôn thực thi thân vòng lặp ít nhất 1 lần trước khi kiểm tra điều kiện. Bắt buộc có dấu chấm phẩy `;` sau `while(cond);`.",
                            "Vòng lặp vô tận: `for (;;)` hoặc `while (1)`."
                        ],
                        "keyPoints": ["for có 4 bước", "while kiểm tra trước", "do-while chạy ít nhất 1 lần và có dấu ';'"],
                        "citations": { "uttPage": "Trang 158 - 188", "hcmutePage": "Trang 71 - 85" }
                    },
                    {
                        "id": "c-art-ch3-04", "code": "3.2.2", "title": "Lệnh break, continue và goto",
                        "content": [
                            "`break`: Thoát ngay lập tức khỏi vòng lặp (`for`, `while`, `do-while`) hoặc cấu trúc `switch-case` gần nhất chứa nó.",
                            "`continue`: Bỏ qua các câu lệnh còn lại trong lượt lặp hiện tại và nhảy ngay sang bước cập nhật/kiểm tra lượt lặp kế tiếp.",
                            "`goto label`: Nhảy không điều kiện tới nhãn trong phạm vi cùng hàm. Chỉ nên dùng khi cần thoát khỏi nhiều vòng lặp lồng nhau sâu (deeply nested loops)."
                        ],
                        "keyPoints": ["break ngắt vòng lặp/switch", "continue bỏ qua lượt lặp hiện tại", "Hạn chế goto tránh code spaghetti"],
                        "citations": { "uttPage": "Trang 188 - 210", "hcmutePage": "Trang 85 - 92" }
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "slug": "ham-pham-vi-bien-de-quy",
        "title": "Chương 4: Hàm, Phạm vi Biến & Đệ quy",
        "description": "Cấu trúc hàm, khai báo prototype, cơ chế truyền tham trị, phạm vi biến cục bộ/toàn cục, bổ từ static, extern, nguyên lý đệ quy và mô hình ngăn xếp Call Stack.",
        "citations": { "uttPage": "Trang 211 - 274", "hcmutePage": "Trang 136 - 158" },
        "totalMCQ": 30, "totalFlashcards": 14, "totalEssays": 4,
        "sections": [
            {
                "id": "c-sec-ch4-01", "code": "4.1", "title": "Khái niệm Hàm và Truyền Tham Số",
                "articles": [
                    {
                        "id": "c-art-ch4-01", "code": "4.1.1", "title": "Khai báo Prototype và Định nghĩa Hàm",
                        "content": [
                            "Khai báo nguyên mẫu hàm (Function Prototype): Báo cho trình biên dịch biết tên hàm, kiểu trả về và danh sách kiểu dữ liệu của các tham số trước khi hàm được gọi.",
                            "Nếu gọi hàm trước khi định nghĩa mà không có prototype, trình biên dịch C giả định hàm trả về kiểu `int` (Implicit declaration warning/error).",
                            "Hàm trả về kiểu `void` nghĩa là không trả về giá trị nào."
                        ],
                        "keyPoints": ["Function Prototype khai báo trước khi dùng", "Cú pháp: return_type func_name(param_list);", "void là không trả về giá trị"],
                        "citations": { "uttPage": "Trang 211 - 225", "hcmutePage": "Trang 136 - 142" }
                    },
                    {
                        "id": "c-art-ch4-02", "code": "4.1.2", "title": "Cơ chế Truyền Tham Trị (Pass-by-value)",
                        "content": [
                            "Mặc định trong C, mọi đối số truyền vào hàm đều theo cơ chế truyền tham trị (Pass-by-value): Hàm tạo một bản sao độc lập của đối số trong vùng nhớ Stack của hàm đó.",
                            "Mọi thay đổi giá trị của tham số hình thức bên trong hàm hoàn toàn KHÔNG làm thay đổi giá trị của biến thực tế bên ngoài `main()`.",
                            "Muốn hàm thay đổi giá trị của biến ngoài, bắt buộc phải truyền địa chỉ con trỏ (Pass-by-pointer) như hàm `swap(int *a, int *b)`."
                        ],
                        "keyPoints": ["C chỉ có truyền tham trị (Pass-by-value)", "Hàm thao tác trên bản sao", "Muốn đổi biến gốc phải truyền con trỏ"],
                        "citations": { "uttPage": "Trang 225 - 238", "hcmutePage": "Trang 142 - 146" }
                    }
                ]
            },
            {
                "id": "c-sec-ch4-02", "code": "4.2", "title": "Phạm vi Biến và Đệ quy",
                "articles": [
                    {
                        "id": "c-art-ch4-03", "code": "4.2.1", "title": "Phạm vi (Scope), Thời gian sống và Bổ từ static",
                        "content": [
                            "Biến cục bộ (Local variable): Khai báo bên trong hàm/khối lệnh, chỉ truy cập được trong khối đó, được cấp phát trên Stack và tự động hủy khi thoát khỏi khối.",
                            "Biến toàn cục (Global variable): Khai báo ngoài mọi hàm, truy cập được từ mọi nơi, tồn tại suốt vòng đời chương trình trong vùng Data/BSS.",
                            "Biến `static` cục bộ: Khởi tạo 1 lần duy nhất lúc nạp chương trình, KHÔNG bị hủy khi thoát hàm mà bảo lưu giá trị qua các lần gọi hàm kế tiếp."
                        ],
                        "keyPoints": ["Biến cục bộ trên Stack, hủy khi thoát hàm", "Biến toàn cục sống suốt chương trình", "static cục bộ giữ giá trị qua các lần gọi"],
                        "citations": { "uttPage": "Trang 238 - 250", "hcmutePage": "Trang 147 - 152" }
                    },
                    {
                        "id": "c-art-ch4-04", "code": "4.2.2", "title": "Nguyên lý Đệ quy (Recursion) và Call Stack",
                        "content": [
                            "Hàm đệ quy là hàm gọi lại chính nó trực tiếp hoặc gián tiếp.",
                            "Hai thành phần bắt buộc của đệ quy: (1) Điều kiện dừng (Base case / Điểm dừng) để chấm dứt việc gọi đệ quy; (2) Bước đệ quy (Recursive step) đưa bài toán về trường hợp nhỏ hơn.",
                            "Bẫy đệ quy: Thiếu điểm dừng hoặc bước đệ quy không tiến dần về điểm dừng sẽ gây lặp vô hạn, dẫn đến tràn ngăn xếp bộ nhớ (Stack Overflow) làm sập chương trình."
                        ],
                        "keyPoints": ["Bắt buộc có Base case và Recursive step", "Mỗi lần gọi hàm tốn 1 khung ngăn xếp (Stack Frame)", "Thiếu điểm dừng gây Stack Overflow"],
                        "citations": { "uttPage": "Trang 250 - 274", "hcmutePage": "Trang 153 - 158" }
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "slug": "mang-va-chuoi-ky-tu",
        "title": "Chương 5: Mảng (1D, 2D) & Chuỗi Ký Tự (Strings)",
        "description": "Mảng một chiều, mảng hai chiều ma trận, bộ nhớ liên tục, bẫy vượt biên off-by-one, chuỗi ký tự C-string, ký tự kết thúc '\\0', các hàm trong string.h và fgets an toàn.",
        "citations": { "uttPage": "Trang 275 - 320; 344 - 420", "hcmutePage": "Trang 93 - 120" },
        "totalMCQ": 35, "totalFlashcards": 16, "totalEssays": 4,
        "sections": [
            {
                "id": "c-sec-ch5-01", "code": "5.1", "title": "Mảng Một Chiều và Hai Chiều",
                "articles": [
                    {
                        "id": "c-art-ch5-01", "code": "5.1.1", "title": "Bản chất Mảng Một Chiều và Bẫy Vượt Biên (Out-of-Bounds)",
                        "content": [
                            "Mảng là tập hợp hữu hạn các phần tử có cùng kiểu dữ liệu, được lưu trữ liên tục (contiguous memory) trong bộ nhớ.",
                            "Chỉ số mảng trong C luôn bắt đầu từ 0 đến N - 1 (với mảng có N phần tử). C KHÔNG tự động kiểm tra vượt biên (bounds checking).",
                            "Bẫy Off-by-one: Vòng lặp `for (int i = 0; i <= N; i++)` sẽ truy cập phần tử `a[N]` nằm ngoài mảng, gây ghi đè vùng nhớ lân cận hoặc crash chương trình."
                        ],
                        "keyPoints": ["Lưu trữ liên tục trong bộ nhớ", "Chỉ số từ 0 đến N - 1", "C không kiểm tra vượt biên", "Bẫy vòng lặp duyệt i <= N"],
                        "citations": { "uttPage": "Trang 275 - 300", "hcmutePage": "Trang 93 - 105" }
                    },
                    {
                        "id": "c-art-ch5-02", "code": "5.1.2", "title": "Mảng Hai Chiều (Ma trận)",
                        "content": [
                            "Cú pháp: `type arr[ROWS][COLS];`. Mảng 2 chiều trong C được lưu trữ trong bộ nhớ phẳng theo thứ tự từng hàng liên tiếp (Row-major order).",
                            "Khi truyền mảng 2 chiều vào hàm, bắt buộc phải chỉ định rõ số cột `COLS`: `void process(int a[][COLS], int rows)` để trình biên dịch tính toán được bước nhảy địa chỉ `a[i][j] = *(a + i * COLS + j)`."
                        ],
                        "keyPoints": ["Lưu trữ dạng Row-major order", "Bắt buộc khai báo số cột khi truyền vào hàm", "Truy xuất qua cặp chỉ số [i][j]"],
                        "citations": { "uttPage": "Trang 300 - 320", "hcmutePage": "Trang 105 - 114" }
                    }
                ]
            },
            {
                "id": "c-sec-ch5-02", "code": "5.2", "title": "Chuỗi Ký Tự (C-Strings)",
                "articles": [
                    {
                        "id": "c-art-ch5-03", "code": "5.2.1", "title": "Bản chất Chuỗi Ký Tự và Ký tự Kết thúc '\\0'",
                        "content": [
                            "Trong C, chuỗi ký tự không phải là kiểu dữ liệu nguyên thủy mà là một mảng các ký tự kiểu `char` được kết thúc bằng ký tự rỗng (Null terminator: `\\0`, mã ASCII = 0).",
                            "Để lưu một chuỗi có độ dài N ký tự, bắt buộc phải khai báo mảng có kích thước tối thiểu là N + 1 byte.",
                            "Bẫy `char s[5] = \"Hello\";` là sai vì từ \"Hello\" có 5 chữ cái, cộng thêm `\\0` là 6 byte, khai báo 5 byte sẽ làm mất `\\0` dẫn đến in chuỗi bị rác bộ nhớ."
                        ],
                        "keyPoints": ["Chuỗi là mảng char kết thúc bằng '\\0'", "Kích thước mảng char >= strlen + 1", "Mất '\\0' gây đọc rác bộ nhớ"],
                        "citations": { "uttPage": "Trang 344 - 370", "hcmutePage": "Trang 115 - 118" }
                    },
                    {
                        "id": "c-art-ch5-04", "code": "5.2.2", "title": "Thư viện <string.h> và Nhập Chuỗi An Toàn với fgets()",
                        "content": [
                            "Các hàm cơ bản trong `<string.h>`: `strlen(s)` (độ dài chuỗi, không tính '\\0'), `strcpy(dest, src)` (sao chép), `strcat(dest, src)` (nối chuỗi), `strcmp(s1, s2)` (so sánh theo mã ASCII: trả về 0 nếu bằng nhau, âm nếu s1 < s2, dương nếu s1 > s2).",
                            "Bẫy `if (s1 == s2)` là sai hoàn toàn vì `==` chỉ so sánh địa chỉ con trỏ của 2 chuỗi chứ không so sánh nội dung; bắt buộc phải dùng `strcmp(s1, s2) == 0`.",
                            "Hàm `gets()` cực kỳ nguy hiểm do gây tràn bộ đệm (Buffer Overflow) và đã bị xóa khỏi chuẩn C11. Chuẩn mực an toàn là dùng `fgets(str, sizeof(str), stdin)`."
                        ],
                        "keyPoints": ["Không so sánh chuỗi bằng '==' mà dùng strcmp", "Cấm dùng gets(), dùng fgets()", "strlen không tính ký tự '\\0'"],
                        "citations": { "uttPage": "Trang 370 - 420", "hcmutePage": "Trang 118 - 120" }
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "slug": "con-tro-va-quan-ly-bo-nho-dong",
        "title": "Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động",
        "description": "Địa chỉ ô nhớ &, toán tử giải tham chiếu *, con trỏ NULL, số học con trỏ, *p++ vs (*p)++, cấp phát động Heap với malloc, calloc, realloc, free, rò rỉ bộ nhớ và con trỏ hàm.",
        "citations": { "uttPage": "Trang 320 - 344; 401 - 411", "hcmutePage": "Trang 121 - 135" },
        "totalMCQ": 35, "totalFlashcards": 16, "totalEssays": 4,
        "sections": [
            {
                "id": "c-sec-ch6-01", "code": "6.1", "title": "Nền tảng Con trỏ và Địa chỉ Ô nhớ",
                "articles": [
                    {
                        "id": "c-art-ch6-01", "code": "6.1.1", "title": "Khái niệm Con trỏ, Toán tử & và *",
                        "content": [
                            "Con trỏ (Pointer) là một biến đặc biệt dùng để lưu trữ địa chỉ của một ô nhớ khác trong bộ nhớ RAM.",
                            "Toán tử lấy địa chỉ `&x`: Trả về địa chỉ bộ nhớ của biến x. Toán tử giải tham chiếu `*p`: Truy xuất đến giá trị được lưu tại ô nhớ mà con trỏ p đang trỏ tới.",
                            "Kích thước con trỏ: Phụ thuộc vào kiến trúc hệ thống (4 bytes trên hệ thống 32-bit và 8 bytes trên hệ thống 64-bit), bất kể kiểu dữ liệu nó trỏ tới (int*, char*, double* đều có cùng kích thước byte con trỏ).",
                            "Con trỏ hoang dã (Wild Pointer): Con trỏ chưa khởi tạo chứa giá trị rác; giải tham chiếu `*p` sẽ gây lỗi vi phạm phân đoạn bộ nhớ (Segmentation Fault)."
                        ],
                        "keyPoints": ["Con trỏ lưu địa chỉ ô nhớ", "& lấy địa chỉ, * giải tham chiếu", "Kích thước con trỏ 4B (32-bit) hoặc 8B (64-bit)", "Khởi tạo p = NULL để tránh con trỏ rác"],
                        "citations": { "uttPage": "Trang 320 - 330", "hcmutePage": "Trang 121 - 126" }
                    },
                    {
                        "id": "c-art-ch6-02", "code": "6.1.2", "title": "Số học Con trỏ và Thứ tự *p++ vs (*p)++",
                        "content": [
                            "Số học con trỏ: Khi thực hiện `p + 1`, địa chỉ trong p tăng thêm một lượng bằng `sizeof(*p)` (ví dụ con trỏ `int*` sẽ tăng thêm 4 byte, `char*` tăng 1 byte).",
                            "Tên mảng bản chất là một hằng con trỏ trỏ tới phần tử đầu tiên: `a[i]` tương đương với `*(a + i)`.",
                            "Bẫy độ ưu tiên kinh điển: Toán tử hậu tố `++` có độ ưu tiên cao hơn `*`. Vì vậy `*p++` tương đương với `*(p++)` (lấy giá trị hiện tại rồi tăng địa chỉ p lên 1); trong khi `(*p)++` sẽ tăng giá trị của ô nhớ mà p trỏ tới lên 1."
                        ],
                        "keyPoints": ["p + 1 nhảy sizeof(*p) bytes", "a[i] đồng nhất với *(a + i)", "*p++ tăng địa chỉ, (*p)++ tăng giá trị"],
                        "citations": { "uttPage": "Trang 330 - 344", "hcmutePage": "Trang 126 - 130" }
                    }
                ]
            },
            {
                "id": "c-sec-ch6-02", "code": "6.2", "title": "Cấp phát Bộ nhớ Động (Dynamic Memory Allocation)",
                "articles": [
                    {
                        "id": "c-art-ch6-03", "code": "6.2.1", "title": "Các hàm malloc, calloc, realloc và free (<stdlib.h>)",
                        "content": [
                            "`malloc(size)`: Cấp phát một vùng nhớ liên tục có kích thước `size` bytes trên vùng Heap, chứa giá trị rác ngẫu nhiên.",
                            "`calloc(num, size)`: Cấp phát vùng nhớ cho `num` phần tử, mỗi phần tử `size` bytes và tự động gán toàn bộ bit về 0.",
                            "`realloc(ptr, new_size)`: Thay đổi kích thước vùng nhớ đã cấp phát, có thể mở rộng tại chỗ hoặc chuyển sang vị trí mới.",
                            "`free(ptr)`: Giải phóng vùng nhớ Heap đã cấp phát trả lại cho hệ thống.",
                            "Lưu ý: Luôn kiểm tra `ptr == NULL` sau khi cấp phát để đảm bảo hệ thống còn đủ bộ nhớ."
                        ],
                        "keyPoints": ["Heap dùng cho bộ nhớ động", "malloc chứa rác, calloc khởi tạo 0", "realloc thay đổi kích thước", "Bắt buộc free() sau khi dùng"],
                        "citations": { "uttPage": "Trang 401 - 408", "hcmutePage": "Trang 131 - 133" }
                    },
                    {
                        "id": "c-art-ch6-04", "code": "6.2.2", "title": "Rò rỉ Bộ nhớ (Memory Leak) và Con trỏ Treo (Dangling Pointer)",
                        "content": [
                            "Rò rỉ bộ nhớ (Memory Leak): Xảy ra khi vùng nhớ Heap được cấp phát nhưng không bao giờ được giải phóng bằng `free()`, dẫn đến cạn kiệt tài nguyên RAM của hệ thống.",
                            "Con trỏ treo (Dangling Pointer): Xảy ra khi một vùng nhớ đã bị giải phóng bằng `free(p)`, nhưng con trỏ p vẫn tiếp tục trỏ tới địa chỉ cũ đó. Nếu giải tham chiếu `*p` sẽ gây lỗi nghiêm trọng.",
                            "Kỹ thuật chuẩn: Luôn gán `p = NULL;` ngay sau khi gọi `free(p);`."
                        ],
                        "keyPoints": ["Quên free() gây Memory Leak", "Truy cập vùng đã free gây Dangling Pointer", "Gán p = NULL sau khi free()"],
                        "citations": { "uttPage": "Trang 408 - 411", "hcmutePage": "Trang 133 - 135" }
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "slug": "kieu-du-lieu-tu-dinh-nghia-struct-union-enum",
        "title": "Chương 7: Kiểu Dữ Liệu Tự Định Nghĩa (Struct, Union, Enum, Typedef)",
        "description": "Khai báo kiểu cấu trúc struct, toán tử '.' vs '->', mảng struct, đệm bộ nhớ padding, kiểu hợp union chia sẻ ô nhớ, kiểu liệt kê enum và định nghĩa bí danh typedef.",
        "citations": { "uttPage": "Trang 421 - 498", "hcmutePage": "Trang 159 - 194" },
        "totalMCQ": 30, "totalFlashcards": 14, "totalEssays": 3,
        "sections": [
            {
                "id": "c-sec-ch7-01", "code": "7.1", "title": "Kiểu Cấu Trúc (Struct) và Mảng Cấu Trúc",
                "articles": [
                    {
                        "id": "c-art-ch7-01", "code": "7.1.1", "title": "Khai báo struct và Toán tử truy xuất '.' vs '->'",
                        "content": [
                            "Struct cho phép nhóm các biến có kiểu dữ liệu khác nhau lại thành một thực thể duy nhất.",
                            "Toán tử chấm `.` dùng để truy xuất thành viên khi biến là biến struct thông thường: `sv.mssv`.",
                            "Toán tử mũi tên `->` dùng để truy xuất thành viên khi biến là con trỏ trỏ tới struct: `psv->mssv` (tương đương với `(*psv).mssv`).",
                            "Bẫy `psv.mssv` với con trỏ struct sẽ báo lỗi biên dịch cú pháp."
                        ],
                        "keyPoints": ["Struct nhóm nhiều kiểu khác nhau", "Dùng '.' cho biến thường", "Dùng '->' cho con trỏ struct"],
                        "citations": { "uttPage": "Trang 421 - 445", "hcmutePage": "Trang 159 - 170" }
                    },
                    {
                        "id": "c-art-ch7-02", "code": "7.1.2", "title": "Đệm Bộ Nhớ (Structure Padding) và Căn Chỉnh Địa Chỉ",
                        "content": [
                            "Kích thước của một `struct` thường LỚN HƠN tổng kích thước của các thành phần bên trong nó.",
                            "Nguyên nhân: Cơ chế căn chỉnh bộ nhớ (Data Alignment) của phần cứng yêu cầu các biến kiểu N bytes phải nằm ở địa chỉ là bội số của N. Trình biên dịch sẽ tự động chèn các byte đệm (Padding bytes).",
                            "Ví dụ: `struct { char c; int i; };` có kích thước là 8 bytes trên máy 32/64-bit (1 byte char + 3 byte đệm + 4 byte int), chứ không phải 5 bytes."
                        ],
                        "keyPoints": ["sizeof(struct) >= tổng kích thước các trường", "Trình biên dịch chèn padding bytes để tối ưu tốc độ CPU", "Sắp xếp biến từ lớn tới nhỏ để giảm đệm"],
                        "citations": { "uttPage": "Trang 445 - 460", "hcmutePage": "Trang 171 - 176" }
                    }
                ]
            },
            {
                "id": "c-sec-ch7-02", "code": "7.2", "title": "Union, Enum và Typedef",
                "articles": [
                    {
                        "id": "c-art-ch7-03", "code": "7.2.1", "title": "Kiểu Hợp (Union) và Sự Chia Sẻ Ô Nhớ",
                        "content": [
                            "Union có cú pháp giống struct, nhưng tất cả các thành viên trong union đều dùng CHUNG MỘT VÙNG NHỚ bắt đầu từ cùng một địa chỉ.",
                            "Kích thước của `union` bằng kích thước của thành viên lớn nhất.",
                            "Ghi dữ liệu vào thành viên này sẽ ghi đè và làm biến đổi dữ liệu của các thành viên khác trong union."
                        ],
                        "keyPoints": ["Union chia sẻ chung một vùng nhớ", "Kích thước bằng trường lớn nhất", "Ghi trường này ghi đè trường khác"],
                        "citations": { "uttPage": "Trang 460 - 475", "hcmutePage": "Trang 177 - 182" }
                    },
                    {
                        "id": "c-art-ch7-04", "code": "7.2.2", "title": "Kiểu Liệt Kê (Enum) và Bí Danh Kiểu (Typedef)",
                        "content": [
                            "`enum`: Tập hợp các hằng số nguyên có tên đại diện. Mặc định giá trị bắt đầu từ 0 và tự động tăng 1 cho các phần tử kế tiếp.",
                            "`typedef`: Cho phép đặt tên bí danh mới cho một kiểu dữ liệu có sẵn để code ngắn gọn, rõ nghĩa hơn. Ví dụ `typedef unsigned long ulong;` hoặc `typedef struct SinhVien SinhVien;`."
                        ],
                        "keyPoints": ["enum hằng số nguyên bắt đầu từ 0", "typedef tạo bí danh mới cho kiểu dữ liệu"],
                        "citations": { "uttPage": "Trang 475 - 498", "hcmutePage": "Trang 183 - 194" }
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "slug": "thao-tac-tep-tin-file-io",
        "title": "Chương 8: Thao tác Tệp Tin (File I/O)",
        "description": "Con trỏ FILE, các chế độ mở tệp fopen 'r', 'w', 'a', tệp văn bản vs tệp nhị phân, đọc ghi với fread/fwrite/fprintf/fscanf, truy xuất ngẫu nhiên fseek, ftell và bẫy feof.",
        "citations": { "uttPage": "Trang 499 - 554", "hcmutePage": "Trang 177 - 194" },
        "totalMCQ": 25, "totalFlashcards": 12, "totalEssays": 3,
        "sections": [
            {
                "id": "c-sec-ch8-01", "code": "8.1", "title": "Quy trình Làm việc với Tệp và Chế độ Mở Tệp",
                "articles": [
                    {
                        "id": "c-art-ch8-01", "code": "8.1.1", "title": "Con trỏ FILE và Hàm fopen(), fclose()",
                        "content": [
                            "Mọi thao tác tệp trong C đều thông qua một con trỏ kiểu cấu trúc đặc biệt: `FILE *fp;`.",
                            "`fopen(filename, mode)`: Mở tệp theo chế độ chỉ định. Luôn kiểm tra `if (fp == NULL)` sau khi mở vì nếu file không tồn tại hoặc không đủ quyền, hàm trả về NULL và thao tác đọc ghi tiếp theo sẽ gây crash.",
                            "`fclose(fp)`: Đóng tệp, đẩy toàn bộ dữ liệu từ bộ đệm vào đĩa và giải phóng tài nguyên hệ điều hành."
                        ],
                        "keyPoints": ["Dùng con trỏ FILE*", "Luôn kiểm tra fp == NULL", "Bắt buộc fclose() sau khi làm việc"],
                        "citations": { "uttPage": "Trang 499 - 515", "hcmutePage": "Trang 177 - 182" }
                    },
                    {
                        "id": "c-art-ch8-02", "code": "8.1.2", "title": "Các Chế độ Mở Tệp (File Modes)",
                        "content": [
                            "`\"r\"`: Mở để đọc tệp văn bản. Tệp bắt buộc phải tồn tại, nếu không trả về NULL.",
                            "`\"w\"`: Mở để ghi tệp văn bản. Nếu tệp đã có nội dung, nó sẽ BỊ XÓA SẠCH VỀ 0 BYTE; nếu chưa có, tệp mới sẽ được tạo.",
                            "`\"a\"`: Mở để ghi nối tiếp (Append). Dữ liệu mới được ghi vào cuối tệp mà không làm mất nội dung cũ.",
                            "Tệp nhị phân thêm chữ 'b': `\"rb\"`, `\"wb\"`, `\"ab\"`."
                        ],
                        "keyPoints": ["'r' chỉ đọc, 'w' ghi đè xóa sạch", "'a' ghi nối đuôi", "Thêm 'b' cho tệp nhị phân"],
                        "citations": { "uttPage": "Trang 515 - 525", "hcmutePage": "Trang 182 - 186" }
                    }
                ]
            },
            {
                "id": "c-sec-ch8-02", "code": "8.2", "title": "Đọc Ghi Dữ liệu và Truy Cập Ngẫu Nhiên",
                "articles": [
                    {
                        "id": "c-art-ch8-03", "code": "8.2.1", "title": "Tệp Văn Bản vs Tệp Nhị Phân và Bẫy feof()",
                        "content": [
                            "Tệp văn bản (Text file): Lưu trữ dưới dạng các ký tự mã ASCII; dùng `fgetc()`, `fputc()`, `fgets()`, `fputs()`, `fscanf()`, `fprintf()`.",
                            "Tệp nhị phân (Binary file): Lưu nguyên vẹn các byte nhị phân trong bộ nhớ máy tính; dùng `fread(&buffer, size, count, fp)` và `fwrite(&buffer, size, count, fp)`.",
                            "Bẫy `while (!feof(fp))`: Cờ `feof` chỉ bật sau khi đã có một lệnh đọc thất bại vượt qua mốc cuối file; dẫn đến xử lý lặp 2 lần bản ghi cuối cùng. Cách chuẩn: kiểm tra giá trị trả về của `fread` hoặc `fscanf`."
                        ],
                        "keyPoints": ["Tệp văn bản dùng fgets/fprintf", "Tệp nhị phân dùng fread/fwrite", "Bẫy feof() lặp bản ghi cuối 2 lần"],
                        "citations": { "uttPage": "Trang 525 - 540", "hcmutePage": "Trang 186 - 190" }
                    },
                    {
                        "id": "c-art-ch8-04", "code": "8.2.2", "title": "Truy Cập Ngẫu Nhiên: fseek(), ftell(), rewind()",
                        "content": [
                            "`fseek(fp, offset, origin)`: Di chuyển con trỏ định vị tệp. Các gốc `origin`: `SEEK_SET` (từ đầu tệp), `SEEK_CUR` (từ vị trí hiện tại), `SEEK_END` (từ cuối tệp).",
                            "`ftell(fp)`: Trả về vị trí byte hiện tại của con trỏ tệp tính từ đầu tệp.",
                            "`rewind(fp)`: Đưa con trỏ tệp quay trở về đầu tệp (tương đương `fseek(fp, 0, SEEK_SET)`)."
                        ],
                        "keyPoints": ["fseek di chuyển con trỏ tệp", "SEEK_SET, SEEK_CUR, SEEK_END", "ftell trả về vị trí byte hiện tại"],
                        "citations": { "uttPage": "Trang 540 - 554", "hcmutePage": "Trang 190 - 194" }
                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "slug": "chuyen-de-c-plus-plus-can-ban-va-oop",
        "title": "Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP",
        "description": "Bước chuyển tiếp từ C sang C++, luồng cin/cout/endl, biến tham chiếu reference, cấp phát động new/delete, nạp chồng hàm, nhập môn Class OOP và virtual destructor.",
        "citations": { "uttPage": "Trang 18; 22; 72 - 82", "hcmutePage": "Trang 20; 27; 121 - 124" },
        "totalMCQ": 25, "totalFlashcards": 12, "totalEssays": 3,
        "sections": [
            {
                "id": "c-sec-ch9-01", "code": "9.1", "title": "Mở rộng Ngôn ngữ C++ Hiện Đại",
                "articles": [
                    {
                        "id": "c-art-ch9-01", "code": "9.1.1", "title": "Luồng Nhập/Xuất Chuẩn cin, cout và Toán tử Tham chiếu &",
                        "content": [
                            "C++ sử dụng thư viện `<iostream>` và namespace `std` để xử lý I/O: `std::cout << x;` (xuất) và `std::cin >> x;` (nhập an toàn kiểu, không cần mã định dạng %d).",
                            "Biến tham chiếu (Reference: `int &ref = x;`): Là một bí danh (Alias) đại diện cho một biến đã tồn tại. Thao tác trên `ref` chính là thao tác trực tiếp trên `x`.",
                            "Quy tắc: Biến tham chiếu bắt buộc phải được khởi tạo ngay lúc khai báo và không thể đổi sang trỏ biến khác suốt đời sống."
                        ],
                        "keyPoints": ["cin/cout an toàn kiểu dữ liệu", "Biến tham chiếu int &ref là alias", "Bắt buộc khởi tạo ngay khi khai báo"],
                        "citations": { "uttPage": "Trang 72 - 76", "hcmutePage": "Trang 20 - 27" }
                    },
                    {
                        "id": "c-art-ch9-02", "code": "9.1.2", "title": "Cấp phát Bộ nhớ với new/delete và Nạp chồng Hàm",
                        "content": [
                            "C++ thay thế malloc/free bằng toán tử `new` và `delete`: `int *p = new int(10); delete p;`.",
                            "Cấp phát mảng động: `int *arr = new int[n];` và giải phóng bắt buộc dùng `delete[] arr;`. Bẫy dùng `delete arr;` sẽ gây rò rỉ bộ nhớ hoặc hành vi không xác định.",
                            "Nạp chồng hàm (Function Overloading): Cho phép nhiều hàm có CÙNG TÊN nhưng KHÁC NHAU về danh sách tham số (số lượng hoặc kiểu tham số)."
                        ],
                        "keyPoints": ["new/delete thay thế malloc/free", "new[] bắt buộc đi với delete[]", "Function Overloading cùng tên khác tham số"],
                        "citations": { "uttPage": "Trang 76 - 80", "hcmutePage": "Trang 121 - 124" }
                    }
                ]
            },
            {
                "id": "c-sec-ch9-02", "code": "9.2", "title": "Nhập môn Lập trình Hướng Đối Tượng (OOP)",
                "articles": [
                    {
                        "id": "c-art-ch9-03", "code": "9.2.1", "title": "Lớp (Class), Thuộc tính, Phương thức và Phạm vi Truy cập",
                        "content": [
                            "`class` kết hợp dữ liệu (thuộc tính) và hàm xử lý (phương thức) lại thành một thực thể đóng gói.",
                            "Phạm vi truy cập: `private` (chỉ truy cập nội bộ trong class - mặc định trong class), `public` (truy cập tự do từ bên ngoài), `protected` (truy cập nội bộ và trong lớp con kế thừa).",
                            "Hàm khởi tạo (Constructor): Cùng tên với class, không có kiểu trả về, tự động gọi khi đối tượng được tạo.",
                            "Hàm hủy (Destructor): Có tiền tố ngã `~ClassName()`, không có tham số và kiểu trả về, tự động gọi khi đối tượng bị hủy."
                        ],
                        "keyPoints": ["Class đóng gói thuộc tính và phương thức", "private mặc định trong class", "Constructor tạo đối tượng, Destructor giải phóng"],
                        "citations": { "uttPage": "Trang 80 - 82", "hcmutePage": "Trang 121 - 124" }
                    },
                    {
                        "id": "c-art-ch9-04", "code": "9.2.2", "title": "Kế thừa Cơ bản và Hàm Hủy Ảo (Virtual Destructor)",
                        "content": [
                            "Kế thừa (Inheritance): Cho phép lớp con (Derived Class) tái sử dụng và mở rộng các thuộc tính, phương thức của lớp cha (Base Class). Cú pháp: `class Derived : public Base { ... };`.",
                            "Bẫy Hàm hủy ảo (Virtual Destructor): Khi giải phóng đối tượng lớp con qua con trỏ lớp cha đa hình `Base *p = new Derived(); delete p;`, nếu `Base` không có hàm hủy ảo `virtual ~Base()`, hàm hủy của `Derived` sẽ bị bỏ qua, dẫn đến rò rỉ tài nguyên."
                        ],
                        "keyPoints": ["Kế thừa tái sử dụng mã nguồn", "Base class đa hình luôn cần virtual destructor", "Tránh rò rỉ bộ nhớ lớp con"],
                        "citations": { "uttPage": "Trang 80 - 82", "hcmutePage": "Trang 121 - 124" }
                    }
                ]
            }
        ]
    }
]

out_dir = "src/subjects/c-lang/data/chapters"
os.makedirs(out_dir, exist_ok=True)

for ch in ALL_CHAPTERS:
    file_path = os.path.join(out_dir, f"chapter{ch['id']}.ts")
    ts_code = f"""/**
 * {file_path}
 * Dữ liệu lý thuyết chi tiết Chương {ch['id']}: {ch['title']}
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import {{ CChapter }} from '../../types';

export const chapter{ch['id']}: CChapter = {json.dumps(ch, ensure_ascii=False, indent=2)};
"""
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(ts_code)
    print(f"✓ Created {file_path}")

# Create index.ts for chapters
index_file = os.path.join(out_dir, "index.ts")
exports = "\n".join([f"import {{ chapter{i} }} from './chapter{i}';" for i in range(1, 10)])
array_items = ", ".join([f"chapter{i}" for i in range(1, 10)])
map_items = ",\n  ".join([f"{i}: chapter{i}" for i in range(1, 10)])

index_code = f"""/**
 * src/subjects/c-lang/data/chapters/index.ts
 * Barrel export tập trung toàn bộ 9 chương lý thuyết Lập trình C/C++
 */

import {{ CChapter }} from '../../types';
{exports}

export {{
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
}};

export const allCChapters: CChapter[] = [
  {array_items}
];

export const cChaptersMap: Record<number, CChapter> = {{
  {map_items}
}};

export const CHAPTER_NAMES_C: Record<number, string> = {{
  1: 'Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình',
  2: 'Chương 2: Các Kiểu Dữ Liệu Cơ Bản, Biểu Thức & Nhập/Xuất Chuẩn',
  3: 'Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp',
  4: 'Chương 4: Hàm, Phạm vi Biến & Đệ quy',
  5: 'Chương 5: Mảng (1D, 2D) & Chuỗi Ký Tự (Strings)',
  6: 'Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động',
  7: 'Chương 7: Kiểu Dữ Liệu Tự Định Nghĩa (Struct, Union, Enum, Typedef)',
  8: 'Chương 8: Thao tác Tệp Tin (File I/O)',
  9: 'Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP',
}};
"""

with open(index_file, "w", encoding="utf-8") as f:
    f.write(index_code)
print(f"✓ Created {index_file}")
print("All 9 chapters digitized and indexed successfully!")
