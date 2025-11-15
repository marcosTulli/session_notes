import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '@models/enums';

interface ErrorPageProps {
  error?: Error;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === Routes.Home;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        px: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
          },
        }}
      >
        Oops! Something went wrong
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        gutterBottom
        sx={{
          maxWidth: 600,
          fontSize: '1.5rem',
        }}
      >
        {error?.message || 'An unexpected error occurred. Please try again later.'}
      </Typography>

      {!isHome && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(Routes.Home)}
          sx={{
            mt: 3,
            px: 4,
            py: 1.5,
            fontWeight: 600,
          }}
        >
          {'Home'}
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.reload()}
        sx={{
          mt: 3,
          px: 4,
          py: 1.5,
          fontWeight: 600,
        }}
      >
        Reload
      </Button>
    </Box>
  );
};
