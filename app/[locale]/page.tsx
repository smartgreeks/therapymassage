import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import GiftCardPromo from '@/components/GiftCardPromo'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'
import { BusinessCarousel, Testimonials, FAQ } from '@/components/DynamicSections'

// BlogPreview can be dynamically imported without ssr:false
const BlogPreview = dynamic(() => import('@/components/BlogPreview'))

type Props = {
  params: Promise<{ locale: 'el' | 'en' }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params

  return (
    <main>
      <Hero />
      <GiftCardPromo />
      <BusinessCarousel />
      <ServicesGrid />
      <WhyChooseUs />

      <Testimonials />
      <FAQ />
      <BlogPreview locale={locale} />
      <ContactSection />
    </main>
  )
}