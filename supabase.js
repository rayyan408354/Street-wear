const SUPABASE_URL = "https://ezfldwapvcownpozhxww.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_NOoVPD0PlqvsdEhiFh6Spg_ctXTd1ve";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
