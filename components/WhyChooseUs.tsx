import { Leaf, BadgeCheck, HandCoins } from "lucide-react"

const features = [
  { icon: Leaf, title: "Φυσική προσέγγιση, ποιοτικές τεχνικές", desc: "Χρησιμοποιούμε ασφαλείς, αποτελεσματικές τεχνικές και δίνουμε έμφαση στην άνεση και την ποιότητα." },
  { icon: BadgeCheck, title: "Πιστοποιημένοι θεραπευτές με εμπειρία", desc: "Συνεχής εκπαίδευση, επαγγελματισμός και σεβασμός στις ανάγκες του σώματος." },
  { icon: HandCoins, title: "Δίκαιες τιμές, ξεκάθαρα πακέτα", desc: "Ευέλικτες επιλογές, δώρα και προσφορές για τακτικούς πελάτες." },
]

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="container-safe py-16">
      <h2 id="why-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Γιατί εμάς</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(F => (
          <div key={F.title} className="card p-6">
            <F.icon className="h-8 w-8 text-olive-700" aria-hidden="true" />
            <h3 className="mt-4 font-semibold text-lg">{F.title}</h3>
            <p className="mt-2 text-olive-800/80">{F.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}