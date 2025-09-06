"use client"import Link from "next/link"import Image from "next/image"import { Facebook } from "lucide-react"export default function Footer() {  return (    <footer className="bg-olive-900 text-beige mt-16" aria-labelledby="footer-heading">      <h2 id="footer-heading" className="sr-only">Footer</h2>      <div className="container-safe py-12 grid grid-cols-1 md:grid-cols-3 gap-10">        <div>          <Link href="/" aria-label="Therapy Massage home" className="inline-flex items-center gap-2">            <Image src="/images/logoTherapy.png" alt="Therapy Massage logo" width={64} height={64} className="h-16 w-16 object-contain" />          </Link>          <p className="mt-4 text-olive-100/80">Premium Ï…Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚ Î¼Î±ÏƒÎ¬Î¶ ÏƒÎµ Î®ÏÎµÎ¼Î¿ Ï‡ÏŽÏÎ¿. Î§Î±Î»Î¬ÏÏ‰ÏƒÎ·, Î±Î½Î±ÎºÎ¿ÏÏ†Î¹ÏƒÎ· ÎºÎ±Î¹ ÎµÏ…ÎµÎ¾Î¯Î±.</p>        </div>        <div>          <h3 className="font-semibold mb-3">Î£ÏÎ½Î´ÎµÏƒÎ¼Î¿Î¹</h3>          <ul className="space-y-2 text-olive-100/90">            <li><Link href="/" className="hover:underline">Î‘ÏÏ‡Î¹ÎºÎ®</Link></li>            <li><Link href="/services" className="hover:underline">Î¥Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚</Link></li>            <li><Link href="/about" className="hover:underline">Î£Ï‡ÎµÏ„Î¹ÎºÎ¬</Link></li>            <li><Link href="/blog" className="hover:underline">Blog</Link></li>            <li><Link href="/#contact" className="hover:underline">Î•Ï€Î¹ÎºÎ¿Î¹Î½Ï‰Î½Î¯Î±</Link></li>          </ul>        </div>        <div>          <h3 className="font-semibold mb-3">Î‘ÎºÎ¿Î»Î¿Ï…Î¸Î®ÏƒÏ„Îµ Î¼Î±Ï‚</h3>          <ul className="space-y-2 text-olive-100/90">            <li><a href="#" aria-label="Instagram" className="hover:underline">Instagram</a></li>            <li><a href="#" aria-label="Facebook" className="hover:underline">Facebook</a></li>            <li><a href="#" aria-label="WhatsApp" className="hover:underline">WhatsApp</a></li>          </ul>        </div>        <div>          <h3 className="font-semibold mb-3">Î•Î³Î³ÏÎ±Ï†Î® Newsletter</h3>          <form onSubmit={subscribe} className="flex gap-2">            <label htmlFor="newsletter" className="sr-only">Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· email</label>            <input id="newsletter" name="newsletter" type="email" required placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 rounded-lg px-4 py-3 text-olive-900" />            <button className="btn btn-primary bg-olive-600 hover:bg-olive-500" disabled={status === "loading"}>Î•Î³Î³ÏÎ±Ï†Î®</button>          </form>          {status === "success" && <p className="text-green-300 mt-2">Î— ÎµÎ³Î³ÏÎ±Ï†Î® Î¿Î»Î¿ÎºÎ»Î·ÏÏŽÎ¸Î·ÎºÎµ. Î•Ï…Ï‡Î±ÏÎ¹ÏƒÏ„Î¿ÏÎ¼Îµ!</p>}          {status === "error" && <p className="text-red-300 mt-2">ÎšÎ¬Ï„Î¹ Ï€Î®Î³Îµ ÏƒÏ„ÏÎ±Î²Î¬. Î”Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î¾Î±Î½Î¬.</p>}        </div>      </div>      <div className="border-t border-olive-700">        <div className="container-safe py-4 text-sm text-olive-100/70">Â© {new Date().getFullYear()} Therapy Massage. ÎŒÎ»Î± Ï„Î± Î´Î¹ÎºÎ±Î¹ÏŽÎ¼Î±Ï„Î± Î´Î¹Î±Ï„Î·ÏÎ¿ÏÎ½Ï„Î±Î¹.</div>      </div>    </footer>  )}
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
          <p className="mt-4 text-olive-100/80">Premium I.I?I�I?I�I�I_I�I, I�I�I�I�I I�I� IrI?I�I�I� I�IZI?I�. II�I�I�I?I%I�I�, I�I�I�I�I�I?I+I1I�I� I�I�I1 I�I.I�I_I_I�.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">I�I?I�I'I�I�I�I�I1</h3>
          <ul className="space-y-2 text-olive-100/90">
            <li><Link href="/" className="hover:underline">I`I?I�I1I�Ir</Link></li>
            <li><Link href="/services" className="hover:underline">I�I?I�I?I�I�I_I�I,</Link></li>
            <li><Link href="/about" className="hover:underline">I�I�I�I,I1I�I�</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/#contact" className="hover:underline">II?I1I�I�I1I�I%I�I_I�</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">I`I�I�I�I�I.I,IrI�I,I� I�I�I,</h3>
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
        <div className="container-safe py-4 text-sm text-olive-100/70">Ac {new Date().getFullYear()} Therapy Massage. IOI�I� I,I� I'I1I�I�I1IZI�I�I,I� I'I1I�I,I�I?I�I?I�I,I�I1.</div>
      </div>
    </footer>
  )
}
