import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ottomanLogo from "@/assets/ICON-8.png";
import textLogo from "@/assets/WORDMARK-8.png";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-gradient-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-gradient-secondary rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-scale-in">
          <div className="w-24 h-24 mx-auto mb-4 border border-primary rounded-2xl flex items-center justify-center shadow-elegant animate-bounce">
             <img 
              src={ottomanLogo} 
              alt="Ottoman Enterprises Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 gradient-text animate-fade-in delay-300">
            Ottoman Enterprises
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out rounded-full shadow-glow"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            Loading... {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-8 h-8 bg-primary/20 rounded-full animate-ping delay-1000" />
        <div className="absolute -top-10 -right-16 w-6 h-6 bg-accent/30 rounded-full animate-ping delay-1500" />
        <div className="absolute -bottom-16 -left-12 w-10 h-10 bg-primary-glow/20 rounded-full animate-ping delay-2000" />
      </div>
    </div>
  );
}