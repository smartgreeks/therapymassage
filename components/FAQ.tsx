"use client"
import { useState } from "react"

const items = [
  { q: "Χρειάζεται ραντεβού;", a: "Συνιστάται να κανονίσετε ραντεβού εκ των προτέρων για να εξασφαλίσετε διαθεσιμότητα την ώρα που επιθυμείτε." },
  { q: "Ποιοι τρόποι πληρωμής γίνονται δεκτοί;", a: "Δεχόμαστε μετρητά και κάρτες (χρεωστικές/πιστωτικές)." },
  { q: "Μπορώ να αλλάξω ή να ακυρώσω;", a: "Ναι, παρακαλούμε ενημερώστε μας τουλάχιστον 24 ώρες νωρίτερα." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section aria-labelledby="faq-title" className="container-safe py-16">
      <h2 id="faq-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Συχνές Ερωτήσεις</h2>
      <div className="mt-6 space-y-3">
        {items.map((it, i) => (
          <div key={it.q} className="card">
            <button className="w-full text-left p-5 flex items-center justify-between" aria-expanded={open===i} onClick={() => setOpen(open===i? null : i)}>
              <span className="font-medium">{it.q}</span>
              <span className="text-olive-700">{open===i? "−" : "+"}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-olive-800/90">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

