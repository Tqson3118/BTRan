/**
 * src/subjects/c-lang/data/chapters\chapter4.ts
 * Dữ liệu lý thuyết chi tiết Chương 4: Chương 4: Hàm, Phạm vi Biến & Đệ quy
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter4: CChapter = {
  "id": 4,
  "slug": "ham-pham-vi-bien-de-quy",
  "title": "Chương 4: Hàm, Phạm vi Biến & Đệ quy",
  "description": "Cấu trúc hàm, khai báo prototype, cơ chế truyền tham trị, phạm vi biến cục bộ/toàn cục, bổ từ static, extern, nguyên lý đệ quy và mô hình ngăn xếp Call Stack.",
  "citations": {
    "uttPage": "Trang 211 - 274",
    "hcmutePage": "Trang 136 - 158"
  },
  "totalMCQ": 30,
  "totalFlashcards": 14,
  "totalEssays": 4,
  "sections": [
    {
      "id": "c-sec-ch4-01",
      "code": "4.1",
      "title": "Khái niệm Hàm và Truyền Tham Số",
      "articles": [
        {
          "id": "c-art-ch4-01",
          "code": "4.1.1",
          "title": "Khai báo Prototype và Định nghĩa Hàm",
          "content": [
            "Khai báo nguyên mẫu hàm (Function Prototype): Báo cho trình biên dịch biết tên hàm, kiểu trả về và danh sách kiểu dữ liệu của các tham số trước khi hàm được gọi.",
            "Nếu gọi hàm trước khi định nghĩa mà không có prototype, trình biên dịch C giả định hàm trả về kiểu `int` (Implicit declaration warning/error).",
            "Hàm trả về kiểu `void` nghĩa là không trả về giá trị nào."
          ],
          "keyPoints": [
            "Function Prototype khai báo trước khi dùng",
            "Cú pháp: return_type func_name(param_list);",
            "void là không trả về giá trị"
          ],
          "citations": {
            "uttPage": "Trang 211 - 225",
            "hcmutePage": "Trang 136 - 142"
          }
        },
        {
          "id": "c-art-ch4-02",
          "code": "4.1.2",
          "title": "Cơ chế Truyền Tham Trị (Pass-by-value)",
          "content": [
            "Mặc định trong C, mọi đối số truyền vào hàm đều theo cơ chế truyền tham trị (Pass-by-value): Hàm tạo một bản sao độc lập của đối số trong vùng nhớ Stack của hàm đó.",
            "Mọi thay đổi giá trị của tham số hình thức bên trong hàm hoàn toàn KHÔNG làm thay đổi giá trị của biến thực tế bên ngoài `main()`.",
            "Muốn hàm thay đổi giá trị của biến ngoài, bắt buộc phải truyền địa chỉ con trỏ (Pass-by-pointer) như hàm `swap(int *a, int *b)`."
          ],
          "keyPoints": [
            "C chỉ có truyền tham trị (Pass-by-value)",
            "Hàm thao tác trên bản sao",
            "Muốn đổi biến gốc phải truyền con trỏ"
          ],
          "citations": {
            "uttPage": "Trang 225 - 238",
            "hcmutePage": "Trang 142 - 146"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch4-02",
      "code": "4.2",
      "title": "Phạm vi Biến và Đệ quy",
      "articles": [
        {
          "id": "c-art-ch4-03",
          "code": "4.2.1",
          "title": "Phạm vi (Scope), Thời gian sống và Bổ từ static",
          "content": [
            "Biến cục bộ (Local variable): Khai báo bên trong hàm/khối lệnh, chỉ truy cập được trong khối đó, được cấp phát trên Stack và tự động hủy khi thoát khỏi khối.",
            "Biến toàn cục (Global variable): Khai báo ngoài mọi hàm, truy cập được từ mọi nơi, tồn tại suốt vòng đời chương trình trong vùng Data/BSS.",
            "Biến `static` cục bộ: Khởi tạo 1 lần duy nhất lúc nạp chương trình, KHÔNG bị hủy khi thoát hàm mà bảo lưu giá trị qua các lần gọi hàm kế tiếp."
          ],
          "keyPoints": [
            "Biến cục bộ trên Stack, hủy khi thoát hàm",
            "Biến toàn cục sống suốt chương trình",
            "static cục bộ giữ giá trị qua các lần gọi"
          ],
          "citations": {
            "uttPage": "Trang 238 - 250",
            "hcmutePage": "Trang 147 - 152"
          }
        },
        {
          "id": "c-art-ch4-04",
          "code": "4.2.2",
          "title": "Nguyên lý Đệ quy (Recursion) và Call Stack",
          "content": [
            "Hàm đệ quy là hàm gọi lại chính nó trực tiếp hoặc gián tiếp.",
            "Hai thành phần bắt buộc của đệ quy: (1) Điều kiện dừng (Base case / Điểm dừng) để chấm dứt việc gọi đệ quy; (2) Bước đệ quy (Recursive step) đưa bài toán về trường hợp nhỏ hơn.",
            "Bẫy đệ quy: Thiếu điểm dừng hoặc bước đệ quy không tiến dần về điểm dừng sẽ gây lặp vô hạn, dẫn đến tràn ngăn xếp bộ nhớ (Stack Overflow) làm sập chương trình."
          ],
          "keyPoints": [
            "Bắt buộc có Base case và Recursive step",
            "Mỗi lần gọi hàm tốn 1 khung ngăn xếp (Stack Frame)",
            "Thiếu điểm dừng gây Stack Overflow"
          ],
          "citations": {
            "uttPage": "Trang 250 - 274",
            "hcmutePage": "Trang 153 - 158"
          }
        }
      ]
    }
  ]
};
