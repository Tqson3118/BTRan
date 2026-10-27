/**
 * src/App.tsx
 * Multi-subject SPA Router (HCMUTE Study Platform)
 * HashRouter: Tương thích hoàn hảo GitHub Pages (/BTRan/), file:// protocol & Static Server
 *
 * Routes:
 * - #/            -> LandingPage (Chọn môn học: Pháp luật đại cương & Lập trình C/C++)
 * - #/phap-luat   -> LawApp (Pháp luật đại cương HCMUTE 2023 - 7 chương)
 * - #/c-lang      -> CLangApp (Ngôn ngữ lập trình C/C++ - 9 chương, Monaco Editor)
 */

import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { LandingPage } from '@/components/landing/LandingPage';
import { LawApp } from '@/subjects/phap-luat/LawApp';

// Lazy-load module Lập trình C kèm Monaco Code Editor để tối ưu bundle size ban đầu
const CLangApp = lazy(() => import('@/subjects/c-lang/CLangApp'));

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Suspense
          fallback={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-medium">Đang tải giao diện...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/phap-luat" element={<LawApp />} />
            <Route path="/c-lang" element={<CLangApp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  );
}
