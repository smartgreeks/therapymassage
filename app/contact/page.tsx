import ContactSection from "@/components/ContactSection"

export const metadata = { title: "Επικοινωνία" }

export default function ContactPage() {
  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Επικοινωνία</h1>
          <p className="mt-2 text-beige/80">Είμαστε εδώ για να βοηθήσουμε — στείλτε μας ένα μήνυμα.</p>
        </div>
      </section>
      <ContactSection />
    </main>
  )
}


