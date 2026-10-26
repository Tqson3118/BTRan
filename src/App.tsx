import React, { useState, useEffect } from 'react';
import { StudyProvider } from '@/context/StudyContext';
import { DrawerProvider } from '@/context/DrawerContext';
import { Header } from '@/components/layout/Header';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { SearchModal } from '@/components/search/SearchModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Phím tắt toàn cục Ctrl+K hoặc Cmd+K để mở modal tìm kiếm
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
    <StudyProvider>
      <DrawerProvider>
        <div className="h-screen w-screen overflow-hidden flex flex-col bg-slate-100 font-sans antialiased text-slate-900 select-text">
          <Header onOpenSearch={() => setIsSearchOpen(true)} />
          <TwoColumnLayout />
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      </DrawerProvider>
    </StudyProvider>
  );
}
