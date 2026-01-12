import { ArrowUpRight, Building2, CheckCircle2 } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

import { DeviceMockup } from './DeviceMockup';

interface TechDetail {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    features?: string[];
    techDetails?: TechDetail[];
    tags: string[];
    desktopImages: string[];
    mobileImages: string[];
    liveUrl: string;
    githubUrl: string;
    category: 'personal' | 'organization';
    organization?: string;
    techStack: 'frontend' | 'backend' | 'fullstack';
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isReversed = index % 2 === 1;

  return (
    <div className="project-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/40 to-secondary/10 border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20">
      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Left Side - Project Details */}
        <div className={`p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Organization Badge */}
          {project.organization && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary mb-4 w-fit">
              <Building2 className="w-3.5 h-3.5" />
              {project.organization}
            </div>
          )}

          {/* Tech Stack Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-muted-foreground mb-4 w-fit capitalize">
            {project.techStack} Project
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Icons */}
          {project.techDetails && project.techDetails.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.techDetails.map((tech) => (
                  <div
                    key={tech.name}
                    className="group/tech flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-full border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <ArrowUpRight className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 hover:scale-105 transition-all duration-300 border border-border"
            >
              <FaGithub className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>

        {/* Right Side - Device Mockups */}
        <div className={`relative bg-gradient-to-br from-secondary/30 to-transparent overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />

          <div className="relative z-10 p-6 lg:p-10 w-full">
            <DeviceMockup
              desktopImages={project.desktopImages}
              mobileImages={project.mobileImages}
              title={project.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};