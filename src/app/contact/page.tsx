'use client'
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa'
import TopBanner from '@/components/layouts/TopBanner'
import HomeFooter from '@/components/layouts/Footer/HomeFooter'

const ContactPage = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  
  React.useEffect(() => {
    setIsVisible(true)
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <style jsx global>{`
        body {
          background: #174555 !important;
        }
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
        .contact-section {
          background: #ffffff !important;
          padding: 100px 0;
          min-height: 100vh;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .contact-subtitle {
          color: #089a45;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .contact-title {
          color: #174555;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        .contact-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 3px;
          background: #089a45;
          border-radius: 2px;
        }
        .contact-description {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-form {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        .contact-form.visible {
          opacity: 1;
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-label {
          color: #174555;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
        }
        .form-input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }
        .form-input:focus {
          outline: none;
          border-color: #089a45;
          background: white;
          box-shadow: 0 0 0 3px rgba(8, 154, 69, 0.1);
        }
        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }
        .submit-btn {
          background: #174555;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 auto;
        }
        .submit-btn:hover {
          background: #089a45;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(8, 154, 69, 0.3);
        }
        .submit-btn:active {
          transform: translateY(0);
        }
        .contact-info {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 40px;
          height: 100%;
          animation: fadeInUp 0.6s ease 0.2s forwards;
          opacity: 0;
        }
        .contact-info.visible {
          opacity: 1;
        }
        .contact-info-title {
          color: #174555;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 32px;
        }
        .contact-icon {
          width: 48px;
          height: 48px;
          background: #089a45;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          flex-shrink: 0;
        }
        .contact-details h4 {
          color: #174555;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .contact-details p {
          color: #666;
          font-size: 14px;
          margin: 0;
          line-height: 1.5;
        }
        .contact-details a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-details a:hover {
          color: #089a45;
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 0;
          }
          .contact-form,
          .contact-info {
            padding: 30px 20px;
            margin-bottom: 30px;
          }
        }
      `}</style>

      <TopBanner />
      
      <section className="contact-section">
        <Container>
          <div className="contact-header">
            <h5 className="contact-subtitle">Get In Touch</h5>
            <h1 className="contact-title">Contact AI4Afghanistan</h1>
            <p className="contact-description">
              Ready to join our mission? Have questions about our programs? 
              We&apos;d love to hear from you and explore how we can work together.
            </p>
          </div>

          <Row>
            <Col lg={8} md={7}>
              <form className={`contact-form ${isVisible ? 'visible' : ''}`} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                  <FaPaperPlane />
                </button>
              </form>
            </Col>
            
            <Col lg={4} md={5}>
              <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
                <h3 className="contact-info-title">Contact Information</h3>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    <p>
                      <a href="mailto:info@ai4afghanistan.org">info@ai4afghanistan.org</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h4>Call Us</h4>
                    <p>
                      <a href="tel:+4917646294780">+49 176 46294780</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h4>Visit Us</h4>
                    <p>Hamburg, Germany</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <HomeFooter />
    </>
  )
}

export default ContactPage