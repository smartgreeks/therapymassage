import Image from "next/image"
import Link from "next/link"

const posts = [
  { slug: "benefits-of-reflexology", title: "5 οφέλη της ρεφλεξολογίας", intro: "Πώς τα αντανακλαστικά σημεία στα πόδια βελτιώνουν την ευεξία.", image: "/images/blog/reflexology.svg", date: "2025-08-01" },
  { slug: "aromatherapy-for-stress", title: "Αρωματοθεραπεία για μείωση άγχους", intro: "Αιθέρια έλαια που ηρεμούν σώμα και νου.", image: "/images/blog/aroma.svg", date: "2025-07-15" },
  { slug: "pre-run-massage", title: "Tips μασάζ πριν το τρέξιμο", intro: "Προετοιμάστε τους μύες και προλάβετε τραυματισμούς.", image: "/images/blog/athletic.svg", date: "2025-06-20" },
]

export const metadata = { title: "Ιστολόγιο" }

export default function BlogPage() {
  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Ιστολόγιο</h1>
          <p className="mt-2 text-beige/80">Συμβουλές και ιδέες από τους θεραπευτές μας.</p>
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
              <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-olive-700 hover:underline">Περισσότερα →</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
