/**
 * src/subjects/c-lang/data/essays\essays-ch1.ts
 * Danh mục bài tập tự luận lập trình Chương 1 (3 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh1: CEssay[] = [
  {
    "id": "PROG-01-01",
    "chapterId": 1,
    "title": "Bài tập 1.1: Trình biên dịch Macro Tiền xử lý Đa năng",
    "difficulty": "easy",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-01-01: Trình biên dịch Macro Tiền xử lý Đa năng\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\n#define ABS(x) ((x) < 0 ? -(x) : (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n#define SQUARE(x) ((x) * (x))\n\nint main(void) {\n    int a, b;\n    printf(\"Nhap hai so nguyen a va b: \");\n    if (scanf(\"%d %d\", &a, &b) != 2) {\n        printf(\"Loi nhap lieu!\\n\");\n        return 1;\n    }\n    printf(\"ABS(a) = %d, ABS(b) = %d\\n\", ABS(a), ABS(b));\n    printf(\"MAX(a, b) = %d\\n\", MAX(a, b));\n    printf(\"SQUARE(a) = %d\\n\", SQUARE(a));\n    printf(\"SQUARE(a + 1) an toan = %d\\n\", SQUARE(a + 1));\n    return 0;\n}",
    "tags": [
      "Chương 1",
      "Tự luận",
      "Trình biên dịch Macro Tiền xử lý Đa năng"
    ]
  },
  {
    "id": "PROG-01-02",
    "chapterId": 1,
    "title": "Bài tập 1.2: Chuyển đổi Đơn vị Đo lường và Định dạng Bảng Thông số",
    "difficulty": "easy",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-01-02: Chuyển đổi Đơn vị Đo lường và Định dạng Bảng Thông số\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nint main(void) {\n    double c, f, k;\n    printf(\"Nhap nhiet do (do C): \");\n    scanf(\"%lf\", &c);\n    f = c * (9.0 / 5.0) + 32.0;\n    k = c + 273.15;\n    printf(\"\\n------------------------------------\\n\");\n    printf(\"%-20s %10s\\n\", \"Thang do\", \"Gia tri\");\n    printf(\"------------------------------------\\n\");\n    printf(\"%-20s %10.2f\\n\", \"Celsius (C)\", c);\n    printf(\"%-20s %10.2f\\n\", \"Fahrenheit (F)\", f);\n    printf(\"%-20s %10.2f\\n\", \"Kelvin (K)\", k);\n    printf(\"------------------------------------\\n\");\n    return 0;\n}",
    "tags": [
      "Chương 1",
      "Tự luận",
      "Chuyển đổi Đơn vị Đo lường và Định dạng Bảng Thông số"
    ]
  },
  {
    "id": "PROG-01-03",
    "chapterId": 1,
    "title": "Bài tập 1.3: Thẩm tra Kiểu dữ liệu và Đo lường Kích thước Bộ nhớ Kiến trúc Hệ thống",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-01-03: Thẩm tra Kiểu dữ liệu và Đo lường Kích thước Bộ nhớ Kiến trúc Hệ thống\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <limits.h>\n#include <float.h>\n\nint main(void) {\n    printf(\"%-18s %-8s %-25s %-25s\\n\", \"Kieu Du Lieu\", \"So Byte\", \"Gia Tri Nho Nhat\", \"Gia Tri Lon Nhat\");\n    printf(\"------------------------------------------------------------------------------------\\n\");\n    printf(\"%-18s %-8zu %-25d %-25d\\n\", \"char\", sizeof(char), CHAR_MIN, CHAR_MAX);\n    printf(\"%-18s %-8zu %-25d %-25d\\n\", \"short\", sizeof(short), SHRT_MIN, SHRT_MAX);\n    printf(\"%-18s %-8zu %-25d %-25d\\n\", \"int\", sizeof(int), INT_MIN, INT_MAX);\n    printf(\"%-18s %-8zu %-25u %-25u\\n\", \"unsigned int\", sizeof(unsigned int), 0, UINT_MAX);\n    printf(\"%-18s %-8zu %-25lld %-25lld\\n\", \"long long\", sizeof(long long), LLONG_MIN, LLONG_MAX);\n    printf(\"%-18s %-8zu %-25.2e %-25.2e\\n\", \"float\", sizeof(float), FLT_MIN, FLT_MAX);\n    printf(\"%-18s %-8zu %-25.2e %-25.2e\\n\", \"double\", sizeof(double), DBL_MIN, DBL_MAX);\n    printf(\"%-18s %-8zu %-25s %-25s\\n\", \"Con tro void*\", sizeof(void*), \"0x0\", \"N/A (Phu thuoc RAM)\");\n    return 0;\n}",
    "tags": [
      "Chương 1",
      "Tự luận",
      "Thẩm tra Kiểu dữ liệu và Đo lường Kích thước Bộ nhớ Kiến trúc Hệ thống"
    ]
  }
];
