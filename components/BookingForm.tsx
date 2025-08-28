"use client"
import { useState } from "react"

const services = [
  "Relaxing Massage",
  "Athletic Massage",
  "Reflexology",
  "Face Lifting",
  "Deep Tissue",
  "Aromatherapy",
]

export default function BookingForm() {
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
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section id="booking" aria-labelledby="booking-title" className="container-safe py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 id="booking-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Book an Appointment</h2>
          <p className="mt-2 section-subtitle">Fill in your details and preferred time; our team will confirm shortly.</p>
        </div>
        <form onSubmit={submit} className="card p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input id="name" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input id="phone" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium">Select Service</label>
              <select id="service" className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="datetime" className="block text-sm font-medium">Date & Time</label>
              <input type="datetime-local" id="datetime" required className="mt-1 w-full rounded-lg border-sand focus:ring-olive-400 focus:border-olive-400" value={form.datetime} onChange={e => setForm({ ...form, datetime: e.target.value })} />
            </div>
          </div>
          <button className="btn btn-primary mt-4" disabled={status === "loading"}>Book Appointment</button>
          {status === "success" && <p className="text-green-700 mt-3">Thank you! We received your request.</p>}
          {status === "error" && <p className="text-red-700 mt-3">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

