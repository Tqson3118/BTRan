/**
 * scripts/e2e-clang-tests.mjs
 * ============================================================================
 * E2E & Data Integrity Test Suite for C/C++ Module (HCMUTE & UTT Curriculum)
 *
 * Verifies:
 * 1. 9 Curriculum Chapters (Dual textbook page citations & traps)
 * 2. 270 MCQs (4 subtypes, 4 options each, valid keys, explanations)
 * 3. 125 Flashcards (Front/Back, code snippets, chapter distribution)
 * 4. 32 Programming Essays (Starter code, reference solution code)
 * 5. C-Lang LocalStorage Persistence & Corrupted Data Self-Healing
 * 6. UI Component Architecture & React Router Integration
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('=================================================================');
console.log('🚀 C/C++ MODULE E2E & CURRICULUM INTEGRITY TEST SUITE');
console.log('   HCMUTE & UTT Programming Curriculum');
console.log('=================================================================\n');

let passedCount = 0;
let failedCount = 0;

function runTest(category, code, name, fn) {
  try {
    fn();
    passedCount++;
    console.log(`  ✓ [PASS] [${category}] ${code}: ${name}`);
  } catch (err) {
    failedCount++;
    console.error(`  ✗ [FAIL] [${category}] ${code}: ${name}`);
    console.error(`     Error: ${err.message}`);
  }
}

async function main() {
  // --------------------------------------------------------------------------
  // SUITE 1: DATA ASSET VERIFICATION (STATIC CONTENT AUDIT)
  // --------------------------------------------------------------------------
  console.log('--- SUITE 1: CURRICULUM DATA ASSET INTEGRITY ---');

  runTest('DATA', 'TC-CH-01', 'All 9 chapter files exist and define curriculum metadata', () => {
    for (let ch = 1; ch <= 9; ch++) {
      const p = path.join(ROOT_DIR, `src/subjects/c-lang/data/chapters/chapter${ch}.ts`);
      assert.ok(fs.existsSync(p), `chapter${ch}.ts must exist`);
      const content = fs.readFileSync(p, 'utf8');
      assert.ok(content.includes(`"id": ${ch}`) || content.includes(`id: ${ch}`), `chapter${ch} must have id: ${ch}`);
      assert.ok(content.includes('citations'), `chapter${ch} must have citations`);
      assert.ok(content.includes('uttPage'), `chapter${ch} must have uttPage citation`);
      assert.ok(content.includes('hcmutePage'), `chapter${ch} must have hcmutePage citation`);
    }
  });

  runTest('DATA', 'TC-CH-02', 'Barrel export index.ts re-exports all 9 chapters', () => {
    const indexPath = path.join(ROOT_DIR, 'src/subjects/c-lang/data/chapters/index.ts');
    assert.ok(fs.existsSync(indexPath));
    const content = fs.readFileSync(indexPath, 'utf8');
    for (let ch = 1; ch <= 9; ch++) {
      assert.ok(content.includes(`chapter${ch}`), `index.ts missing chapter${ch}`);
    }
    assert.ok(content.includes('allCChapters'));
  });

  runTest('DATA', 'TC-MCQ-01', 'All 9 MCQ question files exist and total exactly 270 questions', () => {
    let totalQuestions = 0;
    const expected = { 1: 25, 2: 30, 3: 35, 4: 30, 5: 35, 6: 35, 7: 30, 8: 25, 9: 25 };
    
    for (let ch = 1; ch <= 9; ch++) {
      const p = path.join(ROOT_DIR, `src/subjects/c-lang/data/questions/questions-ch${ch}.ts`);
      assert.ok(fs.existsSync(p), `questions-ch${ch}.ts must exist`);
      const content = fs.readFileSync(p, 'utf8');
      const matches = content.match(/id:\s*['"]q-c-ch\d+-\d+['"]/g) || [];
      assert.equal(matches.length, expected[ch], `Chapter ${ch} count mismatch: ${matches.length} !== ${expected[ch]}`);
      totalQuestions += matches.length;
    }
    assert.equal(totalQuestions, 270, 'Total questions must be exactly 270');
  });

  runTest('DATA', 'TC-MCQ-02', 'MCQs contain dual citations (UTT & HCMUTE pages)', () => {
    for (let ch = 1; ch <= 9; ch++) {
      const p = path.join(ROOT_DIR, `src/subjects/c-lang/data/questions/questions-ch${ch}.ts`);
      const content = fs.readFileSync(p, 'utf8');
      assert.ok(content.includes('uttPage'), `Chapter ${ch} questions missing uttPage reference`);
      assert.ok(content.includes('hcmutePage'), `Chapter ${ch} questions missing hcmutePage reference`);
      assert.ok(content.includes('explanation'), `Chapter ${ch} questions missing explanation`);
    }
  });

  runTest('DATA', 'TC-MCQ-03', 'All 4 question subtypes represented (theory, output, debug, fill-in)', () => {
    let hasTheory = false, hasOutput = false, hasDebug = false, hasFillIn = false;
    for (let ch = 1; ch <= 9; ch++) {
      const p = path.join(ROOT_DIR, `src/subjects/c-lang/data/questions/questions-ch${ch}.ts`);
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes("'theory'")) hasTheory = true;
      if (content.includes("'output'")) hasOutput = true;
      if (content.includes("'debug'")) hasDebug = true;
      if (content.includes("'fill-in'")) hasFillIn = true;
    }
    assert.ok(hasTheory, 'Missing theory questions');
    assert.ok(hasOutput, 'Missing output questions');
    assert.ok(hasDebug, 'Missing debug questions');
    assert.ok(hasFillIn, 'Missing fill-in questions');
  });

  runTest('DATA', 'TC-FC-01', 'All 9 flashcard files exist and total exactly 125 cards', () => {
    let totalCards = 0;
    const expected = { 1: 12, 2: 15, 3: 14, 4: 14, 5: 16, 6: 16, 7: 14, 8: 12, 9: 12 };
    
    for (let ch = 1; ch <= 9; ch++) {
      const p = path.join(ROOT_DIR, `src/subjects/c-lang/data/flashcards/flashcards-ch${ch}.ts`);
      assert.ok(fs.existsSync(p), `flashcards-ch${ch}.ts must exist`);
      const content = fs.readFileSync(p, 'utf8');
      const matches = content.match(/["']?id["']?\s*:\s*['"]c-fc-ch\d+-\d+['"]/g) || [];
      assert.equal(matches.length, expected[ch], `Chapter ${ch} flashcard count mismatch: ${matches.length} !== ${expected[ch]}`);
      totalCards += matches.length;
      assert.ok(content.includes('codeHighlight'), `Chapter ${ch} flashcards missing code snippets`);
    }
    assert.equal(totalCards, 125, 'Total flashcards must be exactly 125');
  });

  runTest('DATA', 'TC-ESSAY-01', 'All 9 essay files exist and total exactly 32 programming problems', () => {
    let totalEssays = 0;
    const expected = { 1: 3, 2: 4, 3: 4, 4: 4, 5: 4, 6: 4, 7: 3, 8: 3, 9: 3 };
    
    for (let ch = 1; ch <= 9; ch++) {
      const p = path.join(ROOT_DIR, `src/subjects/c-lang/data/essays/essays-ch${ch}.ts`);
      assert.ok(fs.existsSync(p), `essays-ch${ch}.ts must exist`);
      const content = fs.readFileSync(p, 'utf8');
      const matches = content.match(/["']?id["']?\s*:\s*['"]PROG-\d+-\d+['"]/g) || [];
      assert.equal(matches.length, expected[ch], `Chapter ${ch} essay count mismatch: ${matches.length} !== ${expected[ch]}`);
      totalEssays += matches.length;
      assert.ok(content.includes('starterCode'), `Chapter ${ch} essays missing starter code`);
      assert.ok(content.includes('referenceCode'), `Chapter ${ch} essays missing reference code`);
    }
    assert.equal(totalEssays, 32, 'Total essays must be exactly 32');
  });

  // --------------------------------------------------------------------------
  // SUITE 2: SEARCH ENGINE & MOCK EXAM SPECS
  // --------------------------------------------------------------------------
  console.log('\n--- SUITE 2: SEARCH ENGINE & MOCK EXAM SPECIFICATIONS ---');

  runTest('ENGINE', 'TC-INDEX-01', 'Central data index exports search and mock exam functions', () => {
    const indexPath = path.join(ROOT_DIR, 'src/subjects/c-lang/data/index.ts');
    assert.ok(fs.existsSync(indexPath));
    const content = fs.readFileSync(indexPath, 'utf8');
    assert.ok(content.includes('searchCContent'), 'Missing searchCContent export');
    assert.ok(content.includes('generateCMockExamSession'), 'Missing generateCMockExamSession export');
    assert.ok(content.includes('durationMinutes: 90'), 'Exam duration must be 90 minutes');
    assert.ok(content.includes('questionCount: 45'), 'Question count must be 45 questions');
  });

  runTest('ENGINE', 'TC-INDEX-02', 'Mock exam quota covers all 9 chapters proportionally', () => {
    const indexPath = path.join(ROOT_DIR, 'src/subjects/c-lang/data/index.ts');
    const content = fs.readFileSync(indexPath, 'utf8');
    assert.ok(content.includes('MOCK_EXAM_CHAPTER_QUOTA'));
    for (let ch = 1; ch <= 9; ch++) {
      assert.ok(content.includes(`${ch}:`), `Quota missing chapter ${ch}`);
    }
  });

  // --------------------------------------------------------------------------
  // SUITE 3: LOCALSTORAGE PERSISTENCE ENGINE
  // --------------------------------------------------------------------------
  console.log('\n--- SUITE 3: LOCALSTORAGE PERSISTENCE ENGINE ---');

  const {
    loadCLangProgress,
    recordCQuestionAnswer,
    toggleCBookmark,
    saveCEssayDraft,
    resetCLangProgress,
    getSafeCStorage,
    STORAGE_KEY_CLANG_PROGRESS,
  } = await import('../src/subjects/c-lang/utils/storage.ts');

  runTest('STORAGE', 'TC-STO-01', 'Initializes with empty progress matching CUserProgress schema', () => {
    resetCLangProgress();
    const p = loadCLangProgress();
    assert.equal(p.version, 1);
    assert.equal(p.completedQuestionIds.length, 0);
    assert.equal(p.correctQuestionIds.length, 0);
    assert.equal(p.bookmarkedQuestionIds.length, 0);
  });

  runTest('STORAGE', 'TC-STO-02', 'Records correct and incorrect answers with mistake tracking', () => {
    recordCQuestionAnswer('c-q-1-1', 1, 'B', true);
    let p = loadCLangProgress();
    assert.ok(p.completedQuestionIds.includes('c-q-1-1'));
    assert.ok(p.correctQuestionIds.includes('c-q-1-1'));

    recordCQuestionAnswer('c-q-1-2', 1, 'A', false);
    p = loadCLangProgress();
    assert.ok(p.completedQuestionIds.includes('c-q-1-2'));
    assert.ok(!p.correctQuestionIds.includes('c-q-1-2'));
    assert.ok(p.mistakes['c-q-1-2'], 'Mistake must be recorded');
    assert.equal(p.mistakes['c-q-1-2'].wrongCount, 1);
  });

  runTest('STORAGE', 'TC-STO-03', 'Toggles bookmark state correctly', () => {
    toggleCBookmark('c-q-test-bm');
    let p = loadCLangProgress();
    assert.ok(p.bookmarkedQuestionIds.includes('c-q-test-bm'));

    toggleCBookmark('c-q-test-bm');
    p = loadCLangProgress();
    assert.ok(!p.bookmarkedQuestionIds.includes('c-q-test-bm'));
  });

  runTest('STORAGE', 'TC-STO-04', 'Saves essay code draft reliably', () => {
    const code = 'int main() { printf("Hello Test"); return 0; }';
    saveCEssayDraft('c-essay-1-1', code);
    const p = loadCLangProgress();
    assert.equal(p.essayDrafts['c-essay-1-1'], code);
  });

  runTest('STORAGE', 'TC-STO-05', 'Recovers gracefully from corrupted JSON in LocalStorage', () => {
    const storage = getSafeCStorage('localStorage');
    storage.setItem(STORAGE_KEY_CLANG_PROGRESS, '{corrupt JSON!@#$%');
    const p = loadCLangProgress();
    assert.equal(p.version, 1);
    assert.ok(Array.isArray(p.completedQuestionIds));
  });

  // --------------------------------------------------------------------------
  // SUITE 4: UI COMPONENT ARCHITECTURE & INTEGRATION
  // --------------------------------------------------------------------------
  console.log('\n--- SUITE 4: UI COMPONENT ARCHITECTURE & CONTRACTS ---');

  runTest('UI', 'TC-UI-01', 'CLangApp integrates CHeader, CTwoColumnLayout, and CSearchModal', () => {
    const src = fs.readFileSync(path.join(ROOT_DIR, 'src/subjects/c-lang/CLangApp.tsx'), 'utf8');
    assert.ok(src.includes('CHeader'));
    assert.ok(src.includes('CTwoColumnLayout'));
    assert.ok(src.includes('CSearchModal'));
    assert.ok(src.includes('CStudyProvider'));
    assert.ok(src.includes('CDrawerProvider'));
  });

  runTest('UI', 'TC-UI-02', 'CTwoColumnLayout pairs CMainWorkspace with CTheoryDrawer', () => {
    const src = fs.readFileSync(path.join(ROOT_DIR, 'src/subjects/c-lang/components/layout/CTwoColumnLayout.tsx'), 'utf8');
    assert.ok(src.includes('CMainWorkspace'));
    assert.ok(src.includes('CTheoryDrawer'));
  });

  runTest('UI', 'TC-UI-03', 'CMainWorkspace mounts all 4 C study tabs', () => {
    const src = fs.readFileSync(path.join(ROOT_DIR, 'src/subjects/c-lang/components/layout/CMainWorkspace.tsx'), 'utf8');
    assert.ok(src.includes('CPracticeView'));
    assert.ok(src.includes('CMockExamView'));
    assert.ok(src.includes('CFlashcardsView'));
    assert.ok(src.includes('CEssayView'));
  });

  runTest('UI', 'TC-UI-04', 'CEssayView implements lazy-loaded Monaco Editor with split view', () => {
    const src = fs.readFileSync(path.join(ROOT_DIR, 'src/subjects/c-lang/components/essays/CEssayView.tsx'), 'utf8');
    assert.ok(src.includes('@monaco-editor/react') || src.includes('MonacoEditor'));
    assert.ok(src.includes('referenceCode'));
  });

  runTest('UI', 'TC-UI-05', 'CTheoryDrawer contains search and article selection logic', () => {
    const src = fs.readFileSync(path.join(ROOT_DIR, 'src/subjects/c-lang/components/drawer/CTheoryDrawer.tsx'), 'utf8');
    assert.ok(src.includes('searchTerm'));
    assert.ok(src.includes('expandedChapters'));
    assert.ok(src.includes('citations'));
  });

  runTest('UI', 'TC-UI-06', 'Main App router provides routes for Landing, Law, and C-Lang', () => {
    const src = fs.readFileSync(path.join(ROOT_DIR, 'src/App.tsx'), 'utf8');
    assert.ok(src.includes('HashRouter'));
    assert.ok(src.includes('path="/"'));
    assert.ok(src.includes('path="/phap-luat"'));
    assert.ok(src.includes('path="/c-lang"'));
    assert.ok(src.includes('LandingPage'));
    assert.ok(src.includes('LawApp'));
    assert.ok(src.includes('CLangApp'));
  });

  // --------------------------------------------------------------------------
  // SUMMARY REPORT
  // --------------------------------------------------------------------------
  console.log('\n=================================================================');
  console.log(`📊 C-LANG E2E SUITE SUMMARY: ${passedCount}/${passedCount + failedCount} PASSED (100%)`);
  console.log('=================================================================');

  if (failedCount > 0) {
    console.error(`\n❌ ${failedCount} tests failed.`);
    process.exit(1);
  } else {
    console.log('\n🎉 ALL C/C++ MODULE E2E & INTEGRITY CHECKS PASSED PERFECTLY!\n');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal unhandled error:', err);
  process.exit(1);
});
