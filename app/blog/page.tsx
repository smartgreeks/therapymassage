import Image from "next/image"
import Link from "next/link"

import blogPosts from "@/lib/blogPosts"

const posts = blogPosts

export const metadata = { title: "Blog" }

function truncateWords(text: string, words: number) {
  const parts = text.split(/\s+/).filter(Boolean)
  if (parts.length <= words) return text
  return parts.slice(0, words).join(" ") + "…"
}

export default function BlogPage() {
  const MAX_WORDS = 16
  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Blog</h1>
          <p className="mt-2 text-beige/80">Άρθρα για μασάζ, ευεξία και πρακτικές αυτοφροντίδας.</p>
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
              <p className="mt-2 text-olive-800/80">{truncateWords(p.intro, MAX_WORDS)}</p>
              <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-olive-700 hover:underline">Διαβάστε περισσότερα →</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
