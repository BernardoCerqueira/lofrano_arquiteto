import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL ou chave anônima não definidas!")
  throw new Error("Supabase URL ou chave anônima não definidas!")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)