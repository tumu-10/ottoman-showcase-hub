import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ottomanLogo from '@/assets/ottoman-logo.png';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const texts = ['Initializing', 'Loading Assets', 'Preparing Experience', 'Almost Ready'];
    let textIndex = 0;
    
    const textTimer = setInterval(() => {
      setLoadingText(texts[textIndex]);
      textIndex = (textIndex + 1) % texts.length;
    }, 800);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(textTimer);
          setLoadingText('Welcome');
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 1200);
          return 100;
        }
        return prev + Math.random() * 12 + 2;
      });
    }, 120);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-background/90 flex items-center justify-center overflow-hidden">
      {/* Flowing Vector Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-10 left-10 w-96 h-96 animate-float" viewBox="0 0 400 800">
          <path
            d="M50 50 Q200 200 150 400 Q100 600 250 750"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M100 100 Q300 250 200 450 Q150 650 300 800"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse delay-300"
          />
        </svg>
        
        <svg className="absolute bottom-10 right-10 w-96 h-96 animate-float delay-1000" viewBox="0 0 400 800">
          <path
            d="M350 50 Q200 200 250 400 Q300 600 150 750"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            fill="none"
            className="animate-pulse delay-500"
          />
        </svg>
      </div>

      {/* Geometric Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 flex space-x-4 animate-float delay-300">
          <div className="w-6 h-6 border-2 border-secondary rounded-full animate-pulse" />
          <div className="w-4 h-4 bg-secondary rounded-full animate-pulse delay-200" />
          <div className="w-5 h-5 border border-primary rounded-full animate-pulse delay-400" />
        </div>
        
        <div className="absolute bottom-32 right-1/4 flex space-x-3 animate-float delay-700">
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-secondary animate-pulse" />
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary animate-pulse delay-300" />
          <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-b-[11px] border-l-transparent border-r-transparent border-b-secondary animate-pulse delay-600" />
        </div>
      </div>

      {/* Dots Pattern */}
      <div className="absolute top-1/3 left-20 grid grid-cols-3 gap-3 animate-float delay-500">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full animate-pulse",
              i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-secondary" : "border border-primary"
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      <div className="relative text-center">
        {/* Logo Animation */}
        <div className="mb-12 animate-scale-in">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img 
              src={ottomanLogo} 
              alt="Ottoman Enterprises" 
              className="w-full h-full object-contain animate-pulse-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl font-bold font-poppins gradient-text animate-text-reveal">
              Ottoman Enterprises
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in delay-500 font-poppins">
              Professional Equipment Solutions
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-80 mx-auto space-y-6">
          {/* Circular Progress */}
          <div className="relative w-24 h-24 mx-auto">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                fill="none"
                className="opacity-30"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: `${2 * Math.PI * 10}`,
                  strokeDashoffset: `${2 * Math.PI * 10 * (1 - progress / 100)}`,
                  transition: 'stroke-dashoffset 0.3s ease-out'
                }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold font-poppins">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out rounded-full shadow-glow"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-poppins animate-pulse">
                {loadingText}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute -top-32 -left-32 w-12 h-12 opacity-20">
          <div className="w-full h-full border-2 border-secondary rounded-lg animate-spin-slow" />
        </div>
        <div className="absolute -top-20 -right-24 w-8 h-8 opacity-30">
          <div className="w-full h-full bg-primary rounded-full animate-bounce delay-1000" />
        </div>
        <div className="absolute -bottom-28 -left-20 w-10 h-10 opacity-25">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-secondary animate-pulse delay-1500" />
        </div>
      </div>
    </div>
  );
}