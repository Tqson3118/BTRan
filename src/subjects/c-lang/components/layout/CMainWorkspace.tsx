/**
 * src/subjects/c-lang/components/layout/CMainWorkspace.tsx
 * Vùng làm việc chính hiển thị nội dung học tập theo tab:
 * - Luyện tập trắc nghiệm (CPracticeView)
 * - Thi thử 45 câu / 90 phút (CMockExamView)
 * - Thẻ ghi nhớ 125 flashcards (CFlashcardsView)
 * - Tự luận lập trình 32 bài tập kèm Monaco Editor (CEssayView)
 */

import React from 'react';
import { useCStudy } from '../../context/CStudyContext';
import { CPracticeView } from '../practice/CPracticeView';
import { CMockExamView } from '../exam/CMockExamView';
import { CFlashcardsView } from '../flashcards/CFlashcardsView';
import { CEssayView } from '../essays/CEssayView';

export const CMainWorkspace: React.FC = () => {
  const { activeTab } = useCStudy();

  return (
    <main
      id="c-main-workspace"
      role="main"
      className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-100 dark:bg-slate-950 scrollbar-thin transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto pb-16">
        {activeTab === 'practice' && <CPracticeView />}
        {activeTab === 'exam' && <CMockExamView />}
        {activeTab === 'flashcards' && <CFlashcardsView />}
        {activeTab === 'essays' && <CEssayView />}
      </div>
    </main>
  );
};
