import Image from "next/image"
import Link from "next/link"

const posts = [
  { slug: "benefits-of-reflexology", title: "5 οφέλη της ρεφλεξολογίας", intro: "Πώς η ρεφλεξολογία συμβάλλει στη χαλάρωση και ισορροπία.", image: "/images/blog/reflexology.svg" },
  { slug: "aromatherapy-for-stress", title: "Αρωματοθεραπεία για άγχος", intro: "Αιθέρια έλαια και τεχνικές που μειώνουν την ένταση.", image: "/images/blog/aroma.svg" },
  { slug: "pre-run-massage", title: "Πριν το τρέξιμο: μασάζ", intro: "Μικρός οδηγός προθέρμανσης και φροντίδας μυών.", image: "/images/blog/athletic.svg" },
]

export default function BlogPreview() {
  return (
    <section aria-labelledby="blog-title" className="container-safe py-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 id="blog-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Από το Blog</h2>
          <p className="mt-2 section-subtitle">Ιδέες, συμβουλές και άρθρα για ευεξία.</p>
        </div>
        <Link href="/blog" className="btn btn-outline">Δείτε όλα</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="card overflow-hidden">
            <div className="relative h-44">
              <Image src={p.image} alt={p.title} fill className="object-cover object-center" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-olive-800/80">{p.intro}</p>
              <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-olive-700 hover:underline">Διαβάστε περισσότερα →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
