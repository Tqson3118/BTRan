import React, { useState, useMemo } from 'react';
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
import { useStudy } from '@/context/StudyContext';
import { useDrawer } from '@/context/DrawerContext';
import { allChapters, chaptersMap, getQuestionsByChapter } from '@/data';
import { Question, OptionId, Difficulty } from '@/types';
import { QuestionCard } from './QuestionCard';
import {
  loadUserProgress,
  recordQuestionAnswer,
  toggleBookmark,
  UserProgressState,
} from '@/utils/storage';
import { cn } from '@/utils/cn';

export const PracticeView: React.FC = () => {
  const { currentChapterId, setChapter } = useStudy();
  const { openDrawer } = useDrawer();

  const [userProgress, setUserProgress] = useState<UserProgressState>(loadUserProgress());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filters
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | 'unanswered' | 'answered' | 'correct' | 'wrong' | 'bookmarked'
  >('all');

  const activeChapter = chaptersMap[currentChapterId] || allChapters[0];
  const chapterQuestions = useMemo(() => {
    return getQuestionsByChapter(currentChapterId);
  }, [currentChapterId]);

  // Bộ lọc câu hỏi
  const filteredQuestions = useMemo(() => {
    const completedSet = new Set(userProgress.completedQuestionIds);
    const correctSet = new Set(userProgress.correctQuestionIds);
    const bookmarkSet = new Set(userProgress.bookmarkedQuestionIds);

    return chapterQuestions.filter((q) => {
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }
      if (selectedStatus === 'unanswered' && completedSet.has(q.id)) return false;
      if (selectedStatus === 'answered' && !completedSet.has(q.id)) return false;
      if (selectedStatus === 'correct' && !correctSet.has(q.id)) return false;
      if (selectedStatus === 'wrong' && (!completedSet.has(q.id) || correctSet.has(q.id)))
        return false;
      if (selectedStatus === 'bookmarked' && !bookmarkSet.has(q.id)) return false;

      return true;
    });
  }, [chapterQuestions, selectedDifficulty, selectedStatus, userProgress]);

  // Điều chỉnh currentIndex nếu ngoài khoảng
  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, filteredQuestions.length - 1));
  const currentQuestion = filteredQuestions[safeIndex];

  // Tính tiến độ chương
  const completedCountInChapter = chapterQuestions.filter((q) =>
    userProgress.completedQuestionIds.includes(q.id)
  ).length;
  const correctCountInChapter = chapterQuestions.filter((q) =>
    userProgress.correctQuestionIds.includes(q.id)
  ).length;

  const handleToggleBookmark = (questionId: string) => {
    const { state: nextProgress } = toggleBookmark(questionId);
    setUserProgress({ ...nextProgress });
  };

  const handleRecordAnswer = (
    questionId: string,
    answer: OptionId | OptionId[],
    isCorrect: boolean
  ) => {
    const chosenOption = Array.isArray(answer) ? answer[0] : answer;
    const nextProgress = recordQuestionAnswer(questionId, currentChapterId, chosenOption, isCorrect);
    setUserProgress({ ...nextProgress });
  };

  return (
    <div className="space-y-5">
      {/* 1. Header chọn Chương (Tab 1 - 7) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {allChapters.map((ch) => {
            const isSelected = ch.id === currentChapterId;
            const chQuestions = getQuestionsByChapter(ch.id);
            const doneInCh = chQuestions.filter((q) =>
              userProgress.completedQuestionIds.includes(q.id)
            ).length;
            const isFullyDone = doneInCh === chQuestions.length && chQuestions.length > 0;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => {
                  setChapter(ch.id);
                  setCurrentIndex(0);
                }}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5',
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
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Chương {activeChapter.id}
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Giáo trình tr. {activeChapter.pageRange.start} - {activeChapter.pageRange.end}
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
        {/* Bộ lọc độ khó & trạng thái */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-semibold">Lọc:</span>
          </div>

          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value as any);
              setCurrentIndex(0);
            }}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Mọi độ khó</option>
            <option value="easy">Dễ (🟢)</option>
            <option value="medium">Trung bình (🟡)</option>
            <option value="hard">Khó (🔴)</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value as any);
              setCurrentIndex(0);
            }}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Mọi trạng thái</option>
            <option value="unanswered">Chưa làm</option>
            <option value="answered">Đã làm</option>
            <option value="correct">Đã làm đúng</option>
            <option value="wrong">Từng làm sai</option>
            <option value="bookmarked">Đã đánh dấu</option>
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
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Câu trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={safeIndex >= filteredQuestions.length - 1}
            onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Câu tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Ma trận nhảy nhanh các câu hỏi (Quick Jump Grid) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
          <span>Danh sách câu hỏi trong chương:</span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">
            Xanh = Đúng • Đỏ = Sai • Viền xanh đậm = Đang xem
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-1 scrollbar-thin">
          {filteredQuestions.map((q, idx) => {
            const isCompleted = userProgress.completedQuestionIds.includes(q.id);
            const isCorrect = userProgress.correctQuestionIds.includes(q.id);
            const isBookmarked = userProgress.bookmarkedQuestionIds.includes(q.id);
            const isCurrent = idx === safeIndex;

            let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700';
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
                  'w-8 h-8 rounded-lg text-xs flex items-center justify-center font-medium border transition-all relative',
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

      {/* 3. Thẻ câu hỏi tương tác chính */}
      {currentQuestion ? (
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          index={safeIndex + 1}
          total={filteredQuestions.length}
          isBookmarked={userProgress.bookmarkedQuestionIds.includes(currentQuestion.id)}
          onToggleBookmark={handleToggleBookmark}
          onRecordAnswer={handleRecordAnswer}
          savedAnswer={
            userProgress.mistakes[currentQuestion.id]
              ? userProgress.mistakes[currentQuestion.id].chosenOptionIndex !== undefined
                ? undefined // cho phép làm lại nếu là câu sai
                : undefined
              : userProgress.correctQuestionIds.includes(currentQuestion.id)
              ? currentQuestion.correctAnswers[0]
              : undefined
          }
          savedIsCorrect={userProgress.correctQuestionIds.includes(currentQuestion.id)}
        />
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center shadow-xs">
          <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
            Không tìm thấy câu hỏi phù hợp với bộ lọc
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Vui lòng thử đổi tiêu chí độ khó hoặc trạng thái câu hỏi để tiếp tục luyện tập.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedDifficulty('all');
              setSelectedStatus('all');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
    </div>
  );
};
