import React from 'react';
import { ErrorPage } from '@pages/error';
import { AppLayout } from '../AppLayout';

interface ErrorBoundaryLayoutProps {
  error?: Error;
}

export const ErrorBoundaryLayout: React.FC<ErrorBoundaryLayoutProps> = ({ error }) => {
  return (
    <AppLayout>
      <ErrorPage error={error} />
    </AppLayout>
  );
};
