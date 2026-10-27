/**
 * src/subjects/c-lang/data/essays\essays-ch8.ts
 * Danh mục bài tập tự luận lập trình Chương 8 (3 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh8: CEssay[] = [
  {
    "id": "PROG-08-01",
    "chapterId": 8,
    "title": "Bài tập 8.1: Thống kê Tệp Văn bản: Đếm Dòng, Từ, Ký tự & Tần suất Xuất hiện",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-08-01: Thống kê Tệp Văn bản: Đếm Dòng, Từ, Ký tự & Tần suất Xuất hiện\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <ctype.h>\n\nint main(void) {\n    FILE *fin = fopen(\"input.txt\", \"r\");\n    if (!fin) {\n        printf(\"Khong the mo tep input.txt!\\n\");\n        return 1;\n    }\n    int lines = 0, words = 0, chars = 0;\n    int count[26] = {0};\n    int inWord = 0, ch;\n\n    while ((ch = fgetc(fin)) != EOF) {\n        chars++;\n        if (ch == '\\n') lines++;\n        if (isalpha(ch)) count[tolower(ch) - 'a']++;\n        if (isspace(ch)) inWord = 0;\n        else if (!inWord) { inWord = 1; words++; }\n    }\n    fclose(fin);\n\n    FILE *fout = fopen(\"report.txt\", \"w\");\n    if (fout) {\n        fprintf(fout, \"=== KET QUA THONG KE TEP ===\\n\");\n        fprintf(fout, \"So ky tu: %d\\nSo tu: %d\\nSo dong: %d\\n\", chars, words, lines);\n        fprintf(fout, \"Tan suat chu cai:\\n\");\n        for (int i = 0; i < 26; i++) {\n            if (count[i] > 0) fprintf(fout, \"%c: %d\\n\", 'a' + i, count[i]);\n        }\n        fclose(fout);\n        printf(\"Da xuat bao cao vao report.txt thanh cong!\\n\");\n    }\n    return 0;\n}",
    "tags": [
      "Chương 8",
      "Tự luận",
      "Thống kê Tệp Văn bản: Đếm Dòng, Từ, Ký tự & Tần suất Xuất hiện"
    ]
  },
  {
    "id": "PROG-08-02",
    "chapterId": 8,
    "title": "Bài tập 8.2: Cơ sở Dữ liệu Sinh viên Nhị phân Hỗ trợ Truy cập Ngẫu nhiên (Random Access)",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-08-02: Cơ sở Dữ liệu Sinh viên Nhị phân Hỗ trợ Truy cập Ngẫu nhiên (Random Access)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    int id;\n    char name[30];\n    float gpa;\n} Student;\n\nint main(void) {\n    FILE *fp = fopen(\"students.dat\", \"wb+\");\n    if (!fp) return 1;\n\n    Student list[3] = {\n        {1, \"Le Van A\", 8.2f},\n        {2, \"Tran Thi B\", 7.5f},\n        {3, \"Pham Van C\", 9.0f}\n    };\n    fwrite(list, sizeof(Student), 3, fp);\n\n    // Doc ban ghi thu 2 (index = 1) dung fseek\n    fseek(fp, 1 * sizeof(Student), SEEK_SET);\n    Student s;\n    fread(&s, sizeof(Student), 1, fp);\n    printf(\"Ban ghi index 1: ID=%d, Ten=%s, GPA=%.2f\\n\", s.id, s.name, s.gpa);\n\n    // Cap nhat diem ban ghi index 1\n    s.gpa = 8.8f;\n    fseek(fp, 1 * sizeof(Student), SEEK_SET);\n    fwrite(&s, sizeof(Student), 1, fp);\n\n    fclose(fp);\n    return 0;\n}",
    "tags": [
      "Chương 8",
      "Tự luận",
      "Cơ sở Dữ liệu Sinh viên Nhị phân Hỗ trợ Truy cập Ngẫu nhiên (Random Access)"
    ]
  },
  {
    "id": "PROG-08-03",
    "chapterId": 8,
    "title": "Bài tập 8.3: Mã hóa và Giải mã Tệp Luồng bằng Thuật toán XOR Cipher",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-08-03: Mã hóa và Giải mã Tệp Luồng bằng Thuật toán XOR Cipher\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nvoid maHoaXOR(const char *inFile, const char *outFile, unsigned char key) {\n    FILE *fin = fopen(inFile, \"rb\");\n    FILE *fout = fopen(outFile, \"wb\");\n    if (!fin || !fout) {\n        printf(\"Loi mo tep!\\n\");\n        return;\n    }\n    int ch;\n    while ((ch = fgetc(fin)) != EOF) {\n        fputc(ch ^ key, fout);\n    }\n    fclose(fin);\n    fclose(fout);\n    printf(\"Hoan tat thao tac XOR voi tep %s -> %s!\\n\", inFile, outFile);\n}\n\nint main(void) {\n    maHoaXOR(\"source.txt\", \"encrypted.bin\", 0x5A);\n    maHoaXOR(\"encrypted.bin\", \"decrypted.txt\", 0x5A);\n    return 0;\n}",
    "tags": [
      "Chương 8",
      "Tự luận",
      "Mã hóa và Giải mã Tệp Luồng bằng Thuật toán XOR Cipher"
    ]
  }
];
