const siteUrl = (process.env.REACT_APP_SITE_URL || "https://nafconstructionandtrading.com").replace(/\/$/, "");

const siteConfig = {
  name: "NAF Construction",
  legalName: "NAF Construction & Trading",
  url: siteUrl,
  description:
    "NAF Construction delivers quality residential and commercial construction, renovation, and design services in Ethiopia.",
  locale: "en_ET",
  country: "ET",
  city: "Addis Ababa",
};

export default siteConfig;
