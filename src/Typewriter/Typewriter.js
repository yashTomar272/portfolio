import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
  if (subIndex === phrases[index].length + 1 && !isDeleting) {
    setTimeout(() => setIsDeleting(true), 1000);
    return;
  }

  if (subIndex === 0 && isDeleting) {
    setIsDeleting(false);
    setIndex((prev) => (prev + 1) % phrases.length);
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) =>
      isDeleting ? prev - 1 : prev + 1
    );
  }, isDeleting ? 50 : 150);

  return () => clearTimeout(timeout);
}, [subIndex, isDeleting, phrases, index]); // ✅ Correct dependencies


  // cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="Typewriter">
      <span className="Typewriter__wrapper">
        {phrases[index].substring(0, subIndex)}
      </span>
      <span className="Typewriter__cursor">
        {blink ? '|' : ' '}
      </span>
    </div>
  );
};

export default Typewriter;
