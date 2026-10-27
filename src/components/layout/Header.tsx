import React from 'react';
import {
  CheckCircle,
  Clock,
  Layers,
  AlertTriangle,
  Bookmark,
  BarChart2,
  Search,
  SidebarClose,
  SidebarOpen,
  BookOpen,
  Sun,
  Moon,
  Code2,
} from 'lucide-react';
import { useStudy, StudyMode } from '@/context/StudyContext';
import { useDrawer } from '@/context/DrawerContext';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export interface HeaderProps {
  onOpenSearch?: () => void;
}

interface ModeItem {
  id: StudyMode;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MODES: ModeItem[] = [
  { id: 'practice', label: 'Luyện tập', icon: CheckCircle },
  { id: 'exam', label: 'Thi thử', icon: Clock },
  { id: 'flashcard', label: 'Thẻ nhớ', icon: Layers },
  { id: 'mistakes', label: 'Sổ câu sai', icon: AlertTriangle },
  { id: 'bookmarks', label: 'Đánh dấu', icon: Bookmark },
  { id: 'dashboard', label: 'Thống kê', icon: BarChart2 },
];

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { currentMode, setMode } = useStudy();
  const { isOpen, toggleDrawer } = useDrawer();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 z-30 shadow-xs transition-colors duration-200">
      <div className="px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
        {/* Khối Logo & Thương hiệu HCMUTE */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={() => { window.location.hash = '#/'; }}
            className="flex items-center space-x-3 text-left hover:opacity-90 transition-opacity cursor-pointer group"
            title="Về trang chủ chọn môn học"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              PL
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Pháp Luật Đại Cương
                </h1>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                  HCMUTE 2023
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hệ thống ôn thi 2 cột thông minh (298 trang)
              </p>
            </div>
          </button>

          {/* Quick switch sang môn Lập trình C */}
          <button
            type="button"
            onClick={() => { window.location.hash = '#/c-lang'; }}
            className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all bg-slate-50 dark:bg-slate-800/60 cursor-pointer"
            title="Chuyển sang môn Ngôn ngữ Lập trình C/C++"
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>Sang Lập Trình C</span>
          </button>
        </div>

        {/* Thanh chuyển chế độ học tập (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/80">
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = currentMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setMode(mode.id)}
                className={cn(
                  'flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer',
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60'
                )}
              >
                <Icon
                  className={cn(
                    'w-3.5 h-3.5',
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-500 dark:text-slate-400'
                  )}
                />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Khối nút Hành động bên phải: Theme toggle + Tìm kiếm + Tra cứu lý thuyết */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Nút Toggle Theme Sáng / Tối (Circular Reveal Animation) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
            aria-label="Đổi giao diện Sáng/Tối"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Nút Tìm kiếm nhanh */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Tìm kiếm trong 7 chương giáo trình (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400" />
            <span className="hidden sm:inline">Tìm kiếm...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-[10px] text-slate-400 dark:text-slate-300 font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* Nút Toggle Drawer Tra cứu Lý Thuyết */}
          <button
            type="button"
            onClick={toggleDrawer}
            className={cn(
              'flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer',
              isOpen
                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700 hover:bg-amber-200 dark:hover:bg-amber-900/60'
                : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
            )}
            title={isOpen ? 'Thu gọn ngăn lý thuyết' : 'Mở ngăn lý thuyết đối chiếu'}
          >
            {isOpen ? (
              <>
                <SidebarClose className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span className="hidden sm:inline">Thu gọn lý thuyết</span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4" />
                <span>Tra cứu lý thuyết</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Thanh tab điều hướng cho thiết bị di động (< md) */}
      <div className="md:hidden flex items-center space-x-1 px-3 py-2 border-t border-slate-100 dark:border-slate-800 overflow-x-auto no-scrollbar bg-slate-50 dark:bg-slate-900/80">
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive = currentMode === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setMode(mode.id)}
              className={cn(
                'flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all',
                isActive
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
