import type React from 'react';
import { Box, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '@hooks/ui';
import { LabelSmall } from '../Text/components';

interface SidebarItemProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  isOpen: boolean;
}

export const NavigationItem: React.FC<SidebarItemProps> = ({ text, href, icon, isOpen }) => {
  const { handleNavigationClick } = useSidebar();
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <ListItem disablePadding sx={{ color: 'text.primary' }}>
      <ListItemButton
        component={Link}
        to={href}
        onClick={handleNavigationClick}
        selected={isActive}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isOpen ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
        </ListItemIcon>
        <LabelSmall sx={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.2s' }}>{text}</LabelSmall>
      </ListItemButton>
    </ListItem>
  );
};
