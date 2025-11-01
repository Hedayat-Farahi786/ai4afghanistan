'use client'
import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Remove the initial loader once app is fully interactive
    const removeLoader = () => {
      const loader = document.getElementById('__next-loading');
      if (loader && !loader.style.opacity) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s ease-out';
        setTimeout(() => {
          loader?.remove();
        }, 300);
      }
    };

    // Ensure loader is removed after page is fully loaded
    if (document.readyState === 'complete') {
      removeLoader();
    } else {
      window.addEventListener('load', removeLoader);
      return () => window.removeEventListener('load', removeLoader);
    }
  }, []);

  return null;
}
