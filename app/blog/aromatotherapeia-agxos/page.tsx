/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image"

export const metadata = {
  title: "Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση στο Therapy Massage",
  description:
    "Ανακαλύψτε πώς η αρωματοθεραπεία και τα αιθέρια έλαια μειώνουν το άγχος και ενισχύουν τη χαλάρωση. Therapy Massage – ευεξία με φυσικό τρόπο.",
  openGraph: {
    type: "article",
    title: "Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση στο Therapy Massage",
    description:
      "Ανακαλύψτε πώς η αρωματοθεραπεία και τα αιθέρια έλαια μειώνουν το άγχος και ενισχύουν τη χαλάρωση. Therapy Massage – ευεξία με φυσικό τρόπο.",
    url: "/blog/aromatotherapeia-agxos",
    images: [
      { url: "/images/place10.webp", width: 1200, height: 675, alt: "Αρωματοθεραπεία και χαλάρωση" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση στο Therapy Massage",
    description:
      "Ανακαλύψτε πώς η αρωματοθεραπεία και τα αιθέρια έλαια μειώνουν το άγχος και ενισχύουν τη χαλάρωση. Therapy Massage – ευεξία με φυσικό τρόπο.",
    images: ["/images/place10.webp"],
  },
  alternates: { canonical: "/blog/aromatotherapeia-agxos" },
}

const published = new Date().toISOString().slice(0, 10)

export default function BlogArticle() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση',
    description:
      'Πώς η αρωματοθεραπεία με αιθέρια έλαια μπορεί να μειώσει το άγχος και να ενισχύσει τη χαλάρωση και την ευεξία.',
    author: { '@type': 'Organization', name: 'Therapy Massage' },
    publisher: { '@type': 'Organization', name: 'Therapy Massage' },
    mainEntityOfPage: '/blog/aromatotherapeia-agxos',
    image: [
      '/images/place10.webp',
      '/images/hero.webp',
    ],
    datePublished: published,
    inLanguage: 'el-GR',
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Είναι ασφαλή τα αιθέρια έλαια για όλους;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Χρησιμοποιούμε ποιοτικά αιθέρια έλαια και εξατομικεύουμε την επιλογή τους. Αν έχετε αλλεργίες, ευαισθησίες ή εγκυμοσύνη, ενημερώστε μας πριν τη συνεδρία.',
        },
      },
      {
        '@type': 'Question',
        name: 'Πόσο συχνά μπορώ να κάνω αρωματοθεραπεία;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Εξαρτάται από τις ανάγκες σας. Πολλοί πελάτες ωφελούνται από συνεδρίες ανά 1–2 εβδομάδες, αλλά προσαρμόζουμε πάντα το πλάνο.',
        },
      },
    ],
  }

  return (
    <main id="content" aria-labelledby="page-title">
      <section className="bg-olive-900 text-beige">
        <div className="container-safe py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-beige/80">
            <ol className="flex gap-2">
              <li><a href="/" className="hover:underline">Αρχική</a></li>
              <li>/</li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li>/</li>
              <li aria-current="page">Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση</li>
            </ol>
          </nav>
          <h1 id="page-title" className="text-3xl md:text-4xl font-semibold mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση
          </h1>
          <p className="mt-2 text-beige/80">Δημοσίευση: {new Date(published).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="container-safe py-10 grid lg:grid-cols-[1fr_360px] gap-8">
        <article className="article-prose" itemScope itemType="https://schema.org/Article">
          <figure className="relative aspect-[16/9] w-full my-6 article-hero">
            <Image src="/images/place10.webp" alt="Αρωματοθεραπεία – ατμόσφαιρα χαλάρωσης" fill className="object-cover z-10" />
          </figure>

          <section aria-labelledby="what-is" className="space-y-3">
            <h2 id="what-is" className="text-2xl font-semibold">Τι είναι η αρωματοθεραπεία;</h2>
            <p>
              Η αρωματοθεραπεία αξιοποιεί τα αιθέρια έλαια φυτών με στόχο τη χαλάρωση, την ανακούφιση από την ένταση και τη βελτίωση της διάθεσης.
              Επιλέγουμε προσεκτικά τα έλαια και τα συνδυάζουμε με ήπιες τεχνικές μασάζ για μια ολοκληρωμένη εμπειρία ευεξίας.
            </p>
          </section>

          <section aria-labelledby="how-it-helps" className="mt-8 space-y-3">
            <h2 id="how-it-helps" className="text-2xl font-semibold">Πώς βοηθά στη μείωση του άγχους</h2>
            <p>
              Ο συνδυασμός απαλών χειρισμών και στοχευμένων αρωμάτων δημιουργεί μια κατάσταση βαθιάς χαλάρωσης που βοηθά το νευρικό σύστημα να ισορροπήσει.
              Συχνά χρησιμοποιούμε λεβάντα, χαμομήλι και γλυκό πορτοκάλι, ανάλογα με την προτίμηση και την ανταπόκριση του οργανισμού.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Μείωση στρες και ηρεμία του νου</li>
              <li>Καλύτερη ποιότητα ύπνου</li>
              <li>Απαλός ρυθμός αναπνοής και αποφόρτιση</li>
            </ul>
          </section>

          <section aria-labelledby="image" className="mt-8">
            <figure className="relative aspect-[16/9] w-full my-6 article-hero">
              <Image src="/images/hero.webp" alt="Ζεστός, γαλήνιος χώρος Therapy Massage" fill className="object-cover" />
            </figure>
          </section>

          <section aria-labelledby="cta" className="mt-8 space-y-3">
            <h2 id="cta" className="text-2xl font-semibold">Έτοιμοι για μια στιγμή ηρεμίας;</h2>
            <p>
              Κλείστε ραντεβού και απολαύστε μια συνεδρία αρωματοθεραπείας προσαρμοσμένη στις ανάγκες σας.
              <a href="/contact/" className="underline"> Επικοινωνήστε μαζί μας</a> για διαθεσιμότητα.
            </p>
          </section>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 h-max">
          <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-5">
            <p className="font-semibold">Σύντομη περίληψη</p>
            <p className="mt-2 text-olive-800/80">
              Η αρωματοθεραπεία, συνδυασμένη με ήπιους χειρισμούς, συμβάλλει στη μείωση του άγχους και στη βελτίωση της διάθεσης.
            </p>
          </div>
        </aside>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  )
}

