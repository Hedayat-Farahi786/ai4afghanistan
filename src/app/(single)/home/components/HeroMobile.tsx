'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import heroBanner from '@/assets/img/banner/hero_banner.jpg'
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg'
import { FaFacebookF, FaInstagram, FaArrowRight, FaMouse, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Col, Container, Row } from 'react-bootstrap'
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations'
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <div style={{minHeight: '100vh'}} />
});

const HeroMobile = () => {
  useGSAPAnimations()
  
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
      <div className="vl-banner-mobile p-relative fix d-block d-lg-none">
      <Slider ref={sliderRef} {...settings} className="slider-active-mobile">
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
          <div className="vl-hero-social d-none d-sm-block" style={{position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 3}}>
            <h4 className="title">Follow Us:</h4>
            <div className="vl-hero-social-icon">
              <ul>
                <li><a className='d-flex align-items-center justify-content-center'
                       href="https://www.facebook.com/ai4afgorg/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={18}/></a></li>
                <li><a className='d-flex align-items-center justify-content-center'
                       href="#"><FaInstagram size={18}/></a></li>
                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaXTwitter
                    size={18}/></a></li>
                <li><a className='d-flex align-items-center justify-content-center' href="https://www.linkedin.com/in/ai4afgorg" target="_blank" rel="noopener noreferrer"><FaLinkedinIn
                    size={18}/></a></li>
              </ul>
            </div>
          </div>
          <div style={{position: 'relative', zIndex: 2, height: '100vh', display: 'flex', alignItems: 'center', padding: '0 16px', margin: '0 16px', transform: 'translateY(-40px)'}}>
            <div style={{width: '100%', maxWidth: '480px', margin: '0 auto'}}>
              <div className="vl-hero-section-title" style={{textAlign: 'left'}}>
                <h5 className="vl-subtitle hero-subtitle" style={{fontSize: '11px', fontWeight: '500', marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'auto', border: 'none'}}>
                  <Image src={titleIcon} alt='titleIcon' width={14} height={14} loading="eager"/>
                  Bringing AI to Afghanistan
                </h5>
                <h1 className="vl-title text-anime-style-3 hero-title" style={{fontSize: '36px', fontWeight: '700', lineHeight: '1.1', marginBottom: '18px', maxWidth: '100%'}}>
                  Empowering Afghan<br/><span style={{background: '#089a45', padding: '2px 20px 2px 8px', clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)', display: 'inline-block', transition: 'all 0.2s ease'}}>Youth</span> Through<br/>AI Innovation
                </h1>
                <p className="hero-description" style={{fontSize: '14px', fontWeight: '400', lineHeight: '1.6', marginBottom: '20px'}}>
                  We&apos;re training the next generation of Afghan innovators.<br/>
                  Real skills, real opportunities, real change.
                </p>
                <div className="vl-hero-btn hero-button">
                  <a href="/pages/contact" className="header-btn1" style={{fontSize: '13px', fontWeight: '600', padding: '10px 16px'}}>
                    Join Our Mission <span><FaArrowRight/></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div style={{position: 'absolute', bottom: '30px', right: '20px', zIndex: 3}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', cursor: 'pointer'}} onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
          <span style={{fontSize: '12px', marginBottom: '8px'}}>Scroll Down</span>
          <FaMouse style={{fontSize: '20px', animation: 'bounce 2s infinite'}} />
        </div>
      </div>
      
      <style jsx global>{`
        body {
          overflow-x: hidden !important;
        }
        
        .vl-banner-mobile {
          height: 100vh !important;
          min-height: 100vh !important;
          position: relative !important;
          overflow-x: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .vl-title {
          font-size: 58px !important;
        }
        
        .vl-banner-mobile .vl-title {
          font-size: 30px !important;
        }
        
        @media (max-width: 991px) {
          .topbar {
            display: none !important;
          }
        }
        

        
        .header-btn1 {
          background: #089a45 !important;
          color: #ffffff !important;
        }
        
        .header-btn1 {
          transition: all 0.2s ease !important;
        }
        
        .header-btn1:hover {
          background: #067a35 !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
        }
        
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
        
        .vl-hero-social {
          animation: slideInLeft 0.6s ease-out 0.5s both !important;
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }
        

      `}</style>
    </div>
  )
}

export default HeroMobile