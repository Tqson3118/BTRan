/**
 * src/subjects/c-lang/CLangApp.tsx
 * Ứng dụng ôn tập Lập trình C / C++ (HCMUTE)
 * Bao gồm Header, Two-Column Layout (Workspace + Theory Drawer), Search Modal
 */

import React, { useState, useEffect } from 'react';
import { CStudyProvider } from './context/CStudyContext';
import { CDrawerProvider } from './context/CDrawerContext';
import { CHeader } from './components/layout/CHeader';
import { CTwoColumnLayout } from './components/layout/CTwoColumnLayout';
import { CSearchModal } from './components/search/CSearchModal';

export const CLangApp: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Phím tắt toàn cục Ctrl+K hoặc Cmd+K để mở modal tìm kiếm C/C++
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <CStudyProvider>
      <CDrawerProvider>
        <div className="h-screen w-screen overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-100 select-text transition-colors duration-200">
          <CHeader onOpenSearch={() => setIsSearchOpen(true)} />
          <CTwoColumnLayout />
          <CSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      </CDrawerProvider>
    </CStudyProvider>
  );
};

export default CLangApp;
