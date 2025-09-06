"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Αρχική" },
  { href: "/services", label: "Υπηρεσίες" },
  { href: "/about", label: "Σχετικά" },
  { href: "/blog", label: "Blog" },
]

export default function Navbar() {
  const pathname = usePathname()
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
        <Link href="/" className="flex items-center gap-2" aria-label="Μετάβαση στην αρχική">
          <Image src="/images/logoTherapy.png" alt="Therapy Massage logo" width={64} height={64} className="h-16 w-16 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map(i => (
            <Link
              key={i.href}
              href={i.href}
              aria-current={pathname === i.href ? 'page' : undefined}
              data-active={pathname === i.href}
              className={`nav-link text-sm transition-colors ${pathname === i.href ? "text-olive-700" : "text-olive-800/80 hover:text-olive-700"}`}
            >
              {i.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary text-sm">Επικοινωνία</Link>
        </div>

        <button className="md:hidden p-2" aria-label="Άνοιγμα μενού" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sand bg-white animate-slideDown">
          <div className="container-safe py-3 flex flex-col gap-3">
            {navItems.map(i => (
              <Link key={i.href} href={i.href} className="py-2 text-olive-800/90 nav-link" data-active={pathname === i.href} aria-current={pathname === i.href ? 'page' : undefined}>{i.label}</Link>
            ))}
            <Link href="/#contact" className="btn btn-primary w-full">Επικοινωνία</Link>
          </div>
        </div>
      )}
    </header>
  )
}

