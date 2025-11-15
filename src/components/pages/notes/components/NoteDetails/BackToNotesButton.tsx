import { CustomButton } from '@/components/common/Buttons/CustomButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@models/enums';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';

export const BackToNotesButton: React.FC = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(Routes.Notes);
  };
  return (
    <Box sx={{ py: 2 }}>
      <CustomButton
        variant="outlined"
        icon={<ArrowBackIcon />}
        label="Back to Notes"
        onClick={back}
      />
    </Box>
  );
};
