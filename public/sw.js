// Service Worker for aggressive image caching
const CACHE_NAME = 'therapy-massage-images-v1'

const IMAGE_EXTENSIONS = ['.webp', '.avif', '.jpg', '.jpeg', '.png', '.svg']

const isImageRequest = (url) => {
  return IMAGE_EXTENSIONS.some(ext => url.pathname.toLowerCase().includes(ext))
}

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  
  // Only handle image requests from our domain
  if (url.origin === self.location.origin && isImageRequest(url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            return response
          }

          return fetch(event.request).then(fetchResponse => {
            // Cache successful responses
            if (fetchResponse.ok) {
              cache.put(event.request, fetchResponse.clone())
            }
            return fetchResponse
          }).catch(() => {
            // Return a fallback image if the request fails
            return cache.match('/images/hero.webp')
          })
        })
      })
    )
  }
})
