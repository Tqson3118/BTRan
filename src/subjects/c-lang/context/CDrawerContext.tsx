/**
 * src/subjects/c-lang/context/CDrawerContext.tsx
 * Quản lý trạng thái ngăn kéo tra cứu lý thuyết (Theory Drawer) môn Lập trình C
 */

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface CDrawerContextType {
  isOpen: boolean;
  activeArticleId: string | null;
  activeChapterId: number | null;
  openDrawer: (articleId?: string, chapterId?: number) => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

const CDrawerContext = createContext<CDrawerContextType | undefined>(undefined);

export const CDrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);

  const openDrawer = useCallback((articleId?: string, chapterId?: number) => {
    if (articleId) setActiveArticleId(articleId);
    if (chapterId) setActiveChapterId(chapterId);
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <CDrawerContext.Provider
      value={{
        isOpen,
        activeArticleId,
        activeChapterId,
        openDrawer,
        closeDrawer,
        toggleDrawer,
      }}
    >
      {children}
    </CDrawerContext.Provider>
  );
};

export function useCDrawer(): CDrawerContextType {
  const context = useContext(CDrawerContext);
  if (!context) {
    throw new Error('useCDrawer must be used within a CDrawerProvider');
  }
  return context;
}
