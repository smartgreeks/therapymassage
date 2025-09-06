/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image"

export const metadata = {
  title: "Therapy Massage – Πέρα από τη χαλάρωση | Therapy Massage",
  description:
    "Therapy Massage: ουσιαστική φροντίδα πέρα από τη χαλάρωση, με εμπειρία, γνώση και προσωπική προσέγγιση για ανακούφιση πόνου και ευεξία.",
  openGraph: {
    type: "article",
    title: "Therapy Massage – Πέρα από τη χαλάρωση | Therapy Massage",
    description:
      "Therapy Massage: ουσιαστική φροντίδα πέρα από τη χαλάρωση, με εμπειρία, γνώση και προσωπική προσέγγιση για ανακούφιση πόνου και ευεξία.",
    url: "/blog/therapy-massage-pera-apo-ti-xalarosi",
    images: [
      { url: "/images/services/eueksiaImage.webp", width: 1200, height: 675, alt: "Therapy Massage – πέρα από τη χαλάρωση, ουσιαστική φροντίδα" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Massage – Πέρα από τη χαλάρωση | Therapy Massage",
    description:
      "Therapy Massage: ουσιαστική φροντίδα πέρα από τη χαλάρωση, με εμπειρία, γνώση και προσωπική προσέγγιση για ανακούφιση πόνου και ευεξία.",
    images: ["/images/services/eueksiaImage.webp"],
  },
  alternates: { canonical: "/blog/therapy-massage-pera-apo-ti-xalarosi" },
}

const published = new Date().toISOString().slice(0, 10)

export default function BlogArticle() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Therapy Massage – Πέρα από τη χαλάρωση',
    description:
      'Ουσιαστική φροντίδα πέρα από τη χαλάρωση, με εμπειρία, γνώση και προσωπική προσέγγιση για ανακούφιση πόνου και ευεξία.',
    author: { '@type': 'Organization', name: 'Therapy Massage' },
    publisher: { '@type': 'Organization', name: 'Therapy Massage' },
    mainEntityOfPage: '/blog/therapy-massage-pera-apo-ti-xalarosi',
    image: [
      '/images/services/eueksiaImage.webp',
      '/images/place10.webp',
      '/images/place7.webp',
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
        name: 'Πόσες συνεδρίες χρειάζομαι για να δω διαφορά;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Εξαρτάται από το ζήτημα. Πολλοί νιώθουν ανακούφιση από την πρώτη συνεδρία, ενώ για χρόνιες εντάσεις συνιστάται ένα στοχευμένο πλάνο.',
        },
      },
      {
        '@type': 'Question',
        name: 'Υπάρχει κάποια προετοιμασία πριν τη συνεδρία;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Φορέστε άνετα ρούχα και φάτε ελαφριά. Ενημερώστε μας για τυχόν παθήσεις ή πρόσφατους τραυματισμούς.',
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
              <li aria-current="page">Therapy Massage – Πέρα από τη χαλάρωση</li>
            </ol>
          </nav>
          <h1 id="page-title" className="text-3xl md:text-4xl font-semibold mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Therapy Massage – Πέρα από τη χαλάρωση
          </h1>
          <p className="mt-2 text-beige/80">Δημοσίευση: {new Date(published).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="container-safe py-10 grid lg:grid-cols-[1fr_360px] gap-8">
        <article className="article-prose" itemScope itemType="https://schema.org/Article">
          <figure className="relative aspect-[16/9] w-full my-6 article-hero">
            <Image src="/images/place7.webp" alt="Χαλαρωτική ατμόσφαιρα σε χώρο θεραπευτικού μασάζ" fill className="object-cover" />
          </figure>
          <p>
            Στο Therapy Massage, η προσέγγισή μας ξεπερνά την απλή χαλάρωση: επικεντρωνόμαστε στη συνολική ευεξία σας, με
            τεχνικές που στοχεύουν σε συγκεκριμένους μυϊκούς ιστούς και μοτίβα έντασης.
          </p>

          <section aria-labelledby="our-approach" className="">
            <h2 id="our-approach">Η προσέγγισή μας</h2>
            <ul>
              <li><strong>Στοχευμένοι χειρισμοί &amp; αξιολόγηση:</strong> εντοπίζουμε τα σημεία έντασης και προσαρμόζουμε τη συνεδρία.</li>
              <li><strong>Εξατομίκευση:</strong> ανάλογα με τις ανάγκες, την καθημερινότητα και τους στόχους σας.</li>
              <li><strong>Ολιστική φροντίδα:</strong> έμφαση στη στάση σώματος, στην αναπνοή και στη ρουτίνα αποκατάστασης.</li>
            </ul>
          </section>

          <section aria-labelledby="cta" className="">
            <h2 id="cta">Κλείστε ραντεβού</h2>
            <p>
              Είμαστε εδώ για να βρούμε μαζί την ιδανική προσέγγιση. <a href="/contact" className="underline">Επικοινωνήστε μαζί μας</a>
               για να προγραμματίσουμε τη συνεδρία σας.
            </p>
          </section>

          <section aria-labelledby="faq" className="">
            <h2 id="faq">Συχνές ερωτήσεις</h2>
            <details>
              <summary>Πόσες συνεδρίες χρειάζομαι για να δω διαφορά;</summary>
              <p>Πολλοί νιώθουν άμεσα ανακούφιση. Για χρόνιες εντάσεις συνιστάται ένα προσαρμοσμένο πλάνο με συχνότητα ανά περίπτωση.</p>
            </details>
            <details>
              <summary>Υπάρχει κάποια προετοιμασία πριν τη συνεδρία;</summary>
              <p>Φορέστε άνετα ρούχα και φάτε ελαφριά. Ενημερώστε μας για τυχόν παθήσεις ή τραυματισμούς.</p>
            </details>
          </section>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 h-max">
          <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-5">
            <p className="font-semibold">Σύντομη περίληψη</p>
            <p className="mt-2 text-olive-800/80">
              Πέρα από τη χαλάρωση, το μασάζ προσφέρει ουσιαστικά θεραπευτικά οφέλη για μυς και αρθρώσεις.
            </p>
          </div>
        </aside>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  )
}

