"use client"
import Image from "next/image"
import Link from "next/link"
import { useT, useLocale } from "@/lib/TProvider"

export default function Hero() {
  const t = useT()
  const locale = useLocale()
  return (
    <section aria-label="Hero" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image src="/images/therapy3.webp" alt={t("hero.alt")} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-olive-900/50 pointer-events-none" />
      <div className="relative container-safe h-full flex items-center">
        <div className="max-w-2xl text-white animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-sand">{t("hero.description")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/services`} className="btn btn-primary">{t("hero.servicesBtn")}</Link>
            <Link href={`/${locale}/#contact`} className="btn btn-outline">{t("hero.contactBtn")}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}