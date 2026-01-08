import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData, projects } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <div>
            <div ref={headingRef}>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                About Me
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                {aboutData.heading}
                <br />
                <span className="text-gradient">{aboutData.headingHighlight}</span>
              </h2>
            </div>

            <div ref={contentRef} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index} className="relative pl-4 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
                  {paragraph}
                </p>
              ))}
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{aboutData.yearsOfExperience}+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{projects && projects.length}+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {aboutData.highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                style={{ 
                  perspective: '1000px',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
