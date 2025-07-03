import React from "react";
import Navbar from "./section/navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Testemonials from "./section/Testemonials";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testemonials /> 
      <Contact />      
      <Footer />
    </div>
  );
}

export default App;
