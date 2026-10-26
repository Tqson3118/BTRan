/**
 * src/data/questions/questions-ch7.ts
 * Ngân hàng câu hỏi trắc nghiệm (MCQ) & Thẻ ghi nhớ (Flashcards) Chương 7:
 * PHÁP LUẬT PHÒNG, CHỐNG THAM NHŨNG
 * 
 * Nguồn tư liệu: Giáo trình Pháp luật đại cương (HCMUTE 2023), tr. 263 - 295
 * Căn cứ pháp lý: Luật Phòng, chống tham nhũng năm 2018 & Bộ luật Hình sự năm 2015 (sửa đổi 2017)
 * Bản quyền dữ liệu học tập Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
 */

import { Question, Flashcard } from '../../types';

export const chapter7Questions: Question[] = [
  {
    "id": "q-ch7-001",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.1",
    "content": "Theo quy định tại Khoản 1 Điều 3 Luật Phòng, chống tham nhũng năm 2018, tham nhũng được định nghĩa như thế nào?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi."
      },
      {
        "id": "B",
        "text": "Là hành vi của người đại diện cơ quan công quyền cố ý làm trái pháp luật nhằm tư lợi."
      },
      {
        "id": "C",
        "text": "Là hành vi của công chức chiếm đoạt tài sản nhà nước được giao phụ trách và quản lý."
      },
      {
        "id": "D",
        "text": "Là hành vi của người có thẩm quyền thực hiện việc nhũng nhiễu để vòi vĩnh người dân."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Căn cứ Giáo trình tr. 263-264 và Khoản 1 Điều 3 Luật PCTN 2018: \"Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi\".\n- Phương án A đúng vì trích dẫn chính xác định nghĩa luật định.\n- Phương án B sai vì chỉ nêu khái niệm hẹp \"người đại diện cơ quan công quyền\" và bỏ sót khu vực ngoài nhà nước.\n- Phương án C sai vì đây chỉ mô tả hẹp hành vi tham ô tài sản, không bao quát các hành vi tham nhũng khác.\n- Phương án D sai vì nhũng nhiễu chỉ là một trong các biểu hiện cụ thể, không phải định nghĩa tổng quát.",
    "difficulty": "easy",
    "tags": [
      "Khái niệm tham nhũng",
      "Luật PCTN 2018",
      "Định nghĩa luật định"
    ],
    "keyTerm": "Khái niệm tham nhũng",
    "sourcePage": 263,
    "statuteRef": "Khoản 1 Điều 3 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 0,
    "correctOptions": [
      0
    ]
  },
  {
    "id": "q-ch7-002",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.1",
    "content": "Ông Nguyễn Văn X là Chủ tịch Ủy ban nhân dân xã Y. Vào ban đêm, ông X lén lút đột nhập vào nhà một hộ dân trong xã và thực hiện hành vi trộm cắp một xe máy trị giá 25 triệu đồng rồi bị công an bắt quả tang. Hành vi của ông X có bị coi là tham nhũng theo quy định của pháp luật Việt Nam hay không? Vì sao?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Có, vì ông X là người đứng đầu cơ quan công quyền địa phương và đã cố ý thực hiện hành vi phạm tội nghiêm trọng."
      },
      {
        "id": "B",
        "text": "Không, vì ông X không sử dụng chức vụ, quyền hạn của mình như một công cụ, phương tiện để thực hiện hành vi trộm cắp."
      },
      {
        "id": "C",
        "text": "Có, vì chủ thể vi phạm là cán bộ giữ chức vụ lãnh đạo và hành vi phạm tội này mang động cơ tư lợi tài sản cá nhân."
      },
      {
        "id": "D",
        "text": "Không, vì giá trị tài sản trộm cắp mới chỉ đạt mức hai mươi lăm triệu đồng, chưa đủ định lượng cấu thành tham nhũng."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Căn cứ Giáo trình tr. 264-265: Dấu hiệu đặc trưng bắt buộc của tham nhũng là \"chủ thể tham nhũng đã lợi dụng chức vụ được giao, sử dụng chức vụ, quyền hạn là một phương tiện, công cụ để thực hiện hành vi. Một người có chức vụ, quyền hạn có thực hiện hành vi trái pháp luật lại không lợi dụng chức vụ, quyền hạn của mình thì hành vi vi phạm đó không phải là tham nhũng\". Giáo trình lấy ví dụ chính trường hợp Chủ tịch xã trộm cắp tài sản tại nơi cư trú không phải tham nhũng mà là tội phạm thông thường.\n- Phương án B đúng.\n- Phương án A sai vì bỏ qua điều kiện tiên quyết là hành vi phải gắn liền với việc lợi dụng chức vụ, quyền hạn làm công cụ.\n- Phương án C sai vì dù có tư lợi nhưng chức vụ không phải là công cụ thực hiện việc trộm cắp.\n- Phương án D sai vì pháp luật không quy định định lượng 25 triệu đồng để phân biệt hành vi có phải tham nhũng hay không.",
    "difficulty": "medium",
    "tags": [
      "Đặc điểm tham nhũng",
      "Lợi dụng chức vụ quyền hạn",
      "Tình huống thực tế"
    ],
    "keyTerm": "Lợi dụng chức vụ, quyền hạn",
    "sourcePage": 264,
    "statuteRef": "Khoản 1 Điều 3 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 1,
    "correctOptions": [
      1
    ]
  },
  {
    "id": "q-ch7-003",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.1",
    "content": "Dưới góc độ lý luận và pháp lý Việt Nam, hành vi tham nhũng có những đặc điểm cơ bản nào sau đây? (Chọn các phương án đúng)",
    "questionType": "multiple",
    "options": [
      {
        "id": "A",
        "text": "Chủ thể của hành vi bắt buộc phải là người có chức vụ, quyền hạn trong khu vực công hoặc khu vực tư."
      },
      {
        "id": "B",
        "text": "Tài sản bị chiếm đoạt bắt buộc phải có giá trị định lượng tối thiểu từ 100 triệu đồng trở lên."
      },
      {
        "id": "C",
        "text": "Người vi phạm đã lợi dụng chức vụ, quyền hạn được giao như một phương tiện để làm trái pháp luật."
      },
      {
        "id": "D",
        "text": "Động cơ, mục đích của người thực hiện hành vi là nhằm đạt được lợi ích vật chất hoặc tinh thần."
      },
      {
        "id": "E",
        "text": "Hậu quả của hành vi bắt buộc phải gây thiệt hại nghiêm trọng cho ngân sách nhà nước trung ương."
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 264-265: Tham nhũng có 3 đặc điểm cơ bản:\n1. Về chủ thể: Phải là người có chức vụ, quyền hạn (A đúng - bao gồm cả khu vực nhà nước và khu vực ngoài nhà nước theo Luật PCTN 2018);\n2. Về hành vi: Chủ thể đã lợi dụng chức vụ, quyền hạn được giao làm phương tiện, công cụ để thực hiện hành vi (C đúng);\n3. Về động cơ: Vì vụ lợi - bao gồm lợi ích vật chất hoặc tinh thần (D đúng).\n- Phương án B sai vì luật không đòi hỏi giá trị tài sản tối thiểu phải từ 100 triệu đồng.\n- Phương án E sai vì tham nhũng không bắt buộc phải gây thiệt hại cho ngân sách trung ương mà có thể diễn ra ở địa phương, cơ sở hoặc ngoài nhà nước.",
    "difficulty": "medium",
    "tags": [
      "Đặc điểm tham nhũng",
      "Chủ thể có chức vụ",
      "Vụ lợi vật chất và tinh thần"
    ],
    "keyTerm": "Ba đặc điểm của tham nhũng",
    "sourcePage": 264,
    "statuteRef": "Điều 3 Luật Phòng, chống tham nhũng 2018",
    "type": "multiple",
    "correctOption": 0,
    "correctOptions": [
      0,
      2,
      3
    ]
  },
  {
    "id": "q-ch7-004",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.2",
    "content": "Theo tiêu chí phân loại của Công ước Liên hợp quốc về chống tham nhũng (UNCAC) và Giáo trình Pháp luật đại cương (tr. 265), điểm khác biệt căn bản giữa \"tham nhũng lớn\" (Grand corruption) và \"tham nhũng nhỏ\" (Petty corruption) là gì?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Tham nhũng lớn chỉ xảy ra ở các doanh nghiệp tư nhân, còn tham nhũng nhỏ xảy ra ở cơ quan quản lý nhà nước."
      },
      {
        "id": "B",
        "text": "Tham nhũng lớn chỉ liên quan đến tài sản tiền mặt, còn tham nhũng nhỏ chỉ liên quan đến các lợi ích phi vật chất."
      },
      {
        "id": "C",
        "text": "Tham nhũng lớn xâm nhập đến cấp bậc quản lý cao nhất của chính phủ, còn tham nhũng nhỏ gắn với giao dịch hàng ngày."
      },
      {
        "id": "D",
        "text": "Tham nhũng lớn luôn bị truy cứu trách nhiệm hình sự, còn tham nhũng nhỏ chỉ bị xử lý kỷ luật hoặc hành chính nội bộ."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Căn cứ Giáo trình tr. 265: \"Công ước phòng chống tham nhũng của Liên hợp quốc đã chia tham nhũng thành hai loại là tham nhũng lớn (Grand corruption) và tham nhũng nhỏ (petty corruption). Tham nhũng lớn là loại tham nhũng xâm nhập đến tận những cấp bậc cao nhất của Chính phủ quốc gia, làm xói mòn lòng tin vào sự quản lý đúng đắn, nguyên tắc nhà nước pháp quyền và sự ổn định của nền kinh tế. Tham nhũng nhỏ là tham nhũng liên quan đến việc đổi chác một số tiền nhỏ, việc làm ơn không đáng kể bởi những người tìm kiếm sự ưu đãi, hoặc việc sử dụng bạn bè hay họ hàng nắm giữ chức vụ nhỏ\".\n- Phương án C đúng.\n- Phương án A sai vì tham nhũng lớn gắn liền với quan chức chính quyền cấp cao và chính sách nhà nước.\n- Phương án B sai vì cả hai loại đều có thể liên quan đến lợi ích vật chất hoặc phi vật chất.\n- Phương án D sai vì tham nhũng nhỏ nếu đủ yếu tố cấu thành tội phạm vẫn bị truy cứu trách nhiệm hình sự.",
    "difficulty": "hard",
    "tags": [
      "Phân loại tham nhũng",
      "UNCAC",
      "Tham nhũng lớn",
      "Tham nhũng nhỏ"
    ],
    "keyTerm": "Tham nhũng lớn và tham nhũng nhỏ",
    "sourcePage": 265,
    "statuteRef": "Công ước Liên hợp quốc về chống tham nhũng (UNCAC)",
    "type": "single",
    "correctOption": 2,
    "correctOptions": [
      2
    ]
  },
  {
    "id": "q-ch7-005",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.3",
    "content": "Luật Phòng, chống tham nhũng năm 2018 quy định bao nhiêu hành vi tham nhũng trong các doanh nghiệp, tổ chức khu vực ngoài nhà nước?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Bao gồm mười hai hành vi tương tự như khu vực nhà nước."
      },
      {
        "id": "B",
        "text": "Bao gồm bảy hành vi tương ứng với bảy tội danh tham nhũng."
      },
      {
        "id": "C",
        "text": "Bao gồm năm hành vi gắn liền với hoạt động kinh doanh tư nhân."
      },
      {
        "id": "D",
        "text": "Bao gồm ba hành vi: tham ô, nhận hối lộ và đưa/môi giới hối lộ."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 269 và Khoản 2 Điều 2 Luật PCTN 2018: Những hành vi tham nhũng trong khu vực ngoài nhà nước do người có chức vụ, quyền hạn trong doanh nghiệp, tổ chức khu vực ngoài nhà nước thực hiện gồm 03 hành vi sau:\n1. Tham ô tài sản;\n2. Nhận hối lộ;\n3. Đưa hối lộ, môi giới hối lộ để giải quyết công việc của doanh nghiệp, tổ chức mình vì vụ lợi.\n- Phương án D đúng.\n- Phương án A sai vì 12 hành vi là quy định đối với khu vực nhà nước (Khoản 1 Điều 2).\n- Phương án B sai vì 7 tội danh là quy định trong Bộ luật Hình sự.\n- Phương án C sai vì luật không quy định 5 hành vi.",
    "difficulty": "easy",
    "tags": [
      "Hành vi tham nhũng",
      "Khu vực ngoài nhà nước",
      "Khoản 2 Điều 2"
    ],
    "keyTerm": "Hành vi tham nhũng ngoài nhà nước",
    "sourcePage": 269,
    "statuteRef": "Khoản 2 Điều 2 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 3,
    "correctOptions": [
      3
    ]
  },
  {
    "id": "q-ch7-006",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.3",
    "content": "Bà Trần Thị H là thủ quỹ của một cơ quan nhà nước, được giao quản lý két tiền mặt cơ quan. Lợi dụng lúc hết giờ làm việc và bảo vệ không để ý, bà H đã tự ý rút 80 triệu đồng trong két quỹ để mang về giải quyết nợ nần riêng của gia đình. Hành vi của bà H cấu thành tội danh nào theo Bộ luật Hình sự 2015?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Tội tham ô tài sản theo quy định tại Điều 353 Bộ luật Hình sự."
      },
      {
        "id": "B",
        "text": "Tội lừa đảo chiếm đoạt tài sản theo quy định Điều 174 Bộ luật Hình sự."
      },
      {
        "id": "C",
        "text": "Tội lạm quyền trong khi thi hành công vụ theo quy định Điều 357 Bộ luật."
      },
      {
        "id": "D",
        "text": "Tội thiếu trách nhiệm gây hậu quả nghiêm trọng theo quy định Điều 360."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Căn cứ Giáo trình tr. 269-270 và Điều 353 BLHS 2015: \"Chủ thể phạm tội tham ô tài sản phải là người có chức vụ quyền hạn và là người có trách nhiệm quản lý tài sản. Người này đã lợi dụng chức vụ, quyền hạn chiếm đoạt tài sản mà mình có trách nhiệm quản lý trị giá từ 2.000.000 đồng trở lên...\". Bà H là thủ quỹ, có trách nhiệm trực tiếp quản lý tiền mặt trong két và đã chiếm đoạt 80 triệu đồng nên hành vi phạm tội cấu thành Tội tham ô tài sản.\n- Phương án A đúng.\n- Phương án B sai vì bà H không dùng thủ đoạn gian dối để chủ sở hữu giao tài sản mà tự mình chiếm đoạt tài sản do chính mình quản lý.\n- Phương án C sai vì đây là hành vi chiếm đoạt tài sản được giao quản lý, không phải làm trái công vụ thông thường.\n- Phương án D sai vì bà H cố ý chiếm đoạt tiền vì tư lợi cá nhân, không phải hành vi vô ý do thiếu trách nhiệm.",
    "difficulty": "medium",
    "tags": [
      "Tội tham ô tài sản",
      "Điều 353 BLHS",
      "Trách nhiệm quản lý tài sản"
    ],
    "keyTerm": "Tội tham ô tài sản",
    "sourcePage": 269,
    "statuteRef": "Điều 353 Bộ luật Hình sự 2015",
    "type": "single",
    "correctOption": 0,
    "correctOptions": [
      0
    ]
  },
  {
    "id": "q-ch7-007",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.3",
    "content": "Theo quy định của Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung 2017) và Giáo trình Pháp luật đại cương, tội nhận hối lộ (Điều 354) được coi là hoàn thành tại thời điểm nào?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Khi người nhận hối lộ đã hoàn tất trọn vẹn toàn bộ công việc theo yêu cầu của người đưa tiền."
      },
      {
        "id": "B",
        "text": "Khi người phạm tội đã đồng ý nhận tiền, tài sản hoặc lợi ích phi vật chất để làm theo thỏa thuận."
      },
      {
        "id": "C",
        "text": "Khi người đưa hối lộ đã thu được toàn bộ lợi ích kinh tế thực tế từ quyết định của cán bộ."
      },
      {
        "id": "D",
        "text": "Khi cơ quan thanh tra tiến hành lập biên bản bắt quả tang và niêm phong đầy đủ tang vật hối lộ."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Căn cứ Giáo trình tr. 270 và Điều 354 BLHS 2015: \"Việc người nhận hối lộ đã hoàn thành việc thỏa thuận hay chưa không phải là dấu hiệu bắt buộc chỉ cần người phạm tội đã đồng ý nhận tiền hoặc lợi ích vật chất [hoặc lợi ích phi vật chất] để thực hiện công việc như đề nghị, thì tội phạm được xem là đã hoàn thành\".\n- Phương án B đúng.\n- Phương án A sai vì việc hoàn thành công việc theo thỏa thuận không phải là điều kiện bắt buộc để tội phạm hoàn thành.\n- Phương án C sai vì kết quả đạt được của bên đưa hối lộ không phải dấu hiệu định tội của Tội nhận hối lộ.\n- Phương án D sai vì bắt quả tang là hoạt động tố tụng, không phải thời điểm hoàn thành cấu thành tội phạm.",
    "difficulty": "medium",
    "tags": [
      "Tội nhận hối lộ",
      "Điều 354 BLHS",
      "Thời điểm hoàn thành tội phạm"
    ],
    "keyTerm": "Thời điểm hoàn thành tội nhận hối lộ",
    "sourcePage": 270,
    "statuteRef": "Điều 354 Bộ luật Hình sự 2015",
    "type": "single",
    "correctOption": 1,
    "correctOptions": [
      1
    ]
  },
  {
    "id": "q-ch7-008",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.3",
    "content": "Ông Lê Văn K là Đội trưởng Đội Quản lý thị trường. Trong đợt kiểm tra hàng hóa, ông K biết rõ cửa hàng của bà M chỉ vi phạm nhãn mác với mức phạt tối đa 5 triệu đồng theo luật định. Tuy nhiên, vì muốn gây áp lực ép bà M chi tiền bồi dưỡng, ông K đã tự ý ban hành quyết định tạm giữ toàn bộ lô hàng hóa trị giá 120 triệu đồng (vốn là thẩm quyền riêng của Cục trưởng Quản lý thị trường), dẫn đến hàng hóa bị hư hỏng, thiệt hại thực tế 35 triệu đồng. Hành vi của ông K cấu thành tội danh nào?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Tội tham ô tài sản theo Điều 353 Bộ luật Hình sự do đã tạm giữ lô hàng hoá trái phép."
      },
      {
        "id": "B",
        "text": "Tội lợi dụng chức vụ, quyền hạn trong khi thi hành công vụ theo Điều 356 Bộ luật Hình sự."
      },
      {
        "id": "C",
        "text": "Tội lạm quyền trong khi thi hành công vụ theo quy định tại Điều 357 Bộ luật Hình sự."
      },
      {
        "id": "D",
        "text": "Tội lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản theo quy định Điều 355 Bộ luật Hình sự."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Căn cứ Giáo trình tr. 271-272 và Điều 357 BLHS: \"Khác với tội lợi dụng chức vụ, quyền hạn trong khi thi hành công vụ (Điều 356) người phạm tội trong tội lạm quyền đã thực hiện những việc làm vượt quá giới hạn, quyền năng của mình trong khi thi hành công vụ... gây thiệt hại về tài sản từ 10.000.000 đồng đến dưới 100.000.000 đồng hoặc gây thiệt hại khác\". Quyết định tạm giữ lô hàng 120 triệu đồng thuộc thẩm quyền của Cục trưởng, ông K chỉ là Đội trưởng nhưng đã tự ý ban hành quyết định (vượt quá quyền hạn được giao), gây thiệt hại tài sản thực tế 35 triệu đồng (thuộc khung từ 10 triệu đến dưới 100 triệu), vì vậy cấu thành Tội lạm quyền trong khi thi hành công vụ (Điều 357).\n- Phương án C đúng.\n- Phương án A sai vì ông K không chiếm đoạt tài sản làm của riêng.\n- Phương án B sai vì Điều 356 áp dụng khi người phạm tội làm trái công vụ trong phạm vi thẩm quyền được giao, còn ông K đã vượt quá thẩm quyền (lạm quyền).\n- Phương án D sai vì ông K không có hành vi chiếm đoạt quyền sở hữu tài sản của bà M.",
    "difficulty": "hard",
    "tags": [
      "Tội lạm quyền",
      "Điều 357 BLHS",
      "Vượt quá quyền hạn",
      "Tình huống thực tế"
    ],
    "keyTerm": "Tội lạm quyền trong khi thi hành công vụ",
    "sourcePage": 271,
    "statuteRef": "Điều 357 Bộ luật Hình sự 2015",
    "type": "single",
    "correctOption": 2,
    "correctOptions": [
      2
    ]
  },
  {
    "id": "q-ch7-009",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.3",
    "content": "Theo Khoản 2 Điều 2 Luật Phòng, chống tham nhũng năm 2018, những hành vi nào sau đây bị coi là hành vi tham nhũng trong doanh nghiệp, tổ chức khu vực ngoài nhà nước? (Chọn các phương án đúng)",
    "questionType": "multiple",
    "options": [
      {
        "id": "A",
        "text": "Hành vi tham ô tài sản trong doanh nghiệp, tổ chức khu vực ngoài nhà nước."
      },
      {
        "id": "B",
        "text": "Hành vi nhận hối lộ của người có chức vụ trong tổ chức ngoài nhà nước."
      },
      {
        "id": "C",
        "text": "Hành vi lạm quyền trong khi thi hành nhiệm vụ công tác tại doanh nghiệp."
      },
      {
        "id": "D",
        "text": "Hành vi sử dụng trái phép tài sản công vì động cơ vụ lợi của cá nhân."
      },
      {
        "id": "E",
        "text": "Hành vi đưa hối lộ, môi giới hối lộ để giải quyết công việc doanh nghiệp mình."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "Căn cứ Giáo trình tr. 269 và Khoản 2 Điều 2 Luật PCTN 2018, hành vi tham nhũng trong khu vực ngoài nhà nước chỉ gồm 03 hành vi:\n1. Tham ô tài sản (A đúng);\n2. Nhận hối lộ (B đúng);\n3. Đưa hối lộ, môi giới hối lộ để giải quyết công việc của doanh nghiệp, tổ chức mình vì vụ lợi (E đúng).\n- Phương án C sai vì hành vi lạm quyền chỉ quy định đối với khu vực nhà nước.\n- Phương án D sai vì sử dụng trái phép tài sản công chỉ phát sinh đối với tài sản công thuộc khu vực nhà nước.",
    "difficulty": "medium",
    "tags": [
      "Khu vực ngoài nhà nước",
      "Tham ô",
      "Nhận hối lộ",
      "Đưa hối lộ"
    ],
    "keyTerm": "Ba hành vi tham nhũng ngoài nhà nước",
    "sourcePage": 269,
    "statuteRef": "Khoản 2 Điều 2 Luật Phòng, chống tham nhũng 2018",
    "type": "multiple",
    "correctOption": 0,
    "correctOptions": [
      0,
      1,
      4
    ]
  },
  {
    "id": "q-ch7-010",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.3",
    "content": "Ông Vũ Đình B là Trưởng phòng Nội vụ huyện. Biết ông B có mối quan hệ thân thiết với Giám đốc Bệnh viện Đa khoa huyện (ông T), bà Lan đã đưa 50 triệu đồng nhờ ông B tác động để ông T tiếp nhận con gái bà Lan vào làm việc tại bệnh viện. Ông B nhận tiền và dùng uy tín, vị trí công tác thúc đẩy ông T đồng ý tuyển dụng. Hành vi của ông B cấu thành tội phạm nào theo Bộ luật Hình sự 2015?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Tội lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản theo quy định tại Điều 355 BLHS."
      },
      {
        "id": "B",
        "text": "Tội nhận hối lộ theo quy định tại Điều 354 Bộ luật Hình sự với vai trò người thực hiện."
      },
      {
        "id": "C",
        "text": "Tội môi giới hối lộ theo quy định tại Điều 365 Bộ luật Hình sự với tư cách trung gian."
      },
      {
        "id": "D",
        "text": "Tội lợi dụng chức vụ, quyền hạn gây ảnh hưởng đối với người khác để trục lợi (Điều 358)."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 272 và Điều 358 BLHS 2015: \"Người nào lợi dụng chức vụ, quyền hạn trực tiếp hoặc qua trung gian đòi, nhận hoặc sẽ nhận tiền, tài sản từ 2.000.000 đồng trở lên... để dùng ảnh hưởng của mình thúc đẩy người có chức vụ, quyền hạn khác làm hoặc không làm một việc thuộc trách nhiệm hoặc liên quan trực tiếp đến công việc của họ...\". Ông B không có thẩm quyền tuyển dụng nhân sự bệnh viện nhưng đã nhận 50 triệu đồng và dùng chức vụ của mình tác động đến Giám đốc bệnh viện để giải quyết, do đó cấu thành Tội lợi dụng chức vụ, quyền hạn gây ảnh hưởng đối với người khác để trục lợi theo Điều 358 BLHS.\n- Phương án D đúng.\n- Phương án A sai vì ông B không có hành vi chiếm đoạt tài sản bằng thủ đoạn gian dối hay uy hiếp tinh thần.\n- Phương án B sai vì người phạm tội nhận hối lộ (Điều 354) phải là người có thẩm quyền trực tiếp thực hiện công việc được yêu cầu.\n- Phương án C sai vì người môi giới hối lộ chỉ là cầu nối trung gian đưa tiền giữa hai bên mà không sử dụng ảnh hưởng chức vụ của chính mình để thúc đẩy giải quyết việc.",
    "difficulty": "hard",
    "tags": [
      "Điều 358 BLHS",
      "Gây ảnh hưởng trục lợi",
      "Tình huống thực tế"
    ],
    "keyTerm": "Tội gây ảnh hưởng đối với người khác để trục lợi",
    "sourcePage": 272,
    "statuteRef": "Điều 358 Bộ luật Hình sự 2015",
    "type": "single",
    "correctOption": 3,
    "correctOptions": [
      3
    ]
  },
  {
    "id": "q-ch7-011",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.4",
    "content": "Theo Giáo trình Pháp luật đại cương (HCMUTE 2023), tác hại nguy hiểm nhất về mặt chính trị mà nạn tham nhũng gây ra cho đất nước là gì?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Làm xói mòn lòng tin của nhân dân đối với Đảng, Nhà nước và đe dọa sự tồn vong của chế độ."
      },
      {
        "id": "B",
        "text": "Làm đình trệ các dự án giao thông trọng điểm và gây ách tắc hoạt động xuất nhập khẩu hàng hóa."
      },
      {
        "id": "C",
        "text": "Làm gia tăng chỉ số giá tiêu dùng và dẫn đến tình trạng suy thoái thị trường chứng khoán trong nước."
      },
      {
        "id": "D",
        "text": "Gây thiếu hụt nguồn lao động kỹ thuật cao tại các khu công nghiệp chế xuất trên toàn lãnh thổ."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Căn cứ Giáo trình tr. 276-277: \"Thứ nhất là tác hại về chính trị, tham nhũng là trở lực lớn đối với quá trình đổi mới đất nước và làm xói mòn lòng tin của nhân dân đối với Đảng, Nhà nước, đối với sự nghiệp xây dựng đất nước, tiến lên chủ nghĩa xã hội... nạn tham nhũng đã làm suy giảm lòng tin của dân với Đảng, với Nhà nước... nguy cơ về sự tồn vong của chế độ là có thể thấy được\".\n- Phương án A đúng.\n- Phương án B và C sai vì đây là biểu hiện của tác hại về mặt kinh tế (tr. 277).\n- Phương án D sai vì đây là vấn đề quản trị nguồn nhân lực lao động, không phải tác hại trực tiếp về chính trị của tham nhũng.",
    "difficulty": "easy",
    "tags": [
      "Tác hại tham nhũng",
      "Tác hại chính trị",
      "Lòng tin của nhân dân"
    ],
    "keyTerm": "Tác hại chính trị của tham nhũng",
    "sourcePage": 276,
    "statuteRef": "Giáo trình tr. 276-277",
    "type": "single",
    "correctOption": 0,
    "correctOptions": [
      0
    ]
  },
  {
    "id": "q-ch7-012",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.4",
    "content": "Giáo trình Pháp luật đại cương (tr. 273-276) xác định những nguyên nhân chủ yếu nào sau đây dẫn đến tình trạng tham nhũng ở nước ta hiện nay? (Chọn các phương án đúng)",
    "questionType": "multiple",
    "options": [
      {
        "id": "A",
        "text": "Hệ thống chính sách, pháp luật còn kẽ hở, chồng chéo và thiếu cơ chế kiểm soát đồng bộ."
      },
      {
        "id": "B",
        "text": "Bộ máy quản lý hành chính còn rườm rà, thủ tục phức tạp và thiếu công khai minh bạch."
      },
      {
        "id": "C",
        "text": "Sự suy thoái về tư tưởng chính trị, phẩm chất đạo đức, lối sống của người có chức quyền."
      },
      {
        "id": "D",
        "text": "Sự tồn tại khách quan và tất yếu không thể ngăn chặn của chế độ sở hữu tư nhân về tư liệu."
      },
      {
        "id": "E",
        "text": "Thu nhập của công chức luôn cao vượt trội so với mức sống chung của các tầng lớp dân cư."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Căn cứ Giáo trình tr. 273-276, các nguyên nhân tham nhũng ở Việt Nam bao gồm:\n1. Hệ thống chính sách, pháp luật còn nhiều hạn chế, thiếu đồng bộ (A đúng - tr. 273);\n2. Hệ thống quản lý hành chính còn hạn chế, thủ tục rườm rà thiếu công khai minh bạch (B đúng - tr. 274);\n3. Sự suy thoái về phẩm chất đạo đức, lối sống của người giữ chức vụ quyền hạn (C đúng - tr. 275);\n4. Các yếu tố văn hóa, tâm lý tiểu nông, quà cáp, dĩ hòa vi quý;\n5. Các quy định về phòng chống tham nhũng chưa hiệu quả, triệt để.\n- Phương án D sai vì chế độ tư hữu làm phát sinh tham nhũng nhưng tham nhũng hoàn toàn có thể kiểm soát, đấu tranh ngăn chặn bằng pháp luật.\n- Phương án E sai vì thực tế tiền lương, chế độ đãi ngộ đối với công chức còn thấp cũng là nguyên nhân làm nảy sinh tâm lý vụ lợi (tr. 275).",
    "difficulty": "medium",
    "tags": [
      "Nguyên nhân tham nhũng",
      "Kẽ hở pháp luật",
      "Suy thoái đạo đức"
    ],
    "keyTerm": "Nguyên nhân dẫn đến tham nhũng",
    "sourcePage": 273,
    "statuteRef": "Giáo trình tr. 273-276",
    "type": "multiple",
    "correctOption": 0,
    "correctOptions": [
      0,
      1,
      2
    ]
  },
  {
    "id": "q-ch7-013",
    "chapterId": 7,
    "sectionId": "sec-ch7-01",
    "articleId": "ch7-s7.1.4",
    "content": "Trong tác phẩm Hồ Chí Minh toàn tập được trích dẫn tại Giáo trình Pháp luật đại cương (tr. 276), Chủ tịch Hồ Chí Minh đã chỉ rõ bản chất nguy hiểm của nạn tham ô, lãng phí và bệnh quan liêu là gì?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Là hành vi vi phạm trật tự công cộng gây rối loạn an ninh trật tự và phá vỡ tình làng nghĩa xóm."
      },
      {
        "id": "B",
        "text": "Là kẻ thù khá nguy hiểm, vì nó không mang gươm súng và nằm ngay trong các tổ chức để phá hoại ta."
      },
      {
        "id": "C",
        "text": "Là căn bệnh phát sinh thuần túy từ chế độ phong kiến lạc hậu và sẽ tự biến mất trong thời kỳ mới."
      },
      {
        "id": "D",
        "text": "Là hiện tượng kinh tế khách quan không thể tránh khỏi trong mọi giai đoạn tái thiết quốc gia."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Căn cứ Giáo trình tr. 276: Trích dẫn tác phẩm Hồ Chí Minh toàn tập: \"Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, bộ đội và Chính phủ. Nó là kẻ thù khá nguy hiểm, vì nó không mang gươm, mang súng và nằm trong các tổ chức của ta để làm hỏng công việc của ta, làm hỏng tinh thần trong sạch và ý chí vượt khó của cán bộ ta;... nó phá hoại đạo đức Cách mạng cần kiệm liêm chính\".\n- Phương án B đúng vì phản ánh chính xác luận điểm của Chủ tịch Hồ Chí Minh.\n- Phương án A sai vì Người xác định đây là \"kẻ thù nguy hiểm\" của cách mạng và nhân dân, không thuần túy là vi phạm an ninh trật tự công cộng.\n- Phương án C sai vì Người nhấn mạnh đây là tệ nạn nằm ngay trong bộ máy, cần kiên quyết tiêu trừ chứ không thể tự biến mất.\n- Phương án D sai vì Người khẳng định tham ô là hành động tội lỗi xấu xa nhất, tuyệt đối không phải hiện tượng bình thường không thể tránh khỏi.",
    "difficulty": "hard",
    "tags": [
      "Tư tưởng Hồ Chí Minh",
      "Kẻ thù không mang gươm súng",
      "Tác hại tham nhũng"
    ],
    "keyTerm": "Luận điểm Hồ Chí Minh về tham ô",
    "sourcePage": 276,
    "statuteRef": "Hồ Chí Minh toàn tập, tập 6, tr. 489",
    "type": "single",
    "correctOption": 1,
    "correctOptions": [
      1
    ]
  },
  {
    "id": "q-ch7-014",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.1",
    "content": "Theo Giáo trình Pháp luật đại cương (HCMUTE 2023), Việt Nam chính thức phê chuẩn Công ước của Liên hợp quốc về chống tham nhũng (UNCAC) vào năm nào?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Phê chuẩn vào năm 2003 ngay khi Công ước được Đại hội đồng Liên hợp quốc thông qua."
      },
      {
        "id": "B",
        "text": "Phê chuẩn vào năm 2005 cùng thời điểm Quốc hội thông qua Luật PCTN đầu tiên."
      },
      {
        "id": "C",
        "text": "Phê chuẩn vào năm 2009 sau khi hoàn tất rà soát đồng bộ hệ thống luật trong nước."
      },
      {
        "id": "D",
        "text": "Phê chuẩn vào năm 2018 nhằm phục vụ xây dựng Luật Phòng, chống tham nhũng mới."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Căn cứ Giáo trình tr. 278: \"Công ước được thông qua ngày 31 tháng 10 năm 2003, theo Nghị quyết 58/4, và có hiệu lực ngày 14 tháng 12 năm 2005... Việt Nam ký Công ước năm 2003 và chính thức phê chuẩn vào ngày 30 tháng 06 năm 2009\".\n- Phương án C đúng.\n- Phương án A sai vì năm 2003 là năm Việt Nam ký kết, chưa phê chuẩn.\n- Phương án B sai vì năm 2005 là thời điểm Công ước có hiệu lực trên trường quốc tế và Việt Nam ban hành Luật PCTN năm 2005.\n- Phương án D sai vì năm 2018 là năm Quốc hội Việt Nam ban hành Luật PCTN mới thay thế Luật 2005.",
    "difficulty": "easy",
    "tags": [
      "UNCAC",
      "Phê chuẩn năm 2009",
      "Công ước quốc tế"
    ],
    "keyTerm": "Việt Nam phê chuẩn UNCAC",
    "sourcePage": 278,
    "statuteRef": "Giáo trình tr. 278",
    "type": "single",
    "correctOption": 2,
    "correctOptions": [
      2
    ]
  },
  {
    "id": "q-ch7-015",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.1",
    "content": "Văn bản pháp lý nào sau đây được xác định là văn kiện pháp lý đầu tiên về phòng, chống tham nhũng của nước Việt Nam Dân chủ Cộng hòa?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Pháp lệnh Phòng, chống tham nhũng năm 1998 của Ủy ban Thường vụ Quốc hội khóa X."
      },
      {
        "id": "B",
        "text": "Luật Phòng, chống tham nhũng năm 2005 được Quốc hội khóa XI ban hành và thông qua."
      },
      {
        "id": "C",
        "text": "Nghị quyết số 04-NQ/TW năm 2006 của Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam."
      },
      {
        "id": "D",
        "text": "Sắc lệnh số 223 do Chủ tịch Hồ Chí Minh ký ban hành vào ngày 27 tháng 11 năm 1946."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 278-279: \"Vào ngày 27 tháng 11 năm 1946, Chủ tịch Hồ Chí Minh đã ký ban hành Sắc lệnh số 223 quy định trừng trị các tội đưa, nhận hối lộ, phu lam và biển thủ công quỹ. Đây được xem là văn kiện chống tham nhũng đầu tiên của nước Việt Nam Dân chủ Cộng hòa\".\n- Phương án D đúng.\n- Phương án A sai vì Pháp lệnh 1998 ra đời trong thời kỳ Đổi mới, không phải văn kiện đầu tiên sau Cách mạng tháng Tám 1945.\n- Phương án B sai vì Luật 2005 là đạo luật PCTN hoàn chỉnh đầu tiên của Quốc hội, không phải văn kiện lịch sử đầu tiên.\n- Phương án C sai vì Nghị quyết 04 là nghị quyết chính trị của Ban Chấp hành Trung ương Đảng khóa X năm 2006.",
    "difficulty": "medium",
    "tags": [
      "Sắc lệnh 223",
      "Lịch sử pháp luật PCTN",
      "Hồ Chí Minh"
    ],
    "keyTerm": "Sắc lệnh số 223 năm 1946",
    "sourcePage": 278,
    "statuteRef": "Sắc lệnh số 223 ngày 27/11/1946",
    "type": "single",
    "correctOption": 3,
    "correctOptions": [
      3
    ]
  },
  {
    "id": "q-ch7-016",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.1",
    "content": "Về cơ cấu và nội dung chỉ đạo, Luật Phòng, chống tham nhũng năm 2018 có những đặc điểm pháp lý nổi bật nào sau đây? (Chọn các phương án đúng)",
    "questionType": "multiple",
    "options": [
      {
        "id": "A",
        "text": "Gồm 8 chương và 71 điều, chính thức có hiệu lực thi hành kể từ ngày 01 tháng 01 năm 2018."
      },
      {
        "id": "B",
        "text": "Gồm 10 chương với 96 điều và chính thức có hiệu lực thi hành kể từ ngày 01 tháng 07 năm 2019."
      },
      {
        "id": "C",
        "text": "Lần đầu tiên mở rộng phạm vi điều chỉnh sang phòng, chống tham nhũng khu vực ngoài nhà nước."
      },
      {
        "id": "D",
        "text": "Bổ sung chế định kiểm soát xung đột lợi ích của người có chức vụ, quyền hạn khi làm công vụ."
      },
      {
        "id": "E",
        "text": "Bãi bỏ toàn bộ quy định về kê khai tài sản, thu nhập định kỳ hàng năm của cán bộ, công chức."
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 279-281:\n- Luật PCTN 2018 gồm 10 chương, 96 điều, có hiệu lực từ ngày 01/07/2019 (B đúng);\n- Lần đầu tiên mở rộng phạm vi điều chỉnh sang khu vực ngoài nhà nước (Chương VI) (C đúng);\n- Bổ sung quy định về kiểm soát xung đột lợi ích (Điều 23) (D đúng).\n- Phương án A sai vì 8 chương 71 điều là bố cục của Công ước UNCAC (tr. 278).\n- Phương án E sai vì Luật PCTN 2018 tiếp tục duy trì và hoàn thiện cơ chế kê khai tài sản hàng năm đối với các vị trí quản lý nhạy cảm (Điều 36).",
    "difficulty": "medium",
    "tags": [
      "Luật PCTN 2018",
      "Bố cục luật",
      "Điểm mới của luật"
    ],
    "keyTerm": "Cơ cấu Luật PCTN 2018",
    "sourcePage": 279,
    "statuteRef": "Luật Phòng, chống tham nhũng 2018",
    "type": "multiple",
    "correctOption": 1,
    "correctOptions": [
      1,
      2,
      3
    ]
  },
  {
    "id": "q-ch7-017",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.2",
    "content": "Theo Khoản 2 Điều 92 Luật Phòng, chống tham nhũng năm 2018, cán bộ, công chức bị kết án về tội phạm tham nhũng bằng bản án của Tòa án đã có hiệu lực pháp luật thì phải chịu hậu quả pháp lý nào?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Đương nhiên bị buộc thôi việc kể từ ngày bản án, quyết định có hiệu lực pháp luật."
      },
      {
        "id": "B",
        "text": "Bị xử lý kỷ luật giáng chức và tạm điều chuyển sang đơn vị công tác ở vùng sâu."
      },
      {
        "id": "C",
        "text": "Được giữ nguyên ngạch công chức nhưng không được bố trí làm công tác quản lý."
      },
      {
        "id": "D",
        "text": "Bị phạt tiền gấp mười lần mức lương cơ sở hiện hưởng và phải kéo dài bậc lương."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Căn cứ Giáo trình tr. 292 và Khoản 2 Điều 92 Luật PCTN 2018: \"Người bị kết án về tội phạm tham nhũng là cán bộ, công chức, viên chức mà bản án, quyết định của Tòa án đã có hiệu lực pháp luật thì đương nhiên bị buộc thôi việc; đối với đại biểu Quốc hội, đại biểu Hội đồng nhân dân thì đương nhiên mất quyền đại biểu Quốc hội, đại biểu Hội đồng nhân dân\".\n- Phương án A đúng.\n- Các phương án B, C, D sai vì chế tài luật định đối với công chức bị kết án tù về tội tham nhũng là đương nhiên bị buộc thôi việc, không có trường hợp áp dụng giáng chức hay phạt tiền thay thế.",
    "difficulty": "easy",
    "tags": [
      "Xử lý người tham nhũng",
      "Buộc thôi việc",
      "Điều 92 Luật PCTN"
    ],
    "keyTerm": "Đương nhiên bị buộc thôi việc",
    "sourcePage": 292,
    "statuteRef": "Khoản 2 Điều 92 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 0,
    "correctOptions": [
      0
    ]
  },
  {
    "id": "q-ch7-018",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.2",
    "content": "Theo Điều 25 Luật Phòng, chống tham nhũng năm 2018 và Giáo trình Pháp luật đại cương, thời hạn định kỳ chuyển đổi vị trí công tác đối với người có chức vụ, quyền hạn được quy định là bao lâu?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Từ đủ mười hai tháng đến hai mươi bốn tháng tùy theo năng lực cán bộ."
      },
      {
        "id": "B",
        "text": "Từ đủ không hai năm đến không năm năm theo đặc thù từng ngành nghề."
      },
      {
        "id": "C",
        "text": "Từ đủ không ba năm đến không sáu năm áp dụng chung cho mọi đơn vị."
      },
      {
        "id": "D",
        "text": "Từ đủ không năm năm đến không bảy năm đối với cấp trưởng phòng trở lên."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Căn cứ Giáo trình tr. 286 và Điều 25 Luật PCTN 2018: \"Thời hạn định kỳ chuyển đổi vị trí công tác: là từ đủ 02 năm đến 05 năm theo đặc thù của từng ngành, lĩnh vực\". Biện pháp này nhằm loại bỏ sự trì trệ, móc ngoặc, khép kín tại các vị trí nhạy cảm liên quan đến tài chính công, tài sản công, cán bộ, đầu tư công.\n- Phương án B đúng.\n- Các phương án A, C, D sai vì đưa ra các mốc thời gian không chính xác với quy định luật định.",
    "difficulty": "medium",
    "tags": [
      "Chuyển đổi vị trí công tác",
      "Thời hạn định kỳ",
      "Điều 25 Luật PCTN"
    ],
    "keyTerm": "Thời hạn chuyển đổi vị trí công tác",
    "sourcePage": 286,
    "statuteRef": "Điều 25 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 1,
    "correctOptions": [
      1
    ]
  },
  {
    "id": "q-ch7-019",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.2",
    "content": "Ông Hoàng Văn P là Giám đốc Sở Y tế tỉnh K. Để thuận tiện cho công tác chỉ đạo và quản lý các nguồn kinh phí mua sắm thiết bị y tế của Sở, ông P đã ký quyết định bổ nhiệm vợ mình làm Kế toán trưởng của Sở và bố trí em trai ruột phụ trách vị trí Thủ kho cơ quan. Quyết định của ông P có vi phạm quy định của pháp luật về phòng, chống tham nhũng hay không? Vì sao?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Không vi phạm, vì ông P là người đứng đầu cơ quan nên có toàn quyền tuyển dụng, sắp xếp nhân sự cấp dưới."
      },
      {
        "id": "B",
        "text": "Không vi phạm, miễn là vợ và em trai ông P có đầy đủ bằng cấp chuyên môn đại học và chứng chỉ hợp pháp."
      },
      {
        "id": "C",
        "text": "Vi phạm, vì người đứng đầu không được bố trí vợ, em ruột giữ chức vụ quản lý kế toán, làm thủ kho ở cơ quan."
      },
      {
        "id": "D",
        "text": "Vi phạm, nhưng ông P chỉ bị nhắc nhở rút kinh nghiệm nội bộ mà không cần phải hủy bỏ các quyết định bổ nhiệm."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Căn cứ Giáo trình tr. 284 và Khoản 2 Điều 20 Luật PCTN 2018: \"Người đứng đầu, cấp phó của người đứng đầu cơ quan, tổ chức, đơn vị không được bố trí vợ hoặc chồng, bố, mẹ, con, anh, chị, em ruột của mình giữ chức vụ quản lý về tổ chức nhân sự, kế toán, làm thủ quỹ, thủ kho trong cơ quan, tổ chức, đơn vị hoặc giao dịch, mua bán hàng hóa, dịch vụ, ký kết hợp đồng cho cơ quan, tổ chức, đơn vị đó\". Quyết định của ông P vi phạm trực tiếp quy tắc ứng xử của người có chức vụ quyền hạn.\n- Phương án C đúng.\n- Phương án A và B sai vì thẩm quyền của người đứng đầu bị giới hạn bởi các điều cấm của Luật PCTN nhằm ngăn chặn nguy cơ tham nhũng khép kín trong gia đình.\n- Phương án D sai vì đây là hành vi vi phạm pháp luật bắt buộc phải xử lý kỷ luật và hủy bỏ quyết định bổ nhiệm trái luật.",
    "difficulty": "medium",
    "tags": [
      "Quy tắc ứng xử",
      "Người đứng đầu",
      "Bố trí người thân",
      "Tình huống thực tế"
    ],
    "keyTerm": "Bố trí người thân giữ chức vụ quản lý",
    "sourcePage": 284,
    "statuteRef": "Khoản 2 Điều 20 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 2,
    "correctOptions": [
      2
    ]
  },
  {
    "id": "q-ch7-020",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.2",
    "content": "Ông Trần Văn D là Trưởng phòng thuộc diện có nghĩa vụ kê khai tài sản hàng năm. Trong năm 2023, gia đình ông D bán một mảnh đất và phát sinh tổng thu nhập tăng thêm là 450 triệu đồng; đồng thời ông D mua một bộ tranh đá quý mỹ nghệ trị giá 70 triệu đồng và gửi tiết kiệm 200 triệu đồng. Theo Luật Phòng, chống tham nhũng năm 2018, nghĩa vụ kê khai tài sản của ông D đối với các tài sản trên được xác định như thế nào?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Ông D chỉ cần kê khai sổ tiết kiệm, không phải kê khai bộ tranh đá quý vì tranh ảnh là đồ mỹ nghệ thông thường."
      },
      {
        "id": "B",
        "text": "Ông D không phải kê khai khoản thu nhập 450 triệu đồng vì số tiền này phát sinh từ việc chuyển nhượng đất hợp pháp."
      },
      {
        "id": "C",
        "text": "Ông D chỉ cần đợi đến hết nhiệm kỳ bổ nhiệm chức vụ mới phải kê khai tổng số tài sản biến động trong cả nhiệm kỳ."
      },
      {
        "id": "D",
        "text": "Ông D bắt buộc phải kê khai cả bộ tranh đá quý (trên 50 triệu) và thực hiện kê khai bổ sung do biến động trên 300 triệu."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 288-289 và Điều 35, Điều 36 Luật PCTN 2018:\n1. Về tài sản kê khai: Điểm b Khoản 1 Điều 35 quy định đá quý, tiền, giấy tờ có giá và động sản khác mà mỗi tài sản có giá trị từ 50.000.000 đồng trở lên phải kê khai (bộ tranh đá quý 70 triệu đồng và sổ tiết kiệm 200 triệu đồng đều phải kê khai);\n2. Về phương thức kê khai: Điểm b Khoản 2 Điều 36 quy định kê khai bổ sung được áp dụng đối với người có nghĩa vụ kê khai có biến động về tài sản, thu nhập trong năm có giá trị từ 300.000.000 đồng trở lên (khoản thu nhập tăng 450 triệu đồng vượt ngưỡng 300 triệu nên bắt buộc phải kê khai bổ sung).\n- Phương án D đúng.\n- Phương án A sai vì tranh đá quý từ 50 triệu trở lên bắt buộc phải kê khai.\n- Phương án B sai vì mọi khoản biến động tăng từ 300 triệu trở lên trong năm đều phải kê khai bổ sung, không phân biệt nguồn gốc.\n- Phương án C sai vì kê khai bổ sung phải thực hiện trong năm có biến động, không được chờ đến hết nhiệm kỳ.",
    "difficulty": "hard",
    "tags": [
      "Kê khai tài sản",
      "Động sản từ 50 triệu",
      "Biến động từ 300 triệu",
      "Tình huống thực tế"
    ],
    "keyTerm": "Định mức kê khai tài sản thu nhập",
    "sourcePage": 288,
    "statuteRef": "Điều 35, Điều 36 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 3,
    "correctOptions": [
      3
    ]
  },
  {
    "id": "q-ch7-021",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.2",
    "content": "Ông Lê Bá T là công chức lãnh đạo đang nằm trong danh sách người ứng cử Đại biểu Hội đồng nhân dân cấp tỉnh, đồng thời được quy hoạch để bổ nhiệm làm Giám đốc Sở Xây dựng. Quá trình xác minh tài sản, cơ quan kiểm soát phát hiện ông T cố ý giấu không kê khai một căn hộ chung cư cao cấp và tài khoản 2 tỷ đồng tại ngân hàng. Theo quy định tại Điều 51 Luật Phòng, chống tham nhũng năm 2018, các biện pháp xử lý nào sẽ được áp dụng đối với ông T?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Bị xóa tên khỏi danh sách người ứng cử Hội đồng nhân dân và không được bổ nhiệm vào chức vụ Giám đốc Sở."
      },
      {
        "id": "B",
        "text": "Vẫn được tham gia ứng cử nhưng nếu trúng cử thì không được xếp vào thường trực Hội đồng nhân dân tỉnh."
      },
      {
        "id": "C",
        "text": "Chỉ bị cảnh cáo nội bộ Đảng và vẫn tiếp tục được giữ nguyên quy hoạch bổ nhiệm làm Giám đốc Sở Xây dựng."
      },
      {
        "id": "D",
        "text": "Bị tịch thu sung công quỹ toàn bộ số tiền 2 tỷ đồng cùng căn hộ chung cư mà không bị xử lý kỷ luật nào."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Căn cứ Giáo trình tr. 290 và Khoản 1, Khoản 2 Điều 51 Luật PCTN 2018:\n- Khoản 1 Điều 51: Người ứng cử đại biểu Quốc hội, người ứng cử đại biểu Hội đồng nhân dân mà kê khai tài sản, thu nhập không trung thực thì bị xóa tên khỏi danh sách những người ứng cử;\n- Khoản 2 Điều 51: Người dự kiến bầu, phê chuẩn, bổ nhiệm, bổ nhiệm lại mà kê khai tài sản không trung thực thì không được bầu, phê chuẩn, bổ nhiệm, bổ nhiệm lại vào chức vụ đã dự kiến.\nDo đó, ông T bị xóa tên khỏi danh sách ứng cử ĐBHĐND và không được bổ nhiệm làm Giám đốc Sở.\n- Phương án A đúng.\n- Phương án B sai vì người vi phạm bị xóa tên ngay khỏi danh sách người ứng cử.\n- Phương án C sai vì bắt buộc không được bổ nhiệm vào chức vụ dự kiến.\n- Phương án D sai vì chế tài đối với việc kê khai gian dối là chế tài kỷ luật và công tác cán bộ, việc xử lý tài sản áp dụng theo trình tự thu hồi riêng.",
    "difficulty": "hard",
    "tags": [
      "Xử lý kê khai không trung thực",
      "Điều 51 Luật PCTN",
      "Tình huống thực tế"
    ],
    "keyTerm": "Xử lý người kê khai tài sản không trung thực",
    "sourcePage": 290,
    "statuteRef": "Điều 51 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 0,
    "correctOptions": [
      0
    ]
  },
  {
    "id": "q-ch7-022",
    "chapterId": 7,
    "sectionId": "sec-ch7-02",
    "articleId": "ch7-s7.2.2",
    "content": "Theo Điều 62 Luật Phòng, chống tham nhũng năm 2018 và Giáo trình (tr. 291), khi phát hiện vụ việc có dấu hiệu tội phạm tham nhũng trong quá trình thanh tra, kiểm toán, người ra quyết định thanh tra, kiểm toán phải tiến hành các biện pháp nào? (Chọn các phương án đúng)",
    "questionType": "multiple",
    "options": [
      {
        "id": "A",
        "text": "Chỉ đạo lực lượng chức năng tiến hành xác minh, làm rõ bản chất vụ việc tham nhũng."
      },
      {
        "id": "B",
        "text": "Tự mình ra quyết định khởi tố vụ án hình sự và bắt tạm giam đối tượng vi phạm."
      },
      {
        "id": "C",
        "text": "Chuyển ngay hồ sơ vụ việc và kiến nghị Cơ quan điều tra xem xét, khởi tố vụ án."
      },
      {
        "id": "D",
        "text": "Thông báo bằng văn bản cho Viện kiểm sát nhân dân cùng cấp về việc chuyển hồ sơ."
      },
      {
        "id": "E",
        "text": "Đình chỉ vĩnh viễn toàn bộ cuộc thanh tra đối với các nội dung khác theo kế hoạch."
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 291 và Điều 62 Luật PCTN 2018:\n- Người ra quyết định thanh tra, kiểm toán phải chỉ đạo xác minh, làm rõ vụ việc tham nhũng (A đúng);\n- Nếu vụ việc có dấu hiệu tội phạm thì chuyển ngay hồ sơ vụ việc và kiến nghị Cơ quan điều tra xem xét, khởi tố vụ án hình sự (C đúng);\n- Đồng thời thông báo bằng văn bản cho Viện kiểm sát nhân dân cùng cấp (D đúng);\n- Tiếp tục tiến hành hoạt động thanh tra, kiểm toán về các nội dung khác theo kế hoạch đã phê duyệt.\n- Phương án B sai vì cơ quan thanh tra, kiểm toán không có quyền tự khởi tố hình sự hay bắt tạm giam.\n- Phương án E sai vì cơ quan thanh tra vẫn tiếp tục thanh tra các nội dung khác theo kế hoạch, không bị đình chỉ vĩnh viễn.",
    "difficulty": "medium",
    "tags": [
      "Phát hiện qua thanh tra kiểm toán",
      "Điều 62 Luật PCTN",
      "Chuyển hồ sơ điều tra"
    ],
    "keyTerm": "Chuyển hồ sơ vụ việc có dấu hiệu tội phạm",
    "sourcePage": 291,
    "statuteRef": "Điều 62 Luật Phòng, chống tham nhũng 2018",
    "type": "multiple",
    "correctOption": 0,
    "correctOptions": [
      0,
      2,
      3
    ]
  },
  {
    "id": "q-ch7-023",
    "chapterId": 7,
    "sectionId": "sec-ch7-03",
    "articleId": "ch7-s7.3",
    "content": "Theo Điều 75 Luật Phòng, chống tham nhũng năm 2018, cơ quan báo chí và nhà báo có quyền và trách nhiệm pháp lý nào trong công tác phòng, chống tham nhũng?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Tự ý công khai toàn bộ tài liệu hồ sơ mật trong quá trình điều tra tội phạm tham nhũng."
      },
      {
        "id": "B",
        "text": "Yêu cầu cơ quan có thẩm quyền cung cấp thông tin và đưa tin trung thực, khách quan về vụ việc."
      },
      {
        "id": "C",
        "text": "Ra quyết định phong tỏa tài sản ngân hàng của cán bộ, công chức có dấu hiệu vi phạm pháp luật."
      },
      {
        "id": "D",
        "text": "Được quyền đại diện cơ quan tư pháp tổ chức các phiên tòa lưu động xét xử tội phạm tham nhũng."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Căn cứ Giáo trình tr. 294-295 và Điều 75 Luật PCTN 2018:\n\"Cơ quan báo chí, nhà báo có trách nhiệm đấu tranh chống tham nhũng, đưa tin về hoạt động phòng, chống tham nhũng và vụ việc tham nhũng; có quyền yêu cầu cơ quan, tổ chức, đơn vị, cá nhân có thẩm quyền cung cấp thông tin liên quan đến hành vi tham nhũng; có trách nhiệm phản ánh khách quan, trung thực và chấp hành pháp luật về báo chí, quy tắc đạo đức nghề nghiệp\".\n- Phương án B đúng.\n- Phương án A sai vì báo chí phải tuân thủ nghiêm ngặt bí mật nhà nước và quy định pháp luật về tố tụng.\n- Phương án C sai vì phong tỏa tài sản là quyền năng của cơ quan tiến hành tố tụng.\n- Phương án D sai vì chỉ có Tòa án nhân dân mới có quyền xét xử.",
    "difficulty": "easy",
    "tags": [
      "Trách nhiệm báo chí",
      "Điều 75 Luật PCTN",
      "Cung cấp thông tin"
    ],
    "keyTerm": "Trách nhiệm của cơ quan báo chí",
    "sourcePage": 294,
    "statuteRef": "Điều 75 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 1,
    "correctOptions": [
      1
    ]
  },
  {
    "id": "q-ch7-024",
    "chapterId": 7,
    "sectionId": "sec-ch7-03",
    "articleId": "ch7-s7.3",
    "content": "Điểm khác biệt quan trọng về phạm vi chủ thể thực hiện quyền \"báo cáo\" so với chủ thể \"phản ánh, tố cáo\" về hành vi tham nhũng theo Luật PCTN 2018 là gì?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Báo cáo chỉ dành cho phóng viên báo chí, còn phản ánh và tố cáo chỉ dành cho công dân cư trú trên địa bàn."
      },
      {
        "id": "B",
        "text": "Báo cáo là quyền của người nước ngoài, còn phản ánh và tố cáo chỉ dành cho công dân có quốc tịch Việt Nam."
      },
      {
        "id": "C",
        "text": "Báo cáo dành cho CBCCVC, người lao động tại nơi công tác, còn phản ánh và tố cáo áp dụng cho mọi công dân."
      },
      {
        "id": "D",
        "text": "Báo cáo chỉ áp dụng cho doanh nghiệp tư nhân, còn phản ánh và tố cáo dành riêng cho cơ quan quyền lực công."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Căn cứ Giáo trình tr. 292: \"Trong Luật Phòng, chống tham nhũng 2018 đã quy định về chủ thể của phản ánh, tố cáo là mọi công dân còn chủ thể báo cáo là cán bộ, công chức, viên chức, người lao động, cán bộ, chiến sĩ trong lực lượng vũ trang khi phát hiện hành vi tham nhũng trong cơ quan, tổ chức, đơn vị nơi mình công tác\".\n- Phương án C đúng.\n- Các phương án A, B, D sai vì phân định chủ thể không đúng theo quy định pháp luật.",
    "difficulty": "medium",
    "tags": [
      "Phản ánh tố cáo báo cáo",
      "Chủ thể báo cáo",
      "Phát hiện tham nhũng"
    ],
    "keyTerm": "Phân biệt chủ thể báo cáo và phản ánh, tố cáo",
    "sourcePage": 292,
    "statuteRef": "Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 2,
    "correctOptions": [
      2
    ]
  },
  {
    "id": "q-ch7-025",
    "chapterId": 7,
    "sectionId": "sec-ch7-03",
    "articleId": "ch7-s7.3",
    "content": "Vai trò nòng cốt của Mặt trận Tổ quốc Việt Nam và các tổ chức thành viên trong công tác phòng, chống tham nhũng theo Điều 74 Luật PCTN 2018 là gì?",
    "questionType": "single",
    "options": [
      {
        "id": "A",
        "text": "Trực tiếp thụ lý đơn thư khiếu nại tố cáo và ban hành quyết định xử phạt vi phạm hành chính với cán bộ vi phạm tham nhũng."
      },
      {
        "id": "B",
        "text": "Trực tiếp thực hiện thanh tra đột xuất dự án đầu tư công và chuyển giao hồ sơ kiến nghị khởi tố sang Cơ quan điều tra."
      },
      {
        "id": "C",
        "text": "Thay mặt Viện kiểm sát nhân dân thực hành quyền công tố nhà nước trong các vụ án hình sự tham ô tài sản nghiêm trọng."
      },
      {
        "id": "D",
        "text": "Tuyên truyền, động viên Nhân dân, thực hiện phản biện xã hội, kiến nghị hoàn thiện pháp luật và giám sát việc phòng chống."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Căn cứ Giáo trình tr. 293-294 và Điều 74 Luật PCTN 2018:\nMặt trận Tổ quốc Việt Nam và các tổ chức thành viên có trách nhiệm: Tuyên truyền, vận động Nhân dân thực hiện pháp luật về PCTN; phản biện xã hội, kiến nghị hoàn thiện chính sách, pháp luật về PCTN; kiến nghị thực hiện các biện pháp phòng ngừa, phát hiện, xử lý tham nhũng; động viên Nhân dân tham gia tích cực; cung cấp thông tin và giám sát việc thực hiện pháp luật về PCTN.\n- Phương án D đúng.\n- Phương án A sai vì MTTQ không phải cơ quan xử phạt hành chính.\n- Phương án B sai vì thanh tra thuộc thẩm quyền của cơ quan thanh tra nhà nước.\n- Phương án C sai vì quyền công tố thuộc quyền riêng của Viện kiểm sát nhân dân theo Hiến pháp 2013.",
    "difficulty": "hard",
    "tags": [
      "Mặt trận Tổ quốc",
      "Điều 74 Luật PCTN",
      "Giám sát và phản biện xã hội"
    ],
    "keyTerm": "Trách nhiệm của Mặt trận Tổ quốc",
    "sourcePage": 293,
    "statuteRef": "Điều 74 Luật Phòng, chống tham nhũng 2018",
    "type": "single",
    "correctOption": 3,
    "correctOptions": [
      3
    ]
  }
];

export const chapter7Flashcards: Flashcard[] = [
  {
    "id": "fc-ch7-001",
    "chapterId": 7,
    "articleId": "ch7-s7.1.1",
    "term": "Khái niệm tham nhũng và phạm vi chủ thể theo Luật PCTN 2018",
    "definition": "Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi. Luật PCTN 2018 đã mở rộng phạm vi chủ thể bao gồm cả người có chức vụ, quyền hạn trong khu vực nhà nước và khu vực ngoài nhà nước (doanh nghiệp, tổ chức xã hội ngoài nhà nước). (Giáo trình tr. 263-264)",
    "keyPoints": [
      "Định nghĩa chuẩn mực: Người có chức vụ quyền hạn + Lợi dụng chức vụ quyền hạn + Vì vụ lợi (Điều 3)",
      "Phạm vi chủ thể mở rộng: Bao gồm cả khu vực ngoài nhà nước (tư nhân)",
      "Không chỉ xâm phạm tài sản công mà còn xâm phạm hoạt động đúng đắn của doanh nghiệp ngoài nhà nước"
    ],
    "lawCitation": "Khoản 1 Điều 3 Luật Phòng, chống tham nhũng 2018",
    "bookPage": 263,
    "examTip": "Bẫy trắc nghiệm hay hỏi: Tham nhũng có xảy ra ở công ty tư nhân không? -> Có, theo Luật PCTN 2018.",
    "tags": [
      "Khái niệm tham nhũng",
      "Chủ thể tham nhũng",
      "Khu vực ngoài nhà nước"
    ]
  },
  {
    "id": "fc-ch7-002",
    "chapterId": 7,
    "articleId": "ch7-s7.1.1",
    "term": "Ba đặc điểm bắt buộc cấu thành hành vi tham nhũng",
    "definition": "Gồm 3 đặc điểm: 1) Về chủ thể: Phải là người có chức vụ, quyền hạn; 2) Về hành vi: Lợi dụng chức vụ, quyền hạn làm phương tiện thực hiện hành vi trái pháp luật; 3) Về động cơ, mục đích: Vì vụ lợi (mưu cầu lợi ích vật chất hoặc lợi ích tinh thần). (Giáo trình tr. 264-265)",
    "keyPoints": [
      "Chủ thể: Có chức vụ quyền hạn do bầu cử, bổ nhiệm, tuyển dụng, hợp đồng...",
      "Hành vi: Chức vụ quyền hạn là công cụ, phương tiện bắt buộc để thực hiện hành vi trái pháp luật",
      "Động cơ: Vì vụ lợi - bao gồm cả lợi ích vật chất và lợi ích tinh thần (phi vật chất)"
    ],
    "lawCitation": "Điều 3 Luật Phòng, chống tham nhũng 2018",
    "bookPage": 264,
    "examTip": "Nếu cán bộ phạm tội mà không sử dụng chức vụ làm phương tiện (ví dụ: trộm cắp xe máy ngoài giờ) thì KHÔNG phải tham nhũng.",
    "tags": [
      "Đặc điểm tham nhũng",
      "Lợi dụng chức vụ",
      "Động cơ vụ lợi"
    ]
  },
  {
    "id": "fc-ch7-003",
    "chapterId": 7,
    "articleId": "ch7-s7.1.2",
    "term": "Phân loại tham nhũng theo Công ước Liên hợp quốc (UNCAC)",
    "definition": "Căn cứ vào mức độ và hậu quả, tham nhũng được chia thành: Tham nhũng lớn (Grand corruption) xâm nhập đến cấp bậc cao nhất của chính phủ, làm xói mòn nhà nước pháp quyền; và Tham nhũng nhỏ (Petty corruption) gắn liền với việc đổi chác số tiền nhỏ, nhũng nhiễu trong các giao dịch hàng ngày của công chức thừa hành. (Giáo trình tr. 265-266)",
    "keyPoints": [
      "Tham nhũng lớn (Grand corruption): Cán bộ cấp cao, chính sách vĩ mô, dự án lớn, đe dọa thể chế",
      "Tham nhũng nhỏ / tham nhũng vặt (Petty corruption): Thủ tục hành chính thường ngày, vòi vĩnh lót tay",
      "Phân loại theo lĩnh vực: Tham nhũng chính trị, tham nhũng hành chính và tham nhũng kinh tế"
    ],
    "lawCitation": "Công ước Liên hợp quốc về chống tham nhũng 2003 (UNCAC)",
    "bookPage": 265,
    "examTip": "Phân biệt \"tham nhũng chính trị\" (chạy chức, can thiệp chính sách) và \"tham nhũng hành chính\" (hạch sách thủ tục công).",
    "tags": [
      "Phân loại tham nhũng",
      "Tham nhũng lớn",
      "Tham nhũng vặt",
      "UNCAC"
    ]
  },
  {
    "id": "fc-ch7-004",
    "chapterId": 7,
    "articleId": "ch7-s7.1.3",
    "term": "Số lượng hành vi tham nhũng khu vực công và khu vực tư",
    "definition": "Luật PCTN 2018 quy định: Khu vực nhà nước gồm 12 hành vi tham nhũng (tham ô, nhận hối lộ, lạm dụng chức vụ, lạm quyền, nhũng nhiễu, bao che...); Khu vực ngoài nhà nước chỉ gồm 03 hành vi: (1) Tham ô tài sản, (2) Nhận hối lộ, (3) Đưa hối lộ, môi giới hối lộ để giải quyết công việc vì vụ lợi. (Giáo trình tr. 266-269)",
    "keyPoints": [
      "Khu vực nhà nước: 12 hành vi luật định (Khoản 1 Điều 2 Luật PCTN)",
      "Khu vực ngoài nhà nước: 03 hành vi luật định (Khoản 2 Điều 2 Luật PCTN)",
      "Hành vi đưa/môi giới hối lộ ở tư nhân chỉ coi là tham nhũng khi nhằm giải quyết công việc của doanh nghiệp mình"
    ],
    "lawCitation": "Điều 2 Luật Phòng, chống tham nhũng 2018",
    "bookPage": 266,
    "examTip": "Cực kỳ dễ ra thi trắc nghiệm số lượng: 12 hành vi công vs 3 hành vi tư.",
    "tags": [
      "Hành vi tham nhũng",
      "Khu vực nhà nước",
      "Khu vực ngoài nhà nước"
    ]
  },
  {
    "id": "fc-ch7-005",
    "chapterId": 7,
    "articleId": "ch7-s7.1.3",
    "term": "7 Tội phạm về tham nhũng theo Bộ luật Hình sự 2015",
    "definition": "Gồm 7 tội danh quy định tại Mục 1 Chương XXIII BLHS 2015: 1) Tham ô tài sản (Đ353); 2) Nhận hối lộ (Đ354); 3) Lạm dụng chức vụ chiếm đoạt tài sản (Đ355); 4) Lợi dụng chức vụ trong khi thi hành công vụ (Đ356); 5) Lạm quyền khi thi hành công vụ (Đ357); 6) Lợi dụng chức vụ gây ảnh hưởng để trục lợi (Đ358); 7) Giả mạo trong công tác (Đ359). (Giáo trình tr. 269)",
    "keyPoints": [
      "Tội tham ô (Đ353): Chiếm đoạt tài sản mà mình có trách nhiệm trực tiếp quản lý",
      "Tội nhận hối lộ (Đ354): Nhận tiền, tài sản từ 2 triệu đồng hoặc lợi ích phi vật chất",
      "Tội lạm dụng chức vụ chiếm đoạt (Đ355): Không có trách nhiệm quản lý nhưng dùng uy tín để chiếm đoạt",
      "Tội lợi dụng chức vụ (Đ356) & Lạm quyền (Đ357): Thiệt hại tài sản từ 10 triệu đồng trở lên, không có chiếm đoạt"
    ],
    "lawCitation": "Mục 1 Chương XXIII (Điều 353 - 359) Bộ luật Hình sự 2015",
    "bookPage": 269,
    "examTip": "Nhớ 2 mốc tiền cơ bản: 2 triệu đồng (Tội chiếm đoạt / hối lộ) và 10 triệu đồng thiệt hại (Tội lợi dụng / lạm quyền thi hành công vụ).",
    "tags": [
      "7 tội phạm tham nhũng",
      "Bộ luật Hình sự 2015",
      "Tội tham ô",
      "Tội nhận hối lộ"
    ]
  },
  {
    "id": "fc-ch7-006",
    "chapterId": 7,
    "articleId": "ch7-s7.1.3",
    "term": "Phân biệt Tội lợi dụng chức vụ (Đ356) và Tội lạm quyền (Đ357)",
    "definition": "Cả hai tội đều vì vụ lợi làm trái công vụ gây thiệt hại tài sản từ 10 triệu đồng trở lên và KHÔNG có hành vi chiếm đoạt. Khác biệt cốt lõi: Điều 356 thực hiện hành vi trong phạm vi thẩm quyền được giao nhưng làm trái/làm sai; còn Điều 357 thực hiện hành vi vượt quá giới hạn thẩm quyền được giao (lạm quyền). (Giáo trình tr. 271-272)",
    "keyPoints": [
      "Điểm chung: Cùng khung thiệt hại từ 10 triệu đồng trở lên, không chiếm đoạt tài sản",
      "Điều 356: Có thẩm quyền nhưng làm trái công vụ được giao",
      "Điều 357: Vượt quá quyền hạn được giao (không có thẩm quyền mà vẫn làm)"
    ],
    "lawCitation": "Điều 356, 357 Bộ luật Hình sự 2015",
    "bookPage": 271,
    "examTip": "Nhận diện tình huống: Đội trưởng tự ý ra quyết định tịch thu (vốn là thẩm quyền Cục trưởng) -> Lạm quyền (Đ357).",
    "tags": [
      "Điều 356",
      "Điều 357",
      "Lợi dụng chức vụ",
      "Lạm quyền thi hành công vụ"
    ]
  },
  {
    "id": "fc-ch7-007",
    "chapterId": 7,
    "articleId": "ch7-s7.1.4",
    "term": "Ba nhóm tác hại cơ bản của tệ nạn tham nhũng",
    "definition": "Gồm: 1) Tác hại chính trị: Xói mòn lòng tin của nhân dân với Đảng và Nhà nước, đe dọa sự tồn vong của chế độ; 2) Tác hại kinh tế: Thất thoát nguồn lực tài sản công, bóp méo thị trường, giảm sức cạnh tranh quốc gia; 3) Tác hại xã hội: Đảo lộn giá trị đạo đức, gia tăng khoảng cách giàu nghèo, tha hóa đạo đức công vụ. (Giáo trình tr. 276-277)",
    "keyPoints": [
      "Chính trị: Nguy hại nhất, đe dọa trực tiếp sự tồn vong của Đảng và chế độ XHCN",
      "Kinh tế: Thất thoát ngân sách, \"rút ruột\" công trình, cản trở tăng trưởng kinh tế",
      "Xã hội: Làm lệch chuẩn đạo đức, tha hóa lối sống giới trẻ, xâm hại văn hóa truyền thống"
    ],
    "lawCitation": "Chiến lược Quốc gia phòng, chống tham nhũng đến năm 2020 (NQ 21/NQ-CP)",
    "bookPage": 276,
    "examTip": "Bác Hồ dạy: \"Tham ô, lãng phí, quan liêu là kẻ thù nguy hiểm vì không mang gươm súng mà nằm ngay trong tổ chức của ta\".",
    "tags": [
      "Tác hại tham nhũng",
      "Tác hại chính trị",
      "Tác hại kinh tế",
      "Tác hại xã hội"
    ]
  },
  {
    "id": "fc-ch7-008",
    "chapterId": 7,
    "articleId": "ch7-s7.2.1",
    "term": "Công ước Liên hợp quốc về chống tham nhũng (UNCAC)",
    "definition": "Được Đại hội đồng LHQ thông qua ngày 31/10/2003, có hiệu lực từ ngày 14/12/2005, gồm 8 chương 71 điều chỉnh 5 lĩnh vực chính: Phòng ngừa; Hình sự hóa và thực thi pháp luật; Hợp tác quốc tế; Thu hồi tài sản; Hỗ trợ kỹ thuật và trao đổi thông tin. Việt Nam chính thức phê chuẩn ngày 30/06/2009. (Giáo trình tr. 277-278)",
    "keyPoints": [
      "Thông qua: 31/10/2003 | Hiệu lực quốc tế: 14/12/2005",
      "Việt Nam phê chuẩn: 30/06/2009",
      "Bố cục: 8 chương 71 điều, điều chỉnh 5 trụ cột chống tham nhũng toàn cầu"
    ],
    "lawCitation": "Nghị quyết 58/4 Đại hội đồng Liên hợp quốc (UNCAC)",
    "bookPage": 277,
    "examTip": "Tránh nhầm lẫn các mốc năm: 2003 (thông qua), 2005 (hiệu lực quốc tế), 2009 (Việt Nam phê chuẩn).",
    "tags": [
      "Công ước UNCAC",
      "Hợp tác quốc tế",
      "Phê chuẩn năm 2009"
    ]
  },
  {
    "id": "fc-ch7-009",
    "chapterId": 7,
    "articleId": "ch7-s7.2.1",
    "term": "Tiến trình lập pháp phòng, chống tham nhũng tại Việt Nam",
    "definition": "Khởi đầu từ Sắc lệnh số 223 ngày 27/11/1946 của Chủ tịch Hồ Chí Minh (văn kiện PCTN đầu tiên); phát triển qua Pháp lệnh PCTN 1998, Luật PCTN 2005; và hiện hành là Luật Phòng, chống tham nhũng năm 2018 (gồm 10 chương, 96 điều, có hiệu lực thi hành từ ngày 01/07/2019). (Giáo trình tr. 278-281)",
    "keyPoints": [
      "27/11/1946: Sắc lệnh 223 xử phạt hối lộ, phu lam, biển thủ công quỹ (văn kiện đầu tiên)",
      "26/02/1998: Pháp lệnh PCTN (5 chương 38 điều)",
      "29/11/2005: Luật PCTN đầu tiên",
      "20/11/2018: Luật PCTN hiện hành (10 chương 96 điều, hiệu lực từ 01/07/2019)"
    ],
    "lawCitation": "Sắc lệnh 223/1946; Luật PCTN số 36/2018/QH14",
    "bookPage": 278,
    "examTip": "Nhớ mốc ngày hiệu lực của Luật PCTN 2018: Ngày 01 tháng 07 năm 2019.",
    "tags": [
      "Sắc lệnh 223",
      "Luật PCTN 2018",
      "Lịch sử lập pháp PCTN"
    ]
  },
  {
    "id": "fc-ch7-010",
    "chapterId": 7,
    "articleId": "ch7-s7.2.2",
    "term": "8 Giải pháp phòng ngừa tham nhũng theo Luật PCTN 2018",
    "definition": "Gồm: 1) Công khai minh bạch; 2) Định mức, tiêu chuẩn, chế độ; 3) Quy tắc ứng xử của công chức; 4) Quy định tặng quà và nhận quà tặng; 5) Kiểm soát xung đột lợi ích; 6) Định kỳ chuyển đổi vị trí công tác (2 - 5 năm); 7) Cải cách hành chính, ứng dụng KHCN, thanh toán không dùng tiền mặt; 8) Kiểm soát tài sản, thu nhập. (Giáo trình tr. 281-290)",
    "keyPoints": [
      "Công khai minh bạch: Biện pháp tiên quyết hàng đầu trong quản lý nhà nước",
      "Thời hạn chuyển đổi vị trí: Từ đủ 02 năm đến 05 năm",
      "Không dùng tiền mặt: Minh bạch hóa dòng tiền, hạn chế giao dịch ngầm",
      "Quy tắc tặng quà: Nghiêm cấm nhận quà dưới mọi hình thức liên quan công vụ"
    ],
    "lawCitation": "Chương II (Điều 9 - 54) Luật Phòng, chống tham nhũng 2018",
    "bookPage": 281,
    "examTip": "8 giải pháp phòng ngừa là bộ khung trụ cột của Chương II Luật PCTN, phải thuộc để giải quyết tình huống.",
    "tags": [
      "8 giải pháp phòng ngừa",
      "Công khai minh bạch",
      "Chuyển đổi vị trí công tác",
      "Xung đột lợi ích"
    ]
  },
  {
    "id": "fc-ch7-011",
    "chapterId": 7,
    "articleId": "ch7-s7.2.2",
    "term": "Quy chế kê khai tài sản và chế tài kê khai không trung thực",
    "definition": "Tài sản động sản (kim khí quý, đá quý, tiền, sổ tiết kiệm) từ 50 triệu đồng trở lên phải kê khai; biến động tăng từ 300 triệu đồng trở lên trong năm phải kê khai bổ sung. Kê khai không trung thực: Người ứng cử ĐBQH/HĐND bị xóa tên khỏi danh sách ứng cử; người dự kiến bầu/bổ nhiệm không được bầu/bổ nhiệm; công chức bị kỷ luật từ cảnh cáo trở lên. (Giáo trình tr. 288-290)",
    "keyPoints": [
      "Ngưỡng động sản kê khai: Từ 50.000.000 đồng trở lên (Điều 35)",
      "Ngưỡng kê khai bổ sung: Biến động tăng từ 300.000.000 đồng/năm trở lên (Điều 36)",
      "Ứng cử viên ĐBQH/HĐND gian dối: Xóa tên khỏi danh sách ứng cử (Điều 51)",
      "Quy hoạch, bổ nhiệm gian dối: Không được bầu, bổ nhiệm, bổ nhiệm lại"
    ],
    "lawCitation": "Điều 35, 36, 51 Luật PCTN 2018; Nghị định 130/2020/NĐ-CP",
    "bookPage": 288,
    "examTip": "Nhớ kỹ 2 con số vàng: 50 triệu (mức kê khai từng động sản) và 300 triệu (mức biến động phải kê khai bổ sung).",
    "tags": [
      "Kê khai tài sản",
      "50 triệu đồng",
      "300 triệu đồng",
      "Kê khai không trung thực"
    ]
  },
  {
    "id": "fc-ch7-012",
    "chapterId": 7,
    "articleId": "ch7-s7.3",
    "term": "Bốn thiết chế xã hội tham gia phòng, chống tham nhũng",
    "definition": "Luật PCTN 2018 quy định trách nhiệm của 4 thiết chế: 1) Mặt trận Tổ quốc và các tổ chức thành viên (giám sát, phản biện xã hội); 2) Cơ quan báo chí, nhà báo (đưa tin khách quan, có quyền yêu cầu cung cấp tin); 3) Doanh nghiệp, hiệp hội doanh nghiệp (xây dựng văn hóa kinh doanh liêm chính); 4) Công dân, Ban thanh tra nhân dân (phản ánh, tố cáo, giám sát cộng đồng). (Giáo trình tr. 293-295)",
    "keyPoints": [
      "MTTQ Việt Nam (Điều 74): Vận động nhân dân, phản biện xã hội, kiến nghị pháp luật",
      "Báo chí (Điều 75): Đấu tranh chống tiêu cực, phản ánh trung thực, được quyền yêu cầu cung cấp thông tin",
      "Doanh nghiệp (Điều 76): Văn hóa liêm chính, không đưa hối lộ giải quyết việc",
      "Công dân (Điều 77): Giám sát qua Ban thanh tra nhân dân, Ban giám sát đầu tư cộng đồng"
    ],
    "lawCitation": "Chương V (Điều 74 - 77) Luật Phòng, chống tham nhũng 2018",
    "bookPage": 293,
    "examTip": "Báo chí có quyền yêu cầu cơ quan có thẩm quyền cung cấp thông tin liên quan đến vụ việc tham nhũng.",
    "tags": [
      "Trách nhiệm xã hội",
      "Mặt trận Tổ quốc",
      "Cơ quan báo chí",
      "Thanh tra nhân dân"
    ]
  }
];
