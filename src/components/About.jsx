import React from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: ["JavaScript", "C++"],
  Frontend: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "React Router"],
  Backend: ["Node.js", "Express.js", "Authentication (Firebase)"],
  Database: ["MongoDB"],
  Tools: ["GitHub", "Firebase", "Postman", "VS Code", "Figma"],
};

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-black text-gray-200 relative">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold mb-16 text-[#f89ff8] text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Profile & Goals Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#f89ff8] mb-4">🌟 Profile</h3>
          <p className="text-gray-200/80 leading-relaxed text-lg">
            I am a passionate and self-motivated developer, always eager to learn, explore new technologies, and solve challenging problems. I strive to improve myself every day and take on tasks that push my limits.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#f89ff8] mb-4">🎯 Goals</h3>
          <ul className="list-disc list-inside text-gray-200/70 space-y-2 text-lg">
            <li>Own a successful software company</li>
            <li>Become a skilled full-stack (MERN) developer</li>
            <li>Build meaningful and effective solutions in technology</li>
          </ul>
          <p className="mt-4 italic text-gray-200/50">“Dream big, code smart, and leave a mark in the tech world!” 💻✨</p>
        </motion.div>
      </div>

      {/* Current Learning & Activities */}
      <motion.div
        className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-lg mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-[#f89ff8] mb-4">📚 Current Activities</h3>
        <ul className="list-disc list-inside text-gray-200/70 space-y-2 text-lg">
          <li>🛠️ Working on real-world projects</li>
          <li>📚 Learning & practicing Backend + API development</li>
          <li>💡 Learning daily, exploring new technologies, and building real projects 🚀</li>
        </ul>
      </motion.div>

      {/* Skills Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.keys(skills).map((category) => (
          <motion.div
            key={category}
            className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h4 className="text-xl font-semibold text-[#f89ff8] mb-4 text-center">{category}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200/80 text-center">
              {skills[category].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Neon Floating Circles for decoration */}
      <motion.div
        className="absolute w-24 h-24 bg-[#f89ff8]/20 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-[#f89ff8]/10 rounded-full bottom-20 right-16 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

export default About;
