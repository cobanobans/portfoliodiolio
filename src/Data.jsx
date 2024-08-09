import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaCss3 } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { ImNewTab } from 'react-icons/im'

import EZBankImage from './assets/EZBank.jpg'
import RentBikeImage from './assets/rent-a-bike.jpg'
import PortfolioImage from './assets/portfolio.jpg'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#about', text: 'about' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-cyan-500' />,
    icon2: <FaCss3 className='h-16 w-16 text-cyan-500' />,
    text: 'Highly skilled in HTML & CSS, which I use for crafting visually captivating and responsive websites to ensure the best user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-cyan-500' />,
    text: 'Advanced knowledge in JavaScript, experienced at crafting interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-cyan-500' />,
    text: 'Advanced proficiency in React, specializing in creating efficient and interactive front-end applications with a focus on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className='h-16 w-16 text-cyan-500' />,
    text: 'Experienced in developing advanced applications featuring secure user authentication, transaction management, real-time data updates, and seamless server-side operations.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-cyan-500' />,
    text: "Skilled in Tailwind CSS, I've utilized its utility-first approach to streamline styling in my projects. Tailwind CSS has enabled me to create visually appealing and responsive user interfaces efficiently.",
  },
  // {
  //   id: nanoid(),
  //   title: 'Typescript',
  //   icon: <TbBrandTypescript className='h-16 w-16 text-cyan-500' />,
  //   text: 'Currently expanding my skill set by diving into TypeScript, eagerly embracing its type safety and enhanced developer experience. Excited to apply this newfound knowledge to future projects and elevate my development capabilities.',
  // },
]

export const projects = [
  {
    id: nanoid(),
    // note: 'Note: Please use email: djolej17@gmail.com and pass: DjordjeTest to login, or create your account',
    tech: [
      <SiNextdotjs className=' text-cyan-600' />,
      <SiTailwindcss className='text-cyan-600' />,
    ],
    img: EZBankImage,
    url: 'https://e-ztest-2.vercel.app/',
    github: 'https://github.com/cobanobans/EZBank',
    title: 'Banking App',
    text: 'EZBank is a financial application using Next.js, Prisma, and Clerk for authentication. It handles server-side actions, user deposits, transaction tracking, and payments with imaginary money. The app also integrates an external API for real-time currency checking.',
  },
  {
    id: nanoid(),
    tech: [
      <FaJs className=' text-cyan-600' />,
      <FaHtml5 className='text-cyan-600' />,
      <FaCss3 className='text-cyan-600' />,
    ],

    img: RentBikeImage,
    url: 'https://rent-a-bici.netlify.app/',
    github: 'https://github.com/cobanobans/rent-a-bike',
    title: 'Rent-a-bike',
    text: 'Web app created using HTML, CSS, and JavaScript. Features include bike availability, rental scheduling  with Implemented responsive design to ensure usability across various devices.',
  },
  {
    id: nanoid(),
    tech: [
      <FaReact className=' text-cyan-600' />,
      <SiTailwindcss className='text-cyan-600' />,
      // <FaCss3 className='text-cyan-600' />,
    ],

    img: PortfolioImage,
    url: 'https://portfoliodiolio.netlify.app/',
    github: 'https://github.com/cobanobans/portfoliodiolio',
    title: 'Portfolio',
    text: 'A personal portfolio built with React, Three.js, and Fiber. This site showcases my work, featuring animated 3D models on the homepage to create a dynamic and engaging user experience.',
  },
]
