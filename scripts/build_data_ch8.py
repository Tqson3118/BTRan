# -*- coding: utf-8 -*-
"""
scripts/build_data_ch8.py
Tạo 25 câu hỏi trắc nghiệm Chương 8: Thao tác Tệp tin (File I/O)
- 10 Theory (Q1 -> Q10)
- 7 Output/Trace (Q11 -> Q17)
- 5 Debug (Q18 -> Q22)
- 3 Fill-in (Q23 -> Q25)
- 4 Mock Exam Preset (Q1, Q4, Q11, Q18)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

QUESTIONS_CH8 = []

# ==========================================
# 1. THEORY (10 câu: Q1 -> Q10)
# ==========================================

# Q1 (Mock)
QUESTIONS_CH8.append({
    "num": 1, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch8-01",
    "content": "Kiểu dữ liệu FILE* trong thư viện chuẩn <stdio.h> của ngôn ngữ C thực chất là gì?",
    "options": [
        "Là một con trỏ trỏ tới cấu trúc lưu trữ thông tin quản lý luồng dữ liệu tệp của hệ thống.",
        "Là một kiểu dữ liệu nguyên thủy chứa chuỗi đường dẫn tệp tin trên ổ đĩa cứng của máy tính.",
        "Là một con trỏ phần cứng trỏ trực tiếp vào từng rãnh ghi từ tính trên thiết bị lưu trữ.",
        "Là một biến số nguyên đại diện cho kích thước tổng số byte dữ liệu của tệp tin hiện tại."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.500 và HCMUTE tr.195: FILE là cấu trúc chứa thông tin kiểm soát tệp (vị trí đọc/ghi, con trỏ bộ đệm, cờ lỗi...). Ứng dụng luôn thao tác với tệp qua con trỏ `FILE *fp`.",
    "ref": {"uttPage": "Trang 500", "hcmutePage": "Trang 195", "section": "8.1"}
})

# Q2
QUESTIONS_CH8.append({
    "num": 2, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch8-01",
    "content": "Giá trị trả về của hàm fopen(filename, mode) khi không thể mở được tệp tin chỉ định là gì?",
    "options": [
        "Trả về con trỏ NULL để thông báo cho chương trình biết quá trình mở tệp đã bị thất bại.",
        "Trả về giá trị số nguyên -1 tương tự như mã lỗi EOF của các hàm đọc ký tự thông thường.",
        "Chương trình sẽ tự động sập ngay lập tức và đưa ra thông báo lỗi ngoại lệ hệ điều hành.",
        "Tự động tạo ra một tệp tin rỗng mới trên ổ đĩa cứng mà không đưa ra bất kỳ cảnh báo nào."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.503 và HCMUTE tr.197: Nếu không mở được file (không tồn tại, không có quyền...), fopen trả về NULL. Phải luôn kiểm tra `if (fp == NULL)`.",
    "ref": {"uttPage": "Trang 503", "hcmutePage": "Trang 197", "section": "8.1"}
})

# Q3
QUESTIONS_CH8.append({
    "num": 3, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch8-01",
    "content": "Chế độ mở tệp \"w\" (Write) và \"a\" (Append) trong hàm fopen có điểm khác biệt cốt lõi nào?",
    "options": [
        "Chế độ \"w\" xóa trắng nội dung tệp cũ để ghi lại từ đầu; \"a\" ghi nối tiếp vào cuối tệp cũ.",
        "Chế độ \"w\" chỉ dùng cho tệp nhị phân còn chế độ \"a\" chỉ dùng cho các tệp tin dạng văn bản.",
        "Chế độ \"w\" không thể tạo tệp mới nếu tệp chưa có sẵn còn chế độ \"a\" thì tự động tạo mới.",
        "Chế độ \"w\" cho phép vừa đọc vừa ghi dữ liệu đồng thời còn chế độ \"a\" chỉ cho phép đọc."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.504 và HCMUTE tr.198: Mode \"w\" tạo file mới hoặc xóa sạch nội dung file cũ nếu đã tồn tại. Mode \"a\" giữ nguyên dữ liệu cũ và ghi thêm vào cuối file.",
    "ref": {"uttPage": "Trang 504", "hcmutePage": "Trang 198", "section": "8.1"}
})

# Q4 (Mock)
QUESTIONS_CH8.append({
    "num": 4, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch8-01",
    "content": "Vì sao lập trình viên luôn luôn phải gọi hàm fclose(fp) sau khi hoàn tất các thao tác xử lý tệp?",
    "options": [
        "Để đẩy toàn bộ dữ liệu từ bộ đệm xuống đĩa vật lý và giải phóng tài nguyên luồng tệp tin.",
        "Để xóa vĩnh viễn tệp tin đó khỏi hệ thống lưu trữ sau khi đã hoàn thành việc đọc ghi tệp.",
        "Để khóa tệp tin ngăn chặn không cho các tiến trình khác có thể truy cập vào dữ liệu đó.",
        "Vì nếu không gọi fclose thì hệ điều hành sẽ tự động hủy toàn bộ tệp mã nguồn chương trình."
    ],
    "correct": 0, "mock": True,
    "explanation": "Căn cứ UTT tr.506 và HCMUTE tr.199: fclose xả hết buffer (flush) xuống đĩa, giải phóng File Descriptor cho OS. Quên fclose có thể gây mất dữ liệu hoặc rò rỉ tài nguyên hệ thống.",
    "ref": {"uttPage": "Trang 506", "hcmutePage": "Trang 199", "section": "8.1"}
})

# Q5
QUESTIONS_CH8.append({
    "num": 5, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Cặp hàm nào sau đây được thiết kế chuyên biệt để đọc và ghi dữ liệu cấu trúc cho tệp nhị phân?",
    "options": [
        "Hàm fread() và hàm fwrite() cho phép truyền nhận trực tiếp các khối byte nhị phân thô.",
        "Hàm fscanf() và hàm fprintf() chuyên xử lý việc chuyển đổi các chuỗi ký tự định dạng.",
        "Hàm fgetc() và hàm fputc() chỉ thao tác trên từng ký tự đơn lẻ của tệp tin văn bản mã ASCII.",
        "Hàm fgets() và hàm fputs() dùng để đọc ghi từng dòng văn bản có giới hạn độ dài xác định."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.518 và HCMUTE tr.202: fread() và fwrite() đọc/ghi dữ liệu nhị phân (binary block) trực tiếp giữa bộ nhớ và tệp tin mà không qua bước định dạng chuỗi.",
    "ref": {"uttPage": "Trang 518", "hcmutePage": "Trang 202", "section": "8.2"}
})

# Q6
QUESTIONS_CH8.append({
    "num": 6, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch8-03",
    "content": "Các hằng số vị trí gốc SEEK_SET, SEEK_CUR, SEEK_END trong hàm fseek() có ý nghĩa tương ứng là gì?",
    "options": [
        "Tính khoảng cách độ dời bắt đầu từ đầu tệp tin, vị trí con trỏ hiện tại và cuối tệp tin.",
        "Chỉ định quyền truy cập đọc tệp, ghi đè tệp và quyền ghi nối tiếp vào cuối tệp tin dữ liệu.",
        "Xác định thứ tự sắp xếp các bản ghi theo chiều tăng dần, hiện tại và theo chiều giảm dần.",
        "Quy định kích thước bộ nhớ đệm cho tệp là nhỏ nhất, trung bình hay lớn nhất của hệ thống."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.524 và HCMUTE tr.204: fseek(fp, offset, origin) với origin: SEEK_SET (bắt đầu từ đầu tệp), SEEK_CUR (từ vị trí hiện tại), SEEK_END (từ cuối tệp).",
    "ref": {"uttPage": "Trang 524", "hcmutePage": "Trang 204", "section": "8.3"}
})

# Q7
QUESTIONS_CH8.append({
    "num": 7, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch8-03",
    "content": "Hàm ftell(fp) trong thư viện chuẩn <stdio.h> trả về thông tin gì cho chương trình?",
    "options": [
        "Vị trí hiện tại của con trỏ tệp tính bằng số byte khoảng cách kể từ điểm đầu tiên của tệp tin.",
        "Tổng dung lượng bộ nhớ RAM mà hệ thống đã tiêu tốn cho việc duy trì luồng mở tệp tin hiện tại.",
        "Số lượng dòng văn bản còn lại mà chương trình chưa đọc tính từ vị trí con trỏ đến hết tệp.",
        "Một giá trị boolean logic xác nhận việc con trỏ tệp có đang nằm ở vị trí đầu tệp hay không."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.526 và HCMUTE tr.205: ftell(fp) trả về vị trí hiện tại của con trỏ tệp (tính bằng byte từ đầu tệp, kiểu long), trả về -1L nếu có lỗi.",
    "ref": {"uttPage": "Trang 526", "hcmutePage": "Trang 205", "section": "8.3"}
})

# Q8
QUESTIONS_CH8.append({
    "num": 8, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch8-03",
    "content": "Cơ chế hoạt động của cờ feof(fp) khi kiểm tra trạng thái cuối tệp tin được quy định như thế nào?",
    "options": [
        "Chỉ bật lên giá trị khác 0 sau khi đã có một thao tác đọc dữ liệu thất bại do vượt qua cuối tệp.",
        "Tự động bật lên ngay khi con trỏ tệp vừa chạm đúng vào vị trí byte dữ liệu cuối cùng của tệp.",
        "Luôn luôn dự đoán trước một thao tác đọc để báo hiệu cho vòng lặp dừng lại đúng thời điểm.",
        "Tự động trả về giá trị số 0 trong suốt quá trình tệp tin đang được mở bởi lệnh gọi hàm fopen."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.512 và HCMUTE tr.201: feof(fp) chỉ trả về true (khác 0) SAU KHI một thao tác đọc cố gắng đọc vượt qua EOF. Đây là lý do `while(!feof(fp))` thường lặp thừa 1 lần.",
    "ref": {"uttPage": "Trang 512", "hcmutePage": "Trang 201", "section": "8.3"}
})

# Q9
QUESTIONS_CH8.append({
    "num": 9, "subtype": "theory", "diff": "easy", "articleId": "c-art-ch8-03",
    "content": "Hàm rewind(fp) tương đương hoàn toàn với lời gọi hàm định vị nào sau đây?",
    "options": [
        "Tương đương với câu lệnh fseek(fp, 0L, SEEK_SET) và đồng thời xóa sạch các cờ báo lỗi của tệp.",
        "Tương đương với câu lệnh fseek(fp, 0L, SEEK_END) để đưa con trỏ tệp nhảy ngay về cuối tệp tin.",
        "Tương đương với câu lệnh fflush(fp) để xóa toàn bộ dữ liệu đang chờ ghi trên bộ nhớ đệm.",
        "Tương đương với việc đóng tệp bằng fclose(fp) rồi sau đó lập tức mở lại tệp bằng fopen()."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.527 và HCMUTE tr.205: `rewind(fp)` đưa con trỏ về đầu tệp, tương đương `(void)fseek(fp, 0L, SEEK_SET)` cộng thêm thao tác xóa cờ lỗi (clearerr).",
    "ref": {"uttPage": "Trang 527", "hcmutePage": "Trang 205", "section": "8.3"}
})

# Q10
QUESTIONS_CH8.append({
    "num": 10, "subtype": "theory", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Giá trị hằng số EOF (End Of File) trong tệp tiêu đề <stdio.h> thường được định nghĩa bằng số nào?",
    "options": [
        "Thường được định nghĩa là một giá trị số nguyên âm bằng -1 để phân biệt với các ký tự hợp lệ.",
        "Luôn luôn bằng giá trị 0 tương đương với mã ASCII của ký tự kết thúc chuỗi văn bản '\\0'.",
        "Bằng giá trị 255 tương ứng với mã số của byte nhị phân lớn nhất trong bảng mã ký tự ASCII.",
        "Là một con trỏ địa chỉ rỗng NULL được ép kiểu sang kiểu dữ liệu số nguyên không dấu."
    ],
    "correct": 0, "mock": False,
    "explanation": "Căn cứ UTT tr.508 và HCMUTE tr.200: EOF là macro số nguyên âm (thường là -1) biểu thị kết thúc tệp tin hoặc lỗi vào ra.",
    "ref": {"uttPage": "Trang 508", "hcmutePage": "Trang 200", "section": "8.2"}
})


# ==========================================
# 2. OUTPUT / TRACE (7 câu: Q11 -> Q17)
# ==========================================

# Q11 (Mock)
QUESTIONS_CH8.append({
    "num": 11, "subtype": "output", "diff": "medium", "articleId": "c-art-ch8-03",
    "content": "Đoạn chương trình sau đây thực hiện đo kích thước của một tệp tin sẽ in ra kết quả gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"data.bin\", \"wb\");\n    fwrite(\"12345\", sizeof(char), 5, fp);\n    fclose(fp);\n\n    fp = fopen(\"data.bin\", \"rb\");\n    fseek(fp, 0, SEEK_END);\n    printf(\"%ld\", ftell(fp));\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "In ra số 5 (fseek tới cuối tệp và ftell trả về khoảng cách số byte từ đầu tệp là 5 bytes).",
        "In ra số 0 (do con trỏ tệp sau khi mở lại tệp luôn luôn nằm ở vị trí đầu tiên của tệp tin).",
        "In ra số 6 (chương trình tự động tính thêm ký tự kết thúc chuỗi '\\0' khi ghi vào tệp nhị phân).",
        "Chương trình gặp lỗi biên dịch do hàm ftell không thể kết hợp trực tiếp với hàm fseek."
    ],
    "correct": 0, "mock": True,
    "explanation": "Thuật toán kinh điển đo size tệp: `fseek(fp, 0, SEEK_END); long size = ftell(fp);`. Đã ghi đúng 5 bytes, nên in ra 5.",
    "ref": {"uttPage": "Trang 526", "hcmutePage": "Trang 205", "section": "8.3"}
})

# Q12
QUESTIONS_CH8.append({
    "num": 12, "subtype": "output", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Giá trị in ra của biến result khi đọc một số nguyên bằng fscanf trong đoạn mã sau là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"num.txt\", \"w\");\n    fprintf(fp, \"100 200\");\n    fclose(fp);\n\n    fp = fopen(\"num.txt\", \"r\");\n    int val;\n    int count = fscanf(fp, \"%d\", &val);\n    printf(\"%d %d\", count, val);\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "In ra '1 100' (hàm fscanf đọc thành công 1 trường dữ liệu và gán giá trị 100 vào biến val).",
        "In ra '2 100' (hàm fscanf đếm tổng số trường dữ liệu có sẵn trong tệp tin trước khi gán).",
        "In ra '100 200' (hàm fscanf tự động đọc liên tiếp tất cả các số có trong tệp cùng lúc).",
        "Chương trình báo lỗi truy cập do không được phép mở lại tệp tin vừa mới đóng trước đó."
    ],
    "correct": 0, "mock": False,
    "explanation": "fscanf trả về số trường đọc thành công. Nó đọc được 1 số là 100, nên count = 1, val = 100. In '1 100'.",
    "ref": {"uttPage": "Trang 514", "hcmutePage": "Trang 201", "section": "8.2"}
})

# Q13
QUESTIONS_CH8.append({
    "num": 13, "subtype": "output", "diff": "hard", "articleId": "c-art-ch8-03",
    "content": "Sau khi thực hiện chuỗi lệnh định vị fseek sau, ký tự được đọc ra tiếp theo là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    fputs(\"ABCDEF\", fp);\n    fclose(fp);\n\n    fp = fopen(\"test.txt\", \"r\");\n    fseek(fp, 2, SEEK_SET);\n    fseek(fp, 1, SEEK_CUR);\n    printf(\"%c\", fgetc(fp));\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "In ra ký tự 'D' (dịch 2 byte từ đầu tới 'C', rồi dịch tiếp 1 byte từ vị trí hiện tại tới 'D').",
        "In ra ký tự 'C' (lệnh fseek thứ hai ghi đè lên lệnh thứ nhất và chỉ dịch 1 byte từ đầu tệp).",
        "In ra ký tự 'E' (các lệnh fseek tự động tính thêm khoảng đệm của ký tự kết thúc chuỗi văn bản).",
        "In ra ký tự 'B' (con trỏ tệp bị lùi lại do các thao tác định vị liên tiếp không đồng bộ)."
    ],
    "correct": 0, "mock": False,
    "explanation": "File: 'A'(0), 'B'(1), 'C'(2), 'D'(3), 'E'(4), 'F'(5). `fseek(fp, 2, SEEK_SET)` đến byte 2 ('C'). `fseek(fp, 1, SEEK_CUR)` dịch tiếp 1 byte đến byte 3 ('D'). `fgetc` đọc byte 3 là 'D'.",
    "ref": {"uttPage": "Trang 525", "hcmutePage": "Trang 204", "section": "8.3"}
})

# Q14
QUESTIONS_CH8.append({
    "num": 14, "subtype": "output", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Giá trị trả về của hàm fwrite khi ghi một mảng 4 số nguyên vào tệp nhị phân là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    int a[4] = {10, 20, 30, 40};\n    FILE *fp = fopen(\"out.bin\", \"wb\");\n    size_t written = fwrite(a, sizeof(int), 4, fp);\n    printf(\"%zu\", written);\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "In ra số 4 (hàm fwrite trả về số lượng phần tử ghi thành công chứ không trả về số bytes).",
        "In ra số 16 (hàm fwrite trả về tổng số byte dữ liệu thực tế được ghi xuống tệp: 4 * 4 = 16).",
        "In ra số 1 (do toàn bộ mảng dữ liệu được ghi thành một khối duy nhất xuống thiết bị đĩa).",
        "In ra số 0 (do tệp tin chưa được gọi hàm fflush để đồng bộ dữ liệu trước khi lấy kết quả)."
    ],
    "correct": 0, "mock": False,
    "explanation": "fwrite(ptr, size, count, fp) trả về số lượng phần tử (count) ghi thành công, tức là 4 (chứ không phải 16 bytes).",
    "ref": {"uttPage": "Trang 519", "hcmutePage": "Trang 202", "section": "8.2"}
})

# Q15
QUESTIONS_CH8.append({
    "num": 15, "subtype": "output", "diff": "medium", "articleId": "c-art-ch8-01",
    "content": "Nội dung tệp sau khi chạy chương trình mở tệp ghi nối tiếp (mode \"a\") sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"log.txt\", \"w\");\n    fputs(\"A\", fp);\n    fclose(fp);\n\n    fp = fopen(\"log.txt\", \"a\");\n    fputs(\"B\", fp);\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "Tệp chứa chuỗi 'AB' (mode \"w\" ghi chữ 'A', sau đó mode \"a\" ghi tiếp nối chữ 'B' vào đuôi tệp).",
        "Tệp chỉ chứa duy nhất chữ 'B' (vì thao tác mở tệp lần hai đã ghi đè lên nội dung tệp cũ).",
        "Tệp chỉ chứa duy nhất chữ 'A' (vì chế độ \"a\" không cho phép ghi đè lên dữ liệu đã có sẵn).",
        "Tệp bị rỗng do lệnh đóng tệp lần thứ hai đã vô hiệu hóa thao tác ghi nối tiếp trước đó."
    ],
    "correct": 0, "mock": False,
    "explanation": "Lần 1 mode \"w\" tạo tệp ghi 'A'. Lần 2 mode \"a\" nối 'B' vào cuối. Nội dung tệp là 'AB'.",
    "ref": {"uttPage": "Trang 505", "hcmutePage": "Trang 198", "section": "8.1"}
})

# Q16
QUESTIONS_CH8.append({
    "num": 16, "subtype": "output", "diff": "hard", "articleId": "c-art-ch8-03",
    "content": "Kết quả in ra của chương trình đọc ngược từ cuối tệp bằng fseek sau đây là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"text.txt\", \"w\");\n    fputs(\"12345\", fp);\n    fclose(fp);\n\n    fp = fopen(\"text.txt\", \"r\");\n    fseek(fp, -1, SEEK_END);\n    printf(\"%c\", fgetc(fp));\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "In ra ký tự '5' (lùi lại 1 byte tính từ mốc cuối tệp SEEK_END sẽ trỏ tới ký tự cuối cùng).",
        "In ra ký tự '1' (do con trỏ tệp tự động quay trở lại vị trí byte đầu tiên khi lùi âm).",
        "In ra ký tự rỗng '\\0' (do con trỏ tệp chạm đúng vào mốc kết thúc luồng dữ liệu tệp tin).",
        "Chương trình gặp lỗi biên dịch do độ dời offset trong hàm fseek không được phép mang số âm."
    ],
    "correct": 0, "mock": False,
    "explanation": "SEEK_END là ngay sau ký tự cuối cùng ('5'). Độ dời -1 byte đưa con trỏ về đúng ký tự '5'. fgetc đọc được '5'.",
    "ref": {"uttPage": "Trang 525", "hcmutePage": "Trang 204", "section": "8.3"}
})

# Q17
QUESTIONS_CH8.append({
    "num": 17, "subtype": "output", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Giá trị in ra của biến c khi hàm fgetc gặp điểm kết thúc tệp tin là gì?",
    "codeSnippet": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"empty.txt\", \"w\");\n    fclose(fp);\n\n    fp = fopen(\"empty.txt\", \"r\");\n    int c = fgetc(fp);\n    printf(\"%d\", c == EOF);\n    fclose(fp);\n    return 0;\n}",
    "options": [
        "In ra số 1 (do tệp rỗng nên lần đọc đầu tiên thất bại và hàm fgetc trả về đúng giá trị EOF).",
        "In ra số 0 (do hàm fgetc luôn luôn trả về một mã ký tự khoảng trắng khi tệp không có dữ liệu).",
        "Chương trình sập do không được phép gọi hàm đọc fgetc trên một tệp tin hoàn toàn rỗng.",
        "In ra số -1 (biểu thức logic so sánh bằng tự động chuyển đổi thành mã lỗi nhị phân máy tính)."
    ],
    "correct": 0, "mock": False,
    "explanation": "File rỗng, fgetc(fp) trả về EOF (-1). Biểu thức `c == EOF` là true, in ra 1.",
    "ref": {"uttPage": "Trang 509", "hcmutePage": "Trang 200", "section": "8.2"}
})


# ==========================================
# 3. DEBUG (5 câu: Q18 -> Q22)
# ==========================================

# Q18 (Mock)
QUESTIONS_CH8.append({
    "num": 18, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch8-03",
    "content": "Bẫy vòng lặp đọc tệp: Vì sao đoạn mã sau đây luôn in phần tử cuối cùng của tệp lặp lại 2 lần?",
    "codeSnippet": "while (!feof(fp)) {\n    fscanf(fp, \"%d\", &x);\n    printf(\"%d \", x);\n}",
    "options": [
        "Cờ feof chỉ bật sau khi fscanf đọc hụt; lượt đọc cuối thất bại nhưng biến x cũ vẫn bị in ra.",
        "Do hàm printf tự động lưu giá trị in gần nhất vào bộ đệm và in lại khi luồng tệp bị đóng.",
        "Do tệp tin luôn chứa hai ký tự kết thúc tệp EOF liên tiếp nhau theo chuẩn hệ điều hành.",
        "Do hàm fscanf tự động nhân đôi giá trị của trường dữ liệu cuối cùng khi chạm mốc tệp tin."
    ],
    "correct": 0, "mock": True,
    "explanation": "Bẫy kinh điển `while (!feof(fp))`: Ở cuối file, fscanf đọc hụt (thất bại), nhưng x không đổi và feof mới bật lên. Đoạn code vẫn chạy printf(x) lần nữa -> lặp 2 lần bản ghi cuối. Cần viết: `while (fscanf(...) == 1)`.",
    "ref": {"uttPage": "Trang 513", "hcmutePage": "Trang 201", "section": "8.3"}
})

# Q19
QUESTIONS_CH8.append({
    "num": 19, "subtype": "debug", "diff": "easy", "articleId": "c-art-ch8-01",
    "content": "Đoạn chương trình sau đây thiếu bước kiểm tra sống còn nào dẫn đến nguy cơ crash sập ứng dụng?",
    "codeSnippet": "FILE *fp = fopen(\"dulieu.txt\", \"r\");\nchar c = fgetc(fp);",
    "options": [
        "Thiếu bước kiểm tra con trỏ 'if (fp == NULL)' đề phòng trường hợp tệp tin không tồn tại.",
        "Thiếu câu lệnh cấp phát bộ nhớ động malloc cho biến con trỏ tệp fp trước khi mở tệp.",
        "Thiếu tham số chỉ định mã hóa bảng mã ký tự UTF-8 trong chuỗi chế độ mở tệp tin của C.",
        "Thiếu việc ép kiểu con trỏ fp sang kiểu con trỏ void* trước khi thực hiện đọc ký tự đầu."
    ],
    "correct": 0, "mock": False,
    "explanation": "Nếu dulieu.txt không tồn tại, fopen trả về NULL. Gọi fgetc(NULL) sẽ crash ngay lập tức (Null pointer dereference). Luôn phải kiểm tra `if (fp == NULL)`.",
    "ref": {"uttPage": "Trang 503", "hcmutePage": "Trang 197", "section": "8.1"}
})

# Q20
QUESTIONS_CH8.append({
    "num": 20, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Vì sao biến c dùng để nhận kết quả của hàm fgetc() bắt buộc phải được khai báo kiểu int thay vì char?",
    "options": [
        "Vì giá trị EOF (-1) có thể trùng với một ký tự mở rộng hợp lệ nếu c chỉ có kích thước 1 byte.",
        "Vì kiểu char trong ngôn ngữ C không có khả năng lưu trữ được các ký tự chữ cái tiếng Anh.",
        "Vì hàm fgetc bắt buộc phải ép kiểu dữ liệu trả về sang kiểu số nguyên có dấu 4 bytes Stack.",
        "Vì hệ điều hành chỉ cho phép đọc các tệp tin văn bản khi dữ liệu truyền qua các biến kiểu int."
    ],
    "correct": 0, "mock": False,
    "explanation": "fgetc trả về int. Nếu gán vào unsigned char c, EOF (-1) chuyển thành 255 (khác EOF) -> lặp vô tận. Nếu gán signed char, ký tự có mã 255 (0xFF) sẽ bị nhầm thành EOF.",
    "ref": {"uttPage": "Trang 509", "hcmutePage": "Trang 200", "section": "8.2"}
})

# Q21
QUESTIONS_CH8.append({
    "num": 21, "subtype": "debug", "diff": "medium", "articleId": "c-art-ch8-01",
    "content": "Lập trình viên muốn ghi thêm một dòng nhật ký vào tệp log có sẵn nhưng lại làm mất hết dữ liệu cũ. Lỗi do đâu?",
    "options": [
        "Do sử dụng nhầm chế độ mở tệp \"w\" thay vì chế độ ghi nối tiếp \"a\" khiến tệp bị xóa trắng.",
        "Do không gọi hàm fflush(fp) ngay sau khi thực hiện xong câu lệnh ghi chuỗi văn bản fputs.",
        "Do tệp tin có dung lượng vượt quá giới hạn cho phép của hệ thống tệp tin phân vùng FAT32.",
        "Do hàm fputs tự động xóa toàn bộ các dòng văn bản đứng trước dòng văn bản mới được thêm."
    ],
    "correct": 0, "mock": False,
    "explanation": "Mode \"w\" tự động cắt cụt (truncate) tệp về 0 byte ngay khi mở, xóa sạch dữ liệu cũ. Muốn ghi thêm vào đuôi phải dùng mode \"a\" (append).",
    "ref": {"uttPage": "Trang 504", "hcmutePage": "Trang 198", "section": "8.1"}
})

# Q22
QUESTIONS_CH8.append({
    "num": 22, "subtype": "debug", "diff": "hard", "articleId": "c-art-ch8-02",
    "content": "Lỗi định dạng đọc nào khiến chương trình đọc chuỗi có khoảng trắng từ tệp sau đây bị lặp vô tận?",
    "codeSnippet": "char word[50];\nwhile (fscanf(fp, \"%s\", word) == 1) {\n    // Xu ly\n}",
    "options": [
        "Đoạn mã không có lỗi vô tận nếu tệp hợp lệ; tuy nhiên %s sẽ chia nhỏ câu thành từng từ riêng lẻ.",
        "Định dạng %s không thể đọc được dữ liệu từ luồng tệp tin mà chỉ đọc được từ bàn phím chuẩn.",
        "Hàm fscanf sẽ bị treo vĩnh viễn ngay khi gặp ký tự xuống dòng '\\n' đầu tiên trong tệp tin.",
        "Biến mảng word bắt buộc phải được cấp phát bộ nhớ động bằng calloc trước khi truyền vào hàm."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cú pháp `while (fscanf(fp, \"%s\", word) == 1)` là hoàn toàn đúng để duyệt từng từ đến hết file (an toàn, không lặp vô tận), nhưng chú ý nó tách theo khoảng trắng.",
    "ref": {"uttPage": "Trang 515", "hcmutePage": "Trang 201", "section": "8.2"}
})


# ==========================================
# 4. FILL-IN (3 câu: Q23 -> Q25)
# ==========================================

# Q23
QUESTIONS_CH8.append({
    "num": 23, "subtype": "fill-in", "diff": "easy", "articleId": "c-art-ch8-01",
    "content": "Cần điền chuỗi chế độ nào vào chỗ trống (...) của hàm fopen để mở tệp văn bản chỉ để đọc?",
    "codeSnippet": "FILE *fp = fopen(\"input.txt\", ...);",
    "options": [
        "Điền '\"r\"' để mở tệp tin văn bản ở chế độ chỉ đọc (yêu cầu tệp tin phải tồn tại từ trước).",
        "Điền '\"w\"' để mở tệp tin ở chế độ chỉ đọc và tự động xóa nội dung tệp cũ nếu đã có sẵn.",
        "Điền '\"rb\"' để mở tệp tin ở chế độ đọc tệp thực thi nhị phân có định dạng mã hóa máy tính.",
        "Điền '\"r+\"' để mở tệp tin ở chế độ vừa đọc vừa cho phép ghi đè lên các bản ghi có sẵn."
    ],
    "correct": 0, "mock": False,
    "explanation": "Mode mở tệp văn bản chỉ đọc: `\"r\"`.",
    "ref": {"uttPage": "Trang 504", "hcmutePage": "Trang 198", "section": "8.1"}
})

# Q24
QUESTIONS_CH8.append({
    "num": 24, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch8-03",
    "content": "Cần điền hằng số nào vào vị trí (...) trong hàm fseek để dịch chuyển con trỏ tệp lùi lại từ cuối tệp?",
    "codeSnippet": "fseek(fp, -10, ...);",
    "options": [
        "Điền 'SEEK_END' để xác định vị trí mốc tính độ dịch chuyển là điểm kết thúc của tệp tin.",
        "Điền 'SEEK_SET' để xác định vị trí mốc tính độ dịch chuyển là điểm bắt đầu của tệp tin.",
        "Điền 'SEEK_CUR' để xác định vị trí mốc tính độ dịch chuyển là vị trí con trỏ hiện thời.",
        "Điền 'EOF' để báo hiệu cho hệ điều hành biết con trỏ tệp đang được thiết lập lùi bước."
    ],
    "correct": 0, "mock": False,
    "explanation": "Để tính độ dời từ cuối tệp, dùng hằng số `SEEK_END`.",
    "ref": {"uttPage": "Trang 524", "hcmutePage": "Trang 204", "section": "8.3"}
})

# Q25
QUESTIONS_CH8.append({
    "num": 25, "subtype": "fill-in", "diff": "medium", "articleId": "c-art-ch8-02",
    "content": "Cần điền hàm nào vào vị trí (...) để đọc an toàn tối đa một dòng văn bản từ tệp tin fp vào mảng buffer?",
    "codeSnippet": "...(buffer, sizeof(buffer), fp);",
    "options": [
        "Điền hàm 'fgets' để đọc toàn bộ dòng văn bản có kiểm soát dung lượng bộ đệm an toàn.",
        "Điền hàm 'gets' để nạp chuỗi ký tự từ tệp mà không cần quan tâm đến số lượng ký tự đọc.",
        "Điền hàm 'fread' để phân tích và chuyển đổi chuỗi văn bản thành dữ liệu nhị phân phần cứng.",
        "Điền hàm 'fscanf' để đọc chuỗi ký tự và tự động loại bỏ các dấu khoảng trắng giữa các từ."
    ],
    "correct": 0, "mock": False,
    "explanation": "Cú pháp: `fgets(buffer, sizeof(buffer), fp);` là hàm đọc dòng an toàn nhất từ tệp tin.",
    "ref": {"uttPage": "Trang 510", "hcmutePage": "Trang 200", "section": "8.2"}
})

print(f"Constructed Chapter 8: {len(QUESTIONS_CH8)} questions.")

# Verify length delta <= 20%
failed = 0
for q in QUESTIONS_CH8:
    lens = [len(opt) for opt in q["options"]]
    max_l = max(lens)
    min_l = min(lens)
    delta = (max_l - min_l) / max_l
    if delta > 0.20:
        print(f"FAIL Q{q['num']}: delta={delta:.1%}: {lens}")
        failed += 1

if failed == 0:
    print("ALL 25 QUESTIONS IN CHAPTER 8 PASSED LENGTH DELTA <= 20%!")
else:
    print(f"FAILED {failed} questions in Chapter 8.")
