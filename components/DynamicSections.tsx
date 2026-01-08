'use client'

import dynamic from 'next/dynamic'

// Defer below-the-fold, client-heavy sections
const BusinessCarousel = dynamic(() => import('@/components/BusinessCarousel'), { ssr: false })
const Offers = dynamic(() => import('@/components/Offers'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })

export { BusinessCarousel, Offers, Testimonials, FAQ }
