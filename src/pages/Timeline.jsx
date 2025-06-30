
import '../cssFile/Timeline.css';
import FadeIn from '../Animation/FadeIn';

const TimelineItem = ({ title, subtitle, description, date, icon, reverse }) => {
  return (
    <div className={`timeline-container ${reverse ? 'reverse' : ''}`}>
      <div className="timeline-card ">
        <FadeIn>
        <h3 className="title different m-0" style={{fontSize:"17.6px"}}>{title}</h3>
        <h4 style={{fontSize:"14.4px"}} className="subtitle different2 ">{subtitle}</h4>
        <p className="description different2 mt-3">{description}</p></FadeIn>
      </div>
{/* <div className={`timeline-pointer ${reverse ? 'reverse' : ''}`}></div> */}

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
