import { useEffect, useState } from "react";
import socialLinksData from "../data/socialLinks";
import { getSocialLinks } from "../services/socialLinkService";

function useSocialLinks() {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    let active = true;

    getSocialLinks()
      .then((firebaseSocialLinks) => {
        if (active) {
          const iconsByName = new Map(
            socialLinksData.map((socialLink) => [socialLink.name.toLowerCase(), socialLink.icon])
          );

          setSocialLinks(
            firebaseSocialLinks
              .map((socialLink) => ({
                ...socialLink,
                icon: iconsByName.get(socialLink.name.toLowerCase()),
              }))
              .filter((socialLink) => socialLink.icon)
          );
        }
      })
      .catch(() => {
        if (active) setSocialLinks([]);
      });

    return () => {
      active = false;
    };
  }, []);

  return socialLinks;
}

export default useSocialLinks;
