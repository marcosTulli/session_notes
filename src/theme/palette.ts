import type { PaletteOptions } from '@mui/material/styles';

/**
 * RAW TOKENS – your original colors, untouched.
 * These should stay pure + future-proof.
 */
const tokens = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#94A3B8',

  primary: {
    100: '#C7D2FE',
    200: '#6366F1', // main
    300: '#4F46E5',
  },
  secondary: {
    100: '#BAE6FD',
    200: '#0EA5E9', // main
    300: '#0284C7',
    400: '#E0F7FF',
  },

  success: {
    100: '#34D399',
    200: '#10B981', // main
    300: '#059669',
    400: '#6EE7B7',
  },

  warning: {
    100: '#FBB040',
    200: '#F59E0B', // main
    300: '#D97706',
    400: '#FED7AA',
  },

  error: {
    100: '#F87171',
    200: '#EF4444', // main
    300: '#DC2626',
    400: '#FCA5A5',
  },

  neutral: {
    0: '#FFFFFF',
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
};

/**
 * LIGHT PALETTE
 */
export const lightPalette: PaletteOptions = {
  mode: 'light',

  primary: {
    main: tokens.primary[200],
    light: tokens.primary[100],
    dark: tokens.primary[300],
    contrastText: tokens.white,
  },

  secondary: {
    main: tokens.secondary[200],
    light: tokens.secondary[100],
    dark: tokens.secondary[300],
    contrastText: tokens.black,
  },

  success: {
    main: tokens.success[200],
    light: tokens.success[100],
    dark: tokens.success[300],
    contrastText: tokens.white,
  },

  warning: {
    main: tokens.warning[200],
    light: tokens.warning[100],
    dark: tokens.warning[300],
    contrastText: tokens.black,
  },

  error: {
    main: tokens.error[200],
    light: tokens.error[100],
    dark: tokens.error[300],
    contrastText: tokens.white,
  },

  background: {
    default: tokens.neutral[50],
    paper: tokens.neutral[100],
  },

  text: {
    primary: tokens.neutral[900],
    secondary: tokens.neutral[600],
    disabled: tokens.neutral[300],
  },

  divider: tokens.neutral[200],

  action: {
    active: tokens.neutral[700],
    hover: tokens.neutral[50],
    selected: tokens.neutral[100],
    disabled: tokens.neutral[300],
    disabledBackground: tokens.neutral[100],
  },
};

/**
 * DARK PALETTE
 */
export const darkPalette: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: tokens.primary[200],
    light: tokens.primary[100],
    dark: tokens.primary[300],
    contrastText: tokens.white,
  },

  secondary: {
    main: tokens.secondary[100], // slightly brighter for contrast
    light: tokens.secondary[400],
    dark: tokens.secondary[300],
    contrastText: tokens.black,
  },

  success: {
    main: tokens.success[100],
    light: tokens.success[400],
    dark: tokens.success[300],
    contrastText: tokens.white,
  },

  warning: {
    main: tokens.warning[100],
    light: tokens.warning[400],
    dark: tokens.warning[300],
    contrastText: tokens.black,
  },

  error: {
    main: tokens.error[100],
    light: tokens.error[400],
    dark: tokens.error[300],
    contrastText: tokens.white,
  },

  background: {
    default: tokens.neutral[900],
    paper: tokens.neutral[800],
  },

  text: {
    primary: tokens.neutral[0],
    secondary: tokens.neutral[300],
    disabled: tokens.neutral[600],
  },

  divider: tokens.neutral[700],

  action: {
    active: tokens.neutral[200],
    hover: tokens.neutral[800],
    selected: tokens.neutral[700],
    disabled: tokens.neutral[600],
    disabledBackground: tokens.neutral[800],
  },
};
