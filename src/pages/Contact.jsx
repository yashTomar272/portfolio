// ContactSection.jsx
import React from "react";
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  PhoneIcon,
} from "../Icons";

const iconStyle = {
  color: "var(--clr-primary)",
  margin: "0 15px",
  fontSize: "28px",
  cursor: "pointer",
};

const Contact = () => {
  return (
    <div style={{padding: "50px 0", textAlign: "center" }}>
      <h2 className="different2" style={{ fontSize: "2rem" }}>
        GET IN <span className="different">Touch</span>
      </h2>
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/khushboo-k-766692148/"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/khushboo-choudhary"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:kkhushboo321@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <EmailIcon />
        </a>
        <a
          href="tel:+919944468826"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
