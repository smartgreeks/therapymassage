"use client"
import { useEffect } from 'react'

interface ImagePreloaderProps {
  images: string[]
  priority?: boolean
}

export default function ImagePreloader({ images, priority = false }: ImagePreloaderProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const preloadImages = () => {
      images.forEach((src) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        if (priority) {
          link.fetchPriority = 'high'
        }
        document.head.appendChild(link)
      })
    }

    // Small delay to avoid blocking critical rendering
    const timer = setTimeout(preloadImages, priority ? 0 : 100)
    
    return () => {
      clearTimeout(timer)
    }
  }, [images, priority])

  return null
}
