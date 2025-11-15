import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { AppPageContainer } from '@/components/common';
import { CommonKeys } from '@/config';

export const NotesPageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppPageContainer id={CommonKeys.Notes}>
      <Box
        id="notes-page"
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={3}
        px={{ xs: 2, sm: 3, md: 4 }}
        py={3}
      >
        {children}
      </Box>
    </AppPageContainer>
  );
};
