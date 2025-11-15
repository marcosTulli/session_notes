export const env = {
  API_KEY: import.meta.env.VITE_API_KEY,
  SUPABASE_PROJECT_URL: import.meta.env.VITE_SUPABASE_PROJECT_URL,
  SUPABASE_USER: import.meta.env.VITE_SUPABASE_USER,
  SUPABASE_PASSWORD: import.meta.env.VITE_PASSWORD,
} as const;

export const envJSON = JSON.stringify(env, null, 2);
