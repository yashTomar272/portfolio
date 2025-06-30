import Timeline from './Timeline';
import '../cssFile/Timeline.css';

import FadeIn from '../Animation/FadeIn';
const Timeline2 = () => {

const data = [
  {
    title: 'Full Stack Developer',
    subtitle: 'Quickiii Formerly Veerji(Remote)',
    description:
      'I worked as a Full Stack Developer at Quickiii contributing to the development of a seller application using React Native. Started as an intern, later transitioned to a full-time role due to performance and dedication.',
    date: 'October 2022 – April 2023',
    icon: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  },
  {
    title: 'Student',
    subtitle: 'Masai School',
    description: 'Joined the Military style Bootcamp to learn Software Development and Data Structures. Also learned many soft skills in the process.',
    date: 'Sep 2021 – Apr 2022',
    icon: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  },
  {
    title: 'Graduate',
    subtitle: '',
    description: 'Triuttani GRT Institute Of Engineering and Technology',
    date: '2014 – 2018',
    icon: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  },
   {
    title: 'Graduate',
    subtitle: '',
    description: 'Government Girls Higher Secondary School, R.K.Pet, Tamil Nadu',
    date: '2014 – 2018',
    icon: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  },
  {
    title: 'Graduate',
    subtitle: '',
    description: 'Government Girls Higher Secondary School, R.K.Pet, Tamil Nadu',
    date: '2014 – 2018',
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
