import axios from "axios";
import { supabase, SUPABASE_URL, SUPABASE_ANON_KEY } from "../utils/supabaseClient";

export async function createApiClient() {
  const { data: { session } } = await supabase.auth.getSession();

  const token = session?.access_token;

  return axios.create({
    baseURL: `${SUPABASE_URL}/rest/v1/`,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
}
