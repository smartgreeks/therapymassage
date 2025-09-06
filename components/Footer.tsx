"use client"
import Link from "next/link"
import Image from "next/image"
import { Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-beige mt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-safe py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" aria-label="Therapy Massage home" className="inline-flex items-center gap-2">
            <Image src="/images/logoTherapy.png" alt="Therapy Massage logo" width={64} height={64} className="h-16 w-16 object-contain" />
          </Link>
          <p className="mt-4 text-olive-100/80">Premium εμπειρία μασάζ με έμφαση στη χαλάρωση και την ευεξία.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Μενού</h3>
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
            <li>
              <a href="https://www.facebook.com/therapymassageirinixondrokouki" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:underline inline-flex items-center gap-2">
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-olive-700">
        <div className="container-safe py-4 text-sm text-olive-100/70">© {new Date().getFullYear()} Therapy Massage. Με την επιφύλαξη παντός δικαιώματος.</div>
      </div>
    </footer>
  )
}

