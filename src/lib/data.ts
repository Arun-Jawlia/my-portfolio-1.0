import { Code2, Lightbulb, Rocket, Users, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

// ============================================
// PERSONAL INFORMATION - Edit this section to update your portfolio
// ============================================

// Role type for configurable developer title
export type DeveloperRole = 'fullstack' | 'frontend' | 'backend' | 'custom';

// Role configurations
export const roleConfig = {
  fullstack: {
    title: 'Full-Stack Developer',
    tagline: 'A passionate Full-Stack Developer crafting beautiful digital experiences with modern technologies.',
  },
  frontend: {
    title: 'Frontend Developer',
    tagline: 'A passionate Frontend Developer creating stunning user interfaces with modern technologies.',
  },
  backend: {
    title: 'Backend Developer',
    tagline: 'A passionate Backend Developer building robust and scalable server-side solutions.',
  },
  custom: {
    title: 'Software Engineer',
    tagline: 'A passionate Software Engineer crafting innovative solutions with modern technologies.',
  },
};

// Change this to switch roles: 'fullstack' | 'frontend' | 'backend' | 'custom'
export const currentRole: DeveloperRole = 'fullstack';

export const personalInfo = {
  name: 'Arun Jawlia',
  firstName: 'Arun',
  lastName: 'Jawlia',
  initials: 'AJ',
  title: roleConfig[currentRole].title,
  tagline: roleConfig[currentRole].tagline,
  email: 'arunkumar.mk@gmail.com',
  phone: '+91 9718653508',
  location: 'New Delhi, Delhi, India',
  availableForWork: true,
  resumeUrl: 'https://drive.google.com/drive/folders/1vnkj6o086Sbby9FWSugWS0doajT62fUU',
  githubUrl: 'https://github.com/Arun-Jawlia?tab=repositories',
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = [
  { icon: Github, href: 'https://github.com/Arun-Jawlia', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arun-jawlia/', label: 'LinkedIn' },
];

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

// ============================================
// ABOUT SECTION
// ============================================

export const aboutData = {
  heading: 'Crafting Digital',
  headingHighlight: 'Experiences',
  paragraphs: [
    "I'm a passionate full-stack developer with over 2 years of experience building web applications that make a difference. I specialize in creating seamless user experiences using modern technologies like React, JavaScript, Node.js, and cloud platforms.",
    "My journey in tech started with a curiosity about how things work on the internet. Today, I transform that curiosity into innovative solutions that help businesses grow and users succeed.",
    "When I'm not coding, you'll find me exploring new technologies and enhance my expertise in various techstack",
    // "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.",
  ],
  highlights: [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning complex problems into simple solutions',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Constantly adapting to new technologies',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams',
    },
  ],
};

// ============================================
// SKILLS SECTION
// ============================================

// Skill stack type for filtering
export type SkillStack = 'frontend' | 'backend' | 'tools';

export const skillCategories = [
  {
    title: 'Frontend',
    stack: 'frontend' as SkillStack,
    skills: [
      { name: 'React', level: 80 },
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 70 },
      { name: 'Next.js', level: 60 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    stack: 'backend' as SkillStack,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 80 },
      { name: 'Express.js', level: 90 },
    ],
  },
  {
    title: 'Tools & DevOps',
    stack: 'tools' as SkillStack,
    skills: [
      { name: 'Git', level: 80 },
      {
        name: "GitHub",
        level: 80
      }
    ],
  },
];

export const techIcons = [
  'React', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'MongoDB',
  'Tailwind', 'Next.js', 'Git', 'GitHub', 'Express.js'
];

// ============================================
// PROJECTS SECTION
// ============================================

// Tech stack type for project filtering
export type TechStack = 'frontend' | 'backend' | 'fullstack';

export const projects = [
  // Organization Projects
  {
    id: 1,
    title: 'Digital Platform - User Management Module',
    description: 'Delivered frontend solutions for Fidelity International as part of a digital transformative initiative. Architected and optimized React-based SPAs within a Microfrontend (MFE) ecosystem, increasing deployment modularity and system scalability. Achieved 90% unit test coverage using Jest.',
    tags: ['React.js', 'TypeScript', 'Redux', 'Jest', 'Microfrontend', 'Jenkins'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    category: 'organization' as const,
    organization: 'Publicis Sapient (Fidelity International)',
    techStack: 'frontend' as TechStack,
  },
  {
    id: 2,
    title: 'WeMove: Ride-Hailing & Transportation Platform',
    description: 'Built a high-performance backend for a ride-hailing platform with ride booking, driver allocation, and secure payments. Implemented JWT authentication and Bcrypt hashing. Optimized API performance using Redis caching, improving response time by ~40%. Enabled real-time ride tracking via WebSockets.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redis', 'WebSockets'],
    image: '/assets/images/wemove.png',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    category: 'organization' as const,
    techStack: 'backend' as TechStack,
  },
  {
  id: 3,
    title: 'SNOC - Sharjah National Oil Corporation',
    description: 'Built a React-based oil nomination system for the Dubai government\'s SNOC, streamlining submission and management workflows. Developed dynamic forms with React Hook Form & Yup. Integrated Material-UI for a clean, responsive interface with optimized performance using lazy loading and memoization.',
    tags: ['React.js', 'Redux', 'Material-UI', 'Axios', 'React Hook Form', 'SPA'],
    image:
      '/assets/images/snoc_image_1.png',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    category: 'organization' as const,
    organization: 'Dubai Government',
    techStack: 'frontend' as TechStack,
  },
  {
    id: 4,
    title: 'Sport & Health - Fitness Tracking App',
    description: 'Built a React Native fitness app offering personalized training programs for runners and fitness enthusiasts. Developed a Runner Module with real-time tracking and performance analytics. Integrated Google Maps API for live route tracking and activity insights.',
    tags: ['React Native', 'Google Maps API', 'Performance Analytics'],
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60',

    liveUrl: '',
    githubUrl: '',
    featured: false,
    category: 'organization' as const,
    techStack: 'frontend' as TechStack,
  },
]

// ============================================
// EXPERIENCE SECTION
// ============================================

export const experiences = [
  {
    type: 'work' as const,
    title: 'Frontend Engineer',
    company: 'Publicis Sapient (Client: Fidelity International)',
    period: 'Apr 2025 – Present',
    description:
      'Delivering scalable frontend solutions for enterprise digital transformation using microfrontend architecture.',
    achievements: [
      'Achieved 90%+ unit test coverage using Jest, improving component reliability and regression safety',
      'Built and deployed modular React microfrontends enabling independent team releases',
      'Implemented CI/CD pipelines using Jenkins to automate testing, builds, and deployments',
    ],
  },
  {
    type: 'work' as const,
    title: 'Software Engineer',
    company: 'Ijona Services LLP',
    period: 'Feb 2024 – Mar 2025',
    description:
      'Developed and maintained high-performance web applications using the MERN stack with a focus on scalability and security.',
    achievements: [
      'Improved application performance by ~30% using Redis caching and query optimization',
      'Implemented secure authentication using JWT and OAuth 2.0 standards',
      'Designed MongoDB schemas and deployed applications on DigitalOcean infrastructure',
    ],
  },
  {
    type: 'education' as const,
    title: 'Master of Computer Science (Pursuing)',
    company: 'Indira Gandhi National Open University',
    period: 'Jan 2025 – Dec 2026',
    description:
      'Postgraduate program focused on advanced computer science concepts including systems, algorithms, and software engineering.',
    achievements: [
      'Specializing in software engineering and distributed systems',
    ],
  },
  {
    type: 'education' as const,
    title: 'Bachelor of Science',
    company: 'Indira Gandhi National Open University',
    period: 'Jun 2017 – Dec 2020',
    description:
      'Undergraduate degree focused on core science subjects and analytical problem solving.',
    achievements: [
      'Completed degree with focus on mathematics and computer fundamentals',
    ],
  },
  {
    type: 'education' as const,
    title: 'Full Stack Web Development',
    company: 'Masai School, Bangalore',
    period: 'Jan 2022 – Jan 2023',
    description:
      'Intensive industry-oriented program focused on full stack web development and data structures.',
    achievements: [
      'Completed 3,600+ hours of coding, DSA practice, and real-world projects',
      'Built multiple full stack applications using React, Node.js, MongoDB, and REST APIs',
    ],
  },
];


// ============================================
// TESTIMONIALS SECTION
// ============================================

// Default images for fallback
export const DEFAULT_DESKTOP_IMAGE = 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop&q=60';
export const DEFAULT_MOBILE_IMAGE = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=60';
export const DEFAULT_AVATAR_IMAGE = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=60';

export const testimonials = [
  {
    id: 1,
    name: 'Akshay Jain',
    role: 'Distinguished Engineer, Fidelity International',
    image: '',
    content: 'Arun makes sure he clearly understands the problem before fixing it, which results in high-quality and reliable solutions.',
  },
  {
    id: 2,
    name: 'Shubham, Shubhams',
    role: 'Expert Engineer, Fidelity International',
    image: '',
    content: 'We truly enjoyed working with Arun. His efforts played a key role in delivering the project on time.',
  },
  {
    id: 3,
    name: 'Diksha, Diksha',
    role: 'Senior QA, Fidelity International',
    image: '',
    content: "His polite and collaborative nature makes him a pleasure to work with and strengthens the entire team.",
  }
];

// ============================================
// CONTACT SECTION
// ============================================

export const contactInfo = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
];

// ============================================
// FOOTER DATA
// ============================================

export const footerData = {
  tagline: 'Full-Stack Developer passionate about creating beautiful digital experiences.',
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  madeIn: 'India',
};

// ============================================
// GITHUB DATA
// ============================================

export const githubData = {
  username: 'yourusername',
  profileUrl: 'https://github.com/Arun-Jawlia',
  totalContributions: 1341,
  personal: {
    commits: 817,
    pullRequests: 124,
    issues: 0,
    stars: 21,
    repositories: 66
  },
  organizations: [
    {
      name: 'Fidelity International',
      logo: 'https://github.com/github.png',
      role: 'Core Contributor',
      commits: 135,
      pullRequests: 45,
      issues: 0
    },
    {
      name: 'Ijona Services LLP',
      logo: 'https://github.com/vercel.png',
      role: 'Maintainer',
      commits: 389,
      pullRequests: 72,
      issues: 0
    }
  ]
};