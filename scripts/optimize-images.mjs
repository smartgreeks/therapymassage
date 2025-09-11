import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const INPUT_DIRS = [
  path.join(ROOT, 'public', 'images'),
  path.join(ROOT, 'public', 'images', 'services'),
]
const exts = new Set(['.jpg', '.jpeg', '.png'])

// Responsive breakpoints for generating multiple sizes
const BREAKPOINTS = [640, 750, 828, 1080, 1200, 1920]

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const fp = path.join(dir, e.name)
    if (e.isDirectory()) {
      yield* walk(fp)
    } else {
      yield fp
    }
  }
}

async function optimizeFile(input) {
  const ext = path.extname(input).toLowerCase()
  if (!exts.has(ext)) return false

  const basename = path.basename(input, ext)
  const dirname = path.dirname(input)
  const out = path.join(dirname, `${basename}.webp`)
  
  try {
    // Skip if optimized already exists and is newer than input
    const [inStat, outStat] = await Promise.allSettled([fs.stat(input), fs.stat(out)])
    if (outStat.status === 'fulfilled' && inStat.status === 'fulfilled') {
      if (outStat.value.mtimeMs >= inStat.value.mtimeMs) return false
    }

    const buf = await fs.readFile(input)
    const image = sharp(buf)
    const meta = await image.metadata()

    // Generate main optimized image
    const mainWidth = meta.width && meta.width > 1920 ? 1920 : meta.width
    await image
      .resize({ width: mainWidth, withoutEnlargement: true })
      .webp({ 
        quality: 85, 
        effort: 6,
        smartSubsample: true
      })
      .toFile(out)

    console.log('Optimized ->', path.relative(ROOT, out))

    // Generate responsive variants for larger images
    if (meta.width && meta.width > 640) {
      for (const width of BREAKPOINTS) {
        if (width >= (meta.width || 0)) continue
        
        const responsiveOut = path.join(dirname, `${basename}-${width}w.webp`)
        
        // Check if responsive image already exists and is newer
        const responsiveStat = await fs.stat(responsiveOut).catch(() => null)
        if (responsiveStat && responsiveStat.mtimeMs >= inStat.value.mtimeMs) continue

        await image
          .resize({ width, withoutEnlargement: true })
          .webp({ 
            quality: width <= 828 ? 80 : 85, 
            effort: 6,
            smartSubsample: true
          })
          .toFile(responsiveOut)

        console.log('Generated responsive ->', path.relative(ROOT, responsiveOut))
      }
    }

    return true
  } catch (err) {
    console.warn('Skip/Fail:', input, err?.message || err)
    return false
  }
}

async function main() {
  let count = 0
  for (const dir of INPUT_DIRS) {
    try {
      for await (const file of walk(dir)) {
        const did = await optimizeFile(file)
        if (did) count++
      }
    } catch {}
  }
  console.log(`Done. Converted ${count} file(s) to WebP with responsive variants.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

