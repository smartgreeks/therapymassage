"use client"
import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", website: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus("success")
      setForm({ name: "", email: "", phone: "", message: "", website: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="font-semibold text-lg">Επικοινωνία</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium">Όνομα</label>
          <input id="cf-name" name="name" required autoComplete="name" className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium">Email</label>
          <input id="cf-email" type="email" name="email" required autoComplete="email" className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium">Τηλέφωνο (προαιρετικό)</label>
        <input id="cf-phone" name="phone" autoComplete="tel" className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      </div>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium">Μήνυμα</label>
        <textarea id="cf-message" name="message" required rows={5} className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>
      <button className="btn btn-primary" disabled={status === "loading"}>{status === "loading" ? "Αποστολή…" : "Αποστολή"}</button>
      {status === "success" && <p className="text-green-700">Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.</p>}
      {status === "error" && <p className="text-red-700">Κάτι πήγε στραβά. Προσπάθησε ξανά.</p>}
    </form>
  )
}

