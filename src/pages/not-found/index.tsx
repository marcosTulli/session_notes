import { AppPageContainer, LabelLarge, LabelSmall, TitleXLarge } from '@/components';
import { CommonKeys } from '@/config';
import { Box } from '@mui/material';
import React from 'react';

const NotFound: React.FC = () => {
  const strings = {
    title: '404 - Page Not Found',
    message: 'Sorry, the page you are looking for does not exist.',
    suggestion: 'Please check the URL or return to the home page.',
  };
  return (
    <AppPageContainer id={CommonKeys.NotFound}>
      <Box
        sx={{
          display: 'flex',
          height: '80vh',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <TitleXLarge>{strings.title}</TitleXLarge>
        <LabelLarge>{strings.message}</LabelLarge>
        <LabelSmall>{strings.suggestion}</LabelSmall>
      </Box>
    </AppPageContainer>
  );
};

export default NotFound;
