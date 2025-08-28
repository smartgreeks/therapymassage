import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f4f6f2",
          100: "#e8eee3",
          200: "#d4dfc4",
          300: "#b5c6a0",
          400: "#96ad7c",
          500: "#7b955f",
          600: "#617547",
          700: "#4f5f3a",
          800: "#3e4a2d",
          900: "#2e3721"
        },
        beige: "#f4efe8",
        bark: "#6b4f3a",
        sand: "#e8dccb",
        leaf: "#7b955f"
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.2)",
      },
      borderRadius: {
        xl: "1rem",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 700ms ease-out forwards"
      }
    }
  },
  plugins: []
}

export default config

