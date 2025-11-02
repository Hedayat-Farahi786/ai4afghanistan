'use client'
import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa6'
import { Container } from 'react-bootstrap'

const TopBanner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' }
  ]

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode)
    setIsDropdownOpen(false)
  }

  return (
    <>
      <style jsx global>{`
        body {
          background: #174555 !important;
        }
        .topbar {
          background: #174555 !important;
          padding: 2px 0 !important;
          font-size: 9px !important;
          margin-top: 16px !important;
        }
        .topbar-content {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
        }
        .topbar-left {
          display: flex !important;
          gap: 24px !important;
          align-items: center !important;
        }
        .topbar-item {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          color: #fafafa !important;
          text-decoration: none !important;
        }
        .topbar-item * {
          color: #fafafa !important;
        }
        .topbar-item:hover {
          color: #fafafa !important;
          opacity: 0.8 !important;
        }
        .topbar-item:hover * {
          color: #fafafa !important;
        }
        .language-dropdown {
          position: relative !important;
          display: inline-block !important;
        }
        .language-trigger {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          color: #fafafa !important;
          cursor: pointer !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          transition: background 0.2s ease !important;
        }
        .language-trigger:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        .language-trigger * {
          color: #fafafa !important;
        }
        .language-dropdown-menu {
          position: absolute !important;
          top: 100% !important;
          right: 0 !important;
          background: white !important;
          border-radius: 6px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          min-width: 120px !important;
          z-index: 99999 !important;
          overflow: hidden !important;
          margin-top: 4px !important;
        }
        .language-option {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 8px 12px !important;
          cursor: pointer !important;
          transition: background 0.2s ease !important;
          color: #174555 !important;
          font-size: 12px !important;
        }
        .language-option span {
          color: #174555 !important;
        }
        .language-option:hover {
          background: #f8f9fa !important;
        }
        .language-option.active {
          background: #089a45 !important;
          color: white !important;
        }
        .language-option.active span {
          color: #fafafa !important;
        }
        .flag-icon {
          width: 16px !important;
          height: 12px !important;
          object-fit: cover !important;
          border-radius: 2px !important;
        }
        @media (max-width: 768px) {
          .topbar-left {
            gap: 16px !important;
          }
          .topbar-item span {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .topbar {
            display: none !important;
          }
        }
      `}</style>
      
      <div className="topbar">
        <Container>
          <div className="topbar-content">
            <div className="topbar-left">
              <a href="tel:+4917646294780" className="topbar-item">
                <FaPhone size={10} />
                <span>+49 176 46294780</span>
              </a>
              <a href="mailto:info@ai4afghanistan.org" className="topbar-item">
                <FaEnvelope size={10} />
                <span>info@ai4afghanistan.org</span>
              </a>
            </div>
            <div className="language-dropdown">
              <div 
                className="language-trigger" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img 
                  src={languages.find(lang => lang.code === selectedLanguage)?.flag} 
                  alt={selectedLanguage} 
                  className="flag-icon"
                />
                <span>{selectedLanguage.toUpperCase()}</span>
                <FaChevronDown size={8} />
              </div>
              {isDropdownOpen && (
                <div className="language-dropdown-menu">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`language-option ${selectedLanguage === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageSelect(lang.code)}
                    >
                      <img src={lang.flag} alt={lang.code} className="flag-icon" />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default TopBanner