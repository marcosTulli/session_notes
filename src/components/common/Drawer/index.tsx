import { styled } from '@mui/material/styles';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import React from 'react';

interface CustomDrawerProps extends Omit<MuiDrawerProps, 'open'> {
  open: boolean;
  topBarHeight: number;
  drawerWidth: number;
  collapsedDrawerWidth: number;
}

export const Drawer: React.FC<CustomDrawerProps> = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    typeof prop === 'string' &&
    !['open', 'topBarHeight', 'drawerWidth', 'collapsedDrawerWidth'].includes(prop),
})<CustomDrawerProps>(({ theme, open, topBarHeight, drawerWidth, collapsedDrawerWidth }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'fixed',
  top: topBarHeight,
  height: `calc(100vh - ${topBarHeight}px)`,
  overflowY: 'auto',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': { display: 'none' },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  [theme.breakpoints.down('sm')]: {
    zIndex: 1300,
    width: '100vw',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    width: open ? drawerWidth : collapsedDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
}));
