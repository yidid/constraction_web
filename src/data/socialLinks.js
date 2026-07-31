import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

/**
 * Canonical list of social media links. Used by both the Footer and
 * the Contact page's "Connect With Us" section, so adding or removing
 * a platform only requires editing this one file.
 */
const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "#" },
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, url: "#" },
];

export default socialLinks;