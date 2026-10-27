/**
 * src/subjects/c-lang/components/layout/CHeader.tsx
 * Thanh điều hướng chính môn Lập trình C/C++ (HCMUTE)
 */

import React from 'react';
import {
  Code2,
  BookOpen,
  GraduationCap,
  Layers,
  Terminal,
  Search,
  Moon,
  Sun,
  ArrowLeftRight,
  BookCheck,
} from 'lucide-react';
import { useCStudy, CTabMode } from '../../context/CStudyContext';
import { useCDrawer } from '../../context/CDrawerContext';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface CHeaderProps {
  onOpenSearch: () => void;
}

export const CHeader: React.FC<CHeaderProps> = ({ onOpenSearch }) => {
  const { activeTab, setActiveTab, stats } = useCStudy();
  const { toggleDrawer, isOpen } = useCDrawer();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();

  const tabs: { id: CTabMode; label: string; icon: React.FC<{ className?: string }>; badge?: string | number }[] = [
    { id: 'practice', label: 'Luyện tập (270c)', icon: BookOpen },
    { id: 'exam', label: 'Thi thử (45c/90p)', icon: GraduationCap, badge: 'Đề thi' },
    { id: 'flashcards', label: 'Flashcards (125)', icon: Layers },
    { id: 'essays', label: 'Tự luận (32 bài)', icon: Terminal, badge: 'Monaco' },
  ];

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-4 flex items-center justify-between shrink-0 select-none z-30 shadow-sm transition-colors duration-200">
      {/* Brand & Subject Switcher */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 group p-1 -ml-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Về trang chọn môn học"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="hidden sm:block text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HCMUTE
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                C / C++
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Lập trình C & OOP</p>
          </div>
        </button>

        {/* Quick Switch to Law button */}
        <button
          onClick={() => navigate('/phap-luat')}
          className="hidden md:flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all bg-slate-50 dark:bg-slate-800/60"
          title="Chuyển sang môn Pháp luật đại cương"
        >
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>Sang môn Pháp Luật</span>
        </button>
      </div>

      {/* Mode Navigation Tabs */}
      <nav className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all relative ${
                isActive
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden md:inline">{tab.label}</span>
              {tab.badge && (
                <span className="hidden lg:inline text-[10px] px-1 py-0.2 rounded font-mono font-normal bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Search button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 text-xs transition-colors bg-slate-50/50 dark:bg-slate-800/40"
          title="Tìm kiếm tra cứu (Ctrl+K)"
        >
          <Search className="w-4 h-4 text-slate-400" />
          <span className="hidden lg:inline text-xs">Tìm kiếm</span>
          <kbd className="hidden lg:inline font-mono text-[10px] px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-400">
            Ctrl K
          </kbd>
        </button>

        {/* Theory Drawer Toggle */}
        <button
          onClick={toggleDrawer}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isOpen
              ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/20'
              : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-800'
          }`}
          title="Mở ngăn kéo giáo trình lý thuyết 9 chương"
        >
          <BookCheck className="w-4 h-4" />
          <span className="hidden sm:inline">Giáo trình</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={isDarkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>
      </div>
    </header>
  );
};
