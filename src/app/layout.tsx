import type { Metadata } from "next";
import { Outfit, Poppins } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'aos/dist/aos.css';
import '@/assets/scss/main.scss'


import AppProvidersWrapper from "../components/wrappers/AppProvidersWrapper";
import RegisterSW from './register-sw';
import PerformanceMonitor from './performance';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "AI4Afghanistan - Empowering Afghan Youth Through AI Innovation",
  description: "Training the next generation of Afghan innovators through AI education and innovation",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  themeColor: '#174555',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI4Afghanistan'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#174555',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#174555" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
        <style dangerouslySetInnerHTML={{__html: `
          * {
            font-family: var(--font-outfit), var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          }
          body, html {
            font-family: var(--font-outfit), var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          }
          #__next-loading {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #174555;
            z-index: 999999;
            pointer-events: all;
          }
          #__next-loading > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .loader-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
          }
          .dots-container {
            display: flex;
            gap: 10px;
            margin-top: 30px;
          }
          .dot {
            width: 12px;
            height: 12px;
            background: #089a45;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
          }
          .dot:nth-child(1) {
            animation-delay: -0.32s;
          }
          .dot:nth-child(2) {
            animation-delay: -0.16s;
          }
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}} />
      </head>
      <body className={`homepage1-body ${outfit.variable} ${poppins.variable}`} style={{fontFamily: 'var(--font-outfit), var(--font-poppins)'}}>
        <div id="__next-loading">
          <div>
            <img
              src="/logo-loader.png"
              alt="AI4Afghanistan Logo"
              className="loader-logo"
              width="80"
              height="80"
            />
            <div className="dots-container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <PerformanceMonitor />
        <RegisterSW />
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  );
}
