import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface DrawerContextType {
  isOpen: boolean;
  activeArticleId: string | null;
  activeChapterId: number | null;
  searchFilter: string;
  openDrawer: (articleId?: string, chapterId?: number) => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setSearchFilter: (query: string) => void;
  setActiveChapterId: (chapterId: number | null) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const openDrawer = useCallback((articleId?: string, chapterId?: number) => {
    setIsOpen(true);
    if (articleId !== undefined) {
      setActiveArticleId(articleId);
    }
    if (chapterId !== undefined) {
      setActiveChapterId(chapterId);
    }
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        activeArticleId,
        activeChapterId,
        searchFilter,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        setSearchFilter,
        setActiveChapterId,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export function useDrawer(): DrawerContextType {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
}
