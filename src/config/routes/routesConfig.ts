import { Routes } from '@models/enums';
import { lazy } from 'react';

export const routesConfig = [
  {
    id: 'home',
    route: Routes.Home,
    Component: lazy(() => import('@pages/home')),
  },
  {
    id: Routes.NotFound,
    route: Routes.NotFound,
    Component: lazy(() => import('@pages/not-found')),
  },
];
