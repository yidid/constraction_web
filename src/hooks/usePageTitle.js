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
    document.title = title
      ? `${title} | NAF Constraction`
      : "NAF Constraction";

    if (description) {
      let metaTag = document.querySelector('meta[name="description"]');

      // If no meta description tag exists yet in index.html, create one
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "description");
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", description);
    }
  }, [title, description]);
};

export default usePageTitle;