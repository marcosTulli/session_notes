import { Routes } from '@models/enums';
import { lazy } from 'react';
import { CommonKeys } from '../app';

export const routesConfig = [
  {
    id: 'home',
    route: Routes.Home,
    Component: lazy(() => import('@pages/home')),
  },
  {
    id: CommonKeys.Notes,
    route: Routes.Notes,
    Component: lazy(() => import('@pages/notes')),
  },
  {
    id: 'note-detail',
    route: Routes.NoteDetail,
    Component: lazy(() => import('@pages/notes/[id]')),
  },
  {
    id: Routes.NotFound,
    route: Routes.NotFound,
    Component: lazy(() => import('@pages/not-found')),
  },
];
