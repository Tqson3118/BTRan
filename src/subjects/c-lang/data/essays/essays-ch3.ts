/**
 * src/subjects/c-lang/data/essays\essays-ch3.ts
 * Danh mục bài tập tự luận lập trình Chương 3 (4 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh3: CEssay[] = [
  {
    "id": "PROG-03-01",
    "chapterId": 3,
    "title": "Bài tập 3.1: Menu Điều khiển Đa năng & Máy tính Bỏ túi với Switch-Case và Validation Loop",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-03-01: Menu Điều khiển Đa năng & Máy tính Bỏ túi với Switch-Case và Validation Loop\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    int choice;\n    double a, b;\n    do {\n        printf(\"\\n=== HE THONG MAY TINH BO TUI ===\\n\");\n        printf(\"1. Phep cong (+)\\n2. Phep tru (-)\\n3. Phep nhan (*)\\n\");\n        printf(\"4. Phep chia (/)\\n5. Luy thua a^b\\n0. Thoat chuong trinh\\n\");\n        printf(\"Lua chon cua ban: \");\n        if (scanf(\"%d\", &choice) != 1) break;\n\n        if (choice >= 1 && choice <= 5) {\n            printf(\"Nhap hai so a va b: \");\n            scanf(\"%lf %lf\", &a, &b);\n        }\n\n        switch (choice) {\n            case 1: printf(\"Ket qua: %.4f + %.4f = %.4f\\n\", a, b, a + b); break;\n            case 2: printf(\"Ket qua: %.4f - %.4f = %.4f\\n\", a, b, a - b); break;\n            case 3: printf(\"Ket qua: %.4f * %.4f = %.4f\\n\", a, b, a * b); break;\n            case 4:\n                if (fabs(b) < 1e-9) printf(\"Loi: Khong the chia cho 0!\\n\");\n                else printf(\"Ket qua: %.4f / %.4f = %.4f\\n\", a, b, a / b);\n                break;\n            case 5: printf(\"Ket qua: %.4f ^ %.4f = %.4f\\n\", a, b, pow(a, b)); break;\n            case 0: printf(\"Tam biet va hen gap lai!\\n\"); break;\n            default: printf(\"Lua chon khong hop le, vui long chon lai!\\n\");\n        }\n    } while (choice != 0);\n    return 0;\n}",
    "tags": [
      "Chương 3",
      "Tự luận",
      "Menu Điều khiển Đa năng & Máy tính Bỏ túi với Switch-Case và Validation Loop"
    ]
  },
  {
    "id": "PROG-03-02",
    "chapterId": 3,
    "title": "Bài tập 3.2: Vẽ Hình Ký tự Nghệ thuật & Kim tự tháp Số lồng nhau",
    "difficulty": "easy",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-03-02: Vẽ Hình Ký tự Nghệ thuật & Kim tự tháp Số lồng nhau\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nint main(void) {\n    int h;\n    printf(\"Nhap chieu cao kim tu thap h (1 - 20): \");\n    scanf(\"%d\", &h);\n    for (int i = 1; i <= h; i++) {\n        for (int space = 1; space <= h - i; space++) printf(\"  \");\n        for (int j = 1; j <= i; j++) printf(\"%d \", j);\n        for (int j = i - 1; j >= 1; j--) printf(\"%d \", j);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "tags": [
      "Chương 3",
      "Tự luận",
      "Vẽ Hình Ký tự Nghệ thuật & Kim tự tháp Số lồng nhau"
    ]
  },
  {
    "id": "PROG-03-03",
    "chapterId": 3,
    "title": "Bài tập 3.3: Sàng lọc Số Nguyên tố, Số Hoàn hảo & Số Armstrong trong Đoạn $[A, B]$",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-03-03: Sàng lọc Số Nguyên tố, Số Hoàn hảo & Số Armstrong trong Đoạn $[A, B]$\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <math.h>\n\nint laNguyenTo(int n) {\n    if (n < 2) return 0;\n    if (n == 2 || n == 3) return 1;\n    if (n % 2 == 0 || n % 3 == 0) return 0;\n    for (int i = 5; i * i <= n; i += 6)\n        if (n % i == 0 || n % (i + 2) == 0) return 0;\n    return 1;\n}\n\nint laHoanHao(int n) {\n    if (n <= 1) return 0;\n    int tong = 1;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            tong += i;\n            if (i * i != n) tong += n / i;\n        }\n    }\n    return tong == n;\n}\n\nint main(void) {\n    int a, b;\n    printf(\"Nhap doan [A, B]: \");\n    scanf(\"%d %d\", &a, &b);\n    printf(\"Cac so nguyen to trong [%d, %d]: \", a, b);\n    for (int i = a; i <= b; i++) if (laNguyenTo(i)) printf(\"%d \", i);\n    printf(\"\\nCac so hoan hao trong [%d, %d]: \", a, b);\n    for (int i = a; i <= b; i++) if (laHoanHao(i)) printf(\"%d \", i);\n    printf(\"\\n\");\n    return 0;\n}",
    "tags": [
      "Chương 3",
      "Tự luận",
      "Sàng lọc Số Nguyên tố, Số Hoàn hảo & Số Armstrong trong Đoạn $[A, B]$"
    ]
  },
  {
    "id": "PROG-03-04",
    "chapterId": 3,
    "title": "Bài tập 3.4: Mô phỏng Chuỗi Phỏng đoán Collatz ($3n + 1$) & Dò vết Đường đi Cực đại",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-03-04: Mô phỏng Chuỗi Phỏng đoán Collatz ($3n + 1$) & Dò vết Đường đi Cực đại\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\nint main(void) {\n    long long n, maxVal;\n    int steps = 0;\n    printf(\"Nhap so nguyen duong n: \");\n    scanf(\"%lld\", &n);\n    if (n <= 0) return 1;\n\n    maxVal = n;\n    printf(\"Quy dao Collatz: %lld\", n);\n    while (n != 1) {\n        if (n % 2 == 0) n /= 2;\n        else n = 3 * n + 1;\n        printf(\" -> %lld\", n);\n        if (n > maxVal) maxVal = n;\n        steps++;\n    }\n    printf(\"\\nTong so buoc chuyen: %d\\n\", steps);\n    printf(\"Gia tri lon nhat tung dat toi: %lld\\n\", maxVal);\n    return 0;\n}",
    "tags": [
      "Chương 3",
      "Tự luận",
      "Mô phỏng Chuỗi Phỏng đoán Collatz ($3n + 1$) & Dò vết Đường đi Cực đại"
    ]
  }
];
