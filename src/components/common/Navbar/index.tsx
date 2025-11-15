import type React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { layoutConfig } from '@/config';
import UserMenu from '../UserMenu';
import { Logo } from './Logo';
import { Box } from '@mui/material';
import { ToggleSidebar } from './ToggleSidebar';

export const Navbar: React.FC = () => {
  const { topBarHeight } = layoutConfig;
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: '100%',
        height: topBarHeight,
        bgcolor: 'background.default',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          minHeight: topBarHeight,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display={'flex'} alignItems={'between'} gap={3}>
          <ToggleSidebar />
          <Logo />
        </Box>
        <UserMenu />
      </Toolbar>
    </MuiAppBar>
  );
};
