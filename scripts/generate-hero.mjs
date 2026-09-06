import { createHash } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = fileURLToPath(new URL('../', import.meta.url))
const source = path.join(root, 'public/images/therapy3.webp')
const output = path.join(root, 'public/images/generated')
await mkdir(output, { recursive: true })
const { width, height } = await sharp(source).metadata()
const widths = [...new Set([480, 768, 1080, width].filter(value => value <= width))]
const manifest = { width, height, avif: [], webp: [] }

// Encode once during the build, rather than during a visitor's first request.
for (const format of ['avif', 'webp']) {
  for (const targetWidth of widths) {
    const buffer = await sharp(source)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .toFormat(format, { quality: format === 'avif' ? 50 : 75 })
      .toBuffer()
    const hash = createHash('sha256').update(buffer).digest('hex').slice(0, 12)
    const name = `hero-${targetWidth}-${hash}.${format}`
    await writeFile(path.join(output, name), buffer)
    manifest[format].push({ src: `/images/generated/${name}`, width: targetWidth })
  }
}
await writeFile(path.join(root, 'lib/hero-images.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(`Prepared ${widths.length} hero sizes in AVIF and WebP.`)
