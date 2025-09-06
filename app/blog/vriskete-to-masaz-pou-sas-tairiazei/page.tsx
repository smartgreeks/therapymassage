/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image"

export const metadata = {
  title: "Βρείτε το μασάζ που σας ταιριάζει | Therapy Massage",
  description:
    "Ανακαλύψτε το ιδανικό μασάζ για το σώμα και τη διάθεσή σας στο Therapy Massage. Προσωποποιημένες συνεδρίες για χαλάρωση και ευεξία.",
  openGraph: {
    type: "article",
    title: "Βρείτε το μασάζ που σας ταιριάζει | Therapy Massage",
    description:
      "Ανακαλύψτε το ιδανικό μασάζ για το σώμα και τη διάθεσή σας στο Therapy Massage. Προσωποποιημένες συνεδρίες για χαλάρωση και ευεξία.",
    images: [
      { url: "/images/hero.webp", width: 1200, height: 675, alt: "Χαλαρωτικό μασάζ – Therapy Massage" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Βρείτε το μασάζ που σας ταιριάζει | Therapy Massage",
    description:
      "Ανακαλύψτε το ιδανικό μασάζ για το σώμα και τη διάθεσή σας στο Therapy Massage. Προσωποποιημένες συνεδρίες για χαλάρωση και ευεξία.",
    images: ["/images/hero.webp"],
  },
  alternates: { canonical: "/blog/vriskete-to-masaz-pou-sas-tairiazei" },
}

const published = "2025-09-05"

export default function BlogArticle() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Βρείτε το μασάζ που σας ταιριάζει, μαζί μας',
    description:
      'Ανακαλύψτε το ιδανικό μασάζ με εξατομικευμένη αξιολόγηση και προτάσεις από την ομάδα του Therapy Massage.',
    author: { '@type': 'Organization', name: 'Therapy Massage' },
    publisher: { '@type': 'Organization', name: 'Therapy Massage' },
    mainEntityOfPage: '/blog/vriskete-to-masaz-pou-sas-tairiazei',
    image: [
      '/images/hero.webp',
      '/images/place10.webp',
      '/images/services/service5.webp',
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
        name: 'Δεν ξέρω ποιο μασάζ μου ταιριάζει. Μπορείτε να με κατευθύνετε;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Κάνουμε σύντομη αξιολόγηση πριν τη συνεδρία και προτείνουμε την κατάλληλη τεχνική για τις ανάγκες σας.',
        },
      },
      {
        '@type': 'Question',
        name: 'Πόση διάρκεια έχει μια συνεδρία;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Συνήθως 50–60 λεπτά. Διατίθενται και μεγαλύτερες διάρκειες κατόπιν ζήτησης.',
        },
      },
      {
        '@type': 'Question',
        name: 'Υπάρχουν αντενδείξεις;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Σε οξύ τραυματισμό, εμπύρετη κατάσταση ή συγκεκριμένα ιατρικά θέματα, συμβουλευτείτε γιατρό και ενημερώστε μας πριν τη συνεδρία.',
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
              <li aria-current="page">Βρείτε το μασάζ που σας ταιριάζει</li>
            </ol>
          </nav>
          <h1 id="page-title" className="text-3xl md:text-4xl font-semibold mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Βρείτε το μασάζ που σας ταιριάζει, μαζί μας
          </h1>
          <p className="mt-2 text-beige/80">Δημοσίευση: {new Date(published).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="container-safe py-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <article className="article-prose" itemScope itemType="https://schema.org/Article">
          <figure className="relative aspect-[16/9] w-full mb-6 article-hero">
            <Image src="/images/hero.webp" alt="Χαλαρωτικό μασάζ σε επαγγελματικό στούντιο Therapy Massage" fill className="object-cover" />
          </figure>

          <p>
            Στο <strong>Therapy Massage</strong> πιστεύουμε ότι κάθε σώμα είναι μοναδικό και έχει τις δικές του ανάγκες.
            Δεν χρειάζεται να γνωρίζετε από πριν ποιο είδος μασάζ σας ταιριάζει — μπορούμε να το ανακαλύψουμε μαζί,
            εξατομικεύοντας κάθε συνεδρία.
          </p>

          <section aria-labelledby="intro">
            <h2 id="intro">Εισαγωγή</h2>
            <p>
              Γνωρίζουμε ότι το σώμα και η διάθεση αλλάζουν, γι’ αυτό το μασάζ οφείλει να προσαρμόζεται στις δικές σας
              ανάγκες. Δεν χρειάζεται να ξέρετε από πριν ποια τεχνική είναι κατάλληλη — θα τη βρούμε μαζί.
            </p>
          </section>

          <section aria-labelledby="how-we-choose">
            <h2 id="how-we-choose">Πώς επιλέγουμε το ιδανικό μασάζ</h2>
            <p>
              Η έμπειρη και καταρτισμένη ομάδα μας αξιολογεί επί τόπου την κατάστασή σας, ακούει τις ανάγκες σας και
              προτείνει το ιδανικό μασάζ για το σώμα και τη διάθεσή σας. Κάθε συνεδρία προσαρμόζεται αποκλειστικά σε εσάς
              για μέγιστη χαλάρωση και ανακούφιση.
            </p>

            <figure className="relative aspect-[16/9] w-full my-6 article-hero">
              <Image src="/images/place10.webp" alt="Εξατομικευμένη αξιολόγηση αναγκών πριν το μασάζ" fill className="object-cover" />
            </figure>

            <h3>Συχνές προτάσεις ανά στόχο</h3>
            <ul>
              <li><strong>Χαλαρωτικό μασάζ:</strong> ιδανικό για αποφόρτιση άγχους και βελτίωση ύπνου.</li>
              <li><strong>Θεραπευτικό μασάζ:</strong> ανακούφιση από μυϊκές εντάσεις και χρόνιο πόνο.</li>
              <li><strong>Αθλητικό μασάζ:</strong> υποστήριξη απόδοσης και γρηγορότερη αποκατάσταση.</li>
              <li><strong>Αρωματοθεραπεία:</strong> ισορροπία σώματος και πνεύματος με φυσικά αιθέρια έλαια.</li>
            </ul>

            <p>
              Δείτε περισσότερα για τις υπηρεσίες μας στη σελίδα <a href="/services" className="underline">Υπηρεσίες</a>.
            </p>
          </section>

          <section aria-labelledby="benefits">
            <h2 id="benefits">Οφέλη που θα αποκομίσετε</h2>
            <ul>
              <li>Μείωση στρες και έντασης.</li>
              <li>Βελτίωση κυκλοφορίας και ευεξίας.</li>
              <li>Ανακούφιση από πόνους και δυσκαμψία.</li>
              <li>Καλύτερη ποιότητα ύπνου και ενέργεια μέσα στην ημέρα.</li>
            </ul>

            <figure className="relative aspect-[16/9] w-full my-6 article-hero">
              <Image src="/images/services/service5.webp" alt="Ανακούφιση μυϊκής έντασης με θεραπευτικό μασάζ" fill className="object-cover" />
            </figure>
          </section>

          <section aria-labelledby="cta">
            <h2 id="cta">Κλείστε ραντεβού</h2>
            <p>
              Στόχος μας είναι να φύγετε όχι μόνο ανανεωμένοι, αλλά και με την αίσθηση ότι λάβατε την καλύτερη φροντίδα
              για εσάς προσωπικά. <a href="/contact" className="underline">Επικοινωνήστε μαζί μας</a> για να κλείσετε τη
              δική σας συνεδρία.
            </p>
          </section>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 h-max">
          <div className="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-5">
            <p className="font-semibold">Σύντομη περίληψη</p>
            <p className="mt-2 text-olive-800/80">
              Εξατομικευμένη προσέγγιση, αξιολόγηση επί τόπου και προτάσεις μασάζ που ταιριάζουν στο σώμα και στις
              προτιμήσεις σας.
            </p>
          </div>
        </aside>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  )
}
