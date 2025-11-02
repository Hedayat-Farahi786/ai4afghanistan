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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    toggle() // Close mobile menu
    if (pathname === '/home') {
      scrollToSection(sectionId)
    } else {
      router.push(`/home#${sectionId}`)
    }
  }
  return (
    <>
      <div className="mobile-header mobile-haeder1 d-block d-lg-none">
        <Container>
          <Col xs={12}>
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/home"><Image src={logo1} alt='logo1' style={{width: '54px', height: 'auto'}} /></Link>
              </div>
              <div onClick={toggle} className="mobile-nav-icon dots-menu">
                <FaBars className="fa-solid fa-bars" />
              </div>
            </div>
          </Col>
        </Container>
      </div>
      <div className={`mobile-sidebar mobile-sidebar1 ${isOpen && 'mobile-menu-active'}`}>
        <div className="logosicon-area">
          <div className="logos">
            <Image src={footerLogo1} alt='footerLogo1' loading="lazy" />
          </div>
          <div onClick={toggle} className="menu-close">
            <FaXmark className="fa-solid fa-xmark" />
          </div>
        </div>
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
            <a href="/home#donate" className="header-mobile-btn1" onClick={(e) => handleNavClick(e, 'donate')}>Donate Now <span><FaArrowRight /></span></a>
            <div className="vl-mobile-contact1">
              <h3 className="title">Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaPhoneVolume size={16} className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+3(924)4596512">+3(924)4596512</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaEnvelope size={16} className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaLocationDot size={16} width={16} height={16} className="fa-solid fa-location-dot" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br /> New York 11201,United States</a>
                  </div>
                </div>
                <div className="vl-mobile-contact1">
                  <h3 className="title">Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li><a className='d-flex align-items-center justify-content-center' href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                      <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                      <li><a className='d-flex align-items-center justify-content-center' href="#"><FaLinkedinIn className="fa-brands fa-linkedin-in" /></a></li>
                      <li><a className='d-flex align-items-center justify-content-center' href="#"><FaYoutube className="fa-brands fa-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleMobileMenu