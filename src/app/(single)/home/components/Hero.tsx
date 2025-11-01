'use client'
import Image from 'next/image'
import React, {useRef, useEffect, useState} from 'react'
import heroBanner from '@/assets/img/banner/hero_banner.jpg'
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg'
import logo1Img from '@/assets/img/logo/vl-logo-1.1.png'
import {FaFacebookF, FaInstagram, FaArrowRight, FaMouse, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Col, Container, Row} from 'react-bootstrap'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    draggable: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    arrows: false,
    dots: false,
    ssr: true,
  };

  const sliderRef = useRef<Slider | null>(null);


  if (!isClient) {
    return (
      <div className="vl-banner p-relative fix" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#174555'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
          <Image src={logo1Img} alt='AI4Afghanistan Logo' width={80} height={80} priority style={{animation: 'pulse 2s infinite'}} />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{color: '#ffffff', fontSize: '24px', fontWeight: '700'}}>AI<span style={{color: '#089a45'}}>4</span>Afghanistan</span>
            <span style={{color: '#eee', fontSize: '12px', marginTop: '4px'}}>Loading...</span>
          </div>
        </div>
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  return (
      <div className="vl-banner p-relative fix">
        <Slider ref={sliderRef} {...settings} className="slider-active-1">
          <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 1}}></div>
            <div className="vl-hero-shape shape-1" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden'}}>
              <Image src={heroBanner} alt='hero banner' fill priority style={{objectFit: 'cover', objectPosition: 'center'}}/>
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
                      <Image src={titleIcon} alt='titleIcon' width={16} height={16}/>
                      Bringing AI to Afghanistan
                    </h5>
                    <h1 className="vl-title text-anime-style-3" style={{fontSize: '52px', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', maxWidth: '700px'}}>
                      Empowering Afghan <span style={{background: '#089a45', padding: '2px 26px 2px 12px', clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)', display: 'inline-block'}}>Youth</span> Through AI Innovation
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

          <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 1}}></div>
            <div className="vl-hero-shape shape-1" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden'}}>
              <Image src={heroBanner} alt='hero banner' fill style={{objectFit: 'cover', objectPosition: 'center'}}/>
            </div>
            <div className="vl-hero-social d-none d-lg-block" style={{position: 'absolute', left: '50px', top: '50%', transform: 'translateY(-50%)', zIndex: 3}}>
              <h4 className="title">Follow Us:</h4>
              <div className="vl-hero-social-icon">
                <ul>
                  <li><a className='d-flex align-items-center justify-content-center'
                         href="https://www.facebook.com/ai4afgorg/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20}/></a></li>
                  <li><a className='d-flex align-items-center justify-content-center'
                         href="#"><FaInstagram size={20}/></a></li>
                  <li><a className='d-flex align-items-center justify-content-center'
                         href="#"><FaXTwitter size={20}/></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.linkedin.com/in/ai4afgorg" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20}/></a>
                  </li>
                </ul>
              </div>
            </div>
            <Container style={{position: 'relative', zIndex: 2, marginTop: '-60px'}}>
              <Row>
                <Col lg={7}>
                  <div className="vl-hero-section-title">
                    <h5 className="vl-subtitle" style={{fontSize: '14px', fontWeight: '500', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', width: 'auto', border: 'none'}}>
                      <Image src={titleIcon} alt='titleIcon' width={16} height={16}/>
                      Advancing Excellence
                    </h5>
                    <h1 className="vl-title text-anime-style-3" style={{fontSize: '52px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', maxWidth: '500px'}}>
                      Building Tomorrow's AI Leaders Today
                    </h1>
                    <p style={{fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '32px'}}>
                      Afghanistan deserves a place in the digital future.<br/>
                      We&apos;re making it happen, one student at a time.
                    </p>
                    <div className="vl-hero-btn">
                      <a href="/pages/contact" className="header-btn1" style={{fontSize: '16px', fontWeight: '600', padding: '14px 28px'}}>
                        Get Involved <span><FaArrowRight/></span>
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
       }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}</style>
      </div>


  )
}

export default Hero