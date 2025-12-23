import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const skills = {
  Languages: [
    { name: "JavaScript", level: 100 },
    { name: "C++", level: 100 },
  ],
  Frontend: [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "React", level: 100 },
    { name: "React Router", level: 100 },
    { name: "Next.js", level: 50 },
    { name: "Tailwind CSS", level: 100 },
  ],
  Backend: [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 80 },
    { name: "Authentication (Firebase)", level: 100 },
  ],
  Database: [
    { name: "MongoDB", level: 70 },
  ],
  Tools: [
    { name: "GitHub", level: 100 },
    { name: "Firebase", level: 90 },
    { name: "Postman", level: 90 },
    { name: "VS Code", level: 100 },
    { name: "Figma", level: 80 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 ">
      <h2 className="text-5xl font-bold mb-12 text-[#f89ff8]  text-center">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.keys(skills).map((category, index) => (
          <motion.div
            key={category}
            className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#f89ff8] mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {skills[category].map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <div className="w-20 h-20">
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
                  </div>
                  <p className="mt-2 text-center text-gray-200 font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
