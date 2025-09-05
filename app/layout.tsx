import type { Metadata } from "next"
import "./globals.css"
import { inter, playfair } from "./fonts"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Script from "next/script"
import RouteTransition from "@/components/RouteTransition"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example-massage-spa.com"),
  title: {
    default: "Therapy Massage",
    template: "%s | Therapy Massage"
  },
  description: "Premium υπηρεσίες μασάζ σε ήρεμο χώρο.",
  keywords: ["μασάζ", "ευεξία", "θεραπευτικό μασάζ", "spa", "χαλαρωτικό"],
  openGraph: {
    title: "Therapy Massage",
    description: "Premium υπηρεσίες μασάζ σε ήρεμο χώρο.",
    url: "/",
    siteName: "Therapy Massage",
    locale: "el_GR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Massage",
    description: "Premium υπηρεσίες μασάζ σε ήρεμο χώρο.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Therapy Massage",
    image: ["/images/hero.jpg"],
    url: "https://www.example-massage-spa.com",
    telephone: "+30 210 123 4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tranquility 123",
      addressLocality: "Σαλαμίνα",
      postalCode: "105 58",
      addressCountry: "GR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.9755",
      longitude: "23.7348"
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "10:00",
      closes: "20:00"
    }]
  }

  return (
    <html lang="el" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-beige text-olive-900 antialiased">
        <Navbar />
        <RouteTransition>
          {children}
        </RouteTransition>
        <Footer />
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}

