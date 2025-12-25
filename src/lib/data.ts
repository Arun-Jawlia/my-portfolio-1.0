import { Code2, Lightbulb, Rocket, Users, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

// ============================================
// PERSONAL INFORMATION - Edit this section to update your portfolio
// ============================================

export const personalInfo = {
  name: 'Arun Jawlia',
  firstName: 'Arun',
  lastName: 'Jawlia',
  initials: 'AJ',
  title: 'Full-Stack Developer',
  tagline: 'A passionate Full-Stack Developer crafting beautiful digital experiences with modern technologies.',
  email: 'arunkumar08.mk@gmail.com',
  phone: '+91 9718653508',
  location: 'New Delhi, India',
  availableForWork: true,
  resumeUrl: 'https://drive.google.com/drive/folders/1vnkj6o086Sbby9FWSugWS0doajT62fUU', // Place your resume PDF in the public folder
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

export const skillCategories = [
  {
    title: 'Frontend',
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
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Express.js', level: 75 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 95 },
      {
        name:"GitHub",
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

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates marketing content, blog posts, and social media captions using GPT-4.',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-time Collaboration Tool',
    description: 'A Notion-like workspace with real-time editing, comments, and team collaboration features.',
    tags: ['React', 'WebSocket', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Health & Fitness Tracker',
    description: 'A mobile-first PWA for tracking workouts, nutrition, and health metrics with AI-powered insights.',
    tags: ['Vue.js', 'Python', 'TensorFlow', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

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
    achievements: ['Delivered 3+ client projects', 'Mastered React ecosystem', 'Improved team workflow'],
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
