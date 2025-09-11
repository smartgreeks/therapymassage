"use client"
import NextImage, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
  showErrorPlaceholder?: boolean
}

export default function OptimizedImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/hero.webp',
  showErrorPlaceholder = true,
  ...props 
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    } else if (showErrorPlaceholder) {
      setHasError(true)
    }
  }

  if (hasError && showErrorPlaceholder && imgSrc === fallbackSrc) {
    return (
      <div className="flex items-center justify-center bg-olive-100 text-olive-600 text-sm">
        <span>Image not available</span>
      </div>
    )
  }

  return (
    <NextImage
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  )
}
