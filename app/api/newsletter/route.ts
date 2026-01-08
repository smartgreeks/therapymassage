import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { headers } from "next/headers"
import { getClientIp, isSameOrigin, rateLimit } from "@/lib/ratelimit"

export async function POST(req: Request) {
  try {
    const h = await headers()
    if (!isSameOrigin(h)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }
    const ip = getClientIp(h)
    const rl = rateLimit(`newsletter:${ip}`, 10, 60_000)
    if (!rl.ok) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } })
    }

    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 })
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(String(email))) return NextResponse.json({ error: "Invalid email" }, { status: 400 })

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !anonKey) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
    const supabase = createClient(url, anonKey)

    const { error } = await supabase.from("newsletter").insert({ email })
    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Unknown error" }, { status: 500 })
  }
}
