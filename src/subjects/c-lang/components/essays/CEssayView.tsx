/**
 * src/subjects/c-lang/components/essays/CEssayView.tsx
 * Chế độ Luyện giải Tự luận Lập trình 32 bài toán C/C++ chuẩn ĐH SPKT (HCMUTE)
 * Tích hợp Monaco Code Editor (C/C++ Syntax Highlighting) & Đối chiếu Lời giải mẫu
 */

import React, { useState, Suspense, lazy } from 'react';
import {
  Terminal,
  Code2,
  BookOpen,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  FileCode,
  Layers,
} from 'lucide-react';
import { useCStudy } from '../../context/CStudyContext';
import { useTheme } from '@/context/ThemeContext';
import { allCEssays } from '../../data/essays';
import { allCChapters } from '../../data/chapters';
import { CEssay } from '../../types';

// Lazy-load Monaco Editor để không ảnh hưởng bundle tải ban đầu của môn Pháp luật
const Editor = lazy(() => import('@monaco-editor/react'));

export const CEssayView: React.FC = () => {
  const { progress, saveEssayCode, activeChapterId, setActiveChapterId } = useCStudy();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [selectedEssayId, setSelectedEssayId] = useState<string>('PROG-01-01');
  const [showReferenceCode, setShowReferenceCode] = useState<boolean>(false);
  const [editorViewMode, setEditorViewMode] = useState<'editor' | 'split' | 'solution'>('split');

  // Lọc bài tập theo chương
  const filteredEssays = React.useMemo(() => {
    if (activeChapterId === null) return allCEssays;
    return allCEssays.filter((e) => e.chapterId === activeChapterId);
  }, [activeChapterId]);

  const currentEssay: CEssay =
    allCEssays.find((e) => e.id === selectedEssayId) || filteredEssays[0] || allCEssays[0];

  const userCode = progress.essayDrafts[currentEssay.id] ?? currentEssay.starterCode ?? '';

  const handleCodeChange = (newCode: string | undefined) => {
    if (newCode !== undefined) {
      saveEssayCode(currentEssay.id, newCode);
    }
  };

  const handleResetStarterCode = () => {
    saveEssayCode(currentEssay.id, currentEssay.starterCode || '');
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Sidebar: Danh sách 32 bài tự luận theo chương */}
      <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0">
        <div className="p-3.5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>32 Bài Tự Luận C/C++</span>
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold">
              {filteredEssays.length} bài
            </span>
          </div>

          <select
            value={activeChapterId === null ? '' : activeChapterId}
            onChange={(e) => {
              const val = e.target.value;
              setActiveChapterId(val === '' ? null : Number(val));
            }}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
          >
            <option value="">Tất cả 9 chương (32 bài)</option>
            {allCChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                Chương {ch.id}: {ch.title}
              </option>
            ))}
          </select>
        </div>

        {/* Essay List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 p-2 space-y-1">
          {filteredEssays.map((essay) => {
            const isSelected = essay.id === currentEssay.id;
            const hasDraft = !!progress.essayDrafts[essay.id];

            return (
              <button
                key={essay.id}
                onClick={() => {
                  setSelectedEssayId(essay.id);
                  setShowReferenceCode(false);
                }}
                className={`w-full p-2.5 rounded-xl text-left transition-all ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 shadow-xs'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    {essay.id}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                      essay.difficulty === 'easy'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : essay.difficulty === 'medium'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    {essay.difficulty === 'easy' ? 'Dễ' : essay.difficulty === 'medium' ? 'Vừa' : 'Khó'}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                  {essay.title}
                </h4>
                {hasDraft && (
                  <span className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Đã lưu bài làm</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area: Split View Between Problem & Monaco Editor */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Problem Details & Algorithmic Guidance */}
        <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 space-y-4 bg-white dark:bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                {currentEssay.id}
              </span>
              <span className="text-xs text-slate-400">Chương {currentEssay.chapterId}</span>
            </div>
            <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
              {currentEssay.title}
            </h2>
            <div className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {currentEssay.description}
            </div>
          </div>

          {/* I/O Example */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Ví dụ Đầu vào (Input):
              </span>
              <code className="font-mono text-blue-600 dark:text-blue-400">{currentEssay.inputExample}</code>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Ví dụ Đầu ra (Output):
              </span>
              <code className="font-mono text-emerald-600 dark:text-emerald-400">{currentEssay.outputExample}</code>
            </div>
          </div>

          {/* Step-by-step Guidance */}
          <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-2 text-xs">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              <span>Hướng dẫn giải thuật từng bước:</span>
            </h4>
            <ol className="list-decimal pl-4 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentEssay.guidance.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Complexity Explanation */}
          {currentEssay.explanation && (
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Độ phức tạp & Phân tích cạm bẫy:</span>
              </span>
              <p className="leading-relaxed">{currentEssay.explanation}</p>
            </div>
          )}
        </div>

        {/* Right: Monaco Code Editor & Solution Viewer */}
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden bg-slate-900 text-white">
          {/* Editor Header Toolbar */}
          <div className="p-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs shrink-0 select-none">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-400" />
              <span className="font-mono text-[11px] text-slate-300">solution.c</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                C99/C++11
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetStarterCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Khôi phục lại mã khung ban đầu"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Khung ban đầu</span>
              </button>

              <button
                onClick={() => setShowReferenceCode((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                  showReferenceCode
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                {showReferenceCode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showReferenceCode ? 'Ẩn Lời Giải' : 'Xem Lời Giải Mẫu'}</span>
              </button>
            </div>
          </div>

          {/* Monaco Editor Split Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* User Editor Pane */}
            <div className={`flex-1 relative ${showReferenceCode ? 'h-1/2' : 'h-full'}`}>
              <Suspense
                fallback={
                  <div className="p-6 text-xs text-slate-400 flex items-center justify-center h-full">
                    Đang nạp trình soạn thảo Monaco Code Editor...
                  </div>
                }
              >
                <Editor
                  height="100%"
                  language={currentEssay.chapterId === 9 ? 'cpp' : 'c'}
                  theme={isDarkMode ? 'vs-dark' : 'vs-dark'}
                  value={userCode}
                  onChange={handleCodeChange}
                  options={{
                    fontSize: 13,
                    fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    lineNumbers: 'on',
                    tabSize: 4,
                    wordWrap: 'on',
                  }}
                />
              </Suspense>
            </div>

            {/* Reference Code Panel (Split View when toggled) */}
            {showReferenceCode && (
              <div className="h-1/2 border-t border-slate-800 bg-slate-950 flex flex-col overflow-hidden">
                <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Lời giải mẫu chuẩn GCC 16.1.0 (-fsyntax-only PASS)</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">reference.c</span>
                </div>
                <pre className="flex-1 p-3 text-xs font-mono overflow-y-auto leading-relaxed text-emerald-300 selection:bg-emerald-900">
                  <code>{currentEssay.referenceCode}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
