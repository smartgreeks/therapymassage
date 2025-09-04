import ServiceCard from "./ServiceCard"

const services = [
  { slug: "euexia", title: "Ευεξία", desc: "Χαλάρωση και ισορροπία σώματος και νου.", image: "/images/place3.webp" },
  { slug: "omorfia", title: "Ομορφιά", desc: "Περιποίηση προσώπου και σώματος για λάμψη.", image: "/images/services/service10.webp" },
  { slug: "energeiakes-therapeies", title: "Ενεργειακές θεραπείες", desc: "Τεχνικές για αναζωογόνηση και ευθυγράμμιση ενέργειας.", image: "/images/services/service13.webp" },
  { slug: "idiaiteres-stigmes", title: "Ιδιαίτερες στιγμές", desc: "Πακέτα για ζευγάρια, γενέθλια και επετείους.", image: "/images/services/srvs2.webp" },
  { slug: "special-events", title: "Special Events", desc: "On-site υπηρεσίες για εταιρικά events και ομάδες.", image: "/images/services/srvs15.webp" },
  { slug: "gift-cards", title: "Gift Cards", desc: "Δώσε ευεξία σε όσους αγαπάς.", image: "/images/services/srvs13.webp" },
]

export default function ServicesGrid({ withTitle = true }: { withTitle?: boolean }) {
  return (
    <section aria-labelledby="services-title" className="container-safe py-16">
      {withTitle && (
        <div className="mb-8">
          <h2 id="services-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Οι Υπηρεσίες μας</h2>
          <p className="mt-2 section-subtitle">Επίλεξε κατηγορία για να δεις υποκατηγορίες.</p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s.slug} title={s.title} desc={s.desc} image={s.image} href={`/services/${s.slug}`} />
        ))}
      </div>
    </section>
  )
}

