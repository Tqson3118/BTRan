import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  BookOpen,
  HelpCircle,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { searchContent, SearchResultItem } from '@/data';
import { useDrawer } from '@/context/DrawerContext';
import { useStudy } from '@/context/StudyContext';
import { cn } from '@/utils/cn';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { openDrawer } = useDrawer();
  const { setMode, setChapter } = useStudy();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Tìm kiếm tức thời khi query thay đổi
  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      const hits = searchContent(query, 40);
      setResults(hits);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Lắng nghe phím ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectResult = (item: SearchResultItem) => {
    if (item.type === 'article') {
      openDrawer(item.articleId, item.chapterId);
      onClose();
    } else if (item.type === 'question') {
      setChapter(item.chapterId);
      setMode('practice');
      onClose();
    } else if (item.type === 'flashcard') {
      setChapter(item.chapterId);
      setMode('flashcard');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div
        className="bg-white rounded-3xl w-full max-w-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thanh tìm kiếm Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/80 shrink-0">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm lý thuyết, điều luật, câu hỏi, flashcard (ví dụ: thừa kế, sa thải, 1.1.1)..."
            className="w-full text-sm font-medium bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200 text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded-md text-xs font-semibold text-slate-500 hover:bg-slate-200 shrink-0"
          >
            Đóng (Esc)
          </button>
        </div>

        {/* Nội dung kết quả tìm kiếm */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1 scrollbar-thin">
          {!query.trim() || query.trim().length < 2 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Search className="w-10 h-10 mx-auto text-slate-300 stroke-1" />
              <p className="text-sm font-medium text-slate-600">
                Nhập từ khóa để tra cứu tức thời
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Hỗ trợ tìm kiếm tiếng Việt không dấu trên toàn bộ 7 chương giáo trình, 195 câu trắc
                nghiệm và 98 flashcards.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2 stroke-1" />
              <p className="text-sm font-medium text-slate-600">
                Không tìm thấy kết quả nào phù hợp với "{query}"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Thử tìm bằng từ khóa ngắn gọn hơn hoặc các thuật ngữ như "hình phạt", "kết hôn", "hợp đồng".
              </p>
            </div>
          ) : (
            results.map((item) => {
              const isArticle = item.type === 'article';
              const isQuestion = item.type === 'question';

              return (
                <button
                  key={`${item.type}-${item.id}`}
                  type="button"
                  onClick={() => handleSelectResult(item)}
                  className="w-full text-left p-3.5 rounded-2xl border border-slate-100 hover:border-blue-300 bg-white hover:bg-blue-50/40 transition-all flex items-start gap-3 group cursor-pointer"
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold',
                      isArticle
                        ? 'bg-amber-100 text-amber-700'
                        : isQuestion
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    )}
                  >
                    {isArticle ? (
                      <BookOpen className="w-4 h-4" />
                    ) : isQuestion ? (
                      <HelpCircle className="w-4 h-4" />
                    ) : (
                      <Layers className="w-4 h-4" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.2 rounded-md">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 truncate transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                      {item.snippet}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 self-center transition-transform group-hover:translate-x-1" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="p-3 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 text-center shrink-0">
            Tìm thấy {results.length} kết quả phù hợp • Bấm vào mục để tra cứu ngay
          </div>
        )}
      </div>
    </div>
  );
};
