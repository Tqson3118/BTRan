/**
 * src/subjects/c-lang/data/essays\essays-ch9.ts
 * Danh mục bài tập tự luận lập trình Chương 9 (3 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh9: CEssay[] = [
  {
    "id": "PROG-09-01",
    "chapterId": 9,
    "title": "Bài tập 9.1: Xây dựng Lớp Phân số Hoàn chỉnh với Nạp chồng Toán tử & Stream I/O",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-09-01: Xây dựng Lớp Phân số Hoàn chỉnh với Nạp chồng Toán tử & Stream I/O\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <iostream>\n#include <numeric>\n\nclass PhanSo {\nprivate:\n    int tu, mau;\n    void rutGon() {\n        int g = std::gcd(tu, mau);\n        tu /= g; mau /= g;\n        if (mau < 0) { tu = -tu; mau = -mau; }\n    }\npublic:\n    PhanSo(int t = 0, int m = 1) : tu(t), mau(m == 0 ? 1 : m) { rutGon(); }\n\n    PhanSo operator+(const PhanSo &other) const {\n        return PhanSo(tu * other.mau + other.tu * mau, mau * other.mau);\n    }\n\n    friend std::ostream& operator<<(std::ostream &os, const PhanSo &p) {\n        if (p.mau == 1) os << p.tu;\n        else os << p.tu << \"/\" << p.mau;\n        return os;\n    }\n};\n\nint main() {\n    PhanSo p1(1, 2), p2(1, 3);\n    PhanSo p3 = p1 + p2;\n    std::cout << p1 << \" + \" << p2 << \" = \" << p3 << std::endl;\n    return 0;\n}",
    "tags": [
      "Chương 9",
      "Tự luận",
      "Xây dựng Lớp Phân số Hoàn chỉnh với Nạp chồng Toán tử & Stream I/O"
    ]
  },
  {
    "id": "PROG-09-02",
    "chapterId": 9,
    "title": "Bài tập 9.2: Lớp Chuỗi Ký tự Động Tự Quản lý Bộ nhớ (MyString - Rule of Three)",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-09-02: Lớp Chuỗi Ký tự Động Tự Quản lý Bộ nhớ (MyString - Rule of Three)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <iostream>\n#include <cstring>\n\nclass MyString {\nprivate:\n    char *data;\n    size_t len;\npublic:\n    MyString(const char *s = \"\") {\n        len = strlen(s);\n        data = new char[len + 1];\n        strcpy(data, s);\n    }\n    ~MyString() {\n        delete[] data;\n    }\n    MyString(const MyString &other) {\n        len = other.len;\n        data = new char[len + 1];\n        strcpy(data, other.data);\n    }\n    MyString& operator=(const MyString &other) {\n        if (this != &other) {\n            delete[] data;\n            len = other.len;\n            data = new char[len + 1];\n            strcpy(data, other.data);\n        }\n        return *this;\n    }\n    void print() const { std::cout << data << std::endl; }\n};\n\nint main() {\n    MyString s1(\"Hello C++ OOP\");\n    MyString s2 = s1; // Goi Copy Constructor\n    MyString s3;\n    s3 = s2; // Goi operator=\n    s3.print();\n    return 0;\n}",
    "tags": [
      "Chương 9",
      "Tự luận",
      "Lớp Chuỗi Ký tự Động Tự Quản lý Bộ nhớ (MyString - Rule of Three)"
    ]
  },
  {
    "id": "PROG-09-03",
    "chapterId": 9,
    "title": "Bài tập 9.3: Quản lý Nhân sự Kế thừa Cơ bản (Inheritance & Polymorphism Preview)",
    "difficulty": "medium",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-09-03: Quản lý Nhân sự Kế thừa Cơ bản (Inheritance & Polymorphism Preview)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <iostream>\n#include <string>\n\nclass Person {\nprotected:\n    std::string hoTen;\n    int namSinh;\npublic:\n    Person(const std::string &ten, int nam) : hoTen(ten), namSinh(nam) {}\n    virtual void xuat() const {\n        std::cout << \"Ho ten: \" << hoTen << \" | Nam sinh: \" << namSinh;\n    }\n    virtual ~Person() {}\n};\n\nclass Student : public Person {\nprivate:\n    std::string mssv;\n    double gpa;\npublic:\n    Student(const std::string &ten, int nam, const std::string &ma, double diem)\n        : Person(ten, nam), mssv(ma), gpa(diem) {}\n    void xuat() const override {\n        Person::xuat();\n        std::cout << \" | MSSV: \" << mssv << \" | GPA: \" << gpa << std::endl;\n    }\n};\n\nint main() {\n    Student s(\"Tran Van B\", 2004, \"SV202401\", 8.75);\n    s.xuat();\n    return 0;\n}",
    "tags": [
      "Chương 9",
      "Tự luận",
      "Quản lý Nhân sự Kế thừa Cơ bản (Inheritance & Polymorphism Preview)"
    ]
  }
];
