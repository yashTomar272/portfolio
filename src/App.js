// App.js
import React, { useState } from 'react';
import "./cssFile/Navbar.css";
import "./cssFile/App.css"; 
import SkillsSection from './pages/SkillsSection'; // adjust path as needed
import Projects from './Projects';
import ColBody from './ColBody'; // Make sure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './pages/Contact';
import Header from './pages/Header';
import { About } from './pages/About';
import Home from './pages/Home';
import "./cssFile/Timeline.css"
import Timeline2 from './pages/Timeline2';
function App() {
const [light,setLight]= useState(true)
  return (
    <div style={{}} className={`app top-0 position-relative w-100 ${light? "light":'dark'}`}>

      {/* -----------------HEADER */}
      {/* <div>
       <header className="navbar position-fixed top-0 start-0 w-100" style={{ height: "70px", zIndex: 999 }}>
  <div className="container mx-auto d-flex justify-content-between align-items-center" style={{ maxWidth: "1100px", width: "100%", padding: "0 20px" }}>
    <div className="navbar__brand position-relative">
      <div className="link m-2">Yas Tomar</div>
    </div>
    <nav className="navbar__nav d-flex align-items-center gap-4">
      <ul className="navbar__list d-flex gap-3 m-0 p-0" style={{ listStyle: "none", color: "var(--clr-fg)" }}>
        <li><a className='link' href="#home">Home</a></li>
        <li><a className='link' href="#about">About</a></li>
        <li><a className='link' href="#skills">Skills</a></li>
        <li><a className='link' href="#projects">Projects</a></li>
        <li><a className='link' href="#contact">Contact</a></li>
        <li>
          <a className='link' href="https://drive.google.com/..." target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
      <div
        style={{
          cursor: "pointer",
          color: "var(--clr-primary)",
          fontSize: "20px",
          height: "20px",
          width: "20px"
        }}
        onClick={() => setLight(!light)}
      >
        {light ? <LightIcon /> : <DarkIcon />}
      </div>
    </nav>
  </div>
</header>
</div>     */}
<Header light={light} setLight={setLight}/>
      {/* -------------------HOME */}
      
        {/* <div  style={{paddingTop:"200px"}}>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 style={{fontSize:"64px"}}><span style={{color:"var(--clr-fg-alt)"}}>Hi, I am</span> <span style={{color:"var(--clr-primary)"}}>Yas Tomar</span></h1>
       
     <div style={{height:"80px"}} className="about mt-3">
      
     <Typewriter
  phrases={[
    'Web Developer',
    'React Enthusiast',
    'MERN Stack Dev',
    'Open Source Contributor',
  ]}
/>

    </div>
            <p style={{maxWidth:"600px"}}> 
              An aspiring full-stack web developer with specialization in MERN Stack.
              Ambitious and motivated to learn all things related to coding and technology.
              Looking forward to working in a challenging work environment to kick start a
              career while fulfilling organizational goals.
            </p>
             <div  className="d-flex align-items-center justify-content-evenly mt-3 mb-3" style={{width:"240px",color:"var(--clr-fg)"}}>
      <a style={{color:"var(--clr-fg)"}} href="https://github.com/khushboo-choudhary" target="_blank" rel="noreferrer" className="link link--icon" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a style={{color:"var(--clr-fg)"}} href="mailto:kkhushboo321@gmail.com" target="_blank" rel="noreferrer" className="link link--icon" aria-label="Mail">
        <MailIcon />
      </a>
      <a style={{color:"var(--clr-fg)"}} href="tel:+919944468826" target="_blank" rel="noreferrer" className="link link--icon" aria-label="Phone">
        <PhoneIcon />
      </a>
      <a style={{color:"var(--clr-fg)"}} href="https://www.linkedin.com/in/khushboo-k-766692148/" target="_blank" rel="noreferrer" className="link link--icon" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a style={{color:"var(--clr-fg)"}} href="https://drive.google.com/drive/folders/1VBnc79Z0KYxSgXFzMM0-G1QqsmRkR98l" target="_blank" rel="noreferrer" className="link link--icon" aria-label="Resume">
        <ResumeIcon />
      </a>
      <a style={{color:"var(--clr-fg)"}} href="https://goo.gl/maps/2f55i3ggRUWBhUEX8" target="_blank" rel="noreferrer" className="link link--icon" aria-label="Location">
        <LocationIcon />
      </a>
    </div>
          </div>
         

        </div>
      */}
<Home/>

      {/* -------------------ABOUT */}
      <ColBody>
      {/* <div> 
         <h2 style={{textAlign:"center", }}><span className='different2'>ABOUT</span> <span className='different'>ME</span></h2>
             <div className='d-flex flex-column flex-md-row align-items-center gap-4' style={{maxWidth:"1095px"}}>
              <div className=""  >
                <img style={{borderRadius:"20px", width:"280px", height:"280px"}}  src="https://avatars.githubusercontent.com/u/30701525?v=4" alt="Images" />
              </div>
              <div className="different2" >
                <h4 style={{fontSize:"17px"}}>
                  Hi Everyone, I am <span className="different">Khushboo </span>
                  from <span className="different"> Bangalore, Karnataka</span>.
                  I have completed my graduation in Bachelor of Computer Science Engineering
                  from Triuttani, GRT Institute Of Engineering and Technology.
                </h4>
                <h4 >Some of my interests apart from Coding :</h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">🏸</span> Sports Enthusiast
                </h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">🏸</span> Badminton Player
                </h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">📺</span> Watching Web-Series
                </h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">✈️</span> Travelling
                </h4>
            </div></div></div> */}
<About/>
      </ColBody>

{/* ============================TIMELINE============ */}
<ColBody>
<Timeline2/>
</ColBody>
{/* ==================SKILLS SECTION */}

<ColBody>
<SkillsSection/>
</ColBody>

{/* =====================Projects */}
<ColBody>
<Projects/>
</ColBody>

{/* ==================CONTACT SECTION= */}
<ColBody>
<Contact />
</ColBody>

{/*  ==========================FOOTER SECTION*/}
  <ColBody>
  <h3 style={{fontSize:"14px"}} class="footer m-3">Made with ❤ By Yas Tomar</h3>
  </ColBody>
    </div>
  );
}

export default App;
