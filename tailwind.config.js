/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names, so unused styles are purged in production
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Custom brand color palette — reference these as bg-primary, text-dark, etc.
      // instead of raw Tailwind defaults, so the whole brand can be updated in one place.
      colors: {
        primary: {
          DEFAULT: "#FFC107", // Main brand yellow
          light: "#FFD54F",   // Lighter yellow for hover states
          dark: "#FFA000",    // Darker yellow for active/pressed states
        },
        dark: {
          DEFAULT: "#1A1A1A", // Near-black, used for text and dark backgrounds
          light: "#2C2C2C",   // Slightly lighter black, used for cards on dark sections
        },
        light: {
          DEFAULT: "#FFFFFF", // Pure white
          off: "#F5F5F5",     // Off-white, used for alternating section backgrounds
        },
      },
      // Custom font stack. We start with system fonts as a safe fallback;
      // we can swap in a Google Font (e.g., Inter, Poppins) later by only editing this file.
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      // Custom animation keyframes we'll use later for fade-in-on-scroll effects (Step 15)
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