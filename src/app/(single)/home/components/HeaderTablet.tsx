'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import logo1Img from '@/assets/img/logo/vl-logo-1.1.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { FaArrowRight } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap'

const HeaderTablet = () => {
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
      <header>
        <div className="header-area homepage1 header header-sticky d-none d-md-block d-lg-none" id="header-tablet">
          <Container>
            <Row>
              <Col md={12}>
                <div className="header-elements-tablet">
                  <div className="site-logo-tablet">
                    <Image src={logo1Img} alt='logo1Img' width={48} height={48} priority />
                    <div className="logo-text-tablet">
                      <span className="logo-text">AI <span className="logo-number">for</span> Afghanistan</span>
                      <span className="logo-slogan">we grow beyond boundaries</span>
                    </div>
                  </div>
                  <div className="btn-area-tablet">
                    <a href="/home#donate" className="volunteer-btn-tablet">
                      Donate <span><FaArrowRight /></span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
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
    <header>
      <div className={`header-area homepage1 header header-sticky d-none d-md-block d-lg-none ${scrollY > 80 ? 'sticky-tablet' : 'hidden-tablet'}`} id="header-tablet">
        <Container>
          <Row>
            <Col md={12}>
              <div className="header-elements-tablet">
                <div className="site-logo-tablet" onClick={handleLogoClick}>
                  <Image src={logo1Img} alt='logo1Img' width={48} height={48} priority />
                  <div className="logo-text-tablet">
                    <span className="logo-text">AI <span className="logo-number">for</span> Afghanistan</span>
                    <span className="logo-slogan">we grow beyond boundaries</span>
                  </div>
                </div>
                <div className="btn-area-tablet">
                  <a 
                    href="/home#donate" 
                    className="volunteer-btn-tablet"
                    onClick={(e) => handleNavClick(e, 'donate')}
                  >
                    Donate <span><FaArrowRight /></span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <style jsx global>{`
        body {
          overflow-x: hidden !important;
        }
        
        #header-tablet {
          background: transparent !important;
          border: none !important;
          z-index: 99999 !important;
        }
        
        .header-elements-tablet {
          padding: 8px 20px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border-radius: 50px !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          margin: 0 20px !important;
        }
        
        .site-logo-tablet {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          cursor: pointer !important;
        }
        
        .logo-text-tablet {
          display: flex !important;
          flex-direction: column !important;
        }
        
        .logo-text-tablet .logo-text {
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          color: #fafafa !important;
          line-height: 1.2 !important;
          width: 130px !important;
          text-align: left !important;
        }
        
        .logo-text-tablet .logo-number {
          color: #fafafa !important;
          font-weight: 700 !important;
        }
        
        .logo-text-tablet .logo-slogan {
          font-size: 0.45rem !important;
          color: #eee !important;
          font-weight: 400 !important;
          margin-top: 2px !important;
          width: 130px !important;
          text-align: left !important;
          letter-spacing: 0.5px !important;
        }
        
        .volunteer-btn-tablet {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          color: #ffffff !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          padding: 6px 6px 6px 16px !important;
          border-radius: 50px !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          text-decoration: none !important;
          position: relative !important;
          z-index: 1 !important;
          transition: all 0.3s ease !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }
        
        .volunteer-btn-tablet:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-2px) !important;
        }
        
        .volunteer-btn-tablet span {
          background: #089a45 !important;
          color: #ffffff !important;
          height: 32px !important;
          width: 32px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 50px !important;
          transition: all 0.3s ease !important;
        }
        
        .header-area.homepage1.sticky-tablet {
          background: rgba(23, 69, 85, 0.9) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 50px !important;
          margin: 0 auto !important;
          width: 85% !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
          top: 0 !important;
          padding: 4px 0 !important;
          animation: slideDownFromTop 0.5s ease-out !important;
        }
        
        .header-area.homepage1.sticky-tablet .header-elements-tablet {
          border-radius: 50px !important;
          padding: 4px 16px !important;
          margin: 0 !important;
          background: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
        }
        
        .header-area.homepage1.hidden-tablet {
          opacity: 0 !important;
          transform: translateY(-100%) !important;
          pointer-events: none !important;
          transition: all 0.3s ease !important;
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
      `}</style>
    </header>
  )
}

export default HeaderTablet