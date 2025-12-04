'use client'

import { Gift, Snowflake, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useT } from '@/lib/TProvider'

export default function GiftCardPromo() {
  const t = useT()
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7f1d1d] to-[#991b1b] text-beige py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Snowflake className="absolute top-10 left-10 w-12 h-12 text-white/10 animate-pulse" />
        <Snowflake className="absolute top-20 right-20 w-8 h-8 text-white/10 animate-bounce duration-[3000ms]" />
        <Star className="absolute bottom-10 left-1/4 w-6 h-6 text-yellow-200/20" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-safe relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-amber-100 backdrop-blur-sm">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Christmas Special</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif italic leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Δώστε το Δώρο της <br/>
              <span className="text-amber-200">Απόλυτης Χαλάρωσης</span>
            </h2>
            
            <p className="text-lg text-beige/90 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Φέτος τις γιορτές, χαρίστε στους αγαπημένους σας στιγμές ευεξίας και αναζωογόνησης. 
              Οι νέες μας <strong>e-Gift Cards</strong> είναι το ιδανικό δώρο για να δείξετε την αγάπη σας.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-amber-100 text-[#7f1d1d] px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Gift className="w-5 h-5" />
                Απόκτηση Gift Card
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium border border-amber-100/30 hover:bg-white/10 transition-all"
              >
                Δείτε τις Υπηρεσίες
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[1.6/1] bg-[#FDFBF7] rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 p-8 flex flex-col justify-between border-4 border-amber-100/20">
              {/* Mockup of the Gift Card */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#7f1d1d]"></div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif italic text-[#7f1d1d]" style={{ fontFamily: 'var(--font-playfair)' }}>Gift Card</h3>
                  <p className="text-xs text-[#991b1b] uppercase tracking-widest mt-1">Therapy Massage</p>
                </div>
                <Gift className="w-8 h-8 text-[#7f1d1d]" />
              </div>

              <div className="text-center my-4">
                <span className="text-4xl font-serif text-[#7f1d1d]">50€</span>
                <p className="text-xs text-stone-400 uppercase mt-1">Voucher Value</p>
              </div>

              <div className="flex justify-between items-end border-t border-stone-100 pt-4">
                <div className="text-xs text-stone-400">
                  <p>To: Agapimena Prosopa</p>
                  <p>From: Esena</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#7f1d1d]/10 flex items-center justify-center">
                  <Snowflake className="w-4 h-4 text-[#7f1d1d]" />
                </div>
              </div>
            </div>

            {/* Floating Elements behind */}
            <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
