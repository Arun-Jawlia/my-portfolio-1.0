import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DEFAULT_DESKTOP_IMAGE, DEFAULT_MOBILE_IMAGE } from '@/lib/data';

interface DeviceMockupProps {
  desktopImages: string[];
  mobileImages: string[];
  title: string;
}

export const DeviceMockup = ({ desktopImages, mobileImages, title }: DeviceMockupProps) => {
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Use default images if arrays are empty or contain invalid URLs
  const validDesktopImages = desktopImages.length > 0 ? desktopImages : [DEFAULT_DESKTOP_IMAGE];
  const validMobileImages = mobileImages.length > 0 ? mobileImages : [DEFAULT_MOBILE_IMAGE];

  const hasMultipleDesktop = validDesktopImages.length > 1;
  const hasMultipleMobile = validMobileImages.length > 1;

  const nextDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev + 1) % validDesktopImages.length);
  };

  const prevDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev - 1 + validDesktopImages.length) % validDesktopImages.length);
  };

  const nextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % validMobileImages.length);
  };

  const prevMobile = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + validMobileImages.length) % validMobileImages.length);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback: string) => {
    e.currentTarget.src = fallback;
  };

  return (
    <div className="relative flex items-end justify-center gap-4 p-4 h-64">
      {/* Desktop Mockup */}
      <div className="relative flex-1 max-w-[280px]">
        {/* Desktop Frame */}
        <div className="relative bg-secondary rounded-lg border-2 border-border overflow-hidden shadow-xl">
          {/* Screen Bezel */}
          <div className="bg-secondary/80 px-2 py-1 flex items-center gap-1.5 border-b border-border">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-background/50 rounded text-[8px] text-muted-foreground px-2 py-0.5 text-center truncate">
                {title}
              </div>
            </div>
          </div>
          
          {/* Screen Content */}
          <div className="relative aspect-video bg-background overflow-hidden">
            <img
              src={validDesktopImages[currentDesktopIndex]}
              alt={`${title} desktop view`}
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={(e) => handleImageError(e, DEFAULT_DESKTOP_IMAGE)}
            />
            
            {/* Carousel Controls */}
            {hasMultipleDesktop && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevDesktop(); }}
                  className="absolute left-1 top-1/2 -translate-y-1/2 p-1 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextDesktop(); }}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                  {validDesktopImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentDesktopIndex(idx); }}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-colors",
                        idx === currentDesktopIndex ? "bg-primary" : "bg-background/60"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Desktop Stand */}
        <div className="mx-auto w-12 h-3 bg-secondary border-x-2 border-b-2 border-border" />
        <div className="mx-auto w-20 h-1.5 bg-secondary border-2 border-border rounded-b" />
      </div>

      {/* Mobile Mockup */}
      <div className="relative w-16 flex-shrink-0">
        {/* Phone Frame */}
        <div className="relative bg-secondary rounded-xl border-2 border-border overflow-hidden shadow-xl">
          {/* Notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-border rounded-full z-10" />
          
          {/* Screen Content */}
          <div className="relative aspect-[9/19] bg-background overflow-hidden pt-3">
            <img
              src={validMobileImages[currentMobileIndex]}
              alt={`${title} mobile view`}
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={(e) => handleImageError(e, DEFAULT_MOBILE_IMAGE)}
            />
            
            {/* Carousel Controls */}
            {hasMultipleMobile && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevMobile(); }}
                  className="absolute left-0.5 top-1/2 -translate-y-1/2 p-0.5 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-2 h-2" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextMobile(); }}
                  className="absolute right-0.5 top-1/2 -translate-y-1/2 p-0.5 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-2 h-2" />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                  {validMobileImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentMobileIndex(idx); }}
                      className={cn(
                        "w-1 h-1 rounded-full transition-colors",
                        idx === currentMobileIndex ? "bg-primary" : "bg-background/60"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-border rounded-full" />
        </div>
      </div>
    </div>
  );
};
