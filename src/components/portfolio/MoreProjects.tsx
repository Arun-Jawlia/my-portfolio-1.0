import { memo } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { moreProjects, personalInfo } from '@/lib/data';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

interface MiniProject {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const MiniProjectCard = memo(({ project }: { project: MiniProject }) => (
    <div className="group p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                </h3>
                {project.subtitle && (
                    <p className="text-xs text-primary/70 font-medium mt-0.5">
                        {project.subtitle}
                    </p>
                )}
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 4 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            +{project.tags.length - 4}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex gap-2 shrink-0">
                {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View code"
                    >
                        <FaGithub className="w-4 h-4" />
                    </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
        </div>
    </div>
));

MiniProjectCard.displayName = 'MiniProjectCard';

export const MoreProjects = memo(() => {
    if (moreProjects.length === 0) return null;

    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        More <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Other projects I've worked on
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {moreProjects.map((project) => (
                        <MiniProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to={personalInfo.githubUrl} target='_blank'>
                    <Button variant="outline" size="default" className="group px-6">
                        View All Projects
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </section>
    );
});

MoreProjects.displayName = 'MoreProjects';
