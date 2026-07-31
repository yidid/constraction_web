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
      "We specialize in both master-scale builds and high-end structural renovations. We breathe new life into existing spaces, transforming old structures into modern, luxury environments while preserving their integrity and value.",
  },
  {
    id: "finishing-works",
    icon: FaPaintRoller,
    title: "Finishing Works",
    shortDescription:
      "Premium architectural finishes executed with precision.",
    fullDescription:
      "At NAF Construction and Trading, we specialize in elite architectural finishing that defines luxury environments. We deliver flawless surface execution, precise geometric alignment, and premium material installations with uncompromising attention to detail.",
  },
  {
    id: "structural-work",
    icon: FaBuilding,
    title: "Structural Work",
    shortDescription:
      "Strong, durable structures built on engineering excellence.",
    fullDescription:
      "We build the backbone of modern architecture. At NAF Construction and Trading, we transform complex engineering concepts into rock-solid reality. By combining premium materials with rigorous site management, we ensure every structure is safe, durable, and built to last.",
  },
  {
    id: "road-construction",
    icon: FaRoad,
    title: "Road Construction",
    shortDescription:
      "Reliable road infrastructure built for long-term performance.",
    fullDescription:
      "NAF Construction and Trading provides dependable road development and asphalt paving services. Our team focuses on strict site management, proper drainage systems, and strong foundations to build roads that connect communities and stand the test of time.",
  },
  {
    id: "landscaping",
    icon: FaTree,
    title: "Landscaping",
    shortDescription:
      "Beautiful outdoor environments designed for lasting impact.",
    fullDescription:
      "NAF Construction and Trading delivers complete landscaping and outdoor space development. We handle grading, green spaces, custom hardscaping, and premium features such as architectural fountains to create elegant, highly polished exterior environments.",
  },
];

export default services;