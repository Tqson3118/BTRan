/**
 * src/subjects/c-lang/data/chapters\chapter1.ts
 * Dữ liệu lý thuyết chi tiết Chương 1: Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter1: CChapter = {
  "id": 1,
  "slug": "tong-quan-ngon-ngu-c",
  "title": "Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình",
  "description": "Lịch sử C, cấu trúc hàm main, tập từ khóa, quy tắc định danh, tiền xử lý #include/#define, header guards và chu trình biên dịch.",
  "citations": {
    "uttPage": "Trang 21 - 75",
    "hcmutePage": "Trang 9 - 30; 195 - 205"
  },
  "totalMCQ": 25,
  "totalFlashcards": 12,
  "totalEssays": 3,
  "sections": [
    {
      "id": "c-sec-ch1-01",
      "code": "1.1",
      "title": "Lịch sử và Đặc trưng Ngôn ngữ C",
      "articles": [
        {
          "id": "c-art-ch1-01",
          "code": "1.1.1",
          "title": "Nguồn gốc và Đặc tính cốt lõi của C",
          "content": [
            "Ngôn ngữ C được Dennis Ritchie phát triển tại Bell Labs vào năm 1972 để viết lại hệ điều hành UNIX.",
            "C là ngôn ngữ lập trình có cấu trúc (Structured Programming), bậc trung (Middle-level language), vừa cung cấp các cấu trúc điều khiển cấp cao vừa cho phép thao tác trực tiếp với bộ nhớ và bit thông qua con trỏ.",
            "Tính khả chuyển (Portability) cao: Mã nguồn C có thể biên dịch và chạy trên hầu hết các nền tảng phần cứng và hệ điều hành khác nhau mà không cần sửa đổi lớn."
          ],
          "keyPoints": [
            "Dennis Ritchie 1972 tại Bell Labs",
            "Ngôn ngữ bậc trung (Middle-level)",
            "Thao tác bộ nhớ qua con trỏ",
            "Tính khả chuyển (Portability)"
          ],
          "citations": {
            "uttPage": "Trang 21 - 25",
            "hcmutePage": "Trang 9 - 13"
          }
        },
        {
          "id": "c-art-ch1-02",
          "code": "1.1.2",
          "title": "Cấu trúc Chương trình C và Hàm main()",
          "content": [
            "Mọi chương trình C độc lập đều bắt buộc phải có một và chỉ một điểm bắt đầu thực thi: hàm main().",
            "Chuẩn C99/C11 quy định hàm main có kiểu trả về là int: `int main(void)` hoặc `int main(int argc, char *argv[])`.",
            "Giá trị trả về `return 0;` quy ước báo cho hệ điều hành biết chương trình kết thúc thành công. Trả về giá trị khác 0 báo hiệu mã lỗi."
          ],
          "keyPoints": [
            "Bắt buộc có duy nhất 1 hàm main()",
            "Kiểu trả về int main(void)",
            "return 0 báo hiệu thực thi thành công"
          ],
          "codeExamples": [
            {
              "title": "Cấu trúc chương trình C chuẩn C99",
              "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Xin chao sinh vien HCMUTE!\\n\");\n    return 0;\n}",
              "explanation": "Hàm main trả về kiểu int cho hệ điều hành."
            }
          ],
          "citations": {
            "uttPage": "Trang 25 - 32",
            "hcmutePage": "Trang 20 - 26"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch1-02",
      "code": "1.2",
      "title": "Tập từ khóa, Định danh và Tiền xử lý",
      "articles": [
        {
          "id": "c-art-ch1-03",
          "code": "1.2.1",
          "title": "Tập từ khóa chuẩn và Quy tắc Định danh (Identifiers)",
          "content": [
            "Chuẩn ANSI C89 định nghĩa 32 từ khóa dành riêng (như auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while).",
            "Tên định danh (Identifier) chỉ được chứa chữ cái (A-Z, a-z), chữ số (0-9) và dấu gạch dưới (_). Bắt buộc phải bắt đầu bằng chữ cái hoặc gạch dưới, KHÔNG được bắt đầu bằng chữ số.",
            "Ngôn ngữ C có phân biệt chữ hoa và chữ thường (Case-sensitive): `count`, `Count` và `COUNT` là 3 biến hoàn toàn khác nhau."
          ],
          "keyPoints": [
            "32 từ khóa chuẩn C89",
            "Tên biến không được bắt đầu bằng chữ số",
            "Phân biệt hoa thường (Case-sensitive)"
          ],
          "citations": {
            "uttPage": "Trang 32 - 37",
            "hcmutePage": "Trang 23 - 26"
          }
        },
        {
          "id": "c-art-ch1-04",
          "code": "1.2.2",
          "title": "Bộ Tiền Xử Lý, Macro và Header Guards",
          "content": [
            "Bộ tiền xử lý (Preprocessor) chạy trước khi trình biên dịch thực tế hoạt động, thực hiện thay thế văn bản thuần túy theo các chỉ thị bắt đầu bằng dấu `#`.",
            "`#include <stdio.h>` tìm kiếm trong thư viện chuẩn hệ thống, còn `#include \"my_lib.h\"` ưu tiên tìm kiếm trong thư mục làm việc hiện tại của dự án.",
            "`#define NAME value` định nghĩa hằng hoặc macro hàm. Lưu ý: KHÔNG đặt dấu chấm phẩy `;` sau `#define` vì sẽ làm phát sinh lỗi cú pháp khi macro được bung ra.",
            "Cơ chế bảo vệ tệp tiêu đề (Header Guards) sử dụng `#ifndef HEADER_H` / `#define HEADER_H` ... `#endif` để ngăn chặn lỗi định nghĩa trùng lặp khi một file header được include nhiều lần."
          ],
          "keyPoints": [
            "Preprocessor thay thế văn bản trước biên dịch",
            "Không đặt dấu ';' sau #define",
            "Header guards chống đụng độ include"
          ],
          "codeExamples": [
            {
              "title": "Khai báo Macro hàm an toàn và Header Guard",
              "code": "#ifndef MY_MATH_H\n#define MY_MATH_H\n\n#define SQUARE(x) ((x) * (x))\n\n#endif // MY_MATH_H",
              "explanation": "Macro có tham số cần bọc ngoặc đơn quanh các tham số và cả biểu thức để tránh lỗi ưu tiên toán tử."
            }
          ],
          "citations": {
            "uttPage": "Trang 68 - 75",
            "hcmutePage": "Trang 195 - 205"
          }
        },
        {
          "id": "c-art-ch1-05",
          "code": "1.2.3",
          "title": "Chu trình Biên dịch và Môi trường Lập trình",
          "content": [
            "Quy trình 4 giai đoạn chuyển đổi mã nguồn C thành tệp thực thi: (1) Tiền xử lý (Preprocessing: mở rộng macro, include tệp tạo mã .i) -> (2) Biên dịch (Compilation: dịch sang hợp ngữ Assembly .s) -> (3) Hợp dịch (Assembly: tạo mã máy đối tượng .obj / .o) -> (4) Liên kết (Linking: kết nối các file .o và thư viện tạo tệp thực thi .exe / a.out).",
            "Trình biên dịch phổ biến: GCC (MinGW trên Windows), Clang, MSVC. IDE thông dụng tại HCMUTE: Dev-C++, Code::Blocks, VS Code.",
            "Lưu ý phân biệt Lỗi cú pháp (Syntax errors - phát hiện lúc biên dịch) với Cảnh báo (Warnings - mã hợp lệ nhưng tiềm ẩn rủi ro) và Lỗi thời gian chạy (Runtime errors như chia cho 0, segmentation fault)."
          ],
          "keyPoints": [
            "Chu trình 4 bước: Tiền xử lý -> Biên dịch -> Hợp dịch -> Liên kết",
            "Mã đối tượng (.obj/.o) vs Tệp thực thi (.exe)",
            "Syntax errors vs Runtime errors"
          ],
          "citations": {
            "uttPage": "Trang 35 - 37",
            "hcmutePage": "Trang 27 - 30"
          }
        }
      ]
    }
  ]
};
