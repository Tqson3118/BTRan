/**
 * src/subjects/c-lang/data/chapters\chapter5.ts
 * Dữ liệu lý thuyết chi tiết Chương 5: Chương 5: Mảng (1D, 2D) & Chuỗi Ký Tự (Strings)
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter5: CChapter = {
  "id": 5,
  "slug": "mang-va-chuoi-ky-tu",
  "title": "Chương 5: Mảng (1D, 2D) & Chuỗi Ký Tự (Strings)",
  "description": "Mảng một chiều, mảng hai chiều ma trận, bộ nhớ liên tục, bẫy vượt biên off-by-one, chuỗi ký tự C-string, ký tự kết thúc '\\0', các hàm trong string.h và fgets an toàn.",
  "citations": {
    "uttPage": "Trang 275 - 320; 344 - 420",
    "hcmutePage": "Trang 93 - 120"
  },
  "totalMCQ": 35,
  "totalFlashcards": 16,
  "totalEssays": 4,
  "sections": [
    {
      "id": "c-sec-ch5-01",
      "code": "5.1",
      "title": "Mảng Một Chiều và Hai Chiều",
      "articles": [
        {
          "id": "c-art-ch5-01",
          "code": "5.1.1",
          "title": "Bản chất Mảng Một Chiều và Bẫy Vượt Biên (Out-of-Bounds)",
          "content": [
            "Mảng là tập hợp hữu hạn các phần tử có cùng kiểu dữ liệu, được lưu trữ liên tục (contiguous memory) trong bộ nhớ.",
            "Chỉ số mảng trong C luôn bắt đầu từ 0 đến N - 1 (với mảng có N phần tử). C KHÔNG tự động kiểm tra vượt biên (bounds checking).",
            "Bẫy Off-by-one: Vòng lặp `for (int i = 0; i <= N; i++)` sẽ truy cập phần tử `a[N]` nằm ngoài mảng, gây ghi đè vùng nhớ lân cận hoặc crash chương trình."
          ],
          "keyPoints": [
            "Lưu trữ liên tục trong bộ nhớ",
            "Chỉ số từ 0 đến N - 1",
            "C không kiểm tra vượt biên",
            "Bẫy vòng lặp duyệt i <= N"
          ],
          "citations": {
            "uttPage": "Trang 275 - 300",
            "hcmutePage": "Trang 93 - 105"
          }
        },
        {
          "id": "c-art-ch5-02",
          "code": "5.1.2",
          "title": "Mảng Hai Chiều (Ma trận)",
          "content": [
            "Cú pháp: `type arr[ROWS][COLS];`. Mảng 2 chiều trong C được lưu trữ trong bộ nhớ phẳng theo thứ tự từng hàng liên tiếp (Row-major order).",
            "Khi truyền mảng 2 chiều vào hàm, bắt buộc phải chỉ định rõ số cột `COLS`: `void process(int a[][COLS], int rows)` để trình biên dịch tính toán được bước nhảy địa chỉ `a[i][j] = *(a + i * COLS + j)`."
          ],
          "keyPoints": [
            "Lưu trữ dạng Row-major order",
            "Bắt buộc khai báo số cột khi truyền vào hàm",
            "Truy xuất qua cặp chỉ số [i][j]"
          ],
          "citations": {
            "uttPage": "Trang 300 - 320",
            "hcmutePage": "Trang 105 - 114"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch5-02",
      "code": "5.2",
      "title": "Chuỗi Ký Tự (C-Strings)",
      "articles": [
        {
          "id": "c-art-ch5-03",
          "code": "5.2.1",
          "title": "Bản chất Chuỗi Ký Tự và Ký tự Kết thúc '\\0'",
          "content": [
            "Trong C, chuỗi ký tự không phải là kiểu dữ liệu nguyên thủy mà là một mảng các ký tự kiểu `char` được kết thúc bằng ký tự rỗng (Null terminator: `\\0`, mã ASCII = 0).",
            "Để lưu một chuỗi có độ dài N ký tự, bắt buộc phải khai báo mảng có kích thước tối thiểu là N + 1 byte.",
            "Bẫy `char s[5] = \"Hello\";` là sai vì từ \"Hello\" có 5 chữ cái, cộng thêm `\\0` là 6 byte, khai báo 5 byte sẽ làm mất `\\0` dẫn đến in chuỗi bị rác bộ nhớ."
          ],
          "keyPoints": [
            "Chuỗi là mảng char kết thúc bằng '\\0'",
            "Kích thước mảng char >= strlen + 1",
            "Mất '\\0' gây đọc rác bộ nhớ"
          ],
          "citations": {
            "uttPage": "Trang 344 - 370",
            "hcmutePage": "Trang 115 - 118"
          }
        },
        {
          "id": "c-art-ch5-04",
          "code": "5.2.2",
          "title": "Thư viện <string.h> và Nhập Chuỗi An Toàn với fgets()",
          "content": [
            "Các hàm cơ bản trong `<string.h>`: `strlen(s)` (độ dài chuỗi, không tính '\\0'), `strcpy(dest, src)` (sao chép), `strcat(dest, src)` (nối chuỗi), `strcmp(s1, s2)` (so sánh theo mã ASCII: trả về 0 nếu bằng nhau, âm nếu s1 < s2, dương nếu s1 > s2).",
            "Bẫy `if (s1 == s2)` là sai hoàn toàn vì `==` chỉ so sánh địa chỉ con trỏ của 2 chuỗi chứ không so sánh nội dung; bắt buộc phải dùng `strcmp(s1, s2) == 0`.",
            "Hàm `gets()` cực kỳ nguy hiểm do gây tràn bộ đệm (Buffer Overflow) và đã bị xóa khỏi chuẩn C11. Chuẩn mực an toàn là dùng `fgets(str, sizeof(str), stdin)`."
          ],
          "keyPoints": [
            "Không so sánh chuỗi bằng '==' mà dùng strcmp",
            "Cấm dùng gets(), dùng fgets()",
            "strlen không tính ký tự '\\0'"
          ],
          "citations": {
            "uttPage": "Trang 370 - 420",
            "hcmutePage": "Trang 118 - 120"
          }
        }
      ]
    }
  ]
};
