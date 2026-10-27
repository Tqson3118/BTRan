/**
 * src/subjects/c-lang/components/practice/CPracticeView.tsx
 * Giao diện Luyện tập 270 câu hỏi trắc nghiệm chuyên sâu Lập trình C/C++
 * Tích hợp phản hồi thời gian thực, lọc đa tiêu chí và đồng bộ Drawer lý thuyết
 */

import React, { useState, useMemo } from 'react';
import {
  Filter,
  CheckCircle2,
  XCircle,
  Bookmark,
  BookOpen,
  Code2,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCStudy } from '../../context/CStudyContext';
import { useCDrawer } from '../../context/CDrawerContext';
import { allCQuestions } from '../../data/questions';
import { allCChapters } from '../../data/chapters';
import { CQuestion, CQuestionSubtype } from '../../types';

export const CPracticeView: React.FC = () => {
  const {
    activeChapterId,
    setActiveChapterId,
    activeSubtype,
    setActiveSubtype,
    progress,
    recordAnswer,
    toggleBookmark,
  } = useCStudy();

  const { openDrawer } = useCDrawer();

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [statusFilter, setStatusFilter] = useState<'all' | 'uncompleted' | 'mistakes' | 'bookmarked'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Lọc danh sách câu hỏi
  const filteredQuestions = useMemo(() => {
    return allCQuestions.filter((q) => {
      // 1. Lọc theo chương
      if (activeChapterId !== null && q.chapterId !== activeChapterId) {
        return false;
      }
      // 2. Lọc theo dạng câu hỏi
      if (activeSubtype !== 'all' && q.questionSubtype !== activeSubtype) {
        return false;
      }
      // 3. Lọc theo trạng thái
      if (statusFilter === 'uncompleted' && progress.completedQuestionIds.includes(q.id)) {
        return false;
      }
      if (statusFilter === 'mistakes') {
        const mistake = progress.mistakes[q.id];
        if (!mistake || mistake.isResolved) return false;
      }
      if (statusFilter === 'bookmarked' && !progress.bookmarkedQuestionIds.includes(q.id)) {
        return false;
      }
      return true;
    });
  }, [activeChapterId, activeSubtype, statusFilter, progress]);

  // Phân trang
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage) || 1;
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, currentPage]);

  const handleSelectOption = (question: CQuestion, optionId: string) => {
    if (selectedAnswers[question.id]) return; // Đã trả lời rồi thì khóa lại

    setSelectedAnswers((prev) => ({ ...prev, [question.id]: optionId }));
    setShowExplanation((prev) => ({ ...prev, [question.id]: true }));

    const isCorrect = question.correctAnswers.includes(optionId as any);
    recordAnswer(question.id, question.chapterId, optionId, isCorrect);

    if (isCorrect) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const getSubtypeBadge = (subtype: CQuestionSubtype) => {
    switch (subtype) {
      case 'theory':
        return <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">Lý thuyết</span>;
      case 'output':
        return <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold">Output / Trace</span>;
      case 'debug':
        return <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-semibold">Sửa lỗi (Debug)</span>;
      case 'fill-in':
        return <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold">Điền mã</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Filters Toolbar */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-sm">
        {/* Chapter & Subtype selectors */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Chapter dropdown */}
          <select
            value={activeChapterId === null ? '' : activeChapterId}
            onChange={(e) => {
              const val = e.target.value;
              setActiveChapterId(val === '' ? null : Number(val));
              setCurrentPage(1);
            }}
            className="text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tất cả 9 chương (270 câu)</option>
            {allCChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                Chương {ch.id}: {ch.title}
              </option>
            ))}
          </select>

          {/* Subtype tabs */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-medium">
            <button
              onClick={() => { setActiveSubtype('all'); setCurrentPage(1); }}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeSubtype === 'all'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Tất cả dạng
            </button>
            <button
              onClick={() => { setActiveSubtype('theory'); setCurrentPage(1); }}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeSubtype === 'theory'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Lý thuyết
            </button>
            <button
              onClick={() => { setActiveSubtype('output'); setCurrentPage(1); }}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeSubtype === 'output'
                  ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Output
            </button>
            <button
              onClick={() => { setActiveSubtype('debug'); setCurrentPage(1); }}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeSubtype === 'debug'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Debug
            </button>
            <button
              onClick={() => { setActiveSubtype('fill-in'); setCurrentPage(1); }}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeSubtype === 'fill-in'
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Điền code
            </button>
          </div>
        </div>

        {/* Status filters & Count */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => { setStatusFilter('all'); setCurrentPage(1); }}
              className={`px-2 py-1 rounded ${
                statusFilter === 'all'
                  ? 'font-bold text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Tất cả ({allCQuestions.length})
            </button>
            <span>•</span>
            <button
              onClick={() => { setStatusFilter('mistakes'); setCurrentPage(1); }}
              className={`px-2 py-1 rounded ${
                statusFilter === 'mistakes'
                  ? 'font-bold text-red-600 dark:text-red-400'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Làm sai
            </button>
            <span>•</span>
            <button
              onClick={() => { setStatusFilter('bookmarked'); setCurrentPage(1); }}
              className={`px-2 py-1 rounded ${
                statusFilter === 'bookmarked'
                  ? 'font-bold text-amber-600 dark:text-amber-400'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Đánh dấu ({progress.bookmarkedQuestionIds.length})
            </button>
          </div>

          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {filteredQuestions.length} câu
          </span>
        </div>
      </div>

      {/* Questions Scrollable List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {paginatedQuestions.length === 0 ? (
          <div className="text-center py-16">
            <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              Không có câu hỏi nào khớp với bộ lọc
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Hãy thử chọn lại chương hoặc thay đổi điều kiện lọc trạng thái.
            </p>
          </div>
        ) : (
          paginatedQuestions.map((q, idx) => {
            const isBookmarked = progress.bookmarkedQuestionIds.includes(q.id);
            const userChoice = selectedAnswers[q.id];
            const isAnswered = !!userChoice;
            const isCorrect = isAnswered && q.correctAnswers.includes(userChoice as any);
            const questionIndex = (currentPage - 1) * itemsPerPage + idx + 1;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 md:p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      Câu {questionIndex}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      Chương {q.chapterId}
                    </span>
                    {getSubtypeBadge(q.questionSubtype)}
                    <span className="text-[11px] font-mono text-slate-400">
                      [{q.id}]
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                      }`}
                      title={isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu câu hỏi này'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 mb-3 leading-relaxed">
                  {q.content}
                </h4>

                {/* Code Snippet if available */}
                {q.codeSnippet && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-slate-100">
                    <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>Mã nguồn C/C++ minh họa</span>
                      </span>
                    </div>
                    <pre className="p-3 text-xs md:text-sm font-mono overflow-x-auto text-blue-300 leading-relaxed">
                      <code>{q.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* 4 Options Grid */}
                <div className="space-y-2.5 mb-4">
                  {q.options.map((opt) => {
                    const isSelected = userChoice === opt.id;
                    const isOptionCorrect = q.correctAnswers.includes(opt.id as any);

                    let optionStyle =
                      'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

                    if (isAnswered) {
                      if (isOptionCorrect) {
                        optionStyle =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500 font-medium';
                      } else if (isSelected && !isOptionCorrect) {
                        optionStyle =
                          'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100 ring-1 ring-red-500';
                      } else {
                        optionStyle =
                          'border-slate-200 dark:border-slate-800 opacity-60 text-slate-500 dark:text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(q, opt.id)}
                        className={`w-full p-3 rounded-xl border text-left text-xs md:text-sm flex items-start gap-3 transition-all ${optionStyle}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? isOptionCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-red-600 text-white'
                              : isAnswered && isOptionCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span className="flex-1 leading-relaxed">{opt.text}</span>
                        {isAnswered && isOptionCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                        {isAnswered && isSelected && !isOptionCorrect && (
                          <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation & Drawer Sync */}
                {isAnswered && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Giải thích chi tiết & Phân tích cạm bẫy:</span>
                      </div>
                      <p>{q.explanation}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span>UTT: {q.reference.uttPage}</span>
                        <span>•</span>
                        <span>HCMUTE: {q.reference.hcmutePage}</span>
                      </div>

                      <button
                        onClick={() => openDrawer(q.articleId, q.chapterId)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Tra cứu lý thuyết liên quan</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Trang {currentPage} / {totalPages}
          </span>
          <div className="flex items-center gap-1">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
