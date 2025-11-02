'use client'
import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    // Save scroll position before navigation
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }

    // Restore scroll position after navigation
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition')
      if (savedPosition && !window.location.hash) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition))
        }, 100)
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          const isMobile = window.innerWidth <= 768
          const headerHeight = isMobile ? 200 : 100
          const elementPosition = (element as HTMLElement).offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Handle initial hash on page load or restore position
    if (window.location.hash) {
      setTimeout(handleHashChange, 100)
    } else {
      restoreScrollPosition()
    }

    // Save position before leaving page
    window.addEventListener('beforeunload', saveScrollPosition)
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const isMobile = window.innerWidth <= 768
      const headerHeight = isMobile ? 200 : 100
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return { scrollToSection }
}