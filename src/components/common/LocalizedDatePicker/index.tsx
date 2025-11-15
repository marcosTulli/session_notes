import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface LocalizedDatePickerProviderProps {
  children: React.ReactNode;
  adapter?: 'dayjs' | 'date-fns';
}

export const LocalizedDatePickerProvider: React.FC<LocalizedDatePickerProviderProps> = ({
  children,
  adapter = 'dayjs',
}) => {
  if (adapter === 'date-fns') {
    return <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>;
  }

  return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
};
