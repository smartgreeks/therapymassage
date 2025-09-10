import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import BusinessCarousel from '@/components/BusinessCarousel'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import Offers from '@/components/Offers'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BlogPreview from '@/components/BlogPreview'
import ContactSection from '@/components/ContactSection'

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

