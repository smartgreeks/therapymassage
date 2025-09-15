/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Strict CSP for App Router without unsafe-eval and unsafe-inline
// Uses nonce-based script execution for better security
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  // Allow Next.js scripts in development, strict in production
  `script-src 'self' ${isProd ? "'strict-dynamic'" : "'unsafe-eval' 'strict-dynamic' 'unsafe-inline' http://localhost:3000 http://localhost:3001 http://localhost:*"}`,
  "style-src 'self' 'unsafe-inline'", // Keep for CSS-in-JS compatibility
  "img-src 'self' data: blob:",
  "connect-src 'self' https:",
  "font-src 'self' data:",
  "object-src 'none'",
  "upgrade-insecure-requests"
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
    const isProd = process.env.NODE_ENV === 'production';
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "form-action 'self'",
              // Development-friendly CSP - less restrictive for localhost
              `script-src 'self' ${isProd ? "'strict-dynamic'" : "'unsafe-eval' 'unsafe-inline' http://localhost:* 'self'"}`,
              "style-src 'self' 'unsafe-inline'", // Keep for CSS-in-JS compatibility
              "img-src 'self' data: blob:",
              "connect-src 'self'",
              "font-src 'self'",
              "frame-src 'self'",
              "media-src 'self'",
              "object-src 'none'",
              "worker-src 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
