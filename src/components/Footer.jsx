import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" px-6 py-10 backdrop-blur-md border-t border-violet2/20 transition-colors duration-500">
      <div className="block sm:flex justify-between">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-violet2 mb-3">Rubaiya</h2>
          <p className=" text-sm">
            Fullstack Developer passionate about creating beautiful and functional web experiences.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-bold text-violet2 mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-violet2 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-violet2 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-violet2 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet2 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h2 className="text-xl font-bold text-violet2 mb-3">Connect</h2>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/rong-rubaiya" className="hover:text-violet2 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rubaiya-hamid/" className="hover:text-violet2 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/rubaiya.hamid.3" className="hover:text-violet2 transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm">
        © 2025 Rubaiya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
