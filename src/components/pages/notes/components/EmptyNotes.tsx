import React from 'react';
import { Box } from '@mui/material';
import { TitleXLarge } from '@components/common/Text/components';

export const EmptyNotes: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
      width="100%"
      maxWidth="1200px"
    >
      <TitleXLarge sx={{ color: 'text.secondary' }}>
        No notes yet. Create your first note!
      </TitleXLarge>
    </Box>
  );
};
