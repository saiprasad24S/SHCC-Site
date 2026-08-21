import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 1600, className = '' }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if the value contains numbers to animate
    const numericMatch = value.toString().match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const prefix = value.toString().substring(0, numericMatch.index);
    const suffix = value.toString().substring(numericMatch.index + numericMatch[0].length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTime = null;

            const step = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentNum = Math.floor(easeOut * targetNum);

              setDisplayValue(`${prefix}${currentNum}${suffix}`);

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setDisplayValue(value);
              }
            };

            window.requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef} className={`animated-counter ${className}`}>
      {displayValue}
    </span>
  );
}
