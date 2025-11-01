'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { teamData } from '../data';
import { Container } from 'react-bootstrap';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [typingText, setTypingText] = useState<{[key: number]: string}>({});
  const [isTyping, setIsTyping] = useState<{[key: number]: boolean}>({});
  const [hoverTimeout, setHoverTimeout] = useState<{[key: number]: NodeJS.Timeout}>({});

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 576) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 992) setItemsPerView(3);
      else setItemsPerView(4);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxSlide = Math.max(0, teamData.length - itemsPerView);
  const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  const startTyping = (index: number, text: string) => {
    if (hoverTimeout[index]) clearTimeout(hoverTimeout[index]);
    
    setTypingText(prev => ({...prev, [index]: ''}));
    setIsTyping(prev => ({...prev, [index]: false}));
    
    const timeout = setTimeout(() => {
      setIsTyping(prev => ({...prev, [index]: true}));
      
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setTypingText(prev => ({...prev, [index]: text.slice(0, i + 1)}));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(prev => ({...prev, [index]: false}));
        }
      }, 20);
    }, 500);
    
    setHoverTimeout(prev => ({...prev, [index]: timeout}));
  };

  const resetTyping = (index: number) => {
    if (hoverTimeout[index]) {
      clearTimeout(hoverTimeout[index]);
      setHoverTimeout(prev => ({...prev, [index]: undefined}));
    }
    setTypingText(prev => ({...prev, [index]: ''}));
    setIsTyping(prev => ({...prev, [index]: false}));
  };

  const handleMemberClick = (memberIndex: number) => {
    window.location.href = `/team/${memberIndex + 1}`;
  };

  return (
    <>
      <style jsx global>{`
        .team-section {
          padding: 80px 0;
          background: #f8f9fa;
          position: relative;
          overflow: visible;
        }
        .team-subtitle::after {
          content: '' !important;
          position: absolute !important;
          bottom: -8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 40px !important;
          height: 2px !important;
          background: #089a45 !important;
        }
        .team-container {
          position: relative;
          overflow: visible;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 80px 20px;
        }
        .team-track {
          display: flex;
          transition: transform 0.6s ease;
          gap: 30px;
          padding: 0 0 20px;
          justify-content: center;
          overflow: visible;
        }
        .team-card {
          flex: 0 0 calc(30% - 20px);
          background: white;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          height: 420px;
          display: flex;
          flex-direction: column;
          border: 1px solid #f0f0f0;
          position: relative;
          cursor: pointer;
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(8, 154, 69, 0.15);
          border: 2px solid #174555;
        }
        .team-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin: 0 auto 24px;
          position: relative;
          overflow: hidden;
          border: 1px solid #174555 !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          background: #f8f9fa;
        }
        .team-card:hover .team-image {
          border-color: #089a45 !important;
          border-width: 2px !important;
        }
          .team-card:hover {
          border: 2px solid #174555 !important;
          }
        .team-name {
          color: #174555;
          font-size: 18px;
          font-weight: 700;
          margin-top: 12px;
          margin-bottom: 10px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .team-divider {
          width: 50%;
          height: 2px;
          background: #089a4590;
          margin: 8px auto;
        }
        .team-role {
          color: #6bb6ff;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .team-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #174555;
          color: #fafafa !important;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.4;
          width: 220px;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10000;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          pointer-events: none;
        }
        .team-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #174555;
        }
        .team-card:hover .team-tooltip {
          opacity: 1;
          visibility: visible;
        }
        .typing-text {
          color: #fafafa !important;
        }
        .typing-cursor {
          display: inline-block;
          background-color: #fafafa;
          width: 2px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .team-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .team-social {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: auto;
        }
        .team-social-link {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #f8f9fa !important;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #174555 !important;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 16px;
        }
        .team-social-link:hover {
          background: #089a45 !important;
          color: #fafafa !important;
        }
        .team-social-link * {
          color: inherit !important;
        }
        .team-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(8,154,69,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #174555;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          z-index: 10;
          backdrop-filter: blur(10px);
        }
        .team-nav:hover {
          background: #089a45;
          color: white;
          border-color: #089a45;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 12px 35px rgba(8,154,69,0.25);
        }
        .team-nav:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: translateY(-50%);
        }
        .team-nav.prev {
          left: -60px;
        }
        .team-nav.next {
          right: -60px;
        }
        .team-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
          padding: 12px 20px;
          background: rgba(255,255,255,0.95);
          border-radius: 20px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.1);
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(8,154,69,0.1);
        }
        .team-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        .team-dot:hover {
          background: #089a45;
          transform: scale(1.25);
        }
        .team-dot.active {
          background: #089a45;
          width: 24px;
          border-radius: 12px;
          transform: scale(1);
        }
        @media (max-width: 1199px) {
          .team-container {
            padding: 60px 100px 20px;
          }
        }
        @media (max-width: 991px) {
          .team-card {
            flex: 0 0 calc(45% - 15px);
          }
          .team-container {
            padding: 60px 60px 20px;
          }
        }
        @media (max-width: 767px) {
          .team-card {
            flex: 0 0 calc(70% - 10px);
          }
          .team-container {
            padding: 60px 40px 20px;
          }
          .team-nav {
            display: none;
          }
        }
        @media (max-width: 575px) {
          .team-card {
            flex: 0 0 100%;
          }
          .team-container {
            padding: 60px 20px 20px;
          }
        }
      `}</style>
      
      <section id="team" className="team-section">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h5 style={{ color: '#174555', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', position: 'relative', display: 'inline-block' }} className="team-subtitle">
              Our Team
            </h5>
            <h2 style={{ color: '#174555', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              Meet Our Dedicated Team
            </h2>
            <p style={{ color: '#666', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Our passionate team of educators, technologists, and community leaders working together to empower Afghan youth through AI and technology education.
            </p>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div className="team-container">
              <div className="team-track">
                {teamData.slice(currentIndex, currentIndex + itemsPerView).map((member, idx) => (
                  <div 
                    key={idx} 
                    className="team-card"
                    onMouseEnter={() => startTyping(currentIndex + idx, member.description)}
                    onMouseLeave={() => resetTyping(currentIndex + idx)}
                    onClick={() => handleMemberClick(currentIndex + idx)}
                  >
                    <div className="team-image">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="team-content">
                      <div>
                        <h3 className="team-name">{member.name}</h3>
                        <div className="team-divider"></div>
                        <p className="team-role">{member.role}</p>
                      </div>
                      <div className="team-social">
                        {member.instagram && (
                          <a href={member.instagram} className="team-social-link" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                          </a>
                        )}
                        {member.linkedin && (
                          <a href={member.linkedin} className="team-social-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                          </a>
                        )}
                        {member.twitter && (
                          <a href={member.twitter} className="team-social-link" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="team-social-link">
                            <FaEnvelope />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="team-tooltip">
                      <span className="typing-text">
                        {typingText[currentIndex + idx] || ''}
                        {isTyping[currentIndex + idx] && <span className="typing-cursor">|</span>}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {maxSlide > 0 && (
              <>
                <button 
                  className="team-nav prev"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                >
                  <FaChevronLeft />
                </button>
                <button 
                  className="team-nav next"
                  onClick={nextSlide}
                  disabled={currentIndex >= maxSlide}
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
          
          {maxSlide > 0 && (
            <div className="team-dots">
              {Array.from({ length: maxSlide + 1 }, (_, idx) => (
                <button
                  key={idx}
                  className={`team-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export default Team;