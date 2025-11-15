import React from 'react';
import { UserInfoCard } from './UserInfoCard';
import { Divider } from '@mui/material';
import ThemeSwitch from '../../ThemeSwitch';

const UserMenuOptions: React.FC = () => {
  return (
    <>
      <UserInfoCard />
      <Divider sx={{ my: 1 }} />
      <ThemeSwitch />
    </>
  );
};

export default UserMenuOptions;
