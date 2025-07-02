import User from '../imgs/User.jpg'
export const About = () => {
  return (      <div> 
         <h2 style={{textAlign:"center", }}><span className='different2'>ABOUT</span> <span className='different'>ME</span></h2>
             <div className='d-flex flex-column flex-md-row align-items-center gap-4' style={{maxWidth:"1095px"}}>
              <div className=""  >
                <img style={{borderRadius:"20px", width:"280px", height:"280px"}}  src={User} alt="Images" />
              </div>
              <div className="different2 m-2" >
                <h4 className='' style={{fontSize:"17px"}}>
                  Hi Everyone, I am <span className="different">Yash Kumar </span>
                  from <span className="different">Bijnor, Uttar Prades</span>.
                  I have completed my graduation with a Bachelor of Science degree in Computer Science from M.J.P. Rohilkhand University, Krishna College of Science & IT.


                </h4>
                <h4 >Some of my interests apart from Coding :</h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">🏸</span> Sports Enthusiast
                </h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">🏸</span> PUBG Player
                </h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">📺</span> Watching Web-Series
                </h4>
                <h4 style={{fontSize:"17px"}} className="different">
                  <span className="icons">✈️</span> Travelling
                </h4>
            </div></div></div>

  )
}
