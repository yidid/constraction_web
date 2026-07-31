import {
  FaAward,
  FaCogs,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

/**
 * Reasons displayed in the "Why Choose Us" Home page section.
 * Each reason includes an icon, title, and short description.
 */
const whyChooseUs = [
  {
    id: "engineering",
    icon: FaCogs,
    title: "Engineering Excellence",
    description:
      "From heavy civil works to structural engineering and architectural finishing, we deliver technically sound solutions with precision at every stage.",
  },
  {
    id: "quality",
    icon: FaAward,
    title: "Uncompromising Quality",
    description:
      "We use premium materials, skilled professionals, and rigorous quality control to ensure every project is built to last.",
  },
  {
    id: "partnership",
    icon: FaHandshake,
    title: "Client-Centered Approach",
    description:
      "We work closely with every client through transparent communication, collaborative planning, and tailored solutions that bring their vision to life.",
  },
  {
    id: "reliability",
    icon: FaShieldAlt,
    title: "Reliable Project Delivery",
    description:
      "Through disciplined project management, strict safety standards, and accountability at every level, we deliver projects on time and with confidence.",
  },
];

export default whyChooseUs;