import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en']
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale

    // e.g. incoming request is /products
    // The new URL is now /el/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     * - site.webmanifest
     * - sw.js
     * - sw-register.js
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico|site.webmanifest|sw.js|sw-register.js).*)',
  ],
}
