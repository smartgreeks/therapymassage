"use client"
import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  desc: string
  image: string
  duration?: string
  price?: string
  href?: string
}

export default function ServiceCard({ title, desc, duration, price, image, href }: Props) {
  const CardInner = () => (
    <>
      <div className="relative h-48 sm:h-56">
        <Image src={image} alt={`${title} image`} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          {price ? <span className="text-olive-700 font-medium">{price}</span> : null}
        </div>
        <p className="mt-2 text-olive-800/80">{desc}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-olive-700">
          {duration ? <span>{duration}</span> : <span />}
        </div>
      </div>
    </>
  )

  return href ? (
    <div className="card overflow-hidden group relative">
      <CardInner />
      <Link href={href} aria-label={`Περισσότερα για: ${title}`} className="absolute inset-0">
        <span className="sr-only">{title}</span>
      </Link>
    </div>
  ) : (
    <div className="card overflow-hidden group">
      <CardInner />
    </div>
  )
}
