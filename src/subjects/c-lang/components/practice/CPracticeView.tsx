/**
 * src/subjects/c-lang/components/practice/CPracticeView.tsx
 * Giao diện Luyện tập trắc nghiệm Lập trình C/C++
 * Thiết kế đồng bộ 100% với giao diện Luyện tập Pháp luật đại cương (HCMUTE)
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  Award,
  Bookmark,
  RotateCcw,
} from 'lucide-react';
import { useCStudy } from '../../context/CStudyContext';
import { useCDrawer } from '../../context/CDrawerContext';
import { allCChapters, cChaptersMap } from '../../data/chapters';
import { allCQuestions, cQuestionsByChapter } from '../../data/questions';
import { CQuestion, OptionId, Difficulty, CQuestionSubtype } from '../../types';
import { CQuestionCard } from './CQuestionCard';
import { cn } from '@/utils/cn';

export const CPracticeView: React.FC = () => {
  const {
    activeChapterId,
    setActiveChapterId,
    progress,
    recordAnswer,
    toggleBookmark,
  } = useCStudy();

  const { openDrawer } = useCDrawer();

  // Mặc định là Chương 1 nếu chưa chọn
  const currentChapterId = activeChapterId || 1;
  const setChapter = (id: number) => {
    setActiveChapterId(id);
    setCurrentIndex(0);
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Bộ lọc
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | 'unanswered' | 'answered' | 'correct' | 'wrong' | 'bookmarked'
  >('all');
  const [selectedSubtype, setSelectedSubtype] = useState<CQuestionSubtype | 'all'>('all');

  const activeChapter = cChaptersMap[currentChapterId] || allCChapters[0];
  const chapterQuestions = useMemo(() => {
    return cQuestionsByChapter[currentChapterId] || [];
  }, [currentChapterId]);

  // Bộ lọc câu hỏi trong chương
  const filteredQuestions = useMemo(() => {
    const completedSet = new Set(progress.completedQuestionIds);
    const correctSet = new Set(progress.correctQuestionIds);
    const bookmarkSet = new Set(progress.bookmarkedQuestionIds);

    return chapterQuestions.filter((q) => {
      // Lọc độ khó
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }
      // Lọc dạng câu hỏi
      if (selectedSubtype !== 'all' && q.questionSubtype !== selectedSubtype) {
        return false;
      }
      // Lọc trạng thái
      if (selectedStatus === 'unanswered' && completedSet.has(q.id)) return false;
      if (selectedStatus === 'answered' && !completedSet.has(q.id)) return false;
      if (selectedStatus === 'correct' && !correctSet.has(q.id)) return false;
      if (selectedStatus === 'wrong' && (!completedSet.has(q.id) || correctSet.has(q.id))) {
        return false;
      }
      if (selectedStatus === 'bookmarked' && !bookmarkSet.has(q.id)) return false;

      return true;
    });
  }, [chapterQuestions, selectedDifficulty, selectedStatus, selectedSubtype, progress]);

  // Reset index khi thay đổi chapter hoặc filter
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentChapterId, selectedDifficulty, selectedStatus, selectedSubtype]);

  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, filteredQuestions.length - 1));
  const currentQuestion = filteredQuestions[safeIndex];

  // Tính số liệu tiến độ chương
  const completedCountInChapter = chapterQuestions.filter((q) =>
    progress.completedQuestionIds.includes(q.id)
  ).length;
  const correctCountInChapter = chapterQuestions.filter((q) =>
    progress.correctQuestionIds.includes(q.id)
  ).length;

  const handleToggleBookmark = (questionId: string) => {
    toggleBookmark(questionId);
  };

  const handleRecordAnswer = (questionId: string, answer: OptionId, isCorrect: boolean) => {
    recordAnswer(questionId, currentChapterId, answer, isCorrect);
  };

  return (
    <div className="space-y-5">
      {/* 1. Header chọn Chương (Tab 1 - 9) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {allCChapters.map((ch) => {
            const isSelected = ch.id === currentChapterId;
            const chQuestions = cQuestionsByChapter[ch.id] || [];
            const doneInCh = chQuestions.filter((q) =>
              progress.completedQuestionIds.includes(q.id)
            ).length;
            const isFullyDone = doneInCh === chQuestions.length && chQuestions.length > 0;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setChapter(ch.id)}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer',
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                <span>Chương {ch.id}</span>
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.2 rounded-full font-semibold',
                    isSelected
                      ? 'bg-blue-700 text-blue-100'
                      : isFullyDone
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  )}
                >
                  {doneInCh}/{chQuestions.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Thông tin chương đang học */}
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Chương {activeChapter.id}
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Giáo trình UTT {activeChapter.citations.uttPage} • HCMUTE {activeChapter.citations.hcmutePage}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              {activeChapter.title}
            </h2>
          </div>

          {/* Thanh đo tiến độ chương */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-32 bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(completedCountInChapter / (chapterQuestions.length || 1)) * 100}%`,
                }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {completedCountInChapter}/{chapterQuestions.length} câu
            </span>
          </div>
        </div>
      </div>

      {/* 2. Thanh lọc câu hỏi & Bộ chuyển câu nhanh */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        {/* Bộ lọc độ khó, trạng thái & dạng câu hỏi */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-semibold">Lọc:</span>
          </div>

          {/* Độ khó */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as any)}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">Mọi độ khó</option>
            <option value="easy">Dễ (🟢)</option>
            <option value="medium">Trung bình (🟡)</option>
            <option value="hard">Khó (🔴)</option>
          </select>

          {/* Trạng thái */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">Mọi trạng thái</option>
            <option value="unanswered">Chưa làm</option>
            <option value="answered">Đã làm</option>
            <option value="correct">Đã làm đúng</option>
            <option value="wrong">Từng làm sai</option>
            <option value="bookmarked">Đã đánh dấu</option>
          </select>

          {/* Dạng câu hỏi C */}
          <select
            value={selectedSubtype}
            onChange={(e) => setSelectedSubtype(e.target.value as any)}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">Mọi dạng câu</option>
            <option value="theory">Lý thuyết</option>
            <option value="output">Đoán Output</option>
            <option value="debug">Debug lỗi</option>
            <option value="fill-in">Điền khuyết</option>
          </select>
        </div>

        {/* Nút Điều hướng Trước / Sau */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 mr-1">
            {filteredQuestions.length > 0 ? `${safeIndex + 1} / ${filteredQuestions.length}` : '0 câu'}
          </span>
          <button
            type="button"
            disabled={safeIndex <= 0}
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Câu trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={safeIndex >= filteredQuestions.length - 1}
            onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Câu tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Ma trận nhảy nhanh các câu hỏi (Quick Jump Grid) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
          <span>Danh sách câu hỏi trong chương:</span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">
            Xanh = Đúng • Đỏ = Sai • Viền xanh đậm = Đang xem
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1 scrollbar-thin">
          {filteredQuestions.map((q, idx) => {
            const isCompleted = progress.completedQuestionIds.includes(q.id);
            const isCorrect = progress.correctQuestionIds.includes(q.id);
            const isBookmarked = progress.bookmarkedQuestionIds.includes(q.id);
            const isCurrent = idx === safeIndex;

            let btnStyle =
              'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700';
            if (isCompleted) {
              btnStyle = isCorrect
                ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 font-bold'
                : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-700 font-bold';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  'w-8 h-8 rounded-lg text-xs flex items-center justify-center font-medium border transition-all relative cursor-pointer',
                  btnStyle,
                  isCurrent && 'ring-2 ring-blue-600 font-bold scale-105'
                )}
                title={`Câu ${idx + 1}: ${q.content.substring(0, 50)}...`}
              >
                {idx + 1}
                {isBookmarked && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-0.5 right-0.5 ring-1 ring-white dark:ring-slate-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Thẻ câu hỏi tương tác chính */}
      {currentQuestion ? (
        <CQuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          index={safeIndex + 1}
          total={filteredQuestions.length}
          isBookmarked={progress.bookmarkedQuestionIds.includes(currentQuestion.id)}
          onToggleBookmark={handleToggleBookmark}
          onRecordAnswer={handleRecordAnswer}
          savedAnswer={
            progress.completedQuestionIds.includes(currentQuestion.id)
              ? progress.correctQuestionIds.includes(currentQuestion.id)
                ? currentQuestion.correctAnswers[0]
                : undefined
              : undefined
          }
          savedIsCorrect={progress.correctQuestionIds.includes(currentQuestion.id)}
        />
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-slate-500 dark:text-slate-400">
          <HelpCircle className="w-10 h-10 mx-auto mb-2 text-slate-400" />
          <p className="font-semibold text-sm">Không có câu hỏi nào khớp với bộ lọc hiện tại.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedDifficulty('all');
              setSelectedStatus('all');
              setSelectedSubtype('all');
            }}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
};

export default CPracticeView;
