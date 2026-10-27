/**
 * src/subjects/c-lang/components/exam/CMockExamView.tsx
 * Chế độ Thi thử Lập trình C/C++ chuẩn 45 câu / 90 phút (HCMUTE)
 */

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  Flag,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  AlertTriangle,
  Code2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCStudy } from '../../context/CStudyContext';
import { generateCMockExamSession, DEFAULT_C_EXAM_CONFIG, MOCK_EXAM_CHAPTER_QUOTA } from '../../data';
import { recordCExamResult } from '../../utils/storage';
import { CQuestion } from '../../types';

export const CMockExamView: React.FC = () => {
  const { progress } = useCStudy();

  const [examState, setExamState] = useState<'idle' | 'testing' | 'submitted'>('idle');
  const [usePreset, setUsePreset] = useState<boolean>(true);
  const [questions, setQuestions] = useState<CQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_C_EXAM_CONFIG.durationMinutes * 60);

  // Timer countdown
  useEffect(() => {
    if (examState !== 'testing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState]);

  const handleStartExam = () => {
    const session = generateCMockExamSession(usePreset);
    setQuestions(session.questions);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlagged({});
    setTimeLeft(DEFAULT_C_EXAM_CONFIG.durationMinutes * 60);
    setExamState('testing');
  };

  const handleSelectAnswer = (optId: string) => {
    const q = questions[currentIndex];
    setUserAnswers((prev) => ({ ...prev, [q.id]: optId }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSubmitExam = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] && q.correctAnswers.includes(userAnswers[q.id] as any)) {
        correct++;
      }
    });

    const total = questions.length || 45;
    const score = Math.round((correct / total) * 100) / 10; // Thang 10

    recordCExamResult({
      score,
      totalQuestions: total,
      correctCount: correct,
      durationSeconds: DEFAULT_C_EXAM_CONFIG.durationMinutes * 60 - timeLeft,
      answers: userAnswers,
      isPreset: usePreset,
    });

    setExamState('submitted');

    if (score >= 8.0) {
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
    }
  };

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Tính điểm tổng kết
  const totalCorrect = questions.filter(
    (q) => userAnswers[q.id] && q.correctAnswers.includes(userAnswers[q.id] as any)
  ).length;
  const examScore = Math.round((totalCorrect / (questions.length || 45)) * 100) / 10;

  // Render 1: Start Screen (Idle)
  if (examState === 'idle') {
    return (
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">
            Đề Thi Thử Chuẩn Lập Trình C/C++ (HCMUTE)
          </h2>
          <p className="text-xs md:text-sm text-center text-slate-500 dark:text-slate-400 mb-6">
            Mô phỏng 100% hình thức thi kết thúc học phần: 45 câu trắc nghiệm · Thời gian làm bài 90 phút
          </p>

          {/* Mode Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setUsePreset(true)}
              className={`p-4 rounded-xl border text-left transition-all ${
                usePreset
                  ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-2 ring-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Đề Chuẩn Tuyển Chọn</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  Khuyên dùng
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                45 câu hỏi tiêu biểu đại diện đầy đủ các bẫy đề thi kinh điển nhất từ 9 chương.
              </p>
            </button>

            <button
              onClick={() => setUsePreset(false)}
              className={`p-4 rounded-xl border text-left transition-all ${
                !usePreset
                  ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-2 ring-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Đề Ngẫu Nhiên</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
                  Xáo trộn
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Lấy mẫu ngẫu nhiên từ ngân hàng 270 câu theo đúng tỷ lệ số câu từng chương.
              </p>
            </button>
          </div>

          {/* Chapter quota specs */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 mb-6">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Cơ cấu phân bổ số câu trong đề thi (45 câu):
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
              <div>Chương 1: 3 câu</div>
              <div>Chương 2: 5 câu</div>
              <div>Chương 3: 6 câu</div>
              <div>Chương 4: 5 câu</div>
              <div>Chương 5: 6 câu</div>
              <div>Chương 6: 6 câu</div>
              <div>Chương 7: 5 câu</div>
              <div>Chương 8: 4 câu</div>
              <div>Chương 9: 5 câu</div>
            </div>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Bắt Đầu Làm Bài Thi Ngay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Render 2: Active Exam Test
  if (examState === 'testing' && questions.length > 0) {
    const currentQ = questions[currentIndex];
    const isAnswered = !!userAnswers[currentQ.id];
    const isFlagged = !!flagged[currentQ.id];

    return (
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Exam Header */}
        <div className="p-3 md:p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              Đề thi Lập trình C ({questions.length} câu)
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Đã làm: {Object.keys(userAnswers).length}/{questions.length}
            </span>
          </div>

          {/* Countdown Clock */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs md:text-sm font-bold border transition-colors ${
              timeLeft < 300
                ? 'bg-red-50 text-red-600 border-red-200 animate-pulse'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={handleSubmitExam}
            className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            Nộp Bài
          </button>
        </div>

        {/* Workspace: Question & Navigation Grid */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Main Question Card */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-sm bg-blue-600 text-white px-2.5 py-0.5 rounded-lg">
                    Câu {currentIndex + 1}
                  </span>
                  <span className="font-medium text-slate-500">
                    Chương {currentQ.chapterId}
                  </span>
                </div>
                <button
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                    isFlagged
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{isFlagged ? 'Đã cắm cờ' : 'Đặt cờ xem lại'}</span>
                </button>
              </div>

              <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 mb-4 leading-relaxed">
                {currentQ.content}
              </h3>

              {currentQ.codeSnippet && (
                <div className="mb-4 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-slate-100">
                  <pre className="p-3 text-xs md:text-sm font-mono overflow-x-auto text-blue-300">
                    <code>{currentQ.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = userAnswers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectAnswer(opt.id)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs md:text-sm flex items-start gap-3 transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 ring-2 ring-blue-500/20 font-medium'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {opt.id}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((i) => i - 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <button
                disabled={currentIndex === questions.length - 1}
                onClick={() => setCurrentIndex((i) => i + 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-semibold shadow-xs"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Question Palette Grid */}
          <div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shrink-0 flex flex-col">
            <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100 mb-3">
              Danh sách câu hỏi (1 - {questions.length})
            </h4>

            <div className="grid grid-cols-5 gap-2 overflow-y-auto flex-1 max-h-56 md:max-h-none pr-1">
              {questions.map((q, idx) => {
                const isAns = !!userAnswers[q.id];
                const isFlag = !!flagged[q.id];
                const isCur = idx === currentIndex;

                let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
                if (isCur) {
                  btnStyle = 'ring-2 ring-blue-500 font-bold';
                }
                if (isAns) {
                  btnStyle += ' bg-blue-600 text-white dark:text-white';
                }
                if (isFlag) {
                  btnStyle += ' border-2 border-amber-500';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-mono font-semibold transition-all relative ${btnStyle}`}
                  >
                    {idx + 1}
                    {isFlag && (
                      <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render 3: Submitted Results & Review
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Score Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
            Kết Quả Bài Thi Thử
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Đề thi Lập trình C · Thời gian hoàn thành: {formatTime(DEFAULT_C_EXAM_CONFIG.durationMinutes * 60 - timeLeft)}
          </p>

          <div className="inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 mb-4">
            <span className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
              {examScore.toFixed(1)}
            </span>
            <span className="text-slate-400 text-sm font-semibold">/ 10.0</span>
          </div>

          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-6">
            Số câu đúng: <span className="text-emerald-600 font-bold">{totalCorrect}</span> / {questions.length} câu (
            {Math.round((totalCorrect / questions.length) * 100)}%)
          </p>

          <button
            onClick={() => setExamState('idle')}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm Đề Thi Mới</span>
          </button>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Chi Tiết Từng Câu Hỏi & Lời Giải:
          </h3>

          {questions.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice && q.correctAnswers.includes(userChoice as any);

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 text-xs md:text-sm space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md">
                      Câu {idx + 1}
                    </span>
                    <span className="text-slate-500">Chương {q.chapterId}</span>
                  </div>

                  {isCorrect ? (
                    <span className="flex items-center gap-1 font-semibold text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" /> Đúng
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 font-semibold text-red-600">
                      <XCircle className="w-4 h-4" /> Sai / Chưa chọn
                    </span>
                  )}
                </div>

                <p className="font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.content}
                </p>

                {q.codeSnippet && (
                  <pre className="p-2.5 rounded-lg bg-slate-950 text-blue-300 font-mono text-xs overflow-x-auto">
                    <code>{q.codeSnippet}</code>
                  </pre>
                )}

                <div className="space-y-1.5 pl-2 border-l-2 border-slate-200 dark:border-slate-700 text-xs">
                  <div>
                    Đáp án đúng: <span className="font-bold text-emerald-600">{q.correctAnswers.join(', ')}</span>
                  </div>
                  <div>
                    Bạn đã chọn: <span className={`font-bold ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>{userChoice || 'Bỏ trống'}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Giải thích: </span>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
