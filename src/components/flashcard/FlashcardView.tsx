import React, { useState, useMemo } from 'react';
import {
  RotateCcw,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  XCircle,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { allFlashcards, getFlashcardsByChapter, chaptersMap, allChapters } from '@/data';
import { Flashcard, MasteryLevel } from '@/types';
import { useDrawer } from '@/context/DrawerContext';
import {
  loadUserProgress,
  updateFlashcardMastery,
  UserProgressState,
} from '@/utils/storage';
import { shuffleArray } from '@/utils/examGenerator';
import { cn } from '@/utils/cn';

export const FlashcardView: React.FC = () => {
  const { openDrawer } = useDrawer();

  const [userProgress, setUserProgress] = useState<UserProgressState>(loadUserProgress());
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [deck, setDeck] = useState<Flashcard[]>(() => allFlashcards);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Cập nhật deck khi đổi chương
  const baseCards = useMemo(() => {
    return selectedChapter === 'all'
      ? allFlashcards
      : getFlashcardsByChapter(selectedChapter);
  }, [selectedChapter]);

  // Reset deck khi đổi chương
  const handleChapterChange = (ch: number | 'all') => {
    setSelectedChapter(ch);
    const newCards = ch === 'all' ? allFlashcards : getFlashcardsByChapter(ch);
    setDeck(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Xáo trộn thẻ
  const handleShuffle = () => {
    setDeck(shuffleArray([...deck]));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Khởi động lại deck từ đầu
  const handleResetDeck = () => {
    setDeck([...baseCards]);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, deck.length - 1));
  const currentCard: Flashcard | undefined = deck[safeIndex];

  // Tính số lượng đã thuộc trong deck hiện tại
  const masteredCount = useMemo(() => {
    return baseCards.filter((c) => userProgress.flashcardMastery[c.id] === 'mastered').length;
  }, [baseCards, userProgress.flashcardMastery]);

  const masteryPercent = baseCards.length > 0 ? Math.round((masteredCount / baseCards.length) * 100) : 0;

  // Quyết định 14: Đánh dấu "Đã thuộc" (Mastered)
  const handleMarkMastered = () => {
    if (!currentCard) return;
    const nextProgress = updateFlashcardMastery(currentCard.id, 'mastered');
    setUserProgress({ ...nextProgress });

    setIsFlipped(false);
    if (safeIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Quyết định 14: Đánh dấu "Cần ôn lại" (Review) -> Đẩy thẻ về cuối deck để lặp lại
  const handleMarkReview = () => {
    if (!currentCard) return;
    const nextProgress = updateFlashcardMastery(currentCard.id, 'review');
    setUserProgress({ ...nextProgress });

    setIsFlipped(false);
    // Đẩy thẻ hiện tại xuống cuối deck
    setDeck((prev) => {
      const remaining = prev.filter((_, idx) => idx !== safeIndex);
      return [...remaining, currentCard];
    });
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* 1. Header Chọn Chương & Thanh Tiến Độ Làm Chủ Thẻ */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                Thẻ Ghi Nhớ Thuật Ngữ (Flashcards)
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                98 thẻ 2 mặt trích xuất từ Giáo trình HCMUTE
              </span>
            </div>
          </div>

          {/* Chọn Chương */}
          <select
            value={selectedChapter}
            onChange={(e) =>
              handleChapterChange(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Toàn bộ 7 Chương (98 thẻ)</option>
            {allChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                Chương {ch.id} ({getFlashcardsByChapter(ch.id).length} thẻ)
              </option>
            ))}
          </select>
        </div>

        {/* Thanh Tiến Độ Thuộc Thẻ */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Tiến độ đã thuộc:</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {masteredCount} / {baseCards.length} thẻ ({masteryPercent}%)
            </span>
          </div>
          <div className="flex-1 max-w-xs bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${masteryPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. Thẻ 3D Flip Card Tương Tác */}
      {currentCard ? (
        <div className="perspective-1000 min-h-[360px] sm:min-h-[400px]">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={cn(
              'w-full min-h-[360px] sm:min-h-[400px] rounded-3xl p-6 sm:p-8 border cursor-pointer transition-all duration-500 shadow-md flex flex-col justify-between relative select-none',
              isFlipped
                ? 'bg-slate-900 dark:bg-slate-950 text-white border-slate-800 dark:border-slate-800'
                : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg'
            )}
          >
            {/* Header Thẻ */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-inherit/20">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'font-mono font-bold px-2.5 py-0.5 rounded-md border text-[11px]',
                    isFlipped
                      ? 'bg-slate-800 text-blue-300 border-slate-700'
                      : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                  )}
                >
                  Chương {currentCard.chapterId}
                </span>
                {currentCard.bookPage && (
                  <span className={cn('text-[11px] font-medium', isFlipped ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400')}>
                    Trang {currentCard.bookPage}
                  </span>
                )}
              </div>

              <span className={cn('text-[11px] font-semibold', isFlipped ? 'text-amber-300' : 'text-slate-400 dark:text-slate-500')}>
                {isFlipped ? 'Mặt sau (Định nghĩa chuẩn)' : 'Mặt trước (Khái niệm)'}
              </span>
            </div>

            {/* Thân Thẻ */}
            <div className="py-6 flex-1 flex flex-col justify-center">
              {!isFlipped ? (
                // MẶT TRƯỚC: Thuật ngữ / Khái niệm
                <div className="text-center space-y-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 block">
                    Khái niệm cốt lõi:
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                    {currentCard.term}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    (Chạm vào thẻ để lật xem định nghĩa chuẩn giáo trình)
                  </p>
                </div>
              ) : (
                // MẶT SAU: Định nghĩa chuẩn & Ý chính & Mẹo thi
                <div className="space-y-4 text-left">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block mb-1">
                      Định nghĩa chuẩn (Giáo trình HCMUTE):
                    </span>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                      {currentCard.definition}
                    </p>
                  </div>

                  {/* Key points */}
                  {currentCard.keyPoints && currentCard.keyPoints.length > 0 && (
                    <div className="bg-slate-800/80 dark:bg-slate-900/90 p-3.5 rounded-xl border border-slate-700/80 dark:border-slate-800 space-y-1.5">
                      <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider block">
                        Các ý then chốt cần nhớ:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {currentCard.keyPoints.map((pt, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-400 mr-2 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mẹo tránh bẫy đề thi */}
                  {currentCard.examTip && (
                    <div className="bg-amber-950/40 p-3 rounded-xl border border-amber-800/50 text-xs text-amber-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{currentCard.examTip}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Chân Thẻ */}
            <div className="flex items-center justify-between text-xs pt-3 border-t border-inherit/20">
              <span className={cn('font-semibold', isFlipped ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400')}>
                Thẻ {safeIndex + 1} / {deck.length}
              </span>

              {isFlipped && currentCard.articleId && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDrawer(currentCard.articleId, currentCard.chapterId);
                  }}
                  className="flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-amber-200 underline underline-offset-2"
                >
                  <BookOpen className="w-3.5 h-3.5 mr-0.5" />
                  Tra cứu trong Drawer
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center shadow-xs">
          <Award className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
            Tuyệt vời! Bạn đã hoàn thành toàn bộ thẻ trong deck!
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Bạn đã ôn tập xong tất cả các khái niệm của phần này.
          </p>
          <button
            type="button"
            onClick={handleResetDeck}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
          >
            Ôn lại từ đầu
          </button>
        </div>
      )}

      {/* 3. Nút Đánh Giá Mức Độ Ghi Nhớ (Mastery Buttons - Quyết định 14) */}
      {currentCard && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleMarkReview}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/80 text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
          >
            <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <span>Cần ôn lại (Lặp lại cuối vòng)</span>
          </button>

          <button
            type="button"
            onClick={handleMarkMastered}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Đã thuộc (Ghi nhận tiến độ)</span>
          </button>
        </div>
      )}

      {/* 4. Thanh Điều Khiển Deck (Trước, Sau, Xáo trộn, Khởi động lại) */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            title="Xáo trộn thứ tự thẻ"
          >
            <Shuffle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Xáo trộn</span>
          </button>
          <button
            type="button"
            onClick={handleResetDeck}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            title="Làm mới lại bộ thẻ"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>Khởi động lại</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={safeIndex <= 0}
            onClick={() => {
              setCurrentIndex((prev) => Math.max(0, prev - 1));
              setIsFlipped(false);
            }}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Thẻ trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={safeIndex >= deck.length - 1}
            onClick={() => {
              setCurrentIndex((prev) => Math.min(deck.length - 1, prev + 1));
              setIsFlipped(false);
            }}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Thẻ tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
