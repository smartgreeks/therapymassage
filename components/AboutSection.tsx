"use client"
import Image from "next/image"
import { useT } from "@/lib/TProvider"

export default function AboutSection() {
  const t = useT()
  return (
    <section aria-labelledby="about-title" className="container-safe py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-soft">
          <Image src="/images/hero.webp" alt={t("about.alt")} fill className="object-cover object-center" />
        </div>
        <div>
          <h2 id="about-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>{t("about.title")}</h2>
          <p className="mt-4 section-subtitle">{t("about.subtitle")}</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-olive-800/90">
            <li>• {t("about.features.0")}</li>
            <li>• {t("about.features.1")}</li>
            <li>• {t("about.features.2")}</li>
            <li>• {t("about.features.3")}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}