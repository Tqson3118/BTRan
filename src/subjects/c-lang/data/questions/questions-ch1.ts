/**
 * src/subjects/c-lang/data/questions/questions-ch1.ts
 * NgÃ¢n hÃ ng cÃ¢u há»i tráº¯c nghiá»‡m ChuyÃªn sÃ¢u ChÆ°Æ¡ng 1: Tá»•ng quan ngÃ´n ngá»¯ C & MÃ´i trÆ°á»ng phÃ¡t triá»ƒn
 * Sá»‘ lÆ°á»£ng: 25 cÃ¢u há»i chuáº©n hÃ³a
 * Báº£n quyá»n dá»¯ liá»‡u há»c táº­p Äáº¡i há»c SÆ° pháº¡m Ká»¹ thuáº­t TP.HCM (HCMUTE)
 * TuÃ¢n thá»§ 100% TiÃªu chuáº©n Psychometric Anti-Bias Gate
 */

import type { CQuestion } from '../../types/index';

export const questionsCh1: CQuestion[] = [
  {
    id: 'q-c-ch1-001',
    chapterId: 1,
    articleId: 'c-art-ch1-01',
    content: "NgÃ´n ngá»¯ láº­p trÃ¬nh C Ä‘Æ°á»£c Dennis Ritchie phÃ¡t triá»ƒn láº§n Ä‘áº§u tiÃªn táº¡i Ä‘Ã¢u vÃ  vÃ o nÄƒm nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Táº¡i viá»‡n cÃ´ng nghá»‡ MIT trong khuÃ´n khá»• dá»± Ã¡n GNU vÃ o nÄƒm 1983." },
      { id: 'B', text: "Táº¡i trung tÃ¢m nghiÃªn cá»©u Xerox PARC á»Ÿ California vÃ o nÄƒm 1969." },
      { id: 'C', text: "Táº¡i phÃ²ng thÃ­ nghiá»‡m cá»§a táº­p Ä‘oÃ n mÃ¡y tÃ­nh IBM vÃ o nÄƒm 1975." },
      { id: 'D', text: "Táº¡i phÃ²ng thÃ­ nghiá»‡m Bell Labs cá»§a táº­p Ä‘oÃ n AT&T vÃ o nÄƒm 1972." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.21 vÃ  HCMUTE tr.9: NgÃ´n ngá»¯ C Ä‘Æ°á»£c Dennis Ritchie phÃ¡t triá»ƒn táº¡i Bell Labs vÃ o nÄƒm 1972 Ä‘á»ƒ viáº¿t láº¡i há»‡ Ä‘iá»u hÃ nh UNIX.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 21 - 25',
      hcmutePage: 'Trang 9 - 13',
      section: '1.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch1-002',
    chapterId: 1,
    articleId: 'c-art-ch1-01',
    content: "VÃ¬ sao ngÃ´n ngá»¯ láº­p trÃ¬nh C thÆ°á»ng Ä‘Æ°á»£c xáº¿p vÃ o nhÃ³m ngÃ´n ngá»¯ báº­c trung (Middle-level language)?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "VÃ¬ C káº¿t há»£p cáº¥u trÃºc cáº¥p cao vá»›i kháº£ nÄƒng thao tÃ¡c trá»±c tiáº¿p vÃ¹ng nhá»›." },
      { id: 'B', text: "VÃ¬ cÃº phÃ¡p cá»§a C cÃ³ Ä‘á»™ phá»©c táº¡p náº±m á»Ÿ má»©c trung bÃ¬nh so vá»›i cÃ¡c ngÃ´n ngá»¯." },
      { id: 'C', text: "VÃ¬ C yÃªu cáº§u mÃ´i trÆ°á»ng thÃ´ng dá»‹ch trung gian trÆ°á»›c khi náº¡p cháº¡y vÃ o CPU." },
      { id: 'D', text: "VÃ¬ C chá»‰ há»— trá»£ táº­p kiá»ƒu dá»¯ liá»‡u sá»‘ nguyÃªn vÃ  sá»‘ thá»±c á»Ÿ má»©c cÆ¡ báº£n má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.23 vÃ  HCMUTE tr.11: C Ä‘Æ°á»£c gá»i lÃ  ngÃ´n ngá»¯ báº­c trung vÃ¬ nÃ³ vá»«a cung cáº¥p cÃ¡c cáº¥u trÃºc Ä‘iá»u khiá»ƒn cáº¥p cao, vá»«a cho phÃ©p thao tÃ¡c trá»±c tiáº¿p vá»›i bá»™ nhá»› vÃ  bit thÃ´ng qua con trá».",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 21 - 25',
      hcmutePage: 'Trang 9 - 13',
      section: '1.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch1-003',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Theo chuáº©n C99/C11, hÃ m main() trong chÆ°Æ¡ng trÃ¬nh C Ä‘á»™c láº­p cÃ³ kiá»ƒu tráº£ vá» chuáº©n lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Kiá»ƒu void (quy Æ°á»›c hÃ m chÃ­nh khÃ´ng cáº§n hoÃ n tráº£ dá»¯ liá»‡u cho há»‡ thá»‘ng)." },
      { id: 'B', text: "Kiá»ƒu int (tráº£ vá» mÃ£ sá»‘ nguyÃªn bÃ¡o hiá»‡u tráº¡ng thÃ¡i cho há»‡ Ä‘iá»u hÃ nh)." },
      { id: 'C', text: "Kiá»ƒu bool (tráº£ vá» tráº¡ng thÃ¡i Ä‘Ãºng hoáº·c sai cho trÃ¬nh quáº£n lÃ½ luá»“ng)." },
      { id: 'D', text: "Kiá»ƒu char* (tráº£ vá» chuá»—i thÃ´ng bÃ¡o káº¿t thÃºc thá»±c thi cá»§a chÆ°Æ¡ng trÃ¬nh)." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.26 vÃ  HCMUTE tr.20: Chuáº©n C99/C11 quy Ä‘á»‹nh hÃ m main cÃ³ kiá»ƒu tráº£ vá» báº¯t buá»™c lÃ  int (int main(void)), trong Ä‘Ã³ return 0 bÃ¡o hiá»‡u chÆ°Æ¡ng trÃ¬nh káº¿t thÃºc thÃ nh cÃ´ng.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 25 - 32',
      hcmutePage: 'Trang 20 - 26',
      section: '1.1',
    },
    mockExamPreset: true,
  },
  {
    id: 'q-c-ch1-004',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Chuáº©n ANSI C89 quy Ä‘á»‹nh danh sÃ¡ch tá»« khÃ³a dÃ nh riÃªng (Keywords) gá»“m bao nhiÃªu tá»«?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'easy',
    options: [
      { id: 'A', text: "Gá»“m 32 tá»« khÃ³a cÆ¡ báº£n Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a chÃ­nh thá»©c trong ngÃ´n ngá»¯." },
      { id: 'B', text: "Gá»“m 48 tá»« khÃ³a má»Ÿ rá»™ng cho cÃ¡c há»‡ thá»‘ng mÃ¡y tÃ­nh cÃ¡ nhÃ¢n 32-bit." },
      { id: 'C', text: "Gá»“m 64 tá»« khÃ³a há»— trá»£ thÃªm cÃ¡c tÃ­nh nÄƒng hÆ°á»›ng Ä‘á»‘i tÆ°á»£ng nÃ¢ng cao." },
      { id: 'D', text: "Gá»“m 24 tá»« khÃ³a nguyÃªn thá»§y káº¿ thá»«a tá»« ngÃ´n ngá»¯ tiá»n thÃ¢n B/BCPL." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.32 vÃ  HCMUTE tr.23: Chuáº©n ANSI C89 Ä‘á»‹nh nghÄ©a chÃ­nh xÃ¡c 32 tá»« khÃ³a dÃ nh riÃªng.",
    tags: ["c-lang", "ch1", "theory", "easy"],
    reference: {
      uttPage: 'Trang 32 - 37',
      hcmutePage: 'Trang 23 - 26',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-005',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Quy táº¯c Ä‘áº·t tÃªn Ä‘á»‹nh danh (tÃªn biáº¿n, tÃªn hÃ m, háº±ng sá»‘) nÃ o sau Ä‘Ã¢y lÃ  hoÃ n toÃ n há»£p lá»‡ trong C?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "TÃªn cÃ³ thá»ƒ báº¯t Ä‘áº§u báº±ng chá»¯ sá»‘ náº¿u Ä‘á»™ dÃ i tá»•ng thá»ƒ khÃ´ng vÆ°á»£t quÃ¡ 8 kÃ½ tá»±." },
      { id: 'B', text: "TÃªn cÃ³ thá»ƒ chá»©a dáº¥u gáº¡ch ngang giá»¯a cÃ¡c tá»« Ä‘á»ƒ phÃ¢n tÃ¡ch cáº¥u trÃºc biáº¿n." },
      { id: 'C', text: "TÃªn báº¯t Ä‘áº§u báº±ng chá»¯ cÃ¡i hoáº·c dáº¥u gáº¡ch dÆ°á»›i, khÃ´ng chá»©a kÃ½ tá»± Ä‘áº·c biá»‡t." },
      { id: 'D', text: "TÃªn cÃ³ thá»ƒ trÃ¹ng hoÃ n toÃ n vá»›i tá»« khÃ³a náº¿u Ä‘Æ°á»£c viáº¿t in hoa má»™t chá»¯ cÃ¡i." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.33 vÃ  HCMUTE tr.24: TÃªn Ä‘á»‹nh danh chá»‰ Ä‘Æ°á»£c chá»©a chá»¯ cÃ¡i, chá»¯ sá»‘ vÃ  gáº¡ch dÆ°á»›i; báº¯t buá»™c báº¯t Ä‘áº§u báº±ng chá»¯ cÃ¡i hoáº·c dáº¥u gáº¡ch dÆ°á»›i '_'.",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 32 - 37',
      hcmutePage: 'Trang 23 - 26',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-006',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Sá»± khÃ¡c biá»‡t cÄƒn báº£n giá»¯a chá»‰ thá»‹ #include <file.h> vÃ  #include \"file.h\" lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "#include <...> tÃ¬m á»Ÿ thÆ° viá»‡n há»‡ thá»‘ng, \"...\" Æ°u tiÃªn tÃ¬m á»Ÿ thÆ° má»¥c dá»± Ã¡n." },
      { id: 'B', text: "#include <...> chá»‰ dÃ¹ng cho file tiÃªu Ä‘á» C, cÃ²n \"...\" chá»‰ dÃ¹ng cho C++." },
      { id: 'C', text: "#include <...> tá»± Ä‘á»™ng náº¡p mÃ£ mÃ¡y, cÃ²n \"...\" yÃªu cáº§u biÃªn dá»‹ch láº¡i file." },
      { id: 'D', text: "#include <...> khÃ´ng cho phÃ©p Ä‘á»‹nh nghÄ©a macro, cÃ²n \"...\" cho phÃ©p macro." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.68 vÃ  HCMUTE tr.195: Cáº·p ngoáº·c <> tÃ¬m kiáº¿m trong thÆ° má»¥c thÆ° viá»‡n chuáº©n há»‡ thá»‘ng; cáº·p ngoáº·c kÃ©p \"\" Æ°u tiÃªn tÃ¬m trong thÆ° má»¥c hiá»‡n hÃ nh trÆ°á»›c.",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 68 - 75',
      hcmutePage: 'Trang 195 - 205',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-007',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "CÆ¡ cháº¿ Header Guards (#ifndef ... #define ... #endif) cÃ³ má»¥c Ä‘Ã­ch ká»¹ thuáº­t chÃ­nh lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "MÃ£ hÃ³a cÃ¡c Ä‘á»‹nh nghÄ©a hÃ m Ä‘á»ƒ báº£o vá»‡ báº£n quyá»n mÃ£ nguá»“n cá»§a thÆ° viá»‡n má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "NgÄƒn cháº·n lá»—i Ä‘á»‹nh nghÄ©a láº·p láº¡i khi má»™t tá»‡p header Ä‘Æ°á»£c include nhiá»u láº§n." },
      { id: 'C', text: "TÄƒng tá»‘c Ä‘á»™ Ä‘á»c Ä‘Ä©a báº±ng cÃ¡ch nÃ©n dung lÆ°á»£ng cÃ¡c tá»‡p tiÃªu Ä‘á» há»‡ thá»‘ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Ã‰p buá»™c trÃ¬nh biÃªn dá»‹ch cáº¥p phÃ¡t trÆ°á»›c vÃ¹ng nhá»› Stack cho cÃ¡c hÃ m ngoÃ i má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.71 vÃ  HCMUTE tr.204: Header Guards ngÄƒn cháº·n viá»‡c ná»™i dung cá»§a má»™t file header bá»‹ include trÃ¹ng láº·p trong cÃ¹ng má»™t Ä‘Æ¡n vá»‹ biÃªn dá»‹ch.",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 68 - 75',
      hcmutePage: 'Trang 195 - 205',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-008',
    chapterId: 1,
    articleId: 'c-art-ch1-05',
    content: "Thá»© tá»± chÃ­nh xÃ¡c cá»§a 4 bÆ°á»›c trong chu trÃ¬nh biÃªn dá»‹ch mÃ£ nguá»“n C tiÃªu chuáº©n lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "BiÃªn dá»‹ch (Compilation) -> Tiá»n xá»­ lÃ½ (Preprocessing) -> LiÃªn káº¿t -> Náº¡p cháº¡y." },
      { id: 'B', text: "LiÃªn káº¿t (Linking) -> Tiá»n xá»­ lÃ½ (Preprocessing) -> Há»£p dá»‹ch -> Thá»±c thi." },
      { id: 'C', text: "Tiá»n xá»­ lÃ½ (Preprocessing) -> BiÃªn dá»‹ch (Compilation) -> Há»£p dá»‹ch -> LiÃªn káº¿t." },
      { id: 'D', text: "Há»£p dá»‹ch (Assembly) -> Tiá»n xá»­ lÃ½ -> BiÃªn dá»‹ch (Compilation) -> LiÃªn káº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "CÄƒn cá»© UTT tr.35 vÃ  HCMUTE tr.27: Chu trÃ¬nh gá»“m 4 giai Ä‘oáº¡n: Tiá»n xá»­ lÃ½ (.i) -> BiÃªn dá»‹ch sang Assembly (.s) -> Há»£p dá»‹ch sang mÃ£ mÃ¡y (.o) -> LiÃªn káº¿t Linker (.exe).",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 35 - 37',
      hcmutePage: 'Trang 27 - 30',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-009',
    chapterId: 1,
    articleId: 'c-art-ch1-05',
    content: "Tá»‡p cÃ³ pháº§n má»Ÿ rá»™ng .o (hoáº·c .obj trÃªn Windows) sinh ra sau giai Ä‘oáº¡n nÃ o?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'medium',
    options: [
      { id: 'A', text: "Sinh ra sau bÆ°á»›c Há»£p dá»‹ch (Assembly) vÃ  chá»©a mÃ£ mÃ¡y nhá»‹ phÃ¢n cá»§a module." },
      { id: 'B', text: "Sinh ra sau bÆ°á»›c Tiá»n xá»­ lÃ½ (Preprocessing) sau khi Ä‘Ã£ bung cÃ¡c macro." },
      { id: 'C', text: "Sinh ra sau bÆ°á»›c LiÃªn káº¿t (Linking) vÃ  cÃ³ thá»ƒ kÃ­ch hoáº¡t cháº¡y trá»±c tiáº¿p." },
      { id: 'D', text: "Sinh ra trong quÃ¡ trÃ¬nh gá»¡ lá»—i Ä‘á»ƒ lÆ°u thÃ´ng tin báº£ng kÃ½ hiá»‡u biáº¿n sá»‘." },
    ],
    correctAnswers: ['A'],
    explanation: "CÄƒn cá»© UTT tr.36 vÃ  HCMUTE tr.28: BÆ°á»›c Há»£p dá»‹ch (Assembler) chuyá»ƒn Ä‘á»•i file há»£p ngá»¯ .s thÃ nh tá»‡p mÃ£ mÃ¡y Ä‘á»‘i tÆ°á»£ng .o (.obj).",
    tags: ["c-lang", "ch1", "theory", "medium"],
    reference: {
      uttPage: 'Trang 35 - 37',
      hcmutePage: 'Trang 27 - 30',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-010',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Báº£n cháº¥t hoáº¡t Ä‘á»™ng cá»§a bá»™ tiá»n xá»­ lÃ½ (Preprocessor) trong ngÃ´n ngá»¯ C lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'theory',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "Kiá»ƒm tra tÃ­nh Ä‘Ãºng Ä‘áº¯n vá» kiá»ƒu dá»¯ liá»‡u cá»§a cÃ¡c biá»ƒu thá»©c toÃ¡n há»c phá»©c táº¡p má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Thá»±c hiá»‡n thay tháº¿ vÄƒn báº£n thuáº§n tÃºy trÆ°á»›c khi trÃ¬nh biÃªn dá»‹ch phÃ¢n tÃ­ch cÃº phÃ¡p." },
      { id: 'C', text: "Cáº¥p phÃ¡t trÆ°á»›c cÃ¡c Ã´ nhá»› tÄ©nh trÃªn RAM cho cÃ¡c biáº¿n toÃ n cá»¥c vÃ  háº±ng sá»‘ má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Tá»‘i Æ°u hÃ³a mÃ£ mÃ¡y Ä‘á»ƒ loáº¡i bá» cÃ¡c vÃ²ng láº·p rá»—ng khÃ´ng mang láº¡i giÃ¡ trá»‹ má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "CÄƒn cá»© UTT tr.68 vÃ  HCMUTE tr.195: Bá»™ tiá»n xá»­ lÃ½ chá»‰ hoáº¡t Ä‘á»™ng trÃªn má»©c vÄƒn báº£n thuáº§n tÃºy (Text substitution), khÃ´ng hiá»ƒu ngá»¯ nghÄ©a hay kiá»ƒm tra kiá»ƒu dá»¯ liá»‡u.",
    tags: ["c-lang", "ch1", "theory", "hard"],
    reference: {
      uttPage: 'Trang 68 - 75',
      hcmutePage: 'Trang 195 - 205',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-011',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cho Ä‘oáº¡n mÃ£ Ä‘á»‹nh nghÄ©a macro sau Ä‘Ã¢y, giÃ¡ trá»‹ Ä‘Æ°á»£c in ra mÃ n hÃ¬nh lÃ  bao nhiÃªu?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define VAL 10 + 5

int main(void) {
    int res = VAL * 2;
    printf("%d", res);
    return 0;
}`,
    options: [
      { id: 'A', text: "GiÃ¡ trá»‹ in ra lÃ  30 (do macro Ä‘Æ°á»£c tÃ­nh toÃ¡n trÆ°á»›c thÃ nh 15 rá»“i nhÃ¢n 2)." },
      { id: 'B', text: "GiÃ¡ trá»‹ in ra lÃ  15 (do phÃ©p nhÃ¢n chá»‰ Ã¡p dá»¥ng cho toÃ¡n tá»­ Ä‘áº§u tiÃªn)." },
      { id: 'C', text: "GiÃ¡ trá»‹ in ra lÃ  20 (do quy táº¯c thay tháº¿ vÄƒn báº£n thÃ nh 10 + 5 * 2)." },
      { id: 'D', text: "ChÆ°Æ¡ng trÃ¬nh bÃ¡o lá»—i biÃªn dá»‹ch cÃº phÃ¡p do thiáº¿u dáº¥u ngoáº·c trÃ²n bao quanh." },
    ],
    correctAnswers: ['C'],
    explanation: "Báº«y tiá»n xá»­ lÃ½ kinh Ä‘iá»ƒn: VAL * 2 Ä‘Æ°á»£c thay tháº¿ vÄƒn báº£n thÃ nh 10 + 5 * 2 = 10 + 10 = 20!",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 69',
      hcmutePage: 'Trang 198',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-012',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Äoáº¡n chÆ°Æ¡ng trÃ¬nh sau in ra káº¿t quáº£ gÃ¬ trÃªn mÃ n hÃ¬nh console?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(void) {
    printf("Hello\\rHi\\n");
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuá»—i 'Hello Hi' náº±m trÃªn cÃ¹ng má»™t dÃ²ng cÃ³ khoáº£ng cÃ¡ch tráº¯ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "In ra chuá»—i 'Hi' hoÃ n toÃ n vÃ  xÃ³a sáº¡ch cÃ¡c kÃ½ tá»± trÆ°á»›c Ä‘Ã³ trÃªn mÃ n hÃ¬nh." },
      { id: 'C', text: "ChÆ°Æ¡ng trÃ¬nh bÃ¡o lá»—i kÃ½ tá»± Ä‘iá»u khiá»ƒn khÃ´ng há»£p lá»‡ trong chuá»—i Ä‘á»‹nh dáº¡ng." },
      { id: 'D', text: "In ra chuá»—i 'Hillo' trÃªn mÃ n hÃ¬nh (kÃ½ tá»± '\r' Ä‘Æ°a con trá» vá» Ä‘áº§u dÃ²ng)." },
    ],
    correctAnswers: ['D'],
    explanation: "CÄƒn cá»© UTT tr.117: KÃ½ tá»± '\r' (Carriage Return) Ä‘Æ°a con trá» vá» Ä‘áº§u dÃ²ng hiá»‡n táº¡i vÃ  ghi Ä‘Ã¨ hai kÃ½ tá»± Ä‘áº§u 'He' thÃ nh 'Hi', táº¡o thÃ nh 'Hillo'.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 117',
      hcmutePage: 'Trang 26',
      section: '1.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-013',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Káº¿t quáº£ in ra mÃ n hÃ¬nh cá»§a Ä‘oáº¡n mÃ£ sau lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define SQUARE(x) x * x

int main(void) {
    int a = SQUARE(2 + 3);
    printf("%d", a);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra sá»‘ 11 (do macro thay tháº¿ thÃ nh 2 + 3 * 2 + 3 = 11)." },
      { id: 'B', text: "In ra sá»‘ 25 (do tÃ­nh toÃ¡n (2 + 3) bÃ¬nh phÆ°Æ¡ng báº±ng 25)." },
      { id: 'C', text: "In ra sá»‘ 13 (do tÃ­nh 2 + 3 * 3 rá»“i cá»™ng thÃªm pháº§n dÆ°)." },
      { id: 'D', text: "BÃ¡o lá»—i biÃªn dá»‹ch vÃ¬ macro khÃ´ng há»— trá»£ biá»ƒu thá»©c sá»‘ há»c." },
    ],
    correctAnswers: ['A'],
    explanation: "SQUARE(2 + 3) thay tháº¿ thÃ nh 2 + 3 * 2 + 3. PhÃ©p nhÃ¢n Æ°u tiÃªn trÆ°á»›c: 3 * 2 = 6; 2 + 6 + 3 = 11.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 70',
      hcmutePage: 'Trang 200',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-014',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cho Ä‘oáº¡n mÃ£ sá»­ dá»¥ng chá»‰ thá»‹ #ifdef dÆ°á»›i Ä‘Ã¢y, káº¿t quáº£ hiá»ƒn thá»‹ lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define DEBUG_MODE

int main(void) {
#ifdef DEBUG_MODE
    printf("ON ");
#else
    printf("OFF ");
#endif
    printf("END");
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuá»—i 'OFF END' (do macro khÃ´ng Ä‘Æ°á»£c gÃ¡n giÃ¡ trá»‹ cá»¥ thá»ƒ sá»‘ 1)." },
      { id: 'B', text: "In ra chuá»—i 'ON END' (nhÃ¡nh #ifdef Ä‘Æ°á»£c kÃ­ch hoáº¡t khi macro tá»“n táº¡i)." },
      { id: 'C', text: "In ra toÃ n bá»™ chuá»—i 'ON OFF END' do khÃ´ng cÃ³ lá»‡nh ngáº¯t ráº½ nhÃ¡nh." },
      { id: 'D', text: "BÃ¡o lá»—i cÃº phÃ¡p vÃ¬ chá»‰ thá»‹ #define thiáº¿u giÃ¡ trá»‹ gÃ¡n phÃ­a sau tÃªn." },
    ],
    correctAnswers: ['B'],
    explanation: "#ifdef kiá»ƒm tra sá»± tá»“n táº¡i cá»§a tÃªn macro; DEBUG_MODE Ä‘Ã£ Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a nÃªn khá»‘i #ifdef Ä‘Æ°á»£c biÃªn dá»‹ch, in 'ON END'.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 72',
      hcmutePage: 'Trang 202',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-015',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "ToÃ¡n tá»­ ná»‘i chuá»—i tiá»n xá»­ lÃ½ ## trong macro sau sáº½ cho káº¿t quáº£ gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>
#define CONCAT(a, b) a ## b

int main(void) {
    int xy = 100;
    printf("%d", CONCAT(x, y));
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra chuá»—i kÃ½ tá»± 'xy' trá»±c tiáº¿p lÃªn mÃ n hÃ¬nh mÃ  khÃ´ng cáº§n Ä‘á»‹nh dáº¡ng." },
      { id: 'B', text: "In ra giÃ¡ trá»‹ tá»•ng x + y cá»§a hai biáº¿n náº¿u Ä‘Æ°á»£c khai bÃ¡o trÆ°á»›c Ä‘Ã³." },
      { id: 'C', text: "In ra sá»‘ 100 (toÃ¡n tá»­ ## ghÃ©p kÃ½ tá»± x vÃ  y thÃ nh Ä‘á»‹nh danh biáº¿n xy)." },
      { id: 'D', text: "BÃ¡o lá»—i cÃº phÃ¡p vÃ¬ toÃ¡n tá»­ ## khÃ´ng Ä‘Æ°á»£c há»— trá»£ trong chuáº©n C89." },
    ],
    correctAnswers: ['C'],
    explanation: "ToÃ¡n tá»­ ## lÃ  toÃ¡n tá»­ ghÃ©p token (Token concatenation) cá»§a bá»™ tiá»n xá»­ lÃ½, ghÃ©p token x vÃ  y thÃ nh Ä‘á»‹nh danh xy, truy xuáº¥t giÃ¡ trá»‹ 100.",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 74',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-016',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "ToÃ¡n tá»­ chuá»—i hÃ³a # trong macro sau cho káº¿t quáº£ hiá»ƒn thá»‹ lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>
#define PRINT_STR(x) printf("%s", #x)

int main(void) {
    PRINT_STR(HCMUTE 2023);
    return 0;
}`,
    options: [
      { id: 'A', text: "BÃ¡o lá»—i biÃªn dá»‹ch vÃ¬ Ä‘á»‘i sá»‘ chá»©a khoáº£ng tráº¯ng khÃ´ng Ä‘áº·t trong ngoáº·c kÃ©p." },
      { id: 'B', text: "In ra giÃ¡ trá»‹ cá»§a biáº¿n HCMUTE náº¿u Ä‘Ã£ Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a trong chÆ°Æ¡ng trÃ¬nh." },
      { id: 'C', text: "Chá»‰ in ra tá»« Ä‘áº§u tiÃªn 'HCMUTE' vÃ  bá» qua pháº§n vÄƒn báº£n phÃ­a sau dáº¥u cÃ¡ch." },
      { id: 'D', text: "In ra chuá»—i 'HCMUTE 2023' (toÃ¡n tá»­ # chuyá»ƒn tham sá»‘ thÃ nh chuá»—i kÃ½ tá»±)." },
    ],
    correctAnswers: ['D'],
    explanation: "ToÃ¡n tá»­ # lÃ  toÃ¡n tá»­ chuá»—i hÃ³a (Stringizing operator), biáº¿n token truyá»n vÃ o thÃ nh má»™t chuá»—i háº±ng trong ngoáº·c kÃ©p \"HCMUTE 2023\".",
    tags: ["c-lang", "ch1", "output", "hard"],
    reference: {
      uttPage: 'Trang 74',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-017',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Cho Ä‘oáº¡n mÃ£ sá»­ dá»¥ng chá»‰ thá»‹ #undef dÆ°á»›i Ä‘Ã¢y, káº¿t quáº£ in ra lÃ  gÃ¬?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'hard',
    codeSnippet: `#include <stdio.h>
#define NUM 50

int main(void) {
    int a = NUM;
#undef NUM
#define NUM 100
    int b = NUM;
    printf("%d %d", a, b);
    return 0;
}`,
    options: [
      { id: 'A', text: "In ra '50 100' (chá»‰ thá»‹ #undef há»§y macro cÅ© Ä‘á»ƒ Ä‘á»‹nh nghÄ©a láº¡i macro má»›i)." },
      { id: 'B', text: "In ra '100 100' (macro NUM má»›i ghi Ä‘Ã¨ lÃªn toÃ n bá»™ pháº¡m vi file nguá»“n)." },
      { id: 'C', text: "In ra '50 50' (chá»‰ thá»‹ #undef bá»‹ bá» qua do khai bÃ¡o bÃªn trong hÃ m main)." },
      { id: 'D', text: "BÃ¡o lá»—i biÃªn dá»‹ch vÃ¬ macro khÃ´ng Ä‘Æ°á»£c phÃ©p Ä‘á»‹nh nghÄ©a láº¡i trong cÃ¹ng file." },
    ],
    correctAnswers: ['A'],
    explanation: "#undef há»§y Ä‘á»‹nh nghÄ©a cá»§a NUM; táº¡i dÃ²ng gÃ¡n biáº¿n a, NUM lÃ  50; sau khi Ä‘á»‹nh nghÄ©a láº¡i, NUM táº¡i dÃ²ng gÃ¡n b lÃ  100.",
    tags: ["c-lang", "ch1", "output", "hard"],
    reference: {
      uttPage: 'Trang 73',
      hcmutePage: 'Trang 203',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-018',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Äoáº¡n mÃ£ sau bá»‹ lá»—i biÃªn dá»‹ch táº¡i dÃ²ng nÃ o vÃ  do nguyÃªn nhÃ¢n ká»¹ thuáº­t gÃ¬?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'easy',
    codeSnippet: `1: #include <stdio.h>
2: #define PI 3.14159;
3: 
4: int main(void) {
5:     double s = PI * 2;
6:     printf("%f", s);
7:     return 0;
8: }`,
    options: [
      { id: 'A', text: "Lá»—i táº¡i dÃ²ng 2 do chá»‰ thá»‹ tiá»n xá»­ lÃ½ #define khÃ´ng há»— trá»£ sá»‘ thá»±c tháº­p phÃ¢n má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Lá»—i táº¡i dÃ²ng 5 do dáº¥u ';' á»Ÿ cuá»‘i dÃ²ng 2 Ä‘Æ°á»£c thay tháº¿ vÃ o thÃ nh '3.14159; * 2'." },
      { id: 'C', text: "Lá»—i táº¡i dÃ²ng 5 do biáº¿n s khai bÃ¡o kiá»ƒu double nhÆ°ng cÃ´ng thá»©c dÃ¹ng kiá»ƒu float má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Lá»—i táº¡i dÃ²ng 6 do mÃ£ Ä‘á»‹nh dáº¡ng %f khÃ´ng tÆ°Æ¡ng thÃ­ch vá»›i biáº¿n kiá»ƒu double má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "Báº«y tiá»n xá»­ lÃ½ kinh Ä‘iá»ƒn: dáº¥u ';' sau #define PI 3.14159; biáº¿n dÃ²ng 5 thÃ nh double s = 3.14159; * 2; gÃ¢y lá»—i cÃº phÃ¡p.",
    tags: ["c-lang", "ch1", "debug", "easy"],
    reference: {
      uttPage: 'Trang 69',
      hcmutePage: 'Trang 198',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-019',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "Khai bÃ¡o biáº¿n nÃ o dÆ°á»›i Ä‘Ã¢y sáº½ gÃ¢y ra lá»—i biÃªn dá»‹ch ngay láº­p tá»©c (Syntax Error)?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `int _temp = 10;     // (1)
int default = 20;   // (2)
int score_1 = 30;   // (3)
int \$val = 40;      // (4)`,
    options: [
      { id: 'A', text: "Khai bÃ¡o (1) do tÃªn biáº¿n khÃ´ng Ä‘Æ°á»£c phÃ©p báº¯t Ä‘áº§u báº±ng dáº¥u gáº¡ch dÆ°á»›i." },
      { id: 'B', text: "Khai bÃ¡o (3) do tÃªn biáº¿n chá»©a chá»¯ sá»‘ á»Ÿ vá»‹ trÃ­ kÃ½ tá»± káº¿t thÃºc danh sÃ¡ch." },
      { id: 'C', text: "Khai bÃ¡o (2) do sá»­ dá»¥ng tá»« khÃ³a 'default' lÃ m tÃªn Ä‘á»‹nh danh biáº¿n." },
      { id: 'D', text: "Khai bÃ¡o (4) do dáº¥u $ lÃ  kÃ½ tá»± báº¯t buá»™c trong cÃ¡c Ä‘á»‹nh nghÄ©a biáº¿n toÃ n cá»¥c." },
    ],
    correctAnswers: ['C'],
    explanation: "'default' lÃ  tá»« khÃ³a dÃ nh riÃªng trong switch-case, khÃ´ng Ä‘Æ°á»£c dÃ¹ng lÃ m tÃªn Ä‘á»‹nh danh biáº¿n.",
    tags: ["c-lang", "ch1", "debug", "medium"],
    reference: {
      uttPage: 'Trang 32',
      hcmutePage: 'Trang 23',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-020',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Äoáº¡n chÆ°Æ¡ng trÃ¬nh sau Ä‘Ã¢y phÃ¡t sinh lá»—i á»Ÿ bÆ°á»›c nÃ o trong chu trÃ¬nh phÃ¡t triá»ƒn?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

void greet();

int main(void) {
    greet();
    return 0;
}`,
    options: [
      { id: 'A', text: "Lá»—i á»Ÿ bÆ°á»›c Tiá»n xá»­ lÃ½ (Preprocessor) vÃ¬ tá»‡p stdio.h khÃ´ng chá»©a Ä‘á»‹nh nghÄ©a greet má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Lá»—i á»Ÿ bÆ°á»›c BiÃªn dá»‹ch (Compiler Error) do gá»i hÃ m trÆ°á»›c khi cÃ³ giÃ¡ trá»‹ tráº£ vá» má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "ChÆ°Æ¡ng trÃ¬nh váº«n cháº¡y bÃ¬nh thÆ°á»ng vÃ  tá»± Ä‘á»™ng gÃ¡n thÃ¢n hÃ m máº·c Ä‘á»‹nh rá»—ng má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Lá»—i á»Ÿ bÆ°á»›c LiÃªn káº¿t (Linker Error) vÃ¬ hÃ m greet() chá»‰ cÃ³ prototype mÃ  khÃ´ng cÃ³ thÃ¢n." },
    ],
    correctAnswers: ['D'],
    explanation: "TrÃ¬nh biÃªn dá»‹ch cháº¥p nháº­n prototype, nhÆ°ng khi sang bÆ°á»›c Linker, trÃ¬nh liÃªn káº¿t khÃ´ng tÃ¬m tháº¥y mÃ£ mÃ¡y thÃ¢n hÃ m greet() -> Lá»—i 'undefined reference to greet'.",
    tags: ["c-lang", "ch1", "debug", "medium"],
    reference: {
      uttPage: 'Trang 36',
      hcmutePage: 'Trang 29',
      section: '1.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-021',
    chapterId: 1,
    articleId: 'c-art-ch1-03',
    content: "TÃªn biáº¿n nÃ o sau Ä‘Ã¢y khÃ´ng há»£p lá»‡ theo chuáº©n ANSI C nhÆ°ng cÃ³ thá»ƒ gÃ¢y nháº§m láº«n?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    options: [
      { id: 'A', text: "TÃªn biáº¿n '2nd_player' vÃ¬ báº¯t Ä‘áº§u báº±ng chá»¯ sá»‘ theo quy táº¯c Ä‘á»‹nh danh." },
      { id: 'B', text: "TÃªn biáº¿n '__count' vÃ¬ chá»©a hai dáº¥u gáº¡ch dÆ°á»›i liÃªn tiáº¿p á»Ÿ Ä‘áº§u chuá»—i." },
      { id: 'C', text: "TÃªn biáº¿n 'TotalScore' vÃ¬ sá»­ dá»¥ng chá»¯ hoa á»Ÿ Ä‘áº§u tá»« theo quy táº¯c láº¡c Ä‘Ã ." },
      { id: 'D', text: "TÃªn biáº¿n 'max_speed_kmh' vÃ¬ cÃ³ Ä‘á»™ dÃ i vÆ°á»£t quÃ¡ 10 kÃ½ tá»± cho phÃ©p." },
    ],
    correctAnswers: ['A'],
    explanation: "Quy táº¯c Ä‘á»‹nh danh C: TÃªn Ä‘á»‹nh danh tuyá»‡t Ä‘á»‘i khÃ´ng Ä‘Æ°á»£c báº¯t Ä‘áº§u báº±ng chá»¯ sá»‘ (2nd_player vi pháº¡m).",
    tags: ["c-lang", "ch1", "debug", "hard"],
    reference: {
      uttPage: 'Trang 33',
      hcmutePage: 'Trang 24',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-022',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Äoáº¡n mÃ£ sau bá»‹ lá»—i gÃ¬ khi cá»‘ gáº¯ng báº£o vá»‡ tá»‡p tiÃªu Ä‘á» (Header Guards)?",
    questionType: 'single',
    questionSubtype: 'debug',
    difficulty: 'hard',
    codeSnippet: `#ifndef CONFIG_H
#define CONFIG_H

int g_setting = 100;

#endif`,
    options: [
      { id: 'A', text: "Chá»‰ thá»‹ #endif thiáº¿u pháº§n chÃº thÃ­ch tÃªn tá»‡p tiÃªu Ä‘á» á»Ÿ vá»‹ trÃ­ káº¿t thÃºc khá»‘i má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'B', text: "Äá»‹nh nghÄ©a biáº¿n int g_setting trong header gÃ¢y lá»—i trÃ¹ng láº·p khi include á»Ÿ nhiá»u file .c." },
      { id: 'C', text: "GiÃ¡ trá»‹ khá»Ÿi táº¡o 100 khÃ´ng Ä‘Æ°á»£c phÃ©p gÃ¡n trong vÃ¹ng khai bÃ¡o cá»§a tá»‡p tiÃªu Ä‘á» má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'D', text: "Cáº·p chá»‰ thá»‹ #ifndef vÃ  #define báº¯t buá»™c pháº£i viáº¿t liá»n nhau trÃªn cÃ¹ng dÃ²ng má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['B'],
    explanation: "Äá»‹nh nghÄ©a biáº¿n (khá»Ÿi táº¡o bá»™ nhá»›) trong header sáº½ khiáº¿n má»—i file .c include nÃ³ Ä‘á»u táº¡o 1 báº£n sao biáº¿n -> Lá»—i Linker 'multiple definition of g_setting'. Pháº£i dÃ¹ng 'extern int g_setting;' trong header.",
    tags: ["c-lang", "ch1", "debug", "hard"],
    reference: {
      uttPage: 'Trang 71',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-023',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Äiá»n cáº·p chá»‰ thá»‹ tiá»n xá»­ lÃ½ cÃ²n thiáº¿u vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ báº£o vá»‡ tá»‡p header an toÃ n:",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'easy',
    codeSnippet: `... MATH_UTIL_H
#define MATH_UTIL_H

double canBacHai(double x);

#endif`,
    options: [
      { id: 'A', text: "Äiá»n chá»‰ thá»‹ '#ifdef' Ä‘á»ƒ kÃ­ch hoáº¡t khá»‘i mÃ£ khi macro Ä‘Ã£ Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a trÆ°á»›c." },
      { id: 'B', text: "Äiá»n chá»‰ thá»‹ '#include' Ä‘á»ƒ náº¡p toÃ n bá»™ cáº¥u trÃºc thÆ° viá»‡n vÃ o vÃ¹ng lÃ m viá»‡c má»™t cÃ¡ch chi tiáº¿t." },
      { id: 'C', text: "Äiá»n chá»‰ thá»‹ '#ifndef' Ä‘á»ƒ kiá»ƒm tra xem macro MATH_UTIL_H Ä‘Ã£ tá»“n táº¡i hay chÆ°a." },
      { id: 'D', text: "Äiá»n chá»‰ thá»‹ '#undef' Ä‘á»ƒ xÃ³a bá» cÃ¡c Ä‘á»‹nh nghÄ©a trÃ¹ng tÃªn cÃ³ sáºµn tá»« trÆ°á»›c má»™t cÃ¡ch chi tiáº¿t." },
    ],
    correctAnswers: ['C'],
    explanation: "CÃº phÃ¡p chuáº©n cá»§a Header Guards: #ifndef HEADER_NAME_H / #define HEADER_NAME_H ... #endif.",
    tags: ["c-lang", "ch1", "fill-in", "easy"],
    reference: {
      uttPage: 'Trang 71',
      hcmutePage: 'Trang 204',
      section: '1.2',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-024',
    chapterId: 1,
    articleId: 'c-art-ch1-02',
    content: "Cáº§n Ä‘iá»n tá»« khÃ³a nÃ o vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ khai bÃ¡o hÃ m main khÃ´ng nháº­n báº¥t ká»³ Ä‘á»‘i sá»‘ nÃ o?",
    questionType: 'single',
    questionSubtype: 'output',
    difficulty: 'medium',
    codeSnippet: `#include <stdio.h>

int main(...) {
    printf("Khong co tham so\\n");
    return 0;
}`,
    options: [
      { id: 'A', text: "Äiá»n tá»« khÃ³a 'null' Ä‘á»ƒ biá»ƒu thá»‹ Ä‘á»‘i sá»‘ con trá» khÃ´ng chá»©a Ä‘á»‹a chá»‰." },
      { id: 'B', text: "Äiá»n giÃ¡ trá»‹ '0' Ä‘á»ƒ quy Ä‘á»‹nh sá»‘ lÆ°á»£ng tham sá»‘ dÃ²ng lá»‡nh báº±ng khÃ´ng." },
      { id: 'C', text: "Äá»ƒ trá»‘ng hoÃ n toÃ n Ä‘á»ƒ trÃ¬nh biÃªn dá»‹ch tá»± Ä‘á»™ng bá» qua kiá»ƒm tra Ä‘á»‘i sá»‘." },
      { id: 'D', text: "Äiá»n tá»« khÃ³a 'void' Ä‘á»ƒ thÃ´ng bÃ¡o danh sÃ¡ch tham sá»‘ hoÃ n toÃ n rá»—ng." },
    ],
    correctAnswers: ['D'],
    explanation: "Trong C, int main(void) thá»ƒ hiá»‡n tÆ°á»ng minh ráº±ng hÃ m main khÃ´ng nháº­n báº¥t ká»³ tham sá»‘ nÃ o (khÃ¡c vá»›i int main() trong C cÅ© cÃ³ thá»ƒ nháº­n sá»‘ lÆ°á»£ng tham sá»‘ báº¥t ká»³).",
    tags: ["c-lang", "ch1", "output", "medium"],
    reference: {
      uttPage: 'Trang 26',
      hcmutePage: 'Trang 20',
      section: '1.1',
    },
    mockExamPreset: false,
  },
  {
    id: 'q-c-ch1-025',
    chapterId: 1,
    articleId: 'c-art-ch1-04',
    content: "Äiá»n biá»ƒu thá»©c Ä‘á»‹nh nghÄ©a macro an toÃ n vÃ o chá»— trá»‘ng (...) Ä‘á»ƒ tÃ­nh giÃ¡ trá»‹ tuyá»‡t Ä‘á»‘i:",
    questionType: 'single',
    questionSubtype: 'fill-in',
    difficulty: 'hard',
    codeSnippet: `#define ABS(x) ...`,
    options: [
      { id: 'A', text: "Äiá»n biá»ƒu thá»©c '(((x) < 0) ? -(x) : (x))' cÃ³ Ä‘á»§ ngoáº·c báº£o vá»‡." },
      { id: 'B', text: "Äiá»n biá»ƒu thá»©c '(x < 0 ? -x : x)' khÃ´ng cáº§n cÃ¡c cáº·p ngoáº·c Ä‘Æ¡n phá»¥." },
      { id: 'C', text: "Äiá»n biá»ƒu thá»©c 'if ((x) < 0) return -(x); else return (x);' cÃ³ cáº¥u trÃºc." },
      { id: 'D', text: "Äiá»n biá»ƒu thá»©c '((x) * -1)' Ã¡p dá»¥ng Ä‘á»“ng Ä‘á»u cho má»i sá»‘ nguyÃªn Ã¢m dÆ°Æ¡ng." },
    ],
    correctAnswers: ['A'],
    explanation: "Macro hÃ m báº¯t buá»™c pháº£i Ä‘Ã³ng má»Ÿ ngoáº·c Ä‘Æ¡n quanh tá»«ng Ä‘á»‘i sá»‘ (x) vÃ  quanh toÃ n bá»™ biá»ƒu thá»©c ba ngÃ´i Ä‘á»ƒ trÃ¡nh lá»—i Æ°u tiÃªn toÃ¡n tá»­.",
    tags: ["c-lang", "ch1", "fill-in", "hard"],
    reference: {
      uttPage: 'Trang 70',
      hcmutePage: 'Trang 200',
      section: '1.2',
    },
    mockExamPreset: false,
  },
];
