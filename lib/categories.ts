export type Option = { duration: string; price: string }
export type SubItem = {
  title: string
  desc?: string
  image?: string
  images?: string[]
  options?: Option[]
  duration?: string
  price?: string
  category?: string
}
export type Category = { title: string; intro: string; hero?: string; sub: SubItem[] }

export const CATEGORIES_EL: Record<string, Category> = {
  euexia: {
    title: "Ευεξία",
    intro: "Χαλάρωση, ισορροπία και ευεξία με τεχνικές προσαρμοσμένες στις ανάγκες σας.",
    hero: undefined,
    sub: [
      { title: "Χαλαρωτικό μασάζ", desc: "Ήπιες πιέσεις και ρυθμικοί χειρισμοί για αποφόρτιση άγχους.", images: ["/images/services/relaxing.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Deep tissue", desc: "Εστιασμένη δουλειά σε χρόνιες εντάσεις και trigger points.", images: ["/images/services/deepTissuue.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Αθλητικό μασάζ", desc: "Αποκατάσταση, ευλυγισία και πρόληψη τραυματισμών.", images: ["/images/services/athletic.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Λεμφικό μασάζ", desc: "Ενίσχυση λεμφικής κυκλοφορίας – αποσυμφόρηση.", images: ["/images/services/lemfiko.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Μασάζ για εγκύους", desc: "Απαλό μασάζ για την ανακούφιση από μυοσκελετικούς πόνους.", images: ["/images/services/pregnantMassage.webp"], options: [
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
      ] },
      { title: "Υδρομασάζ", desc: "Μασάζ με πίεση νερού για βαθιά χαλάρωση.", images: ["/images/services/uudromasaz.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Korean head spa massage", desc: "Ολιστική περιποίηση για το τριχωτό της κεφαλής και τα μαλλιά.", images: ["/images/services/headSpa.webp"], options: [
        { duration: "60'", price: "€40" },
      ] },
      { title: "Hard Rock Massage", desc: "Έντονο μασάζ για απόλυτη μυϊκή ανακούφιση.", images: ["/images/services/hardRock.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Μασάζ για παιδιά", desc: "Απαλό και ασφαλές μασάζ για παιδιά.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
      ] },
      { title: "4 hands massage", desc: "Τέσσερα χέρια δουλεύουν ταυτόχρονα για διπλή χαλάρωση.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€50" },
      ] },
      { title: "Πρεσσοθεραπεία", desc: "Μηχανική λεμφική παροχέτευση για αποτοξίνωση.", images: ["/images/services/presotherapeia.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "8 θεραπείες", price: "€100" },
      ] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Αρχαία ινδική τεχνική για ισορροπία σώματος και πνεύματος.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
      { title: "Candle Massage", desc: "Θεραπευτικό μασάζ με ζεστό λάδι από αρωματικά κεριά για βαθιά χαλάρωση.", images: ["/images/services/candlemassage.webp"], options: [
        { duration: "30'", price: "€20" },
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
        { duration: "90'", price: "€40" },
      ] },
      { title: "Hot Stone", desc: "Μασάζ με ζεστές πέτρες για βαθιά χαλάρωση και ανακούφιση μυϊκών εντάσεων.", images: ["/images/services/eueksiaImage.webp"], options: [
        { duration: "30'", price: "€20" },
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
        { duration: "90'", price: "€40" },
      ] },
    ],
  },
  omorfia: {
    title: "Ομορφιά",
    intro: "Φυσική λάμψη και φροντίδα προσώπου/σώματος με εξειδικευμένες τεχνικές.",
    hero: undefined,
    sub: [
      { title: "Φυσικό face lifting", desc: "Μη επεμβατικές τεχνικές τόνωσης και σύσφιξης.", images: ["/images/services/service19.webp"], price: "€15" },
      { title: "Φυσικό face lifting full extra", desc: "Ολοκληρωμένη περιποίηση για άμεση αναζωογόνηση.", images: ["/images/services/service19.webp"], price: "€30" },
      { title: "Scrub μάσκα σώματος & massage", desc: "Απολέπιση, ενυδάτωση και χαλάρωση σε μία θεραπεία.", images: ["/images/services/service22.webp"], price: "€30" },
      { title: "Σοκολατοθεραπεία", desc: "Θεραπεία ευεξίας με άρωμα σοκολάτας.", images: ["/images/services/cocoa.webp"], price: "€30" },
      { title: "Φωτοθεραπεία", desc: "Χρήση φωτός LED για την ανανέωση του δέρματος.", images: ["/images/services/unnamed.webp"], price: "€10" },
      { title: "Massage κυτταρίτιδας", desc: "Εξειδικευμένο μασάζ για τη μείωση της όψης φλοιού πορτοκαλιού.", images: ["/images/services/celluuliteMassage.webp"], options: [
        { duration: "1 συνεδρία", price: "€20" },
        { duration: "10 συνεδρίες", price: "€160" },
      ] },
    ],
  },
  "enallaktikes-therapeies": {
    title: "Εναλλακτικές Θεραπείες",
    intro: "Ενεργειακό μασάζ, αγιουρβεδικό, ρεφλεξολογία και περισσότερα.",
    hero: undefined,
    sub: [
      { title: "Ενεργειακή θεραπεία", desc: "Συνδυασμός τεχνικών για εξισορρόπηση ενέργειας.", images: ["/images/services/srvs20.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Αγιουρβεδικό μασάζ", desc: "Αρχαία ινδική τεχνική για ισορροπία σώματος και πνεύματος.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Ιδιαίτερες στιγμές",
    intro: "Πακέτα για ζευγάρια, bachelor/bachelorette και επετείους.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", images: ["/images/services/service28.webp"], options: [ { duration: "60'", price: "€110" } ] },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "On-site υπηρεσίες για εταιρικά events και ομάδες.",
    hero: undefined,
    sub: [
      { title: "Corporate", desc: "Παροχή μασάζ στον χώρο σας.", images: ["/images/services/srvs21.webp"], price: "€80/h" },
    ],
  },
  "gift-cards": {
    title: "Gift Cards",
    intro: "Χάρισε ευεξία στους αγαπημένους σου.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "Ψηφιακή κάρτα δώρου.", images: ["/images/services/srvs13.webp"], price: "από €30" },
    ],
  },
}

export const CATEGORIES_EN: Record<string, Category> = {
  euexia: {
    title: "Wellness",
    intro: "Relaxation, balance and wellness with techniques adapted to your needs.",
    hero: undefined,
    sub: [
      { title: "Relaxing massage", desc: "Gentle pressures and rhythmic movements for stress relief.", images: ["/images/services/relaxing.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Deep tissue", desc: "Focused work on chronic tensions and trigger points.", images: ["/images/services/deepTissuue.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
        { duration: "90'", price: "€35" },
      ] },
      { title: "Sports massage", desc: "Recovery, flexibility and injury prevention.", images: ["/images/services/athletic.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Lymphatic massage", desc: "Enhancement of lymphatic circulation - decongestion.", images: ["/images/services/lemfiko.webp"], options: [
        { duration: "45'", price: "€20" },
        { duration: "60'", price: "€25" },
      ] },
      { title: "Reflexology", desc: "Pressure on reflex points of the soles.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Pregnant Massage", desc: "Gentle massage to relieve musculoskeletal pain.", images: ["/images/services/pregnantMassage.webp"], options: [
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
      ] },
      { title: "Hydromassage", desc: "Water pressure massage for deep relaxation.", images: ["/images/services/uudromasaz.webp"], options: [
        { duration: "30'", price: "€20" },
      ] },
      { title: "Korean head spa massage", desc: "Holistic care for scalp and hair.", images: ["/images/services/headSpa.webp"], options: [
        { duration: "60'", price: "€40" },
      ] },
      { title: "Hard Rock Massage", desc: "Intense massage for ultimate muscle relief.", images: ["/images/services/hardRock.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Kids Massage", desc: "Gentle and safe massage for children.", images: ["/images/services/kidsMassage.webp"], options: [
        { duration: "30'", price: "€15" },
      ] },
      { title: "4 hands massage", desc: "Four hands work simultaneously for double relaxation.", images: ["/images/services/4hands.webp"], options: [
        { duration: "60'", price: "€50" },
      ] },
      { title: "Pressotherapy", desc: "Mechanical lymphatic drainage for detoxification.", images: ["/images/services/presotherapeia.webp"], options: [
        { duration: "30'", price: "€15" },
        { duration: "8 sessions", price: "€100" },
      ] },
      { title: "Ayurvedic Massage", desc: "Ancient Indian technique for body and mind balance.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
      { title: "Candle Massage", desc: "Therapeutic massage with warm oil from aromatic candles for deep relaxation.", images: ["/images/services/candlemassage.webp"], options: [
        { duration: "30'", price: "€20" },
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
        { duration: "90'", price: "€40" },
      ] },
      { title: "Hot Stone", desc: "Massage with hot stones for deep relaxation and muscle tension relief.", images: ["/images/services/eueksiaImage.webp"], options: [
        { duration: "30'", price: "€20" },
        { duration: "45'", price: "€25" },
        { duration: "60'", price: "€30" },
        { duration: "90'", price: "€40" },
      ] },
    ],
  },
  omorfia: {
    title: "Beauty",
    intro: "Natural radiance and face/body care with specialized techniques.",
    hero: undefined,
    sub: [
      { title: "Natural face lifting", desc: "Non-invasive toning and tightening techniques.", images: ["/images/services/service19.webp"], price: "€15" },
      { title: "Natural face lifting full extra", desc: "Complete treatment for immediate rejuvenation.", images: ["/images/services/service19.webp"], price: "€30" },
      { title: "Body scrub mask & massage", desc: "Exfoliation, hydration and relaxation in one treatment.", images: ["/images/services/service22.webp"], price: "€30" },
      { title: "Chocolate therapy", desc: "Wellness therapy with chocolate aroma.", images: ["/images/services/cocoa.webp"], price: "€30" },
      { title: "Phototherapy", desc: "Use of LED light for skin rejuvenation.", images: ["/images/services/unnamed.webp"], price: "€10" },
      { title: "Cellulite massage", desc: "Specialized massage to reduce the orange peel look.", images: ["/images/services/celluuliteMassage.webp"], options: [
        { duration: "1 session", price: "€20" },
        { duration: "10 sessions", price: "€160" },
      ] },
    ],
  },
  "enallaktikes-therapeies": {
    title: "Alternative Therapies",
    intro: "Energy massage, Ayurvedic, reflexology and more.",
    hero: undefined,
    sub: [
      { title: "Energy therapy", desc: "Combination of techniques for energy balance.", images: ["/images/services/srvs20.webp"], options: [ { duration: "90'", price: "€40" } ] },
      { title: "Reflexology", desc: "Pressure on reflex points of the soles.", images: ["/images/services/reflexologia.webp"], options: [
        { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
      ] },
      { title: "Ayurvedic Massage", desc: "Ancient Indian technique for body and mind balance.", images: ["/images/services/agiourbediko.webp"], options: [
        { duration: "60'", price: "€35" },
      ] },
      { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", images: ["/images/services/thaiMassage.webp"], options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
    ],
  },
  "idiaiteres-stigmes": {
    title: "Special Moments",
    intro: "Packages for couples, bachelor/bachelorette and anniversaries.",
    hero: undefined,
    sub: [
      { title: "Couples massage", desc: "Side-by-side experience for two.", options: [ { duration: "60'", price: "€110" } ] },
    ],
  },
  "special-events": {
    title: "Special Events",
    intro: "On-site services for corporate events and groups.",
    hero: undefined,
    sub: [
      { title: "Corporate", desc: "Massage services at your location.", images: ["/images/services/srvs21.webp"], price: "€80/h" },
    ],
  },
  "gift-cards": {
    title: "Gift Cards",
    intro: "Give wellness to your loved ones.",
    hero: undefined,
    sub: [
      { title: "E-Gift", desc: "Digital gift card.", images: ["/images/services/srvs13.webp"], price: "from €30" },
    ],
  },
}
