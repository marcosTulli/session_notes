import type React from 'react';
import { useSidebar } from '@hooks/ui';
import { layoutConfig } from '@config/ui';
import { Main } from './styled';

export function MainPageContainer({ children }: { children: React.ReactNode }) {
  const { isSideBarOpen } = useSidebar();
  const { topBarHeight, collapsedDrawerWidth, drawerWidth } = layoutConfig;

  return (
    <Main
      topBarHeight={topBarHeight}
      collapsedDrawerWidth={collapsedDrawerWidth}
      drawerWidth={drawerWidth}
      open={isSideBarOpen}
    >
      {children}
    </Main>
  );
}
