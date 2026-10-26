/**
 * src/data/chapters/chapter1.ts
 * Số hóa toàn diện nội dung Chương 1 Giáo trình Pháp luật đại cương (HCMUTE 2023)
 * NHỮNG VẤN ĐỀ LÝ LUẬN CƠ BẢN VỀ NHÀ NƯỚC VÀ NHÀ NƯỚC CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
 */

import { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 1,
  code: 'ch1',
  title: 'Chương 1: Những vấn đề lý luận cơ bản về Nhà nước & Nhà nước CHXHCN Việt Nam',
  shortTitle: 'Nhà nước & NN CHXHCN VN',
  description:
    'Nghiên cứu nguồn gốc, bản chất, 5 đặc trưng, chức năng, hình thức của Nhà nước; cơ cấu Bộ máy Nhà nước CHXHCN Việt Nam theo Hiến pháp 2013 và 8 đặc trưng cốt lõi của Nhà nước pháp quyền XHCN theo Nghị quyết 27-NQ/TW.',
  pageRange: {
    start: 11,
    end: 39,
  },
  coreConcepts: [
    'Nguồn gốc Nhà nước',
    'Chế độ tư hữu & Mâu thuẫn giai cấp',
    'Bản chất Nhà nước',
    'Năm đặc trưng cơ bản',
    'Hình thức chính thể & Cấu trúc nhà nước',
    'Bộ máy Nhà nước CHXHCN Việt Nam',
    'Hiến pháp 2013',
    'Nhà nước pháp quyền XHCN',
    'Nghị quyết số 27-NQ/TW',
  ],
  totalArticles: 9,
  sections: [
    {
      id: 'sec-ch1-01',
      chapterId: 1,
      order: 1,
      title: 'I. Nguồn gốc, bản chất, đặc trưng, chức năng và hình thức của Nhà nước',
      description: 'Lý luận chung về sự ra đời, tồn tại và các thuộc tính cơ bản của thiết chế nhà nước trong lịch sử.',
      articles: [
        {
          id: 'ch1-s1.1.1',
          code: '1.1.1',
          title: 'Nguồn gốc của Nhà nước',
          content: [
            'Trước chủ nghĩa Mác - Lênin, nhiều học thuyết phi Mác-xít đã luận giải về nguồn gốc nhà nước: Thuyết thần quyền (Nhà nước do Thượng đế sáng tạo để cai quản loài người); Thuyết gia trưởng (Nhà nước là sự mở rộng tự nhiên của gia đình, quyền lực tối cao như quyền người gia trưởng); Thuyết bạo lực (Nhà nước là kết quả chiến tranh thôn tính, kẻ thắng lập bộ máy cai trị kẻ bại); Thuyết khế ước xã hội (Nhà nước ra đời do sự thỏa thuận ký kết hợp đồng giữa những cá nhân tự do nhằm bảo vệ quyền tự nhiên).',
            'Chủ nghĩa Mác - Lênin chứng minh khoa học rằng Nhà nước là một hiện tượng lịch sử có điều kiện, chỉ ra đời khi xã hội phát triển đến một giai đoạn nhất định. Trong xã hội công xã nguyên thủy chưa có nhà nước, quyền lực mang tính xã hội và hòa nhập với dân cư.',
            'Ba lần phân công lao động xã hội lớn (Chăn nuôi tách khỏi trồng trọt -> Thủ công nghiệp tách khỏi nông nghiệp -> Thương nghiệp xuất hiện) đã làm tăng năng suất lao động, dẫn tới xuất hiện của cải dư thừa, xác lập chế độ tư hữu (tiền đề kinh tế) và phân hóa giai cấp đối kháng không thể dung hòa (tiền đề xã hội). Nhà nước ra đời như một tất yếu khách quan để duy trì trật tự thống trị của giai cấp bóc lột.',
          ],
          keyPoints: [
            'Các thuyết phi Mác-xít: Thần quyền, Gia trưởng, Bạo lực, Khế ước xã hội (Hobbes, Locke, Rousseau)',
            'Tiền đề kinh tế: Sự xuất hiện chế độ tư hữu về tư liệu sản xuất',
            'Tiền đề xã hội: Sự phân hóa giai cấp và mâu thuẫn giai cấp đối kháng gay gắt',
            'Tính lịch sử: Nhà nước chỉ sinh ra khi có điều kiện và sẽ tiêu vong khi không còn giai cấp',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 11,
            pageEnd: 14,
            exactPages: [11, 12, 13, 14],
          },
          keywords: ['Nguồn gốc nhà nước', 'Khế ước xã hội', 'Tư hữu', 'Đấu tranh giai cấp', 'Phân công lao động'],
        },
        {
          id: 'ch1-s1.1.2',
          code: '1.1.2',
          title: 'Bản chất của Nhà nước',
          content: [
            'Bản chất của nhà nước luôn thể hiện hai phương diện biện chứng thống nhất: tính giai cấp và tính xã hội.',
            'Tính giai cấp: Nhà nước trước hết là công cụ chuyên chính của giai cấp thống trị về kinh tế nhằm củng cố quyền lực chính trị và áp đặt tư tưởng lên các giai cấp khác trong xã hội.',
            'Tính xã hội: Bên cạnh việc bảo vệ lợi ích giai cấp thống trị, nhà nước còn nhân danh toàn xã hội thực hiện chức năng quản lý các công việc chung của cộng đồng (đê điều, giao thông, phòng chống dịch bệnh, giữ gìn trật tự công cộng, giáo dục, quốc phòng).',
          ],
          keyPoints: [
            'Tính giai cấp: Bộ máy duy trì sự thống trị và đàn áp sự phản kháng của giai cấp bị trị',
            'Tính xã hội: Thực hiện công việc chung vì sự tồn tại và phát triển của toàn xã hội',
            'Tương quan: Tùy theo bản chất của từng kiểu nhà nước trong lịch sử mà tính giai cấp hay tính xã hội chiếm ưu thế',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 14,
            pageEnd: 15,
            exactPages: [14, 15],
          },
          keywords: ['Bản chất nhà nước', 'Tính giai cấp', 'Tính xã hội', 'Công việc chung'],
        },
        {
          id: 'ch1-s1.1.3',
          code: '1.1.3',
          title: 'Năm đặc trưng cơ bản của Nhà nước',
          content: [
            'Nhà nước là tổ chức chính trị đặc biệt có 5 đặc trưng cơ bản mà không một tổ chức xã hội nào khác có được:',
            '1. Thiết lập quyền lực công cộng đặc biệt: Có bộ máy quản lý và cưỡng chế chuyên nghiệp (quân đội, công an, tòa án, nhà tù...) tách biệt khỏi dân cư.',
            '2. Phân chia dân cư theo đơn vị hành chính lãnh thổ: Quản lý công dân theo nơi cư trú, không phụ thuộc huyết thống, dòng tộc hay tín ngưỡng.',
            '3. Có chủ quyền quốc gia: Quyền tối cao trong phạm vi lãnh thổ quốc gia và độc lập, tự quyết trong quan hệ quốc tế.',
            '4. Ban hành pháp luật và quản lý xã hội bằng pháp luật: Pháp luật là quy tắc xử sự chung bắt buộc mọi cá nhân, tổ chức phải chấp hành.',
            '5. Quy định và thu các khoản thuế bắt buộc: Thuế là nguồn thu nhập duy nhất và bắt buộc để duy trì, nuôi dưỡng bộ máy nhà nước và thực hiện các chức năng công cộng.',
          ],
          keyPoints: [
            '1. Quyền lực công cộng đặc biệt (bộ máy cưỡng chế chuyên nghiệp)',
            '2. Phân chia dân cư theo lãnh thổ hành chính',
            '3. Chủ quyền quốc gia tối cao và độc lập',
            '4. Ban hành pháp luật và quản lý bằng pháp luật',
            '5. Thu các khoản thuế bắt buộc',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 15,
            pageEnd: 17,
            exactPages: [15, 16, 17],
          },
          keywords: ['5 đặc trưng nhà nước', 'Quyền lực công cộng', 'Lãnh thổ', 'Chủ quyền quốc gia', 'Thuế'],
        },
        {
          id: 'ch1-s1.1.4',
          code: '1.1.4',
          title: 'Chức năng và Hình thức Nhà nước',
          content: [
            'Chức năng nhà nước là những phương diện hoạt động cơ bản có tính định hướng của nhà nước nhằm thực hiện các nhiệm vụ đặt ra trước nhà nước. Gồm chức năng đối nội (kinh tế, xã hội, an ninh trật tự) và chức năng đối ngoại (bảo vệ Tổ quốc, ngoại giao, hội nhập quốc tế).',
            'Hình thức nhà nước là cách thức tổ chức và thực hiện quyền lực nhà nước, được hợp thành từ 3 yếu tố:',
            '1. Hình thức chính thể (cách thức thành lập cơ quan tối cao): Gồm Chính thể Quân chủ (tuyệt đối hoặc hạn chế/lập hiến) và Chính thể Cộng hòa (quý tộc hoặc dân chủ - tổng thống, đại nghị, hỗn hợp).',
            '2. Hình thức cấu trúc (tổ chức lãnh thổ): Gồm Nhà nước đơn nhất (1 hệ thống pháp luật, 1 bộ máy tối cao, các đơn vị hành chính không có chủ quyền riêng như Việt Nam, Pháp, Nhật) và Nhà nước liên bang (nhiều bang thành viên, có 2 cấp chủ quyền và 2 hệ thống pháp luật như Mỹ, Nga, Đức).',
            '3. Chế độ chính trị: Hệ thống các phương pháp cai trị (Dân chủ hoặc Phản dân chủ).',
          ],
          keyPoints: [
            'Chức năng: Đối nội và Đối ngoại',
            'Chính thể: Quân chủ (vua thế tập) và Cộng hòa (bầu cử có nhiệm kỳ)',
            'Cấu trúc: Đơn nhất (chủ quyền duy nhất) và Liên bang (nhiều bang có chủ quyền thành viên)',
            'Chế độ chính trị: Dân chủ và Độc tài/Phản dân chủ',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 17,
            pageEnd: 21,
            exactPages: [17, 18, 19, 20, 21],
          },
          keywords: ['Hình thức nhà nước', 'Chính thể', 'Cấu trúc nhà nước', 'Chế độ chính trị', 'Quân chủ', 'Cộng hòa'],
        },
      ],
    },
    {
      id: 'sec-ch1-02',
      chapterId: 1,
      order: 2,
      title: 'II. Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam & Bộ máy Nhà nước',
      description: 'Đặc trưng bản chất, cơ cấu tổ chức bộ máy nhà nước theo Hiến pháp 2013 và tiêu chuẩn Nhà nước pháp quyền theo Nghị quyết 27-NQ/TW.',
      articles: [
        {
          id: 'ch1-s1.2.1',
          code: '1.2.1',
          title: 'Bản chất và Hình thức Nhà nước CHXHCN Việt Nam',
          content: [
            'Nhà nước CHXHCN Việt Nam là nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân; do Đảng Cộng sản Việt Nam lãnh đạo; nền tảng là liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức.',
            'Về hình thức nhà nước của Việt Nam:',
            '- Chính thể: Cộng hòa dân chủ xã hội chủ nghĩa.',
            '- Cấu trúc: Nhà nước đơn nhất (toàn vẹn lãnh thổ, một bản Hiến pháp và một hệ thống pháp luật thống nhất từ Trung ương đến địa phương).',
            '- Chế độ chính trị: Dân chủ xã hội chủ nghĩa, bảo đảm quyền làm chủ thực sự của Nhân dân.',
          ],
          keyPoints: [
            'Bản chất: Của Nhân dân, do Nhân dân, vì Nhân dân',
            'Lãnh đạo: Đảng Cộng sản Việt Nam lãnh đạo tuyệt đối',
            'Chính thể: Cộng hòa dân chủ XHCN',
            'Cấu trúc: Nhà nước đơn nhất',
            'Chế độ chính trị: Dân chủ XHCN',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 21,
            pageEnd: 27,
            exactPages: [21, 22, 23, 24, 25, 26, 27],
          },
          lawCitations: [
            {
              lawName: 'Hiến pháp năm 2013',
              article: 'Điều 2',
              contentSnippet: 'Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam là nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.',
            },
            {
              lawName: 'Hiến pháp năm 2013',
              article: 'Điều 4',
              contentSnippet: 'Đảng Cộng sản Việt Nam - Đội tiên phong của giai cấp công nhân... là lực lượng lãnh đạo Nhà nước và xã hội.',
            },
          ],
          keywords: ['Nhà nước Việt Nam', 'Bản chất', 'Chính thể cộng hòa', 'Đơn nhất', 'Hiến pháp 2013'],
        },
        {
          id: 'ch1-s1.2.3',
          code: '1.2.3',
          title: 'Hệ thống chính trị Việt Nam và Vị trí của Nhà nước',
          content: [
            'Hệ thống chính trị nước CHXHCN Việt Nam bao gồm: Đảng Cộng sản Việt Nam (lực lượng lãnh đạo), Nhà nước CHXHCN Việt Nam (trung tâm hệ thống, trụ cột thực thi quyền lực công) và Mặt trận Tổ quốc Việt Nam cùng các tổ chức chính trị - xã hội (cơ sở chính trị của chính quyền nhân dân).',
            'Nhà nước giữ vị trí trung tâm vì là tổ chức duy nhất nắm giữ quyền lực công cộng đặc biệt, ban hành và quản lý bằng pháp luật, quản lý tài sản công và ngân sách quốc gia, đại diện chính thức cho toàn dân tộc về đối nội và đối ngoại.',
          ],
          keyPoints: [
            'Cấu thành: Đảng lãnh đạo - Nhà nước quản lý - Nhân dân làm chủ',
            'Vị trí của Nhà nước: Trung tâm, trụ cột thực thi quyền lực quản lý toàn xã hội',
            'Mặt trận Tổ quốc và các đoàn thể: Giám sát, phản biện xã hội và tập hợp khối đại đoàn kết',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 27,
            pageEnd: 31,
            exactPages: [27, 28, 29, 30, 31],
          },
          lawCitations: [
            {
              lawName: 'Hiến pháp năm 2013',
              article: 'Điều 9',
              contentSnippet: 'Mặt trận Tổ quốc Việt Nam là cơ sở chính trị của chính quyền nhân dân...',
            },
          ],
          keywords: ['Hệ thống chính trị', 'Trung tâm quyền lực', 'Mặt trận Tổ quốc', 'Đảng lãnh đạo'],
        },
        {
          id: 'ch1-s1.2.4',
          code: '1.2.4',
          title: 'Bộ máy Nhà nước CHXHCN Việt Nam theo Hiến pháp 2013',
          content: [
            'Bộ máy Nhà nước Việt Nam là hệ thống các cơ quan nhà nước từ trung ương đến địa phương được tổ chức theo nguyên tắc quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan trong việc thực hiện quyền lập pháp, hành pháp và tư pháp:',
            '1. Quốc hội: Cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất; thực hiện quyền lập hiến, lập pháp, giám sát tối cao và quyết định các vấn đề quan trọng của đất nước.',
            '2. Chủ tịch nước: Người đứng đầu Nhà nước, thay mặt nước CHXHCN Việt Nam về đối nội và đối ngoại; Thống lĩnh lực lượng vũ trang nhân dân.',
            '3. Chính phủ: Cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội.',
            '4. Tòa án nhân dân: Cơ quan xét xử, thực hiện quyền tư pháp; bảo vệ công lý, quyền con người, quyền công dân. Thẩm phán và Hội thẩm xét xử độc lập và chỉ tuân theo pháp luật.',
            '5. Viện kiểm sát nhân dân: Thực hành quyền công tố, kiểm sát hoạt động tư pháp.',
            '6. Chính quyền địa phương: Hội đồng nhân dân (cơ quan quyền lực ở địa phương) và Ủy ban nhân dân (cơ quan chấp hành, cơ quan hành chính ở địa phương).',
            '7. Thiết chế hiến định độc lập: Hội đồng bầu cử quốc gia và Kiểm toán Nhà nước.',
          ],
          keyPoints: [
            'Quốc hội: Lập hiến, lập pháp, quyền lực nhà nước cao nhất (Điều 69)',
            'Chủ tịch nước: Đứng đầu Nhà nước, thống lĩnh lực lượng vũ trang (Điều 86)',
            'Chính phủ: Cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp (Điều 94)',
            'TAND: Cơ quan xét xử, thực hiện quyền tư pháp, độc lập chỉ tuân theo pháp luật (Điều 102)',
            'VKSND: Thực hành quyền công tố và kiểm sát hoạt động tư pháp (Điều 107)',
            'Chính quyền địa phương: HĐND (quyền lực) và UBND (hành chính) (Điều 110-114)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 31,
            pageEnd: 33,
            exactPages: [31, 32, 33],
          },
          lawCitations: [
            {
              lawName: 'Hiến pháp năm 2013',
              article: 'Điều 69, 86, 94, 102, 107, 110',
              contentSnippet: 'Phân định thẩm quyền và chức năng của Quốc hội, Chủ tịch nước, Chính phủ, TAND, VKSND và Chính quyền địa phương.',
            },
          ],
          keywords: ['Bộ máy Nhà nước', 'Quốc hội', 'Chính phủ', 'Tòa án nhân dân', 'Viện kiểm sát nhân dân', 'HĐND', 'UBND'],
        },
        {
          id: 'ch1-s1.2.5',
          code: '1.2.5',
          title: 'Xây dựng Nhà nước pháp quyền XHCN Việt Nam (Nghị quyết 27-NQ/TW)',
          content: [
            'Nghị quyết số 27-NQ/TW ngày 09/11/2022 của Hội nghị lần thứ sáu Ban Chấp hành Trung ương Đảng khóa XIII xác định 8 đặc trưng cơ bản của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam:',
            '1. Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo.',
            '2. Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân; tất cả quyền lực nhà nước thuộc về Nhân dân.',
            '3. Quyền con người, quyền công dân được công nhận, tôn trọng, bảo đảm, bảo vệ theo Hiến pháp và pháp luật.',
            '4. Nhà nước được tổ chức và hoạt động theo Hiến pháp và pháp luật, quản lý xã hội bằng Hiến pháp và pháp luật.',
            '5. Quyền lực nhà nước là thống nhất, có sự phân công rành mạch, phối hợp chặt chẽ và kiểm soát hiệu quả giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp.',
            '6. Hệ thống pháp luật dân chủ, công bằng, nhân đạo, đầy đủ, đồng bộ, thống nhất, kịp thời, khả thi, công khai, minh bạch, ổn định, dễ tiếp cận, được thực hiện nghiêm minh và nhất quán.',
            '7. Độc lập của tòa án theo thẩm quyền xét xử, thẩm phán, hội thẩm xét xử độc lập và chỉ tuân theo pháp luật.',
            '8. Tôn trọng và bảo đảm thực hiện các điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên, bảo đảm cao nhất lợi ích quốc gia – dân tộc.',
          ],
          keyPoints: [
            'Văn bản nền tảng: Nghị quyết số 27-NQ/TW (09/11/2022)',
            'Đột phá lý luận 1: Quyền lực thống nhất, "phân công rành mạch, phối hợp chặt chẽ, kiểm soát hiệu quả"',
            'Đột phá lý luận 2: Độc lập của tòa án theo thẩm quyền xét xử',
            'Mục tiêu: Hoàn thiện Nhà nước pháp quyền XHCN thực sự của Nhân dân, do Nhân dân, vì Nhân dân',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 33,
            pageEnd: 39,
            exactPages: [33, 34, 35, 36, 37, 38, 39],
          },
          lawCitations: [
            {
              lawName: 'Nghị quyết số 27-NQ/TW',
              article: 'Mục II',
              contentSnippet: 'Tám đặc trưng cơ bản của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam trong giai đoạn mới.',
            },
          ],
          keywords: ['Nhà nước pháp quyền', 'Nghị quyết 27-NQ/TW', '8 đặc trưng', 'Kiểm soát quyền lực', 'Độc lập tư pháp'],
        },
      ],
    },
  ],
};
