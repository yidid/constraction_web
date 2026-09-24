import { useEffect } from "react";
import siteConfig from "../data/siteConfig";

/**
 * Sets the browser tab title AND the meta description for the current page.
 * React Router does not update these automatically on route change, so each
 * page calls this hook with its own title/description for SEO purposes.
 *
 * @param {string} title - page-specific title (company name is appended automatically)
 * @param {string} description - page-specific meta description for search engines/social previews
 */
const usePageTitle = (title, description = "") => {
  useEffect(() => {
    const siteName = siteConfig.name;
    const pageTitle = title ? `${title} | ${siteName}` : siteName;
    const pageDescription = description || siteConfig.description;
    const pageUrl = `${siteConfig.url}${window.location.pathname}`;
    document.title = pageTitle;

    if (pageDescription) {
      let metaTag = document.querySelector('meta[name="description"]');

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "description");
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", pageDescription);
    }

    const updateMeta = (attribute, key, content) => {
      let metaTag = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute(attribute, key);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    updateMeta("property", "og:title", pageTitle);
    updateMeta("property", "og:description", pageDescription);
    updateMeta("property", "og:url", pageUrl);
    updateMeta("name", "twitter:title", pageTitle);
    updateMeta("name", "twitter:description", pageDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

    let structuredData = document.head.querySelector(
      'script[data-seo="organization"]'
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.setAttribute("data-seo", "organization");
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ConstructionBusiness",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      description: siteConfig.description,
      areaServed: {
        "@type": "Country",
        name: "Ethiopia",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressCountry: siteConfig.country,
      },
    });
  }, [title, description]);
};

export default usePageTitle;