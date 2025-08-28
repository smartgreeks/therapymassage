"use client"
import { useState, useEffect } from "react"

type Testimonial = {
  name: string
  rating: number
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  { name: "Μαρία Π.", rating: 5, text: "Το πιο χαλαρωτικό μασάζ που έχω κάνει. Υπέροχη ατμόσφαιρα και φροντίδα.", avatar: "/images/avatars/1.svg" },
  { name: "Νίκος Κ.", rating: 5, text: "Το αθλητικό μασάζ ήταν ιδανικό για αποκατάσταση μετά το τρέξιμο. Το προτείνω!", avatar: "/images/avatars/2.svg" },
  { name: "Ελένη Τ.", rating: 4.5, text: "Λάτρεψα την αρωματοθεραπεία και την ήπια προσέγγιση. Ένιωσα αναζωογονημένη.", avatar: "/images/avatars/3.svg" },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="testimonials-title" className="container-safe py-16">
      <h2 id="testimonials-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Τι λένε οι πελάτες μας</h2>
      <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
        <div className="relative overflow-hidden rounded-xl bg-white p-6 border border-sand min-h-[220px]">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} absolute inset-0 p-6`}>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt="Client avatar" className="h-12 w-12 rounded-full bg-sand" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div aria-label={`${t.rating} από 5 αστέρια`} className="text-olive-700">{"★".repeat(Math.floor(t.rating))}{t.rating % 1 ? "½" : ""} <span className="text-olive-700/70">/ 5</span></div>
                </div>
              </div>
              <p className="mt-4 text-olive-800/90">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold">4.9★</div>
          <div className="text-olive-700">Μέση βαθμολογία Google</div>
          <a href="#" className="btn btn-outline mt-4">Διαβάστε κριτικές</a>
        </div>
      </div>
    </section>
  )
}
