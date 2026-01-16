import {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  memo,
  Suspense,
  lazy,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User,
  Building2,
  Code2,
  Server,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FilterButton } from "./FilterButton";
import {
  useProjectFilters,
  ProjectCategory,
  TechFilter,
} from "@/hooks/useProjectFilters";

// Lazy load ProjectCard for code splitting
const ProjectCard = lazy(() =>
  import("./ProjectCard").then((module) => ({ default: module.ProjectCard }))
);

gsap.registerPlugin(ScrollTrigger);

// Loading skeleton for lazy loaded cards
const ProjectCardSkeleton = memo(() => (
  <div className="animate-pulse rounded-2xl bg-secondary/40 border border-border/50">
    <div className="grid lg:grid-cols-2 gap-0">
      {/* Content skeleton */}
      <div className="p-8 lg:p-10 space-y-6 order-2 lg:order-1">
        <div className="h-4 bg-secondary rounded w-1/4" />
        <div className="h-8 bg-secondary rounded w-3/4" />
        <div className="h-4 bg-secondary rounded w-1/2" />
        <div className="bg-secondary/50 rounded-xl p-5 space-y-3">
          <div className="h-16 bg-secondary rounded" />
          <div className="h-4 bg-secondary rounded w-1/3" />
          <div className="space-y-1">
            <div className="h-3 bg-secondary rounded w-full" />
            <div className="h-3 bg-secondary rounded w-4/5" />
            <div className="h-3 bg-secondary rounded w-3/5" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-secondary rounded-full" />
          <div className="h-6 w-16 bg-secondary rounded-full" />
          <div className="h-6 w-16 bg-secondary rounded-full" />
        </div>
      </div>
      {/* Mockup skeleton */}
      <div className="relative min-h-[400px] lg:min-h-[500px] bg-secondary/30 p-10 order-1 lg:order-2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-secondary/50 rounded-xl aspect-video" />
          <div className="absolute -bottom-4 -right-4 w-24 lg:w-32 aspect-[9/16] bg-secondary/50 rounded-xl" />
        </div>
      </div>
    </div>
  </div>
));

ProjectCardSkeleton.displayName = "ProjectCardSkeleton";

export const Projects = memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const {
    activeCategory,
    activeTechFilter,
    projectCounts,
    filteredProjects,
    handleCategoryChange,
    handleTechFilterChange,
    clearFilters,
  } = useProjectFilters();

  // Memoized categories config
  const categories = useMemo(
    () => [
      {
        key: "all" as ProjectCategory,
        label: "All Projects",
        icon: null,
        count: projectCounts.all,
      },
      {
        key: "personal" as ProjectCategory,
        label: "Personal",
        icon: <User className="w-4 h-4" />,
        count: projectCounts.personal,
      },
      {
        key: "organization" as ProjectCategory,
        label: "Organization",
        icon: <Building2 className="w-4 h-4" />,
        count: projectCounts.organization,
      },
    ],
    [projectCounts]
  );

  // Memoized tech filters config
  const techFilters = useMemo(
    () => [
      {
        key: "all" as TechFilter,
        label: "All Stack",
        icon: <Layers className="w-4 h-4" />,
        count: projectCounts.all,
      },
      {
        key: "frontend" as TechFilter,
        label: "Frontend",
        icon: <Code2 className="w-4 h-4" />,
        count: projectCounts.frontend,
      },
      {
        key: "backend" as TechFilter,
        label: "Backend",
        icon: <Server className="w-4 h-4" />,
        count: projectCounts.backend,
      },
      {
        key: "fullstack" as TechFilter,
        label: "Full Stack",
        icon: <Layers className="w-4 h-4" />,
        count: projectCounts.fullstack,
      },
    ],
    [projectCounts]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 md:py-16 bg-secondary/20"
    >
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-6">
          <span className="text-primary font-medium text-xs uppercase tracking-widest mb-2 block">
            My Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            A showcase of my best work with technologies and key features.
          </p>
        </div>

        {/* Filter Tabs - Compact */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6">
          <div className="inline-flex bg-secondary/50 rounded-full p-1 gap-0.5 justify-center flex-wrap">
            {categories.map((cat) => (
              <FilterButton
                key={cat.key}
                isActive={activeCategory === cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                icon={cat.icon}
                label={cat.label}
                count={cat.count}
              />
            ))}
          </div>
          <div className="inline-flex bg-secondary/50 rounded-full p-1 gap-0.5 justify-center flex-wrap">
            {techFilters.map((filter) => (
              <FilterButton
                key={filter.key}
                isActive={activeTechFilter === filter.key}
                onClick={() => handleTechFilterChange(filter.key)}
                icon={filter.icon}
                label={filter.label}
                count={filter.count}
              />
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div ref={projectsRef} className="space-y-4">
          <Suspense fallback={<ProjectCardSkeleton />}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Suspense>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-10 bg-secondary/20 rounded-xl border border-border/50">
            <p className="text-muted-foreground">
              No projects found matching your filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-3 text-primary hover:underline text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/projects">
            <Button variant="outline" size="default" className="group px-6">
              View All Projects
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
