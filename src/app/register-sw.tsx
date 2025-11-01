'use client'
import { useEffect } from 'react'

export default function RegisterSW() {
  useEffect(() => {
    // Register service worker after page load to not block initial render
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
          .then((registration) => {
            // Check for updates periodically
            registration.update();
          })
          .catch(() => {
            // Silently fail if service worker registration fails
          });
      });
    }
  }, [])
  return null
}
