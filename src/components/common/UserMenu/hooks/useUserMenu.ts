import React from 'react';
import { userMenuStore } from '../store';

export function useUserMenu() {
  const { anchorEl, isOpenUserMenu, openUserMenu, closeUserMenu } = userMenuStore();

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    openUserMenu(event.currentTarget);
  };

  const handleClose = () => {
    closeUserMenu();
  };

  return {
    open,
    anchorEl,
    isOpenUserMenu,
    handleOpen,
    handleClose,
  };
}
