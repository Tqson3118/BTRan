/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch8.ts
 * Thẻ ghi nhớ Flashcard Chương 8 (12 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh8: CFlashcard[] = [
  {
    "id": "c-fc-ch8-001",
    "chapterId": 8,
    "question": "Con Trỏ FILE*",
    "answer": "Con trỏ cấu trúc đại diện cho luồng tệp tin đang mở, lưu thông tin bộ đệm và trạng thái tệp.",
    "frontConcept": "Con Trỏ FILE*",
    "backDefinition": "Con trỏ cấu trúc đại diện cho luồng tệp tin đang mở, lưu thông tin bộ đệm và trạng thái tệp.",
    "codeHighlight": "FILE *fp = fopen(\"data.txt\", \"r\");\nif (fp == NULL) { perror(\"Loi mo file\"); }",
    "referencePage": "UTT tr.499 / HCMUTE tr.177",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Con Trỏ FILE*"
    ]
  },
  {
    "id": "c-fc-ch8-002",
    "chapterId": 8,
    "question": "Hàm fopen() và fclose()",
    "answer": "fopen mở tệp theo chế độ; luôn kiểm tra fp != NULL. fclose đóng tệp và đẩy toàn bộ dữ liệu từ bộ đệm vào đĩa.",
    "frontConcept": "Hàm fopen() và fclose()",
    "backDefinition": "fopen mở tệp theo chế độ; luôn kiểm tra fp != NULL. fclose đóng tệp và đẩy toàn bộ dữ liệu từ bộ đệm vào đĩa.",
    "codeHighlight": "FILE *fp = fopen(\"test.txt\", \"w\");\nfputs(\"Hello\", fp);\nfclose(fp);",
    "referencePage": "UTT tr.502 / HCMUTE tr.179",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Hàm fopen() và fclose()"
    ]
  },
  {
    "id": "c-fc-ch8-003",
    "chapterId": 8,
    "question": "Chế Độ Mở Tệp: \"r\", \"w\", \"a\"",
    "answer": "\"r\" chỉ đọc (file phải có sẵn). \"w\" ghi mới (xóa sạch file cũ về 0 byte). \"a\" ghi nối tiếp vào đuôi file.",
    "frontConcept": "Chế Độ Mở Tệp: \"r\", \"w\", \"a\"",
    "backDefinition": "\"r\" chỉ đọc (file phải có sẵn). \"w\" ghi mới (xóa sạch file cũ về 0 byte). \"a\" ghi nối tiếp vào đuôi file.",
    "codeHighlight": "FILE *f1 = fopen(\"old.txt\", \"w\"); // Xoa sach cu!\nFILE *f2 = fopen(\"log.txt\", \"a\"); // Ghi noi tiep",
    "referencePage": "UTT tr.516 / HCMUTE tr.183",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Chế Độ Mở Tệp: \"r\", \"w\", \"a\""
    ]
  },
  {
    "id": "c-fc-ch8-004",
    "chapterId": 8,
    "question": "Chế Độ Mở Nhị Phân Thêm 'b'",
    "answer": "Thêm 'b' (\"rb\", \"wb\", \"ab\") ngăn Windows tự động chuyển đổi ký tự xuống dòng '\\r\\n' thành '\\n'.",
    "frontConcept": "Chế Độ Mở Nhị Phân Thêm 'b'",
    "backDefinition": "Thêm 'b' (\"rb\", \"wb\", \"ab\") ngăn Windows tự động chuyển đổi ký tự xuống dòng '\\r\\n' thành '\\n'.",
    "codeHighlight": "FILE *fp = fopen(\"image.png\", \"rb\");\n// Bat buoc dung 'rb' cho file nhi phan",
    "referencePage": "UTT tr.518 / HCMUTE tr.184",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Chế Độ Mở Nhị Phân Thêm 'b'"
    ]
  },
  {
    "id": "c-fc-ch8-005",
    "chapterId": 8,
    "question": "Đọc Ghi File Văn Bản fscanf/fprintf",
    "answer": "Tương tự scanf/printf nhưng đối số đầu tiên là con trỏ FILE*. Đọc ghi định dạng văn bản ASCII.",
    "frontConcept": "Đọc Ghi File Văn Bản fscanf/fprintf",
    "backDefinition": "Tương tự scanf/printf nhưng đối số đầu tiên là con trỏ FILE*. Đọc ghi định dạng văn bản ASCII.",
    "codeHighlight": "fprintf(fp, \"ID: %d, Diem: %.2f\\n\", id, diem);\nfscanf(fp, \"%d %f\", &id, &diem);",
    "referencePage": "UTT tr.526 / HCMUTE tr.187",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Đọc Ghi File Văn Bản fscanf/fprintf"
    ]
  },
  {
    "id": "c-fc-ch8-006",
    "chapterId": 8,
    "question": "Đọc File Văn Bản Bằng fgets()",
    "answer": "Đọc từng dòng văn bản an toàn cho đến khi gặp ký tự xuống dòng '\\n' hoặc đạt tối đa size - 1 ký tự.",
    "frontConcept": "Đọc File Văn Bản Bằng fgets()",
    "backDefinition": "Đọc từng dòng văn bản an toàn cho đến khi gặp ký tự xuống dòng '\\n' hoặc đạt tối đa size - 1 ký tự.",
    "codeHighlight": "char line[256];\nwhile (fgets(line, sizeof(line), fp)) {\n    printf(\"%s\", line);\n}",
    "referencePage": "UTT tr.528 / HCMUTE tr.188",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Đọc File Văn Bản Bằng fgets()"
    ]
  },
  {
    "id": "c-fc-ch8-007",
    "chapterId": 8,
    "question": "Hàm fread() Đọc Nhị Phân",
    "answer": "fread(&buffer, size, count, fp): đọc nguyên vẹn khối dữ liệu nhị phân từ đĩa vào RAM. Trả về số phần tử đọc được.",
    "frontConcept": "Hàm fread() Đọc Nhị Phân",
    "backDefinition": "fread(&buffer, size, count, fp): đọc nguyên vẹn khối dữ liệu nhị phân từ đĩa vào RAM. Trả về số phần tử đọc được.",
    "codeHighlight": "SinhVien sv;\nsize_t n = fread(&sv, sizeof(SinhVien), 1, fp);",
    "referencePage": "UTT tr.532 / HCMUTE tr.189",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Hàm fread() Đọc Nhị Phân"
    ]
  },
  {
    "id": "c-fc-ch8-008",
    "chapterId": 8,
    "question": "Hàm fwrite() Ghi Nhị Phân",
    "answer": "fwrite(&buffer, size, count, fp): ghi nguyên bản các byte từ RAM xuống tệp nhị phân.",
    "frontConcept": "Hàm fwrite() Ghi Nhị Phân",
    "backDefinition": "fwrite(&buffer, size, count, fp): ghi nguyên bản các byte từ RAM xuống tệp nhị phân.",
    "codeHighlight": "SinhVien sv = {\"2011001\", 8.5};\nfwrite(&sv, sizeof(SinhVien), 1, fp);",
    "referencePage": "UTT tr.534 / HCMUTE tr.189",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Hàm fwrite() Ghi Nhị Phân"
    ]
  },
  {
    "id": "c-fc-ch8-009",
    "chapterId": 8,
    "question": "Bẫy Vòng Lặp while(!feof(fp))",
    "answer": "feof chỉ bật cờ sau khi đã có một lệnh đọc vượt qua EOF thất bại; dùng while(!feof) sẽ lặp bản ghi cuối thêm 1 lần!",
    "frontConcept": "Bẫy Vòng Lặp while(!feof(fp))",
    "backDefinition": "feof chỉ bật cờ sau khi đã có một lệnh đọc vượt qua EOF thất bại; dùng while(!feof) sẽ lặp bản ghi cuối thêm 1 lần!",
    "codeHighlight": "// Sai: while(!feof(fp)) { fscanf(...); in(); }\n// Dung: while(fscanf(fp, \"%d\", &x) == 1) { in(); }",
    "referencePage": "UTT tr.536 / HCMUTE tr.190",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Bẫy Vòng Lặp while(!feof(fp))"
    ]
  },
  {
    "id": "c-fc-ch8-010",
    "chapterId": 8,
    "question": "Hàm fseek() Định Vị Con Trỏ Tệp",
    "answer": "Di chuyển con trỏ tệp: fseek(fp, offset, origin). origin gồm SEEK_SET (đầu file), SEEK_CUR (hiện tại), SEEK_END (cuối file).",
    "frontConcept": "Hàm fseek() Định Vị Con Trỏ Tệp",
    "backDefinition": "Di chuyển con trỏ tệp: fseek(fp, offset, origin). origin gồm SEEK_SET (đầu file), SEEK_CUR (hiện tại), SEEK_END (cuối file).",
    "codeHighlight": "fseek(fp, 0, SEEK_END); // Nhay xuong cuoi file\nlong sz = ftell(fp);    // Lay kich thuoc file",
    "referencePage": "UTT tr.542 / HCMUTE tr.192",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Hàm fseek() Định Vị Con Trỏ Tệp"
    ]
  },
  {
    "id": "c-fc-ch8-011",
    "chapterId": 8,
    "question": "Hàm ftell() và rewind()",
    "answer": "ftell(fp) trả về vị trí byte hiện tại. rewind(fp) đưa con trỏ tệp quay về đầu tệp (tương đương fseek SEEK_SET 0).",
    "frontConcept": "Hàm ftell() và rewind()",
    "backDefinition": "ftell(fp) trả về vị trí byte hiện tại. rewind(fp) đưa con trỏ tệp quay về đầu tệp (tương đương fseek SEEK_SET 0).",
    "codeHighlight": "rewind(fp); // Dua ve vi tri byte 0",
    "referencePage": "UTT tr.545 / HCMUTE tr.193",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Hàm ftell() và rewind()"
    ]
  },
  {
    "id": "c-fc-ch8-012",
    "chapterId": 8,
    "question": "Truy Cập Ngẫu Nhiên (Random Access)",
    "answer": "Nhảy trực tiếp đến bản ghi thứ k mà không cần duyệt tuần tự từ đầu file bằng công thức fseek(fp, k * sizeof(Record), SEEK_SET).",
    "frontConcept": "Truy Cập Ngẫu Nhiên (Random Access)",
    "backDefinition": "Nhảy trực tiếp đến bản ghi thứ k mà không cần duyệt tuần tự từ đầu file bằng công thức fseek(fp, k * sizeof(Record), SEEK_SET).",
    "codeHighlight": "int k = 5; // Doc ban ghi thu 5\nfseek(fp, k * sizeof(SinhVien), SEEK_SET);\nfread(&sv, sizeof(SinhVien), 1, fp);",
    "referencePage": "UTT tr.548 / HCMUTE tr.194",
    "masteryLevel": "learning",
    "tags": [
      "Chương 8",
      "Flashcard",
      "Truy Cập Ngẫu Nhiên (Random Access)"
    ]
  }
];
