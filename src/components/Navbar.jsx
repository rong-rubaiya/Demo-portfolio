import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-pink-50 dark:bg-black text-pink-900 dark:text-gray-200 shadow-lg">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer text-violet2">Rubaiya</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  className={`
                    relative pb-2 transition-all duration-300
                    hover:text-violet2
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-full after:bg-violet2
                    after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                    ${isActive ? "text-violet2 text-lg font-semibold after:scale-x-100" : "text-base"}
                  `}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* 🔹 DaisyUI Toggle */}
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            checked={theme === "light"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />

          {/* Mobile Menu Button */}
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-pink-50 dark:bg-black text-pink-950 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg ${active === link.toLowerCase() ? "text-violet2 underline" : ""}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
