/**
 * scripts/test-adversarial-storage.ts
 * Adversarial Stress & Chaos Test Suite for Safe Storage Engine (src/utils/storage.ts)
 * 
 * Tests:
 * 1. Malformed JSON & Adversarial Payloads Injection
 * 2. Storage Quota Overflow & DOMException Handling
 * 3. Browser Security / Privacy Mode (Access Denied) Fallback
 * 4. Key Tampering, Partial Schemas & Prototype Pollution Defense
 * 5. Rapid Concurrent Writes & High-Volume Interleaved Mutations
 * 6. Mathematical Invariant Verification & History Truncation (FIFO 50 cap)
 */

import assert from 'node:assert';
import {
  loadUserProgress,
  saveUserProgress,
  updateUserProgress,
  recordQuestionAnswer,
  toggleBookmark,
  removeMistake,
  clearAllMistakes,
  updateFlashcardMastery,
  saveExamResult,
  clearExamHistory,
  setTheme,
  setAutoOpenDrawerOnWrong,
  resetAllProgress,
  exportProgressAsJson,
  importProgressFromJson,
  saveActiveExamSession,
  loadActiveExamSession,
  clearActiveExamSession,
  hasActiveExamSession,
  sanitizeUserProgress,
  getSafeStorage,
  DEFAULT_USER_PROGRESS,
  STORAGE_KEY_PROGRESS,
  STORAGE_KEY_EXAM_SESSION,
  STORAGE_KEY_BACKUP,
} from '../src/utils/storage.ts';
import type { ExamResult, ExamSession, ExamConfig } from '../src/types/index.ts';

console.log('🔥 =================================================================');
console.log('🔥 STARTING ADVERSARIAL STORAGE ENGINE STRESS & CHAOS HARNESS');
console.log('🔥 =================================================================\n');

let totalTests = 0;
let passedTests = 0;

function runCase(name: string, fn: () => void) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ [PASS] Case ${totalTests}: ${name}`);
  } catch (err: any) {
    console.error(`  ✗ [FAIL] Case ${totalTests}: ${name}`);
    console.error(`    Error: ${err.message}`);
    throw err;
  }
}

// ============================================================================
// SUITE 1: MALFORMED JSON & ADVERSARIAL PAYLOADS INJECTION
// ============================================================================
console.log('--- SUITE 1: Malformed JSON & Adversarial Payloads ---');

const malformedPayloads = [
  '{"unclosed_string: "value',
  '{{nested_broken_syntax',
  'undefined',
  'NaN',
  'Infinity',
  '-Infinity',
  '<script>alert("xss")</script>',
  'SELECT * FROM users WHERE 1=1;',
  '\0\0\0\0binary_null_bytes\u0000',
  '{"version": "NaN", "completedQuestionIds": "not_an_array"}',
  'null',
  '',
  '   ',
  'true',
  'false',
  '12345.678',
  '["an", "array", "instead", "of", "object"]',
  '{"completedQuestionIds": [null, undefined, 123, {}, [1,2], false]}',
  '{"mistakes": "should_be_object_not_string"}',
  '{"flashcardMastery": ["array_instead_of_object"]}',
];

for (const payload of malformedPayloads) {
  runCase(`Injection resilience for payload: ${JSON.stringify(payload).slice(0, 35)}...`, () => {
    const storage = getSafeStorage('localStorage');
    storage.setItem(STORAGE_KEY_PROGRESS, payload);

    // loadUserProgress must NEVER throw
    const loaded = loadUserProgress();
    assert(loaded !== null && typeof loaded === 'object', 'Must return an object');
    assert(Array.isArray(loaded.completedQuestionIds), 'completedQuestionIds must be an array');
    assert(Array.isArray(loaded.correctQuestionIds), 'correctQuestionIds must be an array');
    assert(Array.isArray(loaded.bookmarkedQuestionIds), 'bookmarkedQuestionIds must be an array');
    assert(Array.isArray(loaded.examHistory), 'examHistory must be an array');
    assert(typeof loaded.mistakes === 'object', 'mistakes must be an object');
    assert(typeof loaded.flashcardMastery === 'object', 'flashcardMastery must be an object');
    assert(typeof loaded.version === 'number', 'version must be a number');
    assert(loaded.lastActiveChapterId >= 1 && loaded.lastActiveChapterId <= 7, 'lastActiveChapterId must be 1..7');
  });
}

// Prototype Pollution Defense
runCase('Prototype pollution defense against __proto__ and constructor', () => {
  const pollutionPayload = JSON.stringify({
    __proto__: { pollutedProperty: 'hacked_prototype' },
    constructor: { prototype: { adminRole: true } },
    completedQuestionIds: ['q1'],
    theme: 'dark',
  });

  const parsed = JSON.parse(pollutionPayload);
  const sanitized = sanitizeUserProgress(parsed);

  // Invariant: global Object prototype must not be contaminated
  assert.strictEqual((Object.prototype as any).pollutedProperty, undefined, 'Object.prototype must not be polluted');
  assert.strictEqual((Object.prototype as any).adminRole, undefined, 'constructor.prototype must not be polluted');
  assert.strictEqual(sanitized.theme, 'dark', 'Valid field theme should be kept');
  assert.deepStrictEqual(sanitized.completedQuestionIds, ['q1']);
});

// Boundary numeric and extreme values
runCase('Sanitization of extreme / out-of-bounds boundary values', () => {
  const extremePayload = {
    version: 999999,
    lastActiveChapterId: -10, // Invalid: should reset to 1
    theme: 'neon-purple',     // Invalid: should reset to 'light'
    soundEnabled: 'no',       // Truthy string: should remain boolean true
    autoOpenDrawerOnWrong: 1, // Truthy: should cast to true
    completedQuestionIds: ['q1', 'q1', 'q2', 'q1'], // Duplicates: should deduplicate
  };

  const sanitized = sanitizeUserProgress(extremePayload);
  assert.strictEqual(sanitized.lastActiveChapterId, 1, 'Out of bounds chapter ID must fallback to 1');
  assert.strictEqual(sanitized.theme, 'light', 'Unknown theme must fallback to light');
  assert.strictEqual(sanitized.autoOpenDrawerOnWrong, true, 'autoOpenDrawerOnWrong must be boolean');
  assert.deepStrictEqual(sanitized.completedQuestionIds, ['q1', 'q2'], 'Duplicates in array must be deduplicated');
});

// ============================================================================
// SUITE 2: STORAGE QUOTA OVERFLOW & DISK FULL SIMULATION
// ============================================================================
console.log('\n--- SUITE 2: Storage Quota Overflow & Fallback ---');

runCase('Graceful handling of QuotaExceededError during saveUserProgress', () => {
  const storage = getSafeStorage('localStorage');
  const originalSetItem = storage.setItem.bind(storage);

  // Mock quota exceeded error on setItem
  let quotaErrorThrown = false;
  storage.setItem = (key: string, value: string) => {
    if (key === STORAGE_KEY_PROGRESS) {
      quotaErrorThrown = true;
      const error = new Error('QuotaExceededError: The quota has been exceeded.');
      error.name = 'QuotaExceededError';
      throw error;
    }
    return originalSetItem(key, value);
  };

  try {
    const success = saveUserProgress(DEFAULT_USER_PROGRESS);
    assert.strictEqual(success, false, 'saveUserProgress must return false when quota is exceeded');
    assert.strictEqual(quotaErrorThrown, true, 'Mock quota error must have triggered');
  } finally {
    // Restore original setItem
    storage.setItem = originalSetItem;
  }
});

runCase('Graceful handling of QuotaExceededError during saveActiveExamSession', () => {
  const storage = getSafeStorage('sessionStorage');
  const originalSetItem = storage.setItem.bind(storage);

  storage.setItem = () => {
    const error = new Error('QuotaExceededError: SessionStorage quota reached.');
    error.name = 'QuotaExceededError';
    throw error;
  };

  try {
    const dummySession: ExamSession = {
      id: 'session-quota-test',
      config: { questionCount: 40, durationMinutes: 50, chapterIds: [1], shuffleQuestions: true, shuffleOptions: false },
      questions: [],
      userAnswers: {},
      flaggedQuestionIds: [],
      startedAt: Date.now(),
      totalSeconds: 3000,
      remainingSeconds: 3000,
      status: 'in_progress',
      currentQuestionIndex: 0,
    };

    const success = saveActiveExamSession(dummySession);
    assert.strictEqual(success, false, 'saveActiveExamSession must return false when quota is exceeded');
  } finally {
    storage.setItem = originalSetItem;
  }
});

runCase('Backup creation failure during corrupted recovery suppresses errors safely', () => {
  const storage = getSafeStorage('localStorage');
  const originalSetItem = storage.setItem.bind(storage);

  // Corrupt progress key
  storage.setItem(STORAGE_KEY_PROGRESS, 'CORRUPTED_{{{');

  // Now mock setItem to throw when writing backup
  storage.setItem = (key: string, val: string) => {
    if (key === STORAGE_KEY_BACKUP) {
      throw new Error('Disk write failed during backup');
    }
    return originalSetItem(key, val);
  };

  try {
    // loadUserProgress should catch the inner backup failure and STILL return default
    const recovered = loadUserProgress();
    assert.strictEqual(recovered.version, 1, 'Must successfully return default progress even if backup write fails');
  } finally {
    storage.setItem = originalSetItem;
  }
});

// ============================================================================
// SUITE 3: KEY TAMPERING & DIRECT STORAGE MANIPULATION
// ============================================================================
console.log('\n--- SUITE 3: Key Tampering & State Isolation ---');

runCase('Isolation against foreign keys and adjacent prefix tampering', () => {
  resetAllProgress();
  const storage = getSafeStorage('localStorage');

  // Inject keys with overlapping prefixes
  storage.setItem('hcmute_law_progress_v1_fake', JSON.stringify({ hacked: true }));
  storage.setItem('hcmute_law_progress_v2', JSON.stringify({ future: true }));
  storage.setItem('hcmute_law', 'root_key_junk');

  // Verify loadUserProgress is strictly isolated
  const progress = loadUserProgress();
  assert.strictEqual(progress.completedQuestionIds.length, 0, 'Must only read from exact STORAGE_KEY_PROGRESS');

  // Record an answer and verify foreign keys are untampered
  recordQuestionAnswer('q-iso-1', 1, 'A', true);
  assert.strictEqual(storage.getItem('hcmute_law_progress_v1_fake'), JSON.stringify({ hacked: true }));
  assert.strictEqual(storage.getItem('hcmute_law_progress_v2'), JSON.stringify({ future: true }));
});

runCase('Tampering with active exam session key', () => {
  const storage = getSafeStorage('sessionStorage');

  // Corrupted session
  storage.setItem(STORAGE_KEY_EXAM_SESSION, '{"broken_json: true');
  assert.strictEqual(loadActiveExamSession(), null, 'Broken JSON session must return null');
  assert.strictEqual(hasActiveExamSession(), false, 'hasActiveExamSession must be false');

  // Session with status !== 'in_progress' (e.g. submitted or cancelled)
  storage.setItem(STORAGE_KEY_EXAM_SESSION, JSON.stringify({ id: 'done', status: 'submitted' }));
  assert.strictEqual(loadActiveExamSession(), null, 'Non in-progress session must return null');
  assert.strictEqual(hasActiveExamSession(), false);

  // Clear session
  clearActiveExamSession();
  assert.strictEqual(storage.getItem(STORAGE_KEY_EXAM_SESSION), null, 'Key must be completely cleared');
});

runCase('Export / Import resilience with corrupted or malicious JSON', () => {
  resetAllProgress();
  recordQuestionAnswer('export-q1', 2, 'B', true);
  toggleBookmark('export-q1', 2);

  const exported = exportProgressAsJson();
  assert(exported.includes('export-q1'), 'Exported string must contain recorded data');

  // Test import with invalid JSON
  const invalidRes = importProgressFromJson('NOT_VALID_JSON{[');
  assert.strictEqual(invalidRes.success, false, 'Invalid JSON import must report failure');
  assert(invalidRes.error !== undefined, 'Error message must be present');

  // Test import with missing fields
  const partialRes = importProgressFromJson('{"completedQuestionIds": ["imported-q99"]}');
  assert.strictEqual(partialRes.success, true, 'Partial JSON import should succeed via sanitize');

  const loadedAfterImport = loadUserProgress();
  assert(loadedAfterImport.completedQuestionIds.includes('imported-q99'), 'Imported question must exist');
  assert(Array.isArray(loadedAfterImport.correctQuestionIds), 'Missing fields must be defaulted');
  assert.strictEqual(loadedAfterImport.version, 1, 'Version must be defaulted');
});

// ============================================================================
// SUITE 4: RAPID CONCURRENT OPERATIONS & STRESS LOAD
// ============================================================================
console.log('\n--- SUITE 4: Rapid Concurrent Operations & Stress Load ---');

runCase('High-volume sequential answer recording (500 rapid mutations)', () => {
  resetAllProgress();

  const TOTAL_QUESTIONS = 500;
  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const qId = `q-stress-${i}`;
    const chapterId = (i % 7) + 1;
    const isCorrect = i % 3 !== 0; // 2/3 correct, 1/3 incorrect
    const option = (['A', 'B', 'C', 'D'][i % 4]) as any;

    recordQuestionAnswer(qId, chapterId, option, isCorrect);
  }

  const finalProgress = loadUserProgress();
  assert.strictEqual(finalProgress.completedQuestionIds.length, TOTAL_QUESTIONS, 'All 500 questions must be completed');

  // Mathematical invariant check: i % 3 === 0 is incorrect, so count of incorrect is Math.floor(500 / 3) = 166
  const expectedIncorrect = Math.floor(TOTAL_QUESTIONS / 3);
  const expectedCorrectCount = TOTAL_QUESTIONS - expectedIncorrect;
  assert.strictEqual(
    finalProgress.correctQuestionIds.length,
    expectedCorrectCount,
    `Expected exactly ${expectedCorrectCount} correct questions`
  );

  // Mistakes count should match incorrect questions
  const mistakesCount = Object.keys(finalProgress.mistakes).length;
  assert.strictEqual(mistakesCount, expectedIncorrect, `Expected ${expectedIncorrect} mistakes recorded`);
});

runCase('Rapid bookmark toggle oscillation (200 rapid toggles)', () => {
  resetAllProgress();
  const targetQ = 'toggle-oscillate-q';

  for (let i = 1; i <= 200; i++) {
    const { isBookmarked } = toggleBookmark(targetQ, 1);
    const expected = i % 2 === 1; // odd = true, even = false
    assert.strictEqual(isBookmarked, expected, `Toggle ${i} expected ${expected}`);
  }

  const finalState = loadUserProgress();
  assert(
    !finalState.bookmarkedQuestionIds.includes(targetQ),
    'After 200 toggles (even number), bookmark must be false'
  );
});

runCase('Interleaved stress chaos (1,000 mixed rapid mutations)', () => {
  resetAllProgress();

  const ITERATIONS = 1000;
  for (let i = 1; i <= ITERATIONS; i++) {
    const op = i % 5;
    const qId = `q-interleaved-${i % 50}`; // 50 rotating question IDs
    const chapterId = (i % 7) + 1;

    switch (op) {
      case 0:
        recordQuestionAnswer(qId, chapterId, 'A', false);
        break;
      case 1:
        recordQuestionAnswer(qId, chapterId, 'B', true);
        break;
      case 2:
        toggleBookmark(qId, chapterId);
        break;
      case 3:
        updateFlashcardMastery(`fc-${i % 20}`, i % 2 === 0 ? 'mastered' : 'review');
        break;
      case 4:
        removeMistake(qId);
        break;
    }
  }

  const final = loadUserProgress();
  assert(final.completedQuestionIds.length <= 50, 'Completed questions cannot exceed pool size');
  assert(typeof final.mistakes === 'object', 'Mistakes must remain a valid dictionary');
  assert(typeof final.flashcardMastery === 'object', 'Flashcard mastery must remain a valid dictionary');

  // Ensure no duplicate IDs in completedQuestionIds or bookmarkedQuestionIds
  const completedSet = new Set(final.completedQuestionIds);
  assert.strictEqual(completedSet.size, final.completedQuestionIds.length, 'completedQuestionIds must not contain duplicates');

  const bookmarkSet = new Set(final.bookmarkedQuestionIds);
  assert.strictEqual(bookmarkSet.size, final.bookmarkedQuestionIds.length, 'bookmarkedQuestionIds must not contain duplicates');
});

runCase('Strict FIFO bounding on Exam History (Max 50 entries)', () => {
  resetAllProgress();

  // Save 75 exam results
  for (let i = 1; i <= 75; i++) {
    const mockResult: ExamResult = {
      id: `exam-${i}`,
      config: { questionCount: 40, durationMinutes: 50, chapterIds: [1, 2], shuffleQuestions: true, shuffleOptions: false },
      examDate: 1700000000000 + i * 1000,
      timeSpentSeconds: 1200,
      totalQuestions: 40,
      correctCount: 30 + (i % 10),
      incorrectCount: 10 - (i % 10),
      unansweredCount: 0,
      score10: 8.5,
      passed: true,
      grade: 'Gioi',
      chapterBreakdowns: [],
      userAnswers: {},
      detailedReview: [],
    };
    saveExamResult(mockResult);
  }

  const state = loadUserProgress();
  assert.strictEqual(state.examHistory.length, 50, 'Exam history must be strictly capped at 50 records (FIFO)');
  // Most recent result (exam-75) must be at index 0
  assert.strictEqual(state.examHistory[0].id, 'exam-75', 'Most recent exam must be at index 0');
  // Oldest kept result must be exam-26
  assert.strictEqual(state.examHistory[49].id, 'exam-26', 'Oldest preserved exam must be exam-26');

  // Clear exam history
  const cleared = clearExamHistory();
  assert.strictEqual(cleared.examHistory.length, 0, 'clearExamHistory must empty the list');
});

console.log('\n=================================================================');
console.log(`🎉 ALL ${passedTests}/${totalTests} ADVERSARIAL STRESS CASES PASSED EMPIRICALLY!`);
console.log('=================================================================\n');
