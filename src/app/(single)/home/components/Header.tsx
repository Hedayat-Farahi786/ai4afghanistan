'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import logo1Img from '@/assets/img/logo/vl-logo-1.1.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

import SingleMobileMenu from './SingleMobileMenu'
import HeaderMobile from './HeaderMobile'
import HeaderTablet from './HeaderTablet'
import { FaArrowRight } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  const { scrollY } = useScrollEvent()
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <header>
          <div className="header-area homepage1 header header-sticky d-none d-lg-block mt-16" id="header">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="header-elements header-elements-1">
                    <div className="site-logo" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <Image src={logo1Img} alt='logo1Img' width={54} height={54} priority style={{ objectFit: 'contain', display: 'block'}} />
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className="logo-text">AI <span className="logo-number">for</span> Afghanistan</span>
                        <span className="logo-slogan">we grow beyond boundaries</span>
                      </div>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li><a href="/home#about">About</a></li>
                        <li><a href="/home#programs">Programs</a></li>
                        <li><a href="/home#events">Events</a></li>
                        <li><a href="/home#team">Team</a></li>
                        <li><a href="/home#donate">Donate</a></li>
                        <li><a href="/home#blog">Blog</a></li>
                        <li><a href="/home#contact">Contact</a></li>
                      </ul>
                    </div>
                    <div className="btn-area">
                      <a href="/home#donate" className="volunteer-btn-custom">
                        Donate <span><FaArrowRight /></span>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
        <HeaderTablet />
        <SingleMobileMenu />
      </>
    )
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (pathname === '/home') {
      scrollToSection(sectionId)
    } else {
      router.push(`/home#${sectionId}`)
    }
  }

  const handleLogoClick = () => {
    router.push('/home')
  }

  return (
    <>
      {/* Desktop Header */}
      <header>
        <div className={`header-area homepage1 header header-sticky d-none d-lg-block mt-16 ${(scrollY > 100 || pathname !== '/home') && 'sticky'}`} id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements header-elements-1">
                  <div className="site-logo" style={{display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer'}} onClick={handleLogoClick}>
                      <Image src={logo1Img} alt='logo1Img' width={54} height={54} priority style={{ objectFit: 'contain', display: 'block'}} />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <span className="logo-text">AI <span className="logo-number">for</span> Afghanistan</span>
                      <span className="logo-slogan">we grow beyond boundaries</span>
                    </div>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li><a href="/home#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
                      <li><a href="/home#programs" onClick={(e) => handleNavClick(e, 'programs')}>Programs</a></li>
                      <li><a href="/home#events" onClick={(e) => handleNavClick(e, 'events')}>Events</a></li>
                      <li><a href="/home#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
                      <li><a href="/home#donate" onClick={(e) => handleNavClick(e, 'donate')}>Donate</a></li>
                      <li><a href="/home#blog" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
                      <li><a href="/home#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
                    </ul>
                  </div>
                  <div className="btn-area">
                    <a 
                      href="/home#donate" 
                      className="volunteer-btn-custom"
                      onClick={(e) => handleNavClick(e, 'donate')}
                    >
                      Donate 
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      
      {/* Tablet Header */}
      <HeaderTablet />
      

      
      {/* Mobile Menu */}
      <SingleMobileMenu />
      <style jsx global>{`
        .logo-text {
          font-size: 0.9rem !important;
          font-weight: 700 !important;
          color: #fafafa !important;
          line-height: 1.2 !important;
          width: 140px !important;
          text-align: left !important;
        }
        .logo-number {
          color: #fafafa !important;
          font-weight: 700 !important;
        }
        .logo-slogan {
          font-size: 0.54rem !important;
          color: #eee !important;
          font-weight: 400 !important;
          margin-top: 2px !important;
          width: 140px !important;
          text-align: left !important;
          letter-spacing: 0.5px !important;
        }
        .volunteer-btn-custom {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          color: #ffffff !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          padding: 8px 8px 8px 20px !important;
          border-radius: 50px !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          text-decoration: none !important;
          position: relative !important;
          z-index: 1 !important;
          transition: all 0.3s ease !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }
        .header-area.homepage1.sticky .volunteer-btn-custom {
          background: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
        }

        .volunteer-btn-custom:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-2px) !important;
        }

        .volunteer-btn-custom span {
          background: #089a45 !important;
          color: #ffffff !important;
          height: 36px !important;
          width: 36px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 50px !important;
          transition: all 0.3s ease !important;
        }
        .header-elements {
          padding: 8px 10px !important;
        }
        .main-menu ul li a {
          position: relative !important;
          transition: all 0.3s ease !important;
        }
        .main-menu ul li a::after {
          content: '' !important;
          position: absolute !important;
          bottom: -5px !important;
          left: 50% !important;
          width: 0 !important;
          height: 2px !important;
          background: #089a45 !important;
          transition: all 0.3s ease !important;
          transform: translateX(-50%) !important;
        }
        .homepage1-body .header-area.homepage1 .header-elements .main-menu ul li:hover > a {
          color: #fafafa !important;
        }
        .homepage1-body .header-area.homepage1 .header-elements .main-menu ul li:hover > a::after {
          width: 80% !important;
          background: #089a45 !important;
        }
        .header-area {
          border: none !important;
          border-bottom: none !important;
        }
        .header-elements {
          border: none !important;
        }
        .header-area.homepage1.sticky {
          background: rgba(23, 69, 85, 0.9) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 70px !important;
          margin: 12px auto 0 auto !important;
          width: 70% !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
          top: 0 !important;
          padding: 4px 0 !important;
          animation: slideDownFromTop 0.5s ease-out !important;
        }
        @keyframes slideDownFromTop {
          0% {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
        .header-area.homepage1.sticky .header-elements {
          border-radius: 50px !important;
          padding: 4px 2px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
        }
        .site-logo img,
        .header-area .site-logo img,
        .header-elements .site-logo img,
        .header-area.homepage1 .site-logo img,
        .homepage1-body .header-area.homepage1 .site-logo img {
          width: 54px !important;
          height: 54px !important;
          max-width: 54px !important;
          max-height: 54px !important;
          min-width: 54px !important;
          min-height: 54px !important;
          object-fit: contain !important;
          flex-shrink: 0 !important;
        }
        .site-logo {
          flex-shrink: 0 !important;
        }
      `}</style>
    </>
  )
}

export default Header