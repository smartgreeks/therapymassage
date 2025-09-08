"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"
import { useT, useLocale } from "@/lib/TProvider"

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/about", key: "nav.about" },
  { href: "/blog", key: "nav.blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const t = useT()
  const locale = useLocale()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled ? "bg-white/90 backdrop-blur border-b border-sand" : "bg-beige/90"}`}>
      <nav className="container-safe flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" aria-label="ÎœÎµÏ„Î¬Î²Î±ÏƒÎ· ÏƒÏ„Î·Î½ Î±ÏÏ‡Î¹ÎºÎ®">
          <Image src="/images/logoTherapy.png" alt="Therapy Massage logo" width={64} height={64} className="h-16 w-16 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map(i => (
            <Link
              key={i.href}
              href={i.href === '/' ? `/${locale}` : `/${locale}${i.href}`}
              aria-current={pathname === (i.href === '/' ? `/${locale}` : `/${locale}${i.href}`) ? 'page' : undefined}
              data-active={pathname === (i.href === '/' ? `/${locale}` : `/${locale}${i.href}`)}
              className={`nav-link text-sm transition-colors ${pathname === (i.href === '/' ? `/${locale}` : `/${locale}${i.href}`) ? "text-olive-700" : "text-olive-800/80 hover:text-olive-700"}`}
            >
              {t(i.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link href={`/${locale}/#contact`} className="btn btn-primary text-sm">{t("nav.contactCta")}</Link>
        </div>

        <button className="md:hidden p-2" aria-label="Î†Î½Î¿Î¹Î³Î¼Î± Î¼ÎµÎ½Î¿Ï" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sand bg-white animate-slideDown">
          <div className="container-safe py-3 flex flex-col gap-3">
            {navItems.map(i => (
              <Link key={i.href} href={i.href === '/' ? `/${locale}` : `/${locale}${i.href}`} className="py-2 text-olive-800/90 nav-link" data-active={pathname === (i.href === '/' ? `/${locale}` : `/${locale}${i.href}`)} aria-current={pathname === (i.href === '/' ? `/${locale}` : `/${locale}${i.href}`) ? 'page' : undefined}>{t(i.key)}</Link>
            ))}
            <div className="pt-2 border-t border-sand mt-2">
              <LanguageSwitcher />
            </div>
            <Link href={`/${locale}/#contact`} className="btn btn-primary w-full">{t("nav.contactCta")}</Link>
          </div>
        </div>
      )}
    </header>
  )
}








