"use client"
import { useState } from "react"

const items = [
  { q: "Τι πρέπει να φοράω;", a: "Φορέστε άνετα ρούχα. Στα μασάζ με έλαια, πετσέτες και κάλυψη εξασφαλίζουν ιδιωτικότητα και άνεση." },
  { q: "Υπάρχει πολιτική ακύρωσης;", a: "Ναι, ενημερώστε μας τουλάχιστον 24 ώρες πριν για αλλαγή ή ακύρωση." },
  { q: "Είναι κατάλληλο για ευαίσθητο δέρμα;", a: "Βεβαίως. Χρησιμοποιούμε υποαλλεργικά, βιολογικά έλαια. Πείτε μας για τυχόν ευαισθησίες." },
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
