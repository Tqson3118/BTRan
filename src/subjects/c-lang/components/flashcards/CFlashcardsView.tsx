/**
 * src/subjects/c-lang/components/flashcards/CFlashcardsView.tsx
 * Bộ thẻ ghi nhớ Flashcards 125 thẻ khái niệm & cú pháp Lập trình C/C++
 * Tích hợp lật thẻ 3D, code highlight và đánh giá mức độ thuần thục
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  Layers,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  CheckCircle2,
  BookmarkCheck,
  AlertCircle,
  Code2,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCStudy } from '../../context/CStudyContext';
import { allCFlashcards } from '../../data/flashcards';
import { allCChapters } from '../../data/chapters';
import { CFlashcard } from '../../types';

export const CFlashcardsView: React.FC = () => {
  const { progress, updateFlashcardMastery, activeChapterId, setActiveChapterId } = useCStudy();

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);

  // Lọc flashcards theo chương
  const cards = useMemo(() => {
    let list = allCFlashcards;
    if (activeChapterId !== null) {
      list = list.filter((c) => c.chapterId === activeChapterId);
    }
    if (isShuffled) {
      const copy = [...list];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }
    return list;
  }, [activeChapterId, isShuffled]);

  // Reset index khi cards thay đổi
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [activeChapterId, isShuffled]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cards.length, currentIndex]);

  const handleNext = () => {
    if (cards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((i) => (i + 1) % cards.length);
  };

  const handlePrev = () => {
    if (cards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  const currentCard: CFlashcard | undefined = cards[currentIndex];
  const currentMastery = currentCard ? progress.flashcardMastery[currentCard.id] || 'learning' : 'learning';

  const setMastery = (level: 'learning' | 'reviewing' | 'mastered') => {
    if (!currentCard) return;
    updateFlashcardMastery(currentCard.id, level);
    if (level === 'mastered') {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    }
    handleNext();
  };

  // Thống kê ghi nhớ
  const masteredCount = Object.values(progress.flashcardMastery).filter((l) => l === 'mastered').length;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header Toolbar */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-xs">
        <div className="flex items-center gap-2">
          <select
            value={activeChapterId === null ? '' : activeChapterId}
            onChange={(e) => {
              const val = e.target.value;
              setActiveChapterId(val === '' ? null : Number(val));
            }}
            className="text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tất cả 125 thẻ (9 chương)</option>
            {allCChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                Chương {ch.id}: {ch.title}
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsShuffled((s) => !s)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isShuffled
                ? 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Xáo trộn</span>
          </button>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Đã thuộc: <span className="font-bold text-emerald-600">{masteredCount}</span> / 125 thẻ
          </span>
          <span className="font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {cards.length > 0 ? currentIndex + 1 : 0} / {cards.length}
          </span>
        </div>
      </div>

      {/* Main Flashcard Stage */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-center">
        {cards.length === 0 ? (
          <div className="text-center py-16">
            <Layers className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="font-bold text-slate-700 dark:text-slate-300">Không có thẻ nào</h3>
          </div>
        ) : (
          <div className="max-w-xl w-full flex flex-col items-center space-y-6">
            {/* The 3D Card */}
            <div
              onClick={() => setIsFlipped((f) => !f)}
              className="w-full min-h-[320px] md:min-h-[360px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 shadow-md hover:shadow-xl transition-all cursor-pointer select-none flex flex-col justify-between relative group"
            >
              {/* Card Top Meta */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    Chương {currentCard.chapterId}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {currentCard.referencePage}
                  </span>
                </div>

                <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Bấm để lật</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="my-auto py-4 text-center">
                {!isFlipped ? (
                  /* FRONT: Concept */
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                      Khái niệm / Cú pháp
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                      {currentCard.frontConcept}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {currentCard.question}
                    </p>
                  </div>
                ) : (
                  /* BACK: Definition & Code */
                  <div className="space-y-3 text-left">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Giải thích & Minh họa
                    </span>
                    <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                      {currentCard.backDefinition}
                    </p>

                    {currentCard.codeHighlight && (
                      <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-blue-300 text-xs font-mono p-3">
                        <pre>
                          <code>{currentCard.codeHighlight}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Bottom Meta */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span>Phím tắt: Space để lật · Mũi tên Trái/Phải</span>
                <span className="font-mono">{currentCard.id}</span>
              </div>
            </div>

            {/* Mastery Action Buttons */}
            <div className="flex items-center gap-3 w-full justify-center">
              <button
                onClick={() => setMastery('reviewing')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-semibold transition-colors"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Cần ôn lại</span>
              </button>

              <button
                onClick={() => setMastery('learning')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                <BookmarkCheck className="w-4 h-4" />
                <span>Đang học</span>
              </button>

              <button
                onClick={() => setMastery('mastered')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã thuộc</span>
              </button>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                title="Thẻ trước (Mũi tên trái)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsFlipped((f) => !f)}
                className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100"
              >
                Lật thẻ
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                title="Thẻ kế tiếp (Mũi tên phải)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
