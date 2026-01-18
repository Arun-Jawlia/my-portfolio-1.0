import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitCommit, GitPullRequest, Star, Users, Building2, User } from 'lucide-react';
import { githubData } from '@/lib/data';
import { FaGithub } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ icon: Icon, label, value, delay }: { icon: any; label: string; value: number; delay: number }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="stat-card group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-sm text-muted-foreground font-medium">{label}</span>
        </div>
        <p className="text-3xl font-bold text-foreground">{count.toLocaleString()}</p>
      </div>
    </div>
  );
};

const OrganizationCard = ({ org, index }: { org: typeof githubData.organizations[0]; index: number }) => {
  return (
    <div
      className="org-card group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={org.logo}
            alt={org.name}
            className="w-12 h-12 rounded-xl border border-border/50 object-cover"
          />
          <div>
            <h4 className="font-semibold text-foreground">{org.name}</h4>
            <p className="text-sm text-muted-foreground">{org.role}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">{org.commits}</p>
            <p className="text-xs text-muted-foreground">Commits</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">{org.pullRequests}</p>
            <p className="text-xs text-muted-foreground">PRs</p>
          </div>
          {/* <div className="text-center">
            <p className="text-xl font-bold text-foreground">{org.issues}</p>
            <p className="text-xs text-muted-foreground">Issues</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export const GitHub = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.org-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.org-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="github" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headingRef} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <FaGithub className="w-4 h-4" />
            Open Source
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            GitHub Contributions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My open source journey and contributions to the developer community
          </p>
        </div>

        {/* Personal Stats */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <User className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Personal Contributions</h3>
          </div>
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <StatCard icon={Users} label="Repositories" value={githubData.personal.repositories} delay={400} />
            <StatCard icon={GitCommit} label="Commits" value={githubData.personal.commits} delay={0} />
            <StatCard icon={GitPullRequest} label="Pull Requests" value={githubData.personal.pullRequests} delay={100} />
            {/* <StatCard icon={FaGithub} label="Issues" value={githubData.personal.issues} delay={200} /> */}
            <StatCard icon={Star} label="Stars Earned" value={githubData.personal.stars} delay={200} />
          </div>
        </div>

        {/* Organization Contributions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Organization Contributions</h3>
          </div>
          <div className="org-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {githubData.organizations.map((org, index) => (
              <OrganizationCard key={org.name} org={org} index={index} />
            ))}
          </div>
        </div>

        {/* View Profile Button */}
        <div className="text-center mt-12">
          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};
