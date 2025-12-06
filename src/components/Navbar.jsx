import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  



  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-500 
                    bg-black text-gray-200  shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer text-violet2">Rubaiya</div>
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-violet2 transition-colors duration-300">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          
          <button className="md:hidden text-xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className={`md:hidden flex flex-col items-center gap-6 py-6 transition-colors duration-300
                        bg-black text-gray-200`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-lg" onClick={() => setMenuOpen(false)}>
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
