/**
 * scripts/test-storage.ts
 * Automated verification of Safe Storage Engine (src/utils/storage.ts)
 */
import assert from 'node:assert';
import {
  loadUserProgress,
  saveUserProgress,
  recordQuestionAnswer,
  toggleBookmark,
  removeMistake,
  clearAllMistakes,
  saveActiveExamSession,
  loadActiveExamSession,
  clearActiveExamSession,
  resetAllProgress,
  DEFAULT_USER_PROGRESS,
  STORAGE_KEY_PROGRESS,
  STORAGE_KEY_EXAM_SESSION,
  getSafeStorage,
} from '../src/utils/storage.ts';
import type { ExamSession, ExamConfig } from '../src/types/exam.ts';

console.log('🧪 Starting Storage Engine Automated Tests...');

// Test 1: Load default progress when empty
resetAllProgress();
const p1 = loadUserProgress();
assert.strictEqual(p1.completedQuestionIds.length, 0, 'completedQuestionIds should be empty initially');
assert.strictEqual(p1.correctQuestionIds.length, 0, 'correctQuestionIds should be empty initially');
assert.strictEqual(p1.bookmarkedQuestionIds.length, 0, 'bookmarkedQuestionIds should be empty initially');
assert.strictEqual(p1.version, 1, 'version should be 1');
console.log('  ✓ Test 1 Passed: Default progress initialization');

// Test 2: Record incorrect answer
const qId = 'test-q-101';
const p2 = recordQuestionAnswer(qId, 1, 'C', false);
assert(p2.completedQuestionIds.includes(qId), 'qId should be in completedQuestionIds');
assert(!p2.correctQuestionIds.includes(qId), 'qId should not be in correctQuestionIds');
assert(p2.mistakes[qId], 'Mistake record should be created');
assert.strictEqual(p2.mistakes[qId].wrongCount, 1, 'wrongCount should be 1');
assert.strictEqual(p2.mistakes[qId].chosenOptionIndex, 2, 'chosenOptionIndex should be 2 for C');
assert.strictEqual(p2.mistakes[qId].resolved, false, 'resolved should be false');
console.log('  ✓ Test 2 Passed: Record incorrect answer');

// Test 3: Record second incorrect answer
const p3 = recordQuestionAnswer(qId, 1, 'A', false);
assert.strictEqual(p3.mistakes[qId].wrongCount, 2, 'wrongCount should increment to 2');
assert.strictEqual(p3.mistakes[qId].chosenOptionIndex, 0, 'chosenOptionIndex should be 0 for A');
console.log('  ✓ Test 3 Passed: Incremental wrongCount');

// Test 4: Correct answer after mistake
const p4 = recordQuestionAnswer(qId, 1, 'B', true);
assert(p4.correctQuestionIds.includes(qId), 'qId should be in correctQuestionIds');
assert.strictEqual(p4.mistakes[qId].resolved, true, 'resolved should become true');
console.log('  ✓ Test 4 Passed: Resolution of mistake');

// Test 5: Toggle bookmark
const { state: b1, isBookmarked: b1Status } = toggleBookmark(qId, 1);
assert.strictEqual(b1Status, true, 'Should be bookmarked');
assert(b1.bookmarkedQuestionIds.includes(qId), 'qId in bookmarkedQuestionIds');

const { state: b2, isBookmarked: b2Status } = toggleBookmark(qId, 1);
assert.strictEqual(b2Status, false, 'Should be unbookmarked');
assert(!b2.bookmarkedQuestionIds.includes(qId), 'qId not in bookmarkedQuestionIds');
console.log('  ✓ Test 5 Passed: Toggle bookmark (add & remove)');

// Test 6: Remove mistake & Clear all mistakes
removeMistake(qId);
const p5 = loadUserProgress();
assert.strictEqual(p5.mistakes[qId], undefined, 'Mistake should be removed');

recordQuestionAnswer('q-err-1', 1, 'A', false);
recordQuestionAnswer('q-err-2', 2, 'B', false);
assert.strictEqual(Object.keys(loadUserProgress().mistakes).length, 2, 'Should have 2 mistakes');
clearAllMistakes();
assert.strictEqual(Object.keys(loadUserProgress().mistakes).length, 0, 'Should have 0 mistakes after clearAllMistakes');
console.log('  ✓ Test 6 Passed: Remove & clear mistakes');

// Test 7: Active Exam Session in SessionStorage
const mockConfig: ExamConfig = {
  questionCount: 40,
  durationMinutes: 50,
  chapterIds: [1, 2, 3, 4, 5, 6, 7],
  shuffleQuestions: true,
  shuffleOptions: false,
};
const mockSession: ExamSession = {
  id: 'test-session-123',
  config: mockConfig,
  questions: [],
  userAnswers: { 'q-1': 'B' },
  flaggedQuestionIds: ['q-1'],
  startedAt: Date.now(),
  totalSeconds: 3000,
  remainingSeconds: 2950,
  status: 'in_progress',
  currentQuestionIndex: 0,
};

saveActiveExamSession(mockSession);
const loadedSession = loadActiveExamSession();
assert(loadedSession !== null, 'Loaded session should not be null');
assert.strictEqual(loadedSession?.id, 'test-session-123', 'Session ID should match');
assert.strictEqual(loadedSession?.userAnswers['q-1'], 'B', 'Answers should match');

clearActiveExamSession();
assert.strictEqual(loadActiveExamSession(), null, 'Session should be cleared');
console.log('  ✓ Test 7 Passed: Active exam session save, load, and clear');

// Test 8: Self-recovery on corrupted data
const storage = getSafeStorage('localStorage');
storage.setItem(STORAGE_KEY_PROGRESS, '{"corrupted_json_syntax_error: true');
const recoveredProgress = loadUserProgress();
assert.strictEqual(recoveredProgress.version, 1, 'Should safely recover default state');
assert(Array.isArray(recoveredProgress.completedQuestionIds), 'Should recover valid arrays');
console.log('  ✓ Test 8 Passed: Corrupted JSON self-recovery without crashing');

console.log('🎉 ALL 8 STORAGE ENGINE TESTS PASSED PERFECTLY!\n');
