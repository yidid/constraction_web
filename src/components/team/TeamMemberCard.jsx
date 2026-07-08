import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

/**
 * Icon map for social platforms — keeps the card's JSX clean by
 * looking up the correct icon component per key in `socials`.
 */
const socialIcons = {
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  email: FaEnvelope,
};

/**
 * Team member card: photo, name, role always visible; social icons
 * slide up and fade in on hover. Only renders icons for platforms
 * actually present in the `socials` object (no dead/broken links).
 */
const TeamMemberCard = ({ name, role, photo, socials }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg h-96">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-light text-lg font-bold">{name}</h3>
        <p className="text-primary text-sm font-medium mt-1">{role}</p>

        {/* Social icons: hidden by default, revealed on hover */}
        <div className="flex gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {Object.entries(socials).map(([platform, link]) => {
            const Icon = socialIcons[platform];
            if (!Icon) return null;

            const href = platform === "email" ? `mailto:${link}` : link;

            return (
              <a
                key={platform}
                href={href}
                aria-label={`${name} on ${platform}`}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-light/10 text-light hover:bg-primary hover:text-dark transition-colors duration-200"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;