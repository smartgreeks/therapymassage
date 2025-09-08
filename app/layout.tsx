import type { Metadata } from "next"
import "./globals.css"
import { inter, playfair } from "./fonts"

export const metadata: Metadata = {
  title: "Therapy Massage",
  description: "Premium massage and wellness services"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-beige text-olive-900 antialiased">
        {children}
      </body>
    </html>
  )
}

