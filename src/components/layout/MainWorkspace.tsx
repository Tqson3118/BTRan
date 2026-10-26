import React from 'react';
import { useStudy } from '@/context/StudyContext';
import { PracticeView } from '@/components/practice/PracticeView';
import { ExamView } from '@/components/exam/ExamView';
import { FlashcardView } from '@/components/flashcard/FlashcardView';
import { MistakeNotebookView } from '@/components/mistake/MistakeNotebookView';
import { DashboardStats } from '@/components/stats/DashboardStats';

export const MainWorkspace: React.FC = () => {
  const { currentMode } = useStudy();

  return (
    <main
      id="main-workspace"
      role="main"
      className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-100 scrollbar-thin"
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
