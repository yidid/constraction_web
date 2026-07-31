import {
  FaBullseye,
  FaEye,
  FaBolt,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";

/**
 * Core company values displayed on the About page.
 * Reuses the same icon+title+description shape as whyChooseUs.js,
 * rendered through the shared IconFeatureCard component.
 */
const companyValues = [
  {
    id: "precision",
    icon: FaBullseye,
    title: "Build with Precision",
    description:
      "We bring uncompromising safety, engineering excellence, and technical accuracy to every construction and renovation project.",
  },
  {
    id: "transparency",
    icon: FaEye,
    title: "Lead with Transparency",
    description:
      "We build trust through clarity. From detailed financial contracts to daily site reports, we communicate honestly and openly.",
  },
  {
    id: "agility",
    icon: FaBolt,
    title: "Deliver with Agility",
    description:
      "We move fast without losing focus. In the trading market, we source and supply quality materials with speed, efficiency, and reliability.",
  },
  {
    id: "partnership",
    icon: FaHandshake,
    title: "Partner on the Vision",
    description:
      "We don't just work for clients—we collaborate with them. We align our expertise with your architectural and functional goals to bring every vision to life.",
  },
  {
    id: "accountability",
    icon: FaClipboardCheck,
    title: "Own the Outcome",
    description:
      "We hold ourselves accountable at every level. From the initial project planning to the final hand-off, we stand behind our work and our word.",
  },
];

export default companyValues;