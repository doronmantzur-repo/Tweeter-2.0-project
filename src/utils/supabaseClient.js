import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://edkabwyeuayxysjxqphh.supabase.co";

export const SUPABASE_ANON_KEY = "sb_publishable_CXxNOD6XKMxnCkqOuFR06A_FEUY5aHQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
