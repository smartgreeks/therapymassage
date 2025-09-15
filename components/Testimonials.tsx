'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useT } from '@/lib/TProvider'

type Testimonial = {
  name: string
  rating: number
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  { name: "Μαρία Π.", rating: 5, text: "Υπέροχη εμπειρία! Ο χώρος ζεστός και οι τεχνικές εξαιρετικές.", avatar: "/images/avatars/1.svg" },
  { name: "Γιώργος Ν.", rating: 5, text: "Επαγγελματισμός και άψογη εξυπηρέτηση. Ένιωσα πραγματική ανακούφιση.", avatar: "/images/avatars/2.svg" },
  { name: "Ελένη Κ.", rating: 4.5, text: "Πολύ καλό μασάζ, χαλάρωσα πλήρως. Θα ξαναπάω σίγουρα!", avatar: "/images/avatars/3.svg" },
]

export default function Testimonials() {
  const t = useT()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="testimonials-title" className="container-safe py-16">
      <h2 id="testimonials-title" className="section-title font-playfair">{t('testimonials.title')}</h2>
      <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-8 items-stretch">
        <div className="relative overflow-hidden rounded-xl bg-white p-6 border border-sand min-h-[220px] h-full">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} absolute inset-0 p-6`}>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt="Client avatar" width={48} height={48} loading="lazy" decoding="async" className="h-12 w-12 rounded-full bg-sand" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-olive-700" aria-label={`${t.rating} από 5 αστέρια`}>{t.rating} <span className="text-olive-700/70">/ 5</span></div>
                </div>
              </div>
              <p className="mt-4 text-olive-800/90">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="card p-6 flex flex-col h-full">
          <div className="text-3xl font-semibold">4.9/5</div>
          <div className="text-olive-700">{t('testimonials.googleReviews')}</div>
          <a href="https://www.google.com/search?sa=X&sca_esv=48c2a6a335f0c113&tbm=lcl&q=Therapy+Massage+%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjO2sLAwNjO0tLQwM7EwMzC22MDI-IpRIyQjtSixoFLBN7G4ODE9VeHcxHP7zu08t__cbiDefG7d-eZzW8_tPN-0iJVopQC_XSHwcAAAAA&rldimm=3638883619986486038&hl=el-GR&ved=2ahUKEwj708zw_8mPAxU_nCYFHbsxJhYQ9fQKegQIVhAF&biw=3440&bih=1271&dpr=1#lkt=LocalPoiReviews" target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4">{t('testimonials.readMore')}</a>
        </div>
      </div>
    </section>
  )
}
