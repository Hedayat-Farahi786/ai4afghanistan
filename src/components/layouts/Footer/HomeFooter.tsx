'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo1Img from '@/assets/img/logo/vl-logo-1.1.png'

const HomeFooter = () => {
  return (
    <>
      <style jsx global>{`
        .footer-section {
          background: linear-gradient(135deg, #174555 0%, #0f3540 100%) !important;
          color: #fafafa !important;
          position: relative;
          overflow: hidden;
        }
        .footer-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(8, 154, 69, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px 0;
          position: relative;
          z-index: 1;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        .footer-brand {
          max-width: 350px;
        }
        .footer-logo {
          margin-bottom: 24px;
        }
        .footer-logo img {
          height: 60px;
          width: auto;
        }
        .footer-description {
          color: #fafafa !important;
          font-size: 16px !important;
          line-height: 1.6 !important;
          margin-bottom: 32px !important;
        }
        .footer-social {
          display: flex;
          gap: 16px;
        }
        .social-link {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 44px !important;
          height: 44px !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border-radius: 12px !important;
          color: #fafafa !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          backdrop-filter: blur(10px) !important;
        }
        .social-link:hover {
          background: #089a45 !important;
          transform: translateY(-2px) !important;
          color: #fafafa !important;
        }
        .footer-column h3 {
          color: #fafafa !important;
          font-size: 20px !important;
          font-weight: 600 !important;
          margin-bottom: 24px !important;
          position: relative;
        }
        .footer-column h3::after {
          content: '' !important;
          position: absolute !important;
          bottom: -8px !important;
          left: 0 !important;
          width: 30px !important;
          height: 2px !important;
          background: #089a45 !important;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: #fafafa !important;
          text-decoration: none !important;
          font-size: 15px !important;
          transition: all 0.3s ease !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .footer-links a:hover {
          color: #089a45 !important;
          padding-left: 8px !important;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }
        .contact-icon {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 40px !important;
          height: 40px !important;
          background: rgba(8, 154, 69, 0.2) !important;
          border-radius: 10px !important;
          color: #089a45 !important;
          flex-shrink: 0 !important;
          margin-top: 2px !important;
        }
        .contact-text {
          color: #fafafa !important;
          font-size: 15px !important;
          line-height: 1.5 !important;
        }
        .contact-text a {
          color: #fafafa !important;
          text-decoration: none !important;
          transition: color 0.3s ease !important;
        }
        .contact-text a:hover {
          color: #089a45 !important;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding: 32px 0 !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          flex-wrap: wrap !important;
          gap: 20px !important;
        }
        .copyright-text {
          color: #fafafa !important;
          font-size: 14px !important;
          margin: 0 !important;
        }
        .footer-bottom-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-bottom-links a {
          color: #fafafa !important;
          text-decoration: none !important;
          font-size: 14px !important;
          transition: color 0.3s ease !important;
        }
        .footer-bottom-links a:hover {
          color: #089a45 !important;
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .footer-container {
            padding: 60px 16px 0;
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .footer-column h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .footer-bottom-links {
            gap: 20px;
          }
        }
        
        .footer-logo-text {
          font-size: 1.2rem !important;
          font-weight: 700 !important;
          color: #fafafa !important;
          line-height: 1.2 !important;
        }
        .footer-logo-number {
          color: #089a45 !important;
          font-weight: 700 !important;
          margin: 0 2px !important;
        }
        .footer-logo-slogan {
          font-size: 0.69rem !important;
          color: #fafafa !important;
          font-weight: 400 !important;
          margin-top: 2px !important;
        }
        
        @media (max-width: 480px) {
          .footer-social {
            justify-content: center;
          }
          .footer-bottom-links {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
      
      <footer className="footer-section">
        <Container>
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="footer-logo" style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', cursor: 'pointer'}} onClick={() => window.location.href = '/home'}>
                  <div style={{display: 'block', width: '54px', height: '54px', overflow: 'hidden'}}>
                    <Image src={logo1Img} alt='AI4Afghanistan Logo' width={54} height={54} priority style={{ objectFit: 'contain', display: 'block'}} />
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className="footer-logo-text">AI<span className="footer-logo-number">4</span>Afghanistan</span>
                    <span className="footer-logo-slogan">we grow beyond boundaries</span>
                  </div>
                </div>
                <p className="footer-description">
                  Empowering Afghanistan&apos;s future through AI education and technology. 
                  Building tomorrow&apos;s tech leaders and creating opportunities for sustainable growth.
                </p>
                <div className="footer-social">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-link" aria-label="X (Twitter)">
                    <FaXTwitter />
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><Link href="/home">Home</Link></li>
                  <li><Link href="/home#about">About Us</Link></li>
                  <li><Link href="/home#programs">Programs</Link></li>
                  <li><Link href="/blogs">Blog</Link></li>
                  <li><Link href="/home#contact">Contact</Link></li>
                </ul>
              </div>
              

              
              <div className="footer-column">
                <h3>Contact Info</h3>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <a href="mailto:info@ai4afghanistan.org">info@ai4afghanistan.org</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    Hamburg, Germany
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <a href="tel:+4917646294780">+49 176 46294780</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p className="copyright-text">
                © {new Date().getFullYear()} AI4Afghanistan. All rights reserved.
              </p>
              <ul className="footer-bottom-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default HomeFooter