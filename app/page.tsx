import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesGrid from "@/components/ServicesGrid"
import WhyChooseUs from "@/components/WhyChooseUs"
import Offers from "@/components/Offers"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import BlogPreview from "@/components/BlogPreview"
import ContactSection from "@/components/ContactSection"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Offers />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <ContactSection />
    </main>
  )
}
