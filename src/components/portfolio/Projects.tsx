import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Building2,
  User,
  Code2,
  Server,
  Layers,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { projects, TechStack } from "@/lib/data";
import { Link } from "react-router-dom";
import { DeviceMockup } from "./DeviceMockup";

gsap.registerPlugin(ScrollTrigger);

type ProjectCategory = "all" | "personal" | "organization";
type TechFilter = "all" | TechStack;

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [activeTechFilter, setActiveTechFilter] = useState<TechFilter>("all");

  const filteredProjects = projects.filter((p) => {
    const categoryMatch =
      activeCategory === "all" || p.category === activeCategory;
    const techMatch =
      activeTechFilter === "all" || p.techStack === activeTechFilter;
    return categoryMatch && techMatch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      const projectCards =
        projectsRef.current?.querySelectorAll(".project-card");
      projectCards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Count projects by category and tech stack
  const projectCounts = {
    all: projects.length,
    personal: projects.filter((p) => p.category === "personal").length || 0,
    organization: projects.filter((p) => p.category === "organization").length,
    frontend: projects.filter((p) => p.techStack === "frontend").length,
    backend: projects.filter((p) => p.techStack === "backend").length,
    fullstack: projects.filter((p) => p.techStack === "fullstack").length,
  };

  const categories: {
    key: ProjectCategory;
    label: string;
    icon: React.ReactNode;
    count: number;
  }[] = [
    { key: "all", label: "All Projects", icon: null, count: projectCounts.all },
    {
      key: "organization",
      label: "Organization",
      icon: <Building2 className="w-4 h-4" />,
      count: projectCounts.organization,
    },
    {
      key: "personal",
      label: "Personal",
      icon: <User className="w-4 h-4" />,
      count: projectCounts.personal,
    },
  ];

  const techFilters: {
    key: TechFilter;
    label: string;
    icon: React.ReactNode;
    count: number;
  }[] = [
    {
      key: "all",
      label: "All Stack",
      icon: <Layers className="w-4 h-4" />,
      count: projectCounts.all,
    },
    {
      key: "frontend",
      label: "Frontend",
      icon: <Code2 className="w-4 h-4" />,
      count: projectCounts.frontend,
    },
    {
      key: "backend",
      label: "Backend",
      icon: <Server className="w-4 h-4" />,
      count: projectCounts.backend,
    },
    {
      key: "fullstack",
      label: "Full Stack",
      icon: <Layers className="w-4 h-4" />,
      count: projectCounts.fullstack,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row   justify-center gap-4 mb-8">
          {/* Project Type Filter */}
          <div className="inline-flex bg-secondary/50 rounded-full p-1.5 gap-1 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.icon}
                {cat.label}
                <span
                  className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                    activeCategory === cat.key
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tech Stack Filter */}
          <div className="inline-flex bg-secondary/50 rounded-full p-1.5 gap-1 justify-center">
            {techFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveTechFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTechFilter === filter.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {filter.icon}
                {filter.label}
                <span
                  className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                    activeTechFilter === filter.key
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative overflow-hidden rounded-2xl bg-background border border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Category Badge */}
              {"organization" in project && project.organization && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium border border-border">
                  <Building2 className="w-3 h-3 text-primary" />
                  {project.organization}
                </div>
              )}

              {/* Device Mockups */}
              <div className="relative bg-gradient-to-br from-secondary/50 to-secondary/20 overflow-hidden">
                <DeviceMockup
                  desktopImages={project.desktopImages}
                  mobileImages={project.mobileImages}
                  title={project.title}
                />

                {/* Hover Overlay */}
                {project.category !== "organization" && (
                  <div
                    className={`absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-background rounded-full hover:scale-110 transition-transform"
                        aria-label="View live site"
                        target="blank"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-background rounded-full hover:scale-110 transition-transform"
                        aria-label="View source code"
                        target="blank"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
