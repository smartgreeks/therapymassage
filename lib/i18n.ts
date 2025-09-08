import { readFileSync } from 'fs'
import { join } from 'path'

export type Locale = 'el' | 'en'

export function getDictionary(locale: Locale) {
  try {
    const filePath = join(process.cwd(), 'locales', locale, 'common.json')
    const fileContents = readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    try {
      const fallbackPath = join(process.cwd(), 'locales', 'el', 'common.json')
      const fallbackContents = readFileSync(fallbackPath, 'utf8')
      return JSON.parse(fallbackContents)
    } catch (fallbackError) {
      return {}
    }
  }
}

