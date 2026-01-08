import type { Metadata } from 'next'
import ContactSection from "@/components/ContactSection"
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
    title: dict.contact?.title || (validLocale === 'el' ? 'Επικοινωνία' : 'Contact')
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)

  return (
    <TProvider locale={validLocale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <h1 className="text-4xl font-semibold font-playfair">
              {dict.contact?.title || (validLocale === 'el' ? 'Επικοινωνία' : 'Contact')}
            </h1>
            <p className="mt-2 text-beige/80">
              {validLocale === 'el'
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

