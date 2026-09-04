import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import navLinks from "../../data/navLinks";
import socialLinks from "../../data/socialLinks";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="bg-navy text-light dark:bg-dark">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-16">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-200">
              Building strong foundations and lasting relationships. NAF
              Construction delivers quality craftsmanship on every project,
              residential or commercial.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-gray-200 transition-colors duration-200 hover:bg-primary hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy dark:focus-visible:ring-offset-dark"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-200 transition-colors duration-200 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-light">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary shrink-0" />
                Around CMC michael, Guji Highland building, Addis Ababa
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-primary shrink-0" />
                +251 946 452 222 / +251 92 096 6481
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary shrink-0" />
                nafcon22@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-navy-light pt-5 text-sm text-gray-300 dark:border-dark-light sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NAF Construction.</span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;