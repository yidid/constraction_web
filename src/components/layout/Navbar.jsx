import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import navLinks from "../../data/navLinks";
import useScrollPosition from "../../hooks/useScrollPosition";
import Logo from "../common/Logo";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-navy shadow-sm backdrop-blur-md dark:bg-dark"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo light />

          <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                      `text-sm font-semibold transition-colors duration-200 pb-2 border-b whitespace-nowrap ${
                      isActive
                        ? "text-primary-light border-primary"
                        : "text-light border-transparent hover:text-primary-light"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <NavLink
              to="/contact"
              className="bg-primary text-light font-display font-bold px-4 xl:px-5 py-2.5 rounded-sm hover:bg-primary-light transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Get a Quote
            </NavLink>
          </div>

          {/* Mobile: toggle sits next to the hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-light text-3xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light dark:bg-dark dark:border-dark-light">
          <ul className="flex flex-col px-4 py-2 gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block text-base font-semibold py-3.5 ${
                      isActive ? "text-primary-light" : "text-light hover:text-primary-light"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="py-2">
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className="block text-center bg-primary text-light font-display font-bold px-5 py-3.5 rounded-sm"
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