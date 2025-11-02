'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import contactSvg from '@/assets/img/contact/contact.svg'

const Contact = () => {

  return (
    <>
      <style jsx global>{`
        body {
          background: #174555 !important;
        }
        .contact-section {
          background: #ffffff !important;
          padding: 80px 0;
        }
        .contact-main-container {
          width: 80%;
          margin: 0 auto;
          padding: 0 15px;
          max-width: 1200px;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .contact-subtitle {
          color: #174555;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .contact-title {
          color: #174555;
          font-size: 28px;
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
          font-size: 14px;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-form {
          background: white;
          border-radius: 20px;
          padding: 60px 50px;
          box-shadow: 0 8px 32px rgba(23, 69, 85, 0.06);
          border: none;
        }

        .contact-form .form-group {
          margin-bottom: 20px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-start !important;
          align-items: stretch !important;
        }
        .contact-form .form-label {
          color: #174555 !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          margin-bottom: 8px !important;
          align-self: flex-start !important;
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          order: 1 !important;
        }
        .contact-form .form-input {
          width: 100% !important;
          padding: 16px 20px !important;
          border: 2px solid #d1d5db !important;
          border-radius: 30px !important;
          font-size: 16px !important;
          transition: border-color 0.2s ease !important;
          background: transparent !important;
          resize: none !important;
          box-shadow: none !important;
          order: 2 !important;
          color: #174555 !important;
        }
        .form-input[type="text"], .form-input[type="email"] {
          height: 56px;
        }
        textarea.form-input {
          min-height: 140px;
          height: 140px;
        }
        .form-input:focus {
          outline: none;
          border-color: #174555;
        }
        .form-input::placeholder {
          color: #999;
        }
        
        /* Override Bootstrap form classes only in contact section */
        .contact-section .form-control {
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .contact-section .form-label {
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .contact-section .form-group {
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }

        .submit-btn {
          background: #174555 !important;
          color: white;
          font-size: 18px;
          font-weight: 700;
          padding: 8px 8px 8px 20px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 1;
          transition: .3s;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }
        .submit-btn::after {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background: #089a45;
          border-radius: 50px;
          z-index: -1;
          transform: scaleX(0);
          transition: .3s;
        }
        .submit-btn:hover {
          color: white;
          transition: .3s;
        }
        .submit-btn:hover::after {
          transform: scaleX(1);
        }
        .submit-btn:hover .btn-icon {
          background: #174555;
          color: white;
          transition: .3s;
        }
        .btn-icon {
          background: white;
          height: 36px;
          width: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          transition: .3s;
          color: #174555;
        }
        .contact-svg {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 40px;
        }
        .contact-illustration {
          width: 100%;
          max-width: 350px;
          height: auto;
        }
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .contact-main-container {
            width: 90%;
          }
          
          .contact-form {
            padding: 50px 40px;
          }
        }
        
        @media (max-width: 768px) {
          .contact-main-container {
            width: 95%;
            padding: 0 10px;
          }
          
          .contact-section {
            padding: 60px 0;
          }
          
          .contact-header {
            margin-bottom: 40px;
          }
          
          .contact-title {
            font-size: 24px;
          }
          
          .contact-description {
            font-size: 13px;
          }
          
          .contact-form {
            padding: 30px 25px;
            margin-bottom: 30px;
            border-radius: 15px;
          }
          
          .contact-form .form-group {
            margin-bottom: 18px !important;
          }
          
          .contact-form .form-label {
            font-size: 13px !important;
            margin-bottom: 6px !important;
          }
          
          .contact-form .form-input {
            padding: 14px 18px !important;
            font-size: 14px !important;
          }
          
          .form-input[type="text"], .form-input[type="email"] {
            height: 50px;
          }
          
          textarea.form-input {
            min-height: 120px;
            height: 120px;
          }
          
          .submit-btn {
            font-size: 16px;
            padding: 6px 6px 6px 18px;
          }
          
          .btn-icon {
            height: 32px;
            width: 32px;
          }
          
          .contact-svg {
            padding: 30px 20px;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 576px) {
          .contact-main-container {
            width: 90%;
            padding: 0 8px;
          }
          
          .contact-section {
            padding: 50px 0;
          }
          
          .contact-header {
            margin-bottom: 30px;
          }
          
          .contact-subtitle {
            font-size: 12px;
          }
          
          .contact-title {
            font-size: 20px;
            margin-bottom: 15px;
          }
          
          .contact-description {
            font-size: 12px;
          }
          
          .contact-form {
            padding: 25px 20px;
            margin-bottom: 25px;
            border-radius: 12px;
          }
          
          .contact-form .form-group {
            margin-bottom: 15px !important;
          }
          
          .contact-form .form-label {
            font-size: 12px !important;
            margin-bottom: 5px !important;
          }
          
          .contact-form .form-input {
            padding: 12px 16px !important;
            font-size: 13px !important;
            border-radius: 25px !important;
          }
          
          .form-input[type="text"], .form-input[type="email"] {
            height: 44px;
          }
          
          textarea.form-input {
            min-height: 100px;
            height: 100px;
          }
          
          .submit-btn {
            font-size: 14px;
            padding: 5px 5px 5px 16px;
          }
          
          .btn-icon {
            height: 28px;
            width: 28px;
          }
          
          .contact-svg {
            padding: 20px 15px;
            text-align: center;
          }
          
          .contact-illustration {
            max-width: 220px;
            margin: 0 auto 0 85%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-main-container">
          <div className="contact-header">
            <h5 className="contact-subtitle">Get In Touch</h5>
            <h2 className="contact-title section-title-divider">Contact AI for Afghanistan</h2>
            <p className="contact-description">
              Ready to join our mission? Have questions about our programs? 
              We&apos;d love to hear from you and explore how we can work together.
            </p>
          </div>

          <Row className="g-5">
            <Col lg={7} md={7}>
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="Your name" type="text" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="your@email.com" type="email" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input" placeholder="Your message" rows={8} />
                </div>
                <button className="submit-btn">
                  Send Message
                  <span className="btn-icon">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </Col>
            
            <Col lg={5} md={5}>
              <div className="contact-svg">
                <Image src={contactSvg} alt="Contact Illustration" className="contact-illustration" loading="lazy" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Contact