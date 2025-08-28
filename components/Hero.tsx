"use client"
import Image from "next/image"
import Link from "next/link"
import { useBookingModal } from "./BookingModalProvider"

export default function Hero() {
  const { openBooking } = useBookingModal()
  return (
    <section aria-label="Hero" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image src="/images/therapy3.webp" alt="Εικόνα ήρωα μασάζ" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-olive-900/50 pointer-events-none" />
      <div className="relative container-safe h-full flex items-center">
        <div className="max-w-2xl text-white animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Therapy Masage</h1>
          <p className="mt-4 text-lg text-sand">Premium θεραπείες μασάζ για χαλάρωση και ευεξία.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={openBooking} className="btn btn-primary" aria-haspopup="dialog">Κλείσε ραντεβού</button>
            <Link href="/services" className="btn btn-outline bg-white/10 text-white border-white/50 hover:bg-white hover:text-olive-900">Υπηρεσίες</Link>
          </div>
        </div>
      </div>
    </section>
  )
}


