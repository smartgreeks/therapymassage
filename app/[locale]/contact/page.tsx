import ContactSection from "@/components/ContactSection"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"

type Props = {
  params: { locale: 'el' | 'en' }
}

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale)
  return {
    title: dict.contact?.title || (params.locale === 'el' ? 'Επικοινωνία' : 'Contact')
  }
}

export default function ContactPage({ params }: Props) {
  const dict = getDictionary(params.locale)
  
  return (
    <TProvider locale={params.locale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.contact?.title || (params.locale === 'el' ? 'Επικοινωνία' : 'Contact')}
            </h1>
            <p className="mt-2 text-beige/80">
              {params.locale === 'el' 
                ? 'Είμαστε εδώ για να βοηθήσουμε — στείλτε μας ένα μήνυμα.' 
                : 'We are here to help — send us a message.'}
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
    </TProvider>
  )
}
