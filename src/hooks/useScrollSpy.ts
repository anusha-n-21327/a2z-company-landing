import { useState, useEffect } from 'react';

/**
 * A custom hook that observes elements and returns the ID of the one currently in the viewport.
 * @param ids - An array of element IDs to spy on.
 * @param options - IntersectionObserver options.
 * @returns The ID of the active element.
 */
export const useScrollSpy = (
  ids: string[],
  options?: IntersectionObserverInit,
): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    const elements = ids.map(id => document.getElementById(id)).filter(el => el !== null);

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, options]);

  return activeId;
};