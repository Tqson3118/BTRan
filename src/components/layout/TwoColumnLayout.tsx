import React from 'react';
import { MainWorkspace } from './MainWorkspace';
import { TheoryDrawer } from '../drawer/TheoryDrawer';

export const TwoColumnLayout: React.FC = () => {
  return (
    <div className="flex-1 flex overflow-hidden relative">
      <MainWorkspace />
      <TheoryDrawer />
    </div>
  );
};
