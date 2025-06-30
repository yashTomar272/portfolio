// App.js
import React, { useState } from 'react';
import "./cssFile/Navbar.css";
import "./cssFile/App.css"; 
import "./Animation/FadeIn.css"; 
import FadeIn from './Animation/FadeIn';
import SkillsSection from './pages/SkillsSection';
import Projects from './pages/Projects';
import ColBody from './ColBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './pages/Contact';
import Header from './pages/Header';
import { About } from './pages/About';
import Home from './pages/Home';
import "./cssFile/Timeline.css";
import Timeline2 from './pages/Timeline2';

function App() {
  const [light, setLight] = useState(true);

  return (
    <div className={`app top-0 position-relative w-100 ${light ? "light" : "dark"}`}>
      
      {/* -----------------HEADER */}
      <Header light={light} setLight={setLight} />

      {/* -------------------HOME */}
      <div id="home" className="scroll-section">
        <Home />
      </div>

      {/* -------------------ABOUT */}
      <div id="about" className="scroll-section" style={{ scrollMarginTop: '-40px' }}>
        <ColBody>
          <About />
        </ColBody>
      </div>

      {/* -------------------TIMELINE */}
      <div id="timeline" className="scroll-section" style={{ scrollMarginTop: '-40px' }}>
        <ColBody>
          <Timeline2 />
        </ColBody>
      </div>

      {/* -------------------SKILLS */}
      
      <div id="skills" className="scroll-section" style={{ scrollMarginTop: '-40px' }}>
        <ColBody>
          <FadeIn>
          <SkillsSection /></FadeIn>
        </ColBody>
      </div>

      {/* -------------------PROJECTS */}
      <div id="projects" className="scroll-section" style={{ scrollMarginTop: '-40px' }}>
        <ColBody>
          <Projects />
        </ColBody>
      </div>

      {/* -------------------CONTACT */}
      <div id="contact" className="scroll-section" style={{ scrollMarginTop: '-40px' }}>
        <ColBody>
          <Contact />
        </ColBody>
      </div>

      {/* -------------------FOOTER */}
      <ColBody>
        <h3 style={{ fontSize: "14px" }} className="footer m-3">Made with ❤ By Yas Tomar</h3>
      </ColBody>
    </div>
  );
}

export default App;
