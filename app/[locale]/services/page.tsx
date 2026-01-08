import type { Metadata } from 'next'
import ServicesGrid from "@/components/ServicesGrid"
import TelephoneCTA from "@/components/TelephoneCTA"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"

type Props = {
  params: Promise<{ locale: 'el' | 'en' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.services?.title || (locale === 'el' ? 'Υπηρεσίες' : 'Services')
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <TProvider locale={locale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.services?.title || (locale === 'el' ? 'Υπηρεσίες' : 'Services')}
            </h1>
            <p className="mt-2 text-beige/80">
              {dict.services?.subtitle || (locale === 'el'
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

