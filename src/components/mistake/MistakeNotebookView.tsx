import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Trash2,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { allQuestions, getQuestionById, chaptersMap, allChapters } from '@/data';
import { Question, OptionId } from '@/types';
import {
  loadUserProgress,
  removeMistake,
  recordQuestionAnswer,
  UserProgressState,
} from '@/utils/storage';
import { useDrawer } from '@/context/DrawerContext';
import { isQuestionAnswerCorrect } from '@/utils/examGenerator';
import { cn } from '@/utils/cn';

export const MistakeNotebookView: React.FC = () => {
  const { openDrawer } = useDrawer();

  const [userProgress, setUserProgress] = useState<UserProgressState>(loadUserProgress());
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [answeredMap, setAnsweredMap] = useState<Record<string, { answer: OptionId | OptionId[]; isCorrect: boolean }>>({});

  // Danh sách các câu hỏi trong sổ tay câu sai
  const mistakeEntries = useMemo(() => {
    return Object.entries(userProgress.mistakes)
      .map(([qId, record]) => {
        const question = getQuestionById(qId);
        return {
          questionId: qId,
          record,
          question,
        };
      })
      .filter((item): item is { questionId: string; record: any; question: Question } => {
        if (!item.question) return false;
        if (selectedChapter !== 'all' && item.question.chapterId !== selectedChapter) return false;
        return true;
      });
  }, [userProgress.mistakes, selectedChapter]);

  // Xóa thủ công câu sai
  const handleManualRemove = (questionId: string) => {
    const nextProgress = removeMistake(questionId);
    setUserProgress({ ...nextProgress });
  };

  // Trả lời câu sai
  const handleAnswerQuestion = (question: Question, optionId: OptionId) => {
    const isMultiple = question.questionType === 'multiple';
    let chosenAnswer: OptionId | OptionId[];

    if (isMultiple) {
      const current = answeredMap[question.id]?.answer;
      const list = Array.isArray(current) ? current : current ? [current] : [];
      chosenAnswer = list.includes(optionId)
        ? list.filter((id) => id !== optionId)
        : [...list, optionId];
    } else {
      chosenAnswer = optionId;
    }

    const correct = isQuestionAnswerCorrect(question, chosenAnswer);

    setAnsweredMap((prev) => ({
      ...prev,
      [question.id]: { answer: chosenAnswer, isCorrect: correct },
    }));

    if (!isMultiple && correct) {
      // Quyết định 15: Tự động gỡ khỏi sổ câu sai khi làm lại đúng
      setTimeout(() => {
        handleManualRemove(question.id);
      }, 1200);
    }
  };

  // Nộp câu hỏi multiple trong sổ tay
  const handleSubmitMulti = (question: Question) => {
    const currentAns = answeredMap[question.id]?.answer;
    if (!currentAns) return;

    const correct = isQuestionAnswerCorrect(question, currentAns);
    setAnsweredMap((prev) => ({
      ...prev,
      [question.id]: { answer: currentAns, isCorrect: correct },
    }));

    if (correct) {
      setTimeout(() => {
        handleManualRemove(question.id);
      }, 1200);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Sổ Tay Câu Sai */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Sổ Tay Câu Hỏi Hay Sai (Mistake Notebook)
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Tự động lưu câu trả lời chưa đúng • Làm lại đúng sẽ tự động gỡ bỏ
            </span>
          </div>
        </div>

        {/* Lọc theo chương */}
        <select
          value={selectedChapter}
          onChange={(e) =>
            setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))
          }
          className="text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0"
        >
          <option value="all">Tất cả các chương ({Object.keys(userProgress.mistakes).length} câu)</option>
          {allChapters.map((ch) => {
            const countInCh = Object.keys(userProgress.mistakes).filter((id) => {
              const q = getQuestionById(id);
              return q && q.chapterId === ch.id;
            }).length;

            return (
              <option key={ch.id} value={ch.id}>
                Chương {ch.id} ({countInCh} câu)
              </option>
            );
          })}
        </select>
      </div>

      {/* 2. Danh sách câu sai */}
      {mistakeEntries.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-xs">
          <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Tuyệt vời! Không có câu hỏi nào trong danh sách cần khắc phục.
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Bạn chưa làm sai câu hỏi nào thuộc phạm vi này, hoặc đã xuất sắc làm lại đúng toàn bộ!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakeEntries.map(({ questionId, record, question }, idx) => {
            const answeredState = answeredMap[questionId];
            const isMultiple = question.questionType === 'multiple';
            const selectedArray = answeredState
              ? Array.isArray(answeredState.answer)
                ? answeredState.answer
                : [answeredState.answer]
              : [];

            const isDone = answeredState !== undefined;
            const isCorrect = answeredState?.isCorrect;

            const expText =
              typeof question.explanation === 'string'
                ? question.explanation
                : `${question.explanation.summary}\n\n${question.explanation.correctReason}`;

            return (
              <div
                key={questionId}
                className={cn(
                  'bg-white border rounded-2xl p-5 shadow-xs transition-all duration-300',
                  isDone && isCorrect
                    ? 'border-emerald-300 bg-emerald-50/30'
                    : 'border-slate-200 hover:border-slate-300'
                )}
              >
                {/* Header item */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-lg">
                      #{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Chương {question.chapterId}
                    </span>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Đã sai {record.wrongCount} lần
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleManualRemove(questionId)}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-rose-600 transition-colors"
                    title="Gỡ khỏi sổ câu sai"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-0.5" />
                    <span>Đã hiểu / Gỡ</span>
                  </button>
                </div>

                {/* Nội dung câu hỏi */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-snug">
                  {question.content}
                </h3>

                {/* Phương án trả lời */}
                <div className="space-y-2 mb-4">
                  {question.options.map((opt) => {
                    const isChosen = selectedArray.includes(opt.id);
                    const isAnsCorrect = question.correctAnswers?.includes(opt.id);

                    let optStyle = 'border-slate-200 bg-white hover:border-slate-300 text-slate-700';
                    if (isDone) {
                      if (isAnsCorrect) {
                        optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                      } else if (isChosen && !isAnsCorrect) {
                        optStyle = 'border-rose-400 bg-rose-50 text-rose-950 line-through';
                      }
                    } else if (isChosen) {
                      optStyle = 'border-blue-600 bg-blue-50 font-medium';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleAnswerQuestion(question, opt.id)}
                        className={cn(
                          'w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 transition-all cursor-pointer',
                          optStyle
                        )}
                      >
                        <span className="w-5 h-5 rounded-md text-xs font-bold bg-slate-100 flex items-center justify-center shrink-0">
                          {opt.id}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                        {isDone && isAnsCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Nút kiểm tra cho multiple */}
                {isMultiple && !isDone && (
                  <div className="flex justify-end mb-3">
                    <button
                      type="button"
                      disabled={selectedArray.length === 0}
                      onClick={() => handleSubmitMulti(question)}
                      className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 disabled:bg-slate-300"
                    >
                      Kiểm tra đáp án
                    </button>
                  </div>
                )}

                {/* Thông báo kết quả và lời giải */}
                {isDone && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                        {isCorrect
                          ? '✓ Bạn làm lại chính xác! Câu này sẽ tự động được gỡ bỏ.'
                          : '✕ Vẫn chưa đúng. Hãy xem lại lời giải căn cứ bên dưới:'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                      {expText}
                    </div>
                  </div>
                )}

                {/* Tra cứu Drawer */}
                <div className="flex justify-end pt-3">
                  <button
                    type="button"
                    onClick={() => openDrawer(question.articleId, question.chapterId)}
                    className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Tra cứu đối chiếu trong Drawer</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
