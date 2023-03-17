import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tsknfrrgjgoboitmvvfi.supabase.co";
const supabaseKey = "apikey";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
