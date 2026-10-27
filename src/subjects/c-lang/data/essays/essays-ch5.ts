/**
 * src/subjects/c-lang/data/essays\essays-ch5.ts
 * Danh mục bài tập tự luận lập trình Chương 5 (4 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh5: CEssay[] = [
  {
    "id": "PROG-05-01",
    "chapterId": 5,
    "title": "Bài tập 5.1: Xóa Trùng Lặp và Nén Mảng Một Chiều Tại Chỗ (In-Place Compact)",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-05-01: Xóa Trùng Lặp và Nén Mảng Một Chiều Tại Chỗ (In-Place Compact)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nvoid selectionSort(int a[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++)\n            if (a[j] < a[minIdx]) minIdx = j;\n        int temp = a[i]; a[i] = a[minIdx]; a[minIdx] = temp;\n    }\n}\n\nint xoaTrungLapTaiCho(int a[], int n) {\n    if (n <= 1) return n;\n    int idx = 0;\n    for (int i = 1; i < n; i++) {\n        if (a[i] != a[idx]) {\n            idx++;\n            a[idx] = a[i];\n        }\n    }\n    return idx + 1;\n}\n\nint binarySearch(const int a[], int n, int x) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (a[mid] == x) return mid;\n        if (a[mid] < x) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main(void) {\n    int a[] = {4, 2, 7, 2, 4, 9, 7, 1, 9, 3};\n    int n = sizeof(a) / sizeof(a[0]);\n    selectionSort(a, n);\n    n = xoaTrungLapTaiCho(a, n);\n    printf(\"Mang sau khi sap xep va xoa trung: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    printf(\"\\nTim kiem 7: vi tri index = %d\\n\", binarySearch(a, n, 7));\n    return 0;\n}",
    "tags": [
      "Chương 5",
      "Tự luận",
      "Xóa Trùng Lặp và Nén Mảng Một Chiều Tại Chỗ (In-Place Compact)"
    ]
  },
  {
    "id": "PROG-05-02",
    "chapterId": 5,
    "title": "Bài tập 5.2: Phép Nhân Hai Ma Trận & Phân tích Đối xứng Ma trận Vuông",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-05-02: Phép Nhân Hai Ma Trận & Phân tích Đối xứng Ma trận Vuông\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\n#define MAX 50\n\nvoid nhanMaTran(int A[MAX][MAX], int B[MAX][MAX], int C[MAX][MAX], int m, int k, int p) {\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < p; j++) {\n            C[i][j] = 0;\n            for (int t = 0; t < k; t++) C[i][j] += A[i][t] * B[t][j];\n        }\n    }\n}\n\nint laMaTranDoiXung(int C[MAX][MAX], int n) {\n    for (int i = 0; i < n; i++)\n        for (int j = i + 1; j < n; j++)\n            if (C[i][j] != C[j][i]) return 0;\n    return 1;\n}\n\nint main(void) {\n    int A[MAX][MAX] = {{1, 2}, {3, 4}};\n    int B[MAX][MAX] = {{2, 0}, {1, 2}};\n    int C[MAX][MAX];\n    nhanMaTran(A, B, C, 2, 2, 2);\n    printf(\"Ma tran tich C (2x2):\\n\");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) printf(\"%4d \", C[i][j]);\n        printf(\"\\n\");\n    }\n    printf(\"Doi xung: %s\\n\", laMaTranDoiXung(C, 2) ? \"CO\" : \"KHONG\");\n    return 0;\n}",
    "tags": [
      "Chương 5",
      "Tự luận",
      "Phép Nhân Hai Ma Trận & Phân tích Đối xứng Ma trận Vuông"
    ]
  },
  {
    "id": "PROG-05-03",
    "chapterId": 5,
    "title": "Bài tập 5.3: Bộ Chuẩn hóa Văn bản, Đảo Từ & Kiểm tra Chuỗi Đối xứng (Palindrome)",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-05-03: Bộ Chuẩn hóa Văn bản, Đảo Từ & Kiểm tra Chuỗi Đối xứng (Palindrome)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n#include <stdbool.h>\n\n// 1. Kiem tra Palindrome (bo qua khoang trang va khong phan biet hoa/thuong)\nbool kiemTraPalindrome(const char *s) {\n    int left = 0;\n    int right = (int)strlen(s) - 1;\n    while (left < right) {\n        while (left < right && !isalnum((unsigned char)s[left])) left++;\n        while (left < right && !isalnum((unsigned char)s[right])) right--;\n        if (tolower((unsigned char)s[left]) != tolower((unsigned char)s[right])) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}\n\n// 2. Chuan hoa chuoi ho ten: cat khoang trang thua, viet hoa dau moi tu\nvoid chuanHoaHoTen(char *s) {\n    int len = (int)strlen(s);\n    int i = 0, j = 0;\n    bool inWord = false;\n    \n    // Bo khoang trang dau chuoi va chuan hoa giua cac tu\n    while (i < len) {\n        if (!isspace((unsigned char)s[i])) {\n            if (inWord == false && j > 0) {\n                s[j++] = ' ';\n            }\n            s[j++] = (inWord == false) ? toupper((unsigned char)s[i]) : tolower((unsigned char)s[i]);\n            inWord = true;\n        } else {\n            inWord = false;\n        }\n        i++;\n    }\n    s[j] = '\\0';\n}\n\n// 3. Dao nguoc thu tu cac tu trong cau\nvoid daoChuoi(char *s, int start, int end) {\n    while (start < end) {\n        char temp = s[start];\n        s[start] = s[end];\n        s[end] = temp;\n        start++; end--;\n    }\n}\n\nvoid daoTuTrongCau(char *s) {\n    int len = (int)strlen(s);\n    daoChuoi(s, 0, len - 1); // Dao toan bo ky tu\n    int start = 0;\n    for (int i = 0; i <= len; i++) {\n        if (s[i] == ' ' || s[i] == '\\0') {\n            daoChuoi(s, start, i - 1); // Dao lai tung tu don le\n            start = i + 1;\n        }\n    }\n}\n\nint main(void) {\n    char s1[100] = \"  nguYen   vAn   aN   \";\n    printf(\"Truoc chuan hoa: \\\"%s\\\"\\n\", s1);\n    chuanHoaHoTen(s1);\n    printf(\"Sau chuan hoa:   \\\"%s\\\"\\n\", s1);\n    \n    char s2[] = \"A man, a plan, a canal: Panama\";\n    printf(\"Palindrome \\\"%s\\\": %s\\n\", s2, kiemTraPalindrome(s2) ? \"DUNG\" : \"SAI\");\n    \n    char s3[] = \"Lap trinh C rat hay\";\n    printf(\"Truoc dao tu: \\\"%s\\\"\\n\", s3);\n    daoTuTrongCau(s3);\n    printf(\"Sau dao tu:   \\\"%s\\\"\\n\", s3);\n    return 0;\n}",
    "tags": [
      "Chương 5",
      "Tự luận",
      "Bộ Chuẩn hóa Văn bản, Đảo Từ & Kiểm tra Chuỗi Đối xứng (Palindrome)"
    ]
  },
  {
    "id": "PROG-05-04",
    "chapterId": 5,
    "title": "Bài tập 5.4: Tự Xây dựng Thư viện Thao tác Chuỗi Không Sử dụng `<string.h>`",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-05-04: Tự Xây dựng Thư viện Thao tác Chuỗi Không Sử dụng `<string.h>`\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\n// 1. my_strlen: Tinh do dai chuoi\nsize_t my_strlen(const char *s) {\n    const char *p = s;\n    while (*p) p++;\n    return (size_t)(p - s);\n}\n\n// 2. my_strcpy: Sao chep chuoi\nchar* my_strcpy(char *dest, const char *src) {\n    char *ret = dest;\n    while ((*dest++ = *src++));\n    return ret;\n}\n\n// 3. my_strcmp: So sanh noi dung hai chuoi\nint my_strcmp(const char *s1, const char *s2) {\n    while (*s1 && (*s1 == *s2)) {\n        s1++;\n        s2++;\n    }\n    return *(const unsigned char*)s1 - *(const unsigned char*)s2;\n}\n\n// 4. my_strcat: Noi chuoi src vao cuoi dest\nchar* my_strcat(char *dest, const char *src) {\n    char *ret = dest;\n    while (*dest) dest++;\n    while ((*dest++ = *src++));\n    return ret;\n}\n\n// 5. my_strstr: Tim kiem chuoi con needle trong chuoi me haystack\nchar* my_strstr(const char *haystack, const char *needle) {\n    if (!*needle) return (char*)haystack;\n    for (; *haystack; haystack++) {\n        if (*haystack == *needle) {\n            const char *h = haystack;\n            const char *n = needle;\n            while (*h && *n && (*h == *n)) {\n                h++;\n                n++;\n            }\n            if (!*n) return (char*)haystack;\n        }\n    }\n    return NULL;\n}\n\nint main(void) {\n    char buf[100];\n    my_strcpy(buf, \"Xin chao\");\n    printf(\"my_strlen = %zu\\n\", my_strlen(buf));\n    \n    my_strcat(buf, \" HCMUTE!\");\n    printf(\"my_strcat = \\\"%s\\\"\\n\", buf);\n    \n    printf(\"my_strcmp = %d\\n\", my_strcmp(buf, \"Xin chao HCMUTE!\"));\n    \n    char *sub = my_strstr(buf, \"HCMUTE\");\n    printf(\"my_strstr('HCMUTE') = \\\"%s\\\"\\n\", sub ? sub : \"NULL\");\n    return 0;\n}",
    "tags": [
      "Chương 5",
      "Tự luận",
      "Tự Xây dựng Thư viện Thao tác Chuỗi Không Sử dụng `<string.h>`"
    ]
  }
];
