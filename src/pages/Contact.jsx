import FadeIn from "../Animation/FadeIn";
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
      <FadeIn>
      <h2 className="different2" style={{ fontSize: "2rem" }}>
        GET IN <span className="different">TOUCH</span>
      </h2>
      <div className="d-flex gap-4" style={{ marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/yash-kumar-896453371/"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <LinkedInIcon size={48}/>
        </a>
        <a
          href="https://github.com/yashTomar272"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <GitHubIcon size={48}/>
        </a>
        <a
          href="mailto:tomarji272@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <EmailIcon size={48}/>
        </a>
        <a
          href="tel:+917983925369"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <PhoneIcon size={48}/>
        </a>
      </div></FadeIn>
    </div>
  );
};

export default Contact;
