import { useState, useEffect } from "react";
import "./Header.css"; // Import styles specific to the Header component

export default function Header() {
  // Get the stored theme from localStorage, default to "dark" if not set
  const storedTheme = localStorage.getItem("theme") || "dark";

  // State to track the current theme
  const [theme, setTheme] = useState(storedTheme);

  // Side effect to update HTML theme attribute and save to localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Applies theme to document
    localStorage.setItem("theme", theme); // Persist theme in localStorage
  }, [theme]);

  // Function to toggle between dark and light theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <header>
        {/* Logo or brand title */}
        <span className="logo">Weather</span>

        {/* Button to toggle theme */}
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
