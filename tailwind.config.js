/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D5DA6",
          light: "#3C92D3",
          dark: "#154884",
        },
        dark: {
          DEFAULT: "#0B1220",
          light: "#162338",
        },
        navy: {
          DEFAULT: "#0B2A48",
          light: "#1A4D7A",
        },
        light: {
          DEFAULT: "#FFFFFF",
          off: "#F1F5F9",
        },
      },
      borderRadius: {
        card: "0.375rem",
      },
      boxShadow: {
        card: "0 12px 32px rgba(1, 27, 62, 0.12)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};