import Typewriter from '../Typewriter/Typewriter';
import {GitHubIcon,MailIcon,PhoneIcon, LinkedInIcon,ResumeIcon,LocationIcon} from '../Icons';
const Home = () => {
  return (
       <div  style={{paddingTop:"200px"}}>
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
                <p className='m-2' style={{maxWidth:"600px"}}> 
                  
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
         
  )
}

export default Home