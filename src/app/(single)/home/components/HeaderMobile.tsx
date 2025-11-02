'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import logo1Img from '@/assets/img/logo/vl-logo-1.1.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { FaArrowRight } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap'

const HeaderMobile = () => {
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
        <div className="header-area homepage1 header header-sticky d-block d-lg-none" id="header-mobile">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className="header-elements-mobile">
                  <div className="site-logo-mobile">
                    <Image src={logo1Img} alt='logo1Img' width={40} height={40} priority />
                    <div className="logo-text-mobile">
                      <span className="logo-text">AI<span className="logo-number">4</span>Afghanistan</span>
                      <span className="logo-slogan">we grow beyond boundaries</span>
                    </div>
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
      <div className={`header-area homepage1 header header-sticky d-block d-lg-none ${scrollY > 50 ? 'sticky-mobile' : 'hidden-mobile'}`} id="header-mobile">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="header-elements-mobile">
                <div className="site-logo-mobile" onClick={handleLogoClick}>
                  <Image src={logo1Img} alt='logo1Img' width={40} height={40} priority />
                  <div className="logo-text-mobile">
                    <span className="logo-text">AI<span className="logo-number">4</span>Afghanistan</span>
                    <span className="logo-slogan">we grow beyond boundaries</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <style jsx global>{`
        #header-mobile {
          background: transparent !important;
          border: none !important;
        }
        
        .header-elements-mobile {
          padding: 8px 16px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border-radius: 50px !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          margin: 0 16px !important;
        }
        
        .site-logo-mobile {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          cursor: pointer !important;
        }
        
        .logo-text-mobile {
          display: flex !important;
          flex-direction: column !important;
        }
        
        .logo-text-mobile .logo-text {
          font-size: 1rem !important;
          font-weight: 700 !important;
          color: #fafafa !important;
          line-height: 1.2 !important;
        }
        
        .logo-text-mobile .logo-number {
          color: #089a45 !important;
          font-weight: 700 !important;
          margin: 0 2px !important;
        }
        
        .logo-text-mobile .logo-slogan {
          font-size: 0.6rem !important;
          color: #eee !important;
          font-weight: 400 !important;
          margin-top: 1px !important;
        }
        
        .header-area.homepage1.sticky-mobile {
          background: rgba(23, 69, 85, 0.9) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 50px !important;
          margin: 8px 16px 0 16px !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
          top: 0 !important;
          animation: slideDownFromTop 0.5s ease-out !important;
        }
        
        .header-area.homepage1.sticky-mobile .header-elements-mobile {
          background: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
          margin: 0 !important;
        }
        
        .header-area.homepage1.hidden-mobile {
          opacity: 0 !important;
          transform: translateY(-100%) !important;
          pointer-events: none !important;
          transition: all 0.3s ease !important;
        }
        
        @media (max-width: 576px) {
          .logo-text-mobile .logo-text {
            font-size: 0.9rem !important;
          }
          
          .logo-text-mobile .logo-slogan {
            font-size: 0.55rem !important;
          }
          
          .header-elements-mobile {
            padding: 6px 12px !important;
            margin: 0 12px !important;
          }
          
          .header-area.homepage1.sticky-mobile {
            margin: 6px 12px 0 12px !important;
          }
        }
      `}</style>
    </header>
  )
}

export default HeaderMobile