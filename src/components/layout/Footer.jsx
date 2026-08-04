import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import navLinks from "../../data/navLinks";
import services from "../../data/services";
import socialLinks from "../../data/socialLinks";
import Logo from "../common/Logo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Building strong foundations and lasting relationships. Elite
              Construction delivers quality craftsmanship on every project,
              residential or commercial.
            </p>
            <div className="flex gap-4 mt-5">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  aria-label={name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-dark-light text-light hover:bg-primary hover:text-dark transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for project updates and construction tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex mb-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm rounded-l-md bg-dark-light text-light placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-dark font-semibold px-4 rounded-r-md hover:bg-primary-light transition-colors duration-200 text-sm"
              >
                Join
              </button>
            </form>
            {subscribed && (
              <p className="text-primary text-xs mb-4">
                Thanks for subscribing!
              </p>
            )}

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary shrink-0" />
                123 Builder Ave, Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-primary shrink-0" />
                +251 900 000 000
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary shrink-0" />
                info@eliteconstruction.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-light mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Elite Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;