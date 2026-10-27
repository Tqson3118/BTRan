/**
 * src/subjects/c-lang/data/chapters\chapter3.ts
 * Dữ liệu lý thuyết chi tiết Chương 3: Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter3: CChapter = {
  "id": 3,
  "slug": "cau-truc-dieu-khien-re-nhanh-vong-lap",
  "title": "Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp",
  "description": "Lệnh if-else, bẫy Dangling Else, chấm phẩy sau điều kiện, cấu trúc switch-case và cơ chế fall-through, vòng lặp for/while/do-while, lệnh break, continue và goto.",
  "citations": {
    "uttPage": "Trang 125 - 210",
    "hcmutePage": "Trang 47 - 92"
  },
  "totalMCQ": 35,
  "totalFlashcards": 14,
  "totalEssays": 4,
  "sections": [
    {
      "id": "c-sec-ch3-01",
      "code": "3.1",
      "title": "Cấu trúc Rẽ nhánh Điều kiện",
      "articles": [
        {
          "id": "c-art-ch3-01",
          "code": "3.1.1",
          "title": "Lệnh if, if-else và Bẫy Dangling Else",
          "content": [
            "Biểu thức điều kiện trong C nhận bất kỳ giá trị nào khác 0 là đúng (true), bằng 0 là sai (false). Bẫy phổ biến: viết nhầm toán tử gán `if (x = 5)` sẽ luôn luôn trả về 5 (true).",
            "Bẫy dấu chấm phẩy: Viết `if (x > 0); x++;` thì dấu chấm phẩy kết thúc lệnh rỗng, khối lệnh `x++` luôn được thực thi dù `x > 0` đúng hay sai.",
            "Bẫy Dangling Else: C quy ước `else` luôn kết hợp với lệnh `if` gần nhất phía trước nó chưa có `else`. Luôn bọc ngoặc nhọn `{}` cho khối lệnh để tường minh logic."
          ],
          "keyPoints": [
            "Khác 0 là true, 0 là false",
            "Bẫy if (x = 5) luôn true",
            "Bẫy ';' sau if",
            "Dangling Else gắn với if gần nhất"
          ],
          "citations": {
            "uttPage": "Trang 125 - 145",
            "hcmutePage": "Trang 47 - 60"
          }
        },
        {
          "id": "c-art-ch3-02",
          "code": "3.1.2",
          "title": "Cấu trúc Lựa chọn Đa giá trị switch-case",
          "content": [
            "Biểu thức trong `switch(expr)` bắt buộc phải có kiểu nguyên (char, int, enum), KHÔNG được dùng số thực (float, double) hoặc chuỗi.",
            "Mỗi nhánh `case constant:` phải là hằng số hoặc hằng biểu thức tính được lúc biên dịch, không được là biến số hoặc khoảng giá trị (như `case 1..5:`).",
            "Cơ chế Fall-through: Nếu không có lệnh `break`, chương trình sẽ tiếp tục chạy tuột xuống các `case` phía dưới bất kể điều kiện có khớp hay không. Nhánh `default` thực thi khi không khớp case nào."
          ],
          "keyPoints": [
            "switch chỉ nhận kiểu nguyên (int, char, enum)",
            "Giá trị case phải là hằng số",
            "Quên break gây trôi lệnh (Fall-through)"
          ],
          "citations": {
            "uttPage": "Trang 145 - 158",
            "hcmutePage": "Trang 61 - 70"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch3-02",
      "code": "3.2",
      "title": "Cấu trúc Vòng lặp và Điều khiển Luồng",
      "articles": [
        {
          "id": "c-art-ch3-03",
          "code": "3.2.1",
          "title": "Vòng lặp for, while và do-while",
          "content": [
            "Vòng lặp `for (init; cond; step)`: Chu trình 4 bước: (1) Khởi tạo init -> (2) Kiểm tra cond -> (3) Thực thi thân vòng lặp -> (4) Cập nhật step -> lặp lại bước 2.",
            "Vòng lặp tiền kiểm tra `while (cond)`: Kiểm tra điều kiện trước, có thể không thực thi lần nào nếu ban đầu điều kiện sai.",
            "Vòng lặp hậu kiểm tra `do { ... } while (cond);`: Luôn thực thi thân vòng lặp ít nhất 1 lần trước khi kiểm tra điều kiện. Bắt buộc có dấu chấm phẩy `;` sau `while(cond);`.",
            "Vòng lặp vô tận: `for (;;)` hoặc `while (1)`."
          ],
          "keyPoints": [
            "for có 4 bước",
            "while kiểm tra trước",
            "do-while chạy ít nhất 1 lần và có dấu ';'"
          ],
          "citations": {
            "uttPage": "Trang 158 - 188",
            "hcmutePage": "Trang 71 - 85"
          }
        },
        {
          "id": "c-art-ch3-04",
          "code": "3.2.2",
          "title": "Lệnh break, continue và goto",
          "content": [
            "`break`: Thoát ngay lập tức khỏi vòng lặp (`for`, `while`, `do-while`) hoặc cấu trúc `switch-case` gần nhất chứa nó.",
            "`continue`: Bỏ qua các câu lệnh còn lại trong lượt lặp hiện tại và nhảy ngay sang bước cập nhật/kiểm tra lượt lặp kế tiếp.",
            "`goto label`: Nhảy không điều kiện tới nhãn trong phạm vi cùng hàm. Chỉ nên dùng khi cần thoát khỏi nhiều vòng lặp lồng nhau sâu (deeply nested loops)."
          ],
          "keyPoints": [
            "break ngắt vòng lặp/switch",
            "continue bỏ qua lượt lặp hiện tại",
            "Hạn chế goto tránh code spaghetti"
          ],
          "citations": {
            "uttPage": "Trang 188 - 210",
            "hcmutePage": "Trang 85 - 92"
          }
        }
      ]
    }
  ]
};
