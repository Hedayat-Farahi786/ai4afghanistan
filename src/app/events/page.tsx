'use client'
import { useState } from 'react'

import Link from 'next/link'
import { FaMapMarkerAlt, FaClock, FaArrowLeft, FaSearch, FaUserPlus, FaCalendarPlus } from 'react-icons/fa'

const eventsData = [
  {
    id: 1,
    date: '12',
    month: 'JAN',
    year: '2025',
    time: '10:00 AM',
    title: 'AI4Afghanistan Launch Event',
    description: 'Official announcement of AI4Afghanistan with our mission, vision, and upcoming programs.',
    location: 'Virtual Event',
    category: 'Launch',
    status: 'Upcoming'
  },
  {
    id: 2,
    date: '25',
    month: 'JAN',
    year: '2025',
    time: '2:00 PM',
    title: 'AI Workshop for Beginners',
    description: 'Introduction to artificial intelligence and machine learning fundamentals.',
    location: 'Online Platform',
    category: 'Workshop',
    status: 'Upcoming'
  },
  {
    id: 3,
    date: '15',
    month: 'FEB',
    year: '2025',
    time: '11:00 AM',
    title: 'Tech Career Mentorship',
    description: 'Connect with industry professionals and get career guidance.',
    location: 'Zoom Meeting',
    category: 'Mentorship',
    status: 'Upcoming'
  },
  {
    id: 4,
    date: '28',
    month: 'FEB',
    year: '2025',
    time: '3:00 PM',
    title: 'Python Programming Bootcamp',
    description: 'Intensive Python programming course for beginners and intermediate learners.',
    location: 'Online Platform',
    category: 'Bootcamp',
    status: 'Upcoming'
  }
]

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Launch', 'Workshop', 'Mentorship', 'Bootcamp']
  
  const addToCalendar = (event: typeof eventsData[0]) => {
    const startDate = new Date(`${event.month} ${event.date}, ${event.year} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`
    
    window.open(googleUrl, '_blank')
  }
  
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <style jsx global>{`
        .header-area.homepage1 {
          background: transparent !important;
          position: absolute !important;
          top: 50px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: calc(100% - 40px) !important;
          max-width: 1200px !important;
          border-radius: 20px !important;
        }
        
        .header-elements {
          background: rgba(23, 69, 85, 0.9) !important;
          border-radius: 20px !important;
        }
        
        .header-area.homepage1.sticky {
          background: rgba(23, 69, 85, 0.9) !important;
          position: fixed !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: calc(100% - 40px) !important;
          max-width: 1200px !important;
          border-radius: 20px !important;
          top: 10px !important;
        }
        
        .events-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 140px 0 80px;
        }
        
        .events-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        @media (max-width: 1024px) {
          .events-container {
            max-width: 95%;
            padding: 0 15px;
          }
        }
        
        @media (max-width: 768px) {
          .events-page {
            padding: 120px 0 60px;
          }
          
          .events-container {
            max-width: 90%;
            padding: 0 10px;
          }
        }
        
        @media (max-width: 576px) {
          .events-page {
            padding: 110px 0 50px;
          }
          
          .events-container {
            max-width: 95%;
            padding: 0 8px;
          }
        }
        
        .events-back {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #089a45;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .back-link:hover {
          color: #174555;
          gap: 15px;
        }
        
        .events-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .events-title {
          color: #174555;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .events-description {
          color: #666;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .events-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          gap: 20px;
        }
        
        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }
        
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 50px !important;
          border: 2px solid #174555;
          border-radius: 25px;
          font-size: 14px;
          background: white;
          color: #174555;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #089a45;
        }
        
        .search-input::placeholder {
          color: #999;
        }
        
        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #174555;
        }
        
        .category-filters {
          display: flex;
          gap: 10px;
        }
        
        .category-btn {
          padding: 8px 16px;
          border: 2px solid #e9ecef;
          background: white;
          color: #666;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .category-btn.active {
          background: #089a45 !important;
          border-color: #089a45 !important;
          color: #fafafa !important;
          box-shadow: 0 4px 12px rgba(8, 154, 69, 0.3);
          transform: translateY(-1px);
        }
        
        .category-btn:hover {
          border-color: #089a45;
          color: #089a45;
        }
        
        .events-results {
          margin-bottom: 20px;
          color: #666;
          font-size: 14px;
        }
        
        .events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        
        .event-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(8, 154, 69, 0.1);
          position: relative;
          height: 420px;
          display: flex;
          flex-direction: column;
          width: 100%;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        .event-card:nth-child(1) { animation-delay: 0.1s; }
        .event-card:nth-child(2) { animation-delay: 0.2s; }
        .event-card:nth-child(3) { animation-delay: 0.3s; }
        .event-card:nth-child(4) { animation-delay: 0.4s; }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .event-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(8, 154, 69, 0.15);
          border-color: #089a45;
        }
        
        .event-header {
          background: linear-gradient(135deg, #174555 0%, #089a45 100%);
          padding: 25px 30px;
          color: #fafafa !important;
          position: relative;
        }
        
        .event-header * {
          color: #fafafa !important;
        }
        
        .event-date-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 8px 12px;
          text-align: center;
          min-width: 60px;
        }
        
        .event-date-number {
          font-size: 20px;
          font-weight: 700;
          color: #fafafa !important;
          line-height: 1;
        }
        
        .event-date-month {
          font-size: 10px;
          font-weight: 600;
          color: #fafafa !important;
          text-transform: uppercase;
        }
        
        .event-date-year {
          font-size: 10px;
          font-weight: 500;
          color: #fafafa !important;
          opacity: 0.8;
        }
        
        .event-category {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: #fafafa !important;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
        }
        
        .event-title {
          color: #fafafa !important;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 10px;
        }
        
        .event-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 13px;
          color: #fafafa !important;
        }
        
        .event-meta * {
          color: #fafafa !important;
        }
        
        .event-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .event-meta-icon {
          color: #fafafa !important;
          font-size: 12px;
        }
        
        .event-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .event-description {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        
        .event-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }
        
        .event-btn {
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          border: none;
          flex: 1;
          justify-content: center;
        }
        
        .event-btn-primary {
          background: #089a45 !important;
          color: #fafafa !important;
        }
        
        .event-btn-primary:hover {
          background: #067a38 !important;
          color: #fafafa !important;
          transform: translateY(-2px);
        }
        
        .event-btn-secondary {
          background: rgba(23, 69, 85, 0.1) !important;
          color: #174555 !important;
          border: 1px solid rgba(23, 69, 85, 0.2);
        }
        
        .event-btn-secondary:hover {
          background: #174555 !important;
          color: #fafafa !important;
          transform: translateY(-2px);
        }
        

        
        @media (max-width: 768px) {
          .events-filters {
            flex-direction: column;
            align-items: stretch;
            gap: 15px;
          }
          
          .category-filters {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .events-title {
            font-size: clamp(24px, 5vw, 32px);
          }
          
          .events-description {
            font-size: 16px;
          }
          
          .events-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .event-card {
            height: auto;
            min-height: 350px;
          }
          
          .event-header {
            padding: 20px 25px;
          }
          
          .event-content {
            padding: 25px;
          }
          
          .event-title {
            font-size: 18px;
          }
          
          .event-actions {
            flex-direction: column;
            gap: 10px;
          }
        }
        
        @media (max-width: 576px) {
          .events-title {
            font-size: clamp(20px, 6vw, 28px);
          }
          
          .events-description {
            font-size: 14px;
          }
          
          .search-input {
            padding: 10px 14px 10px 45px !important;
            font-size: 13px;
          }
          
          .category-btn {
            padding: 6px 12px;
            font-size: 12px;
          }
          
          .event-header {
            padding: 18px 20px;
          }
          
          .event-content {
            padding: 20px;
          }
          
          .event-title {
            font-size: 16px;
          }
          
          .event-description {
            font-size: 13px;
          }
          
          .event-btn {
            padding: 8px 16px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="events-page">
        <div className="events-container">
          <div className="events-back">
            <Link href="/#events" className="back-link">
              <FaArrowLeft />
              Back to Home
            </Link>
          </div>
          
          <div className="events-header">
            <h1 className="events-title">All Events</h1>
            <p className="events-description">
              Discover upcoming workshops, career fairs, and educational events designed to advance your tech skills.
            </p>
          </div>
          
          <div className="events-filters">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search events..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="events-results">
            Showing {filteredEvents.length} of {eventsData.length} events
          </div>
          
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <div className="event-date-badge">
                    <div className="event-date-number">{event.date}</div>
                    <div className="event-date-month">{event.month}</div>
                    <div className="event-date-year">{event.year}</div>
                  </div>
                  <div className="event-category">{event.category}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <FaClock className="event-meta-icon" />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-meta-item">
                      <FaMapMarkerAlt className="event-meta-icon" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="event-content">
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-actions">
                    <button className="event-btn event-btn-primary">
                      <FaUserPlus />
                      Register Now
                    </button>
                    <button 
                      className="event-btn event-btn-secondary"
                      onClick={() => addToCalendar(event)}
                    >
                      <FaCalendarPlus />
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventsPage