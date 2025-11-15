import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

interface AlertProps {
  content: { alertMessage: string };
  acceptButtonLabel: string;
  cancelButtonLabel: string;
  isLoading?: boolean;

  toggle: () => void;
  onSubmit: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  content,
  acceptButtonLabel,
  cancelButtonLabel,
  isLoading = false,

  toggle,
  onSubmit,
}) => {
  const handleAccept = () => {
    onSubmit();
    toggle();
  };

  return (
    <Box
      id="alert-container"
      sx={{
        maxWidth: '90vw',
        padding: 2,
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0',
          margin: '0',
        }}
      >
        <Typography variant="h5">{content.alertMessage}</Typography>
      </Box>

      <Stack width="100%" direction="row" spacing={2} justifyContent="flex-end" mt={4}>
        <Button variant="text" color="inherit" onClick={toggle}>
          {cancelButtonLabel}
        </Button>
        <Button variant="contained" color="error" onClick={handleAccept} disabled={isLoading}>
          {acceptButtonLabel}
        </Button>
      </Stack>
    </Box>
  );
};
