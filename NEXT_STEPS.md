
- Blog
  - Removed dummy posts from homepage preview and blog list.
  - Introduced shared metadata source lib/blogPosts.ts (single source of truth for slug, 	itle, intro, image, date).
  - Homepage preview (components/BlogPreview.tsx) and Blog list (pp/blog/page.tsx) now read from the same data to keep thumbnails in sync.
  - Therapy Massage article hero updated to /images/services/eueksiaImage.webp and synced across previews.
  - ???�at??e?ape?a & ????? article hero updated to /images/place10.webp and synced across previews + OpenGraph/Twitter/JSON-LD.- Images: Added WebP optimization script `scripts/optimize-images.mjs` and converted all JPG/PNG under `public/images` (+/services). Updated About image; wired category/service images as requested.
- Services UI: Cards now support images (with optional multiple images via `ServiceCardImages` slider). Intelligent fit (cover/contain) ensures essential content is visible.
- Content: Fixed Greek mojibake across pages (Hero, About, Services, Blog, Contact, Footer, metadata). Corrected brand name to "Therapy Massage" everywhere.
- Navigation: Prominent CTA "?p????????a" at end of navbar (desktop+mobile). Added Hero CTA for contact. Smooth anchor scroll to contact.
- Contact: Replaced contact form with telephone-first CTA. Added today/open-now status + collapsible full hours, correct phone (210 464 4289), correct address (?e?f. Fa?e??�???? 83, Sa?a�??a 18900), updated Google Maps iframe. Emphasized callback note in bold.
- Services pages: Clean Greek content, fixed durations (') and currency (�), adjusted add-on markers, added Telephone CTA to `/services` and all `/services/[category]` pages.
- Styling: Added glass (liquid) button styles for Hero CTAs; preserved brand palette. Minor polish to selects and badges.
- Build: Fixed TS issues in Ark UI selects/date-picker by simplifying `SelectField` to native `<select>` and relaxing date-picker generics. Project builds cleanly with `next build`.
- Cleanup: Removed legacy booking routes/components, floating chat; cleaned backup/tmp artifacts from workspace.

Production readiness checklist

- Build passes: `npm run build` ? OK.
- Type check: covered via Next build. No TS errors.
- Lint: optional `npm run lint` (not strictly required; config unchanged).
- Accessibility: keyboard/ARIA on custom controls; contact hours use native `<details>`/`<summary>`.
- Images: use `next/image`; optimized assets in WebP; originals retained for fallback.
- Links: Navbar/Footer links updated; Contact anchor `/#contact` works.

Next Steps (To-Do)

1) Content finalization
   - Confirm all service titles/descriptions, durations/prices, and add-ons per category from client�s material.
   - Provide images per sub-service; add additional images where beneficial.

2) Slugs/SEO
   - Decide slug strategy (transliteration/latinized) and ensure canonical URLs.
   - Add per-category/page `metadata` titles/descriptions; configure JSON-LD `Service`/`Offer` where prices exist.

3) Visual polish
   - Optional sheen animation for glass buttons; refine object positions for tricky images.
   - Gallery on About (2�4 photos) if desired.

4) QA
   - Full sweep on `/services/*` pages (mobile/desktop), contrast, focus states, alt texts.
   - Cross-browser check (Safari iOS, Chrome Android).

5) Deployment
   - Image optimization: run `npm run optimize:images` before commit if new images added.
   - Build: `npm run build`; Start: `npm start`.
   - Prepare ENV if newsletter/contact backend used later.

Open Questions

- Final copy for certain services/add-ons (e.g., wording nuances).
- Confirm if we want a services gallery on About/home.
- When to enable SEO JSON-LD and per-page metadata.


Blog follow-ups

- Add future posts in lib/blogPosts.ts (title/intro/image/date) so homepage/blog list stay in sync.
- Optionally co-locate post summary in each article file and export a typed summary to avoid duplicating data.
- Standardize dates (YYYY-MM-DD) and ensure Greek alt texts are clear and descriptive.
- Quick content pass for any leftover mojibake in article bodies (replace with proper Greek text).
