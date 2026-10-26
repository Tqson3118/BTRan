import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type StudyMode =
  | 'practice'    // Luyện tập trắc nghiệm theo chương
  | 'exam'        // Thi thử mô phỏng tính giờ
  | 'flashcard'   // Ôn thẻ nhớ thuật ngữ
  | 'mistakes'    // Sổ tay câu hỏi sai
  | 'bookmarks'   // Câu hỏi đã đánh dấu
  | 'dashboard';  // Báo cáo & thống kê tiến độ

export interface StudyContextType {
  currentMode: StudyMode;
  currentChapterId: number;        // 1 đến 7
  selectedQuestionId: string | null;
  setMode: (mode: StudyMode) => void;
  setChapter: (chapterId: number) => void;
  setSelectedQuestionId: (id: string | null) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export interface StudyProviderProps {
  children: ReactNode;
}

export const StudyProvider: React.FC<StudyProviderProps> = ({ children }) => {
  const [currentMode, setCurrentMode] = useState<StudyMode>('practice');
  const [currentChapterId, setCurrentChapterId] = useState<number>(1);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  const setMode = useCallback((mode: StudyMode) => {
    setCurrentMode(mode);
  }, []);

  const setChapter = useCallback((chapterId: number) => {
    if (chapterId >= 1 && chapterId <= 7) {
      setCurrentChapterId(chapterId);
    }
  }, []);

  return (
    <StudyContext.Provider
      value={{
        currentMode,
        currentChapterId,
        selectedQuestionId,
        setMode,
        setChapter,
        setSelectedQuestionId,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export function useStudy(): StudyContextType {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
}
