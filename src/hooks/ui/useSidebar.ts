import { useMediaQuery } from '@mui/material';
import { sidebarStore } from '@store/ui';
import { useAppTheme } from './useAppTheme';

export const useSidebar = () => {
  const { isSideBarOpen, setSideBarOpen, toggleSideBar } = sidebarStore();
  const { theme } = useAppTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavigationClick = () => {
    if (isMobile) {
      toggleSideBar();
    }
  };

  return {
    isSideBarOpen,
    toggleSideBar,
    setSideBarOpen,
    handleNavigationClick,
  };
};
