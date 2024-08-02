"use client";
import Portfolio from "./_component/portfolio/portfolio";
import Skills from "./_component/skills/skills";
import Codeverse from "./_component/home/codeverse";
import Experience from "./_component/experience/experience";
import Video from "./_component/video/video";
import Header from "./_component/nav/Header";
import { useState } from "react";
import Footer from "./_component/nav/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  return (
    <div>
      <Header activeSection={activeSection} />
      <div className="md:px-10 lg:px-20 px-5">
        <div className="flex justify-center">
          <Codeverse id="home" setActiveSection={setActiveSection} />
        </div>
        <Experience />
        <Skills id="skills" setActiveSection={setActiveSection} />
        <Video />
        <Portfolio id="portfolio" setActiveSection={setActiveSection} />
      </div>
      <Footer id="contact" setActiveSection={setActiveSection} />
    </div>
  );
}
