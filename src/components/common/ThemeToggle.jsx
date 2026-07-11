import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";

/**
 * Icon button that toggles between light and dark mode. Placed in the
 * Navbar (Layout), so it's present and functional on every page.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-10 h-10 flex items-center justify-center rounded-full text-light hover:bg-light/10 transition-colors duration-200"
    >
      {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;