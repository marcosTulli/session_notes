import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routesConfig } from '@config';
import { AppLayout, AppViewLoader } from '../common';
import { AppErrorBoundary } from './ErrorBoundary';

export function AppRoutes() {
  const { pathname } = useLocation();
  return (
    <Routes>
      {routesConfig.map(({ id, route, Component }) => {
        return (
          <Route
            key={id}
            path={route}
            element={
              <AppErrorBoundary key={pathname}>
                <Suspense fallback={<AppViewLoader />}>
                  <AppLayout>
                    <Component />
                  </AppLayout>
                </Suspense>
              </AppErrorBoundary>
            }
          />
        );
      })}
    </Routes>
  );
}
