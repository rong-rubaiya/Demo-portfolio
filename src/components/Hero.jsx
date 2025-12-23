import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";
import imgPro from "../assets/received_955120399147056.jpeg";

const Hero = () => {

  const handleDownloadCV = () => {
    Swal.fire({
      title: "Download CV?",
      text: "Do you want to download Rubaiya's CV?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#f89ff8",
      cancelButtonColor: "#555",
      confirmButtonText: "Yes, Download",
      cancelButtonText: "Cancel",
      background: "#0f0f13",
      color: "#e5e7eb",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "/Resume of Rubaiya Hamid.pdf"; // ✅ correct path
        link.download = "Rubaiya_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        Swal.fire({
          icon: "success",
          title: "Downloaded!",
          text: "Your CV has been downloaded successfully.",
          confirmButtonColor: "#f89ff8",
          background: "#0f0f13",
          color: "#e5e7eb",
        });
      }
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-28"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-20">

        {/* LEFT */}
        <div className="
          flex flex-col justify-center p-8 md:p-12
          bg-gray-100/10
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
          rounded-3xl
         
        ">
          <span className="
            px-4 py-2 rounded-full
            text-[#f89ff8]
            font-bold mb-4 text-sm tracking-wider
            animate-bounce
          ">
            Frontend Developer
          </span>

          <h1 className="text-6xl font-playfair mb-3 text-[#750075] dark:text-[#f89ff8] ">
            Rubaiya
          </h1>

          <span className="text-lg mb-6">
            UI/UX & Frontend Enthusiast
          </span>

          <p className="max-w-md mb-6  leading-relaxed">
            I craft polished, accessible interfaces with a focus on pixel-perfect
            design. Smooth animations and interactive experiences make my
            projects stand out.
          </p>
<div className="flex flex-wrap gap-4">
  <a
    href="#projects"
    className="
      relative overflow-hidden rounded-xl px-6 py-3 font-semibold text-white
       bg-[#750075] dark:bg-[#f89ff8] 
      shadow-lg shadow-pink-400/50
      before:absolute before:top-0 before:left-[-75%] before:h-full before:w-3/4 
      before:bg-white before:opacity-10 before:rotate-12
      hover:before:animate-swipe
      transition-all duration-300
    "
  >
    Work with me →
  </a>

  <button
    onClick={handleDownloadCV}
    className="
      relative rounded-xl border-2 border-[#f89ff8] px-5 py-3 font-semibold text-[#750075] dark:text-[#f89ff8]
      overflow-hidden
      shadow-md shadow-pink-300/30
      after:absolute after:top-0 after:left-[-100%] after:h-full after:w-full after:bg-[#f89ff8]/20
      hover:after:animate-swipe
      hover:bg-[#f89ff8]/10
      transition-all duration-300
    "
  >
    Download CV
  </button>
</div>



          {/* SOCIALS */}
          <div className="flex gap-6 mt-8 text-2xl">
            <a className="hover:text-[#f89ff8] transition-colors"><FaGithub /></a>
            <a className="hover:text-[#f89ff8] transition-colors"><FaLinkedin /></a>
            <a className="hover:text-[#f89ff8] transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center">
          <div className="
            relative w-full max-w-sm h-96 md:h-[520px]
            rounded-3xl
            bg-gray-100/10
            border border-white/20
            shadow-[0_10px_40px_0_rgba(255,0,170,0.2)]
            backdrop-blur-3xl
            flex items-center justify-center
            transition-transform duration-500
            hover:-translate-y-6 hover:rotate-2
          ">
            <img
              src={imgPro}
              alt="Rubaiya"
              className="rounded-2xl shadow-xl w-11/12 h-auto object-cover"
            />

            {/* NEON GLOW */}
            <span className="absolute -inset-4 border-2 border-[#f89ff8]/30 rounded-3xl animate-pulse"></span>
            <span className="absolute -inset-6 rounded-3xl bg-[#f89ff8]/10 blur-3xl opacity-50 animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
