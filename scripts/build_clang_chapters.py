"""
scripts/build_clang_chapters.py
Tạo 9 tệp lý thuyết tóm tắt và tệp index cho môn Lập trình C/C++
"""

import os, json, sys

sys.stdout.reconfigure(encoding='utf-8')

CHAPTER_DEFS = [
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
                            "Kích thước bộ nhớ chuẩn: `char` (1 byte, -128 đến 127 hoặc 0 đến 255), `short` (2 bytes), `int` (thường 4 bytes trên kiến trúc 32/64-bit hiện đại), `long` (4 hoặc 8 bytes), `float` (4 bytes, độ chính xác ~6 chữ số), `double` (8 bytes, độ chính xác ~15 chữ số).",
                            "Bổ từ `signed` (có dấu, dùng bù 2) và `unsigned` (không dấu, chỉ biểu diễn số không âm từ 0 đến 2^N - 1).",
                            "Toán tử `sizeof(type)` hoặc `sizeof(expr)` trả về kích thước tính bằng byte của kiểu dữ liệu hoặc biểu thức trong thời gian biên dịch (kiểu size_t)."
                        ],
                        "keyPoints": ["char 1B, int 4B, float 4B, double 8B", "unsigned biểu diễn từ 0 đến 2^N - 1", "sizeof() tính trong thời gian biên dịch"],
                        "citations": { "uttPage": "Trang 89 - 95", "hcmutePage": "Trang 31 - 36" }
                    },
                    {
                        "id": "c-art-ch2-02", "code": "2.1.2", "title": "Ép Kiểu Dữ Liệu (Type Casting) và Bẫy Phép Chia Nguyên",
                        "content": [
                            "Ép kiểu ngầm định (Implicit promotion): Khi tính toán biểu thức chứa nhiều kiểu khác nhau, C tự động nâng cấp kiểu nhỏ hơn lên kiểu lớn hơn (char, short -> int -> unsigned -> long -> float -> double).",
                            "Bẫy phép chia nguyên: Trong C, nếu cả hai toán hạng đều là số nguyên, phép chia `/` sẽ thực hiện phép chia lấy phần nguyên (cắt cụt). Ví dụ `5 / 2` cho kết quả `2`, gán vào `float x = 5 / 2;` thì `x` vẫn là `2.0`.",
                            "Cách khắc phục: Ép kiểu tường minh `(float)5 / 2` hoặc viết hằng số chấm động `5.0 / 2` để kết quả đạt `2.5`."
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
                        "id": "c-art-ch2-03", "code": "2.2.1", "title": "Toán tử Tăng Giảm (++ / --) và Đoản Mạch Logic (Short-circuit)",
                        "content": [
                            "Toán tử tiền tố `++x`: Tăng `x` lên 1 trước, sau đó mới trả về giá trị mới của `x` để tính biểu thức.",
                            "Toán tử hậu tố `x++`: Trả về giá trị hiện tại của `x` để tính biểu thức, sau đó mới tăng `x` lên 1.",
                            "Cơ chế đoản mạch (Short-circuit evaluation): Trong biểu thức logic `A && B`, nếu `A` sai (0), `B` sẽ KHÔNG được thực thi. Trong `A || B`, nếu `A` đúng (khác 0), `B` sẽ KHÔNG được thực thi.",
                            "Bẫy: Viết `if (0 && ++x)` thì biến `x` hoàn toàn không bị tăng do đoản mạch logic."
                        ],
                        "keyPoints": ["++x (tăng trước), x++ (dùng giá trị cũ rồi tăng)", "Short-circuit &&: vế trái sai bỏ qua vế phải", "Short-circuit ||: vế trái đúng bỏ qua vế phải"],
                        "citations": { "uttPage": "Trang 100 - 108", "hcmutePage": "Trang 41 - 44" }
                    },
                    {
                        "id": "c-art-ch2-04", "code": "2.2.2", "title": "Toán tử Thao tác Bit (Bitwise Operators)",
                        "content": [
                            "C cung cấp 6 toán tử thao tác trực tiếp trên các bit nhị phân của số nguyên: AND bit (`&`), OR bit (`|`), XOR bit (`^`), NOT bit (`~`), dịch trái (`<<`), dịch phải (`>>`).",
                            "Dịch trái `x << n` tương đương với phép nhân `x * (2^n)`. Dịch phải `x >> n` tương đương phép chia nguyên `x / (2^n)` (đối với số dương).",
                            "Ứng dụng thực tế: Bật bit thứ k (`x |= (1 << k)`), tắt bit thứ k (`x &= ~(1 << k)`), đảo bit thứ k (`x ^= (1 << k)`), kiểm tra bit thứ k (`(x >> k) & 1`)."
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
                            "Cú pháp: `printf(\"định_dạng\", đối_số_1, đối_số_2, ...)`. Các mã định dạng quan trọng: `%d` (int), `%u` (unsigned int), `%ld` (long), `%f` (float), `%lf` (double), `%c` (char), `%s` (chuỗi), `%p` (địa chỉ con trỏ), `%x` / `%X` (hex).",
                            "Định dạng căn lề và độ rộng: `%5d` (in số nguyên chiếm ít nhất 5 vị trí, căn phải), `%-5d` (căn trái), `%.2f` (làm tròn in 2 chữ số sau dấu thập phân)."
                        ],
                        "keyPoints": ["%d int, %f float, %lf double, %s chuỗi", "%.2f làm tròn 2 chữ số thập phân", "%-10s căn trái độ rộng 10"],
                        "citations": { "uttPage": "Trang 114 - 118", "hcmutePage": "Trang 26 - 29" }
                    },
                    {
                        "id": "c-art-ch2-06", "code": "2.3.2", "title": "Hàm scanf() và Kỹ thuật Xóa Bộ Đệm stdin",
                        "content": [
                            "Cú pháp: `scanf(\"định_dạng\", &biến)`. Bắt buộc phải truyền địa chỉ của biến thông qua toán tử `&` (ngoại trừ biến mảng/chuỗi bản thân đã là địa chỉ).",
                            "Bẫy trôi lệnh: Khi nhập số bằng `scanf(\"%d\", &n)`, người dùng bấm phím Enter để xác nhận. Phím Enter để lại ký tự `\\n` trong bộ đệm bàn phím `stdin`. Nếu lệnh kế tiếp là đọc ký tự `scanf(\"%c\", &ch)` hoặc chuỗi, nó sẽ đọc ngay `\\n` mà không đợi người dùng nhập.",
                            "Cách khắc phục chuẩn ANSI C: Dùng khoảng trắng phía trước mã định dạng `scanf(\" %c\", &ch)` (khoảng trắng tự động bỏ qua mọi ký tự trắng/dòng mới) hoặc chạy vòng lặp dọn sạch: `while ((c = getchar()) != '\\n' && c != EOF);`."
                        ],
                        "keyPoints": ["Bắt buộc dùng toán tử & trong scanf", "Bẫy ký tự \\n đọng lại trong stdin", "Khắc phục: scanf(\" %c\") hoặc while(getchar()!='\\n')"],
                        "citations": { "uttPage": "Trang 118 - 124", "hcmutePage": "Trang 29 - 31" }
                    }
                ]
            }
        ]
    }
]

# Write chapter 1 and 2, and we can scaffold chapters 3 to 9 systematically
out_dir = "src/subjects/c-lang/data/chapters"
os.makedirs(out_dir, exist_ok=True)

for ch in CHAPTER_DEFS:
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

print("Scaffolded chapter1.ts and chapter2.ts successfully.")
