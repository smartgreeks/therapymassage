import { createClient } from "@supabase/supabase-js"

export const supabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  if (!url || !anonKey) {
    throw new Error("Supabase env vars are not set")
  }

  return createClient(url, anonKey)
}

