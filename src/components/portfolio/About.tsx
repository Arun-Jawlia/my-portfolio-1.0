import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutData, projects } from "@/lib/data";

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
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // // Cards stagger animation
      // const cards = cardsRef.current?.children;
      // if (cards) {
      //   gsap.fromTo(
      //     cards,
      //     { y: 100, opacity: 0, rotateX: -15 },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       rotateX: 0,
      //       duration: 0.8,
      //       stagger: 0.15,
      //       ease: "power3.out",
      //       scrollTrigger: {
      //         trigger: cardsRef.current,
      //         start: "top 75%",
      //         toggleActions: "play none none reverse",
      //       },
      //     }
      //   );
      // }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-20 bg-secondary/20 relative overflow-hidden"
    >
      {/* Cute floating decorations */}
      <div
        className="absolute top-10 left-[10%] w-3 h-3 bg-primary/40 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-20 right-[15%] w-2 h-2 bg-primary/30 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-16 left-[20%] w-2.5 h-2.5 bg-primary/35 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-base">✨</span>
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {aboutData.heading}{" "}
            <span className="text-gradient">{aboutData.headingHighlight}</span>
          </h2>
        </div>

        {/* Main content - compact card */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="bg-background/60 backdrop-blur-sm rounded-3xl border border-border p-6 md:p-8 mb-8">
            {/* Bio text */}
            <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats - inline cute pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-lg">🚀</span>
                <span className="font-semibold text-primary">{aboutData.yearsOfExperience}</span>
                <span className="text-sm text-muted-foreground">Years</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-lg">💼</span>
                <span className="font-semibold text-primary">{projects.length}+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
            </div>
          </div>

          {/* Highlight cards - compact grid */}
          <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {aboutData.highlights.map(
              ({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group p-4 rounded-2xl bg-background/70 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-center"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
