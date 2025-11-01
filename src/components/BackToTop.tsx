import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;

      setProgress(scrollPercentage);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          right: 30px;
          bottom: 30px;
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #089a45;
          border-radius: 50%;
          box-sizing: border-box;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(8, 154, 69, 0.15);
          backdrop-filter: blur(10px);
          opacity: ${isVisible ? '1' : '0'};
          visibility: ${isVisible ? 'visible' : 'hidden'};
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.8)'};
        }
        .scroll-to-top:hover {
          background: #089a45;
          border-color: #089a45;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 35px rgba(8, 154, 69, 0.25);
        }
        .scroll-to-top:hover .scroll-icon {
          color: #fafafa !important;
        }
        .scroll-to-top:hover svg {
          color: #fafafa !important;
        }
        .scroll-to-top:hover * {
          color: #fafafa !important;
        }
        .scroll-icon {
          color: #089a45 !important;
          transition: color 0.3s ease;
          font-size: 18px;
        }
        .progress-ring {
          position: absolute;
          top: -1px;
          left: -1px;
          width: 58px;
          height: 58px;
          transform: rotate(-90deg);
        }
        .progress-ring circle {
          fill: none;
          stroke: #089a45;
          stroke-width: 3;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.3s ease;
        }
      `}</style>
      <div className="scroll-to-top" onClick={goToTop}>
        <svg className="progress-ring" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="26"
            strokeDasharray="163.36"
            strokeDashoffset={163.36 - (progress / 100) * 163.36}
            opacity="0.3"
          />
        </svg>
        <FaArrowUp className="scroll-icon" />
      </div>
    </>
  );
};

export default ScrollToTop;
