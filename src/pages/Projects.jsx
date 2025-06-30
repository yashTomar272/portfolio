// ProjectSection.jsx
import React from "react";
import image1 from '../imgs/image1.png'
import image2 from '../imgs/image2.png'
import image3 from '../imgs/image3.png'
import image4 from '../imgs/image4.png'
import image5 from '../imgs/image5.png'

const projects = [
  {
    title: "Pulse–Plus Clone",
    description:
      "Clone of the popular Pulse+ plus web application to buy medical products. Built on javascript for front end. It's a team project completed executed in 5 days.",
    image: image1, // Replace with real image link
    tech: ["fab fa-html5", "fab fa-js-square", "fab fa-css3-alt"],
    live: "#",
    code: "#",
  },
  {
    title: "TataCliq Clone",
    description:
      "A website to purchase fashion-related products. A collaborative project built by a team of 5 executed in 5 days.",
    image: image2,
    tech: ["fab fa-js-square", "fab fa-css3-alt", "fas fa-users"],
    live: "#",
    code: "#",
  },
  {
    title: "Store.rockstargames",
    description:
      "Built the rockstargames application using ReactJS. The google authentication and payment functionality implemented.",
    image:image3,
    tech: ["fab fa-js", "fab fa-react", "fas fa-lock"],
    live: "#",
    code: "#",
  },
  {
    title: "Aglecha Diamonds",
    description:
      "Built the Aglecha diamonds application using ReactJS. Integrated the shopping cart, product filtering, and responsiveness.",
    image: image4,
    tech: ["fab fa-react", "fab fa-js", "fas fa-gem"],
    live: "#",
    code: "#",
  },
  {
    title: "Aglecha Diamonds",
    description:
      "Built the Aglecha diamonds application using ReactJS. Integrated the shopping cart, product filtering, and responsiveness.",
    image: image5,
    tech: ["fab fa-react", "fab fa-js", "fas fa-gem"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <div
      className="container py-5 different"
      
    >
      <h2 className="text-center mb-5 ">
        PROJECTS
      </h2>

      {projects.map((project, index) => (
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
            <img style={{border:"5px solid var(--clr-primary)", borderRadius:"15px"}}
            
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
              {project.tech.map((icon, i) => (
                <i className={`${icon} me-3`} key={i}></i>
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
        </div>
      ))}
    </div>
  );
};

export default Projects;
