import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories, techIcons, SkillStack, skillIcons } from '@/lib/data';
import { Code2, Server, Wrench, Layers, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type SkillFilter = 'all' | SkillStack;

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const skillCardsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all');

  const filterCategories: { key: SkillFilter; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { key: 'frontend', label: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
    { key: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { key: 'tools', label: 'Tools & DevOps', icon: <Wrench className="w-4 h-4" /> },
  ];

  const allSkills = activeFilter === 'all'
    ? skillCategories.flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.title })))
    : skillCategories
        .filter(cat => cat.stack === activeFilter)
        .flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.title })));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      const cards = skillCardsRef.current?.querySelectorAll('.skill-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
            delay: index * 0.05,
          }
        );
      });

      const marqueeContent = marqueeRef.current?.querySelector('.marquee-content');
      if (marqueeContent) {
        gsap.to(marqueeContent, {
          xPercent: -50,
          duration: 25,
          ease: 'none',
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="skills" ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-10">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            My Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-secondary/50 rounded-full p-1.5 gap-1 flex-wrap justify-center">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={skillCardsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-6 mb-16">
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="skill-card group relative p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Skill Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 mb-4 relative">
                  <div className="absolute inset-0 rounded-xl bg-secondary/80 group-hover:bg-primary/10 transition-colors duration-300" />
                  <div className="relative w-full h-full flex items-center justify-center p-3">
                    <img
                      src={skillIcons[skill.name] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name.toLowerCase()}/${skill.name.toLowerCase()}-original.svg`}
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                      }}
                    />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Years of Experience */}
                <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-xs md:text-sm font-medium">
                    {skill.years} {skill.years === 1 ? 'year' : 'years'}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div ref={marqueeRef} className="relative overflow-hidden py-2">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="marquee-content flex gap-16 whitespace-nowrap">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <span
                key={index}
                className="text-3xl md:text-4xl font-display font-bold text-muted-foreground/15 hover:text-primary/30 transition-colors duration-300 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
