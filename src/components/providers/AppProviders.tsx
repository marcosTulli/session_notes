import type React from 'react';
import { ThemeProvider } from '@mui/material';
import { useAppTheme } from '@hooks/ui';
import { BrowserRouter } from 'react-router-dom';
import { CssVarsProvider } from './CssVars';
import { ToastProvider } from './ToastProvider';
import { QueryProvider } from './QueryProvider';
import { GlobalProvider } from './GlobalStyles';
import { AppErrorBoundary } from './ErrorBoundary';
import { DatePickerProvider } from './DatePickerProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  const { theme } = useAppTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalProvider />
        <ToastProvider>
          <QueryProvider>
            <CssVarsProvider>
              <DatePickerProvider>
                <AppErrorBoundary>{children}</AppErrorBoundary>
              </DatePickerProvider>
            </CssVarsProvider>
          </QueryProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
