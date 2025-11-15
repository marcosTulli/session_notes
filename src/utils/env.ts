export const env = {
  API_KEY: import.meta.env.VITE_API_KEY,
  SUPABASE_PROJECT_URL: import.meta.env.VITE_SUPABASE_PROJECT_URL,
} as const;

export const envJSON = JSON.stringify(env, null, 2);
