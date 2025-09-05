import TelephoneCTA from "@/components/TelephoneCTA"
import Image from "next/image"
import { Sparkles, BadgeCheck } from "lucide-react"
import CategoryCalculator from "@/components/CategoryCalculator"
import ServiceCardImages from "@/components/ServiceCardImages"

type Option = { duration: string; price: string }
type SubItem = {
  title: string
  desc?: string
  image?: string
  images?: string[]
  options?: Option[]
  duration?: string
  price?: string
}
type Category = { title: string; intro: string; hero?: string; sub: SubItem[] }

const CATEGORIES: Record<string, Category> = {
  euexia: {
    title: "Ευεξία",
    intro: "Χαλάρωση, ισορροπία και ευεξία με τεχνικές προσαρμοσμένες στις ανάγκες σας.",
    hero: undefined,
    sub: [
      { title: "Χαλαρωτικό μασάζ", desc: "Ήπιες πιέσεις και ρυθμικοί χειρισμοί για αποφόρτιση άγχους.", images: ["/images/services/service8.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Deep tissue", desc: "Εστιασμένη δουλειά σε χρόνιες εντάσεις και trigger points.", images: ["/images/services/service27.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Αθλητικό μασάζ", desc: "Αποκατάσταση, ευλυγισία και πρόληψη τραυματισμών.", images: ["/images/services/service10.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Λεμφικό μασάζ", desc: "Ενίσχυση λεμφικής κυκλοφορίας – αποσυμφόρηση.", images: ["/images/services/srvs18.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Υδρομασάζ", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/place10.webp"] },
      { title: "Korean head spa massage", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/service25.webp"] },
      { title: "Hot stones", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/service5.webp", "/images/services/service4.webp"] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/service26.webp"], options: [
        { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" }
      ] },
      { title: "Μασάζ για εγκύους & παιδιά", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/srvs21.webp"] },
      { title: "4 hands massage", desc: "Δύο θεραπευτές συγχρονισμένα για βαθιά χαλάρωση.", images: ["/images/services/srvs2.webp"], options: [ { duration: "60'", price: "€45" } ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/srvs12.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Πρεσσοθεραπεία", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/srvs19.webp"] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/srvs23.webp"] },
    ],
  },

  omorfia: {
    title: "Ομορφιά",
    intro: "Φυσική λάμψη και φροντίδα προσώπου/σώματος με εξειδικευμένες τεχνικές.",
    hero: undefined,
    sub: [
      { title: "Φυσικό face lifting", desc: "Μη επεμβατικές τεχνικές τόνωσης και σύσφιξης.", images: ["/images/services/service21.webp"], price: "€15" },
      { title: "Face lifting (full extra)", desc: "Πλήρες πρόγραμμα τόνωσης προσώπου.", images: ["/images/services/service20.webp"], price: "€30" },
      { title: "Scrub μάσκα σώματος & massage", desc: "Απολέπιση, μάσκα και χαλαρωτικό μασάζ σώματος.", images: ["/images/services/service24.webp"], price: "€30" },
      { title: "Σοκολατοθεραπεία", desc: "Θεραπεία ευεξίας με άρωμα σοκολάτας.", images: ["/images/services/service22.webp"], price: "€30" },
      { title: "Φωτοθεραπεία", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/service16.webp"], price: "10,00€" },
      { title: "Massage κυτταρίτιδας", desc: "Στοχευμένες τεχνικές για υφή και σύσφιξη.", images: ["/images/services/service19.webp"], price: "20,00€" },
    ],
  },

  "enallaktikes-therapeies": {
    title: "Εναλλακτικές Θεραπείες",
    intro: "Ενεργειακό μασάζ, αγιουρβεδικό, ρεφλεξολογία και περισσότερα.",
    hero: undefined,
    sub: [
      { title: "Ενεργειακή θεραπεία", desc: "Συνδυασμός τεχνικών για εξισορρόπηση ενέργειας.", images: ["/images/services/srvs20.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/service26.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/srvs12.webp"], options: [ { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" } ] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Μάθετε περισσότερα μετά από επικοινωνία", images: ["/images/services/srvs23.webp"] },
    ],
  },

  "idiaiteres-stigmes": {
    title: "Ιδιαίτερες στιγμές",
    intro: "Πακέτα για ζευγάρια, bachelor/bachelorette και επετείους.",
    hero: undefined,
    sub: [
      { title: "Massage με 4 χέρια", desc: "Δύο θεραπευτές, ένας ρυθμός.", images: ["/images/services/srvs2.webp"], options: [ { duration: "60'", price: "€45" } ] },
      { title: "Bachelorette spa", desc: "Ομαδική εμπειρία με φίλες.", images: ["/images/services/srvs15.webp"], price: "Κατόπιν συνεννόησης" },
      { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", images: ["/images/services/service28.webp"], options: [ { duration: "60'", price: "€110" } ] },
    ],
  },

  "special-events": {
    title: "Special Events",
    intro: "On-site υπηρεσίες για εταιρικά events και ομάδες.",
    hero: undefined,
    sub: [
      { title: "Corporate", desc: "Παροχή μασάζ στον χώρο σας.", images: ["/images/services/srvs21.webp"], price: "€80/h" },
      { title: "Team Wellness", desc: "Προγράμματα ευεξίας για ομάδες.", images: ["/images/services/srvs25.webp"], price: "Κατόπιν συνεννόησης" },
    ],
  },

  "gift-cards": {
    title: "Gift Cards",
    intro: "Χάρισε ευεξία στους αγαπημένους σου.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "Ψηφιακή κάρτα δώρου.", images: ["/images/services/srvs13.webp"], price: "από €30" },
      { title: "Physical Card", desc: "Έντυπη κάρτα δώρου.", images: ["/images/services/srvs14.webp"], price: "από €30" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({ category }))
}

export const dynamicParams = false

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = CATEGORIES[params.category]
  if (!data) return null

  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-beige" aria-hidden="true" />
            <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>{data.title}</h1>
          </div>
          <p className="mt-2 text-beige/80">{data.intro}</p>
        </div>
      </section>

      <section className="container-safe py-16">
        {data.hero && (
          <div className="relative h-40 w-full mb-8">
            <Image src={data.hero} alt={data.title} fill className="object-contain object-left" />
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.sub.map((s, i) => {
            const imgs = (s.images && s.images.length ? s.images : (s.image ? [s.image] : []))
            return (
            <div key={s.title} className="card p-0 overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg animate-fadeInUp" style={{ animationDelay: `${i * 60}ms` }}>
              <ServiceCardImages images={imgs} alt={s.title} />
              <div className="p-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-olive-700" aria-hidden="true" />
                  <span>{s.title}</span>
                </h3>
                {s.desc && <p className="mt-2 text-olive-800/80">{s.desc}</p>}
                {s.options && s.options.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.options.map((opt, j) => (
                      <span key={j} className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-3 py-1 text-sm shadow-sm">
                        <span className="text-olive-800/90">{opt.duration}</span>
                        <span className="text-olive-700 font-semibold">{opt.price}</span>
                      </span>
                    ))}
                  </div>
                ) : (s.duration || s.price) ? (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-sand bg-white px-3 py-1 text-sm shadow-sm">
                    <span>{s.duration ?? ''}</span>
                    <span className="font-medium">{s.price ?? ''}</span>
                  </div>
                ) : null}
              </div>
            </div>
            )})}
        </div>
      </section>

      <Calculator data={data} />
      <section className="container-safe py-16">
        <TelephoneCTA />
      </section>
    </main>
  )
}

function Calculator({ data }: { data: Category }) {
  // Build base services (with options) and add-ons (single price or starts-with "+")
  const bases = data.sub.filter(s => (s.options && s.options.length) || (s.price && !/^\+/.test(s.price || '')))
  const addons = data.sub.filter(s => (s.price && /^\+/.test(s.price || '')) || /add-on/i.test(s.title))

  return (
    <section className="container-safe py-12">
      <div className="rounded-xl bg-olive-50 border border-sand p-6">
        <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Υπολογισμός πακέτου</h2>
        <p className="text-olive-800/80 mt-1">Συνδυάστε υπηρεσίες και τυχόν add-ons για το ιδανικό αποτέλεσμα.</p>
        <CategoryCalculator bases={bases} addons={addons} />
      </div>
    </section>
  )
}

