import {
  FaHome,
  FaPaintRoller,
  FaBuilding,
  FaRoad,
  FaTree,
} from "react-icons/fa";

/**
 * Canonical list of company services. This single source of truth is used by:
 * - The Home page "Our Services" preview section
 * - The dedicated Services page (full detail)
 * - The Footer's services quick-links list
 * Editing a service here updates it everywhere it's referenced.
 */
const services = [
  {
    id: "renovation",
    icon: FaHome,
    title: "Renovation",
    shortDescription:
      "Transforming existing structures into modern, high-quality spaces.",
    fullDescription:
      "We specialize in both master-scale builds and high-end structural renovations.",
  },
  {
    id: "finishing-works",
    icon: FaPaintRoller,
    title: "Finishing Works",
    shortDescription:
      "Premium architectural finishes executed with precision.",
    fullDescription:
      "We deliver flawless surface execution, precise geometric alignment, and premium material installations with uncompromising attention to detail.",
  },
  {
    id: "structural-work",
    icon: FaBuilding,
    title: "Structural Work",
    shortDescription:
      "Strong, durable structures built on engineering excellence.",
    fullDescription:
      "We build the backbone of modern architecture and transform complex engineering concepts into rock-solid reality. ",
  },
  {
    id: "road-construction",
    icon: FaRoad,
    title: "Road Construction",
    shortDescription:
      "Reliable road infrastructure built for long-term performance.",
    fullDescription:
      "We focuses on strict site management, proper drainage systems, and strong foundations to build roads that connect communities.",
  },
  {
    id: "landscaping",
    icon: FaTree,
    title: "Landscaping",
    shortDescription:
      "Beautiful outdoor environments designed for lasting impact.",
    fullDescription:
      "We handle grading, green spaces, custom hardscaping, and architectural fountains to create elegant, highly polished exterior environments.",
  },
];

export default services;