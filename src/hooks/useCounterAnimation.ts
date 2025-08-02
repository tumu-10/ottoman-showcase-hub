import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
}

export const useCounterAnimation = ({ 
  end, 
  duration = 2000, 
  start = 0 
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const startTime = Date.now();
          const increment = (end - start) / (duration / 16);
          
          const timer = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            if (progress === 1) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start + (end - start) * progress));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, start, duration, isVisible]);

  return { count, countRef, isVisible };
};