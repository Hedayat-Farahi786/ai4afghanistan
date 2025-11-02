'use client'
import React, { useState } from 'react'
import { FaHeart, FaArrowRight, FaCheck } from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import donationImage from '@/assets/img/donation/donation.jpg'


const Donation = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [selectedAmount, setSelectedAmount] = useState<number>(25)
  const [customAmount, setCustomAmount] = useState<string>('')

  const amounts = [10, 25, 50, 100, 250, 500]

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount
    console.log(`Donating €${amount} ${donationType}`)
    // Add donation logic here
  }

  return (
    <>
      <style jsx global>{`
        .donation-subtitle::after {
          content: '' !important;
          position: absolute !important;
          bottom: -8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 40px !important;
          height: 2px !important;
          background: #089a45 !important;
        }
        .donation-section {
          background: white;
          padding: 80px 0;
        }
        .donation-main-container {
          width: 80%;
          margin: 0 auto;
          padding: 0 15px;
          max-width: 1200px;
        }
        .donation-content {
          padding: 0 20px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 40px;
          padding-top: 20px;
        }
        .donation-toggle {
          display: flex;
          background: white;
          border-radius: 50px;
          padding: 6px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: 2px solid #e9ecef;
        }
        .toggle-option {
          flex: 1;
          padding: 8px 16px;
          text-align: center;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 13px;
          position: relative;
        }
        .toggle-option.active {
          background: #174555 !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(23, 69, 85, 0.3);
          transform: translateY(-2px);
        }
        .toggle-option:not(.active) {
          color: #666;
          background: transparent;
        }
        .toggle-option:not(.active):hover {
          background: #f8f9fa;
          color: #174555;
        }
        .amount-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }
        .amount-option {
          padding: 10px 6px;
          border: 1px solid #174555 !important;
          border-radius: 50px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 13px;
          background: white;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .amount-option.selected {
          border-color: #089a45 !important;
          background: #089a45 !important;
          color: white !important;
        }
        .amount-option:hover:not(.selected) {
          border-color: #174555 !important;
        }
        .custom-amount {
          width: 100%;
          padding: 10px 16px;
          border: 1px solid #174555 !important;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 16px;
          transition: border-color 0.3s ease;
          min-height: 36px;
          box-sizing: border-box;
        }
        .custom-amount:focus {
          outline: none;
          border-color: #089a45 !important;
        }
        .donate-button {
          width: 100%;
          background: #174555 !important;
          color: white !important;
          border: none !important;
          padding: 12px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 44px;
        }
        .donate-button:hover {
          background: #089a45 !important;
          color: white !important;
          transform: translateY(-2px);
        }
        .impact-list {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }
        .impact-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 10px;
          font-size: 12px;
          color: #666;
          line-height: 1.4;
        }
        .impact-icon {
          color: #089a45;
          font-size: 14px;
        }
        .illustration-area {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          height: 100%;
          padding: 0 20px;
          margin-top: -60px;
        }
        .donation-illustration {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .donation-main-container {
            width: 90%;
          }
        }
        
        @media (max-width: 768px) {
          .donation-main-container {
            width: 95%;
            padding: 0 10px;
          }
          
          .donation-section {
            padding: 60px 0;
          }
          
          .section-title {
            margin-bottom: 40px;
          }
          
          .section-title h2 {
            font-size: 28px !important;
          }
          
          .section-title p {
            font-size: 14px !important;
          }
          
          .donation-content {
            padding: 0 15px;
            margin-bottom: 30px;
          }
          
          .amount-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .illustration-area {
            padding: 15px;
            margin-top: 0;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 576px) {
          .donation-main-container {
            width: 90%;
            padding: 0 8px;
          }
          
          .donation-section {
            padding: 50px 0;
          }
          
          .section-title {
            margin-bottom: 30px;
          }
          
          .section-title h5 {
            font-size: 12px !important;
          }
          
          .section-title h2 {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }
          
          .section-title p {
            font-size: 13px !important;
          }
          
          .donation-content {
            padding: 0 10px;
            margin-bottom: 25px;
          }
          
          .donation-content h3 {
            font-size: 18px !important;
          }
          
          .donation-content p {
            font-size: 13px !important;
          }
          
          .amount-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
          
          .amount-option {
            padding: 8px 4px;
            font-size: 12px;
            min-height: 32px;
          }
          
          .custom-amount {
            padding: 8px 12px;
            font-size: 12px;
            min-height: 32px;
          }
          
          .donate-button {
            padding: 10px 16px;
            font-size: 13px;
            min-height: 40px;
          }
          
          .impact-list h4 {
            font-size: 14px !important;
          }
          
          .impact-item {
            font-size: 11px;
          }
          
          .illustration-area {
            padding: 10px;
          }
          
          .illustration-area h3 {
            font-size: 16px !important;
            margin-top: 12px !important;
          }
          
          .illustration-area p {
            font-size: 12px !important;
          }
        }
      `}</style>
      
      <section id="donate" className="donation-section">
        <div className="donation-main-container">
          <div className="section-title">
            <h5 style={{ color: '#174555', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', position: 'relative', display: 'inline-block' }} className="donation-subtitle">
              Make a Difference
            </h5>
            <h2 style={{ color: '#174555', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              Support Afghan Youth
            </h2>
            <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              Your donation directly funds AI education and creates opportunities for the next generation.
            </p>
          </div>
          
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div className="donation-content">
                <div style={{ marginBottom: '20px' }}>
                  <FaHeart style={{ fontSize: '32px', color: '#089a45', marginBottom: '12px', display: 'block' }} />
                  <h3 style={{ color: '#174555', fontSize: '22px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>
                    Support Our Mission
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.5 }}>
                    Help us empower Afghan youth through AI education. Every contribution makes a difference.
                  </p>
                </div>

                <div className="donation-toggle">
                  <div 
                    className={`toggle-option ${donationType === 'one-time' ? 'active' : ''}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One-time
                  </div>
                  <div 
                    className={`toggle-option ${donationType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly
                  </div>
                </div>

                <div className="amount-grid">
                  {amounts.map((amount) => (
                    <div
                      key={amount}
                      className={`amount-option ${selectedAmount === amount && !customAmount ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                    >
                      €{amount}
                    </div>
                  ))}
                </div>

                <input
                  type="number"
                  className="custom-amount"
                  placeholder="Enter custom amount in €"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(0)
                  }}
                />

                <button className="header-btn1 donate-button" onClick={handleDonate}>
                  Donate €{customAmount || selectedAmount} {donationType === 'monthly' ? '/month' : ''} <span><FaArrowRight /></span>
                </button>

                <div className="impact-list">
                  <h4 style={{ color: '#174555', fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
                    Your Impact:
                  </h4>
                  <div className="impact-item">
                    <FaCheck className="impact-icon" />
                    <span>€25 provides AI learning materials for one student</span>
                  </div>
                  <div className="impact-item">
                    <FaCheck className="impact-icon" />
                    <span>€50 funds one week of programming training</span>
                  </div>
                  <div className="impact-item">
                    <FaCheck className="impact-icon" />
                    <span>€100 supports mentorship for one month</span>
                  </div>
                  <div className="impact-item">
                    <FaCheck className="impact-icon" />
                    <span>€250 sponsors a complete AI literacy course</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="illustration-area">
                <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                  <Image 
                    src={donationImage} 
                    alt="Donation Impact" 
                    width={320} 
                    height={240} 
                    className="donation-illustration"
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                    }}
                  />
                  <h3 style={{ 
                    color: '#174555', 
                    fontSize: '20px', 
                    fontWeight: 700, 
                    marginTop: '16px',
                    marginBottom: '6px',
                    lineHeight: 1.3
                  }}>
                    Your Donation Makes Real Impact!
                  </h3>
                  <p style={{ 
                    color: '#089a45', 
                    fontSize: '14px', 
                    fontWeight: 500,
                    margin: 0
                  }}>
                    Transforming Lives Through Technology
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Donation