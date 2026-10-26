# Project: HCMUTE General Law Revision App (Ôn tập Pháp luật đại cương)

## Architecture
- **Framework & Runtime**: React 18/19 + TypeScript + Vite + Tailwind CSS (Single Page Application, static bundle, 100% offline capable).
- **Toolchain Execution Policy**: Windows PowerShell requires using `npm.cmd` and `npx.cmd` to bypass `.ps1` ExecutionPolicy restrictions.
- **Layout Architecture**: Responsive 2-column layout.
  - Primary Column (Left/Main): Interactive practice workspace, mock exam engine, flashcards carousel, mistake review notebook, search modal. Supports Dark/Light theme, 100% Vietnamese language.
  - Secondary Column / Sliding Drawer (Right): Quick-reference theory drawer synchronized with active question/topic via `articleId`. Slides out instantly on desktop, mobile bottom sheet on small screens, auto-scrolls and highlights corresponding law articles.
- **Data Architecture**:
  - `src/data/chapters/`: 7 digitized chapter files (Ch1 to Ch7) bám sát Giáo trình ĐH Sư phạm Kỹ thuật TP.HCM (2023) với 298 trang, gồm đầy đủ đề mục, điều luật, trích dẫn, ví dụ.
  - `src/data/questions/`: **195 câu hỏi trắc nghiệm** chất lượng cao:
    - Phân bổ theo chương: Ch1 (25), Ch2 (30), Ch3 (35), Ch4 (30), Ch5 (28), Ch6 (22), Ch7 (25).
    - Độ khó: 25% Dễ (49 câu), 50% Trung bình (97 câu), 25% Khó (49 câu).
    - Định dạng: ~80% single-choice + ~20% multi-choice (chọn nhiều đáp án đúng).
    - 100% câu hỏi có đáp án chính xác, lời giải chi tiết và trích dẫn số trang giáo trình + điều luật.
  - `src/data/flashcards/`: **98 thẻ nhớ flashcard 2 mặt**:
    - Phân bổ theo chương: Ch1 (14), Ch2 (16), Ch3 (18), Ch4 (16), Ch5 (12), Ch6 (10), Ch7 (12).
  - `src/data/index.ts`: Central registry exporting all data, lookup maps, and search index.
- **Exam Modes & Presets**:
  - 3 chế độ thi thử tính giờ: 30 câu (35 phút), 40 câu (50 phút), 50 câu (60 phút).
  - Tự động nộp bài khi hết giờ, ma trận điều hướng câu hỏi, đồng bộ `sessionStorage` chống mất bài thi khi reload.
- **State Management & Persistence**:
  - React Context / Custom Hooks (`useProgress`, `useExamMachine`, `useBookmarks`, `useMistakes`).
  - `localStorage` persistence under key `hcmute_law_progress_v1` for completed questions, mistake notebook, bookmarked items, study statistics.
  - `sessionStorage` persistence under key `hcmute_law_active_exam_v1` for active mock exam.
- **Search Engine**:
  - In-memory search with Vietnamese accent normalization (`removeVietnameseAccents`) across chapter theories, law articles, questions, and explanations.

## Code Layout
```
c:\Users\Administrator\Downloads\downloads\bài tập\
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── scripts/
│   ├── smoke-test.mjs             # Automated headless smoke test runner
│   └── verify-data-integrity.mjs  # Data integrity & question count verification
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   ├── law.ts                 # Chapter, Section, Article, LawCitation
│   │   ├── question.ts            # Question, Option, Explanation, Difficulty, QuestionType
│   │   ├── flashcard.ts           # Flashcard, MasteryLevel
│   │   ├── exam.ts                # ExamConfig, ExamSession, ExamResult, ExamPreset
│   │   └── user.ts                # UserProgress, Bookmark, MistakeRecord
│   ├── data/
│   │   ├── chapters/              # chapter1.ts -> chapter7.ts
│   │   ├── questions/             # questions-ch1.ts -> questions-ch7.ts
│   │   ├── flashcards/            # flashcards-ch1.ts -> flashcards-ch7.ts
│   │   └── index.ts               # Aggregator & query helpers
│   ├── utils/
│   │   ├── vietnamese.ts          # Accent stripping & search tokenizer
│   │   ├── storage.ts             # LocalStorage & SessionStorage safe wrapper
│   │   └── examGenerator.ts       # Balanced exam generator (30, 40, 50 questions)
│   ├── context/
│   │   ├── StudyContext.tsx       # Active mode, active chapter, selected question
│   │   └── DrawerContext.tsx      # Drawer open/close, active articleId, highlight
│   └── components/
│       ├── layout/                # Header, Navigation, TwoColumnLayout
│       ├── drawer/                # TheoryDrawer, ArticleViewer, SearchInDrawer
│       ├── practice/              # PracticeView, QuestionCard, OptionItem, ExplanationModal
│       ├── exam/                  # ExamView, ExamTimer, QuestionMatrix, ResultSummary
│       ├── flashcard/             # FlashcardView, FlipCard, CardNavigation
│       ├── mistake/               # MistakeNotebookView, FilterBar
│       ├── search/                # SearchModal, SearchResultItem
│       └── stats/                 # DashboardStats, ProgressOverview
```

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Toolchain & App Shell Scaffolding | Vite + React + TypeScript + Tailwind CSS configured with `npm.cmd` | M1 | Survey / R4 |
| 2 | Intelligent 2-Column Responsive Layout | Primary interactive workspace + synchronized reference drawer (mobile bottom sheet) | M1 | Survey / R1 |
| 3 | Core State & Persistence Engine | LocalStorage schema, study context, drawer context, safe storage wrapper | M1 | Survey / R3 |
| 4 | Digitization of Chapter 1 | State theory, 5 characteristics, apparatus, NQ 27-NQ/TW 8 points | M2 | Survey / R2 |
| 5 | Digitization of Chapter 2 | Law basics, 3 attributes, 3 sources, norm structure, 4 liability types | M2 | Survey / R2 |
| 6 | Digitization of Chapter 3 | Criminal Law, 4 crime classes, 7 exclusion grounds, penalty system | M2 | Survey / R2 |
| 7 | Digitization of Chapter 4 | Civil Law, subjects, property, 9 security measures, inheritance & 2/3 share | M2 | Survey / R2 |
| 8 | Digitization of Chapter 5 | Labor Law BLLĐ 2019, 2 contracts, probation, wages, 4 disciplinary actions | M2 | Survey / R2 |
| 9 | Digitization of Chapter 6 | Marriage & Family Law 2014, 5 principles, regimes, 300-day, custody rules | M2 | Survey / R2 |
| 10 | Digitization of Chapter 7 | Anti-Corruption Law 2018, public/private, 7 crimes, 50M/300M assets | M2 | Survey / R2 |
| 11 | Standardized Question Bank (195 MCQs) | 195 MCQs weighted by chapter (Ch1:25, Ch2:30, Ch3:35, Ch4:30, Ch5:28, Ch6:22, Ch7:25), ~80% single-choice + ~20% multi-choice, 100% correct answers with verified explanations & citations | M2 | Survey / R2 |
| 12 | Standardized Flashcard Set (98 cards) | 98 cards (Ch1:14, Ch2:16, Ch3:18, Ch4:16, Ch5:12, Ch6:10, Ch7:12) with definitions, quantitative limits, and core concepts | M2 | Survey / R1, R2 |
| 13 | Interactive Chapter Practice Mode | Multiple-choice & checkbox UI, instant feedback (green/red), explanations | M3 | Survey / R1 |
| 14 | Dynamic Synchronized Reference Drawer | Slides open on "Tra cứu lý thuyết", scrolls & highlights article in gold | M3 | Survey / R1 |
| 15 | Difficulty & Topic Filter System | Filter by Easy/Medium/Hard, topic tag, completion status | M3 | Survey / R3 |
| 16 | Mistake Review Notebook | Automatically log incorrect answers, retry mode, remove upon mastery | M3 | Survey / R3 |
| 17 | Bookmark / Favorite Questions | Toggle bookmark on any question, filter bookmarked list | M3 | Survey / R3 |
| 18 | Interactive Flashcard Study Mode | 3D card flip, mastery tracking (Thuộc / Cần ôn lại), shuffle | M3 | Survey / R1 |
| 19 | Timed Mock Exam Simulation Engine | Configurable presets (30, 40, 50 questions), matrix navigator, countdown timer | M4 | Survey / R1, R3 |
| 20 | Exam Auto-Submit & Crash Recovery | Auto-submits on timer 0:00, saves state to sessionStorage to survive F5 | M4 | Survey / R1, R3 |
| 21 | Mock Exam Scoring & In-depth Review | Score out of 10, pass/fail status, detailed question breakdown | M4 | Survey / R1 |
| 22 | Global Vietnamese Full-Text Search | Accent-insensitive instant search across theories, articles, and questions | M4 | Survey / R3 |
| 23 | Comprehensive Learning Dashboard | Stats, chapter completion rings, score history, study streak | M4 | Survey / R3 |
| 24 | E2E Opaque-Box Test Suite (Tiers 1-4) | Comprehensive test suite verifying all features, boundaries, combinations | M_TEST | Dual Track |
| 25 | Final Integration & E2E Test Pass | 100% pass rate on all E2E tests, zero console errors | M5 | Final Milestone |
| 26 | Adversarial Hardening (Tier 5) | White-box stress testing, corner cases, data integrity audits | M5 | Final Milestone |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Scaffold & App Shell | Project init, toolchain (`npm.cmd`), 2-column layout shell, drawer framework, types & storage wrapper | none | DONE |
| M2 | Knowledge & Question Data Engine | Complete 7-chapter digitized content, 195 MCQs with citations, 98 flashcards, data registry | M1 | IN_PROGRESS |
| M3 | Interactive Practice & Drawer Sync | Chapter practice view, instant feedback, synchronized drawer scroll & highlight, flashcards, mistake review, bookmarks | M1, M2 | PLANNED |
| M4 | Mock Exam & Global Search | 30/40/50-question timed exam, sessionStorage state machine, score review, Vietnamese search engine, stats dashboard | M1, M2, M3 | PLANNED |
| M_TEST | E2E Testing Suite (Tiers 1-4) | Dual Track: Independent test runner, automated smoke test, 4-tier test cases | M1 (interface defined) | IN_PROGRESS |
| M5 | Final Integration & Adversarial Hardening | 100% E2E test pass, adversarial coverage hardening (Tier 5), build verification (`npm.cmd run build`) | M1, M2, M3, M4, M_TEST | PLANNED |

## Interface Contracts
### Data Registry ↔ Components
- `getChapter(id: number): ChapterData | undefined`
- `getAllChapters(): ChapterData[]`
- `getQuestionsByChapter(chapterId: number): Question[]`
- `getAllQuestions(): Question[]`
- `getQuestionsByFilter(filter: QuestionFilter): Question[]`
- `getFlashcardsByChapter(chapterId: number): Flashcard[]`
- `getAllFlashcards(): Flashcard[]`
- `generateMockExam(preset: 'short' | 'standard' | 'long' | Partial<MockExamConfig>): ExamSession`
- `searchContent(query: string): SearchResult[]`

### Study Context & Drawer Context
- `DrawerContext`:
  - `isOpen: boolean`
  - `activeArticleId: string | null`
  - `activeChapterId: number | null`
  - `openDrawer(articleId?: string, chapterId?: number): void`
  - `closeDrawer(): void`
  - `toggleDrawer(): void`
- `StudyContext`:
  - `currentMode: 'practice' | 'exam' | 'flashcard' | 'mistakes' | 'bookmarks' | 'dashboard'`
  - `currentChapterId: number`
  - `setMode(mode: StudyMode): void`
  - `setChapter(chapterId: number): void`

### Storage Contract
- Key: `hcmute_law_progress_v1`
- Schema:
  ```ts
  interface UserProgressState {
    completedQuestionIds: string[];
    correctQuestionIds: string[];
    bookmarkedQuestionIds: string[];
    mistakes: Record<string, { lastAttemptAt: number; wrongCount: number; chosenOptionIndex: number | number[] }>;
    examHistory: { id: string; date: number; score: number; total: number; durationSeconds: number }[];
    flashcardMastery: Record<string, 'mastered' | 'review'>;
    theme: 'light' | 'dark';
  }
  ```
