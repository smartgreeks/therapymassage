"use client"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <footer className="bg-olive-900 text-beige mt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-safe py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-olive-500 inline-block" />
            <span className="font-semibold">Therapy Massage</span>
          </div>
          <p className="mt-4 text-olive-100/80">Premium υπηρεσίες μασάζ σε ήρεμο χώρο. Χαλάρωση, ανακούφιση και ευεξία.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Σύνδεσμοι</h3>
          <ul className="space-y-2 text-olive-100/90">
            <li><Link href="/" className="hover:underline">Αρχική</Link></li>
            <li><Link href="/services" className="hover:underline">Υπηρεσίες</Link></li>
            <li><Link href="/about" className="hover:underline">Σχετικά</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/#contact" className="hover:underline">Επικοινωνία</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Ακολουθήστε μας</h3>
          <ul className="space-y-2 text-olive-100/90">
            <li><a href="#" aria-label="Instagram" className="hover:underline">Instagram</a></li>
            <li><a href="#" aria-label="Facebook" className="hover:underline">Facebook</a></li>
            <li><a href="#" aria-label="WhatsApp" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Εγγραφή Newsletter</h3>
          <form onSubmit={subscribe} className="flex gap-2">
            <label htmlFor="newsletter" className="sr-only">Διεύθυνση email</label>
            <input id="newsletter" name="newsletter" type="email" required placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 rounded-lg px-4 py-3 text-olive-900" />
            <button className="btn btn-primary bg-olive-600 hover:bg-olive-500" disabled={status === "loading"}>Εγγραφή</button>
          </form>
          {status === "success" && <p className="text-green-300 mt-2">Η εγγραφή ολοκληρώθηκε. Ευχαριστούμε!</p>}
          {status === "error" && <p className="text-red-300 mt-2">Κάτι πήγε στραβά. Δοκιμάστε ξανά.</p>}
        </div>
      </div>
      <div className="border-t border-olive-700">
        <div className="container-safe py-4 text-sm text-olive-100/70">© {new Date().getFullYear()} Therapy Massage. Όλα τα δικαιώματα διατηρούνται.</div>
      </div>
    </footer>
  )
}