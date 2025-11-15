import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { DatePicker } from '@mui/x-date-pickers';
import { useRangeDatePicker } from './useDatePicker';

const RangeDatePicker: React.FC = () => {
  const { date, setDateRange } = useRangeDatePicker();

  const handleClear = () => {
    setDateRange(null, null);
  };

  const hasDates = Boolean(date.from || date.to);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: 1,
      }}
    >
      <DatePicker
        label={'From'}
        value={date.from}
        onChange={(newValue) => setDateRange(newValue as Date | null, date.to)}
        slotProps={{
          textField: { size: 'small', sx: { minWidth: 140, width: '100%' } },
        }}
      />
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          px: 0.5,
        }}
      >
        —
      </Box>
      <DatePicker
        label={'To'}
        value={date.to}
        minDate={date.from || undefined}
        onChange={(newValue) => setDateRange(date.from, newValue as Date | null)}
        slotProps={{
          textField: { size: 'small', sx: { minWidth: 140, width: '100%' } },
        }}
      />

      {hasDates && (
        <Tooltip title={'Clear'}>
          <IconButton
            size="small"
            onClick={handleClear}
            sx={{
              alignSelf: { xs: 'flex-start', sm: 'center' },
              ml: { sm: 1 },
            }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default RangeDatePicker;
