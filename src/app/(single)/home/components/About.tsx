'use client'
import Image from 'next/image'
import React from 'react'
import aboutIcons1 from '@/assets/img/icons/ai-training.svg'
import aboutIcons2 from '@/assets/img/icons/tech-future.svg'
import about1 from '@/assets/img/about/vl-about-1.1.jpg'
import about2 from '@/assets/img/about/vl-about-1.2.png'
import { FaArrowRight } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <section id='about' className="vl-about-section sp2" style={{background: '#ffffff !important'}}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300} style={{color: '#174555', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', position: 'relative', display: 'inline-block'}}>About AI4Afghanistan</h5>
                <h2 className="title text-anime-style-3" style={{color: '#174555'}}>Empowering Afghanistan Through AI Education</h2>
                <p className="pb-32" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300} style={{color: '#666', fontSize: '16px', lineHeight: '1.6'}}>We are dedicated to training Afghan youth in artificial intelligence and technology, creating opportunities for innovation and economic growth in Afghanistan.</p>
              </div>
              <div className="vl-about-grid">
                <div className="vl-about-icon-box mb-30">
                  <div className="vl-about-icon">
                    <span><Image src={aboutIcons1} alt='AI Training' loading="lazy" /></span>
                  </div>
                  <div className="vl-icon-content">
                    <h3 className="title" style={{color: '#174555'}}><Link href="/pages/service" style={{color: '#174555', textDecoration: 'none'}}>Comprehensive AI Training Programs</Link></h3>
                    <p style={{color: '#666', fontSize: '14px', lineHeight: '1.5'}}>We provide hands-on training in machine learning, <br /> data science, and AI development to Afghan students.</p>
                  </div>
                </div>
                <div className="vl-about-icon-box mb-30">
                  <div className="vl-about-icon">
                    <span><Image src={aboutIcons2} alt='Community Impact' loading="lazy" /></span>
                  </div>
                  <div className="vl-icon-content">
                    <h3 className="title" style={{color: '#174555'}}><Link href="/pages/service" style={{color: '#174555', textDecoration: 'none'}}>Building Afghanistan's Tech Future</Link></h3>
                    <p style={{color: '#666', fontSize: '14px', lineHeight: '1.5'}}>Creating pathways for Afghan youth to contribute to global technology innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-30">
            <div className="vl-about-large-thumb reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', cursor: 'pointer' }}>
              <Image className="w-100" src={about1} alt='about1' loading="lazy" />
              <div className="image-overlay" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(8, 25, 30, 0.1) 0%, rgba(8, 25, 30, 0.2) 50%, rgba(8, 25, 30, 0.4) 100%)',
                pointerEvents: 'none',
                transition: 'opacity 0.3s ease'
              }} />
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-30">
            <div className="vl-about-sm-content" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
              <p style={{color: '#666', fontSize: '14px', lineHeight: '1.6'}}>Our mission is to bridge the digital divide and empower Afghan youth with cutting-edge AI skills for a brighter future.</p>
              <div className="btn-area">
                <Link href="/pages/team" className="header-btn1" style={{background: '#174555', color: '#fff', textDecoration: 'none'}}>Join Us <span style={{background: '#089a45'}}><FaArrowRight /></span></Link>
              </div>
              <div className="vl-about-sm-thumb d-none d-md-block" style={{ position: 'relative', display: 'inline-block', borderRadius: '8px', cursor: 'pointer', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  <Image className="w-100" src={about2} alt='about2' loading="lazy" />
                  <div className="image-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(8, 25, 30, 0.1) 0%, rgba(8, 25, 30, 0.2) 50%, rgba(8, 25, 30, 0.4) 100%)',
                    pointerEvents: 'none',
                    transition: 'opacity 0.3s ease'
                  }} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <style jsx global>{`
      .vl-about-section {
        background: #ffffff !important;
      }
      .vl-about-icon-box:hover .vl-about-icon {
        transform: none !important;
      }
      .vl-about-icon {
        transition: none !important;
      }
      .vl-about-icon span {
        transform: none !important;
        transition: none !important;
      }
      .vl-about-icon-box:hover .vl-about-icon span {
        transform: none !important;
      }
      .vl-about-large-thumb:hover .image-overlay,
      .vl-about-sm-thumb:hover .image-overlay {
        opacity: 0 !important;
      }
      .vl-about-sm-thumb {
        position: relative !important;
        display: inline-block !important;
      }
      .vl-about-sm-thumb .image-overlay {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
      }
    `}</style>
    </>
  )
}

export default About