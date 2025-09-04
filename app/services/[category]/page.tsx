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

// Temporary image overrides by title (handles mojibake + proper Greek)
const IMAGE_OVERRIDES: Record<string, string[]> = {
  "Χαλαρωτικό μασάζ": ["/images/place10.webp"],
  "Deep tissue massage": ["/images/services/service27.webp"],
  "Αρωματική μάλαξη": ["/images/services/srvs18.webp"],
  "Αθλητικό μασάζ": ["/images/services/service8.webp"],
  "Candle massage (add‑on)": ["/images/place7.webp"],
  "Massage εγκυμοσύνης": ["/images/place13.webp"],
  "Head massage": ["/images/services/service25.webp"],
  "Hot stone massage (add‑on)": ["/images/services/service5.webp", "/images/services/service4.webp"],
  "Βεντούζες (add‑on)": ["/images/place5.webp"],
}

const CATEGORIES: Record<string, Category> = {
  euexia: {
    title: "Ευεξία",
    intro: "Χαλάρωση, ισορροπία και αποφόρτιση.",
    hero: undefined,
    sub: [
      { title: "Χαλαρωτικό μασάζ", desc: "Ήπιες πιέσεις για βαθιά χαλάρωση και αποφόρτιση.", options: [
        { duration: "30′", price: "€15" },
        { duration: "45′", price: "€20" },
        { duration: "60′", price: "€25" },
        { duration: "90′", price: "€35" },
      ] },
      { title: "Deep tissue massage", desc: "Εστίαση σε βαθύτερους μυϊκούς ιστούς για ένταση και πόνους.", options: [
        { duration: "30′", price: "€15" },
        { duration: "45′", price: "€20" },
        { duration: "60′", price: "€25" },
        { duration: "90′", price: "€35" },
      ] },
      { title: "Αρωματική μάλαξη", desc: "Συνδυασμός μασάζ με αιθέρια έλαια για ευεξία.", options: [
        { duration: "45′", price: "€20" },
        { duration: "60′", price: "€25" },
      ] },
      { title: "Αθλητικό μασάζ", desc: "Ιδανικό για αποθεραπεία, πρόληψη και βελτίωση απόδοσης.", options: [
        { duration: "45′", price: "€20" },
        { duration: "60′", price: "€25" },
        { duration: "90′", price: "€35" },
      ] },
      { title: "Massage εγκυμοσύνης", desc: "Ασφαλείς τεχνικές χαλάρωσης στη διάρκεια της κύησης.", options: [
        { duration: "30′", price: "€15" },
        { duration: "45′", price: "€20" },
        { duration: "60′", price: "€25" },
      ] },
      { title: "Head massage", desc: "Χαλάρωση για αυχένα και κεφάλι.", price: "€15" },
      { title: "Candle massage (add‑on)", desc: "Ζεστό κερί μασάζ για βελούδινη αίσθηση.", price: "+€5" },
      { title: "Hot stone massage (add‑on)", desc: "Θερμές πέτρες για ανακούφιση έντασης.", price: "+€5" },
      { title: "Βεντούζες (add‑on)", desc: "Τοπική αποσυμφόρηση και ενεργοποίηση κυκλοφορίας.", price: "€10" },
    ],
  },
  omorfia: {
    title: "Ομορφιά",
    intro: "Περιποίηση προσώπου και σώματος.",
    hero: undefined,
    sub: [
      { title: "Scrub & μάσκα σώματος", desc: "Απολέπιση και ενυδάτωση για αναζωογόνηση δέρματος.", price: "€20" },
      { title: "Σοκολατοθεραπεία (add‑on)", desc: "Σοκολατένια εμπειρία ευεξίας ως πρόσθετη παροχή.", price: "+€5" },
      { title: "Φυσικό face lifting", desc: "Μη επεμβατικές τεχνικές τόνωσης και σύσφιξης.", price: "€15" },
      { title: "Face lifting (full extra)", desc: "Πλήρες πρόγραμμα τόνωσης προσώπου.", price: "€30" },
      { title: "Massage κυτταρίτιδας / αδυνάτισμα / σύσφιξη", desc: "Στοχευμένες τεχνικές για υφή και σύσφιξη.", price: "€35" },
    ],
  },
  "energeiakes-therapeies": {
    title: "Ενεργειακές θεραπείες",
    intro: "Ενεργειακό μασάζ, κρυσταλλοθεραπεία, ρεφλεξολογία.",
    hero: undefined,
    sub: [
      { title: "Ενεργειακή θεραπεία", desc: "Συνδυασμός τεχνικών για εξισορρόπηση ενέργειας.", options: [ { duration: "90′", price: "€40" } ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", options: [ { duration: "60′", price: "€35" }, { duration: "90′", price: "€45" } ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", options: [ { duration: "30′", price: "€15" }, { duration: "45′", price: "€20" }, { duration: "60′", price: "€25" } ] },
      { title: "Ηλεκτροβελονισμός", desc: "Ηλεκτρική διέγερση σε σημεία βελονισμού.", options: [ { duration: "45′", price: "€20" }, { duration: "60′", price: "€25" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Ιδιαίτερες στιγμές",
    intro: "Πακέτα για ζευγάρια και παρέες.",
    hero: undefined,
    sub: [
      { title: "Massage με 4 χέρια", desc: "Δύο θεραπευτές ταυτόχρονα για ολιστική εμπειρία.", options: [ { duration: "60′", price: "€45" } ] },
      { title: "Bachelorette spa", desc: "Ειδικά πακέτα για παρέες πριν τον γάμο.", price: "Κατόπιν συνεννόησης" },
      { title: "Couples massage", desc: "Δίπλα‑δίπλα εμπειρία χαλάρωσης για δύο.", options: [ { duration: "60′", price: "€110" } ] },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "On-site υπηρεσίες για ομάδες και εταιρικά events.",
    hero: undefined,
    sub: [
      { title: "Corporate", desc: "Καρέκλα μασάζ στον χώρο σας.", price: "€80/h" },
      { title: "Team Wellness", desc: "Σύντομες συνεδρίες για ομάδες.", price: "Κατόπιν συνεννόησης" },
    ],
  },
  "gift-cards": {
    title: "Gift Cards",
    intro: "Δώστε δώρο ευεξίας στους αγαπημένους σας.",
    hero: undefined,
    sub: [
      { title: "E‑Gift", desc: "Ψηφιακή κάρτα δώρου.", price: "από €30" },
      { title: "Physical Card", desc: "Έντυπη κάρτα δώρου.", price: "από €30" },
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
            const imgs = (s.images && s.images.length ? s.images : (s.image ? [s.image] : (IMAGE_OVERRIDES[s.title] ?? [])))
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
  // Build base services (with options) and add-ons (single price or "+€")
  const bases = data.sub.filter(s => (s.options && s.options.length) || (s.price && !/^\+/.test(s.price)))
  const addons = data.sub.filter(s => (s.price && /^\+?€?\+?/.test(s.price)) || /add‑on/i.test(s.title))

  return (
    <section className="container-safe py-12">
      <div className="rounded-xl bg-olive-50 border border-sand p-6">
        <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Υπολογισμός Κόστους</h2>
        <p className="text-olive-800/80 mt-1">Διάλεξε υπηρεσία και πρόσθεσε add‑ons για να δεις ενδεικτικό σύνολο.</p>
        <CategoryCalculator bases={bases} addons={addons} />
      </div>
    </section>
  )
}




