'use client'

import dynamic from 'next/dynamic'

// Include content and its layout in the initial HTML, while splitting client code.
const BusinessCarousel = dynamic(() => import('@/components/BusinessCarousel'))
const Offers = dynamic(() => import('@/components/Offers'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const FAQ = dynamic(() => import('@/components/FAQ'))

export { BusinessCarousel, Offers, Testimonials, FAQ }
