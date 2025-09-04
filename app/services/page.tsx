import ServicesGrid from "@/components/ServicesGrid"
import TelephoneCTA from "@/components/TelephoneCTA"

export const metadata = { title: "Υπηρεσίες" }

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Υπηρεσίες</h1>
          <p className="mt-2 text-beige/80">Επιλέξτε ανάμεσα σε χαλαρωτικό, αθλητικό μασάζ, ρεφλεξολογία και άλλες θεραπείες.</p>
        </div>
      </section>
      <ServicesGrid withTitle={false} />
      <section className="container-safe py-16">
        <TelephoneCTA />
      </section>
    </main>
  )
}
