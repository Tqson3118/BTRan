# KIẾN TRÚC VÀ PHƯƠNG PHÁP HẠ TẦNG KIỂM THỬ OPAQUE-BOX (TEST_INFRA.md)
## Dự án Ôn tập Pháp luật đại cương (HCMUTE 2023)

**Tác giả**: E2E Opaque-Box Test Writer (Dual Track Testing)  
**Phiên bản**: 1.0.0  
**Tài liệu quy chiếu gốc**: `ORIGINAL_REQUEST.md` & `PROJECT.md`  
**Ngày ban hành**: 2026-10-26  

---

## 1. TRIẾT LÝ VÀ NGUYÊN TẮC KIỂM THỬ OPAQUE-BOX

### 1.1. Khái niệm Hộp mờ / Hộp đen định hướng yêu cầu (Requirement-Driven Opaque-Box)
Khác với kiểm thử hộp trắng (White-box) phụ thuộc chặt vào tên biến, tên hàm nội bộ của một lập trình viên cụ thể, hạ tầng kiểm thử **Opaque-Box** được xây dựng độc lập hoàn toàn dựa trên:
1. Bản yêu cầu kỹ thuật gốc từ người dùng (`ORIGINAL_REQUEST.md`: R1 - R4).
2. Danh mục 26 tính năng và hợp đồng giao tiếp chuẩn trong kiến trúc hệ thống (`PROJECT.md` line 76-155).
3. Các thuộc tính toán học, dữ liệu giáo trình thực tế (HCMUTE 2023 - 298 trang), và các ràng buộc nghiệp vụ không thể thay đổi.

### 1.2. Cam kết Zero-Facade (Không kiểm thử hình thức)
Mọi ca kiểm thử (test case) trong bộ suite đều tuân thủ nguyên tắc:
- **Xác thực logic thật**: Mọi assertion đều kiểm tra kết quả tính toán thực, trạng thái chuyển đổi máy hữu hạn (FSM), cấu trúc dữ liệu JSON thực tế, hoặc DOM render thực sự.
- **Có nguồn gốc kỳ vọng rõ ràng (Authoritative Ground Truth)**: Giá trị kỳ vọng được trích dẫn trực tiếp từ Giáo trình HCMUTE 2023, công thức tính điểm thang 10, tiêu chuẩn Nghị quyết 27-NQ/TW, Bộ luật Hình sự 2015, Bộ luật Dân sự 2015, BLLĐ 2019, Luật HN&GĐ 2014, Luật PCTN 2018.
- **Tính độc lập & Cách ly**: Mỗi ca kiểm thử tự khởi tạo trạng thái sạch, độc lập với thứ tự chạy và dọn dẹp bộ nhớ/storage sau khi hoàn tất.

---

## 2. PHƯƠNG PHÁP LUẬN 4 TẦNG KIỂM THỬ (4-TIER METHODOLOGY)

```
+-------------------------------------------------------------------------------+
|  TIER 4: REAL-WORLD APPLICATION SCENARIOS                                     |
|  (Hành trình học tập thực tế: Học trọn vẹn, thi thử, xóa sổ câu sai)        |
+-------------------------------------------------------------------------------+
|  TIER 3: CROSS-FEATURE COMBINATIONS (PAIRWISE INTERACTIONS)                   |
|  (Tương tác chéo giữa các module: Làm trắc nghiệm -> Đánh dấu -> Tra cứu)     |
+-------------------------------------------------------------------------------+
|  TIER 2: BOUNDARY & CORNER CASES                                              |
|  (Điểm biên, dữ liệu rỗng, thời gian hết hạn, storage tràn/hỏng)               |
+-------------------------------------------------------------------------------+
|  TIER 1: FEATURE COVERAGE (26 TÍNH NĂNG x >= 5 TEST CASES)                    |
|  (Bao phủ toàn diện 100% tính năng trong Project Inventory, >= 130 tests)      |
+-------------------------------------------------------------------------------+
```

### 2.1. Tier 1 — Feature Coverage (Bao phủ Tính năng)
Mỗi tính năng trong số 26 tính năng tại `PROJECT.md` có tối thiểu **5 ca kiểm thử chuyên biệt**:
- 1 ca kiểm thử Happy Path (đường chính thành công).
- 2 ca kiểm thử Contract & Schema Compliance (tuân thủ kiểu dữ liệu, các trường bắt buộc, liên kết ngoại `articleId`, `chapterId`).
- 2 ca kiểm thử State Mutability & Observability (phản ứng giao diện, cập nhật số liệu, lưu vết hành vi).

### 2.2. Tier 2 — Boundary & Corner Cases (Điểm biên & Trường hợp ngoại lệ)
Áp dụng kỹ thuật Phân vùng tương đương (Equivalence Partitioning) và Phân tích giá trị biên (Boundary Value Analysis - BVA):
- **Chuỗi tìm kiếm**: Tìm kiếm rỗng `""`, chuỗi toàn dấu cách, ký tự đặc biệt regex (`.*+?^${}()|[]\`), chuỗi siêu dài (>1,000 ký tự).
- **Bộ đếm thời gian (Countdown Timer)**: Thời gian bằng 0 giây, âm giây, nhảy bước 1 giây, tự động kích hoạt nộp bài `AUTO_SUBMIT`.
- **Tùy chọn phương án**: Chọn phương án ngoài A/B/C/D, câu hỏi chọn nhiều đáp án (chọn thiếu, chọn thừa, bỏ trống).
- **Lưu trữ suy biến**: Chuỗi JSON méo mó (syntax error), dữ liệu bị cắt cụt, phiên bản schema lỗi thời, LocalStorage bị chặn hoặc tràn hạn mức (QuotaExceededError).
- **Bộ lọc cực đoan**: Bộ lọc không có kết quả, lọc kết hợp mâu thuẫn (Độ khó Khó + Chương rỗng).

### 2.3. Tier 3 — Cross-Feature Combinations (Tương tác Chéo Đôi - Pairwise)
Kiểm thử sự phối hợp liền mạch giữa các tính năng khác nhau:
1. `Practice Mode` $\leftrightarrow$ `Mistake Notebook`: Làm sai câu hỏi $\rightarrow$ hệ thống tự động ghi vào Sổ tay câu sai $\rightarrow$ vào Sổ tay làm đúng lại $\rightarrow$ trạng thái câu hỏi chuyển sang `resolved: true`.
2. `Question Card` $\leftrightarrow$ `Reference Drawer`: Nhấn "Tra cứu lý thuyết" $\rightarrow$ Drawer mở ra, nạp đúng Chương, cuộn tới đúng `articleId`, áp dụng class viền sáng/highlight vàng.
3. `Global Search` $\leftrightarrow$ `Drawer Sync`: Tìm từ khóa không dấu $\rightarrow$ click vào kết quả $\rightarrow$ Drawer mở ra vị trí lý thuyết chứa từ khóa.
4. `Mock Exam` $\leftrightarrow$ `SessionStorage Crash Recovery`: Đang làm bài thi thử $\rightarrow$ mô phỏng tải lại trang (F5) $\rightarrow$ khôi phục chính xác các câu đã chọn và thời gian còn lại.
5. `Theme Switcher` $\leftrightarrow$ `User Progress`: Chuyển Dark/Light theme $\rightarrow$ trạng thái theme được lưu bền vững không làm ảnh hưởng đến tiến độ câu hỏi hay điểm thi.

### 2.4. Tier 4 — Real-World Application Scenarios (Kịch bản Ứng dụng Thực tế)
Mô phỏng chân thực các hành trình người học HCMUTE:
- **Kịch bản S1: Sinh viên nhập môn (Onboarding & Học trọn vẹn Chương 1)**: Người học mới bắt đầu học lý thuyết Chương 1, làm 10 câu trắc nghiệm đầu tiên, xem giải thích chi tiết, đánh dấu 2 câu khó, kiểm tra dashboard thống kê tiến độ đạt 40%.
- **Kịch bản S2: Kỳ thi thử áp lực cao (Full Exam Simulation 40 câu)**: Khởi tạo đề 40 câu (50 phút), làm bài trải dài 7 chương, cắm cờ các câu phân vân, nộp bài ở phút 35, nhận điểm hệ 10 và xem phân tích điểm mạnh/yếu từng chương.
- **Kịch bản S3: Chiến dịch xóa sổ câu sai (Mistake Elimination Drill)**: Mở Sổ tay câu sai gom các câu từng trả lời sai trong quá trình luyện tập, giải lại từng câu, kiểm tra việc tự động gỡ khỏi danh sách câu sai khi đã nắm vững.
- **Kịch bản S4: Luyện thẻ nhớ thần tốc (Flashcard Spaced Repetition)**: Ôn tập 20 thẻ flashcard, lật mặt sau xem định nghĩa, phân loại "Đã thuộc" và "Cần ôn lại", lọc học lại danh sách "Cần ôn lại" cho tới khi làm chủ 100%.
- **Kịch bản S5: Chuỗi ngày học liên tục & Tiến độ tích lũy (Study Streak & History)**: Mô phỏng người học truy cập qua các ngày khác nhau, tích lũy lịch sử thi thử (tối đa 50 bài), tính toán điểm trung bình và biểu đồ tiến bộ.
- **Kịch bản S6: Phục hồi sau thảm họa dữ liệu (Disaster Recovery)**: Trình duyệt bị lỗi làm hỏng key `hcmute_law_progress_v1`, ứng dụng tự động phát hiện, lưu bản sao lưu (backup) và khôi phục trạng thái mặc định mà không xuất hiện bất kỳ crash màn hình trắng nào.

---

## 3. MA TRẬN 26 TÍNH NĂNG & ĐẶC TẢ CHI TIẾT (TIER 1 COVERAGE)

Bảng phân bổ chi tiết $\ge 5$ ca kiểm thử cho từng tính năng:

| STT | Mã tính năng | Tên tính năng | Số ca test | Mã các ca kiểm thử chính |
|:---:|:---|:---|:---:|:---|
| 1 | FEAT-01 | Toolchain & App Shell Scaffolding | 5 | TC-01-A đến TC-01-E |
| 2 | FEAT-02 | Intelligent 2-Column Responsive Layout | 5 | TC-02-A đến TC-02-E |
| 3 | FEAT-03 | Core State & Persistence Engine | 5 | TC-03-A đến TC-03-E |
| 4 | FEAT-04 | Digitization of Chapter 1 (Nhà nước) | 5 | TC-04-A đến TC-04-E |
| 5 | FEAT-05 | Digitization of Chapter 2 (Pháp luật) | 5 | TC-05-A đến TC-05-E |
| 6 | FEAT-06 | Digitization of Chapter 3 (Hình sự) | 5 | TC-06-A đến TC-06-E |
| 7 | FEAT-07 | Digitization of Chapter 4 (Dân sự) | 5 | TC-07-A đến TC-07-E |
| 8 | FEAT-08 | Digitization of Chapter 5 (Lao động) | 5 | TC-08-A đến TC-08-E |
| 9 | FEAT-09 | Digitization of Chapter 6 (Hôn nhân GĐ) | 5 | TC-09-A đến TC-09-E |
| 10 | FEAT-10 | Digitization of Chapter 7 (Tham nhũng) | 5 | TC-10-A đến TC-10-E |
| 11 | FEAT-11 | Standardized Question Bank (195 MCQs) | 5 | TC-11-A đến TC-11-E |
| 12 | FEAT-12 | Standardized Flashcard Set (98 cards) | 5 | TC-12-A đến TC-12-E |
| 13 | FEAT-13 | Interactive Chapter Practice Mode | 5 | TC-13-A đến TC-13-E |
| 14 | FEAT-14 | Dynamic Synchronized Reference Drawer | 5 | TC-14-A đến TC-14-E |
| 15 | FEAT-15 | Difficulty & Topic Filter System | 5 | TC-15-A đến TC-15-E |
| 16 | FEAT-16 | Mistake Review Notebook | 5 | TC-16-A đến TC-16-E |
| 17 | FEAT-17 | Bookmark / Favorite Questions | 5 | TC-17-A đến TC-17-E |
| 18 | FEAT-18 | Interactive Flashcard Study Mode | 5 | TC-18-A đến TC-18-E |
| 19 | FEAT-19 | Timed Mock Exam Simulation Engine | 5 | TC-19-A đến TC-19-E |
| 20 | FEAT-20 | Exam Auto-Submit & Crash Recovery | 5 | TC-20-A đến TC-20-E |
| 21 | FEAT-21 | Mock Exam Scoring & In-depth Review | 5 | TC-21-A đến TC-21-E |
| 22 | FEAT-22 | Global Vietnamese Full-Text Search | 5 | TC-22-A đến TC-22-E |
| 23 | FEAT-23 | Comprehensive Learning Dashboard | 5 | TC-23-A đến TC-23-E |
| 24 | FEAT-24 | E2E Opaque-Box Test Suite (Tiers 1-4) | 5 | TC-24-A đến TC-24-E |
| 25 | FEAT-25 | Final Integration & E2E Test Pass | 5 | TC-25-A đến TC-25-E |
| 26 | FEAT-26 | Adversarial Hardening (Tier 5) | 5 | TC-26-A đến TC-26-E |
| **TỔNG** | **26 Tính năng** | **Hệ thống ôn thi toàn diện** | **130** | **130 Test Cases Tier 1** |

---

## 4. QUY TRÌNH THỰC THI VÀ XÁC MINH TỰ ĐỘNG

### 4.1. Các tệp thực thi kiểm thử
1. `scripts/e2e-tier-tests.mjs`: Script Node.js ESM kiểm tra toàn diện Tier 1, Tier 2, Tier 3, Tier 4.
2. `scripts/smoke-test.mjs`: Automated Headless DOM/HTTP Smoke Test xác thực khởi động máy chủ, kiểm tra response HTTP 200, phân tích DOM giao diện 2 cột, kiểm tra đóng mở drawer, trả lời câu hỏi và lưu trữ localStorage.
3. `scripts/test-storage.ts`: Kiểm thử đơn vị bộ bọc an toàn storage.
4. `scripts/test-adversarial-storage.ts`: Kiểm thử 32 ca tấn công / áp lực lưu trữ (Tier 5).

### 4.2. Câu lệnh chạy kiểm thử
- Chạy toàn bộ Tier 1-4:
  ```powershell
  node scripts/e2e-tier-tests.mjs
  ```
- Chạy Headless Smoke Test:
  ```powershell
  node scripts/smoke-test.mjs
  ```
- Kiểm thử lưu trữ cơ bản:
  ```powershell
  node --experimental-strip-types scripts/test-storage.ts
  ```

---

## 5. TIÊU CHUẨN NGHIỆM THU (ACCEPTANCE CRITERIA)
- Tỷ lệ vượt qua (Pass Rate): **100%** trên toàn bộ 4 Tiers.
- Thời gian thực thi toàn bộ suite: $< 5.0$ giây.
- Mã thoát tiến trình (Exit code): `0`.
- Không có biệt lệ không được bắt (zero unhandled exceptions).
