/**
 * SUPABASE CLIENT CONFIGURATION
 *
 * This file initializes and exports the Supabase client instance.
 * All API requests to the portfolio database go through this client.
 *
 * ENVIRONMENT VARIABLES:
 *  - VITE_SUPABASE_URL: Your Supabase project URL (from .env)
 *  - VITE_SUPABASE_ANON_KEY: Your public anonymous key (safe for frontend)
 *
 * EDITING GUIDE:
 *  - DO NOT modify this file unless changing Supabase authentication settings
 *  - DO NOT commit secrets or API keys to git
 *  - Store secrets in .env.local (git-ignored) or environment variables
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file'
  );
}

/**
 * Supabase client instance
 * Used for all database queries throughout the app
 * Automatically handles:
 *  - Session management (authentication state)
 *  - Real-time subscriptions
 *  - Row-level security (RLS) via authenticated user
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
