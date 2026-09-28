/**
 * Centralized navigation links data.
 * Keeping this as data (not hardcoded JSX) means the Navbar and any future
 * component (e.g., a mobile drawer or sitemap) can reuse the same source of truth.
 */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Team", path: "/team" },
  // { name: "Testimonials", path: "/testimonials" },
  // { name: "Contact", path: "/contact" },
];

export default navLinks;