'use client'
import Image from 'next/image'
import React, {useRef} from 'react'
import dynamic from 'next/dynamic'
import heroBanner from '@/assets/img/banner/hero_banner.jpg'
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg'
import {FaFacebookF, FaInstagram, FaArrowRight, FaMouse, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Col, Container, Row} from 'react-bootstrap'

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <div style={{minHeight: '100vh'}} />
});

const Hero = () => {

  const settings = {
    draggable: true,
    autoplay: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    touchThreshold: 100,
    arrows: false,
    dots: false,
    ssr: true,
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
      <div className="vl-banner p-relative fix">
        <Slider ref={sliderRef} {...settings} className="slider-active-1">
          <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 1}}></div>
            <div className="vl-hero-shape shape-1" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden'}}>
              <Image
                src={heroBanner}
                alt=''
                fill
                priority
                quality={85}
                placeholder="blur"
                style={{objectFit: 'cover', objectPosition: 'center'}}
                sizes="100vw"
                fetchPriority="high"
              />
            </div>
            <div className="vl-hero-social d-none d-lg-block" style={{position: 'absolute', left: '50px', top: '50%', transform: 'translateY(-50%)', zIndex: 3}}>
              <h4 className="title">Follow Us:</h4>
              <div className="vl-hero-social-icon">
                <ul>
                  <li><a className='d-flex align-items-center justify-content-center'
                         href="https://www.facebook.com/ai4afgorg/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20}/></a></li>
                  <li><a className='d-flex align-items-center justify-content-center'
                         href="#"><FaInstagram size={20}/></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaXTwitter
                      size={20}/></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.linkedin.com/in/ai4afgorg" target="_blank" rel="noopener noreferrer"><FaLinkedinIn
                      size={20}/></a></li>
                </ul>
              </div>
            </div>
            <Container style={{position: 'relative', zIndex: 2, marginTop: '-60px'}}>
              <Row>
                <Col lg={7}>
                  <div className="vl-hero-section-title">
                    <h5 className="vl-subtitle" style={{fontSize: '14px', fontWeight: '500', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px', width: 'auto', border: 'none'}}>
                      <Image src={titleIcon} alt='titleIcon' width={16} height={16} loading="eager"/>
                      Bringing AI to Afghanistan
                    </h5>
                    <h1 className="vl-title text-anime-style-3" style={{fontSize: '68px !important', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', maxWidth: '800px'}}>
                      Empowering Afghan<br/><span style={{background: '#089a45', padding: '2px 26px 2px 12px', clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)', display: 'inline-block', transition: 'all 0.3s ease'}}>Youth</span> Through<br/>AI Innovation
                    </h1>
                    <p style={{fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '28px'}}>
                      We&apos;re training the next generation of Afghan innovators.<br/>
                      Real skills, real opportunities, real change.
                    </p>
                    <div className="vl-hero-btn">
                      <a href="/pages/contact" className="header-btn1" style={{fontSize: '16px', fontWeight: '600', padding: '14px 28px'}}>
                        Join Our Mission <span><FaArrowRight/></span>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={5}/>
              </Row>
            </Container>
          </div>


        </Slider>

        <div style={{position: 'absolute', bottom: '80px', right: '50px', zIndex: 3}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', cursor: 'pointer'}} onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
            <span style={{fontSize: '14px', marginBottom: '10px'}}>Scroll Down</span>
            <FaMouse style={{fontSize: '24px', animation: 'bounce 2s infinite'}} />
          </div>
        </div>
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </div>


  )
}

export default Hero