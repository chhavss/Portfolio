import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app-root">
      {/* Top Retro Marquee Ticker */}
      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-content">
          <span>★ CHHAVI • B.TECH CSE STUDENT ★ SOFTWARE DEVELOPER ★ AI/ML ENTENTHUSIAST ★ JAVA &amp; REACT DEVELOPER ★ OPEN SOURCE CONTRIBUTOR ★ </span>
          <span>★ CHHAVI • B.TECH CSE STUDENT ★ SOFTWARE DEVELOPER ★ AI/ML ENTENTHUSIAST ★ JAVA &amp; REACT DEVELOPER ★ OPEN SOURCE CONTRIBUTOR ★ </span>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        {/* SKILLS IS MANDATORY BEFORE PROJECTS */}
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
