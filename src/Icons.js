// Icons.js
import React from "react";

export const LinkedInIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 448 512" height={size} width={size} fill="currentColor">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
  </svg>
);

export const GitHubIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" height={size} width={size} fill="currentColor">
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.522-.512v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.693-1.903 8.014 8.014 0 0 0 3.504-2.94 6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .212-1.186 5.309 5.309 0 0 0-.331-1.377h-.11a4.82 4.82 0 0 0-2.048.714 9.578 9.578 0 0 0-5.143 0 4.822 4.822 0 0 0-2.048-.714h-.11a5.844 5.844 0 0 0-.311 1.377c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582a3.888 3.888 0 0 0-.983 1.284A4.142 4.142 0 0 0 5.7 11.476c.18.615.482 1.132.883 1.568.416.426.916.754 1.467.967.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.652 1.377v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"></path>
  </svg>
);

export const EmailIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" height={size} width={size} fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.84c0-.55.45-1 1-1h16c.55 0 1 .45 1 1V17.16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-.06 0-.12.01-.18V5.84Zm2 2.22v9.1h14v-9.1l-4.88 4.88c-1.17 1.17-3.07 1.17-4.24 0L5 8.06Zm1.57-1.26h10.86l-4.72 4.72a1 1 0 0 1-1.42 0L6.57 6.8Z"
    ></path>
  </svg>
);

export const LightIcon=()=>(
    <svg className="MuiSvgIcon-root MuiSvgIcon-root d-flex align-items-center justify-content-center" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.05 4.14l-.39-.39c-.39-.39-1.02-.38-1.4 0l-.01.01c-.39.39-.39 1.02 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01c.39-.38.39-1.02 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39c-.39.39-.39 1.02 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39c.39-.39.39-1.01 0-1.4zm-1.81 15.1l.39.39c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.39-.39c-.39-.39-1.02-.38-1.4 0-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39c.39-.39.38-1.02 0-1.4l-.01-.01a.9959.9959 0 00-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"></path></svg>
)
export const DarkIcon=()=>(
    <svg className="MuiSvgIcon-root MuiSvgIcon-root d-flex align-items-center justify-content-center" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>
)

export const MailIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true height={size} width={size}" fill="currentColor" className="MuiSvgIcon-root">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
  </svg>
);

export const PhoneIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" height={size} width={size} fill="currentColor" className="MuiSvgIcon-root">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
  </svg>
);


export const ResumeIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"  height={size} width={size} fill="currentColor" className="MuiSvgIcon-root">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
  </svg>
);

export const LocationIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" height={size} width={size}ll="currentColor" className="MuiSvgIcon-root">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
  </svg>
);
