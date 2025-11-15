import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const AppViewLoader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
