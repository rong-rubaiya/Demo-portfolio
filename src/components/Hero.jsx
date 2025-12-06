import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import imgPro from '../assets/received_955120399147056.jpeg'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-28 bg-[#0f0f13] text-gray-200"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-20 rounded-3xl overflow-hidden">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-gray-100/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl animate-fadeInLeft">
          
          <span className="px-4 py-2 rounded-full text-[#f89ff8] font-bold mb-4 text-sm tracking-wider animate-bounce">
            Frontend Developer
          </span>

          <h1 className="text-6xl font-playfair mb-3 text-[#f89ff8] animate-slideIn">
            Rubaiya
          </h1>

          <span className="text-lg text-gray-200/70 mb-6 animate-slideIn delay-200">
            UI/UX & Frontend Enthusiast
          </span>

          <p className="max-w-md mb-6 text-gray-200/80 leading-relaxed animate-slideIn delay-400">
            I craft polished, accessible interfaces with a focus on pixel-perfect
            design. Smooth animations and interactive experiences make my
            projects stand out.
          </p>

          <div className="flex flex-wrap gap-4 animate-slideIn delay-600">
            <a
              href="#projects"
              className="bg-[#f89ff8] text-[#0f0f13] font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-110 hover:shadow-[#f89ff8]/50 transition-all duration-300"
            >
              Work with me →
            </a>
            <a
              href="#"
              className="border border-white/30 px-5 py-3 rounded-lg hover:bg-gray-100/10 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-2xl animate-slideIn delay-800">
            <a href="#" className="hover:text-[#f89ff8] transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-[#f89ff8] transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#f89ff8] transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 md:p-8 animate-fadeInRight">
          <div className="relative w-full max-w-sm h-96 md:h-[520px] rounded-3xl 
                          bg-gray-100/105 border border-white/20 shadow-[0_10px_40px_0_rgba(255,0,170,0.2)]
                          backdrop-blur-3xl flex items-center justify-center
                          transform transition-transform duration-500 hover:-translate-y-6 hover:rotate-2">
            
            <img
              src={imgPro}
              alt="Rubaiya"
              className="rounded-2xl shadow-xl w-11/12 h-auto object-cover animate-fadeIn"
            />

            {/* Neon Glows */}
            <span className="absolute -inset-4 border-2 border-[#f89ff8]/30 rounded-3xl animate-pulse"></span>
            <span className="absolute -inset-6 rounded-3xl bg-[#f89ff8]/10 blur-3xl opacity-50 animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
