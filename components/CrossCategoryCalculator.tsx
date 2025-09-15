"use client"
import React from "react"
import SelectField from "@/components/ui/SelectField"
import { useT } from "@/lib/TProvider"

type Option = { duration: string; price: string }
type SubItem = { 
  title: string; 
  desc?: string; 
  image?: string; 
  images?: string[];
  options?: Option[]; 
  duration?: string; 
  price?: string;
  category?: string; // Added to track which category this service belongs to
}
type Category = { title: string; intro: string; hero?: string; sub: SubItem[] }

function parsePrice(p?: string): number | null {
  if (!p) return null
  const m = p.replace(/,/g, '.').match(/([0-9]+(?:\.[0-9]+)?)/)
  return m ? Number(m[1]) : null
}

// All categories data - we'll need to import this or pass it as props
const getAllCategories = (locale: 'el' | 'en'): Record<string, Category> => {
  if (locale === 'el') {
    return {
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
        { duration: "60'", price: "€35" },
      ] },
      { title: "Μασάζ για παιδιά", desc: "Απαλό και ασφαλές μασάζ για παιδιά.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
      ] },
      { title: "4 hands massage", desc: "Τέσσερα χέρια δουλεύουν ταυτόχρονα για διπλή χαλάρωση.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€45" },
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
      { title: "Ενεργειακή θεραπεία", desc: "Συνδυασμός τεχνικών για εξισορρόπηση ενέργειας.", images: ["/images/services/service13.webp"], options: [ { duration: "90'", price: "€40" } ] },
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
      { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", images: ["/images/services/srvs2.webp"], options: [ { duration: "60'", price: "€110" } ] },
      { title: "Πακέτο massage & τζακούζι", desc: "Συνδυασμός μασάζ και τζακούζι για απόλυτη χαλάρωση.", images: ["/images/services/uudromasaz.webp"], duration: "90'" },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "Ειδικές εκδηλώσεις και παιδικά πάρτυ.",
    hero: undefined,
    sub: [
      { title: "Παιδικά πάρτυ", desc: "Ειδικές υπηρεσίες για παιδικές εκδηλώσεις. Η τελική τιμή και η διαθεσιμότητα θα επιβεβαιωθούν απευθείας με τον πελάτη μέσω επικοινωνίας.", images: ["/images/services/kidsparty.webp"] },
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
  } else {
    return {
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
        { duration: "60'", price: "€35" },
      ] },
      { title: "Kids Massage", desc: "Gentle and safe massage for children.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
      ] },
      { title: "4 hands massage", desc: "Four hands work simultaneously for double relaxation.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€45" },
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
      { title: "Natural face lifting", desc: "Non-invasive toning and tightening techniques.", images: ["/images/services/facelifitng.webp"], price: "€15" },
      { title: "Natural face lifting full extra", desc: "Complete treatment for immediate rejuvenation.", images: ["/images/services/extrafacelifting.webp"], price: "€30" },
      { title: "Body scrub & mask + massage", desc: "Exfoliation, hydration and relaxation in one treatment.", images: ["/images/services/scrabtherapy.webp"], price: "€20" },
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
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Special Moments",
    intro: "Packages for couples, bachelor/bachelorette and anniversaries.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Side-by-side experience for two.", images: ["/images/services/srvs2.webp"], options: [ { duration: "60'", price: "€110" } ] },
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
      { title: "E-Gift", desc: "Digital gift card.", images: ["/images/services/giftcards.webp"], price: "from €30" },
    ],
  },
    }
  }
}

type SelectedService = {
  categoryKey: string;
  categoryTitle: string;
  serviceIndex: number;
  optionIndex: number;
  service: SubItem;
  option: Option;
  price: number;
}

export default function CrossCategoryCalculator({ 
  currentCategory, 
  locale = 'el' 
}: { 
  currentCategory: string; 
  locale?: 'el' | 'en';
}) {
  const t = useT()
  const [selectedServices, setSelectedServices] = React.useState<SelectedService[]>([])
  const [selectedCategory, setSelectedCategory] = React.useState(currentCategory)
  const [selectedServiceIndex, setSelectedServiceIndex] = React.useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0)

  const allCategories = getAllCategories(locale)
  const categoryOptions = Object.entries(allCategories).map(([key, cat]) => ({
    key,
    title: cat.title
  }))

  const currentCategoryData = allCategories[selectedCategory]
  const availableServices = currentCategoryData?.sub || []
  
  const selectedService = availableServices[selectedServiceIndex]
  const serviceOptions = selectedService?.options ?? (selectedService?.price ? [{ duration: selectedService.duration ?? '', price: selectedService.price }] : [])

  // Effect to reset service index when category changes and ensure valid selection
  React.useEffect(() => {
    if (availableServices.length > 0) {
      if (selectedServiceIndex >= availableServices.length) {
        setSelectedServiceIndex(0)
      }
    } else {
      setSelectedServiceIndex(0)
    }
  }, [selectedCategory, availableServices.length, selectedServiceIndex])

  // Effect to reset option index when service changes and ensure valid selection
  React.useEffect(() => {
    if (serviceOptions.length > 0) {
      if (selectedOptionIndex >= serviceOptions.length) {
        setSelectedOptionIndex(0)
      }
    } else {
      setSelectedOptionIndex(0)
    }
  }, [selectedServiceIndex, serviceOptions.length, selectedOptionIndex])

  // Effect to update category when currentCategory prop changes
  React.useEffect(() => {
    setSelectedCategory(currentCategory)
  }, [currentCategory])

  const addService = () => {
    if (!selectedService || serviceOptions.length === 0 || selectedOptionIndex >= serviceOptions.length) return

    const option = serviceOptions[selectedOptionIndex]
    if (!option) return
    
    const price = parsePrice(option.price) ?? 0

    const newService: SelectedService = {
      categoryKey: selectedCategory,
      categoryTitle: currentCategoryData.title,
      serviceIndex: selectedServiceIndex,
      optionIndex: selectedOptionIndex,
      service: selectedService,
      option,
      price
    }

    setSelectedServices(prev => [...prev, newService])
  }

  const removeService = (index: number) => {
    setSelectedServices(prev => prev.filter((_, i) => i !== index))
  }

  const total = selectedServices.reduce((sum, service) => sum + service.price, 0)

  return (
    <div className="mt-4 space-y-4">
      {/* Service Selector */}
      <div className="border border-sand rounded-lg p-4 bg-white">
        <h4 className="font-medium mb-3">{locale === 'el' ? 'Προσθήκη Υπηρεσίας' : 'Add Service'}</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          <SelectField
            label={locale === 'el' ? "Κατηγορία" : "Category"}
            options={categoryOptions.map(cat => cat.title)}
            value={Math.max(0, categoryOptions.findIndex(cat => cat.key === selectedCategory))}
            onChange={(i) => {
              if (i >= 0 && i < categoryOptions.length) {
                setSelectedCategory(categoryOptions[i].key)
                setSelectedServiceIndex(0)
                setSelectedOptionIndex(0)
              }
            }}
          />
          <SelectField
            label={locale === 'el' ? "Υπηρεσία" : "Service"}
            options={availableServices.map((s) => s.title)}
            value={Math.min(selectedServiceIndex, Math.max(0, availableServices.length - 1))}
            onChange={(i) => { 
              if (i >= 0 && i < availableServices.length) {
                setSelectedServiceIndex(i) 
                setSelectedOptionIndex(0) 
              }
            }}
          />
          <SelectField
            label={locale === 'el' ? "Διάρκεια" : "Duration"}
            options={serviceOptions.map((o) => `${o.duration} – ${o.price}`)}
            value={Math.min(selectedOptionIndex, Math.max(0, serviceOptions.length - 1))}
            onChange={(i) => {
              if (i >= 0 && i < serviceOptions.length) {
                setSelectedOptionIndex(i)
              }
            }}
          />
        </div>
        <button 
          onClick={addService}
          disabled={!selectedService || serviceOptions.length === 0 || selectedOptionIndex >= serviceOptions.length || !serviceOptions[selectedOptionIndex]}
          className="mt-3 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {locale === 'el' ? 'Προσθήκη στο Πακέτο' : 'Add to Package'}
        </button>
      </div>

      {/* Selected Services */}
      {selectedServices.length > 0 && (
        <div className="border border-sand rounded-lg p-4 bg-white">
          <h4 className="font-medium mb-3">{locale === 'el' ? 'Επιλεγμένες Υπηρεσίες' : 'Selected Services'}</h4>
          <div className="space-y-2">
            {selectedServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-olive-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{service.service.title}</div>
                  <div className="text-sm text-olive-700">{service.categoryTitle} • {service.option.duration}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{service.option.price}</span>
                  <button 
                    onClick={() => removeService(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    {locale === 'el' ? 'Αφαίρεση' : 'Remove'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Total */}
      <div className="flex items-center justify-between rounded-lg bg-olive-900 text-white px-4 py-3">
        <div className="text-lg font-medium">{locale === 'el' ? 'Συνολικό Κόστος' : 'Total Cost'}</div>
        <div className="text-2xl font-bold font-playfair">
          €{total.toFixed(2)}
        </div>
      </div>

      {selectedServices.length > 1 && (
        <div className="text-sm text-olive-700 text-center">
          {locale === 'el' 
            ? `${selectedServices.length} υπηρεσίες από ${new Set(selectedServices.map(s => s.categoryKey)).size} κατηγορίες`
            : `${selectedServices.length} services from ${new Set(selectedServices.map(s => s.categoryKey)).size} categories`}
        </div>
      )}
    </div>
  )
}
