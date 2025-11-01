'use client'
import React, { useState, useEffect } from 'react'
import eventImg from '@/assets/img/event/event1.png'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight, FaClock, FaMapMarkerAlt, FaCalendarPlus, FaCalendarAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa'

const EventArea = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [, setCardsPerView] = useState(2)
  
  const events = [
    {
      date: '12',
      month: 'JAN',
      year: '2025',
      time: '10:00 AM',
      title: 'AI4Afghanistan Launch Event',
      description: 'Official announcement of AI4Afghanistan with our mission, vision, and upcoming programs.',
      location: 'Virtual Event'
    },
    {
      date: '25',
      month: 'JAN',
      year: '2025',
      time: '2:00 PM',
      title: 'AI Workshop for Beginners',
      description: 'Introduction to artificial intelligence and machine learning fundamentals.',
      location: 'Online Platform'
    },
    {
      date: '15',
      month: 'FEB',
      year: '2025',
      time: '11:00 AM',
      title: 'Tech Career Mentorship',
      description: 'Connect with industry professionals and get career guidance.',
      location: 'Zoom Meeting'
    },
    {
      date: '28',
      month: 'FEB',
      year: '2025',
      time: '3:00 PM',
      title: 'Python Programming Bootcamp',
      description: 'Intensive Python programming course for beginners and intermediate learners.',
      location: 'Online Platform'
    }
  ]

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else setCardsPerView(2);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxSlide = Math.max(0, events.length - 2);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const addToCalendar = (event) => {
    const startDate = new Date(`${event.month} ${event.date}, ${event.year} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`
    
    window.open(googleUrl, '_blank')
  }

  return (
    <>
      <style jsx global>{`
        .events-subtitle::after {
          content: '' !important;
          position: absolute !important;
          bottom: -8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 40px !important;
          height: 2px !important;
          background: #089a45 !important;
        }
        .events-vertical-section {
          padding: 80px 0;
          background: #ffffff;
        }
        .event-hero {
          background-image: url(${eventImg.src});
          background-size: cover;
          background-position: center top 20%;
          border-radius: 16px;
          padding: 60px 40px;
          position: relative;
          overflow: hidden;
          height: 500px;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .event-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(8, 25, 30, 0.98) 0%, transparent 100%);
        }
        .event-hero-content {
          position: relative;
          z-index: 2;
          width: 70%;
        }
        .event-hero h5,
        .event-hero h2,
        .event-hero p,
        .event-hero span,
        .event-hero div {
          color: #ffffff !important;
        }
        .events-vertical-carousel {
          height: 500px;
          position: relative;
          overflow: hidden;
        }
        .events-vertical-track {
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.3s ease;
        }
        .event-vertical-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          border: 1px solid #174555 !important;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .event-vertical-card:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          border-color: #089a45;
        }
        .event-vertical-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f1f3f4;
          padding: 6px 10px;
          border-radius: 12px;
          margin-bottom: 12px;
          width: fit-content;
        }
        .event-vertical-date-icon {
          color: #089a45;
          font-size: 12px;
        }
        .event-vertical-date-text {
          font-size: 11px;
          font-weight: 600;
          color: #174555;
        }
        .event-vertical-title {
          color: #174555;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .event-vertical-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 12px;
          color: #666;
        }
        .event-vertical-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .event-vertical-description {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }
        .event-vertical-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .event-vertical-btn {
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          border: none;
          min-height: 28px;
        }
        .event-vertical-btn-primary {
          background: #089a45;
          color: #fafafa !important;
        }
        .event-vertical-btn-primary:hover {
          background: #174555;
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary {
          background: #f1f3f4;
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary * {
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary span {
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary svg {
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary:hover {
          background: #089a45 !important;
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary:hover * {
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary:hover span {
          color: #fafafa !important;
        }
        .event-vertical-btn-secondary:hover svg {
          color: #fafafa !important;
        }
        .events-vertical-nav {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }
        .events-vertical-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          border: 2px solid #e9ecef;
          color: #174555 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        .events-vertical-nav-btn * {
          color: #fafafa !important;
        }
        .events-vertical-nav-btn:hover {
          background: #089a45 !important;
          color: #fafafa !important;
          border-color: #089a45;
        }
        .events-vertical-nav-btn:hover * {
          color: #fafafa !important;
        }
        .events-vertical-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .events-vertical-nav-btn:disabled:hover {
          background: white !important;
          color: #174555 !important;
          border-color: #e9ecef;
        }
        .events-header {
          position: absolute;
          top: -40px;
          right: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .events-count {
          background: rgba(23, 69, 85, 0.9);
          color: #fafafa !important;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          backdrop-filter: blur(4px);
        }
        .view-all-btn {
          background: #E6F5EC !important;
          color: #089a45 !important;
          border: none;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          backdrop-filter: blur(4px);
        }
        .view-all-btn:hover {
          background: #089a45 !important;
          color: #fafafa !important;
        }
        @media (max-width: 992px) {
          .event-hero {
            height: 400px;
            margin-bottom: 30px;
          }
          .events-vertical-carousel {
            height: auto;
            max-height: 400px;
          }
        }
        @media (max-width: 768px) {
          .events-vertical-section {
            padding: 60px 0;
          }
          .event-hero {
            height: 300px;
          }
          .events-vertical-carousel {
            height: auto;
            max-height: none;
          }
          .event-vertical-actions {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
      
      <section id="events" className="events-vertical-section">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h5 style={{ color: '#174555', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', position: 'relative', display: 'inline-block' }} className="events-subtitle">
              Upcoming Events
            </h5>
            <h2 style={{ color: '#174555', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              Join Our Community Events
            </h2>
            <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              Educational programs and workshops designed for Afghan youth in technology.
            </p>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div className="events-header">
              <div className="events-count">
                {events.length} Events
              </div>
              <Link href="/events" className="view-all-btn">
                View All <FaArrowRight size={10} />
              </Link>
            </div>
            <Row>
              <Col lg={6}>
                <div className="event-hero">
                  <div className="event-hero-content">
                    <div className="event-vertical-date" style={{ background: 'rgba(255,255,255,0.2)', marginBottom: '12px' }}>
                      <FaCalendarAlt className="event-vertical-date-icon" style={{ color: '#fafafa' }} />
                      <span className="event-vertical-date-text" style={{ color: '#fafafa', fontSize: '10px' }}>{events[0].date} {events[0].month} {events[0].year}</span>
                    </div>
                    <h2 style={{ marginBottom: '8px', fontSize: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{events[0].title}</h2>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '12px', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaClock size={10} />
                        <span>{events[0].time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaMapMarkerAlt size={10} />
                        <span>{events[0].location}</span>
                      </div>
                    </div>
                    <p style={{ marginBottom: '20px', fontSize: '13px', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{events[0].description}</p>
                    <Link href="/contact" className="header-btn1">
                      Register Now <span><FaArrowRight /></span>
                    </Link>
                  </div>
                </div>
              </Col>
              
              <Col lg={6} style={{ position: 'relative' }}>
                <div className="events-vertical-carousel">
                <div 
                  className="events-vertical-track"
                  style={{ transform: `translateY(-${currentSlide * 236}px)` }}
                >
                  {events.map((event, idx) => (
                    <div key={idx} className="event-vertical-card">
                      <div className="event-vertical-date">
                        <FaCalendarAlt className="event-vertical-date-icon" />
                        <span className="event-vertical-date-text">{event.date} {event.month} {event.year}</span>
                      </div>
                      
                      <h3 className="event-vertical-title">{event.title}</h3>
                      
                      <div className="event-vertical-meta">
                        <div className="event-vertical-meta-item">
                          <FaClock size={10} />
                          <span>{event.time}</span>
                        </div>
                        <div className="event-vertical-meta-item">
                          <FaMapMarkerAlt size={10} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="event-vertical-description">{event.description}</p>
                      
                      <div className="event-vertical-actions">
                        <Link href="/contact" className="event-vertical-btn event-vertical-btn-primary">
                          Register <FaArrowRight size={10} />
                        </Link>
                        <button 
                          className="event-vertical-btn event-vertical-btn-secondary"
                          onClick={() => addToCalendar(event)}
                        >
                          <FaCalendarPlus size={10} />
                          Add Calendar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
                
                {events.length > 2 && (
                  <div className="events-vertical-nav">
                    <button 
                      className="events-vertical-nav-btn"
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                    >
                      <FaChevronUp size={14} />
                    </button>
                    <button 
                      className="events-vertical-nav-btn"
                      onClick={nextSlide}
                      disabled={currentSlide >= maxSlide}
                    >
                      <FaChevronDown size={14} />
                    </button>
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default EventArea