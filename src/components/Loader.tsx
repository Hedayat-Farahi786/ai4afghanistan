import Image from 'next/image'
import React from 'react'
import logo1Img from '@/assets/img/logo/vl-logo-1.1.png'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="logo-wrapper">
          <Image src={logo1Img} alt='AI4Afghanistan Logo' width={60} height={60} className="loader-logo" />
        </div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
          background: linear-gradient(135deg, #174555 0%, #0f3540 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .logo-wrapper {
          animation: float 2s ease-in-out infinite;
        }
        .loading-dots {
          display: flex;
          gap: 6px;
        }
        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #089a45;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }
        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
        .loading-dots span:nth-child(3) { animation-delay: 0s; }
        :global(.loader-logo) {
          object-fit: contain;
          width: 60px;
          height: 60px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default Loader
