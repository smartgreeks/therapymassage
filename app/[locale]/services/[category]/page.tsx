import TelephoneCTA from "@/components/TelephoneCTA"
import ServiceCategorySidebar from "@/components/ServiceCategorySidebar"
import Image from "next/image"
import { Sparkles, BadgeCheck } from "lucide-react"
import CrossCategoryCalculator from "@/components/CrossCategoryCalculator"
import ServiceCardImages from "@/components/ServiceCardImages"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"
import { CATEGORIES_EL, CATEGORIES_EN, Category } from "@/lib/categories"

type Props = {
  params: Promise<{ locale: string; category: string }>
}

export function generateStaticParams() {
  const locales = ['el', 'en']
  const categories = Object.keys(CATEGORIES_EL) // Using Greek keys as they're the same for both languages

  return locales.flatMap(locale =>
    categories.map(category => ({ locale, category }))
  )
}

export const dynamicParams = false

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)
  const categoriesMap = validLocale === 'el' ? CATEGORIES_EL : CATEGORIES_EN
  const data = categoriesMap[category]
  if (!data) return null

  return (
    <TProvider locale={validLocale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <div className="flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-beige" aria-hidden="true" />
              <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>{data.title}</h1>
            </div>
            <p className="mt-2 text-beige/80">{data.intro}</p>
          </div>
        </section>

        <section className="container-safe py-16">
          <div className="max-w-7xl mx-auto">
            {data.hero && (
              <div className="relative h-40 w-full mb-8">
                <Image src={data.hero} alt={data.title} fill className="object-contain object-left" />
              </div>
            )}

            <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
              <div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.sub.map((s, i) => {
                    const imgs = (s.images && s.images.length ? s.images : (s.image ? [s.image] : []))
                    return (
                      <div key={s.title} className="card p-0 overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg animate-fadeInUp" style={{ animationDelay: `${i * 60}ms` }}>
                        <ServiceCardImages images={imgs} alt={s.title} />
                        <div className="p-6">
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            <BadgeCheck className="h-5 w-5 text-olive-700" aria-hidden="true" />
                            <span>{s.title}</span>
                          </h3>
                          {s.desc && <p className="mt-2 text-olive-800/80">{s.desc}</p>}
                          {s.options && s.options.length > 0 ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {s.options.map((opt, j) => (
                                <span key={j} className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-3 py-1 text-sm shadow-sm">
                                  <span className="text-olive-800/90">{opt.duration}</span>
                                  <span className="text-olive-700 font-semibold">{opt.price}</span>
                                </span>
                              ))}
                            </div>
                          ) : (s.duration || s.price) ? (
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-sand bg-white px-3 py-1 text-sm shadow-sm">
                              <span>{s.duration ?? ''}</span>
                              <span className="font-medium">{s.price ?? ''}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <ServiceCategorySidebar
                  currentCategory={category}
                  currentCategoryData={{
                    title: data.title,
                    intro: data.intro,
                    serviceCount: data.sub.length
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <Calculator data={data} locale={validLocale} />
        <section className="container-safe py-16">
          <div className="TelephoneCTA">
            <TelephoneCTA />
          </div>
        </section>
      </main>
    </TProvider>
  )
}


function Calculator({ data, locale }: { data: Category; locale: 'el' | 'en' }) {
  return (
    <section id="calculator" className="container-safe py-12">
      <div className="rounded-xl bg-olive-50 border border-sand p-6">
        <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
          {locale === 'el' ? 'Υπολογισμός πακέτου' : 'Package Calculator'}
        </h2>
        <p className="text-olive-800/80 mt-1">
          {locale === 'el'
            ? 'Συνδυάστε υπηρεσίες από όλες τις κατηγορίες για το ιδανικό πακέτο.'
            : 'Combine services from all categories for the ideal package.'}
        </p>
        <CrossCategoryCalculator currentCategory={getCurrentCategoryKey(data.title, locale)} locale={locale} />
      </div>
    </section>
  )
}

// Helper function to get category key from title
function getCurrentCategoryKey(title: string, locale: 'el' | 'en'): string {
  const mappings = {
    el: {
      'Ευεξία': 'euexia',
      'Ομορφιά': 'omorfia',
      'Εναλλακτικές Θεραπείες': 'enallaktikes-therapeies',
      'Ιδιαίτερες στιγμές': 'idiaiteres-stigmes',
      'Special Events': 'special-events',
      'Gift Cards': 'gift-cards'
    },
    en: {
      'Wellness': 'euexia',
      'Beauty': 'omorfia',
      'Alternative Therapies': 'enallaktikes-therapeies',
      'Special Moments': 'idiaiteres-stigmes',
      'Special Events': 'special-events',
      'Gift Cards': 'gift-cards'
    }
  }

  return Object.entries(mappings[locale]).find(([t]) => t === title)?.[1] || 'euexia'
}
