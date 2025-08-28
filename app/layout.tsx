import type { Metadata } from "next"
import "./globals.css"
import { inter, playfair } from "./fonts"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingChat from "@/components/FloatingChat"
import BookingModalProvider from "@/components/BookingModalProvider"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example-massage-spa.com"),
  title: {
    default: "Therapy Masage",
    template: "%s | Therapy Masage"
  },
  description: "Premium μασάζ και ολιστική θεραπεία σε έναν ήρεμο, πολυτελή χώρο. Κλείσε χαλαρωτικό, αθλητικό μασάζ, ρεφλεξολογία και άλλα.",
  keywords: ["μασάζ", "θεραπεία", "χαλάρωση", "ρεφλεξολογία", "spa", "αθλητικό μασάζ"],
  openGraph: {
    title: "Therapy Masage",
    description: "Premium μασάζ και ολιστική θεραπεία σε έναν ήρεμο, πολυτελή χώρο.",
    url: "/",
    siteName: "Therapy Masage",
    locale: "el_GR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Masage",
    description: "Premium μασάζ και ολιστική θεραπεία σε έναν ήρεμο, πολυτελή χώρο.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Therapy Masage",
    image: ["/images/hero.jpg"],
    url: "https://www.example-massage-spa.com",
    telephone: "+30 210 123 4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tranquility 123",
      addressLocality: "Αθήνα",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-beige text-olive-900 antialiased">
        <BookingModalProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingChat />
        </BookingModalProvider>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
