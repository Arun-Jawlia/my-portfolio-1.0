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
  email: 'arun@example.com',
  phone: '+91 98765 43210',
  location: 'Mumbai, India',
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
    "I'm a passionate full-stack developer with over 2 years of experience building web applications that make a difference. I specialize in creating seamless user experiences using modern technologies like React, Node.js, and cloud platforms.",
    "My journey in tech started with a curiosity about how things work on the internet. Today, I transform that curiosity into innovative solutions that help businesses grow and users succeed.",
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
      { name: 'Node.js', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Express.js', level: 75 },
    ],
  },
  {
    title: 'Tools & DevOps',
    stack: 'tools' as SkillStack,
    skills: [
      { name: 'Git', level: 95 },
      {
        name: "GitHub",
        level: 90
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
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&auto=format&fit=crop&q=60',
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
      'src/assets/images/snoc_image_1.png',
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
    title: 'Experience Engineer L2',
    company: 'Publicis Sapient',
    period: 'Mar, 2025  - Dec, 2025',
    description: 'Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.',
    achievements: ['Reduced load time by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline'],
  },
  {
    type: 'work' as const,
    title: 'Software Engineer',
    company: 'Ijona Services',
    period: 'Feb, 2024  - Aug, 2025',
    description: 'Created responsive websites and interactive web applications for diverse clients across industries.',
    achievements: ['Delivered 20+ client projects', 'Mastered React ecosystem', 'Improved team workflow'],
  },
  {
    type: 'education' as const,
    title: 'B.Tech in Computer Science',
    company: 'Tech University',
    period: '2014 - 2018',
    description: 'Graduated with honors, specializing in software engineering and web technologies.',
    achievements: ['GPA: 3.8/4.0', "Dean's List", 'Best Capstone Project Award'],
  },
];

// ============================================
// TESTIMONIALS SECTION
// ============================================

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60',
    content: 'Arun is an exceptional developer who delivered our project beyond expectations. His attention to detail and problem-solving skills are remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, InnovateCo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
    content: 'Working with Arun was a pleasure. He brought innovative solutions to complex problems and consistently delivered high-quality code.',
  },
  {
    id: 3,
    name: 'Emily Roberts',
    role: 'Product Manager, DataFlow',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60',
    content: "Arun's technical expertise and communication skills made our collaboration seamless. He's a true professional who cares about the end result.",
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Founder, WebScale',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60',
    content: "I've worked with many developers, but Arun stands out for his dedication and skill. He transformed our vision into reality perfectly.",
  },
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
