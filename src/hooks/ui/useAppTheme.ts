import { createTheme } from '@mui/material';
import { themeStore } from '@store/ui';
import { Themes } from '@models/enums';
import { breakpoints, darkPalette, lightPalette, typography, components } from '@theme/index';

export const useAppTheme = () => {
  const store = themeStore();
  const isDarkTheme = store.selectedTheme === Themes.dark;

  const theme = createTheme({
    palette: isDarkTheme ? darkPalette : lightPalette,
    breakpoints,
    typography,
    components,
  });

  return {
    theme,
    isDarkTheme,
    toggleTheme: store.toggleTheme,
  };
};
