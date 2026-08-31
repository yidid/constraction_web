/**
 * Canonical list of company projects. Used by:
 * - The Home page "Featured Projects" preview (filtered to featured: true)
 * - The full Portfolio page, including category filtering
 * - Individual project detail pages (via gallery array)
 *
 * category values: "residential" | "commercial" | "renovation"
 */
const projects = [
  {
    id: "riverside-family-home",
    title: "Riverside Family Home",
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa, Ethiopia",
    year: "2024",
    description:
      "A 4-bedroom family residence featuring an open-concept layout, energy-efficient design, and a landscaped courtyard.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "meskel-business-tower",
    title: "Meskel Business Tower",
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa, Ethiopia",
    year: "2023",
    description:
      "A 12-story mixed-use office tower with retail ground floor, completed on schedule with zero safety incidents.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "heritage-villa-renovation",
    title: "Heritage Villa Renovation",
    category: "renovation",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    location: "Bahir Dar, Ethiopia",
    year: "2023",
    description:
      "Full structural and interior renovation of a heritage villa, preserving original architectural character.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "sunrise-apartments",
    title: "Sunrise Apartments Complex",
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    location: "Adama, Ethiopia",
    year: "2022",
    description:
      "A 40-unit residential apartment complex with shared amenities, completed across three construction phases.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "lakeview-retail-plaza",
    title: "Lakeview Retail Plaza",
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    location: "Hawassa, Ethiopia",
    year: "2022",
    description:
      "A modern retail plaza with 15 storefronts, designed for high foot traffic and long-term durability.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "modern-loft-remodel",
    title: "Modern Loft Remodel",
    category: "renovation",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa, Ethiopia",
    year: "2021",
    description:
      "Complete interior remodel transforming a dated apartment into a bright, open modern loft space.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  /* NAF Construction & Trading Projects */
  {
    id: "ministry-of-urban-development-renovation",
    title: "Ministry of Urban Development Renovation",
    category: "renovation",
    client: "Minister of Urban Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (National Theater), Ethiopia",
    year: "2024",
    description:
      "Executed comprehensive interior and external paint work, gypsum board ceiling and wall partitioning, porcelain tile work, and dammer work near National Theater.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "vehicle-and-equipment-maintenance-center",
    title: "Vehicle and Equipment Maintenance Center",
    category: "commercial",
    client: "Addis Ababa City Road Authority (AACRA)",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Kality), Ethiopia",
    year: "2024",
    description:
      "Specialized building and maintenance construction featuring HCB work, cement plastering, gypsum prime coat work, porcelain tiling, and interior gypsum plastering.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ethio-djibouti-railways-project",
    title: "Ethio-Djibouti Railways Project",
    category: "commercial",
    client: "Ethio-Djibouti Railways",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Gelan), Ethiopia",
    year: "2023",
    description:
      "Delivered structural finishing packages encompassing gypsum board ceilings/partitions, gypsum plastering, painting, and porcelain floor and wall tiling.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cmi-office-renovation",
    title: "Construction Management Institute (CMI) Office Renovation",
    category: "renovation",
    client: "Construction Management Institute",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Kality), Ethiopia",
    year: "2023",
    description:
      "Completed office renovation works focusing on gypsum board ceiling/wall partitioning, fine gypsum plastering, and internal paint work.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ministry-of-women-and-social-affairs",
    title: "Ministry of Women and Social Affairs Project",
    category: "renovation",
    client: "Minister of Women and Social Affairs",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Arat Kilo), Ethiopia",
    year: "2023",
    description:
      "Executed interior outfitting featuring high-grade carpet tile flooring installations alongside custom vanity and mirror fixture setups.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "addis-fire-disaster-head-office-renovation",
    title: "Addis Ababa Fire & Disaster Risk Management Head Office",
    category: "renovation",
    client: "Addis Ababa Fire and Disaster Risk Management Commission",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Piassa), Ethiopia",
    year: "2023",
    description:
      "Structural and architectural renovation including mezzanine metal/concrete works, gypsum ceilings/partitions, plastering, internal painting, and porcelain tiling.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ethiopian-police-university-project",
    title: "Ethiopian Police University Project",
    category: "commercial",
    client: "Ethiopian Police University",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    location: "Sendafa, Oromia, Ethiopia",
    year: "2023",
    description:
      "Multi-building packages across Forensics, Dormitory, Guard House, Watch Tower, Gates, and site works featuring carpet/porcelain tiling and stone cladding.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ethiopian-aviation-group-training-facility",
    title: "Ethiopian Aviation Group Training Facility",
    category: "commercial",
    client: "Ethiopian Aviation Group",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Bole), Ethiopia",
    year: "2023",
    description:
      "Design-build facility upgrades for Classroom Building Maintenance Hangar Training Aircraft comprising vanity, mirror, and metal fence construction.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "geological-institute-of-ethiopia-lab",
    title: "Geological Institute of Ethiopia (GIE) Laboratory Project",
    category: "commercial",
    client: "Geological Institute of Ethiopia (GIE)",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Mekanisa & Gurdshola), Ethiopia",
    year: "2023",
    description:
      "Laboratory design/renovation, new lab building construction, 41 temporary federal police housing units at Kolfe camp, vanity works, and stone cladding.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ethiopian-engineering-corporation-facilities",
    title: "Ethiopian Engineering Corporation Facilities",
    category: "renovation",
    client: "Ethiopian Engineering Corporation",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    location: "Addis Ababa (Gerji), Ethiopia",
    year: "2023",
    description:
      "Head office café, Gym, reception area, football pitch, and transport sector renovations with porcelain tiles, glazed partitions, and custom finishings.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "sorga-resort",
    title: "Sorga Resort",
    category: "commercial",
    client: "Prime Minister's Office",
    image:"/assets/images/clients/Prime Minister’s office.jpg",
    location: "Nekemt, Oromia, Ethiopia",
    year: "2023",
    description:
      "Specialized Decra roof installations across 21 villas, 1 hospitality building, and a gym, including roof gutters, flashing, and coping.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "chaka-project-perimeter-fence",
    title: "Chaka Project Perimeter Fence Construction",
    category: "commercial",
    client: "Addis Ababa Road Authority",
    
    image:"/assets/images/clients/eih.jpg",

    location: "Addis Ababa (Jiffara), Ethiopia",
    year: "2023",
    description:
      "High-security perimeter boundary infrastructure focusing on specialized fence metal fabrication and erection.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "african-leadership-excellence-academy-renovation",
    title: "African Leadership Excellence Academy Admin Block Renovation",
    category: "renovation",
    client: "African Leadership Excellence Academy",
    image:"/assets/images/clients/African Leadership Excellence Academy Administration Block Renovation.jpg",
    location: "Sululta, Oromia, Ethiopia",
    year: "2022",
    description:
      "Admin block renovation featuring gypsum board partitions, plastering, painting, vanity works, roofing metal work/ega, and carpet tile installations.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
  },
 {
  id: "ethiopian-investment-holding-headquarter-renovation",
  title: "Ethiopian Investment Holding Headquarter Office Renovation",
  category: "renovation",
  client: "Ethiopian Investment Holding",
  image: "/assets/images/clients/eih.jpg",
  location: "Addis Ababa (Mexico), Ethiopia",
  year: "2022",
  description:
    "Corporate headquarter remodeling encompassing gypsum partitions, plastering, internal paint, glazed partitions, vanity works, and carpet flooring.",
  featured: false,
  gallery: [
    "/assets/images/IEH/EIH1.jpg",
    "/assets/images/IEH/EIH2.jpg",
    "/assets/images/IEH/EIH3.jpg",
    "/assets/images/IEH/EIH4.jpg",
    "/assets/images/IEH/EIH5.jpg",
    "/assets/images/IEH/EIH6.jpg",
    "/assets/images/IEH/EIH7.jpg",
    "/assets/images/IEH/EIH8.jpg",
    "/assets/images/IEH/EIH9.jpg",
    "/assets/images/IEH/EIH10.jpg",
  ],
},
  {
  id: "ministry-of-finance-tax-policy-office-renovation",
  title: "Ministry of Finance Tax Policy & Law Office Renovation",
  category: "renovation",
  client: "Minister of Finance",
  image: "./assets/images/clients/Minister of Finance.png",
  location: "Addis Ababa (Sidist Kilo), Ethiopia",
  year: "2022",
  description:
    "Modernization of Tax Policy & Law Office and VIP café/dining with gypsum partitions, painting, carpet tiling, and porcelain floor/wall tiling.",
  featured: false,
  gallery: [
 "/assets/images/MOF/mof1.jpg",
    "/assets/images/MOF/mof2.jpg",
    "/assets/images/MOF/mof3.jpg",
    "/assets/images/MOF/mof4.jpg",
    "/assets/images/MOF/mof5.jpg",
    "/assets/images/MOF/mof6.jpg",
    "/assets/images/MOF/mof7.jpg",
    
  ],
},
  {
    id: "watershed-development-support-project",
    title: "Watershed Development Support Project",
    category: "commercial",
    client: "Adeda Energies",
    image:
      "./assets/images/clients/Adeda Energies.png",
    location: "Addis Ababa (Ras Mekonnen Bridge), Ethiopia",
    year: "2022",
    description:
      "Architectural fit-out supporting Watershed Masterplan, upstream river clearing, gypsum/fiberboard partitions, joinery, aluminum cladding, and smart car wash.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "summit-residential-g-3-fit-out",
    title: "Summit Residential G+3 Fit Out",
    category: "residential",
    client: "Private Client",
    image: "",
    location: "Addis Ababa (Summit), Ethiopia",
    year: "2022",
    description:
      "High-end G+3 residential fit-out with gypsum partitions, internal/external painting, electrical/sanitary works, compound fountain, masonry, and tiling.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "g-2-residential-building-gerji",
    title: "G+2 Residential Building",
    category: "residential",
    client: "Private Client",
    image: "",
    location: "Addis Ababa (Gerji), Ethiopia",
    year: "2021",
    description:
      "Constructed a modern G+2 building from foundation to finish covering reinforced concrete works, HCB work, plastering, aluminum/wooden doors, and tiling.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export default projects;