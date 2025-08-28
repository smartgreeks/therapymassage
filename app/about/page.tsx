import AboutSection from "@/components/AboutSection"
import WhyChooseUs from "@/components/WhyChooseUs"

export const metadata = { title: "Σχετικά" }

export default function AboutPage() {
  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Σχετικά με εμάς</h1>
          <p className="mt-2 text-beige/80">Η φιλοσοφία μας: φροντίδα και ηρεμία.</p>
        </div>
      </section>
      <AboutSection />
      <WhyChooseUs />
    </main>
  )
}
