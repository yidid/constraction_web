import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import navLinks from "../../data/navLinks";
import useScrollPosition from "../../hooks/useScrollPosition";
import Logo from "../common/Logo";

/**
 * Sticky Navbar that:
 * - Is transparent over the hero section (homepage only, before scrolling)
 * - Becomes solid (dark) once the user scrolls, or on any non-homepage route
 * - Highlights the active route
 * - Collapses into a hamburger menu on mobile
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Transparent only when on the homepage AND not yet scrolled
  const isTransparent = isHomePage && !isScrolled;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-dark shadow-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo is always light-colored since navbar background is either transparent-over-dark-hero or solid dark */}
          <Logo light />

          {/* Desktop nav links — hidden on small screens */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 pb-1 border-b-2 ${
                      isActive
                        ? "text-primary border-primary"
                        : "text-light border-transparent hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA button — desktop only */}
          <NavLink
            to="/contact"
            className="hidden lg:inline-block bg-primary text-dark font-semibold px-5 py-2.5 rounded-md hover:bg-primary-light transition-colors duration-200"
          >
            Get a Quote
          </NavLink>

          {/* Hamburger toggle — mobile/tablet only */}
          <button
            className="lg:hidden text-light text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark border-t border-dark-light">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block text-base font-medium ${
                      isActive ? "text-primary" : "text-light hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className="block text-center bg-primary text-dark font-semibold px-5 py-2.5 rounded-md"
              >
                Get a Quote
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;