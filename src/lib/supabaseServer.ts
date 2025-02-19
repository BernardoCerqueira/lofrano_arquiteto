import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Supabase URL ou chave de serviço não definidas!");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);