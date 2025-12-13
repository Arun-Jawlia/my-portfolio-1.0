import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning complex problems into simple solutions',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Constantly adapting to new technologies',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams',
  },
];

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
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <div>
            <div ref={headingRef}>
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
                About Me
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Crafting Digital
                <br />
                <span className="text-gradient">Experiences</span>
              </h2>
            </div>

            <div ref={contentRef} className="space-y-6 text-muted-foreground text-lg">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience
                building web applications that make a difference. I specialize in
                creating seamless user experiences using modern technologies like
                React, Node.js, and cloud platforms.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work on
                the internet. Today, I transform that curiosity into innovative
                solutions that help businesses grow and users succeed.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge through
                technical writing and mentoring.
              </p>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover-lift cursor-default"
                style={{ perspective: '1000px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
