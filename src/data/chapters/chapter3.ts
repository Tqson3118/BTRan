/**
 * src/data/chapters/chapter3.ts
 * Số hóa toàn diện nội dung Chương 3 Giáo trình Pháp luật đại cương (HCMUTE 2023)
 * MỘT SỐ VẤN ĐỀ CƠ BẢN VỀ LUẬT HÌNH SỰ
 */

import { Chapter } from '../../types';

export const chapter3: Chapter = {
  id: 3,
  code: 'ch3',
  title: 'Chương 3: Một số vấn đề cơ bản về Luật Hình sự',
  shortTitle: 'Luật Hình sự',
  description:
    'Nghiên cứu khái niệm tội phạm, 4 dấu hiệu cơ bản, phân loại 4 loại tội phạm (Điều 9); cấu thành tội phạm & độ tuổi chịu TNHS (Điều 12); 3 giai đoạn thực hiện tội phạm, tự ý nửa chừng chấm dứt (Điều 16); chế định đồng phạm (Điều 17); 7 trường hợp loại trừ TNHS (Điều 20-26) và hệ thống hình phạt chính, bổ sung theo BLHS 2015/2017.',
  pageRange: {
    start: 82,
    end: 142,
  },
  coreConcepts: [
    'Khái niệm & 4 dấu hiệu tội phạm',
    'Phân loại 4 loại tội phạm (Điều 9 BLHS)',
    'Khung hình phạt luật định',
    'Cấu thành tội phạm',
    'Độ tuổi chịu TNHS (Điều 12 BLHS)',
    'Các giai đoạn thực hiện tội phạm',
    'Tự ý nửa chừng chấm dứt (Điều 16)',
    'Đồng phạm & 4 loại người đồng phạm',
    '7 trường hợp loại trừ TNHS (Điều 20-26)',
    'Hệ thống hình phạt chính & bổ sung',
  ],
  totalArticles: 8,
  sections: [
    {
      id: 'sec-ch3-01',
      chapterId: 3,
      order: 1,
      title: 'I. Khái niệm, nguyên tắc và Tội phạm theo Luật Hình sự',
      description: 'Khái niệm, phương pháp điều chỉnh mệnh lệnh - quyền uy, 4 dấu hiệu của tội phạm và nguyên tắc phân loại theo mức cao nhất khung hình phạt.',
      articles: [
        {
          id: 'ch3-s3.1.1',
          code: '3.1.1',
          title: 'Khái niệm, đối tượng, phương pháp và nguyên tắc của Luật Hình sự',
          content: [
            'Luật Hình sự là ngành luật độc lập trong hệ thống pháp luật Việt Nam, bao gồm hệ thống các quy phạm pháp luật do Nhà nước ban hành nhằm xác định những hành vi nguy hiểm cho xã hội bị coi là tội phạm và quy định các hình phạt tương ứng áp dụng đối với người hoặc pháp nhân thương mại phạm tội.',
            'Đối tượng điều chỉnh: Quan hệ xã hội phát sinh giữa Nhà nước và người (hoặc pháp nhân thương mại) thực hiện hành vi phạm tội khi sự kiện tội phạm xảy ra.',
            'Phương pháp điều chỉnh: Phương pháp quyền uy - mệnh lệnh mang tính cưỡng chế nghiêm khắc nhất.',
            'Các nguyên tắc cơ bản: Pháp chế (không có luật thì không có tội), Bình đẳng trước pháp luật, Nhân đạo XHCN, Cá thể hóa hình phạt và Trách nhiệm có lỗi.',
          ],
          keyPoints: [
            'Đối tượng: Quan hệ giữa Nhà nước và người/pháp nhân phạm tội',
            'Phương pháp: Quyền uy - mệnh lệnh đơn phương nghiêm khắc nhất',
            'Nguyên tắc pháp chế: Chỉ hành vi quy định trong BLHS mới là tội phạm (Nullum crimen sine lege)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 82,
            pageEnd: 84,
            exactPages: [82, 83, 84],
          },
          keywords: ['Luật hình sự', 'Khái niệm', 'Đối tượng điều chỉnh', 'Phương pháp mệnh lệnh', 'Nguyên tắc pháp chế'],
        },
        {
          id: 'ch3-s3.1.2',
          code: '3.1.2',
          title: 'Khái niệm và 4 dấu hiệu của Tội phạm (Điều 8 BLHS 2015)',
          content: [
            'Căn cứ Khoản 1 Điều 8 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung 2017): Tội phạm là hành vi nguy hiểm cho xã hội được quy định trong Bộ luật Hình sự, do người có năng lực trách nhiệm hình sự hoặc pháp nhân thương mại thực hiện một cách cố ý hoặc vô ý, xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ Tổ quốc, xâm phạm chế độ chính trị, chế độ kinh tế, nền văn hóa, quốc phòng, an ninh, trật tự, an toàn xã hội, quyền, lợi ích hợp pháp của tổ chức, xâm phạm quyền con người, quyền, lợi ích hợp pháp của công dân, mà theo quy định của Bộ luật này phải bị xử lý hình sự.',
            'Bốn dấu hiệu cơ bản của tội phạm:',
            '1. Tính nguy hiểm đáng kể cho xã hội: Dấu hiệu quan trọng nhất phản ánh tính chất nguy hiểm về mức độ thiệt hại gây ra hoặc đe dọa gây ra.',
            'Khoản 2 Điều 8: Những hành vi tuy có dấu hiệu của tội phạm nhưng tính chất nguy hiểm cho xã hội không đáng kể thì không phải là tội phạm và được xử lý bằng các biện pháp khác.',
            '2. Tính có lỗi: Chủ thể thực hiện hành vi có sự tự do ý chí và lựa chọn xử sự có lỗi (cố ý hoặc vô ý).',
            '3. Tính trái pháp luật hình sự: Hành vi phải được mô tả và quy định rõ trong BLHS.',
            '4. Tính phải chịu hình phạt: Bất kỳ hành vi phạm tội nào cũng đều bị đe dọa áp dụng hình phạt do Tòa án quyết định.',
          ],
          keyPoints: [
            'Khái niệm: Điều 8 Bộ luật Hình sự 2015 sđbs 2017',
            '4 dấu hiệu: Nguy hiểm đáng kể, Có lỗi, Trái pháp luật hình sự, Phải chịu hình phạt',
            'Khoản 2 Điều 8: Nguy hiểm không đáng kể thì không phải là tội phạm',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 84,
            pageEnd: 88,
            exactPages: [84, 85, 86, 87, 88],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 8',
              contentSnippet: 'Khái niệm tội phạm và phân định hành vi nguy hiểm không đáng kể.',
            },
          ],
          keywords: ['Tội phạm', 'Điều 8 BLHS', '4 dấu hiệu tội phạm', 'Nguy hiểm đáng kể', 'Khoản 2 Điều 8'],
        },
        {
          id: 'ch3-s3.1.3',
          code: '3.1.3',
          title: 'Phân loại 4 loại tội phạm theo mức cao nhất khung hình phạt (Điều 9 BLHS)',
          content: [
            'Căn cứ Điều 9 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung 2017), tội phạm được phân thành 04 loại dựa trên tính chất và mức độ nguy hiểm cho xã hội của hành vi:',
            '1. Tội phạm ít nghiêm trọng: Tính chất và mức độ nguy hiểm không lớn; mức cao nhất của khung hình phạt là phạt tiền, phạt cải tạo không giam giữ hoặc phạt tù đến 03 năm.',
            '2. Tội phạm nghiêm trọng: Tính chất và mức độ nguy hiểm lớn; mức cao nhất của khung hình phạt là từ trên 03 năm tù đến 07 năm tù.',
            '3. Tội phạm rất nghiêm trọng: Tính chất và mức độ nguy hiểm rất lớn; mức cao nhất của khung hình phạt là từ trên 07 năm tù đến 15 năm tù.',
            '4. Tội phạm đặc biệt nghiêm trọng: Tính chất và mức độ nguy hiểm đặc biệt lớn; mức cao nhất của khung hình phạt là từ trên 15 năm tù, tù chung thân hoặc tử hình.',
            'Bẫy trắc nghiệm sống còn: Căn cứ phân loại tội phạm là "MỨC CAO NHẤT CỦA KHUNG HÌNH PHẠT DO BLHS QUY ĐỊNH" cho tội danh đó, tuyệt đối KHÔNG căn cứ vào mức án cụ thể mà Tòa án tuyên trên thực tế.',
          ],
          keyPoints: [
            'Ít nghiêm trọng: Cao nhất đến 03 năm tù, phạt tiền, cải tạo KGG',
            'Nghiêm trọng: Trên 03 năm đến 07 năm tù',
            'Rất nghiêm trọng: Trên 07 năm đến 15 năm tù',
            'Đặc biệt nghiêm trọng: Trên 15 năm tù, tù chung thân hoặc tử hình',
            'Quy tắc vàng: Căn cứ mức cao nhất khung hình phạt luật định, không căn cứ bản án cụ thể',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 88,
            pageEnd: 89,
            exactPages: [88, 89],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 9',
              contentSnippet: 'Phân loại 4 loại tội phạm theo mức cao nhất của khung hình phạt.',
            },
          ],
          keywords: ['Phân loại tội phạm', 'Điều 9 BLHS', 'Ít nghiêm trọng', 'Nghiêm trọng', 'Rất nghiêm trọng', 'Đặc biệt nghiêm trọng'],
        },
      ],
    },
    {
      id: 'sec-ch3-02',
      chapterId: 3,
      order: 2,
      title: 'II. Cấu thành tội phạm, Các giai đoạn thực hiện & Đồng phạm',
      description: 'Bốn yếu tố cấu thành tội phạm, độ tuổi chịu TNHS theo Điều 12, chuẩn bị phạm tội, phạm tội chưa đạt và chế định đồng phạm.',
      articles: [
        {
          id: 'ch3-s3.2.1',
          code: '3.2.1',
          title: 'Bốn yếu tố Cấu thành tội phạm & Độ tuổi chịu TNHS (Điều 12 BLHS)',
          content: [
            'Cấu thành tội phạm (CTTP) là tổng hợp các dấu hiệu pháp lý đặc trưng được quy định trong luật hình sự phản ánh tính chất nguy hiểm cho xã hội của hành vi phạm tội, gồm 4 yếu tố:',
            '1. Khách thể: Quan hệ xã hội được luật hình sự bảo vệ bị tội phạm xâm hại.',
            '2. Mặt khách quan: Hành vi nguy hiểm cho xã hội (hành động hoặc không hành động); Hậu quả thiệt hại; Mối quan hệ nhân quả; Thời gian, địa điểm, công cụ, phương tiện gây án.',
            '3. Chủ thể: Cá nhân hoặc pháp nhân thương mại (Điều 76). Đối với cá nhân, phải có năng lực TNHS và đạt độ tuổi luật định theo Điều 12:',
            '- Từ đủ 16 tuổi trở lên: Phải chịu trách nhiệm hình sự về MỌI TỘI PHẠM (trừ những tội luật có quy định khác).',
            '- Từ đủ 14 tuổi đến dưới 16 tuổi: Chỉ phải chịu trách nhiệm hình sự về TỘI RẤT NGHIÊM TRỌNG hoặc ĐẶC BIỆT NGHIÊM TRỌNG thuộc 28 tội danh cụ thể được liệt kê tại Khoản 2 Điều 12 (ví dụ: Giết người - Điều 123, Cướp tài sản - Điều 168, Hiếp dâm - Điều 141, Trộm cắp - Điều 173...).',
            '4. Mặt chủ quan: Lỗi (cố ý trực tiếp, cố ý gián tiếp, vô ý vì quá tự tin, vô ý vì cẩu thả); Động cơ và Mục đích phạm tội.',
          ],
          keyPoints: [
            '4 yếu tố: Khách thể, Mặt khách quan, Chủ thể, Mặt chủ quan',
            'Độ tuổi từ đủ 16 tuổi: Chịu TNHS về mọi tội phạm',
            'Độ tuổi từ đủ 14 đến dưới 16 tuổi: Chỉ chịu tội rất nghiêm trọng / đặc biệt nghiêm trọng của 28 tội tại Khoản 2 Điều 12',
            'Dưới 14 tuổi: Hoàn toàn không phải chịu trách nhiệm hình sự',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 89,
            pageEnd: 102,
            exactPages: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 12',
              contentSnippet: 'Tuổi chịu trách nhiệm hình sự của người phạm tội.',
            },
          ],
          keywords: ['Cấu thành tội phạm', 'Độ tuổi chịu TNHS', 'Điều 12 BLHS', 'Khoản 2 Điều 12', 'Mặt chủ quan'],
        },
        {
          id: 'ch3-s3.2.2',
          code: '3.2.2',
          title: 'Các giai đoạn thực hiện tội phạm & Tự ý nửa chừng chấm dứt (Điều 14-16 BLHS)',
          content: [
            'Các giai đoạn thực hiện tội phạm chỉ đặt ra đối với tội phạm thực hiện với lỗi cố ý trực tiếp, gồm 3 giai đoạn:',
            '1. Chuẩn bị phạm tội (Điều 14 BLHS): Là tìm kiếm, sửa soạn công cụ, phương tiện hoặc tạo ra những điều kiện khác để thực hiện tội phạm; hoặc thành lập, tham gia nhóm tội phạm. Người chuẩn bị phạm tội chỉ phải chịu TNHS về một số tội rất nghiêm trọng hoặc đặc biệt nghiêm trọng được liệt kê cụ thể tại Khoản 2, 3 Điều 14.',
            '2. Phạm tội chưa đạt (Điều 15 BLHS): Là cố ý thực hiện tội phạm nhưng không thực hiện được đến cùng vì những nguyên nhân ngoài ý muốn của người phạm tội (chưa đạt chưa hoàn thành hoặc chưa đạt đã hoàn thành). Người phạm tội chưa đạt vẫn phải chịu TNHS.',
            '3. Tội phạm hoàn thành: Hành vi phạm tội đã thỏa mãn đầy đủ các dấu hiệu cấu thành tội phạm được mô tả trong luật.',
            'Tự ý nửa chừng chấm dứt việc phạm tội (Điều 16 BLHS): Là tự mình không thực hiện tội phạm đến cùng một cách tự nguyện và dứt khoát, khi hoàn cảnh thực tế không có gì ngăn cản. Người tự ý nửa chừng chấm dứt được MIỄN TRÁCH NHIỆM HÌNH SỰ về tội định phạm.',
          ],
          keyPoints: [
            'Chuẩn bị phạm tội: Tìm kiếm, sửa soạn công cụ (chỉ chịu TNHS một số tội tại Điều 14)',
            'Phạm tội chưa đạt: Dừng lại do nguyên nhân ngoài ý muốn khách quan (vẫn chịu TNHS theo Điều 15)',
            'Tự ý nửa chừng chấm dứt: Tự nguyện dứt khoát dừng lại khi không ai ngăn cản -> Được MIỄN TNHS (Điều 16)',
            'Chỉ áp dụng với tội cố ý trực tiếp',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 102,
            pageEnd: 108,
            exactPages: [102, 103, 104, 105, 106, 107, 108],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 14, 15, 16',
              contentSnippet: 'Chuẩn bị phạm tội, phạm tội chưa đạt và tự ý nửa chừng chấm dứt việc phạm tội.',
            },
          ],
          keywords: ['Giai đoạn tội phạm', 'Chuẩn bị phạm tội', 'Phạm tội chưa đạt', 'Tự ý nửa chừng chấm dứt', 'Miễn TNHS'],
        },
        {
          id: 'ch3-s3.2.3',
          code: '3.2.3',
          title: 'Đồng phạm và 4 loại người đồng phạm (Điều 17 BLHS)',
          content: [
            'Căn cứ Điều 17 Bộ luật Hình sự năm 2015: Đồng phạm là trường hợp có từ 02 người trở lên cố ý cùng thực hiện một tội phạm.',
            'Bốn loại người đồng phạm:',
            '1. Người thực hành: Là người trực tiếp thực hiện tội phạm (tự mình thực hiện hành vi khách quan hoặc dùng người không có năng lực TNHS làm công cụ).',
            '2. Người tổ chức: Là người chủ mưu, cầm đầu, chỉ huy việc thực hiện tội phạm.',
            '3. Người xúi giục: Là người kích động, dụ dỗ, thúc đẩy người khác thực hiện tội phạm.',
            '4. Người giúp sức: Là người tạo điều kiện tinh thần hoặc vật chất cho việc thực hiện tội phạm.',
            'Nguyên tắc Thái quá của người thực hành: Những người đồng phạm khác không phải chịu trách nhiệm hình sự về hành vi vượt quá (thái quá) của người thực hành nằm ngoài sự bàn bạc, thống nhất ý chí chung.',
          ],
          keyPoints: [
            'Khái niệm: Từ 02 người trở lên cố ý cùng thực hiện một tội phạm',
            '4 loại người: Thực hành (trực tiếp), Tổ chức (chủ mưu), Xúi giục (kích động), Giúp sức (tạo điều kiện)',
            'Thái quá của người thực hành: Không truy cứu đồng phạm khác về hành vi tự ý vượt quá',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 108,
            pageEnd: 116,
            exactPages: [108, 109, 110, 111, 112, 113, 114, 115, 116],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 17',
              contentSnippet: 'Đồng phạm và phân loại các vai trò trong đồng phạm.',
            },
          ],
          keywords: ['Đồng phạm', 'Điều 17 BLHS', 'Người thực hành', 'Người tổ chức', 'Người xúi giục', 'Người giúp sức', 'Hành vi thái quá'],
        },
      ],
    },
    {
      id: 'sec-ch3-03',
      chapterId: 3,
      order: 3,
      title: 'III. Loại trừ trách nhiệm hình sự và Hệ thống hình phạt',
      description: 'Bảy trường hợp loại trừ trách nhiệm hình sự (Điều 20-26) và hệ thống hình phạt chính, bổ sung theo Điều 32 BLHS.',
      articles: [
        {
          id: 'ch3-s3.3.1',
          code: '3.3.1',
          title: 'Bảy trường hợp loại trừ trách nhiệm hình sự (Điều 20 - 26 BLHS)',
          content: [
            'Bộ luật Hình sự năm 2015 quy định 07 trường hợp hành vi tuy gây ra thiệt hại nhưng do hoàn cảnh và mục đích chính đáng nên được loại trừ trách nhiệm hình sự:',
            '1. Sự kiện bất ngờ (Điều 20): Gây thiệt hại do không thể thấy trước hoặc không buộc phải thấy trước.',
            '2. Tình trạng không có năng lực TNHS (Điều 21): Mắc bệnh tâm thần hoặc bệnh khác làm mất khả năng nhận thức hoặc điều khiển hành vi.',
            '3. Phòng vệ chính đáng (Điều 22): Chống trả lại một cách cần thiết người đang có hành vi xâm phạm quyền, lợi ích chính đáng của mình, người khác hoặc Nhà nước. (Vượt quá giới hạn PVCD vẫn phải chịu TNHS nhưng được giảm nhẹ).',
            '4. Tình thế cấp thiết (Điều 23): Gây một thiệt hại nhỏ hơn thiệt hại cần ngăn ngừa để bảo vệ lợi ích hợp pháp khi không còn cách nào khác.',
            '5. Gây thiệt hại trong khi bắt giữ người phạm tội (Điều 24): Sử dụng vũ lực cần thiết khi đối tượng chống cự hoặc bỏ trốn.',
            '6. Rủi ro trong nghiên cứu, thử nghiệm khoa học, kỹ thuật và công nghệ (Điều 25): Tuân thủ đúng quy trình, áp dụng biện pháp phòng ngừa tối đa.',
            '7. Thi hành mệnh lệnh của người chỉ huy hoặc cấp trên (Điều 26): Trong lực lượng vũ trang nhân dân khi thực hiện nhiệm vụ quốc phòng, an ninh sau khi đã báo cáo.',
          ],
          keyPoints: [
            '7 trường hợp: Sự kiện bất ngờ (Đ20), Mất năng lực TNHS (Đ21), Phòng vệ chính đáng (Đ22), Tình thế cấp thiết (Đ23), Bắt giữ tội phạm (Đ24), Rủi ro khoa học (Đ25), Thi hành mệnh lệnh (Đ26)',
            'Phân biệt: Tình thế cấp thiết bắt buộc thiệt hại gây ra PHẢI NHỎ HƠN thiệt hại cần ngăn ngừa',
            'Phòng vệ chính đáng: Chống trả cần thiết người đang tấn công, không buộc thiệt hại phải nhỏ hơn',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 116,
            pageEnd: 126,
            exactPages: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 20, 21, 22, 23, 24, 25, 26',
              contentSnippet: 'Bảy trường hợp loại trừ trách nhiệm hình sự trong Bộ luật Hình sự.',
            },
          ],
          keywords: ['Loại trừ TNHS', 'Phòng vệ chính đáng', 'Tình thế cấp thiết', 'Sự kiện bất ngờ', 'Điều 22', 'Điều 23 BLHS'],
        },
        {
          id: 'ch3-s3.3.2',
          code: '3.3.2',
          title: 'Hệ thống hình phạt chính, hình phạt bổ sung và Biện pháp tư pháp (Điều 32-45 BLHS)',
          content: [
            'Căn cứ Điều 32 Bộ luật Hình sự năm 2015, hệ thống hình phạt áp dụng đối với người phạm tội gồm:',
            '- Bảy hình phạt chính (mỗi tội phạm chỉ được áp dụng duy nhất 01 hình phạt chính):',
            '1. Cảnh cáo; 2. Phạt tiền; 3. Cải tạo không giam giữ (từ 06 tháng đến 03 năm); 4. Trục xuất; 5. Tù có thời hạn (từ 03 tháng đến 20 năm); 6. Tù chung thân; 7. Tử hình.',
            '- Bảy hình phạt bổ sung (có thể áp dụng kèm theo hình phạt chính):',
            '1. Cấm đảm nhiệm chức vụ, hành nghề hoặc làm công việc nhất định (1 - 5 năm); 2. Cấm cư trú (1 - 5 năm); 3. Quản chế (1 - 5 năm); 4. Tước một số quyền công dân (1 - 5 năm); 5. Tịch thu tài sản; 6. Phạt tiền (khi không là phạt chính); 7. Trục xuất (khi không là phạt chính).',
            'Quy định cấm áp dụng hình phạt tử hình (Khoản 2, 3 Điều 40):',
            '- Không áp dụng tử hình đối với: Người dưới 18 tuổi khi phạm tội; Phụ nữ có thai hoặc phụ nữ đang nuôi con dưới 36 tháng tuổi khi phạm tội hoặc khi xét xử; Người đủ 75 tuổi trở lên khi phạm tội hoặc khi xét xử.',
            '- Không thi hành án tử hình đối với phụ nữ có thai/nuôi con nhỏ dưới 36 tháng hoặc người đủ 75 tuổi trở lên (chuyển sang tù chung thân).',
            '- Người dưới 18 tuổi phạm tội cũng KHÔNG bị áp dụng hình phạt tù chung thân (Điều 98, 99, 100).',
          ],
          keyPoints: [
            '7 hình phạt chính: Cảnh cáo, Phạt tiền, Cải tạo KGG, Trục xuất, Tù có thời hạn, Tù chung thân, Tử hình (mỗi tội chỉ tuyên 1 phạt chính)',
            '7 hình phạt bổ sung: Có thể tuyên kèm 1 hoặc nhiều hình phạt bổ sung',
            'Cấm tử hình & chung thân: Người dưới 18 tuổi khi phạm tội',
            'Cấm tử hình: Phụ nữ mang thai hoặc nuôi con dưới 36 tháng tuổi, người từ đủ 75 tuổi trở lên',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 126,
            pageEnd: 142,
            exactPages: [126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Hình sự năm 2015 (sđbs 2017)',
              article: 'Điều 32, 40, 98, 100',
              contentSnippet: 'Hệ thống hình phạt và các đối tượng không bị áp dụng hình phạt tử hình, tù chung thân.',
            },
          ],
          keywords: ['Hệ thống hình phạt', 'Hình phạt chính', 'Hình phạt bổ sung', 'Tử hình', 'Điều 32 BLHS', 'Điều 40 BLHS'],
        },
      ],
    },
  ],
};
