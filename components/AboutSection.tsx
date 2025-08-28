import Image from "next/image"

export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="container-safe py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-soft">
          <Image src="/images/hero.jpg" alt="Therapist performing relaxing massage" fill className="object-cover object-center" />
        </div>
        <div>
          <h2 id="about-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Καταφύγιο για Σώμα και Νου</h2>
          <p className="mt-4 section-subtitle">Η φιλοσοφία μας αγκαλιάζει το slow living, την προσεκτική αφή και την εξατομικευμένη φροντίδα. Κάθε συνεδρία αποσκοπεί στην επαναφορά της ισορροπίας, τη μείωση του στρες και την αναζωογόνηση της φυσικής σας ζωντάνιας.</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-olive-800/90">
            <li>• Πιστοποιημένοι θεραπευτές</li>
            <li>• Βιολογικά έλαια</li>
            <li>• Γαλήνιοι χώροι</li>
            <li>• Εξατομικευμένες θεραπείες</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
