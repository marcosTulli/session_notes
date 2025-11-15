export const CommonKeys = {
  Notes: 'notes',
  Home: 'home',
  NotFound: 'not-found',
} as const;

export type CommonKeys = (typeof CommonKeys)[keyof typeof CommonKeys];
