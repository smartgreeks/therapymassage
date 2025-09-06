export type PostSummary = {
  slug: string
  title: string
  intro: string
  image: string
  date: string
}

const today = new Date().toISOString().slice(0, 10)

export const blogPosts: PostSummary[] = [
  {
    slug: "vriskete-to-masaz-pou-sas-tairiazei",
    title: "Βρείτε το μασάζ που σας ταιριάζει, μαζί μας",
    intro: "Εξατομικευμένη προσέγγιση και καθοδήγηση για το ιδανικό μασάζ.",
    image: "/images/hero.webp",
    date: "2025-09-05",
  },
  {
    slug: "therapy-massage-pera-apo-ti-xalarosi",
    title: "Therapy Massage — Πέρα από τη χαλάρωση",
    intro: "Θεραπευτικά οφέλη για μυς, στάση σώματος και ευεξία.",
    image: "/images/services/eueksiaImage.webp",
    date: today,
  },
  {
    slug: "aromatotherapeia-agxos",
    title: "Αρωματοθεραπεία και άγχος",
    intro: "Πώς τα αιθέρια έλαια συμβάλλουν στη χαλάρωση και την ηρεμία.",
    image: "/images/place10.webp",
    date: today,
  },
]

export default blogPosts

