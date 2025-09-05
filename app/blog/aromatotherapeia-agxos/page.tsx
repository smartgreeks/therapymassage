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
        name: 'Ποια αιθέρια έλαια είναι καλύτερα για το άγχος;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Η λεβάντα, το χαμομήλι και το περγαμόντο θεωρούνται από τα πιο αποτελεσματικά για την ανακούφιση του άγχους.',
        },
      },
      {
        '@type': 'Question',
        name: 'Υπάρχουν αντενδείξεις στην αρωματοθεραπεία;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Σε ορισμένες περιπτώσεις (π.χ. εγκυμοσύνη, αλλεργίες) χρειάζεται προσοχή. Συμβουλευτείτε μας πριν από τη συνεδρία.',
        },
      },
      {
        '@type': 'Question',
        name: 'Μπορώ να συνδυάσω αρωματοθεραπεία με μασάζ;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ναι, στο Therapy Massage συνδυάζουμε αρωματοθεραπεία με διαφορετικά είδη μασάζ για καλύτερο αποτέλεσμα.',
        },
      },
    ],
  }

  return (
    <main id="content" aria-labelledby="page-title">
      <section className="container-safe py-10 grid lg:grid-cols-[1fr_360px] gap-8">
        <article className="" itemScope itemType="https://schema.org/Article">
          <header>
          <h1 id="page-title" itemProp="headline" className="text-3xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση
          </h1>
          <p className="mt-2 text-olive-800/80" itemProp="description">
            Η αρωματοθεραπεία είναι ένας φυσικός τρόπος για να μειώσετε το άγχος, να χαλαρώσετε και να βρείτε ισορροπία μέσα στην καθημερινότητα.
          </p>
          <figure className="relative aspect-[16/9] w-full my-6 rounded-lg overflow-hidden">
            <Image src="/images/place10.webp" alt="Αρωματοθεραπεία και άγχος – Φυσική ανακούφιση" fill className="object-cover z-10" />
          </figure>
        </header>

        <section aria-labelledby="what-is" className="space-y-3">
          <h2 id="what-is" className="text-2xl font-semibold">Τι είναι η Αρωματοθεραπεία;</h2>
          <p>
            Η <strong>αρωματοθεραπεία</strong> είναι μια φυσική θεραπευτική πρακτική που χρησιμοποιεί <em>αιθέρια έλαια</em> από φυτά για να βελτιώσει τη σωματική και ψυχική υγεία. Τα αρώματα διεγείρουν το νευρικό σύστημα και βοηθούν το σώμα να χαλαρώσει, μειώνοντας το στρες και το άγχος.
          </p>
        </section>

        <section aria-labelledby="how-it-helps" className="mt-8 space-y-3">
          <h2 id="how-it-helps" className="text-2xl font-semibold">Πώς βοηθά στην αντιμετώπιση του άγχους</h2>
          <p>
            Μελέτες έχουν δείξει ότι ορισμένα αιθέρια έλαια, όπως η <strong>λεβάντα</strong>, το <strong>χαμομήλι</strong> και το <strong>περγαμόντο</strong>, έχουν αγχολυτικές ιδιότητες. Η εισπνοή ή η εφαρμογή τους κατά τη διάρκεια ενός <a href="/services/">μασάζ</a> μπορεί να:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Μειώσει την αρτηριακή πίεση και τον καρδιακό ρυθμό</li>
            <li>Ενισχύσει την αίσθηση χαλάρωσης και ευεξίας</li>
            <li>Βελτιώσει την ποιότητα του ύπνου</li>
            <li>Ανακουφίσει από πονοκεφάλους που σχετίζονται με το άγχος</li>
          </ul>
          <figure className="relative aspect-[16/9] w-full my-6 rounded-lg overflow-hidden">
            <Image src="/images/hero.webp" alt="Λεβάντα και αιθέρια έλαια για αρωματοθεραπεία" fill className="object-cover" />
          </figure>
        </section>

        <section aria-labelledby="benefits" className="mt-8 space-y-3">
          <h2 id="benefits" className="text-2xl font-semibold">Τα οφέλη της αρωματοθεραπείας στο Therapy Massage</h2>
          <p>
            Συνδυάζοντας την αρωματοθεραπεία με τις συνεδρίες μας, προσφέρουμε μια ολοκληρωμένη εμπειρία που στοχεύει στη χαλάρωση και την αποκατάσταση. Κάθε συνεδρία είναι εξατομικευμένη ώστε να ανταποκρίνεται στις ανάγκες σας.
          </p>
          <p>
            Στόχος μας είναι να φύγετε όχι μόνο με λιγότερο άγχος, αλλά και με μια αίσθηση ανανέωσης και ισορροπίας.
          </p>
        </section>

        <section aria-labelledby="cta" className="mt-8 space-y-3">
          <h2 id="cta" className="text-2xl font-semibold">Κλείστε ραντεβού</h2>
          <p>
            Ανακαλύψτε τη δύναμη της αρωματοθεραπείας και ζήστε μια μοναδική εμπειρία ευεξίας. <a href="/contact/">Επικοινωνήστε μαζί μας</a> για να κλείσετε το ραντεβού σας.
          </p>
        </section>

        <section aria-labelledby="faq" className="mt-8 space-y-3">
          <h2 id="faq" className="text-2xl font-semibold">Συχνές Ερωτήσεις</h2>
          <details>
            <summary>Ποια αιθέρια έλαια είναι καλύτερα για το άγχος;</summary>
            <p>Η λεβάντα, το χαμομήλι και το περγαμόντο θεωρούνται από τα πιο αποτελεσματικά για την ανακούφιση του άγχους.</p>
          </details>
          <details>
            <summary>Υπάρχουν αντενδείξεις στην αρωματοθεραπεία;</summary>
            <p>Σε ορισμένες περιπτώσεις (π.χ. εγκυμοσύνη, αλλεργίες) χρειάζεται προσοχή. Συμβουλευτείτε μας πριν από τη συνεδρία.</p>
          </details>
          <details>
            <summary>Μπορώ να συνδυάσω αρωματοθεραπεία με μασάζ;</summary>
            <p>Ναι, στο Therapy Massage συνδυάζουμε αρωματοθεραπεία με διαφορετικά είδη μασάζ για καλύτερο αποτέλεσμα.</p>
          </details>
        </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-lg border border-sand p-4">
            <p className="font-semibold">Σύντομη περίληψη</p>
            <p className="mt-2 text-olive-800/80">
              Αρωματοθεραπεία με αιθέρια έλαια που μειώνει το άγχος, ενισχύει τη χαλάρωση και υποστηρίζει
              καλύτερο ύπνο, ειδικά όταν συνδυάζεται με μασάζ.
            </p>
          </div>
        </aside>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  )
}



