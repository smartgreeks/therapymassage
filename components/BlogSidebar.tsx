"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { useT, useLocale } from '@/lib/TProvider'

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}

interface BlogSidebarProps {
  relatedPosts: RelatedPost[];
  currentPost: {
    title: string;
    excerpt: string;
    category: string;
  };
}

export default function BlogSidebar({ relatedPosts, currentPost }: BlogSidebarProps) {
  const t = useT()
  const locale = useLocale()

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-max">
      {/* Article Summary */}
      <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-6">
        <h3 className="font-semibold text-lg mb-3 text-olive-900">
          {locale === 'el' ? 'Περίληψη Άρθρου' : 'Article Summary'}
        </h3>
        <div className="space-y-3">
          <div className="text-sm text-olive-700 bg-olive-50 px-3 py-1 rounded-full inline-block">
            {currentPost.category}
          </div>
          <p className="text-olive-800/80 text-sm leading-relaxed">
            {currentPost.excerpt}
          </p>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-6">
          <h3 className="font-semibold text-lg mb-4 text-olive-900">
            {locale === 'el' ? 'Σχετικά Άρθρα' : 'Related Articles'}
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link 
                  href={`/${locale}/blog/${post.slug}`} 
                  className="block hover:bg-olive-50/50 rounded-lg p-2 -m-2 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="64px"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVbqfE5eMtOEd5OVDW4MZp6LLEqjZJGTKP0mH8GNK8w=="
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-olive-900 text-sm leading-snug mb-1 group-hover:text-olive-700 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-olive-600">
                        <Calendar className="h-3 w-3" />
                        <time>
                          {new Date(post.publishedAt).toLocaleDateString(
                            locale === 'el' ? 'el-GR' : 'en-US',
                            { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            }
                          )}
                        </time>
                      </div>
                      <div className="text-xs text-olive-700 bg-olive-50 px-2 py-0.5 rounded-full inline-block mt-1">
                        {post.category}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {/* View All Articles Link */}
          <div className="mt-6 pt-4 border-t border-sand/60">
            <Link 
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors group"
            >
              {locale === 'el' ? 'Δείτε όλα τα άρθρα' : 'View all articles'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="rounded-xl border border-olive-200 bg-gradient-to-br from-olive-50 to-olive-100 p-6">
        <h3 className="font-semibold text-lg mb-3 text-olive-900">
          {locale === 'el' ? 'Έτοιμοι να ξεκινήσετε;' : 'Ready to get started?'}
        </h3>
        <p className="text-olive-800 text-sm mb-4">
          {locale === 'el' 
            ? 'Κλείστε ραντεβού και ανακαλύψτε τα οφέλη των υπηρεσιών μας.'
            : 'Book an appointment and discover the benefits of our services.'
          }
        </p>
        <Link 
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-olive-900 text-beige px-4 py-2 rounded-lg text-sm font-medium hover:bg-olive-800 transition-colors"
        >
          {locale === 'el' ? 'Επικοινωνία' : 'Contact Us'}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  )
}
