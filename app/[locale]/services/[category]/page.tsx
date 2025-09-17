import TelephoneCTA from "@/components/TelephoneCTA"
import ServiceCategorySidebar from "@/components/ServiceCategorySidebar"
import Image from "next/image"
import { Sparkles, BadgeCheck } from "lucide-react"
import CrossCategoryCalculator from "@/components/CrossCategoryCalculator"
import ServiceCardImages from "@/components/ServiceCardImages"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"
import Link from "next/link"

type Option = { duration: string; price: string }
type SubItem = {
  title: string
  desc?: string
  image?: string
  images?: string[]
  options?: Option[]
  duration?: string
  price?: string
  href?: string
  ctaLabel?: string
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
        { duration: "90'", price: "€37" },
      ] },
      { title: "Deep tissue", desc: "Εστιασμένη δουλειά σε χρόνιες εντάσεις και trigger points.", images: ["/images/services/deepTissuue.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€37" },
      ] },
      { title: "Αθλητικό μασάζ", desc: "Αποκατάσταση, ευλυγισία και πρόληψη τραυματισμών.", images: ["/images/services/athletic.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€37" },
      ] },
      { title: "Λεμφικό μασάζ", desc: "Ενίσχυση λεμφικής κυκλοφορίας – αποσυμφόρηση.", images: ["/images/services/lemfiko.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Μασάζ για εγκύους", desc: "Απαλό μασάζ για την ανακούφιση από μυοσκελετικούς πόνους.", images: ["/images/services/pregnantMassage.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Υδρομασάζ", desc: "Μασάζ με πίεση νερού για βαθιά χαλάρωση.", images: ["/images/services/uudromasaz.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Korean head spa massage", desc: "Ολιστική περιποίηση για το τριχωτό της κεφαλής και τα μαλλιά.", images: ["/images/services/headSpa.webp"], options: [
        { duration: "60'", price: "€40" },
      ] },
      { title: "Hard Rock Massage", desc: "Έντονο μασάζ για απόλυτη μυϊκή ανακούφιση.", images: ["/images/services/hardRock.webp"], options: [
        { duration: "60'", price: "€30" },
      ] },
      { title: "Μασάζ για παιδιά", desc: "Απαλό και ασφαλές μασάζ για παιδιά.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
      ] },
      { title: "4 hands massage", desc: "Τέσσερα χέρια δουλεύουν ταυτόχρονα για διπλή χαλάρωση.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€45" },
      ] },
      { title: "Πρεσσοθεραπεία", desc: "Μηχανική λεμφική παροχέτευση για αποτοξίνωση.", images: ["/images/services/presotherapeia.webp"], options: [
        { duration: "45'", price: "€15" },
        { duration: "Πακέτο 5 συνεδριών", price: "€55" },
      ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  omorfia: {
    title: "Ομορφιά",
    intro: "Φυσική λάμψη και φροντίδα προσώπου/σώματος με εξειδικευμένες τεχνικές.",
    hero: undefined,
    sub: [
      { title: "Φυσικό face lifting", desc: "Μη επεμβατικές τεχνικές τόνωσης και σύσφιξης.", images: ["/images/services/facelifitng.webp"], price: "€15" },
      { title: "Φυσικό face lifting full extra", desc: "Ολοκληρωμένη περιποίηση για άμεση αναζωογόνηση.", images: ["/images/services/extrafacelifting.webp"], price: "€30" },
      { title: "Scrub μάσκα σώματος & massage", desc: "Απολέπιση, ενυδάτωση και χαλάρωση σε μία θεραπεία.", images: ["/images/services/scrabtherapy.webp"], price: "€20" },
      { title: "Σοκολατοθεραπεία", desc: "Θεραπεία ευεξίας με άρωμα σοκολάτας.", images: ["/images/services/sokotherapy.webp"], price: "€30" },
      { title: "Φωτοθεραπεία", desc: "Χρήση φωτός LED για την ανανέωση του δέρματος.", images: ["/images/services/fototherapy.webp"], price: "€10" },
      { title: "Massage κυτταρίτιδας (Πακέτο 10 συνεδριών)", desc: "Το πακέτο περιλαμβάνει 10 συνεδρίες κυτταρίτιδας με ειδική έκπτωση. Τελική τιμή: 160€ (κανονική αξία 200€).", images: ["/images/services/celluuliteMassage.webp"], options: [{ duration: "Μία συνεδρία", price: "€20" }, { duration: "Πακέτο 10 συνεδριών", price: "€160" }] },
    ],
  },
  "enallaktikes-therapeies": {
    title: "Εναλλακτικές Θεραπείες",
    intro: "Ενεργειακό μασάζ, αγιουρβεδικό, ρεφλεξολογία και περισσότερα.",
    hero: undefined,
    sub: [
      { title: "Ενεργειακό μασάζ", desc: "Συνδυασμός τεχνικών για ενεργειακή ισορροπία.", images: ["/images/services/service13.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Αρχαία ινδική τεχνική για ισορροπία σώματος και πνεύματος.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "90'", price: "€40" },
      ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Ιδιαίτερες στιγμές",
    intro: "Πακέτα για ζευγάρια, bachelor/bachelorette και επετείους.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", images: ["/images/services/srvs2.webp"], options: [ { duration: "45'", price: "€40" }, { duration: "60'", price: "€50" } ] },
      { title: "Πακέτο massage & τζακούζι", desc: "Συνδυασμός μασάζ και τζακούζι για απόλυτη χαλάρωση.", images: ["/images/services/uudromasaz.webp"], duration: "90'" },
    ],
  },
  "special-events": {
    title: "Ειδικές Εκδηλώσεις",
    intro: "Ειδικές εκδηλώσεις και παιδικά πάρτυ.",
    hero: undefined,
    sub: [
      { title: "Παιδικά πάρτυ", desc: "Ειδικές υπηρεσίες για παιδικές εκδηλώσεις. Η τελική τιμή και η διαθεσιμότητα θα επιβεβαιωθούν απευθείας με τον πελάτη μέσω επικοινωνίας.", images: ["/images/services/kidsparty.webp"] },
      { title: "Bachelorette Spa", desc: "Ειδικές υπηρεσίες spa για bachelorette πάρτυ. Οι λεπτομέρειες για τιμή και χρόνο θα ενημερωθούν μετά από επικοινωνία.", images: ["/images/services/bacherorettespa.webp"] },
    ],
  },
  "gift-cards": {
    title: "Κάρτες Δώρου",
    intro: "Χάρισε ευεξία στους αγαπημένους σου.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "Ένα E‑Gift από το Therapy Massage είναι κάτι περισσότερο από μια απλή κάρτα δώρου· αποτελεί ένα πολυτελές διάλειμμα από την ένταση της καθημερινότητας. Ο τυχερός αποδέκτης θα απολαύσει μια αυθεντική εμπειρία ευεξίας και απόλυτης χαλάρωσης, με την επιλογή της ιδανικής θεραπείας που θα επιλέξετε από κοινού. Προσθέστε την προσωπική σας ευχή για να μετατρέψετε αυτό το δώρο σε μια μοναδική, προσωπική εμπειρία. Η τελική τιμή καθορίζεται από την υπηρεσία που θα επιλέξετε.", images: ["/images/services/giftcards.webp"], href: "/contact", ctaLabel: "Επικοινωνήστε μαζί μας" },
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
        { duration: "90'", price: "€37" },
      ] },
      { title: "Deep tissue", desc: "Focused work on chronic tensions and trigger points.", images: ["/images/services/deepTissuue.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€37" },
      ] },
      { title: "Sports massage", desc: "Recovery, flexibility and injury prevention.", images: ["/images/services/athletic.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€37" },
      ] },
      { title: "Lymphatic massage", desc: "Enhancement of lymphatic circulation - decongestion.", images: ["/images/services/lemfiko.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Reflexology", desc: "Pressure on reflex points of the soles.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Prenatal Massage", desc: "Gentle massage to relieve musculoskeletal pain.", images: ["/images/services/pregnantMassage.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Hydromassage", desc: "Water pressure massage for deep relaxation.", images: ["/images/services/uudromasaz.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Korean head spa massage", desc: "Holistic care for scalp and hair.", images: ["/images/services/headSpa.webp"], options: [
        { duration: "60'", price: "€40" },
      ] },
      { title: "Hard Rock Massage", desc: "Intense massage for ultimate muscle relief.", images: ["/images/services/hardRock.webp"], options: [
        { duration: "60'", price: "€30" },
      ] },
      { title: "Kids Massage", desc: "Gentle and safe massage for children.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
      ] },
      { title: "4 hands massage", desc: "Four hands work simultaneously for double relaxation.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€45" },
      ] },
      { title: "Pressotherapy", desc: "Mechanical lymphatic drainage for detoxification.", images: ["/images/services/presotherapeia.webp"], options: [
        { duration: "45'", price: "€15" },
        { duration: "Package of 5 sessions", price: "€55" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  omorfia: {
    title: "Beauty",
    intro: "Natural radiance and face/body care with specialized techniques.",
    hero: undefined,
    sub: [
      { title: "Natural face lifting", desc: "Non-invasive toning and tightening techniques.", images: ["/images/services/facelifitng.webp"], price: "€15" },
      { title: "Natural face lifting full extra", desc: "Complete treatment for immediate rejuvenation.", images: ["/images/services/extrafacelifting.webp"], price: "€30" },
      { title: "Body scrub mask & massage", desc: "Exfoliation, hydration and relaxation in one treatment.", images: ["/images/services/scrabtherapy.webp"], price: "€20" },
      { title: "Chocolate therapy", desc: "Wellness therapy with chocolate aroma.", images: ["/images/services/sokotherapy.webp"], price: "€30" },
      { title: "Phototherapy", desc: "Use of LED light for skin rejuvenation.", images: ["/images/services/fototherapy.webp"], price: "€10" },
      { title: "Cellulite massage (Package of 10 sessions)", desc: "The package includes 10 cellulite sessions with special discount. Final price: €160 (regular value €200).", images: ["/images/services/celluuliteMassage.webp"], options: [{ duration: "Single session", price: "€20" }, { duration: "Package of 10 sessions", price: "€160" }] },
    ],
  },
  "enallaktikes-therapeies": {
    title: "Alternative Therapies",
    intro: "Energy massage, Ayurvedic, reflexology and more.",
    hero: undefined,
    sub: [
      { title: "Energy therapy", desc: "Combination of techniques for energy balance.", images: ["/images/services/service13.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Reflexology", desc: "Pressure on reflex points of the soles.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Ayurvedic Massage", desc: "Ancient Indian technique for body and mind balance.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "90'", price: "€40" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Special Moments",
    intro: "Packages for couples, bachelor/bachelorette parties and anniversaries.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Side-by-side experience for two.", images: ["/images/services/srvs2.webp"], options: [ { duration: "45'", price: "€40" }, { duration: "60'", price: "€50" } ] },
      { title: "Massage & jacuzzi package", desc: "Combination of massage and jacuzzi for ultimate relaxation.", images: ["/images/services/uudromasaz.webp"], duration: "90'" },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "Special events and kids parties.",
    hero: undefined,
    sub: [
      { title: "Kids parties", desc: "Special services for children's events. Final price and availability will be confirmed directly with the client through communication.", images: ["/images/services/kidsparty.webp"] },
      { title: "Bachelorette Spa", desc: "Special spa services for bachelorette parties. Details for price and time will be updated after communication.", images: ["/images/services/bacherorettespa.webp"] },
    ],
  },
  "gift-cards": {
    title: "Gift Cards",
    intro: "Give wellness to your loved ones.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "An E‑Gift from Therapy Massage is more than a simple gift card — it’s a luxurious break from the stress of everyday life. The lucky recipient will enjoy an authentic wellness experience and deep relaxation, with the freedom to choose the ideal treatment together with you. Add your personal message to turn this gift into a unique, personalized experience. The final price is determined by the service you choose.", images: ["/images/services/giftcards.webp"], href: "/contact", ctaLabel: "Contact us" },
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
              <h1 className="text-4xl font-semibold font-playfair">{data.title}</h1>
            </div>
            <p className="mt-2 text-beige/80">{data.intro}</p>
          </div>
        </section>

        <section className="container-safe py-16">
          <div className="max-w-7xl mx-auto">
            {data.hero && (
              <div className="relative h-40 w-full mb-8">
                <Image src={data.hero} alt={data.title} fill className="object-contain object-left" />
              </div>
            )}
            
            <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
              <div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.sub.map((s, i) => {
                    const imgs = (s.images && s.images.length ? s.images : (s.image ? [s.image] : []))
                    return (
                    <div key={s.title} className={`card p-0 overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg animate-fadeInUp animate-delay-${i * 60}`}>
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
              </div>
              
              <div className="order-first lg:order-last">
                <ServiceCategorySidebar 
                  currentCategory={params.category}
                  currentCategoryData={{
                    title: data.title,
                    intro: data.intro,
                    serviceCount: data.sub.length
                  }}
                />
              </div>
            </div>
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
    <section id="calculator" className="container-safe py-12">
      <div className="rounded-xl bg-olive-50 border border-sand p-6">
        <h2 className="text-xl font-semibold font-playfair">
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
