import { useEffect } from "react";

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
    const siteName = "NAF Construction";
    const pageTitle = title ? `${title} | ${siteName}` : siteName;
    document.title = pageTitle;

    if (description) {
      let metaTag = document.querySelector('meta[name="description"]');

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "description");
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", description);
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
    updateMeta("property", "og:description", description);
    updateMeta("name", "twitter:title", pageTitle);
    updateMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href.split("#")[0]);
  }, [title, description]);
};

export default usePageTitle;