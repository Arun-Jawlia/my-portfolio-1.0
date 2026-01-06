import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-secondary/30">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 origin-left"
        style={{ 
          transform: `scaleX(${progress / 100})`,
          transition: 'transform 0.1s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />
    </div>
  );
};
