/**
 * src/data/chapters/chapter5.ts
 * Số hóa toàn diện nội dung Chương 5 Giáo trình Pháp luật đại cương (HCMUTE 2023)
 * MỘT SỐ VẤN ĐỀ CƠ BẢN VỀ LUẬT LAO ĐỘNG
 */

import { Chapter } from '../../types';

export const chapter5: Chapter = {
  id: 5,
  code: 'ch5',
  title: 'Chương 5: Một số vấn đề cơ bản về Luật Lao động',
  shortTitle: 'Luật Lao động',
  description:
    'Nghiên cứu quan hệ lao động theo Bộ luật Lao động năm 2019; chế định 2 loại hợp đồng lao động, thử việc (4 mức 180d/60d/30d/3d, lương >= 85%), 7 trường hợp NLĐ đơn phương chấm dứt không cần báo trước; tiền lương làm thêm giờ (150%, 200%, 300%), làm đêm (+30%), 11 ngày nghỉ lễ tết; 4 hình thức kỷ luật lao động và trách nhiệm vật chất (khấu trừ tối đa 30% lương).',
  pageRange: {
    start: 188,
    end: 231,
  },
  coreConcepts: [
    'Quan hệ lao động & BLLĐ 2019',
    '2 loại hợp đồng lao động',
    'Quy tắc ký tiếp & chuyển hóa HĐLĐ',
    'Thử việc 4 mức thời hạn & Lương >= 85%',
    '7 trường hợp NLĐ nghỉ việc không cần báo trước',
    'NSDLĐ đuổi việc không báo trước khi bỏ việc 5 ngày',
    'Lương làm thêm giờ & làm việc ban đêm',
    'Thời giờ làm việc & 11 ngày nghỉ lễ hưởng nguyên lương',
    '4 hình thức kỷ luật lao động duy nhất',
    'Trách nhiệm vật chất & Khấu trừ lương <= 30%',
  ],
  totalArticles: 7,
  sections: [
    {
      id: 'sec-ch5-01',
      chapterId: 5,
      order: 1,
      title: 'I. Khái niệm, Đối tượng điều chỉnh & Hợp đồng lao động',
      description: 'Khái niệm quan hệ lao động, thẩm quyền giao kết, 2 loại HĐLĐ theo BLLĐ 2019, chế định thử việc và các trường hợp chấm dứt hợp đồng.',
      articles: [
        {
          id: 'ch5-s5.1.1',
          code: '5.1.1',
          title: 'Khái niệm, đối tượng và phương pháp điều chỉnh của Luật Lao động',
          content: [
            'Luật Lao động là ngành luật độc lập trong hệ thống pháp luật Việt Nam, bao gồm hệ thống các quy phạm pháp luật điều chỉnh quan hệ lao động giữa người lao động (NLĐ) và người sử dụng lao động (NSDLĐ), cùng các quan hệ xã hội liên quan trực tiếp đến quan hệ lao động.',
            'Quan hệ lao động (Khoản 5 Điều 3 BLLĐ 2019): Là quan hệ xã hội phát sinh trong việc thuê mướn, sử dụng lao động, trả lương giữa NLĐ, NSDLĐ, các tổ chức đại diện của các bên và cơ quan nhà nước có thẩm quyền (gồm quan hệ cá nhân và quan hệ tập thể).',
            'Phương pháp điều chỉnh: Kết hợp giữa phương pháp bình đẳng thỏa thuận (xác lập HĐLĐ, thỏa ước tập thể, lương) và phương pháp mệnh lệnh quyền uy (quản lý điều hành, chấp hành nội quy lao động) cùng sự tham gia giám sát của tổ chức Công đoàn.',
          ],
          keyPoints: [
            'Đối tượng: Quan hệ lao động cá nhân, quan hệ lao động tập thể và các quan hệ liên quan trực tiếp',
            'Phương pháp: Kết hợp bình đẳng thỏa thuận và mệnh lệnh quyền uy có sự tham gia của Công đoàn',
            'Văn bản nền tảng: Bộ luật Lao động năm 2019 (có hiệu lực từ ngày 01/01/2021)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 188,
            pageEnd: 194,
            exactPages: [188, 189, 190, 191, 192, 193, 194],
          },
          keywords: ['Luật lao động', 'Quan hệ lao động', 'BLLĐ 2019', 'Phương pháp điều chỉnh'],
        },
        {
          id: 'ch5-s5.1.2',
          code: '5.1.2',
          title: 'Hợp đồng lao động: 2 loại HĐLĐ và quy tắc ký tiếp theo BLLĐ 2019',
          content: [
            'Khái niệm (Điều 13 BLLĐ 2019): Hợp đồng lao động là sự thỏa thuận giữa NLĐ và NSDLĐ về việc làm có trả công, tiền lương, điều kiện lao động, quyền và nghĩa vụ của mỗi bên. Nguyên tắc: Dù hợp đồng mang tên gọi khác nhưng có nội dung làm việc có trả công và có sự quản lý giám sát thì vẫn được coi là HĐLĐ.',
            'Phân loại HĐLĐ (Điều 20 BLLĐ 2019): Đã bãi bỏ HĐLĐ mùa vụ, hiện nay chỉ còn ĐÚNG 02 LOẠI:',
            '1. HĐLĐ không xác định thời hạn: Hai bên không xác định thời điểm chấm dứt hiệu lực.',
            '2. HĐLĐ xác định thời hạn: Hai bên xác định thời hạn kết thúc trong thời gian không quá 36 tháng.',
            'Quy tắc ký tiếp khi HĐLĐ xác định thời hạn hết hạn (Khoản 2 Điều 20):',
            '- Trong thời hạn 30 ngày kể từ ngày HĐLĐ hết hạn, hai bên phải ký kết HĐLĐ mới.',
            '- Nếu hết 30 ngày mà không ký kết HĐLĐ mới thì HĐLĐ đã ký ĐƯƠNG NHIÊN TRỞ THÀNH HĐLĐ KHÔNG XÁC ĐỊNH THỜI HẠN.',
            '- Nếu ký kết HĐLĐ mới là xác định thời hạn thì CHỈ ĐƯỢC KÝ THÊM 01 LẦN, sau đó nếu NLĐ vẫn tiếp tục làm việc thì PHẢI KÝ HĐLĐ KHÔNG XÁC ĐỊNH THỜI HẠN.',
          ],
          keyPoints: [
            'Chỉ còn 2 loại HĐLĐ: Không xác định thời hạn & Xác định thời hạn (tối đa 36 tháng)',
            'Quy tắc 30 ngày: Hết hạn 30 ngày không ký mới -> tự động chuyển thành không xác định thời hạn',
            'Số lần ký: HĐLĐ xác định thời hạn chỉ được ký tối đa 2 lần, sau đó bắt buộc ký không thời hạn',
            'Cấm NSDLĐ: Giữ bản chính giấy tờ tùy thân, văn bằng; bắt đặt cọc tiền (Điều 17)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 194,
            pageEnd: 203,
            exactPages: [194, 195, 196, 197, 198, 199, 200, 201, 202, 203],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Lao động năm 2019',
              article: 'Điều 13, 17, 20',
              contentSnippet: 'Khái niệm, các hành vi bị cấm và phân loại 2 loại hợp đồng lao động.',
            },
          ],
          keywords: ['Hợp đồng lao động', '2 loại HĐLĐ', 'Điều 20 BLLĐ', 'Quy tắc 30 ngày', 'Chuyển hóa HĐLĐ'],
        },
        {
          id: 'ch5-s5.1.3',
          code: '5.1.3',
          title: 'Chế định Thử việc: 4 khung thời gian và tiền lương thử việc >= 85%',
          content: [
            'Thử việc là sự thỏa thuận về việc làm thử, quyền và nghĩa vụ của các bên trong thời gian thử việc (Điều 24 BLLĐ 2019). Không áp dụng thử việc đối với HĐLĐ có thời hạn dưới 01 tháng.',
            'Thời gian thử việc tối đa theo 4 nhóm chức danh (Điều 25):',
            '1. Không quá 180 ngày: Đối với công việc của người quản lý doanh nghiệp theo Luật Doanh nghiệp.',
            '2. Không quá 60 ngày: Đối với công việc cần trình độ chuyên môn kỹ thuật từ cao đẳng trở lên.',
            '3. Không quá 30 ngày: Đối với công việc cần trình độ trung cấp, công nhân kỹ thuật, nhân viên nghiệp vụ.',
            '4. Không quá 03 ngày làm việc: Đối với các công việc khác.',
            'Tiền lương thử việc (Điều 26): Do hai bên thỏa thuận nhưng ÍT NHẤT PHẢI BẰNG 85% MỨC LƯƠNG của công việc đó.',
            'Hủy bỏ hợp đồng thử việc (Điều 27): Trong thời gian thử việc, mỗi bên có quyền hủy bỏ hợp đồng thử việc mà không cần báo trước và không phải bồi thường.',
          ],
          keyPoints: [
            '4 khung thời gian: 180 ngày (quản lý DN), 60 ngày (CĐ trở lên), 30 ngày (TC/công nhân), 3 ngày (khác)',
            'Tiền lương thử việc: Ít nhất bằng 85% mức lương chính thức của công việc',
            'Không thử việc: Với HĐLĐ dưới 01 tháng',
            'Hủy bỏ: Không cần báo trước và không phải bồi thường',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 203,
            pageEnd: 205,
            exactPages: [203, 204, 205],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Lao động năm 2019',
              article: 'Điều 24, 25, 26, 27',
              contentSnippet: 'Thời gian thử việc, tiền lương thử việc và kết thúc thời gian thử việc.',
            },
          ],
          keywords: ['Thử việc', 'Thời gian thử việc', 'Lương thử việc 85%', 'Điều 25 BLLĐ', 'Điều 26 BLLĐ'],
        },
        {
          id: 'ch5-s5.1.4',
          code: '5.1.4',
          title: 'Tạm hoãn và Đơn phương chấm dứt HĐLĐ (7 trường hợp NLĐ không cần báo trước)',
          content: [
            'Tạm hoãn HĐLĐ (Điều 30): Thực hiện nghĩa vụ quân sự; bị tạm giam; cai nghiện; lao động nữ mang thai y tế chỉ định... Sau khi hết hạn tạm hoãn, trong vòng 15 ngày NLĐ phải có mặt và NSDLĐ phải nhận lại.',
            'Quyền đơn phương chấm dứt HĐLĐ của NLĐ (Điều 35 BLLĐ 2019):',
            '- Thời hạn báo trước thông thường: Ít nhất 45 ngày (HĐ không thời hạn); ít nhất 30 ngày (HĐ 12-36 tháng); ít nhất 03 ngày làm việc (HĐ dưới 12 tháng).',
            '- Bảy (07) trường hợp NLĐ CÓ QUYỀN ĐƠN PHƯƠNG CHẤM DỨT KHÔNG CẦN BÁO TRƯỚC (Khoản 2 Điều 35):',
            '1. Không được bố trí đúng công việc, địa điểm hoặc không được bảo đảm điều kiện làm việc thỏa thuận;',
            '2. Không được trả đủ lương hoặc trả lương không đúng thời hạn;',
            '3. Bị NSDLĐ ngược đãi, đánh đập, nhục mạ, làm ảnh hưởng sức khỏe, danh dự; bị cưỡng bức lao động;',
            '4. Bị quấy rối tình dục tại nơi làm việc;',
            '5. Lao động nữ mang thai phải nghỉ việc theo chỉ định của cơ sở y tế;',
            '6. Đủ tuổi nghỉ hưu theo quy định;',
            '7. NSDLĐ cung cấp thông tin không trung thực làm ảnh hưởng thực hiện HĐLĐ.',
            'Quyền đơn phương của NSDLĐ (Điều 36): Phải báo trước theo thời hạn luật định, TRỪ trường hợp ngoại lệ: NLĐ tự ý bỏ việc mà không có lý do chính đáng từ 05 ngày làm việc liên tục trở lên thì NSDLĐ có quyền đuổi việc ngay KHÔNG CẦN BÁO TRƯỚC.',
          ],
          keyPoints: [
            'Báo trước thông thường: 45 ngày (không thời hạn), 30 ngày (12-36 tháng), 3 ngày (dưới 12 tháng)',
            'NLĐ nghỉ việc ngay không báo trước: 7 trường hợp (nợ lương, quấy rối tình dục, ngược đãi, sai việc...)',
            'NSDLĐ nghỉ việc ngay không báo trước: Khi NLĐ tự ý bỏ việc từ 05 ngày làm việc liên tục trở lên',
            'Cấm NSDLĐ đơn phương: Khi NLĐ nghỉ ốm đau, thai sản, nuôi con dưới 12 tháng tuổi (Điều 37)',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 205,
            pageEnd: 215,
            exactPages: [205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Lao động năm 2019',
              article: 'Điều 30, 35, 36, 37, 41',
              contentSnippet: 'Tạm hoãn thực hiện HĐLĐ và quyền đơn phương chấm dứt hợp đồng lao động.',
            },
          ],
          keywords: ['Đơn phương chấm dứt HĐLĐ', 'Điều 35 BLLĐ', 'Không cần báo trước', 'Tự ý bỏ việc 5 ngày', 'Điều 36 BLLĐ'],
        },
      ],
    },
    {
      id: 'sec-ch5-02',
      chapterId: 5,
      order: 2,
      title: 'II. Tiền lương, Thời giờ làm việc, nghỉ ngơi & Kỷ luật lao động',
      description: 'Quy định tiền lương, làm thêm giờ, làm đêm, thời giờ làm việc và 4 hình thức kỷ luật lao động luật định.',
      articles: [
        {
          id: 'ch5-s5.2.1',
          code: '5.2.1',
          title: 'Tiền lương, làm thêm giờ (150%, 200%, 300%) và làm đêm (+30%)',
          content: [
            'Tiền lương là số tiền NSDLĐ trả cho NLĐ theo thỏa thuận để thực hiện công việc, gồm mức lương theo công việc, phụ cấp lương và các khoản bổ sung khác, không được thấp hơn mức lương tối thiểu vùng do Chính phủ công bố (Điều 90, 91).',
            'Tiền lương làm thêm giờ (Điều 98 BLLĐ 2019):',
            '- Vào ngày thường: Ít nhất bằng 150% đơn giá tiền lương hoặc tiền lương thực trả.',
            '- Vào ngày nghỉ hàng tuần: Ít nhất bằng 200%.',
            '- Vào ngày nghỉ lễ, tết, ngày nghỉ có hưởng lương: Ít nhất bằng 300% (chưa kể tiền lương của ngày nghỉ lễ, tết đối với NLĐ hưởng lương ngày; tổng thực nhận là 400%).',
            'Tiền lương làm việc vào ban đêm (từ 22 giờ đến 06 giờ sáng hôm sau - Khoản 2 Điều 98): Được trả thêm ít nhất 30% tiền lương tính theo lương công việc làm ban ngày.',
            'Làm thêm giờ vào ban đêm (Khoản 3 Điều 98): Hưởng lương làm thêm (150%/200%/300%) + Lương ban đêm (30%) + Thêm 20% tiền lương tính theo ban ngày của ngày đó.',
          ],
          keyPoints: [
            'Lương làm thêm ngày thường: >= 150%',
            'Lương làm thêm ngày nghỉ tuần: >= 200%',
            'Lương làm thêm ngày Lễ, Tết: >= 300% (chưa tính lương nguyên ngày lễ, tổng nhận 400%)',
            'Lương làm đêm (22h - 6h): Trả thêm ít nhất 30% lương ban ngày',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 215,
            pageEnd: 221,
            exactPages: [215, 216, 217, 218, 219, 220, 221],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Lao động năm 2019',
              article: 'Điều 90, 91, 98',
              contentSnippet: 'Tiền lương và chế độ trả tiền lương làm thêm giờ, làm việc vào ban đêm.',
            },
          ],
          keywords: ['Tiền lương', 'Làm thêm giờ', 'Lương 150%', 'Lương 200%', 'Lương 300%', 'Làm việc ban đêm 30%'],
        },
        {
          id: 'ch5-s5.2.2',
          code: '5.2.2',
          title: 'Thời giờ làm việc (tối đa 40h/tháng, 200h/năm) và 11 ngày nghỉ lễ tết hưởng nguyên lương',
          content: [
            'Thời giờ làm việc bình thường (Điều 105): Không quá 08 giờ trong 01 ngày và không quá 48 giờ trong 01 tuần. Nhà nước khuyến khích áp dụng tuần làm việc 40 giờ.',
            'Định mức làm thêm giờ tối đa (Điều 107): Phải được sự đồng ý của NLĐ; không quá 50% số giờ làm việc bình thường trong 1 ngày; không quá 40 giờ trong 01 tháng; không quá 200 giờ trong 01 năm (ngành nghề đặc thù như dệt may, da giày, thủy sản... được làm thêm tối đa 300 giờ/năm).',
            'Nghỉ lễ, tết hưởng nguyên lương (Điều 112 BLLĐ 2019) - Tổng cộng 11 ngày:',
            '1. Tết Dương lịch: 01 ngày (ngày 01/01 dương lịch).',
            '2. Tết Âm lịch: 05 ngày.',
            '3. Ngày Chiến thắng: 01 ngày (ngày 30/04 dương lịch).',
            '4. Ngày Quốc tế lao động: 01 ngày (ngày 01/05 dương lịch).',
            '5. Quốc khánh: 02 ngày (ngày 02/09 dương lịch và 01 ngày liền kề trước hoặc sau).',
            '6. Ngày Giỗ Tổ Hùng Vương: 01 ngày (ngày 10/03 âm lịch).',
            'Nghỉ hàng năm (phép năm - Điều 113): Đủ 12 tháng làm việc được nghỉ 12 ngày (bình thường), 14 ngày (chưa thành niên, khuyết tật, nặng nhọc), 16 ngày (đặc biệt nặng nhọc). Cứ đủ 05 năm làm việc được tăng thêm 01 ngày phép.',
          ],
          keyPoints: [
            'Thời giờ làm việc: Tối đa 8h/ngày, 48h/tuần (khuyến khích 40h/tuần)',
            'Làm thêm giờ tối đa: Không quá 40 giờ/tháng, không quá 200 giờ/năm (đặc thù 300h/năm)',
            '11 ngày nghỉ Lễ, Tết hưởng nguyên lương (Quốc khánh 2 ngày, Tết AL 5 ngày)',
            'Phép năm: 12 ngày bình thường, cứ đủ 5 năm thâm niên được cộng thêm 1 ngày',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 221,
            pageEnd: 226,
            exactPages: [221, 222, 223, 224, 225, 226],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Lao động năm 2019',
              article: 'Điều 105, 107, 112, 113, 114',
              contentSnippet: 'Thời giờ làm việc, giới hạn làm thêm giờ và các ngày nghỉ lễ, tết hưởng nguyên lương.',
            },
          ],
          keywords: ['Thời giờ làm việc', 'Làm thêm tối đa', '11 ngày nghỉ lễ', 'Phép năm', 'Điều 112 BLLĐ'],
        },
        {
          id: 'ch5-s5.2.3',
          code: '5.2.3',
          title: 'Bốn hình thức Kỷ luật lao động luật định và Trách nhiệm vật chất (khấu trừ <= 30%)',
          content: [
            'Kỷ luật lao động là những quy định về việc tuân theo thời gian, công nghệ và điều hành sản xuất, kinh doanh do NSDLĐ ban hành trong nội quy lao động và do pháp luật quy định.',
            'Căn cứ Điều 124 BLLĐ 2019, chỉ có ĐÚNG 04 HÌNH THỨC KỶ LUẬT LAO ĐỘNG LUẬT ĐỊNH:',
            '1. Khiển trách.',
            '2. Kéo dài thời hạn nâng lương không quá 06 tháng.',
            '3. Cách chức.',
            '4. Sa thải (áp dụng khi trộm cắp, tham ô, tiết lộ bí mật công nghệ, quấy rối tình dục, tự ý bỏ việc 5 ngày dồn trong 30 ngày hoặc 20 ngày dồn trong 365 ngày).',
            'Các hành vi bị NGHIÊM CẤM khi xử lý kỷ luật (Điều 127): Xâm phạm sức khỏe, danh dự, nhân phẩm; Phạt tiền, cắt lương thay việc xử lý kỷ luật; Xử lý kỷ luật vì lý do tham gia đình công.',
            'Trách nhiệm vật chất (Điều 129, 130):',
            '- Gây thiệt hại không nghiêm trọng do sơ suất dưới 10 tháng lương tối thiểu vùng: Bồi thường nhiều nhất là 03 tháng tiền lương và bị khấu trừ dần hằng tháng vào lương.',
            '- Giới hạn khấu trừ tiền lương (Khoản 3 Điều 102): Mức khấu trừ tiền lương hằng tháng KHÔNG ĐƯỢC VƯỢT QUÁ 30% TIỀN LƯƠNG THỰC LĨNH sau khi đã đóng BHXH, BHYT, BHTN và thuế TNCN.',
          ],
          keyPoints: [
            '4 hình thức kỷ luật duy nhất: Khiển trách, Kéo dài nâng lương <= 6 tháng, Cách chức, Sa thải',
            'Tuyệt đối CẤM: Phạt tiền hoặc cắt giảm tiền lương của NLĐ',
            'Bồi thường sơ suất (< 10 tháng lương tối thiểu): Tối đa 03 tháng lương',
            'Khấu trừ tiền lương hằng tháng: Tối đa KHÔNG QUÁ 30% lương thực lĩnh',
          ],
          citations: {
            bookTitle: 'Giáo trình Pháp luật đại cương (HCMUTE 2023)',
            pageStart: 226,
            pageEnd: 231,
            exactPages: [226, 227, 228, 229, 230, 231],
          },
          lawCitations: [
            {
              lawName: 'Bộ luật Lao động năm 2019',
              article: 'Điều 102, 124, 125, 127, 129',
              contentSnippet: 'Các hình thức xử lý kỷ luật lao động, hành vi bị nghiêm cấm và giới hạn khấu trừ lương.',
            },
          ],
          keywords: ['Kỷ luật lao động', '4 hình thức kỷ luật', 'Cấm phạt tiền cắt lương', 'Sa thải', 'Trách nhiệm vật chất', 'Khấu trừ 30%'],
        },
      ],
    },
  ],
};
