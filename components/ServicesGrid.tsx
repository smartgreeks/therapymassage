"use client"
import ServiceCard from "./ServiceCard"
import { useT, useLocale } from "@/lib/TProvider"

const services = [
  { slug: "euexia", key: "services.euexia" },
  { slug: "omorfia", key: "services.omorfia" },
  { slug: "enallaktikes-therapeies", key: "services.enallaktikes-therapeies" },
  { slug: "idiaiteres-stigmes", key: "services.idiaiteres-stigmes" },
  { slug: "special-events", key: "services.special-events" },
  { slug: "gift-cards", key: "services.gift-cards" },
]

export default function ServicesGrid({ withTitle = true }: { withTitle?: boolean }) {
  const t = useT()
  const locale = useLocale()
  return (
    <section aria-labelledby="services-title" className="container-safe py-16">
      {withTitle && (
        <div className="mb-8">
          <h2 id="services-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>{t("services.title")}</h2>
          <p className="mt-2 section-subtitle">{t("services.subtitle")}</p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s.slug} title={t(`${s.key}.title`)} desc={t(`${s.key}.desc`)} image={`/images/services/${s.slug === 'euexia' ? 'eueksiaImage' : s.slug === 'omorfia' ? 'beautyImage' : s.slug === 'enallaktikes-therapeies' ? 'alterTherapiesImage' : s.slug === 'idiaiteres-stigmes' ? 'specialMomentImage' : s.slug === 'special-events' ? 'specialEventImage' : 'giftCardImage'}.webp`} href={`/${locale}/services/${s.slug}`} />
        ))}
      </div>
    </section>
  )
}