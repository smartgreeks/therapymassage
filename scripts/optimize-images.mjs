import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const INPUT_DIRS = [
  path.join(ROOT, 'public', 'images'),
  path.join(ROOT, 'public', 'images', 'services'),
]
const exts = new Set(['.jpg', '.jpeg', '.png'])

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

  const out = input.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  try {
    // Skip if optimized already exists and is newer than input
    const [inStat, outStat] = await Promise.allSettled([fs.stat(input), fs.stat(out)])
    if (outStat.status === 'fulfilled' && inStat.status === 'fulfilled') {
      if (outStat.value.mtimeMs >= inStat.value.mtimeMs) return false
    }

    const buf = await fs.readFile(input)
    const image = sharp(buf)
    const meta = await image.metadata()

    // Limit max width to 2000px to keep payloads reasonable
    const width = meta.width && meta.width > 2000 ? 2000 : meta.width

    const pipeline = image.resize({ width, withoutEnlargement: true }).webp({ quality: 78 })
    await pipeline.toFile(out)
    console.log('Optimized ->', path.relative(ROOT, out))
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
  console.log(`Done. Converted ${count} file(s) to WebP.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

