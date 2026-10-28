/**
 * src/subjects/c-lang/data/questions/questions-ch2.ts
 * NgÃ¢n hÃ ng cÃ¢u há»i tráº¯c nghiá»‡m ChuyÃªn sÃ¢u ChÆ°Æ¡ng 2: Kiá»ƒu dá»¯ liá»‡u, Biá»ƒu thá»©c & VÃ o/Ra chuáº©n
 * Sá»‘ lÆ°á»£ng: 30 cÃ¢u há»i chuáº©n hÃ³a
 * Báº£n quyá»n dá»¯ liá»‡u há»c táº­p Äáº¡i há»c SÆ° pháº¡m Ká»¹ thuáº­t TP.HCM (HCMUTE)
 * TuÃ¢n thá»§ 100% TiÃªu chuáº©n Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh2: CQuestion[] = [
  {
    id: 'q-c-ch2-001',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "KÃ­ch thÆ°á»›c bá»™ nhá»› chuáº©n cá»§a kiá»ƒu dá»¯ liá»‡u char trong ngÃ´n ngá»¯ C luÃ´n lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "CÃ³ kÃ­ch thÆ°á»›c 2 bytes Ä‘á»ƒ há»— trá»£ báº£ng mÃ£ Unicode 16-bit má»Ÿ rá»™ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "CÃ³ kÃ­ch thÆ°á»›c 4 bytes trÃªn kiáº¿n trÃºc há»‡ thá»‘ng mÃ¡y tÃ­nh 32-bit vÃ  64-bit má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "LuÃ´n cÃ³ kÃ­ch thÆ°á»›c chÃ­nh xÃ¡c lÃ  1 byte theo Ä‘á»‹nh nghÄ©a chuáº©n cá»§a ngÃ´n ngá»¯." },
      { id: 'D', text: "KÃ­ch thÆ°á»›c phá»¥ thuá»™c hoÃ n toÃ n vÃ o cáº¥u hÃ¬nh cá»§a tá»«ng trÃ¬nh biÃªn dá»‹ch cá»¥ thá»ƒ." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.89 vÃ  HCMUTE tr.31: sizeof(char) luÃ´n Ä‘Æ°á»£c ngÃ´n ngá»¯ C Ä‘á»‹nh nghÄ©a báº±ng 1 byte.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-002',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Trong láº­p trÃ¬nh C trÃªn mÃ´i trÆ°á»ng Console vá»›i thÆ° viá»‡n <conio.h>, sá»± khÃ¡c biá»‡t cá»‘t lÃµi giá»¯a hai hÃ m nháº­p kÃ½ tá»± getch() vÃ  getche() lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
        options: [
      { id: 'A', text: "getch() chá»‰ cho phÃ©p nháº­p kÃ½ tá»± sá»‘ tá»« 0 Ä‘áº¿n 9; cÃ²n getche() Ä‘á»c Ä‘Æ°á»£c toÃ n bá»™ chá»¯ cÃ¡i vÃ  cÃ¡c kÃ½ tá»± Ä‘áº·c biá»‡t cá»§a bá»™ mÃ£ ASCII." },
      { id: 'B', text: "getch() Ä‘á»c kÃ½ tá»± khÃ´ng hiá»ƒn thá»‹ mÃ n hÃ¬nh (no echo); getche() cÃ³ hiá»ƒn thá»‹ kÃ½ tá»± vá»«a nháº¥n lÃªn mÃ n hÃ¬nh (echo), khÃ´ng chá» Enter." },
      { id: 'C', text: "getch() Ä‘á»c kÃ½ tá»± tá»« bÃ n phÃ­m thÃ´ng qua vÃ¹ng Ä‘á»‡m hÃ ng Ä‘á»£i; cÃ²n getche() Ä‘á»c trá»±c tiáº¿p tá»« cá»•ng giao tiáº¿p pháº§n cá»©ng vi xá»­ lÃ½." },
      { id: 'D', text: "getch() báº¯t buá»™c ngÆ°á»i dÃ¹ng gÃµ phÃ­m Enter Ä‘á»ƒ xÃ¡c nháº­n; cÃ²n getche() thÃ¬ tá»± Ä‘á»™ng káº¿t thÃºc nháº­p sau Ä‘Ãºng 1 giÃ¢y chá» tÃ­n hiá»‡u." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.104-106: getch() Ä‘á»c ngay 1 phÃ­m nháº¥n khÃ´ng chá» Enter vÃ  khÃ´ng echo (khÃ´ng hiá»‡n) ra mÃ n hÃ¬nh. getche() cÅ©ng Ä‘á»c ngay khÃ´ng chá» Enter nhÆ°ng cÃ³ echo (hiá»ƒn thá»‹) kÃ½ tá»± Ä‘Ã³ lÃªn mÃ n hÃ¬nh. NgoÃ i ra hÃ m kbhit() trong <conio.h> dÃ¹ng Ä‘á»ƒ thÄƒm dÃ² xem ngÆ°á»i dÃ¹ng cÃ³ nháº¥n phÃ­m nÃ o hay khÃ´ng mÃ  khÃ´ng lÃ m ngháº½n luá»“ng thá»±c thi.",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 104 - 108',
      hcmutePage: 'Trang 26 - 31',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-003',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "ToÃ¡n tá»­ sizeof() trong ngÃ´n ngá»¯ C tráº£ vá» giÃ¡ trá»‹ cÃ³ kiá»ƒu dá»¯ liá»‡u chuáº©n nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Kiá»ƒu int (sá»‘ nguyÃªn cÃ³ dáº¥u thÃ´ng thÆ°á»ng cá»§a kiáº¿n trÃºc vi xá»­ lÃ½) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Kiá»ƒu long long (sá»‘ nguyÃªn lá»›n Ä‘á»ƒ trÃ¡nh bá»‹ trÃ n khi Ä‘o bá»™ nhá»›) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Kiá»ƒu size_t (sá»‘ nguyÃªn khÃ´ng dáº¥u biá»ƒu thá»‹ kÃ­ch thÆ°á»›c tÃ­nh báº±ng byte)." },
      { id: 'D', text: "Kiá»ƒu float (sá»‘ thá»±c cháº¥m Ä‘á»™ng biá»ƒu diá»…n dung lÆ°á»£ng theo megabyte) má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.94 vÃ  HCMUTE tr.36: sizeof tráº£ vá» kiá»ƒu size_t, lÃ  kiá»ƒu sá»‘ nguyÃªn khÃ´ng dáº¥u Ä‘á»‹nh nghÄ©a trong <stddef.h>.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-004',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Trong hÃ m printf() cá»§a ngÃ´n ngá»¯ C, cÃ¡c mÃ£ Ä‘á»‹nh dáº¡ng %o, %e vÃ  %g láº§n lÆ°á»£t cÃ³ Ã½ nghÄ©a Ä‘á»‹nh dáº¡ng dá»¯ liá»‡u xuáº¥t ra nhÆ° tháº¿ nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
        options: [
      { id: 'A', text: "%o Ä‘á»‹nh dáº¡ng xuáº¥t sá»‘ thá»±c cháº¥m Ä‘á»™ng; %e Ä‘á»‹nh dáº¡ng Ä‘á»‹a chá»‰ con trá» vÃ¹ng nhá»›; %g Ä‘á»‹nh dáº¡ng hiá»ƒn thá»‹ chuá»—i kÃ½ tá»± tá»•ng quÃ¡t." },
      { id: 'B', text: "%o xuáº¥t sá»‘ nguyÃªn bÃ¡t phÃ¢n (Octal); %e xuáº¥t sá»‘ thá»±c dáº¡ng sá»‘ mÅ© khoa há»c (1.23e+02); %g chá»n giá»¯a %f hoáº·c %e Ä‘á»ƒ hiá»ƒn thá»‹ ngáº¯n gá»n." },
      { id: 'C', text: "%o xuáº¥t sá»‘ nguyÃªn cÃ³ dáº¥u kiá»ƒu int; %e xuáº¥t sá»‘ nguyÃªn khÃ´ng dáº¥u kiá»ƒu unsigned; %g xuáº¥t giÃ¡ trá»‹ logic Ä‘Ãºng sai cá»§a biá»ƒu thá»©c." },
      { id: 'D', text: "%o xuáº¥t mÃ£ kÃ½ tá»± chuáº©n ASCII; %e xuáº¥t chuá»—i kÃ½ tá»± má»Ÿ rá»™ng Ä‘a dÃ²ng; %g xuáº¥t giÃ¡ trá»‹ sá»‘ nguyÃªn theo há»‡ cÆ¡ sá»‘ tháº­p lá»¥c phÃ¢n." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.114-118: %o in sá»‘ nguyÃªn á»Ÿ há»‡ cÆ¡ sá»‘ 8 (bÃ¡t phÃ¢n / octal); %e in sá»‘ thá»±c dÆ°á»›i dáº¡ng kÃ½ hiá»‡u khoa há»c (dáº¥u pháº©y Ä‘á»™ng Ä‘á»‹nh dáº¡ng e); %g tá»± Ä‘á»™ng chá»n dáº¡ng gá»n hÆ¡n giá»¯a %f vÃ  %e (tá»± Ä‘á»™ng loáº¡i bá» cÃ¡c sá»‘ 0 thá»«a á»Ÿ Ä‘uÃ´i pháº§n tháº­p phÃ¢n).",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 114 - 118',
      hcmutePage: 'Trang 26 - 31',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-005',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Quy táº¯c Ã©p kiá»ƒu ngáº§m Ä‘á»‹nh (Implicit Type Promotion) trong biá»ƒu thá»©c sá»‘ há»c cá»§a C lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tá»± Ä‘á»™ng chuyá»ƒn Ä‘á»•i toÃ¡n háº¡ng cÃ³ kiá»ƒu nhá» hÆ¡n lÃªn kiá»ƒu dá»¯ liá»‡u lá»›n hÆ¡n." },
      { id: 'B', text: "Tá»± Ä‘á»™ng lÃ m trÃ²n sá»‘ thá»±c vá» sá»‘ nguyÃªn gáº§n nháº¥t Ä‘á»ƒ tÄƒng tá»‘c tÃ­nh toÃ¡n." },
      { id: 'C', text: "LuÃ´n Æ°u tiÃªn chuyá»ƒn Ä‘á»•i táº¥t cáº£ cÃ¡c toÃ¡n háº¡ng vá» kiá»ƒu nguyÃªn int máº·c Ä‘á»‹nh." },
      { id: 'D', text: "Chuyá»ƒn Ä‘á»•i theo thá»© tá»± tá»« pháº£i sang trÃ¡i báº¥t ká»ƒ kÃ­ch thÆ°á»›c byte cá»§a biáº¿n." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.97 vÃ  HCMUTE tr.38: Khi tÃ­nh toÃ¡n biá»ƒu thá»©c há»—n há»£p, C tá»± Ä‘á»™ng nÃ¢ng cáº¥p kiá»ƒu nhá» lÃªn kiá»ƒu lá»›n hÆ¡n (char, short -> int -> unsigned -> long -> float -> double).",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 96 - 100',
      hcmutePage: 'Trang 37 - 40',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-006',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "ToÃ¡n tá»­ tiá»n tá»‘ ++x vÃ  háº­u tá»‘ x++ khÃ¡c nhau cÄƒn báº£n á»Ÿ Ä‘iá»ƒm nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "++x chá»‰ dÃ¹ng cho biáº¿n nguyÃªn, cÃ²n x++ dÃ¹ng Ä‘Æ°á»£c cho cáº£ sá»‘ thá»±c." },
      { id: 'B', text: "++x tÄƒng trÆ°á»›c rá»“i láº¥y giÃ¡ trá»‹; x++ láº¥y giÃ¡ trá»‹ cÅ© rá»“i má»›i tÄƒng." },
      { id: 'C', text: "++x thá»±c hiá»‡n hai láº§n phÃ©p cá»™ng, cÃ²n x++ chá»‰ cá»™ng duy nháº¥t má»™t láº§n." },
      { id: 'D', text: "++x cÃ³ Ä‘á»™ Æ°u tiÃªn tháº¥p hÆ¡n x++, cÃ²n láº¡i hÃ nh vi hoÃ n toÃ n giá»‘ng nhau." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.102 vÃ  HCMUTE tr.41: Tiá»n tá»‘ ++x tÄƒng x lÃªn 1 trÆ°á»›c rá»“i má»›i tÃ­nh biá»ƒu thá»©c; Háº­u tá»‘ x++ tráº£ vá» giÃ¡ trá»‹ cÅ© cá»§a x trÆ°á»›c khi tÄƒng.",
    tags: ["c-lang", "ch2", "theory", "easy"],
    reference: {
      uttPage: 'Trang 100 - 108',
      hcmutePage: 'Trang 41 - 44',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-007',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Hiá»‡n tÆ°á»£ng Ä‘oáº£n máº¡ch logic (Short-circuit Evaluation) xáº£y ra trong trÆ°á»ng há»£p nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "ToÃ¡n tá»­ sá»‘ há»c bá»‹ trÃ n bá»™ nhá»› dáº«n Ä‘áº¿n ngáº¯t máº¡ch thá»±c thi cá»§a CPU má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Biá»ƒu thá»©c logic chá»©a quÃ¡ nhiá»u dáº¥u ngoáº·c Ä‘Æ¡n gÃ¢y lá»—i biÃªn dá»‹ch cÃº phÃ¡p." },
      { id: 'C', text: "CÃ¡c biáº¿n sá»‘ bá»‹ gÃ¡n nháº§m Ä‘á»‹a chá»‰ con trá» vÃ o Ã´ nhá»› cá»§a thanh ghi Ä‘iá»u khiá»ƒn." },
      { id: 'D', text: "ToÃ¡n tá»­ && bá» qua váº¿ pháº£i náº¿u váº¿ trÃ¡i sai; || bá» qua náº¿u váº¿ trÃ¡i Ä‘Ãºng." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.105 vÃ  HCMUTE tr.42: Trong A && B, náº¿u A = 0 thÃ¬ B khÃ´ng Ä‘Æ°á»£c cháº¡y; trong A || B, náº¿u A != 0 thÃ¬ B khÃ´ng Ä‘Æ°á»£c cháº¡y.",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 100 - 108',
      hcmutePage: 'Trang 41 - 44',
      section: '2.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-008',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "ToÃ¡n tá»­ thao tÃ¡c bit XOR (kÃ½ hiá»‡u '^') cÃ³ báº£ng chÃ¢n trá»‹ hoáº¡t Ä‘á»™ng nhÆ° tháº¿ nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Tráº£ vá» 1 khi cáº£ hai bit cÃ¹ng báº±ng 1; cÃ¡c trÆ°á»ng há»£p khÃ¡c tráº£ vá» 0." },
      { id: 'B', text: "Tráº£ vá» 1 khi cÃ³ Ã­t nháº¥t má»™t bit báº±ng 1; chá»‰ tráº£ vá» 0 khi cáº£ hai bit lÃ  0." },
      { id: 'C', text: "Tráº£ vá» 1 khi hai bit khÃ¡c nhau; tráº£ vá» 0 khi hai bit giá»‘ng nhau." },
      { id: 'D', text: "Äáº£o ngÆ°á»£c toÃ n bá»™ cÃ¡c bit tá»« 0 sang 1 vÃ  tá»« 1 sang 0 cá»§a má»™t sá»‘ nguyÃªn." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.109 vÃ  HCMUTE tr.44: ToÃ¡n tá»­ XOR (Exclusive OR) tráº£ vá» 1 náº¿u hai bit khÃ¡c nhau (0 ^ 1 = 1, 1 ^ 0 = 1) vÃ  tráº£ vá» 0 náº¿u giá»‘ng nhau (0 ^ 0 = 0, 1 ^ 1 = 0).",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 108 - 114',
      hcmutePage: 'Trang 43 - 46',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-009',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "PhÃ©p dá»‹ch bit sang trÃ¡i (x << n) Ä‘á»‘i vá»›i sá»‘ nguyÃªn dÆ°Æ¡ng tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i phÃ©p toÃ¡n nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "TÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i phÃ©p chia láº¥y pháº§n nguyÃªn cá»§a sá»‘ x cho 2 mÅ© n." },
      { id: 'B', text: "TÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i phÃ©p cá»™ng dá»“n giÃ¡ trá»‹ n vÃ o biáº¿n x liÃªn tiáº¿p n láº§n." },
      { id: 'C', text: "TÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i phÃ©p tÃ­nh sá»‘ dÆ° cá»§a x khi chia cho lÅ©y thá»«a 2 mÅ© n." },
      { id: 'D', text: "TÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i phÃ©p nhÃ¢n sá»‘ nguyÃªn x vá»›i lÅ©y thá»«a 2 mÅ© n (x * 2^n)." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.111 vÃ  HCMUTE tr.45: Dá»‹ch trÃ¡i n bit tÆ°Æ¡ng Ä‘Æ°Æ¡ng nhÃ¢n vá»›i 2^n; dá»‹ch pháº£i n bit tÆ°Æ¡ng Ä‘Æ°Æ¡ng chia nguyÃªn cho 2^n.",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 108 - 114',
      hcmutePage: 'Trang 43 - 46',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-010',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Biá»ƒu diá»…n sá»‘ Ã¢m trong bá»™ nhá»› mÃ¡y tÃ­nh cá»§a ngÃ´n ngá»¯ C háº§u háº¿t sá»­ dá»¥ng phÆ°Æ¡ng phÃ¡p nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "PhÆ°Æ¡ng phÃ¡p mÃ£ bÃ¹ 2 (Two's Complement: Ä‘áº£o bit rá»“i cá»™ng thÃªm 1)." },
      { id: 'B', text: "PhÆ°Æ¡ng phÃ¡p mÃ£ bÃ¹ 1 (One's Complement: chá»‰ Ä‘áº£o bit giá»¯ nguyÃªn dáº¥u)." },
      { id: 'C', text: "PhÆ°Æ¡ng phÃ¡p dáº¥u lÆ°á»£ng (Sign-Magnitude: dÃ¹ng bit Ä‘áº§u lÃ m dáº¥u Ã¢m dÆ°Æ¡ng)." },
      { id: 'D', text: "PhÆ°Æ¡ng phÃ¡p Ä‘á»™ dá»i thiÃªn vá»‹ sá»‘ mÅ© (Excess/Biased Notation cá»§a chuáº©n IEEE)." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.92 vÃ  HCMUTE tr.34: Háº§u háº¿t pháº§n cá»©ng hiá»‡n Ä‘áº¡i vÃ  trÃ¬nh biÃªn dá»‹ch C biá»ƒu diá»…n sá»‘ nguyÃªn cÃ³ dáº¥u theo phÆ°Æ¡ng phÃ¡p bÃ¹ 2 (Two's Complement).",
    tags: ["c-lang", "ch2", "theory", "hard"],
    reference: {
      uttPage: 'Trang 89 - 95',
      hcmutePage: 'Trang 31 - 36',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-011',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Táº¡i sao viá»‡c sá»­ dá»¥ng lá»‡nh fflush(stdin) Ä‘á»ƒ xÃ³a bá»™ nhá»› Ä‘á»‡m bÃ n phÃ­m bá»‹ coi lÃ  xáº¥u trong C chuáº©n?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "VÃ¬ lá»‡nh fflush(stdin) lÃ m cháº­m tá»‘c Ä‘á»™ xá»­ lÃ½ do pháº£i truy cáº­p Ä‘Ä©a cá»©ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "VÃ¬ chuáº©n ANSI C quy Ä‘á»‹nh fflush chá»‰ Ã¡p dá»¥ng cho luá»“ng xuáº¥t (Output Stream)." },
      { id: 'C', text: "VÃ¬ lá»‡nh nÃ y báº¯t buá»™c pháº£i náº¡p thÃªm thÆ° viá»‡n conio.h khÃ´ng cÃ³ sáºµn á»Ÿ Linux má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "VÃ¬ fflush sáº½ xÃ³a sáº¡ch toÃ n bá»™ cÃ¡c biáº¿n sá»‘ nguyÃªn Ä‘Ã£ nháº­p trÆ°á»›c Ä‘Ã³ trong RAM." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.120: Chuáº©n ANSI C quy Ä‘á»‹nh fflush() chá»‰ Ä‘á»‹nh nghÄ©a cho output stream; Ã¡p dá»¥ng trÃªn stdin lÃ  Undefined Behavior (hÃ nh vi khÃ´ng xÃ¡c Ä‘á»‹nh).",
    tags: ["c-lang", "ch2", "theory", "hard"],
    reference: {
      uttPage: 'Trang 118 - 124',
      hcmutePage: 'Trang 29 - 31',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-012',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "MÃ£ Ä‘á»‹nh dáº¡ng '%p' trong hÃ m printf() Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ hiá»ƒn thá»‹ thÃ´ng tin gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Hiá»ƒn thá»‹ tá»· lá»‡ pháº§n trÄƒm tiáº¿n Ä‘á»™ xá»­ lÃ½ tÃ¡c vá»¥ cá»§a chÆ°Æ¡ng trÃ¬nh." },
      { id: 'B', text: "Hiá»ƒn thá»‹ giÃ¡ trá»‹ sá»‘ thá»±c cÃ³ Ä‘á»™ chÃ­nh xÃ¡c kÃ©p á»Ÿ dáº¡ng kÃ½ hiá»‡u khoa há»c." },
      { id: 'C', text: "Hiá»ƒn thá»‹ Ä‘á»‹a chá»‰ Ã´ nhá»› cá»§a con trá» dÆ°á»›i dáº¡ng há»‡ cÆ¡ sá»‘ 16 (Hexadecimal)." },
      { id: 'D', text: "Hiá»ƒn thá»‹ sá»‘ hiá»‡u Ä‘á»‹nh danh luá»“ng (Process ID) Ä‘ang cháº¡y trong há»‡ thá»‘ng." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.115: %p in giÃ¡ trá»‹ con trá» (Ä‘á»‹a chá»‰ bá»™ nhá»›) dÆ°á»›i dáº¡ng hex (thÆ°á»ng cÃ³ tiá»n tá»‘ 0x).",
    tags: ["c-lang", "ch2", "theory", "medium"],
    reference: {
      uttPage: 'Trang 114 - 118',
      hcmutePage: 'Trang 26 - 29',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-013',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Káº¿t quáº£ hiá»ƒn thá»‹ trÃªn mÃ n hÃ¬nh cá»§a Ä‘oáº¡n mÃ£ sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    float x = 5 / 2;
    printf("%.1f", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '2.0' (do phÃ©p chia nguyÃªn 5 / 2 Ä‘Æ°á»£c tÃ­nh trÆ°á»›c rá»“i má»›i Ã©p kiá»ƒu)." },
      { id: 'B', text: "In ra '2.5' (do biáº¿n x khai bÃ¡o kiá»ƒu float nÃªn C tá»± chia sá»‘ thá»±c) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "In ra '2' (do phÃ©p chia nguyÃªn bá» qua pháº§n tháº­p phÃ¢n hoÃ n toÃ n) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh bÃ¡o lá»—i biÃªn dá»‹ch do gÃ¡n sá»‘ nguyÃªn cho biáº¿n kiá»ƒu float má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['A'],
    explanation: "Báº«y chia nguyÃªn: 5 / 2 = 2. GÃ¡n 2 vÃ o float x Ä‘Æ°á»£c 2.0f; in vá»›i %.1f cho ra 2.0.",
    tags: ["c-lang", "ch2", "output", "easy"],
    reference: {
      uttPage: 'Trang 98',
      hcmutePage: 'Trang 39',
      section: '2.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-014',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "GiÃ¡ trá»‹ cá»§a hai biáº¿n a vÃ  b sau khi thá»±c thi Ä‘oáº¡n mÃ£ sau lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 5;
    int b = a++;
    printf("%d %d", a, b);
    return 0;
}`,
    options: [
      { id: 'A', text: "GiÃ¡ trá»‹ in ra lÃ  '6 6' (toÃ¡n tá»­ tÄƒng thá»±c hiá»‡n trÆ°á»›c rá»“i gÃ¡n giÃ¡ trá»‹ má»›i cho b)." },
      { id: 'B', text: "GiÃ¡ trá»‹ in ra lÃ  '5 5' (biáº¿n a khÃ´ng bá»‹ thay Ä‘á»•i do phÃ©p gÃ¡n Ä‘Æ°á»£c Æ°u tiÃªn)." },
      { id: 'C', text: "GiÃ¡ trá»‹ in ra lÃ  '5 6' (biáº¿n b nháº­n giÃ¡ trá»‹ tÄƒng trÆ°á»›c cÃ²n a giá»¯ nguyÃªn)." },
      { id: 'D', text: "GiÃ¡ trá»‹ in ra lÃ  '6 5' (toÃ¡n tá»­ háº­u tá»‘ gÃ¡n giÃ¡ trá»‹ cÅ© cho b rá»“i má»›i tÄƒng a)." },
    ],
    correctAnswers: ['D'],
    explanation: "b = a++: b nháº­n giÃ¡ trá»‹ ban Ä‘áº§u lÃ  5, sau Ä‘Ã³ a má»›i tÄƒng lÃªn 6 -> In: 6 5.",
    tags: ["c-lang", "ch2", "output", "easy"],
    reference: {
      uttPage: 'Trang 102',
      hcmutePage: 'Trang 41',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-015',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "GiÃ¡ trá»‹ cá»§a biáº¿n x Ä‘Æ°á»£c in ra sau khi thá»±c thi biá»ƒu thá»©c Ä‘oáº£n máº¡ch sau lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 10;
    int y = 0;
    if (y && ++x) {}
    printf("%d", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra 10 (do y báº±ng 0 nÃªn biá»ƒu thá»©c Ä‘oáº£n máº¡ch bá» qua phÃ©p toÃ¡n ++x)." },
      { id: 'B', text: "In ra 11 (do toÃ¡n tá»­ tiá»n tá»‘ ++x luÃ´n Ä‘Æ°á»£c thá»±c thi trÆ°á»›c phÃ©p logic)." },
      { id: 'C', text: "In ra 0 (do káº¿t quáº£ cá»§a toÃ n bá»™ biá»ƒu thá»©c logic Ä‘Æ°á»£c gÃ¡n vÃ o biáº¿n x)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh bÃ¡o lá»—i vÃ¬ Ä‘iá»u kiá»‡n if khÃ´ng cÃ³ pháº§n thÃ¢n lá»‡nh xá»­ lÃ½." },
    ],
    correctAnswers: ['A'],
    explanation: "Trong A && B: vÃ¬ y = 0 (sai), váº¿ pháº£i ++x bá»‹ Ä‘oáº£n máº¡ch bá» qua hoÃ n toÃ n -> x váº«n giá»¯ nguyÃªn 10.",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 105',
      hcmutePage: 'Trang 42',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-016',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "GiÃ¡ trá»‹ cá»§a biá»ƒu thá»©c thao tÃ¡c bit sau khi thá»±c thi lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 6;  // 00000110
    int b = 3;  // 00000011
    printf("%d", a ^ b);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 2 (káº¿t quáº£ cá»§a phÃ©p AND bit giá»¯a hai sá»‘ nguyÃªn) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "In ra sá»‘ 5 (káº¿t quáº£ phÃ©p XOR bit: 0110 ^ 0011 = 0101 nhá»‹ phÃ¢n)." },
      { id: 'C', text: "In ra sá»‘ 7 (káº¿t quáº£ cá»§a phÃ©p OR bit giá»¯a hai sá»‘ nguyÃªn) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "In ra sá»‘ 9 (káº¿t quáº£ cá»§a phÃ©p cá»™ng thÃ´ng thÆ°á»ng hai sá»‘) má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "6 nhá»‹ phÃ¢n lÃ  0110, 3 lÃ  0011. XOR tá»«ng cáº·p bit: 0^0=0, 1^0=1, 1^1=0, 0^1=1 -> 0101 (báº±ng 5 tháº­p phÃ¢n).",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 109',
      hcmutePage: 'Trang 44',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-017',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Káº¿t quáº£ in ra cá»§a phÃ©p dá»‹ch bit trong Ä‘oáº¡n mÃ£ sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 5;
    printf("%d", (x << 2) + (x >> 1));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra káº¿t quáº£ lÃ  sá»‘ 25 (tÆ°Æ¡ng Ä‘Æ°Æ¡ng biá»ƒu thá»©c sá»‘ há»c 5 * 4 + 5 / 1)." },
      { id: 'B', text: "In ra káº¿t quáº£ lÃ  sá»‘ 12 (do phÃ©p dá»‹ch bit Æ°u tiÃªn tháº¥p hÆ¡n cá»™ng sá»‘)." },
      { id: 'C', text: "In ra káº¿t quáº£ lÃ  sá»‘ 22 (do x << 2 cho 20 vÃ  x >> 1 cho giÃ¡ trá»‹ 2)." },
      { id: 'D', text: "In ra káº¿t quáº£ lÃ  sá»‘ 10 (do phÃ©p dá»‹ch pháº£i loáº¡i bá» cÃ¡c bit trá»ng sá»‘)." },
    ],
    correctAnswers: ['C'],
    explanation: "5 << 2 = 5 * 4 = 20. 5 >> 1 = 5 / 2 = 2. Tá»•ng 20 + 2 = 22.",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 111',
      hcmutePage: 'Trang 45',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-018',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Äá»‹nh dáº¡ng in chuá»—i vá»›i cÄƒn lá» sau Ä‘Ã¢y hiá»ƒn thá»‹ káº¿t quáº£ nhÆ° tháº¿ nÃ o?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    printf("|%-6s|%6d|", "C", 42);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '|     C|42    |' (chuá»—i cÄƒn pháº£i 6 kÃ½ tá»±, sá»‘ cÄƒn trÃ¡i 6 kÃ½ tá»±)." },
      { id: 'B', text: "In ra '|C-6   |42    |' (in kÃ¨m dáº¥u gáº¡ch ngang cá»§a mÃ£ Ä‘á»‹nh dáº¡ng)." },
      { id: 'C', text: "In ra '|C|42|' (bá» qua khoáº£ng tráº¯ng vÃ¬ Ä‘á»™ dÃ i chuá»—i khÃ´ng vÆ°á»£t quÃ¡ 6)." },
      { id: 'D', text: "In ra '|C     |    42|' (chuá»—i cÄƒn trÃ¡i 6 kÃ½ tá»±, sá»‘ cÄƒn pháº£i 6 kÃ½ tá»±)." },
    ],
    correctAnswers: ['D'],
    explanation: "%-6s cÄƒn lá» trÃ¡i trÃªn 6 cá»™t ('C     '); %6d cÄƒn lá» pháº£i trÃªn 6 cá»™t ('    42').",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 116',
      hcmutePage: 'Trang 28',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-019',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "GiÃ¡ trá»‹ cá»§a biá»ƒu thá»©c Ä‘iá»u kiá»‡n ba ngÃ´i lá»“ng nhau sau Ä‘Ã¢y lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 3, b = 5, c = 2;
    int res = (a > b) ? a : (b > c ? b : c);
    printf("%d", res);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 3 (láº¥y giÃ¡ trá»‹ cá»§a biáº¿n a do phÃ©p so sÃ¡nh Ä‘áº§u tiÃªn) má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "In ra sá»‘ 5 (nhÃ¡nh ngoÃ i sai nÃªn thá»±c thi nhÃ¡nh trong vÃ  láº¥y b = 5)." },
      { id: 'C', text: "In ra sá»‘ 2 (láº¥y giÃ¡ trá»‹ cá»§a biáº¿n c sau khi duyá»‡t qua toÃ n bá»™ Ä‘iá»u kiá»‡n)." },
      { id: 'D', text: "BÃ¡o lá»—i cÃº phÃ¡p vÃ¬ toÃ¡n tá»­ ba ngÃ´i khÃ´ng cho phÃ©p lá»“ng ghÃ©p nhiá»u cáº¥p." },
    ],
    correctAnswers: ['B'],
    explanation: "a > b (3 > 5) lÃ  false, nháº£y sang váº¿ false lÃ  (b > c ? b : c). 5 > 2 lÃ  true -> tráº£ vá» b = 5.",
    tags: ["c-lang", "ch2", "output", "medium"],
    reference: {
      uttPage: 'Trang 113',
      hcmutePage: 'Trang 43',
      section: '2.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-020',
    chapterId: 2,
    articleId: 'c-art-ch2-01',
    content: "Hiá»‡n tÆ°á»£ng trÃ n sá»‘ nguyÃªn khÃ´ng dáº¥u (Unsigned Overflow) sau cho káº¿t quáº£ gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    unsigned char c = 255;
    c = c + 2;
    printf("%u", c);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 1 (do trÃ n sá»‘ nguyÃªn khÃ´ng dáº¥u quay vÃ²ng modulo 256)." },
      { id: 'B', text: "In ra sá»‘ 257 (do kiá»ƒu unsigned tá»± Ä‘á»™ng má»Ÿ rá»™ng dung lÆ°á»£ng lÃªn 16-bit)." },
      { id: 'C', text: "In ra sá»‘ -1 (do bit dáº¥u bá»‹ báº­t thÃ nh sá»‘ Ã¢m theo quy Æ°á»›c bÃ¹ 2)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh bá»‹ sáº­p ngay láº­p tá»©c vá»›i mÃ£ lá»—i Arithmetic Overflow Exception." },
    ],
    correctAnswers: ['A'],
    explanation: "unsigned char cÃ³ miá»n 0 Ä‘áº¿n 255 (modulo 256). 255 + 2 = 257 % 256 = 1.",
    tags: ["c-lang", "ch2", "output", "hard"],
    reference: {
      uttPage: 'Trang 93',
      hcmutePage: 'Trang 35',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-021',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Káº¿t quáº£ in ra mÃ n hÃ¬nh cá»§a Ä‘oáº¡n mÃ£ sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 1, b = 2;
    int c = a++ + ++b;
    printf("%d %d %d", a, b, c);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '2 3 5' (cáº£ hai biáº¿n Ä‘á»u Ä‘Æ°á»£c tÄƒng trÆ°á»›c khi cá»™ng dá»“n)." },
      { id: 'B', text: "In ra '2 3 4' (a láº¥y 1 tÄƒng lÃªn 2; b tÄƒng lÃªn 3; c = 1 + 3 = 4)." },
      { id: 'C', text: "In ra '1 3 4' (biáº¿n a chá»‰ tÄƒng sau khi toÃ n bá»™ hÃ m main káº¿t thÃºc)." },
      { id: 'D', text: "In ra '2 2 3' (toÃ¡n tá»­ háº­u tá»‘ ghi Ä‘Ã¨ lÃªn káº¿t quáº£ cá»§a toÃ¡n tá»­ tiá»n tá»‘)." },
    ],
    correctAnswers: ['B'],
    explanation: "a++ tráº£ vá» 1 (sau Ä‘Ã³ a thÃ nh 2); ++b tÄƒng b lÃªn 3 rá»“i tráº£ vá» 3 -> c = 1 + 3 = 4. Cuá»‘i cÃ¹ng a=2, b=3, c=4.",
    tags: ["c-lang", "ch2", "output", "hard"],
    reference: {
      uttPage: 'Trang 102',
      hcmutePage: 'Trang 41',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-022',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Lá»‡nh nháº­p dá»¯ liá»‡u sau Ä‘Ã¢y phÃ¡t sinh lá»—i nghiÃªm trá»ng nÃ o khi thá»±c thi?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `int n;
scanf("%d", n);`,
    options: [
      { id: 'A', text: "Lá»—i sai mÃ£ Ä‘á»‹nh dáº¡ng vÃ¬ sá»‘ nguyÃªn int báº¯t buá»™c pháº£i nháº­p báº±ng '%i' má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Lá»—i biáº¿n n chÆ°a Ä‘Æ°á»£c khá»Ÿi táº¡o giÃ¡ trá»‹ ban Ä‘áº§u trÆ°á»›c khi gá»i lá»‡nh scanf má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Lá»—i thiáº¿u toÃ¡n tá»­ Ä‘á»‹a chá»‰ '&n' dáº«n Ä‘áº¿n ghi dá»¯ liá»‡u vÃ o Ã´ nhá»› rÃ¡c gÃ¢y crash." },
      { id: 'D', text: "Lá»‡nh scanf khÃ´ng há»— trá»£ Ä‘á»c trá»±c tiáº¿p vÃ o biáº¿n sá»‘ nguyÃªn Ä‘Æ¡n láº» má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "Báº«y scanf kinh Ä‘iá»ƒn: scanf Ä‘Ã²i há»i Ä‘á»‹a chá»‰ cá»§a biáº¿n (&n). Truyá»n n (chá»©a rÃ¡c) sáº½ ghi Ä‘Ã¨ Ã´ nhá»› rÃ¡c gÃ¢y crash (Segfault).",
    tags: ["c-lang", "ch2", "debug", "easy"],
    reference: {
      uttPage: 'Trang 118',
      hcmutePage: 'Trang 29',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-023',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Äoáº¡n mÃ£ sau bá»‹ lá»—i trÃ´i lá»‡nh khÃ´ng nháº­p Ä‘Æ°á»£c kÃ½ tá»± ch. NguyÃªn nhÃ¢n lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int age;
char ch;
scanf("%d", &age);
scanf("%c", &ch);`,
    options: [
      { id: 'A', text: "Do hÃ m scanf khÃ´ng cho phÃ©p gá»i hai láº§n liÃªn tiáº¿p trong cÃ¹ng má»™t khá»‘i hÃ m main má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Do biáº¿n age khai bÃ¡o kiá»ƒu int xung Ä‘á»™t vá»›i báº£ng mÃ£ ASCII cá»§a biáº¿n kÃ½ tá»± ch má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Do thiáº¿u thÆ° viá»‡n conio.h Ä‘á»ƒ kÃ­ch hoáº¡t chá»©c nÄƒng nháº­n tÃ­n hiá»‡u bÃ n phÃ­m má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Do phÃ­m Enter sau khi nháº­p age Ä‘á»ƒ láº¡i '\n' trong stdin vÃ  scanf(\"%c\") Ä‘á»c ngay kÃ½ tá»± Ä‘Ã³." },
    ],
    correctAnswers: ['D'],
    explanation: "Báº«y trÃ´i lá»‡nh: PhÃ­m Enter Ä‘á»ƒ láº¡i '\n' trong stdin; scanf(\"%c\") nháº­n ngay '\n' vÃ  káº¿t thÃºc. Sá»­a báº±ng scanf(\" %c\", &ch).",
    tags: ["c-lang", "ch2", "debug", "medium"],
    reference: {
      uttPage: 'Trang 120',
      hcmutePage: 'Trang 30',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-024',
    chapterId: 2,
    articleId: 'c-art-ch2-05',
    content: "Äoáº¡n mÃ£ sau phÃ¡t sinh lá»—i gÃ¬ khi cá»‘ gáº¯ng in sá»‘ thá»±c cÃ³ Ä‘á»™ chÃ­nh xÃ¡c kÃ©p?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `double d = 3.1415926535;
printf("%f", d);`,
    options: [
      { id: 'A', text: "MÃ£ nguá»“n há»£p lá»‡ trong C vÃ¬ printf tá»± thÄƒng cáº¥p float lÃªn double theo quy Æ°á»›c biáº¿n Ä‘á»‘i." },
      { id: 'B', text: "Lá»—i biÃªn dá»‹ch vÃ¬ biáº¿n kiá»ƒu double báº¯t buá»™c pháº£i in báº±ng mÃ£ Ä‘á»‹nh dáº¡ng '%lf' má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Lá»—i runtime do kÃ­ch thÆ°á»›c 8 bytes cá»§a double lÃ m trÃ n vÃ¹ng nhá»› Ä‘á»‡m in cá»§a %f má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "GiÃ¡ trá»‹ in ra bá»‹ sai lá»‡ch do sá»‘ thá»±c double bá»‹ Ã©p kiá»ƒu ngÆ°á»£c vá» sá»‘ nguyÃªn má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['A'],
    explanation: "Trong printf, tham sá»‘ kiá»ƒu float tá»± Ä‘á»™ng Ä‘Æ°á»£c thÄƒng cáº¥p ngáº§m Ä‘á»‹nh lÃªn double (Default argument promotion), nÃªn dÃ¹ng %f Ä‘á»ƒ in double lÃ  hoÃ n toÃ n há»£p lá»‡.",
    tags: ["c-lang", "ch2", "debug", "medium"],
    reference: {
      uttPage: 'Trang 115',
      hcmutePage: 'Trang 27',
      section: '2.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-025',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Äoáº¡n mÃ£ sau bá»‹ lá»—i chia cho 0 tiá»m áº©n (Division by Zero) á»Ÿ trÆ°á»ng há»£p nÃ o?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int a = 10, b = 0;
int c = (b != 0) ? (a / b) : 0;`,
    options: [
      { id: 'A', text: "LuÃ´n luÃ´n bá»‹ lá»—i chia cho 0 vÃ¬ trÃ¬nh biÃªn dá»‹ch tÃ­nh toÃ¡n cáº£ hai nhÃ¡nh cÃ¹ng lÃºc." },
      { id: 'B', text: "Bá»‹ lá»—i chia cho 0 khi tá»‘i Æ°u hÃ³a mÃ£ nguá»“n vá»›i cá» biÃªn dá»‹ch tá»‘i Ä‘a -O3 má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "KhÃ´ng bao giá» bá»‹ chia cho 0 do toÃ¡n tá»­ ba ngÃ´i chá»‰ thá»±c thi nhÃ¡nh há»£p lá»‡." },
      { id: 'D', text: "Bá»‹ lá»—i biÃªn dá»‹ch cÃº phÃ¡p do phÃ©p chia sá»‘ nguyÃªn cho biáº¿n chÆ°a xÃ¡c Ä‘á»‹nh má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "ToÃ¡n tá»­ ba ngÃ´i chá»‰ tÃ­nh toÃ¡n nhÃ¡nh Ä‘Æ°á»£c chá»n (náº¿u Ä‘iá»u kiá»‡n sai thÃ¬ chá»‰ tÃ­nh nhÃ¡nh false). b != 0 lÃ  sai -> chá»‰ láº¥y 0, khÃ´ng cháº¡y a / b.",
    tags: ["c-lang", "ch2", "debug", "hard"],
    reference: {
      uttPage: 'Trang 113',
      hcmutePage: 'Trang 43',
      section: '2.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch2-026',
    chapterId: 2,
    articleId: 'c-art-ch2-03',
    content: "Biá»ƒu thá»©c gÃ¡n phá»©c há»£p sau bá»‹ cáº£nh bÃ¡o hÃ nh vi khÃ´ng xÃ¡c Ä‘á»‹nh (Undefined Behavior) vÃ¬ sao?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int i = 5;
i = ++i + i++;`,
    options: [
      { id: 'A', text: "ToÃ¡n tá»­ tiá»n tá»‘ vÃ  háº­u tá»‘ khÃ´ng Ä‘Æ°á»£c phÃ©p xuáº¥t hiá»‡n trong cÃ¹ng má»™t biá»ƒu thá»©c." },
      { id: 'B', text: "Sá»­a Ä‘á»•i giÃ¡ trá»‹ biáº¿n i nhiá»u láº§n giá»¯a hai Ä‘iá»ƒm tuáº§n tá»± (Sequence Points)." },
      { id: 'C', text: "Biáº¿n i khÃ´ng thá»ƒ vá»«a lÃ m toÃ¡n háº¡ng vá»«a lÃ m Ä‘Ã­ch cá»§a phÃ©p gÃ¡n trong cÃ¹ng dÃ²ng." },
      { id: 'D', text: "TrÃ¬nh biÃªn dá»‹ch khÃ´ng xÃ¡c Ä‘á»‹nh Ä‘Æ°á»£c kiá»ƒu dá»¯ liá»‡u tráº£ vá» cá»§a phÃ©p cá»™ng dá»“n." },
    ],
    correctAnswers: ['B'],
    explanation: "Theo chuáº©n C, viá»‡c sá»­a Ä‘á»•i cÃ¹ng má»™t biáº¿n nhiá»u hÆ¡n 1 láº§n giá»¯a hai Sequence Points lÃ  Undefined Behavior (káº¿t quáº£ tÃ¹y thuá»™c trÃ¬nh biÃªn dá»‹ch).",
    tags: ["c-lang", "ch2", "debug", "hard"],
    reference: {
      uttPage: 'Trang 103',
      hcmutePage: 'Trang 41',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-027',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Lá»—i logic trong viá»‡c kiá»ƒm tra sá»‘ cháºµn láº» báº±ng toÃ¡n tá»­ bit sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `if (x & 1 == 0) {
    printf("So chan");
}`,
    options: [
      { id: 'A', text: "ToÃ¡n tá»­ & khÃ´ng thá»ƒ Ã¡p dá»¥ng cho viá»‡c kiá»ƒm tra sá»‘ cháºµn láº» trong ngÃ´n ngá»¯ C má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "GiÃ¡ trá»‹ x & 1 luÃ´n tráº£ vá» 1 Ä‘á»‘i vá»›i táº¥t cáº£ cÃ¡c sá»‘ nguyÃªn Ã¢m trong mÃ¡y tÃ­nh má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "ToÃ¡n tá»­ '==' cÃ³ Ä‘á»™ Æ°u tiÃªn cao hÆ¡n '&' nÃªn biá»ƒu thá»©c bá»‹ tÃ­nh thÃ nh 'x & (1 == 0)'." },
      { id: 'D', text: "Biá»ƒu thá»©c thiáº¿u dáº¥u cháº¥m pháº©y á»Ÿ sau Ä‘iá»u kiá»‡n so sÃ¡nh báº±ng cá»§a lá»‡nh if má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "Äá»™ Æ°u tiÃªn toÃ¡n tá»­: == cÃ³ Ä‘á»™ Æ°u tiÃªn cao hÆ¡n &. x & 1 == 0 tÆ°Æ¡ng Ä‘Æ°Æ¡ng x & (1 == 0) -> x & 0 = 0 (luÃ´n false). Pháº£i viáº¿t: (x & 1) == 0.",
    tags: ["c-lang", "ch2", "debug", "hard"],
    reference: {
      uttPage: 'Trang 110',
      hcmutePage: 'Trang 44',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-028',
    chapterId: 2,
    articleId: 'c-art-ch2-02',
    content: "Cáº§n Ä‘iá»n Ä‘oáº¡n mÃ£ Ã©p kiá»ƒu nÃ o vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ biáº¿n res nháº­n giÃ¡ trá»‹ chÃ­nh xÃ¡c 2.5?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `int a = 5, b = 2;
float res = ... a / b;`,
    options: [
      { id: 'A', text: "Äiá»n '(int)' Ä‘á»ƒ giá»¯ nguyÃªn kiá»ƒu dá»¯ liá»‡u cá»§a biáº¿n a trong quÃ¡ trÃ¬nh tÃ­nh toÃ¡n má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Äiá»n '(double*)' Ä‘á»ƒ chuyá»ƒn Ä‘á»‹a chá»‰ Ã´ nhá»› sang con trá» sá»‘ thá»±c cÃ³ Ä‘á»™ dÃ i lá»›n má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Äiá»n '(char)' Ä‘á»ƒ giáº£m kÃ­ch thÆ°á»›c lÆ°u trá»¯ cá»§a biáº¿n trÆ°á»›c khi chia sá»‘ nguyÃªn má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Äiá»n '(float)' Ä‘á»ƒ Ã©p kiá»ƒu sá»‘ nguyÃªn a sang sá»‘ thá»±c trÆ°á»›c khi thá»±c hiá»‡n phÃ©p chia." },
    ],
    correctAnswers: ['D'],
    explanation: "Ã‰p kiá»ƒu tÆ°á»ng minh (float)a / b: a trá»Ÿ thÃ nh 5.0f, phÃ©p chia thá»±c hiá»‡n trÃªn sá»‘ thá»±c cho káº¿t quáº£ 2.5f.",
    tags: ["c-lang", "ch2", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 98',
      hcmutePage: 'Trang 39',
      section: '2.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-029',
    chapterId: 2,
    articleId: 'c-art-ch2-04',
    content: "Cáº§n Ä‘iá»n toÃ¡n tá»­ bit nÃ o vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ báº­t (set) bit thá»© k cá»§a biáº¿n x lÃªn 1?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `x = x ... (1 << k);`,
    options: [
      { id: 'A', text: "Äiá»n toÃ¡n tá»­ '|' (hoáº·c '|=') Ä‘á»ƒ thá»±c hiá»‡n báº­t bit báº±ng phÃ©p toÃ¡n OR nhá»‹ phÃ¢n." },
      { id: 'B', text: "Äiá»n toÃ¡n tá»­ '&' (hoáº·c '&=') Ä‘á»ƒ chá»‰ giá»¯ láº¡i cÃ¡c bit cÃ³ giÃ¡ trá»‹ báº±ng 1 trÆ°á»›c Ä‘Ã³." },
      { id: 'C', text: "Äiá»n toÃ¡n tá»­ '^' (hoáº·c '^=') Ä‘á»ƒ Ä‘áº£o tráº¡ng thÃ¡i cá»§a bit tá»« 1 sang 0 liÃªn tá»¥c." },
      { id: 'D', text: "Äiá»n toÃ¡n tá»­ '~' (hoáº·c '~=') Ä‘á»ƒ phá»§ Ä‘á»‹nh toÃ n bá»™ cÃ¡c bit náº±m trong máº·t náº¡." },
    ],
    correctAnswers: ['A'],
    explanation: "Ká»¹ thuáº­t máº·t náº¡ bit: Báº­t bit thá»© k dÃ¹ng x |= (1 << k); Táº¯t bit thá»© k dÃ¹ng x &= ~(1 << k); Äáº£o bit dÃ¹ng x ^= (1 << k).",
    tags: ["c-lang", "ch2", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 110',
      hcmutePage: 'Trang 45',
      section: '2.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch2-030',
    chapterId: 2,
    articleId: 'c-art-ch2-06',
    content: "Cáº§n Ä‘iá»n Ä‘á»‹nh dáº¡ng nÃ o vÃ o chá»— trá»‘ng (...) trong scanf Ä‘á»ƒ Ä‘á»c má»™t chuá»—i cÃ³ khoáº£ng tráº¯ng an toÃ n?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'hard',
    codeSnippet: `char hoten[50];
scanf("...", hoten);`,
    options: [
      { id: 'A', text: "Äiá»n '%s' Ä‘á»ƒ tá»± Ä‘á»™ng Ä‘á»c toÃ n bá»™ dÃ²ng vÄƒn báº£n cÃ³ chá»©a cÃ¡c dáº¥u cÃ¡ch tráº¯ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Äiá»n '%49[^\n]' Ä‘á»ƒ Ä‘á»c tá»‘i Ä‘a 49 kÃ½ tá»± cho Ä‘áº¿n khi gáº·p kÃ½ tá»± xuá»‘ng dÃ²ng '\n'." },
      { id: 'C', text: "Äiá»n '%*s' Ä‘á»ƒ bá» qua cÃ¡c tá»« Ä‘áº§u tiÃªn vÃ  chá»‰ lÆ°u láº¡i pháº§n há» tÃªn cuá»‘i cÃ¹ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Äiá»n '%50c' Ä‘á»ƒ Ä‘á»c chÃ­nh xÃ¡c 50 kÃ½ tá»± báº¥t ká»ƒ ngÆ°á»i dÃ¹ng cÃ³ nháº¥n phÃ­m Enter má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "%49[^\n] lÃ  ká»¹ thuáº­t scanset trong scanf: Ä‘á»c tá»‘i Ä‘a 49 kÃ½ tá»± cho Ä‘áº¿n khi gáº·p phÃ­m Enter (\n), chá»«a 1 byte cho ' '.",
    tags: ["c-lang", "ch2", "fill-in", "hard"],
    reference: {
      uttPage: 'Trang 119',
      hcmutePage: 'Trang 30',
      section: '2.3',
    },
    mockExamPreset: false,
  },
];
