'use client'
import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / docHeight) * 100
      
      setScrollProgress(progress)
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style jsx>{`
        .scroll-btn {
          position: fixed !important;
          bottom: 30px !important;
          right: 30px !important;
          width: 56px !important;
          height: 56px !important;
          background: rgba(255, 255, 255, 0.95) !important;
          border: none !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 9999 !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 8px 25px rgba(8, 154, 69, 0.15) !important;
          backdrop-filter: blur(10px) !important;
          opacity: ${isVisible ? '1' : '0'} !important;
          visibility: ${isVisible ? 'visible' : 'hidden'} !important;
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.8)'} !important;
          box-sizing: border-box !important;
        }
        .scroll-btn:hover {
          background: #089a45 !important;
          transform: translateY(-2px) scale(1.05) !important;
          box-shadow: 0 12px 35px rgba(8, 154, 69, 0.25) !important;
        }
        .progress-ring {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 56px !important;
          height: 56px !important;
          transform: rotate(-90deg) !important;
          pointer-events: none !important;
        }
        .progress-bg {
          fill: none !important;
          stroke: #089a45 !important;
          stroke-width: 2 !important;
          opacity: 0.3 !important;
        }
        .progress-bar {
          fill: none !important;
          stroke: #089a45 !important;
          stroke-width: 2 !important;
          stroke-linecap: round !important;
          transition: stroke-dashoffset 0.3s ease !important;
        }
        .scroll-icon {
          color: #089a45 !important;
          font-size: 18px !important;
          transition: color 0.3s ease !important;
        }
        .scroll-btn:hover .scroll-icon {
          color: #fafafa !important;
        }
        .scroll-btn:hover .scroll-icon * {
          color: #fafafa !important;
        }
        .scroll-btn:hover svg {
          color: #fafafa !important;
        }
        .scroll-btn:hover path {
          color: #fafafa !important;
          fill: #fafafa !important;
        }
        .scroll-btn:hover * {
          color: #fafafa !important;
        }

      `}</style>
      <div 
        className="scroll-btn" 
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg className="progress-ring" viewBox="0 0 56 56">
          <circle
            className="progress-bg"
            cx="28"
            cy="28"
            r="26"
          />
          <circle
            className="progress-bar"
            cx="28"
            cy="28"
            r="26"
            strokeDasharray="163.36"
            strokeDashoffset={163.36 - (scrollProgress / 100) * 163.36}
          />
        </svg>
        <FaArrowUp 
          className="scroll-icon" 
          style={{ color: isHovered ? '#fafafa' : '#089a45' }}
        />
      </div>
    </>
  )
}

export default ScrollToTop