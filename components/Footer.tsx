"use client"
import Link from "next/link"
import Image from "next/image"
import { Facebook } from "lucide-react"
import { useT, useLocale } from "@/lib/TProvider"
import { useState, useEffect } from "react"

export default function Footer() {
  const t = useT()
  const locale = useLocale()
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-olive-900 text-beige mt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-safe py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href={`/${locale}`} aria-label="Therapy Massage home" className="inline-flex items-center gap-2">
            <Image 
              src="/images/logoTherapy.webp" 
              alt="Therapy Massage logo" 
              width={64} 
              height={64} 
              className="h-16 w-16 object-contain"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVbqfE5eMtOEd5OVDW4MZp6LLEqjZJGTKP0mH8GNK8w="
            />
          </Link>
          <p className="mt-4 text-olive-100/80">{t("footer.description")}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">{t("footer.menu")}</h3>
          <ul className="space-y-2 text-olive-100/90">
            <li><Link href={`/${locale}`} className="hover:underline">{t("footer.home")}</Link></li>
            <li><Link href={`/${locale}/services`} className="hover:underline">{t("footer.services")}</Link></li>
            <li><Link href={`/${locale}/about`} className="hover:underline">{t("footer.about")}</Link></li>
            <li><Link href={`/${locale}/blog`} className="hover:underline">{t("footer.blog")}</Link></li>
            <li><Link href={`/${locale}/#contact`} className="hover:underline">{t("footer.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">{t("footer.followUs")}</h3>
          <ul className="space-y-2 text-olive-100/90">
            <li>
              <a href="https://www.facebook.com/therapymassageirinixondrokouki" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:underline inline-flex items-center gap-2">
                <Facebook size={18} />
                <span>{t("footer.facebook")}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-olive-700">
        <div className="container-safe py-4 text-sm text-olive-100/70">© {currentYear || 2025} Therapy Massage. {t("footer.rights")}.</div>
      </div>
    </footer>
  )
}

