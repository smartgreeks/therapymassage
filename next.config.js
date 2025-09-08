/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Mild CSP to prevent framing and mixed content; avoid breaking dev
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'; upgrade-insecure-requests" },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
]

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
