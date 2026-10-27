/**
 * src/subjects/c-lang/data/essays\essays-ch2.ts
 * Danh mục bài tập tự luận lập trình Chương 2 (4 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh2: CEssay[] = [
  {
    "id": "PROG-02-01",
    "chapterId": 2,
    "title": "Bài tập 2.1: Bộ Giải Phương trình Bậc hai Hoàn chỉnh với Xử lý Điểm uốn & Sai số",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-02-01: Bộ Giải Phương trình Bậc hai Hoàn chỉnh với Xử lý Điểm uốn & Sai số\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    double a, b, c, delta;\n    printf(\"Nhap he so a, b, c: \");\n    if (scanf(\"%lf %lf %lf\", &a, &b, &c) != 3) return 1;\n\n    if (fabs(a) < 1e-9) {\n        if (fabs(b) < 1e-9) {\n            if (fabs(c) < 1e-9) printf(\"Phuong trinh vo so nghiem.\\n\");\n            else printf(\"Phuong trinh vo nghiem.\\n\");\n        } else {\n            printf(\"Phuong trinh bac 1 co nghiem duy nhat: x = %.4f\\n\", -c / b);\n        }\n    } else {\n        delta = b * b - 4 * a * c;\n        if (delta > 1e-9) {\n            double x1 = (-b + sqrt(delta)) / (2 * a);\n            double x2 = (-b - sqrt(delta)) / (2 * a);\n            printf(\"Hai nghiem thuc phan biet: x1 = %.4f, x2 = %.4f\\n\", x1, x2);\n        } else if (fabs(delta) <= 1e-9) {\n            printf(\"Nghiem kep: x = %.4f\\n\", -b / (2 * a));\n        } else {\n            double thuc = -b / (2 * a);\n            double ao = sqrt(-delta) / (2 * a);\n            printf(\"Hai nghiem phuc: x1 = %.4f + %.4fi, x2 = %.4f - %.4fi\\n\", thuc, fabs(ao), thuc, fabs(ao));\n        }\n    }\n    return 0;\n}",
    "tags": [
      "Chương 2",
      "Tự luận",
      "Bộ Giải Phương trình Bậc hai Hoàn chỉnh với Xử lý Điểm uốn & Sai số"
    ]
  },
  {
    "id": "PROG-02-02",
    "chapterId": 2,
    "title": "Bài tập 2.2: Hộp Công cụ Thao tác Bitwise & Biểu diễn Nhị phân của Số nguyên",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-02-02: Hộp Công cụ Thao tác Bitwise & Biểu diễn Nhị phân của Số nguyên\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nvoid inNhiPhan32Bit(unsigned int n) {\n    for (int i = 31; i >= 0; i--) {\n        printf(\"%d\", (n >> i) & 1);\n        if (i % 8 == 0) printf(\" \");\n    }\n    printf(\"\\n\");\n}\n\nint demBit1(unsigned int n) {\n    int count = 0;\n    while (n > 0) {\n        n &= (n - 1);\n        count++;\n    }\n    return count;\n}\n\nint main(void) {\n    unsigned int n;\n    printf(\"Nhap so nguyen khong am N: \");\n    if (scanf(\"%u\", &n) != 1) return 1;\n    printf(\"Bieu dien nhi phan 32 bit: \");\n    inNhiPhan32Bit(n);\n    printf(\"So luong bit 1: %d\\n\", demBit1(n));\n    if (n > 0 && (n & (n - 1)) == 0)\n        printf(\"%u la mot luy thua cua 2!\\n\", n);\n    else\n        printf(\"%u KHONG phai la luy thua cua 2.\\n\", n);\n    return 0;\n}",
    "tags": [
      "Chương 2",
      "Tự luận",
      "Hộp Công cụ Thao tác Bitwise & Biểu diễn Nhị phân của Số nguyên"
    ]
  },
  {
    "id": "PROG-02-03",
    "chapterId": 2,
    "title": "Bài tập 2.3: Phân tích Cú pháp và Định dạng Thời gian với Toán tử Logic & Số học",
    "difficulty": "easy",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-02-03: Phân tích Cú pháp và Định dạng Thời gian với Toán tử Logic & Số học\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nint main(void) {\n    long long tongGiay;\n    printf(\"Nhap tong so giay: \");\n    if (scanf(\"%lld\", &tongGiay) != 1 || tongGiay < 0) {\n        printf(\"Gia tri nhap khong hop le!\\n\");\n        return 1;\n    }\n    int gio = (int)(tongGiay / 3600);\n    int phut = (int)((tongGiay % 3600) / 60);\n    int giay = (int)(tongGiay % 60);\n    printf(\"Thoi gian dinh dang chuan: %02d:%02d:%02d\\n\", gio, phut, giay);\n    return 0;\n}",
    "tags": [
      "Chương 2",
      "Tự luận",
      "Phân tích Cú pháp và Định dạng Thời gian với Toán tử Logic & Số học"
    ]
  },
  {
    "id": "PROG-02-04",
    "chapterId": 2,
    "title": "Bài tập 2.4: Nhập Dữ liệu An toàn Đa trường & Cơ chế Xóa Đệm Stdin",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-02-04: Nhập Dữ liệu An toàn Đa trường & Cơ chế Xóa Đệm Stdin\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <string.h>\n\nvoid xoaBoDem(void) {\n    int c;\n    while ((c = getchar()) != '\\n' && c != EOF);\n}\n\nint main(void) {\n    int mssv;\n    float gpa;\n    char rank;\n    char hoTen[50];\n\n    printf(\"Nhap MSSV (so nguyen): \");\n    scanf(\"%d\", &mssv);\n    printf(\"Nhap GPA (so thuc): \");\n    scanf(\"%f\", &gpa);\n\n    xoaBoDem(); // Xoa ky tu enter truoc khi doc ky tu\n    printf(\"Nhap xep loai (A/B/C/D/F): \");\n    scanf(\"%c\", &rank);\n\n    xoaBoDem(); // Xoa ky tu enter truoc khi doc chuoi\n    printf(\"Nhap ho va ten sinh vien: \");\n    fgets(hoTen, sizeof(hoTen), stdin);\n    hoTen[strcspn(hoTen, \"\\n\")] = '\\0'; // Loai bo ky tu newline\n\n    printf(\"\\n=== THONG TIN SINH VIEN ===\\n\");\n    printf(\"MSSV: %d | Ho ten: %s | GPA: %.2f | Xep loai: %c\\n\", mssv, hoTen, gpa, rank);\n    return 0;\n}",
    "tags": [
      "Chương 2",
      "Tự luận",
      "Nhập Dữ liệu An toàn Đa trường & Cơ chế Xóa Đệm Stdin"
    ]
  }
];
