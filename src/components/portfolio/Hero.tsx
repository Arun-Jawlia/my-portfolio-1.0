import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown, Download, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks, skillCategories, skillIcons } from "@/lib/data";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const skillsMarqueeRef = useRef<HTMLDivElement>(null);
  const allSkills = skillCategories.flatMap(cat => cat.skills);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, skewY: 7 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power4.out" },
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );

      // Floating decoration animation
      gsap.to(decorRef.current, {
        y: -30,
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      // Skills marquee animation
      const marqueeContent = skillsMarqueeRef.current?.querySelector('.skills-marquee-content');
      if (marqueeContent) {
        gsap.to(marqueeContent, {
          xPercent: -50,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, "_blank");
  };

  const handleViewCertificate = () => {
    window.open(personalInfo.certificateUrl, "_blank");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          {personalInfo.availableForWork && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for work
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-gradient">{personalInfo.name}</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -skew-x-12" />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A passionate{" "}
            <span className="text-foreground font-medium">
              {personalInfo.title}
            </span>{" "}
            crafting beautiful digital experiences with modern technologies.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="relative inline-block mb-16 group/cta">
            <Button size="lg" className="px-8 py-6 text-base font-medium">
              Get to Know Me
              <ChevronDown className="ml-2 w-4 h-4 group-hover/cta:rotate-180 transition-transform duration-300" />
            </Button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover/cta:opacity-100 group-hover/cta:visible transition-all duration-300 z-20">
              <div className="flex flex-col gap-2 p-2 rounded-xl border border-border bg-card shadow-lg min-w-[200px]">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </button>
                <button
                  onClick={handleViewCertificate}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Award className="w-4 h-4" />
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Decoration */}
      <div
        ref={decorRef}
        className="absolute bottom-20 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32"
      >
        <div className="w-full h-full border-2 border-primary/30 rounded-2xl rotate-12" />
        <div className="absolute inset-4 bg-primary/10 rounded-xl -rotate-6" />
      </div>
      {/* Skills Slider */}
      <div className="absolute bottom-3 left-0 right-0 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div ref={skillsMarqueeRef} className="overflow-hidden">
          <div className="skills-marquee-content flex gap-6 whitespace-nowrap w-max">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm"
              >
                <img
                  src={skillIcons[skill.name] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name.toLowerCase()}/${skill.name.toLowerCase()}-original.svg`}
                  alt={skill.name}
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                  }}
                />
                <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div> */}
    </section>
  );
};
