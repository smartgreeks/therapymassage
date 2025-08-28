import { Leaf, BadgeCheck, HandCoins } from "lucide-react"

const features = [
  { icon: Leaf, title: "Ολιστική Φροντίδα", desc: "Συνειδητές θεραπείες με βιολογικά έλαια και γαλήνια τελετουργικά." },
  { icon: BadgeCheck, title: "Έμπειρη Ομάδα", desc: "Πιστοποιημένοι θεραπευτές αφοσιωμένοι στην ευεξία σας." },
  { icon: HandCoins, title: "Προσιτή Πολυτέλεια", desc: "Premium εμπειρία σε δίκαιες, διαφανείς τιμές." },
]

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="container-safe py-16">
      <h2 id="why-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Γιατί να μας επιλέξετε</h2>
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
