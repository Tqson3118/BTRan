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
} from 'lucide-react';
import { useStudy, StudyMode } from '@/context/StudyContext';
import { useDrawer } from '@/context/DrawerContext';
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

  return (
    <header className="bg-white border-b border-slate-200 shrink-0 z-30 shadow-xs">
      <div className="px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
        {/* Khối Logo & Thương hiệu HCMUTE */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            PL
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-bold text-slate-800 leading-tight">
                Pháp Luật Đại Cương
              </h1>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                HCMUTE 2023
              </span>
            </div>
            <p className="text-xs text-slate-500">Hệ thống ôn thi 2 cột thông minh (298 trang)</p>
          </div>
        </div>

        {/* Thanh chuyển chế độ học tập (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
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
                    ? 'bg-white text-blue-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                )}
              >
                <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-blue-600' : 'text-slate-500')} />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Khối nút Hành động bên phải: Tìm kiếm + Tra cứu lý thuyết */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Nút Tìm kiếm nhanh */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Tìm kiếm trong 7 chương giáo trình (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Tìm kiếm...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 rounded bg-white border border-slate-300 text-[10px] text-slate-400 font-mono">
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
                ? 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            )}
            title={isOpen ? 'Thu gọn ngăn lý thuyết' : 'Mở ngăn lý thuyết đối chiếu'}
          >
            {isOpen ? (
              <>
                <SidebarClose className="w-4 h-4 text-amber-700" />
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
      <div className="md:hidden flex items-center space-x-1 px-3 py-2 border-t border-slate-100 overflow-x-auto no-scrollbar bg-slate-50">
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
                  : 'bg-white text-slate-600 border border-slate-200'
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
