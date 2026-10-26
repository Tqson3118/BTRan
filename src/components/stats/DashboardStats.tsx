import React, { useState } from 'react';
import {
  BarChart2,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  Award,
  BookOpen,
  Bookmark,
  RotateCcw,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';
import { allChapters, allQuestions, allFlashcards, getQuestionsByChapter, getFlashcardsByChapter } from '@/data';
import { useStudy } from '@/context/StudyContext';
import { loadUserProgress, resetAllProgress, UserProgressState } from '@/utils/storage';
import { cn } from '@/utils/cn';

export const DashboardStats: React.FC = () => {
  const { setMode, setChapter } = useStudy();
  const [userProgress, setUserProgress] = useState<UserProgressState>(loadUserProgress());
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  const totalQuestions = allQuestions.length; // 195
  const answeredCount = userProgress.completedQuestionIds.length;
  const correctCount = userProgress.correctQuestionIds.length;
  const accuracyPercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const completionPercent = Math.round((answeredCount / totalQuestions) * 100);

  const totalFlashcards = allFlashcards.length; // 98
  const masteredFlashcards = Object.values(userProgress.flashcardMastery).filter(
    (m) => m === 'mastered'
  ).length;

  const examsCount = userProgress.examHistory.length;
  const avgScore =
    examsCount > 0
      ? (
          userProgress.examHistory.reduce((acc, h) => acc + h.score, 0) / examsCount
        ).toFixed(1)
      : '0.0';

  const handleResetData = () => {
    resetAllProgress();
    setUserProgress(loadUserProgress());
    setShowResetConfirm(false);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Báo cáo & Thống kê */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider backdrop-blur-xs mb-3">
          <BarChart2 className="w-4 h-4 text-blue-300" />
          <span>Báo cáo học tập & Tiến độ cá nhân</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          Tổng quan năng lực ôn tập
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
          Theo dõi chi tiết số lượng câu hỏi đã hoàn thành, tỷ lệ trả lời đúng theo từng chương và lịch
          sử các lần thi thử mô phỏng.
        </p>
      </div>

      {/* 2. 4 Thẻ chỉ số chính (KPI Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold">Tiến độ câu hỏi</span>
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {answeredCount} <span className="text-sm font-normal text-slate-400 dark:text-slate-500">/ {totalQuestions}</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: `${completionPercent}%` }} />
            </div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{completionPercent}%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold">Tỷ lệ chính xác</span>
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
            {accuracyPercent}%
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
            {correctCount} câu đúng / {answeredCount} câu đã làm
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold">Thẻ nhớ đã thuộc</span>
            <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-purple-700 dark:text-purple-400">
            {masteredFlashcards} <span className="text-sm font-normal text-slate-400 dark:text-slate-500">/ {totalFlashcards}</span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
            {Math.round((masteredFlashcards / totalFlashcards) * 100)}% toàn bộ thuật ngữ
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold">Điểm thi thử TB</span>
            <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
            {avgScore} <span className="text-sm font-normal text-slate-400 dark:text-slate-500">/ 10</span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
            Đã thực hiện {examsCount} lần thi thử
          </p>
        </div>
      </div>

      {/* 3. Tiến độ chi tiết từng chương (7 Chương) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
          Tiến độ ôn tập theo từng chương (7 Chương):
        </h3>
        <div className="space-y-4">
          {allChapters.map((ch) => {
            const chQuestions = getQuestionsByChapter(ch.id);
            const doneInCh = chQuestions.filter((q) =>
              userProgress.completedQuestionIds.includes(q.id)
            ).length;
            const correctInCh = chQuestions.filter((q) =>
              userProgress.correctQuestionIds.includes(q.id)
            ).length;

            const chAccuracy = doneInCh > 0 ? Math.round((correctInCh / doneInCh) * 100) : 0;
            const chCompletion = Math.round((doneInCh / chQuestions.length) * 100);

            return (
              <div
                key={ch.id}
                className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.2 rounded border border-blue-200 dark:border-blue-800">
                      Chương {ch.id}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                      {ch.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span>
                      Tiến độ: <strong className="text-slate-700 dark:text-slate-300">{doneInCh}/{chQuestions.length} câu</strong> ({chCompletion}%)
                    </span>
                    {doneInCh > 0 && (
                      <span>
                        Độ chính xác: <strong className="text-emerald-600 dark:text-emerald-400">{chAccuracy}%</strong>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-24 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${chCompletion}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setChapter(ch.id);
                      setMode('practice');
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-colors cursor-pointer"
                  >
                    <span>Luyện tập</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Lịch sử thi thử gần nhất */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
          Lịch sử các lần thi thử gần nhất:
        </h3>
        {userProgress.examHistory.length === 0 ? (
          <div className="py-8 text-center text-slate-400 dark:text-slate-500">
            <Clock className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600 mb-2 stroke-1" />
            <p className="text-xs font-medium">Bạn chưa thực hiện lần thi thử nào.</p>
            <button
              type="button"
              onClick={() => setMode('exam')}
              className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Thi thử ngay
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-3">Thời gian</th>
                  <th className="p-3">Số câu</th>
                  <th className="p-3">Thời lượng</th>
                  <th className="p-3">Điểm số / 10</th>
                  <th className="p-3">Kết quả</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-300">
                {userProgress.examHistory.slice(-5).reverse().map((hist) => {
                  const dateStr = new Date(hist.date).toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  });
                  const mins = Math.floor(hist.durationSeconds / 60);
                  const isPass = hist.score >= 5.0;

                  return (
                    <tr key={hist.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-mono">{dateStr}</td>
                      <td className="p-3">{hist.total} câu</td>
                      <td className="p-3">{mins} phút</td>
                      <td className="p-3 font-bold text-blue-600 dark:text-blue-400 text-sm">
                        {hist.score.toFixed(1)}
                      </td>
                      <td className="p-3">
                        <span
                          className={cn(
                            'px-2 py-0.5 rounded-full font-bold text-[11px]',
                            isPass ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'
                          )}
                        >
                          {isPass ? 'Đạt' : 'Chưa đạt'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 5. Cài đặt & Đặt lại dữ liệu học tập */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
            Quản lý dữ liệu lưu trữ:
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Toàn bộ tiến độ được lưu an toàn trong trình duyệt (LocalStorage).
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="flex items-center gap-1.5 px-4 py-2 border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Xóa và đặt lại tiến độ</span>
        </button>
      </div>

      {/* Modal xác nhận đặt lại */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Xác nhận xóa toàn bộ tiến độ?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Toàn bộ lịch sử làm câu hỏi, sổ tay câu sai, thẻ nhớ và lịch sử thi thử sẽ bị xóa về mặc
              định ban đầu.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleResetData}
                className="px-4 py-2 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-xs cursor-pointer"
              >
                Xóa tất cả
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
