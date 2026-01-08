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
    const rl = rateLimit(`contact:${ip}`, 5, 60_000)
    if (!rl.ok) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } })
    }

    const { name, email, message, phone, website } = await req.json()
    // Honeypot (bots)
    if (website) return NextResponse.json({ success: true })

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRe = /^[+\d][\d\s()-]{6,}$/
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    if (String(name).trim().length > 100) return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    if (!emailRe.test(String(email))) return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    if (phone && !phoneRe.test(String(phone))) return NextResponse.json({ error: "Invalid phone" }, { status: 400 })
    if (String(message).trim().length < 5 || String(message).length > 2000) return NextResponse.json({ error: "Invalid message" }, { status: 400 })

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (url && anonKey) {
      const supabase = createClient(url, anonKey)
      const { error } = await supabase.from("contacts").insert({ name, email, phone: phone ?? null, message })
      if (error) throw error
    }
    // Even if supabase is not configured, we return success to keep UX smooth.
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Unknown error" }, { status: 500 })
  }
}

