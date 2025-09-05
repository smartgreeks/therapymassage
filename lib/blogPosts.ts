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
    title: "Βρείτε το μασάζ που σας ταιριάζει – μαζί μας",
    intro: "Εξατομικευμένη αξιολόγηση και προτάσεις για το ιδανικό μασάζ.",
    image: "/images/hero.webp",
    date: "2025-09-05",
  },
  {
    slug: "therapy-massage-pera-apo-ti-xalarosi",
    title: "Therapy Massage: πέρα από τη χαλάρωση",
    intro: "Πώς το θεραπευτικό μασάζ συμβάλλει στην ευεξία και αποκατάσταση.",
    image: "/images/services/eueksiaImage.webp",
    date: today,
  },
  {
    slug: "aromatotherapeia-agxos",
    title: "Αρωματοθεραπεία για άγχος",
    intro: "Αιθέρια έλαια και τεχνικές που μειώνουν την ένταση.",
    image: "/images/place10.webp",
    date: today,
  },
]

export default blogPosts
