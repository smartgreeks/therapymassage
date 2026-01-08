import type { Metadata } from 'next'
import ServicesGrid from "@/components/ServicesGrid"
import TelephoneCTA from "@/components/TelephoneCTA"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)
  return {
    title: dict.services?.title || (validLocale === 'el' ? 'Υπηρεσίες' : 'Services')
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)

  return (
    <TProvider locale={validLocale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.services?.title || (validLocale === 'el' ? 'Υπηρεσίες' : 'Services')}
            </h1>
            <p className="mt-2 text-beige/80">
              {dict.services?.subtitle || (validLocale === 'el'
                ? 'Επιλέξτε ανάμεσα σε χαλαρωτικό, αθλητικό μασάζ, ρεφλεξολογία και άλλες θεραπείες.'
                : 'Choose between relaxing, sports massage, reflexology and other therapies.')}
            </p>
          </div>
        </section>
        <ServicesGrid withTitle={false} />
        <section className="container-safe py-16">
          <TelephoneCTA />
        </section>
      </main>
    </TProvider>
  )
}

