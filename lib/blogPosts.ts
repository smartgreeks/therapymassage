export interface BlogPost {
  slug: string;
  title: {
    el: string;
    en: string;
  };
  excerpt: {
    el: string;
    en: string;
  };
  content: {
    el: string;
    en: string;
  };
  imageUrl: string;
  publishedAt: string;
  category: {
    el: string;
    en: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'vriskete-to-masaz-pou-sas-tairiazei',
    title: {
      el: 'Βρίσκετε το μασάζ που σας ταιριάζει',
      en: 'Find the massage that suits you'
    },
    excerpt: {
      el: 'Κάθε άνθρωπος έχει διαφορετικές ανάγκες όταν πρόκειται για μασάζ. Ανακαλύψτε ποια τεχνική ταιριάζει καλύτερα στον τρόπο ζωής και τις προτιμήσεις σας.',
      en: 'Every person has different needs when it comes to massage. Discover which technique best suits your lifestyle and preferences.'
    },
    content: {
      el: '<div><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/hero.webp" alt="Ατμόσφαιρα χαλάρωσης για μασάζ" class="object-cover w-full h-full" /></figure><section class="space-y-3"><h2 class="text-2xl font-semibold">Επιλέγοντας το κατάλληλο μασάζ</h2><p>Κάθε άνθρωπος έχει διαφορετικές ανάγκες όταν πρόκειται για μασάζ. Ανάλογα με τον τρόπο ζωής, το επίπεδο στρες και τις συγκεκριμένες ενοχλήσεις σας, μπορούμε να επιλέξουμε την κατάλληλη τεχνική που θα σας προσφέρει τα μέγιστα οφέλη.</p></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Χαλαρωτικό μασάζ</h2><p>Το χαλαρωτικό μασάζ είναι ιδανικό για όσους αναζητούν αποφόρτιση από το καθημερινό στρες. Με απαλούς και ρυθμικούς χειρισμούς, βοηθά στη μείωση της μυϊκής έντασης και στην ηρέμηση του νευρικού συστήματος.</p><ul class="list-disc list-inside space-y-1"><li>Μείωση του στρες και του άγχους</li><li>Βελτίωση της ποιότητας του ύπνου</li><li>Γενική αίσθηση ευεξίας</li></ul></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Βαθύ μασάζ ιστών</h2><p>Για όσους αντιμετωπίζουν χρόνιους μυϊκούς πόνους ή έντονη ένταση, το βαθύ μασάζ ιστών προσφέρει στοχευμένη θεραπεία. Οι εξειδικευμένες τεχνικές βοηθούν στην απελευθέρωση των βαθύτερων στρώσεων των μυών.</p><ul class="list-disc list-inside space-y-1"><li>Ανακούφιση από χρόνιους πόνους</li><li>Βελτίωση της κινητικότητας</li><li>Μείωση φλεγμονών και συσσωρευμένης έντασης</li></ul></section><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/hero.webp" alt="Χώρος θεραπείας στο Therapy Massage" class="object-cover w-full h-full" /></figure><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Συμβουλή για την επιλογή</h2><p>Συνιστούμε να αρχίσετε με μια σύντομη συζήτηση για τις ανάγκες σας. Έτσι μπορούμε να προτείνουμε την καταλληλότερη τεχνική ή έναν συνδυασμό τεχνικών που θα ανταποκριθεί στις προσδοκίες σας.</p><p><a href="/contact/" class="underline">Επικοινωνήστε μαζί μας</a> για μια δωρεάν συμβουλευτική και ανακαλύψτε το μασάζ που σας ταιριάζει.</p></div>',
      en: '<div><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/hero.webp" alt="Relaxing massage atmosphere" class="object-cover w-full h-full" /></figure><section class="space-y-3"><h2 class="text-2xl font-semibold">Choosing the right massage</h2><p>Every person has different needs when it comes to massage. Depending on your lifestyle, stress level and specific concerns, we can choose the appropriate technique that will offer you maximum benefits.</p></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Relaxing massage</h2><p>Relaxing massage is ideal for those seeking relief from daily stress. With gentle and rhythmic movements, it helps reduce muscle tension and calm the nervous system.</p><ul class="list-disc list-inside space-y-1"><li>Stress and anxiety reduction</li><li>Improved sleep quality</li><li>General sense of well-being</li></ul></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Deep tissue massage</h2><p>For those dealing with chronic muscle pain or intense tension, deep tissue massage offers targeted therapy. Specialized techniques help release the deeper layers of muscles.</p><ul class="list-disc list-inside space-y-1"><li>Relief from chronic pain</li><li>Improved mobility</li><li>Reduction of inflammation and accumulated tension</li></ul></section><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/hero.webp" alt="Therapy space at Therapy Massage" class="object-cover w-full h-full" /></figure><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Advice for choosing</h2><p>We recommend starting with a brief discussion about your needs. This way we can suggest the most suitable technique or combination of techniques that will meet your expectations.</p><p><a href="/contact/" class="underline">Contact us</a> for a free consultation and discover the massage that suits you.</p></section></div>'
    },
    imageUrl: '/images/hero.webp',
    publishedAt: '2025-03-15',
    category: {
      el: 'Συμβουλές',
      en: 'Tips'
    }
  },
  {
    slug: 'therapy-massage-pera-apo-ti-xalarosi',
    title: {
      el: 'Therapy Massage – Πέρα από τη χαλάρωση',
      en: 'Therapy Massage – Beyond relaxation'
    },
    excerpt: {
      el: 'Το θεραπευτικό μασάζ προσφέρει πολλά οφέλη πέρα από τη χαλάρωση. Ανακαλύψτε πώς μπορεί να βελτιώσει την υγεία και την ποιότητα ζωής σας.',
      en: 'Therapeutic massage offers many benefits beyond relaxation. Discover how it can improve your health and quality of life.'
    },
    content: {
      el: '<div><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/services/eueksiaImage.webp" alt="Θεραπευτικό μασάζ" class="object-cover w-full h-full" /></figure><section class="space-y-3"><h2 class="text-2xl font-semibold">Τι είναι το θεραπευτικό μασάζ;</h2><p>Το θεραπευτικό μασάζ είναι μια ολιστική προσέγγιση που στοχεύει όχι μόνο στη χαλάρωση, αλλά και στη βελτίωση της συνολικής σωματικής και ψυχικής υγείας. Χρησιμοποιεί εξειδικευμένες τεχνικές για να αντιμετωπίσει συγκεκριμένα προβλήματα και να προωθήσει τη φυσική ίαση του σώματος.</p></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Οφέλη για την υγεία</h2><p>Η τακτική εφαρμογή θεραπευτικού μασάζ μπορεί να έχει σημαντική θετική επίδραση σε διάφορες πτυχές της υγείας μας.</p><ul class="list-disc list-inside space-y-1"><li>Βελτίωση της κυκλοφορίας του αίματος</li><li>Ενίσχυση του ανοσοποιητικού συστήματος</li><li>Μείωση της αρτηριακής πίεσης</li><li>Απαλλαγή από τοξίνες</li><li>Βελτίωση της ελαστικότητας των μυών</li></ul></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Ψυχολογικά οφέλη</h2><p>Πέρα από τα φυσικά οφέλη, το θεραπευτικό μασάζ έχει βαθιά επίδραση στην ψυχική μας υγεία και ευεξία.</p><ul class="list-disc list-inside space-y-1"><li>Μείωση των επιπέδων κορτιζόλης (ορμόνη του στρες)</li><li>Αύξηση της παραγωγής ενδορφινών</li><li>Βελτίωση της ποιότητας του ύπνου</li><li>Ενίσχυση της αυτοεκτίμησης</li><li>Μείωση των συμπτωμάτων κατάθλιψης και άγχους</li></ul></section><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/services/eueksiaImage.webp" alt="Χαλαρωτικός χώρος θεραπείας" class="object-cover w-full h-full" /></figure><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Εξατομικευμένη προσέγγιση</h2><p>Κάθε συνεδρία προσαρμόζεται στις ιδιαίτερες ανάγκες του κάθε ατόμου. Αξιολογούμε την κατάσταση υγείας, τις προτιμήσεις και τους στόχους κάθε πελάτη για να δημιουργήσουμε ένα εξατομικευμένο πρόγραμμα θεραπείας.</p><p>Επικοινωνήστε μαζί μας για να <a href="/contact/" class="underline">κλείσετε ραντεβού</a> και να ανακαλύψετε πώς το θεραπευτικό μασάζ μπορεί να βελτιώσει τη ζωή σας.</p></div>',
      en: '<div><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/services/eueksiaImage.webp" alt="Therapeutic massage" class="object-cover w-full h-full" /></figure><section class="space-y-3"><h2 class="text-2xl font-semibold">What is therapeutic massage?</h2><p>Therapeutic massage is a holistic approach that aims not only at relaxation, but also at improving overall physical and mental health. It uses specialized techniques to address specific problems and promote the body\'s natural healing.</p></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Health benefits</h2><p>Regular application of therapeutic massage can have a significant positive impact on various aspects of our health.</p><ul class="list-disc list-inside space-y-1"><li>Improved blood circulation</li><li>Strengthening the immune system</li><li>Lowering blood pressure</li><li>Detoxification</li><li>Improved muscle elasticity</li></ul></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Psychological benefits</h2><p>Beyond physical benefits, therapeutic massage has a profound impact on our mental health and well-being.</p><ul class="list-disc list-inside space-y-1"><li>Reduction of cortisol levels (stress hormone)</li><li>Increased endorphin production</li><li>Improved sleep quality</li><li>Enhanced self-esteem</li><li>Reduction of depression and anxiety symptoms</li></ul></section><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/services/eueksiaImage.webp" alt="Relaxing therapy space" class="object-cover w-full h-full" /></figure><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Personalized approach</h2><p>Each session is tailored to the individual needs of each person. We assess the health condition, preferences and goals of each client to create a personalized treatment program.</p><p>Contact us to <a href="/contact/" class="underline">book an appointment</a> and discover how therapeutic massage can improve your life.</p></div>'
    },
    imageUrl: '/images/services/eueksiaImage.webp',
    publishedAt: '2025-03-10',
    category: {
      el: 'Θεραπείες',
      en: 'Therapies'
    }
  },
  {
    slug: 'aromatotherapeia-agxos',
    title: {
      el: 'Αρωματοθεραπεία και Άγχος – Φυσική ανακούφιση',
      en: 'Aromatherapy and Anxiety – Natural relief'
    },
    excerpt: {
      el: 'Η αρωματοθεραπεία αξιοποιεί τα αιθέρια έλαια φυτών για τη χαλάρωση, την ανακούφιση από την ένταση και τη βελτίωση της διάθεσης.',
      en: 'Aromatherapy uses plant essential oils for relaxation, stress relief and mood improvement.'
    },
    content: {
      el: '<div><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/place10.webp" alt="Αρωματοθεραπεία – ατμόσφαιρα χαλάρωσης" class="object-cover w-full h-full" /></figure><section class="space-y-3"><h2 class="text-2xl font-semibold">Τι είναι η αρωματοθεραπεία;</h2><p>Η αρωματοθεραπεία αξιοποιεί τα αιθέρια έλαια φυτών με στόχο τη χαλάρωση, την ανακούφιση από την ένταση και τη βελτίωση της διάθεσης. Επιλέγουμε προσεκτικά τα έλαια και τα συνδυάζουμε με ήπιες τεχνικές μασάζ για μια ολοκληρωμένη εμπειρία ευεξίας.</p></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Πώς βοηθά στη μείωση του άγχους</h2><p>Ο συνδυασμός απαλών χειρισμών και στοχευμένων αρωμάτων δημιουργεί μια κατάσταση βαθιάς χαλάρωσης που βοηθά το νευρικό σύστημα να ισορροπήσει. Συχνά χρησιμοποιούμε λεβάντα, χαμομήλι και γλυκό πορτοκάλι, ανάλογα με την προτίμηση και την ανταπόκριση του οργανισμού.</p><ul class="list-disc list-inside space-y-1"><li>Μείωση στρες και ηρεμία του νου</li><li>Καλύτερη ποιότητα ύπνου</li><li>Απαλός ρυθμός αναπνοής και αποφόρτιση</li></ul></section><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/hero.webp" alt="Ζεστός, γαλήνιος χώρος Therapy Massage" class="object-cover w-full h-full" /></figure><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Έτοιμοι για μια στιγμή ηρεμίας;</h2><p>Κλείστε ραντεβού και απολαύστε μια συνεδρία αρωματοθεραπείας προσαρμοσμένη στις ανάγκες σας. <a href="/contact/" class="underline"> Επικοινωνήστε μαζί μας</a> για διαθεσιμότητα.</p></section><aside class="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-5 mt-8"><p class="font-semibold">Σύντομη περίληψη</p><p class="mt-2 text-olive-800/80">Η αρωματοθεραπεία, συνδυασμένη με ήπιους χειρισμούς, συμβάλλει στη μείωση του άγχους και στη βελτίωση της διάθεσης.</p></aside></div>',
      en: '<div><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/place10.webp" alt="Aromatherapy – relaxing atmosphere" class="object-cover w-full h-full" /></figure><section class="space-y-3"><h2 class="text-2xl font-semibold">What is aromatherapy?</h2><p>Aromatherapy uses plant essential oils for relaxation, stress relief and mood improvement. We carefully select oils and combine them with gentle massage techniques for a complete wellness experience.</p></section><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">How it helps reduce anxiety</h2><p>The combination of gentle movements and targeted aromas creates a state of deep relaxation that helps the nervous system balance. We often use lavender, chamomile and sweet orange, depending on preference and body response.</p><ul class="list-disc list-inside space-y-1"><li>Stress reduction and peace of mind</li><li>Better sleep quality</li><li>Gentle breathing rhythm and decompression</li></ul></section><figure class="relative aspect-[16/9] w-full my-6"><img src="/images/hero.webp" alt="Warm, peaceful Therapy Massage space" class="object-cover w-full h-full" /></figure><section class="mt-8 space-y-3"><h2 class="text-2xl font-semibold">Ready for a moment of peace?</h2><p>Book an appointment and enjoy an aromatherapy session tailored to your needs. <a href="/contact/" class="underline"> Contact us</a> for availability.</p></section><aside class="rounded-xl border border-sand/80 bg-white/80 shadow-soft p-5 mt-8"><p class="font-semibold">Brief summary</p><p class="mt-2 text-olive-800/80">Aromatherapy, combined with gentle movements, contributes to anxiety reduction and mood improvement.</p></aside></div>'
    },
    imageUrl: '/images/place10.webp',
    publishedAt: '2025-03-05',
    category: {
      el: 'Αρωματοθεραπεία',
      en: 'Aromatherapy'
    }
  }
];

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getBlogPost(slug: string, locale: 'el' | 'en'): {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
} | null {
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) return null;
  
  return {
    slug: post.slug,
    title: post.title[locale],
    excerpt: post.excerpt[locale],
    content: post.content[locale],
    imageUrl: post.imageUrl,
    publishedAt: post.publishedAt,
    category: post.category[locale]
  };
}

export function getBlogPosts(locale: 'el' | 'en'): {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}[] {
  return blogPosts.map(post => ({
    slug: post.slug,
    title: post.title[locale],
    excerpt: post.excerpt[locale],
    imageUrl: post.imageUrl,
    publishedAt: post.publishedAt,
    category: post.category[locale]
  }));
}
