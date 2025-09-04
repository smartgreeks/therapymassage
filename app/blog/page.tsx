import Image from "next/image"
import Link from "next/link"

const posts = [
  { slug: "benefits-of-reflexology", title: "5 οφέλη της ρεφλεξολογίας", intro: "Πώς η ρεφλεξολογία συμβάλλει στη χαλάρωση και ισορροπία.", image: "/images/blog/reflexology.svg", date: "2025-08-01" },
  { slug: "aromatherapy-for-stress", title: "Αρωματοθεραπεία για άγχος", intro: "Αιθέρια έλαια και τεχνικές που μειώνουν την ένταση.", image: "/images/blog/aroma.svg", date: "2025-07-15" },
  { slug: "pre-run-massage", title: "Πριν το τρέξιμο: μασάζ", intro: "Μικρός οδηγός προθέρμανσης και φροντίδας μυών.", image: "/images/blog/athletic.svg", date: "2025-06-20" },
]

export const metadata = { title: "Blog" }

export default function BlogPage() {
  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Blog</h1>
          <p className="mt-2 text-beige/80">Άρθρα και συμβουλές από την ομάδα μας.</p>
        </div>
      </section>
      <section className="container-safe py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="text-sm text-olive-700/80">{new Date(p.date).toLocaleDateString()}</div>
              <h2 className="mt-1 font-semibold text-xl">{p.title}</h2>
              <p className="mt-2 text-olive-800/80">{p.intro}</p>
              <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-olive-700 hover:underline">Διαβάστε περισσότερα →</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}


