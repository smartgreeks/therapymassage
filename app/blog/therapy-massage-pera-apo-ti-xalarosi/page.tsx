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
        name: 'Πόσες συνεδρίες χρειάζομαι για να δω αποτέλεσμα;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ανάλογα με την περίπτωση και τον στόχο σας. Συνήθως 2–4 συνεδρίες βοηθούν σε χρόνια θέματα, με επανεκτίμηση μετά.',
        },
      },
      {
        '@type': 'Question',
        name: 'Προσαρμόζετε την ένταση του μασάζ;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ναι. Η ένταση και οι τεχνικές προσαρμόζονται στις ανάγκες και τις προτιμήσεις σας σε κάθε συνεδρία.',
        },
      },
      {
        '@type': 'Question',
        name: 'Μπορώ να συνδυάσω τεχνικές;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Βεβαίως. Συχνά συνδυάζουμε τεχνικές για καλύτερο, εξατομικευμένο αποτέλεσμα.',
        },
      },
    ],
  }

  return (
    <main id="content" aria-labelledby="page-title">
      <section className="container-safe py-10 grid lg:grid-cols-[1fr_360px] gap-8">
        <article className="" itemScope itemType="https://schema.org/Article">
          <header>
          <nav aria-label="breadcrumb" className="text-sm text-olive-800/80">
            <ol className="flex gap-2">
              <li><a href="/" className="hover:underline">Αρχική</a></li>
              <li>/</li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li>/</li>
              <li aria-current="page">Therapy Massage – Πέρα από τη χαλάρωση</li>
            </ol>
          </nav>

          <h1 id="page-title" itemProp="headline" className="mt-2 text-3xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            Therapy Massage – Πέρα από τη χαλάρωση
          </h1>

          <figure className="relative aspect-[16/9] w-full my-6 rounded-lg overflow-hidden">
            <Image src="/images/services/eueksiaImage.webp" alt="Therapy Massage – πέρα από τη χαλάρωση" fill className="object-cover" />
          </figure>
          <meta itemProp="author" content="Therapy Massage" />
          <meta itemProp="publisher" content="Therapy Massage" />
        </header>

        <section aria-labelledby="intro" className="prose max-w-none">
          <h2 id="intro">Φροντίδα με ουσία και αποτέλεσμα</h2>
          <p>
            Το Therapy Massage δεν είναι απλώς ένας χώρος χαλάρωσης. Μετά από χρόνια εμπειρίας και ακούγοντας προσεκτικά τις ανάγκες των ανθρώπων που μας εμπιστεύονται, έχουμε καταφέρει να ανακουφίσουμε πολλούς από μυϊκούς πόνους, εντάσεις και συμπτώματα χρόνιας κόπωσης.
          </p>
          <p>
            Η φροντίδα μας βασίζεται σε ουσιαστική εμπειρία, γνώση και προσωπική προσέγγιση. Για εμάς, κάθε συνεδρία είναι ξεχωριστή και προσαρμοσμένη στις ανάγκες του κάθε ανθρώπου.
          </p>
          <figure className="relative aspect-[16/9] w-full my-6 rounded-lg overflow-hidden">
            <Image src="/images/place10.webp" alt="Προσωπική προσέγγιση και εμπειρία στη φροντίδα μασάζ" fill className="object-cover" />
          </figure>
        </section>

        <section aria-labelledby="social-proof" className="prose max-w-none">
          <h2 id="social-proof">Εμπιστοσύνη που κερδίζεται «από στόμα σε στόμα»</h2>
          <p>
            Σε μια μικρή κοινωνία, όπου η πιο αληθινή μορφή διαφήμισης είναι η σύσταση «από στόμα σε στόμα», η εμπιστοσύνη που μας δείχνετε όλα αυτά τα χρόνια είναι η μεγαλύτερη επιβεβαίωση της δουλειάς μας. Και είναι αυτό που μας κρατά στις προτιμήσεις τόσων ανθρώπων που αναζητούν ανακούφιση, υγεία και ευεξία.
          </p>
          <figure className="relative aspect-[16/9] w-full my-6 rounded-lg overflow-hidden">
            <Image src="/images/place7.webp" alt="Σύσταση από στόμα σε στόμα και εμπιστοσύνη πελατών" fill className="object-cover" />
          </figure>
          <p>
            Εξερευνήστε περισσότερα για τις υπηρεσίες μας στη σελίδα <a href="/services" className="underline">Υπηρεσίες</a>.
          </p>
        </section>

        <section aria-labelledby="our-approach" className="prose max-w-none">
          <h2 id="our-approach">Η προσέγγισή μας</h2>
          <ul>
            <li><strong>Ακρόαση &amp; αξιολόγηση:</strong> κατανοούμε τις ανάγκες πριν από κάθε συνεδρία.</li>
            <li><strong>Εξατομίκευση:</strong> προσαρμόζουμε τεχνικές και ένταση στις ιδιαιτερότητές σας.</li>
            <li><strong>Συνέπεια:</strong> στοχευμένες συνεδρίες για βιώσιμο αποτέλεσμα στην καθημερινότητα.</li>
          </ul>
        </section>

        <section aria-labelledby="cta" className="prose max-w-none">
          <h2 id="cta">Κλείστε ραντεβού</h2>
          <p>
            Ανακαλύψτε πώς η ουσιαστική φροντίδα μπορεί να κάνει τη διαφορά. <a href="/contact" className="underline">Επικοινωνήστε μαζί μας</a> για να κλείσετε τη δική σας συνεδρία.
          </p>
        </section>

        <section aria-labelledby="faq" className="prose max-w-none">
          <h2 id="faq">Συχνές Ερωτήσεις</h2>
          <details>
            <summary>Πόσες συνεδρίες χρειάζομαι για να δω αποτέλεσμα;</summary>
            <p>Αυτό εξαρτάται από την κατάσταση και τον στόχο σας. Συνήθως, ένα πλάνο 2–4 συνεδρίων βοηθά σε χρόνια θέματα, με επανεκτίμηση μετά.</p>
          </details>
          <details>
            <summary>Προσαρμόζετε την ένταση του μασάζ;</summary>
            <p>Ναι. Η ένταση και οι τεχνικές προσαρμόζονται στις προτιμήσεις και στις ανάγκες σας σε κάθε συνεδρία.</p>
          </details>
          <details>
            <summary>Μπορώ να συνδυάσω τεχνικές;</summary>
            <p>Βεβαίως. Συχνά συνδυάζουμε τεχνικές για καλύτερο, εξατομικευμένο αποτέλεσμα.</p>
          </details>
        </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-lg border border-sand p-4">
            <p className="font-semibold">Σύντομη περίληψη</p>
            <p className="mt-2 text-olive-800/80">
              Ουσιαστική φροντίδα πέρα από τη χαλάρωση: εξατομικευμένες συνεδρίες με βάση την εμπειρία,
              τη γνώση και την προσεκτική ακρόαση για μόνιμη ανακούφιση και ευεξία.
            </p>
          </div>
        </aside>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  )
}
