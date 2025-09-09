import type { Metadata } from 'next'
import '../globals.css'
import { inter, playfair } from '../fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import RouteTransition from '@/components/RouteTransition'
import { getDictionary } from '@/lib/i18n'
import { TProvider } from '@/lib/TProvider'

type Props = {
  children: React.ReactNode
  params: { locale: 'el' | 'en' }
}

export async function generateStaticParams() {
  return [{ locale: 'el' }, { locale: 'en' }]
}

export function generateMetadata({ params }: Props): Metadata {
  const isEl = params.locale === 'el'
  return {
    metadataBase: new URL('https://www.example-massage-spa.com'),
    title: {
      default: 'Therapy Massage',
      template: '%s | Therapy Massage',
    },
    description: isEl
      ? 'Premium υπηρεσίες μασάζ και ευεξίας στην Αθήνα'
      : 'Premium massage and wellness services in Athens',
    openGraph: {
      title: 'Therapy Massage',
      description: isEl
        ? 'Premium υπηρεσίες μασάζ και ευεξίας στην Αθήνα'
        : 'Premium massage and wellness services in Athens',
      url: '/',
      siteName: 'Therapy Massage',
      locale: isEl ? 'el_GR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Therapy Massage',
      description: isEl
        ? 'Premium υπηρεσίες μασάζ και ευεξίας στην Αθήνα'
        : 'Premium massage and wellness services in Athens',
    },
    alternates: {
      languages: {
        en: '/en',
        el: '/el',
      },
    },
  }
}

export default function LocaleLayout({ children, params }: Props) {
  const dict = getDictionary(params.locale)
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Therapy Massage',
    image: ['/images/hero.webp'],
    url: 'https://www.example-massage-spa.com',
    telephone: '+30 210 123 4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tranquility 123',
      addressLocality: 'Athens',
      postalCode: '105 58',
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.9755',
      longitude: '23.7348',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
  }

  return (
    <html lang={params.locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-beige text-olive-900 antialiased">
        <TProvider locale={params.locale} dict={dict}>
          <Navbar />
          <RouteTransition>
            {children}
          </RouteTransition>
          <Footer />
        </TProvider>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
