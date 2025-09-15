import ServicesGrid from "@/components/ServicesGrid"
import TelephoneCTA from "@/components/TelephoneCTA"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"

type Props = {
  params: { locale: 'el' | 'en' }
}

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale)
  return {
    title: dict.services?.title || (params.locale === 'el' ? 'Υπηρεσίες' : 'Services')
  }
}

export default function ServicesPage({ params }: Props) {
  const dict = getDictionary(params.locale)
  
  return (
    <TProvider locale={params.locale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.services?.title || (params.locale === 'el' ? 'Υπηρεσίες' : 'Services')}
            </h1>
            <p className="mt-2 text-beige/80">
              {dict.services?.subtitle || (params.locale === 'el' 
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
