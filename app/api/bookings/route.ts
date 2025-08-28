import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { headers } from "next/headers"
import { getClientIp, isSameOrigin, rateLimit } from "@/lib/ratelimit"

export async function POST(req: Request) {
  try {
    // Basic CSRF/same-origin check and rate limit
    const h = headers()
    if (!isSameOrigin(h)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }
    const ip = getClientIp(h)
    const rl = rateLimit(`bookings:${ip}`, 5, 60_000)
    if (!rl.ok) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now())/1000)) } })
    }

    const { name, email, phone, service, datetime } = await req.json()

    // Validate inputs
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRe = /^[+\d][\d\s()-]{6,}$/
    const allowedServices = new Set([
      "Χαλαρωτικό Μασάζ",
      "Αθλητικό Μασάζ",
      "Ρεφλεξολογία",
      "Περιποίηση Προσώπου",
      "Βαθύ Ιστών",
      "Αρωματοθεραπεία",
    ])

    if (!name || !email || !phone || !service || !datetime) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    if (String(name).trim().length > 100) return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    if (!emailRe.test(String(email))) return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    if (!phoneRe.test(String(phone))) return NextResponse.json({ error: "Invalid phone" }, { status: 400 })
    if (String(datetime).length > 40) return NextResponse.json({ error: "Invalid datetime" }, { status: 400 })
    // If service list text differs in UI, skip set check but keep length guard
    if (String(service).length > 80) return NextResponse.json({ error: "Invalid service" }, { status: 400 })

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !anonKey) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
    }
    const supabase = createClient(url, anonKey)

    const { error } = await supabase.from("bookings").insert({
      name,
      email,
      phone,
      service,
      datetime
    })
    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Unknown error" }, { status: 500 })
  }
}
