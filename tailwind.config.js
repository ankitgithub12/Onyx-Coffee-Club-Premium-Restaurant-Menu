/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",
        accent: "#C97A40",
        borderGold: "#D6B37A",
        bgCream: "#F8F4EE",
        textDark: "#2D2D2D",
        textMuted: "#777777",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        merriweather: ["Merriweather", "serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
