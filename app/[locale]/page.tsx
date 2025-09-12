import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'

// Defer below-the-fold, client-heavy sections
const BusinessCarousel = dynamic(() => import('@/components/BusinessCarousel'), { ssr: false })
const Offers = dynamic(() => import('@/components/Offers'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })
const BlogPreview = dynamic(() => import('@/components/BlogPreview'))

type Props = {
  params: { locale: 'el' | 'en' }
}

export default function HomePage({ params }: Props) {
  return (
    <main>
      <Hero />
      <AboutSection />
      <BusinessCarousel />
      <ServicesGrid />
      <WhyChooseUs />
      <Offers />
      <Testimonials />
      <FAQ />
      <BlogPreview locale={params.locale} />
      <ContactSection />
    </main>
  )
}
