import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Flag,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  BookOpen,
  HelpCircle,
  Play,
  Send,
  ExternalLink,
} from 'lucide-react';
import {
  ExamSession,
  ExamResult,
  OptionId,
} from '@/types';
import {
  generateMockExamSession,
  evaluateExamSession,
  EXAM_PRESETS,
  ExamPresetKey,
} from '@/utils/examGenerator';
import {
  loadActiveExamSession,
  saveActiveExamSession,
  clearActiveExamSession,
  saveExamResult,
  loadUserProgress,
} from '@/utils/storage';
import { useDrawer } from '@/context/DrawerContext';
import { chaptersMap } from '@/data/chapters';
import { cn } from '@/utils/cn';

export const ExamView: React.FC = () => {
  const { openDrawer, closeDrawer } = useDrawer();

  // Phiên thi hiện tại (khôi phục từ sessionStorage nếu có)
  const [session, setSession] = useState<ExamSession | null>(() => loadActiveExamSession());
  const [result, setResult] = useState<ExamResult | null>(null);

  // Setup state
  const [selectedPreset, setSelectedPreset] = useState<ExamPresetKey>('standard');
  const [selectedChapters, setSelectedChapters] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);

  // Review mode filter
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct' | 'unanswered'>('all');

  // Khóa Drawer khi đang thi
  useEffect(() => {
    if (session && session.status === 'in_progress') {
      closeDrawer();
    }
  }, [session, closeDrawer]);

  // Bộ đếm ngược thời gian (Timer)
  useEffect(() => {
    if (!session || session.status !== 'in_progress') return;

    const timer = setInterval(() => {
      setSession((prev) => {
        if (!prev || prev.status !== 'in_progress') return prev;

        const newRemaining = prev.remainingSeconds - 1;
        if (newRemaining <= 0) {
          clearInterval(timer);
          // Tự động nộp bài khi hết giờ
          const updatedSession: ExamSession = {
            ...prev,
            remainingSeconds: 0,
            status: 'submitted',
          };
          const evaluated = evaluateExamSession(updatedSession);
          saveExamResult(evaluated);
          clearActiveExamSession();
          setResult(evaluated);
          return null;
        }

        const updated: ExamSession = {
          ...prev,
          remainingSeconds: newRemaining,
        };
        saveActiveExamSession(updated);
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session?.status]);

  // Khởi tạo bài thi mới
  const handleStartExam = () => {
    const progress = loadUserProgress();
    const mistakeIds = Object.keys(progress.mistakes);
    const presetConfig = EXAM_PRESETS[selectedPreset];

    const newSession = generateMockExamSession(
      {
        questionCount: presetConfig.questionCount,
        durationMinutes: presetConfig.durationMinutes,
        chapterIds: selectedChapters,
        shuffleQuestions: true,
      },
      mistakeIds
    );

    saveActiveExamSession(newSession);
    setSession(newSession);
    setResult(null);
  };

  // Nộp bài thi
  const handleFinalSubmit = () => {
    if (!session) return;
    setShowSubmitConfirm(false);

    const evaluated = evaluateExamSession(session);
    saveExamResult(evaluated);
    clearActiveExamSession();
    setSession(null);
    setResult(evaluated);
  };

  // Chọn đáp án
  const handleSelectAnswer = (questionId: string, optionId: OptionId) => {
    if (!session || session.status !== 'in_progress') return;

    const question = session.questions.find((q) => q.id === questionId);
    if (!question) return;

    setSession((prev) => {
      if (!prev) return prev;
      const currentAnswer = prev.userAnswers[questionId];

      let newAnswer: OptionId | OptionId[];
      if (question.questionType === 'multiple') {
        const currentList = Array.isArray(currentAnswer)
          ? currentAnswer
          : currentAnswer
          ? [currentAnswer]
          : [];
        newAnswer = currentList.includes(optionId)
          ? currentList.filter((id) => id !== optionId)
          : [...currentList, optionId];
      } else {
        newAnswer = optionId;
      }

      const updated: ExamSession = {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [questionId]: newAnswer,
        },
      };
      saveActiveExamSession(updated);
      return updated;
    });
  };

  // Đổi cờ (Flag for review)
  const handleToggleFlag = (questionId: string) => {
    if (!session) return;
    setSession((prev) => {
      if (!prev) return prev;
      const isFlagged = prev.flaggedQuestionIds.includes(questionId);
      const updated: ExamSession = {
        ...prev,
        flaggedQuestionIds: isFlagged
          ? prev.flaggedQuestionIds.filter((id) => id !== questionId)
          : [...prev.flaggedQuestionIds, questionId],
      };
      saveActiveExamSession(updated);
      return updated;
    });
  };

  // =========================================================================
  // MÀN HÌNH 1: BÁO CÁO KẾT QUẢ SAU KHI NỘP BÀI (RESULT SCREEN)
  // =========================================================================
  if (result) {
    const filteredReviewQuestions = result.questionResults.filter((r) => {
      if (reviewFilter === 'wrong') return !r.isCorrect && r.userAnswer !== undefined;
      if (reviewFilter === 'correct') return r.isCorrect;
      if (reviewFilter === 'unanswered') return r.userAnswer === undefined;
      return true;
    });

    const formatMinutes = Math.floor(result.timeSpentSeconds / 60);
    const formatSecs = result.timeSpentSeconds % 60;

    return (
      <div className="space-y-6">
        {/* Banner Tổng kết Điểm số */}
        <div
          className={cn(
            'rounded-3xl p-6 sm:p-8 border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6',
            result.passed
              ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white border-emerald-400'
              : 'bg-gradient-to-br from-rose-500 to-pink-700 text-white border-rose-400'
          )}
        >
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs mb-3">
              <Award className="w-4 h-4" />
              <span>{result.passed ? 'Đạt yêu cầu môn học' : 'Chưa đạt yêu cầu'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {result.passed ? 'Chúc mừng bạn đã hoàn thành!' : 'Cần nỗ lực ôn luyện thêm!'}
            </h2>
            <p className="text-sm text-white/90 mt-1 max-w-md">
              Thời gian làm bài: {formatMinutes} phút {formatSecs} giây • Xếp loại:{' '}
              <strong className="underline underline-offset-2">{result.grade}</strong>
            </p>
          </div>

          {/* Vòng tròn điểm số /10 */}
          <div className="flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white text-slate-900 shadow-xl border-4 border-white/40 shrink-0">
            <span className="text-4xl font-black text-blue-600 leading-none">
              {result.score10.toFixed(1)}
            </span>
            <span className="text-xs font-semibold text-slate-400 mt-1">Thang điểm 10</span>
          </div>
        </div>

        {/* 4 Thẻ thống kê chi tiết */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-center">
            <span className="text-xs text-slate-500 font-medium">Tổng số câu</span>
            <div className="text-2xl font-bold text-slate-800 mt-0.5">{result.totalQuestions}</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-center">
            <span className="text-xs text-emerald-600 font-medium">Số câu đúng</span>
            <div className="text-2xl font-bold text-emerald-700 mt-0.5">{result.correctCount}</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-center">
            <span className="text-xs text-rose-500 font-medium">Số câu sai</span>
            <div className="text-2xl font-bold text-rose-600 mt-0.5">{result.wrongCount}</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-center">
            <span className="text-xs text-slate-400 font-medium">Chưa làm</span>
            <div className="text-2xl font-bold text-slate-600 mt-0.5">{result.unansweredCount}</div>
          </div>
        </div>

        {/* Bảng phân tích theo từng chương */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Đánh giá năng lực theo từng chương:
          </h3>
          <div className="space-y-3">
            {Object.values(result.chapterBreakdown).map((bd) => {
              const pct = Math.round(bd.scoreRatio * 100);
              return (
                <div key={bd.chapterId} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">
                      Chương {bd.chapterId}: {bd.chapterTitle.split(':')[1]?.trim() || bd.chapterTitle}
                    </span>
                    <span className="font-bold text-slate-800">
                      {bd.correctCount}/{bd.totalQuestions} câu ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-300',
                        pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bộ lọc xem lại chi tiết bài làm */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Xem lại bài thi:</span>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setReviewFilter('all')}
                className={cn(
                  'px-3 py-1 rounded-lg transition-colors',
                  reviewFilter === 'all' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
                )}
              >
                Tất cả ({result.questionResults.length})
              </button>
              <button
                type="button"
                onClick={() => setReviewFilter('wrong')}
                className={cn(
                  'px-3 py-1 rounded-lg transition-colors',
                  reviewFilter === 'wrong' ? 'bg-white font-bold text-rose-600 shadow-2xs' : 'text-slate-600'
                )}
              >
                Câu sai ({result.wrongCount})
              </button>
              <button
                type="button"
                onClick={() => setReviewFilter('correct')}
                className={cn(
                  'px-3 py-1 rounded-lg transition-colors',
                  reviewFilter === 'correct' ? 'bg-white font-bold text-emerald-600 shadow-2xs' : 'text-slate-600'
                )}
              >
                Câu đúng ({result.correctCount})
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setResult(null);
              setSession(null);
            }}
            className="flex items-center space-x-1.5 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            Làm đề thi mới
          </button>
        </div>

        {/* Danh sách câu hỏi chi tiết sau thi */}
        <div className="space-y-4">
          {filteredReviewQuestions.map((qResult, idx) => {
            const expText =
              typeof qResult.explanation === 'string'
                ? qResult.explanation
                : `${qResult.explanation.summary}\n\n${qResult.explanation.correctReason}`;

            const userAnswersArray = Array.isArray(qResult.userAnswer)
              ? qResult.userAnswer
              : qResult.userAnswer
              ? [qResult.userAnswer]
              : [];

            return (
              <div
                key={qResult.questionId}
                className={cn(
                  'bg-white border rounded-2xl p-5 shadow-xs transition-all',
                  qResult.isCorrect ? 'border-emerald-200' : 'border-rose-200'
                )}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md">
                      Câu {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Chương {qResult.chapterId}
                    </span>
                  </div>

                  {qResult.isCorrect ? (
                    <span className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" /> Đúng
                    </span>
                  ) : (
                    <span className="flex items-center text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-lg">
                      <XCircle className="w-4 h-4 mr-1 text-rose-600" />
                      {userAnswersArray.length === 0 ? 'Chưa trả lời' : 'Sai'}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-900 mb-4">
                  {qResult.questionContent}
                </p>

                {/* Các phương án */}
                <div className="space-y-2 mb-4">
                  {qResult.options.map((opt) => {
                    const isUserChosen = userAnswersArray.includes(opt.id);
                    const isCorrect = qResult.correctAnswers?.includes(opt.id);

                    let optStyle = 'border-slate-200 bg-slate-50/50 text-slate-600';
                    if (isCorrect) {
                      optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isUserChosen && !isCorrect) {
                      optStyle = 'border-rose-400 bg-rose-50 text-rose-950 line-through';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={cn('p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5', optStyle)}
                      >
                        <span className="font-bold w-5">{opt.id}.</span>
                        <span className="flex-1">{opt.text}</span>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isUserChosen && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Lời giải thích */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed whitespace-pre-line mb-3">
                  {expText}
                </div>

                {/* Tra cứu trong Drawer */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => openDrawer(qResult.articleId, qResult.chapterId)}
                    className="flex items-center space-x-1.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-lg border border-amber-300 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Tra cứu đối chiếu lý thuyết</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // MÀN HÌNH 2: ĐANG LÀM BÀI THI CÓ TÍNH GIỜ (IN PROGRESS)
  // =========================================================================
  if (session && session.status === 'in_progress') {
    const currentQIndex = session.currentQuestionIndex;
    const currentQuestion = session.questions[currentQIndex];
    const isMultiple = currentQuestion.questionType === 'multiple';

    const currentAnswer = session.userAnswers[currentQuestion.id];
    const currentSelectedArray: OptionId[] = Array.isArray(currentAnswer)
      ? currentAnswer
      : currentAnswer
      ? [currentAnswer]
      : [];

    const isFlagged = session.flaggedQuestionIds.includes(currentQuestion.id);

    // Định dạng đồng hồ đếm ngược MM:SS
    const minutes = Math.floor(session.remainingSeconds / 60);
    const seconds = session.remainingSeconds % 60;
    const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const isNearEnd = session.remainingSeconds < 300; // Dưới 5 phút

    const answeredCount = Object.keys(session.userAnswers).length;

    return (
      <div className="space-y-5">
        {/* Thanh Header phiên thi: Đồng hồ đếm ngược & Nút nộp bài */}
        <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-base sm:text-lg font-bold border transition-colors',
                isNearEnd
                  ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                  : 'bg-slate-100 text-slate-800 border-slate-200'
              )}
            >
              <Clock className={cn('w-4 h-4', isNearEnd && 'text-rose-600')} />
              <span>{timeFormatted}</span>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Đã làm: <strong className="text-blue-600">{answeredCount}</strong> /{' '}
              {session.questions.length} câu
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleToggleFlag(currentQuestion.id)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors',
                isFlagged
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              )}
            >
              <Flag className={cn('w-3.5 h-3.5', isFlagged && 'fill-current text-amber-600')} />
              <span className="hidden sm:inline">Cắm cờ xem lại</span>
            </button>

            <button
              type="button"
              onClick={() => setShowSubmitConfirm(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp bài</span>
            </button>
          </div>
        </div>

        {/* Ma trận điều hướng câu hỏi bài thi */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Ma trận câu hỏi:</span>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Đã làm
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Cắm cờ
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span> Chưa làm
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1 scrollbar-thin">
            {session.questions.map((q, idx) => {
              const isAnswered = session.userAnswers[q.id] !== undefined;
              const hasFlag = session.flaggedQuestionIds.includes(q.id);
              const isCurrent = idx === currentQIndex;

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    setSession((prev) => (prev ? { ...prev, currentQuestionIndex: idx } : null));
                  }}
                  className={cn(
                    'w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center border transition-all relative',
                    isAnswered
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200',
                    isCurrent && 'ring-2 ring-amber-500 scale-105'
                  )}
                >
                  {idx + 1}
                  {hasFlag && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 absolute -top-0.5 -right-0.5 ring-1 ring-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Thẻ câu hỏi hiện tại */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-lg">
                Câu {currentQIndex + 1} / {session.questions.length}
              </span>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                Chương {currentQuestion.chapterId}
              </span>
              <span className="text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
                {isMultiple ? '☑ Chọn nhiều đáp án' : '◉ Chọn 1 đáp án'}
              </span>
            </div>

            <span className="text-xs font-medium text-slate-400">
              {currentQuestion.difficulty === 'easy'
                ? 'Dễ'
                : currentQuestion.difficulty === 'medium'
                ? 'Trung bình'
                : 'Khó'}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-5 text-justify">
            {currentQuestion.content}
          </h3>

          {/* Danh sách phương án lựa chọn */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((opt) => {
              const isSelected = currentSelectedArray.includes(opt.id);

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectAnswer(currentQuestion.id, opt.id)}
                  className={cn(
                    'w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer',
                    isSelected
                      ? 'border-blue-600 bg-blue-50/90 text-blue-950 font-medium ring-1 ring-blue-600'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  )}
                >
                  <span
                    className={cn(
                      'w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border transition-colors',
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-100 text-slate-700 border-slate-300'
                    )}
                  >
                    {opt.id}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed pt-0.5 flex-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Điều hướng Trước / Sau */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              disabled={currentQIndex <= 0}
              onClick={() => {
                setSession((prev) =>
                  prev ? { ...prev, currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1) } : null
                );
              }}
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-0.5" />
              Câu trước
            </button>

            <button
              type="button"
              disabled={currentQIndex >= session.questions.length - 1}
              onClick={() => {
                setSession((prev) =>
                  prev
                    ? {
                        ...prev,
                        currentQuestionIndex: Math.min(
                          prev.questions.length - 1,
                          prev.currentQuestionIndex + 1
                        ),
                      }
                    : null
                );
              }}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
            >
              Câu tiếp theo
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Modal xác nhận nộp bài */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Bạn có chắc chắn muốn nộp bài thi?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Bạn đã làm <strong className="text-blue-600">{answeredCount}</strong> trên tổng số{' '}
                <strong>{session.questions.length}</strong> câu hỏi.
                {session.questions.length - answeredCount > 0 && (
                  <span className="block mt-1 text-rose-600 font-semibold">
                    Còn {session.questions.length - answeredCount} câu chưa trả lời!
                  </span>
                )}
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Tiếp tục làm bài
                </button>
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs"
                >
                  Xác nhận nộp bài
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // MÀN HÌNH 3: THIẾT LẬP VÀ BẮT ĐẦU THI THỬ (SETUP SCREEN)
  // =========================================================================
  return (
    <div className="space-y-6">
      {/* Banner Giới thiệu Chế độ Thi Thử */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider backdrop-blur-xs mb-3">
          <Clock className="w-4 h-4 text-blue-200" />
          <span>Mô phỏng kỳ thi chính thức HCMUTE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          Thi thử Trắc nghiệm Pháp luật đại cương
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-xl leading-relaxed">
          Đề thi được sinh ngẫu nhiên cân đối theo tỷ trọng 7 chương giáo trình, tính giờ tự động,
          chống mất bài khi tải lại trang và cung cấp phân tích năng lực chi tiết sau khi nộp bài.
        </p>
      </div>

      {/* Chọn Preset Thi Nhanh */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          1. Chọn chế độ thi mô phỏng:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(Object.keys(EXAM_PRESETS) as ExamPresetKey[]).map((key) => {
            const preset = EXAM_PRESETS[key];
            const isSelected = selectedPreset === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedPreset(key)}
                className={cn(
                  'p-4 rounded-2xl border text-left transition-all duration-200 relative',
                  isSelected
                    ? 'border-blue-600 bg-blue-50/80 shadow-xs ring-2 ring-blue-600/30'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                <div className="text-sm font-bold text-slate-900 mb-1">{preset.label}</div>
                <div className="text-xs text-slate-500">
                  {preset.questionCount} câu hỏi • {preset.durationMinutes} phút
                </div>
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-blue-600 absolute top-4 right-4" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chọn Chương thi */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            2. Phạm vi kiến thức (Mặc định toàn bộ 7 chương):
          </label>
          <button
            type="button"
            onClick={() => {
              if (selectedChapters.length === 7) setSelectedChapters([1]);
              else setSelectedChapters([1, 2, 3, 4, 5, 6, 7]);
            }}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800"
          >
            {selectedChapters.length === 7 ? 'Bỏ chọn tất cả' : 'Chọn toàn bộ 7 chương'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((chId) => {
            const ch = chaptersMap[chId];
            const isChecked = selectedChapters.includes(chId);

            return (
              <label
                key={chId}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors',
                  isChecked
                    ? 'bg-blue-50/60 border-blue-200 text-blue-950 font-semibold'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                )}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedChapters((prev) => [...prev, chId]);
                    } else if (selectedChapters.length > 1) {
                      setSelectedChapters((prev) => prev.filter((id) => id !== chId));
                    }
                  }}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="truncate">
                  Chương {chId}: {ch?.title || `Chương ${chId}`}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Nút Khởi động Thi */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={handleStartExam}
          className="flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-base font-bold shadow-md hover:shadow-lg transition-all scale-100 hover:scale-102 cursor-pointer"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>Bắt đầu làm bài thi</span>
        </button>
      </div>
    </div>
  );
};
