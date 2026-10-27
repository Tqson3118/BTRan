/**
 * src/subjects/c-lang/data/chapters\chapter9.ts
 * Dữ liệu lý thuyết chi tiết Chương 9: Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter9: CChapter = {
  "id": 9,
  "slug": "chuyen-de-c-plus-plus-can-ban-va-oop",
  "title": "Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP",
  "description": "Bước chuyển tiếp từ C sang C++, luồng cin/cout/endl, biến tham chiếu reference, cấp phát động new/delete, nạp chồng hàm, nhập môn Class OOP và virtual destructor.",
  "citations": {
    "uttPage": "Trang 18; 22; 72 - 82",
    "hcmutePage": "Trang 20; 27; 121 - 124"
  },
  "totalMCQ": 25,
  "totalFlashcards": 12,
  "totalEssays": 3,
  "sections": [
    {
      "id": "c-sec-ch9-01",
      "code": "9.1",
      "title": "Mở rộng Ngôn ngữ C++ Hiện Đại",
      "articles": [
        {
          "id": "c-art-ch9-01",
          "code": "9.1.1",
          "title": "Luồng Nhập/Xuất Chuẩn cin, cout và Toán tử Tham chiếu &",
          "content": [
            "C++ sử dụng thư viện `<iostream>` và namespace `std` để xử lý I/O: `std::cout << x;` (xuất) và `std::cin >> x;` (nhập an toàn kiểu, không cần mã định dạng %d).",
            "Biến tham chiếu (Reference: `int &ref = x;`): Là một bí danh (Alias) đại diện cho một biến đã tồn tại. Thao tác trên `ref` chính là thao tác trực tiếp trên `x`.",
            "Quy tắc: Biến tham chiếu bắt buộc phải được khởi tạo ngay lúc khai báo và không thể đổi sang trỏ biến khác suốt đời sống."
          ],
          "keyPoints": [
            "cin/cout an toàn kiểu dữ liệu",
            "Biến tham chiếu int &ref là alias",
            "Bắt buộc khởi tạo ngay khi khai báo"
          ],
          "citations": {
            "uttPage": "Trang 72 - 76",
            "hcmutePage": "Trang 20 - 27"
          }
        },
        {
          "id": "c-art-ch9-02",
          "code": "9.1.2",
          "title": "Cấp phát Bộ nhớ với new/delete và Nạp chồng Hàm",
          "content": [
            "C++ thay thế malloc/free bằng toán tử `new` và `delete`: `int *p = new int(10); delete p;`.",
            "Cấp phát mảng động: `int *arr = new int[n];` và giải phóng bắt buộc dùng `delete[] arr;`. Bẫy dùng `delete arr;` sẽ gây rò rỉ bộ nhớ hoặc hành vi không xác định.",
            "Nạp chồng hàm (Function Overloading): Cho phép nhiều hàm có CÙNG TÊN nhưng KHÁC NHAU về danh sách tham số (số lượng hoặc kiểu tham số)."
          ],
          "keyPoints": [
            "new/delete thay thế malloc/free",
            "new[] bắt buộc đi với delete[]",
            "Function Overloading cùng tên khác tham số"
          ],
          "citations": {
            "uttPage": "Trang 76 - 80",
            "hcmutePage": "Trang 121 - 124"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch9-02",
      "code": "9.2",
      "title": "Nhập môn Lập trình Hướng Đối Tượng (OOP)",
      "articles": [
        {
          "id": "c-art-ch9-03",
          "code": "9.2.1",
          "title": "Lớp (Class), Thuộc tính, Phương thức và Phạm vi Truy cập",
          "content": [
            "`class` kết hợp dữ liệu (thuộc tính) và hàm xử lý (phương thức) lại thành một thực thể đóng gói.",
            "Phạm vi truy cập: `private` (chỉ truy cập nội bộ trong class - mặc định trong class), `public` (truy cập tự do từ bên ngoài), `protected` (truy cập nội bộ và trong lớp con kế thừa).",
            "Hàm khởi tạo (Constructor): Cùng tên với class, không có kiểu trả về, tự động gọi khi đối tượng được tạo.",
            "Hàm hủy (Destructor): Có tiền tố ngã `~ClassName()`, không có tham số và kiểu trả về, tự động gọi khi đối tượng bị hủy."
          ],
          "keyPoints": [
            "Class đóng gói thuộc tính và phương thức",
            "private mặc định trong class",
            "Constructor tạo đối tượng, Destructor giải phóng"
          ],
          "citations": {
            "uttPage": "Trang 80 - 82",
            "hcmutePage": "Trang 121 - 124"
          }
        },
        {
          "id": "c-art-ch9-04",
          "code": "9.2.2",
          "title": "Kế thừa Cơ bản và Hàm Hủy Ảo (Virtual Destructor)",
          "content": [
            "Kế thừa (Inheritance): Cho phép lớp con (Derived Class) tái sử dụng và mở rộng các thuộc tính, phương thức của lớp cha (Base Class). Cú pháp: `class Derived : public Base { ... };`.",
            "Bẫy Hàm hủy ảo (Virtual Destructor): Khi giải phóng đối tượng lớp con qua con trỏ lớp cha đa hình `Base *p = new Derived(); delete p;`, nếu `Base` không có hàm hủy ảo `virtual ~Base()`, hàm hủy của `Derived` sẽ bị bỏ qua, dẫn đến rò rỉ tài nguyên."
          ],
          "keyPoints": [
            "Kế thừa tái sử dụng mã nguồn",
            "Base class đa hình luôn cần virtual destructor",
            "Tránh rò rỉ bộ nhớ lớp con"
          ],
          "citations": {
            "uttPage": "Trang 80 - 82",
            "hcmutePage": "Trang 121 - 124"
          }
        }
      ]
    }
  ]
};
