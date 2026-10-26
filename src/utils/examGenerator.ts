/**
 * src/utils/examGenerator.ts
 * Thuật toán sinh đề thi thử cân đối tỷ trọng 7 chương & máy chấm điểm
 */

import { Question, OptionId } from '../types/question';
import {
  ExamConfig,
  ExamSession,
  ExamResult,
  ExamQuestionResult,
  ChapterScoreBreakdown,
  ExamGrade,
} from '../types/exam';
import { allQuestions, getQuestionsByChapter } from '../data/questions';
import { chaptersMap } from '../data/chapters';

export const EXAM_PRESETS = {
  short: {
    questionCount: 30,
    durationMinutes: 45,
    label: 'Đề nhanh (30 câu / 45 phút)',
  },
  standard: {
    questionCount: 40,
    durationMinutes: 60,
    label: 'Chuẩn kỳ thi (40 câu / 60 phút)',
  },
  long: {
    questionCount: 50,
    durationMinutes: 75,
    label: 'Đề chuyên sâu (50 câu / 75 phút)',
  },
} as const;

export type ExamPresetKey = keyof typeof EXAM_PRESETS;

/**
 * Xáo trộn ngẫu nhiên mảng theo thuật toán Fisher-Yates
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Sinh đề thi thử cân đối theo khối lượng 7 chương
 */
export function generateMockExamSession(
  config: Partial<ExamConfig> = {},
  mistakeQuestionIds: string[] = []
): ExamSession {
  const fullConfig: ExamConfig = {
    questionCount: config.questionCount || 40,
    durationMinutes: config.durationMinutes || 60,
    chapterIds: config.chapterIds && config.chapterIds.length > 0 ? config.chapterIds : [1, 2, 3, 4, 5, 6, 7],
    shuffleQuestions: config.shuffleQuestions !== false,
    shuffleOptions: config.shuffleOptions === true,
  };

  const mistakeSet = new Set(mistakeQuestionIds);
  const totalCount = fullConfig.questionCount;
  const activeChapters = fullConfig.chapterIds;

  // Tỷ trọng từng chương dựa trên tổng số câu trong ngân hàng
  // Ch1: 25, Ch2: 30, Ch3: 35, Ch4: 30, Ch5: 28, Ch6: 22, Ch7: 25
  const totalPoolInActive = activeChapters.reduce(
    (acc, ch) => acc + (getQuestionsByChapter(ch)?.length || 0),
    0
  );

  const selectedQuestions: Question[] = [];
  const selectedIds = new Set<string>();

  // Bốc câu hỏi theo tỷ lệ của từng chương đang được chọn
  let remainingCount = totalCount;
  for (let i = 0; i < activeChapters.length; i++) {
    const chId = activeChapters[i];
    const chQuestions = getQuestionsByChapter(chId) || [];
    if (chQuestions.length === 0) continue;

    // Tính quota của chương này
    let quota: number;
    if (i === activeChapters.length - 1) {
      quota = remainingCount;
    } else {
      const ratio = chQuestions.length / (totalPoolInActive || 1);
      quota = Math.min(Math.round(totalCount * ratio), remainingCount);
    }
    quota = Math.min(quota, chQuestions.length);

    // Ưu tiên các câu nằm trong danh sách câu từng sai
    const chMistakes = chQuestions.filter(q => mistakeSet.has(q.id));
    const chOthers = chQuestions.filter(q => !mistakeSet.has(q.id));

    const shuffledMistakes = shuffleArray(chMistakes);
    const shuffledOthers = shuffleArray(chOthers);

    const pool = [...shuffledMistakes, ...shuffledOthers];
    const picked = pool.slice(0, quota);

    picked.forEach(q => {
      selectedQuestions.push(q);
      selectedIds.add(q.id);
    });

    remainingCount -= picked.length;
    if (remainingCount <= 0) break;
  }

  // Nếu vẫn chưa đủ số lượng, bốc ngẫu nhiên từ phần còn lại
  if (selectedQuestions.length < totalCount) {
    const remainingPool = allQuestions.filter(q => !selectedIds.has(q.id) && activeChapters.includes(q.chapterId));
    const extra = shuffleArray(remainingPool).slice(0, totalCount - selectedQuestions.length);
    extra.forEach(q => selectedQuestions.push(q));
  }

  // Xáo trộn thứ tự câu hỏi nếu config yêu cầu
  const finalQuestions = fullConfig.shuffleQuestions
    ? shuffleArray(selectedQuestions)
    : selectedQuestions;

  const totalSeconds = fullConfig.durationMinutes * 60;
  const now = Date.now();

  return {
    id: `exam_${now}_${Math.random().toString(36).substring(2, 8)}`,
    config: fullConfig,
    questions: finalQuestions,
    userAnswers: {},
    flaggedQuestionIds: [],
    startedAt: now,
    totalSeconds,
    remainingSeconds: totalSeconds,
    status: 'in_progress',
    currentQuestionIndex: 0,
  };
}

/**
 * Kiểm tra câu trả lời có chính xác hay không theo quy tắc All-or-Nothing
 */
export function isQuestionAnswerCorrect(
  question: Question,
  userAnswer?: OptionId | OptionId[]
): boolean {
  if (!userAnswer) return false;

  const correctAnswers = question.correctAnswers || [];

  if (question.questionType === 'multiple') {
    const userSelected = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    if (userSelected.length !== correctAnswers.length) return false;
    const sortedUser = [...userSelected].sort();
    const sortedCorrect = [...correctAnswers].sort();
    return sortedUser.every((ans, idx) => ans === sortedCorrect[idx]);
  } else {
    // Single-choice
    const chosen = Array.isArray(userAnswer) ? userAnswer[0] : userAnswer;
    return correctAnswers.includes(chosen);
  }
}

/**
 * Chấm điểm bài thi và tổng hợp kết quả chi tiết
 */
export function evaluateExamSession(session: ExamSession): ExamResult {
  const { questions, userAnswers, config, startedAt, totalSeconds, remainingSeconds } = session;

  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  const questionResults: ExamQuestionResult[] = [];
  const chapterBreakdown: Record<number, ChapterScoreBreakdown> = {};

  // Khởi tạo breakdown cho các chương tham gia
  config.chapterIds.forEach(chId => {
    const ch = chaptersMap[chId];
    chapterBreakdown[chId] = {
      chapterId: chId,
      chapterTitle: ch ? ch.title : `Chương ${chId}`,
      totalQuestions: 0,
      correctCount: 0,
      wrongCount: 0,
      unansweredCount: 0,
      scoreRatio: 0,
    };
  });

  questions.forEach(q => {
    const uAns = userAnswers[q.id];
    const isAnswered = uAns !== undefined && (Array.isArray(uAns) ? uAns.length > 0 : true);
    const isCorrect = isAnswered && isQuestionAnswerCorrect(q, uAns);

    if (!isAnswered) {
      unansweredCount++;
    } else if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }

    // Cập nhật breakdown
    if (chapterBreakdown[q.chapterId]) {
      chapterBreakdown[q.chapterId].totalQuestions++;
      if (!isAnswered) {
        chapterBreakdown[q.chapterId].unansweredCount++;
      } else if (isCorrect) {
        chapterBreakdown[q.chapterId].correctCount++;
      } else {
        chapterBreakdown[q.chapterId].wrongCount++;
      }
    }

    questionResults.push({
      questionId: q.id,
      chapterId: q.chapterId,
      articleId: q.articleId,
      questionContent: q.content,
      options: q.options,
      userAnswer: uAns,
      correctAnswer: q.correctAnswers[0],
      correctAnswers: q.correctAnswers,
      isCorrect,
      explanation: q.explanation,
      tags: q.tags,
    });
  });

  // Tính tỷ lệ đúng theo từng chương
  Object.values(chapterBreakdown).forEach(bd => {
    bd.scoreRatio = bd.totalQuestions > 0 ? bd.correctCount / bd.totalQuestions : 0;
  });

  const totalQuestions = questions.length;
  const rawScore = totalQuestions > 0 ? (correctCount / totalQuestions) * 10 : 0;
  const score10 = Math.round(rawScore * 100) / 100;

  let grade: ExamGrade;
  if (score10 >= 9.0) grade = 'Xuất sắc';
  else if (score10 >= 8.0) grade = 'Giỏi';
  else if (score10 >= 6.5) grade = 'Khá';
  else if (score10 >= 5.0) grade = 'Trung bình';
  else grade = 'Cần ôn luyện';

  const passed = score10 >= 5.0;
  const timeSpentSeconds = Math.max(0, totalSeconds - remainingSeconds);

  return {
    id: session.id,
    examDate: Date.now(),
    config,
    totalQuestions,
    correctCount,
    wrongCount,
    unansweredCount,
    score10,
    grade,
    passed,
    timeSpentSeconds,
    chapterBreakdown,
    questionResults,
  };
}
