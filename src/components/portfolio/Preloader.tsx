import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Animate out after loading
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: onComplete
      });
      gsap.to('.preloader-content', {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="preloader-content flex flex-col items-center gap-8">
        {/* Logo/Name */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            <span className="text-foreground">Arun Jawlia</span>
            <span className="text-primary">.</span>
          </h1>
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-muted" />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
          {/* Inner pulse */}
          <div className="absolute inset-3 rounded-full bg-primary/20 animate-pulse" />
        </div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-sm text-muted-foreground font-mono tracking-widest uppercase">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
};
