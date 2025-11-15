import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Routes } from '@/models/enums';

export interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Home', icon: <HomeIcon />, href: Routes.Home },
];
