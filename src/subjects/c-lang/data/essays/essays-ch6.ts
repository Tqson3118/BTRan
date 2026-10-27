/**
 * src/subjects/c-lang/data/essays\essays-ch6.ts
 * Danh mục bài tập tự luận lập trình Chương 6 (4 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh6: CEssay[] = [
  {
    "id": "PROG-06-01",
    "chapterId": 6,
    "title": "Bài tập 6.1: Quản lý Mảng Động Tự Co Giãn (Dynamic Vector) với Malloc và Realloc",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-06-01: Quản lý Mảng Động Tự Co Giãn (Dynamic Vector) với Malloc và Realloc\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int capacity = 2;\n    int size = 0;\n    int *arr = (int*)malloc(capacity * sizeof(int));\n    if (!arr) return 1;\n\n    int val;\n    printf(\"Nhap cac so nguyen (nhap 0 de ket thuc):\\n\");\n    while (scanf(\"%d\", &val) == 1 && val != 0) {\n        if (size == capacity) {\n            capacity *= 2;\n            int *temp = (int*)realloc(arr, capacity * sizeof(int));\n            if (!temp) {\n                printf(\"Loi cap phat bo nho bo sung!\\n\");\n                free(arr);\n                return 1;\n            }\n            arr = temp;\n            printf(\"[Log: Tu dong tang dung luong mang len %d phan tu]\\n\", capacity);\n        }\n        arr[size++] = val;\n    }\n\n    printf(\"Mang dong da nhap (%d phan tu): \", size);\n    for (int i = 0; i < size; i++) printf(\"%d \", *(arr + i));\n    printf(\"\\n\");\n\n    free(arr);\n    arr = NULL;\n    return 0;\n}",
    "tags": [
      "Chương 6",
      "Tự luận",
      "Quản lý Mảng Động Tự Co Giãn (Dynamic Vector) với Malloc và Realloc"
    ]
  },
  {
    "id": "PROG-06-02",
    "chapterId": 6,
    "title": "Bài tập 6.2: Cấp phát Động Ma trận 2 Chiều Bằng Mảng Con trỏ & Xử lý Bộ nhớ",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-06-02: Cấp phát Động Ma trận 2 Chiều Bằng Mảng Con trỏ & Xử lý Bộ nhớ\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble** capPhatMaTran(int r, int c) {\n    double **m = (double**)malloc(r * sizeof(double*));\n    if (!m) return NULL;\n    for (int i = 0; i < r; i++) {\n        m[i] = (double*)malloc(c * sizeof(double));\n        if (!m[i]) return NULL;\n    }\n    return m;\n}\n\nvoid giaiPhongMaTran(double **m, int r) {\n    if (!m) return;\n    for (int i = 0; i < r; i++) free(m[i]);\n    free(m);\n}\n\nint main(void) {\n    int r = 3, c = 4;\n    double **m = capPhatMaTran(r, c);\n    if (!m) return 1;\n    for (int i = 0; i < r; i++)\n        for (int j = 0; j < c; j++) m[i][j] = (i + 1) * 10.0 + j;\n\n    printf(\"Ma tran dong (3x4):\\n\");\n    for (int i = 0; i < r; i++) {\n        for (int j = 0; j < c; j++) printf(\"%6.1f \", m[i][j]);\n        printf(\"\\n\");\n    }\n    giaiPhongMaTran(m, r);\n    m = NULL;\n    return 0;\n}",
    "tags": [
      "Chương 6",
      "Tự luận",
      "Cấp phát Động Ma trận 2 Chiều Bằng Mảng Con trỏ & Xử lý Bộ nhớ"
    ]
  },
  {
    "id": "PROG-06-03",
    "chapterId": 6,
    "title": "Bài tập 6.3: Bảng Điều phối Toán học Bằng Mảng Con trỏ Hàm (Function Pointer Dispatch Table)",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-06-03: Bảng Điều phối Toán học Bằng Mảng Con trỏ Hàm (Function Pointer Dispatch Table)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\ntypedef double (*MathFunc)(double, double);\n\ndouble add(double a, double b) { return a + b; }\ndouble sub(double a, double b) { return a - b; }\ndouble mul(double a, double b) { return a * b; }\ndouble divide(double a, double b) { return b != 0 ? a / b : 0.0; }\n\nint main(void) {\n    MathFunc ops[] = {add, sub, mul, divide};\n    const char *names[] = {\"Cong\", \"Tru\", \"Nhan\", \"Chia\"};\n    int choice = 2; // Phep nhan\n    double a = 12.5, b = 4.0;\n    printf(\"Thuc hien phep %s tren %.2f va %.2f: Ket qua = %.2f\\n\",\n           names[choice], a, b, ops[choice](a, b));\n    return 0;\n}",
    "tags": [
      "Chương 6",
      "Tự luận",
      "Bảng Điều phối Toán học Bằng Mảng Con trỏ Hàm (Function Pointer Dispatch Table)"
    ]
  },
  {
    "id": "PROG-06-04",
    "chapterId": 6,
    "title": "Bài tập 6.4: Tách Từ và Dò Vết Bộ nhớ Chuỗi Bằng Con trỏ Cấp 2 (`char **`)",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-06-04: Tách Từ và Dò Vết Bộ nhớ Chuỗi Bằng Con trỏ Cấp 2 (`char **`)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nchar** tachCacTu(char *src, int *count) {\n    char **res = NULL;\n    *count = 0;\n    char *token = strtok(src, \" \\t\\n\");\n    while (token) {\n        res = (char**)realloc(res, (*count + 1) * sizeof(char*));\n        res[*count] = (char*)malloc(strlen(token) + 1);\n        strcpy(res[*count], token);\n        (*count)++;\n        token = strtok(NULL, \" \\t\\n\");\n    }\n    return res;\n}\n\nint main(void) {\n    char text[] = \"Dai Hoc Su Pham Ky Thuat TP HCM\";\n    int n;\n    char **words = tachCacTu(text, &n);\n    printf(\"Cac tu da tach (%d tu):\\n\", n);\n    for (int i = 0; i < n; i++) {\n        printf(\"Tu %d: %s\\n\", i + 1, words[i]);\n        free(words[i]);\n    }\n    free(words);\n    return 0;\n}",
    "tags": [
      "Chương 6",
      "Tự luận",
      "Tách Từ và Dò Vết Bộ nhớ Chuỗi Bằng Con trỏ Cấp 2 (`char **`)"
    ]
  }
];
