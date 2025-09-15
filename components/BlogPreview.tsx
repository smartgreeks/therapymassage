import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { getBlogPosts } from "@/lib/blogPosts"

export default function BlogPreview({ locale }: { locale: 'el' | 'en' }) {
  const posts = getBlogPosts(locale)

  const text = locale === 'el' ? {
    title: 'Από το Blog',
    subtitle: 'Νέα, συμβουλές και άρθρα για ευεξία και φροντίδα.',
    viewAll: 'Δείτε όλα',
    readMore: 'Διαβάστε περισσότερα'
  } : {
    title: 'From the Blog',
    subtitle: 'News, tips and articles about wellness and care.',
    viewAll: 'View all',
    readMore: 'Read more'
  }

  return (
    <section aria-labelledby="blog-title" className="container-safe py-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 id="blog-title" className="section-title font-playfair">
            {text.title}
          </h2>
          <p className="mt-2 section-subtitle">{text.subtitle}</p>
        </div>
        <Link href={`/${locale}/blog`} className="btn btn-outline">
          {text.viewAll}
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post, i) => (
          <article key={post.slug} className={`card overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg animate-fadeInUp animate-delay-${i * 100}`}>
            <div className="relative h-44">
              <Image src={post.imageUrl} alt={post.title} fill className="object-cover object-center" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-olive-600 text-sm mb-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString(locale === 'el' ? 'el-GR' : 'en-US')}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-olive-800/80 mb-3">{post.excerpt}</p>
              <Link 
                href={`/${locale}/blog/${post.slug}`} 
                className="inline-flex items-center text-olive-700 hover:text-olive-900 font-medium"
              >
                {text.readMore} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
