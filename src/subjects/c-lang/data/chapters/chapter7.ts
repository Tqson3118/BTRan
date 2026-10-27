/**
 * src/subjects/c-lang/data/chapters\chapter7.ts
 * Dữ liệu lý thuyết chi tiết Chương 7: Chương 7: Kiểu Dữ Liệu Tự Định Nghĩa (Struct, Union, Enum, Typedef)
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter7: CChapter = {
  "id": 7,
  "slug": "kieu-du-lieu-tu-dinh-nghia-struct-union-enum",
  "title": "Chương 7: Kiểu Dữ Liệu Tự Định Nghĩa (Struct, Union, Enum, Typedef)",
  "description": "Khai báo kiểu cấu trúc struct, toán tử '.' vs '->', mảng struct, đệm bộ nhớ padding, kiểu hợp union chia sẻ ô nhớ, kiểu liệt kê enum và định nghĩa bí danh typedef.",
  "citations": {
    "uttPage": "Trang 421 - 498",
    "hcmutePage": "Trang 159 - 194"
  },
  "totalMCQ": 30,
  "totalFlashcards": 14,
  "totalEssays": 3,
  "sections": [
    {
      "id": "c-sec-ch7-01",
      "code": "7.1",
      "title": "Kiểu Cấu Trúc (Struct) và Mảng Cấu Trúc",
      "articles": [
        {
          "id": "c-art-ch7-01",
          "code": "7.1.1",
          "title": "Khai báo struct và Toán tử truy xuất '.' vs '->'",
          "content": [
            "Struct cho phép nhóm các biến có kiểu dữ liệu khác nhau lại thành một thực thể duy nhất.",
            "Toán tử chấm `.` dùng để truy xuất thành viên khi biến là biến struct thông thường: `sv.mssv`.",
            "Toán tử mũi tên `->` dùng để truy xuất thành viên khi biến là con trỏ trỏ tới struct: `psv->mssv` (tương đương với `(*psv).mssv`).",
            "Bẫy `psv.mssv` với con trỏ struct sẽ báo lỗi biên dịch cú pháp."
          ],
          "keyPoints": [
            "Struct nhóm nhiều kiểu khác nhau",
            "Dùng '.' cho biến thường",
            "Dùng '->' cho con trỏ struct"
          ],
          "citations": {
            "uttPage": "Trang 421 - 445",
            "hcmutePage": "Trang 159 - 170"
          }
        },
        {
          "id": "c-art-ch7-02",
          "code": "7.1.2",
          "title": "Đệm Bộ Nhớ (Structure Padding) và Căn Chỉnh Địa Chỉ",
          "content": [
            "Kích thước của một `struct` thường LỚN HƠN tổng kích thước của các thành phần bên trong nó.",
            "Nguyên nhân: Cơ chế căn chỉnh bộ nhớ (Data Alignment) của phần cứng yêu cầu các biến kiểu N bytes phải nằm ở địa chỉ là bội số của N. Trình biên dịch sẽ tự động chèn các byte đệm (Padding bytes).",
            "Ví dụ: `struct { char c; int i; };` có kích thước là 8 bytes trên máy 32/64-bit (1 byte char + 3 byte đệm + 4 byte int), chứ không phải 5 bytes."
          ],
          "keyPoints": [
            "sizeof(struct) >= tổng kích thước các trường",
            "Trình biên dịch chèn padding bytes để tối ưu tốc độ CPU",
            "Sắp xếp biến từ lớn tới nhỏ để giảm đệm"
          ],
          "citations": {
            "uttPage": "Trang 445 - 460",
            "hcmutePage": "Trang 171 - 176"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch7-02",
      "code": "7.2",
      "title": "Union, Enum và Typedef",
      "articles": [
        {
          "id": "c-art-ch7-03",
          "code": "7.2.1",
          "title": "Kiểu Hợp (Union) và Sự Chia Sẻ Ô Nhớ",
          "content": [
            "Union có cú pháp giống struct, nhưng tất cả các thành viên trong union đều dùng CHUNG MỘT VÙNG NHỚ bắt đầu từ cùng một địa chỉ.",
            "Kích thước của `union` bằng kích thước của thành viên lớn nhất.",
            "Ghi dữ liệu vào thành viên này sẽ ghi đè và làm biến đổi dữ liệu của các thành viên khác trong union."
          ],
          "keyPoints": [
            "Union chia sẻ chung một vùng nhớ",
            "Kích thước bằng trường lớn nhất",
            "Ghi trường này ghi đè trường khác"
          ],
          "citations": {
            "uttPage": "Trang 460 - 475",
            "hcmutePage": "Trang 177 - 182"
          }
        },
        {
          "id": "c-art-ch7-04",
          "code": "7.2.2",
          "title": "Kiểu Liệt Kê (Enum) và Bí Danh Kiểu (Typedef)",
          "content": [
            "`enum`: Tập hợp các hằng số nguyên có tên đại diện. Mặc định giá trị bắt đầu từ 0 và tự động tăng 1 cho các phần tử kế tiếp.",
            "`typedef`: Cho phép đặt tên bí danh mới cho một kiểu dữ liệu có sẵn để code ngắn gọn, rõ nghĩa hơn. Ví dụ `typedef unsigned long ulong;` hoặc `typedef struct SinhVien SinhVien;`."
          ],
          "keyPoints": [
            "enum hằng số nguyên bắt đầu từ 0",
            "typedef tạo bí danh mới cho kiểu dữ liệu"
          ],
          "citations": {
            "uttPage": "Trang 475 - 498",
            "hcmutePage": "Trang 183 - 194"
          }
        }
      ]
    }
  ]
};
