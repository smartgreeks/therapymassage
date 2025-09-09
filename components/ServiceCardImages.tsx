"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ServiceCardImages({ images, alt }: { images: string[]; alt: string }) {
  const imgs = images && images.length ? images : []
  const [idx, setIdx] = useState(0)
  const [fits, setFits] = useState<Record<number, 'cover' | 'contain'>>({})
  const hasMany = imgs.length > 1
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [boxSize, setBoxSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 })

  useEffect(() => {
    if (!boxRef.current) return
    const el = boxRef.current
    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect()
      setBoxSize({ w: rect.width, h: rect.height })
    })
    ro.observe(el)
    // initial
    const rect = el.getBoundingClientRect()
    setBoxSize({ w: rect.width, h: rect.height })
    return () => ro.disconnect()
  }, [])

  const updateFit = (i: number, naturalWidth: number, naturalHeight: number) => {
    if (!naturalWidth || !naturalHeight || !boxSize.w || !boxSize.h) return
    const imgRatio = naturalWidth / naturalHeight
    const boxRatio = boxSize.w / boxSize.h
    const diff = Math.abs(imgRatio - boxRatio) / boxRatio
    // If ratios are close, prefer contain (show whole image). Otherwise use cover (show essential part centered).
    const fit: 'cover' | 'contain' = diff < 0.15 ? 'contain' : 'cover'
    setFits(prev => (prev[i] === fit ? prev : { ...prev, [i]: fit }))
  }

  const go = (next: number) => {
    if (!hasMany) return
    const n = imgs.length
    setIdx(((next % n) + n) % n)
  }

  return (
    <div ref={boxRef} className="relative h-40" role="group" aria-label={alt}>
      {imgs.map((src, i) => (
        <div key={src} className={`absolute inset-0 ${i === idx ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <Image
            src={src}
            alt={alt}
            fill
            className={`${(fits[i] ?? 'cover') === 'cover' ? 'object-cover' : 'object-contain'} object-center bg-olive-50`}
            priority={i === idx}
            loading={i === idx ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVbqfE5eMtOEd5OVDW4MZp6LLEqjZJGTKP0mH8GNK8w="
            onLoadingComplete={(img) => updateFit(i, img.naturalWidth, img.naturalHeight)}
          />
        </div>
      ))}
      {imgs.length === 0 && (
        <div className="absolute inset-0 bg-olive-100" aria-hidden="true" />
      )}
      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => go(idx - 1)}
            aria-label="Προηγούμενη εικόνα"
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            aria-label="Επόμενη εικόνα"
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {imgs.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Μετάβαση στην εικόνα ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 w-4 rounded-full ${i === idx ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
