import { useAppTheme } from '@/hooks';
import { GlobalStyles } from '@mui/material';

export function GlobalProvider() {
  const { theme } = useAppTheme();

  return (
    <GlobalStyles
      styles={{
        '.SnackbarContent-root': {
          fontFamily: `${theme.typography.fontFamily} !important`,
        },
        '.SnackbarItem-message': {
          fontFamily: `${theme.typography.fontFamily} !important`,
        },
        '#notistack-snackbar': {
          fontFamily: `${theme.typography.fontFamily} !important`,
        },
        '.notistack-MuiContent': {
          fontFamily: `${theme.typography.fontFamily} !important`,
        },
        '.notistack-MuiContent-success, .notistack-MuiContent-error, .notistack-MuiContent-warning, .notistack-MuiContent-info, .notistack-MuiContent-default':
          {
            fontFamily: `${theme.typography.fontFamily} !important`,
          },
      }}
    />
  );
}
