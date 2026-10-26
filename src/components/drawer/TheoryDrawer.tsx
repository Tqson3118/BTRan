import React, { useEffect, useRef, useState } from 'react';
import { X, Search, BookOpen, ExternalLink, Bookmark, HelpCircle } from 'lucide-react';
import { useDrawer } from '@/context/DrawerContext';
import { useStudy } from '@/context/StudyContext';
import { cn } from '@/utils/cn';
import { allChapters, chaptersMap } from '@/data/chapters';
import { removeVietnameseAccents } from '@/utils/vietnamese';

export interface ArticlePreview {
  id: string;
  chapterId: number;
  code: string;
  title: string;
  pageNumber: number;
  content: string;
  keyPoints?: string[];
  lawCitation?: string;
}

// Chuyển đổi toàn bộ 7 chương số hóa thành danh sách bài viết tra cứu
export const ALL_DRAWER_ARTICLES: ArticlePreview[] = allChapters.flatMap(ch =>
  ch.sections.flatMap(sec =>
    sec.articles.map(art => ({
      id: art.id,
      chapterId: ch.id,
      code: art.code,
      title: art.title,
      pageNumber: art.citations?.pageStart || 1,
      content: Array.isArray(art.content) ? art.content.join('\n\n') : String(art.content),
      keyPoints: art.keyPoints || [],
      lawCitation: art.lawCitations && art.lawCitations.length > 0
        ? art.lawCitations.map(l => `${l.lawName} - ${l.article}${l.clause ? ` ${l.clause}` : ''}`).join('; ')
        : undefined,
    }))
  )
);

export const MOCK_DRAWER_ARTICLES = ALL_DRAWER_ARTICLES;

export const CHAPTER_NAMES: Record<number, string> = {
  1: 'Chương 1: Những vấn đề cơ bản về Nhà nước & CHXHCN Việt Nam',
  2: 'Chương 2: Những vấn đề cơ bản về Pháp luật',
  3: 'Chương 3: Một số vấn đề cơ bản về Luật Hình sự',
  4: 'Chương 4: Một số vấn đề cơ bản về Luật Dân sự',
  5: 'Chương 5: Một số vấn đề cơ bản về Luật Lao động',
  6: 'Chương 6: Luật Hôn nhân và Gia đình',
  7: 'Chương 7: Pháp luật phòng, chống tham nhũng',
};

export const TheoryDrawer: React.FC = () => {
  const {
    isOpen,
    activeArticleId,
    activeChapterId,
    searchFilter,
    closeDrawer,
    setSearchFilter,
    setActiveChapterId,
  } = useDrawer();

  const { currentChapterId } = useStudy();
  const selectedChapter = activeChapterId || currentChapterId;

  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lắng nghe phím ESC để đóng Drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDrawer]);

  // Khi activeArticleId thay đổi: tự động cuộn đến bài viết và kích hoạt hiệu ứng highlight vàng
  useEffect(() => {
    if (!isOpen || !activeArticleId) return;

    setHighlightedId(activeArticleId);

    // Timeout ngắn để đảm bảo DOM render và animation trượt mở Drawer hoàn thành
    const timer = setTimeout(() => {
      const element = document.getElementById(`theory-article-${activeArticleId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);

    // Tắt highlight sau 2.5s
    const highlightTimer = setTimeout(() => {
      setHighlightedId(null);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(highlightTimer);
    };
  }, [isOpen, activeArticleId]);

  // Lọc bài viết theo chương và từ khóa tìm kiếm tiếng Việt không dấu
  const filteredArticles = ALL_DRAWER_ARTICLES.filter((article) => {
    const matchChapter = article.chapterId === selectedChapter;
    if (!searchFilter.trim()) return matchChapter;

    const query = removeVietnameseAccents(searchFilter);
    const titleNorm = removeVietnameseAccents(article.title);
    const codeNorm = removeVietnameseAccents(article.code);
    const contentNorm = removeVietnameseAccents(article.content);

    const matchText =
      titleNorm.includes(query) ||
      codeNorm.includes(query) ||
      contentNorm.includes(query);

    return matchChapter && matchText;
  });

  return (
    <>
      {/* 1. Backdrop mờ trên Mobile & Tablet (< lg) */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* 2. Thẻ Khung Drawer Side-by-side trên Desktop & Slide-over trên Mobile */}
      <aside
        id="theory-drawer"
        aria-label="Tra cứu lý thuyết giáo trình"
        className={cn(
          'bg-white border-l border-slate-200 flex flex-col transition-all duration-300 ease-in-out',
          // Mobile: Fixed slide-over
          'fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[440px] shadow-2xl',
          // Desktop: Static column docking song song
          'lg:static lg:z-auto lg:shadow-none lg:h-full',
          isOpen
            ? 'translate-x-0 lg:w-[440px] xl:w-[480px] lg:opacity-100'
            : 'translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden lg:opacity-0 lg:border-l-0 pointer-events-none lg:pointer-events-none'
        )}
      >
        {/* Header Drawer */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col gap-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 leading-tight">
                  Tra cứu Lý thuyết Giáo trình
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">
                  HCMUTE 2023 · 298 trang
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              title="Đóng ngăn tra cứu (Esc)"
              aria-label="Đóng ngăn tra cứu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chọn chương nhanh */}
          <div className="flex items-center gap-2">
            <label htmlFor="chapter-select" className="text-xs font-semibold text-slate-600 shrink-0">
              Chương:
            </label>
            <select
              id="chapter-select"
              value={selectedChapter}
              onChange={(e) => setActiveChapterId(Number(e.target.value))}
              className="w-full text-xs bg-white border border-slate-300 rounded-md px-2 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 truncate"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((ch) => (
                <option key={ch} value={ch}>
                  Chương {ch}: {CHAPTER_NAMES[ch]?.split(':')[1]?.trim() || `Chương ${ch}`}
                </option>
              ))}
            </select>
          </div>

          {/* Ô tìm kiếm nội bộ Drawer */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Lọc nhanh mục, điều luật, từ khóa..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchFilter && (
              <button
                type="button"
                onClick={() => setSearchFilter('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Nội dung danh sách bài viết lý thuyết */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
        >
          {filteredArticles.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <HelpCircle className="w-10 h-10 mx-auto text-slate-400 mb-2 stroke-1" />
              <p className="text-sm font-medium">Không tìm thấy nội dung tra cứu</p>
              <p className="text-xs text-slate-400 mt-1">
                Thử chọn chương khác hoặc đổi từ khóa lọc.
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const isTargeted = highlightedId === article.id;
              return (
                <article
                  key={article.id}
                  id={`theory-article-${article.id}`}
                  className={cn(
                    'bg-white border rounded-xl p-4 transition-all duration-300 shadow-xs relative',
                    isTargeted
                      ? 'ring-2 ring-amber-500 bg-amber-50/90 shadow-md animate-pulse'
                      : 'border-slate-200 hover:border-slate-300'
                  )}
                >
                  {/* Mã mục & Số trang */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Mục {article.code}
                    </span>
                    <span className="text-slate-500 text-[11px] font-medium flex items-center">
                      <Bookmark className="w-3 h-3 mr-1 text-slate-400" />
                      Giáo trình tr. {article.pageNumber}
                    </span>
                  </div>

                  {/* Tiêu đề mục */}
                  <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                    {article.title}
                  </h4>

                  {/* Nội dung chính */}
                  <p className="text-xs text-slate-700 leading-relaxed text-justify mb-3">
                    {article.content}
                  </p>

                  {/* Các ý cốt lõi cần nhớ */}
                  {article.keyPoints && article.keyPoints.length > 0 && (
                    <div className="mt-2.5 pt-2.5 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-600 mb-1.5 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
                        Luận điểm cốt lõi cần nhớ:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {article.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-1.5 font-bold">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Căn cứ điều luật liên quan */}
                  {article.lawCitation && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                      <span className="flex items-center">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {article.lawCitation}
                      </span>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

        {/* Chân Drawer */}
        <div className="p-3 border-t border-slate-200 bg-white text-[11px] text-slate-500 text-center shrink-0">
          Nhấn <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[10px]">Esc</kbd> để đóng nhanh · Đồng bộ tự động theo câu hỏi
        </div>
      </aside>
    </>
  );
};
