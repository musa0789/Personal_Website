import React from "react";
import { ScrollProgress } from "../Components/Shared/SharedUI";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Home/Hero";
// import Experience from "../Components/Experience/Experience";
import ExperienceAndPublications from "../Components/Experience/ExperienceAndPublications";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Shared/Footer";

const Home = () => {
  return (
    <div className="bg-[#060A12] text-[#EAF1FB] font-sans min-h-screen relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Components */}
      <Navbar />
      <Hero />
      <ExperienceAndPublications />
      {/* <Experience /> */}
      <Projects />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;