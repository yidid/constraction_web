/**
 * Team member roster, grouped by department for the Team page.
 * `socials` only includes the platforms that apply to that person —
 * TeamMemberCard conditionally renders whichever icons are present.
 */
const team = [
  {
    id: "meron-alemu",
    name: "Meron Alemu",
    role: "Founder & CEO",
    department: "Leadership",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    bio: "Meron founded NAF Construction in 2005 and has led the company's growth from a two-person outfit into a full-service construction firm.",
    socials: {
      linkedin: "#",
      email: "meron@nafconstruction.com",
    },
  },
  {
    id: "yonas-girma",
    name: "Yonas Girma",
    role: "Chief Operating Officer",
    department: "Leadership",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    bio: "Yonas oversees day-to-day operations, ensuring every project runs efficiently from procurement to final handover.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "yonas@nafconstruction.com",
    },
  },
  {
    id: "hana-tsegaye",
    name: "Hana Tsegaye",
    role: "Lead Architect",
    department: "Engineering & Design",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    bio: "Hana leads architectural design across all commercial projects, balancing aesthetics with structural practicality.",
    socials: {
      linkedin: "#",
      email: "hana@nafconstruction.com",
    },
  },
  {
    id: "dawit-solomon",
    name: "Dawit Solomon",
    role: "Structural Engineer",
    department: "Engineering & Design",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    bio: "Dawit ensures every structure meets rigorous safety and durability standards, from foundation to rooftop.",
    socials: {
      linkedin: "#",
    },
  },
  {
    id: "selam-bekele",
    name: "Selam Bekele",
    role: "Interior Designer",
    department: "Engineering & Design",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    bio: "Selam crafts interior spaces that balance functionality with each client's personal or brand aesthetic.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "kaleb-worku",
    name: "Kaleb Worku",
    role: "Senior Project Manager",
    department: "Project Delivery",
    photo:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80",
    bio: "Kaleb coordinates timelines, budgets, and subcontractors, acting as the main point of contact throughout each build.",
    socials: {
      linkedin: "#",
      email: "kaleb@nafconstruction.com",
    },
  },
  {
    id: "liya-mulu",
    name: "Liya Mulu",
    role: "Site Supervisor",
    department: "Project Delivery",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    bio: "Liya manages on-site operations daily, ensuring safety protocols and quality standards are consistently upheld.",
    socials: {
      linkedin: "#",
    },
  },
];

export default team;