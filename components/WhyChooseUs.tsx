import { Leaf, BadgeCheck, HandCoins } from "lucide-react"

const features = [
  { icon: Leaf, title: "Φυσικές θεραπείες", desc: "Χρησιμοποιούμε ήπιες, φυσικές τεχνικές και προϊόντα." },
  { icon: BadgeCheck, title: "Πιστοποιημένοι επαγγελματίες", desc: "Έμπειρη ομάδα με πιστοποιήσεις και πολυετή εμπειρία." },
  { icon: HandCoins, title: "Διαφανείς τιμές", desc: "Σαφείς χρεώσεις χωρίς κρυφά κόστη." },
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

