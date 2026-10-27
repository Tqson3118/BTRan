/**
 * src/subjects/c-lang/data/chapters\chapter2.ts
 * Dữ liệu lý thuyết chi tiết Chương 2: Chương 2: Các Kiểu Dữ Liệu Cơ Bản, Biểu Thức & Nhập/Xuất Chuẩn
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter2: CChapter = {
  "id": 2,
  "slug": "kieu-du-lieu-bieu-thuc-nhap-xuat",
  "title": "Chương 2: Các Kiểu Dữ Liệu Cơ Bản, Biểu Thức & Nhập/Xuất Chuẩn",
  "description": "Các kiểu nguyên thủy char, int, float, double, bổ từ unsigned/long, toán tử số học, logic, bitwise, toán tử ba ngôi, định dạng printf/scanf và kỹ thuật xóa bộ đệm stdin.",
  "citations": {
    "uttPage": "Trang 89 - 124",
    "hcmutePage": "Trang 20 - 46"
  },
  "totalMCQ": 30,
  "totalFlashcards": 15,
  "totalEssays": 4,
  "sections": [
    {
      "id": "c-sec-ch2-01",
      "code": "2.1",
      "title": "Kiểu Dữ Liệu Cơ Sở và Biểu Diễn Bộ Nhớ",
      "articles": [
        {
          "id": "c-art-ch2-01",
          "code": "2.1.1",
          "title": "Kích thước Kiểu dữ liệu và Bổ từ (Type Modifiers)",
          "content": [
            "Kích thước bộ nhớ chuẩn: char (1 byte), short (2 bytes), int (thường 4 bytes trên kiến trúc 32/64-bit hiện đại), long (4 hoặc 8 bytes), float (4 bytes, ~6 chữ số thập phân), double (8 bytes, ~15 chữ số thập phân).",
            "Bổ từ signed (có dấu, bù 2) và unsigned (không dấu, từ 0 đến 2^N - 1).",
            "Toán tử sizeof(type) hoặc sizeof(expr) trả về kích thước tính bằng byte trong thời gian biên dịch (kiểu size_t)."
          ],
          "keyPoints": [
            "char 1B, int 4B, float 4B, double 8B",
            "unsigned từ 0 đến 2^N - 1",
            "sizeof tính trong compile-time"
          ],
          "citations": {
            "uttPage": "Trang 89 - 95",
            "hcmutePage": "Trang 31 - 36"
          }
        },
        {
          "id": "c-art-ch2-02",
          "code": "2.1.2",
          "title": "Ép Kiểu Dữ Liệu và Bẫy Phép Chia Nguyên",
          "content": [
            "Ép kiểu ngầm định (Implicit promotion): C tự động nâng kiểu nhỏ hơn lên kiểu lớn hơn khi tính toán biểu thức hỗn hợp.",
            "Bẫy phép chia nguyên: Trong C, nếu cả hai toán hạng đều là số nguyên, phép chia `/` sẽ lấy phần nguyên (cắt cụt). Ví dụ `5 / 2` bằng `2`.",
            "Cách khắc phục: Ép kiểu tường minh `(float)5 / 2` hoặc viết `5.0 / 2` để ra `2.5`."
          ],
          "keyPoints": [
            "5 / 2 = 2 (chia nguyên)",
            "Ép kiểu tường minh (float)a / b",
            "Tự động nâng kiểu lên double khi tính với số thực"
          ],
          "citations": {
            "uttPage": "Trang 96 - 100",
            "hcmutePage": "Trang 37 - 40"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch2-02",
      "code": "2.2",
      "title": "Hệ Thống Toán Tử và Biểu Thức",
      "articles": [
        {
          "id": "c-art-ch2-03",
          "code": "2.2.1",
          "title": "Toán tử Tăng Giảm (++ / --) và Đoản Mạch Logic",
          "content": [
            "Toán tử tiền tố `++x`: Tăng x lên 1 trước, sau đó mới trả về giá trị mới của x để tính biểu thức.",
            "Toán tử hậu tố `x++`: Trả về giá trị hiện tại của x để tính biểu thức, sau đó mới tăng x lên 1.",
            "Cơ chế đoản mạch: Trong `A && B`, nếu A sai thì B không được tính. Trong `A || B`, nếu A đúng thì B không được tính."
          ],
          "keyPoints": [
            "++x tăng trước, x++ tăng sau",
            "Short-circuit && và ||",
            "Lưu ý bẫy đoản mạch khi có toán tử tăng giảm"
          ],
          "citations": {
            "uttPage": "Trang 100 - 108",
            "hcmutePage": "Trang 41 - 44"
          }
        },
        {
          "id": "c-art-ch2-04",
          "code": "2.2.2",
          "title": "Toán tử Thao tác Bit (Bitwise Operators)",
          "content": [
            "C cung cấp 6 toán tử bit: AND (&), OR (|), XOR (^), NOT (~), dịch trái (<<), dịch phải (>>).",
            "Dịch trái `x << n` tương đương `x * (2^n)`. Dịch phải `x >> n` tương đương `x / (2^n)` (số dương).",
            "Kỹ thuật mặt nạ bit: Bật bit k (`x |= (1 << k)`), tắt bit k (`x &= ~(1 << k)`), kiểm tra bit k (`(x >> k) & 1`)."
          ],
          "keyPoints": [
            "&, |, ^, ~, <<, >>",
            "x << 1 nhân 2, x >> 1 chia 2",
            "Kỹ thuật mặt nạ bit (Bitmasking)"
          ],
          "citations": {
            "uttPage": "Trang 108 - 114",
            "hcmutePage": "Trang 43 - 46"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch2-03",
      "code": "2.3",
      "title": "Nhập/Xuất Dữ Liệu Chuẩn (<stdio.h>)",
      "articles": [
        {
          "id": "c-art-ch2-05",
          "code": "2.3.1",
          "title": "Hàm printf() và Định dạng Xuất",
          "content": [
            "Mã định dạng: `%d` (int), `%u` (unsigned int), `%f` (float), `%lf` (double), `%c` (char), `%s` (chuỗi), `%p` (địa chỉ con trỏ).",
            "Độ rộng và căn lề: `%5d` (căn phải độ rộng 5), `%-5d` (căn trái độ rộng 5), `%.2f` (làm tròn 2 chữ số thập phân)."
          ],
          "keyPoints": [
            "%d int, %f float, %lf double, %s chuỗi",
            "%.2f làm tròn 2 chữ số thập phân"
          ],
          "citations": {
            "uttPage": "Trang 114 - 118",
            "hcmutePage": "Trang 26 - 29"
          }
        },
        {
          "id": "c-art-ch2-06",
          "code": "2.3.2",
          "title": "Hàm scanf() và Kỹ thuật Xóa Bộ Đệm stdin",
          "content": [
            "Cú pháp: `scanf(\"định_dạng\", &biến)`. Bắt buộc dùng toán tử địa chỉ `&` cho biến thường.",
            "Bẫy trôi lệnh do phím Enter để lại `\\n` trong bộ đệm `stdin`, khiến lệnh đọc chuỗi/ký tự kế tiếp bị bỏ qua.",
            "Khắc phục: `scanf(\" %c\", &ch)` hoặc vòng lặp `while ((c = getchar()) != '\\n' && c != EOF);`."
          ],
          "keyPoints": [
            "Bắt buộc dùng toán tử & trong scanf",
            "Bẫy ký tự \\n đọng lại trong stdin",
            "Khắc phục: scanf(\" %c\") hoặc while(getchar()!='\\n')"
          ],
          "citations": {
            "uttPage": "Trang 118 - 124",
            "hcmutePage": "Trang 29 - 31"
          }
        }
      ]
    }
  ]
};
