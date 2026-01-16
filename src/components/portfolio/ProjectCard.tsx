import { memo, useMemo, useState, useCallback } from "react";
import { ExternalLink, Github, ChevronRight, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TechDetail {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  desktopImages: string[];
  mobileImages?: string[];
  videoUrl?: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: "personal" | "organization";
  organization?: string;
  techStack: "frontend" | "backend" | "fullstack";
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const desktopImage = useMemo(
    () => project.desktopImages.find((img) => img && img.trim() !== "") || "",
    [project.desktopImages]
  );

  const validMobileImages = useMemo(
    () =>
      (project.mobileImages || []).filter((img) => img && img.trim() !== ""),
    [project.mobileImages]
  );

  const hasMultipleMobileImages = validMobileImages.length > 1;

  const nextMobileImage = useCallback(() => {
    setCurrentMobileIndex((prev) => (prev + 1) % validMobileImages.length);
  }, [validMobileImages.length]);

  return (
    <div className="project-card group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Content Section - Left */}
        <div className="p-5 lg:p-6 flex flex-col justify-between order-2 lg:order-1">
          <div className="space-y-3">
            {/* Featured Label */}
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold text-xs uppercase tracking-widest">
                Project {index + 1}
              </span>
              {project.organization && (
                <Badge
                  variant="outline"
                  className="text-[10px] flex items-center gap-1 border-primary/30 text-primary py-0.5"
                >
                  <Building2 className="w-2.5 h-2.5" />
                  {project.organization}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h3 className="font-display text-xl lg:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {/* Description Card - Compact */}
            <div className="bg-secondary/50 rounded-lg p-3 border border-border/30 space-y-2">
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Features - Show less */}
              {project.features.length > 0 && (
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-[11px] text-muted-foreground flex items-start gap-1.5"
                    >
                      <ChevronRight className="w-2.5 h-2.5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tech Stack Badges - Compact */}
            {project && project.tags && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 5).map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="px-2 py-0.5 text-[10px] border-primary/40 text-primary bg-primary/5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons - Compact */}
          <div className="flex gap-2 mt-4">
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button size="sm" asChild className="h-8 text-xs">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  Demo
                </a>
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="h-8 text-xs"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-3 h-3 mr-1.5" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl === "#" && project.githubUrl === "#" && (
              <Badge variant="secondary" className="text-[10px] py-1 px-2">
                Private
              </Badge>
            )}
          </div>
        </div>

        {/* Device Mockups Section - Right */}
        <div className="relative min-h-[240px] lg:min-h-[280px] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-4 lg:p-6 flex items-center justify-center order-1 lg:order-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          {/* Desktop Mockup - Compact */}
          <div className="relative w-full max-w-sm">
            <div className="relative bg-secondary/80 rounded-lg overflow-hidden shadow-xl border border-border/50">
              {/* Browser Chrome - Smaller */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary border-b border-border/50">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-2">
                  <div className="bg-background/50 rounded px-2 py-0.5 text-[10px] text-muted-foreground text-center truncate">
                    {project.liveUrl !== "#"
                      ? project.liveUrl
                      : project.title.toLowerCase().replace(/\s+/g, "-") +
                        ".com"}
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-background/20 relative overflow-hidden">
                {desktopImage ? (
                  <img
                    src={desktopImage}
                    alt={`${project.title} desktop view`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-primary/10">
                    <span className="font-display text-lg font-bold text-primary/80 text-center px-4">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Mockup - Smaller */}
            <div className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 w-16 lg:w-20 z-10">
              <div className="relative bg-secondary/90 rounded-lg overflow-hidden shadow-lg border border-border/50">
                <div className="aspect-[9/16] bg-background/20 relative overflow-hidden">
                  {validMobileImages.length > 0 ? (
                    <>
                      <img
                        src={validMobileImages[currentMobileIndex]}
                        alt={`${project.title} mobile view`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onClick={
                          hasMultipleMobileImages ? nextMobileImage : undefined
                        }
                      />
                      {hasMultipleMobileImages && (
                        <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 flex gap-0.5">
                          {validMobileImages.map((_, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                "w-0.5 h-0.5 rounded-full",
                                idx === currentMobileIndex
                                  ? "bg-primary"
                                  : "bg-background/40"
                              )}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-primary/10 p-1">
                      <span className="font-display text-[6px] font-bold text-primary/80 text-center">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";
