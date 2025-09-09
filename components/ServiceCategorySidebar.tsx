"use client"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Gift, Calendar } from 'lucide-react'
import { useT, useLocale } from '@/lib/TProvider'

interface ServiceCategory {
  slug: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  serviceCount: number
}

interface ServiceCategorySidebarProps {
  currentCategory: string
  currentCategoryData: {
    title: string
    intro: string
    serviceCount: number
  }
}

export default function ServiceCategorySidebar({ currentCategory, currentCategoryData }: ServiceCategorySidebarProps) {
  const t = useT()
  const locale = useLocale()

  // Define all categories with their metadata
  const allCategories: ServiceCategory[] = [
    {
      slug: 'euexia',
      title: locale === 'el' ? 'Ευεξία' : 'Wellness',
      description: locale === 'el' 
        ? 'Χαλάρωση και ισορροπία με κλασικές τεχνικές μασάζ'
        : 'Relaxation and balance with classic massage techniques',
      icon: <Sparkles className="h-5 w-5" />,
      image: '/images/services/eueksiaImage.webp',
      serviceCount: 14
    },
    {
      slug: 'omorfia',
      title: locale === 'el' ? 'Ομορφιά' : 'Beauty',
      description: locale === 'el'
        ? 'Φυσική ακτινοβολία και περιποίηση προσώπου/σώματος'
        : 'Natural radiance and face/body care treatments',
      icon: <Sparkles className="h-5 w-5" />,
      image: '/images/services/beautyImage.webp',
      serviceCount: 7
    },
    {
      slug: 'enallaktikes-therapeies',
      title: locale === 'el' ? 'Εναλλακτικές Θεραπείες' : 'Alternative Therapies',
      description: locale === 'el'
        ? 'Ενεργειακά μασάζ, αγιουρβέδα και ρεφλεξολογία'
        : 'Energy massage, Ayurveda and reflexology',
      icon: <Calendar className="h-5 w-5" />,
      image: '/images/services/alterTherapiesImage.webp',
      serviceCount: 4
    },
    {
      slug: 'idiaiteres-stigmes',
      title: locale === 'el' ? 'Ιδιαίτερες Στιγμές' : 'Special Moments',
      description: locale === 'el'
        ? 'Πακέτα για ζευγάρια και ειδικές περιστάσεις'
        : 'Packages for couples and special occasions',
      icon: <Users className="h-5 w-5" />,
      image: '/images/services/specialMomentImage.webp',
      serviceCount: 1
    },
    {
      slug: 'special-events',
      title: 'Special Events',
      description: locale === 'el'
        ? 'Εταιρικά events και ομαδικές υπηρεσίες'
        : 'Corporate events and group services',
      icon: <Calendar className="h-5 w-5" />,
      image: '/images/services/specialEventImage.webp',
      serviceCount: 1
    },
    {
      slug: 'gift-cards',
      title: 'Gift Cards',
      description: locale === 'el'
        ? 'Χάρισε ευεξία στους αγαπημένους σου'
        : 'Give wellness to your loved ones',
      icon: <Gift className="h-5 w-5" />,
      image: '/images/services/giftCardImage.webp',
      serviceCount: 1
    }
  ]

  // Filter out current category to show only related ones
  const relatedCategories = allCategories.filter(cat => cat.slug !== currentCategory)

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-max">
      {/* Current Category Summary */}
      <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-6">
        <h3 className="font-semibold text-lg mb-3 text-olive-900 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-olive-700" />
          {currentCategoryData.title}
        </h3>
        <div className="space-y-3">
          <div className="text-sm text-olive-700 bg-olive-50 px-3 py-1 rounded-full inline-block">
            {currentCategoryData.serviceCount} {locale === 'el' ? 'υπηρεσίες' : 'services'}
          </div>
          <p className="text-olive-800/80 text-sm leading-relaxed">
            {currentCategoryData.intro}
          </p>
        </div>
      </div>

      {/* Related Categories */}
      <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-6">
        <h3 className="font-semibold text-lg mb-4 text-olive-900">
          {locale === 'el' ? 'Άλλες Κατηγορίες' : 'Other Categories'}
        </h3>
        <div className="space-y-4">
          {relatedCategories.map((category) => (
            <article key={category.slug} className="group">
              <Link href={`/${locale}/services/${category.slug}`} className="block">
                <div className="flex gap-3 p-3 rounded-lg hover:bg-olive-50 transition-colors">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="48px"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-olive-700">{category.icon}</span>
                      <h4 className="font-medium text-olive-900 text-sm group-hover:text-olive-700 transition-colors">
                        {category.title}
                      </h4>
                    </div>
                    <p className="text-xs text-olive-600 leading-relaxed line-clamp-2 mb-1">
                      {category.description}
                    </p>
                    <div className="text-xs text-olive-700 bg-olive-50 px-2 py-0.5 rounded-full inline-block">
                      {category.serviceCount} {locale === 'el' ? 'υπηρεσίες' : 'services'}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-olive-400 group-hover:text-olive-700 group-hover:translate-x-1 transition-all duration-200 self-center" />
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {/* View All Services Link */}
        <div className="mt-6 pt-4 border-t border-sand/60">
          <Link 
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors group"
          >
            {locale === 'el' ? 'Δείτε όλες τις κατηγορίες' : 'View all categories'}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Quick Calculator Link */}
      <div className="rounded-xl border border-olive-200 bg-gradient-to-br from-olive-50 to-olive-100 p-6">
        <h3 className="font-semibold text-lg mb-3 text-olive-900 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          {locale === 'el' ? 'Υπολογιστής Πακέτου' : 'Package Calculator'}
        </h3>
        <p className="text-olive-800 text-sm mb-4">
          {locale === 'el' 
            ? 'Συνδυάστε υπηρεσίες από διαφορετικές κατηγορίες και εξοικονομήστε.'
            : 'Combine services from different categories and save money.'
          }
        </p>
        <a 
          href="#calculator"
          className="inline-flex items-center gap-2 bg-olive-900 text-beige px-4 py-2 rounded-lg text-sm font-medium hover:bg-olive-800 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {locale === 'el' ? 'Υπολογισμός' : 'Calculate'}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Contact CTA */}
      <div className="rounded-xl border border-olive-200 bg-gradient-to-br from-olive-50 to-olive-100 p-6">
        <h3 className="font-semibold text-lg mb-3 text-olive-900">
          {locale === 'el' ? 'Χρειάζεστε βοήθεια;' : 'Need help choosing?'}
        </h3>
        <p className="text-olive-800 text-sm mb-4">
          {locale === 'el' 
            ? 'Επικοινωνήστε μαζί μας για προσωποποιημένες συστάσεις.'
            : 'Contact us for personalized recommendations.'
          }
        </p>
        <Link 
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-olive-900 text-beige px-4 py-2 rounded-lg text-sm font-medium hover:bg-olive-800 transition-colors"
        >
          {locale === 'el' ? 'Επικοινωνία' : 'Contact Us'}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  )
}
