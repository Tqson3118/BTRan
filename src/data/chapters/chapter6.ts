/**
 * src/data/chapters/chapter6.ts
 * Số hóa toàn diện nội dung Chương 6 Giáo trình Pháp luật đại cương (HCMUTE 2023)
 * LUẬT HÔN NHÂN VÀ GIA ĐÌNH
 */

import { Chapter } from '../../types';

export const chapter6: Chapter = {
  id: 6,
  code: 'ch6',
  title: 'Chương 6: Luật Hôn nhân và Gia đình',
  shortTitle: 'Luật Hôn nhân & Gia đình',
  description:
    'Nghiên cứu quan hệ nhân thân và tài sản trong hôn nhân và gia đình theo Luật HNGĐ 2014; 5 nguyên tắc cơ bản; điều kiện kết hôn (nam đủ 20, nữ đủ 18), thái độ không thừa nhận hôn nhân đồng giới; chế độ tài sản thỏa thuận (lập trước kết hôn) và luật định; quan tắc suy đoán con chung trong thời hạn 300 ngày; chế định ly hôn, hạn chế quyền ly hôn của người chồng, ưu tiên mẹ nuôi con dưới 36 tháng và hỏi ý kiến con từ đủ 7 tuổi.',
  pageRange: {
    start: 231,
    end: 263,
  },
  coreConcepts: [
    'Khái niệm Hôn nhân & Gia đình',
    '5 nguyên tắc cơ bản Luật HNGĐ',
    'Điều kiện kết hôn (Nam đủ 20, nữ đủ 18)',
    'Hôn nhân đồng giới (Không thừa nhận)',
    'Cấm kết hôn trong phạm vi 3 đời',
    'Chế độ tài sản thỏa thuận (lập trước kết hôn)',
    'Chế độ tài sản luật định & Hoa lợi tài sản riêng',
    'Quy tắc suy đoán con chung 300 ngày',
    'Hạn chế quyền ly hôn của người chồng',
    'Nuôi con dưới 36 tháng & Ý kiến con từ đủ 7 tuổi',
  ],
  totalArticles: 7,
  sections: [
    {
      id: 'sec-ch6-01',
      chapterId: 6,
      order: 1,
      title: 'I. Khái quát, Nguyên tắc cơ bản & Chế định Kết hôn',
      description: 'Khái niệm hôn nhân, gia đình, 5 nguyên tắc hiến định, điều kiện kết hôn và thủ tục xử lý kết hôn trái pháp luật.',
      articles: [
        {
          id: 'ch6-s6.1.1',
          code: '6.1.1',
          title: 'Khái niệm, đối tượng, phương pháp và 5 nguyên tắc cơ bản của Luật HNGĐ 2014',
          content: [
            'Hôn nhân là quan hệ giữa vợ và chồng sau khi kết hôn. Gia đình là tập hợp những người gắn bó với nhau do hôn nhân, quan hệ huyết thống hoặc quan hệ nuôi dưỡng (Điều 3).',
            'Luật Hôn nhân và Gia đình là ngành luật độc lập điều chỉnh các quan hệ nhân thân và quan hệ tài sản phát sinh giữa vợ và chồng, cha mẹ và con cái, cùng các thành viên khác trong gia đình.',
            'Năm (05) nguyên tắc cơ bản của chế độ hôn nhân và gia đình (Điều 2 Luật HNGĐ 2014):',
            '1. Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng.',
            '2. Hôn nhân giữa công dân Việt Nam thuộc các dân tộc, tôn giáo, người có tôn giáo với không tôn giáo, với người nước ngoài được tôn trọng và bảo vệ.',
            '3. Xây dựng gia đình ấm no, tiến bộ, hạnh phúc; các thành viên có nghĩa vụ quan tâm, chăm sóc, giúp đỡ nhau; không phân biệt đối xử giữa các con.',
            '4. Nhà nước, xã hội và gia đình có trách nhiệm bảo vệ, hỗ trợ trẻ em, người cao tuổi, người khuyết tật; giúp đỡ các bà mẹ thực hiện tốt thiên chức.',
            '5. Kế thừa, phát huy truyền thống văn hóa, đạo đức tốt đẹp của dân tộc Việt Nam về hôn nhân và gia đình.',
          ],
          keyPoints: [
            '5 nguyên tắc: Tự nguyện tiến bộ 1 vợ 1 chồng; Không phân biệt tôn giáo/dân tộc; Ấm no hạnh phúc; Bảo vệ người yếu thế; Phát huy truyền thống tốt đẹp',
            'Đặc trưng tài sản: Luôn xuất phát và gắn liền với quan hệ nhân thân tình cảm gia đình',
            'Văn bản nền tảng: Luật Hôn nhân và Gia đình năm 2014 (hiệu lực từ 01/01/2015)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 231,
            pageEnd: 235,
            exactPages: [231, 232, 233, 234, 235],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 2, 3',
              contentSnippet: 'Giải thích từ ngữ và các nguyên tắc cơ bản của chế độ hôn nhân và gia đình.',
            },
          ],
          keywords: ['Luật Hôn nhân và gia đình', '5 nguyên tắc', 'Hôn nhân 1 vợ 1 chồng', 'Điều 2 Luật HNGĐ'],
        },
        {
          id: 'ch6-s6.1.2',
          code: '6.1.2',
          title: 'Điều kiện kết hôn (Nam đủ 20, nữ đủ 18), thái độ với hôn nhân đồng giới & Xử lý kết hôn trái luật',
          content: [
            'Kết hôn là việc nam và nữ xác lập quan hệ vợ chồng theo quy định về điều kiện kết hôn và đăng ký kết hôn (Điều 8 Luật HNGĐ 2014):',
            '1. Độ tuổi: Nam từ ĐỦ 20 TUỔI TRỞ LÊN, nữ từ ĐỦ 18 TUỔI TRỞ LÊN (tính theo ngày, tháng, năm sinh dương lịch).',
            '2. Tự nguyện: Do nam và nữ tự nguyện quyết định, không bên nào lừa dối, cưỡng ép hoặc cản trở.',
            '3. Năng lực hành vi: Không bị mất năng lực hành vi dân sự.',
            '4. Không thuộc các trường hợp cấm kết hôn (Khoản 2 Điều 5): Kết hôn giả tạo; Tảo hôn; Đang có vợ/chồng mà kết hôn với người khác; Kết hôn cùng dòng máu trực hệ; Có họ trong phạm vi 3 đời; Cha mẹ nuôi với con nuôi; Bố dượng với con riêng của vợ, mẹ kế với con riêng của chồng.',
            'Quy định đối với Hôn nhân giữa những người cùng giới tính (Khoản 2 Điều 8): "Nhà nước không thừa nhận hôn nhân giữa những người cùng giới tính". Lưu ý: Luật 2014 ĐÃ BÃI BỎ quy định cấm và bãi bỏ xử phạt vi phạm hành chính, nhưng cơ quan hộ tịch sẽ từ chối cấp đăng ký kết hôn.',
            'Xử lý kết hôn trái pháp luật (Điều 10, 11): Tòa án nhân dân có thẩm quyền hủy việc kết hôn trái pháp luật. Nếu tại thời điểm xét xử cả hai bên đã đủ điều kiện kết hôn và yêu cầu công nhận thì Tòa án công nhận quan hệ hôn nhân kể từ thời điểm đủ điều kiện.',
          ],
          keyPoints: [
            'Độ tuổi: Nam từ đủ 20 tuổi, Nữ từ đủ 18 tuổi (tính chính xác theo ngày sinh)',
            'Hôn nhân đồng giới: "Nhà nước không thừa nhận" (không cấm, không phạt, nhưng từ chối đăng ký)',
            'Cấm họ hàng: Cùng dòng máu trực hệ và có họ trong phạm vi 3 đời',
            'Thẩm quyền hủy kết hôn trái luật: Duy nhất Tòa án nhân dân',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 235,
            pageEnd: 243,
            exactPages: [235, 236, 237, 238, 239, 240, 241, 242, 243],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 5, 8, 9, 10, 11',
              contentSnippet: 'Điều kiện kết hôn, trường hợp cấm và hủy việc kết hôn trái pháp luật.',
            },
          ],
          keywords: ['Điều kiện kết hôn', 'Nam đủ 20 nữ đủ 18', 'Hôn nhân đồng giới', 'Cấm kết hôn 3 đời', 'Hủy kết hôn trái luật'],
        },
      ],
    },
    {
      id: 'sec-ch6-02',
      chapterId: 6,
      order: 2,
      title: 'II. Quan hệ giữa vợ và chồng & Chế độ tài sản',
      description: 'Quan hệ nhân thân bình đẳng, đại diện giữa vợ chồng, chế độ tài sản theo thỏa thuận và chế độ tài sản luật định.',
      articles: [
        {
          id: 'ch6-s6.2.1',
          code: '6.2.1',
          title: 'Quan hệ nhân thân và Đại diện giữa vợ và chồng',
          content: [
            'Vợ, chồng bình đẳng với nhau, có quyền và nghĩa vụ ngang nhau về mọi mặt trong gia đình, tôn trọng danh dự, nhân phẩm, uy tín của nhau (Điều 17). Vợ chồng có nghĩa vụ thương yêu, chung thủy, tôn trọng, quan tâm, chăm sóc, giúp đỡ nhau.',
            'Nơi cư trú của vợ chồng do vợ chồng tự thỏa thuận, không bị ràng buộc bởi phong tục hay địa giới hành chính (Điều 20).',
            'Đại diện giữa vợ và chồng (Điều 24 - 27): Vợ chồng có thể ủy quyền cho nhau. Vợ chồng chịu trách nhiệm liên đới đối với giao dịch do một bên thực hiện nhằm ĐÁP ỨNG NHU CẦU THIẾT YẾU CỦA GIA ĐÌNH hoặc giao dịch theo ủy quyền.',
          ],
          keyPoints: [
            'Nguyên tắc: Vợ chồng bình đẳng, có quyền và nghĩa vụ ngang nhau',
            'Trách nhiệm liên đới: Cùng chịu trách nhiệm với giao dịch phục vụ nhu cầu thiết yếu gia đình',
            'Nơi cư trú: Do vợ chồng tự thỏa thuận lựa chọn',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 243,
            pageEnd: 245,
            exactPages: [243, 244, 245],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 17, 19, 24, 27',
              contentSnippet: 'Quyền, nghĩa vụ nhân thân và trách nhiệm liên đới giữa vợ và chồng.',
            },
          ],
          keywords: ['Quan hệ nhân thân', 'Vợ chồng bình đẳng', 'Trách nhiệm liên đới', 'Nhu cầu thiết yếu'],
        },
        {
          id: 'ch6-s6.2.2',
          code: '6.2.2',
          title: 'Chế độ tài sản theo thỏa thuận (lập trước khi kết hôn) và Chế độ tài sản luật định',
          content: [
            'Luật HNGĐ 2014 quy định 02 chế độ tài sản của vợ chồng:',
            '1. Chế độ tài sản theo thỏa thuận (Điều 47 - 50):',
            '- Thỏa thuận BẮT BUỘC PHẢI LẬP TRƯỚC KHI KẾT HÔN bằng văn bản có công chứng hoặc chứng thực.',
            '- Có hiệu lực kể từ ngày đăng ký kết hôn.',
            '- Sau khi kết hôn, văn bản thỏa thuận lập mới sẽ bị coi là vô hiệu.',
            '2. Chế độ tài sản theo luật định (Điều 33 - 46):',
            '- Tài sản chung của vợ chồng (Điều 33): Gồm tài sản do vợ, chồng tạo ra, thu nhập do lao động, hoạt động sản xuất kinh doanh, hoa lợi, lợi tức phát sinh từ tài sản riêng trong thời kỳ hôn nhân và các khoản thu nhập hợp pháp khác (tiền thưởng, trúng số). Tài sản chung thuộc sở hữu chung hợp nhất có thể phân chia.',
            '- Suy đoán tài sản chung (Khoản 3 Điều 33): Trong trường hợp không có chứng cứ chứng minh tài sản mà vợ, chồng đang có tranh chấp là tài sản riêng của mỗi bên thì tài sản đó ĐƯỢC COI LÀ TÀI SẢN CHUNG.',
            '- Tài sản riêng của vợ, chồng (Điều 43): Tài sản mỗi người có trước khi kết hôn; tài sản được thừa kế riêng, tặng cho riêng trong thời kỳ hôn nhân; tài sản phục vụ nhu cầu thiết yếu riêng.',
          ],
          keyPoints: [
            'Chế độ thỏa thuận: Bắt buộc lập TRƯỚC KHI KẾT HÔN, công chứng/chứng thực (Điều 47)',
            'Tài sản chung: Thu nhập trong thời kỳ hôn nhân, hoa lợi lợi tức từ tài sản riêng',
            'Suy đoán tài sản chung: Tranh chấp không chứng minh được tài sản riêng -> coi là tài sản chung',
            'Định đoạt BĐS chung: Bắt buộc phải có sự đồng ý bằng văn bản của cả hai vợ chồng',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 245,
            pageEnd: 250,
            exactPages: [245, 246, 247, 248, 249, 250],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 33, 43, 47, 48',
              contentSnippet: 'Tài sản chung, tài sản riêng và chế độ tài sản theo thỏa thuận.',
            },
          ],
          keywords: ['Chế độ tài sản', 'Tài sản thỏa thuận', 'Tài sản chung', 'Tài sản riêng', 'Hoa lợi lợi tức', 'Điều 33', 'Điều 47'],
        },
      ],
    },
    {
      id: 'sec-ch6-03',
      chapterId: 6,
      order: 3,
      title: 'III. Quan hệ cha mẹ - con & Chế định Ly hôn',
      description: 'Xác định cha mẹ con (quy tắc 300 ngày), quyền yêu cầu ly hôn, hạn chế ly hôn của người chồng và giải quyết tài sản, con cái.',
      articles: [
        {
          id: 'ch6-s6.3.1',
          code: '6.3.1',
          title: 'Quan hệ cha mẹ và con (Xác định con chung trong thời hạn 300 ngày)',
          content: [
            'Cha mẹ có nghĩa vụ thương yêu, nuôi dưỡng, chăm sóc, bảo vệ quyền và lợi ích hợp pháp của con; đại diện theo pháp luật cho con chưa thành niên.',
            'Nguyên tắc xác định cha, mẹ, con (Điều 88 Luật HNGĐ 2014):',
            '- Con sinh ra trong thời kỳ hôn nhân hoặc do người vợ có thai trong thời kỳ đó là con chung của vợ chồng.',
            '- Quy tắc 300 ngày: Con sinh ra trong thời hạn 300 NGÀY kể từ thời điểm chấm dứt hôn nhân được coi là con do người vợ có thai trong thời kỳ hôn nhân (suy đoán con của người chồng cũ).',
            '- Con sinh ra trước ngày đăng ký kết hôn và được cha mẹ thừa nhận là con chung của vợ chồng.',
            '- Trong trường hợp cha, mẹ không thừa nhận con thì phải có chứng cứ khoa học (giám định ADN) và phải được Tòa án xác định.',
          ],
          keyPoints: [
            'Quy tắc 300 ngày: Con sinh ra trong 300 ngày sau khi ly hôn suy đoán là con của người chồng cũ (Điều 88)',
            'Không thừa nhận con: Bắt buộc phải thông qua thủ tục Tòa án và có giám định khoa học',
            'Không phân biệt đối xử: Con đẻ, con nuôi, con ngoài giá thú đều có quyền lợi bình đẳng',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 250,
            pageEnd: 254,
            exactPages: [250, 251, 252, 253, 254],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 69, 70, 88',
              contentSnippet: 'Quyền nghĩa vụ cha mẹ - con và nguyên tắc xác định cha, mẹ cho con.',
            },
          ],
          keywords: ['Quan hệ cha mẹ con', 'Xác định cha mẹ', 'Quy tắc 300 ngày', 'Điều 88 Luật HNGĐ', 'Giám định ADN'],
        },
        {
          id: 'ch6-s6.3.2',
          code: '6.3.2',
          title: 'Chế định Ly hôn: Thuận tình, Đơn phương, Hạn chế quyền ly hôn của người chồng',
          content: [
            'Ly hôn là việc chấm dứt quan hệ vợ chồng theo bản án, quyết định có hiệu lực pháp luật của Tòa án nhân dân (Khoản 14 Điều 3).',
            'Các hình thức ly hôn:',
            '1. Thuận tình ly hôn (Điều 55): Hai vợ chồng thật sự tự nguyện ly hôn và đã thỏa thuận được về việc chia tài sản, trông nom, nuôi dưỡng, chăm sóc, giáo dục con -> Tòa án ra QUYẾT ĐỊNH CÔNG NHẬN THUẬN TÌNH LY HÔN.',
            '2. Ly hôn theo yêu cầu của một bên (đơn phương ly hôn - Điều 56): Khi vợ hoặc chồng có hành vi bạo lực gia đình hoặc vi phạm nghiêm trọng quyền, nghĩa vụ làm cho hôn nhân lâm vào tình trạng trầm trọng, đời sống chung không thể kéo dài, mục đích hôn nhân không đạt được -> Tòa án xét xử và ra BẢN ÁN LY HÔN.',
            'Hạn chế quyền yêu cầu ly hôn của NGƯỜI CHỒNG (Khoản 3 Điều 51):',
            '"Chồng không có quyền yêu cầu ly hôn trong trường hợp vợ đang có thai, sinh con hoặc đang nuôi con dưới 12 tháng tuổi".',
            'Bẫy trắc nghiệm cực kỳ quan trọng: Quy định này CHỈ HẠN CHẾ NGƯỜI CHỒNG, KHÔNG HẠN CHẾ NGƯỜI VỢ. Nếu người vợ nộp đơn ly hôn trong giai đoạn này thì Tòa án vẫn thụ lý và giải quyết bình thường.',
          ],
          keyPoints: [
            'Thẩm quyền ly hôn: Duy nhất Tòa án nhân dân (UBND cấp xã không có thẩm quyền)',
            'Thuận tình ly hôn: Tự nguyện + Thỏa thuận xong toàn bộ -> Ra Quyết định (Điều 55)',
            'Đơn phương ly hôn: Trầm trọng, bạo lực, mục đích không đạt -> Ra Bản án (Điều 56)',
            'Hạn chế người chồng: Vợ mang thai, sinh con hoặc nuôi con dưới 12 tháng tuổi (người vợ không bị hạn chế)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 254,
            pageEnd: 258,
            exactPages: [254, 255, 256, 257, 258],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 51, 55, 56',
              contentSnippet: 'Quyền yêu cầu giải quyết ly hôn, thuận tình ly hôn và ly hôn theo yêu cầu một bên.',
            },
          ],
          keywords: ['Ly hôn', 'Thuận tình ly hôn', 'Đơn phương ly hôn', 'Hạn chế quyền người chồng', 'Con dưới 12 tháng tuổi', 'Điều 51'],
        },
        {
          id: 'ch6-s6.3.3',
          code: '6.3.3',
          title: 'Giải quyết tài sản, con cái (Ưu tiên mẹ nuôi con dưới 36 tháng, hỏi ý kiến con từ đủ 7 tuổi) & Cấp dưỡng',
          content: [
            'Giải quyết tài sản chung khi ly hôn (Điều 59):',
            '- Về nguyên tắc, tài sản chung được chia đôi nhưng có tính đến: Hoàn cảnh của gia đình và của vợ, chồng; Công sức đóng góp của mỗi bên; Bảo vệ lợi ích chính đáng của mỗi bên trong sản xuất kinh doanh; Lỗi của mỗi bên trong vi phạm quyền, nghĩa vụ của vợ chồng.',
            '- Điểm b Khoản 2 Điều 59: Lao động của vợ, chồng trong gia đình (nội trợ, chăm sóc con) ĐƯỢC COI NHƯ LAO ĐỘNG CÓ THU NHẬP.',
            'Quyền trực tiếp nuôi con khi ly hôn (Điều 81):',
            '- Vợ, chồng thỏa thuận về người trực tiếp nuôi con, nghĩa vụ, quyền của mỗi bên sau khi ly hôn.',
            '- Nếu không thỏa thuận được, Tòa án quyết định giao con cho một bên trực tiếp nuôi căn cứ vào quyền lợi về mọi mặt của con.',
            '- Xem xét nguyện vọng của con: Nếu con TỪ ĐỦ 07 TUỔI TRỞ LÊN thì Tòa án BẮT BUỘC PHẢI XEM XÉT NGUYỆN VỌNG CỦA CON.',
            '- Ưu tiên người mẹ: Con DƯỚI 36 THÁNG TUỔI được giao cho mẹ trực tiếp nuôi dưỡng (trừ trường hợp người mẹ không đủ điều kiện hoặc cha mẹ có thỏa thuận khác phù hợp).',
            'Nghĩa vụ cấp dưỡng (Điều 82, 110): Người không trực tiếp nuôi con có nghĩa vụ cấp dưỡng nuôi con đến khi con thành niên (đủ 18 tuổi) hoặc con đã thành niên nhưng tàn tật, không có khả năng lao động và không có tài sản để tự nuôi mình.',
          ],
          keyPoints: [
            'Chia tài sản: Về nguyên tắc chia đôi có tính công sức đóng góp; nội trợ coi như lao động có thu nhập',
            'Ưu tiên mẹ nuôi con: Con dưới 36 tháng tuổi ưu tiên giao mẹ trực tiếp nuôi',
            'Hỏi ý kiến con: Con từ đủ 07 tuổi trở lên bắt buộc phải xem xét nguyện vọng',
            'Nghĩa vụ cấp dưỡng: Người không nuôi con có nghĩa vụ cấp dưỡng đến khi con đủ 18 tuổi',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 258,
            pageEnd: 263,
            exactPages: [258, 259, 260, 261, 262, 263],
          },
          lawCitations: [
            {
              lawName: 'Luật Hôn nhân và Gia đình năm 2014',
              article: 'Điều 59, 81, 82, 110',
              contentSnippet: 'Nguyên tắc giải quyết tài sản của vợ chồng khi ly hôn và nghĩa vụ trông nom, chăm sóc, nuôi dưỡng con.',
            },
          ],
          keywords: ['Chia tài sản ly hôn', 'Nội trợ có thu nhập', 'Nuôi con dưới 36 tháng', 'Nguyện vọng con từ đủ 7 tuổi', 'Cấp dưỡng nuôi con'],
        },
      ],
    },
  ],
};
