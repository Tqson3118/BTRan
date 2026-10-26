import React from 'react';
import { useStudy } from '@/context/StudyContext';
import { PracticeView } from '@/components/practice/PracticeView';
import { ExamView } from '@/components/exam/ExamView';
import { FlashcardView } from '@/components/flashcard/FlashcardView';
import { MistakeNotebookView } from '@/components/mistake/MistakeNotebookView';
import { DashboardStats } from '@/components/stats/DashboardStats';

export interface ChapterMeta {
  id: number;
  shortTitle: string;
  title: string;
  pages: string;
  totalQuestions: number;
}

// Danh mục 7 chương giáo trình HCMUTE chuẩn hóa
export const CHAPTER_LIST: ChapterMeta[] = [
  { id: 1, shortTitle: 'Chương 1', title: 'Những vấn đề cơ bản về Nhà nước & CHXHCN Việt Nam', pages: '12 - 39', totalQuestions: 25 },
  { id: 2, shortTitle: 'Chương 2', title: 'Những vấn đề cơ bản về Pháp luật', pages: '40 - 80', totalQuestions: 30 },
  { id: 3, shortTitle: 'Chương 3', title: 'Một số vấn đề cơ bản về Luật Hình sự', pages: '81 - 142', totalQuestions: 35 },
  { id: 4, shortTitle: 'Chương 4', title: 'Một số vấn đề cơ bản về Luật Dân sự', pages: '143 - 187', totalQuestions: 30 },
  { id: 5, shortTitle: 'Chương 5', title: 'Một số vấn đề cơ bản về Luật Lao động', pages: '188 - 230', totalQuestions: 28 },
  { id: 6, shortTitle: 'Chương 6', title: 'Luật Hôn nhân và Gia đình', pages: '231 - 262', totalQuestions: 22 },
  { id: 7, shortTitle: 'Chương 7', title: 'Pháp luật phòng, chống tham nhũng', pages: '263 - 298', totalQuestions: 25 },
];

export const MainWorkspace: React.FC = () => {
  const { currentMode } = useStudy();

  return (
    <main
      id="main-workspace"
      role="main"
      className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-100 dark:bg-slate-950 scrollbar-thin transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto pb-16">
        {currentMode === 'practice' && <PracticeView />}
        {currentMode === 'bookmarks' && <PracticeView />}
        {currentMode === 'exam' && <ExamView />}
        {currentMode === 'flashcard' && <FlashcardView />}
        {currentMode === 'mistakes' && <MistakeNotebookView />}
        {currentMode === 'dashboard' && <DashboardStats />}
      </div>
    </main>
  );
};
