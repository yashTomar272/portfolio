// ProjectSection.jsx
import FadeIn from '../Animation/FadeIn'
import image1 from '../imgs/image1.png'
import image2 from '../imgs/image2.png'
import image3 from '../imgs/image3.png'
import image4 from '../imgs/image4.png'
import image5 from '../imgs/image5.png'
import {
  JavaScriptIcon1,
  HTMLIcon1,
  CSSIcon1,
  ReactIcon1,
  ReduxIcon1,
  NodeJSIcon1,
  ExpressIcon1,
  BootstrapIcon1,
  MongoDBIcon1,
  VercelIcon1,
  GitHubIcon1,
} from '../Icons';

const projects = [
  {
    title: "Pulse–Plus Clone",
    description:
      "Clone of the popular Pulse+ plus web application to buy medical products. Built on javascript for front end. It's a team project completed executed in 5 days.",
    image: image1, // Replace with real image link
    tech: [HTMLIcon1, JavaScriptIcon1, CSSIcon1],
    live: "#",
    code: "#",
  },
  {
    title: "TataCliq Clone",
    description:
      "A website to purchase fashion-related products. A collaborative project built by a team of 5 executed in 5 days.",
    image: image2,
    tech: [JavaScriptIcon1, CSSIcon1, VercelIcon1],
    live: "#",
    code: "#",
  },
  {
    title: "Store.rockstargames",
    description:
      "Built the rockstargames application using ReactJS. The google authentication and payment functionality implemented.",
    image:image3,
    tech: [ReactIcon1,JavaScriptIcon1, BootstrapIcon1],
    live: "#",
    code: "#",
  },
  {
    title: "Aglecha Diamonds",
    description:
      "Built the Aglecha diamonds application using ReactJS. Integrated the shopping cart, product filtering, and responsiveness.",
    image: image4,
    tech: [ExpressIcon1, NodeJSIcon1, ReduxIcon1,MongoDBIcon1],
    live: "#",
    code: "#",
  },
  {
    title: "Aglecha Diamonds",
    description:
      "Built the Aglecha diamonds application using ReactJS. Integrated the shopping cart, product filtering, and responsiveness.",
    image: image5,
    tech: [GitHubIcon1, ReactIcon1, JavaScriptIcon1],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <div
      className="container py-5 different"
      
    >
      <FadeIn>
      <h2 className="text-center mb-5 ">
        PROJECTS
      </h2>
</FadeIn>
      {projects.map((project, index) => (
        <FadeIn>
        <div
          className="row align-items-center mb-5"
          key={index}
          style={{

            padding: "20px",
            margin: "20px 0",
          }}
        >
          {/* Image */}
          <div className="col-md-5 text-center mb-3 mb-md-0" >
            <img style={{minHeight:"185px",border:"5px solid var(--clr-primary)", borderRadius:"15px"}}
            
              src={project.image}

              alt={project.title}
              className="img-fluid"
            />
          </div>

          {/* Details */}
          <div className="col-md-7 text-md-start">
            <h4 style={{ fontWeight: "bold" }}>
              {project.title}
            </h4>
            <p className="different" style={{color:"var(--clr-fg)", fontSize: "14px" }}>
              {project.description}
            </p>
            <div className="mb-3" style={{ color: "var(--clr-primary)", fontSize: "18px" }}>
              {project.tech.map((Icon, i) => (
    <span key={i} className="me-3">
      <Icon size={35} color="var(--clr-primary)" />
    </span>
  ))}
            </div>
            <a
              href={project.live}
              className=" p-2 m-1"
              style={{
                textDecoration:"none",
                
                fontSize:"14px",
                color:"var(--clr-primary)",
                border: "1px solid var(--clr-primary)",
                backgroundColor: "transparent",
              }}
            >
              See this Live
            </a>
            <a
              href={project.code}
              className="p-2 m-1"
              style={{
                textDecoration:"none",fontSize:"14px",
                color:"var(--clr-primary)",
                border: "1px solid var(--clr-primary)",
                backgroundColor: "transparent",
              }}
            >
              View Code
            </a>
          </div>
        </div></FadeIn>
      ))}
    </div>
  );
};

export default Projects;
