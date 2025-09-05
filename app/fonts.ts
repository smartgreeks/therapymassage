import { Inter, Noto_Serif } from "next/font/google"

export const inter = Inter({ subsets: ["latin", "latin-ext", "greek", "greek-ext"], variable: "--font-inter" })
// Use Noto Serif for robust Greek support while keeping the same CSS variable name
export const playfair = Noto_Serif({ subsets: ["latin", "latin-ext", "greek"], variable: "--font-playfair" })
