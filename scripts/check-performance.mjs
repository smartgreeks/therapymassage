import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

// Run against a locally running production build: npm run check:performance
const base = process.argv[2] || 'http://127.0.0.1:3100'
const get = (path, options) => fetch(new URL(path, base), options)
const redirect = await get('/?utm_source=smoke', { redirect: 'manual' })
assert.equal(redirect.status, 307)
const destination = new URL(redirect.headers.get('location'), base)
assert.equal(destination.pathname, '/el')
assert.equal(destination.search, '?utm_source=smoke')

const manifest = JSON.parse(await readFile(new URL('../.next/prerender-manifest.json', import.meta.url), 'utf8'))
const paths = Object.keys(manifest.routes).filter(path => /^\/(el|en)(\/|$)/.test(path) && !path.includes('/admin/'))
let fontBytes = 0
for (const path of paths) {
  const response = await get(path)
  assert.equal(response.status, 200, path)
  const html = await response.text()
  const locale = path.split('/')[1]
  assert.ok(html.includes(`<html lang="${locale}"`), `${path}: locale`)
  assert.ok(!html.includes('animate-routeFade'), `${path}: no hidden route wrapper`)
  const preloads = [...html.matchAll(/<link\b[^>]*as="font"[^>]*>/g)]
  assert.equal(preloads.length, 2, `${path}: font preloads`)

  if (path === '/el' || path === '/en') {
    assert.ok(html.includes('<picture>'), `${path}: responsive hero`)
    assert.ok(html.includes('fetchPriority="high"'), `${path}: hero priority`)
    assert.ok(html.includes('id="faq-title"'), `${path}: FAQ in initial HTML`)
    assert.ok(html.includes('id="testimonials-title"'), `${path}: reviews in initial HTML`)
    assert.ok(html.includes('room1.webp'), `${path}: carousel in initial HTML`)
    assert.ok(!html.includes('BAILOUT_TO_CLIENT_SIDE_RENDERING'), `${path}: no client-only sections`)
    assert.ok(!html.includes('href="/services"'), `${path}: localized links`)
  }
  if (path === '/el') {
    for (const [tag] of preloads) {
      const response = await get(tag.match(/href="([^"]+)"/)[1])
      assert.equal(response.status, 200)
      fontBytes += (await response.arrayBuffer()).byteLength
    }
  }
  if (path.includes('/services/')) {
    assert.equal((html.match(/<link\b[^>]*as="image"/g) || []).length, 0, `${path}: no eager category image preloads`)
    assert.equal((html.match(/loading="eager"/g) || []).length, 0, `${path}: offscreen images are lazy`)
  }
}

for (const file of ['/favicon-32x32.png', '/apple-touch-icon.png', '/android-chrome-192x192.png']) {
  const response = await get(file, { redirect: 'manual' })
  assert.equal(response.status, 200, file)
  assert.ok(response.headers.get('content-type').includes('image/png'), file)
}
const hero = JSON.parse(await readFile(new URL('../lib/hero-images.json', import.meta.url), 'utf8'))
for (const format of ['avif', 'webp']) {
  for (const variant of hero[format]) {
    const response = await get(variant.src)
    assert.equal(response.status, 200, variant.src)
    assert.ok(response.headers.get('content-type').includes(`image/${format}`), variant.src)
    assert.ok(response.headers.get('cache-control').includes('immutable'), variant.src)
    assert.ok(!response.headers.has('x-nextjs-cache'), `${variant.src}: served without runtime conversion`)
    assert.ok((await response.arrayBuffer()).byteLength > 0)
  }
}
console.log(`PASS: ${paths.length} public pages, locale redirects, icons, SSR content, lazy category images and all 8 static hero variants. Font preloads: ${fontBytes} bytes (previously 415144).`)
