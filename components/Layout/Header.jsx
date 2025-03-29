import { useState, useEffect } from "react";
import "./Header.css";

export default function Header(props) {
  // Retrieve the current theme from localStorage or default to 'dark'

  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  // Apply the theme when the component mounts or the theme changes

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save the current theme in localStorage
  }, [theme]); // Effect runs every time `theme` changes

  // Toggle between light and dark mode

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <header>
        <span className="logo">Weather</span>
        <button className="theme-mode-toggle-btn" onClick={toggleTheme}>
          <img
            className="theme-mode-icon"
            src="/assets/icons/thememode.svg"
            alt="Theme mode icon"
            aria-label="Toggle light/dark theme mode"
          />
        </button>
      </header>
    </>
  );
}
