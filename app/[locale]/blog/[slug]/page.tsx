import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { getDictionary } from '@/lib/i18n'
import { TProvider } from '@/lib/TProvider'
import { getBlogPost, getAllBlogSlugs, getRelatedBlogPosts } from '@/lib/blogPosts'
import BlogSidebar from '@/components/BlogSidebar'
import TelephoneCTA from '@/components/TelephoneCTA'

type Props = {
  params: { locale: 'el' | 'en'; slug: string }
}

export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  const locales = ['el', 'en']
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({ locale, slug }))
  )
}

export const dynamicParams = false

export default function BlogPostPage({ params }: Props) {
  const dict = getDictionary(params.locale)
  const post = getBlogPost(params.slug, params.locale)
  const relatedPosts = getRelatedBlogPosts(params.slug, params.locale, 3)
  
  if (!post) {
    notFound()
  }

  return (
    <TProvider locale={params.locale} dict={dict}>
      <main>
        <section className="bg-olive-900 text-beige">
          <div className="container-safe py-16">
            <Link prefetch={false}
              href={`/${params.locale}/blog`} 
              className="inline-flex items-center gap-2 text-beige/80 hover:text-beige mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {params.locale === 'el' ? 'Πίσω στο Blog' : 'Back to Blog'}
            </Link>
            <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-beige/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString(params.locale === 'el' ? 'el-GR' : 'en-US')}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Massage Therapy</span>
              </div>
            </div>
          </div>
        </section>

        <article className="container-safe py-16">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <Image 
                src={post.imageUrl} 
                alt={post.title} 
                fill 
                className="object-cover" 
              />
            </div>
            
            <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
              <article>
                <h1 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {post.title}
                </h1>
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-olive-900 prose-p:text-olive-800 prose-a:text-olive-700 prose-figure:my-8 prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
              
              <div className="order-first lg:order-last lg:sticky lg:top-24 h-max">
                <BlogSidebar 
                  relatedPosts={relatedPosts}
                  currentPost={{
                    title: post.title,
                    excerpt: post.excerpt,
                    category: post.category
                  }}
                />
              </div>
            </div>
          </div>
        </article>
        <div className="container-safe py-16">
          <div className="max-w-7xl mx-auto">
            <TelephoneCTA />
          </div>
        </div>
      </main>
    </TProvider>
  )
}
