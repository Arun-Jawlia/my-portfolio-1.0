import { useEffect, memo, useMemo, Suspense, lazy } from 'react';
import { User, Building2, ArrowLeft, Code2, Server, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/portfolio/Navbar';
import { Footer } from '@/components/portfolio/Footer';
import { ScrollToTop } from '@/components/portfolio/ScrollToTop';
import { FilterButton } from '@/components/portfolio/FilterButton';
import { useProjectFilters, ProjectCategory, TechFilter } from '@/hooks/useProjectFilters';
import { projects } from '@/lib/data';

// Lazy load ProjectCard for code splitting
const ProjectCard = lazy(() =>
  import('@/components/portfolio/ProjectCard').then(module => ({ default: module.ProjectCard }))
);

// Loading skeleton for lazy loaded cards
const ProjectCardSkeleton = memo(() => (
  <div className="animate-pulse rounded-3xl bg-secondary/40 border border-border/50 min-h-[400px]">
    <div className="grid lg:grid-cols-2 gap-0">
      <div className="p-8 lg:p-10 space-y-4">
        <div className="h-6 bg-secondary rounded w-1/4" />
        <div className="h-8 bg-secondary rounded w-3/4" />
        <div className="h-20 bg-secondary rounded" />
        <div className="flex gap-2">
          <div className="h-8 bg-secondary rounded w-20" />
          <div className="h-8 bg-secondary rounded w-20" />
        </div>
      </div>
      <div className="bg-secondary/30 min-h-[300px]" />
    </div>
  </div>
));

ProjectCardSkeleton.displayName = 'ProjectCardSkeleton';

const Projects = memo(() => {
  const {
    activeCategory,
    activeTechFilter,
    projectCounts,
    filteredProjects,
    handleCategoryChange,
    handleTechFilterChange,
    clearFilters,
  } = useProjectFilters();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Memoized categories config
  const categories = useMemo(() => [
    { key: 'all' as ProjectCategory, label: 'All Projects', icon: null, count: projectCounts.all },
    { key: 'personal' as ProjectCategory, label: 'Personal', icon: <User className="w-4 h-4" />, count: projectCounts.personal },
    { key: 'organization' as ProjectCategory, label: 'Organization', icon: <Building2 className="w-4 h-4" />, count: projectCounts.organization },
  ], [projectCounts]);

  // Memoized tech filters config
  const techFilters = useMemo(() => [
    { key: 'all' as TechFilter, label: 'All Stack', icon: <Layers className="w-4 h-4" />, count: projectCounts.all },
    { key: 'frontend' as TechFilter, label: 'Frontend', icon: <Code2 className="w-4 h-4" />, count: projectCounts.frontend },
    { key: 'backend' as TechFilter, label: 'Backend', icon: <Server className="w-4 h-4" />, count: projectCounts.backend },
    { key: 'fullstack' as TechFilter, label: 'Full Stack', icon: <Layers className="w-4 h-4" />, count: projectCounts.fullstack },
  ], [projectCounts]);

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <ScrollToTop />

      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              All <span className="text-gradient">Projects: {projects.length}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A comprehensive collection of my work, featuring detailed case studies with technologies, features, and live demos.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
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

            {/* Tech Stack Filter */}
            <div className="flex flex-wrap gap-2">
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
          <div className="space-y-8">
            <Suspense fallback={
              <>
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
              </>
            }>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </Suspense>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-secondary/20 rounded-2xl border border-border/50">
              <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
