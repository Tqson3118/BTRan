/**
 * src/subjects/c-lang/data/questions/questions-ch7.ts
 * NgÃ¢n hÃ ng cÃ¢u há»i tráº¯c nghiá»‡m ChuyÃªn sÃ¢u ChÆ°Æ¡ng 7: Kiá»ƒu cáº¥u trÃºc (struct), Há»£p nháº¥t (union) & Liá»‡t kÃª (enum)
 * Sá»‘ lÆ°á»£ng: 30 cÃ¢u há»i chuáº©n hÃ³a
 * Báº£n quyá»n dá»¯ liá»‡u há»c táº­p Äáº¡i há»c SÆ° pháº¡m Ká»¹ thuáº­t TP.HCM (HCMUTE)
 * TuÃ¢n thá»§ 100% TiÃªu chuáº©n Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh7: CQuestion[] = [
  {
    id: 'q-c-ch7-001',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Äiá»ƒm khÃ¡c biá»‡t cÄƒn báº£n nháº¥t giá»¯a kiá»ƒu cáº¥u trÃºc (struct) vÃ  kiá»ƒu máº£ng (array) trong C lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Struct Ä‘Æ°á»£c cáº¥p phÃ¡t trÃªn bá»™ nhá»› Ä‘á»™ng Heap cÃ²n máº£ng luÃ´n luÃ´n Ä‘Æ°á»£c lÆ°u trá»¯ trÃªn ngÄƒn xáº¿p Call Stack." },
      { id: 'B', text: "Máº£ng cho phÃ©p truy xuáº¥t qua con trá» cÃ²n struct hoÃ n toÃ n khÃ´ng thá»ƒ sá»­ dá»¥ng con trá» Ä‘á»ƒ truy cáº­p." },
      { id: 'C', text: "Struct cho phÃ©p nhÃ³m cÃ¡c pháº§n tá»­ cÃ³ kiá»ƒu dá»¯ liá»‡u khÃ¡c nhau cÃ²n máº£ng chá»‰ chá»©a cÃ¡c pháº§n tá»­ cÃ¹ng kiá»ƒu." },
      { id: 'D', text: "Struct cÃ³ kÃ­ch thÆ°á»›c bá»™ nhá»› tá»± Ä‘á»™ng co giÃ£n cÃ²n máº£ng cÃ³ kÃ­ch thÆ°á»›c cá»‘ Ä‘á»‹nh khÃ´ng thá»ƒ thay Ä‘á»•i." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.422 vÃ  HCMUTE tr.159: Máº£ng lÃ  táº­p há»£p Ä‘á»“ng nháº¥t (cÃ¹ng kiá»ƒu); Struct lÃ  kiá»ƒu dá»¯ liá»‡u cÃ³ cáº¥u trÃºc cho phÃ©p gom cÃ¡c thÃ nh pháº§n (fields/members) cÃ³ kiá»ƒu dá»¯ liá»‡u khÃ¡c nhau.",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 422',
      hcmutePage: 'Trang 159',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-002',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "ToÃ¡n tá»­ nÃ o Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ truy xuáº¥t trá»±c tiáº¿p thÃ nh pháº§n cá»§a má»™t biáº¿n cáº¥u trÃºc thÃ´ng thÆ°á»ng?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "ToÃ¡n tá»­ mÅ©i tÃªn '->' (Arrow operator, dÃ¹ng cho cÃ¡c biáº¿n cáº¥u trÃºc Ä‘Æ°á»£c cáº¥p phÃ¡t tÄ©nh)." },
      { id: 'B', text: "ToÃ¡n tá»­ hai dáº¥u hai cháº¥m '::' (Scope resolution operator dÃ¹ng Ä‘á»ƒ Ä‘á»‹nh vá»‹ pháº¡m vi biáº¿n)." },
      { id: 'C', text: "ToÃ¡n tá»­ giáº£i tham chiáº¿u '*' Ä‘áº·t trá»±c tiáº¿p phÃ­a trÆ°á»›c tÃªn thÃ nh viÃªn cá»§a cáº¥u trÃºc dá»¯ liá»‡u." },
      { id: 'D', text: "ToÃ¡n tá»­ dáº¥u cháº¥m '.' (Dot operator, vÃ­ dá»¥: sinhVien.hoTen Ä‘á»ƒ truy xuáº¥t trÆ°á»ng dá»¯ liá»‡u)." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.425 vÃ  HCMUTE tr.162: Biáº¿n struct thÃ´ng thÆ°á»ng dÃ¹ng toÃ¡n tá»­ cháº¥m (.), vÃ­ dá»¥ `sv.diem`. Con trá» struct dÃ¹ng toÃ¡n tá»­ mÅ©i tÃªn (->).",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 425',
      hcmutePage: 'Trang 162',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-003',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "CÃº phÃ¡p ptr->member khi truy xuáº¥t qua con trá» cáº¥u trÃºc ptr tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i biá»ƒu thá»©c nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "HoÃ n toÃ n tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i biá»ƒu thá»©c *ptr.member mÃ  khÃ´ng cáº§n báº¥t ká»³ dáº¥u ngoáº·c trÃ²n nÃ o." },
      { id: 'B', text: "HoÃ n toÃ n tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i biá»ƒu thá»©c &(ptr.member) Ä‘á»ƒ láº¥y trá»±c tiáº¿p Ä‘á»‹a chá»‰ Ã´ nhá»› trÆ°á»ng." },
      { id: 'C', text: "HoÃ n toÃ n tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i biá»ƒu thá»©c (*ptr).member (pháº£i cÃ³ ngoáº·c trÃ²n bao quanh *ptr)." },
      { id: 'D', text: "HoÃ n toÃ n tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i biá»ƒu thá»©c ptr.member tÆ°Æ¡ng tá»± nhÆ° má»™t biáº¿n cáº¥u trÃºc thÃ´ng thÆ°á»ng." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.430 vÃ  HCMUTE tr.166: ToÃ¡n tá»­ `.` Æ°u tiÃªn cao hÆ¡n `*`. Do Ä‘Ã³ `*ptr.member` bá»‹ hiá»ƒu lÃ  `*(ptr.member)`. Äá»ƒ Ä‘Ãºng pháº£i viáº¿t `(*ptr).member`, hoáº·c viáº¿t gá»n lÃ  `ptr->member`.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 430',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-004',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Hiá»‡n tÆ°á»£ng Ä‘á»™n bá»™ nhá»› (Structure Padding) trong cáº¥u trÃºc struct xáº£y ra nháº±m má»¥c Ä‘Ã­ch gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Tá»± Ä‘á»™ng chÃ¨n cÃ¡c byte mÃ£ hÃ³a Ä‘áº·c biá»‡t vÃ o giá»¯a cÃ¡c trÆ°á»ng Ä‘á»ƒ báº£o vá»‡ dá»¯ liá»‡u cáº¥u trÃºc an toÃ n." },
      { id: 'B', text: "Má»Ÿ rá»™ng kÃ­ch thÆ°á»›c cá»§a struct Ä‘á»ƒ struct luÃ´n luÃ´n cÃ³ dung lÆ°á»£ng Ä‘Ãºng báº±ng má»™t lÅ©y thá»«a cá»§a 2." },
      { id: 'C', text: "Kháº¯c phá»¥c sá»± cá»‘ xung Ä‘á»™t tÃªn giá»¯a cÃ¡c trÆ°á»ng dá»¯ liá»‡u Ä‘Æ°á»£c khai bÃ¡o cÃ¹ng má»™t loáº¡i kiá»ƒu dá»¯ liá»‡u." },
      { id: 'D', text: "CÄƒn lá» Ä‘á»‹a chá»‰ cÃ¡c trÆ°á»ng theo bá»™i sá»‘ kÃ­ch thÆ°á»›c kiá»ƒu dá»¯ liá»‡u giÃºp CPU tÄƒng tá»‘c Ä‘á»™ Ä‘á»c dá»¯ liá»‡u." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.428 vÃ  HCMUTE tr.164: CPU truy xuáº¥t bá»™ nhá»› hiá»‡u quáº£ nháº¥t theo cÃ¡c khá»‘i tá»« nhá»› (4 hoáº·c 8 bytes). Compiler tá»± chÃ¨n byte Ä‘á»‡m (padding) Ä‘á»ƒ cÄƒn lá» Ä‘á»‹a chá»‰ thÃ nh viÃªn (alignment).",
    tags: ["c-lang", "ch7", "theory", "hard"],
    reference: {
      uttPage: 'Trang 428',
      hcmutePage: 'Trang 164',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-005',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Báº£n cháº¥t phÃ¢n bá»• bá»™ nhá»› cá»§a kiá»ƒu há»£p nháº¥t (union) trong ngÃ´n ngá»¯ láº­p trÃ¬nh C lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Táº¥t cáº£ cÃ¡c thÃ nh viÃªn chia sáº» chung má»™t vÃ¹ng nhá»› cÃ³ kÃ­ch thÆ°á»›c báº±ng trÆ°á»ng cÃ³ kÃ­ch thÆ°á»›c lá»›n nháº¥t." },
      { id: 'B', text: "Má»—i thÃ nh viÃªn Ä‘Æ°á»£c cáº¥p phÃ¡t má»™t Ã´ nhá»› Ä‘á»™c láº­p riÃªng biá»‡t tÆ°Æ¡ng tá»± nhÆ° cáº¥u trÃºc struct bÃ¬nh thÆ°á»ng." },
      { id: 'C', text: "Bá»™ nhá»› cá»§a union Ä‘Æ°á»£c tá»± Ä‘á»™ng cáº¥p phÃ¡t phÃ¢n tÃ¡n trÃªn phÃ¢n vÃ¹ng Heap thÃ´ng qua hÃ m malloc há»‡ thá»‘ng." },
      { id: 'D', text: "KÃ­ch thÆ°á»›c cá»§a union luÃ´n luÃ´n báº±ng tá»•ng kÃ­ch thÆ°á»›c bá»™ nhá»› cá»§a táº¥t cáº£ cÃ¡c thÃ nh viÃªn cá»™ng dá»“n láº¡i." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.450 vÃ  HCMUTE tr.175: Trong union, táº¥t cáº£ thÃ nh viÃªn dÃ¹ng chung má»™t vÃ¹ng nhá»› (cÃ¹ng Ä‘á»‹a chá»‰ báº¯t Ä‘áº§u). KÃ­ch thÆ°á»›c union báº±ng kÃ­ch thÆ°á»›c thÃ nh viÃªn lá»›n nháº¥t (cá»™ng Ä‘á»‡m náº¿u cÃ³).",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 450',
      hcmutePage: 'Trang 175',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-006',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Äiá»u gÃ¬ sáº½ xáº£y ra khi má»™t trÆ°á»ng cá»§a union Ä‘Æ°á»£c gÃ¡n giÃ¡ trá»‹ má»›i trong chÆ°Æ¡ng trÃ¬nh?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "ChÆ°Æ¡ng trÃ¬nh sáº½ tá»± Ä‘á»™ng sao lÆ°u dá»¯ liá»‡u cá»§a cÃ¡c trÆ°á»ng cÅ© vÃ o má»™t vÃ¹ng nhá»› táº¡m thá»i trÃªn Stack." },
      { id: 'B', text: "GiÃ¡ trá»‹ má»›i sáº½ ghi Ä‘Ã¨ lÃªn vÃ¹ng nhá»› dÃ¹ng chung vÃ  lÃ m sai lá»‡ch giÃ¡ trá»‹ cá»§a cÃ¡c trÆ°á»ng thÃ nh viÃªn khÃ¡c." },
      { id: 'C', text: "TrÃ¬nh biÃªn dá»‹ch sáº½ bÃ¡o lá»—i xung Ä‘á»™t ghi dá»¯ liá»‡u náº¿u cÃ¡c trÆ°á»ng khÃ¡c chÆ°a Ä‘Æ°á»£c giáº£i phÃ³ng bá»™ nhá»›." },
      { id: 'D', text: "GiÃ¡ trá»‹ cá»§a cÃ¡c trÆ°á»ng khÃ¡c váº«n hoÃ n toÃ n Ä‘Æ°á»£c báº£o toÃ n nguyÃªn váº¹n nhá» cÆ¡ cháº¿ phÃ¢n trang Ã´ nhá»›." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.452 vÃ  HCMUTE tr.176: VÃ¬ cÃ¡c thÃ nh viÃªn cá»§a union dÃ¹ng chung bá»™ nhá»›, viá»‡c ghi vÃ o trÆ°á»ng nÃ y sáº½ ghi Ä‘Ã¨ lÃªn cÃ¡c byte cá»§a cÃ¡c trÆ°á»ng khÃ¡c.",
    tags: ["c-lang", "ch7", "theory", "hard"],
    reference: {
      uttPage: 'Trang 452',
      hcmutePage: 'Trang 176',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-007',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "Quy Æ°á»›c giÃ¡ trá»‹ máº·c Ä‘á»‹nh cá»§a cÃ¡c háº±ng sá»‘ trong kiá»ƒu liá»‡t kÃª enum (khi khÃ´ng gÃ¡n tÆ°á»ng minh) lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Báº¯t Ä‘áº§u tá»« sá»‘ 0 cho pháº§n tá»­ Ä‘áº§u tiÃªn vÃ  má»—i pháº§n tá»­ tiáº¿p theo tá»± Ä‘á»™ng tÄƒng thÃªm Ä‘Ãºng 1 Ä‘Æ¡n vá»‹." },
      { id: 'B', text: "Báº¯t Ä‘áº§u tá»« sá»‘ 1 cho pháº§n tá»­ Ä‘áº§u tiÃªn vÃ  má»—i pháº§n tá»­ tiáº¿p theo tá»± Ä‘á»™ng tÄƒng thÃªm Ä‘Ãºng 1 Ä‘Æ¡n vá»‹." },
      { id: 'C', text: "Nháº­n cÃ¡c giÃ¡ trá»‹ rÃ¡c ngáº«u nhiÃªn phá»¥ thuá»™c vÃ o vá»‹ trÃ­ thanh ghi CPU khi khá»Ÿi Ä‘á»™ng chÆ°Æ¡ng trÃ¬nh." },
      { id: 'D', text: "Táº¥t cáº£ cÃ¡c pháº§n tá»­ trong enum Ä‘á»u tá»± Ä‘á»™ng nháº­n cÃ¹ng má»™t giÃ¡ trá»‹ máº·c Ä‘á»‹nh báº±ng sá»‘ nguyÃªn 0." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.456 vÃ  HCMUTE tr.180: Trong enum, náº¿u khÃ´ng gÃ¡n giÃ¡ trá»‹, pháº§n tá»­ Ä‘áº§u tiÃªn lÃ  0, cÃ¡c pháº§n tá»­ tiáº¿p theo tÄƒng dáº§n 1 (1, 2, 3...).",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 456',
      hcmutePage: 'Trang 180',
      section: '7.3',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-008',
    chapterId: 7,
    articleId: 'c-art-ch7-04',
    content: "Tá»« khÃ³a typedef trong ngÃ´n ngá»¯ C cÃ³ vai trÃ² vÃ  tÃ¡c dá»¥ng chá»§ yáº¿u nÃ o sau Ä‘Ã¢y?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Äá»‹nh nghÄ©a ra má»™t kiá»ƒu dá»¯ liá»‡u hoÃ n toÃ n má»›i vÃ  yÃªu cáº§u há»‡ Ä‘iá»u hÃ nh phÃ¢n bá»• thÃªm bá»™ nhá»› RAM." },
      { id: 'B', text: "Ã‰p kiá»ƒu dá»¯ liá»‡u tá»± Ä‘á»™ng giá»¯a cÃ¡c biáº¿n cÃ³ kiá»ƒu dá»¯ liá»‡u khÃ´ng tÆ°Æ¡ng thÃ­ch trong quÃ¡ trÃ¬nh cháº¡y." },
      { id: 'C', text: "Äáº·t tÃªn bÃ­ danh (Alias) má»›i cho má»™t kiá»ƒu dá»¯ liá»‡u cÃ³ sáºµn giÃºp mÃ£ nguá»“n ngáº¯n gá»n vÃ  dá»… hiá»ƒu hÆ¡n." },
      { id: 'D', text: "KhÃ³a giÃ¡ trá»‹ cá»§a biáº¿n cáº¥u trÃºc Ä‘á»ƒ ngÄƒn khÃ´ng cho báº¥t ká»³ hÃ m nÃ o sá»­a Ä‘á»•i ná»™i dung cÃ¡c trÆ°á»ng." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.460 vÃ  HCMUTE tr.184: `typedef` khÃ´ng táº¡o kiá»ƒu má»›i mÃ  chá»‰ táº¡o má»™t bÃ­ danh (alias) cho kiá»ƒu dá»¯ liá»‡u hiá»‡n cÃ³ (vÃ­ dá»¥ `typedef struct SinhVien SV;`).",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 460',
      hcmutePage: 'Trang 184',
      section: '7.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-009',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Khi thá»±c hiá»‡n phÃ©p gÃ¡n giá»¯a hai biáº¿n cáº¥u trÃºc cÃ¹ng kiá»ƒu (sv1 = sv2;), Ä‘iá»u gÃ¬ diá»…n ra?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Hai biáº¿n cáº¥u trÃºc sáº½ cÃ¹ng trá» chung vÃ o má»™t Ã´ nhá»› duy nháº¥t tÆ°Æ¡ng tá»± nhÆ° phÃ©p gÃ¡n cÃ¡c con trá»." },
      { id: 'B', text: "TrÃ¬nh biÃªn dá»‹ch bÃ¡o lá»—i vÃ¬ ngÃ´n ngá»¯ C khÃ´ng há»— trá»£ phÃ©p gÃ¡n trá»±c tiáº¿p giá»¯a hai biáº¿n cáº¥u trÃºc." },
      { id: 'C', text: "Chá»‰ cÃ³ cÃ¡c trÆ°á»ng dá»¯ liá»‡u kiá»ƒu sá»‘ nguyÃªn má»›i Ä‘Æ°á»£c sao chÃ©p cÃ²n cÃ¡c trÆ°á»ng khÃ¡c bá»‹ giá»¯ nguyÃªn." },
      { id: 'D', text: "Sao chÃ©p nÃ´ng tá»«ng byte nhá»‹ phÃ¢n (Bitwise shallow copy) tá»« toÃ n bá»™ cÃ¡c trÆ°á»ng cá»§a sv2 sang sv1." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.426 vÃ  HCMUTE tr.163: C há»— trá»£ phÃ©p gÃ¡n struct cÃ¹ng kiá»ƒu: toÃ n bá»™ ná»™i dung cá»§a sv2 Ä‘Æ°á»£c chÃ©p bit-by-bit sang sv1 (shallow copy). Náº¿u cÃ³ con trá», chá»‰ Ä‘á»‹a chá»‰ Ä‘Æ°á»£c chÃ©p.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 426',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-010',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "VÃ¬ sao khi truyá»n biáº¿n cáº¥u trÃºc cÃ³ kÃ­ch thÆ°á»›c lá»›n vÃ o hÃ m, ngÆ°á»i ta luÃ´n Æ°u tiÃªn truyá»n con trá»?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Äá»ƒ trÃ¡nh chi phÃ­ sao chÃ©p toÃ n bá»™ khá»‘i dá»¯ liá»‡u lá»›n lÃªn Stack giÃºp tá»‘i Æ°u hÃ³a hiá»‡u nÄƒng chÆ°Æ¡ng trÃ¬nh." },
      { id: 'B', text: "VÃ¬ ngÃ´n ngá»¯ C hoÃ n toÃ n cáº¥m viá»‡c truyá»n má»™t biáº¿n cáº¥u trÃºc theo cÆ¡ cháº¿ truyá»n tham trá»‹ thÃ´ng thÆ°á»ng." },
      { id: 'C', text: "Äá»ƒ hÃ m tá»± Ä‘á»™ng giáº£i phÃ³ng vÃ¹ng nhá»› cá»§a biáº¿n cáº¥u trÃºc ngay sau khi hoÃ n thÃ nh xong viá»‡c tÃ­nh toÃ¡n." },
      { id: 'D', text: "VÃ¬ chá»‰ cÃ³ truyá»n con trá» má»›i cho phÃ©p hiá»ƒn thá»‹ cÃ¡c trÆ°á»ng dá»¯ liá»‡u cá»§a cáº¥u trÃºc ra mÃ n hÃ¬nh chuáº©n." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.434 vÃ  HCMUTE tr.168: Truyá»n struct theo tham trá»‹ pháº£i copy toÃ n bá»™ cÃ¡c bytes lÃªn Stack. Truyá»n con trá» (thÆ°á»ng kÃ¨m `const`) chá»‰ copy 4/8 bytes Ä‘á»‹a chá»‰, nhanh vÃ  tiáº¿t kiá»‡m bá»™ nhá»›.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 434',
      hcmutePage: 'Trang 168',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-011',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "GiÃ¡ trá»‹ cá»§a cÃ¡c háº±ng sá»‘ trong enum cÃ³ thá»ƒ Ä‘Æ°á»£c gÃ¡n giÃ¡ trá»‹ tÃ¹y Ã½ hay khÃ´ng?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "HoÃ n toÃ n khÃ´ng thá»ƒ gÃ¡n giÃ¡ trá»‹ tÃ¹y Ã½ vÃ¬ enum báº¯t buá»™c pháº£i tuÃ¢n theo thá»© tá»± sá»‘ nguyÃªn cá»‘ Ä‘á»‹nh tá»« 0." },
      { id: 'B', text: "CÃ³ thá»ƒ gÃ¡n giÃ¡ trá»‹ sá»‘ nguyÃªn báº¥t ká»³ tÃ¹y Ã½, cÃ¡c pháº§n tá»­ Ä‘á»©ng sau khÃ´ng gÃ¡n sáº½ tá»± Ä‘á»™ng tÄƒng tiáº¿p 1." },
      { id: 'C', text: "Chá»‰ cÃ³ pháº§n tá»­ Ä‘áº§u tiÃªn má»›i Ä‘Æ°á»£c phÃ©p gÃ¡n giÃ¡ trá»‹ cÃ²n táº¥t cáº£ cÃ¡c pháº§n tá»­ sau pháº£i tá»± Ä‘á»™ng tÄƒng." },
      { id: 'D', text: "CÃ³ thá»ƒ gÃ¡n báº¥t ká»³ kiá»ƒu dá»¯ liá»‡u nÃ o ká»ƒ cáº£ chuá»—i kÃ½ tá»± hoáº·c cÃ¡c sá»‘ thá»±c dáº¥u pháº©y Ä‘á»™ng dáº¡ng float." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.457 vÃ  HCMUTE tr.181: CÃ¡c má»¥c trong enum lÃ  háº±ng sá»‘ nguyÃªn. Ta cÃ³ thá»ƒ gÃ¡n giÃ¡ trá»‹ nguyÃªn tÃ¹y Ã½ (ká»ƒ cáº£ sá»‘ Ã¢m hay trÃ¹ng nhau). Pháº§n tá»­ káº¿ tiáº¿p sáº½ báº±ng pháº§n tá»­ trÆ°á»›c + 1.",
    tags: ["c-lang", "ch7", "theory", "easy"],
    reference: {
      uttPage: 'Trang 457',
      hcmutePage: 'Trang 181',
      section: '7.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-012',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cáº¥u trÃºc tá»± trá» (Self-referential structure) trong C thÆ°á»ng Ä‘Æ°á»£c Ã¡p dá»¥ng Ä‘á»ƒ xÃ¢y dá»±ng cáº¥u trÃºc nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "CÃ¡c máº£ng tÄ©nh cÃ³ kÃ­ch thÆ°á»›c cá»‘ Ä‘á»‹nh Ä‘Æ°á»£c cáº¥p phÃ¡t trá»±c tiáº¿p trÃªn bá»™ nhá»› ngÄƒn xáº¿p Call Stack." },
      { id: 'B', text: "CÃ¡c khá»‘i lá»‡nh Ä‘iá»u khiá»ƒn ráº½ nhÃ¡nh phá»©c táº¡p thay tháº¿ hoÃ n toÃ n cho cÃ¢u lá»‡nh lá»±a chá»n switch-case." },
      { id: 'C', text: "CÃ¡c cáº¥u trÃºc dá»¯ liá»‡u Ä‘á»™ng nhÆ° danh sÃ¡ch liÃªn káº¿t Ä‘Æ¡n, cÃ¢y nhá»‹ phÃ¢n tÃ¬m kiáº¿m hoáº·c Ä‘á»“ thá»‹ liÃªn thÃ´ng." },
      { id: 'D', text: "CÃ¡c bá»™ Ä‘á»‡m nháº­p xuáº¥t dá»¯ liá»‡u tá»‘c Ä‘á»™ cao dÃ¹ng cho cÃ¡c thiáº¿t bá»‹ pháº§n cá»©ng ngoáº¡i vi cá»§a mÃ¡y tÃ­nh." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.440 vÃ  HCMUTE tr.172: Struct tá»± trá» (chá»©a con trá» trá» tá»›i chÃ­nh kiá»ƒu struct Ä‘Ã³, vd `struct Node *next;`) lÃ  ná»n táº£ng cá»§a danh sÃ¡ch liÃªn káº¿t, cÃ¢y, stack, queue.",
    tags: ["c-lang", "ch7", "theory", "medium"],
    reference: {
      uttPage: 'Trang 440',
      hcmutePage: 'Trang 172',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-013',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "KÃ­ch thÆ°á»›c in ra cá»§a cáº¥u trÃºc struct cÃ³ Ä‘á»™n bá»™ nhá»› (Padding) sau Ä‘Ã¢y trÃªn há»‡ 32/64-bit lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

struct Data {
    char c;
    int i;
};

int main(void) {
    printf("%zu", sizeof(struct Data));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 5 (báº±ng Ä‘Ãºng tá»•ng sá»‘ byte thá»±c táº¿ cá»§a char 1 byte cá»™ng vá»›i int 4 bytes khÃ´ng Ä‘á»‡m)." },
      { id: 'B', text: "In ra sá»‘ 4 (trÃ¬nh biÃªn dá»‹ch tá»± Ä‘á»™ng nÃ©n biáº¿n char vÃ o chung Ã´ nhá»› vá»›i biáº¿n sá»‘ nguyÃªn int)." },
      { id: 'C', text: "In ra sá»‘ 16 (trÃ¬nh biÃªn dá»‹ch luÃ´n cÄƒn lá» má»i cáº¥u trÃºc theo chuáº©n khá»‘i nhá»› bá»™i sá»‘ 16 bytes)." },
      { id: 'D', text: "In ra sá»‘ 8 (char chiáº¿m 1 byte kÃ¨m 3 bytes Ä‘á»‡m Ä‘á»ƒ cÄƒn lá» cho int 4 bytes; tá»•ng lÃ  8 bytes)." },
    ],
    correctAnswers: ['D'],
    explanation: "int i yÃªu cáº§u cÄƒn lá» 4 bytes. char c (1 byte) Ä‘Æ°á»£c Ä‘á»‡m thÃªm 3 bytes (padding). Do Ä‘Ã³ `sizeof(struct Data)` lÃ  1 + 3 + 4 = 8 bytes.",
    tags: ["c-lang", "ch7", "output", "hard"],
    reference: {
      uttPage: 'Trang 428',
      hcmutePage: 'Trang 164',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-014',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Káº¿t quáº£ in ra cá»§a chÆ°Æ¡ng trÃ¬nh thao tÃ¡c vá»›i con trá» struct sau Ä‘Ã¢y lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

struct Point {
    int x, y;
};

int main(void) {
    struct Point p = {10, 20};
    struct Point *ptr = &p;
    ptr->x += 5;
    printf("%d %d", p.x, ptr->y);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '10 20' (viá»‡c thay Ä‘á»•i qua con trá» ptr khÃ´ng lÃ m thay Ä‘á»•i giÃ¡ trá»‹ cá»§a biáº¿n cáº¥u trÃºc gá»‘c p)." },
      { id: 'B', text: "In ra '15 20' (toÃ¡n tá»­ ptr->x += 5 lÃ m thay Ä‘á»•i trá»±c tiáº¿p giÃ¡ trá»‹ trÆ°á»ng x cá»§a biáº¿n cáº¥u trÃºc p)." },
      { id: 'C', text: "In ra '15 25' (cáº£ hai trÆ°á»ng x vÃ  y Ä‘á»u Ä‘á»“ng thá»i Ä‘Æ°á»£c tÄƒng thÃªm 5 Ä‘Æ¡n vá»‹ qua con trá» ptr)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do khÃ´ng thá»ƒ sá»­ dá»¥ng toÃ¡n tá»­ mÅ©i tÃªn trÃªn con trá» cáº¥u trÃºc." },
    ],
    correctAnswers: ['B'],
    explanation: "ptr trá» tá»›i p. ptr->x += 5 tÄƒng p.x tá»« 10 lÃªn 15. ptr->y giá»¯ nguyÃªn lÃ  20. In ra '15 20'.",
    tags: ["c-lang", "ch7", "output", "easy"],
    reference: {
      uttPage: 'Trang 431',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-015',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "KÃ­ch thÆ°á»›c in ra cá»§a biáº¿n há»£p nháº¥t union sau Ä‘Ã¢y lÃ  bao nhiÃªu bytes?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

union TapHop {
    char c;
    int i;
    double d;
};

int main(void) {
    printf("%zu", sizeof(union TapHop));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 8 (kÃ­ch thÆ°á»›c cá»§a union báº±ng kÃ­ch thÆ°á»›c cá»§a thÃ nh viÃªn lá»›n nháº¥t lÃ  double chiáº¿m 8 bytes)." },
      { id: 'B', text: "In ra sá»‘ 13 (báº±ng tá»•ng kÃ­ch thÆ°á»›c cá»§a táº¥t cáº£ cÃ¡c trÆ°á»ng: char 1 + int 4 + double 8 = 13 bytes)." },
      { id: 'C', text: "In ra sá»‘ 4 (do kiá»ƒu dá»¯ liá»‡u int cÃ³ má»©c Ä‘á»™ sá»­ dá»¥ng phá»• biáº¿n nháº¥t trong cÃ¡c phÃ©p toÃ¡n sá»‘ há»c)." },
      { id: 'D', text: "In ra sá»‘ 1 (do thÃ nh viÃªn char Ä‘Æ°á»£c khai bÃ¡o á»Ÿ dÃ²ng Ä‘áº§u tiÃªn cá»§a cáº¥u trÃºc há»£p nháº¥t dá»¯ liá»‡u)." },
    ],
    correctAnswers: ['A'],
    explanation: "KÃ­ch thÆ°á»›c cá»§a union báº±ng kÃ­ch thÆ°á»›c cá»§a thÃ nh viÃªn lá»›n nháº¥t. á»ž Ä‘Ã¢y double chiáº¿m 8 bytes, lá»›n hÆ¡n char (1) vÃ  int (4). Do Ä‘Ã³ `sizeof` lÃ  8 bytes.",
    tags: ["c-lang", "ch7", "output", "hard"],
    reference: {
      uttPage: 'Trang 451',
      hcmutePage: 'Trang 175',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-016',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "GiÃ¡ trá»‹ in ra cá»§a háº±ng sá»‘ THU_TU trong kiá»ƒu liá»‡t kÃª enum sau lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

enum Ngay { HAI = 2, BA, TU, NAM = 10, SAU };

int main(void) {
    printf("%d %d", TU, SAU);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '2 5' (cÃ¡c pháº§n tá»­ trong enum luÃ´n Ä‘Æ°á»£c Ä‘Ã¡nh sá»‘ tuáº§n tá»± báº¯t Ä‘áº§u tá»« giÃ¡ trá»‹ gá»‘c lÃ  0)." },
      { id: 'B', text: "In ra '4 11' (BA tá»± Ä‘á»™ng tÄƒng thÃ nh 3, TU tÄƒng thÃ nh 4; SAU tÄƒng tá»« NAM 10 thÃ nh 11)." },
      { id: 'C', text: "In ra '4 6' (giÃ¡ trá»‹ cá»§a SAU Ä‘Æ°á»£c tÃ­nh tiáº¿p ná»‘i theo chá»‰ sá»‘ pháº§n tá»­ tá»± nhiÃªn thá»© sÃ¡u)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do khÃ´ng Ä‘Æ°á»£c phÃ©p gÃ¡n giÃ¡ trá»‹ khÃ´ng liÃªn tá»¥c trong enum." },
    ],
    correctAnswers: ['B'],
    explanation: "HAI=2 -> BA=3, TU=4. NAM=10 -> SAU=11. In ra '4 11'.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 457',
      hcmutePage: 'Trang 181',
      section: '7.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-017',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "GiÃ¡ trá»‹ in ra cá»§a máº£ng cÃ¡c cáº¥u trÃºc struct sau khi thá»±c thi lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

struct Item {
    int id;
    int val;
};

int main(void) {
    struct Item list[2] = {{1, 10}, {2, 20}};
    printf("%d", list[0].val + list[1].val);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 3 (tá»•ng giÃ¡ trá»‹ cá»§a hai trÆ°á»ng Ä‘á»‹nh danh mÃ£ id cá»§a hai pháº§n tá»­ trong máº£ng: 1+2=3)." },
      { id: 'B', text: "In ra sá»‘ 33 (tá»•ng cá»§a toÃ n bá»™ táº¥t cáº£ bá»‘n trÆ°á»ng dá»¯ liá»‡u cÃ³ trong máº£ng cáº¥u trÃºc hai pháº§n tá»­)." },
      { id: 'C', text: "In ra sá»‘ 30 (tá»•ng giÃ¡ trá»‹ cá»§a hai trÆ°á»ng val: list[0].val lÃ  10 vÃ  list[1].val lÃ  20: 10+20=30)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do khÃ´ng thá»ƒ khá»Ÿi táº¡o máº£ng cáº¥u trÃºc báº±ng cÃ¡c cáº·p ngoáº·c nhá»n." },
    ],
    correctAnswers: ['C'],
    explanation: "list[0].val = 10, list[1].val = 20. Tá»•ng = 10 + 20 = 30.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 432',
      hcmutePage: 'Trang 167',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-018',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Hiá»‡n tÆ°á»£ng ghi Ä‘Ã¨ Ã´ nhá»› trong union: Káº¿t quáº£ in ra cá»§a Ä‘oáº¡n chÆ°Æ¡ng trÃ¬nh sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

union Test {
    int x;
    char c;
};

int main(void) {
    union Test t;
    t.x = 0;
    t.c = 'A'; // 'A' co ma ASCII la 65
    printf("%d", t.x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 0 (giÃ¡ trá»‹ cá»§a biáº¿n x Ä‘Æ°á»£c báº£o toÃ n nguyÃªn váº¹n vÃ  khÃ´ng bá»‹ áº£nh hÆ°á»Ÿng bá»Ÿi phÃ©p gÃ¡n t.c)." },
      { id: 'B', text: "In ra kÃ½ tá»± 'A' (hÃ m printf tá»± Ä‘á»™ng phÃ¡t hiá»‡n kiá»ƒu dá»¯ liá»‡u Ä‘Æ°á»£c gÃ¡n gáº§n nháº¥t Ä‘á»ƒ hiá»ƒn thá»‹ ra)." },
      { id: 'C', text: "ChÆ°Æ¡ng trÃ¬nh sáº­p do hai kiá»ƒu dá»¯ liá»‡u int vÃ  char cÃ³ kÃ­ch thÆ°á»›c khÃ´ng tÆ°Æ¡ng thÃ­ch trong union." },
      { id: 'D', text: "In ra sá»‘ 65 (thao tÃ¡c gÃ¡n t.c = 'A' ghi mÃ£ 65 vÃ o byte Ä‘áº§u tiÃªn cá»§a vÃ¹ng nhá»› dÃ¹ng chung biáº¿n x)." },
    ],
    correctAnswers: ['D'],
    explanation: "TrÃªn kiáº¿n trÃºc Little Endian, byte tháº¥p cá»§a t.x (Ä‘ang báº±ng 0) bá»‹ ghi Ä‘Ã¨ bá»Ÿi 'A' (65 = 0x41). t.x trá»Ÿ thÃ nh 65. In ra 65.",
    tags: ["c-lang", "ch7", "output", "hard"],
    reference: {
      uttPage: 'Trang 452',
      hcmutePage: 'Trang 176',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-019',
    chapterId: 7,
    articleId: 'c-art-ch7-04',
    content: "ChÆ°Æ¡ng trÃ¬nh sá»­ dá»¥ng typedef cho con trá» sau Ä‘Ã¢y sáº½ in ra káº¿t quáº£ sá»‘ há»c nÃ o?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

typedef int* IntPtr;

int main(void) {
    int a = 50;
    IntPtr p = &a;
    *p = 80;
    printf("%d", a);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 80 (IntPtr lÃ  bÃ­ danh cá»§a int*, giáº£i tham chiáº¿u *p = 80 lÃ m thay Ä‘á»•i giÃ¡ trá»‹ cá»§a biáº¿n a)." },
      { id: 'B', text: "In ra sá»‘ 50 (biáº¿n a giá»¯ nguyÃªn giÃ¡ trá»‹ ban Ä‘áº§u do IntPtr chá»‰ lÃ  má»™t kiá»ƒu dá»¯ liá»‡u hÃ¬nh thá»©c)." },
      { id: 'C', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do tá»« khÃ³a typedef khÃ´ng cho phÃ©p Ä‘á»‹nh nghÄ©a bÃ­ danh cho con trá»." },
      { id: 'D', text: "In ra Ä‘á»‹a chá»‰ Ã´ nhá»› cá»§a biáº¿n a trÃªn phÃ¢n vÃ¹ng bá»™ nhá»› ngÄƒn xáº¿p dÆ°á»›i dáº¡ng sá»‘ nguyÃªn cÆ¡ sá»‘ mÆ°á»i." },
    ],
    correctAnswers: ['A'],
    explanation: "IntPtr lÃ  alias cá»§a `int *`. `IntPtr p = &a;` tÆ°Æ¡ng Ä‘Æ°Æ¡ng `int *p = &a;`. `*p = 80;` lÃ m a = 80.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 461',
      hcmutePage: 'Trang 185',
      section: '7.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-020',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Sao chÃ©p cáº¥u trÃºc lá»“ng nhau: Äoáº¡n chÆ°Æ¡ng trÃ¬nh sau Ä‘Ã¢y in ra káº¿t quáº£ nÃ o?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

struct Diem {
    int x, y;
};

struct Hinh {
    struct Diem p1;
};

int main(void) {
    struct Hinh h1 = {{3, 4}};
    struct Hinh h2 = h1;
    h2.p1.x = 9;
    printf("%d %d", h1.p1.x, h2.p1.x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '9 9' (h1 vÃ  h2 chia sáº» chung vÃ¹ng nhá»› cáº¥u trÃºc lá»“ng nhau nÃªn thay Ä‘á»•i h2 lÃ m Ä‘á»•i cáº£ h1)." },
      { id: 'B', text: "In ra '3 9' (phÃ©p gÃ¡n h2 = h1 sao chÃ©p Ä‘á»™c láº­p toÃ n bá»™ dá»¯ liá»‡u, sá»­a h2 khÃ´ng áº£nh hÆ°á»Ÿng Ä‘áº¿n h1)." },
      { id: 'C', text: "In ra '3 3' (h2 khÃ´ng thá»ƒ sá»­a Ä‘á»•i giÃ¡ trá»‹ trÆ°á»ng x sau khi Ä‘Ã£ Ä‘Æ°á»£c sao chÃ©p tá»« cáº¥u trÃºc h1)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do cáº¥u trÃºc struct trong C khÃ´ng cho phÃ©p Ä‘á»‹nh nghÄ©a lá»“ng nhau." },
    ],
    correctAnswers: ['B'],
    explanation: "PhÃ©p gÃ¡n struct táº¡o ra báº£n sao Ä‘á»™c láº­p (shallow copy). Sá»­a `h2.p1.x = 9` khÃ´ng tÃ¡c Ä‘á»™ng Ä‘áº¿n `h1.p1.x` (váº«n báº±ng 3). In '3 9'.",
    tags: ["c-lang", "ch7", "output", "hard"],
    reference: {
      uttPage: 'Trang 427',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-021',
    chapterId: 7,
    articleId: 'c-art-ch7-03',
    content: "GiÃ¡ trá»‹ cá»§a biáº¿n boolean cá» tráº¡ng thÃ¡i sá»­ dá»¥ng enum sau Ä‘Ã¢y in ra káº¿t quáº£ gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

typedef enum { FALSE = 0, TRUE = 1 } Bool;

int main(void) {
    Bool status = TRUE;
    printf("%d", status && FALSE);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 1 (do biáº¿n status Ä‘Æ°á»£c khá»Ÿi táº¡o ban Ä‘áº§u mang giÃ¡ trá»‹ TRUE cÃ³ Ä‘á»™ Æ°u tiÃªn cao hÆ¡n)." },
      { id: 'B', text: "In ra chuá»—i 'FALSE' (hÃ m printf tá»± Ä‘á»™ng chuyá»ƒn Ä‘á»•i giÃ¡ trá»‹ enum thÃ nh chuá»—i vÄƒn báº£n tÆ°Æ¡ng á»©ng)." },
      { id: 'C', text: "In ra sá»‘ 0 (phÃ©p toÃ¡n logic AND giá»¯a TRUE cÃ³ giÃ¡ trá»‹ 1 vÃ  FALSE cÃ³ giÃ¡ trá»‹ 0 cho ra káº¿t quáº£ 0)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do kiá»ƒu enum khÃ´ng thá»ƒ tham gia vÃ o cÃ¡c biá»ƒu thá»©c logic AND." },
    ],
    correctAnswers: ['C'],
    explanation: "status lÃ  1 (TRUE). 1 && 0 (FALSE) = 0. In ra 0.",
    tags: ["c-lang", "ch7", "output", "medium"],
    reference: {
      uttPage: 'Trang 458',
      hcmutePage: 'Trang 182',
      section: '7.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-022',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Lá»—i cÃº phÃ¡p nÃ o khiáº¿n Ä‘oáº¡n mÃ£ truy xuáº¥t thÃ nh pháº§n struct qua con trá» sau bá»‹ tá»« chá»‘i biÃªn dá»‹ch?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `struct SinhVien {
    int id;
};
struct SinhVien sv = {101};
struct SinhVien *ptr = &sv;
printf("%d", ptr.id);`,
    options: [
      { id: 'A', text: "Biáº¿n con trá» ptr khÃ´ng Ä‘Æ°á»£c phÃ©p trá» tá»›i Ä‘á»‹a chá»‰ cá»§a má»™t biáº¿n cáº¥u trÃºc Ä‘Ã£ Ä‘Æ°á»£c khá»Ÿi táº¡o." },
      { id: 'B', text: "Thiáº¿u tá»« khÃ³a typedef trÆ°á»›c Ä‘á»‹nh nghÄ©a cáº¥u trÃºc SinhVien Ä‘á»ƒ trÃ¬nh biÃªn dá»‹ch nháº­n diá»‡n kiá»ƒu." },
      { id: 'C', text: "HÃ m printf khÃ´ng thá»ƒ in Ä‘Æ°á»£c cÃ¡c trÆ°á»ng dá»¯ liá»‡u sá»‘ nguyÃªn cá»§a biáº¿n cáº¥u trÃºc qua con trá»." },
      { id: 'D', text: "Sá»­ dá»¥ng nháº§m toÃ¡n tá»­ cháº¥m '.' cho con trá» struct, báº¯t buá»™c pháº£i dÃ¹ng toÃ¡n tá»­ mÅ©i tÃªn 'ptr->id'." },
    ],
    correctAnswers: ['D'],
    explanation: "Báº«y cÃº phÃ¡p kinh Ä‘iá»ƒn: `ptr` lÃ  con trá» struct, pháº£i dÃ¹ng `ptr->id` hoáº·c `(*ptr).id`. DÃ¹ng `ptr.id` gÃ¢y lá»—i biÃªn dá»‹ch 'request for member 'id' in something not a structure or union'.",
    tags: ["c-lang", "ch7", "debug", "easy"],
    reference: {
      uttPage: 'Trang 430',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-023',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "VÃ¬ sao Ä‘á»‹nh nghÄ©a cáº¥u trÃºc tá»± trá» sau Ä‘Ã¢y phÃ¡t sinh lá»—i biÃªn dá»‹ch nghiÃªm trá»ng?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `struct Node {
    int data;
    struct Node next; // Bi loi bien dich
};`,
    options: [
      { id: 'A', text: "Khai bÃ¡o trÆ°á»ng chá»©a trá»±c tiáº¿p má»™t biáº¿n struct Node khiáº¿n cáº¥u trÃºc cÃ³ kÃ­ch thÆ°á»›c vÃ´ háº¡n khÃ´ng xÃ¡c Ä‘á»‹nh." },
      { id: 'B', text: "Tá»« khÃ³a struct khÃ´ng Ä‘Æ°á»£c phÃ©p xuáº¥t hiá»‡n hai láº§n bÃªn trong cÃ¹ng má»™t khá»‘i Ä‘á»‹nh nghÄ©a cáº¥u trÃºc." },
      { id: 'C', text: "TÃªn cá»§a trÆ°á»ng dá»¯ liá»‡u 'next' trÃ¹ng vá»›i má»™t tá»« khÃ³a Ä‘Æ°á»£c báº£o lÆ°u trong thÆ° viá»‡n chuáº©n cá»§a C." },
      { id: 'D', text: "TrÆ°á»ng dá»¯ liá»‡u data báº¯t buá»™c pháº£i Ä‘Æ°á»£c khai bÃ¡o á»Ÿ dÃ²ng cuá»‘i cÃ¹ng cá»§a cáº¥u trÃºc danh sÃ¡ch liÃªn káº¿t." },
    ],
    correctAnswers: ['A'],
    explanation: "Struct khÃ´ng thá»ƒ chá»©a chÃ­nh nÃ³ theo giÃ¡ trá»‹ (infinite size recursion). Pháº£i chá»©a CON TRá»Ž trá» tá»›i chÃ­nh nÃ³: `struct Node *next;` (kÃ­ch thÆ°á»›c con trá» luÃ´n cá»‘ Ä‘á»‹nh 4/8 bytes).",
    tags: ["c-lang", "ch7", "debug", "medium"],
    reference: {
      uttPage: 'Trang 441',
      hcmutePage: 'Trang 172',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-024',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Äoáº¡n chÆ°Æ¡ng trÃ¬nh sau Ä‘Ã¢y phÃ¡t sinh lá»—i nghiÃªm trá»ng nÃ o khi thá»±c hiá»‡n cÃ¢u lá»‡nh gÃ¡n chuá»—i?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `struct SinhVien {
    char ten[30];
};
struct SinhVien sv;
sv.ten = "Nguyen Van A"; // Bi loi bien dich`,
    options: [
      { id: 'A', text: "Chuá»—i \"Nguyen Van A\" cÃ³ Ä‘á»™ dÃ i vÆ°á»£t quÃ¡ dung lÆ°á»£ng 30 bytes Ä‘Ã£ khai bÃ¡o cá»§a máº£ng cáº¥u trÃºc." },
      { id: 'B', text: "Biáº¿n cáº¥u trÃºc sv báº¯t buá»™c pháº£i Ä‘Æ°á»£c cáº¥p phÃ¡t Ä‘á»™ng báº±ng malloc trÆ°á»›c khi gÃ¡n cÃ¡c trÆ°á»ng chuá»—i." },
      { id: 'C', text: "sv.ten lÃ  tÃªn máº£ng (háº±ng con trá»), khÃ´ng thá»ƒ lÃ m váº¿ trÃ¡i phÃ©p gÃ¡n; pháº£i dÃ¹ng hÃ m strcpy(sv.ten, ...)." },
      { id: 'D', text: "NgÃ´n ngá»¯ C khÃ´ng cho phÃ©p lÆ°u trá»¯ chuá»—i kÃ½ tá»± bÃªn trong cÃ¡c thÃ nh viÃªn cá»§a má»™t cáº¥u trÃºc struct." },
    ],
    correctAnswers: ['C'],
    explanation: "Báº«y gÃ¡n máº£ng chuá»—i trong struct: `sv.ten` lÃ  máº£ng cá»‘ Ä‘á»‹nh, khÃ´ng thá»ƒ gÃ¡n báº±ng toÃ¡n tá»­ `=`. Cáº§n dÃ¹ng `strcpy(sv.ten, \"Nguyen Van A\");` hoáº·c gÃ¡n khi khá»Ÿi táº¡o `struct SinhVien sv = {\"Nguyen Van A\"};`.",
    tags: ["c-lang", "ch7", "debug", "medium"],
    reference: {
      uttPage: 'Trang 426',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch7-025',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Lá»—i cÃº phÃ¡p nÃ o thÆ°á»ng gáº·p nháº¥t khi káº¿t thÃºc khá»‘i Ä‘á»‹nh nghÄ©a struct trong ngÃ´n ngá»¯ C?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "QuÃªn khai bÃ¡o Ã­t nháº¥t má»™t biáº¿n cáº¥u trÃºc Ä‘i kÃ¨m ngay sau dáº¥u ngoáº·c nhá»n Ä‘Ã³ng cá»§a cáº¥u trÃºc." },
      { id: 'B', text: "QuÃªn Ä‘áº·t dáº¥u cháº¥m pháº©y ';' ngay sau dáº¥u ngoáº·c nhá»n Ä‘Ã³ng '}' cá»§a khá»‘i Ä‘á»‹nh nghÄ©a cáº¥u trÃºc." },
      { id: 'C', text: "Sá»­ dá»¥ng dáº¥u ngoáº·c Ä‘Æ¡n thay vÃ¬ dáº¥u ngoáº·c nhá»n Ä‘á»ƒ bao quanh toÃ n bá»™ cÃ¡c trÆ°á»ng cá»§a cáº¥u trÃºc." },
      { id: 'D', text: "Thiáº¿u tá»« khÃ³a endstruct Ä‘áº·t á»Ÿ dÃ²ng lá»‡nh cuá»‘i cÃ¹ng Ä‘á»ƒ thÃ´ng bÃ¡o káº¿t thÃºc Ä‘á»‹nh nghÄ©a cáº¥u trÃºc." },
    ],
    correctAnswers: ['B'],
    explanation: "Äá»‹nh nghÄ©a struct trong C báº¯t buá»™c káº¿t thÃºc báº±ng dáº¥u cháº¥m pháº©y: `struct Name { ... };`. Thiáº¿u dáº¥u ';' sáº½ dáº«n Ä‘áº¿n lá»—i biÃªn dá»‹ch á»Ÿ dÃ²ng tiáº¿p theo.",
    tags: ["c-lang", "ch7", "debug", "easy"],
    reference: {
      uttPage: 'Trang 423',
      hcmutePage: 'Trang 160',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-026',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "VÃ¬ sao phÃ©p so sÃ¡nh trá»±c tiáº¿p 'if (sv1 == sv2)' bá»‹ trÃ¬nh biÃªn dá»‹ch tá»« chá»‘i vÃ  bÃ¡o lá»—i?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Do hai biáº¿n cáº¥u trÃºc sv1 vÃ  sv2 luÃ´n luÃ´n náº±m á»Ÿ hai Ä‘á»‹a chá»‰ Ã´ nhá»› hoÃ n toÃ n khÃ¡c nhau trÃªn RAM." },
      { id: 'B', text: "Do toÃ¡n tá»­ == chá»‰ cÃ³ thá»ƒ Ã¡p dá»¥ng cho cÃ¡c kiá»ƒu dá»¯ liá»‡u do ngÆ°á»i dÃ¹ng tá»± Ä‘á»‹nh nghÄ©a báº±ng typedef." },
      { id: 'C', text: "NgÃ´n ngá»¯ C khÃ´ng Ä‘á»‹nh nghÄ©a toÃ¡n tá»­ == cho kiá»ƒu struct vÃ¬ sá»± hiá»‡n diá»‡n cá»§a cÃ¡c byte Ä‘á»‡m rÃ¡c (padding)." },
      { id: 'D', text: "Do cáº¥u trÃºc struct khÃ´ng há»— trá»£ phÃ©p so sÃ¡nh náº¿u cÃ³ chá»©a trÆ°á»ng dá»¯ liá»‡u kiá»ƒu sá»‘ thá»±c dáº¥u pháº©y Ä‘á»™ng." },
    ],
    correctAnswers: ['C'],
    explanation: "Chuáº©n C cáº¥m so sÃ¡nh `sv1 == sv2`. Struct cÃ³ thá»ƒ chá»©a cÃ¡c byte padding rÃ¡c nÃªn so sÃ¡nh bit-by-bit (memcmp) khÃ´ng tin cáº­y. Muá»‘n so sÃ¡nh, láº­p trÃ¬nh viÃªn pháº£i tá»± so sÃ¡nh tá»«ng trÆ°á»ng cá»¥ thá»ƒ.",
    tags: ["c-lang", "ch7", "debug", "medium"],
    reference: {
      uttPage: 'Trang 427',
      hcmutePage: 'Trang 163',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-027',
    chapterId: 7,
    articleId: 'c-art-ch7-02',
    content: "Äoáº¡n mÃ£ sau máº¯c pháº£i lá»—i suy diá»…n nÃ o vá» dá»¯ liá»‡u khi sá»­ dá»¥ng há»£p nháº¥t union?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `union DuLieu {
    int i;
    float f;
};
union DuLieu data;
data.i = 10;
data.f = 2.5f;
printf("%d", data.i);`,
    options: [
      { id: 'A', text: "Kiá»ƒu dá»¯ liá»‡u float khÃ´ng Ä‘Æ°á»£c phÃ©p khai bÃ¡o bÃªn trong má»™t cáº¥u trÃºc há»£p nháº¥t union cá»§a ngÃ´n ngá»¯ C." },
      { id: 'B', text: "HÃ m printf khÃ´ng thá»ƒ in Ä‘Æ°á»£c thÃ nh viÃªn sá»‘ nguyÃªn int náº¿u nÃ³ Ä‘Æ°á»£c khai bÃ¡o trÆ°á»›c thÃ nh viÃªn float." },
      { id: 'C', text: "Thiáº¿u cÃ¢u lá»‡nh giáº£i phÃ³ng bá»™ nhá»› Ä‘á»™ng giá»¯a hai lÆ°á»£t gÃ¡n giÃ¡ trá»‹ cho hai trÆ°á»ng thÃ nh viÃªn khÃ¡c nhau." },
      { id: 'D', text: "Ká»³ vá»ng data.i váº«n giá»¯ giÃ¡ trá»‹ 10 trong khi phÃ©p gÃ¡n data.f = 2.5f Ä‘Ã£ ghi Ä‘Ã¨ toÃ n bá»™ vÃ¹ng nhá»› chung." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong union, data.i vÃ  data.f chung 4 bytes nhá»›. Khi gÃ¡n `data.f = 2.5f`, dáº¡ng biá»ƒu diá»…n nhá»‹ phÃ¢n IEEE 754 cá»§a float ghi Ä‘Ã¨ lÃªn Ã´ nhá»›, khiáº¿n `data.i` bá»‹ sai lá»‡ch hoÃ n toÃ n, khÃ´ng cÃ²n lÃ  10.",
    tags: ["c-lang", "ch7", "debug", "hard"],
    reference: {
      uttPage: 'Trang 452',
      hcmutePage: 'Trang 176',
      section: '7.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-028',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cáº§n Ä‘iá»n toÃ¡n tá»­ nÃ o vÃ o vá»‹ trÃ­ (...) Ä‘á»ƒ truy xuáº¥t trÆ°á»ng tuoi thÃ´ng qua biáº¿n con trá» struct pSv?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `struct SinhVien *pSv = &sv;
printf("%d", pSv...tuoi);`,
    options: [
      { id: 'A', text: "Äiá»n toÃ¡n tá»­ mÅ©i tÃªn '->' Ä‘á»ƒ giáº£i tham chiáº¿u con trá» cáº¥u trÃºc vÃ  truy xuáº¥t thÃ nh viÃªn chá»‰ Ä‘á»‹nh." },
      { id: 'B', text: "Äiá»n toÃ¡n tá»­ dáº¥u cháº¥m '.' Ä‘á»ƒ truy cáº­p trá»±c tiáº¿p thÃ nh pháº§n cá»§a cáº¥u trÃºc dá»¯ liá»‡u Ä‘ang xÃ©t." },
      { id: 'C', text: "Äiá»n toÃ¡n tá»­ hai dáº¥u hai cháº¥m '::' Ä‘á»ƒ Ä‘á»‹nh vá»‹ trÆ°á»ng thuá»™c tÃ­nh trong khÃ´ng gian tÃªn struct." },
      { id: 'D', text: "Äiá»n toÃ¡n tá»­ dáº¥u sao '*' Ä‘á»ƒ kÃ­ch hoáº¡t thao tÃ¡c giáº£i tham chiáº¿u Ã´ nhá»› trÆ°á»›c khi truy xuáº¥t trÆ°á»ng." },
    ],
    correctAnswers: ['A'],
    explanation: "Con trá» struct dÃ¹ng toÃ¡n tá»­ `->` Ä‘á»ƒ truy xuáº¥t trÆ°á»ng: `pSv->tuoi`.",
    tags: ["c-lang", "ch7", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 430',
      hcmutePage: 'Trang 166',
      section: '7.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-029',
    chapterId: 7,
    articleId: 'c-art-ch7-04',
    content: "Cáº§n Ä‘iá»n tá»« khÃ³a nÃ o vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ Ä‘á»‹nh nghÄ©a má»™t bÃ­ danh má»›i TenMoi cho kiá»ƒu dá»¯ liá»‡u int?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `... int TenMoi;
TenMoi x = 100;`,
    options: [
      { id: 'A', text: "Äiá»n tá»« khÃ³a 'define' Ä‘á»ƒ táº¡o macro tiá»n xá»­ lÃ½ thay tháº¿ chuá»—i kÃ½ tá»± trong toÃ n bá»™ tá»‡p mÃ£ nguá»“n." },
      { id: 'B', text: "Äiá»n tá»« khÃ³a 'typedef' Ä‘á»ƒ thiáº¿t láº­p má»™t Ä‘á»‹nh danh bÃ­ danh kiá»ƒu dá»¯ liá»‡u há»£p lá»‡ trong ngÃ´n ngá»¯ C." },
      { id: 'C', text: "Äiá»n tá»« khÃ³a 'alias' Ä‘á»ƒ Ã¡nh xáº¡ trá»±c tiáº¿p kiá»ƒu dá»¯ liá»‡u nguyÃªn thá»§y sang má»™t tÃªn gá»i ngÆ°á»i dÃ¹ng má»›i." },
      { id: 'D', text: "Äiá»n tá»« khÃ³a 'struct' Ä‘á»ƒ Ä‘Ã³ng gÃ³i kiá»ƒu dá»¯ liá»‡u sá»‘ nguyÃªn int vÃ o má»™t cáº¥u trÃºc dá»¯ liá»‡u má»›i táº¡o." },
    ],
    correctAnswers: ['B'],
    explanation: "CÃº phÃ¡p: `typedef int TenMoi;` táº¡o alias TenMoi cho kiá»ƒu int.",
    tags: ["c-lang", "ch7", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 460',
      hcmutePage: 'Trang 184',
      section: '7.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch7-030',
    chapterId: 7,
    articleId: 'c-art-ch7-01',
    content: "Cáº§n Ä‘iá»n kiá»ƒu dá»¯ liá»‡u nÃ o vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ hoÃ n thiá»‡n nÃºt liÃªn káº¿t Ä‘Æ¡n tá»± trá» chuáº©n trong C?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `struct Node {
    int data;
    ... next;
};`,
    options: [
      { id: 'A', text: "Äiá»n 'struct Node' Ä‘á»ƒ nhÃºng trá»±c tiáº¿p toÃ n bá»™ má»™t Ä‘á»‘i tÆ°á»£ng nÃºt má»›i vÃ o trong pháº§n tá»­ hiá»‡n táº¡i." },
      { id: 'B', text: "Äiá»n 'void*' Ä‘á»ƒ táº¡o ra má»™t con trá» tá»•ng quÃ¡t khÃ´ng thá»ƒ xÃ¡c Ä‘á»‹nh kiá»ƒu liÃªn káº¿t cá»§a danh sÃ¡ch." },
      { id: 'C', text: "Äiá»n 'struct Node*' Ä‘á»ƒ táº¡o ra má»™t trÆ°á»ng con trá» lÆ°u trá»¯ Ä‘á»‹a chá»‰ cá»§a pháº§n tá»­ nÃºt káº¿ tiáº¿p." },
      { id: 'D', text: "Äiá»n 'int*' Ä‘á»ƒ trá» tá»›i trÆ°á»ng dá»¯ liá»‡u sá»‘ nguyÃªn cá»§a pháº§n tá»­ tiáº¿p theo trong chuá»—i liÃªn káº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "Cáº¥u trÃºc danh sÃ¡ch liÃªn káº¿t tá»± trá»: `struct Node *next;`.",
    tags: ["c-lang", "ch7", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 441',
      hcmutePage: 'Trang 172',
      section: '7.1',
    },
    mockExamPreset: false,
  },
];
