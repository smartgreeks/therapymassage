import ServiceCard from "./ServiceCard"

const services = [
  { title: "Χαλαρωτικό Μασάζ", desc: "Απαλό μασάζ σώματος που αποβάλλει την ένταση και χαρίζει βαθιά ηρεμία.", duration: "60΄", price: "€55", image: "/images/services/relaxing.svg" },
  { title: "Αθλητικό Μασάζ", desc: "Στοχευμένη φροντίδα για αποκατάσταση μυών και απόδοση.", duration: "60΄", price: "€65", image: "/images/services/athletic.svg" },
  { title: "Ρεφλεξολογία", desc: "Θεραπεία ποδιών που διεγείρει αντανακλαστικά σημεία για ισορροπία στο σώμα.", duration: "45΄", price: "€40", image: "/images/services/reflexology.svg" },
  { title: "Ανόρθωση Προσώπου", desc: "Μη επεμβατικό μασάζ προσώπου για τόνωση και φρεσκάδα.", duration: "45΄", price: "€45", image: "/images/services/face.svg" },
  { title: "Μασάζ Βαθείας Πίεσης", desc: "Σταθερή πίεση για ανακούφιση χρόνιων μυϊκών εντάσεων.", duration: "60΄", price: "€70", image: "/images/services/deeptissue.svg" },
  { title: "Αρωματοθεραπεία", desc: "Θεραπευτικά αιθέρια έλαια για διάθεση και ευεξία.", duration: "60΄", price: "€60", image: "/images/services/aroma.svg" },
]

export default function ServicesGrid({ withTitle = true }: { withTitle?: boolean }) {
  return (
    <section aria-labelledby="services-title" className="container-safe py-16">
      {withTitle && (
        <div className="mb-8">
          <h2 id="services-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Οι Υπηρεσίες μας</h2>
          <p className="mt-2 section-subtitle">Επιλέξτε από μια επιμελημένη συλλογή θεραπειών που αποκαθιστούν την ισορροπία.</p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}
