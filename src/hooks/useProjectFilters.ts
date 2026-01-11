import { useState, useMemo, useCallback } from 'react';
import { projects, TechStack } from '@/lib/data';

export type ProjectCategory = 'all' | 'personal' | 'organization';
export type TechFilter = 'all' | TechStack;

export const useProjectFilters = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeTechFilter, setActiveTechFilter] = useState<TechFilter>('all');

  // Memoized project counts - computed once
  const projectCounts = useMemo(() => ({
    all: projects.length,
    personal: projects.filter(p => p.category === 'personal').length,
    organization: projects.filter(p => p.category === 'organization').length,
    frontend: projects.filter(p => p.techStack === 'frontend').length,
    backend: projects.filter(p => p.techStack === 'backend').length,
    fullstack: projects.filter(p => p.techStack === 'fullstack').length,
  }), []);

  // Memoized filtered projects
  const filteredProjects = useMemo(() => 
    projects.filter(p => {
      const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
      const techMatch = activeTechFilter === 'all' || p.techStack === activeTechFilter;
      return categoryMatch && techMatch;
    }), 
    [activeCategory, activeTechFilter]
  );

  // Stable callbacks
  const handleCategoryChange = useCallback((category: ProjectCategory) => {
    setActiveCategory(category);
  }, []);

  const handleTechFilterChange = useCallback((filter: TechFilter) => {
    setActiveTechFilter(filter);
  }, []);

  const clearFilters = useCallback(() => {
    setActiveCategory('all');
    setActiveTechFilter('all');
  }, []);

  return {
    activeCategory,
    activeTechFilter,
    projectCounts,
    filteredProjects,
    handleCategoryChange,
    handleTechFilterChange,
    clearFilters,
  };
};
