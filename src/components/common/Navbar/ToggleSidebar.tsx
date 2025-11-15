import type React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSidebar } from '@/hooks/ui';

export const ToggleSidebar: React.FC = () => {
  const { toggleSideBar } = useSidebar();
  return (
    <IconButton
      color="inherit"
      aria-label="toggle sidebar"
      onClick={toggleSideBar}
      edge="start"
      sx={{ color: 'text.primary', pt: '10px' }}
    >
      <MenuIcon />
    </IconButton>
  );
};
