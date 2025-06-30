// import React from 'react'

// const Timeline = () => {
//   return (
//     <div className="timeline-container">
//       <div className="timeline-card">
//         <h3 className="title">Full Stack developer</h3>
//         <h4 className="subtitle">Quickiii Formerly Veerji(Remote)</h4>
//         <p className="description">
//           I worked as a Full Stack Developer at Quickiii contributing to the development of a seller application using React Native. Started as an intern, later transitioned to a full-time role due to performance and dedication.
//         </p>
//       </div>

//       <div className="timeline-icon">
//         <div className="circle">
//           <svg viewBox="0 0 24 24" className="icon">
//             <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
//           </svg>
//         </div>
//         <div className="line" />
//       </div>

//       <div className="timeline-date">
//         October 2022 – April 2023
//       </div>
//     </div>

//   )
// }

// export default Timeline
// TimelineItem.jsx
import React from 'react';
import '../cssFile/Timeline.css';

const TimelineItem = ({ title, subtitle, description, date, icon, reverse }) => {
  return (
    <div className={`timeline-container ${reverse ? 'reverse' : ''}`}>
      <div className="timeline-card ">
        <h3 className="title different m-0" style={{fontSize:"17.6px"}}>{title}</h3>
        <h4 style={{fontSize:"14.4px"}} className="subtitle different2 ">{subtitle}</h4>
        <p className="description different2 mt-3">{description}</p>
      </div>
<div className={`timeline-pointer ${reverse ? 'reverse' : ''}`}></div>

      <div className="timeline-icon h-100">
        <div className="line" />

        <div className="circle ">
          <svg viewBox="0 0 24 24" className="icon">{icon}</svg>
        </div>
      </div>

      <div className="timeline-date h-100">{date}</div>
      
    </div>
  );
};

export default TimelineItem;
