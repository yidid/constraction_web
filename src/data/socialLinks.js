import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

/**
 * Canonical list of social media links. Used by both the Footer and
 * the Contact page's "Connect With Us" section, so adding or removing
 * a platform only requires editing this one file.
 */
const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1DSfmt3dSz/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/nafconstruction_?stkn=Nm1mbTMxYXZ1NTln&utm_source=qr",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@nafconstruction?_r=1",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "#",
  },
];

export default socialLinks;