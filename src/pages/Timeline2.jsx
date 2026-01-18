import Timeline from './Timeline';
import '../cssFile/Timeline.css';

import FadeIn from '../Animation/FadeIn';
const Timeline2 = () => {

const data = [
  {
    title: 'Frontend Developer & React Enthusiast',
    subtitle: 'Self Learning & Personal Projects',
    description:
      'Frontend-focused developer skilled in React.js and JavaScript, with hands-on experience building responsive and interactive applications such as an e-commerce site, Instagram-style UI, and AI chatbot.',
    date: 'August 2023 – (Present)',
    icon: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  },
  {
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Krishna Group of Institutions, MJPRU University',
    description: 'Currently in my final year of graduation. Gained strong foundational knowledge in programming, data structures, web development, and database management systems. Alongside academics, I have built practical skills through self-driven projects and online learning.',
    date: 'August 2023 – (Present)',
    icon: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  },

];
  return (
    <div className="timeline-wrapper">
      <FadeIn>
  <h2 className='different2 text-center p-2 m-2' >MY <span className='different'>TIMELINE 💫</span></h2></FadeIn>
      {data.map((item, index) => (
        <Timeline
          key={index}
          {...item}
          reverse={index % 2 !== 0} // alternate left/right
        />
      ))}
       <div className="timeline-icon h-100">
        <div className="line" />
        <div className="circle ">
          <svg viewBox="0 0 24 24" className="icon">
<path transform="scale(1.33, 1.33)" d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Timeline2
