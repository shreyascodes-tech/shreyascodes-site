import { createClient } from "@supabase/supabase-js";
import type { Database } from "./db.types";

const SUPABASE_URL = "https://lkvmfmuajdardakovirx.supabase.co";
// const SUPABASE_ANON_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrdm1mbXVhamRhcmRha292aXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4MzI5MDYsImV4cCI6MTk5MDQwODkwNn0.s2htYhp2S5CXHo-d9rvo3uOgPK7Uh7OP1V29QeOhns0";
const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  {
    global: {
      fetch,
    },
  }
);
