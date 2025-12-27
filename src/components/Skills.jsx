import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";

const skills = {
  Languages: [
    { name: "JavaScript", level: 100, icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "C++", level: 100, icon: <FaTools className="text-blue-500" /> },
  ],
  Frontend: [
    { name: "HTML", level: 100, icon: <FaTools className="text-orange-500" /> },
    { name: "CSS", level: 100, icon: <FaTools className="text-blue-400" /> },
    { name: "React", level: 100, icon: <FaReact className="text-cyan-400" /> },
    { name: "React Router", level: 100, icon: <FaReact className="text-cyan-200" /> },
    { name: "Next.js", level: 50, icon: <FaReact className="text-white" /> },
    { name: "Tailwind CSS", level: 100, icon: <FaTools className="text-teal-400" /> },
  ],
  Backend: [
    { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", level: 80, icon: <FaNodeJs className="text-white" /> },
    { name: "Authentication (Firebase)", level: 100, icon: <FaTools className="text-yellow-300" /> },
  ],
  Database: [
    { name: "MongoDB", level: 70, icon: <FaDatabase className="text-green-400" /> },
  ],
  Tools: [
    { name: "GitHub", level: 100, icon: <FaTools className="text-gray-400" /> },
    { name: "Firebase", level: 90, icon: <FaTools className="text-yellow-400" /> },
    { name: "Postman", level: 90, icon: <FaTools className="text-orange-500" /> },
    { name: "VS Code", level: 100, icon: <FaTools className="text-blue-500" /> },
    { name: "Figma", level: 80, icon: <FaTools className="text-pink-400" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="text-5xl font-bold mb-12 text-[#750075] dark:text-[#f89ff8] text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.keys(skills).map((category, index) => (
          <motion.div
            key={category}
            className="border-1 border-gray-600 backdrop-blur-2xl rounded-3xl p-6   "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#750075] dark:text-[#f89ff8] mb-6 flex items-center justify-center gap-2">
              {category}{" "}
              {category === "Languages" && <FaJsSquare />}
              {category === "Frontend" && <FaReact />}
              {category === "Backend" && <FaNodeJs />}
              {category === "Database" && <FaDatabase />}
              {category === "Tools" && <FaTools />}
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {skills[category].map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
                >
                  <div className="w-30 h-30 relative">
                    <CircularProgressbar
                      value={skill.level}
                      text={`${skill.level}%`}
                      styles={buildStyles({
                        textColor: "#ff6aff",
                        pathColor: "#ff6aff",
                        trailColor: "#ffffff20",
                        strokeLinecap: "round",
                        textSize: "14px",
                        
                      })}
                    />
                    {/* Neon Glow */}
                    <span className="absolute inset-0 rounded-full blur-xl bg-[#f89ff8]/20 animate-pulse"></span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 font-medium">
                    {skill.icon} <span>{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
