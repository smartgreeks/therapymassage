"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Ctx = { openBooking: () => void; closeBooking: () => void }
const BookingContext = createContext<Ctx | null>(null)

export function useBookingModal() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider")
  return ctx
}

const services = [
  "Χαλαρωτικό Μασάζ",
  "Αθλητικό Μασάζ",
  "Ρεφλεξολογία",
  "Ανόρθωση Προσώπου",
  "Μασάζ Βαθείας Πίεσης",
  "Αρωματοθεραπεία",
]

export default function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openBooking = () => setOpen(true)
  const closeBooking = () => setOpen(false)

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeBooking() }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const value = useMemo(() => ({ openBooking, closeBooking }), [])

  return (
    <BookingContext.Provider value={value}>
      {children}
      {open && <Modal onClose={closeBooking} />}
    </BookingContext.Provider>
  )
}

function Modal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0], datetime: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus("success")
      setForm({ name: "", email: "", phone: "", service: services[0], datetime: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="relative w-full max-w-lg card bg-white p-6">
        <button onClick={onClose} aria-label="Κλείσιμο" className="absolute right-3 top-3 rounded-md p-1 text-olive-800/80 hover:bg-sand">✕</button>
        <h2 id="booking-modal-title" className="text-2xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Κλείσε Ραντεβού</h2>
        <p className="mt-1 text-olive-800/80">Συμπλήρωσε τα στοιχεία σου και θα επιβεβαιώσουμε άμεσα.</p>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <div>
            <label htmlFor="bm-name" className="block text-sm font-medium">Όνομα</label>
            <input id="bm-name" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="bm-email" className="block text-sm font-medium">Email</label>
              <input type="email" id="bm-email" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="bm-phone" className="block text-sm font-medium">Τηλέφωνο</label>
              <input id="bm-phone" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="bm-service" className="block text-sm font-medium">Υπηρεσία</label>
              <select id="bm-service" className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="bm-datetime" className="block text-sm font-medium">Ημερομηνία & Ώρα</label>
              <input type="datetime-local" id="bm-datetime" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.datetime} onChange={e => setForm({ ...form, datetime: e.target.value })} />
            </div>
          </div>
          <button className="btn btn-primary w-full mt-2" disabled={status === "loading"}>Κλείσε Ραντεβού</button>
          {status === "success" && <p className="text-green-700">Ευχαριστούμε! Παραλάβαμε το αίτημά σας.</p>}
          {status === "error" && <p className="text-red-700">Κάτι πήγε στραβά. Δοκιμάστε ξανά.</p>}
        </form>
      </div>
    </div>
  )
}
