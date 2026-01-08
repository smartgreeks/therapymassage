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
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'

  return (
    <main>
      <Hero />
      <GiftCardPromo />
      <BusinessCarousel />
      <ServicesGrid />
      <WhyChooseUs />

      <Testimonials />
      <FAQ />
      <BlogPreview locale={validLocale} />
      <ContactSection />
    </main>
  )
}