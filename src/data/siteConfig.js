const siteUrl = (process.env.REACT_APP_SITE_URL || "https://nafconstructionandtrading.com").replace(/\/$/, "");

const siteConfig = {
  name: "NAF Construction",
  legalName: "NAF Construction & Trading",
  url: siteUrl,
  description:
    "NAF Construction and Trading delivers residential, commercial, renovation, structural, road construction, finishing, and landscaping services in Ethiopia.",
  locale: "en_ET",
  country: "ET",
  city: "Addis Ababa",
  address: "Around CMC Michael, Guji Highland Building",
  email: "info@nafconstruction.com",
};

export default siteConfig;
