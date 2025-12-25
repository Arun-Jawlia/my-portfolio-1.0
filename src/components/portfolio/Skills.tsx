import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories, techIcons } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const skillBarsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
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

      // Skill bars animation
      const categories = skillBarsRef.current?.querySelectorAll('.skill-category');
      categories?.forEach((category, index) => {
        gsap.fromTo(
          category,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: category,
              start: 'top 85%',
            },
          }
        );

        // Animate progress bars
        const bars = category.querySelectorAll('.skill-bar-fill');
        bars.forEach((bar) => {
          const width = bar.getAttribute('data-width');
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: `${width}%`,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
              },
            }
          );
        });
      });

      // Infinite marquee animation
      const marqueeContent = marqueeRef.current?.querySelector('.marquee-content');
      if (marqueeContent) {
        gsap.to(marqueeContent, {
          xPercent: -50,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            My Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div ref={skillBarsRef} className="grid md:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-primary rounded-full"
                        data-width={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div ref={marqueeRef} className="overflow-hidden py-8 border-y border-border">
          <div className="marquee-content flex gap-12 whitespace-nowrap">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <span
                key={index}
                className="text-4xl md:text-5xl font-display font-bold text-muted-foreground/20 hover:text-primary/40 transition-colors cursor-default"
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
