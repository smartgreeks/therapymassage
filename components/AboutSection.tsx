import Image from "next/image"

export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="container-safe py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-soft">
          <Image src="/images/hero.webp" alt="Ο χώρος του θεραπευτηρίου" fill className="object-cover object-center" />
        </div>
        <div>
          <h2 id="about-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Σχετικά με εμάς</h2>
          <p className="mt-4 section-subtitle">Πιστεύουμε στο slow living, την ευεξία και τη φροντίδα του σώματος και του νου. Προσφέρουμε εξατομικευμένες θεραπείες με έμφαση στην ποιότητα και την ασφάλεια.</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-olive-800/90">
            <li>• Πιστοποιημένοι θεραπευτές</li>
            <li>• Φιλόξενος, καθαρός χώρος</li>
            <li>• Φυσικά προϊόντα</li>
            <li>• Εξατομικευμένες θεραπείες</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
