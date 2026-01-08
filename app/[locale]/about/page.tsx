import type { Metadata } from 'next'
import AboutSection from "@/components/AboutSection"
import TelephoneCTA from "@/components/TelephoneCTA"
import WhyChooseUs from "@/components/WhyChooseUs"
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
    title: dict.about?.title || (validLocale === 'el' ? 'Σχετικά' : 'About')
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)

  return (
    <TProvider locale={validLocale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.about?.title || (validLocale === 'el' ? 'Σχετικά με εμάς' : 'About Us')}
            </h1>
            <p className="mt-2 text-beige/80">
              {dict.about?.subtitle || (validLocale === 'el'
                ? 'Η φιλοσοφία μας: ευεξία, φροντίδα, ποιότητα υπηρεσιών.'
                : 'Our philosophy: wellness, care, quality services.')}
            </p>
          </div>
        </section>
        <AboutSection />
        <WhyChooseUs />
        <div className="container-safe mt-16">
          <TelephoneCTA />
        </div>
      </main>
    </TProvider>
  )
}

