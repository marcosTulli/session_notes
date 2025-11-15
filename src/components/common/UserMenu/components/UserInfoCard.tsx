import React from 'react';
import { Box } from '@mui/material';
import { LabelSmall } from '../../Text/components';

export const UserInfoCard: React.FC = () => {
  return (
    <Box sx={{ px: 2, py: 1 }}>
      <LabelSmall color="text.secondary" noWrap>
        Welcome john@users.com
      </LabelSmall>
    </Box>
  );
};
