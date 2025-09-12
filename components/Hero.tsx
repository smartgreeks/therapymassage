"use client"
import Image from "next/image"
import Link from "next/link"
import { useT, useLocale } from "@/lib/TProvider"

export default function Hero() {
  const t = useT()
  const locale = useLocale()
  return (
    <section aria-label="Hero" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image 
        src="/images/hero.webp" 
        alt={t("hero.alt")} 
        fill 
        priority 
        sizes="100vw" 
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4ICAAAAAwAQCdASoEAAQAAsAJaQCdASoEAAQAAsAJZQAAAP7/2wBDABALCwsMCxEMDAwZEBEUGRkZISIgICAgICAgICAgICAgICAgICAgICAhISEhISEhISEhISEhISEhISEhISL/2wBDAQwMDBEMERAZGRkhIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIv/wAARCABQACgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgMBAQAAAAAAAAAAAAABAgADERIhMXFB/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAbEQACAQUAAAAAAAAAAAAAAAAAAREDEhMhMf/aAAwDAQACEQMRAD8Aq1nqU2P0N1Wq3l2yQ8s2k3H8p7XqzYI9h7q0e3g0XfDM9tX1w5cQ2Z2kW0z1p7b1m8aE7tHq1mS5w2gWm4vJXk8TqN3y2UjM4kFq5kC6QJzJH7V9Zk+8f/2Q=="
      />
      <div className="absolute inset-0 bg-olive-900/50 pointer-events-none" />
      <div className="relative container-safe h-full flex items-center">
        <div className="max-w-2xl text-white animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-sand">{t("hero.description")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link prefetch={false} href={`/${locale}/services`} className="btn btn-primary">{t("hero.servicesBtn")}</Link>
            <Link prefetch={false} href={`/${locale}/#contact`} className="btn btn-outline">{t("hero.contactBtn")}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
