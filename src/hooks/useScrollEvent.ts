'use client'
import { useEffect, useState, useRef } from 'react'

const useScrollEvent = () => {
  const [scrollState, setScrollState] = useState({
    scrollPassed: 0,
    scrollY: 0,
    scrollHeight: 0,
  })
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame to prevent stacking
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }

      // Schedule update on next animation frame (60fps max)
      rafIdRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const scrollHeight = document.body.offsetHeight
        const scrollPassed = ((currentScrollY + window.innerHeight) * 100) / scrollHeight

        // Single state update instead of multiple
        setScrollState({
          scrollY: currentScrollY,
          scrollPassed,
          scrollHeight,
        })
      })
    }

    // Initial values
    setScrollState({
      scrollY: window.scrollY,
      scrollPassed: ((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight,
      scrollHeight: document.body.offsetHeight,
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return scrollState
}

export default useScrollEvent
