/**
 * src/subjects/c-lang/components/layout/CTwoColumnLayout.tsx
 * Giao diện 2 cột thông minh cho môn Lập trình C/C++:
 * - Cột chính: CMainWorkspace
 * - Cột phụ (drawer): CTheoryDrawer (ngăn kéo lý thuyết 9 chương, đối chiếu 2 giáo trình)
 */

import React from 'react';
import { CMainWorkspace } from './CMainWorkspace';
import { CTheoryDrawer } from '../drawer/CTheoryDrawer';

export const CTwoColumnLayout: React.FC = () => {
  return (
    <div className="flex-1 flex overflow-hidden relative">
      <CMainWorkspace />
      <CTheoryDrawer />
    </div>
  );
};
