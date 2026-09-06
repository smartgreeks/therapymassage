import { Noto_Serif } from "next/font/google"

// Body text already uses the system font. Preload only the heading subsets in use.
export const playfair = Noto_Serif({
  subsets: ["latin", "greek"],
  variable: "--font-playfair",
  display: "swap",
})
