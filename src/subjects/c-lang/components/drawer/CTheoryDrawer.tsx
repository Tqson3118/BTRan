/**
 * src/subjects/c-lang/components/drawer/CTheoryDrawer.tsx
 * Ngăn kéo tra cứu Giáo trình Lý thuyết 9 chương Lập trình C/C++
 * Tích hợp đối chiếu trang song song UTT (591tr) & HCMUTE (211tr)
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ChevronDown, ChevronRight, BookOpen, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { useCDrawer } from '../../context/CDrawerContext';
import { allCChapters } from '../../data/chapters';

export const CTheoryDrawer: React.FC = () => {
  const { isOpen, closeDrawer, activeArticleId, activeChapterId } = useCDrawer();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({
    1: true,
  });

  const articleRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Tự động mở chương và cuộn đến điều mục khi activeArticleId thay đổi
  useEffect(() => {
    if (activeChapterId) {
      setExpandedChapters((prev) => ({ ...prev, [activeChapterId]: true }));
    }
    if (activeArticleId && articleRefs.current[activeArticleId]) {
      setTimeout(() => {
        articleRefs.current[activeArticleId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 150);
    }
  }, [activeArticleId, activeChapterId]);

  const toggleChapter = (chId: number) => {
    setExpandedChapters((prev) => ({ ...prev, [chId]: !prev[chId] }));
  };

  if (!isOpen) return null;

  return (
    <aside className="fixed inset-y-0 right-0 w-full sm:w-[480px] lg:w-[560px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col transition-all duration-300">
      {/* Drawer Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/80 dark:bg-slate-800/80">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <div>
            <h2 className="font-bold text-sm text-slate-900 dark:text-white">
              Giáo trình Lập trình C/C++
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Đối chiếu chuẩn: UTT (591 trang) & HCMUTE (211 trang)
            </p>
          </div>
        </div>
        <button
          onClick={closeDrawer}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          title="Đóng ngăn kéo"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search Input */}
      <div className="p-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm khái niệm, cú pháp, hàm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Chapters & Articles Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {allCChapters.map((chapter) => {
          const isExpanded = !!expandedChapters[chapter.id];

          // Lọc theo search term
          const filteredSections = chapter.sections.filter((sec) => {
            if (!searchTerm) return true;
            const term = searchTerm.toLowerCase();
            return (
              sec.title.toLowerCase().includes(term) ||
              sec.articles.some(
                (a) =>
                  a.title.toLowerCase().includes(term) ||
                  a.content.some((c) => c.toLowerCase().includes(term)) ||
                  a.keyPoints.some((k) => k.toLowerCase().includes(term))
              )
            );
          });

          if (searchTerm && filteredSections.length === 0) return null;

          return (
            <div
              key={chapter.id}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50"
            >
              {/* Chapter Header Toggle */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-2 pr-2">
                  <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-xs shrink-0">
                    {chapter.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs">
                      {chapter.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                      <span>UTT: {chapter.citations.uttPage}</span>
                      <span>•</span>
                      <span>HCMUTE: {chapter.citations.hcmutePage}</span>
                    </div>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {/* Sections & Articles */}
              {isExpanded && (
                <div className="p-3 pt-0 border-t border-slate-100 dark:border-slate-800/60 divide-y divide-slate-100 dark:divide-slate-800/60 space-y-4">
                  {filteredSections.map((sec) => (
                    <div key={sec.id} className="pt-3">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                        <span className="font-mono">{sec.code}</span>
                        <span>{sec.title}</span>
                      </h4>

                      <div className="space-y-3 pl-2 border-l-2 border-slate-100 dark:border-slate-800">
                        {sec.articles.map((art) => {
                          const isActive = activeArticleId === art.id;
                          return (
                            <div
                              key={art.id}
                              ref={(el) => {
                                articleRefs.current[art.id] = el;
                              }}
                              className={`p-3 rounded-lg transition-all ${
                                isActive
                                  ? 'bg-blue-50/90 dark:bg-blue-950/40 ring-2 ring-blue-500 border-transparent shadow-sm'
                                  : 'bg-slate-50/60 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800/60'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2 mb-1.5">
                                <h5 className="font-bold text-slate-900 dark:text-slate-100">
                                  {art.code} {art.title}
                                </h5>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 shrink-0">
                                  UTT p.{art.citations.uttPage}
                                </span>
                              </div>

                              {/* Content Paragraphs */}
                              <div className="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">
                                {art.content.map((p, pIdx) => (
                                  <p key={pIdx}>{p}</p>
                                ))}
                              </div>

                              {/* Key points checklist */}
                              {art.keyPoints && art.keyPoints.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                                  <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mb-1">
                                    Điểm cốt lõi cần nhớ:
                                  </p>
                                  <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                                    {art.keyPoints.map((kp, kIdx) => (
                                      <li key={kIdx} className="flex items-start gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{kp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Code Examples */}
                              {art.codeExamples && art.codeExamples.length > 0 && (
                                <div className="mt-2.5 space-y-2">
                                  {art.codeExamples.map((ex, exIdx) => (
                                    <div
                                      key={exIdx}
                                      className="rounded-lg overflow-hidden border border-slate-700 bg-slate-950 text-slate-200"
                                    >
                                      <div className="px-2.5 py-1 bg-slate-900 border-b border-slate-800 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                                        <span>{ex.title}</span>
                                        <Code2 className="w-3 h-3 text-blue-400" />
                                      </div>
                                      <pre className="p-2.5 text-[11px] font-mono overflow-x-auto leading-relaxed text-blue-300">
                                        <code>{ex.code}</code>
                                      </pre>
                                      {ex.explanation && (
                                        <div className="px-2.5 py-1 text-[10px] text-slate-400 bg-slate-900/60 border-t border-slate-800">
                                          {ex.explanation}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
