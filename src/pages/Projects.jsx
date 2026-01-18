// ProjectSection.jsx
import FadeIn from '../Animation/FadeIn'
import s1 from '../imgs/s1.png'
import s2 from '../imgs/s2.png'
import s3 from '../imgs/s3.png'
import s4 from '../imgs/s4.png'
import s5 from '../imgs/s5.png'
import {
  JavaScriptIcon1,
  HTMLIcon1,
  CSSIcon1,
  ReactIcon1,
  
  NodeJSIcon1,
  ExpressIcon1,
  
  MongoDBIcon1,
  AI,
  VercelIcon1,
  Stripe,
  
} from '../Icons';

const projects = [
  {
    title: "Pizza Delivery Website",
    description:
     "Implemented user and admin authentication with email verification and password reset, built dashboards for custom pizza orders and inventory management, and integrated Razorpay with automated stock update email alerts.",
    image: s5, // Replace with real image link
    tech: [HTMLIcon1, JavaScriptIcon1, CSSIcon1,ReactIcon1,NodeJSIcon1,ExpressIcon1,MongoDBIcon1,VercelIcon1,Stripe],
    live: "https://pizzadelivery-ashy.vercel.app/",
    code: "https://github.com/yashTomar272/OIBSIP/tree/ccd73ee0b56070570eed1e4ae1200d6bcd90327a/pizzadelivery",
  },
  {
    title: "Full-Stack Ecommerce",
    description:
      "Developed a full-stack E-commerce platform, using React and MongoDB. Implemented features like authentication, cart, and admin dashboard.",
    image: s1, // Replace with real image link
    tech: [HTMLIcon1, JavaScriptIcon1, CSSIcon1,ReactIcon1,NodeJSIcon1,ExpressIcon1,MongoDBIcon1,VercelIcon1,Stripe],
    live: "https://full-stack-ecommerce-xyd9.vercel.app/",
    code: "https://github.com/yashTomar272/full-stack-ecommerce",
  },
  {
    title: "AI Chatbot",
    description:
     "Developed an AI ChatBot using React and OpenAI's GPT API that allows users to chat in real time, generate code, and save conversation history. authentication and deployed the app on Vercel. Built with a focus on clean UI and intelligent user experience.",
    image: s4,
       tech: [HTMLIcon1, JavaScriptIcon1, CSSIcon1,ReactIcon1,NodeJSIcon1,ExpressIcon1,MongoDBIcon1,VercelIcon1,AI],
    live: "https://a-ichatbot-rocu.vercel.app/",
    code: "https://github.com/yashTomar272/AIchatbot",
  },
  {
    title: "Insta Clone",
    description:
      "Built a frontend-only Instagram clone using React.js to replicate the UI of Instagram. Designed all major components like feed, profile, and post layout with a focus on responsive design and pixel-perfect styling. This project demonstrates my frontend development and UI/UX skills.",
    image:s3,
     tech: [HTMLIcon1, JavaScriptIcon1, CSSIcon1,ReactIcon1,NodeJSIcon1,ExpressIcon1,MongoDBIcon1],
    live: "https://yashtomar272.github.io/instaclone/",
    code: "https://github.com/yashTomar272/instaclone",
  },
  {
    title: "Full-stack Elearning",
    description:
     "Developed a full-stack E-Learning platform using React and MongoDB with role-based dashboards for students,teacher and admins. Implemented features like course upload, video content, authentication, and user management. The platform is responsive, secure, and designed to deliver an efficient online learning experience.",
    image: s2,
        tech: [HTMLIcon1, JavaScriptIcon1, CSSIcon1,ReactIcon1,NodeJSIcon1,ExpressIcon1,MongoDBIcon1,VercelIcon1,Stripe],
    live: "https://e-learn-fe6e.vercel.app/",
    code: "https://github.com/yashTomar272/ELearn",
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
            <img style={{minHeight:"200px",border:"5px solid var(--clr-primary)", borderRadius:"15px"}}
            
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
    <span key={i} className="me-3 ">
      <Icon size={35} color="var(--clr-primary)"/>
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
