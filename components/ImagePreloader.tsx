"use client"
import { useEffect } from 'react'

interface ImagePreloaderProps {
  images: string[]
  priority?: boolean
}

export default function ImagePreloader({ images, priority = false }: ImagePreloaderProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const warmImages = () => {
      images.forEach((src) => {
        const img = new Image()
        // Hints for browsers; won’t block rendering like <link rel="preload">
        // Load after main work is done; decoding async avoids main-thread jank
        ;(img as any).fetchPriority = 'low'
        img.decoding = 'async'
        img.loading = 'eager'
        img.src = src
      })
    }

    // Schedule after the page is interactive to avoid competing with critical CSS/JS
    const schedule = () => {
      // Prefer browser idle time when available
      const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: any) => number)
      if (ric) ric(warmImages, { timeout: 4000 })
      else setTimeout(warmImages, 2500)
    }

    // Defer until after first paint
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })

    return () => {
      window.removeEventListener('load', schedule as any)
    }
  }, [images, priority])

  return null
}
