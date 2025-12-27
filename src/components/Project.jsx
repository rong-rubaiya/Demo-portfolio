import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Livento from "../assets/livento.png"
import MealMate from "../assets/mealmate.png"

const projects = [
  {
    title: "Livento",
    description:
      "Livento is a dynamic real estate platform where property owners can list rentals or sale properties and users can browse, search, and filter properties easily.",
    images: [Livento],
    liveLink: "https://livento-ass-10.web.app/",
    githubLink: "https://github.com/rong-rubaiya/livento",
  },
  {
    title: "Meal-Mate",
    description:
      "Meal-Mate is a modern web application to discover and order meals. Built using React.js and Next.js with a focus on performance and UI.",
    images: [MealMate],
    liveLink: "https://meal-mate-client-side.vercel.app",
    githubLink: "https://github.com/rong-rubaiya/meal-mate-client-side",
  },
  {
     title: "TicketKati",
    description:
      " Ticket Kati is a modern online ticket booking platform designed to make event discovery and ticket purchasing simple and fast Users can browse upcoming events, view details, and select tickets through an intuitive interface.The platform offers a smooth booking experience with secure authentication and reliable payment handling.Built with a focus on performance and usability, it works seamlessly across devices.Ticket Kati ensures a hassle-free way for users to book tickets anytime, anywhere.",
    images: ["/src/assets/ticketkati.png"],
    liveLink: "https://ticketkati-40cff.web.app/",
    githubLink: "https://github.com/rong-rubaiya/TicketKati",
  },
  {
    title: "Skill Swap",
    description:
      "Skill Swap is a platform where users can exchange skills with each other and collaborate through mutual learning.",
    images: ["/src/assets/skill-swap.png"],
    liveLink: "https://skillswap-project-12345.web.app/",
    githubLink: "https://github.com/rong-rubaiya/SkillSwap",
  },
  {
    title: "Stopwatch App",
    description:
      "Stopwatch App is a lightweight JavaScript-powered timer that lets users start, stop, and reset time easily. It provides precise time tracking with a clean and responsive interface.",
    images: ["/src/assets/stopwatch.png"],
    liveLink: "https://rong-rubaiya.github.io/Js-mini-proj-Stop-watch/",
    githubLink: "https://github.com/rong-rubaiya/Js-mini-proj-Stop-watch",
  }
  ,{
    title: "Digital Watch",
    description:
      "Digital Watch is a real‑time clock built with JavaScript that displays the current time dynamically with hours, minutes, and seconds in a sleek interface.",
    images: ["/src/assets/watch.png"],
    liveLink: "https://rong-rubaiya.github.io/Js-mini-proj-Digital-Watch/",
    githubLink: "https://github.com/rong-rubaiya/Js-mini-proj-Digital-Watch",
  },{
    title: "AppifyZone",
    description:
      "AppifyZone is an interactive web platform designed to make app discovery intuitive, engaging, and visually dynamic. It brings together beautifully crafted app profiles, real-time rating displays, graphical insights, and simulated install/uninstall functionality — creating a complete app management experience right inside your browser.",
    images: ["/src/assets/appifyzone.png"],
    liveLink: "https://appifyzone.netlify.app/",
    githubLink: "https://github.com/rong-rubaiya/AppifyZone",
  },{
    title: "Emergency Service",
    description:
      "Emergency Service Directory is a user-friendly web application that provides quick access to essential emergency contact numbers in Bangladesh. It lists key government and support services — such as police, fire, ambulance, helplines and utilities — in one place for fast reference. Users can easily view and copy numbers to call in urgent situations, making it a practical tool for safety and immediate assistance. The interface is intuitive and responsive, ensuring important contacts are always easy to find. It’s built to help people access critical services instantly when time matters most.",
    images: ["/src/assets/emergency.png"],
    liveLink: "https://rong-rubaiya.github.io/5th-Assignment-PHero/",
    githubLink: "https://github.com/rong-rubaiya/5th-Assignment-PHero",
  }
  
];

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section id="projects" className="w-11/12 mx-auto py-20">
      <h2 className="text-5xl font-bold mb-14 text-center text-[#750075] dark:text-[#f89ff8]">
        Projects
      </h2>

      {/* PROJECT GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              className="
                cursor-pointer rounded-3xl overflow-hidden
                bg-white/80 dark:bg-gray-100/10
                backdrop-blur-2xl
                border border-black/10 dark:border-white/20
                shadow-lg
              "
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#750075] dark:text-[#f89ff8] mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-200/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <button
                  className="
                    px-4 py-2 rounded-xl font-semibold
                    text-[#750075] dark:text-[#f89ff8]
                    border border-[#f89ff8]/40
                    hover:bg-[#f89ff8]/20 transition
                  "
                >
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* PAGINATION */}
      <div className="flex justify-center gap-4 mt-14">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-12 h-12 rounded-full font-bold transition
              ${
                page === i + 1
                  ? "bg-[#f89ff8] text-black"
                  : "border border-[#f89ff8] text-[#f89ff8] hover:bg-[#f89ff8]/20"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed   inset-0 bg-black/70 z-50 flex items-center justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           <motion.div
  className="
    relative w-11/12
    rounded-3xl p-4 sm:p-6
    bg-white/90 dark:bg-gray-100/10
    backdrop-blur-3xl
    border border-black/10 dark:border-white/20
    shadow-xl
    max-h-[90vh] overflow-y-auto
  "
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.9 }}
>
  {/* CLOSE */}
  <button
    onClick={() => setSelectedProject(null)}
    className="
      absolute top-3 right-3 sm:top-4 sm:right-4 text-3xl
      text-gray-700 dark:text-gray-200
      hover:text-[#f89ff8]
    "
  >
    &times;
  </button>

  <h3 className="text-2xl sm:text-3xl font-bold text-[#750075] dark:text-[#f89ff8] mb-4 sm:mb-6">
    {selectedProject.title}
  </h3>

  {/* CONTENT */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
    
    {/* IMAGE */}
    <img
      src={selectedProject.images[0]}
      alt={selectedProject.title}
      className="
        rounded-2xl w-full
        h-56 sm:h-64 md:h-72
        object-cover shadow-md
      "
    />

    {/* DESCRIPTION */}
    <div className="flex flex-col">
      <p className="text-gray-700 dark:text-gray-200/80 leading-relaxed mb-6 text-sm sm:text-base">
        {selectedProject.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-auto">
        {selectedProject.liveLink && (
          <a
            href={selectedProject.liveLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3
              rounded-xl text-sm sm:text-base
              bg-[#f89ff8]/20 text-[#750075] dark:text-[#f89ff8]
              hover:bg-[#f89ff8]/40 transition
            "
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}

        {selectedProject.githubLink && (
          <a
            href={selectedProject.githubLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3
              rounded-xl text-sm sm:text-base
              bg-[#f89ff8]/20 text-[#750075] dark:text-[#f89ff8]
              hover:bg-[#f89ff8]/40 transition
            "
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  </div>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
