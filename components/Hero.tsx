import Link from 'next/link'
import { getDictionary, type Locale } from '@/lib/i18n'
import images from '@/lib/hero-images.json'

export default function Hero({ locale }: { locale: Locale }) {
  const { hero } = getDictionary(locale)
  const srcSet = (variants: typeof images.webp) => variants.map(image => `${image.src} ${image.width}w`).join(', ')
  // object-cover enlarges this landscape photo in the tall mobile hero.
  const sizes = `max(100vw, ${(70 * images.width / images.height).toFixed(2)}vh, ${Math.ceil(480 * images.width / images.height)}px)`

  return (
    <section aria-label="Hero" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-olive-100">
      <picture>
        <source type="image/avif" srcSet={srcSet(images.avif)} sizes={sizes} />
        <img
          src={images.webp[images.webp.length - 1].src}
          srcSet={srcSet(images.webp)}
          sizes={sizes}
          alt={hero.alt}
          width={images.width}
          height={images.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-olive-900/50 pointer-events-none" />
      <div className="relative container-safe h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight font-playfair">{hero.title}</h1>
          <p className="mt-4 text-lg text-sand">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link prefetch={false} href={`/${locale}/services`} className="btn btn-primary">{hero.servicesBtn}</Link>
            <Link prefetch={false} href={`/${locale}/#contact`} className="btn btn-outline">{hero.contactBtn}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
