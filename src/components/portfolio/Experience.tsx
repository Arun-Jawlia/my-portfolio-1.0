import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react";
import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const educationExperiences = experiences.filter(
    (exp) => exp.type === "education"
  );

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
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Work cards animation
      const workCards = workRef.current?.querySelectorAll(".experience-card");
      workCards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: index * 0.1,
          }
        );
      });

      // Education cards animation
      const eduCards =
        educationRef.current?.querySelectorAll(".education-card");
      eduCards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: index * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-secondary/20"
    >
      <div className="container-custom">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-10">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            My Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-3">
            A timeline of my professional growth and academic achievements
          </p>
        </div>

        {/* Work Experience Section */}
        <div ref={workRef} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">
                Work Experience
              </h3>
              <p className="text-muted-foreground text-sm">
                Professional journey & achievements
              </p>
            </div>
          </div>

          {/* Work Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <div key={index} className="experience-card relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block group-hover:scale-125 transition-transform" />

                  {/* Card */}
                  <div className="md:ml-16 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Left - Main Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                          {index === 0 && (
                            <Badge className="text-xs bg-primary/20 text-primary border-primary/30">
                              Current
                            </Badge>
                          )}
                        </div>

                        <div>
                          <h4 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-muted-foreground flex items-center gap-1.5 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.company}
                          </p>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Right - Achievements */}
                      <div className="lg:w-72 space-y-2 p-4 rounded-xl bg-secondary/50 border border-border/50">
                        <div className="flex items-center gap-2 text-sm font-medium mb-3">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Key Achievements
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm flex items-start gap-2"
                            >
                              <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div ref={educationRef}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
              <p className="text-muted-foreground text-sm">
                Academic background & qualifications
              </p>
            </div>
          </div>

          {/* Education Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationExperiences.map((edu, index) => (
              <div
                key={index}
                className="education-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>

                  {/* Period */}
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {edu.period}
                  </Badge>

                  {/* Title & Institution */}
                  <div>
                    <h4 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {edu.company}
                    </p>
                  </div>

                  {/* Description */}
                  {/* <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p> */}

                  {/* Achievements */}
                  {edu && edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
