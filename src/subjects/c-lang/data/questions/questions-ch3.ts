/**
 * src/subjects/c-lang/data/questions/questions-ch3.ts
 * NgÃ¢n hÃ ng cÃ¢u há»i tráº¯c nghiá»‡m ChuyÃªn sÃ¢u ChÆ°Æ¡ng 3: Cáº¥u trÃºc Ráº½ nhÃ¡nh & VÃ²ng láº·p
 * Sá»‘ lÆ°á»£ng: 35 cÃ¢u há»i chuáº©n hÃ³a
 * Báº£n quyá»n dá»¯ liá»‡u há»c táº­p Äáº¡i há»c SÆ° pháº¡m Ká»¹ thuáº­t TP.HCM (HCMUTE)
 * TuÃ¢n thá»§ 100% TiÃªu chuáº©n Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh3: CQuestion[] = [
  {
    id: 'q-c-ch3-001',
    chapterId: 3,
    articleId: 'c-art-ch3-01',
    content: "Trong ngÃ´n ngá»¯ C, má»™t biá»ƒu thá»©c Ä‘iá»u kiá»‡n trong cáº¥u trÃºc if Ä‘Æ°á»£c xem lÃ  ÄÃšNG (true) khi nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Khi biá»ƒu thá»©c Ä‘Ã³ báº¯t buá»™c pháº£i cÃ³ giÃ¡ trá»‹ sá»‘ há»c nguyÃªn dÆ°Æ¡ng lá»›n hÆ¡n 0." },
      { id: 'B', text: "Khi biá»ƒu thá»©c Ä‘Ã³ pháº£i tráº£ vá» má»™t háº±ng sá»‘ Ä‘Ãºng kiá»ƒu boolean chuáº©n logic." },
      { id: 'C', text: "Khi biá»ƒu thá»©c Ä‘Ã³ cÃ³ káº¿t quáº£ Ä‘Ãºng báº±ng giÃ¡ trá»‹ 1 vÃ  khÃ´ng nháº­n giÃ¡ trá»‹ Ã¢m." },
      { id: 'D', text: "Khi biá»ƒu thá»©c Ä‘Ã³ lÆ°á»£ng giÃ¡ ra má»™t giÃ¡ trá»‹ sá»‘ há»c khÃ¡c khÃ´ng (khÃ¡c 0)." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.126 vÃ  HCMUTE tr.47: Trong C chuáº©n, khÃ´ng cÃ³ kiá»ƒu boolean nguyÃªn thá»§y (trÆ°á»›c C99); má»i giÃ¡ trá»‹ khÃ¡c 0 (ká»ƒ cáº£ sá»‘ Ã¢m) Ä‘á»u Ä‘Æ°á»£c xem lÃ  true, chá»‰ duy nháº¥t giÃ¡ trá»‹ 0 lÃ  false.",
    tags: ["c-lang", "ch3", "theory", "easy"],
    reference: {
      uttPage: 'Trang 126',
      hcmutePage: 'Trang 47',
      section: '3.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch3-002',
    chapterId: 3,
    articleId: 'c-art-ch3-01',
    content: "Quy táº¯c káº¿t há»£p má»‡nh Ä‘á» else trong cáº¥u trÃºc if lá»“ng nhau (Dangling else) Ä‘Æ°á»£c quy Ä‘á»‹nh nhÆ° tháº¿ nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Má»‡nh Ä‘á» else luÃ´n Ä‘Æ°á»£c ghÃ©p ná»‘i vá»›i cÃ¢u lá»‡nh if Ä‘áº§u tiÃªn cá»§a toÃ n bá»™ khá»‘i lá»‡nh Ä‘ang thá»±c thi." },
      { id: 'B', text: "Má»‡nh Ä‘á» else sáº½ ghÃ©p ná»‘i ngáº«u nhiÃªn tÃ¹y thuá»™c vÃ o má»©c Ä‘á»™ thá»¥t Ä‘áº§u dÃ²ng cá»§a láº­p trÃ¬nh viÃªn má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Má»‡nh Ä‘á» else luÃ´n Ä‘Æ°á»£c tá»± Ä‘á»™ng ghÃ©p ná»‘i vá»›i cÃ¢u lá»‡nh if chÆ°a cÃ³ else gáº§n nháº¥t Ä‘á»©ng trÆ°á»›c nÃ³." },
      { id: 'D', text: "TrÃ¬nh biÃªn dá»‹ch sáº½ bÃ¡o lá»—i cÃº phÃ¡p mÆ¡ há»“ náº¿u khÃ´ng cÃ³ cÃ¡c dáº¥u ngoáº·c nhá»n bao quanh tá»«ng if má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.131 vÃ  HCMUTE tr.52: Trong C, má»‡nh Ä‘á» else luÃ´n tá»± Ä‘á»™ng káº¿t há»£p vá»›i if gáº§n nháº¥t chÆ°a cÃ³ else trÆ°á»›c Ä‘Ã³, trá»« khi Ä‘Æ°á»£c nhÃ³m láº¡i báº±ng dáº¥u ngoáº·c nhá»n {}.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 131',
      hcmutePage: 'Trang 52',
      section: '3.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-003',
    chapterId: 3,
    articleId: 'c-art-ch3-01',
    content: "ToÃ¡n tá»­ Ä‘iá»u kiá»‡n ba ngÃ´i (Ternary operator '? :') trong ngÃ´n ngá»¯ C cÃ³ Ä‘áº·c Ä‘iá»ƒm quan trá»ng nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "LÃ  má»™t cÃ¢u lá»‡nh Ä‘iá»u khiá»ƒn luá»“ng thuáº§n tÃºy vÃ  hoÃ n toÃ n khÃ´ng tráº£ láº¡i báº¥t ká»³ giÃ¡ trá»‹ nÃ o." },
      { id: 'B', text: "Báº¯t buá»™c cáº£ hai nhÃ¡nh káº¿t quáº£ pháº£i cÃ³ cÃ¹ng kiá»ƒu dá»¯ liá»‡u void vÃ  khÃ´ng Ä‘Æ°á»£c gÃ¡n cho biáº¿n." },
      { id: 'C', text: "Chá»‰ cÃ³ thá»ƒ Ã¡p dá»¥ng cho cÃ¡c kiá»ƒu dá»¯ liá»‡u sá»‘ nguyÃªn vÃ  khÃ´ng thá»ƒ dÃ¹ng cho kiá»ƒu sá»‘ thá»±c." },
      { id: 'D', text: "LÃ  má»™t biá»ƒu thá»©c cÃ³ giÃ¡ trá»‹ tráº£ vá» nÃªn cÃ³ thá»ƒ dÃ¹ng trá»±c tiáº¿p bÃªn trong phÃ©p gÃ¡n biáº¿n." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.134 vÃ  HCMUTE tr.55: ToÃ¡n tá»­ ? : táº¡o ra má»™t biá»ƒu thá»©c cÃ³ giÃ¡ trá»‹, cho phÃ©p gÃ¡n trá»±c tiáº¿p: x = (a > b) ? a : b;",
    tags: ["c-lang", "ch3", "theory", "easy"],
    reference: {
      uttPage: 'Trang 134',
      hcmutePage: 'Trang 55',
      section: '3.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-004',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "Biá»ƒu thá»©c Ä‘iá»u khiá»ƒn trong cáº¥u trÃºc switch(expr) trong ngÃ´n ngá»¯ C báº¯t buá»™c pháº£i cÃ³ kiá»ƒu dá»¯ liá»‡u gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Pháº£i cÃ³ kiá»ƒu dá»¯ liá»‡u sá»‘ nguyÃªn (char, short, int, long hoáº·c enum liá»‡t kÃª)." },
      { id: 'B', text: "CÃ³ thá»ƒ thuá»™c báº¥t ká»³ kiá»ƒu sá»‘ nÃ o bao gá»“m cáº£ kiá»ƒu sá»‘ thá»±c dáº¥u pháº©y Ä‘á»™ng float." },
      { id: 'C', text: "Báº¯t buá»™c pháº£i lÃ  kiá»ƒu chuá»—i kÃ½ tá»± dáº¡ng con trá» char* hoáº·c máº£ng cÃ¡c kÃ½ tá»±." },
      { id: 'D', text: "Chá»‰ cháº¥p nháº­n duy nháº¥t kiá»ƒu dá»¯ liá»‡u sá»‘ nguyÃªn int cÃ³ dáº¥u 4 bytes tiÃªu chuáº©n." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.140 vÃ  HCMUTE tr.59: switch chá»‰ nháº­n kiá»ƒu dá»¯ liá»‡u nguyÃªn (hoáº·c kiá»ƒu chuyá»ƒn Ä‘á»•i vá» nguyÃªn Ä‘Æ°á»£c nhÆ° char, enum). KhÃ´ng thá»ƒ dÃ¹ng float, double, struct hay string.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 140',
      hcmutePage: 'Trang 59',
      section: '3.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch3-005',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "GiÃ¡ trá»‹ cá»§a nhÃ£n case trong cáº¥u trÃºc switch-case trong ngÃ´n ngá»¯ láº­p trÃ¬nh C pháº£i tuÃ¢n thá»§ Ä‘iá»u kiá»‡n gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "CÃ³ thá»ƒ lÃ  má»™t biáº¿n sá»‘ nguyÃªn cÃ³ giÃ¡ trá»‹ Ä‘Æ°á»£c nháº­p tá»« bÃ n phÃ­m khi chÆ°Æ¡ng trÃ¬nh cháº¡y má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Báº¯t buá»™c pháº£i lÃ  má»™t háº±ng sá»‘ nguyÃªn hoáº·c biá»ƒu thá»©c háº±ng tÃ­nh toÃ¡n Ä‘Æ°á»£c khi biÃªn dá»‹ch." },
      { id: 'C', text: "CÃ³ thá»ƒ lÃ  má»™t biá»ƒu thá»©c so sÃ¡nh logic chá»©a cÃ¡c toÃ¡n tá»­ quan há»‡ lá»›n hÆ¡n hoáº·c nhá» hÆ¡n má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "CÃ³ thá»ƒ lÃ  má»™t chuá»—i kÃ½ tá»± báº¥t ká»³ Ä‘Æ°á»£c Ä‘áº·t trong cáº·p dáº¥u ngoáº·c kÃ©p Ä‘á»ƒ so khá»›p chuá»—i má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.141 vÃ  HCMUTE tr.60: NhÃ£n case pháº£i lÃ  má»™t biá»ƒu thá»©c háº±ng nguyÃªn (constant integral expression), khÃ´ng Ä‘Æ°á»£c chá»©a biáº¿n hoáº·c Ä‘iá»u kiá»‡n quan há»‡.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 141',
      hcmutePage: 'Trang 60',
      section: '3.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-006',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "Hiá»‡n tÆ°á»£ng trÃ´i nhÃ¡nh (Fall-through) trong cáº¥u trÃºc switch xáº£y ra khi láº­p trÃ¬nh viÃªn thá»±c hiá»‡n Ä‘iá»u gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Bá» qua cÃ¢u lá»‡nh break á»Ÿ cuá»‘i má»—i khá»‘i case khiáº¿n luá»“ng cháº¡y tiáº¿p tá»¥c thá»±c thi case liá»n ká»." },
      { id: 'B', text: "QuÃªn khai bÃ¡o nhÃ£n default dáº«n Ä‘áº¿n trÃ¬nh biÃªn dá»‹ch bá» qua toÃ n bá»™ khá»‘i switch khi thá»±c thi má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Khai bÃ¡o hai nhÃ£n case cÃ³ giÃ¡ trá»‹ háº±ng sá»‘ hoÃ n toÃ n trÃ¹ng láº·p nhau trong cÃ¹ng cáº¥u trÃºc má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Sá»­ dá»¥ng biá»ƒu thá»©c Ä‘iá»u khiá»ƒn cÃ³ giÃ¡ trá»‹ náº±m ngoÃ i pháº¡m vi giÃ¡ trá»‹ cá»§a táº¥t cáº£ cÃ¡c nhÃ£n case má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.143 vÃ  HCMUTE tr.62: Náº¿u má»™t case khÃ´ng cÃ³ lá»‡nh break, CPU sáº½ tá»± Ä‘á»™ng rÆ¡i (fall-through) xuá»‘ng thá»±c hiá»‡n tiáº¿p cÃ¡c cÃ¢u lá»‡nh cá»§a case bÃªn dÆ°á»›i mÃ  khÃ´ng kiá»ƒm tra Ä‘iá»u kiá»‡n.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 143',
      hcmutePage: 'Trang 62',
      section: '3.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-007',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "NhÃ£n default trong cáº¥u trÃºc switch-case cÃ³ vá»‹ trÃ­ vÃ  vai trÃ² nhÆ° tháº¿ nÃ o trong chÆ°Æ¡ng trÃ¬nh C?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Báº¯t buá»™c pháº£i luÃ´n Ä‘Æ°á»£c Ä‘áº·t á»Ÿ dÃ²ng Ä‘áº§u tiÃªn cá»§a khá»‘i lá»‡nh switch trÆ°á»›c táº¥t cáº£ cÃ¡c nhÃ£n case má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Chá»‰ Ä‘Æ°á»£c thá»±c thi khi biá»ƒu thá»©c Ä‘iá»u khiá»ƒn switch cÃ³ giÃ¡ trá»‹ tÃ­nh toÃ¡n ra Ä‘Ãºng báº±ng sá»‘ 0 má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Thá»±c thi khi khÃ´ng cÃ³ case nÃ o khá»›p vÃ  cÃ³ thá»ƒ Ä‘áº·t á»Ÿ báº¥t ká»³ vá»‹ trÃ­ nÃ o trong khá»‘i lá»‡nh switch." },
      { id: 'D', text: "LÃ  má»™t thÃ nh pháº§n báº¯t buá»™c pháº£i cÃ³, náº¿u thiáº¿u trÃ¬nh biÃªn dá»‹ch sáº½ bÃ¡o lá»—i khÃ´ng thá»±c thi má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.144 vÃ  HCMUTE tr.63: NhÃ£n default lÃ  tÃ¹y chá»n, kÃ­ch hoáº¡t khi khÃ´ng cÃ³ case nÃ o khá»›p, vÃ  cÃ³ thá»ƒ Ä‘áº·t á»Ÿ Ä‘áº§u, giá»¯a hoáº·c cuá»‘i khá»‘i switch (thÆ°á»ng Ä‘áº·t á»Ÿ cuá»‘i).",
    tags: ["c-lang", "ch3", "theory", "easy"],
    reference: {
      uttPage: 'Trang 144',
      hcmutePage: 'Trang 63',
      section: '3.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-008',
    chapterId: 3,
    articleId: 'c-art-ch3-03',
    content: "Trong vÃ²ng láº·p for(khoi_tao; dieu_kien; buoc_nhay), thÃ nh pháº§n khoi_tao Ä‘Æ°á»£c thá»±c hiá»‡n bao nhiÃªu láº§n?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "ÄÆ°á»£c thá»±c thi láº¡i á»Ÿ Ä‘áº§u má»—i láº§n láº·p trÆ°á»›c khi thÃ¢n vÃ²ng láº·p báº¯t Ä‘áº§u nháº­n quyá»n thá»±c thi má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "ÄÆ°á»£c thá»±c thi á»Ÿ cuá»‘i má»—i láº§n láº·p sau khi cÃ¡c cÃ¢u lá»‡nh trong thÃ¢n vÃ²ng láº·p hoÃ n thÃ nh xong má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "ÄÆ°á»£c thá»±c thi hai láº§n: má»™t láº§n khi khá»Ÿi táº¡o chÆ°Æ¡ng trÃ¬nh vÃ  má»™t láº§n khi vÃ²ng láº·p dá»«ng láº¡i má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Chá»‰ Ä‘Æ°á»£c thá»±c thi Ä‘Ãºng má»™t láº§n duy nháº¥t trÆ°á»›c khi vÃ²ng láº·p báº¯t Ä‘áº§u kiá»ƒm tra Ä‘iá»u kiá»‡n láº·p." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.150 vÃ  HCMUTE tr.72: Biá»ƒu thá»©c khá»Ÿi táº¡o trong vÃ²ng láº·p for chá»‰ cháº¡y Ä‘Ãºng 1 láº§n duy nháº¥t ngay trÆ°á»›c khi báº¯t Ä‘áº§u kiá»ƒm tra Ä‘iá»u kiá»‡n.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 150',
      hcmutePage: 'Trang 72',
      section: '3.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-009',
    chapterId: 3,
    articleId: 'c-art-ch3-03',
    content: "Khi bá» trá»‘ng thÃ nh pháº§n Ä‘iá»u kiá»‡n trong vÃ²ng láº·p for: for(init; ; step), Ä‘iá»u gÃ¬ sáº½ xáº£y ra?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "TrÃ¬nh biÃªn dá»‹ch tá»± Ä‘á»™ng xem Ä‘iá»u kiá»‡n luÃ´n Ä‘Ãºng (true) vÃ  táº¡o ra má»™t vÃ²ng láº·p vÃ´ táº­n." },
      { id: 'B', text: "TrÃ¬nh biÃªn dá»‹ch sáº½ bÃ¡o lá»—i cÃº phÃ¡p biÃªn dá»‹ch do thiáº¿u biá»ƒu thá»©c logic kiá»ƒm tra Ä‘iá»u kiá»‡n." },
      { id: 'C', text: "VÃ²ng láº·p sáº½ tá»± Ä‘á»™ng dá»«ng láº¡i ngay láº­p tá»©c mÃ  khÃ´ng thá»±c hiá»‡n thÃ¢n vÃ²ng láº·p báº¥t ká»³ láº§n nÃ o." },
      { id: 'D', text: "TrÃ¬nh biÃªn dá»‹ch sáº½ máº·c Ä‘á»‹nh Ä‘iá»u kiá»‡n láº·p lÃ  biáº¿n Ä‘áº¿m bÆ°á»›c nháº£y pháº£i cÃ³ giÃ¡ trá»‹ lá»›n hÆ¡n 0." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.153 vÃ  HCMUTE tr.75: Khi khuyáº¿t biá»ƒu thá»©c Ä‘iá»u kiá»‡n trong for, C máº·c Ä‘á»‹nh nÃ³ mang giÃ¡ trá»‹ 1 (luÃ´n Ä‘Ãºng), biáº¿n thÃ nh vÃ²ng láº·p vÃ´ táº­n trá»« khi cÃ³ break.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 153',
      hcmutePage: 'Trang 75',
      section: '3.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-010',
    chapterId: 3,
    articleId: 'c-art-ch3-04',
    content: "Äiá»ƒm khÃ¡c biá»‡t cá»‘t lÃµi nháº¥t giá»¯a vÃ²ng láº·p while vÃ  vÃ²ng láº·p do-while trong ngÃ´n ngá»¯ C lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "VÃ²ng láº·p while cho phÃ©p duyá»‡t máº£ng an toÃ n hÆ¡n vÃ²ng láº·p do-while khi xá»­ lÃ½ chuá»—i kÃ½ tá»± bá»™ nhá»› má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "VÃ²ng láº·p do-while luÃ´n thá»±c hiá»‡n thÃ¢n láº·p Ã­t nháº¥t má»™t láº§n cÃ²n while cÃ³ thá»ƒ khÃ´ng thá»±c hiá»‡n láº§n nÃ o." },
      { id: 'C', text: "VÃ²ng láº·p do-while chá»‰ sá»­ dá»¥ng Ä‘Æ°á»£c vá»›i cÃ¡c sá»‘ nguyÃªn cÃ²n vÃ²ng láº·p while dÃ¹ng Ä‘Æ°á»£c cho sá»‘ thá»±c má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "VÃ²ng láº·p while cÃ³ tá»‘c Ä‘á»™ thá»±c thi chá»‰ lá»‡nh mÃ¡y tÃ­nh nhanh hÆ¡n do-while trÃªn má»i kiáº¿n trÃºc CPU má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.160 vÃ  HCMUTE tr.78: while kiá»ƒm tra Ä‘iá»u kiá»‡n trÆ°á»›c (tiá»n kiá»ƒm tra), náº¿u sai ngay tá»« Ä‘áº§u thÃ¢n láº·p cháº¡y 0 láº§n. do-while kiá»ƒm tra sau, thÃ¢n láº·p luÃ´n cháº¡y Ã­t nháº¥t 1 láº§n.",
    tags: ["c-lang", "ch3", "theory", "easy"],
    reference: {
      uttPage: 'Trang 160',
      hcmutePage: 'Trang 78',
      section: '3.4',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch3-011',
    chapterId: 3,
    articleId: 'c-art-ch3-05',
    content: "Quy táº¯c cÃº phÃ¡p nÃ o sau Ä‘Ã¢y lÃ  Báº®T BUá»˜C khi káº¿t thÃºc má»™t cáº¥u trÃºc vÃ²ng láº·p do-while trong C?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "KhÃ´ng Ä‘Æ°á»£c phÃ©p Ä‘áº·t dáº¥u cháº¥m pháº©y ';' sau while(condition) vÃ¬ sáº½ gÃ¢y ra vÃ²ng láº·p vÃ´ táº­n." },
      { id: 'B', text: "Pháº£i cÃ³ tá»« khÃ³a enddo hoáº·c endwhile Ä‘áº·t ngay sau ngoáº·c nhá»n Ä‘Ã³ng cá»§a khá»‘i thÃ¢n vÃ²ng láº·p." },
      { id: 'C', text: "Pháº£i cÃ³ má»™t dáº¥u cháº¥m pháº©y ';' ngay sau biá»ƒu thá»©c Ä‘iá»u kiá»‡n Ä‘Ã³ng ngoáº·c while(condition);." },
      { id: 'D', text: "Pháº£i cÃ³ Ã­t nháº¥t má»™t lá»‡nh return hoáº·c break Ä‘áº·t bÃªn trong thÃ¢n vÃ²ng láº·p Ä‘á»ƒ trÃ¡nh treo mÃ¡y." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.165 vÃ  HCMUTE tr.81: CÃº phÃ¡p chuáº©n cá»§a do-while lÃ  do { ... } while (condition); - báº¯t buá»™c pháº£i cÃ³ dáº¥u cháº¥m pháº©y ';' sau biá»ƒu thá»©c while.",
    tags: ["c-lang", "ch3", "theory", "easy"],
    reference: {
      uttPage: 'Trang 165',
      hcmutePage: 'Trang 81',
      section: '3.5',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-012',
    chapterId: 3,
    articleId: 'c-art-ch3-06',
    content: "CÃ¢u lá»‡nh break cÃ³ pháº¡m vi tÃ¡c Ä‘á»™ng nhÆ° tháº¿ nÃ o khi Ä‘Æ°á»£c Ä‘áº·t bÃªn trong cÃ¡c vÃ²ng láº·p lá»“ng nhau?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Ngay láº­p tá»©c thoÃ¡t ra khá»i táº¥t cáº£ cÃ¡c vÃ²ng láº·p Ä‘ang lá»“ng nhau vÃ  tráº£ quyá»n Ä‘iá»u khiá»ƒn vá» main." },
      { id: 'B', text: "Chá»‰ cháº¥m dá»©t vÃ  thoÃ¡t ra khá»i vÃ²ng láº·p hoáº·c cáº¥u trÃºc switch trá»±c tiáº¿p chá»©a nÃ³ á»Ÿ trong cÃ¹ng." },
      { id: 'C', text: "Chá»‰ bá» qua cÃ¡c cÃ¢u lá»‡nh cÃ²n láº¡i trong lÆ°á»£t láº·p hiá»‡n táº¡i vÃ  nháº£y tá»›i lÆ°á»£t láº·p tiáº¿p theo cá»§a nÃ³." },
      { id: 'D', text: "Táº¡m dá»«ng viá»‡c thá»±c thi vÃ²ng láº·p hiá»‡n táº¡i Ä‘á»ƒ chuyá»ƒn sang thá»±c hiá»‡n vÃ²ng láº·p ngoÃ i cÃ¹ng nháº¥t." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.172 vÃ  HCMUTE tr.85: Lá»‡nh break chá»‰ thoÃ¡t khá»i vÃ²ng láº·p hoáº·c cáº¥u trÃºc switch náº±m á»Ÿ cáº¥p sÃ¢u nháº¥t trá»±c tiáº¿p bao quanh nÃ³, cÃ¡c vÃ²ng láº·p bÃªn ngoÃ i váº«n tiáº¿p tá»¥c.",
    tags: ["c-lang", "ch3", "theory", "easy"],
    reference: {
      uttPage: 'Trang 172',
      hcmutePage: 'Trang 85',
      section: '3.6',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-013',
    chapterId: 3,
    articleId: 'c-art-ch3-06',
    content: "Khi gáº·p cÃ¢u lá»‡nh continue trong thÃ¢n má»™t vÃ²ng láº·p for, chÆ°Æ¡ng trÃ¬nh sáº½ xá»­ lÃ½ nhÆ° tháº¿ nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "ThoÃ¡t ngay láº­p tá»©c khá»i toÃ n bá»™ vÃ²ng láº·p for vÃ  thá»±c thi cÃ¢u lá»‡nh tiáº¿p theo sau vÃ²ng láº·p." },
      { id: 'B', text: "Khá»Ÿi Ä‘á»™ng láº¡i toÃ n bá»™ vÃ²ng láº·p tá»« Ä‘áº§u vÃ  cháº¡y láº¡i biá»ƒu thá»©c khá»Ÿi táº¡o giÃ¡ trá»‹ biáº¿n ban Ä‘áº§u." },
      { id: 'C', text: "Táº¡m dá»«ng chÆ°Æ¡ng trÃ¬nh vÃ  chá» Ä‘á»£i ngÆ°á»i dÃ¹ng nháº­p thÃªm dá»¯ liá»‡u tá»« bÃ n phÃ­m Ä‘á»ƒ tiáº¿p tá»¥c láº·p." },
      { id: 'D', text: "Bá» qua cÃ¡c lá»‡nh cÃ²n láº¡i cá»§a thÃ¢n láº·p hiá»‡n táº¡i vÃ  nháº£y trá»±c tiáº¿p Ä‘áº¿n biá»ƒu thá»©c bÆ°á»›c nháº£y step." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.174 vÃ  HCMUTE tr.86: Trong vÃ²ng for, continue bá» qua cÃ¡c cÃ¢u lá»‡nh cÃ²n láº¡i phÃ­a sau trong thÃ¢n láº·p vÃ  chuyá»ƒn Ä‘iá»u khiá»ƒn ngay tá»›i biá»ƒu thá»©c bÆ°á»›c nháº£y (step), rá»“i kiá»ƒm tra Ä‘iá»u kiá»‡n.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 174',
      hcmutePage: 'Trang 86',
      section: '3.6',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-014',
    chapterId: 3,
    articleId: 'c-art-ch3-06',
    content: "VÃ¬ sao cÃ¡c tÃ i liá»‡u láº­p trÃ¬nh cáº¥u trÃºc hiá»‡n Ä‘áº¡i luÃ´n khuyáº¿n cÃ¡o háº¡n cháº¿ tá»‘i Ä‘a viá»‡c sá»­ dá»¥ng lá»‡nh goto?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "VÃ¬ goto lÃ m phÃ¡ vá»¡ cáº¥u trÃºc tuáº§n tá»± rÃµ rÃ ng, táº¡o ra mÃ£ nguá»“n spaghetti ráº¥t khÃ³ báº£o trÃ¬ vÃ  gá»¡ lá»—i." },
      { id: 'B', text: "VÃ¬ lá»‡nh goto lÃ m tiÃªu tá»‘n ráº¥t nhiá»u tÃ i nguyÃªn bá»™ nhá»› Heap cá»§a há»‡ Ä‘iá»u hÃ nh khi chuyá»ƒn nhÃ£n lá»‡nh." },
      { id: 'C', text: "VÃ¬ trÃ¬nh biÃªn dá»‹ch C hiá»‡n Ä‘áº¡i theo chuáº©n C99/C11 Ä‘Ã£ chÃ­nh thá»©c loáº¡i bá» hoÃ n toÃ n lá»‡nh goto nÃ y." },
      { id: 'D', text: "VÃ¬ goto chá»‰ cÃ³ thá»ƒ nháº£y ngÆ°á»£c lÃªn dÃ²ng lá»‡nh phÃ­a trÆ°á»›c chá»© khÃ´ng cho phÃ©p nháº£y xuÃ´i vá» phÃ­a sau." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.178 vÃ  HCMUTE tr.88: Lá»‡nh goto nháº£y tá»± do khÃ´ng cáº¥u trÃºc táº¡o ra mÃ£ spaghetti rá»‘i ráº¯m, khÃ³ theo dÃµi luá»“ng thá»±c thi vÃ  dá»… sinh lá»—i tiá»m áº©n.",
    tags: ["c-lang", "ch3", "theory", "medium"],
    reference: {
      uttPage: 'Trang 178',
      hcmutePage: 'Trang 88',
      section: '3.6',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-015',
    chapterId: 3,
    articleId: 'c-art-ch3-01',
    content: "Äoáº¡n mÃ£ sau in ra káº¿t quáº£ gÃ¬ mÃ n hÃ¬nh khi Ä‘Æ°á»£c biÃªn dá»‹ch vÃ  thá»±c thi?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 0;
    if (a = 5)
        printf("Dung: %d", a);
    else
        printf("Sai");
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra 'Sai' (vÃ¬ biáº¿n a ban Ä‘áº§u Ä‘Æ°á»£c khá»Ÿi táº¡o giÃ¡ trá»‹ báº±ng sá»‘ 0 mang chÃ¢n lÃ½ sai)." },
      { id: 'B', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch vÃ¬ toÃ¡n tá»­ gÃ¡n khÃ´ng Ä‘Æ°á»£c phÃ©p Ä‘áº·t trong Ä‘iá»u kiá»‡n if." },
      { id: 'C', text: "In ra 'Dung: 5' (do phÃ©p gÃ¡n a = 5 tráº£ vá» giÃ¡ trá»‹ 5 mang chÃ¢n lÃ½ Ä‘Ãºng)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh rÆ¡i vÃ o vÃ²ng láº·p vÃ´ táº­n vÃ  khÃ´ng in ra báº¥t ká»³ chuá»—i vÄƒn báº£n nÃ o cáº£." },
    ],
    correctAnswers: ['C'],
    explanation: "ÄÃ¢y lÃ  báº«y kinh Ä‘iá»ƒn: Trong Ä‘iá»u kiá»‡n lÃ  phÃ©p gÃ¡n (a = 5), giÃ¡ trá»‹ tráº£ vá» cá»§a biá»ƒu thá»©c gÃ¡n lÃ  5. VÃ¬ 5 khÃ¡c 0 nÃªn mang chÃ¢n trá»‹ true, thá»±c thi nhÃ¡nh then vÃ  in 'Dung: 5'.",
    tags: ["c-lang", "ch3", "output", "hard"],
    reference: {
      uttPage: 'Trang 128',
      hcmutePage: 'Trang 49',
      section: '3.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch3-016',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "GiÃ¡ trá»‹ in ra mÃ n hÃ¬nh cá»§a Ä‘oáº¡n chÆ°Æ¡ng trÃ¬nh sá»­ dá»¥ng cáº¥u trÃºc switch-case sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 2;
    switch (x) {
        case 1: printf("A");
        case 2: printf("B");
        case 3: printf("C");
        default: printf("D");
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "Chá»‰ in ra duy nháº¥t kÃ½ tá»± 'B' (vÃ¬ biá»ƒu thá»©c biáº¿n x cÃ³ giÃ¡ trá»‹ khá»›p vá»›i case 2)." },
      { id: 'B', text: "In ra chuá»—i 'BCD' (do khá»›p case 2 vÃ  trÃ´i lá»‡nh liÃªn tiáº¿p qua case 3 vÃ  default)." },
      { id: 'C', text: "In ra chuá»—i 'ABCD' (vÃ¬ switch sáº½ duyá»‡t tuáº§n tá»± qua táº¥t cáº£ cÃ¡c case cÃ³ trong mÃ£)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh bÃ¡o lá»—i biÃªn dá»‹ch do cÃ¡c má»‡nh Ä‘á» case khÃ´ng há» cÃ³ cÃ¢u lá»‡nh break." },
    ],
    correctAnswers: ['B'],
    explanation: "x = 2 khá»›p case 2, in 'B'. Do khÃ´ng cÃ³ break, luá»“ng thá»±c thi rÆ¡i qua case 3 in 'C', rá»“i rÆ¡i vÃ o default in 'D'. Káº¿t quáº£ in ra lÃ  'BCD'.",
    tags: ["c-lang", "ch3", "output", "hard"],
    reference: {
      uttPage: 'Trang 143',
      hcmutePage: 'Trang 62',
      section: '3.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-017',
    chapterId: 3,
    articleId: 'c-art-ch3-03',
    content: "Sá»‘ láº§n in ra mÃ n hÃ¬nh chá»¯ cÃ¡i 'X' trong Ä‘oáº¡n mÃ£ sá»­ dá»¥ng vÃ²ng láº·p for sau Ä‘Ã¢y lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 10; i += 2) {
        printf("X");
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra Ä‘Ãºng 10 láº§n (do Ä‘iá»u kiá»‡n biÃªn kiá»ƒm tra cá»§a vÃ²ng láº·p lÃ  biáº¿n i <= 10)." },
      { id: 'B', text: "In ra Ä‘Ãºng 4 láº§n (tÆ°Æ¡ng á»©ng vá»›i cÃ¡c giÃ¡ trá»‹ biáº¿n láº·p i láº§n lÆ°á»£t lÃ  1, 3, 5, 7)." },
      { id: 'C', text: "In ra Ä‘Ãºng 5 láº§n (tÆ°Æ¡ng á»©ng vá»›i cÃ¡c giÃ¡ trá»‹ biáº¿n láº·p i láº§n lÆ°á»£t lÃ  1, 3, 5, 7, 9)." },
      { id: 'D', text: "In ra Ä‘Ãºng 6 láº§n (tÆ°Æ¡ng á»©ng vá»›i cÃ¡c giÃ¡ trá»‹ biáº¿n láº·p i láº§n lÆ°á»£t lÃ  1, 3, 5, 7, 9, 11)." },
    ],
    correctAnswers: ['C'],
    explanation: "i báº¯t Ä‘áº§u tá»« 1, tÄƒng má»—i bÆ°á»›c 2: i = 1, 3, 5, 7, 9 (5 láº§n). Khi i = 11 > 10, vÃ²ng láº·p káº¿t thÃºc. In 5 chá»¯ 'X'.",
    tags: ["c-lang", "ch3", "output", "medium"],
    reference: {
      uttPage: 'Trang 151',
      hcmutePage: 'Trang 73',
      section: '3.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-018',
    chapterId: 3,
    articleId: 'c-art-ch3-04',
    content: "Káº¿t quáº£ in ra cá»§a biáº¿n Ä‘áº¿m count sau khi vÃ²ng láº·p while sau Ä‘Ã¢y káº¿t thÃºc lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int n = 3, count = 0;
    while (n-- > 0) {
        count += n;
    }
    printf("%d", count);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 6 (do biáº¿n n nháº­n cÃ¡c giÃ¡ trá»‹ 3, 2, 1 vÃ  tá»•ng dá»“n tÆ°Æ¡ng á»©ng lÃ  3 + 2 + 1 = 6)." },
      { id: 'B', text: "In ra sá»‘ 0 (do biá»ƒu thá»©c giáº£m n-- Ä‘Æ°á»£c tÃ­nh toÃ¡n sau khi toÃ n bá»™ vÃ²ng láº·p káº¿t thÃºc xong)." },
      { id: 'C', text: "In ra sá»‘ 2 (do vÃ²ng láº·p chá»‰ thá»±c thi Ä‘Æ°á»£c hai láº§n trÆ°á»›c khi biáº¿n n nháº­n giÃ¡ trá»‹ Ã¢m)." },
      { id: 'D', text: "In ra sá»‘ 3 (láº§n 1 n=3>0 giáº£m cÃ²n 2 cá»™ng vÃ o count; láº§n 2 n=2>0 giáº£m cÃ²n 1; láº§n 3 n=1>0 giáº£m cÃ²n 0)." },
    ],
    correctAnswers: ['D'],
    explanation: "VÃ²ng 1: n=3 (>0 Ä‘Ãºng), sau Ä‘iá»u kiá»‡n n cÃ²n 2, count += 2 -> count = 2. VÃ²ng 2: n=2 (>0), n thÃ nh 1, count += 1 -> count = 3. VÃ²ng 3: n=1 (>0), n thÃ nh 0, count += 0 -> count = 3. VÃ²ng 4: n=0 (sai), n thÃ nh -1, thoÃ¡t. Káº¿t quáº£ count = 3.",
    tags: ["c-lang", "ch3", "output", "hard"],
    reference: {
      uttPage: 'Trang 162',
      hcmutePage: 'Trang 79',
      section: '3.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-019',
    chapterId: 3,
    articleId: 'c-art-ch3-05',
    content: "GiÃ¡ trá»‹ cá»§a biáº¿n sá»‘ nguyÃªn x sau khi thá»±c hiá»‡n Ä‘oáº¡n mÃ£ do-while sau Ä‘Ã¢y lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 10;
    do {
        x += 5;
    } while (x < 10);
    printf("%d", x);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 15 (thÃ¢n do-while thá»±c thi má»™t láº§n tÄƒng x lÃªn 15 rá»“i kiá»ƒm tra 15 < 10 sai vÃ  dá»«ng)." },
      { id: 'B', text: "In ra sá»‘ 10 (vÃ¬ Ä‘iá»u kiá»‡n kiá»ƒm tra x < 10 sai ngay tá»« Ä‘áº§u nÃªn thÃ¢n lá»‡nh khÃ´ng Ä‘Æ°á»£c cháº¡y)." },
      { id: 'C', text: "In ra sá»‘ 20 (thÃ¢n lá»‡nh do-while Ä‘Æ°á»£c trÃ¬nh biÃªn dá»‹ch tá»± Ä‘á»™ng thá»±c hiá»‡n hai láº§n liÃªn tiáº¿p)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh cháº¡y vÃ´ táº­n do Ä‘iá»u kiá»‡n logic trong má»‡nh Ä‘á» while khÃ´ng bao giá» thá»a mÃ£n." },
    ],
    correctAnswers: ['A'],
    explanation: "do-while cháº¡y thÃ¢n trÆ°á»›c: x tÄƒng tá»« 10 thÃ nh 15. Sau Ä‘Ã³ má»›i kiá»ƒm tra Ä‘iá»u kiá»‡n (15 < 10), nháº­n káº¿t quáº£ sai vÃ  thoÃ¡t ngay. In ra 15.",
    tags: ["c-lang", "ch3", "output", "easy"],
    reference: {
      uttPage: 'Trang 166',
      hcmutePage: 'Trang 82',
      section: '3.5',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-020',
    chapterId: 3,
    articleId: 'c-art-ch3-07',
    content: "Tá»•ng sá»‘ dáº¥u hoa thá»‹ '*' Ä‘Æ°á»£c in ra mÃ n hÃ¬nh bá»Ÿi Ä‘oáº¡n mÃ£ hai vÃ²ng láº·p lá»“ng nhau sau lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int count = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = i; j < 3; j++) {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 9 (do hai vÃ²ng láº·p lá»“ng nhau cháº¡y tá»« 0 Ä‘áº¿n bÃ© hÆ¡n 3 nÃªn sá»‘ láº§n cháº¡y lÃ  3 x 3 = 9)." },
      { id: 'B', text: "In ra sá»‘ 6 (vá»›i i=0 vÃ²ng trong cháº¡y 3 láº§n; vá»›i i=1 cháº¡y 2 láº§n; vá»›i i=2 cháº¡y 1 láº§n; tá»•ng 3+2+1=6)." },
      { id: 'C', text: "In ra sá»‘ 3 (do vÃ²ng láº·p bÃªn trong chá»‰ phá»¥ thuá»™c vÃ o giÃ¡ trá»‹ cá»§a biáº¿n chá»‰ sá»‘ láº·p bÃªn ngoÃ i i)." },
      { id: 'D', text: "In ra sá»‘ 5 (do lÆ°á»£t láº·p cuá»‘i cÃ¹ng khi biáº¿n chá»‰ sá»‘ i Ä‘áº¡t giÃ¡ trá»‹ 2 bá»‹ bá» qua khÃ´ng thá»±c hiá»‡n)." },
    ],
    correctAnswers: ['B'],
    explanation: "i=0: j cháº¡y 0, 1, 2 (3 láº§n). i=1: j cháº¡y 1, 2 (2 láº§n). i=2: j cháº¡y 2 (1 láº§n). Tá»•ng cá»™ng count = 3 + 2 + 1 = 6.",
    tags: ["c-lang", "ch3", "output", "hard"],
    reference: {
      uttPage: 'Trang 180',
      hcmutePage: 'Trang 90',
      section: '3.7',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-021',
    chapterId: 3,
    articleId: 'c-art-ch3-06',
    content: "Káº¿t quáº£ in ra cá»§a biáº¿n sum sau khi cháº¡y xong hai vÃ²ng láº·p cÃ³ lá»‡nh break sau Ä‘Ã¢y lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int sum = 0;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            if (j == 2) break;
            sum++;
        }
    }
    printf("%d", sum);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 1 (lá»‡nh break thoÃ¡t ngay khá»i cáº£ hai vÃ²ng láº·p lá»“ng nhau sau láº§n láº·p Ä‘áº§u tiÃªn)." },
      { id: 'B', text: "In ra sá»‘ 6 (má»—i lÆ°á»£t cá»§a biáº¿n ngoÃ i i vÃ²ng trong cháº¡y Ä‘Æ°á»£c hai láº§n j=1 vÃ  j=2 xong dá»«ng)." },
      { id: 'C', text: "In ra sá»‘ 3 (má»—i lÆ°á»£t i vÃ²ng trong chá»‰ cháº¡y Ä‘Æ°á»£c j=1 rá»“i break ngay; 3 lÆ°á»£t cho tá»•ng 3)." },
      { id: 'D', text: "In ra sá»‘ 0 (do Ä‘iá»u kiá»‡n j == 2 kÃ­ch hoáº¡t break trÆ°á»›c khi biáº¿n sum ká»‹p thá»±c hiá»‡n phÃ©p cá»™ng)." },
    ],
    correctAnswers: ['C'],
    explanation: "break chá»‰ thoÃ¡t vÃ²ng láº·p for (j) trong cÃ¹ng. Vá»›i má»—i i (1, 2, 3), j=1 tÄƒng sum lÃªn 1, Ä‘áº¿n j=2 thÃ¬ break thoÃ¡t ra vÃ²ng ngoÃ i. Tá»•ng sum tÄƒng 3 láº§n, káº¿t quáº£ lÃ  3.",
    tags: ["c-lang", "ch3", "output", "hard"],
    reference: {
      uttPage: 'Trang 173',
      hcmutePage: 'Trang 85',
      section: '3.6',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-022',
    chapterId: 3,
    articleId: 'c-art-ch3-06',
    content: "Äoáº¡n chÆ°Æ¡ng trÃ¬nh C sá»­ dá»¥ng lá»‡nh continue sau Ä‘Ã¢y in ra chuá»—i káº¿t quáº£ nÃ o?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        if (i % 2 == 0) continue;
        printf("%d", i);
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuá»—i '24' (lá»‡nh continue chá»‰ cho phÃ©p in cÃ¡c giÃ¡ trá»‹ thá»a mÃ£n Ä‘iá»u kiá»‡n chia háº¿t cho 2)." },
      { id: 'B', text: "In ra chuá»—i '12345' (lá»‡nh continue khÃ´ng cÃ³ tÃ¡c dá»¥ng lÃ m thay Ä‘á»•i luá»“ng thá»±c thi lá»‡nh in)." },
      { id: 'C', text: "In ra chuá»—i '1' (chÆ°Æ¡ng trÃ¬nh dá»«ng ngay táº¡i giÃ¡ trá»‹ cháºµn Ä‘áº§u tiÃªn khi gáº·p lá»‡nh continue)." },
      { id: 'D', text: "In ra chuá»—i '135' (lá»‡nh continue bá» qua thao tÃ¡c in ra Ä‘á»‘i vá»›i táº¥t cáº£ cÃ¡c sá»‘ cháºµn 2 vÃ  4)." },
    ],
    correctAnswers: ['D'],
    explanation: "Khi i cháºµn (2, 4), i % 2 == 0 lÃ  true, lá»‡nh continue bá» qua printf vÃ  nháº£y sang bÆ°á»›c tÄƒng i++. Do Ä‘Ã³ chá»‰ cÃ¡c sá»‘ láº» 1, 3, 5 Ä‘Æ°á»£c in ra.",
    tags: ["c-lang", "ch3", "output", "medium"],
    reference: {
      uttPage: 'Trang 175',
      hcmutePage: 'Trang 87',
      section: '3.6',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-023',
    chapterId: 3,
    articleId: 'c-art-ch3-01',
    content: "GiÃ¡ trá»‹ cá»§a biáº¿n result sau khi thá»±c hiá»‡n biá»ƒu thá»©c toÃ¡n tá»­ ba ngÃ´i lá»“ng nhau sau lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int a = 5, b = 10, c = 7;
    int result = (a > b) ? a : ((b > c) ? b : c);
    printf("%d", result);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 10 (do (a > b) sai nÃªn lÆ°á»£ng giÃ¡ nhÃ¡nh thá»© hai ((b > c) ? b : c) tráº£ vá» sá»‘ 10)." },
      { id: 'B', text: "In ra sá»‘ 5 (do biá»ƒu thá»©c Ä‘iá»u kiá»‡n Ä‘áº§u tiÃªn láº¥y trá»±c tiáº¿p giÃ¡ trá»‹ cá»§a biáº¿n a Ä‘áº·t vÃ o káº¿t quáº£)." },
      { id: 'C', text: "In ra sá»‘ 7 (do nhÃ¡nh cuá»‘i cÃ¹ng trong biá»ƒu thá»©c ba ngÃ´i lá»“ng nhau Ä‘Æ°á»£c Æ°u tiÃªn thá»±c thi)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh gáº·p lá»—i biÃªn dá»‹ch do toÃ¡n tá»­ Ä‘iá»u kiá»‡n ba ngÃ´i khÃ´ng cho phÃ©p viáº¿t lá»“ng nhau." },
    ],
    correctAnswers: ['A'],
    explanation: "a > b (5 > 10) lÃ  False. Chuyá»ƒn sang váº¿ sau: (b > c) ? b : c -> (10 > 7) lÃ  True -> tráº£ vá» b (10). Káº¿t quáº£ lÃ  10 (tÃ¬m max cá»§a 3 sá»‘).",
    tags: ["c-lang", "ch3", "output", "medium"],
    reference: {
      uttPage: 'Trang 135',
      hcmutePage: 'Trang 56',
      section: '3.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-024',
    chapterId: 3,
    articleId: 'c-art-ch3-03',
    content: "GiÃ¡ trá»‹ in ra cá»§a biáº¿n i sau khi vÃ²ng láº·p for sau Ä‘Ã¢y káº¿t thÃºc bÃ¬nh thÆ°á»ng lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int i;
    for (i = 0; i < 5; i++) {
        // KhÃ´ng lÃ m gÃ¬
    }
    printf("%d", i);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 4 (vÃ¬ lÆ°á»£t láº·p há»£p lá»‡ cuá»‘i cÃ¹ng bÃªn trong thÃ¢n vÃ²ng láº·p á»©ng vá»›i giÃ¡ trá»‹ biáº¿n i = 4)." },
      { id: 'B', text: "In ra sá»‘ 5 (khi biáº¿n i tÄƒng lÃªn Ä‘áº¿n giÃ¡ trá»‹ 5 thÃ¬ Ä‘iá»u kiá»‡n i < 5 sai vÃ  vÃ²ng láº·p dá»«ng láº¡i)." },
      { id: 'C', text: "In ra sá»‘ 0 (do sau khi káº¿t thÃºc vÃ²ng láº·p biáº¿n i tá»± Ä‘á»™ng Ä‘Æ°á»£c hoÃ n tráº£ vá» giÃ¡ trá»‹ ban Ä‘áº§u)." },
      { id: 'D', text: "Biáº¿n i khÃ´ng tá»“n táº¡i ngoÃ i vÃ²ng láº·p dáº«n Ä‘áº¿n chÆ°Æ¡ng trÃ¬nh phÃ¡t sinh lá»—i khÃ´ng biÃªn dá»‹ch Ä‘Æ°á»£c." },
    ],
    correctAnswers: ['B'],
    explanation: "Biáº¿n i Ä‘Æ°á»£c khai bÃ¡o bÃªn ngoÃ i for. VÃ²ng láº·p dá»«ng khi Ä‘iá»u kiá»‡n i < 5 trá»Ÿ thÃ nh false, tá»©c lÃ  lÃºc i Ä‘áº¡t giÃ¡ trá»‹ 5. VÃ¬ váº­y sau vÃ²ng láº·p, i cÃ³ giÃ¡ trá»‹ báº±ng 5.",
    tags: ["c-lang", "ch3", "output", "medium"],
    reference: {
      uttPage: 'Trang 152',
      hcmutePage: 'Trang 74',
      section: '3.3',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-025',
    chapterId: 3,
    articleId: 'c-art-ch3-04',
    content: "Äoáº¡n mÃ£ sau tÃ­nh toÃ¡n vÃ  in ra mÃ n hÃ¬nh giÃ¡ trá»‹ lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int x = 1234, sum = 0;
    while (x > 0) {
        sum += x % 10;
        x /= 10;
    }
    printf("%d", sum);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 4 (chÆ°Æ¡ng trÃ¬nh chá»‰ láº¥y Ä‘Æ°á»£c chá»¯ sá»‘ hÃ ng Ä‘Æ¡n vá»‹ cuá»‘i cÃ¹ng trÆ°á»›c khi vÃ²ng láº·p dá»«ng)." },
      { id: 'B', text: "In ra sá»‘ 1234 (do phÃ©p chia x /= 10 khÃ´ng lÃ m thay Ä‘á»•i giÃ¡ trá»‹ thá»±c táº¿ cá»§a biáº¿n nguyÃªn x)." },
      { id: 'C', text: "In ra sá»‘ 10 (chÆ°Æ¡ng trÃ¬nh tÃ¡ch tá»«ng chá»¯ sá»‘ cá»§a 1234 vÃ  tÃ­nh tá»•ng tÃ­ch lÅ©y: 4 + 3 + 2 + 1 = 10)." },
      { id: 'D', text: "In ra sá»‘ 24 (chÆ°Æ¡ng trÃ¬nh thá»±c hiá»‡n tÃ­nh tÃ­ch phÃ¢n phá»‘i cá»§a táº¥t cáº£ cÃ¡c chá»¯ sá»‘ nguyÃªn)." },
    ],
    correctAnswers: ['C'],
    explanation: "Thuáº­t toÃ¡n kinh Ä‘iá»ƒn tÃ¡ch chá»¯ sá»‘: x % 10 láº¥y chá»¯ sá»‘ cuá»‘i, x /= 10 bá» chá»¯ sá»‘ cuá»‘i. CÃ¡c chá»¯ sá»‘ láº§n lÆ°á»£t cá»™ng vÃ o sum: 4, 3, 2, 1. Tá»•ng = 10.",
    tags: ["c-lang", "ch3", "output", "hard"],
    reference: {
      uttPage: 'Trang 163',
      hcmutePage: 'Trang 80',
      section: '3.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-026',
    chapterId: 3,
    articleId: 'c-art-ch3-01',
    content: "Láº­p trÃ¬nh viÃªn muá»‘n kiá»ƒm tra náº¿u x báº±ng 0 thÃ¬ in 'Zero', nhÆ°ng Ä‘oáº¡n mÃ£ sau luÃ´n in 'Non-Zero'. NguyÃªn nhÃ¢n do Ä‘Ã¢u?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int x = 0;
if (x = 0)
    printf("Zero");
else
    printf("Non-Zero");`,
    options: [
      { id: 'A', text: "Do biáº¿n x khÃ´ng Ä‘Æ°á»£c phÃ©p khai bÃ¡o giÃ¡ trá»‹ khá»Ÿi táº¡o báº±ng sá»‘ 0 trÆ°á»›c khi Ä‘Æ°a vÃ o cáº¥u trÃºc if." },
      { id: 'B', text: "Do cÃ¢u lá»‡nh printf(\"Zero\") thiáº¿u dáº¥u cháº¥m pháº©y káº¿t thÃºc khiáº¿n trÃ¬nh biÃªn dá»‹ch tá»± Ä‘á»™ng bá» qua." },
      { id: 'C', text: "Do kiá»ƒu sá»‘ nguyÃªn int trong C khÃ´ng thá»ƒ so sÃ¡nh trá»±c tiáº¿p vá»›i háº±ng sá»‘ 0 trong biá»ƒu thá»©c Ä‘iá»u kiá»‡n." },
      { id: 'D', text: "Do dÃ¹ng nháº§m toÃ¡n tá»­ gÃ¡n '=' thay vÃ¬ toÃ¡n tá»­ so sÃ¡nh '==', phÃ©p gÃ¡n x = 0 tráº£ vá» 0 mang chÃ¢n trá»‹ false." },
    ],
    correctAnswers: ['D'],
    explanation: "if (x = 0) lÃ  phÃ©p gÃ¡n biáº¿n x báº±ng 0. GiÃ¡ trá»‹ cá»§a biá»ƒu thá»©c gÃ¡n lÃ  0 (mang nghÄ©a false), do Ä‘Ã³ luÃ´n nháº£y vÃ o nhÃ¡nh else in 'Non-Zero'. Cáº§n sá»­a thÃ nh if (x == 0).",
    tags: ["c-lang", "ch3", "debug", "medium"],
    reference: {
      uttPage: 'Trang 129',
      hcmutePage: 'Trang 50',
      section: '3.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-027',
    chapterId: 3,
    articleId: 'c-art-ch3-03',
    content: "Äoáº¡n mÃ£ sau cÃ³ lá»—i logic gÃ¬ khiáº¿n chá»¯ 'Hello' chá»‰ Ä‘Æ°á»£c in ra duy nháº¥t má»™t láº§n thay vÃ¬ 5 láº§n?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    for (int i = 0; i < 5; i++);
    {
        printf("Hello\\n");
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "Do cáº·p dáº¥u ngoáº·c nhá»n '{ }' phÃ­a dÆ°á»›i khÃ´ng há»£p lá»‡ trong cáº¥u trÃºc khá»‘i lá»‡nh cá»§a ngÃ´n ngá»¯ C." },
      { id: 'B', text: "Do biáº¿n i Ä‘Æ°á»£c khai bÃ¡o trá»±c tiáº¿p bÃªn trong má»‡nh Ä‘á» for gÃ¢y ra xung Ä‘á»™t táº§m vá»±c bá»™ nhá»›." },
      { id: 'C', text: "Do Ä‘iá»u kiá»‡n i < 5 chá»‰ thá»a mÃ£n má»™t láº§n duy nháº¥t khi biáº¿n i nháº­n giÃ¡ trá»‹ khá»Ÿi táº¡o ban Ä‘áº§u lÃ  0." },
      { id: 'D', text: "Do cÃ³ dáº¥u cháº¥m pháº©y ';' Ä‘áº·t ngay sau cÃ¢u lá»‡nh for, biáº¿n thÃ¢n vÃ²ng láº·p thÃ nh má»™t cÃ¢u lá»‡nh rá»—ng." },
    ],
    correctAnswers: ['D'],
    explanation: "Báº«y dáº¥u cháº¥m pháº©y sau for: 'for (...);' táº¡o má»™t vÃ²ng láº·p rá»—ng cháº¡y 5 láº§n khÃ´ng lÃ m gÃ¬. Khá»‘i lá»‡nh { printf(\"Hello\"); } trá»Ÿ thÃ nh má»™t khá»‘i lá»‡nh Ä‘á»™c láº­p ngoÃ i for, chá»‰ cháº¡y 1 láº§n.",
    tags: ["c-lang", "ch3", "debug", "hard"],
    reference: {
      uttPage: 'Trang 154',
      hcmutePage: 'Trang 76',
      section: '3.3',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch3-028',
    chapterId: 3,
    articleId: 'c-art-ch3-04',
    content: "Äoáº¡n chÆ°Æ¡ng trÃ¬nh sau Ä‘Ã¢y phÃ¡t sinh lá»—i gÃ¬ khi Ä‘Æ°á»£c náº¡p cháº¡y trong thá»±c táº¿?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int i = 0;
    while (i < 5);
    {
        printf("%d ", i);
        i++;
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "Bá»‹ treo trong vÃ²ng láº·p vÃ´ táº­n ngay táº¡i dÃ²ng while do dáº¥u cháº¥m pháº©y ';' lÃ m thÃ¢n vÃ²ng láº·p rá»—ng." },
      { id: 'B', text: "ChÆ°Æ¡ng trÃ¬nh in ra dÃ£y sá»‘ tá»« 0 Ä‘áº¿n 4 rá»“i káº¿t thÃºc bÃ¬nh thÆ°á»ng mÃ  khÃ´ng há» cÃ³ báº¥t ká»³ lá»—i nÃ o." },
      { id: 'C', text: "TrÃ¬nh biÃªn dá»‹ch bÃ¡o lá»—i cÃº phÃ¡p biÃªn dá»‹ch vÃ¬ lá»‡nh while khÃ´ng bao giá» Ä‘Æ°á»£c phÃ©p cÃ³ dáº¥u cháº¥m pháº©y." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh in ra ngay giÃ¡ trá»‹ sá»‘ 0 rá»“i tá»± Ä‘á»™ng káº¿t thÃºc thoÃ¡t ra khá»i há»‡ Ä‘iá»u hÃ nh mÃ¡y chá»§." },
    ],
    correctAnswers: ['A'],
    explanation: "Dáº¥u ';' sau while (i < 5); khiáº¿n thÃ¢n while rá»—ng. VÃ¬ i = 0 luÃ´n < 5 vÃ  khÃ´ng bao giá» Ä‘Æ°á»£c tÄƒng trong thÃ¢n while rá»—ng, chÆ°Æ¡ng trÃ¬nh rÆ¡i vÃ o vÃ²ng láº·p vÃ´ táº­n táº¡i dÃ²ng Ä‘Ã³.",
    tags: ["c-lang", "ch3", "debug", "hard"],
    reference: {
      uttPage: 'Trang 161',
      hcmutePage: 'Trang 79',
      section: '3.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-029',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "TrÃ¬nh biÃªn dá»‹ch GCC sáº½ bÃ¡o lá»—i gÃ¬ khi biÃªn dá»‹ch Ä‘oáº¡n mÃ£ cáº¥u trÃºc switch sau Ä‘Ã¢y?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `float score = 8.5;
switch (score) {
    case 8.5: printf("Gioi"); break;
    default: printf("Kha");
}`,
    options: [
      { id: 'A', text: "BÃ¡o lá»—i biÃªn dá»‹ch vÃ¬ giÃ¡ trá»‹ nhÃ£n case 8.5 khÃ´ng Ä‘Æ°á»£c phÃ©p cÃ³ pháº§n sá»‘ dÆ° tháº­p phÃ¢n láº» phÃ­a sau." },
      { id: 'B', text: "BÃ¡o lá»—i biÃªn dá»‹ch vÃ¬ biá»ƒu thá»©c Ä‘iá»u khiá»ƒn cá»§a cáº¥u trÃºc switch khÃ´ng Ä‘Æ°á»£c phÃ©p lÃ  sá»‘ thá»±c float." },
      { id: 'C', text: "BÃ¡o lá»—i cáº£nh bÃ¡o thiáº¿u ngoáº·c nhá»n bao quanh tá»«ng cÃ¢u lá»‡nh thá»±c thi náº±m bÃªn trong cÃ¡c case." },
      { id: 'D', text: "KhÃ´ng cÃ³ lá»—i biÃªn dá»‹ch nÃ o, chÆ°Æ¡ng trÃ¬nh váº«n cháº¡y vÃ  in ra chuá»—i chá»¯ 'Gioi' bÃ¬nh thÆ°á»ng." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© chuáº©n C: Biá»ƒu thá»©c switch(expr) báº¯t buá»™c pháº£i cÃ³ kiá»ƒu nguyÃªn (integer type). Truyá»n biáº¿n float score gÃ¢y lá»—i biÃªn dá»‹ch: 'switch quantity not an integer'.",
    tags: ["c-lang", "ch3", "debug", "medium"],
    reference: {
      uttPage: 'Trang 140',
      hcmutePage: 'Trang 59',
      section: '3.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-030',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "VÃ¬ sao Ä‘oáº¡n chÆ°Æ¡ng trÃ¬nh C sá»­ dá»¥ng switch-case sau Ä‘Ã¢y khÃ´ng thá»ƒ biÃªn dá»‹ch thÃ nh cÃ´ng?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `int x = 2, target = 2;
switch (x) {
    case target: printf("Khop"); break;
    default: printf("Khong khop");
}`,
    options: [
      { id: 'A', text: "Do hai biáº¿n sá»‘ nguyÃªn x vÃ  target cÃ³ cÃ¹ng giÃ¡ trá»‹ báº±ng 2 gÃ¢y ra xung Ä‘á»™t ná»™i bá»™ trong cáº¥u trÃºc." },
      { id: 'B', text: "Do lá»‡nh break chá»‰ Ä‘Æ°á»£c dÃ¹ng trong cÃ¡c vÃ²ng láº·p for/while chá»© khÃ´ng Ä‘Æ°á»£c dÃ¹ng trong switch." },
      { id: 'C', text: "Do nhÃ£n case báº¯t buá»™c pháº£i lÃ  má»™t háº±ng sá»‘ xÃ¡c Ä‘á»‹nh khi biÃªn dá»‹ch, khÃ´ng Ä‘Æ°á»£c phÃ©p dÃ¹ng biáº¿n target." },
      { id: 'D', text: "Do má»‡nh Ä‘á» default báº¯t buá»™c pháº£i cÃ³ cÃ¢u lá»‡nh break Ä‘áº·t á»Ÿ cuá»‘i Ä‘á»ƒ ngÄƒn trÃ n dá»¯ liá»‡u nhá»›." },
    ],
    correctAnswers: ['C'],
    explanation: "Trong C, nhÃ£n case pháº£i lÃ  háº±ng sá»‘ nguyÃªn (compile-time constant). Biáº¿n 'target' dÃ¹ cÃ³ khá»Ÿi táº¡o váº«n lÃ  biáº¿n (variable) nÃªn gÃ¢y lá»—i 'case label does not reduce to an integer constant'.",
    tags: ["c-lang", "ch3", "debug", "hard"],
    reference: {
      uttPage: 'Trang 141',
      hcmutePage: 'Trang 60',
      section: '3.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-031',
    chapterId: 3,
    articleId: 'c-art-ch3-04',
    content: "Äoáº¡n mÃ£ tÃ¬m sá»‘ nguyÃªn tá»‘ sau máº¯c lá»—i logic nghiÃªm trá»ng nÃ o khiáº¿n chÆ°Æ¡ng trÃ¬nh bá»‹ treo?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int i = 2, n = 7;
    while (i < n) {
        if (n % i == 0) break;
    }
    return 0;
}`,
    options: [
      { id: 'A', text: "Äiá»u kiá»‡n i < n bá»‹ sai khiáº¿n cho vÃ²ng láº·p while khÃ´ng bao giá» thá»±c thi má»™t láº§n nÃ o cáº£." },
      { id: 'B', text: "ToÃ¡n tá»­ chia láº¥y dÆ° % khÃ´ng thá»ƒ hoáº¡t Ä‘á»™ng chÃ­nh xÃ¡c khi hai toÃ¡n háº¡ng Ä‘á»u lÃ  sá»‘ nguyÃªn." },
      { id: 'C', text: "Lá»‡nh break lÃ m sáº­p chÆ°Æ¡ng trÃ¬nh vÃ¬ nÃ³ chá»‰ Ä‘Æ°á»£c phÃ©p kÃ­ch hoáº¡t bÃªn trong cáº¥u trÃºc switch." },
      { id: 'D', text: "QuÃªn lá»‡nh tÄƒng bÆ°á»›c nháº£y i++ bÃªn trong thÃ¢n vÃ²ng láº·p dáº«n Ä‘áº¿n láº·p vÃ´ táº­n vÃ¬ i luÃ´n báº±ng 2." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong vÃ²ng láº·p while, biáº¿n i = 2 khÃ´ng Ä‘Æ°á»£c tÄƒng (thiáº¿u i++). VÃ¬ n = 7 khÃ´ng chia háº¿t cho 2, if khÃ´ng kÃ­ch hoáº¡t break, dáº«n Ä‘áº¿n láº·p vÃ´ táº­n vá»›i i = 2.",
    tags: ["c-lang", "ch3", "debug", "medium"],
    reference: {
      uttPage: 'Trang 161',
      hcmutePage: 'Trang 79',
      section: '3.4',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-032',
    chapterId: 3,
    articleId: 'c-art-ch3-05',
    content: "ChÆ°Æ¡ng trÃ¬nh sau phÃ¡t sinh lá»—i biÃªn dá»‹ch á»Ÿ dÃ²ng lá»‡nh nÃ o vÃ  cáº§n kháº¯c phá»¥c nhÆ° tháº¿ nÃ o?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `#include <stdio.h>

int main(void) {
    int k = 1;
    do {
        printf("%d ", k);
        k++;
    } while (k <= 3)
    return 0;
}`,
    options: [
      { id: 'A', text: "Lá»—i thiáº¿u dáº¥u cháº¥m pháº©y ';' á»Ÿ cuá»‘i má»‡nh Ä‘á» while (k <= 3); trong cáº¥u trÃºc láº·p do-while." },
      { id: 'B', text: "Lá»—i khai bÃ¡o biáº¿n k bÃªn ngoÃ i thÃ¢n khá»‘i lá»‡nh do-while dáº«n Ä‘áº¿n xung Ä‘á»™t bá»™ nhá»› cá»¥c bá»™." },
      { id: 'C', text: "Lá»—i sá»­ dá»¥ng toÃ¡n tá»­ tÄƒng háº­u tá»‘ k++ bÃªn trong thÃ¢n lá»‡nh cá»§a khá»‘i cáº¥u trÃºc do-while." },
      { id: 'D', text: "Lá»—i thiáº¿u cÃ¢u lá»‡nh break Ä‘áº·t bÃªn trong thÃ¢n vÃ²ng láº·p Ä‘á»ƒ cháº·n vÃ²ng láº·p cháº¡y quÃ¡ giá»›i háº¡n." },
    ],
    correctAnswers: ['A'],
    explanation: "Cáº¥u trÃºc do-while trong C báº¯t buá»™c káº¿t thÃºc báº±ng dáº¥u cháº¥m pháº©y: } while (k <= 3);. Thiáº¿u dáº¥u ';' sáº½ dáº«n Ä‘áº¿n lá»—i cÃº phÃ¡p 'expected ';' before 'return''.",
    tags: ["c-lang", "ch3", "debug", "easy"],
    reference: {
      uttPage: 'Trang 165',
      hcmutePage: 'Trang 81',
      section: '3.5',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-033',
    chapterId: 3,
    articleId: 'c-art-ch3-02',
    content: "Cáº§n Ä‘iá»n tá»« khÃ³a nÃ o vÃ o vá»‹ trÃ­ (...) Ä‘á»ƒ ngÄƒn khÃ´ng cho chÆ°Æ¡ng trÃ¬nh trÃ´i lá»‡nh xuá»‘ng case káº¿ tiáº¿p?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `switch (color) {
    case 1: printf("Red"); ...
    case 2: printf("Blue"); break;
}`,
    options: [
      { id: 'A', text: "Äiá»n tá»« khÃ³a 'break;' Ä‘á»ƒ láº­p tá»©c thoÃ¡t ra khá»i toÃ n bá»™ cáº¥u trÃºc chá»n Ä‘a nhÃ¡nh switch." },
      { id: 'B', text: "Äiá»n tá»« khÃ³a 'continue;' Ä‘á»ƒ bá» qua cÃ¡c cÃ¢u lá»‡nh cÃ²n láº¡i vÃ  kiá»ƒm tra case tiáº¿p theo." },
      { id: 'C', text: "Äiá»n tá»« khÃ³a 'return;' Ä‘á»ƒ káº¿t thÃºc vÃ²ng láº·p hiá»‡n táº¡i mÃ  khÃ´ng lÃ m táº¯t chÆ°Æ¡ng trÃ¬nh." },
      { id: 'D', text: "Äiá»n tá»« khÃ³a 'exit;' Ä‘á»ƒ giáº£i phÃ³ng bá»™ nhá»› cá»§a cáº¥u trÃºc switch trÆ°á»›c khi chuyá»ƒn nhÃ¡nh." },
    ],
    correctAnswers: ['A'],
    explanation: "Lá»‡nh 'break;' dÃ¹ng Ä‘á»ƒ ngáº¯t dÃ²ng thá»±c thi vÃ  thoÃ¡t khá»i switch, ngÄƒn hiá»‡n tÆ°á»£ng fall-through sang cÃ¡c case bÃªn dÆ°á»›i.",
    tags: ["c-lang", "ch3", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 143',
      hcmutePage: 'Trang 62',
      section: '3.2',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch3-034',
    chapterId: 3,
    articleId: 'c-art-ch3-06',
    content: "Cáº§n Ä‘iá»n cÃ¢u lá»‡nh nÃ o vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ chá»‰ in ra cÃ¡c sá»‘ láº» trong Ä‘oáº¡n tá»« 1 Ä‘áº¿n 10?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) ...;
    printf("%d ", i);
}`,
    options: [
      { id: 'A', text: "Äiá»n lá»‡nh 'break' Ä‘á»ƒ dá»«ng ngay láº­p tá»©c vÃ²ng láº·p for khi phÃ¡t hiá»‡n sá»‘ cháºµn Ä‘áº§u tiÃªn." },
      { id: 'B', text: "Äiá»n lá»‡nh 'continue' Ä‘á»ƒ bá» qua lá»‡nh printf bÃªn dÆ°á»›i khi gáº·p giÃ¡ trá»‹ biáº¿n i lÃ  sá»‘ cháºµn." },
      { id: 'C', text: "Äiá»n lá»‡nh 'return' Ä‘á»ƒ chuyá»ƒn quyá»n Ä‘iá»u khiá»ƒn chÆ°Æ¡ng trÃ¬nh vá» láº¡i há»‡ Ä‘iá»u hÃ nh mÃ¡y chá»§." },
      { id: 'D', text: "Äiá»n lá»‡nh 'goto end' Ä‘á»ƒ káº¿t thÃºc toÃ n bá»™ viá»‡c in cÃ¡c sá»‘ cÃ²n láº¡i trong dÃ£y sá»‘ nguyÃªn." },
    ],
    correctAnswers: ['B'],
    explanation: "Khi i cháºµn, 'continue;' sáº½ bá» qua cÃ¢u lá»‡nh printf phÃ­a dÆ°á»›i vÃ  nháº£y trá»±c tiáº¿p Ä‘áº¿n bÆ°á»›c tÄƒng i++ Ä‘á»ƒ xÃ©t sá»‘ láº» tiáº¿p theo.",
    tags: ["c-lang", "ch3", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 175',
      hcmutePage: 'Trang 87',
      section: '3.6',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch3-035',
    chapterId: 3,
    articleId: 'c-art-ch3-03',
    content: "Cáº§n Ä‘iá»n Ä‘iá»u kiá»‡n nÃ o vÃ o chá»— trá»‘ng (...) trong vÃ²ng láº·p for Ä‘á»ƒ duyá»‡t máº£ng ngÆ°á»£c tá»« pháº§n tá»­ n-1 vá» 0?",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'medium',
    codeSnippet: `for (int i = n - 1; ...; i--) {
    printf("%d ", a[i]);
}`,
    options: [
      { id: 'A', text: "Äiá»n Ä‘iá»u kiá»‡n 'i > 0' Ä‘á»ƒ vÃ²ng láº·p tá»± Ä‘á»™ng dá»«ng láº¡i trÆ°á»›c khi chá»‰ sá»‘ máº£ng bá»‹ giáº£m vá» sá»‘ Ã¢m." },
      { id: 'B', text: "Äiá»n Ä‘iá»u kiá»‡n 'i == 0' Ä‘á»ƒ vÃ²ng láº·p chá»‰ kÃ­ch hoáº¡t Ä‘Ãºng má»™t láº§n táº¡i vá»‹ trÃ­ chá»‰ sá»‘ gá»‘c Ä‘áº§u máº£ng." },
      { id: 'C', text: "Äiá»n Ä‘iá»u kiá»‡n 'i >= 0' Ä‘á»ƒ Ä‘áº£m báº£o chá»‰ sá»‘ máº£ng dá»«ng láº¡i chÃ­nh xÃ¡c táº¡i pháº§n tá»­ Ä‘áº§u tiÃªn a[0]." },
      { id: 'D', text: "Äiá»n Ä‘iá»u kiá»‡n 'i <= n' Ä‘á»ƒ vÃ²ng láº·p kiá»ƒm tra toÃ n bá»™ kÃ­ch thÆ°á»›c cá»§a máº£ng trong bá»™ nhá»› mÃ¡y." },
    ],
    correctAnswers: ['C'],
    explanation: "Máº£ng cÃ³ n pháº§n tá»­ cÃ³ chá»‰ sá»‘ tá»« 0 Ä‘áº¿n n-1. Duyá»‡t ngÆ°á»£c tá»« n-1 vá» 0 thÃ¬ Ä‘iá»u kiá»‡n láº·p lÃ  'i >= 0'. Náº¿u dÃ¹ng 'i > 0' sáº½ bá»‹ sÃ³t pháº§n tá»­ a[0].",
    tags: ["c-lang", "ch3", "fill-in", "medium"],
    reference: {
      uttPage: 'Trang 151',
      hcmutePage: 'Trang 73',
      section: '3.3',
    },
    mockExamPreset: false,
  },
];
