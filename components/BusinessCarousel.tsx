"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useT } from '@/lib/TProvider'

interface BusinessImage {
  src: string
  alt: string
  title: string
  description: string
}

export default function BusinessCarousel() {
  const t = useT()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Business space images - real photos from the massage therapy space
  const images: BusinessImage[] = [
    {
      src: '/images/place/room1.webp',
      alt: t('business.reception.alt'),
      title: t('business.reception.title'),
      description: t('business.reception.description')
    },
    {
      src: '/images/place/room2.webp', 
      alt: t('business.massageRoom.alt'),
      title: t('business.massageRoom.title'),
      description: t('business.massageRoom.description')
    },
    {
      src: '/images/place/room3.webp',
      alt: t('business.relaxationArea.alt'), 
      title: t('business.relaxationArea.title'),
      description: t('business.relaxationArea.description')
    },
    {
      src: '/images/place/room4.webp',
      alt: t('business.equipment.alt'),
      title: t('business.equipment.title'), 
      description: t('business.equipment.description')
    },
    {
      src: '/images/place/room5.webp',
      alt: t('business.ambiance.alt'),
      title: t('business.ambiance.title'),
      description: t('business.ambiance.description')
    },
    {
      src: '/images/place/room7.webp',
      alt: t('business.ambiance.alt'),
      title: t('business.ambiance.title'),
      description: t('business.ambiance.description')
    },
    {
      src: '/images/place/room8.webp',
      alt: t('business.ambiance.alt'),
      title: t('business.ambiance.title'),
      description: t('business.ambiance.description')
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  // Get custom object positioning for specific images
  const getImageClassName = (index: number) => {
    const baseClass = "object-cover transition-transform duration-700"
    
    switch (index) {
      case 2: // room3.webp - 3rd image - focus on center-top area
        return `${baseClass} object-center-top`
      case 3: // room4.webp - 4th image - focus on left-center area  
        return `${baseClass} object-left-center`
      case 4: // room5.webp - 5th image - focus on center and bottom
        return `${baseClass} object-center-bottom`
      default:
        return `${baseClass} object-center`
    }
  }

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-sand/20">
      <div className="container-safe">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-olive-900 mb-4 font-playfair">
            {t('business.sectionTitle')}
          </h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            {t('business.sectionDescription')}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-2xl bg-olive-100 shadow-2xl">
            {images.map((image, index) => {
              const prev = (currentIndex - 1 + images.length) % images.length
              const next = (currentIndex + 1) % images.length
              const isVisible = index === currentIndex || index === prev || index === next
              if (!isVisible) return null
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    className={getImageClassName(index)}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-900/60 via-transparent to-transparent" />
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
                    <div className="text-white animate-fadeInUp">
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-2 font-playfair">
                        {image.title}
                      </h3>
                      <p className="text-sand text-lg max-w-2xl">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-olive-900 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label={t('business.previousImage')}
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-olive-900 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label={t('business.nextImage')}
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`${t('business.goToImage')} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview (Hidden on mobile) */}
        <div className="hidden lg:flex justify-center mt-8 space-x-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-olive-500 scale-110'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="80px"
                className={getImageClassName(index)}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
