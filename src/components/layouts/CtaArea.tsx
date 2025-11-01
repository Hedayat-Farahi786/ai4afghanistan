'use client'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const CtaArea = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <>
      <style jsx global>{`
        .cta-section {
          padding: 80px 0 !important;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%) !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .cta-section::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: 
            radial-gradient(circle at 20% 20%, rgba(8, 154, 69, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(23, 69, 85, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(8, 154, 69, 0.05) 0%, transparent 30%) !important;
          pointer-events: none !important;
        }
        .cta-section::after {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-image: 
            linear-gradient(45deg, rgba(8, 154, 69, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(23, 69, 85, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(8, 154, 69, 0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(23, 69, 85, 0.02) 75%) !important;
          background-size: 60px 60px !important;
          background-position: 0 0, 0 30px, 30px -30px, -30px 0px !important;
          pointer-events: none !important;
          opacity: 0.4 !important;
        }
        .cta-container {
          max-width: 800px !important;
          margin: 0 auto !important;
          padding: 0 20px !important;
          position: relative !important;
          z-index: 1 !important;
        }
        .cta-content {
          text-align: center !important;
          color: #174555 !important;
        }
        .cta-subtitle {
          color: #174555 !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          margin-bottom: 16px !important;
          position: relative !important;
          display: inline-block !important;
        }
        .cta-subtitle::after {
          content: '' !important;
          position: absolute !important;
          bottom: -8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 40px !important;
          height: 2px !important;
          background: #089a45 !important;
        }
        .cta-title {
          font-size: clamp(28px, 4vw, 42px) !important;
          font-weight: 700 !important;
          line-height: 1.2 !important;
          margin-bottom: 20px !important;
          color: #174555 !important;
        }
        .cta-description {
          font-size: 16px !important;
          line-height: 1.6 !important;
          margin-bottom: 40px !important;
          opacity: 0.9 !important;
          max-width: 600px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          color: #666 !important;
        }
        .cta-form {
          max-width: 500px !important;
          margin: 0 auto !important;
          position: relative !important;
        }
        .form-group {
          display: flex !important;
          flex-direction: row !important;
          background: white !important;
          border-radius: 50px !important;
          padding: 6px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
          transition: all 0.3s ease !important;
          align-items: center !important;
          width: 100% !important;
        }
        .form-group:focus-within {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
          transform: translateY(-2px) !important;
        }
        .email-input {
          flex: 1 !important;
          border: none !important;
          outline: none !important;
          padding: 16px 24px !important;
          font-size: 16px !important;
          background: transparent !important;
          color: #333 !important;
          height: 52px !important;
          box-sizing: border-box !important;
        }
        .email-input::placeholder {
          color: #999 !important;
        }
        .submit-btn {
          background: #174555 !important;
          color: white !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          padding: 8px 8px 8px 20px !important;
          border-radius: 50px !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          position: relative !important;
          z-index: 1 !important;
          transition: .3s !important;
          border: none !important;
          cursor: pointer !important;
          text-decoration: none !important;
          height: 52px !important;
          flex-shrink: 0 !important;
          white-space: nowrap !important;
        }
        .submit-btn::after {
          position: absolute !important;
          content: "" !important;
          left: 0 !important;
          top: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background: #089a45 !important;
          border-radius: 50px !important;
          z-index: -1 !important;
          transform: scaleX(0) !important;
          transition: .3s !important;
        }
        .submit-btn:hover {
          color: white !important;
          transition: .3s !important;
        }
        .submit-btn:hover::after {
          transform: scaleX(1) !important;
        }
        .submit-btn-icon {
          background: #089a45 !important;
          height: 36px !important;
          width: 36px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 50px !important;
          color: white !important;
        }
        
        .cta-title-number {
          color: #089a45 !important;
          font-weight: 700 !important;
        }
        
        @media (max-width: 768px) {
          .cta-section {
            padding: 60px 0 !important;
          }
          .cta-container {
            padding: 0 16px !important;
          }
          .form-group {
            flex-direction: row !important;
            padding: 6px !important;
            border-radius: 50px !important;
          }
          .email-input {
            padding: 16px 20px !important;
            height: 52px !important;
            min-width: 0 !important;
          }
          .submit-btn {
            border-radius: 50px !important;
            height: 52px !important;
            padding: 8px 8px 8px 16px !important;
          }
        }
      `}</style>
      
      <section id="contact" className="cta-section">
        <Container>
          <div className="cta-container">
            <div className="cta-content">
              <h5 className="cta-subtitle">Newsletter</h5>
              <h2 className="cta-title">Stay Updated with AI<span className="cta-title-number">4</span>Afghanistan</h2>
              <p className="cta-description">
                Subscribe to our newsletter and get the latest news, program updates, success stories, 
                and exclusive insights delivered straight to your inbox.
              </p>
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="email-input"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Subscribe
                    <span className="submit-btn-icon">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CtaArea