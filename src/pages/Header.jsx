import React, { useEffect, useState,useRef } from 'react';
import { LightIcon, DarkIcon } from '../Icons';
import FadeIn from '../Animation/FadeIn';
const Header = ({ light, setLight }) => {
 const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div>
      <header className="navbar position-fixed top-0 start-0 w-100" style={{ height: "70px", zIndex: 999 }}>
        <div className="container mx-auto d-flex justify-content-between align-items-center" style={{ maxWidth: "1100px", width: "100%", padding: "0 20px" }}>
          <div className="navbar__brand position-relative">
            <div className="link m-2">Yash kumar</div>
          </div>

          <nav className="navbar__nav d-flex align-items-center gap-4">
            {/* Hamburger Icon for Mobile */}
            {isMobile ? (
              <div ref={toggleRef} onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: "28px", cursor: "pointer", color: "var(--clr-primary)" }}>
                ☰
              </div>
            ) : (
              <ul className="navbar__list d-flex gap-3 m-0 p-0" style={{ listStyle: "none", color: "var(--clr-fg)" }}>
                <li><a className='link' href="#home">Home</a></li>
                <li><a className='link' href="#about">About</a></li>
                <li><a className='link' href="#skills">Skills</a></li>
                <li><a className='link' href="#projects">Projects</a></li>
                <li><a className='link' href="#contact">Contact</a></li>
                <li>
                  <a className='link' href="https://drive.google.com/file/d/1O8VfGf2mmkqBx-JPH8DImWQO2WQFNq2I/view?usp=drive_link" target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </li>
              </ul>
            )}

            {/* Theme toggle remains visible */}
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

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <FadeIn> <ul ref={menuRef} onClick={() => setMenuOpen(!menuOpen)} className="navbar__list position-absolute end-0 flex-column text-center m-0 p-3"  style={{
      listStyle: "none",
      position: "absolute",
      top: "30px",
      right: 0,
      background: "var(--clr-bg)",
      color: "var(--clr-fg)",
      width: "220px",
      zIndex: 998,
      borderRadius: "0 0 0 8px",
      boxShadow: "-4px 0 12px rgba(0, 0, 0, 0.4)", // shadow on the left side
      transform: menuOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease-in-out",
    }}>
            <li><a className='link d-block my-2' href="#home">Home</a></li>
            <li><a className='link d-block my-2' href="#about">About</a></li>
            <li><a className='link d-block my-2' href="#skills">Skills</a></li>
            <li><a className='link d-block my-2' href="#projects">Projects</a></li>
            <li><a className='link d-block my-2' href="#contact">Contact</a></li>
            <li>
              <a className='link d-block my-2' href="https://drive.google.com/..." target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul></FadeIn>
        )}
      </header>
    </div>
  );
};

export default Header;
