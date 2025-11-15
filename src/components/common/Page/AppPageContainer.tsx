import { CommonKeys } from '@/config';
import { Box } from '@mui/material';
import React from 'react';

interface AppPageContainer {
  children: React.ReactNode;
  id: CommonKeys;
}
export const AppPageContainer: React.FC<AppPageContainer> = ({ children, id }) => {
  return (
    <Box
      id={`${id}-page`}
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* This could be a protected page */}
      {children}
    </Box>
  );
};
