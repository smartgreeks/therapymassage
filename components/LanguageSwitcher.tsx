"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function swapLocaleInPath(pathname: string, to: 'el' | 'en') {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return `/${to}`
  if (parts[0] === 'el' || parts[0] === 'en') {
    parts[0] = to
  } else {
    parts.unshift(to)
  }
  return '/' + parts.join('/')
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const current = pathname.split('/').filter(Boolean)[0]
  const locale = current === 'en' ? 'en' : current === 'el' ? 'el' : 'el'
  const other = locale === 'el' ? 'en' : 'el'

  return (
    <Link prefetch={false} href={swapLocaleInPath(pathname, other)} className="text-sm text-olive-800/80 hover:text-olive-700">
      {other === 'en' ? 'English' : 'Ελληνικά'}
    </Link>
  )
}

