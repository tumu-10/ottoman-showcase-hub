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
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const animateCounter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const startTime = Date.now();
    
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      if (progress === 1) {
        setCount(end);
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        
        // Restart animation after a pause
        setTimeout(() => {
          setCount(start);
          setTimeout(animateCounter, 300);
        }, 2000);
      } else {
        setCount(Math.floor(start + (end - start) * progress));
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        } else {
          setIsVisible(false);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [end, start, duration, hasAnimated]);

  return { count, countRef, isVisible };
};