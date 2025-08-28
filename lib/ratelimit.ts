// Very lightweight in-memory rate limiter per IP and route.
// Note: Works for a single server instance. For multi-instance, plug a shared store.

type Entry = { count: number; resetAt: number }
const store = new Map<string, Entry>()

export function rateLimit(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now()
  const entry = store.get(key)
  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs }
  }
  if (entry.count >= limit) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt }
  }
  entry.count += 1
  return { ok: true, remaining: limit - entry.count, resetAt: entry.resetAt }
}

export function getClientIp(headers: Headers) {
  const xff = headers.get('x-forwarded-for') || ''
  const parts = xff.split(',').map(s => s.trim()).filter(Boolean)
  return parts[0] || headers.get('x-real-ip') || 'unknown'
}

export function isSameOrigin(headers: Headers) {
  const origin = headers.get('origin') || ''
  const referer = headers.get('referer') || ''
  const host = headers.get('host') || ''
  return (origin && origin.endsWith(host)) || (referer && referer.includes(host))
}

