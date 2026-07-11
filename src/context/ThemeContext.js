import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/**
 * Provides sitewide dark/light theme state. Wraps the entire app (see App.js)
 * so any component can read the current theme or toggle it via useTheme().
 *
 * Initial theme resolution order:
 * 1. A previously saved manual choice in localStorage (highest priority)
 * 2. The user's OS-level color scheme preference (first-time visitors only)
 * 3. Falls back to light mode
 *
 * Once toggled manually, the choice is saved and takes precedence on all
 * future visits — this does NOT continue following OS preference afterward.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("elite-construction-theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Sync the `dark` class on <html> and persist the choice whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("elite-construction-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Convenience hook for accessing { theme, toggleTheme } from any component,
 * instead of importing useContext + ThemeContext everywhere directly.
 */
export const useTheme = () => useContext(ThemeContext);