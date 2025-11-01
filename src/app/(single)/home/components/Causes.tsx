'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { LuBrain, LuUsers } from 'react-icons/lu'
import { BiCodeAlt } from 'react-icons/bi'
import { Col, Container, Row } from 'react-bootstrap'

import Image from 'next/image'
import causes1 from '@/assets/img/cause/causes1.jpg'
import causes2 from '@/assets/img/cause/causes2.jpg'
import causes3 from '@/assets/img/cause/causes3.jpg'

const Causes = () => {

  return (
    <>
      <style jsx global>{`
        .causes-subtitle::after {
          content: '' !important;
          position: absolute !important;
          bottom: -8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 40px !important;
          height: 2px !important;
          background: #089a45 !important;
        }
        .ai4afghanistan-tag {
          background: #089a45 !important;
          color: white !important;
          border: none !important;
        }
        .ai4afghanistan-tag.planning {
          background: #174555 !important;
          color: white !important;
        }
        .header-btn1 {
          background: #174555 !important;
          color: white !important;
          text-decoration: none !important;
          border: none !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 14px 28px !important;
          border-radius: 50px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          transition: all 0.3s ease !important;
        }
        .header-btn1:hover {
          background: #089a45 !important;
          color: white !important;
          text-decoration: none !important;
          transform: translateX(5px) !important;
        }
        .header-btn1 span {
          background: #089a45 !important;
          color: white !important;
          padding: 8px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
        }
        .header-btn1:hover span {
          background: #089a45 !important;
        }
        .cause-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.18) !important;
        }
        .cause-card img {
          transition: transform 0.3s ease !important;
        }
        .cause-card:hover img {
          transform: scale(1.05) !important;
        }
        .cause-card:hover .cause-image-overlay {
          opacity: 0 !important;
        }
        .tag-text {
          color: #fafafa !important;
        }
      `}</style>
      <section id="programs" style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 style={{ color: '#174555', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', position: 'relative', display: 'inline-block' }} className="causes-subtitle">
            Our Vision
          </h5>
          <h2 style={{ color: '#174555', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            Building Afghanistan's AI Future
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            We&apos;re just getting started. Join us in creating opportunities for Afghan youth through AI education.
          </p>
        </div>
        
        <Row>
          <Col lg={4} md={6}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '30px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              transition: 'all 0.3s ease',
              border: 'none',
              height: '600px',
              display: 'flex',
              flexDirection: 'column'
            }} className="cause-card">
              <div style={{ position: 'relative', height: '460px', overflow: 'hidden' }}>
                <Image 
                  src={causes1} 
                  alt="AI Education" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="cause-image-overlay" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(8, 25, 30, 0.05) 0%, rgba(8, 25, 30, 0.2) 50%, rgba(8, 25, 30, 0.4) 100%)',
                  transition: 'opacity 0.3s ease'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(8, 154, 69, 0.9)',
                  color: '#fafafa !important',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)'
                }} className="tag-text">
                  Active
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <LuBrain style={{ fontSize: '24px', color: '#089a45', strokeWidth: 2 }} />
                  <h4 style={{ color: '#174555 !important', fontSize: '22px', fontWeight: 600, margin: 0 }}>
                    AI Education
                  </h4>
                </div>
                <p style={{ color: '#666 !important', fontSize: '15px', lineHeight: 1.6, marginBottom: '0', flex: 1 }}>
                  Comprehensive AI and machine learning training programs designed to empower Afghan youth with cutting-edge skills.
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '30px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              transition: 'all 0.3s ease',
              border: 'none',
              height: '600px',
              display: 'flex',
              flexDirection: 'column'
            }} className="cause-card">
              <div style={{ position: 'relative', height: '460px', overflow: 'hidden' }}>
                <Image 
                  src={causes2} 
                  alt="Skills Training" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="cause-image-overlay" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(8, 25, 30, 0.05) 0%, rgba(8, 25, 30, 0.2) 50%, rgba(8, 25, 30, 0.4) 100%)',
                  transition: 'opacity 0.3s ease'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(8, 154, 69, 0.9)',
                  color: '#fafafa !important',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)'
                }} className="tag-text">
                  Launching Soon
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <BiCodeAlt style={{ fontSize: '24px', color: '#089a45' }} />
                  <h4 style={{ color: '#174555 !important', fontSize: '22px', fontWeight: 600, margin: 0 }}>
                    Skills Training
                  </h4>
                </div>
                <p style={{ color: '#666 !important', fontSize: '15px', lineHeight: 1.6, marginBottom: '0', flex: 1 }}>
                  Hands-on coding bootcamps and technical workshops to prepare students for the modern digital workforce.
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '30px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              transition: 'all 0.3s ease',
              border: 'none',
              height: '600px',
              display: 'flex',
              flexDirection: 'column'
            }} className="cause-card">
              <div style={{ position: 'relative', height: '460px', overflow: 'hidden' }}>
                <Image 
                  src={causes3} 
                  alt="Community Building" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="cause-image-overlay" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(8, 25, 30, 0.05) 0%, rgba(8, 25, 30, 0.2) 50%, rgba(8, 25, 30, 0.4) 100%)',
                  transition: 'opacity 0.3s ease'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(8, 154, 69, 0.9)',
                  color: '#fafafa !important',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)'
                }} className="tag-text">
                  Beta Program
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <LuUsers style={{ fontSize: '24px', color: '#089a45', strokeWidth: 2 }} />
                  <h4 style={{ color: '#174555 !important', fontSize: '22px', fontWeight: 600, margin: 0 }}>
                    Community Building
                  </h4>
                </div>
                <p style={{ color: '#666 !important', fontSize: '15px', lineHeight: 1.6, marginBottom: '0', flex: 1 }}>
                  Building strong professional networks and mentorship programs to connect Afghan developers worldwide.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/contact" className="header-btn1">
            Get Involved <span><FaArrowRight /></span>
          </a>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Causes