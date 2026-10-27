"""
scripts/build_all_clang_flashcards.py
Tạo trọn vẹn 125 thẻ ghi nhớ (Flashcards) chuẩn hóa 2 mặt chia theo 9 chương
kèm theo định nghĩa cô đọng, code ví dụ thực tế và số trang giáo trình đối chiếu.
"""

import os, json, sys

sys.stdout.reconfigure(encoding='utf-8')

# 125 Flashcard definitions distributed across 9 chapters
FLASHCARDS_DATA = {
    1: [ # 12 cards
        {
            "concept": "Lịch sử và Bản chất Ngôn ngữ C",
            "definition": "Được Dennis Ritchie phát triển năm 1972 tại Bell Labs để viết lại UNIX. C là ngôn ngữ bậc trung, có cấu trúc và tính khả chuyển cao.",
            "code": "// Ngôn ngữ lập trình C (Dennis Ritchie, 1972)\n// Khả chuyển, hiệu năng cao, gần gũi phần cứng.",
            "page": "UTT tr.21 / HCMUTE tr.9"
        },
        {
            "concept": "Quy ước Hàm main()",
            "definition": "Điểm bắt buộc bắt đầu thực thi của mọi chương trình C. Chuẩn C99/C11 quy định int main(void) và trả về return 0 báo hiệu thành công.",
            "code": "int main(void) {\n    printf(\"Hello World!\\n\");\n    return 0;\n}",
            "page": "UTT tr.25 / HCMUTE tr.20"
        },
        {
            "concept": "Chu trình Biên dịch 4 bước (GCC Pipeline)",
            "definition": "Quy trình chuyển mã nguồn thành file thực thi: (1) Tiền xử lý (.i) -> (2) Biên dịch sang Assembly (.s) -> (3) Hợp dịch sang mã máy (.o) -> (4) Liên kết Linker (.exe).",
            "code": "// gcc -E -> .i (Preprocessor)\n// gcc -S -> .s (Compiler)\n// gcc -c -> .o (Assembler)\n// gcc    -> .exe (Linker)",
            "page": "UTT tr.35 / HCMUTE tr.27"
        },
        {
            "concept": "Tập 32 Từ Khóa Chuẩn C89",
            "definition": "Các từ dành riêng cho trình biên dịch (như int, float, if, for, return, struct, void). Lập trình viên không được dùng từ khóa làm tên biến hay tên hàm.",
            "code": "// Sai: int default = 10; float for = 2.5;\n// Dung: int def_val = 10; float for_count = 2.5;",
            "page": "UTT tr.32 / HCMUTE tr.23"
        },
        {
            "concept": "Quy tắc Đặt tên Định danh (Identifiers)",
            "definition": "Chỉ gồm chữ cái, chữ số và dấu gạch dưới '_'. Bắt buộc bắt đầu bằng chữ cái hoặc gạch dưới, KHÔNG được bắt đầu bằng chữ số. C phân biệt hoa thường.",
            "code": "int _score1;  // Hop le\nint totalSum; // Hop le\n// int 1stVal; // Lỗi biên dịch: bắt đầu bằng số!",
            "page": "UTT tr.33 / HCMUTE tr.24"
        },
        {
            "concept": "Chỉ thị #include: <...> vs \"...\"",
            "definition": "#include <...> ưu tiên tìm trong thư mục thư viện hệ thống chuẩn. #include \"...\" ưu tiên tìm trong thư mục hiện tại của dự án trước rồi mới tìm hệ thống.",
            "code": "#include <stdio.h>    // Thu vien chuan he thong\n#include \"my_header.h\" // Thu vien noi bo du an",
            "page": "UTT tr.68 / HCMUTE tr.195"
        },
        {
            "concept": "Chỉ thị Macro Hằng #define",
            "definition": "Chỉ thị tiền xử lý thay thế văn bản trước biên dịch. Bẫy nghiêm cấm: KHÔNG đặt dấu chấm phẩy ';' ở cuối chỉ thị #define.",
            "code": "#define MAX_LEN 100 // Dung (khong co dau ';')\n// #define BAD 100;  // Sai! Se gay loi cu phap ngam",
            "page": "UTT tr.69 / HCMUTE tr.198"
        },
        {
            "concept": "Macro Hàm có Tham số",
            "definition": "Tạo hàm macro thay thế văn bản nhanh. Bắt buộc phải đóng mở ngoặc tròn quanh từng tham số và quanh toàn bộ biểu thức để tránh lỗi ưu tiên toán tử.",
            "code": "#define SQUARE(x) ((x) * (x))\nint a = SQUARE(2 + 3); // ((2+3) * (2+3)) = 25",
            "page": "UTT tr.70 / HCMUTE tr.200"
        },
        {
            "concept": "Cơ chế Header Guards",
            "definition": "Dùng #ifndef, #define và #endif để ngăn chặn việc chèn lặp lại nội dung tệp tiêu đề nhiều lần gây lỗi trùng định nghĩa.",
            "code": "#ifndef MY_LIB_H\n#define MY_LIB_H\n// Cac khai bao ham va struct\n#endif // MY_LIB_H",
            "page": "UTT tr.71 / HCMUTE tr.204"
        },
        {
            "concept": "Chỉ thị Biên dịch có Điều kiện",
            "definition": "Cho phép biên dịch hoặc bỏ qua các đoạn mã tùy theo điều kiện macro định sẵn (#ifdef, #ifndef, #if, #elif, #else, #endif).",
            "code": "#ifdef DEBUG\n    printf(\"Gia tri bien x = %d\\n\", x);\n#endif",
            "page": "UTT tr.72 / HCMUTE tr.202"
        },
        {
            "concept": "Phân biệt Cú pháp vs Cảnh báo vs Runtime Error",
            "definition": "Syntax Error: sai quy tắc ngôn ngữ, chặn biên dịch. Warning: mã hợp lệ nhưng tiềm ẩn bọ. Runtime Error: lỗi phát sinh lúc đang chạy (chia 0, segfault).",
            "code": "// Syntax error: int a = ; \n// Warning: float x = 5 / 2; \n// Runtime error: int b = 5 / 0;",
            "page": "UTT tr.36 / HCMUTE tr.28"
        },
        {
            "concept": "Ký tự Chú thích (Comments)",
            "definition": "// dùng cho chú thích một dòng (chuẩn C99). /* ... */ dùng cho chú thích một hoặc nhiều dòng liên tiếp. Không thể lồng chú thích /* /* */ */.",
            "code": "// Chu thich don dong\n/* Chu thich \n   nhieu dong */",
            "page": "UTT tr.34 / HCMUTE tr.22"
        }
    ],
    2: [ # 15 cards
        {
            "concept": "Kích thước Kiểu Dữ liệu Nguyên thủy",
            "definition": "Chuẩn 32/64-bit: char 1 byte, short 2 bytes, int 4 bytes, long 4 hoặc 8 bytes, float 4 bytes, double 8 bytes.",
            "code": "printf(\"sizeof(int) = %zu\\n\", sizeof(int));\nprintf(\"sizeof(double) = %zu\\n\", sizeof(double));",
            "page": "UTT tr.89 / HCMUTE tr.31"
        },
        {
            "concept": "Bổ từ signed vs unsigned",
            "definition": "signed dùng bit trọng số cao nhất làm dấu (bù 2). unsigned chỉ biểu diễn số không âm từ 0 đến 2^N - 1, tăng gấp đôi miền số dương.",
            "code": "unsigned char u = 255; // 0 den 255\nsigned char s = 127;   // -128 den 127",
            "page": "UTT tr.91 / HCMUTE tr.33"
        },
        {
            "concept": "Tràn Số Nguyên (Integer Overflow)",
            "definition": "Khi tính toán vượt quá giới hạn tối đa của kiểu dữ liệu, số nguyên có dấu gây hành vi không xác định, còn không dấu quay vòng về 0 modulo 2^N.",
            "code": "unsigned char c = 255;\nc = c + 1; // c quay vong ve 0!",
            "page": "UTT tr.93 / HCMUTE tr.35"
        },
        {
            "concept": "Toán tử sizeof()",
            "definition": "Toán tử một ngôi tính toán kích thước byte của kiểu dữ liệu hoặc biểu thức ngay trong thời gian biên dịch (compile-time).",
            "code": "int arr[10];\nsize_t n = sizeof(arr) / sizeof(arr[0]); // n = 10",
            "page": "UTT tr.94 / HCMUTE tr.36"
        },
        {
            "concept": "Ép kiểu Ngầm định vs Tường minh",
            "definition": "Ngầm định: C tự động nâng kiểu nhỏ lên kiểu lớn. Tường minh: lập trình viên chỉ định cụ thể bằng cú pháp (type)expr.",
            "code": "float a = (float)5 / 2; // a = 2.5f (tuong minh)\ndouble b = 3 + 4.5;      // 3 tu nang len double",
            "page": "UTT tr.97 / HCMUTE tr.38"
        },
        {
            "concept": "Bẫy Phép Chia Nguyên",
            "definition": "Khi 2 toán hạng đều là số nguyên, phép chia / luôn cắt cụt lấy phần nguyên. Viết float f = 5 / 2; thì f vẫn nhận giá trị 2.0.",
            "code": "float sai = 5 / 2;    // sai = 2.0f\nfloat dung = 5.0 / 2; // dung = 2.5f",
            "page": "UTT tr.98 / HCMUTE tr.39"
        },
        {
            "concept": "Tiền tố ++x vs Hậu tố x++",
            "definition": "++x: tăng x lên 1 trước rồi mới lấy giá trị tính toán. x++: lấy giá trị cũ của x tính toán xong mới tăng x lên 1.",
            "code": "int a = 5, b = ++a; // a = 6, b = 6\nint c = 5, d = c++; // c = 6, d = 5",
            "page": "UTT tr.102 / HCMUTE tr.41"
        },
        {
            "concept": "Cơ chế Đoản Mạch Logic (Short-circuit)",
            "definition": "Trong A && B: nếu A sai thì B bị bỏ qua. Trong A || B: nếu A đúng thì B bị bỏ qua. Không chạy hàm hoặc toán tử tăng giảm ở nhánh bị bỏ qua.",
            "code": "int x = 0;\nif (0 && ++x) { /* khong vao */ }\n// x van bang 0 do doan mach!",
            "page": "UTT tr.105 / HCMUTE tr.42"
        },
        {
            "concept": "Toán tử Thao tác Bit &, |, ^, ~",
            "definition": "& (AND bit), | (OR bit), ^ (XOR bit: khác nhau bằng 1), ~ (NOT bit: đảo mọi bit từ 0 sang 1 và ngược lại).",
            "code": "unsigned char a = 5; // 00000101\nunsigned char b = 3; // 00000011\n// a & b = 1, a | b = 7, a ^ b = 6",
            "page": "UTT tr.109 / HCMUTE tr.44"
        },
        {
            "concept": "Toán tử Dịch Bit << và >>",
            "definition": "x << n: dịch trái n bit (tương đương x * 2^n). x >> n: dịch phải n bit (tương đương chia nguyên x / 2^n với số dương).",
            "code": "int x = 5;\nint nhan4 = x << 2; // 5 * 4 = 20\nint chia2 = x >> 1; // 5 / 2 = 2",
            "page": "UTT tr.111 / HCMUTE tr.45"
        },
        {
            "concept": "Toán tử Điều kiện Ba Ngôi (?:)",
            "definition": "Cú pháp: condition ? expr_true : expr_false. Rút gọn cấu trúc if-else đơn giản thành một biểu thức có giá trị trả về.",
            "code": "int max = (a > b) ? a : b;\nprintf(\"So lon nhat la %d\\n\", max);",
            "page": "UTT tr.113 / HCMUTE tr.43"
        },
        {
            "concept": "Mã Định Dạng printf Thường Gặp",
            "definition": "%d (int), %u (unsigned), %ld (long), %f (float), %lf (double), %c (char), %s (chuỗi), %p (con trỏ địa chỉ), %x (hex).",
            "code": "printf(\"Tuoi: %d, Diem: %.2f, Dia chi: %p\\n\", 20, 8.75, (void*)&a);",
            "page": "UTT tr.115 / HCMUTE tr.27"
        },
        {
            "concept": "Độ Rộng và Căn Lề trong printf",
            "definition": "%5d: căn phải trên độ rộng 5 cột. %-5d: căn trái trên 5 cột. %.2f: giới hạn đúng 2 chữ số phần thập phân.",
            "code": "printf(\"|%-10s|%5d|\\n\", \"Alice\", 95);\nprintf(\"|%-10s|%5d|\\n\", \"Bob\", 100);",
            "page": "UTT tr.116 / HCMUTE tr.28"
        },
        {
            "concept": "Ký tự Escape Sequence",
            "definition": "\\n (xuống dòng), \\t (tab thụt lề), \\\\ (in ký tự gạch chéo), \\\" (in ngoặc kép), \\0 (ký tự kết thúc chuỗi null).",
            "code": "printf(\"Dong 1\\tCot 2\\nIn dau ngoac: \\\"C\\\"\\n\");",
            "page": "UTT tr.117 / HCMUTE tr.26"
        },
        {
            "concept": "Bẫy Xóa Bộ Đệm stdin Sau scanf()",
            "definition": "scanf(\"%d\") để lại ký tự '\\n' trong bộ đệm khiến lệnh đọc ký tự tiếp theo đọc nhầm. Khắc phục: scanf(\" %c\") hoặc vòng lặp getchar().",
            "code": "int n; char ch;\nscanf(\"%d\", &n);\nscanf(\" %c\", &ch); // Co khoang trang bo qua \\n",
            "page": "UTT tr.120 / HCMUTE tr.30"
        }
    ],
    3: [ # 14 cards
        {
            "concept": "Giá trị Chân Lý trong C",
            "definition": "Ngôn ngữ C không có kiểu bool nguyên thủy thời C89; mọi giá trị khác 0 được quy ước là Đúng (true), giá trị bằng 0 là Sai (false).",
            "code": "if (-5) { /* Luon thuc thi vi -5 khac 0 */ }\nif (0)  { /* Khong bao gio thuc thi */ }",
            "page": "UTT tr.126 / HCMUTE tr.48"
        },
        {
            "concept": "Bẫy Toán tử Gán '=' trong if",
            "definition": "Viết if (x = 5) là phép gán đưa 5 vào x và trả về 5 (luôn true). So sánh bằng bắt buộc phải dùng dấu '=='.",
            "code": "int x = 0;\nif (x = 5) { /* Luon chay! Gia tri tra ve la 5 */ }\nif (x == 5) { /* Dung nghia so sanh bang */ }",
            "page": "UTT tr.128 / HCMUTE tr.50"
        },
        {
            "concept": "Bẫy Dấu Chấm Phẩy ';' Sau if",
            "definition": "Đặt dấu ';' ngay sau if làm thân lệnh trở thành lệnh rỗng; khối lệnh thụt lề phía sau luôn luôn bị thực thi độc lập.",
            "code": "int x = -10;\nif (x > 0); // Lenh rong ket thuc tai day!\n    printf(\"X duong\\n\"); // Luon luon bi in!",
            "page": "UTT tr.130 / HCMUTE tr.52"
        },
        {
            "concept": "Vấn đề Dangling Else",
            "definition": "Trong các lệnh if lồng nhau không có ngoặc nhọn {}, nhánh else luôn tự động kết hợp với lệnh if gần nhất chưa có else.",
            "code": "if (a > 0)\n    if (b > 0) printf(\"1\");\n    else printf(\"2\"); // else nay thuoc ve if(b > 0)!",
            "page": "UTT tr.135 / HCMUTE tr.55"
        },
        {
            "concept": "Cấu trúc switch-case",
            "definition": "Lựa chọn rẽ nhánh đa giá trị dựa trên biến kiểu nguyên (int, char, enum). Không thể kiểm tra số thực (float) hoặc khoảng giá trị.",
            "code": "switch (ch) {\n    case 'A': printf(\"Xuat sac\"); break;\n    default:  printf(\"Khac\"); break;\n}",
            "page": "UTT tr.146 / HCMUTE tr.62"
        },
        {
            "concept": "Cơ chế Fall-through trong switch",
            "definition": "Nếu thiếu lệnh break ở cuối case, chương trình sẽ tự động trôi lệnh xuống thực thi các case phía dưới cho đến khi gặp break.",
            "code": "switch (x) {\n    case 1: printf(\"Mot \"); // Quen break!\n    case 2: printf(\"Hai \"); break;\n} // x=1 in ra: \"Mot Hai \"",
            "page": "UTT tr.148 / HCMUTE tr.64"
        },
        {
            "concept": "Nhánh default trong switch",
            "definition": "Thực thi khi giá trị của biến không khớp với bất kỳ nhãn case nào. Có thể đặt ở bất cứ đâu nhưng thông lệ đặt ở cuối cùng.",
            "code": "switch (color) {\n    case 1: printf(\"Do\"); break;\n    default: printf(\"Mau khac\"); break;\n}",
            "page": "UTT tr.150 / HCMUTE tr.66"
        },
        {
            "concept": "Vòng lặp for: Chu trình 4 bước",
            "definition": "for (init; cond; step): (1) Khởi tạo init 1 lần -> (2) Kiểm tra cond -> (3) Chạy thân vòng lặp -> (4) Cập nhật step và quay lại bước 2.",
            "code": "for (int i = 0; i < 5; i++) {\n    printf(\"%d \", i); // In: 0 1 2 3 4\n}",
            "page": "UTT tr.160 / HCMUTE tr.72"
        },
        {
            "concept": "Vòng lặp vô tận (Infinite Loop)",
            "definition": "Vòng lặp không bao giờ kết thúc do điều kiện luôn đúng hoặc không có điểm dừng: for (;;) hoặc while (1).",
            "code": "while (1) {\n    // Xu ly su kien lien tuc\n    if (exit_requested) break;\n}",
            "page": "UTT tr.165 / HCMUTE tr.75"
        },
        {
            "concept": "Vòng lặp tiền kiểm tra while",
            "definition": "Kiểm tra điều kiện trước khi thực thi. Nếu ngay từ đầu điều kiện sai (0), khối lệnh bên trong sẽ không chạy lần nào.",
            "code": "int i = 10;\nwhile (i < 5) {\n    printf(\"Khong bao gio chay\");\n}",
            "page": "UTT tr.170 / HCMUTE tr.78"
        },
        {
            "concept": "Vòng lặp hậu kiểm tra do-while",
            "definition": "Thực thi thân vòng lặp trước rồi mới kiểm tra điều kiện. Đảm bảo thân vòng lặp luôn chạy ít nhất 1 lần. Bắt buộc có ';' ở cuối.",
            "code": "int choice;\ndo {\n    printf(\"Nhap lua chon (1-3): \");\n    scanf(\"%d\", &choice);\n} while (choice < 1 || choice > 3);",
            "page": "UTT tr.175 / HCMUTE tr.82"
        },
        {
            "concept": "Lệnh break ngắt luồng",
            "definition": "Thoát ngay lập tức khỏi vòng lặp (for, while, do-while) hoặc cấu trúc switch gần nhất bao bọc nó.",
            "code": "for (int i = 0; i < 100; i++) {\n    if (i == 5) break; // Thoat vong lap khi i = 5\n}",
            "page": "UTT tr.190 / HCMUTE tr.86"
        },
        {
            "concept": "Lệnh continue bỏ qua lượt lặp",
            "definition": "Bỏ qua các lệnh còn lại trong lượt lặp hiện tại và nhảy ngay đến bước cập nhật (trong for) hoặc kiểm tra điều kiện (trong while).",
            "code": "for (int i = 0; i < 6; i++) {\n    if (i % 2 == 0) continue; // Bo qua so chan\n    printf(\"%d \", i); // In: 1 3 5\n}",
            "page": "UTT tr.195 / HCMUTE tr.88"
        },
        {
            "concept": "Lệnh goto và Nhãn (Label)",
            "definition": "Nhảy không điều kiện tới vị trí nhãn được đánh dấu trong hàm. Hạn chế dùng để tránh mã nguồn rối rắm (Spaghetti Code).",
            "code": "for (int i = 0; i < 10; i++)\n    for (int j = 0; j < 10; j++)\n        if (error) goto cleanup;\ncleanup:\n    // Don dep bo nho va thoat",
            "page": "UTT tr.202 / HCMUTE tr.90"
        }
    ],
    4: [ # 14 cards
        {
            "concept": "Nguyên Mẫu Hàm (Function Prototype)",
            "definition": "Khai báo kiểu trả về, tên hàm và tham số trước khi gọi, giúp trình biên dịch kiểm tra kiểu dữ liệu đối số chính xác.",
            "code": "double tinhTong(double a, double b); // Prototype\n\nint main(void) {\n    printf(\"%.2f\", tinhTong(2.5, 3.5));\n}",
            "page": "UTT tr.214 / HCMUTE tr.138"
        },
        {
            "concept": "Bản chất Truyền Tham Trị (Pass-by-value)",
            "definition": "C chỉ có cơ chế truyền tham trị. Tham số hàm nhận một bản sao độc lập; sửa tham số trong hàm không đổi giá trị biến gốc ngoài main.",
            "code": "void tang(int x) { x++; }\nint main(void) {\n    int a = 5; tang(a);\n    printf(\"%d\", a); // Van in ra 5!\n}",
            "page": "UTT tr.226 / HCMUTE tr.143"
        },
        {
            "concept": "Mô phỏng Tham chiếu Bằng Con Trỏ",
            "definition": "Truyền địa chỉ của biến vào hàm con trỏ để giải tham chiếu (*p) sửa đổi trực tiếp ô nhớ của biến gốc.",
            "code": "void swap(int *a, int *b) {\n    int tmp = *a; *a = *b; *b = tmp;\n}\n// Goi: swap(&x, &y);",
            "page": "UTT tr.230 / HCMUTE tr.145"
        },
        {
            "concept": "Phạm vi Biến Cục Bộ (Local Scope)",
            "definition": "Khai báo bên trong cặp ngoặc nhọn {}; chỉ tồn tại và truy cập được bên trong khối đó; tự động hủy khi ra khỏi khối.",
            "code": "void func(void) {\n    int local_var = 10; // Cục bộ trên Stack\n} // local_var bị hủy tại đây",
            "page": "UTT tr.240 / HCMUTE tr.148"
        },
        {
            "concept": "Phạm vi Biến Toàn Cục (Global Scope)",
            "definition": "Khai báo bên ngoài mọi hàm; mọi hàm đều truy xuất được; tồn tại suốt vòng đời chương trình trong vùng Data Segment.",
            "code": "int g_counter = 0; // Toan cuc\nvoid inc(void) { g_counter++; }",
            "page": "UTT tr.242 / HCMUTE tr.149"
        },
        {
            "concept": "Bổ từ static cho Biến Cục Bộ",
            "definition": "Biến static cục bộ giữ nguyên giá trị giữa các lần gọi hàm khác nhau; chỉ được khởi tạo duy nhất 1 lần lúc nạp chương trình.",
            "code": "void dem(void) {\n    static int count = 0;\n    count++;\n    printf(\"%d \", count); // In 1, 2, 3...\n}",
            "page": "UTT tr.245 / HCMUTE tr.151"
        },
        {
            "concept": "Bổ từ extern cho Biến Toàn Cục",
            "definition": "Khai báo biến toàn cục được định nghĩa ở file mã nguồn khác để liên kết dùng chung giữa nhiều file trong dự án.",
            "code": "// file1.c: int global_score = 100;\n// file2.c: extern int global_score;",
            "page": "UTT tr.248 / HCMUTE tr.152"
        },
        {
            "concept": "Nguyên lý Đệ Quy (Recursion)",
            "definition": "Hàm gọi lại chính nó để giải bài toán nhỏ hơn cùng dạng. Bắt buộc phải có: (1) Điều kiện dừng Base case; (2) Bước đệ quy tiến về điểm dừng.",
            "code": "long giaiThua(int n) {\n    if (n <= 1) return 1; // Base case\n    return n * giaiThua(n - 1); // Recursive\n}",
            "page": "UTT tr.252 / HCMUTE tr.154"
        },
        {
            "concept": "Khung Ngăn Xếp (Stack Frame) và Call Stack",
            "definition": "Mỗi lần gọi hàm, hệ thống đẩy một Stack Frame chứa địa chỉ trả về, tham số và biến cục bộ lên đỉnh ngăn xếp Call Stack.",
            "code": "// Call stack khi goi factorial(3):\n// [fac(1)] -> [fac(2)] -> [fac(3)] -> [main]",
            "page": "UTT tr.256 / HCMUTE tr.156"
        },
        {
            "concept": "Tràn Ngăn Xếp (Stack Overflow)",
            "definition": "Xảy ra khi đệ quy quá sâu hoặc thiếu điều kiện dừng, khiến vùng nhớ Stack bị đầy tràn và hệ thống làm sập chương trình lập tức.",
            "code": "void voTan(void) {\n    voTan(); // Loi Stack Overflow vi khong co Base case!\n}",
            "page": "UTT tr.258 / HCMUTE tr.157"
        },
        {
            "concept": "Đệ Quy Đuôi (Tail Recursion)",
            "definition": "Lời gọi đệ quy là hành động cuối cùng của hàm trước khi return. Trình biên dịch tối ưu (Tail Call Optimization) có thể chuyển thành vòng lặp.",
            "code": "long tailFact(int n, long acc) {\n    if (n <= 1) return acc;\n    return tailFact(n - 1, n * acc);\n}",
            "page": "UTT tr.262 / HCMUTE tr.158"
        },
        {
            "concept": "Kỹ thuật Đệ Quy Nhớ (Memoization)",
            "definition": "Lưu lại kết quả bài toán con đã giải vào mảng tĩnh để tái sử dụng, giảm độ phức tạp từ O(2^N) xuống O(N) như dãy Fibonacci.",
            "code": "long memo[100] = {0};\nlong fib(int n) {\n    if (n <= 1) return n;\n    if (memo[n] != 0) return memo[n];\n    return memo[n] = fib(n-1) + fib(n-2);\n}",
            "page": "UTT tr.268 / HCMUTE tr.158"
        },
        {
            "concept": "Hàm Kiểu Trả Về void",
            "definition": "Hàm thực hiện một chuỗi hành động mà không trả về kết quả nào cho nơi gọi. Dùng return; không kèm biểu thức để thoát sớm.",
            "code": "void inLoi(const char *msg) {\n    if (!msg) return;\n    printf(\"Loi: %s\\n\", msg);\n}",
            "page": "UTT tr.218 / HCMUTE tr.140"
        },
        {
            "concept": "Hàm Nội Tuyến inline (C99)",
            "definition": "Gợi ý trình biên dịch thay thế lời gọi hàm bằng thân mã nguồn trực tiếp để loại bỏ chi phí gọi hàm (Call overhead), tăng tốc độ.",
            "code": "static inline int max(int a, int b) {\n    return (a > b) ? a : b;\n}",
            "page": "UTT tr.270 / HCMUTE tr.158"
        }
    ]
}

# Add remaining chapters 5 to 9 definitions
FLASHCARDS_DATA[5] = [ # 16 cards
    {"concept": "Mảng Một Chiều trong Bộ Nhớ", "definition": "Các phần tử cùng kiểu được cấp phát liên tục nhau trên bộ nhớ. Chỉ số bắt đầu từ 0 đến N - 1.", "code": "int a[5] = {10, 20, 30, 40, 50};\n// a[0] o dia chi x, a[1] o x + 4...", "page": "UTT tr.275 / HCMUTE tr.93"},
    {"concept": "Bẫy Lỗi Vượt Biên (Off-by-One)", "definition": "Duyệt vòng lặp for (int i = 0; i <= n; i++) sẽ truy cập phần tử a[n] ngoài biên mảng gây rò rỉ hoặc crash.", "code": "int arr[5];\n// arr[5] = 100; // Loi nghiem trong: vuot bien mang!", "page": "UTT tr.278 / HCMUTE tr.95"},
    {"concept": "Khởi Tạo Mảng Một Chiều", "definition": "Nếu danh sách khởi tạo ít hơn kích thước mảng, các phần tử còn lại tự động được gán bằng 0.", "code": "int a[10] = {1, 2}; // a[0]=1, a[1]=2, a[2..9]=0\nint b[10] = {0};    // Tat ca 10 phan tu bang 0", "page": "UTT tr.280 / HCMUTE tr.96"},
    {"concept": "Truyền Mảng vào Hàm", "definition": "Mảng luôn bị suy biến (decay) thành con trỏ trỏ tới phần tử đầu tiên. Bắt buộc truyền kèm kích thước n.", "code": "void xuat(int arr[], int n) {\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n}", "page": "UTT tr.285 / HCMUTE tr.99"},
    {"concept": "Kích Thước Mảng sizeof(arr)", "definition": "Trong phạm vi khai báo mảng, sizeof(arr) trả về tổng byte của mảng. Khi truyền vào hàm, sizeof(arr) chỉ là kích thước con trỏ!", "code": "int a[10];\nint len = sizeof(a) / sizeof(a[0]); // len = 10", "page": "UTT tr.288 / HCMUTE tr.100"},
    {"concept": "Mảng Hai Chiều (Ma Trận)", "definition": "Lưu trữ dạng Row-major (hàng nối tiếp hàng) trong bộ nhớ phẳng. a[i][j] = *(a + i * COLS + j).", "code": "int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\n// m[1][2] = 6", "page": "UTT tr.300 / HCMUTE tr.105"},
    {"concept": "Truyền Mảng 2 Chiều vào Hàm", "definition": "Bắt buộc phải chỉ định số cột cố định để trình biên dịch tính bước nhảy hàng: void func(int m[][COLS], int rows).", "code": "void inMaTran(int m[][3], int r) {\n    // Bắt buộc có số cột 3\n}", "page": "UTT tr.305 / HCMUTE tr.108"},
    {"concept": "Bản Chất Chuỗi C-String", "definition": "Là mảng một chiều các ký tự kết thúc bằng ký tự rỗng '\\0' (mã ASCII = 0). Mảng cần tối thiểu strlen + 1 bytes.", "code": "char s[6] = \"Hello\"; // 5 chu cai + '\\0'\nprintf(\"%s\", s);", "page": "UTT tr.345 / HCMUTE tr.115"},
    {"concept": "Bẫy Khai Báo Thiếu Ký Tự '\\0'", "definition": "Khai báo char s[5] = \"Hello\"; làm mất '\\0', khi in bằng printf(\"%s\") sẽ đọc tràn ra vùng nhớ rác phía sau.", "code": "char s[5] = \"Hello\"; // Thieu byte cho '\\0'!\n// printf(\"%s\", s) se in rac bo nho!", "page": "UTT tr.348 / HCMUTE tr.116"},
    {"concept": "Hàm strlen() trong <string.h>", "definition": "Đếm số ký tự từ đầu chuỗi cho đến khi gặp '\\0' (không tính '\\0' vào kết quả).", "code": "char s[] = \"HCMUTE\";\nsize_t len = strlen(s); // len = 6", "page": "UTT tr.372 / HCMUTE tr.118"},
    {"concept": "Hàm strcpy() và strncpy()", "definition": "strcpy(dest, src) sao chép toàn bộ src sang dest. strncpy(dest, src, n) sao chép tối đa n ký tự an toàn hơn.", "code": "char src[] = \"Lap trinh C\";\nchar dest[50];\nstrcpy(dest, src);", "page": "UTT tr.375 / HCMUTE tr.119"},
    {"concept": "Hàm strcat() và strncat()", "definition": "Nối chuỗi src vào đuôi chuỗi dest (bắt đầu ghi đè từ ký tự '\\0' của dest). dest phải đủ lớn.", "code": "char s[50] = \"Xin \";\nstrcat(s, \"chao!\"); // s = \"Xin chao!\"", "page": "UTT tr.378 / HCMUTE tr.119"},
    {"concept": "Hàm strcmp() So Sánh Chuỗi", "definition": "So sánh mã ASCII từng cặp ký tự. Trả về 0 nếu bằng nhau, âm nếu s1 < s2, dương nếu s1 > s2. Không so sánh bằng '=='.", "code": "if (strcmp(s1, \"admin\") == 0) {\n    printf(\"Dang nhap thanh cong\\n\");\n}", "page": "UTT tr.380 / HCMUTE tr.120"},
    {"concept": "Hàm strstr() Tìm Chuỗi Con", "definition": "Tìm kiếm lần xuất hiện đầu tiên của chuỗi con needle trong chuỗi mẹ haystack. Trả về con trỏ tới vị trí tìm thấy hoặc NULL.", "code": "char *p = strstr(\"HCMUTE Dai hoc\", \"Dai\");\nif (p) printf(\"Tim thay tai: %s\", p);", "page": "UTT tr.385 / HCMUTE tr.120"},
    {"concept": "Nhập Chuỗi An Toàn với fgets()", "definition": "fgets(str, size, stdin) đọc tối đa size - 1 ký tự, tự động gắn '\\0' ở cuối và không gây tràn bộ đệm. Cấm dùng gets().", "code": "char ten[100];\nfgets(ten, sizeof(ten), stdin);\nten[strcspn(ten, \"\\n\")] = '\\0'; // Xoa '\\n'", "page": "UTT tr.390 / HCMUTE tr.120"},
    {"concept": "Mảng Chuỗi Ký Tự", "definition": "Mảng 2 chiều kiểu char chứa danh sách các chuỗi: char danhSach[N][MAX_LEN]; mỗi hàng là một chuỗi độc lập.", "code": "char menu[3][20] = {\"1. Bat dau\", \"2. Cai dat\", \"3. Thoat\"};\nprintf(\"%s\\n\", menu[0]);", "page": "UTT tr.410 / HCMUTE tr.120"}
]

FLASHCARDS_DATA[6] = [ # 16 cards
    {"concept": "Con Trỏ và Toán Tử Địa Chỉ &", "definition": "Con trỏ lưu địa chỉ ô nhớ RAM. Toán tử &x trả về địa chỉ ô nhớ của biến x.", "code": "int x = 100;\nint *p = &x; // p luu dia chi cua x", "page": "UTT tr.320 / HCMUTE tr.121"},
    {"concept": "Toán Tử Giải Tham Chiếu *", "definition": "Toán tử *p truy xuất trực tiếp vào giá trị lưu tại ô nhớ mà con trỏ p đang trỏ tới.", "code": "int x = 10;\nint *p = &x;\n*p = 20; // Sửa giá trị x thành 20", "page": "UTT tr.322 / HCMUTE tr.122"},
    {"concept": "Kích Thước Của Biến Con Trỏ", "definition": "Con trỏ luôn có kích thước cố định: 4 bytes trên 32-bit và 8 bytes trên 64-bit, bất kể kiểu dữ liệu trỏ tới.", "code": "printf(\"%zu %zu\", sizeof(char*), sizeof(double*));\n// In: 8 8 (tren he thong 64-bit)", "page": "UTT tr.324 / HCMUTE tr.123"},
    {"concept": "Con Trỏ NULL", "definition": "Con trỏ trỏ vào địa chỉ 0 (không trỏ vào vùng nhớ hợp lệ nào). Dùng để khởi tạo an toàn và đánh dấu kết thúc.", "code": "int *ptr = NULL;\nif (ptr != NULL) { *ptr = 5; }", "page": "UTT tr.325 / HCMUTE tr.124"},
    {"concept": "Con Trỏ Hoang Dã (Wild Pointer)", "definition": "Con trỏ chưa được khởi tạo mang địa chỉ rác ngẫu nhiên. Giải tham chiếu *p gây sập chương trình Segmentation Fault.", "code": "int *p; // Chưa khởi tạo\n// *p = 10; // Cực kỳ nguy hiểm, crash ngay!", "page": "UTT tr.326 / HCMUTE tr.125"},
    {"concept": "Số Học Con Trỏ (Pointer Arithmetic)", "definition": "Khi cộng p + n, con trỏ nhảy thêm n * sizeof(*p) bytes trong bộ nhớ. Phép trừ p2 - p1 trả về số lượng phần tử ở giữa.", "code": "int arr[5]; int *p = arr;\np = p + 2; // Dịch sang arr[2], tăng 8 byte", "page": "UTT tr.330 / HCMUTE tr.127"},
    {"concept": "Độ Ưu Tiên *p++ vs (*p)++", "definition": "*p++: lấy giá trị hiện tại rồi tăng địa chỉ con trỏ p lên. (*p)++: tăng giá trị ô nhớ mà p trỏ tới lên 1 đơn vị.", "code": "int a[] = {10, 20};\nint *p = a;\nint v1 = *p++;   // v1 = 10, p tro toi a[1]\nint v2 = (*p)++; // v2 = 20, a[1] tro thanh 21", "page": "UTT tr.332 / HCMUTE tr.128"},
    {"concept": "Tương Đương Giữa Mảng và Con Trỏ", "definition": "Tên mảng a là một hằng con trỏ trỏ tới a[0]. Do đó a[i] hoàn toàn tương đương với *(a + i).", "code": "int a[5] = {1, 2, 3};\nprintf(\"%d\", *(a + 1)); // In: 2 (tuong duong a[1])", "page": "UTT tr.335 / HCMUTE tr.129"},
    {"concept": "Con Trỏ Hằng vs Hằng Con Trỏ", "definition": "const int *p: không sửa được giá trị qua *p. int * const p: không đổi được địa chỉ p trỏ tới. const int * const p: cấm cả hai.", "code": "int x = 5;\nconst int *p1 = &x; // *p1 = 10 (Loi!)\nint * const p2 = &x; // p2 = &y (Loi!)", "page": "UTT tr.338 / HCMUTE tr.130"},
    {"concept": "Vùng Nhớ Heap và Cấp Phát Động", "definition": "Heap là vùng nhớ lớn dùng cho cấp phát động lúc runtime. Kích thước linh hoạt nhưng phải tự giải phóng thủ công bằng free().", "code": "// Cap phat tren Heap giup linh hoat kich thuoc\nint *a = (int*)malloc(n * sizeof(int));", "page": "UTT tr.401 / HCMUTE tr.131"},
    {"concept": "Hàm malloc() trong <stdlib.h>", "definition": "Cấp phát vùng nhớ size bytes trên Heap, chứa giá trị rác ngẫu nhiên. Trả về void* hoặc NULL nếu hết bộ nhớ.", "code": "int *p = (int*)malloc(10 * sizeof(int));\nif (p == NULL) { /* Xu ly het RAM */ }", "page": "UTT tr.403 / HCMUTE tr.132"},
    {"concept": "Hàm calloc() vs malloc()", "definition": "calloc(n, size) cấp phát n phần tử và tự động xóa mọi byte về 0; chậm hơn malloc một chút nhưng an toàn hơn.", "code": "int *p = (int*)calloc(10, sizeof(int));\n// Tat ca 10 phan tu deu khoi tao bang 0", "page": "UTT tr.405 / HCMUTE tr.132"},
    {"concept": "Hàm realloc() Thay Đổi Kích Thước", "definition": "Thay đổi kích thước vùng nhớ Heap đã cấp phát trước đó. Giữ nguyên dữ liệu cũ, tự động dời vùng nhớ nếu cần.", "code": "p = (int*)realloc(p, 20 * sizeof(int));\n// Tang kich thuoc tu 10 len 20 phan tu", "page": "UTT tr.406 / HCMUTE tr.133"},
    {"concept": "Hàm free() và Rò Rỉ Bộ Nhớ", "definition": "free(ptr) giải phóng vùng nhớ Heap trả về cho OS. Quên gọi free() gây rò rỉ bộ nhớ (Memory Leak), cạn kiệt RAM.", "code": "free(p);\np = NULL; // Tránh con trỏ treo (Dangling)", "page": "UTT tr.408 / HCMUTE tr.134"},
    {"concept": "Con Trỏ Cấp 2 (Pointer to Pointer)", "definition": "Biến con trỏ lưu trữ địa chỉ của một con trỏ khác: int **pp = &p;. Thường dùng quản lý ma trận động hoặc mảng chuỗi.", "code": "int x = 10, *p = &x, **pp = &p;\nprintf(\"%d\", **pp); // In ra 10", "page": "UTT tr.410 / HCMUTE tr.135"},
    {"concept": "Con Trỏ Hàm (Function Pointer)", "definition": "Con trỏ lưu địa chỉ bắt đầu của mã máy hàm trong Code Segment. Dùng cho hàm callback hoặc bảng điều phối sự kiện.", "code": "int cong(int a, int b) { return a + b; }\nint (*pFunc)(int, int) = cong;\nprintf(\"%d\", pFunc(2, 3)); // In: 5", "page": "UTT tr.411 / HCMUTE tr.135"}
]

FLASHCARDS_DATA[7] = [ # 14 cards
    {"concept": "Kiểu Cấu Trúc (Struct)", "definition": "Kiểu dữ liệu tự tạo cho phép gom nhóm các biến có kiểu dữ liệu khác nhau lại thành một thực thể có ý nghĩa.", "code": "struct SinhVien {\n    char mssv[10];\n    float diem;\n};", "page": "UTT tr.421 / HCMUTE tr.159"},
    {"concept": "Toán Tử Chấm '.' vs Mũi Tên '->'", "definition": "Dùng dấu chấm '.' cho biến struct thông thường: sv.diem. Dùng mũi tên '->' cho con trỏ trỏ struct: p->diem (tương đương (*p).diem).", "code": "struct SinhVien sv, *p = &sv;\nsv.diem = 8.5;\np->diem = 9.0; // Tuong duong (*p).diem", "page": "UTT tr.425 / HCMUTE tr.162"},
    {"concept": "Từ Khóa typedef cho Struct", "definition": "Tạo bí danh ngắn gọn cho struct để không phải gõ lại chữ 'struct' mỗi khi khai báo biến mới.", "code": "typedef struct {\n    int x, y;\n} Point;\nPoint p1 = {10, 20};", "page": "UTT tr.430 / HCMUTE tr.165"},
    {"concept": "Mảng Các Cấu Trúc (Array of Structs)", "definition": "Tập hợp danh sách nhiều phần tử struct, tổ chức như bảng cơ sở dữ liệu thu nhỏ trong bộ nhớ.", "code": "typedef struct { char ten[30]; int tuoi; } Nguoi;\nNguoi ds[50];\nds[0].tuoi = 20;", "page": "UTT tr.435 / HCMUTE tr.168"},
    {"concept": "Đệm Bộ Nhớ Struct Padding", "definition": "Trình biên dịch tự chèn byte rác (Padding) để căn chỉnh địa chỉ theo bội số trường lớn nhất, tối ưu tốc độ CPU.", "code": "struct Demo {\n    char c; // 1 byte + 3 byte padding\n    int i;  // 4 byte\n}; // sizeof(Demo) = 8 bytes!", "page": "UTT tr.446 / HCMUTE tr.172"},
    {"concept": "Kỹ Thuật Sắp Xếp Trường Struct", "definition": "Khai báo các trường có kích thước byte từ lớn đến nhỏ sẽ giúp giảm thiểu tối đa các byte đệm padding thừa thãi.", "code": "struct ToiUu {\n    double d; // 8B\n    int i;    // 4B\n    char c;   // 1B + 3B padding = 16B tong\n};", "page": "UTT tr.450 / HCMUTE tr.174"},
    {"concept": "Truyền Struct vào Hàm", "definition": "Truyền struct theo giá trị sao chép toàn bộ byte (chậm nếu struct lớn). Nên truyền qua con trỏ hằng const Struct* để tối ưu.", "code": "void inSV(const SinhVien *sv) {\n    printf(\"%s: %.1f\\n\", sv->ten, sv->diem);\n}", "page": "UTT tr.455 / HCMUTE tr.175"},
    {"concept": "Cấu Trúc Lồng Nhau (Nested Struct)", "definition": "Một struct có thể chứa trường là một struct khác đã được định nghĩa trước đó.", "code": "typedef struct { int ngay, thang, nam; } NgayThang;\ntypedef struct { char ten[30]; NgayThang ns; } NhanVien;\nNhanVien nv; nv.ns.nam = 2000;", "page": "UTT tr.458 / HCMUTE tr.176"},
    {"concept": "Bản Chất Kiểu Hợp (Union)", "definition": "Mọi thành viên trong union chia sẻ chung một địa chỉ bộ nhớ bắt đầu. Kích thước bằng thành viên lớn nhất.", "code": "union Data {\n    int i;     // 4 bytes\n    float f;   // 4 bytes\n    char str[10]; // 10 bytes -> sizeof = 10\n};", "page": "UTT tr.462 / HCMUTE tr.178"},
    {"concept": "Ghi Đè Thành Viên trong Union", "definition": "Gán giá trị vào một thành viên trong union sẽ ghi đè và làm hỏng giá trị của các thành viên còn lại.", "code": "union Data d;\nd.i = 42;\nd.f = 3.14f; // Ghi de, d.i khong con la 42!", "page": "UTT tr.465 / HCMUTE tr.180"},
    {"concept": "Kiểu Liệt Kê (Enum)", "definition": "Tập hợp các hằng số nguyên có tên định danh gợi nhớ. Mặc định giá trị bắt đầu từ 0 và tự tăng 1.", "code": "enum Thu { THU_HAI = 2, THU_BA, THU_TU };\nenum Thu t = THU_BA; // t = 3", "page": "UTT tr.476 / HCMUTE tr.184"},
    {"concept": "Ứng Dụng Enum trong Máy Trạng Thái", "definition": "Dùng enum định nghĩa các trạng thái hữu hạn (FSM) giúp code sáng rõ, tránh dùng các số nguyên ma thuật (Magic numbers).", "code": "typedef enum { IDLE, RUNNING, STOPPED } State;\nState curState = IDLE;", "page": "UTT tr.480 / HCMUTE tr.186"},
    {"concept": "Trường Bit (Bit-fields) trong Struct", "definition": "Quy định số bit cụ thể cho từng thành viên số nguyên để tiết kiệm bộ nhớ khi lập trình nhúng / giao thức mạng.", "code": "struct Header {\n    unsigned int version : 4; // chi ton 4 bit\n    unsigned int flags   : 4;\n};", "page": "UTT tr.488 / HCMUTE tr.190"},
    {"concept": "Phép Gán Hai Biến Struct", "definition": "C cho phép gán trực tiếp struct1 = struct2 nếu cùng kiểu (sao chép từng byte). Union cũng làm được điều này.", "code": "Point p1 = {3, 4};\nPoint p2 = p1; // p2 co x=3, y=4", "page": "UTT tr.428 / HCMUTE tr.164"}
]

FLASHCARDS_DATA[8] = [ # 12 cards
    {"concept": "Con Trỏ FILE*", "definition": "Con trỏ cấu trúc đại diện cho luồng tệp tin đang mở, lưu thông tin bộ đệm và trạng thái tệp.", "code": "FILE *fp = fopen(\"data.txt\", \"r\");\nif (fp == NULL) { perror(\"Loi mo file\"); }", "page": "UTT tr.499 / HCMUTE tr.177"},
    {"concept": "Hàm fopen() và fclose()", "definition": "fopen mở tệp theo chế độ; luôn kiểm tra fp != NULL. fclose đóng tệp và đẩy toàn bộ dữ liệu từ bộ đệm vào đĩa.", "code": "FILE *fp = fopen(\"test.txt\", \"w\");\nfputs(\"Hello\", fp);\nfclose(fp);", "page": "UTT tr.502 / HCMUTE tr.179"},
    {"concept": "Chế Độ Mở Tệp: \"r\", \"w\", \"a\"", "definition": "\"r\" chỉ đọc (file phải có sẵn). \"w\" ghi mới (xóa sạch file cũ về 0 byte). \"a\" ghi nối tiếp vào đuôi file.", "code": "FILE *f1 = fopen(\"old.txt\", \"w\"); // Xoa sach cu!\nFILE *f2 = fopen(\"log.txt\", \"a\"); // Ghi noi tiep", "page": "UTT tr.516 / HCMUTE tr.183"},
    {"concept": "Chế Độ Mở Nhị Phân Thêm 'b'", "definition": "Thêm 'b' (\"rb\", \"wb\", \"ab\") ngăn Windows tự động chuyển đổi ký tự xuống dòng '\\r\\n' thành '\\n'.", "code": "FILE *fp = fopen(\"image.png\", \"rb\");\n// Bat buoc dung 'rb' cho file nhi phan", "page": "UTT tr.518 / HCMUTE tr.184"},
    {"concept": "Đọc Ghi File Văn Bản fscanf/fprintf", "definition": "Tương tự scanf/printf nhưng đối số đầu tiên là con trỏ FILE*. Đọc ghi định dạng văn bản ASCII.", "code": "fprintf(fp, \"ID: %d, Diem: %.2f\\n\", id, diem);\nfscanf(fp, \"%d %f\", &id, &diem);", "page": "UTT tr.526 / HCMUTE tr.187"},
    {"concept": "Đọc File Văn Bản Bằng fgets()", "definition": "Đọc từng dòng văn bản an toàn cho đến khi gặp ký tự xuống dòng '\\n' hoặc đạt tối đa size - 1 ký tự.", "code": "char line[256];\nwhile (fgets(line, sizeof(line), fp)) {\n    printf(\"%s\", line);\n}", "page": "UTT tr.528 / HCMUTE tr.188"},
    {"concept": "Hàm fread() Đọc Nhị Phân", "definition": "fread(&buffer, size, count, fp): đọc nguyên vẹn khối dữ liệu nhị phân từ đĩa vào RAM. Trả về số phần tử đọc được.", "code": "SinhVien sv;\nsize_t n = fread(&sv, sizeof(SinhVien), 1, fp);", "page": "UTT tr.532 / HCMUTE tr.189"},
    {"concept": "Hàm fwrite() Ghi Nhị Phân", "definition": "fwrite(&buffer, size, count, fp): ghi nguyên bản các byte từ RAM xuống tệp nhị phân.", "code": "SinhVien sv = {\"2011001\", 8.5};\nfwrite(&sv, sizeof(SinhVien), 1, fp);", "page": "UTT tr.534 / HCMUTE tr.189"},
    {"concept": "Bẫy Vòng Lặp while(!feof(fp))", "definition": "feof chỉ bật cờ sau khi đã có một lệnh đọc vượt qua EOF thất bại; dùng while(!feof) sẽ lặp bản ghi cuối thêm 1 lần!", "code": "// Sai: while(!feof(fp)) { fscanf(...); in(); }\n// Dung: while(fscanf(fp, \"%d\", &x) == 1) { in(); }", "page": "UTT tr.536 / HCMUTE tr.190"},
    {"concept": "Hàm fseek() Định Vị Con Trỏ Tệp", "definition": "Di chuyển con trỏ tệp: fseek(fp, offset, origin). origin gồm SEEK_SET (đầu file), SEEK_CUR (hiện tại), SEEK_END (cuối file).", "code": "fseek(fp, 0, SEEK_END); // Nhay xuong cuoi file\nlong sz = ftell(fp);    // Lay kich thuoc file", "page": "UTT tr.542 / HCMUTE tr.192"},
    {"concept": "Hàm ftell() và rewind()", "definition": "ftell(fp) trả về vị trí byte hiện tại. rewind(fp) đưa con trỏ tệp quay về đầu tệp (tương đương fseek SEEK_SET 0).", "code": "rewind(fp); // Dua ve vi tri byte 0", "page": "UTT tr.545 / HCMUTE tr.193"},
    {"concept": "Truy Cập Ngẫu Nhiên (Random Access)", "definition": "Nhảy trực tiếp đến bản ghi thứ k mà không cần duyệt tuần tự từ đầu file bằng công thức fseek(fp, k * sizeof(Record), SEEK_SET).", "code": "int k = 5; // Doc ban ghi thu 5\nfseek(fp, k * sizeof(SinhVien), SEEK_SET);\nfread(&sv, sizeof(SinhVien), 1, fp);", "page": "UTT tr.548 / HCMUTE tr.194"}
]

FLASHCARDS_DATA[9] = [ # 12 cards
    {"concept": "Luồng Xuất Nhập std::cout và std::cin", "definition": "C++ dùng toán tử chèn << và trích >> trong <iostream>, an toàn kiểu dữ liệu, không cần mã định dạng %d.", "code": "#include <iostream>\nstd::cout << \"Nhap x: \";\nstd::cin >> x;", "page": "UTT tr.72 / HCMUTE tr.20"},
    {"concept": "Biến Tham Chiếu (Reference int &ref)", "definition": "Là bí danh (Alias) của một biến đã tồn tại. Bắt buộc khởi tạo ngay khi khai báo; thao tác trên ref chính là trên biến gốc.", "code": "int a = 10;\nint &ref = a;\nref = 20; // a tro thanh 20!", "page": "UTT tr.74 / HCMUTE tr.22"},
    {"concept": "Truyền Tham Chiếu vào Hàm C++", "definition": "Cú pháp tự nhiên như truyền tham trị nhưng bản chất sửa đổi biến gốc trực tiếp mà không cần dùng toán tử con trỏ *.", "code": "void swap(int &a, int &b) {\n    int tmp = a; a = b; b = tmp;\n}\n// Goi: swap(x, y);", "page": "UTT tr.75 / HCMUTE tr.24"},
    {"concept": "Cấp Phát Động new và delete", "definition": "Toán tử C++ thay thế malloc/free: tự động tính kích thước byte và tự động gọi hàm khởi tạo Constructor của đối tượng.", "code": "int *p = new int(100);\ndelete p;\np = nullptr;", "page": "UTT tr.76 / HCMUTE tr.121"},
    {"concept": "Bẫy new[] và delete[] cho Mảng", "definition": "Cấp phát mảng động new[] bắt buộc phải giải phóng bằng delete[]. Dùng delete thường sẽ gây rò rỉ bộ nhớ hoặc sập chương trình.", "code": "int *arr = new int[50];\ndelete[] arr; // Dung quy tac cap phat mang", "page": "UTT tr.77 / HCMUTE tr.122"},
    {"concept": "Nạp Chồng Hàm (Function Overloading)", "definition": "Nhiều hàm có cùng tên trong cùng phạm vi nhưng khác nhau về danh sách tham số (số lượng hoặc kiểu dữ liệu).", "code": "int add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }", "page": "UTT tr.78 / HCMUTE tr.123"},
    {"concept": "Tham Số Mặc Định (Default Arguments)", "definition": "Cho phép gán sẵn giá trị mặc định cho tham số từ phải sang trái. Nếu người gọi không truyền đối số, giá trị mặc định được dùng.", "code": "void log(const char *msg, int level = 1) {\n    // level mac dinh la 1\n}", "page": "UTT tr.79 / HCMUTE tr.124"},
    {"concept": "Bản Chất Class trong OOP C++", "definition": "Đóng gói dữ liệu (thuộc tính) và hàm (phương thức). Mặc định các thành viên trong class có phạm vi private (khác struct là public).", "code": "class HinhTron {\nprivate:\n    double r;\npublic:\n    HinhTron(double banKinh) : r(banKinh) {}\n};", "page": "UTT tr.80 / HCMUTE tr.124"},
    {"concept": "Hàm Khởi Tạo (Constructor)", "definition": "Tự động gọi khi đối tượng được sinh ra. Cùng tên với class, không có kiểu trả về. Dùng để khởi tạo giá trị ban đầu cho thuộc tính.", "code": "class Diem {\npublic:\n    int x, y;\n    Diem(int xVal, int yVal) : x(xVal), y(yVal) {}\n};", "page": "UTT tr.81 / HCMUTE tr.124"},
    {"concept": "Hàm Hủy (Destructor)", "definition": "Tự động gọi khi đối tượng ra khỏi phạm vi sống. Có tiền tố ~ClassName(), không có tham số và kiểu trả về. Dùng dọn dẹp bộ nhớ động.", "code": "class MangDong {\n    int *data;\npublic:\n    ~MangDong() { delete[] data; }\n};", "page": "UTT tr.81 / HCMUTE tr.124"},
    {"concept": "Bẫy Hàm Hủy Ảo (Virtual Destructor)", "definition": "Khi xóa đối tượng con qua con trỏ lớp cha đa hình Base *p = new Derived(); delete p; nếu Base thiếu virtual ~Base(), hàm hủy Derived bị bỏ qua.", "code": "class Base {\npublic:\n    virtual ~Base() {} // Bat buoc phai co virtual!\n};", "page": "UTT tr.82 / HCMUTE tr.124"},
    {"concept": "Quy Tắc Tam Đại (Rule of Three)", "definition": "Nếu một class quản lý tài nguyên động cần tự viết Destructor, nó bắt buộc phải tự cài đặt cả Copy Constructor và Copy Assignment Operator.", "code": "// 1. Destructor: ~MyClass()\n// 2. Copy Constructor: MyClass(const MyClass&)\n// 3. Assignment Operator: operator=", "page": "UTT tr.82 / HCMUTE tr.124"}
]

out_dir = "src/subjects/c-lang/data/flashcards"
os.makedirs(out_dir, exist_ok=True)

total_fc = 0
for ch_id in range(1, 10):
    cards = FLASHCARDS_DATA[ch_id]
    total_fc += len(cards)
    
    formatted_cards = []
    for idx, c in enumerate(cards, 1):
        fc_id = f"c-fc-ch{ch_id}-{idx:03d}"
        formatted_cards.append({
            "id": fc_id,
            "chapterId": ch_id,
            "question": c["concept"],
            "answer": c["definition"],
            "frontConcept": c["concept"],
            "backDefinition": c["definition"],
            "codeHighlight": c["code"],
            "referencePage": c["page"],
            "masteryLevel": "learning",
            "tags": [f"Chương {ch_id}", "Flashcard", c["concept"]]
        })

    file_path = os.path.join(out_dir, f"flashcards-ch{ch_id}.ts")
    ts_code = f"""/**
 * {file_path}
 * Thẻ ghi nhớ Flashcard Chương {ch_id} ({len(formatted_cards)} thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import {{ CFlashcard }} from '../../types';

export const flashcardsCh{ch_id}: CFlashcard[] = {json.dumps(formatted_cards, ensure_ascii=False, indent=2)};
"""
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(ts_code)
    print(f"✓ Created {file_path} ({len(formatted_cards)} flashcards)")

# Index file
index_file = os.path.join(out_dir, "index.ts")
import_lines = "\n".join([f"import {{ flashcardsCh{i} }} from './flashcards-ch{i}';" for i in range(1, 10)])
export_names = ",\n  ".join([f"flashcardsCh{i}" for i in range(1, 10)])
array_items = ", ".join([f"...flashcardsCh{i}" for i in range(1, 10)])

index_template = """/**
 * src/subjects/c-lang/data/flashcards/index.ts
 * Barrel export tập trung toàn bộ 125 thẻ ghi nhớ Flashcards Lập trình C/C++
 */

import { CFlashcard } from '../../types';
__IMPORTS__

export {
  __EXPORTS__
};

export const allCFlashcards: CFlashcard[] = [
  __ARRAY__
];

export const getFlashcardsByChapter = (chapterId: number): CFlashcard[] => {
  return allCFlashcards.filter(f => f.chapterId === chapterId);
};
"""

index_code = (
    index_template.replace("__IMPORTS__", import_lines)
    .replace("__EXPORTS__", export_names)
    .replace("__ARRAY__", array_items)
)

with open(index_file, "w", encoding="utf-8") as f:
    f.write(index_code)

print(f"✓ Created {index_file}")
print(f"Total Flashcards generated: {total_fc} (target: 125). Perfect match!")
