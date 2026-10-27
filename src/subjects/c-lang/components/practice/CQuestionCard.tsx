/**
 * src/subjects/c-lang/components/practice/CQuestionCard.tsx
 * Thẻ hiển thị câu hỏi trắc nghiệm Lập trình C/C++
 * Thiết kế đồng bộ 100% với QuestionCard của môn Pháp luật đại cương (HCMUTE)
 */

import React, { useState, useEffect } from 'react';
import {
  Bookmark,
  BookOpen,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ExternalLink,
  Code2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CQuestion, OptionId, CQuestionSubtype } from '../../types';
import { useCDrawer } from '../../context/CDrawerContext';
import { cn } from '@/utils/cn';

export interface CQuestionCardProps {
  question: CQuestion;
  index: number;
  total: number;
  isBookmarked: boolean;
  onToggleBookmark: (questionId: string) => void;
  onRecordAnswer: (questionId: string, answer: OptionId, isCorrect: boolean) => void;
  savedAnswer?: OptionId;
  savedIsCorrect?: boolean;
}

export const CQuestionCard: React.FC<CQuestionCardProps> = ({
  question,
  index,
  total,
  isBookmarked,
  onToggleBookmark,
  onRecordAnswer,
  savedAnswer,
  savedIsCorrect,
}) => {
  const { openDrawer } = useCDrawer();

  const [selectedOption, setSelectedOption] = useState<OptionId | null>(savedAnswer || null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(savedAnswer !== undefined);

  useEffect(() => {
    setSelectedOption(savedAnswer || null);
    setIsSubmitted(savedAnswer !== undefined);
  }, [question.id, savedAnswer]);

  const handleSelectOption = (optionId: OptionId) => {
    if (isSubmitted) return;

    setSelectedOption(optionId);
    setIsSubmitted(true);

    const isCorrect = question.correctAnswers.includes(optionId);
    onRecordAnswer(question.id, optionId, isCorrect);

    if (isCorrect) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption ? question.correctAnswers.includes(selectedOption) : false;
  const correctAnswersList = question.correctAnswers || [];

  const getSubtypeLabel = (subtype: CQuestionSubtype) => {
    switch (subtype) {
      case 'theory':
        return 'Lý thuyết';
      case 'output':
        return 'Đoán Output';
      case 'debug':
        return 'Debug lỗi';
      case 'fill-in':
        return 'Điền khuyết';
      default:
        return 'Trắc nghiệm';
    }
  };

  return (
    <div
      id={`c-question-card-${question.id}`}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs transition-all duration-200 hover:shadow-sm"
    >
      {/* 1. Header Card: Số thứ tự, Nhãn độ khó, Định dạng, Trích dẫn & Nút Bookmark */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
            Câu {index} / {total}
          </span>

          {/* Độ khó */}
          <span
            className={cn(
              'text-xs font-semibold px-2 py-0.5 rounded-full',
              question.difficulty === 'easy' &&
                'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300',
              question.difficulty === 'medium' &&
                'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300',
              question.difficulty === 'hard' &&
                'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'
            )}
          >
            {question.difficulty === 'easy'
              ? 'Dễ'
              : question.difficulty === 'medium'
              ? 'Trung bình'
              : 'Khó'}
          </span>

          {/* Dạng câu hỏi Lập trình C */}
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md border bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            ◉ {getSubtypeLabel(question.questionSubtype)}
          </span>

          {/* Trích dẫn trang giáo trình */}
          {(question.reference?.uttPage || question.reference?.hcmutePage) && (
            <span className="hidden sm:inline-flex text-[11px] text-slate-500 dark:text-slate-400 font-medium items-center">
              Giáo trình {question.reference.uttPage ? `UTT ${question.reference.uttPage}` : ''}
              {question.reference.uttPage && question.reference.hcmutePage ? ' • ' : ''}
              {question.reference.hcmutePage ? `HCMUTE ${question.reference.hcmutePage}` : ''}
            </span>
          )}
        </div>

        {/* Nút đánh dấu Bookmark */}
        <button
          type="button"
          onClick={() => onToggleBookmark(question.id)}
          className={cn(
            'p-2 rounded-xl transition-all cursor-pointer',
            isBookmarked
              ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/60'
              : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
          )}
          title={isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu câu hỏi này'}
          aria-label={isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu'}
        >
          <Bookmark className={cn('w-4 h-4', isBookmarked && 'fill-current')} />
        </button>
      </div>

      {/* 2. Nội dung câu hỏi */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug mb-4 text-justify">
        {question.content}
      </h3>

      {/* Khối Mã Nguồn Code C/C++ nếu có */}
      {question.codeSnippet && (
        <div className="mb-5 rounded-xl bg-slate-900 text-slate-100 p-3.5 sm:p-4 text-xs sm:text-sm font-mono overflow-x-auto border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400 select-none">
            <span className="font-semibold flex items-center gap-1.5 text-blue-400">
              <Code2 className="w-3.5 h-3.5" />
              Mã nguồn C / C++
            </span>
            <span className="uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">
              {question.questionSubtype}
            </span>
          </div>
          <pre className="leading-relaxed">
            <code>{question.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* 3. Danh sách phương án lựa chọn (A, B, C, D) */}
      <div className="space-y-3 mb-5">
        {question.options.map((opt) => {
          const isChosen = selectedOption === opt.id;
          const isAnswerCorrect = correctAnswersList.includes(opt.id);

          let optionStyle =
            'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200';
          let badgeStyle =
            'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600';

          if (isSubmitted) {
            if (isAnswerCorrect) {
              optionStyle =
                'border-emerald-500 dark:border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 font-medium ring-1 ring-emerald-500';
              badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
            } else if (isChosen && !isAnswerCorrect) {
              optionStyle =
                'border-rose-400 dark:border-rose-500 bg-rose-50/80 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100 line-through ring-1 ring-rose-400';
              badgeStyle = 'bg-rose-600 text-white border-rose-600';
            } else {
              optionStyle =
                'border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 text-slate-400 dark:text-slate-600 opacity-60';
              badgeStyle =
                'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-700';
            }
          } else if (isChosen) {
            optionStyle =
              'border-blue-600 dark:border-blue-500 bg-blue-50/80 dark:bg-blue-950/50 text-blue-950 dark:text-blue-100 font-medium ring-1 ring-blue-600 dark:ring-blue-500';
            badgeStyle = 'bg-blue-600 text-white border-blue-600';
          }

          return (
            <button
              key={opt.id}
              type="button"
              disabled={isSubmitted}
              onClick={() => handleSelectOption(opt.id)}
              className={cn(
                'w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 relative cursor-pointer disabled:cursor-default',
                optionStyle
              )}
            >
              {/* Badge A, B, C, D */}
              <span
                className={cn(
                  'w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border transition-colors',
                  badgeStyle
                )}
              >
                {opt.id}
              </span>

              {/* Text đáp án */}
              <span className="text-sm sm:text-base leading-relaxed pt-0.5 flex-1 font-sans">
                {opt.text}
              </span>

              {/* Icon phản hồi đúng / sai khi đã nộp */}
              {isSubmitted && isAnswerCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              )}
              {isSubmitted && isChosen && !isAnswerCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* 4. Khối Giải thích Chi tiết & Bẫy Đề Thi (Hiển thị sau khi trả lời) */}
      {isSubmitted && (
        <div
          className={cn(
            'p-4 sm:p-5 rounded-xl border mt-5 transition-all duration-300',
            isCorrect
              ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800'
              : 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800'
          )}
        >
          {/* Header trạng thái */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                    Chính xác! Bạn trả lời rất chuẩn.
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span className="font-bold text-sm text-rose-900 dark:text-rose-200">
                    Chưa chính xác! Đáp án đúng là:{' '}
                    <strong className="underline underline-offset-2">
                      {correctAnswersList.join(', ')}
                    </strong>
                  </span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center space-x-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-300/60 dark:border-slate-700 transition-colors cursor-pointer"
              title="Làm lại câu này"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              Làm lại
            </button>
          </div>

          {/* Lời giải chi tiết từ Giáo trình */}
          <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line text-justify mb-3 bg-white/80 dark:bg-slate-900/90 p-3.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
            {question.explanation}
          </div>

          {/* Nút hành động Tra cứu sâu Drawer */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {question.tags?.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700"
                >
                  #{t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => openDrawer(question.articleId, question.chapterId)}
              className="flex items-center space-x-1.5 text-xs font-bold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/60 hover:bg-blue-200 dark:hover:bg-blue-900/60 px-3.5 py-2 rounded-xl border border-blue-300 dark:border-blue-700 transition-colors shrink-0 shadow-2xs cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-700 dark:text-blue-400" />
              <span>Tra cứu lý thuyết mục này</span>
              <ExternalLink className="w-3 h-3 text-blue-600 dark:text-blue-400 ml-0.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
