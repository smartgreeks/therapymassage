import TelephoneCTA from "@/components/TelephoneCTA"
import Image from "next/image"
import { Sparkles, BadgeCheck } from "lucide-react"
import CrossCategoryCalculator from "@/components/CrossCategoryCalculator"
import ServiceCardImages from "@/components/ServiceCardImages"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"

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

const CATEGORIES_EL: Record<string, Category> = {
  euexia: {
    title: "Ευεξία",
    intro: "Χαλάρωση, ισορροπία και ευεξία με τεχνικές προσαρμοσμένες στις ανάγκες σας.",
    hero: undefined,
    sub: [
      { title: "Χαλαρωτικό μασάζ", desc: "Ήπιες πιέσεις και ρυθμικοί χειρισμοί για αποφόρτιση άγχους.", images: ["/images/services/relaxing.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Deep tissue", desc: "Εστιασμένη δουλειά σε χρόνιες εντάσεις και trigger points.", images: ["/images/services/deepTissuue.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Αθλητικό μασάζ", desc: "Αποκατάσταση, ευλυγισία και πρόληψη τραυματισμών.", images: ["/images/services/athletic.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Λεμφικό μασάζ", desc: "Ενίσχυση λεμφικής κυκλοφορίας – αποσυμφόρηση.", images: ["/images/services/lemfiko.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Μασάζ για εγκύους", desc: "Απαλό μασάζ για την ανακούφιση από μυοσκελετικούς πόνους.", images: ["/images/services/pregnantMassage.webp"], options: [
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
      ] },
      { title: "Υδρομασάζ", desc: "Μασάζ με πίεση νερού για βαθιά χαλάρωση.", images: ["/images/services/uudromasaz.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Korean head spa massage", desc: "Ολιστική περιποίηση για το τριχωτό της κεφαλής και τα μαλλιά.", images: ["/images/services/headSpa.webp"], options: [
        { duration: "60'", price: "€40" },
      ] },
      { title: "Hot stones", desc: "Ζεστές πέτρες για απελευθέρωση της έντασης.", images: ["/images/services/hardRock.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Μασάζ για παιδιά", desc: "Απαλό και ασφαλές μασάζ για παιδιά.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
      ] },
      { title: "4 hands massage", desc: "Τέσσερα χέρια δουλεύουν ταυτόχρονα για διπλή χαλάρωση.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€50" },
      ] },
      { title: "Πρεσσοθεραπεία", desc: "Μηχανική λεμφική παροχέτευση για αποτοξίνωση.", images: ["/images/services/presotherapeia.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Αρχαία ινδική τεχνική για ισορροπία σώματος και πνεύματος.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  omorfia: {
    title: "Ομορφιά",
    intro: "Φυσική λάμψη και φροντίδα προσώπου/σώματος με εξειδικευμένες τεχνικές.",
    hero: undefined,
    sub: [
      { title: "Φυσικό face lifting", desc: "Μη επεμβατικές τεχνικές τόνωσης και σύσφιξης.", images: ["/images/services/service19.webp"], price: "€15" },
      { title: "Φυσικό face lifting full extra", desc: "Ολοκληρωμένη περιποίηση για άμεση αναζωογόνηση.", images: ["/images/services/service19.webp"], price: "€30" },
      { title: "Scrub μάσκα σώματος & massage", desc: "Απολέπιση, ενυδάτωση και χαλάρωση σε μία θεραπεία.", images: ["/images/services/service22.webp"], price: "€30" },
      { title: "Σοκολατοθεραπεία", desc: "Θεραπεία ευεξίας με άρωμα σοκολάτας.", images: ["/images/services/cocoa.webp"], price: "€30" },
      { title: "Φωτοθεραπεία", desc: "Χρήση φωτός LED για την ανανέωση του δέρματος.", images: ["/images/services/unnamed.webp"], price: "€10" },
      { title: "Massage κυτταρίτιδας", desc: "Εξειδικευμένο μασάζ για τη μείωση της όψης φλοιού πορτοκαλιού.", images: ["/images/services/celluuliteMassage.webp"], price: "€20" },
      { title: "Πακέτο 10 συνεδριών κυτταρίτιδας", desc: "Ολοκληρωμένο πρόγραμμα 10 συνεδριών.", images: ["/images/services/celluuliteMassage.webp"], price: "€160" },
    ],
  },
  "enallaktikes-therapeies": {
    title: "Εναλλακτικές Θεραπείες",
    intro: "Ενεργειακό μασάζ, αγιουρβεδικό, ρεφλεξολογία και περισσότερα.",
    hero: undefined,
    sub: [
      { title: "Ενεργειακή θεραπεία", desc: "Συνδυασμός τεχνικών για εξισορρόπηση ενέργειας.", images: ["/images/services/srvs20.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Αρχαία ινδική τεχνική για ισορροπία σώματος και πνεύματος.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Ιδιαίτερες στιγμές",
    intro: "Πακέτα για ζευγάρια, bachelor/bachelorette και επετείους.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", images: ["/images/services/service28.webp"], options: [ { duration: "60'", price: "€110" } ] },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "On-site υπηρεσίες για εταιρικά events και ομάδες.",
    hero: undefined,
    sub: [
      { title: "Corporate", desc: "Παροχή μασάζ στον χώρο σας.", images: ["/images/services/srvs21.webp"], price: "€80/h" },
    ],
  },
  "gift-cards": {
    title: "Gift Cards",
    intro: "Χάρισε ευεξία στους αγαπημένους σου.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "Ψηφιακή κάρτα δώρου.", images: ["/images/services/srvs13.webp"], price: "από €30" },
    ],
  },
}

const CATEGORIES_EN: Record<string, Category> = {
  euexia: {
    title: "Wellness",
    intro: "Relaxation, balance and wellness with techniques adapted to your needs.",
    hero: undefined,
    sub: [
      { title: "Relaxing massage", desc: "Gentle pressures and rhythmic movements for stress relief.", images: ["/images/services/relaxing.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Deep tissue", desc: "Focused work on chronic tensions and trigger points.", images: ["/images/services/deepTissuue.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Sports massage", desc: "Recovery, flexibility and injury prevention.", images: ["/images/services/athletic.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Lymphatic massage", desc: "Enhancement of lymphatic circulation - decongestion.", images: ["/images/services/lemfiko.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Reflexology", desc: "Pressure on reflex points of the soles.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Pregnant Massage", desc: "Gentle massage to relieve musculoskeletal pain.", images: ["/images/services/pregnantMassage.webp"], options: [
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
      ] },
      { title: "Hydromassage", desc: "Water pressure massage for deep relaxation.", images: ["/images/services/uudromasaz.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Korean head spa massage", desc: "Holistic care for scalp and hair.", images: ["/images/services/headSpa.webp"], options: [
        { duration: "60'", price: "€40" },
      ] },
      { title: "Hot stones", desc: "Hot stones to release tension.", images: ["/images/services/hardRock.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Kids Massage", desc: "Gentle and safe massage for children.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
      ] },
      { title: "4 hands massage", desc: "Four hands work simultaneously for double relaxation.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€50" },
      ] },
      { title: "Pressotherapy", desc: "Mechanical lymphatic drainage for detoxification.", images: ["/images/services/presotherapeia.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Ayurvedic Massage", desc: "Ancient Indian technique for body and mind balance.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  omorfia: {
    title: "Beauty",
    intro: "Natural radiance and face/body care with specialized techniques.",
    hero: undefined,
    sub: [
      { title: "Natural face lifting", desc: "Non-invasive toning and tightening techniques.", images: ["/images/services/service19.webp"], price: "€15" },
      { title: "Natural face lifting full extra", desc: "Complete treatment for immediate rejuvenation.", images: ["/images/services/service19.webp"], price: "€30" },
      { title: "Body scrub mask & massage", desc: "Exfoliation, hydration and relaxation in one treatment.", images: ["/images/services/service22.webp"], price: "€30" },
      { title: "Chocolate therapy", desc: "Wellness therapy with chocolate aroma.", images: ["/images/services/cocoa.webp"], price: "€30" },
      { title: "Phototherapy", desc: "Use of LED light for skin rejuvenation.", images: ["/images/services/unnamed.webp"], price: "€10" },
      { title: "Cellulite massage", desc: "Specialized massage to reduce the orange peel look.", images: ["/images/services/celluuliteMassage.webp"], price: "€20" },
      { title: "Package of 10 cellulite sessions", desc: "Complete program of 10 sessions.", images: ["/images/services/celluuliteMassage.webp"], price: "€160" },
    ],
  },
  "enallaktikes-therapeies": {
    title: "Alternative Therapies",
    intro: "Energy massage, Ayurvedic, reflexology and more.",
    hero: undefined,
    sub: [
      { title: "Energy therapy", desc: "Combination of techniques for energy balance.", images: ["/images/services/srvs20.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Reflexology", desc: "Pressure on reflex points of the soles.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Ayurvedic Massage", desc: "Ancient Indian technique for body and mind balance.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Ιδιαίτερες στιγμές",
    intro: "Πακέτα για ζευγάρια, bachelor/bachelorette και επετείους.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", images: ["/images/services/service28.webp"], options: [ { duration: "60'", price: "€110" } ] },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "On-site υπηρεσίες για εταιρικά events και ομάδες.",
    hero: undefined,
    sub: [
      { title: "Corporate", desc: "Παροχή μασάζ στον χώρο σας.", images: ["/images/services/srvs21.webp"], price: "€80/h" },
    ],
  },
  "gift-cards": {
    title: "Gift Cards",
    intro: "Χάρισε ευεξία στους αγαπημένους σου.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "Ψηφιακή κάρτα δώρου.", images: ["/images/services/srvs13.webp"], price: "από €30" },
    ],
  },
}

type Props = {
  params: { locale: 'el' | 'en'; category: string }
}

export function generateStaticParams() {
  const locales = ['el', 'en']
  const categories = Object.keys(CATEGORIES_EL) // Using Greek keys as they're the same for both languages
  
  return locales.flatMap(locale => 
    categories.map(category => ({ locale, category }))
  )
}

export const dynamicParams = false

export default function CategoryPage({ params }: Props) {
  const dict = getDictionary(params.locale)
  const categories = params.locale === 'el' ? CATEGORIES_EL : CATEGORIES_EN
  const data = categories[params.category]
  if (!data) return null

  return (
    <TProvider locale={params.locale} dict={dict}>
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

        <Calculator data={data} locale={params.locale} />
        <section className="container-safe py-16">
          <TelephoneCTA />
        </section>
      </main>
    </TProvider>
  )
}

function Calculator({ data, locale }: { data: Category; locale: 'el' | 'en' }) {
  return (
    <section className="container-safe py-12">
      <div className="rounded-xl bg-olive-50 border border-sand p-6">
        <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
          {locale === 'el' ? 'Υπολογισμός πακέτου' : 'Package Calculator'}
        </h2>
        <p className="text-olive-800/80 mt-1">
          {locale === 'el' 
            ? 'Συνδυάστε υπηρεσίες από όλες τις κατηγορίες για το ιδανικό πακέτο.' 
            : 'Combine services from all categories for the ideal package.'}
        </p>
        <CrossCategoryCalculator currentCategory={getCurrentCategoryKey(data.title, locale)} locale={locale} />
      </div>
    </section>
  )
}

// Helper function to get category key from title
function getCurrentCategoryKey(title: string, locale: 'el' | 'en'): string {
  const mappings = {
    el: {
      'Ευεξία': 'euexia',
      'Ομορφιά': 'omorfia',
      'Εναλλακτικές Θεραπείες': 'enallaktikes-therapeies',
      'Ιδιαίτερες στιγμές': 'idiaiteres-stigmes',
      'Special Events': 'special-events',
      'Gift Cards': 'gift-cards'
    },
    en: {
      'Wellness': 'euexia',
      'Beauty': 'omorfia',
      'Alternative Therapies': 'enallaktikes-therapeies',
      'Special Moments': 'idiaiteres-stigmes',
      'Special Events': 'special-events',
      'Gift Cards': 'gift-cards'
    }
  }
  
  return Object.entries(mappings[locale]).find(([t]) => t === title)?.[1] || 'euexia'
}
