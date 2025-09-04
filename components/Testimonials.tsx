"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

type Testimonial = {
  name: string
  rating: number
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  { name: "Μαρία Κ.", rating: 5, text: "Το καλύτερο μασάζ που έχω κάνει. Επαγγελματίες και ευγενικοί.", avatar: "/images/avatars/1.svg" },
  { name: "Γιώργος Σ.", rating: 5, text: "Χαλαρωτικό περιβάλλον και εξαιρετικές τεχνικές. Προτείνεται ανεπιφύλακτα!", avatar: "/images/avatars/2.svg" },
  { name: "Ελένη Π.", rating: 4.5, text: "Πολύ καλή εμπειρία, ένιωσα άμεση ανακούφιση. Θα ξαναπάω σίγουρα.", avatar: "/images/avatars/3.svg" },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="testimonials-title" className="container-safe py-16">
      <h2 id="testimonials-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Κριτικές Πελατών</h2>
      <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
        <div className="relative overflow-hidden rounded-xl bg-white p-6 border border-sand min-h-[220px]">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} absolute inset-0 p-6`}>
              <div className="flex items-center gap-4">
                <Image src={t.avatar} alt="Client avatar" width={48} height={48} className="h-12 w-12 rounded-full bg-sand" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-olive-700" aria-label={`${t.rating} από 5 αστέρια`}>{t.rating} <span className="text-olive-700/70">/ 5</span></div>
                </div>
              </div>
              <p className="mt-4 text-olive-800/90">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold">4.9/5</div>
          <div className="text-olive-700">Βαθμολογία στο Google</div>
          <a href="#" className="btn btn-outline mt-4">Δείτε περισσότερα</a>
        </div>
      </div>
    </section>
  )
}
