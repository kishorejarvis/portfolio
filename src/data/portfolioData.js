import { FaVoteYea } from "react-icons/fa";

export const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

export const skillGroups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript(ES6+)', 'React.js', 'Tailwind CSS', 'Responsive Design'] },
  { title: 'Backend Knowledge', items: ['Node.js', 'Express.js', 'REST APIs','JWT Authentication','CRUD Operations'] },
  { title: 'Database', items: ['MongoDB','Mongoose'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'MS Excel', 'MS Word','Postman', 'Vercel','VS Code'] },
];

export const experiences = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Self-driven Internship',
    year: '2026',
    highlights: [
  'Developed a Job Portal web application using MERN',
  'Implemented job posting and application tracking features',
  'Integrated REST APIs and MongoDB database',
  'Used Git and GitHub for version control'
],
  },
  {
    title: 'Zone Leader & Team coordinator',
    company: 'Lakshmi Life Science Pvt Ltd',
    year: '2022 – 2024',
    highlights: ['Managed team coordination and workflow planning',
  'Conducted training sessions for new team members',
  'Maintained documentation and operational reports',
  'Improved process efficiency through effective team management'],
  },
];

export const projects = [
  {
    title: 'MERN Job Portal Application',
    description: 'A full-stack job portal that allows job seekers to search and apply for jobs, while employers can post and manage job listings efficiently.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    github: 'https://github.com/rkishore3333/mern-ecommerce',
    demo: 'https://mern-ecommerce.vercel.app/',
  },
  {
    title: 'Calculator',
    description: 'A polished calculator with keyboard support, animations, and precision controls.',
    tech: ['HTML5', 'CSS3', 'JavaScript(ES6+)'],
    github: 'https://github.com/kishorejarvis/Calculator',
    demo: 'https://calculator-six-tau-38.vercel.app/',
  },
  {
    title: 'TODO App',
    description: 'A responsive task manager with add, edit, and completion tracking capabilities.',
    tech: ['HTML5', 'CSS3', 'JavaScript(ES6+)'],
    github: 'https://github.com/kishorejarvis/TODO/tree/main',
    demo: 'https://todo-kishore17.vercel.app/',
  },
];

export const socials = [
  {
       name: 'LinkedIn', href: 'https://www.linkedin.com/in/kishore-r-4a5a64344/?skipRedirect=true' },
];
