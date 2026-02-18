'use client';

import { useRef, useState, useEffect } from 'react';

export function FlipText({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="inline-block" style={{ perspective: '500px' }}>
      {children.split('').map((char, i) => (
        <span
          key={i}
          className={isVisible ? 'flip-char' : ''}
          style={{
            display: 'inline-block',
            opacity: isVisible ? undefined : 0,
            animationDelay: isVisible ? `${i * 0.04}s` : undefined,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
