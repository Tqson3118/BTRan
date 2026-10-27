/**
 * src/subjects/c-lang/data/essays\essays-ch7.ts
 * Danh mục bài tập tự luận lập trình Chương 7 (3 bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import type { CEssay } from '../../types/index';

export const essaysCh7: CEssay[] = [
  {
    "id": "PROG-07-01",
    "chapterId": 7,
    "title": "Bài tập 7.1: Hệ thống Quản lý Hồ sơ Sinh viên Chuyên sâu (Case Study)",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-07-01: Hệ thống Quản lý Hồ sơ Sinh viên Chuyên sâu (Case Study)\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    int ngay, thang, nam;\n} NgayThang;\n\ntypedef enum { XUAT_SAC, GIOI, KHA, TRUNG_BINH, YEU } HocLuc;\n\ntypedef struct {\n    int mssv;\n    char hoTen[50];\n    NgayThang ngaySinh;\n    float toan, ly, tin, gpa;\n    HocLuc xepLoai;\n} SinhVien;\n\nvoid tinhDiem(SinhVien *sv) {\n    sv->gpa = (sv->toan + sv->ly + sv->tin) / 3.0f;\n    if (sv->gpa >= 9.0f) sv->xepLoai = XUAT_SAC;\n    else if (sv->gpa >= 8.0f) sv->xepLoai = GIOI;\n    else if (sv->gpa >= 6.5f) sv->xepLoai = KHA;\n    else if (sv->gpa >= 5.0f) sv->xepLoai = TRUNG_BINH;\n    else sv->xepLoai = YEU;\n}\n\nconst char* layChuoiXepLoai(HocLuc hl) {\n    switch (hl) {\n        case XUAT_SAC: return \"Xuat sac\";\n        case GIOI: return \"Gioi\";\n        case KHA: return \"Kha\";\n        case TRUNG_BINH: return \"Trung binh\";\n        default: return \"Yeu\";\n    }\n}\n\nint main(void) {\n    SinhVien sv = {101, \"Nguyen Van A\", {15, 8, 2004}, 8.5f, 9.0f, 9.5f, 0, YEU};\n    tinhDiem(&sv);\n    printf(\"MSSV: %d | Ten: %s | GPA: %.2f | Xep loai: %s\\n\",\n           sv.mssv, sv.hoTen, sv.gpa, layChuoiXepLoai(sv.xepLoai));\n    return 0;\n}",
    "tags": [
      "Chương 7",
      "Tự luận",
      "Hệ thống Quản lý Hồ sơ Sinh viên Chuyên sâu (Case Study)"
    ]
  },
  {
    "id": "PROG-07-02",
    "chapterId": 7,
    "title": "Bài tập 7.2: Phân tích Gói tin Mạng / Dữ liệu Cảm biến IoT Bằng Union & Bitfields",
    "difficulty": "hard",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-07-02: Phân tích Gói tin Mạng / Dữ liệu Cảm biến IoT Bằng Union & Bitfields\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n#include <stdint.h>\n\ntypedef union {\n    uint32_t raw;\n    uint8_t bytes[4];\n    struct {\n        uint32_t enable   : 1;  // Bit 0\n        uint32_t errCode  : 3;  // Bit 1-3\n        uint32_t sensorId : 12; // Bit 4-15\n        uint32_t payload  : 16; // Bit 16-31\n    } fields;\n} Packet;\n\nint main(void) {\n    Packet p;\n    p.raw = 0xABCD8123;\n    printf(\"Raw 32-bit: 0x%08X\\n\", p.raw);\n    printf(\"Cac bytes: [0]=0x%02X, [1]=0x%02X, [2]=0x%02X, [3]=0x%02X\\n\",\n           p.bytes[0], p.bytes[1], p.bytes[2], p.bytes[3]);\n    printf(\"Giai ma bitfield: Enable=%u, ErrCode=%u, SensorID=%u, Payload=%u\\n\",\n           p.fields.enable, p.fields.errCode, p.fields.sensorId, p.fields.payload);\n    return 0;\n}",
    "tags": [
      "Chương 7",
      "Tự luận",
      "Phân tích Gói tin Mạng / Dữ liệu Cảm biến IoT Bằng Union & Bitfields"
    ]
  },
  {
    "id": "PROG-07-03",
    "chapterId": 7,
    "title": "Bài tập 7.3: Máy Trạng thái Hữu hạn (FSM) Đèn Giao thông với Enum",
    "difficulty": "easy",
    "description": "",
    "inputExample": "",
    "outputExample": "",
    "guidance": [],
    "starterCode": "#include <stdio.h>\n\n// TODO: Cai dat thuat toan cho bai tap PROG-07-03: Máy Trạng thái Hữu hạn (FSM) Đèn Giao thông với Enum\n\nint main(void) {\n    // Viet ma nguon xu ly tai day\n    \n    return 0;\n}\n",
    "referenceCode": "#include <stdio.h>\n\ntypedef enum { DEN_DO = 30, DEN_XANH = 25, DEN_VANG = 3 } DenGiaoThong;\n\nconst char* layTenDen(DenGiaoThong d) {\n    switch (d) {\n        case DEN_DO: return \"DEN DO (Dung lai)\";\n        case DEN_XANH: return \"DEN XANH (Duoc di)\";\n        case DEN_VANG: return \"DEN VANG (Di cham)\";\n    }\n    return \"UNKNOWN\";\n}\n\nint main(void) {\n    DenGiaoThong den = DEN_DO;\n    for (int chuKy = 1; chuKy <= 3; chuKy++) {\n        printf(\"Trang thai: %-25s | Thoi gian: %d giay\\n\", layTenDen(den), den);\n        if (den == DEN_DO) den = DEN_XANH;\n        else if (den == DEN_XANH) den = DEN_VANG;\n        else den = DEN_DO;\n    }\n    return 0;\n}",
    "tags": [
      "Chương 7",
      "Tự luận",
      "Máy Trạng thái Hữu hạn (FSM) Đèn Giao thông với Enum"
    ]
  }
];
