/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Strong but practical CSP for App Router + Next scripts. Uses self + inline for styles
// and disallows plugins; keeps upgrade-insecure-requests. Trusted Types helps DOM XSS sinks.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  // Next inlines some scripts; strict-dynamic is inert without nonce, but harmless
  "script-src 'self' 'unsafe-inline' 'strict-dynamic'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "connect-src 'self' https:",
  "font-src 'self' data:",
  "object-src 'none'",
  "upgrade-insecure-requests",
  // Trusted Types
  "require-trusted-types-for 'script'",
  "trusted-types nextjs nextjs#bundler"
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
  // COOP/Isolation
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  // HSTS (only meaningful over HTTPS)
  { key: 'Strict-Transport-Security', value: 'max-age=15552000; includeSubDomains' }, // ~180 days
]

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/el',
        permanent: false,
      },
      {
        source: '/services/energeiakes-therapeies',
        destination: '/services/enallaktikes-therapeies',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
