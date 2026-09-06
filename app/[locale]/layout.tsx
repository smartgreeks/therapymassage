import type { Metadata } from 'next'
import '../globals.css'
import { playfair } from '../fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { getDictionary } from '@/lib/i18n'
import { TProvider } from '@/lib/TProvider'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const SITE_URL = 'https://therapy-massage.gr'
const PHONE = '+302104644289'
const STREET_ADDRESS = 'Λεωφ. Φανερωμένης 83'
const LOCALITY = 'Σαλαμίνα'
const POSTAL_CODE = '18900'

export async function generateStaticParams() {
  return [{ locale: 'el' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEl = locale === 'el'
  const validLocale = isEl ? 'el' : 'en'
  const description = isEl
    ? 'Premium υπηρεσίες μασάζ και ευεξίας στη Σαλαμίνα'
    : 'Premium massage and wellness services in Salamina'

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Therapy Massage',
      template: '%s | Therapy Massage',
    },
    description,
    openGraph: {
      title: 'Therapy Massage',
      description,
      siteName: 'Therapy Massage',
      locale: isEl ? 'el_GR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Therapy Massage',
      description,
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)


  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Therapy Massage',
    description: dict.site?.description,
    image: [`${SITE_URL}/images/hero.webp`],
    url: `${SITE_URL}/${validLocale}`,
    telephone: PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET_ADDRESS,
      addressLocality: LOCALITY,
      addressRegion: 'Αττική',
      postalCode: POSTAL_CODE,
      addressCountry: 'GR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '21:00',
      },
    ],
  }

  return (
    <html lang={validLocale} className={playfair.variable}>
      <body className="bg-beige text-olive-900 antialiased">
        <TProvider locale={validLocale} dict={dict}>
          <Navbar />
          {children}
          <Footer />
        </TProvider>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script src="/sw-register.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
