/**
 * src/subjects/c-lang/data/essays\essays-ch4.ts
 * Danh mục bài tập tự luận lập trình Chương 4 (4 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh4: CEssay[] = [
  {
    "id": "PROG-04-01",
    "chapterId": 4,
    "title": "Bài tập 4.1: Thư viện Xử lý Số học Mô-đun & Thuật toán Euclid Mở rộng",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-04-01: Thư viện Xử lý Số học Mô-đun & Thuật toán Euclid Mở rộng\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <stdlib.h>\n\nlong long gcd(long long a, long long b) {\n    return (b == 0) ? llabs(a) : gcd(b, a % b);\n}\n\nlong long lcm(long long a, long long b) {\n    if (a == 0 || b == 0) return 0;\n    return (llabs(a) / gcd(a, b)) * llabs(b);\n}\n\nlong long extGCD(long long a, long long b, long long *x, long long *y) {\n    if (b == 0) {\n        *x = 1;\n        *y = 0;\n        return a;\n    }\n    long long x1, y1;\n    long long d = extGCD(b, a % b, &x1, &y1);\n    *x = y1;\n    *y = x1 - (a / b) * y1;\n    return d;\n}\n\nint main(void) {\n    long long a, b, x, y;\n    printf(\"Nhap hai so a va b: \");\n    scanf(\"%lld %lld\", &a, &b);\n    printf(\"GCD(%lld, %lld) = %lld\\n\", a, b, gcd(a, b));\n    printf(\"LCM(%lld, %lld) = %lld\\n\", a, b, lcm(a, b));\n    long long d = extGCD(a, b, &x, &y);\n    printf(\"Dang thuc Bezout: %lld*(%lld) + %lld*(%lld) = %lld\\n\", a, x, b, y, d);\n    return 0;\n}",
    "tags": [
      "Chương 4",
      "Tự luận",
      "Thư viện Xử lý Số học Mô-đun & Thuật toán Euclid Mở rộng"
    ]
  },
  {
    "id": "PROG-04-02",
    "chapterId": 4,
    "title": "Bài tập 4.2: Dò vết Đệ quy Tháp Hà Nội & Mô hình Ngăn xếp Call Stack",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-04-02: Dò vết Đệ quy Tháp Hà Nội & Mô hình Ngăn xếp Call Stack\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nvoid thapHaNoi(int n, char nguon, char trungGian, char dich) {\n    static int buoc = 0;\n    if (n == 1) {\n        buoc++;\n        printf(\"Buoc %02d: Chuyen dia 1 tu coc %c sang coc %c\\n\", buoc, nguon, dich);\n        return;\n    }\n    thapHaNoi(n - 1, nguon, dich, trungGian);\n    buoc++;\n    printf(\"Buoc %02d: Chuyen dia %d tu coc %c sang coc %c\\n\", buoc, n, nguon, dich);\n    thapHaNoi(n - 1, trungGian, nguon, dich);\n}\n\nint main(void) {\n    int n;\n    printf(\"Nhap so luong dia n: \");\n    scanf(\"%d\", &n);\n    printf(\"\\n--- TIEN TRINH CHUYEN THAP HANOI ---\\n\");\n    thapHaNoi(n, 'A', 'B', 'C');\n    return 0;\n}",
    "tags": [
      "Chương 4",
      "Tự luận",
      "Dò vết Đệ quy Tháp Hà Nội & Mô hình Ngăn xếp Call Stack"
    ]
  },
  {
    "id": "PROG-04-03",
    "chapterId": 4,
    "title": "Bài tập 4.3: Tính Dãy Fibonacci Bằng Đệ quy Nhớ (Memoization) & Phân tích Độ phức tạp",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-04-03: Tính Dãy Fibonacci Bằng Đệ quy Nhớ (Memoization) & Phân tích Độ phức tạp\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nlong long callNaive = 0;\nlong long callMemo = 0;\nlong long memo[100] = {0};\n\nlong long fibNaive(int n) {\n    callNaive++;\n    if (n <= 1) return n;\n    return fibNaive(n - 1) + fibNaive(n - 2);\n}\n\nlong long fibMemo(int n) {\n    callMemo++;\n    if (n <= 1) return n;\n    if (memo[n] != 0) return memo[n];\n    return memo[n] = fibMemo(n - 1) + fibMemo(n - 2);\n}\n\nint main(void) {\n    int n = 35;\n    printf(\"So sanh tinh Fibonacci(%d):\\n\", n);\n    long long res1 = fibNaive(n);\n    printf(\"Naive: F(%d) = %lld | So loi goi ham: %lld\\n\", n, res1, callNaive);\n    long long res2 = fibMemo(n);\n    printf(\"Memo : F(%d) = %lld | So loi goi ham: %lld\\n\", n, res2, callMemo);\n    return 0;\n}",
    "tags": [
      "Chương 4",
      "Tự luận",
      "Tính Dãy Fibonacci Bằng Đệ quy Nhớ (Memoization) & Phân tích Độ phức tạp"
    ]
  },
  {
    "id": "PROG-04-04",
    "chapterId": 4,
    "title": "Bài tập 4.4: Hàm Thống kê Mảng Sử dụng Truyền Con trỏ Nhận Đa Giá trị Trả về",
    "difficulty": "easy",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-04-04: Hàm Thống kê Mảng Sử dụng Truyền Con trỏ Nhận Đa Giá trị Trả về\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nvoid thongKeMang(const int a[], int n, int *min, int *max, double *avg, double *variance) {\n    *min = a[0];\n    *max = a[0];\n    long long sum = 0;\n    for (int i = 0; i < n; i++) {\n        if (a[i] < *min) *min = a[i];\n        if (a[i] > *max) *max = a[i];\n        sum += a[i];\n    }\n    *avg = (double)sum / n;\n    double varSum = 0;\n    for (int i = 0; i < n; i++) {\n        varSum += (a[i] - *avg) * (a[i] - *avg);\n    }\n    *variance = varSum / n;\n}\n\nint main(void) {\n    int a[] = {12, 5, 8, 19, 24, 7, 15, 3};\n    int n = sizeof(a) / sizeof(a[0]);\n    int min, max;\n    double avg, var;\n    thongKeMang(a, n, &min, &max, &avg, &var);\n    printf(\"Min = %d | Max = %d | Avg = %.2f | Variance = %.2f\\n\", min, max, avg, var);\n    return 0;\n}",
    "tags": [
      "Chương 4",
      "Tự luận",
      "Hàm Thống kê Mảng Sử dụng Truyền Con trỏ Nhận Đa Giá trị Trả về"
    ]
  }
];
