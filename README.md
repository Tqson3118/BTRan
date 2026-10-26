# BTRan - Hệ Thống Ôn Thi Pháp Luật Đại Cương HCMUTE 2023

Ứng dụng web ôn thi trắc nghiệm và tra cứu lý thuyết đối chiếu 2 cột thông minh dành cho môn **Pháp luật đại cương** - Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE), số hóa từ toàn bộ 7 chương giáo trình (298 trang).

---

## 🌟 Tính Năng Nổi Bật

1. **Hiệu ứng Chuyển Đổi Theme Sáng / Tối Mượt Mà (Circular Reveal Animation)**:
   - Tích hợp chuẩn **View Transitions API** (`document.startViewTransition`).
   - Tính toán hình học Pythagoras (`Math.hypot`) bung nở hoặc thu hồi theo hình tròn (`clip-path: circle(...)`) xuất phát trực tiếp từ vị trí con trỏ chuột khi click.
   - Hỗ trợ đầy đủ chế độ nền tối (Dark mode) trên toàn bộ các thành phần: Header, Ma trận câu hỏi, Thẻ câu hỏi trắc nghiệm, Thẻ ghi nhớ 3D Flashcard, Sổ tay câu sai, Báo cáo năng lực và Modal tìm kiếm tức thời.

2. **Bố Cục 2 Cột Song Song Thông Minh (Two-Column Layout)**:
   - Cột chính (Interactive Workspace): Luyện tập câu hỏi, thi thử mô phỏng, thẻ nhớ flashcard, sổ tay câu sai, thống kê.
   - Ngăn tra cứu lý thuyết (Theory Drawer): Mở song song trên Desktop, trượt mượt mà trên Mobile/Tablet. Khi người dùng bấm "Tra cứu lý thuyết", Drawer tự động cuộn đến đúng điều luật giáo trình và kích hoạt hiệu ứng highlight vàng nhấp nháy.

3. **Ngân Hàng Dữ Liệu Giáo Trình Toàn Diện (Chuẩn 100% 7 Chương HCMUTE)**:
   - **195 câu trắc nghiệm** (cả Single-choice và Multi-choice), bao phủ 7 chương theo chuẩn độ khó (Dễ / Trung bình / Khó), có dẫn xuất số trang và căn cứ điều luật cụ thể.
   - **98 thẻ ghi nhớ thuật ngữ (Flashcard)** 2 mặt hiệu ứng 3D kèm định nghĩa chuẩn, ý then chốt và mẹo tránh bẫy thi trắc nghiệm.
   - **7 chương lý thuyết số hóa** đầy đủ từng mục từ trang 12 đến trang 298.

4. **Chế Độ Thi Thử Mô Phỏng (Mock Exam Mode)**:
   - 3 Preset chuẩn: 30 câu (30 phút), 40 câu (45 phút - chuẩn HCMUTE), 50 câu (60 phút).
   - Tự động lưu tiến độ vào `sessionStorage` (chống mất bài thi khi vô tình F5/reload trình duyệt).
   - Bảng phân tích năng lực chi tiết theo từng chương sau khi nộp bài.

5. **Sổ Tay Câu Sai Tự Động (Mistake Notebook)**:
   - Tự động ghi nhận khi làm sai bất kỳ câu nào trong quá trình luyện tập hoặc thi thử.
   - Cung cấp chế độ làm lại; khi trả lời đúng, hệ thống sẽ tự động gỡ bỏ khỏi sổ tay sau 1.2s.

6. **Tìm Kiếm Tức Thời (Ctrl + K)**:
   - Hỗ trợ tìm kiếm tiếng Việt không dấu (`removeVietnameseAccents`) xuyên suốt toàn bộ giáo trình, câu trắc nghiệm và thẻ nhớ.

7. **Hoạt Động 100% Offline (Client SPA)**:
   - Lưu trữ tiến độ người dùng an toàn trong `localStorage` với cơ chế tự phục hồi dữ liệu hỏng.
   - Không yêu cầu cài đặt backend, sẵn sàng triển khai tĩnh lên GitHub Pages.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 18, TypeScript 5, Vite 6
- **Styling**: Tailwind CSS 3 (Dark mode class-based), CSS clip-path & View Transitions API
- **Icons**: Lucide React
- **Hiệu ứng ăn mừng**: Canvas Confetti
- **Testing**: 15 Smoke acceptance tests + 172 E2E Opaque-box tests (100% pass)

---

## 🚀 Cài Đặt và Khởi Chạy

```bash
# Cài đặt thư viện
npm install

# Khởi chạy server phát triển
npm run dev

# Kiểm tra kiểu dữ liệu TypeScript
npm run build
```

---

*Bản quyền nội dung thuộc Giáo trình Pháp luật đại cương HCMUTE 2023.*
