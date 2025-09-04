"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image src="/images/therapy3.webp" alt="Χαλαρωτικό μασάζ" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-olive-900/50 pointer-events-none" />
      <div className="relative container-safe h-full flex items-center">
        <div className="max-w-2xl text-white animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Therapy Massage</h1>
          <p className="mt-4 text-lg text-sand">Premium μασάζ και ολιστική θεραπεία σε ήρεμο, προσεγμένο χώρο.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services" className="btn btn-primary">Υπηρεσίες</Link>
            <Link href="/#contact" className="btn btn-outline">Επικοινωνία</Link>
          </div>
        </div>
      </div>
    </section>
  )
}



