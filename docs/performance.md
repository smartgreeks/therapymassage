# Performance changes

The hero is encoded into four responsive AVIF and WebP sizes by
`scripts/generate-hero.mjs`. `npm run dev` and `npm run build` run this automatically.
The source remains `public/images/therapy3.webp`; generated filenames contain a
content hash and receive a one-year immutable cache header. Commit the generated
manifest and images with changes to the source. Other Next.js images use WebP to
reduce encoding work on a cache miss.

Body text keeps the existing system font. Only Noto Serif's Latin and Greek
subsets are preloaded. The unused Inter downloads and speculative image warmer
have been removed. The hero no longer waits for client hydration or a route fade.
Carousel, reviews and FAQ render in the initial HTML. Carousel autoplay pauses
outside the viewport. Service card galleries load only the selected image lazily.

## Verification

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
# In a second terminal:
npm run check:performance
```

The smoke check covers public prerendered routes in both locales, preserved query
parameters on the root redirect, public icons, SSR sections, image priorities,
font bytes, and generated hero files and cache headers. Also check mobile menu,
language switching, FAQ, carousel and multi-image service cards in the browser.

The application now redirects `/` directly to `/el`, avoiding the `/el/` hop.
The non-www to www redirect is controlled by the hosting layer. A single redirect
from the bare domain directly to `https://www.therapy-massage.gr/el` requires a
hosting rule; this repository does not control that external redirect.

Baseline on 2026-09-06: public mobile PageSpeed score 69, simulated slow-4G LCP
5.1 seconds; field LCP 2.7 seconds. These are separate measures. New public
PageSpeed results must be measured after deployment, not inferred from localhost.
