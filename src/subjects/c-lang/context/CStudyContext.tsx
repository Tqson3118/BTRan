/**
 * src/subjects/c-lang/context/CStudyContext.tsx
 * Quản lý trạng thái học tập, điều hướng tab và tiến độ môn Lập trình C/C++
 */

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { CQuestionSubtype } from '../types';
import {
  CUserProgress,
  loadCLangProgress,
  recordCQuestionAnswer,
  toggleCBookmark as toggleCBookmarkStorage,
  updateCFlashcardMastery as updateCFlashcardMasteryStorage,
  saveCEssayDraft as saveCEssayDraftStorage,
  resetCLangProgress as resetCLangProgressStorage,
  DEFAULT_CLANG_PROGRESS,
} from '../utils/storage';

export type CTabMode = 'practice' | 'exam' | 'flashcards' | 'essays';

interface CStudyContextType {
  activeTab: CTabMode;
  setActiveTab: (tab: CTabMode) => void;
  activeChapterId: number | null;
  setActiveChapterId: (chId: number | null) => void;
  activeSubtype: CQuestionSubtype | 'all';
  setActiveSubtype: (subtype: CQuestionSubtype | 'all') => void;
  progress: CUserProgress;
  recordAnswer: (qId: string, chId: number, selectedOpt: string, isCorrect: boolean) => void;
  toggleBookmark: (qId: string) => void;
  updateFlashcardMastery: (cardId: string, level: 'learning' | 'reviewing' | 'mastered') => void;
  saveEssayCode: (essayId: string, code: string) => void;
  resetProgress: () => void;
  stats: {
    totalCompleted: number;
    totalCorrect: number;
    accuracy: number;
    bookmarkedCount: number;
    mistakesCount: number;
  };
}

const CStudyContext = createContext<CStudyContextType | undefined>(undefined);

export const CStudyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<CTabMode>('practice');
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [activeSubtype, setActiveSubtype] = useState<CQuestionSubtype | 'all'>('all');
  const [progress, setProgress] = useState<CUserProgress>(DEFAULT_CLANG_PROGRESS);

  useEffect(() => {
    setProgress(loadCLangProgress());
  }, []);

  const recordAnswer = useCallback(
    (qId: string, chId: number, selectedOpt: string, isCorrect: boolean) => {
      const updated = recordCQuestionAnswer(qId, chId, selectedOpt, isCorrect);
      setProgress({ ...updated });
    },
    []
  );

  const toggleBookmark = useCallback((qId: string) => {
    const updated = toggleCBookmarkStorage(qId);
    setProgress({ ...updated });
  }, []);

  const updateFlashcardMastery = useCallback(
    (cardId: string, level: 'learning' | 'reviewing' | 'mastered') => {
      const updated = updateCFlashcardMasteryStorage(cardId, level);
      setProgress({ ...updated });
    },
    []
  );

  const saveEssayCode = useCallback((essayId: string, code: string) => {
    const updated = saveCEssayDraftStorage(essayId, code);
    setProgress({ ...updated });
  }, []);

  const resetProgress = useCallback(() => {
    const updated = resetCLangProgressStorage();
    setProgress({ ...updated });
  }, []);

  const totalCompleted = progress.completedQuestionIds.length;
  const totalCorrect = progress.correctQuestionIds.length;
  const accuracy = totalCompleted > 0 ? Math.round((totalCorrect / totalCompleted) * 100) : 0;
  const bookmarkedCount = progress.bookmarkedQuestionIds.length;
  const mistakesCount = Object.values(progress.mistakes).filter((m) => !m.isResolved).length;

  return (
    <CStudyContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeChapterId,
        setActiveChapterId,
        activeSubtype,
        setActiveSubtype,
        progress,
        recordAnswer,
        toggleBookmark,
        updateFlashcardMastery,
        saveEssayCode,
        resetProgress,
        stats: {
          totalCompleted,
          totalCorrect,
          accuracy,
          bookmarkedCount,
          mistakesCount,
        },
      }}
    >
      {children}
    </CStudyContext.Provider>
  );
};

export function useCStudy(): CStudyContextType {
  const context = useContext(CStudyContext);
  if (!context) {
    throw new Error('useCStudy must be used within a CStudyProvider');
  }
  return context;
}
