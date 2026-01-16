import { useState, memo, useCallback } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
}

export const OptimizedImage = memo(
  ({
    src,
    alt,
    fallbackTitle,
    className = "",
    containerClassName = "",
    loading = "lazy",
  }: OptimizedImageProps) => {
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleError = useCallback(() => {
      setHasError(true);
    }, []);

    const handleLoad = useCallback(() => {
      setIsLoaded(true);
    }, []);

    if (hasError || !src) {
      // Show title placeholder when image fails to load or is missing
      return (
        <div
          className={cn(
            "flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5",
            containerClassName
          )}
        >
          <div className="text-center p-4">
            <span className="font-display text-lg md:text-xl font-bold text-primary/80 line-clamp-3">
              {fallbackTitle || alt}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        {/* Skeleton loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-secondary/50 animate-pulse" />
        )}
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onError={handleError}
          onLoad={handleLoad}
          decoding="async"
        />
      </div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";
