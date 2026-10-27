import os
import sys
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
RAW_DIR = os.path.join(ROOT_DIR, 'raw')
os.makedirs(RAW_DIR, exist_ok=True)

PDF_FILES = [
    {
        'path': os.path.join(ROOT_DIR, 'Ngôn ngữ lập trình C_ebook.pdf'),
        'prefix': 'HCMUTE',
        'full_txt': 'HCMUTE_Ngon_ngu_lap_trinh_C_full.txt',
        'sub_folder': 'HCMUTE_tung_trang',
    },
    {
        'path': os.path.join(ROOT_DIR, 'DC2TT23 - Giao_trinh_ngon_ngu_lap_trinh_C (2).pdf'),
        'prefix': 'UTT',
        'full_txt': 'UTT_DC2TT23_Giao_trinh_ngon_ngu_lap_trinh_C_full.txt',
        'sub_folder': 'UTT_tung_trang',
    }
]

print("=================================================================")
print("📄 BẮT ĐẦU TRÍCH XUẤT VĂN BẢN PDF RA THƯ MỤC RAW")
print("=================================================================\n")

for pdf_info in PDF_FILES:
    pdf_path = pdf_info['path']
    if not os.path.exists(pdf_path):
        print(f"❌ Không tìm thấy file: {pdf_path}")
        continue

    print(f"🔍 Đang mở: {os.path.basename(pdf_path)}...")
    doc = pymupdf.open(pdf_path)
    total_pages = len(doc)
    print(f"   Tổng số trang: {total_pages} trang")

    # 1. File tổng hợp toàn bộ cuốn sách
    full_txt_path = os.path.join(RAW_DIR, pdf_info['full_txt'])
    
    # 2. Thư mục chứa từng trang riêng biệt
    page_folder = os.path.join(RAW_DIR, pdf_info['sub_folder'])
    os.makedirs(page_folder, exist_ok=True)

    total_chars = 0
    with open(full_txt_path, 'w', encoding='utf-8') as full_f:
        # Header file
        full_f.write(f"===============================================================================\n")
        full_f.write(f"TÀI LIỆU TRÍCH XUẤT VĂN BẢN THUẦN (PLAIN TEXT)\n")
        full_f.write(f"Tên file gốc: {os.path.basename(pdf_path)}\n")
        full_f.write(f"Tổng số trang: {total_pages}\n")
        full_f.write(f"Định dạng: UTF-8\n")
        full_f.write(f"===============================================================================\n\n")

        for page_idx in range(total_pages):
            page = doc[page_idx]
            page_text = page.get_text("text")
            page_num = page_idx + 1

            # Ghi vào file full
            full_f.write(f"\n==================== TRANG {page_num} / {total_pages} ====================\n\n")
            full_f.write(page_text)
            full_f.write("\n")

            # Ghi vào file trang riêng
            page_file_name = f"trang_{page_num:03d}.txt"
            page_file_path = os.path.join(page_folder, page_file_name)
            with open(page_file_path, 'w', encoding='utf-8') as page_f:
                page_f.write(f"// Trang {page_num} - {os.path.basename(pdf_path)}\n\n")
                page_f.write(page_text)

            total_chars += len(page_text)

    file_size_kb = os.path.getsize(full_txt_path) / 1024
    print(f"   ✓ Đã xuất file tổng hợp: {pdf_info['full_txt']} ({file_size_kb:.1f} KB, {total_chars:,} ký tự)")
    print(f"   ✓ Đã xuất {total_pages} file trang đơn vào: raw/{pdf_info['sub_folder']}/\n")

# Tạo file README trong raw/
readme_path = os.path.join(RAW_DIR, 'README.md')
with open(readme_path, 'w', encoding='utf-8') as rf:
    rf.write("""# Thư mục Nội dung Text Thô Trích Xuất Từ PDF (raw/)

Thư mục này chứa toàn bộ văn bản thuần (plain text UTF-8) được trích xuất trực tiếp từ 2 tài liệu giáo trình Lập trình C:

## 1. File Toàn Bộ (Full Books)
- `HCMUTE_Ngon_ngu_lap_trinh_C_full.txt`: Toàn bộ 211 trang sách của ĐH Sư phạm Kỹ thuật TP.HCM (TS. Trương Ngọc Sơn chủ biên).
- `UTT_DC2TT23_Giao_trinh_ngon_ngu_lap_trinh_C_full.txt`: Toàn bộ 591 trang sách của ĐH Công nghệ Giao thông Vận tải (TS. Lê Chí Luận chủ biên).

## 2. Thư mục Tách Từng Trang (Per-page Files)
- `HCMUTE_tung_trang/`: Gồm 211 file `trang_001.txt` đến `trang_211.txt` giúp tra cứu chính xác từng trang theo giáo trình.
- `UTT_tung_trang/`: Gồm 591 file `trang_001.txt` đến `trang_591.txt` phục vụ tra cứu số trang tương ứng.

*Mỗi trang đều được đánh dấu tiêu đề rõ ràng, giữ nguyên cấu trúc ký tự tiếng Việt có dấu chuẩn UTF-8.*
""")

print("=================================================================")
print("🎉 HOÀN THÀNH 100% QUÁ TRÌNH TRÍCH XUẤT RA THƯ MỤC RAW!")
print("=================================================================")
