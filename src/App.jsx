import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Project";


const App = () => {
  return (
    <div className="font-inter transition-colors duration-500">
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Projects></Projects>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
