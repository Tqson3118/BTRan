/**
 * src/subjects/c-lang/data/chapters\chapter6.ts
 * Dữ liệu lý thuyết chi tiết Chương 6: Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter6: CChapter = {
  "id": 6,
  "slug": "con-tro-va-quan-ly-bo-nho-dong",
  "title": "Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động",
  "description": "Địa chỉ ô nhớ &, toán tử giải tham chiếu *, con trỏ NULL, số học con trỏ, *p++ vs (*p)++, cấp phát động Heap với malloc, calloc, realloc, free, rò rỉ bộ nhớ và con trỏ hàm.",
  "citations": {
    "uttPage": "Trang 320 - 344; 401 - 411",
    "hcmutePage": "Trang 121 - 135"
  },
  "totalMCQ": 35,
  "totalFlashcards": 16,
  "totalEssays": 4,
  "sections": [
    {
      "id": "c-sec-ch6-01",
      "code": "6.1",
      "title": "Nền tảng Con trỏ và Địa chỉ Ô nhớ",
      "articles": [
        {
          "id": "c-art-ch6-01",
          "code": "6.1.1",
          "title": "Khái niệm Con trỏ, Toán tử & và *",
          "content": [
            "Con trỏ (Pointer) là một biến đặc biệt dùng để lưu trữ địa chỉ của một ô nhớ khác trong bộ nhớ RAM.",
            "Toán tử lấy địa chỉ `&x`: Trả về địa chỉ bộ nhớ của biến x. Toán tử giải tham chiếu `*p`: Truy xuất đến giá trị được lưu tại ô nhớ mà con trỏ p đang trỏ tới.",
            "Kích thước con trỏ: Phụ thuộc vào kiến trúc hệ thống (4 bytes trên hệ thống 32-bit và 8 bytes trên hệ thống 64-bit), bất kể kiểu dữ liệu nó trỏ tới (int*, char*, double* đều có cùng kích thước byte con trỏ).",
            "Con trỏ hoang dã (Wild Pointer): Con trỏ chưa khởi tạo chứa giá trị rác; giải tham chiếu `*p` sẽ gây lỗi vi phạm phân đoạn bộ nhớ (Segmentation Fault)."
          ],
          "keyPoints": [
            "Con trỏ lưu địa chỉ ô nhớ",
            "& lấy địa chỉ, * giải tham chiếu",
            "Kích thước con trỏ 4B (32-bit) hoặc 8B (64-bit)",
            "Khởi tạo p = NULL để tránh con trỏ rác"
          ],
          "citations": {
            "uttPage": "Trang 320 - 330",
            "hcmutePage": "Trang 121 - 126"
          }
        },
        {
          "id": "c-art-ch6-02",
          "code": "6.1.2",
          "title": "Số học Con trỏ và Thứ tự *p++ vs (*p)++",
          "content": [
            "Số học con trỏ: Khi thực hiện `p + 1`, địa chỉ trong p tăng thêm một lượng bằng `sizeof(*p)` (ví dụ con trỏ `int*` sẽ tăng thêm 4 byte, `char*` tăng 1 byte).",
            "Tên mảng bản chất là một hằng con trỏ trỏ tới phần tử đầu tiên: `a[i]` tương đương với `*(a + i)`.",
            "Bẫy độ ưu tiên kinh điển: Toán tử hậu tố `++` có độ ưu tiên cao hơn `*`. Vì vậy `*p++` tương đương với `*(p++)` (lấy giá trị hiện tại rồi tăng địa chỉ p lên 1); trong khi `(*p)++` sẽ tăng giá trị của ô nhớ mà p trỏ tới lên 1."
          ],
          "keyPoints": [
            "p + 1 nhảy sizeof(*p) bytes",
            "a[i] đồng nhất với *(a + i)",
            "*p++ tăng địa chỉ, (*p)++ tăng giá trị"
          ],
          "citations": {
            "uttPage": "Trang 330 - 344",
            "hcmutePage": "Trang 126 - 130"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch6-02",
      "code": "6.2",
      "title": "Cấp phát Bộ nhớ Động (Dynamic Memory Allocation)",
      "articles": [
        {
          "id": "c-art-ch6-03",
          "code": "6.2.1",
          "title": "Các hàm malloc, calloc, realloc và free (<stdlib.h>)",
          "content": [
            "`malloc(size)`: Cấp phát một vùng nhớ liên tục có kích thước `size` bytes trên vùng Heap, chứa giá trị rác ngẫu nhiên.",
            "`calloc(num, size)`: Cấp phát vùng nhớ cho `num` phần tử, mỗi phần tử `size` bytes và tự động gán toàn bộ bit về 0.",
            "`realloc(ptr, new_size)`: Thay đổi kích thước vùng nhớ đã cấp phát, có thể mở rộng tại chỗ hoặc chuyển sang vị trí mới.",
            "`free(ptr)`: Giải phóng vùng nhớ Heap đã cấp phát trả lại cho hệ thống.",
            "Lưu ý: Luôn kiểm tra `ptr == NULL` sau khi cấp phát để đảm bảo hệ thống còn đủ bộ nhớ."
          ],
          "keyPoints": [
            "Heap dùng cho bộ nhớ động",
            "malloc chứa rác, calloc khởi tạo 0",
            "realloc thay đổi kích thước",
            "Bắt buộc free() sau khi dùng"
          ],
          "citations": {
            "uttPage": "Trang 401 - 408",
            "hcmutePage": "Trang 131 - 133"
          }
        },
        {
          "id": "c-art-ch6-04",
          "code": "6.2.2",
          "title": "Rò rỉ Bộ nhớ (Memory Leak) và Con trỏ Treo (Dangling Pointer)",
          "content": [
            "Rò rỉ bộ nhớ (Memory Leak): Xảy ra khi vùng nhớ Heap được cấp phát nhưng không bao giờ được giải phóng bằng `free()`, dẫn đến cạn kiệt tài nguyên RAM của hệ thống.",
            "Con trỏ treo (Dangling Pointer): Xảy ra khi một vùng nhớ đã bị giải phóng bằng `free(p)`, nhưng con trỏ p vẫn tiếp tục trỏ tới địa chỉ cũ đó. Nếu giải tham chiếu `*p` sẽ gây lỗi nghiêm trọng.",
            "Kỹ thuật chuẩn: Luôn gán `p = NULL;` ngay sau khi gọi `free(p);`."
          ],
          "keyPoints": [
            "Quên free() gây Memory Leak",
            "Truy cập vùng đã free gây Dangling Pointer",
            "Gán p = NULL sau khi free()"
          ],
          "citations": {
            "uttPage": "Trang 408 - 411",
            "hcmutePage": "Trang 133 - 135"
          }
        }
      ]
    }
  ]
};
