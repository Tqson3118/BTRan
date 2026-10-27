/**
 * src/subjects/c-lang/components/search/CSearchModal.tsx
 * Hộp thoại tra cứu thông minh toàn diện môn Lập trình C/C++
 * Hỗ trợ tìm kiếm tiếng Việt không dấu, mã lệnh, cú pháp, hàm thư viện C
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  BookOpen,
  Code2,
  Layers,
  Terminal,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { searchCContent, CSearchResult } from '../../data';
import { useCStudy } from '../../context/CStudyContext';
import { useCDrawer } from '../../context/CDrawerContext';

interface CSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CSearchModal: React.FC<CSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CSearchResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setActiveTab, setActiveChapterId } = useCStudy();
  const { openDrawer } = useCDrawer();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      return;
    }
    const res = searchCContent(query, 15);
    setResults(res);
  }, [query]);

  // Đóng modal khi nhấn Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs select-none">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/60">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm câu hỏi, lý thuyết, hàm C, con trỏ, struct, đệ quy... (VD: malloc, strcpy, switch)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
            ESC để đóng
          </kbd>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs select-text">
          {!results || results.totalMatches === 0 ? (
            <div className="py-12 text-center text-slate-400">
              {query ? 'Không tìm thấy kết quả phù hợp.' : 'Nhập từ khóa để bắt đầu tra cứu nhanh...'}
            </div>
          ) : (
            <>
              {/* Questions Section */}
              {results.questions.length > 0 && (
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span>Câu hỏi Trắc nghiệm ({results.questions.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.questions.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => {
                          setActiveTab('practice');
                          setActiveChapterId(q.chapterId);
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-left transition-all flex items-start justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                              {q.id}
                            </span>
                            <span className="text-[10px] text-slate-400">• Chương {q.chapterId}</span>
                          </div>
                          <p className="font-medium text-slate-800 dark:text-slate-200 line-clamp-1">
                            {q.content}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Theory Sections */}
              {results.chapters.length > 0 && (
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Giáo trình Lý thuyết ({results.chapters.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.chapters.map((ch) => (
                      <button
                        key={ch.chapter.id}
                        onClick={() => {
                          openDrawer(undefined, ch.chapter.id);
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-left transition-all"
                      >
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          Chương {ch.chapter.id}: {ch.chapter.title}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Khớp mục: {ch.matchedSections.join(', ')}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Flashcards */}
              {results.flashcards.length > 0 && (
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Thẻ ghi nhớ Flashcards ({results.flashcards.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.flashcards.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          setActiveTab('flashcards');
                          setActiveChapterId(f.chapterId);
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-left transition-all"
                      >
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {f.frontConcept}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {f.backDefinition}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Essays */}
              {results.essays.length > 0 && (
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-500" />
                    <span>Bài tập Tự luận ({results.essays.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.essays.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => {
                          setActiveTab('essays');
                          setActiveChapterId(e.chapterId);
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-left transition-all"
                      >
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {e.id}: {e.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {e.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
