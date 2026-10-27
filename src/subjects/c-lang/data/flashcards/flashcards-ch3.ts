/**
 * src/subjects/c-lang/data/flashcards\flashcards-ch3.ts
 * Thẻ ghi nhớ Flashcard Chương 3 (14 thẻ)
 * Cung cấp khái niệm cốt lõi, định nghĩa cô đọng và đoạn code minh họa
 */

import type { CFlashcard } from '../../types/index';

export const flashcardsCh3: CFlashcard[] = [
  {
    "id": "c-fc-ch3-001",
    "chapterId": 3,
    "question": "Giá trị Chân Lý trong C",
    "answer": "Ngôn ngữ C không có kiểu bool nguyên thủy thời C89; mọi giá trị khác 0 được quy ước là Đúng (true), giá trị bằng 0 là Sai (false).",
    "frontConcept": "Giá trị Chân Lý trong C",
    "backDefinition": "Ngôn ngữ C không có kiểu bool nguyên thủy thời C89; mọi giá trị khác 0 được quy ước là Đúng (true), giá trị bằng 0 là Sai (false).",
    "codeHighlight": "if (-5) { /* Luon thuc thi vi -5 khac 0 */ }\nif (0)  { /* Khong bao gio thuc thi */ }",
    "referencePage": "UTT tr.126 / HCMUTE tr.48",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Giá trị Chân Lý trong C"
    ]
  },
  {
    "id": "c-fc-ch3-002",
    "chapterId": 3,
    "question": "Bẫy Toán tử Gán '=' trong if",
    "answer": "Viết if (x = 5) là phép gán đưa 5 vào x và trả về 5 (luôn true). So sánh bằng bắt buộc phải dùng dấu '=='.",
    "frontConcept": "Bẫy Toán tử Gán '=' trong if",
    "backDefinition": "Viết if (x = 5) là phép gán đưa 5 vào x và trả về 5 (luôn true). So sánh bằng bắt buộc phải dùng dấu '=='.",
    "codeHighlight": "int x = 0;\nif (x = 5) { /* Luon chay! Gia tri tra ve la 5 */ }\nif (x == 5) { /* Dung nghia so sanh bang */ }",
    "referencePage": "UTT tr.128 / HCMUTE tr.50",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Bẫy Toán tử Gán '=' trong if"
    ]
  },
  {
    "id": "c-fc-ch3-003",
    "chapterId": 3,
    "question": "Bẫy Dấu Chấm Phẩy ';' Sau if",
    "answer": "Đặt dấu ';' ngay sau if làm thân lệnh trở thành lệnh rỗng; khối lệnh thụt lề phía sau luôn luôn bị thực thi độc lập.",
    "frontConcept": "Bẫy Dấu Chấm Phẩy ';' Sau if",
    "backDefinition": "Đặt dấu ';' ngay sau if làm thân lệnh trở thành lệnh rỗng; khối lệnh thụt lề phía sau luôn luôn bị thực thi độc lập.",
    "codeHighlight": "int x = -10;\nif (x > 0); // Lenh rong ket thuc tai day!\n    printf(\"X duong\\n\"); // Luon luon bi in!",
    "referencePage": "UTT tr.130 / HCMUTE tr.52",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Bẫy Dấu Chấm Phẩy ';' Sau if"
    ]
  },
  {
    "id": "c-fc-ch3-004",
    "chapterId": 3,
    "question": "Vấn đề Dangling Else",
    "answer": "Trong các lệnh if lồng nhau không có ngoặc nhọn {}, nhánh else luôn tự động kết hợp với lệnh if gần nhất chưa có else.",
    "frontConcept": "Vấn đề Dangling Else",
    "backDefinition": "Trong các lệnh if lồng nhau không có ngoặc nhọn {}, nhánh else luôn tự động kết hợp với lệnh if gần nhất chưa có else.",
    "codeHighlight": "if (a > 0)\n    if (b > 0) printf(\"1\");\n    else printf(\"2\"); // else nay thuoc ve if(b > 0)!",
    "referencePage": "UTT tr.135 / HCMUTE tr.55",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Vấn đề Dangling Else"
    ]
  },
  {
    "id": "c-fc-ch3-005",
    "chapterId": 3,
    "question": "Cấu trúc switch-case",
    "answer": "Lựa chọn rẽ nhánh đa giá trị dựa trên biến kiểu nguyên (int, char, enum). Không thể kiểm tra số thực (float) hoặc khoảng giá trị.",
    "frontConcept": "Cấu trúc switch-case",
    "backDefinition": "Lựa chọn rẽ nhánh đa giá trị dựa trên biến kiểu nguyên (int, char, enum). Không thể kiểm tra số thực (float) hoặc khoảng giá trị.",
    "codeHighlight": "switch (ch) {\n    case 'A': printf(\"Xuat sac\"); break;\n    default:  printf(\"Khac\"); break;\n}",
    "referencePage": "UTT tr.146 / HCMUTE tr.62",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Cấu trúc switch-case"
    ]
  },
  {
    "id": "c-fc-ch3-006",
    "chapterId": 3,
    "question": "Cơ chế Fall-through trong switch",
    "answer": "Nếu thiếu lệnh break ở cuối case, chương trình sẽ tự động trôi lệnh xuống thực thi các case phía dưới cho đến khi gặp break.",
    "frontConcept": "Cơ chế Fall-through trong switch",
    "backDefinition": "Nếu thiếu lệnh break ở cuối case, chương trình sẽ tự động trôi lệnh xuống thực thi các case phía dưới cho đến khi gặp break.",
    "codeHighlight": "switch (x) {\n    case 1: printf(\"Mot \"); // Quen break!\n    case 2: printf(\"Hai \"); break;\n} // x=1 in ra: \"Mot Hai \"",
    "referencePage": "UTT tr.148 / HCMUTE tr.64",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Cơ chế Fall-through trong switch"
    ]
  },
  {
    "id": "c-fc-ch3-007",
    "chapterId": 3,
    "question": "Nhánh default trong switch",
    "answer": "Thực thi khi giá trị của biến không khớp với bất kỳ nhãn case nào. Có thể đặt ở bất cứ đâu nhưng thông lệ đặt ở cuối cùng.",
    "frontConcept": "Nhánh default trong switch",
    "backDefinition": "Thực thi khi giá trị của biến không khớp với bất kỳ nhãn case nào. Có thể đặt ở bất cứ đâu nhưng thông lệ đặt ở cuối cùng.",
    "codeHighlight": "switch (color) {\n    case 1: printf(\"Do\"); break;\n    default: printf(\"Mau khac\"); break;\n}",
    "referencePage": "UTT tr.150 / HCMUTE tr.66",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Nhánh default trong switch"
    ]
  },
  {
    "id": "c-fc-ch3-008",
    "chapterId": 3,
    "question": "Vòng lặp for: Chu trình 4 bước",
    "answer": "for (init; cond; step): (1) Khởi tạo init 1 lần -> (2) Kiểm tra cond -> (3) Chạy thân vòng lặp -> (4) Cập nhật step và quay lại bước 2.",
    "frontConcept": "Vòng lặp for: Chu trình 4 bước",
    "backDefinition": "for (init; cond; step): (1) Khởi tạo init 1 lần -> (2) Kiểm tra cond -> (3) Chạy thân vòng lặp -> (4) Cập nhật step và quay lại bước 2.",
    "codeHighlight": "for (int i = 0; i < 5; i++) {\n    printf(\"%d \", i); // In: 0 1 2 3 4\n}",
    "referencePage": "UTT tr.160 / HCMUTE tr.72",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Vòng lặp for: Chu trình 4 bước"
    ]
  },
  {
    "id": "c-fc-ch3-009",
    "chapterId": 3,
    "question": "Vòng lặp vô tận (Infinite Loop)",
    "answer": "Vòng lặp không bao giờ kết thúc do điều kiện luôn đúng hoặc không có điểm dừng: for (;;) hoặc while (1).",
    "frontConcept": "Vòng lặp vô tận (Infinite Loop)",
    "backDefinition": "Vòng lặp không bao giờ kết thúc do điều kiện luôn đúng hoặc không có điểm dừng: for (;;) hoặc while (1).",
    "codeHighlight": "while (1) {\n    // Xu ly su kien lien tuc\n    if (exit_requested) break;\n}",
    "referencePage": "UTT tr.165 / HCMUTE tr.75",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Vòng lặp vô tận (Infinite Loop)"
    ]
  },
  {
    "id": "c-fc-ch3-010",
    "chapterId": 3,
    "question": "Vòng lặp tiền kiểm tra while",
    "answer": "Kiểm tra điều kiện trước khi thực thi. Nếu ngay từ đầu điều kiện sai (0), khối lệnh bên trong sẽ không chạy lần nào.",
    "frontConcept": "Vòng lặp tiền kiểm tra while",
    "backDefinition": "Kiểm tra điều kiện trước khi thực thi. Nếu ngay từ đầu điều kiện sai (0), khối lệnh bên trong sẽ không chạy lần nào.",
    "codeHighlight": "int i = 10;\nwhile (i < 5) {\n    printf(\"Khong bao gio chay\");\n}",
    "referencePage": "UTT tr.170 / HCMUTE tr.78",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Vòng lặp tiền kiểm tra while"
    ]
  },
  {
    "id": "c-fc-ch3-011",
    "chapterId": 3,
    "question": "Vòng lặp hậu kiểm tra do-while",
    "answer": "Thực thi thân vòng lặp trước rồi mới kiểm tra điều kiện. Đảm bảo thân vòng lặp luôn chạy ít nhất 1 lần. Bắt buộc có ';' ở cuối.",
    "frontConcept": "Vòng lặp hậu kiểm tra do-while",
    "backDefinition": "Thực thi thân vòng lặp trước rồi mới kiểm tra điều kiện. Đảm bảo thân vòng lặp luôn chạy ít nhất 1 lần. Bắt buộc có ';' ở cuối.",
    "codeHighlight": "int choice;\ndo {\n    printf(\"Nhap lua chon (1-3): \");\n    scanf(\"%d\", &choice);\n} while (choice < 1 || choice > 3);",
    "referencePage": "UTT tr.175 / HCMUTE tr.82",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Vòng lặp hậu kiểm tra do-while"
    ]
  },
  {
    "id": "c-fc-ch3-012",
    "chapterId": 3,
    "question": "Lệnh break ngắt luồng",
    "answer": "Thoát ngay lập tức khỏi vòng lặp (for, while, do-while) hoặc cấu trúc switch gần nhất bao bọc nó.",
    "frontConcept": "Lệnh break ngắt luồng",
    "backDefinition": "Thoát ngay lập tức khỏi vòng lặp (for, while, do-while) hoặc cấu trúc switch gần nhất bao bọc nó.",
    "codeHighlight": "for (int i = 0; i < 100; i++) {\n    if (i == 5) break; // Thoat vong lap khi i = 5\n}",
    "referencePage": "UTT tr.190 / HCMUTE tr.86",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Lệnh break ngắt luồng"
    ]
  },
  {
    "id": "c-fc-ch3-013",
    "chapterId": 3,
    "question": "Lệnh continue bỏ qua lượt lặp",
    "answer": "Bỏ qua các lệnh còn lại trong lượt lặp hiện tại và nhảy ngay đến bước cập nhật (trong for) hoặc kiểm tra điều kiện (trong while).",
    "frontConcept": "Lệnh continue bỏ qua lượt lặp",
    "backDefinition": "Bỏ qua các lệnh còn lại trong lượt lặp hiện tại và nhảy ngay đến bước cập nhật (trong for) hoặc kiểm tra điều kiện (trong while).",
    "codeHighlight": "for (int i = 0; i < 6; i++) {\n    if (i % 2 == 0) continue; // Bo qua so chan\n    printf(\"%d \", i); // In: 1 3 5\n}",
    "referencePage": "UTT tr.195 / HCMUTE tr.88",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Lệnh continue bỏ qua lượt lặp"
    ]
  },
  {
    "id": "c-fc-ch3-014",
    "chapterId": 3,
    "question": "Lệnh goto và Nhãn (Label)",
    "answer": "Nhảy không điều kiện tới vị trí nhãn được đánh dấu trong hàm. Hạn chế dùng để tránh mã nguồn rối rắm (Spaghetti Code).",
    "frontConcept": "Lệnh goto và Nhãn (Label)",
    "backDefinition": "Nhảy không điều kiện tới vị trí nhãn được đánh dấu trong hàm. Hạn chế dùng để tránh mã nguồn rối rắm (Spaghetti Code).",
    "codeHighlight": "for (int i = 0; i < 10; i++)\n    for (int j = 0; j < 10; j++)\n        if (error) goto cleanup;\ncleanup:\n    // Don dep bo nho va thoat",
    "referencePage": "UTT tr.202 / HCMUTE tr.90",
    "masteryLevel": "learning",
    "tags": [
      "Chương 3",
      "Flashcard",
      "Lệnh goto và Nhãn (Label)"
    ]
  }
];
