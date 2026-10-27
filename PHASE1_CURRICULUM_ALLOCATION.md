# TÀI LIỆU ĐẶC TẢ HỢP NHẤT CHƯƠNG TRÌNH & MA TRẬN PHÂN BỔ HỌC LIỆU
# HỆ THỐNG ÔN TẬP LẬP TRÌNH C/C++ CHUYÊN SÂU (PHASE 1)
## Master Curriculum Allocation & Quantitative Pedagogical Blueprint

- **Tên dự án**: Website Ôn tập Lập trình C/C++ Chuyên sâu (Interactive C/C++ Study & Assessment Platform)
- **Giai đoạn**: Phase 1 — Khảo sát Giáo trình, Hợp nhất Chương trình Giảng dạy & Lập Ma trận Phân bổ Học liệu
- **Tài liệu bàn giao**: `PHASE1_CURRICULUM_ALLOCATION.md`
- **Phiên bản**: 1.0 (Bản đặc tả chính thức cho người dùng phê duyệt trước khi sinh mã và dữ liệu Phase 2)
- **Tài liệu nguồn thẩm định**:
  1. `DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf` (591 trang — ĐH Công nghệ GTVT / UTT, TS. Lê Chí Luận chủ biên)
  2. `Ngôn ngữ lập trình C_ebook.pdf` (211 trang — ĐH Sư phạm Kỹ thuật TP.HCM / HCMUTE, TS. Trương Ngọc Sơn chủ biên)
- **Căn cứ yêu cầu**: `ORIGINAL_REQUEST.md` (yêu cầu R1, R2, R3) và `SCOPE.md`.

---

## MỤC LỤC TỔNG QUAN

1. [THÔNG TIN CHUNG & TÓM TẮT ĐIỀU HÀNH (EXECUTIVE SUMMARY)](#1-thông-tin-chung--tóm-tắt-điều-hành-executive-summary)
   - 1.1. Mục đích và Phạm vi Tài liệu
   - 1.2. Bảng Tổng quan Định lượng Toàn hệ thống
   - 1.3. Thống kê Đối chiếu Hai Giáo trình Gốc
2. [CÂY DANH MỤC CHƯƠNG TRÌNH ĐÀO TẠO HỢP NHẤT (UNIFIED CURRICULUM TREE)](#2-cây-danh-mục-chương-trình-đào-tạo-hợp-nhất-unified-curriculum-tree)
   - 2.1. Cấu trúc 9 Chương Chuẩn hóa
   - 2.2. Chi tiết 9 Chương & Bảng Ánh xạ Số trang Tham chiếu Kép (Dual Page Range Mapping)
     - Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình
     - Chương 2: Các kiểu dữ liệu cơ bản, Biểu thức & Nhập/Xuất chuẩn
     - Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp
     - Chương 4: Hàm, Phạm vi Biến & Đệ quy
     - Chương 5: Mảng (1D, 2D) & Chuỗi ký tự (Strings)
     - Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động
     - Chương 7: Kiểu Dữ liệu Tự định nghĩa (Struct, Union, Enum, Typedef)
     - Chương 8: Thao tác Tệp tin (File I/O)
     - Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP
3. [BẢNG MA TRẬN PHÂN BỔ HỌC LIỆU ĐỊNH LƯỢNG (ASSET ALLOCATION MATRIX)](#3-bảng-ma-trận-phân-bổ-học-liệu-định-lượng-asset-allocation-matrix)
   - 3.1. Bảng Phân bổ Trắc nghiệm (MCQ) 2 Chiều: 4 Dạng bài x 3 Cấp độ khó (270 câu)
   - 3.2. Đặc tả Bộ đề Thi thử Chuẩn 45 câu / 90 phút (Mock Exam Blueprint)
   - 3.3. Ma trận Phân bổ Thẻ Ghi nhớ (Flashcards - 125 thẻ)
4. [DANH MỤC BÀI TẬP TỰ LUẬN LẬP TRÌNH (PROGRAMMING ESSAYS CATALOG - 32 BÀI)](#4-danh-mục-bài-tập-tự-luận-lập-trình-programming-essays-catalog---32-bài)
   - Chi tiết Đề bài, Phân tích Bước giải và Khung Mã nguồn Chuẩn C/C++ cho 32 bài tập
5. [PHÂN TÍCH SƯ PHẠM & BẪY ĐỀ THI THƯỜNG GẶP (PEDAGOGICAL INSIGHTS & TRAPS)](#5-phân-tích-sư-phạm--bẫy-đề-thi-thường-gặp-pedagogical-insights--traps)
   - Bảng tổng hợp các bẫy đề thi, lỗi runtime, lỗi logic và kỹ thuật giải quyết
6. [TIÊU CHÍ NGHIỆM THU & LỘ TRÌNH TRIỂN KHAI PHASE 2 (ACCEPTANCE CRITERIA & ROADMAP)](#6-tiêu-chí-nghiệm-thu--lộ-trình-triển-khai-phase-2-acceptance-criteria--roadmap)
   - 6.1. Tiêu chí Nghiệm thu Phase 1
   - 6.2. Thiết kế Lược đồ Dữ liệu JSON Chuẩn hóa cho Phase 2
   - 6.3. Lộ trình Triển khai Kỹ thuật Phase 2

---

## 1. THÔNG TIN CHUNG & TÓM TẮT ĐIỀU HÀNH (EXECUTIVE SUMMARY)

### 1.1. Mục đích và Phạm vi Tài liệu
Tài liệu này xác lập bản thiết kế kiến trúc học thuật và phân bổ tài nguyên số hóa toàn diện cho hệ thống website ôn tập lập trình C/C++. Bản đặc tả đóng vai trò kim chỉ nam thống nhất giữa đội ngũ sư phạm, chuyên gia nội dung và đội ngũ kỹ sư phần mềm, nhằm:
1. **Hợp nhất hai bộ giáo trình chuẩn đại học**: Giải quyết sự phân mảnh và khác biệt trong cách tiếp cận giữa cuốn *Giáo trình Ngôn ngữ Lập trình C* (591 trang - ĐH Công nghệ Giao thông Vận tải / UTT) và cuốn *Giáo trình Ngôn ngữ Lập trình C* (211 trang - ĐH Sư phạm Kỹ thuật TP.HCM / HCMUTE).
2. **Chuẩn hóa cây chương trình 9 chương**: Xây dựng lộ trình học tập logic từ kiến thức cơ bản về cú pháp C đến tư duy quản lý bộ nhớ nâng cao (Con trỏ, Dynamic Allocation, File I/O) và mở rộng chương chuyển tiếp sang ngôn ngữ C++ / Hướng đối tượng OOP.
3. **Định lượng chính xác 100% ngân hàng học liệu**: Quy hoạch số lượng câu hỏi trắc nghiệm (MCQ), thẻ ghi nhớ (Flashcards), bài tập tự luận (Programming Essays) và bộ đề thi thử chuẩn mực, đảm bảo cân bằng giữa lý thuyết, thực hành, khả năng dò vết biến (trace) và gỡ lỗi (debug).

### 1.2. Bảng Tổng quan Định lượng Toàn hệ thống

| Chỉ tiêu Học liệu | Quy mô Định lượng | Tỷ lệ / Quy tắc Phân bổ | Mục đích Phục vụ |
|---|:---:|---|---|
| **Số chương Học phần** | **9 Chương** | Bao phủ 100% nội dung C chuẩn và mở rộng C++ | Luyện tập phân hóa theo từng chuyên đề |
| **Ngân hàng Trắc nghiệm (MCQ)** | **270 câu** | 4 dạng câu hỏi: Lý thuyết (40%), Output/Trace (30%), Debug (20%), Fill-in (10%) | Kho câu hỏi phục vụ luyện tập theo chương và sinh đề thi |
| **Phân bổ Độ khó Trắc nghiệm** | **270 câu** | Dễ: 67 câu (24.8%) \| TB: 135 câu (50.0%) \| Khó: 68 câu (25.2%) | Đảm bảo tính phân hóa từ nhận biết đến tư duy bẫy |
| **Bộ đề Thi thử Chuẩn** | **45 câu / 90 phút** | 18 Lý thuyết, 14 Output/Trace, 9 Debug, 4 Fill-in (11 Dễ, 23 TB, 11 Khó) | Mô phỏng kỳ thi kết thúc học phần (2.0 phút/câu) |
| **Thẻ Ghi nhớ (Flashcards)** | **125 thẻ** | 12 đến 16 thẻ / chương (Mặt trước: Khái niệm -> Mặt sau: Giải thích + Code) | Ôn luyện nhanh định nghĩa, cú pháp, hàm chuẩn |
| **Bài tập Tự luận (Essays)** | **32 bài tập** | 3 đến 4 bài / chương; đầy đủ Đề bài, Thuật toán, Khung code giải pháp mẫu | Rèn luyện kỹ năng cài đặt thuật toán thực tế |

### 1.3. Thống kê Đối chiếu Hai Giáo trình Gốc

> ⚠️ **LƯU Ý ĐỐI CHIẾU XUẤT XỨ TÀI NGUYÊN**:
> Trong văn bản giao nhiệm vụ ban đầu (`ORIGINAL_REQUEST.md`), hai cuốn giáo trình được gọi ngắn gọn là *"591 trang HCMUTE"* và *"211 trang GTVT"*. Khảo sát thực địa và xác minh văn bản xuất bản khẳng định:
> - Tệp `DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf` (591 trang) là giáo trình của **Trường Đại học Công nghệ Giao thông Vận tải (UTT, 2020)** do TS. Lê Chí Luận chủ biên.
> - Tệp `Ngôn ngữ lập trình C_ebook.pdf` (211 trang) là giáo trình của **Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE, 2020)** do TS. Trương Ngọc Sơn chủ biên, NXB ĐHQG TP.HCM.
> Sự kết hợp giữa hai bộ tài liệu tạo nên giá trị học thuật hoàn hảo: Giáo trình 591 trang UTT sở hữu hệ thống bài tập mẫu và phân tích kỹ thuật bộ nhớ đồ sộ; trong khi giáo trình 211 trang HCMUTE xuất sắc về tư duy lưu đồ thuật toán (Flowcharts), tính cô đọng, bài tập nhận diện lỗi (Debug) và chuyên đề Tiền xử lý.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        SO SÁNH ĐẶC TÍNH SƯ PHẠM HAI BỘ GIÁO TRÌNH                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ ĐẶC ĐIỂM                    GIÁO TRÌNH 591 TRANG (UTT)     GIÁO TRÌNH 211 TRANG (HCMUTE)│
│ Cơ quan ban hành             ĐH Công nghệ GTVT (Hà Nội)    ĐH Sư phạm Kỹ thuật TP.HCM  │
│ Chủ biên                     TS. Lê Chí Luận               TS. Trương Ngọc Sơn          │
│ Nhà xuất bản                 NXB KHTN và Công nghệ (2020)  NXB ĐHQG TP.HCM (2020)       │
│ Quy mô trang                 591 trang                     211 trang                    │
│ Quy luật lệch trang (Offset) Offset = 0 (Trang in = PDF)   Offset = -3 (Trang in = PDF-3│
│ Số lượng chương              8 Chương + 5 Phụ lục          8 Chương                     │
│ Số lượng ví dụ mã nguồn      259 ví dụ mã nguồn            138 ví dụ mã nguồn           │
│ Số lượng bài tập             180 bài (+ Case Study lớn)    58 bài lớn (98+ câu hỏi con) │
│ Điểm mạnh nổi bật            Phân tích bộ nhớ sâu, bài tập Lưu đồ Flowchart trực quan,  │
│                              có giải mẫu chi tiết Phần A,  chuyên đề Tiền xử lý riêng,  │
│                              chương File I/O cực kỳ sâu.   bài tập sửa lỗi Debug chuẩn. │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. CÂY DANH MỤC CHƯƠNG TRÌNH ĐÀO TẠO HỢP NHẤT (UNIFIED CURRICULUM TREE)

### 2.1. Cấu trúc 9 Chương Chuẩn hóa

Lộ trình học tập được thiết kế khoa học, đi từ cú pháp nhập môn, cấu trúc điều khiển, kỹ thuật hàm mô-đun, cấu trúc dữ liệu cơ sở (Mảng/Chuỗi), kỹ thuật con trỏ và cấp phát động trên Heap, kiểu dữ liệu người dùng tự định nghĩa, lưu trữ bền vững trên tệp tin (File I/O) và cầu nối lên C++ hiện đại.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CÂY CHƯƠNG TRÌNH HỢP NHẤT 9 CHƯƠNG C/C++                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình                              │
│ Chương 2: Các kiểu dữ liệu cơ bản, Biểu thức & Nhập/Xuất chuẩn                          │
│ Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp                                      │
│ Chương 4: Hàm, Phạm vi Biến & Đệ quy                                                  │
│ Chương 5: Mảng (1D, 2D) & Chuỗi ký tự (Strings)                                       │
│ Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động                                    │
│ Chương 7: Kiểu Dữ liệu Tự định nghĩa (Struct, Union, Enum, Typedef)                   │
│ Chương 8: Thao tác Tệp tin (File I/O)                                                 │
│ Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP                                │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.2. Chi tiết 9 Chương & Bảng Ánh xạ Số trang Tham chiếu Kép

#### CHƯƠNG 1: TỔNG QUAN VỀ NGÔN NGỮ C & MÔI TRƯỜNG LẬP TRÌNH

- **Mục tiêu sư phạm**:
  - Hiểu vị trí của ngôn ngữ C trong lịch sử phát triển phần mềm; bản chất của ngôn ngữ cấp trung (vừa có tính cấu trúc, vừa can thiệp được phần cứng/bộ nhớ).
  - Nắm vững cấu trúc tổng quát của tệp mã nguồn C (`#include`, `#define`, khai báo toàn cục, hàm `main`, mã thoát `return 0`).
  - Nắm vững chu trình biên dịch 4 giai đoạn: Tiền xử lý (Preprocessor) $\to$ Biên dịch (Compiler) $\to$ Hợp dịch (Assembler) $\to$ Liên kết (Linker) $\to$ Thực thi.
  - Phân biệt tập ký tự hợp lệ, 32 từ khóa chuẩn ANSI C, và quy tắc đặt tên định danh (Identifier).
  - Làm chủ các công cụ lập trình và trình biên dịch (GCC, Dev-C++, VS Code), phân biệt lỗi biên dịch (Compile-time) và lỗi thời gian chạy (Runtime).

- **Danh mục tiểu mục kiến thức**:
  - `1.1.` Lịch sử phát triển và đặc trưng nổi bật của ngôn ngữ lập trình C (Bell Labs, Dennis Ritchie, 1972).
  - `1.2.` Cấu trúc một chương trình C: Hàm `main()`, khối lệnh `{ }`, cú pháp chú thích (`//` và `/* ... */`).
  - `1.3.` Tập ký tự hợp lệ, danh sách 32 từ khóa chuẩn C89/C99 và quy tắc đặt tên định danh hợp lệ/không hợp lệ.
  - `1.4.` Chu trình xây dựng phần mềm: Tiền xử lý $\to$ Biên dịch (.obj) $\to$ Liên kết thư viện (.exe) $\to$ Nạp thực thi.
  - `1.5.` Bộ tiền xử lý & Chỉ thị biên dịch có điều kiện: Bao hàm tệp (`#include <...>` vs `#include "..."`), macro hằng và macro hàm `#define`, chỉ thị điều kiện (`#if`, `#else`, `#elif`, `#endif`, `#ifdef`, `#ifndef`, `#undef`), xóa macro (`#undef`) và cơ chế chống đụng độ tiêu đề Header Guards (`#ifndef HEADER_H` / `#define HEADER_H` ... `#endif`).
  - `1.6.` Môi trường phát triển tích hợp (IDE): GCC, Dev-C++, Code::Blocks, xử lý các thông báo lỗi cú pháp và cảnh báo (Warnings).

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 1 (mục 1.1, 1.2, 1.3, 1.7) & Phụ lục 1 | Trang 21 – 37; 68 – 75; 581 – 582 | PDF P21 – P37; P68 – P75; P581 – P582 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 1 (mục 1.1 – 1.7) & Chương 8 (mục 8.1 – 8.4) | Trang 9 – 30; 195 – 205 | PDF P12 – P33; P198 – P208 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Đặt tên biến trùng với từ khóa C (ví dụ: `int default;`, `float do;`).
  - Tên biến bắt đầu bằng chữ số (ví dụ: `int 1stValue;`) hoặc chứa ký tự đặc biệt (`total-count`).
  - Đặt dấu chấm phẩy sau chỉ thị `#define` (ví dụ: `#define MAX 100;`), dẫn đến lỗi cú pháp ngầm khi macro được thay thế vào biểu thức tính toán.
  - Nhầm lẫn giữa `#include <stdio.h>` (tìm trong thư mục hệ thống của compiler) và `#include "my_lib.h"` (ưu tiên tìm trong thư mục hiện hành chứa file mã nguồn).
  - Nhầm lẫn giữa lỗi cú pháp (Syntax error), lỗi liên kết (Linker error - undefined reference to `main`), và lỗi thời gian chạy (Runtime crash).

---

#### CHƯƠNG 2: CÁC KIỂU DỮ LIỆU CƠ BẢN, BIỂU THỨC & NHẬP/XUẤT CHUẨN

- **Mục tiêu sư phạm**:
  - Làm chủ các kiểu dữ liệu nguyên thủy (`char`, `int`, `float`, `double`, `void`) và các bổ từ định tính (`signed`, `unsigned`, `short`, `long`).
  - Nắm vững kích thước byte (`sizeof`), miền biểu diễn giá trị, chuẩn số thực IEEE-754 và biểu diễn bù 2 cho số nguyên có dấu.
  - Sử dụng thành thạo hệ thống toán tử: Số học, quan hệ, logic, tăng giảm tiền tố/hậu tố (`++`/`--`), toán tử điều kiện ba ngôi (`?:`) và toán tử thao tác bit (Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`).
  - Nắm vững bảng thứ tự ưu tiên và quy tắc kết hợp toán tử.
  - Làm chủ thư viện nhập xuất chuẩn `<stdio.h>` (`printf`, `scanf`, chuỗi định dạng format specifiers, độ rộng căn lề, độ chính xác số lẻ).
  - Xử lý triệt để hiện tượng trôi lệnh khi nhập chuỗi ký tự sau khi nhập số (cơ chế xóa bộ đệm bàn phím `stdin`).

- **Danh mục tiểu mục kiến thức**:
  - `2.1.` Phân loại kiểu dữ liệu: `char` (1 byte), `int` (2 hoặc 4 bytes), `float` (4 bytes), `double` (8 bytes), `void`.
  - `2.2.` Các bổ từ kiểu dữ liệu: `signed`, `unsigned`, `short`, `long`; Toán tử kích thước `sizeof()`.
  - `2.3.` Biến và Hằng: Khai báo, khởi tạo, hằng ký tự escape sequence (`\n`, `\t`, `\\`, `\'`, `\"`), hằng số hệ 8 (Octal), hệ 16 (Hex).
  - `2.4.` Ép kiểu dữ liệu (Type Casting): Ép kiểu ngầm định (Implicit promotion) và ép kiểu tường minh (Explicit casting `(type)expr`).
  - `2.5.` Hệ thống toán tử C:
    - 2.5.1. Toán tử số học (`+`, `-`, `*`, `/`, `%`) và bẫy phép chia nguyên `int / int`.
    - 2.5.2. Toán tử tăng giảm: Tiền tố (`++x`) vs Hậu tố (`x++`).
    - 2.5.3. Toán tử quan hệ (`==`, `!=`, `<`, `>`, `<=`, `>=`) và toán tử logic (`&&`, `||`, `!`) kèm cơ chế Short-circuit Evaluation.
    - 2.5.4. Toán tử thao tác bit: AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), Dịch trái (`<<`), Dịch phải (`>>`).
    - 2.5.5. Toán tử gán phức hợp (`+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`) và toán tử dấu phẩy (Comma operator).
    - 2.5.6. Bảng thứ tự ưu tiên và chiều kết hợp toán tử.
  - `2.6.` Nhập xuất dữ liệu chuẩn (`<stdio.h>`):
    - 2.6.1. Hàm `printf()`: Mã định dạng (`%d`, `%i`, `%u`, `%f`, `%lf`, `%c`, `%s`, `%p`, `%x`, `%o`), định dạng độ rộng tối thiểu (`%5d`), độ chính xác số lẻ (`%.2f`), căn lề trái (`%-10s`).
    - 2.6.2. Hàm `scanf()`: Toán tử địa chỉ `&`, đọc số, đọc ký tự, đọc chuỗi không dấu cách.
    - 2.6.3. Nhập xuất ký tự đơn: `getchar()`, `putchar()`, `getch()`, `getche()` trong `<conio.h>`.
    - 2.6.4. Kỹ thuật xóa bộ nhớ đệm bàn phím `stdin`: Phân tích lỗi trôi lệnh của `scanf("%c")` / `gets()`, cách khắc phục chuẩn mực (`while(getchar() != '\n');` hoặc `scanf(" %c")`).

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 1 (mục 1.4 – 1.6) & Chương 2 (mục 2.1 – 2.3) & Phụ lục 3, 4, 5 | Trang 37 – 67; 89 – 117; 587 – 590 | PDF P37 – P67; P89 – P117; P587 – P590 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 1 (mục 1.8 – 1.11: Biến, Hằng, Phép toán, Nhập xuất) | Trang 30 – 44 | PDF P33 – P47 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Bẫy phép chia số nguyên: Biểu thức `float f = 5 / 2;` cho ra kết quả `2.0` thay vì `2.5` do phép chia hai số nguyên thực hiện trước khi gán.
  - Biểu thức tăng giảm phức hợp: Viết `y = x++ + ++x;` dẫn đến Undefined Behavior trong chuẩn ANSI C.
  - Quên toán tử lấy địa chỉ `&` trong hàm `scanf("%d", a);` gây crash chương trình vì ghi vào ô nhớ không xác định (Segmentation Fault).
  - Nhầm lẫn giữa toán tử gán `=` và toán tử so sánh bằng `==` trong biểu thức điều kiện (ví dụ: `if (x = 5)` luôn là true).
  - Cơ chế đoản mạch (Short-circuit): Trong `expr1 && expr2`, nếu `expr1` sai thì `expr2` hoàn toàn không được thực thi.
  - Quên ký tự xuống dòng `\n` còn đọng trong `stdin` làm cho lệnh `scanf("%c")` kế tiếp đọc nhầm ký tự Enter và bỏ qua việc nhập dữ liệu người dùng.

---

#### CHƯƠNG 3: CẤU TRÚC ĐIỀU KHIỂN RẼ NHÁNH & VÒNG LẶP

- **Mục tiêu sư phạm**:
  - Nắm vững cấu trúc rẽ nhánh: `if` đơn, `if-else` hai nhánh, bậc thang `else if`, cấu trúc `if` lồng nhau và xử lý bài toán dangling else.
  - Hiểu sâu cấu trúc lựa chọn đa nhánh `switch-case`: kiểu dữ liệu hợp lệ cho biểu thức switch (nguyên/ký tự), vai trò của `break`, và hiệu ứng "fall-through" khi bỏ sót `break`.
  - Làm chủ các cấu trúc lặp: vòng lặp `for` (lặp xác định), vòng lặp `while` (tiền kiểm tra), vòng lặp `do-while` (hậu kiểm tra, luôn thực thi ít nhất 1 lần).
  - Điều khiển luồng lặp: `break` (ngắt vòng lặp gần nhất), `continue` (bỏ qua lần lặp hiện hành), lệnh nhảy vô điều kiện `goto` và nhãn (label).
  - Xử lý thành thạo vòng lặp lồng nhau (Nested loops) và kỹ thuật thiết kế thuật toán vẽ hình, duyệt ma trận, kiểm tra số nguyên tố, số hoàn hảo.

- **Danh mục tiểu mục kiến thức**:
  - `3.1.` Cấu trúc rẽ nhánh điều kiện:
    - 3.1.1. Câu lệnh `if` khuyết và sơ đồ lưu đồ giải thuật tương ứng.
    - 3.1.2. Câu lệnh `if-else` hai nhánh và cấu trúc lồng nhau (Dangling else problem).
    - 3.1.3. Cấu trúc chuỗi bậc thang `else if` cho bài toán xếp loại, phân loại vùng giá trị.
  - `3.2.` Cấu trúc lựa chọn đa giá trị `switch-case`:
    - 3.2.1. Cú pháp và nguyên lý hoạt động của `switch (biểu_thức_nguyên)`.
    - 3.2.2. Nhãn `case` hằng số nguyên/ký tự và nhãn `default`.
    - 3.2.3. Cơ chế trượt nhánh (Fall-through) khi không có lệnh `break` và ứng dụng gộp nhiều case.
  - `3.3.` Cấu trúc vòng lặp xác định `for`:
    - 3.3.1. Cú pháp `for (khởi_tạo; điều_kiện; bước_nhảy)` và chu trình 4 bước thực thi.
    - 3.3.2. Vòng lặp `for` khuyết các biểu thức, vòng lặp vô tận `for (;;)`.
  - `3.4.` Cấu trúc vòng lặp tiền kiểm tra `while`:
    - 3.4.1. Cú pháp và sơ đồ khối hoạt động; Trường hợp thân vòng lặp không chạy lần nào.
    - 3.4.2. Vòng lặp vô tận `while (1)` và các điều kiện thoát động.
  - `3.5.` Cấu trúc vòng lặp hậu kiểm tra `do-while`:
    - 3.5.1. Cú pháp `do { ... } while (điều_kiện);` (lưu ý dấu chấm phẩy ở cuối).
    - 3.5.2. Ứng dụng kinh điển: Vòng lặp kiểm tra tính hợp lệ của dữ liệu nhập (Validation loop).
  - `3.6.` Các lệnh điều khiển luồng bổ trợ:
    - 3.6.1. Lệnh `break`: Phạm vi tác dụng ngắt cấu trúc lặp hoặc `switch` gần nhất.
    - 3.6.2. Lệnh `continue`: Điểm khác biệt trong chu trình lặp của `for` (nhảy tới bước nhảy) vs `while`/`do-while` (nhảy tới kiểm tra điều kiện).
    - 3.6.3. Lệnh `goto` và nhãn: Cú pháp, các nguy cơ gây code spaghetti và trường hợp sử dụng hợp lệ duy nhất (thoát khỏi nhiều vòng lặp lồng nhau).
  - `3.7.` Vòng lặp lồng nhau (Nested Loops) và bài toán in ma trận, hình sao, tính tích phân xấp xỉ, kiểm tra số nguyên tố/hoàn hảo.

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 3: Các cấu trúc phân nhánh và vòng lặp (mục 3.1 – 3.3; bài tập p.188-210) | Trang 125 – 210 | PDF P125 – P210 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 2 (Rẽ nhánh p.47-70) & Chương 3 (Vòng lặp p.71-92) | Trang 47 – 92 | PDF P50 – P95 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Đặt dấu chấm phẩy ngay sau biểu thức điều kiện `if (a > b); a = b;` khiến khối lệnh phía sau luôn thực thi dù điều kiện đúng hay sai.
  - Bỏ quên lệnh `break` trong các nhánh `case` của lệnh `switch`, dẫn đến chạy liên tiếp các case phía dưới ngoài ý muốn.
  - Biểu thức trong `switch(x)` phải có kiểu số nguyên (`int`, `char`, `enum`), dùng kiểu số thực (`float`, `double`) hoặc chuỗi là lỗi biên dịch.
  - Vấn đề dangling else: `else` luôn gắn với `if` gần nó nhất chưa có `else`, trừ khi dùng cặp ngoặc nhọn `{}` để gom khối tường minh.
  - Lặp vô tận do quên cập nhật biến điều khiển vòng lặp trong thân lệnh `while` (quên `i++`).
  - Sự khác biệt giữa `continue` trong `while` (nếu đặt trước lệnh tăng chỉ số sẽ gây lặp vô tận) và `continue` trong `for` (luôn thực thi biểu thức bước nhảy).

---

#### CHƯƠNG 4: HÀM, PHẠM VI BIẾN & ĐỆ QUY

- **Mục tiêu sư phạm**:
  - Nắm vững phương pháp thiết kế chương trình theo mô-đun (Modular Programming).
  - Nắm vững cú pháp định nghĩa hàm, nguyên mẫu hàm (Function Prototype), danh sách tham số hình thức (Parameters) và đối số thực tế (Arguments).
  - Phân biệt sâu sắc hai cơ chế truyền tham số: Truyền giá trị (Pass-by-value) và Mô phỏng truyền tham chiếu bằng địa chỉ con trỏ (Pass-by-pointer/address).
  - Phân biệt phạm vi biến (Scope: cục bộ Local, toàn cục Global) và thời gian sống (Lifetime / Storage duration: `auto`, `static`).
  - Làm chủ cơ chế Đệ quy (Recursion): Điều kiện cơ sở (Base case), bước đệ quy (Recursive step), khung ngăn xếp cuộc gọi (Call Stack Frame), và phòng tránh tràn ngăn xếp (Stack Overflow).
  - Sử dụng thành thạo các hàm toán học trong `<math.h>` và sinh số ngẫu nhiên trong `<stdlib.h>`.

- **Danh mục tiểu mục kiến thức**:
  - `4.1.` Khái niệm và cấu trúc của Hàm:
    - 4.1.1. Cú pháp định nghĩa hàm: `kiểu_trả_về tên_hàm(danh_sách_tham_số) { thân_hàm }`.
    - 4.1.2. Lệnh `return`: Trả về giá trị và kết thúc hàm; Hàm kiểu `void`.
    - 4.1.3. Khai báo nguyên mẫu hàm (Function Prototype): Vai trò báo hiệu cho trình biên dịch và vị trí khai báo trong file mã nguồn.
  - `4.2.` Cơ chế truyền tham số cho hàm:
    - 4.2.1. Truyền theo giá trị (Call-by-value): Bản sao độc lập của đối số, biến gốc bên ngoài không bị thay đổi.
    - 4.2.2. Mô phỏng truyền theo tham chiếu (Call-by-pointer/address): Truyền địa chỉ bộ nhớ `&var`, hàm nhận bằng con trỏ `*ptr` để biến đổi trực tiếp giá trị gốc (ví dụ kinh điển hàm `swap(int *a, int *b)`).
    - 4.2.3. Truyền mảng một chiều và mảng hai chiều vào hàm (bản chất luôn là truyền địa chỉ phần tử đầu tiên).
  - `4.3.` Phạm vi biến (Scope) và Thời gian sống (Lifetime):
    - 4.3.1. Biến cục bộ (Local / Automatic): Khởi tạo trong khối lệnh, tự hủy khi thoát khối.
    - 4.3.2. Biến toàn cục (Global): Khởi tạo ngoài mọi hàm, tồn tại suốt vòng đời chương trình, các hệ quả về ô nhiễm vùng nhớ.
    - 4.3.3. Từ khóa lưu trữ `static`: Biến tĩnh cục bộ duy trì giá trị qua các lần gọi hàm liên tiếp; Biến toàn cục tĩnh giới hạn phạm vi trong một file.
  - `4.4.` Đệ quy (Recursion):
    - 4.4.1. Khái niệm hàm tự gọi chính nó; Điều kiện dừng (Base case) và bước đệ quy (Recursive step).
    - 4.4.2. Cơ chế Call Stack: Khung ngăn xếp (Stack Frame), biến cục bộ, địa chỉ trả về; Nguy cơ tràn ngăn xếp (Stack Overflow).
    - 4.4.3. Đệ quy trực tiếp vs Đệ quy gián tiếp; So sánh hiệu năng và bộ nhớ giữa Đệ quy và Vòng lặp.
    - 4.4.4. Các bài toán đệ quy kinh điển: Giai thừa ($n!$), Dãy số Fibonacci, Ước chung lớn nhất (Euclid GCD), Bài toán Tháp Hà Nội (Tower of Hanoi).
  - `4.5.` Thư viện hàm chuẩn C:
    - 4.5.1. Thư viện toán học `<math.h>` (lưu ý cờ `-lm` khi biên dịch trên Linux/GCC).
    - 4.5.2. Thư viện tiện ích `<stdlib.h>`: Sinh số ngẫu nhiên `rand()`, `srand(time(NULL))`, chuyển đổi chuỗi số (`atoi`, `atof`).

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 4: Hàm (mục 4.1 – 4.2; bài tập p.259-274) | Trang 211 – 274 | PDF P211 – P274 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 6: Hàm (mục 6.1 – 6.7; bài tập p.156-158) | Trang 136 – 158 | PDF P139 – P161 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Không hoán vị được biến khi viết hàm `swap(int a, int b)` do truyền theo giá trị (Pass-by-value); bắt buộc phải viết `swap(int *a, int *b)`.
  - Hàm có kiểu trả về khác `void` nhưng thiếu lệnh `return` ở một số nhánh điều kiện, dẫn đến giá trị trả về rác (Garbage value).
  - Gọi hàm trước khi định nghĩa mà không có khai báo prototype, gây lỗi hoặc cảnh báo `implicit declaration of function`.
  - Đệ quy thiếu điều kiện dừng hoặc điều kiện dừng không bao giờ đạt tới dẫn đến đệ quy vô tận và sập chương trình do `Stack Overflow`.
  - Biến cục bộ che khuất (Shadowing) biến toàn cục trùng tên.
  - Nhầm lẫn về thời điểm khởi tạo biến `static`: Biến tĩnh chỉ được khởi tạo đúng một lần duy nhất lúc bắt đầu chương trình, các lần gọi hàm sau giữ nguyên giá trị đã thay đổi trước đó.

---

#### CHƯƠNG 5: MẢNG (1D, 2D) & CHUỖI KÝ TỰ (STRINGS)

- **Mục tiêu sư phạm**:
  - Nắm vững cấu trúc mảng một chiều: Tính chất lưu trữ liên tục (Contiguous memory) trong RAM, chỉ số mảng từ 0 đến N-1.
  - Nhận diện và phòng tránh lỗi nguy hiểm nhất trong lập trình C: Vượt biên mảng (Buffer Overflow / Array Index Out-of-Bounds).
  - Cài đặt thành thạo các thuật toán mảng cơ bản: Duyệt mảng, tìm Max/Min, tính tổng/trung bình, Linear Search, Binary Search, Bubble Sort, Selection Sort, Insertion Sort, chèn và xóa phần tử.
  - Làm chủ mảng hai chiều (Ma trận): Cấu trúc bộ nhớ theo thứ tự hàng ưu tiên (Row-Major Order), duyệt ma trận bằng 2 vòng lặp lồng nhau, thao tác trên ma trận vuông (đường chéo chính, đường chéo phụ, chuyển vị, nhân hai ma trận).
  - Hiểu bản chất chuỗi ký tự trong C: Chuỗi là mảng ký tự `char[]` kết thúc bằng ký tự rỗng (Null character `\0` có mã ASCII = 0).
  - Thành thạo nhập xuất chuỗi an toàn (`fgets` thay cho `gets`), các hàm phân tích ký tự trong `<ctype.h>`, và trọn bộ các hàm xử lý chuỗi trong `<string.h>` (`strlen`, `strcpy`, `strncpy`, `strcat`, `strcmp`, `strncmp`, `strchr`, `strstr`, `strtok`).

- **Danh mục tiểu mục kiến thức**:
  - `5.1.` Mảng một chiều (1D Array):
    - 5.1.1. Khai báo `kiểu tên_mảng[kích_thước];`, cấu trúc bộ nhớ tĩnh liên tục.
    - 5.1.2. Khởi tạo mảng: Khởi tạo toàn bộ, khởi tạo một phần (`int a[10] = {0};`), khởi tạo tự suy diễn kích thước.
    - 5.1.3. Truy xuất phần tử mảng qua chỉ số `a[i]`; Hậu quả khi truy cập ngoài biên `a[N]`.
    - 5.1.4. Các thuật toán nền tảng: Max/Min, tính tổng, cờ hiệu (Flag), đếm tần suất, tìm kiếm tuần tự và nhị phân, thuật toán sắp xếp (Bubble, Selection, Insertion), chèn/xóa phần tử.
  - `5.2.` Mảng hai chiều (2D Array / Ma trận):
    - 5.2.1. Khai báo `kiểu tên_mảng[hàng][cột];` và cấu trúc bộ nhớ Row-major.
    - 5.2.2. Khởi tạo và kỹ thuật duyệt ma trận bằng 2 vòng lặp lồng nhau.
    - 5.2.3. Các bài toán ma trận kinh điển: Tổng từng hàng/cột, xử lý đường chéo chính/phụ ma trận vuông, cộng và nhân hai ma trận, ma trận chuyển vị.
  - `5.3.` Chuỗi ký tự (C-Strings):
    - 5.3.1. Bản chất mảng ký tự và ký tự kết thúc chuỗi `\0` (Null terminator).
    - 5.3.2. Khai báo và khởi tạo chuỗi: Kích thước mảng tối thiểu phải là $N + 1$ để chứa `\0`.
    - 5.3.3. Nhập xuất chuỗi: Cảnh báo nguy hiểm từ hàm `gets()` (bị loại bỏ khỏi chuẩn C11 do lỗi tràn bộ đệm); Sử dụng an toàn với `fgets(str, sizeof(str), stdin)` và cách khử `\n`; Nhập chuỗi bằng `scanf("%s", str)` và xuất chuỗi với `printf`/`puts`.
    - 5.3.4. Thư viện phân loại ký tự `<ctype.h>`: `isalpha()`, `isdigit()`, `isalnum()`, `isspace()`, `toupper()`, `tolower()`.
    - 5.3.5. Bộ hàm thư viện thao tác chuỗi `<string.h>`: `strlen`, `strcpy`, `strncpy`, `strcat`, `strncat`, `strcmp`, `strncmp`, `strchr`, `strstr`, `strtok`.
    - 5.3.6. Các thuật toán xử lý chuỗi: Đảo ngược chuỗi, kiểm tra chuỗi đối xứng (Palindrome), chuẩn hóa khoảng trắng và viết hoa chữ cái đầu họ tên.

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 5 (mục 5.1: Mảng 1D, 2D p.275-314; mục 5.3: Chuỗi ký tự p.334-371; bài tập p.372-420) | Trang 275 – 314; 334 – 420 | PDF P275 – P314; P334 – P420 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 4: Mảng và Chuỗi (toàn bộ mục 4.1 – 4.2; bài tập p.115-120) | Trang 93 – 120 | PDF P96 – P123 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Khai báo mảng chuỗi không đủ kích thước cho ký tự `\0` (ví dụ: `char s[5] = "Hello";` gây lỗi biên dịch hoặc tràn ô nhớ vì "Hello" cần đúng 6 bytes).
  - Gán trực tiếp hai chuỗi bằng toán tử gán `=`: `char s1[10]; s1 = "Hello";` là sai hoàn toàn vì `s1` là hằng con trỏ; bắt buộc phải dùng `strcpy(s1, "Hello");`.
  - So sánh chuỗi bằng toán tử `==`: Biểu thức `if (str1 == str2)` là so sánh địa chỉ bộ nhớ chứ không so sánh nội dung; bắt buộc dùng `if (strcmp(str1, str2) == 0)`.
  - Nhầm lẫn giữa hàm `sizeof(s)` (kích thước mảng khai báo) và `strlen(s)` (số lượng ký tự thực tế đến trước `\0`).
  - Lỗi vượt biên khi duyệt mảng: Vòng lặp so sánh `for (i = 0; i < n; i++)` nhưng kiểm tra `a[i] > a[i+1]` dẫn đến truy cập phần tử ngoài mảng `a[n]`.
  - Khai báo tham số hàm mảng 2 chiều thiếu kích thước cột: `void func(int a[][])` là sai cú pháp; chuẩn mực phải là `void func(int a[][COL_SIZE], int rows)`.

---

#### CHƯƠNG 6: CON TRỎ (POINTERS) & QUẢN LÝ BỘ NHỚ ĐỘNG

- **Mục tiêu sư phạm**:
  - Hiểu tường minh bản chất vật lý của bộ nhớ máy tính: Ô nhớ, byte và Địa chỉ ô nhớ (Memory Address).
  - Nắm vững khái niệm Biến con trỏ (Pointer Variable): Biến đặc biệt chứa địa chỉ ô nhớ của biến khác.
  - Phân biệt triệt để hai toán tử hạt nhân: Toán tử lấy địa chỉ `&` (Address-of) và Toán tử giải tham chiếu / truy xuất nội dung `*` (Dereference).
  - Hiểu rõ khái niệm con trỏ `NULL`, hiểm họa của con trỏ chưa khởi tạo (Wild pointer / Dangling pointer).
  - Làm chủ Số học con trỏ (Pointer Arithmetic): Phép cộng/trừ con trỏ với số nguyên (bước nhảy = $n \times \text{sizeof}(\text{kiểu})$), phép trừ hai con trỏ cùng kiểu.
  - Hiểu mối quan hệ mật thiết giữa Con trỏ và Mảng: Tên mảng là một hằng con trỏ trỏ tới phần tử thứ 0; Biểu thức `*(a + i)` đồng nhất hoàn toàn với `a[i]`.
  - Nắm vững con trỏ bậc hai (Pointer-to-pointer `**ptr`) và Nhập môn Con trỏ hàm (Function Pointer).
  - Làm chủ Quản lý bộ nhớ động trên vùng nhớ Heap: Các hàm cấp phát trong `<stdlib.h>` (`malloc`, `calloc`, `realloc`), nguyên tắc giải phóng ô nhớ bắt buộc bằng `free()`, kiểm tra con trỏ sau cấp phát (`ptr == NULL`), và phòng tránh hiện tượng Rò rỉ bộ nhớ (Memory Leak).

- **Danh mục tiểu mục kiến thức**:
  - `6.1.` Khái niệm nền tảng về Con trỏ và Địa chỉ ô nhớ:
    - 6.1.1. Cấu trúc địa chỉ vùng nhớ RAM (định dạng Hexadecimal `%p`); Kích thước con trỏ (4 bytes trên 32-bit, 8 bytes trên 64-bit).
    - 6.1.2. Khai báo con trỏ: `kiểu_dữ_liệu *tên_con_trỏ;` và bẫy khai báo nhiều con trỏ trên một dòng (`int* p1, p2;` thì `p2` chỉ là biến `int` thường).
    - 6.1.3. Khởi tạo con trỏ: Gán địa chỉ `p = &x;`, con trỏ `NULL` trong `<stddef.h>`, con trỏ vô kiểu `void*`.
    - 6.1.4. Toán tử giải tham chiếu `*p`: Đọc và ghi dữ liệu trực tiếp vào ô nhớ đích.
  - `6.2.` Số học con trỏ (Pointer Arithmetic):
    - 6.2.1. Phép toán `p + n`, `p - n`: Bước nhảy địa chỉ thực tế = $n \times \text{sizeof}(\text{kiểu})$.
    - 6.2.2. Phép toán `p++`, `p--` và sự khác biệt giữa `*p++`, `(*p)++`, `*++p`, `++*p`.
    - 6.2.3. Phép trừ hai con trỏ cùng kiểu (`p1 - p2`): Khoảng cách số lượng phần tử giữa hai con trỏ.
    - 6.2.4. So sánh hai con trỏ (`==`, `!=`, `<`, `>`): Điều kiện hai con trỏ trỏ cùng vào một mảng.
  - `6.3.` Mối quan hệ giữa Con trỏ và Mảng:
    - 6.3.1. Đồng nhất giữa tên mảng và con trỏ hằng (`a` tương đương `&a[0]`).
    - 6.3.2. Chuyển đổi qua lại giữa cú pháp chỉ số và con trỏ: `a[i] \Leftrightarrow *(a + i)` và `&a[i] \Leftrightarrow (a + i)`.
    - 6.3.3. Duyệt mảng bằng con trỏ để tăng tối đa tốc độ thực thi.
    - 6.3.4. Mảng các con trỏ (Array of Pointers) và ứng dụng lưu danh sách chuỗi ký tự.
  - `6.4.` Con trỏ bậc cao và Con trỏ hàm:
    - 6.4.1. Con trỏ trỏ tới con trỏ (Pointer-to-pointer `**pp`): Khái niệm, sơ đồ ô nhớ, ứng dụng trong việc thay đổi con trỏ qua lời gọi hàm.
    - 6.4.2. Con trỏ hàm (Function Pointer): Cú pháp khai báo `kiểu (*tên_ptr)(danh_sách_tham_số);`, gán hàm và gọi hàm gián tiếp, ứng dụng làm hàm Callback (ví dụ `qsort()` trong `<stdlib.h>`).
  - `6.5.` Quản lý Bộ nhớ Động (Dynamic Memory Allocation):
    - 6.5.1. Phân vùng nhớ của chương trình: Text/Code segment, Data segment, BSS, Stack (biến cục bộ), Heap (bộ nhớ động).
    - 6.5.2. Hàm `malloc(size_t size)`: Cấp phát số bytes liên tục, giữ nguyên dữ liệu rác ban đầu.
    - 6.5.3. Hàm `calloc(size_t num, size_t size)`: Cấp phát mảng phần tử và tự động gán toàn bộ bit về 0.
    - 6.5.4. Quy tắc bắt buộc: Kiểm tra lỗi cấp phát thất bại (`if (ptr == NULL)`).
    - 6.5.5. Hàm `realloc(void *ptr, size_t new_size)`: Thay đổi kích thước khối nhớ đã cấp phát và xử lý an toàn khi con trỏ dời vị trí.
    - 6.5.6. Hàm `free(void *ptr)`: Giải phóng bộ nhớ trả lại cho hệ điều hành, quy tắc gán `ptr = NULL` ngay sau khi `free` để triệt tiêu Dangling Pointer.
    - 6.5.7. Phân tích hiện tượng Rò rỉ bộ nhớ (Memory Leak) và lỗi giải phóng hai lần (Double Free).
    - 6.5.8. Kỹ thuật cấp phát động ma trận 2 chiều (Mảng các con trỏ trỏ tới các hàng) và quy trình giải phóng bộ nhớ 2 vòng lặp.

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 5 (mục 5.2: Con trỏ & Quản lý bộ nhớ động p.314-334; bài tập p.372-420) | Trang 314 – 334; 372 – 420 | PDF P314 – P334; P372 – P420 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 5: Con trỏ (toàn bộ mục 5.1 – 5.4; bài tập p.134-135) | Trang 121 – 135 | PDF P124 – P138 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Sử dụng con trỏ hoang dã (Uninitialized pointer / Wild pointer): Khai báo `int *p;` rồi gán ngay `*p = 100;` khiến chương trình ghi đè vào địa chỉ ngẫu nhiên gây sập hệ thống.
  - Bẫy thứ tự toán tử giải tham chiếu và tăng giảm: `*p++` (tăng địa chỉ con trỏ `p`, trả về giá trị cũ) khác hoàn toàn `(*p)++` (tăng giá trị của ô nhớ mà `p` trỏ tới).
  - Lỗi rò rỉ bộ nhớ (Memory leak): Cấp phát `p = malloc(...)` nhưng thoát hàm mà không gọi `free(p)`, hoặc gán `p = p_khac` làm mất hoàn toàn địa chỉ khối nhớ cũ trên Heap.
  - Sử dụng vùng nhớ sau khi đã giải phóng (Use-after-free): Gọi `free(p)` nhưng sau đó vẫn đọc/ghi qua `*p`.
  - Lỗi gán con trỏ hằng của mảng: Tên mảng `a` là một hằng con trỏ, phép gán `a = p;` hoặc `a++` là lỗi biên dịch nghiêm trọng.
  - Quên ép kiểu hoặc tính sai kích thước trong `malloc`: Viết `malloc(n)` thay vì `malloc(n * sizeof(int))` dẫn đến cấp phát thiếu kích thước bộ nhớ.

---

#### CHƯƠNG 7: KIỂU DỮ LIỆU TỰ ĐỊNH NGHĨA (STRUCT, UNION, ENUM, TYPEDEF)

- **Mục tiêu sư phạm**:
  - Hiểu nhu cầu gom cụm các trường dữ liệu thuộc các kiểu khác nhau để mô hình hóa các thực thể thực tế (Sinh viên, Phân số, Tọa độ, Sản phẩm).
  - Nắm vững cú pháp định nghĩa kiểu cấu trúc (`struct`), khai báo biến cấu trúc, toán tử chấm (`.`) truy xuất thành phần, và khởi tạo dữ liệu cho cấu trúc.
  - Sử dụng từ khóa `typedef` để tạo bí danh cho kiểu dữ liệu, giúp mã nguồn tường minh và dễ bảo trì.
  - Nắm vững cấu trúc lồng nhau (Nested structures) và kỹ thuật thiết kế cấu trúc dữ liệu mô-đun.
  - Thành thạo Mảng các cấu trúc (Array of Structures) và các thao tác quản lý danh sách: Nhập, xuất, tìm kiếm theo tên/mã, sắp xếp theo điểm/giá.
  - Phân biệt sâu sắc giữa Con trỏ cấu trúc (`ptr->member`) và Biến cấu trúc thường (`var.member`); Cơ chế truyền cấu trúc vào hàm: Truyền giá trị (sao chép toàn bộ struct gây tốn bộ nhớ) vs Truyền con trỏ hằng `const StructType *` (tối ưu hóa hiệu năng và bảo vệ dữ liệu).
  - Hiểu bản chất và ứng dụng của Kiểu hợp (`union`): Cơ chế chia sẻ cùng một vùng ô nhớ giữa các thành viên, kích thước `sizeof(union)` bằng kích thước trường lớn nhất.
  - Sử dụng Kiểu liệt kê (`enum`): Định nghĩa tập hợp các hằng số nguyên có tên đại diện, tự động tăng giá trị, ứng dụng định nghĩa trạng thái, mã lỗi.

- **Danh mục tiểu mục kiến thức**:
  - `7.1.` Kiểu Cấu trúc (Struct):
    - 7.1.1. Cú pháp định nghĩa cấu trúc: `struct TenStruct { kieu thanh_vien_1; kieu thanh_vien_2; };`.
    - 7.1.2. Khai báo biến cấu trúc và khởi tạo danh sách giá trị `{...}`.
    - 7.1.3. Định nghĩa bí danh kiểu dữ liệu với từ khóa `typedef` (`typedef struct { ... } SinhVien;`).
    - 7.1.4. Toán tử truy xuất thành phần dấu chấm (`.`): Đọc và ghi dữ liệu thành phần.
    - 7.1.5. Phép gán giữa hai biến cùng kiểu cấu trúc: Cơ chế sao chép bit-by-bit (Shallow copy) và lưu ý đối với trường là con trỏ.
  - `7.2.` Cấu trúc lồng nhau (Nested Structures):
    - 7.2.1. Định nghĩa cấu trúc con bên ngoài và sử dụng làm thành phần của cấu trúc cha (ví dụ `NgaySinh` nằm trong `SinhVien`).
    - 7.2.2. Truy xuất thành phần lồng nhau qua chuỗi toán tử chấm liên hoàn (`sv.ngaySinh.nam`).
  - `7.3.` Mảng các cấu trúc (Array of Structures):
    - 7.3.1. Cú pháp khai báo `SinhVien ds[100];` và sơ đồ bố trí ô nhớ liên tiếp.
    - 7.3.2. Thuật toán quản lý danh sách: Nhập danh sách, xuất bảng dữ liệu chuẩn hóa, tìm kiếm sinh viên theo mã SV, lọc sinh viên theo điểm chuẩn, sắp xếp danh sách theo thứ tự GPA giảm dần.
  - `7.4.` Cấu trúc và Con trỏ:
    - 7.4.1. Khai báo con trỏ cấu trúc `SinhVien *p = &sv;`.
    - 7.4.2. Toán tử mũi tên (`->`): Cú pháp `p->hoTen` tương đương hoàn toàn với `(*p).hoTen`.
    - 7.4.3. Cấp phát bộ nhớ động cho biến cấu trúc và mảng cấu trúc trên Heap bằng `malloc(n * sizeof(SinhVien))`.
  - `7.5.` Cấu trúc và Hàm:
    - 7.5.1. Truyền biến cấu trúc theo giá trị (Pass-by-value): Khung Call Stack sao chép toàn bộ dung lượng struct, không làm thay đổi biến gốc.
    - 7.5.2. Truyền con trỏ cấu trúc (Pass-by-pointer): Tiết kiệm thời gian sao chép bộ nhớ; Kỹ thuật dùng bổ từ `const` khi chỉ đọc dữ liệu (`void inSinhVien(const SinhVien *sv)`).
    - 7.5.3. Hàm trả về giá trị kiểu cấu trúc.
  - `7.6.` Kiểu Hợp (Union):
    - 7.6.1. Cú pháp định nghĩa `union TenUnion { ... };`.
    - 7.6.2. Cơ chế vùng nhớ dùng chung (Overlapping memory): Tất cả thành viên bắt đầu tại cùng một địa chỉ byte; Kích thước `sizeof` bằng thành viên lớn nhất.
    - 7.6.3. Nguyên tắc hoạt động: Chỉ lưu trữ giá trị hợp lệ của một thành viên duy nhất tại một thời điểm; Ứng dụng trong lập trình nhúng, xử lý gói tin mạng (Packet IP header), và tiết kiệm RAM.
  - `7.7.` Kiểu Liệt kê (Enumeration - Enum):
    - 7.7.1. Cú pháp định nghĩa `enum TenEnum { GIA_TRI_0, GIA_TRI_1, ... };`.
    - 7.7.2. Quy tắc đánh số tự động từ 0 và kỹ thuật gán giá trị tùy biến.
    - 7.7.3. Ứng dụng trong việc thay thế các "Magic numbers", định nghĩa trạng thái máy (State Machine), ngày trong tuần, mã lỗi hệ thống.

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 6: Kiểu cấu trúc (mục 6.1 – 6.3; Case Study Quản lý SV p.462-487; bài tập p.488-498) | Trang 421 – 498 | PDF P421 – P498 |
| **Giáo trình 211 trang (HCMUTE)**| Chương 7: Kiểu dữ liệu tự tạo (mục 7.1: Struct; mục 7.2: Union; mục 7.3: Enum; bài tập p.188-194) | Trang 159 – 194 | PDF P162 – P197 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Quên dấu chấm phẩy `;` ở cuối khai báo định nghĩa cấu trúc `struct SinhVien { ... };` làm phát sinh lỗi biên dịch dây chuyền.
  - Nhầm lẫn giữa toán tử chấm `.` và toán tử mũi tên `->`: Dùng `ptr.member` với biến con trỏ là sai cú pháp (phải dùng `ptr->member` hoặc `(*ptr).member`).
  - Bẫy thứ tự ưu tiên khi dùng toán tử giải tham chiếu: Viết `*ptr.member` là sai vì toán tử chấm có độ ưu tiên cao hơn toán tử `*`; bắt buộc phải đóng ngoặc `(*ptr).member`.
  - Nhầm lẫn về kích thước của `struct` do cơ chế đệm căn chỉnh bộ nhớ (Structure Padding / Data Alignment): `sizeof(struct)` thường lớn hơn tổng số bytes rời rạc của các trường.
  - Ghi đè dữ liệu trong `union`: Gán giá trị cho thành viên `float f` sẽ làm hỏng dữ liệu của thành viên `int i` trước đó vì chúng dùng chung một vùng nhớ vật lý.
  - Đổi tên kiểu bằng `typedef`: Nhầm lẫn giữa khai báo biến struct thông thường và định nghĩa tên kiểu mới với `typedef`.

---

#### CHƯƠNG 8: THAO TÁC TỆP TIN (FILE I/O)

- **Mục tiêu sư phạm**:
  - Hiểu bản chất lưu trữ bền vững (Persistent Storage) trên đĩa cứng so với vùng nhớ biến tạm thời trên RAM.
  - Nắm vững khái niệm Dòng dữ liệu (Streams) và con trỏ điều khiển tệp `FILE *` trong `<stdio.h>`.
  - Làm chủ quy trình 3 bước kinh điển khi làm việc với tệp: Mở tệp (`fopen`) $\to$ Kiểm tra lỗi mở tệp $\to$ Thao tác Đọc/Ghi $\to$ Đóng tệp (`fclose`).
  - Phân biệt rạch ròi giữa Tệp văn bản (Text File) và Tệp nhị phân (Binary File) về định dạng lưu trữ, ký tự chuyển dòng, và hiệu năng.
  - Nắm vững các chế độ mở tệp: `"r"`, `"w"`, `"a"`, `"r+"`, `"w+"`, `"a+"` cho tệp văn bản và bổ sung hậu tố `"b"` (`"rb"`, `"wb"`, `"ab"`) cho tệp nhị phân.
  - Thành thạo các hàm đọc/ghi tệp văn bản: Đọc/ghi theo định dạng (`fscanf`, `fprintf`), đọc/ghi ký tự (`fgetc`, `fputc`), đọc/ghi chuỗi dòng (`fgets`, `fputs`).
  - Thành thạo các hàm đọc/ghi tệp nhị phân theo khối cấu trúc ô nhớ: `fread()`, `fwrite()`.
  - Làm chủ kỹ thuật truy cập tệp ngẫu nhiên (Random Access): Di chuyển con trỏ tệp với `fseek()`, xác định vị trí hiện tại với `ftell()`, đặt lại đầu tệp với `rewind()`, và các mốc vị trí `SEEK_SET`, `SEEK_CUR`, `SEEK_END`.
  - Xử lý điều kiện dừng tệp an toàn với `feof()` và hằng số `EOF`.

- **Danh mục tiểu mục kiến thức**:
  - `8.1.` Khái niệm và Quy trình làm việc với Tệp:
    - 8.1.1. Khái niệm tệp, bản chất cấu trúc dữ liệu `FILE` được định nghĩa trong `<stdio.h>`.
    - 8.1.2. Các dòng chuẩn mặc định được hệ điều hành mở sẵn: `stdin` (bàn phím), `stdout` (màn hình), `stderr` (luồng báo lỗi).
    - 8.1.3. Hàm mở tệp `fopen(const char *filename, const char *mode)`: Các chế độ mở tệp và ý nghĩa bảng cờ (`r`, `w`, `a`, `r+`, `w+`, `a+`, `rb`, `wb`, `ab`).
    - 8.1.4. Xử lý lỗi bắt buộc: Kiểm tra con trỏ tệp có giá trị `NULL` khi không tìm thấy file hoặc không có quyền truy cập.
    - 8.1.5. Hàm đóng tệp `fclose(FILE *fp)`: Đẩy dữ liệu từ bộ đệm đĩa (Flush buffer) và giải phóng tài nguyên handle của hệ điều hành.
  - `8.2.` Thao tác trên Tệp văn bản (Text Files):
    - 8.2.1. Đọc/ghi ký tự: `fgetc(fp)` (trả về kiểu `int` để chứa giá trị `EOF = -1`), `fputc(ch, fp)`.
    - 8.2.2. Đọc/ghi chuỗi dòng: `fputs(str, fp)`, `fgets(str, max_len, fp)` (an toàn kiểm soát độ dài và đọc cả ký tự `\n`).
    - 8.2.3. Đọc/ghi có định dạng: `fprintf(fp, format, ...)` và `fscanf(fp, format, ...)`.
    - 8.2.4. Vòng lặp đọc tệp đến cuối tệp chuẩn xác: Sử dụng kết quả trả về của `fscanf(...) != EOF` hoặc `fgets(...) != NULL`.
  - `8.3.` Thao tác trên Tệp nhị phân (Binary Files):
    - 8.3.1. Bản chất dữ liệu nhị phân: Ghi trực tiếp nguyên vẹn các bytes từ RAM xuống đĩa cứng mà không qua chuyển đổi ký tự mã ASCII.
    - 8.3.2. Hàm `fwrite(const void *ptr, size_t size, size_t count, FILE *fp)`: Ghi khối dữ liệu biến, mảng hoặc mảng cấu trúc struct.
    - 8.3.3. Hàm `fread(void *ptr, size_t size, size_t count, FILE *fp)`: Đọc khối dữ liệu từ đĩa trực tiếp vào biến/struct.
    - 8.3.4. Kiểm tra số lượng phần tử thực tế đã đọc/ghi thành công qua giá trị trả về của `fread`/`fwrite`.
  - `8.4.` Truy cập tệp ngẫu nhiên (Random Access File I/O):
    - 8.4.1. Hàm `fseek(FILE *fp, long offset, int origin)`: Di chuyển đầu đọc/ghi; Ba hằng số mốc định vị: `SEEK_SET` (đầu file), `SEEK_CUR` (vị trí hiện hành), `SEEK_END` (cuối file).
    - 8.4.2. Hàm `ftell(FILE *fp)`: Lấy vị trí byte hiện tại của con trỏ tệp; Kỹ thuật đo dung lượng file bằng cách `fseek(fp, 0, SEEK_END)` rồi gọi `ftell(fp)`.
    - 8.4.3. Hàm `rewind(FILE *fp)`: Đưa con trỏ tệp quay về vị trí byte đầu tiên ($0$).
  - `8.5.` Kiểm soát lỗi và trạng thái tệp:
    - 8.5.1. Hàm `feof(FILE *fp)`: Kiểm tra cờ hết tệp (chỉ kích hoạt sau khi đã thực hiện một thao tác đọc vượt qua mốc EOF).
    - 8.5.2. Hàm `ferror(FILE *fp)` và hàm in thông báo lỗi hệ thống `perror("Lỗi")`.

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Chương 2 (mục 2.1.3: Đọc ghi tệp cơ bản p.102-104) & Chương 7 (toàn bộ mục 7.1 – 7.3; bài tập p.532-554) | Trang 102 – 104; 499 – 554 | PDF P102 – P104; P499 – P554 |
| **Giáo trình 211 trang (HCMUTE)**| Khảo sát bổ trợ: Kiến thức dòng dữ liệu stream & liên kết tiền xử lý Ch 8 | Trang 195 – 206 | PDF P198 – P209 |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Sử dụng sai vòng lặp `while (!feof(fp))`: Cờ EOF chỉ bật lên sau khi một lệnh đọc đã thất bại do đụng cuối tệp. Dùng vòng lặp này sẽ dẫn đến đọc trùng lặp bản ghi cuối cùng thêm 1 lần; Cách viết chuẩn là lặp theo giá trị trả về của `fread`, `fscanf`, hoặc `fgets`.
  - Mở tệp ở chế độ `"w"` khi muốn ghi tiếp: Chế độ `"w"` sẽ xóa sạch toàn bộ nội dung tệp cũ về kích thước 0 bytes; Muốn ghi tiếp vào đuôi tệp phải dùng chế độ `"a"` (Append).
  - Quên kiểm tra `fp == NULL` sau khi gọi `fopen()`: Nếu tệp không tồn tại, con trỏ `fp` là `NULL`, các thao tác đọc/ghi tiếp theo sẽ gây crash tức thì với lỗi Segmentation Fault.
  - Đọc/ghi tệp nhị phân nhưng mở ở chế độ văn bản (thiếu ký tự `"b"` trong mode): Trên hệ điều hành Windows, các ký tự xuống dòng `\r\n` sẽ bị tự động chuyển đổi thành `\n`, làm sai lệch toàn bộ cấu trúc byte nhị phân.
  - Quên gọi `fclose(fp)` sau khi ghi tệp: Dữ liệu vẫn còn kẹt trong bộ đệm RAM (Buffer), nếu chương trình kết thúc bất ngờ hoặc tắt máy dữ liệu sẽ bị mất trắng.

---

#### CHƯƠNG 9: TỔNG HỢP KIẾN THỨC C++ CĂN BẢN & NHẬP MÔN OOP

- **Mục tiêu sư phạm**:
  - Hiểu bước tiến hóa từ ngôn ngữ C lên C++ (Bjarne Stroustrup, 1979 - "C with Classes").
  - Làm chủ hệ thống nhập xuất luồng hướng đối tượng hiện đại thông qua thư viện `<iostream>`, không gian tên `namespace std`, đối tượng `std::cin`, `std::cout`, `std::cerr`, và thao tác xuống dòng `std::endl`.
  - Nắm vững kiểu dữ liệu logic chuẩn `bool` (`true`/`false`) và lớp chuỗi an toàn `std::string` trong `<string>`.
  - Hiểu bản chất đột phá của Biến tham chiếu (Reference Variables `type &ref = var;`): Bí danh ô nhớ, không tạo thêm ô nhớ mới, cơ chế truyền tham chiếu cho hàm (Pass-by-reference) giúp hàm sửa đổi đối số trực tiếp mà cú pháp tự nhiên, không cần dùng con trỏ `*` và `&`.
  - Thành thạo tính năng Nạp chồng hàm (Function Overloading): Nhiều hàm cùng tên nhưng khác nhau về chữ ký hàm (Function Signature: số lượng hoặc kiểu tham số), và cơ chế Tham số mặc định (Default Arguments).
  - Làm chủ toán tử cấp phát và giải phóng bộ nhớ động mới trong C++: `new` và `delete` (cho biến đơn), `new[]` và `delete[]` (cho mảng động), ưu thế an toàn kiểu và tự động gọi Constructor/Destructor so với `malloc`/`free`.
  - Nhập môn Lập trình Hướng đối tượng (Object-Oriented Programming - OOP): Khái niệm Lớp (Class) và Đối tượng (Object), các từ khóa quy định quyền truy xuất (`public`, `private`, `protected`), Hàm khởi tạo (Constructor), Hàm hủy (Destructor), tính Đóng gói (Encapsulation), xây dựng hoàn chỉnh các lớp thực tế (`PhanSo`, `ToaDo`, `SinhVien`).

- **Danh mục tiểu mục kiến thức**:
  - `9.1.` Bước chuyển tiếp từ C sang C++ và Môi trường biên dịch:
    - 9.1.1. Lịch sử C++, tính tương thích ngược với C, chuẩn C++ hiện đại (C++11/C++14/C++17).
    - 9.1.2. Cấu trúc chương trình C++ chuẩn mực: Thư viện `<iostream>`, sử dụng chỉ thị `using namespace std;`.
  - `9.2.` Luồng Nhập/Xuất chuẩn C++:
    - 9.2.1. Xuất dữ liệu với `cout` và toán tử chèn luồng `<<`; Xuống dòng và đẩy bộ đệm với `endl`.
    - 9.2.2. Nhập dữ liệu với `cin` và toán tử trích xuất `>>`.
    - 9.2.3. Nhập chuỗi có khoảng trắng với hàm toàn cục `getline(cin, str)`.
    - 9.2.4. Kiểu dữ liệu logic nguyên thủy `bool` (`true` có giá trị 1, `false` có giá trị 0).
    - 9.2.5. Lớp chuỗi ký tự hiện đại `string`: Khai báo, gán bằng dấu `=`, cộng chuỗi bằng dấu `+`, so sánh trực tiếp bằng `==`, các phương thức `.length()`, `.substr()`.
  - `9.3.` Biến Tham chiếu (References):
    - 9.3.1. Cú pháp khai báo tham chiếu: `kiểu &tên_tham_chiếu = biến_gốc;`.
    - 9.3.2. Bản chất: Tham chiếu là một bí danh (Alias) cho cùng một ô nhớ vật lý của biến gốc; Bắt buộc phải khởi tạo ngay khi khai báo và không thể đổi sang trỏ biến khác.
    - 9.3.3. Truyền tham chiếu vào hàm (Pass-by-reference): Viết hàm `swap(int &a, int &b)` cực kỳ ngắn gọn, trực quan, không cần con trỏ.
    - 9.3.4. Tham chiếu hằng (`const type &`): Tối ưu hóa hiệu năng truyền đối tượng kích thước lớn mà ngăn chặn tuyệt đối việc sửa đổi dữ liệu.
  - `9.4.` Nạp chồng hàm và Tham số mặc định:
    - 9.4.1. Nạp chồng hàm (Function Overloading): Định nghĩa nhiều hàm cùng tên thực hiện các thao tác tương tự cho các kiểu dữ liệu khác nhau (ví dụ: `add(int, int)` và `add(double, double)`).
    - 9.4.2. Quy tắc nhận diện hàm nạp chồng: Khác nhau về số lượng tham số hoặc kiểu tham số; Kiểu trả về không được dùng để phân biệt hàm nạp chồng.
    - 9.4.3. Tham số mặc định (Default Arguments): Khai báo giá trị ngầm định từ phải qua trái trong danh sách tham số.
  - `9.5.` Cấp phát bộ nhớ động hiện đại với `new` và `delete`:
    - 9.5.1. Cấp phát biến đơn: `int *p = new int(10);` và giải phóng `delete p;`.
    - 9.5.2. Cấp phát mảng động: `int *arr = new int[n];` và quy tắc bắt buộc giải phóng bằng `delete[] arr;`.
    - 9.5.3. So sánh ưu điểm vượt trội của `new`/`delete` so với `malloc`/`free` (an toàn kiểu dữ liệu, tự động tính toán kích thước byte, tự động gọi hàm dựng/hàm hủy).
  - `9.6.` Nhập môn Lập trình Hướng đối tượng (OOP):
    - 9.6.1. Khái niệm cốt lõi: Lớp (Class - khuôn mẫu định nghĩa) và Đối tượng (Object - thể hiện cụ thể trong bộ nhớ).
    - 9.6.2. Thuộc tính (Member variables) và Phương thức (Member functions).
    - 9.6.3. Tính đóng gói (Encapsulation) và các quyền truy xuất:
      - `private`: Dữ liệu nội bộ, chỉ phương thức trong lớp mới truy cập được.
      - `public`: Giao diện công khai, cho phép bên ngoài truy cập.
      - `protected`: Phục vụ tính kế thừa sau này.
    - 9.6.4. Các phương thức truy cập: Getter (lấy dữ liệu) và Setter (kiểm tra và gán dữ liệu).
    - 9.6.5. Hàm khởi tạo (Constructor): Cùng tên với lớp, không có kiểu trả về, tự động kích hoạt khi tạo đối tượng; Hàm khởi tạo mặc định và hàm khởi tạo có tham số.
    - 9.6.6. Hàm hủy (Destructor): Bắt đầu bằng dấu ngã `~TenLop()`, tự động kích hoạt khi đối tượng bị tiêu hủy, giải phóng bộ nhớ động bên trong lớp.
    - 9.6.7. Xây dựng lớp mẫu hoàn chỉnh: Lớp `PhanSo` (rút gọn, cộng trừ phân số, xuất chuỗi) và Lớp `SinhVien` (tính điểm trung bình, xếp loại).

- **Bảng ánh xạ số trang tham chiếu kép**:

| Tài liệu Giáo trình | Phạm vi Đề mục / Nội dung | Tọa độ Trang in trên sách | Tọa độ Trang PDF (1-based) |
|---|---|---|---|
| **Giáo trình 591 trang (UTT)** | Giới thiệu tư duy C++ & Lập trình Hướng đối tượng, Trình biên dịch Dev-C++ / GCC | Trang 18; 22; 72 – 82 | PDF P18; P22; P72 – P82 |
| **Giáo trình 211 trang (HCMUTE)**| Khảo sát nền tảng C++ mở rộng, liên kết biên dịch hàm & con trỏ | Trang 20; 27; 121 | PDF P23; P30; P124 |
| **Tài liệu chuẩn hóa C++** | Chuẩn C++ ĐH Sư phạm Kỹ thuật & Chuẩn C++ quốc tế ISO/IEC 14882 | Toàn bộ Chương 9 đặc tả chi tiết | Cầu nối chuẩn mực C $\to$ C++ |

- **Bẫy đề thi & Lỗi cú pháp/logic thường gặp**:
  - Quên giải phóng mảng động bằng cặp ngoặc vuông `delete[] arr;` mà chỉ gọi `delete arr;` dẫn đến chỉ giải phóng phần tử đầu tiên và gây rò rỉ bộ nhớ nghiêm trọng.
  - Tham chiếu chưa được khởi tạo: Khai báo `int &ref;` là lỗi biên dịch tức thì; Tham chiếu bắt buộc phải gắn với một biến cụ thể ngay lúc khai báo.
  - Nạp chồng hàm mơ hồ (Ambiguous call): Định nghĩa hàm nạp chồng có tham số mặc định khiến trình biên dịch không thể phân giải khi gọi hàm không có đối số (ví dụ: `void func(int x = 0);` và `void func();`).
  - Nhầm lẫn giữa khai báo kiểu trả về trong Nạp chồng hàm: Hai hàm chỉ khác nhau về kiểu trả về (ví dụ `int get()` và `double get()`) sẽ báo lỗi biên dịch trùng lặp chữ ký hàm.
  - Để thuộc tính ở chế độ `public` vi phạm nguyên lý đóng gói của OOP; Chuẩn mực là để thuộc tính `private` và cung cấp các hàm getter/setter có kiểm tra ràng buộc logic.
  - Quên dấu chấm phẩy `;` ở cuối khai báo định nghĩa lớp `class MyClass { ... };`.

---

## 3. BẢNG MA TRẬN PHÂN BỔ HỌC LIỆU ĐỊNH LƯỢNG (ASSET ALLOCATION MATRIX)

### 3.1. Bảng Phân bổ Trắc nghiệm (MCQ) 2 Chiều: 4 Dạng bài x 3 Cấp độ khó (270 câu)

Căn cứ theo Requirement R2, toàn bộ ngân hàng câu hỏi trắc nghiệm gồm **270 câu** được phân bổ chính xác theo hai trục độc lập:
1. **Trục 4 Dạng câu hỏi (Question Formats)**:
   - Dạng 1: **Lý thuyết khái niệm** (Chuẩn 40%): 108 / 270 câu (**40.0%**).
   - Dạng 2: **Đoán kết quả hiển thị & Dò vết biến** (Output & Trace, Chuẩn 30%): 81 / 270 câu (**30.0%**).
   - Dạng 3: **Tìm lỗi cú pháp / logic & Gỡ lỗi** (Debug, Chuẩn 20%): 54 / 270 câu (**20.0%**).
   - Dạng 4: **Điền mã khuyết** (Fill-in-the-blank, Chuẩn 10%): 27 / 270 câu (**10.0%**).
2. **Trục 3 Cấp độ khó (Difficulty Levels)**:
   - Cấp độ: **Dễ** (Mức Nhận biết, chuẩn 25%): 67 / 270 câu (**24.8%**).
   - Cấp độ: **Trung bình** (Mức Thông hiểu & Vận dụng thấp, chuẩn 50%): 135 / 270 câu (**50.0%**).
   - Cấp độ: **Khó** (Mức Vận dụng cao & Bẫy tư duy, chuẩn 25%): 68 / 270 câu (**25.2%**).

#### Bảng Ma trận Phân bổ Chi tiết 9 Chương:

| Chương học phần | Tổng MCQ | Dạng 1: Lý thuyết (40%) | Dạng 2: Output & Trace (30%) | Dạng 3: Debug (20%) | Dạng 4: Fill-in (10%) | Mức Dễ (25%) | Mức Trung bình (50%) | Mức Khó (25%) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Chương 1: Tổng quan C & Môi trường** | **25** | 10 | 8 | 5 | 2 | 6 | 13 | 6 |
| **Chương 2: Kiểu dữ liệu & I/O** | **30** | 12 | 9 | 6 | 3 | 7 | 15 | 8 |
| **Chương 3: Rẽ nhánh & Vòng lặp** | **35** | 14 | 11 | 7 | 3 | 9 | 17 | 9 |
| **Chương 4: Hàm & Đệ quy** | **30** | 12 | 9 | 6 | 3 | 8 | 15 | 7 |
| **Chương 5: Mảng & Chuỗi** | **35** | 14 | 10 | 7 | 4 | 9 | 17 | 9 |
| **Chương 6: Con trỏ & Bộ nhớ động** | **35** | 14 | 11 | 7 | 3 | 8 | 18 | 9 |
| **Chương 7: Struct, Union, Enum** | **30** | 12 | 9 | 6 | 3 | 8 | 15 | 7 |
| **Chương 8: Thao tác Tệp tin (File)** | **25** | 10 | 7 | 5 | 3 | 6 | 13 | 6 |
| **Chương 9: C++ Căn bản & OOP** | **25** | 10 | 7 | 5 | 3 | 6 | 12 | 7 |
| **TỔNG CỘNG HỆ THỐNG** | **270** | **108** (40.0%) | **81** (30.0%) | **54** (20.0%) | **27** (10.0%) | **67** (24.8%) | **135** (50.0%) | **68** (25.2%) |

*Xác nhận đối soát toán học*:
- Tổng số câu theo dạng bài: $108 + 81 + 54 + 27 = 270$ câu.
- Tổng số câu theo độ khó: $67 + 135 + 68 = 270$ câu.
- Tổng số câu từng hàng ngang khớp chính xác 100% với cột `Tổng MCQ`.

---

### 3.2. Đặc tả Bộ đề Thi thử Chuẩn 45 câu / 90 phút (Mock Exam Blueprint)

Bộ đề thi thử mô phỏng kỳ thi kết thúc học phần môn *Kỹ thuật lập trình / Ngôn ngữ lập trình C/C++* được thiết kế chuẩn mực với các tham số:
- **Thời lượng làm bài**: **90 phút**.
- **Quy mô đề thi**: **45 câu hỏi trắc nghiệm** (Thời gian trung bình: **2.0 phút / câu** — cho phép sinh viên có đủ thời gian vẽ bảng theo dõi trạng thái biến, con trỏ và ngăn xếp đệ quy ra giấy nháp).
- **Phân bổ tỷ lệ độ khó trong đề**: 11 câu Dễ (~24.4%), 23 câu Trung bình (~51.1%), 11 câu Khó (~24.4%).
- **Phân bổ tỷ lệ dạng câu trong đề**: 18 câu Lý thuyết (40.0%), 14 câu Output/Trace (31.1%), 9 câu Debug (20.0%), 4 câu Fill-in (8.9%).
- **Quy tắc bốc đề ngẫu nhiên (Randomization Rule)**: Khi người dùng bắt đầu thi thử, hệ thống sẽ rút ngẫu nhiên các câu hỏi từ ngân hàng 270 câu theo đúng số lượng và tiêu chí quy định cho từng chương trong bảng dưới đây, đảm bảo mọi đề thi đều có cấu trúc tương đương và bao phủ trọn vẹn 100% 9 chương học phần.

#### Bảng Danh mục Chỉ tiêu Rút câu hỏi Thi thử theo Từng Chương:

| Chương học | Số câu chọn | Dạng Lý thuyết | Dạng Output/Trace | Dạng Debug | Dạng Fill-in | Số câu Dễ | Số câu TB | Số câu Khó | Chủ đề trọng tâm chọn vào đề |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| **Chương 1** | **3 câu** | 1 | 1 | 1 | 0 | 1 | 2 | 0 | Quy trình biên dịch, từ khóa định danh, macro `#define` |
| **Chương 2** | **5 câu** | 2 | 2 | 1 | 0 | 1 | 3 | 1 | Bẫy toán tử bit, tiền tố/hậu tố `++`, định dạng `printf`/`scanf` |
| **Chương 3** | **6 câu** | 2 | 2 | 1 | 1 | 1 | 3 | 2 | Cấu trúc switch fall-through, vòng lặp vô tận, vòng lặp lồng |
| **Chương 4** | **5 câu** | 2 | 1 | 1 | 1 | 1 | 3 | 1 | Lời gọi hàm đệ quy Call Stack, biến `static`, truyền tham trị |
| **Chương 5** | **6 câu** | 2 | 2 | 1 | 1 | 2 | 3 | 1 | Quá biên mảng, hàm chuỗi `strcpy`/`strcmp`, duyệt ma trận |
| **Chương 6** | **6 câu** | 2 | 2 | 1 | 1 | 1 | 3 | 2 | Số học con trỏ `*(p++)`, giải phóng `free`, rò rỉ bộ nhớ Heap |
| **Chương 7** | **5 câu** | 2 | 2 | 1 | 0 | 1 | 3 | 1 | Toán tử mũi tên `->`, chia sẻ ô nhớ `union`, mảng struct |
| **Chương 8** | **4 câu** | 2 | 1 | 1 | 0 | 1 | 2 | 1 | Chế độ mở tệp `fopen`, hàm `fseek`, đọc ghi nhị phân `fread` |
| **Chương 9** | **5 câu** | 3 | 1 | 1 | 0 | 2 | 1 | 2 | Tham chiếu C++, nạp chồng hàm, toán tử `new`/`delete`, class OOP |
| **TỔNG CỘNG** | **45 câu** | **18 câu** (40%) | **14 câu** (31.1%) | **9 câu** (20%) | **4 câu** (8.9%) | **11 câu** (24.4%) | **23 câu** (51.1%) | **11 câu** (24.4%) | **Bao phủ toàn diện 100% 9 chương học phần** |

*Xác nhận đối soát toán học đề thi*:
- Số câu rút từ 9 chương: $3 + 5 + 6 + 5 + 6 + 6 + 5 + 4 + 5 = 45$ câu.
- Dạng câu: $18 + 14 + 9 + 4 = 45$ câu.
- Độ khó: $11 + 23 + 11 = 45$ câu.

---

### 3.3. Ma trận Phân bổ Thẻ Ghi nhớ (Flashcards - 125 thẻ)

Thẻ ghi nhớ (Flashcard) được cấu trúc hai mặt chuyên nghiệp:
- **Mặt trước (Front)**: Khái niệm cốt lõi, từ khóa chuẩn hoặc mẫu cú pháp then chốt.
- **Mặt sau (Back)**: Định nghĩa / quy tắc cô đọng (dưới 50 từ) + Đoạn mã code C/C++ minh họa ngắn (3-6 dòng) làm sáng tỏ ứng dụng thực tế.

#### Bảng Phân bổ Flashcards và Danh mục Khái niệm Cốt lõi:

| Mã Chương | Tên Chương | Số thẻ | Danh mục Chủ đề Thẻ Ghi nhớ Trọng tâm (Front Concept -> Code Highlight) |
|---|---|:---:|---|
| **Chương 1** | Tổng quan C & Môi trường | **12 thẻ** | Cấu trúc tệp C; 4 bước biên dịch (GCC pipeline); 32 từ khóa chuẩn; Quy tắc đặt tên định danh; Chỉ thị `#include <...>` vs `"..."`; Macro `#define` hằng; Macro `#define` có tham số; Quy ước hàm `main()` và mã thoát; Chú thích một dòng và nhiều dòng; Cờ biên dịch `-Wall -Werror`; Lỗi cú pháp vs Lỗi Runtime; IDE vs Compiler. |
| **Chương 2** | Kiểu dữ liệu & I/O | **15 thẻ** | Bảng kích thước byte kiểu nguyên thủy; Bổ từ `signed` vs `unsigned`; Tràn số nguyên (Integer Overflow); Biểu diễn bù 2; Bổ từ `short` và `long`; Ép kiểu ngầm định vs tường minh; Bẫy phép chia nguyên `5 / 2`; Tiền tố `++x` vs Hậu tố `x++`; Toán tử thao tác bit `&`, `|`, `^`, `~`; Toán tử dịch bit `<<`, `>>`; Toán tử điều kiện ba ngôi `?:`; Cơ chế Short-circuit trong `&&` và `||`; Mã định dạng `printf` (`%d`, `%f`, `%p`, `%-10s`); Ký tự escape sequence; Kỹ thuật xóa bộ đệm `while(getchar()!='\n')`. |
| **Chương 3** | Rẽ nhánh & Vòng lặp | **14 thẻ** | Cú pháp `if-else` chuẩn; Lỗi Dangling Else; Bẫy dấu chấm phẩy sau `if`; Biểu thức điều kiện `switch-case`; Vai trò lệnh `break` trong switch; Cơ chế Fall-through có chủ đích; Nhãn `default`; Chu trình 4 bước của vòng lặp `for`; Vòng lặp vô tận `for (;;)` và `while (1)`; Vòng lặp tiền kiểm tra `while`; Vòng lặp hậu kiểm tra `do-while`; Lệnh `break` ngắt vòng lặp; Lệnh `continue` bỏ qua lượt lặp; Lệnh `goto` và nguy cơ mã spaghetti. |
| **Chương 4** | Hàm & Đệ quy | **14 thẻ** | Cú pháp định nghĩa hàm; Khai báo nguyên mẫu hàm (Prototype); Cơ chế truyền tham trị (Pass-by-value); Mô phỏng truyền tham chiếu bằng con trỏ; Phạm vi biến cục bộ (Local scope); Biến toàn cục (Global variable); Biến tĩnh `static` trong hàm; Điều kiện cơ sở của đệ quy (Base case); Bước đệ quy (Recursive step); Ngăn xếp cuộc gọi (Call Stack Frame); Lỗi tràn ngăn xếp (Stack Overflow); Đệ quy đuôi (Tail recursion); Thư viện toán học `<math.h>`; Sinh số ngẫu nhiên `rand()` & `srand()`. |
| **Chương 5** | Mảng & Chuỗi | **16 thẻ** | Khai báo và khởi tạo mảng 1D; Chỉ số mảng từ 0 đến N-1; Lỗi tràn biên mảng (Buffer Overflow); Mảng truyền vào hàm; Thuật toán tìm kiếm tuần tự; Thuật toán tìm kiếm nhị phân; Thuật toán sắp xếp nổi bọt; Khai báo mảng 2D (Ma trận); Thứ tự lưu trữ Row-Major; Đường chéo chính ma trận; Bản chất chuỗi C-String và ký tự `\0`; So sánh `sizeof` vs `strlen`; Nhập chuỗi an toàn với `fgets`; Hàm sao chép chuỗi `strcpy` & `strncpy`; So sánh chuỗi với `strcmp`; Nối chuỗi với `strcat`. |
| **Chương 6** | Con trỏ & Bộ nhớ Động | **16 thẻ** | Khái niệm con trỏ và địa chỉ ô nhớ `%p`; Toán tử lấy địa chỉ `&`; Toán tử giải tham chiếu `*`; Con trỏ `NULL`; Con trỏ chưa khởi tạo (Wild pointer); Số học con trỏ `p + 1`; Phép trừ hai con trỏ; Biểu thức tương đương `*(a + i)` và `a[i]`; Con trỏ bậc 2 `**ptr`; Phân vùng nhớ Stack vs Heap; Hàm `malloc()` cấp phát bộ nhớ; Hàm `calloc()` khởi tạo về 0; Kiểm tra cấp phát `p == NULL`; Hàm mở rộng kích thước `realloc()`; Giải phóng bộ nhớ `free()`; Phòng tránh Dangling pointer (`p = NULL`). |
| **Chương 7** | Struct, Union, Enum | **14 thẻ** | Cú pháp định nghĩa `struct`; Toán tử chấm `.` truy xuất thành phần; Định nghĩa tên kiểu với `typedef`; Cấu trúc lồng nhau (Nested struct); Mảng các cấu trúc; Con trỏ cấu trúc và toán tử mũi tên `->`; Phép gán giữa hai biến struct; Truyền struct vào hàm bằng con trỏ; Khái niệm kiểu hợp `union`; Cơ chế chia sẻ vùng nhớ của `union`; So sánh `sizeof(struct)` vs `sizeof(union)`; Căn chỉnh bộ nhớ (Structure Padding); Cú pháp kiểu liệt kê `enum`; Tự động tăng giá trị của `enum`. |
| **Chương 8** | Thao tác Tệp tin (File) | **12 thẻ** | Cấu trúc con trỏ tệp `FILE *`; Quy trình 3 bước thao tác tệp; Bảng chế độ mở tệp `"r"`, `"w"`, `"a"`; Mở tệp nhị phân `"rb"`, `"wb"`; Kiểm tra mở file thành công `fp == NULL`; Đóng tệp `fclose()` và xả bộ đệm; Đọc ghi định dạng `fprintf` & `fscanf`; Đọc ghi ký tự `fgetc` & `fputc`; Đọc dòng an toàn `fgets` từ file; Đọc ghi nhị phân `fread` & `fwrite`; Di chuyển con trỏ tệp `fseek`; Đo kích thước file với `ftell` & `SEEK_END`. |
| **Chương 9** | C++ Căn bản & OOP | **12 thẻ** | Luồng xuất `cout` và chèn luồng `<<`; Luồng nhập `cin` và trích xuất `>>`; Thao tác xuống dòng `endl`; Biến logic `bool` (`true`/`false`); Lớp chuỗi hiện đại `std::string`; Biến tham chiếu C++ (`&ref`); Truyền tham chiếu cho hàm; Nạp chồng hàm (Function Overloading); Cấp phát động với `new` và `delete`; Giải phóng mảng động `delete[]`; Khái niệm Lớp (Class) và Đối tượng (Object); Quyền truy xuất `private` vs `public` và hàm dựng (Constructor). |
| **TỔNG CỘNG** | **TOÀN BỘ 9 CHƯƠNG** | **125 thẻ** | **Đầy đủ 100% các định nghĩa, quy tắc cú pháp và ví dụ mã nguồn thực tế** |

---

## 4. DANH MỤC BÀI TẬP TỰ LUẬN LẬP TRÌNH (PROGRAMMING ESSAYS CATALOG - 32 BÀI)

Hệ thống bài tập tự luận lập trình gồm **32 bài tập chuyên sâu** (phân bổ từ 3 đến 4 bài cho mỗi chương) được xây dựng bám sát cấu trúc của các bài tập mẫu có lời giải trong giáo trình UTT và HCMUTE. Mỗi bài tập gồm: Mã bài & Tiêu đề, Mức độ khó, Đề bài chi tiết, Input/Output ví dụ, Hướng dẫn thuật toán từng bước, và Khung code giải pháp mẫu chuẩn mực.

---

### CHƯƠNG 1: TỔNG QUAN VỀ NGÔN NGỮ C & MÔI TRƯỜNG LẬP TRÌNH (3 BÀI)

#### Bài tập 1.1: Trình biên dịch Macro Tiền xử lý Đa năng
- **Mã bài**: `PROG-01-01`
- **Mức độ**: Dễ
- **Mô tả đề bài**: Viết chương trình định nghĩa các chỉ thị tiền xử lý macro tính giá trị tuyệt đối `ABS(x)`, tìm giá trị lớn nhất của hai số `MAX(a, b)`, và bình phương của một số `SQUARE(x)`. Nhập vào hai số nguyên `a` và `b` từ bàn phím, in ra kết quả các macro trên. Phân tích bẫy biểu thức khi truyền đối số phức hợp vào `SQUARE(a + 1)`.
- **Input / Output ví dụ**:
  - *Input*: `a = -5, b = 3`
  - *Output*: `ABS(a) = 5, MAX(a, b) = 3, SQUARE(a) = 25, SQUARE(a + 1) an toan = 16`
- **Ràng buộc**: Biến số nguyên 32-bit.
- **Hướng dẫn từng bước**:
  1. Định nghĩa macro bắt buộc phải bao bọc từng tham số và toàn bộ biểu thức trong dấu ngoặc tròn: `#define SQUARE(x) ((x) * (x))` để tránh lỗi độ ưu tiên toán tử.
  2. Viết hàm `main()`, sử dụng `printf` và `scanf` để nhập xuất.
  3. Minh họa việc gọi `SQUARE(a + 1)`: Nếu không có ngoặc, macro mở rộng thành `a + 1 * a + 1` là sai logic.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

#define ABS(x) ((x) < 0 ? -(x) : (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define SQUARE(x) ((x) * (x))

int main(void) {
    int a, b;
    printf("Nhap hai so nguyen a va b: ");
    if (scanf("%d %d", &a, &b) != 2) {
        printf("Loi nhap lieu!\n");
        return 1;
    }
    printf("ABS(a) = %d, ABS(b) = %d\n", ABS(a), ABS(b));
    printf("MAX(a, b) = %d\n", MAX(a, b));
    printf("SQUARE(a) = %d\n", SQUARE(a));
    printf("SQUARE(a + 1) an toan = %d\n", SQUARE(a + 1));
    return 0;
}
```

#### Bài tập 1.2: Chuyển đổi Đơn vị Đo lường và Định dạng Bảng Thông số
- **Mã bài**: `PROG-01-02`
- **Mức độ**: Dễ
- **Mô tả đề bài**: Viết chương trình nhập vào nhiệt độ theo độ Celsius ($^\circ\text{C}$). Tính và hiển thị nhiệt độ tương ứng theo độ Fahrenheit ($^\circ\text{F}$) và Kelvin ($\text{K}$) với công thức: $F = C \times \frac{9}{5} + 32$, $K = C + 273.15$. Định dạng kết quả xuất ra dạng bảng thẳng hàng với độ chính xác 2 chữ số thập phân.
- **Input / Output ví dụ**:
  - *Input*: `Celsius = 100`
  - *Output*: `Celsius: 100.00 C | Fahrenheit: 212.00 F | Kelvin: 373.15 K`
- **Hướng dẫn từng bước**:
  1. Khai báo biến `celsius`, `fahrenheit`, `kelvin` kiểu số thực `double`.
  2. Lưu ý công thức tính Fahrenheit: Phải viết `9.0 / 5.0` để thực hiện phép chia số thực, nếu viết `9 / 5` sẽ bị lấy phần nguyên là $1$.
  3. Định dạng xuất dùng `%-20s %10.2f\n` để căn cột chuyên nghiệp.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

int main(void) {
    double c, f, k;
    printf("Nhap nhiet do (do C): ");
    scanf("%lf", &c);
    f = c * (9.0 / 5.0) + 32.0;
    k = c + 273.15;
    printf("\n------------------------------------\n");
    printf("%-20s %10s\n", "Thang do", "Gia tri");
    printf("------------------------------------\n");
    printf("%-20s %10.2f\n", "Celsius (C)", c);
    printf("%-20s %10.2f\n", "Fahrenheit (F)", f);
    printf("%-20s %10.2f\n", "Kelvin (K)", k);
    printf("------------------------------------\n");
    return 0;
}
```

#### Bài tập 1.3: Thẩm tra Kiểu dữ liệu và Đo lường Kích thước Bộ nhớ Kiến trúc Hệ thống
- **Mã bài**: `PROG-01-03`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình in ra bảng kích thước bộ nhớ (tính theo byte) và miền giá trị cực đại/cực tiểu của tất cả các kiểu dữ liệu nguyên thủy và biến thể trong chuẩn C: `char`, `unsigned char`, `short`, `int`, `unsigned int`, `long`, `long long`, `float`, `double`, `void*` sử dụng toán tử `sizeof` và các hằng số từ `<limits.h>` và `<float.h>`.
- **Hướng dẫn từng bước**:
  1. Thêm các thư viện `<stdio.h>`, `<limits.h>`, `<float.h>`.
  2. Dùng toán tử `sizeof(kiểu)` với định dạng `%zu` để in số byte chuẩn mực.
  3. Sử dụng các hằng `CHAR_MIN`, `CHAR_MAX`, `INT_MIN`, `INT_MAX`, `DBL_MIN`, `DBL_MAX`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <limits.h>
#include <float.h>

int main(void) {
    printf("%-18s %-8s %-25s %-25s\n", "Kieu Du Lieu", "So Byte", "Gia Tri Nho Nhat", "Gia Tri Lon Nhat");
    printf("------------------------------------------------------------------------------------\n");
    printf("%-18s %-8zu %-25d %-25d\n", "char", sizeof(char), CHAR_MIN, CHAR_MAX);
    printf("%-18s %-8zu %-25d %-25d\n", "short", sizeof(short), SHRT_MIN, SHRT_MAX);
    printf("%-18s %-8zu %-25d %-25d\n", "int", sizeof(int), INT_MIN, INT_MAX);
    printf("%-18s %-8zu %-25u %-25u\n", "unsigned int", sizeof(unsigned int), 0, UINT_MAX);
    printf("%-18s %-8zu %-25lld %-25lld\n", "long long", sizeof(long long), LLONG_MIN, LLONG_MAX);
    printf("%-18s %-8zu %-25.2e %-25.2e\n", "float", sizeof(float), FLT_MIN, FLT_MAX);
    printf("%-18s %-8zu %-25.2e %-25.2e\n", "double", sizeof(double), DBL_MIN, DBL_MAX);
    printf("%-18s %-8zu %-25s %-25s\n", "Con tro void*", sizeof(void*), "0x0", "N/A (Phu thuoc RAM)");
    return 0;
}
```

---

### CHƯƠNG 2: CÁC KIỂU DỮ LIỆU CƠ BẢN, BIỂU THỨC & NHẬP/XUẤT CHUẨN (4 BÀI)

#### Bài tập 2.1: Bộ Giải Phương trình Bậc hai Hoàn chỉnh với Xử lý Điểm uốn & Sai số
- **Mã bài**: `PROG-02-01`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình giải phương trình bậc hai: $ax^2 + bx + c = 0$ ($a, b, c \in \mathbb{R}$). Xử lý đầy đủ tất cả các trường hợp suy biến ($a = 0$, $b = 0$, vô nghiệm, vô số nghiệm, nghiệm kép, hai nghiệm phân biệt thực và hai nghiệm phức liên hợp).
- **Input / Output ví dụ**:
  - *Input*: `a = 1, b = -3, c = 2` $\to$ *Output*: `Hai nghiem thuc: x1 = 2.0000, x2 = 1.0000`
  - *Input*: `a = 1, b = 2, c = 5` $\to$ *Output*: `Hai nghiem phuc: x1 = -1.0000 + 2.0000i, x2 = -1.0000 - 2.0000i`
- **Hướng dẫn từng bước**:
  1. Nhập ba hệ số $a, b, c$ dạng số thực `double`.
  2. Nếu $a == 0$: Quy về giải phương trình bậc nhất $bx + c = 0$.
  3. Nếu $a \neq 0$: Tính biệt thức $\Delta = b^2 - 4ac$.
  4. Phân loại $\Delta > 0$, $\Delta == 0$ (dùng sai số epsilon $10^{-9}$), và $\Delta < 0$ (xuất nghiệm ảo dạng $u \pm vi$).
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <math.h>

int main(void) {
    double a, b, c, delta;
    printf("Nhap he so a, b, c: ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3) return 1;

    if (fabs(a) < 1e-9) {
        if (fabs(b) < 1e-9) {
            if (fabs(c) < 1e-9) printf("Phuong trinh vo so nghiem.\n");
            else printf("Phuong trinh vo nghiem.\n");
        } else {
            printf("Phuong trinh bac 1 co nghiem duy nhat: x = %.4f\n", -c / b);
        }
    } else {
        delta = b * b - 4 * a * c;
        if (delta > 1e-9) {
            double x1 = (-b + sqrt(delta)) / (2 * a);
            double x2 = (-b - sqrt(delta)) / (2 * a);
            printf("Hai nghiem thuc phan biet: x1 = %.4f, x2 = %.4f\n", x1, x2);
        } else if (fabs(delta) <= 1e-9) {
            printf("Nghiem kep: x = %.4f\n", -b / (2 * a));
        } else {
            double thuc = -b / (2 * a);
            double ao = sqrt(-delta) / (2 * a);
            printf("Hai nghiem phuc: x1 = %.4f + %.4fi, x2 = %.4f - %.4fi\n", thuc, fabs(ao), thuc, fabs(ao));
        }
    }
    return 0;
}
```

#### Bài tập 2.2: Hộp Công cụ Thao tác Bitwise & Biểu diễn Nhị phân của Số nguyên
- **Mã bài**: `PROG-02-02`
- **Mức độ**: Khó
- **Mô tả đề bài**: Viết chương trình nhập vào một số nguyên không âm $N$ (kiểu `unsigned int`). Thực hiện: (1) In chuỗi biểu diễn nhị phân đủ 32 bit của $N$; (2) Đếm số lượng bit 1 (Popcount / Hamming weight); (3) Đảo ngược thứ tự 32 bit của $N$; (4) Kiểm tra xem $N$ có phải là lũy thừa của 2 hay không chỉ bằng 1 phép toán bitwise duy nhất.
- **Input / Output ví dụ**:
  - *Input*: `N = 18`
  - *Output*: `Nhi phan: 00000000 00000000 00000000 00010010 | So bit 1: 2 | Luy thua cua 2: KHONG`
- **Hướng dẫn từng bước**:
  1. Dùng vòng lặp từ bit 31 giảm về 0: `(N >> i) & 1` để trích xuất từng bit và in ra.
  2. Đếm số bit 1 bằng thuật toán Brian Kernighan: `N = N & (N - 1)` trong mỗi lần lặp.
  3. Kiểm tra lũy thừa của 2: `(N > 0) && ((N & (N - 1)) == 0)`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

void inNhiPhan32Bit(unsigned int n) {
    for (int i = 31; i >= 0; i--) {
        printf("%d", (n >> i) & 1);
        if (i % 8 == 0) printf(" ");
    }
    printf("\n");
}

int demBit1(unsigned int n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}

int main(void) {
    unsigned int n;
    printf("Nhap so nguyen khong am N: ");
    if (scanf("%u", &n) != 1) return 1;
    printf("Bieu dien nhi phan 32 bit: ");
    inNhiPhan32Bit(n);
    printf("So luong bit 1: %d\n", demBit1(n));
    if (n > 0 && (n & (n - 1)) == 0)
        printf("%u la mot luy thua cua 2!\n", n);
    else
        printf("%u KHONG phai la luy thua cua 2.\n", n);
    return 0;
}
```

#### Bài tập 2.3: Phân tích Cú pháp và Định dạng Thời gian với Toán tử Logic & Số học
- **Mã bài**: `PROG-02-03`
- **Mức độ**: Dễ
- **Mô tả đề bài**: Viết chương trình nhập vào một số nguyên dương đại diện cho tổng số giây ($S \ge 0$). Chuyển đổi và in ra màn hình dưới dạng chuẩn `Giờ:Phút:Giây` (`HH:MM:SS`) với độ rộng 2 chữ số có số 0 ở đầu (ví dụ: $3665$ giây $\to$ `01:01:05`).
- **Input / Output ví dụ**:
  - *Input*: `3665` $\to$ *Output*: `01:01:05`
- **Hướng dẫn từng bước**:
  1. Sử dụng phép chia lấy phần nguyên `/` và chia lấy phần dư `%`.
  2. $\text{Giờ} = S / 3600$; $\text{Phút} = (S \% 3600) / 60$; $\text{Giây} = S \% 60$.
  3. Xuất ra màn hình với định dạng `%02d:%02d:%02d`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

int main(void) {
    long long tongGiay;
    printf("Nhap tong so giay: ");
    if (scanf("%lld", &tongGiay) != 1 || tongGiay < 0) {
        printf("Gia tri nhap khong hop le!\n");
        return 1;
    }
    int gio = (int)(tongGiay / 3600);
    int phut = (int)((tongGiay % 3600) / 60);
    int giay = (int)(tongGiay % 60);
    printf("Thoi gian dinh dang chuan: %02d:%02d:%02d\n", gio, phut, giay);
    return 0;
}
```

#### Bài tập 2.4: Nhập Dữ liệu An toàn Đa trường & Cơ chế Xóa Đệm Stdin
- **Mã bài**: `PROG-02-04`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình nhập thông tin cá nhân của một sinh viên gồm: Mã sinh viên (số nguyên), Điểm trung bình (số thực), Ký tự xếp loại (ký tự `char`), và Họ và tên (chuỗi có dấu cách). Xử lý triệt để hiện tượng trôi lệnh khi đọc ký tự và chuỗi sau khi đọc số.
- **Hướng dẫn từng bước**:
  1. Sau khi dùng `scanf("%d")` và `scanf("%f")`, ký tự `\n` còn đọng lại trong `stdin`.
  2. Dùng hàm phụ trợ `xoaBoDem()` chứa `while ((c = getchar()) != '\n' && c != EOF);` trước khi nhập ký tự và chuỗi.
  3. Dùng `fgets()` để đọc họ tên có khoảng trắng an toàn.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <string.h>

void xoaBoDem(void) {
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

int main(void) {
    int mssv;
    float gpa;
    char rank;
    char hoTen[50];

    printf("Nhap MSSV (so nguyen): ");
    scanf("%d", &mssv);
    printf("Nhap GPA (so thuc): ");
    scanf("%f", &gpa);

    xoaBoDem(); // Xoa ky tu enter truoc khi doc ky tu
    printf("Nhap xep loai (A/B/C/D/F): ");
    scanf("%c", &rank);

    xoaBoDem(); // Xoa ky tu enter truoc khi doc chuoi
    printf("Nhap ho va ten sinh vien: ");
    fgets(hoTen, sizeof(hoTen), stdin);
    hoTen[strcspn(hoTen, "\n")] = '\0'; // Loai bo ky tu newline

    printf("\n=== THONG TIN SINH VIEN ===\n");
    printf("MSSV: %d | Ho ten: %s | GPA: %.2f | Xep loai: %c\n", mssv, hoTen, gpa, rank);
    return 0;
}
```

---

### CHƯƠNG 3: CẤU TRÚC ĐIỀU KHIỂN RẼ NHÁNH & VÒNG LẶP (4 BÀI)

#### Bài tập 3.1: Menu Điều khiển Đa năng & Máy tính Bỏ túi với Switch-Case và Validation Loop
- **Mã bài**: `PROG-03-01`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Xây dựng chương trình Menu tương tác tính toán bỏ túi hỗ trợ các phép tính: Cộng, Trừ, Nhân, Chia (kiểm tra chia cho 0), Tính lũy thừa $a^b$, và Thoát chương trình. Sử dụng vòng lặp `do-while` để giữ menu hoạt động liên tục cho đến khi người dùng chọn phím thoát. Kiểm tra tính hợp lệ của lựa chọn.
- **Hướng dẫn từng bước**:
  1. Xây dựng vòng lặp `do-while` bao quanh cấu trúc `switch-case`.
  2. Trong nhánh chia: Kiểm tra `if (fabs(b) < 1e-9)` để cảnh báo lỗi chia cho 0.
  3. Nhánh `default` cảnh báo khi người dùng nhập sai mục chọn.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <math.h>

int main(void) {
    int choice;
    double a, b;
    do {
        printf("\n=== HE THONG MAY TINH BO TUI ===\n");
        printf("1. Phep cong (+)\n2. Phep tru (-)\n3. Phep nhan (*)\n");
        printf("4. Phep chia (/)\n5. Luy thua a^b\n0. Thoat chuong trinh\n");
        printf("Lua chon cua ban: ");
        if (scanf("%d", &choice) != 1) break;

        if (choice >= 1 && choice <= 5) {
            printf("Nhap hai so a va b: ");
            scanf("%lf %lf", &a, &b);
        }

        switch (choice) {
            case 1: printf("Ket qua: %.4f + %.4f = %.4f\n", a, b, a + b); break;
            case 2: printf("Ket qua: %.4f - %.4f = %.4f\n", a, b, a - b); break;
            case 3: printf("Ket qua: %.4f * %.4f = %.4f\n", a, b, a * b); break;
            case 4:
                if (fabs(b) < 1e-9) printf("Loi: Khong the chia cho 0!\n");
                else printf("Ket qua: %.4f / %.4f = %.4f\n", a, b, a / b);
                break;
            case 5: printf("Ket qua: %.4f ^ %.4f = %.4f\n", a, b, pow(a, b)); break;
            case 0: printf("Tam biet va hen gap lai!\n"); break;
            default: printf("Lua chon khong hop le, vui long chon lai!\n");
        }
    } while (choice != 0);
    return 0;
}
```

#### Bài tập 3.2: Vẽ Hình Ký tự Nghệ thuật & Kim tự tháp Số lồng nhau
- **Mã bài**: `PROG-03-02`
- **Mức độ**: Dễ
- **Mô tả đề bài**: Nhập chiều cao $h$ ($1 \le h \le 20$). Sử dụng các vòng lặp lồng nhau vẽ ra màn hình: (1) Kim tự tháp đối xứng bằng dấu sao `*`; (2) Kim tự tháp số đối xứng (ví dụ hàng 3 có dạng: `    1 2 3 2 1`).
- **Hướng dẫn từng bước**:
  1. Vòng lặp ngoài duyệt từ hàng $i = 1$ đến $h$.
  2. Vòng lặp trong 1 in khoảng trắng: $h - i$ khoảng trắng.
  3. Vòng lặp trong 2 in số tăng từ $1$ đến $i$.
  4. Vòng lặp trong 3 in số giảm từ $i - 1$ về $1$.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

int main(void) {
    int h;
    printf("Nhap chieu cao kim tu thap h (1 - 20): ");
    scanf("%d", &h);
    for (int i = 1; i <= h; i++) {
        for (int space = 1; space <= h - i; space++) printf("  ");
        for (int j = 1; j <= i; j++) printf("%d ", j);
        for (int j = i - 1; j >= 1; j--) printf("%d ", j);
        printf("\n");
    }
    return 0;
}
```

#### Bài tập 3.3: Sàng lọc Số Nguyên tố, Số Hoàn hảo & Số Armstrong trong Đoạn $[A, B]$
- **Mã bài**: `PROG-03-03`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Nhập vào hai số nguyên dương $A$ và $B$ ($1 \le A \le B \le 10^5$). Dùng các cấu trúc vòng lặp: (1) Tìm và đếm các số nguyên tố trong đoạn $[A, B]$; (2) Tìm các số hoàn hảo (tổng ước thực sự bằng chính nó, ví dụ 6, 28); (3) Tìm các số Armstrong (tổng các chữ số mũ bậc số lượng chữ số bằng chính nó).
- **Hướng dẫn từng bước**:
  1. Kiểm tra nguyên tố: Duyệt ước đến $\sqrt{n}$, tối ưu bỏ qua các số chẵn lớn hơn 2.
  2. Kiểm tra hoàn hảo: Tính tổng các ước thực sự từ 1 đến $n/2$.
  3. Kiểm tra Armstrong: Đếm số chữ số $k$, tính tổng các chữ số lũy thừa $k$.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <math.h>

int laNguyenTo(int n) {
    if (n < 2) return 0;
    if (n == 2 || n == 3) return 1;
    if (n % 2 == 0 || n % 3 == 0) return 0;
    for (int i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i + 2) == 0) return 0;
    return 1;
}

int laHoanHao(int n) {
    if (n <= 1) return 0;
    int tong = 1;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            tong += i;
            if (i * i != n) tong += n / i;
        }
    }
    return tong == n;
}

int main(void) {
    int a, b;
    printf("Nhap doan [A, B]: ");
    scanf("%d %d", &a, &b);
    printf("Cac so nguyen to trong [%d, %d]: ", a, b);
    for (int i = a; i <= b; i++) if (laNguyenTo(i)) printf("%d ", i);
    printf("\nCac so hoan hao trong [%d, %d]: ", a, b);
    for (int i = a; i <= b; i++) if (laHoanHao(i)) printf("%d ", i);
    printf("\n");
    return 0;
}
```

#### Bài tập 3.4: Mô phỏng Chuỗi Phỏng đoán Collatz ($3n + 1$) & Dò vết Đường đi Cực đại
- **Mã bài**: `PROG-03-04`
- **Mức độ**: Khó
- **Mô tả đề bài**: Giả thuyết Collatz phát biểu: Với mọi số nguyên dương $n$, nếu $n$ chẵn thì $n = n / 2$, nếu $n$ lẻ thì $n = 3n + 1$. Quá trình lặp luôn hội tụ về 1. Viết chương trình nhập $n$, in toàn bộ quỹ đạo biến thiên, đếm số bước nhảy (Stopping time), và tìm giá trị đỉnh lớn nhất đạt được trong suốt hành trình.
- **Hướng dẫn từng bước**:
  1. Dùng kiểu dữ liệu `long long` để phòng tránh tràn số khi tính $3n + 1$.
  2. Dùng vòng lặp `while (n != 1)`.
  3. Cập nhật biến `maxVal = (n > maxVal) ? n : maxVal;`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

int main(void) {
    long long n, maxVal;
    int steps = 0;
    printf("Nhap so nguyen duong n: ");
    scanf("%lld", &n);
    if (n <= 0) return 1;

    maxVal = n;
    printf("Quy dao Collatz: %lld", n);
    while (n != 1) {
        if (n % 2 == 0) n /= 2;
        else n = 3 * n + 1;
        printf(" -> %lld", n);
        if (n > maxVal) maxVal = n;
        steps++;
    }
    printf("\nTong so buoc chuyen: %d\n", steps);
    printf("Gia tri lon nhat tung dat toi: %lld\n", maxVal);
    return 0;
}
```

---

### CHƯƠNG 4: HÀM, PHẠM VI BIẾN & ĐỆ QUY (4 BÀI)

#### Bài tập 4.1: Thư viện Xử lý Số học Mô-đun & Thuật toán Euclid Mở rộng
- **Mã bài**: `PROG-04-01`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Thiết kế thư viện hàm gồm: (1) Tính ước chung lớn nhất $\text{GCD}(a, b)$ bằng thuật toán đệ quy Euclid; (2) Tính bội chung nhỏ nhất $\text{LCM}(a, b)$; (3) Thuật toán Euclid mở rộng tìm cặp hệ số $(x, y)$ thỏa mãn đẳng thức Bézout: $ax + by = \text{GCD}(a, b)$ sử dụng con trỏ truyền địa chỉ.
- **Hướng dẫn từng bước**:
  1. Hàm đệ quy $\text{GCD}(a, b)$: Nếu $b == 0$ trả về $a$; ngược lại gọi $\text{GCD}(b, a \% b)$.
  2. $\text{LCM}(a, b) = (|a \times b|) / \text{GCD}(a, b)$ (lưu ý chia trước nhân sau để tránh tràn số).
  3. Euclid mở rộng: Dùng đệ quy lưu trữ vết $(x_1, y_1)$ để suy ra $x = y_1, y = x_1 - (a / b) \times y_1$.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <stdlib.h>

long long gcd(long long a, long long b) {
    return (b == 0) ? llabs(a) : gcd(b, a % b);
}

long long lcm(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    return (llabs(a) / gcd(a, b)) * llabs(b);
}

long long extGCD(long long a, long long b, long long *x, long long *y) {
    if (b == 0) {
        *x = 1;
        *y = 0;
        return a;
    }
    long long x1, y1;
    long long d = extGCD(b, a % b, &x1, &y1);
    *x = y1;
    *y = x1 - (a / b) * y1;
    return d;
}

int main(void) {
    long long a, b, x, y;
    printf("Nhap hai so a va b: ");
    scanf("%lld %lld", &a, &b);
    printf("GCD(%lld, %lld) = %lld\n", a, b, gcd(a, b));
    printf("LCM(%lld, %lld) = %lld\n", a, b, lcm(a, b));
    long long d = extGCD(a, b, &x, &y);
    printf("Dang thuc Bezout: %lld*(%lld) + %lld*(%lld) = %lld\n", a, x, b, y, d);
    return 0;
}
```

#### Bài tập 4.2: Dò vết Đệ quy Tháp Hà Nội & Mô hình Ngăn xếp Call Stack
- **Mã bài**: `PROG-04-02`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết hàm đệ quy giải bài toán Tháp Hà Nội (Tower of Hanoi) chuyển $n$ đĩa từ cọc nguồn $A$ sang cọc đích $C$ lấy cọc $B$ làm trung gian. In chi tiết từng bước di chuyển và dùng biến tĩnh `static` trong hàm để đếm tổng số lần thao tác chuyển đĩa.
- **Hướng dẫn từng bước**:
  1. Điều kiện dừng: $n = 1$, chuyển trực tiếp đĩa 1 từ nguồn sang đích.
  2. Bước đệ quy:
     - Chuyển $n - 1$ đĩa từ nguồn $A$ sang trung gian $B$ (dùng $C$ làm trung gian).
     - Chuyển đĩa lớn nhất $n$ từ $A$ sang $C$.
     - Chuyển $n - 1$ đĩa từ trung gian $B$ sang đích $C$ (dùng $A$ làm trung gian).
  3. Khai báo biến `static int buoc = 0;` trong hàm để tích lũy số bước.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

void thapHaNoi(int n, char nguon, char trungGian, char dich) {
    static int buoc = 0;
    if (n == 1) {
        buoc++;
        printf("Buoc %02d: Chuyen dia 1 tu coc %c sang coc %c\n", buoc, nguon, dich);
        return;
    }
    thapHaNoi(n - 1, nguon, dich, trungGian);
    buoc++;
    printf("Buoc %02d: Chuyen dia %d tu coc %c sang coc %c\n", buoc, n, nguon, dich);
    thapHaNoi(n - 1, trungGian, nguon, dich);
}

int main(void) {
    int n;
    printf("Nhap so luong dia n: ");
    scanf("%d", &n);
    printf("\n--- TIEN TRINH CHUYEN THAP HANOI ---\n");
    thapHaNoi(n, 'A', 'B', 'C');
    return 0;
}
```

#### Bài tập 4.3: Tính Dãy Fibonacci Bằng Đệ quy Nhớ (Memoization) & Phân tích Độ phức tạp
- **Mã bài**: `PROG-04-03`
- **Mức độ**: Khó
- **Mô tả đề bài**: So sánh hiệu năng tính số Fibonacci thứ $n$: (1) Đệ quy ngây thơ $O(2^n)$ và (2) Đệ quy có nhớ (Memoization) dùng mảng nhớ tĩnh $O(n)$. Đo lường sự khác biệt về số lượng lời gọi hàm khi tính $F(35)$.
- **Hướng dẫn từng bước**:
  1. Đệ quy ngây thơ: `fibNaive(n) = fibNaive(n-1) + fibNaive(n-2)`. Dùng biến toàn cục đếm số lời gọi hàm.
  2. Đệ quy có nhớ: Khởi tạo mảng `memo[100] = {0}`. Nếu `memo[n] != 0` thì trả về ngay kết quả lưu sẵn.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

long long callNaive = 0;
long long callMemo = 0;
long long memo[100] = {0};

long long fibNaive(int n) {
    callNaive++;
    if (n <= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

long long fibMemo(int n) {
    callMemo++;
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    return memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
}

int main(void) {
    int n = 35;
    printf("So sanh tinh Fibonacci(%d):\n", n);
    long long res1 = fibNaive(n);
    printf("Naive: F(%d) = %lld | So loi goi ham: %lld\n", n, res1, callNaive);
    long long res2 = fibMemo(n);
    printf("Memo : F(%d) = %lld | So loi goi ham: %lld\n", n, res2, callMemo);
    return 0;
}
```

#### Bài tập 4.4: Hàm Thống kê Mảng Sử dụng Truyền Con trỏ Nhận Đa Giá trị Trả về
- **Mã bài**: `PROG-04-04`
- **Mức độ**: Dễ
- **Mô tả đề bài**: Viết một hàm duy nhất `void thongKeMang(const int a[], int n, int *min, int *max, double *avg, double *variance)` nhận vào mảng số nguyên và trả về đồng thời 4 đại lượng: Giá trị nhỏ nhất, Giá trị lớn nhất, Giá trị trung bình, và Phương sai thông qua các con trỏ địa chỉ.
- **Hướng dẫn từng bước**:
  1. Khai báo tham số mảng ở dạng hằng `const int a[]` để đảm bảo an toàn dữ liệu.
  2. Khởi tạo `*min = a[0]`, `*max = a[0]`, tính tổng `sum`.
  3. Sau khi tính xong `*avg`, duyệt lại mảng để tính tổng bình phương độ lệch $\sum (a[i] - \text{avg})^2$ để gán vào `*variance`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

void thongKeMang(const int a[], int n, int *min, int *max, double *avg, double *variance) {
    *min = a[0];
    *max = a[0];
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] < *min) *min = a[i];
        if (a[i] > *max) *max = a[i];
        sum += a[i];
    }
    *avg = (double)sum / n;
    double varSum = 0;
    for (int i = 0; i < n; i++) {
        varSum += (a[i] - *avg) * (a[i] - *avg);
    }
    *variance = varSum / n;
}

int main(void) {
    int a[] = {12, 5, 8, 19, 24, 7, 15, 3};
    int n = sizeof(a) / sizeof(a[0]);
    int min, max;
    double avg, var;
    thongKeMang(a, n, &min, &max, &avg, &var);
    printf("Min = %d | Max = %d | Avg = %.2f | Variance = %.2f\n", min, max, avg, var);
    return 0;
}
```

---

### CHƯƠNG 5: MẢNG (1D, 2D) & CHUỖI KÝ TỰ (STRINGS) (4 BÀI)

#### Bài tập 5.1: Xóa Trùng Lặp và Nén Mảng Một Chiều Tại Chỗ (In-Place Compact)
- **Mã bài**: `PROG-05-01`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình nhập mảng $n$ số nguyên ($1 \le n \le 1000$). Thực hiện: (1) Sắp xếp mảng tăng dần bằng thuật toán Selection Sort; (2) Thực hiện loại bỏ tất cả các phần tử trùng lặp tại chỗ (In-place) với độ phức tạp bộ nhớ phụ $O(1)$, trả về kích thước mảng mới; (3) Tìm kiếm một giá trị $x$ trên mảng đã nén bằng thuật toán Binary Search.
- **Hướng dẫn từng bước**:
  1. Viết hàm `selectionSort(a, n)`.
  2. Kỹ thuật hai con trỏ (Two Pointers) để nén mảng: Con trỏ ghi `idx = 0`, duyệt con trỏ đọc `i` từ 1 đến $n-1$. Nếu `a[i] != a[idx]` thì tăng `idx++` và gán `a[idx] = a[i]`. Kích thước mới là `idx + 1`.
  3. Viết hàm `binarySearch(a, n, x)`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

void selectionSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (a[j] < a[minIdx]) minIdx = j;
        int temp = a[i]; a[i] = a[minIdx]; a[minIdx] = temp;
    }
}

int xoaTrungLapTaiCho(int a[], int n) {
    if (n <= 1) return n;
    int idx = 0;
    for (int i = 1; i < n; i++) {
        if (a[i] != a[idx]) {
            idx++;
            a[idx] = a[i];
        }
    }
    return idx + 1;
}

int binarySearch(const int a[], int n, int x) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (a[mid] == x) return mid;
        if (a[mid] < x) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main(void) {
    int a[] = {4, 2, 7, 2, 4, 9, 7, 1, 9, 3};
    int n = sizeof(a) / sizeof(a[0]);
    selectionSort(a, n);
    n = xoaTrungLapTaiCho(a, n);
    printf("Mang sau khi sap xep va xoa trung: ");
    for (int i = 0; i < n; i++) printf("%d ", a[i]);
    printf("\nTim kiem 7: vi tri index = %d\n", binarySearch(a, n, 7));
    return 0;
}
```

#### Bài tập 5.2: Phép Nhân Hai Ma Trận & Phân tích Đối xứng Ma trận Vuông
- **Mã bài**: `PROG-05-02`
- **Mức độ**: Khó
- **Mô tả đề bài**: Viết chương trình nhập vào ma trận $A$ kích thước $m \times k$ và ma trận $B$ kích thước $k \times p$. (1) Tính ma trận tích $C = A \times B$ kích thước $m \times p$; (2) Nếu ma trận $C$ là ma trận vuông, kiểm tra xem $C$ có phải là ma trận đối xứng ($C[i][j] == C[j][i]$) hay không.
- **Hướng dẫn từng bước**:
  1. Kiểm tra tính khả tích: Số cột ma trận $A$ bắt buộc phải bằng số hàng ma trận $B$.
  2. Công thức nhân ma trận 3 vòng lặp: $C[i][j] = \sum_{t=0}^{k-1} A[i][t] \times B[t][j]$.
  3. Kiểm tra đối xứng: Duyệt các phần tử ngoài đường chéo chính xem có cặp nào khác nhau hay không.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

#define MAX 50

void nhanMaTran(int A[MAX][MAX], int B[MAX][MAX], int C[MAX][MAX], int m, int k, int p) {
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < p; j++) {
            C[i][j] = 0;
            for (int t = 0; t < k; t++) C[i][j] += A[i][t] * B[t][j];
        }
    }
}

int laMaTranDoiXung(int C[MAX][MAX], int n) {
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (C[i][j] != C[j][i]) return 0;
    return 1;
}

int main(void) {
    int A[MAX][MAX] = {{1, 2}, {3, 4}};
    int B[MAX][MAX] = {{2, 0}, {1, 2}};
    int C[MAX][MAX];
    nhanMaTran(A, B, C, 2, 2, 2);
    printf("Ma tran tich C (2x2):\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) printf("%4d ", C[i][j]);
        printf("\n");
    }
    printf("Doi xung: %s\n", laMaTranDoiXung(C, 2) ? "CO" : "KHONG");
    return 0;
}
```

#### Bài tập 5.3: Bộ Chuẩn hóa Văn bản, Đảo Từ & Kiểm tra Chuỗi Đối xứng (Palindrome)
- **Mã bài**: `PROG-05-03`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình nhập một chuỗi ký tự bất kỳ bằng `fgets()`. Thực hiện: (1) Kiểm tra xem chuỗi có phải là Palindrome (bỏ qua khoảng trắng và không phân biệt chữ hoa/thường) hay không; (2) Chuẩn hóa chuỗi họ tên: Xóa khoảng trắng thừa ở đầu, cuối và giữa các từ; viết hoa chữ cái đầu mỗi từ và viết thường các ký tự còn lại; (3) Đảo ngược thứ tự các từ trong câu (ví dụ: `"Lap trinh C rat hay"` $\to$ `"hay rat C trinh Lap"`).
- **Hướng dẫn từng bước**:
  1. Palindrome: Dùng 2 con trỏ chạy từ 2 đầu, dùng `isalpha()` và `tolower()` để so sánh.
  2. Chuẩn hóa: Dùng vòng lặp lọc ký tự khoảng trắng dư thừa, dùng `toupper()` cho ký tự đầu từ.
  3. Đảo từ: Đảo ngược toàn bộ chuỗi ký tự, sau đó đảo ngược từng từ đơn lẻ.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void daoChuoi(char *s, int start, int end) {
    while (start < end) {
        char temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++; end--;
    }
}

void daoTuTrongCau(char *s) {
    int len = (int)strlen(s);
    daoChuoi(s, 0, len - 1); // Dao toan bo chuoi
    int start = 0;
    for (int i = 0; i <= len; i++) {
        if (s[i] == ' ' || s[i] == '\0') {
            daoChuoi(s, start, i - 1); // Dao tung tu
            start = i + 1;
        }
    }
}

int main(void) {
    char s[] = "Lap trinh C rat hay";
    printf("Chuoi ban dau: \"%s\"\n", s);
    daoTuTrongCau(s);
    printf("Chuoi sau khi dao tu: \"%s\"\n", s);
    return 0;
}
```

#### Bài tập 5.4: Tự Xây dựng Thư viện Thao tác Chuỗi Không Sử dụng `<string.h>`
- **Mã bài**: `PROG-05-04`
- **Mức độ**: Khó
- **Mô tả đề bài**: Lập trình thuần túy con trỏ và mảng để xây dựng lại 5 hàm chuẩn trong `<string.h>` mà không được `#include <string.h>`: `my_strlen()`, `my_strcpy()`, `my_strcat()`, `my_strcmp()`, và `my_strstr()`.
- **Hướng dẫn từng bước**:
  1. `my_strlen`: Đếm ký tự cho tới khi gặp `\0`.
  2. `my_strcpy`: Duyệt vòng lặp sao chép từng byte `*dest++ = *src++` cho đến khi hết `\0`.
  3. `my_strcmp`: So sánh mã ASCII từng cặp ký tự.
  4. `my_strstr`: Thuật toán đối sánh mẫu (Pattern Matching).
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

size_t my_strlen(const char *s) {
    const char *p = s;
    while (*p) p++;
    return p - s;
}

char* my_strcpy(char *dest, const char *src) {
    char *ret = dest;
    while ((*dest++ = *src++));
    return ret;
}

int my_strcmp(const char *s1, const char *s2) {
    while (*s1 && (*s1 == *s2)) { s1++; s2++; }
    return *(const unsigned char*)s1 - *(const unsigned char*)s2;
}

int main(void) {
    char a[50];
    my_strcpy(a, "Hello");
    printf("my_strlen = %zu\n", my_strlen(a));
    printf("my_strcmp = %d\n", my_strcmp(a, "Hello"));
    return 0;
}
```

---

### CHƯƠNG 6: CON TRỎ (POINTERS) & QUẢN LÝ BỘ NHỚ ĐỘNG (4 BÀI)

#### Bài tập 6.1: Quản lý Mảng Động Tự Co Giãn (Dynamic Vector) với Malloc và Realloc
- **Mã bài**: `PROG-06-01`
- **Mức độ**: Khó
- **Mô tả đề bài**: Xây dựng cấu trúc mảng động tự co giãn tương tự `std::vector` trong C++: Cho phép khởi tạo mảng động với dung lượng ban đầu là 2 phần tử. Người dùng nhập số nguyên liên tục từ bàn phím (nhập 0 để dừng). Khi mảng đầy, tự động nhân đôi dung lượng (Capacity) bằng hàm `realloc()`. In ra toàn bộ phần tử và giải phóng bộ nhớ an toàn.
- **Hướng dẫn từng bước**:
  1. Quản lý 3 thông số: Con trỏ mảng `int *arr`, kích thước phần tử thực `size`, dung lượng `capacity`.
  2. Khi `size == capacity`: Gán `capacity *= 2`, gọi con trỏ tạm `int *temp = realloc(arr, capacity * sizeof(int))`.
  3. Kiểm tra `if (temp == NULL)` trước khi gán lại cho `arr` để phòng ngừa mất trắng dữ liệu cũ.
  4. Sau khi kết thúc, gọi `free(arr)` và đặt `arr = NULL`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int capacity = 2;
    int size = 0;
    int *arr = (int*)malloc(capacity * sizeof(int));
    if (!arr) return 1;

    int val;
    printf("Nhap cac so nguyen (nhap 0 de ket thuc):\n");
    while (scanf("%d", &val) == 1 && val != 0) {
        if (size == capacity) {
            capacity *= 2;
            int *temp = (int*)realloc(arr, capacity * sizeof(int));
            if (!temp) {
                printf("Loi cap phat bo nho bo sung!\n");
                free(arr);
                return 1;
            }
            arr = temp;
            printf("[Log: Tu dong tang dung luong mang len %d phan tu]\n", capacity);
        }
        arr[size++] = val;
    }

    printf("Mang dong da nhap (%d phan tu): ", size);
    for (int i = 0; i < size; i++) printf("%d ", *(arr + i));
    printf("\n");

    free(arr);
    arr = NULL;
    return 0;
}
```

#### Bài tập 6.2: Cấp phát Động Ma trận 2 Chiều Bằng Mảng Con trỏ & Xử lý Bộ nhớ
- **Mã bài**: `PROG-06-02`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình cấp phát động ma trận 2 chiều số thực kích thước $R \times C$ bằng kỹ thuật con trỏ bậc hai `double **matrix`. Viết hàm nhập ma trận, hàm tìm giá trị lớn nhất trên từng hàng, và hàm giải phóng bộ nhớ động toàn diện (tránh rò rỉ bộ nhớ).
- **Hướng dẫn từng bước**:
  1. Cấp phát mảng con trỏ hàng: `matrix = (double**)malloc(R * sizeof(double*));`.
  2. Vòng lặp cấp phát từng hàng: `matrix[i] = (double*)malloc(C * sizeof(double));`.
  3. Quy trình giải phóng: Bắt buộc giải phóng từng hàng `free(matrix[i])` trước, sau đó mới giải phóng mảng con trỏ gốc `free(matrix)`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <stdlib.h>

double** capPhatMaTran(int r, int c) {
    double **m = (double**)malloc(r * sizeof(double*));
    if (!m) return NULL;
    for (int i = 0; i < r; i++) {
        m[i] = (double*)malloc(c * sizeof(double));
        if (!m[i]) return NULL;
    }
    return m;
}

void giaiPhongMaTran(double **m, int r) {
    if (!m) return;
    for (int i = 0; i < r; i++) free(m[i]);
    free(m);
}

int main(void) {
    int r = 3, c = 4;
    double **m = capPhatMaTran(r, c);
    if (!m) return 1;
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) m[i][j] = (i + 1) * 10.0 + j;

    printf("Ma tran dong (3x4):\n");
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) printf("%6.1f ", m[i][j]);
        printf("\n");
    }
    giaiPhongMaTran(m, r);
    m = NULL;
    return 0;
}
```

#### Bài tập 6.3: Bảng Điều phối Toán học Bằng Mảng Con trỏ Hàm (Function Pointer Dispatch Table)
- **Mã bài**: `PROG-06-03`
- **Mức độ**: Khó
- **Mô tả đề bài**: Viết chương trình định nghĩa 4 hàm toán học cơ bản có cùng chữ ký `double (double, double)`: Cộng, Trừ, Nhân, Chia. Sử dụng mảng con trỏ hàm (Function Pointer Array) để tạo bảng điều phối (Dispatch Table) thực thi phép tính dựa trên mã thao tác người dùng nhập vào mà không cần dùng cấu trúc `if-else` hay `switch-case`.
- **Hướng dẫn từng bước**:
  1. Khai báo kiểu con trỏ hàm: `typedef double (*MathFunc)(double, double);`.
  2. Khởi tạo mảng con trỏ hàm: `MathFunc table[] = {add, sub, mul, divide};`.
  3. Gọi hàm gián tiếp qua chỉ số: `double result = table[op](a, b);`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

typedef double (*MathFunc)(double, double);

double add(double a, double b) { return a + b; }
double sub(double a, double b) { return a - b; }
double mul(double a, double b) { return a * b; }
double divide(double a, double b) { return b != 0 ? a / b : 0.0; }

int main(void) {
    MathFunc ops[] = {add, sub, mul, divide};
    const char *names[] = {"Cong", "Tru", "Nhan", "Chia"};
    int choice = 2; // Phep nhan
    double a = 12.5, b = 4.0;
    printf("Thuc hien phep %s tren %.2f va %.2f: Ket qua = %.2f\n",
           names[choice], a, b, ops[choice](a, b));
    return 0;
}
```

#### Bài tập 6.4: Tách Từ và Dò Vết Bộ nhớ Chuỗi Bằng Con trỏ Cấp 2 (`char **`)
- **Mã bài**: `PROG-06-04`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết hàm `char** tachTu(char *src, int *soTu)` nhận vào một câu văn bản, cấp phát động mảng các con trỏ `char**` trỏ tới từng từ riêng biệt được trích xuất từ câu. In danh sách từ và viết hàm giải phóng bộ nhớ động triệt để.
- **Hướng dẫn từng bước**:
  1. Sử dụng hàm `strtok` để duyệt qua từng từ.
  2. Cấp phát động tăng dần mảng `res` bằng `realloc`.
  3. Cấp phát riêng bộ nhớ cho từng từ bằng `malloc(strlen(token) + 1)` và sao chép dữ liệu.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** tachCacTu(char *src, int *count) {
    char **res = NULL;
    *count = 0;
    char *token = strtok(src, " \t\n");
    while (token) {
        res = (char**)realloc(res, (*count + 1) * sizeof(char*));
        res[*count] = (char*)malloc(strlen(token) + 1);
        strcpy(res[*count], token);
        (*count)++;
        token = strtok(NULL, " \t\n");
    }
    return res;
}

int main(void) {
    char text[] = "Dai Hoc Su Pham Ky Thuat TP HCM";
    int n;
    char **words = tachCacTu(text, &n);
    printf("Cac tu da tach (%d tu):\n", n);
    for (int i = 0; i < n; i++) {
        printf("Tu %d: %s\n", i + 1, words[i]);
        free(words[i]);
    }
    free(words);
    return 0;
}
```

---

### CHƯƠNG 7: KIỂU DỮ LIỆU TỰ ĐỊNH NGHĨA (STRUCT, UNION, ENUM, TYPEDEF) (3 BÀI)

#### Bài tập 7.1: Hệ thống Quản lý Hồ sơ Sinh viên Chuyên sâu (Case Study)
- **Mã bài**: `PROG-07-01`
- **Mức độ**: Khó
- **Mô tả đề bài**: Xây dựng chương trình quản lý danh sách sinh viên bằng mảng cấu trúc struct. Mỗi sinh viên gồm: Mã số sinh viên, Họ và tên, Ngày tháng năm sinh (cấu trúc lồng `NgayThang`), Điểm Toán, Điểm Lý, Điểm Tin, Điểm trung bình (GPA), và Xếp loại học lực (kiểu `enum`). Thực hiện: (1) Nhập danh sách $N$ sinh viên; (2) Tự động tính GPA và xếp loại; (3) Sắp xếp danh sách sinh viên theo GPA giảm dần; (4) Tìm kiếm sinh viên theo họ tên (không phân biệt hoa thường).
- **Hướng dẫn từng bước**:
  1. Định nghĩa `struct NgayThang { int ngay, thang, nam; };`.
  2. Định nghĩa `enum XepLoai { XUAT_SAC, GIOI, KHA, TRUNG_BINH, YEU };`.
  3. Định nghĩa `struct SinhVien { ... };` với bí danh `typedef`.
  4. Viết các hàm mô-đun: `tinhDiem`, `inSinhVien`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <string.h>

typedef struct {
    int ngay, thang, nam;
} NgayThang;

typedef enum { XUAT_SAC, GIOI, KHA, TRUNG_BINH, YEU } HocLuc;

typedef struct {
    int mssv;
    char hoTen[50];
    NgayThang ngaySinh;
    float toan, ly, tin, gpa;
    HocLuc xepLoai;
} SinhVien;

void tinhDiem(SinhVien *sv) {
    sv->gpa = (sv->toan + sv->ly + sv->tin) / 3.0f;
    if (sv->gpa >= 9.0f) sv->xepLoai = XUAT_SAC;
    else if (sv->gpa >= 8.0f) sv->xepLoai = GIOI;
    else if (sv->gpa >= 6.5f) sv->xepLoai = KHA;
    else if (sv->gpa >= 5.0f) sv->xepLoai = TRUNG_BINH;
    else sv->xepLoai = YEU;
}

const char* layChuoiXepLoai(HocLuc hl) {
    switch (hl) {
        case XUAT_SAC: return "Xuat sac";
        case GIOI: return "Gioi";
        case KHA: return "Kha";
        case TRUNG_BINH: return "Trung binh";
        default: return "Yeu";
    }
}

int main(void) {
    SinhVien sv = {101, "Nguyen Van A", {15, 8, 2004}, 8.5f, 9.0f, 9.5f, 0, YEU};
    tinhDiem(&sv);
    printf("MSSV: %d | Ten: %s | GPA: %.2f | Xep loai: %s\n",
           sv.mssv, sv.hoTen, sv.gpa, layChuoiXepLoai(sv.xepLoai));
    return 0;
}
```

#### Bài tập 7.2: Phân tích Gói tin Mạng / Dữ liệu Cảm biến IoT Bằng Union & Bitfields
- **Mã bài**: `PROG-07-02`
- **Mức độ**: Khó
- **Mô tả đề bài**: Trong lập trình nhúng, dữ liệu truyền nhận qua mạng thường được đóng gói 4 bytes (32 bit). Viết chương trình định nghĩa một `union DataPacket` cho phép truy xuất dữ liệu theo 3 cách khác nhau trên cùng một vùng nhớ: (1) Dưới dạng một số nguyên 32-bit duy nhất `uint32_t raw`; (2) Dưới dạng mảng 4 bytes rời rạc `uint8_t bytes[4]`; (3) Dưới dạng cấu trúc bitfield chia nhỏ: Cờ kích hoạt (1 bit), Mã lỗi (3 bit), ID cảm biến (12 bit), và Giá trị đo (16 bit). Minh họa cách ghi dữ liệu thô và đọc giải mã các trường.
- **Hướng dẫn từng bước**:
  1. Định nghĩa `union Packet` chứa `uint32_t raw`, `uint8_t bytes[4]`, và `struct BitFields`.
  2. Khởi tạo một giá trị hex 32-bit (ví dụ `0xABCD8123`).
  3. In ra từng byte thành phần và phân rã các trường bitfield.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <stdint.h>

typedef union {
    uint32_t raw;
    uint8_t bytes[4];
    struct {
        uint32_t enable   : 1;  // Bit 0
        uint32_t errCode  : 3;  // Bit 1-3
        uint32_t sensorId : 12; // Bit 4-15
        uint32_t payload  : 16; // Bit 16-31
    } fields;
} Packet;

int main(void) {
    Packet p;
    p.raw = 0xABCD8123;
    printf("Raw 32-bit: 0x%08X\n", p.raw);
    printf("Cac bytes: [0]=0x%02X, [1]=0x%02X, [2]=0x%02X, [3]=0x%02X\n",
           p.bytes[0], p.bytes[1], p.bytes[2], p.bytes[3]);
    printf("Giai ma bitfield: Enable=%u, ErrCode=%u, SensorID=%u, Payload=%u\n",
           p.fields.enable, p.fields.errCode, p.fields.sensorId, p.fields.payload);
    return 0;
}
```

#### Bài tập 7.3: Máy Trạng thái Hữu hạn (FSM) Đèn Giao thông với Enum
- **Mã bài**: `PROG-07-03`
- **Mức độ**: Dễ
- **Mô tả đề bài**: Thiết kế máy trạng thái hữu hạn (Finite State Machine - FSM) mô phỏng chu trình chuyển đổi màu đèn tín hiệu giao thông: `DO` (dừng 30 giây) $\to$ `XANH` (chạy 25 giây) $\to$ `VANG` (chậm 3 giây) $\to$ `DO`. Sử dụng kiểu `enum` định nghĩa trạng thái và vòng lặp chuyển đổi trạng thái liên tục.
- **Hướng dẫn từng bước**:
  1. Định nghĩa `typedef enum { DEN_DO = 30, DEN_XANH = 25, DEN_VANG = 3 } DenGiaoThong;`.
  2. Viết hàm chuyển trạng thái kế tiếp và in thông báo chu kỳ.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

typedef enum { DEN_DO = 30, DEN_XANH = 25, DEN_VANG = 3 } DenGiaoThong;

const char* layTenDen(DenGiaoThong d) {
    switch (d) {
        case DEN_DO: return "DEN DO (Dung lai)";
        case DEN_XANH: return "DEN XANH (Duoc di)";
        case DEN_VANG: return "DEN VANG (Di cham)";
    }
    return "UNKNOWN";
}

int main(void) {
    DenGiaoThong den = DEN_DO;
    for (int chuKy = 1; chuKy <= 3; chuKy++) {
        printf("Trang thai: %-25s | Thoi gian: %d giay\n", layTenDen(den), den);
        if (den == DEN_DO) den = DEN_XANH;
        else if (den == DEN_XANH) den = DEN_VANG;
        else den = DEN_DO;
    }
    return 0;
}
```

---

### CHƯƠNG 8: THAO TÁC TỆP TIN (FILE I/O) (3 BÀI)

#### Bài tập 8.1: Thống kê Tệp Văn bản: Đếm Dòng, Từ, Ký tự & Tần suất Xuất hiện
- **Mã bài**: `PROG-08-01`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình mở một tệp văn bản bất kỳ (`input.txt`). Đọc tệp và tính toán thống kê: (1) Tổng số ký tự; (2) Tổng số dòng; (3) Tổng số từ; (4) Tần suất xuất hiện của 26 chữ cái tiếng Anh (không phân biệt hoa/thường). Ghi báo cáo kết quả thống kê vào một tệp mới (`report.txt`).
- **Hướng dẫn từng bước**:
  1. Mở tệp nguồn với `fopen("input.txt", "r")`, kiểm tra lỗi `NULL`.
  2. Dùng vòng lặp `while ((ch = fgetc(fp)) != EOF)` để duyệt từng ký tự.
  3. Cập nhật số dòng khi gặp `\n`, cập nhật trạng thái từ bằng cờ `inWord`.
  4. Mở tệp đích với `fopen("report.txt", "w")` và dùng `fprintf()` để xuất bảng kết quả.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    FILE *fin = fopen("input.txt", "r");
    if (!fin) {
        printf("Khong the mo tep input.txt!\n");
        return 1;
    }
    int lines = 0, words = 0, chars = 0;
    int count[26] = {0};
    int inWord = 0, ch;

    while ((ch = fgetc(fin)) != EOF) {
        chars++;
        if (ch == '\n') lines++;
        if (isalpha(ch)) count[tolower(ch) - 'a']++;
        if (isspace(ch)) inWord = 0;
        else if (!inWord) { inWord = 1; words++; }
    }
    fclose(fin);

    FILE *fout = fopen("report.txt", "w");
    if (fout) {
        fprintf(fout, "=== KET QUA THONG KE TEP ===\n");
        fprintf(fout, "So ky tu: %d\nSo tu: %d\nSo dong: %d\n", chars, words, lines);
        fprintf(fout, "Tan suat chu cai:\n");
        for (int i = 0; i < 26; i++) {
            if (count[i] > 0) fprintf(fout, "%c: %d\n", 'a' + i, count[i]);
        }
        fclose(fout);
        printf("Da xuat bao cao vao report.txt thanh cong!\n");
    }
    return 0;
}
```

#### Bài tập 8.2: Cơ sở Dữ liệu Sinh viên Nhị phân Hỗ trợ Truy cập Ngẫu nhiên (Random Access)
- **Mã bài**: `PROG-08-02`
- **Mức độ**: Khó
- **Mô tả đề bài**: Xây dựng chương trình quản lý cơ sở dữ liệu nhị phân sinh viên lưu trong tệp `students.dat` bằng các hàm `fread()`, `fwrite()`, và `fseek()`. Cung cấp các tính năng: (1) Thêm mới sinh viên vào cuối tệp; (2) Đọc toàn bộ danh sách sinh viên; (3) Tra cứu và cập nhật thông tin sinh viên thứ $k$ trực tiếp bằng hàm `fseek(fp, k * sizeof(Student), SEEK_SET)` mà không phải đọc toàn bộ tệp vào RAM.
- **Hướng dẫn từng bước**:
  1. Mở tệp ở chế độ `"wb+"` hoặc `"rb+"`.
  2. Ghi mảng đối tượng: `fwrite(list, sizeof(Student), count, fp);`.
  3. Dùng `fseek` nhảy trực tiếp đến vị trí bản ghi thứ $k$: `fseek(fp, k * sizeof(Student), SEEK_SET)`.
  4. Đọc hoặc ghi đè bản ghi mới.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[30];
    float gpa;
} Student;

int main(void) {
    FILE *fp = fopen("students.dat", "wb+");
    if (!fp) return 1;

    Student list[3] = {
        {1, "Le Van A", 8.2f},
        {2, "Tran Thi B", 7.5f},
        {3, "Pham Van C", 9.0f}
    };
    fwrite(list, sizeof(Student), 3, fp);

    // Doc ban ghi thu 2 (index = 1) dung fseek
    fseek(fp, 1 * sizeof(Student), SEEK_SET);
    Student s;
    fread(&s, sizeof(Student), 1, fp);
    printf("Ban ghi index 1: ID=%d, Ten=%s, GPA=%.2f\n", s.id, s.name, s.gpa);

    // Cap nhat diem ban ghi index 1
    s.gpa = 8.8f;
    fseek(fp, 1 * sizeof(Student), SEEK_SET);
    fwrite(&s, sizeof(Student), 1, fp);

    fclose(fp);
    return 0;
}
```

#### Bài tập 8.3: Mã hóa và Giải mã Tệp Luồng bằng Thuật toán XOR Cipher
- **Mã bài**: `PROG-08-03`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình mã hóa tệp dữ liệu bất kỳ bằng thuật toán XOR một khóa (Key stream cipher). Chương trình nhận tên tệp gốc, tên tệp kết quả và một khóa bí mật (ký tự `unsigned char key`). Cơ chế XOR có tính chất đối ngẫu: $C = P \oplus K \implies P = C \oplus K$, do đó cùng một hàm có thể dùng để vừa mã hóa vừa giải mã.
- **Hướng dẫn từng bước**:
  1. Mở tệp nguồn ở chế độ nhị phân `"rb"`, tệp đích ở chế độ `"wb"`.
  2. Đọc từng byte dữ liệu `ch = fgetc(fin)`, thực hiện phép toán `ch ^ key`, rồi ghi sang tệp đích `fputc(ch ^ key, fout)`.
- **Khung mã nguồn giải pháp mẫu**:
```c
#include <stdio.h>

void maHoaXOR(const char *inFile, const char *outFile, unsigned char key) {
    FILE *fin = fopen(inFile, "rb");
    FILE *fout = fopen(outFile, "wb");
    if (!fin || !fout) {
        printf("Loi mo tep!\n");
        return;
    }
    int ch;
    while ((ch = fgetc(fin)) != EOF) {
        fputc(ch ^ key, fout);
    }
    fclose(fin);
    fclose(fout);
    printf("Hoan tat thao tac XOR voi tep %s -> %s!\n", inFile, outFile);
}

int main(void) {
    maHoaXOR("source.txt", "encrypted.bin", 0x5A);
    maHoaXOR("encrypted.bin", "decrypted.txt", 0x5A);
    return 0;
}
```

---

### CHƯƠNG 9: TỔNG HỢP KIẾN THỨC C++ CĂN BẢN & NHẬP MÔN OOP (3 BÀI)

#### Bài tập 9.1: Xây dựng Lớp Phân số Hoàn chỉnh với Nạp chồng Toán tử & Stream I/O
- **Mã bài**: `PROG-09-01`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Trong C++, xây dựng lớp `PhanSo` (Fraction) gồm 2 thuộc tính `tuSo` và `mauSo` ở chế độ `private`. Cung cấp: (1) Hàm khởi tạo mặc định và có tham số; (2) Phương thức rút gọn phân số; (3) Nạp chồng toán tử cộng `+` và trừ `-`; (4) Nạp chồng toán tử xuất luồng `<<` để in phân số đẹp mắt dạng `tu/mau` ra `std::cout`.
- **Hướng dẫn từng bước**:
  1. Sử dụng cú pháp `class PhanSo`.
  2. Hàm tìm GCD rút gọn phân số ngay sau khi khởi tạo hoặc tính toán.
  3. Cú pháp nạp chồng toán tử: `PhanSo operator+(const PhanSo &b) const;`.
  4. Nạp chồng toán tử `friend ostream& operator<<(ostream &os, const PhanSo &p);`.
- **Khung mã nguồn giải pháp mẫu**:
```cpp
#include <iostream>
#include <numeric>

class PhanSo {
private:
    int tu, mau;
    void rutGon() {
        int g = std::gcd(tu, mau);
        tu /= g; mau /= g;
        if (mau < 0) { tu = -tu; mau = -mau; }
    }
public:
    PhanSo(int t = 0, int m = 1) : tu(t), mau(m == 0 ? 1 : m) { rutGon(); }

    PhanSo operator+(const PhanSo &other) const {
        return PhanSo(tu * other.mau + other.tu * mau, mau * other.mau);
    }

    friend std::ostream& operator<<(std::ostream &os, const PhanSo &p) {
        if (p.mau == 1) os << p.tu;
        else os << p.tu << "/" << p.mau;
        return os;
    }
};

int main() {
    PhanSo p1(1, 2), p2(1, 3);
    PhanSo p3 = p1 + p2;
    std::cout << p1 << " + " << p2 << " = " << p3 << std::endl;
    return 0;
}
```

#### Bài tập 9.2: Lớp Chuỗi Ký tự Động Tự Quản lý Bộ nhớ (MyString - Rule of Three)
- **Mã bài**: `PROG-09-02`
- **Mức độ**: Khó
- **Mô tả đề bài**: Viết lớp `MyString` mô phỏng lớp `std::string` của C++: Thuộc tính gồm con trỏ `char *data` và chiều dài `size_t len`. Thực hiện triệt để Quy tắc ba thành phần (Rule of Three): (1) Hàm hủy giải phóng bộ nhớ động; (2) Hàm khởi tạo sao chép (Copy Constructor) thực hiện Deep Copy; (3) Nạp chồng toán tử gán sao chép (`operator=`) phòng tránh rò rỉ và tự gán cho chính mình.
- **Hướng dẫn từng bước**:
  1. Hàm dựng: Cấp phát `new char[len + 1]`.
  2. Hàm hủy: Gọi `delete[] data;`.
  3. Copy Constructor: `data = new char[other.len + 1]; strcpy(data, other.data);`.
  4. Toán tử gán: Kiểm tra `this != &other`, giải phóng `delete[] data` cũ trước khi cấp phát mới.
- **Khung mã nguồn giải pháp mẫu**:
```cpp
#include <iostream>
#include <cstring>

class MyString {
private:
    char *data;
    size_t len;
public:
    MyString(const char *s = "") {
        len = strlen(s);
        data = new char[len + 1];
        strcpy(data, s);
    }
    ~MyString() {
        delete[] data;
    }
    MyString(const MyString &other) {
        len = other.len;
        data = new char[len + 1];
        strcpy(data, other.data);
    }
    MyString& operator=(const MyString &other) {
        if (this != &other) {
            delete[] data;
            len = other.len;
            data = new char[len + 1];
            strcpy(data, other.data);
        }
        return *this;
    }
    void print() const { std::cout << data << std::endl; }
};

int main() {
    MyString s1("Hello C++ OOP");
    MyString s2 = s1; // Goi Copy Constructor
    MyString s3;
    s3 = s2; // Goi operator=
    s3.print();
    return 0;
}
```

#### Bài tập 9.3: Quản lý Nhân sự Kế thừa Cơ bản (Inheritance & Polymorphism Preview)
- **Mã bài**: `PROG-09-03`
- **Mức độ**: Trung bình
- **Mô tả đề bài**: Viết chương trình C++ minh họa tính kế thừa căn bản: Định nghĩa lớp cơ sở `Person` (gồm họ tên, năm sinh) và lớp dẫn xuất `Student` kế thừa `Person` (bổ sung thuộc tính mã sinh viên và điểm trung bình GPA). Cung cấp phương thức hiển thị thông tin và sử dụng biến tham chiếu để truyền đối tượng vào hàm hiển thị.
- **Hướng dẫn từng bước**:
  1. Khai báo `class Student : public Person`.
  2. Hàm dựng của lớp con gọi hàm dựng của lớp cha: `Student(...) : Person(...)`.
  3. Viết hàm hiển thị ghi đè `virtual void xuat() const`.
- **Khung mã nguồn giải pháp mẫu**:
```cpp
#include <iostream>
#include <string>

class Person {
protected:
    std::string hoTen;
    int namSinh;
public:
    Person(const std::string &ten, int nam) : hoTen(ten), namSinh(nam) {}
    virtual void xuat() const {
        std::cout << "Ho ten: " << hoTen << " | Nam sinh: " << namSinh;
    }
    virtual ~Person() {}
};

class Student : public Person {
private:
    std::string mssv;
    double gpa;
public:
    Student(const std::string &ten, int nam, const std::string &ma, double diem)
        : Person(ten, nam), mssv(ma), gpa(diem) {}
    void xuat() const override {
        Person::xuat();
        std::cout << " | MSSV: " << mssv << " | GPA: " << gpa << std::endl;
    }
};

int main() {
    Student s("Tran Van B", 2004, "SV202401", 8.75);
    s.xuat();
    return 0;
}
```

---

## 5. PHÂN TÍCH SƯ PHẠM & BẪY ĐỀ THI THƯỜNG GẶP (PEDAGOGICAL INSIGHTS & TRAPS)

Nhằm phục vụ trực tiếp cho công tác biên soạn ngân hàng câu hỏi trắc nghiệm (MCQ) và bộ đề thi ở Phase 2, bảng dưới đây phân loại chi tiết các dạng cạm bẫy học thuật, lỗi cú pháp, lỗi logic và lỗi thời gian chạy mà sinh viên hay mắc phải nhất theo 9 chương:

| Chương học | Tên Bẫy / Lỗi Thường gặp | Bản chất Kỹ thuật & Nguyên nhân Gốc rễ | Ví dụ Mã Minh họa Sai vs Đúng | Ứng dụng Thiết kế Câu hỏi Trắc nghiệm (Phase 2) |
|---|---|---|---|---|
| **Chương 1** | **Chấm phẩy sau Macro `#define`** | Bộ tiền xử lý (Preprocessor) chỉ thực hiện thay thế văn bản thuần túy (Text substitution) trước khi trình biên dịch chạy. | `Sai:` `#define MAX 100;`<br>`Đúng:` `#define MAX 100` | Câu hỏi dạng Debug: Tìm dòng phát sinh lỗi biên dịch khi viết `int a = MAX + 5;`. |
| **Chương 1** | **Quy tắc định danh biến** | Bắt đầu bằng số hoặc chứa ký tự toán tử bị cấm trong ANSI C. | `Sai:` `int 2nd_val, my-age;`<br>`Đúng:` `int second_val, my_age;` | Câu hỏi dạng Lý thuyết: Chọn các tên biến hợp lệ trong danh sách cho trước. |
| **Chương 2** | **Chia số nguyên cắt cụt** | Cả hai toán hạng là số nguyên thì phép chia `/` thực hiện chia lấy phần nguyên (Truncate), sau đó mới ép kiểu ngầm định sang `float`. | `Sai:` `float f = 5 / 2;` (kết quả `2.0`)<br>`Đúng:` `float f = 5.0 / 2;` (kết quả `2.5`) | Câu hỏi dạng Output/Trace: Cho đoạn mã tính giá trị biểu thức và hỏi kết quả in ra màn hình. |
| **Chương 2** | **Toán tử gán `=` trong `if`** | Phép gán `(x = 0)` trả về giá trị được gán (0 là false). Phép gán `(x = 5)` trả về 5 (khác 0 là true). | `Sai:` `if (x = 5) { ... }`<br>`Đúng:` `if (x == 5) { ... }` | Câu hỏi dạng Output/Trace: Dò vết biến `x` sau khối lệnh rẽ nhánh có phép gán nhầm. |
| **Chương 2** | **Đoản mạch logic (Short-circuit)** | Trong biểu thức `A && B`, nếu `A` sai thì `B` không được tính. Trong `A || B`, nếu `A` đúng thì `B` không được tính. | `int x = 0; if (0 && ++x);` $\to$ giá trị `x` vẫn là `0`! | Câu hỏi dạng Output/Trace: Đoán giá trị biến sau biểu thức có toán tử tăng giảm trong nhánh đoản mạch. |
| **Chương 2** | **Quên xóa đệm `stdin`** | Phím Enter lưu lại ký tự `\n` trong bộ đệm bàn phím, khiến lệnh đọc ký tự hoặc đọc chuỗi kế tiếp đọc ngay `\n` và bỏ qua nhập liệu. | `Sai:` `scanf("%d", &n); scanf("%c", &ch);`<br>`Đúng:` `scanf("%d", &n); scanf(" %c", &ch);` | Câu hỏi dạng Debug: Sửa lỗi chương trình bị nhảy qua không cho người dùng nhập ký tự. |
| **Chương 3** | **Chấm phẩy sau `if`/`for`/`while`** | Thêm `;` ngay sau biểu thức điều kiện biến thân lệnh thành câu lệnh rỗng (Null statement). | `Sai:` `if (x > 0); printf("Duong");`<br>`Đúng:` `if (x > 0) printf("Duong");` | Câu hỏi dạng Output/Trace: Tìm kết quả in ra khi `x = -5` nhưng vẫn in `"Duong"`. |
| **Chương 3** | **Trôi nhánh trong `switch-case`** | Thiếu lệnh `break` khiến chương trình thực thi trượt xuống tất cả các nhánh `case` kế tiếp cho đến khi gặp `break` hoặc hết `switch`. | Bỏ quên `break` ở `case 1:` làm chạy luôn mã của `case 2:`. | Câu hỏi dạng Output/Trace: Dự đoán output khi rơi vào case không có `break`. |
| **Chương 3** | **Vấn đề Dangling Else** | Trình biên dịch C luôn gắn `else` với lệnh `if` gần nó nhất mà chưa có `else`. | `if (a > 0) if (b > 0) x = 1; else x = 2;` (`else` thuộc về `b > 0`). | Câu hỏi dạng Lý thuyết/Trace: Phân tích khối thực thi khi dùng `if` lồng nhau không có cặp ngoặc `{}`. |
| **Chương 4** | **Truyền tham trị (Pass-by-value)** | Tham số hàm nhận một bản sao độc lập; thay đổi giá trị tham số trong hàm không ảnh hưởng tới biến truyền vào. | `Sai:` `void swap(int a, int b)`<br>`Đúng:` `void swap(int *a, int *b)` | Câu hỏi dạng Debug: Chọn chữ ký hàm đúng để hoán vị hai biến. |
| **Chương 4** | **Tràn ngăn xếp đệ quy (Stack Overflow)** | Đệ quy thiếu điều kiện dừng (Base case) hoặc điều kiện dừng không bao giờ đạt tới, làm đầy vùng nhớ Stack. | Gọi `f(n) { return f(n - 1); }` không có `if (n <= 1)`. | Câu hỏi dạng Debug/Theory: Xác định nguyên nhân gây lỗi Runtime crash trong hàm đệ quy. |
| **Chương 4** | **Thời gian sống của biến `static`** | Biến `static` cục bộ không bị hủy khi thoát hàm; nó duy trì giá trị qua các lần gọi tiếp theo. | Gọi hàm 3 lần liên tiếp, biến `static int count = 0; count++;` có giá trị `3`. | Câu hỏi dạng Output/Trace: Tính giá trị in ra sau một chuỗi lời gọi hàm có biến `static`. |
| **Chương 5** | **Vượt biên mảng (Out-of-Bounds)** | Mảng $N$ phần tử chỉ có chỉ số từ $0$ đến $N-1$; truy cập `a[N]` là truy cập ô nhớ rác ngoài mảng. | `for (int i = 0; i <= n; i++)` $\to$ lỗi tại `i == n`. | Câu hỏi dạng Debug: Phát hiện lỗi vượt biên trong vòng lặp duyệt mảng. |
| **Chương 5** | **So sánh chuỗi bằng `==`** | Toán tử `==` so sánh hai địa chỉ con trỏ của hai mảng chuỗi chứ không so sánh nội dung ký tự. | `Sai:` `if (str == "abc")`<br>`Đúng:` `if (strcmp(str, "abc") == 0)` | Câu hỏi dạng Debug / Fill-in: Điền đúng hàm thư viện so sánh nội dung chuỗi. |
| **Chương 5** | **Kích thước chuỗi thiếu `\0`** | Chuỗi ký tự có độ dài $N$ cần tối thiểu $N+1$ bytes để chứa ký tự kết thúc `\0`. | `char s[5] = "Hello";` $\to$ không đủ chỗ cho `\0`. | Câu hỏi dạng Lý thuyết: Xác định số lượng byte tối thiểu cần cấp phát cho chuỗi. |
| **Chương 6** | **Con trỏ hoang dã (Wild Pointer)** | Con trỏ chưa khởi tạo trỏ tới địa chỉ ngẫu nhiên trong bộ nhớ; giải tham chiếu `*p` sẽ gây lỗi vi phạm truy cập (Access Violation). | `int *p; *p = 10;` $\to$ crash ngay lập tức! | Câu hỏi dạng Debug: Nhận diện lỗi crash bộ nhớ và cách sửa (`p = &x;` hoặc `malloc`). |
| **Chương 6** | **Thứ tự `*p++` vs `(*p)++`** | Toán tử `++` hậu tố có độ ưu tiên cao hơn `*`. `*p++` tăng địa chỉ con trỏ `p`, còn `(*p)++` tăng giá trị ô nhớ. | Cho `p` trỏ mảng, thực hiện `*p++` và hỏi giá trị trả về và địa chỉ của `p`. | Câu hỏi dạng Output/Trace kinh điển trong các đề thi đại học. |
| **Chương 6** | **Rò rỉ bộ nhớ (Memory Leak)** | Vùng nhớ cấp phát bằng `malloc`/`calloc` trên Heap không được giải phóng bằng `free()`. | Thoát hàm mà quên `free(ptr)`. | Câu hỏi dạng Debug/Theory: Xác định đoạn mã gây rò rỉ bộ nhớ. |
| **Chương 7** | **Toán tử `.` vs `->`** | Dùng toán tử `.` cho biến struct thường, dùng toán tử mũi tên `->` cho con trỏ trỏ tới struct. | `SinhVien *p; p.mssv;` $\to$ sai cú pháp, phải là `p->mssv`. | Câu hỏi dạng Fill-in: Điền đúng toán tử truy xuất thành phần struct. |
| **Chương 7** | **Đệm bộ nhớ Struct Padding** | Trình biên dịch tự động chèn các byte đệm để căn chỉnh địa chỉ theo bội số của trường lớn nhất. | `struct { char c; int i; };` có kích thước 8 bytes (chứ không phải 5 bytes). | Câu hỏi dạng Output: Tính giá trị của toán tử `sizeof(struct)`. |
| **Chương 7** | **Ghi đè dữ liệu trong `union`** | Tất cả thành viên của `union` chia sẻ cùng một địa chỉ bắt đầu; ghi vào thành viên này làm biến đổi dữ liệu thành viên kia. | Gán `u.f = 2.5f;` làm mất giá trị của `u.i` trước đó. | Câu hỏi dạng Output/Trace: Đoán kết quả in ra của các trường trong `union`. |
| **Chương 8** | **Vòng lặp `while (!feof(fp))`** | Cờ `feof` chỉ bật sau khi đã có một lệnh đọc thất bại vượt qua mốc cuối file; dẫn đến xử lý lặp 2 lần bản ghi cuối cùng. | Dùng `while (!feof(fp)) fread(...)` $\to$ in bản ghi cuối 2 lần. | Câu hỏi dạng Debug: Sửa vòng lặp đọc file chuẩn (`while (fread(...) == 1)`). |
| **Chương 8** | **Mở file sai chế độ (`"w"` vs `"a"`)** | Mở ở chế độ `"w"` sẽ xóa trắng nội dung tệp cũ; muốn ghi nối tiếp bắt buộc phải dùng `"a"`. | Chương trình ghi thêm nhật ký nhưng vô tình xóa sạch dữ liệu cũ. | Câu hỏi dạng Lý thuyết/Debug: Chọn đúng chuỗi mode mở tệp. |
| **Chương 9** | **Giải phóng mảng động C++** | Mảng động cấp phát bằng `new[]` bắt buộc phải giải phóng bằng `delete[]`. | `Sai:` `delete arr;`<br>`Đúng:` `delete[] arr;` | Câu hỏi dạng Debug: Phát hiện lỗi rò rỉ bộ nhớ khi giải phóng đối tượng mảng C++. |
| **Chương 9** | **Tham chiếu chưa khởi tạo** | Biến tham chiếu trong C++ là một bí danh (Alias), bắt buộc phải được gán vào một biến có sẵn ngay lúc khai báo. | `int &ref;` $\to$ lỗi biên dịch ngay lập tức! | Câu hỏi dạng Lý thuyết/Debug: Phân biệt quy tắc khai báo biến con trỏ vs biến tham chiếu. |
| **Chương 9** | **Thiếu hàm hủy ảo (Virtual Destructor)** | Khi xóa đối tượng dẫn xuất thông qua con trỏ lớp cơ sở đa hình (`Base *p = new Derived(); delete p;`), nếu lớp cơ sở không có `virtual ~Base()`, hàm hủy của lớp dẫn xuất sẽ không được kích hoạt, gây rò rỉ tài nguyên. | `Sai:` `class Base { ~Base(); };`<br>`Đúng:` `class Base { virtual ~Base(); };` | Câu hỏi dạng Lý thuyết/Debug: Nhận diện lỗi rò rỉ bộ nhớ trong mô hình kế thừa đa hình C++. |

---

## 6. TIÊU CHÍ NGHIỆM THU & LỘ TRÌNH TRIỂN KHAI PHASE 2 (ACCEPTANCE CRITERIA & ROADMAP)

### 6.1. Tiêu chí Nghiệm thu Phase 1 (Acceptance Checklist)
- [x] **AC1 - Tính đầy đủ và bao phủ**: Đã chuẩn hóa cây danh mục 9 chương hợp nhất trọn vẹn hai cuốn giáo trình gốc (`DC2TT23` 591 trang UTT và `Ngôn ngữ lập trình C_ebook.pdf` 211 trang HCMUTE), bao gồm cả chương 9 kết nối C++ hiện đại.
- [x] **AC2 - Ánh xạ số trang kép chuẩn xác**: 100% các chương đều có tọa độ dải trang kép được xác minh thực tế:
  * Giáo trình 591 trang UTT: $\text{Offset} = 0$ (Trang in trùng khớp 1:1 với trang PDF 1-based).
  * Giáo trình 211 trang HCMUTE: $\text{Offset} = -3$ ($\text{Trang in} = \text{Trang PDF} - 3$).
- [x] **AC3 - Ma trận phân bổ định lượng cân đối 100%**:
  * Ngân hàng 270 câu trắc nghiệm đạt đúng tỷ lệ 4 dạng câu: 108 Lý thuyết (40%), 81 Output/Trace (30%), 54 Debug (20%), 27 Fill-in (10%).
  * Độ khó phân hóa chuẩn: 67 Dễ (24.8%), 135 Trung bình (50.0%), 68 Khó (25.2%).
  * Bộ đề thi thử chuẩn 45 câu / 90 phút có bảng bốc đề chi tiết từng chương (3 đến 6 câu/chương).
  * Hệ thống 125 Thẻ ghi nhớ (Flashcards) bao phủ toàn bộ các định nghĩa và cú pháp hạt nhân.
  * Danh mục 32 Bài tập tự luận lập trình (Programming Essays) có đề bài, hướng dẫn thuật toán và khung code giải pháp C/C++ chuẩn mực.
- [x] **AC4 - Bảng phân tích sư phạm bẫy đề thi**: Cung cấp đầy đủ 26 cạm bẫy học thuật điển hình phân loại theo 9 chương (Ch1: 2, Ch2: 4, Ch3: 3, Ch4: 3, Ch5: 3, Ch6: 3, Ch7: 3, Ch8: 2, Ch9: 3 = tổng 26) để làm căn cứ ra đề thi chất lượng cao ở Phase 2.

---

### 6.2. Thiết kế Lược đồ Dữ liệu JSON Chuẩn hóa cho Phase 2

Nhằm đảm bảo dữ liệu học liệu được tích hợp mượt mà vào giao diện Single Page Application tĩnh (React + TypeScript + Tailwind CSS) ở Phase 2, cấu trúc dữ liệu JSON được chuẩn hóa như sau:

#### Lược đồ Câu hỏi Trắc nghiệm (Question Schema):
```typescript
export interface Question {
  id: string;               // Ví dụ: "Q-02-05" (Chương 2, câu 5)
  chapterId: number;        // Từ 1 đến 9
  type: 'THEORY' | 'TRACE' | 'DEBUG' | 'FILL_IN';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  prompt: string;           // Nội dung câu hỏi (hỗ trợ Markdown / Code block)
  codeSnippet?: string;     // Đoạn mã C/C++ đi kèm nếu có
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;      // Giải thích chi tiết tại sao đúng/sai & bẫy đề thi
  reference: {
    uttPage: string;        // Trang giáo trình UTT 591p
    hcmutePage: string;     // Trang giáo trình HCMUTE 211p
    section: string;        // Mục kiến thức liên quan
  };
  mockExamPreset?: boolean; // Đánh dấu thuộc đề thi thử chuẩn 45 câu
}
```

#### Lược đồ Thẻ Ghi nhớ (Flashcard Schema):
```typescript
export interface Flashcard {
  id: string;               // Ví dụ: "FC-05-08"
  chapterId: number;        // Từ 1 đến 9
  frontConcept: string;     // Khái niệm / Từ khóa ở mặt trước
  backDefinition: string;   // Định nghĩa cô đọng ở mặt sau
  codeHighlight?: string;   // Đoạn code ví dụ minh họa 3-6 dòng
  referencePage: string;    // Trang tham chiếu giáo trình
}
```

#### Lược đồ Bài tập Tự luận (Essay Problem Schema):
```typescript
export interface ProgrammingEssay {
  id: string;               // Ví dụ: "PROG-06-01"
  chapterId: number;
  title: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  description: string;      // Yêu cầu đề bài
  inputExample: string;
  outputExample: string;
  guidance: string[];       // Hướng dẫn thuật toán từng bước
  referenceCode: string;    // Mã nguồn giải pháp tham chiếu chuẩn
}
```

---

### 6.3. Lộ trình Triển khai Kỹ thuật Phase 2

Sau khi người dùng phê duyệt văn bản đặc tả `PHASE1_CURRICULUM_ALLOCATION.md`, tiến trình Phase 2 sẽ được thực thi theo 3 giai đoạn kế tiếp:

1. **Giai đoạn 2.1 — Khởi tạo Kho Dữ liệu Số hóa (Content Data Generation)**:
   - Biên soạn hoàn chỉnh 270 câu hỏi trắc nghiệm dưới dạng các tệp dữ liệu tĩnh `data/questions/chapter_01.ts` đến `chapter_09.ts`.
   - Đóng gói 125 thẻ ghi nhớ vào `data/flashcards.ts`.
   - Đóng gói 32 bài tập tự luận và mã giải pháp vào `data/essays.ts`.
   - Tạo bộ chỉ mục tìm kiếm văn bản toàn diện (Full-text Search Index) cho phép người học tra cứu tức thì theo từ khóa, hàm thư viện và khái niệm.

2. **Giai đoạn 2.2 — Phát triển Giao diện 2 Ngăn Thông minh (Dual-Pane Interactive UI)**:
   - Nâng cấp giao diện React + TypeScript:
     * Cột chính: Khu vực tương tác trắc nghiệm phản hồi tức thì, hiển thị giải thích chi tiết và phân loại dạng câu.
     * Cột phụ / Drawer trượt bên phải: Tra cứu lý thuyết chi tiết theo thời gian thực (hiển thị trang giáo trình và tiểu mục tương ứng với câu hỏi đang làm).
   - Module Chế độ Thi thử Chuẩn 45 câu / 90 phút: Bộ đếm thời gian ngược, cơ chế lưu trạng thái làm bài, nộp bài và chấm điểm tự động.
   - Module Ôn Thẻ Nhớ (Flashcards Carousel): Lật thẻ tương tác 3D mượt mà.
   - Module Luyện Bài tập Tự luận (Code Showcase & Copy): Hiển thị đề bài, hướng dẫn thuật toán và khung code giải pháp có tô màu cú pháp (Syntax Highlighting).

3. **Giai đoạn 2.3 — Kiểm thử Tự động, Đóng gói & Nghiệm thu (Verification & Deployment)**:
   - Chạy build kiểm tra TypeScript: `npm run build` không phát sinh bất kỳ cảnh báo hoặc lỗi cú pháp nào.
   - Kiểm tra tương thích lưu trữ `localStorage`: Đảm bảo tiến độ học tập, lịch sử thi thử và danh sách câu hỏi đánh dấu yêu thích được lưu bền vững trên trình duyệt.
   - Bàn giao sản phẩm hoàn thiện cho người dùng.

---

### 6.4. Tiêu chuẩn Thẩm định Sư phạm & Kiểm toán Chống Bias Đoán mò (Psychometric Anti-Bias Gate)

Để đảm bảo chất lượng khảo thí đại học và triệt tiêu hoàn toàn khả năng sinh viên đoán mò dựa vào hình thức câu hỏi thay vì kiến thức thực chất, toàn bộ 270 câu hỏi MCQ của Phase 2 phải vượt qua 5 tiêu chí kiểm định đo lường sư phạm (Psychometric Anti-Bias Standards) được tự động hóa qua script `scripts/verify_mcq_bias.py` (`npm run test:bias`):

1. **[BIAS-01] Cân bằng độ dài 4 phương án (Chênh lệch ≤ 20%)**:
   - Trong mỗi câu hỏi trắc nghiệm đơn 4 phương án, độ chênh lệch ký tự giữa phương án dài nhất ($L_{max}$) và ngắn nhất ($L_{min}$) tính theo công thức: $\Delta = \frac{L_{max} - L_{min}}{L_{max}} \times 100\%$ bắt buộc phải $\le 20\%$.
   - Triệt tiêu hoàn toàn hiện tượng phương án đúng được viết quá dài dòng, cẩn thận, trong khi các phương án sai viết cẩu thả, ngắn ngủn.

2. **[BIAS-02] Phương án sai phải hợp lý (Plausible Distractors)**:
   - Phương án sai không được là các câu bịa vô nghĩa, mà bắt buộc phải đại diện cho các quan niệm sai lầm, bẫy cú pháp, bẫy logic thực tế mà sinh viên hay mắc phải:
     * Nhầm lẫn giữa gán `=` và so sánh `==` trong biểu thức điều kiện.
     * Nhầm lẫn thứ tự ưu tiên toán tử (operator precedence) và tiền tố/hậu tố (`++i` vs `i++`).
     * Lỗi con trỏ trỏ vào vùng nhớ rác (wild/dangling pointer), dereference con trỏ NULL.
     * Lỗi lệch 1 chỉ số mảng (off-by-one error: truy cập `arr[N]` trong mảng $N$ phần tử).
     * Bỏ sót lệnh `break` trong `switch-case` (fall-through).
     * Nhầm lẫn giữa truyền tham trị (pass-by-value) và truyền tham chiếu/con trỏ (pass-by-pointer).
   - Mỗi câu hỏi đều phải có trường giải thích chi tiết phân tích lý do tại sao phương án nhiễu là bẫy.

3. **[BIAS-03] Đáp án đúng thỉnh thoảng là phương án ngắn nhất (Counter-Heuristic)**:
   - Tối thiểu 20% đến 35% số câu hỏi trong ngân hàng phải có đáp án đúng là phương án có độ dài ngắn nhất trong 4 lựa chọn.
   - Phá vỡ hoàn toàn tâm lý/mẹo thi cử "nếu không biết thì chọn phương án dài nhất".

4. **[BIAS-04] Phân bổ đều vị trí đáp án A/B/C/D & Triệt tiêu Pattern**:
   - Tỷ lệ đáp án đúng phân bổ ngẫu nhiên độc lập: $A \approx 25\%$, $B \approx 25\%$, $C \approx 25\%$, $D \approx 25\%$ (dung sai tối đa $\pm 3\%$).
   - Kiểm định Chi-Square Goodness-of-Fit đạt giá trị $\chi^2 < 7.815$ ($p > 0.05$).
   - Chuỗi đáp án trùng lặp liên tiếp tối đa (Max Run) $\le 2$ câu (tuyệt đối không để xảy ra 3 câu liên tiếp cùng đáp án A-A-A hay chuỗi tuần hoàn A-B-C-D).

5. **[BIAS-05] Triệt tiêu các từ khóa đoán mò hình thức (Zero Giveaways)**:
   - Cấm 100% việc sử dụng các phương án lười biếng: "Tất cả các phương án trên đều đúng", "Tất cả đều sai", "Cả A, B và C".
   - Kiểm soát chặt các từ hạn định tuyệt đối ("luôn luôn", "tuyệt đối", "chỉ duy nhất") để không biến phương án thành bẫy lộ liễu.

---
*Tài liệu đặc tả được xác lập chính thức bởi Worker Agent (`worker_spec_writer`) phục vụ công tác thẩm duyệt và nghiệm thu Phase 1.*
