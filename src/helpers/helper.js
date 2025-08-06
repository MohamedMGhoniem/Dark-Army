import { useEffect, useRef } from 'react';

export function useObserver(threshold) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrolledUp = entry.boundingClientRect.y > 0;
        console.log(entry);
        if (entry.isIntersecting) {
          element.classList.add('animate');
        } else if (!entry.isIntersecting && isScrolledUp) {
          element.classList.remove('animate');
        }
      },
      {
        root: null,
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold]);

  return elementRef;
}
