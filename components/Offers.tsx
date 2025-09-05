"use client"
import { useEffect, useState } from "react"

function getRemaining(end: Date) {
  const diff = +end - +new Date()
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}

export default function Offers() {
  const [time, setTime] = useState(getRemaining(new Date(new Date().getFullYear(), new Date().getMonth(), 28, 23, 59)))

  useEffect(() => {
    const end = new Date(new Date().getFullYear(), new Date().getMonth(), 28, 23, 59)
    const id = setInterval(() => setTime(getRemaining(end)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="container-safe py-12">
      <div className="rounded-xl bg-olive-800 text-beige p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-soft">
        <div>
          <h3 className="text-2xl font-semibold">Προσφορά: -30% σε πακέτα ευεξίας</h3>
          <p className="mt-2 text-beige/90">Ισχύει μέχρι το τέλος του μήνα. Συνδύασε υπηρεσίες και κέρδισε επιπλέον προνόμια. Κλείσε τώρα το ραντεβού σου!</p>
        </div>
        <div aria-label="Μετρητής αντίστροφης μέτρησης" className="grid grid-cols-4 gap-3 text-center">
          {([
            ["Ημέρες", time.d],
            ["Ώρες", time.h],
            ["Λεπτά", time.m],
            ["Δευτ.", time.s]
          ] as const).map(([label, val]) => (
            <div key={label} className="bg-olive-700 rounded-lg px-4 py-3">
              <div className="text-2xl font-semibold">{String(val).padStart(2, '0')}</div>
              <div className="text-sm text-beige/80">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}