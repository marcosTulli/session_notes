import { env } from '@/utils';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = env.SUPABASE_PROJECT_URL;
const supabaseKey = env.API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
