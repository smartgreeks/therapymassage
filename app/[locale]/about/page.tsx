import type { Metadata } from 'next'
import AboutSection from "@/components/AboutSection"
import TelephoneCTA from "@/components/TelephoneCTA"
import WhyChooseUs from "@/components/WhyChooseUs"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"

type Props = {
  params: Promise<{ locale: 'el' | 'en' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.about?.title || (locale === 'el' ? 'Σχετικά' : 'About')
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <TProvider locale={locale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.about?.title || (locale === 'el' ? 'Σχετικά με εμάς' : 'About Us')}
            </h1>
            <p className="mt-2 text-beige/80">
              {dict.about?.subtitle || (locale === 'el'
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

