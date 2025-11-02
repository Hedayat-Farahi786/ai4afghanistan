'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import logo1 from '@/assets/img/logo/vl-logo-1.1.png'
import footerLogo1 from '@/assets/img/logo/vl-footer-logo-1.1.png'
import { FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhoneVolume, FaXmark, FaYoutube } from 'react-icons/fa6'
import useToggle from '@/hooks/useToggle'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { FaArrowRight } from 'react-icons/fa6'
import { Col, Container } from 'react-bootstrap'

const SingleMobileMenu = () => {
  const { isOpen, toggle } = useToggle()
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    toggle() // Close sidebar first
    
    setTimeout(() => {
      if (pathname === '/home') {
        scrollToSection(sectionId)
      } else {
        router.push(`/home#${sectionId}`)
      }
    }, 300) // Wait for sidebar close animation
  }
  
  const handleSocialClick = () => {
    toggle() // Close sidebar when social links are clicked
  }

  return (
    <>
      <div className={`mobile-header mobile-haeder1 d-block d-md-none ${isOpen ? 'mobile-menu-active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mobile-header-container">
          <div className="mobile-header-elements">
            <div className="mobile-logo">
              <Link href="/home" onClick={() => isOpen && toggle()}>
                <Image src={logo1} alt='logo1' width={40} height={40} />
                <div className="logo-text-mobile">
                  <span className="logo-text">AI <span className="logo-number">for</span> Afghanistan</span>
                  <span className="logo-slogan">we grow beyond boundaries</span>
                </div>
              </Link>
            </div>
            <div onClick={toggle} className="mobile-nav-icon">
              {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`mobile-sidebar mobile-sidebar1 ${isOpen && 'mobile-menu-active'}`}>

        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li><a href="/home#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="/home#programs" onClick={(e) => handleNavClick(e, 'programs')}>Programs</a></li>
            <li><a href="/home#events" onClick={(e) => handleNavClick(e, 'events')}>Events</a></li>
            <li><a href="/home#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
            <li><a href="/home#donate" onClick={(e) => handleNavClick(e, 'donate')}>Donate</a></li>
            <li><a href="/home#blog" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
            <li><a href="/home#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <div className="allmobilesection">
            <a href="/home#donate" className="header-btn1" style={{fontSize: '16px', fontWeight: '600', padding: '14px 28px'}} onClick={(e) => handleNavClick(e, 'donate')}>
              Donate <span><FaArrowRight /></span>
            </a>
            <div className="vl-mobile-contact1">
              <h3 className="title">Social Links</h3>
              <div className="social-links-mobile-menu">
                <ul>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.facebook.com/ai4afgorg/" target="_blank" rel="noopener noreferrer" onClick={handleSocialClick}><FaFacebookF /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#" onClick={handleSocialClick}><FaInstagram /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.linkedin.com/in/ai4afgorg" target="_blank" rel="noopener noreferrer" onClick={handleSocialClick}><FaLinkedinIn /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#" onClick={handleSocialClick}><FaYoutube /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          overflow-x: hidden !important;
        }
        
        .mobile-header {
          position: fixed !important;
          top: 12px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: calc(100vw - 32px) !important;
          max-width: 480px !important;
          z-index: 99999999 !important;
          background: transparent !important;
        }
        
        .mobile-header-container {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: none !important;
          border-width: 0 !important;
          border-style: none !important;
          border-color: transparent !important;
          outline: none !important;
          border-radius: 50px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          transition: all 0.3s ease !important;
        }
        
        .mobile-header.scrolled .mobile-header-container {
          background: rgba(23, 69, 85, 0.9) !important;
        }
        
        .mobile-header-elements {
          padding: 8px 20px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
        }
        
        .mobile-logo a {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          text-decoration: none !important;
        }
        
        .logo-text-mobile {
          display: flex !important;
          flex-direction: column !important;
        }
        
        .logo-text-mobile .logo-text {
          font-size: 0.7rem !important;
          font-weight: 700 !important;
          color: #fafafa !important;
          line-height: 1.2 !important;
          width: 120px !important;
          text-align: left !important;
        }
        
        .logo-text-mobile .logo-number {
          color: #fafafa !important;
          font-weight: 700 !important;
        }
        
        .logo-text-mobile .logo-slogan {
          font-size: 0.42rem !important;
          color: #eee !important;
          font-weight: 400 !important;
          margin-top: 1px !important;
          width: 120px !important;
          text-align: left !important;
          letter-spacing: 0.5px !important;
        }
        
        .mobile-nav-icon {
          cursor: pointer !important;
          padding: 12px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          width: 48px !important;
          height: 48px !important;
        }
        
        .mobile-nav-icon:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        
        .mobile-nav-icon svg {
          color: #fafafa !important;
          transition: all 0.3s ease !important;
        }
        
        .mobile-sidebar {
          z-index: 9999999 !important;
          padding: 80px 20px 20px 20px !important;
        }
        
        .mobile-header.mobile-menu-active .mobile-nav-icon svg {
          color: #174555 !important;
        }
        
        .mobile-header.mobile-menu-active .logo-text-mobile .logo-text {
          color: #174555 !important;
        }
        
        .mobile-header.mobile-menu-active .logo-text-mobile .logo-slogan {
          color: #174555 !important;
        }
        
        .mobile-header.mobile-menu-active.scrolled .mobile-nav-icon svg {
          color: #fafafa !important;
        }
        
        .mobile-header.mobile-menu-active.scrolled .logo-text-mobile .logo-text {
          color: #fafafa !important;
        }
        
        .mobile-header.mobile-menu-active.scrolled .logo-text-mobile .logo-slogan {
          color: #eee !important;
        }
        
        .mobile-sidebar .header-btn1 {
          width: 100% !important;
          margin: 20px 0 !important;
          background: #174555 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
        }
        
        .mobile-sidebar .header-btn1:hover {
          background: #0f3a47 !important;
        }
      `}</style>
    </>
  )
}

export default SingleMobileMenu