import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  
  
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'About',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Resume',
    icon: <FaUser className='nav__icon' />,
    path: '/resume',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
  
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name: ',
    description: 'Gaurav Kumar',
  },

  {
    id: 2,
    title: 'Last Name: ',
    description: 'Jha',
  },

  {
    id: 3,
    title: 'Date Of Birth: ',
    description: '28 January,2003',
  },

  {
    id: 4,
    title: 'Nationality: ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Web Developer: ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address: ',
    description: 'Darbhanga,Bihar',
  },

  {
    id: 7,
    title: 'Phone: ',
    description: '+91 9163424075',
  },

  {
    id: 8,
    title: 'Email: ',
    description: 'gauravjha485@gmail.com',
  },

  {
    id: 9,
    title: 'Github: ',
    description: 'gauravkrj.github.com',
  },

  {
    id: 10,
    title: 'Languages: ',
    description: 'English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '9+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '5+',
    title: ' Technical<br /> Skills',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Founder <span> Dgwrench </span>',
    desc: 'Project Manager · Development & Designing',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'December 2022',
    title: 'Web Developer <span> Young Minds Publishing</span>',
    desc: 'Web Development'},

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2023',
    title: 'Freelancer <span> UpWork · Fiver · Freelancer </span>',
    desc: 'Web Development & Designing - UI & UX'
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'B.Tech <span> Haldia Institute Of Technology </span>',
    desc: 'Computer Science Engineering (AI & ML) - 9.54 CGPA',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Intermediate <span> Xaviers English School</span>',
    desc: 'Physics, Chemistry and Maths - 89% Aggregate',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Matriculation <span> Rose Bud Lilluah </span>',
    desc: 'Passed - 90% Aggregate',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '81',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Reactjs',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Nextjs',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Java',
    percentage: '80',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '70',
  },

  {
    id: 8,
    title: 'Programming - DSA',
    percentage: '75',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Ecommerce Website',
    link: 'https://deveen-shopping-app.netlify.app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'My Pesonal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Js,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link To : ',
        link: 'https://github.com/gauravkrj/React-e-commerce-website',
        repo: 'Repository'
      },
    ],
  },


  {
    id: 1,
    img: Work2,
    title: 'Weather Appilcation',
    link: 'https://gauravkrj.github.io/weather-app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'My Pesonal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Js,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link To : ',
        link: 'https://github.com/gauravkrj/weather-app',
        repo: 'Repository'
      },
    ],
  },

  

  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
