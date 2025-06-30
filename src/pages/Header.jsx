import React from 'react'
import { LightIcon,DarkIcon } from '../Icons';

const Header = ({light,setLight}) => {
  return (
    <div>
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
</div> 
  )
}

export default Header