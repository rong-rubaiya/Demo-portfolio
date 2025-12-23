import React from "react";
import { FaLaptopCode, FaBullseye, FaBook, FaTools, FaDatabase } from "react-icons/fa";

const skills = {
  Languages: ["JavaScript", "C++"],
  Frontend: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "React Router"],
  Backend: ["Node.js", "Express.js", "Firebase Auth"],
  Database: ["MongoDB"],
  Tools: ["GitHub", "Firebase", "Postman", "VS Code", "Figma"],
};

const About = () => {
  return (
    <section id="about" className="w-11/12 mx-auto py-20 relative text-gray-800 dark:text-gray-200">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-20 text-center text-[#750075] dark:text-[#f89ff8]">
        About Me
      </h2>

      {/* Timeline Sections */}
      <div className="relative border-l-4 border-[#f89ff8] dark:border-[#750075] ml-6 pl-10 space-y-16">
        
        {/* Profile */}
        <div>
          <div className="flex items-center gap-3 mb-3 text-[#750075] dark:text-[#f89ff8]">
            <FaLaptopCode size={28} />
            <h3 className="text-2xl font-semibold">Professional Profile</h3>
          </div>
          <p className="text-lg leading-relaxed">
            I am a dedicated full-stack developer who transforms complex problems into elegant digital solutions. 
            I continuously explore new technologies to build scalable, efficient, and user-centric web applications.
          </p>
        </div>

        {/* Goals */}
        <div>
          <div className="flex items-center gap-3 mb-3 text-[#750075] dark:text-[#f89ff8]">
            <FaBullseye size={28} />
            <h3 className="text-2xl font-semibold">Career Goals</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Lead innovative software projects with tangible impact</li>
            <li>Master full-stack (MERN) and cloud technologies</li>
            <li>Deliver applications that solve real-world challenges</li>
          </ul>
          <p className="italic text-gray-500 dark:text-gray-400 mt-2">
            “Code with purpose, innovate constantly, and deliver excellence.”
          </p>
        </div>

        {/* Current Focus */}
        <div>
          <div className="flex items-center gap-3 mb-3 text-[#750075] dark:text-[#f89ff8]">
            <FaBook size={28} />
            <h3 className="text-2xl font-semibold">Current Focus</h3>
          </div>
          <p className="text-lg leading-relaxed">
            Building full-stack applications, improving backend & API skills, 
            exploring scalable development patterns, and delivering polished products.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-6 text-[#750075] dark:text-[#f89ff8] flex items-center gap-3">
          <FaTools size={28} /> My Development Arsenal
        </h3>
        <div className="flex flex-wrap gap-4">
          {Object.keys(skills).map((category) =>
            skills[category].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f89ff8]/50 to-[#750075]/50 dark:from-[#750075]/50 dark:to-[#f89ff8]/50 text-[#750075] dark:text-[#f89ff8] font-medium shadow-lg"
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
