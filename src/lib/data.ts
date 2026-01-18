import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

// ============================================
// PERSONAL INFORMATION - Edit this section to update your portfolio
// ============================================

// Role type for configurable developer title
export type DeveloperRole = "fullstack" | "frontend" | "backend" | "custom";

// Role configurations
export const roleConfig = {
  fullstack: {
    title: "Full-Stack Developer",
    tagline:
      "A passionate Full-Stack Developer crafting beautiful digital experiences with modern technologies.",
  },
  frontend: {
    title: "Frontend Developer",
    tagline:
      "A passionate Frontend Developer creating stunning user interfaces with modern technologies.",
  },
  backend: {
    title: "Backend Developer",
    tagline:
      "A passionate Backend Developer building robust and scalable server-side solutions.",
  },
  custom: {
    title: "Software Engineer",
    tagline:
      "A passionate Software Engineer crafting innovative solutions with modern technologies.",
  },
};

// Change this to switch roles: 'fullstack' | 'frontend' | 'backend' | 'custom'
export const currentRole: DeveloperRole = "fullstack";

export const personalInfo = {
  name: "Arun Jawlia",
  firstName: "Arun",
  lastName: "Jawlia",
  initials: "AJ",
  title: roleConfig[currentRole].title,
  tagline: roleConfig[currentRole].tagline,
  email: "arunkumar.mk@gmail.com",
  phone: "+91 9718653508",
  location: "New Delhi, Delhi, India",
  availableForWork: true,
  resumeUrl:
    "https://drive.google.com/drive/folders/1vnkj6o086Sbby9FWSugWS0doajT62fUU?usp=drive_link",
  githubUrl: "https://github.com/Arun-Jawlia?tab=repositories",
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Arun-Jawlia", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/arun-jawlia/",
    label: "LinkedIn",
  },
];

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// ABOUT SECTION
// ============================================

export const aboutData = {
  heading: "Crafting Digital",
  headingHighlight: "Experiences",
  paragraphs: [
    "I'm a passionate full-stack developer with over 2 years of experience building web applications that make a difference. I specialize in creating seamless user experiences using modern technologies like React, JavaScript, Node.js, and cloud platforms.",
    "My journey in tech started with a curiosity about how things work on the internet. Today, I transform that curiosity into innovative solutions that help businesses grow and users succeed.",
    "When I'm not coding, you'll find me exploring new technologies and enhance my expertise in various techstack",
    // "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.",
  ],
  highlights: [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex problems into simple solutions",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly adapting to new technologies",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams",
    },
  ],
  yearsOfExperience: 2,
};

// ============================================
// SKILLS SECTION
// ============================================

// Skill stack type for filtering
export type SkillStack = "frontend" | "backend" | "tools";

// Skill icons mapping (using popular CDN for tech logos)
export const skillIcons: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Docker ( Basic )":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "CI/CD":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  Linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
};

export const skillCategories = [
  {
    title: "Frontend",
    stack: "frontend" as SkillStack,
    skills: [
      { name: "React", years: 3 },
      { name: "TypeScript", years: 2 },
      { name: "Next.js", years: 2 },
      { name: "Tailwind CSS", years: 2 },
      {
        name: "HTML5",
        years: 3,
      },
      {
        name: "CSS3",
        years: 3,
      },
      {
        name: "JavaScript",
        years: 3,
      },
      {
        name: "Redux Toolkit",
        years: 3,
      },
    ],
  },
  {
    title: "Backend",
    stack: "backend" as SkillStack,
    skills: [
      { name: "Node.js", years: 2 },
      { name: "Express.js", years: 2 },
      { name: "MongoDB", years: 2 },
    ],
  },
  {
    title: "Tools & DevOps",
    stack: "tools" as SkillStack,
    skills: [
      { name: "Git", years: 3 },
      { name: "Docker ( Basic )", years: 1 },
      { name: "AWS S3", years: 1 },
    ],
  },
];

export const techIcons = [
  "React",
  "TypeScript",
  "Node.js",
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
  "Tailwind",
  "Next.js",
  "Git",
  "GitHub",
  "Express.js",
];

// ============================================
// PROJECTS SECTION
// ============================================

// Tech stack type for project filtering
export type TechStack = "frontend" | "backend" | "fullstack";

export const projects = [
  // Personal Portfolio - This website
  {
    id: 0,
    title: "Personal Developer Portfolio",
    description:
      "A modern, visually striking portfolio built with React, TypeScript, and GSAP animations. Features smooth scroll effects, lazy loading, code splitting, and a fully responsive design with dark/light mode support.",
    features: [
      "Advanced GSAP scroll-based animations",
      "Code splitting & lazy loading for optimal performance",
      "Responsive design with mobile-first approach",
      "Dynamic project filtering system",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Vite",
      "Framer Motion",
    ],
    desktopImages: [
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768717904/Screenshot_2026-01-18_115827_efcypg.png",
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768717904/Screenshot_2026-01-18_115808_rbzhqj.png",
    ],
    mobileImages: [
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768717903/Screenshot_2026-01-18_115724_mkg6l4.png"
    ],
    liveUrl: "http://arun-jawlia.vercel.app/",
    githubUrl: "https://github.com/Arun-Jawlia/my-portfolio-1.0",
    featured: true,
    category: "personal" as const,
    techStack: "frontend" as TechStack,
  },
  // Organization Projects
  {
    id: 1,
    title: "User Management Module",
    description:
      "Delivered frontend solutions for Fidelity International as part of a digital transformative initiative. Architected and optimized React-based SPAs within a Microfrontend (MFE) ecosystem, increasing deployment modularity and system scalability. Achieved 90% unit test coverage using Jest.",
    tags: [
      "React.js",
      "TypeScript",
      "Redux",
      "Jest",
      "Microfrontend",
      "Jenkins",
    ],
    features: [
      "Microfrontend architecture for modular deployment",
      "90% unit test coverage using Jest",
      "Reusable component library with Storybook",
      "Real-time data synchronization across modules",
    ],
    desktopImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    ],
    mobileImages: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "organization" as const,
    organization: "Publicis Sapient (Fidelity International)",
    techStack: "frontend" as TechStack,
  },
  {
    id: 2,
    title: "WeMove: Ride-Hailing & Transportation Platform",
    description:
      "Built a high-performance backend for a ride-hailing platform with ride booking, driver allocation, and secure payments. Implemented JWT authentication and Bcrypt hashing. Optimized API performance using Redis caching, improving response time by ~40%. Enabled real-time ride tracking via WebSockets.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Redis", "WebSockets"],
    features: [
      "JWT authentication & Bcrypt password hashing",
      "Real-time ride tracking via WebSockets",
      "Redis caching for 40% faster API response",
      "Automated driver allocation algorithm",
    ],
    desktopImages: ["/assets/images/wemove.png"],
    mobileImages: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "organization" as const,
    techStack: "backend" as TechStack,
  },
  {
    id: 3,
    title: "SNOC - Sharjah National Oil Corporation",
    description:
      "Built a React-based oil nomination system for the Dubai government's SNOC, streamlining submission and management workflows. Developed dynamic forms with React Hook Form & Yup. Integrated Material-UI for a clean, responsive interface with optimized performance using lazy loading and memoization.",
    tags: [
      "React.js",
      "Redux",
      "Material-UI",
      "Axios",
      "React Hook Form",
      "SPA",
    ],
    features: [
      "Dynamic forms with React Hook Form & Yup validation",
      "Material-UI responsive interface",
      "Lazy loading & memoization for performance",
      "Role-based access control system",
    ],
    desktopImages: ["https://res.cloudinary.com/dqday40t0/image/upload/v1768718888/Screenshot_2026-01-18_121717_run6ck.png"],
    mobileImages: ["https://res.cloudinary.com/dqday40t0/image/upload/v1768718888/Screenshot_2026-01-18_121734_zpqaal.png"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "organization" as const,
    organization: "Dubai Government",
    techStack: "frontend" as TechStack,
  },
  {
    id: 4,
    title: "Sport & Health - Fitness Tracking App",
    description:
      "Built a React Native fitness app offering personalized training programs for runners and fitness enthusiasts. Developed a Runner Module with real-time tracking and performance analytics. Integrated Google Maps API for live route tracking and activity insights.",
    tags: ["React Native", "Google Maps API", "Performance Analytics"],
    features: [
      "Real-time GPS route tracking",
      "Performance analytics dashboard",
      "Personalized training programs",
      "Social sharing & leaderboards",
    ],
    desktopImages: [
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768719170/Screenshot_2026-01-18_122143_i2tf5v.png",
    ],
    mobileImages: ["https://res.cloudinary.com/dqday40t0/image/upload/v1768719171/unnamed_1_ljllrg.webp"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.sportshealth&hl=en_IN&pli=1",
    githubUrl: "",
    featured: false,
    category: "organization" as const,
    techStack: "frontend" as TechStack,
  },
  {
    id: 5,
    title: "Movie Junction",
    description:
      "A movie and web series discovery platform built with React and Redux Toolkit Query using the TMDB API. Users can explore the latest movies and web series, view details, ratings, genres, and enjoy full-length content instead of just trailers.",
    tags: ["React", "Redux Toolkit", "TMDB API", "Lazy Loading"],
    features: [
      "Latest movies and web series listing",
      "Advanced search by title, genre, and rating",
      "Detailed movie & series pages with cast and overview",
      "Watch full-length movies instead of just trailers",
    ],
    desktopImages: [
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768717904/Screenshot_2026-01-18_115916_cvf7w1.png",
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768717905/Screenshot_2026-01-18_115925_a8qheh.png",
      "https://res.cloudinary.com/dqday40t0/image/upload/v1768717904/Screenshot_2026-01-18_115936_nqdaup.png"
    ],
    mobileImages: ["https://res.cloudinary.com/dqday40t0/image/upload/v1768717904/Screenshot_2026-01-18_115956_cy39qb.png"],
    liveUrl: "https://movie-junction.vercel.app/",
    githubUrl: "https://github.com/Arun-Jawlia/movie-junction",
    featured: false,
    category: "personal" as const,
    techStack: "frontend" as TechStack,
  },
];

// ============================================
// MORE PROJECTS SECTION (Compact/Mini Projects)
// ============================================

export const moreProjects = [
  // {
  //   id: 101,
  //   title: 'Weather Dashboard',
  //   subtitle: 'Real-time Weather Tracking',
  //   description: 'A weather app with real-time data, forecasts, and location-based updates.',
  //   tags: ['React', 'API', 'CSS'],
  //   liveUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   id: 102,
  //   title: 'Task Manager CLI',
  //   subtitle: 'Command-line Productivity Tool',
  //   description: 'Command-line task manager with file-based storage and priority sorting.',
  //   tags: ['Node.js', 'CLI', 'JavaScript'],
  //   liveUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   id: 103,
  //   title: 'Markdown Editor',
  //   subtitle: 'Live Preview Editor',
  //   description: 'Live preview markdown editor with syntax highlighting and export options.',
  //   tags: ['React', 'Markdown', 'TypeScript'],
  //   liveUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   id: 104,
  //   title: 'REST API Boilerplate',
  //   subtitle: 'Backend Starter Kit',
  //   description: 'Express.js starter with auth, validation, and database integration.',
  //   tags: ['Node.js', 'Express', 'MongoDB'],
  //   liveUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   id: 105,
  //   title: 'Portfolio Template',
  //   subtitle: 'Developer Showcase',
  //   description: 'Minimal portfolio template with dark mode and smooth animations.',
  //   tags: ['HTML', 'CSS', 'JavaScript'],
  //   liveUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   id: 106,
  //   title: 'Chat Application',
  //   subtitle: 'Real-time Messaging',
  //   description: 'Real-time chat app with rooms, typing indicators, and message history.',
  //   tags: ['Socket.io', 'React', 'Node.js'],
  //   liveUrl: '',
  //   githubUrl: '',
  // },
];

// ============================================
// EXPERIENCE SECTION
// ============================================

export const experiences = [
  {
    type: "work" as const,
    title: "Frontend Engineer",
    company: "Publicis Sapient (Client: Fidelity International)",
    period: "Apr 2025 – Present",
    description:
      "Building scalable enterprise frontend systems using microfrontend architecture.",
    achievements: [
      "Achieved 90%+ test coverage with Jest; improved release stability",
      "Built React microfrontends with automated CI/CD via Jenkins",
    ],
  },
  {
    type: "work" as const,
    title: "Software Engineer",
    company: "Ijona Services LLP",
    period: "Feb 2024 – Mar 2025",
    description: "Developed scalable and secure MERN-based web applications.",
    achievements: [
      "Improved performance ~30% using Redis and query optimization",
      "Implemented JWT/OAuth 2.0 auth; deployed on DigitalOcean",
    ],
  },
  {
    type: "education" as const,
    title: "Master of Computer Science ",
    company: "Indira Gandhi National Open University",
    period: "Jan 2025 – Dec 2026",
    description:
      "Postgraduate program focused on advanced computer science concepts including systems, algorithms, and software engineering.",
    achievements: [],
  },
  {
    type: "education" as const,
    title: "Bachelor of Science",
    company: "Indira Gandhi National Open University",
    period: "Jun 2017 – Dec 2020",
    description:
      "Undergraduate degree focused on core science subjects and analytical problem solving.",
    achievements: [],
  },
  {
    type: "education" as const,
    title: "Full Stack Web Development",
    company: "Masai School, Bangalore",
    period: "Jan 2022 – Jan 2023",
    description:
      "Intensive industry-oriented program focused on full stack web development and data structures.",
    achievements: [],
  },
];

// ============================================
// TESTIMONIALS SECTION
// ============================================

// Default images for fallback
export const DEFAULT_DESKTOP_IMAGE =
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop&q=60";
export const DEFAULT_MOBILE_IMAGE =
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=60";
export const DEFAULT_AVATAR_IMAGE =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=60";

export const testimonials = [
  {
    id: 1,
    name: "Akshay Jain",
    role: "Distinguished Engineer, Fidelity International",
    image: "",
    content:
      "Arun makes sure he clearly understands the problem before fixing it, which results in high-quality and reliable solutions.",
  },
  {
    id: 2,
    name: "Shubham, Shubhams",
    role: "Expert Engineer, Fidelity International",
    image: "",
    content:
      "We truly enjoyed working with Arun. His efforts played a key role in delivering the project on time.",
  },
  {
    id: 3,
    name: "Diksha, Diksha",
    role: "Senior QA, Fidelity International",
    image: "",
    content:
      "His polite and collaborative nature makes him a pleasure to work with and strengthens the entire team.",
  },
];

// ============================================
// CONTACT SECTION
// ============================================

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: personalInfo.location },
];

// ============================================
// FOOTER DATA
// ============================================

export const footerData = {
  tagline:
    "Full-Stack Developer passionate about creating beautiful digital experiences.",
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name
    }. All rights reserved.`,
  madeIn: "India",
};

// ============================================
// GITHUB DATA
// ============================================

export const githubData = {
  username: "yourusername",
  profileUrl: "https://github.com/Arun-Jawlia",
  totalContributions: 1341,
  personal: {
    commits: 817,
    pullRequests: 124,
    issues: 0,
    stars: 21,
    repositories: 66,
  },
  organizations: [
    {
      name: "Fidelity International",
      logo: "https://github.com/github.png",
      role: "Core Contributor",
      commits: 135,
      pullRequests: 45,
      issues: 0,
    },
    {
      name: "Ijona Services LLP",
      logo: "https://github.com/vercel.png",
      role: "Core Contributor",
      commits: 389,
      pullRequests: 72,
      issues: 0,
    },
  ],
};
