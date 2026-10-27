/**
 * src/subjects/c-lang/data/chapters\chapter8.ts
 * Dữ liệu lý thuyết chi tiết Chương 8: Chương 8: Thao tác Tệp Tin (File I/O)
 * Phục vụ tra cứu tức thời trên Drawer Tra cứu Lý thuyết
 */

import type { CChapter } from '../../types/index';

export const chapter8: CChapter = {
  "id": 8,
  "slug": "thao-tac-tep-tin-file-io",
  "title": "Chương 8: Thao tác Tệp Tin (File I/O)",
  "description": "Con trỏ FILE, các chế độ mở tệp fopen 'r', 'w', 'a', tệp văn bản vs tệp nhị phân, đọc ghi với fread/fwrite/fprintf/fscanf, truy xuất ngẫu nhiên fseek, ftell và bẫy feof.",
  "citations": {
    "uttPage": "Trang 499 - 554",
    "hcmutePage": "Trang 177 - 194"
  },
  "totalMCQ": 25,
  "totalFlashcards": 12,
  "totalEssays": 3,
  "sections": [
    {
      "id": "c-sec-ch8-01",
      "code": "8.1",
      "title": "Quy trình Làm việc với Tệp và Chế độ Mở Tệp",
      "articles": [
        {
          "id": "c-art-ch8-01",
          "code": "8.1.1",
          "title": "Con trỏ FILE và Hàm fopen(), fclose()",
          "content": [
            "Mọi thao tác tệp trong C đều thông qua một con trỏ kiểu cấu trúc đặc biệt: `FILE *fp;`.",
            "`fopen(filename, mode)`: Mở tệp theo chế độ chỉ định. Luôn kiểm tra `if (fp == NULL)` sau khi mở vì nếu file không tồn tại hoặc không đủ quyền, hàm trả về NULL và thao tác đọc ghi tiếp theo sẽ gây crash.",
            "`fclose(fp)`: Đóng tệp, đẩy toàn bộ dữ liệu từ bộ đệm vào đĩa và giải phóng tài nguyên hệ điều hành."
          ],
          "keyPoints": [
            "Dùng con trỏ FILE*",
            "Luôn kiểm tra fp == NULL",
            "Bắt buộc fclose() sau khi làm việc"
          ],
          "citations": {
            "uttPage": "Trang 499 - 515",
            "hcmutePage": "Trang 177 - 182"
          }
        },
        {
          "id": "c-art-ch8-02",
          "code": "8.1.2",
          "title": "Các Chế độ Mở Tệp (File Modes)",
          "content": [
            "`\"r\"`: Mở để đọc tệp văn bản. Tệp bắt buộc phải tồn tại, nếu không trả về NULL.",
            "`\"w\"`: Mở để ghi tệp văn bản. Nếu tệp đã có nội dung, nó sẽ BỊ XÓA SẠCH VỀ 0 BYTE; nếu chưa có, tệp mới sẽ được tạo.",
            "`\"a\"`: Mở để ghi nối tiếp (Append). Dữ liệu mới được ghi vào cuối tệp mà không làm mất nội dung cũ.",
            "Tệp nhị phân thêm chữ 'b': `\"rb\"`, `\"wb\"`, `\"ab\"`."
          ],
          "keyPoints": [
            "'r' chỉ đọc, 'w' ghi đè xóa sạch",
            "'a' ghi nối đuôi",
            "Thêm 'b' cho tệp nhị phân"
          ],
          "citations": {
            "uttPage": "Trang 515 - 525",
            "hcmutePage": "Trang 182 - 186"
          }
        }
      ]
    },
    {
      "id": "c-sec-ch8-02",
      "code": "8.2",
      "title": "Đọc Ghi Dữ liệu và Truy Cập Ngẫu Nhiên",
      "articles": [
        {
          "id": "c-art-ch8-03",
          "code": "8.2.1",
          "title": "Tệp Văn Bản vs Tệp Nhị Phân và Bẫy feof()",
          "content": [
            "Tệp văn bản (Text file): Lưu trữ dưới dạng các ký tự mã ASCII; dùng `fgetc()`, `fputc()`, `fgets()`, `fputs()`, `fscanf()`, `fprintf()`.",
            "Tệp nhị phân (Binary file): Lưu nguyên vẹn các byte nhị phân trong bộ nhớ máy tính; dùng `fread(&buffer, size, count, fp)` và `fwrite(&buffer, size, count, fp)`.",
            "Bẫy `while (!feof(fp))`: Cờ `feof` chỉ bật sau khi đã có một lệnh đọc thất bại vượt qua mốc cuối file; dẫn đến xử lý lặp 2 lần bản ghi cuối cùng. Cách chuẩn: kiểm tra giá trị trả về của `fread` hoặc `fscanf`."
          ],
          "keyPoints": [
            "Tệp văn bản dùng fgets/fprintf",
            "Tệp nhị phân dùng fread/fwrite",
            "Bẫy feof() lặp bản ghi cuối 2 lần"
          ],
          "citations": {
            "uttPage": "Trang 525 - 540",
            "hcmutePage": "Trang 186 - 190"
          }
        },
        {
          "id": "c-art-ch8-04",
          "code": "8.2.2",
          "title": "Truy Cập Ngẫu Nhiên: fseek(), ftell(), rewind()",
          "content": [
            "`fseek(fp, offset, origin)`: Di chuyển con trỏ định vị tệp. Các gốc `origin`: `SEEK_SET` (từ đầu tệp), `SEEK_CUR` (từ vị trí hiện tại), `SEEK_END` (từ cuối tệp).",
            "`ftell(fp)`: Trả về vị trí byte hiện tại của con trỏ tệp tính từ đầu tệp.",
            "`rewind(fp)`: Đưa con trỏ tệp quay trở về đầu tệp (tương đương `fseek(fp, 0, SEEK_SET)`)."
          ],
          "keyPoints": [
            "fseek di chuyển con trỏ tệp",
            "SEEK_SET, SEEK_CUR, SEEK_END",
            "ftell trả về vị trí byte hiện tại"
          ],
          "citations": {
            "uttPage": "Trang 540 - 554",
            "hcmutePage": "Trang 190 - 194"
          }
        }
      ]
    }
  ]
};
