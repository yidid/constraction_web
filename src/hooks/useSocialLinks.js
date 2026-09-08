import { useEffect, useState } from "react";
import socialLinksData from "../data/socialLinks";
import { getSocialLinks } from "../services/socialLinkService";

function useSocialLinks() {
  const [socialLinks, setSocialLinks] = useState(socialLinksData);

  useEffect(() => {
    let active = true;

    getSocialLinks()
      .then((firebaseSocialLinks) => {
        if (!active || firebaseSocialLinks.length === 0) return;

        const iconsByName = new Map(
          socialLinksData.map((socialLink) => [socialLink.name.toLowerCase(), socialLink.icon])
        );

        const linksFromFirebase = new Map(
          firebaseSocialLinks.map((socialLink) => [socialLink.name.toLowerCase(), socialLink])
        );

        setSocialLinks(
          socialLinksData
            .map((localSocialLink) => {
              const firebaseSocialLink = linksFromFirebase.get(localSocialLink.name.toLowerCase());

              return {
                ...localSocialLink,
                ...firebaseSocialLink,
                icon: iconsByName.get(localSocialLink.name.toLowerCase()),
              };
            })
            .filter((socialLink) => socialLink.icon)
        );
      })
      .catch(() => {
        // Keep the local links when Firebase is unavailable.
      });

    return () => {
      active = false;
    };
  }, []);

  return socialLinks;
}

export default useSocialLinks;
