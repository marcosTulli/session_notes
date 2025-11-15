import React from 'react';
import { MenuItem, ListItemIcon } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppTheme } from '@/hooks';
import { LabelMedium } from '../Text/components';

const ThemeSwitch: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useAppTheme();
  const Icon = isDarkTheme ? LightModeIcon : DarkModeIcon;
  const label = isDarkTheme ? 'Light' : 'Dark';

  return (
    <MenuItem onClick={toggleTheme}>
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
      <LabelMedium>{label}</LabelMedium>
    </MenuItem>
  );
};

export default ThemeSwitch;
