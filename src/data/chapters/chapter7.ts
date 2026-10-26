/**
 * src/data/chapters/chapter7.ts
 * Số hóa toàn diện nội dung Chương 7 Giáo trình Pháp luật đại cương (HCMUTE 2023)
 * PHÁP LUẬT PHÒNG, CHỐNG THAM NHŨNG
 */

import { Chapter } from '../../types';

export const chapter7: Chapter = {
  id: 7,
  code: 'ch7',
  title: 'Chương 7: Pháp luật phòng, chống tham nhũng',
  shortTitle: 'Luật PCTN',
  description:
    'Nghiên cứu khái niệm, 3 đặc điểm của tham nhũng theo Luật PCTN 2018; nhận diện 12 hành vi khu vực công và 3 hành vi khu vực tư; cấu thành 7 tội phạm tham nhũng trong BLHS (tham ô từ 2 triệu, thiệt hại công vụ từ 10 triệu); 8 biện pháp phòng ngừa tham nhũng, định kỳ chuyển đổi vị trí công tác (2 - 5 năm); kiểm soát tài sản thu nhập (kê khai động sản >= 50 triệu, biến động >= 300 triệu, chế tài xử lý gian dối) và xử lý kỷ luật đương nhiên buộc thôi việc cán bộ phạm tội tham nhũng.',
  pageRange: {
    start: 263,
    end: 296,
  },
  coreConcepts: [
    'Khái niệm & 3 đặc điểm tham nhũng',
    'Chủ thể tham nhũng khu vực công & tư',
    '12 hành vi tham nhũng khu vực nhà nước',
    '3 hành vi tham nhũng ngoài nhà nước',
    '7 tội phạm tham nhũng trong BLHS',
    'Ngưỡng tham ô 2 triệu & thiệt hại công vụ 10 triệu',
    'Định kỳ chuyển đổi vị trí công tác (2 - 5 năm)',
    'Kiểm soát tài sản thu nhập & Kê khai >= 50M',
    'Biến động tài sản kê khai bổ sung >= 300M',
    'Xử lý kỷ luật đương nhiên buộc thôi việc',
  ],
  totalArticles: 6,
  sections: [
    {
      id: 'sec-ch7-01',
      chapterId: 7,
      order: 1,
      title: 'I. Khái quát về tham nhũng & Các hành vi tham nhũng',
      description: 'Bản chất, 3 đặc điểm của tham nhũng, mở rộng phạm vi sang khu vực tư và phân loại 12 hành vi công, 3 hành vi tư và 7 tội phạm tham nhũng.',
      articles: [
        {
          id: 'ch7-s7.1.1',
          code: '7.1.1',
          title: 'Khái niệm, 3 đặc điểm và chủ thể của tham nhũng (Mở rộng khu vực tư nhân)',
          content: [
            'Căn cứ Khoản 1 Điều 3 Luật Phòng, chống tham nhũng năm 2018 (có hiệu lực từ ngày 01/07/2019): Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.',
            'Ba (03) đặc điểm cơ bản cấu thành hành vi tham nhũng:',
            '1. Chủ thể: Phải là NGƯỜI CÓ CHỨC VỤ, QUYỀN HẠN (do bổ nhiệm, bầu cử, tuyển dụng, hợp đồng hoặc được giao thực hiện nhiệm vụ công vụ có quyền hạn nhất định).',
            '2. Hành vi khách quan: Người đó LỢI DỤNG CHỨC VỤ, QUYỀN HẠN của mình (sử dụng chức vụ quyền hạn như phương tiện để thực hiện hành vi trái pháp luật).',
            '3. Động cơ mục đích: VÌ VỤ LỢI (vụ lợi vật chất như tiền, tài sản; hoặc vụ lợi phi vật chất như danh vọng, vị trí, tình cảm, sự ưu ái).',
            'Điểm mới mang tính lịch sử của Luật PCTN 2018: Mở rộng phạm vi điều chỉnh sang KHU VỰC NGOÀI NHÀ NƯỚC (doanh nghiệp, tổ chức xã hội, công ty cổ phần), không còn bó hẹp trong bộ máy nhà nước như Luật năm 2005.',
          ],
          keyPoints: [
            'Khái niệm: Người có chức vụ, quyền hạn lợi dụng chức vụ, quyền hạn đó vì vụ lợi (Điều 3)',
            '3 đặc điểm: Có chức vụ quyền hạn + Lợi dụng chức vụ quyền hạn + Động cơ vụ lợi (vật chất hoặc phi vật chất)',
            'Đột phá Luật 2018: Mở rộng sang khu vực ngoài nhà nước (doanh nghiệp tư nhân, công ty CP)',
            'Hiệu lực: Luật PCTN 2018 chính thức có hiệu lực từ ngày 01/07/2019',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 263,
            pageEnd: 266,
            exactPages: [263, 264, 265, 266],
          },
          lawCitations: [
            {
              lawName: 'Luật Phòng, chống tham nhũng năm 2018',
              article: 'Điều 2, 3',
              contentSnippet: 'Giải thích khái niệm tham nhũng, người có chức vụ quyền hạn và các hành vi tham nhũng.',
            },
          ],
          keywords: ['Tham nhũng', 'Luật PCTN 2018', '3 đặc điểm', 'Người có chức vụ quyền hạn', 'Vụ lợi', 'Khu vực ngoài nhà nước'],
        },
        {
          id: 'ch7-s7.1.2',
          code: '7.1.2',
          title: 'Mười hai hành vi tham nhũng khu vực công và Ba hành vi tham nhũng khu vực tư',
          content: [
            'Căn cứ Điều 2 Luật Phòng, chống tham nhũng năm 2018, các hành vi tham nhũng được phân định thành 2 nhóm lớn:',
            'A. MƯỜI HAI (12) HÀNH VI THAM NHŨNG TRONG KHU VỰC NHÀ NƯỚC (Khoản 1 Điều 2):',
            '1. Tham ô tài sản; 2. Nhận hối lộ; 3. Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản; 4. Lợi dụng chức vụ, quyền hạn trong khi thi hành nhiệm vụ, công vụ vì vụ lợi;',
            '5. Lạm quyền trong khi thi hành nhiệm vụ, công vụ vì vụ lợi; 6. Lợi dụng chức vụ, quyền hạn gây ảnh hưởng đối với người khác để trục lợi; 7. Giả mạo trong công tác vì vụ lợi;',
            '8. Đưa hối lộ, môi giới hối lộ để giải quyết công việc vì vụ lợi; 9. Lợi dụng chức vụ, quyền hạn sử dụng trái phép tài sản công vì vụ lợi; 10. Nhũng nhiễu vì vụ lợi; 11. Không thực hiện, thực hiện không đúng hoặc không đầy đủ nhiệm vụ, công vụ vì vụ lợi; 12. Lợi dụng chức vụ, quyền hạn để bao che cho người có hành vi vi phạm pháp luật vì vụ lợi; cản trở, can thiệp trái pháp luật vào việc giám sát, kiểm tra, thanh tra, kiểm toán, điều tra.',
            'B. BA (03) HÀNH VI THAM NHŨNG TRONG KHU VỰC NGOÀI NHÀ NƯỚC (Khoản 2 Điều 2):',
            '1. Tham ô tài sản;',
            '2. Nhận hối lộ;',
            '3. Đưa hối lộ, môi giới hối lộ để giải quyết công việc của doanh nghiệp, tổ chức mình vì vụ lợi.',
          ],
          keyPoints: [
            'Khu vực nhà nước: Có đúng 12 hành vi tham nhũng luật định',
            'Khu vực ngoài nhà nước: Có đúng 03 hành vi tham nhũng (Tham ô, Nhận hối lộ, Đưa/môi giới hối lộ vì việc doanh nghiệp)',
            'Nhũng nhiễu: Hành vi cửa quyền, hách dịch, gây khó khăn, phiền hà khi thực hiện công vụ nhằm vòi vĩnh',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 266,
            pageEnd: 269,
            exactPages: [266, 267, 268, 269],
          },
          lawCitations: [
            {
              lawName: 'Luật Phòng, chống tham nhũng năm 2018',
              article: 'Điều 2',
              contentSnippet: 'Quy định chi tiết 12 hành vi tham nhũng khu vực công và 3 hành vi tham nhũng khu vực tư.',
            },
          ],
          keywords: ['12 hành vi tham nhũng', '3 hành vi ngoài nhà nước', 'Tham ô tài sản', 'Nhận hối lộ', 'Nhũng nhiễu'],
        },
        {
          id: 'ch7-s7.1.3',
          code: '7.1.3',
          title: 'Bảy tội phạm tham nhũng trong Bộ luật Hình sự (Định lượng tham ô 2 triệu, thiệt hại công vụ 10 triệu)',
          content: [
            'Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung 2017) quy định 07 tội phạm về tham nhũng tại Mục 1 Chương XXIII (Điều 353 đến Điều 359):',
            '1. Tội tham ô tài sản (Điều 353): Lợi dụng chức vụ, quyền hạn chiếm đoạt tài sản MÌNH CÓ TRÁCH NHIỆM QUẢN LÝ trị giá từ 2.000.000 đồng trở lên (hoặc dưới 2 triệu nhưng đã bị kỷ luật hoặc có tiền án về tội tham nhũng). Áp dụng cho cả khu vực tư nhân (Khoản 6).',
            '2. Tội nhận hối lộ (Điều 354): Lợi dụng chức vụ trực tiếp hoặc qua trung gian nhận hoặc sẽ nhận bất kỳ lợi ích nào (tiền/tài sản từ 2 triệu đồng trở lên hoặc lợi ích phi vật chất) để làm hoặc không làm việc vì lợi ích người đưa. Áp dụng cho cả khu vực tư nhân (Khoản 6).',
            '3. Tội lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản (Điều 355): Chiếm đoạt tài sản từ 2 triệu đồng trở lên của tài sản MÌNH KHÔNG CÓ TRÁCH NHIỆM QUẢN LÝ.',
            '4. Tội lợi dụng chức vụ, quyền hạn trong khi thi hành công vụ (Điều 356): Làm trái công vụ vì vụ lợi gây thiệt hại tài sản TỪ 10.000.000 ĐỒNG TRỞ LÊN (hoặc thiệt hại phi vật chất nghiêm trọng).',
            '5. Tội lạm quyền trong khi thi hành công vụ (Điều 357): Vì vụ lợi mà VƯỢT QUÁ QUYỀN HẠN ĐƯỢC GIAO gây thiệt hại tài sản từ 10.000.000 đồng trở lên.',
            '6. Tội lợi dụng chức vụ, quyền hạn gây ảnh hưởng đối với người khác để trục lợi (Điều 358): Nhận tiền/lợi ích từ 2 triệu đồng để dùng ảnh hưởng thúc đẩy người có chức vụ khác làm việc.',
            '7. Tội giả mạo trong công tác (Điều 359): Vì vụ lợi mà sửa chữa, làm sai lệch tài liệu, hoặc làm, cấp giấy tờ giả, giả mạo chữ ký.',
          ],
          keyPoints: [
            '7 tội phạm tham nhũng (Điều 353-359 BLHS)',
            'Phân biệt Tham ô vs Lạm dụng chức vụ: Tham ô có trách nhiệm trực tiếp quản lý tài sản bị chiếm đoạt',
            'Định lượng cơ bản tội chiếm đoạt/hối lộ: Từ 2.000.000 đồng trở lên',
            'Định lượng tội công vụ (Điều 356, 357): Thiệt hại tài sản từ 10.000.000 đồng trở lên',
            'Phân biệt Điều 356 vs Điều 357: Điều 356 làm trái trong thẩm quyền; Điều 357 vượt quá thẩm quyền',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 269,
            pageEnd: 277,
            exactPages: [269, 270, 271, 272, 273, 274, 275, 276, 277],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 353, 354, 355, 356, 357, 358, 359',
              contentSnippet: 'Mục 1 Chương XXIII: Các tội phạm về tham nhũng.',
            },
          ],
          keywords: ['Tội phạm tham nhũng', 'Điều 353 BLHS', 'Tham ô 2 triệu', 'Nhận hối lộ', 'Thiệt hại 10 triệu', 'Điều 356', 'Điều 357'],
        },
      ],
    },
    {
      id: 'sec-ch7-02',
      chapterId: 7,
      order: 2,
      title: 'II. Các giải pháp phòng ngừa tham nhũng',
      description: 'Tám biện pháp phòng ngừa tham nhũng, định kỳ chuyển đổi vị trí công tác và chế độ kiểm soát tài sản, thu nhập.',
      articles: [
        {
          id: 'ch7-s7.2.1',
          code: '7.2.1',
          title: 'Tám biện pháp phòng ngừa tham nhũng và Quy định định kỳ chuyển đổi vị trí công tác (2 - 5 năm)',
          content: [
            'Luật Phòng, chống tham nhũng năm 2018 quy định hệ thống 08 biện pháp phòng ngừa tham nhũng trong cơ quan, tổ chức, đơn vị:',
            '1. Công khai, minh bạch về tổ chức và hoạt động (Điều 9 - 15);',
            '2. Xây dựng và thực hiện định mức, chế độ, tiêu chuẩn (Điều 16, 17);',
            '3. Thực hiện quy tắc ứng xử của người có chức vụ, quyền hạn (Điều 20, 21);',
            '4. Tặng quà và nhận quà tặng (Điều 22 - nghiêm cấm nhận quà liên quan công việc);',
            '5. Kiểm soát xung đột lợi ích (Điều 23);',
            '6. Chuyển đổi vị trí công tác của người có chức vụ, quyền hạn (Điều 24 - 26);',
            '7. Cải cách hành chính, ứng dụng khoa học công nghệ trong quản lý và thanh toán không dùng tiền mặt (Điều 27 - 29);',
            '8. Kiểm soát tài sản, thu nhập của người có chức vụ, quyền hạn (Điều 30 - 54).',
            'Quy định định kỳ chuyển đổi vị trí công tác (Điều 25 Luật PCTN):',
            '- Thời hạn chuyển đổi: TỪ ĐỦ 02 NĂM ĐẾN 05 NĂM theo đặc thù của từng ngành, lĩnh vực.',
            '- Vị trí bắt buộc phải chuyển đổi: Người có chức vụ, quyền hạn làm việc tại một số vị trí liên quan đến công tác tổ chức cán bộ, quản lý tài chính công, tài sản công, đầu tư công, trực tiếp tiếp xúc và giải quyết công việc của cơ quan, tổ chức, đơn vị, cá nhân.',
          ],
          keyPoints: [
            '8 biện pháp phòng ngừa: Công khai minh bạch, Định mức chế độ, Quy tắc ứng xử, Quà tặng, Xung đột lợi ích, Chuyển đổi vị trí, Công nghệ/không tiền mặt, Kiểm soát tài sản',
            'Thời hạn chuyển đổi vị trí công tác: Từ đủ 02 năm đến 05 năm (Điều 25)',
            'Lĩnh vực chuyển đổi: Tổ chức cán bộ, quản lý tài chính công, tài sản công, đầu tư công',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 277,
            pageEnd: 286,
            exactPages: [277, 278, 279, 280, 281, 282, 283, 284, 285, 286],
          },
          lawCitations: [
            {
              lawName: 'Luật Phòng, chống tham nhũng năm 2018',
              article: 'Điều 9, 22, 24, 25',
              contentSnippet: 'Các biện pháp phòng ngừa tham nhũng và định kỳ chuyển đổi vị trí công tác.',
            },
          ],
          keywords: ['Biện pháp phòng ngừa tham nhũng', 'Chuyển đổi vị trí công tác', 'Thời hạn 2-5 năm', 'Công khai minh bạch', 'Điều 25'],
        },
        {
          id: 'ch7-s7.2.2',
          code: '7.2.2',
          title: 'Kiểm soát tài sản, thu nhập: Kê khai lần đầu, hàng năm, bổ sung (biến động >= 300 triệu, động sản >= 50 triệu) & Xử lý gian dối',
          content: [
            'Tài sản, thu nhập phải kê khai (Điều 35 Luật PCTN 2018):',
            '- Quyền sử dụng đất, nhà ở, công trình xây dựng và tài sản khác gắn liền với đất, nhà ở, công trình xây dựng;',
            '- Kim khí quý, đá quý, tiền, giấy tờ có giá và động sản khác mà mỗi tài sản có GIÁ TRỊ TỪ 50.000.000 ĐỒNG TRỞ LÊN;',
            '- Tài sản, tài khoản ở nước ngoài; Tổng thu nhập giữa hai lần kê khai.',
            'Phương thức kê khai tài sản, thu nhập (Điều 36):',
            '1. Kê khai lần đầu: Áp dụng khi được tuyển dụng, bổ nhiệm lần đầu.',
            '2. Kê khai bổ sung: Được áp dụng khi người có nghĩa vụ kê khai có BIẾN ĐỘNG VỀ TÀI SẢN, THU NHẬP TRONG NĂM CÓ GIÁ TRỊ TỪ 300.000.000 ĐỒNG TRỞ LÊN.',
            '3. Kê khai hằng năm: Hoàn thành trước ngày 31 tháng 12 đối với người giữ chức vụ từ Giám đốc sở và tương đương trở lên; người làm công tác cán bộ, tài chính công, tài sản công...',
            '4. Kê khai phục vụ công tác cán bộ: Áp dụng khi dự kiến bầu, phê chuẩn, bổ nhiệm, bổ nhiệm lại, giới thiệu ứng cử.',
            'Xử lý hành vi kê khai tài sản, thu nhập không trung thực (Điều 51 Luật PCTN):',
            '- Người ứng cử ĐBQH, người ứng cử ĐBHĐND: BỊ XÓA TÊN KHỎI DANH SÁCH những người ứng cử.',
            '- Người dự kiến bầu, phê chuẩn, bổ nhiệm: KHÔNG ĐƯỢC BẦU, PHÊ CHUẨN, BỔ NHIỆM vào chức vụ dự kiến.',
            '- Cán bộ, công chức khác: Bị xử lý kỷ luật từ CẢNH CÁO TRỞ LÊN.',
          ],
          keyPoints: [
            'Động sản kê khai: Kim khí quý, tiền, giấy tờ có giá từ 50.000.000 đồng trở lên (Điều 35)',
            'Kê khai bổ sung: Khi tài sản biến động trong năm từ 300.000.000 đồng trở lên (Điều 36)',
            'Kê khai hàng năm: Giám đốc sở trở lên, công tác cán bộ, tài chính (trước 31/12)',
            'Xử lý gian dối ĐBQH/HĐND: Bị xóa tên khỏi danh sách ứng cử (Điều 51)',
            'Xử lý gian dối bổ nhiệm: Không được bổ nhiệm vào chức vụ đó',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 286,
            pageEnd: 291,
            exactPages: [286, 287, 288, 289, 290, 291],
          },
          lawCitations: [
            {
              lawName: 'Luật Phòng, chống tham nhũng năm 2018',
              article: 'Điều 35, 36, 51',
              contentSnippet: 'Tài sản phải kê khai, các phương thức kê khai và xử lý người kê khai không trung thực.',
            },
          ],
          keywords: ['Kiểm soát tài sản thu nhập', 'Kê khai bổ sung 300 triệu', 'Kê khai động sản 50 triệu', 'Điều 35', 'Điều 36', 'Điều 51'],
        },
      ],
    },
    {
      id: 'sec-ch7-03',
      chapterId: 7,
      order: 3,
      title: 'III. Phát hiện, xử lý tham nhũng và Trách nhiệm xã hội',
      description: 'Phát hiện tham nhũng qua kiểm tra, thanh tra; xử lý kỷ luật đương nhiên buộc thôi việc cán bộ phạm tội và vai trò của xã hội.',
      articles: [
        {
          id: 'ch7-s7.3.1',
          code: '7.3.1',
          title: 'Phát hiện, xử lý tham nhũng (Đương nhiên buộc thôi việc) và Trách nhiệm của xã hội',
          content: [
            'Phát hiện tham nhũng: Thông qua hoạt động giám sát của cơ quan dân cử, công tác kiểm tra, tự kiểm tra của cơ quan, thanh tra, kiểm toán, phản ánh, tố cáo của nhân dân và báo chí.',
            'Cơ quan thanh tra, kiểm toán phát hiện dấu hiệu tội phạm (Điều 62): Người ra quyết định thanh tra, kiểm toán phải chỉ đạo xác minh làm rõ; nếu có dấu hiệu tội phạm thì PHẢI CHUYỂN NGAY HỒ SƠ cho cơ quan điều tra có thẩm quyền để xem xét khởi tố vụ án hình sự.',
            'Xử lý kỷ luật người có hành vi tham nhũng (Điều 92 Luật PCTN):',
            '- Cán bộ, công chức, viên chức có hành vi tham nhũng thì tùy tính chất bị xử lý kỷ luật nghiêm minh.',
            '- ĐƯƠNG NHIÊN BỊ BUỘC THÔI VIỆC: Người bị kết án về tội phạm tham nhũng mà bản án, quyết định của Tòa án đã có hiệu lực pháp luật thì ĐƯƠNG NHIÊN BỊ BUỘC THÔI VIỆC kể từ ngày bản án, quyết định có hiệu lực pháp luật.',
            'Trách nhiệm của xã hội (Điều 4, 89 - 91): Mặt trận Tổ quốc Việt Nam, các tổ chức chính trị - xã hội, hiệp hội doanh nghiệp, cơ quan báo chí và công dân có trách nhiệm tham gia phòng ngừa, phát hiện tham nhũng, kiến nghị cơ quan nhà nước xử lý và được bảo vệ tính mạng, sức khỏe, tài sản khi tố cáo tham nhũng.',
          ],
          keyPoints: [
            'Chuyển cơ quan điều tra: Phát hiện dấu hiệu tội phạm trong thanh tra phải chuyển ngay hồ sơ (Điều 62)',
            'Đương nhiên buộc thôi việc: Cán bộ bị kết án về tội phạm tham nhũng bản án có hiệu lực (Điều 92)',
            'Trách nhiệm xã hội: Báo chí, MTTQ và công dân giám sát, phản ánh, phát hiện tham nhũng và được bảo vệ bí mật, an toàn',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 291,
            pageEnd: 296,
            exactPages: [291, 292, 293, 294, 295, 296],
          },
          lawCitations: [
            {
              lawName: 'Luật Phòng, chống tham nhũng năm 2018',
              article: 'Điều 62, 92',
              contentSnippet: 'Xử lý vụ việc có dấu hiệu tham nhũng và xử lý kỷ luật đối với người có hành vi tham nhũng.',
            },
          ],
          keywords: ['Phát hiện tham nhũng', 'Điều 62 Luật PCTN', 'Đương nhiên buộc thôi việc', 'Điều 92 Luật PCTN', 'Trách nhiệm xã hội'],
        },
      ],
    },
  ],
};
