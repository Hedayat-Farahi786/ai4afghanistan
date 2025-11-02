'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPAnimations = () => {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return
    
    const timer = setTimeout(() => {
      initialized.current = true
      const isMobile = window.innerWidth <= 768

      if (isMobile) {
        // Wait for loading to complete, then animate hero
        const checkLoading = () => {
          const loader = document.getElementById('__next-loading')
          if (!loader || loader.style.display === 'none') {
            // Loading complete, start hero animations
            const heroTl = gsap.timeline({ delay: 0.2 })
            heroTl
              .fromTo('.hero-subtitle', 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
              )
              .fromTo('.hero-title',
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2'
              )
              .fromTo('.hero-description',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3'
              )
              .fromTo('.hero-button',
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2'
              )
              .fromTo('.vl-hero-social',
                { opacity: 0, x: -15 },
                { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2'
              )
          } else {
            // Still loading, check again
            setTimeout(checkLoading, 100)
          }
        }
        checkLoading()

        // About section animations (scroll triggered)
        ScrollTrigger.create({
          trigger: '.vl-about-section',
          start: 'top 80%',
          onEnter: () => {
            const tl = gsap.timeline()
            tl.fromTo('.about-subtitle',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
            )
            .fromTo('.about-title',
              { opacity: 0, x: -30 },
              { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2'
            )
            .fromTo('.about-description',
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2'
            )
            .fromTo('.vl-about-icon-box',
              { opacity: 0, x: -30 },
              { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', stagger: 0.1 }, '-=0.2'
            )
            .fromTo('.about-image-large',
              { opacity: 0, scale: 0.95 },
              { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3'
            )
            .fromTo('.about-side-content',
              { opacity: 0, x: 25 },
              { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3'
            )
          }
        })

        // Team section animations (scroll triggered)
        ScrollTrigger.create({
          trigger: '.vl-team-section',
          start: 'top 80%',
          onEnter: () => {
            const tl = gsap.timeline()
            tl.fromTo('.team-subtitle',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
            )
            .fromTo('.team-title',
              { opacity: 0, y: 25 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2'
            )
            .fromTo('.team-description',
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2'
            )
            .fromTo('.team-card',
              { opacity: 0, y: 30, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 }, '-=0.2'
            )
            .fromTo('.team-show-more',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2'
            )
          }
        })
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}