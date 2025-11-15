import { Box } from '@mui/material';
import React from 'react';
import { TitleXLarge } from '@/components/common';

export const HomePageTitle: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <TitleXLarge gutterBottom sx={{ fontWeight: '' }}>
        {'Home Page'}
      </TitleXLarge>
    </Box>
  );
};
