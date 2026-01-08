import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { getDictionary } from "@/lib/i18n"
import { TProvider } from "@/lib/TProvider"
import { getBlogPosts } from "@/lib/blogPosts"
import TelephoneCTA from "@/components/TelephoneCTA"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'el' ? 'Blog' : 'Blog'
  }
}

function BlogContent({ locale }: { locale: 'el' | 'en' }) {
  const posts = getBlogPosts(locale)

  const text = locale === 'el' ? {
    title: 'Από το Blog',
    subtitle: 'Νέα, συμβουλές και άρθρα για ευεξία και φροντίδα.',
    readMore: 'Διαβάστε περισσότερα'
  } : {
    title: 'From the Blog',
    subtitle: 'News, tips and articles about wellness and care.',
    readMore: 'Read more'
  }

  return (
    <main>
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-16">
          <h1 className="text-4xl font-semibold font-playfair">
            {text.title}
          </h1>
          <p className="mt-2 text-beige/80">{text.subtitle}</p>
        </div>
      </section>

      <section className="container-safe py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={post.slug} className={`card overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg animate-fadeInUp animate-delay-${i * 100}`}>
              <div className="relative h-48">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover object-center" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-olive-600 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString(locale === 'el' ? 'el-GR' : 'en-US')}</span>
                </div>
                <h2 className="font-semibold text-xl mb-3 font-playfair">
                  {post.title}
                </h2>
                <p className="text-olive-800/80 mb-4">{post.excerpt}</p>
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
      <div className="container-safe mt-16">
        <TelephoneCTA />
      </div>
    </main>
  )
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const validLocale = (locale === 'el' || locale === 'en') ? locale : 'el'
  const dict = getDictionary(validLocale)

  return (
    <TProvider locale={validLocale} dict={dict}>
      <BlogContent locale={validLocale} />
    </TProvider>
  )
}

