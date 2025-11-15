import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { MainPageContainer } from '../MainPageContainer';
import { GlobalOverlays } from '../GlobalOverlays';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalOverlays />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '100vh',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <Navbar />
        <Sidebar />
        <MainPageContainer>{children}</MainPageContainer>
      </Box>
    </>
  );
};
