import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Livento",
    description: "Livento is a dynamic real estate platform where property owners can list their available rentals or sale properties, and users can browse, search, and filter properties based on location, price, and type.",
    images: ["/projects/portfolio.png", "/projects/portfolio2.png"],
    liveLink: "livento-ass-10.web.app/",
    githubLink: "https://github.com/rong-rubaiya/livento",
  },
  {
    title: "Meal-Mate",
    description: "Meal-Mate is a modern web application designed to help users discover, order, and enjoy meals with ease. This client-side application is built using React.js & Next.js, providing a fast, responsive, and user-friendly interface..",
    images: ["/projects/ecommerce.png"],
    liveLink: "meal-mate-client-side.vercel.app",
    githubLink: "https://github.com/rong-rubaiya/meal-mate-client-side",
  },
  {
    title: "skillswap-project-12345.web.app/",
    description: "Skill Swap is a platform where users can exchange skills with each other.",
    images: ["/projects/taskmanager.png"],
    liveLink: "#",
    githubLink: "https://github.com/rong-rubaiya/SkillSwap",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="px-18 py-20">
      <h2 className="text-5xl font-bold mb-12 text-[#f89ff8] text-center">Projects</h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f89ff8] mb-2">{project.title}</h3>
              <p className="text-gray-200/70 mb-4">{project.description}</p>
              <button
                className="inline-block px-4 py-2 bg-[#f89ff8]/20 text-[#f89ff8] rounded-lg hover:bg-[#f89ff8]/40 transition-colors"
              >
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 max-w-3xl w-full overflow-y-auto relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-200 text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-3xl font-bold text-[#f89ff8] mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-200/70 mb-4">{selectedProject.description}</p>

              {/* Project Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title}-${idx}`}
                    className="rounded-xl w-full h-48 object-cover"
                  />
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#f89ff8]/20 text-[#f89ff8] rounded-lg hover:bg-[#f89ff8]/40 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#f89ff8]/20 text-[#f89ff8] rounded-lg hover:bg-[#f89ff8]/40 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
