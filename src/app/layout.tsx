import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css'

import "slick-carousel/slick/slick.css";
import "gsap";


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import 'aos/dist/aos.css';

import '@/assets/scss/main.scss'


import AppProvidersWrapper from "../components/wrappers/AppProvidersWrapper";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "AI4Afghanistan - Empowering Afghan Youth Through AI Innovation",
  icons: {
    icon: [
      '/favicon.ico',
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" as="image" href="/_next/static/media/hero_banner.jpg" />
        <link rel="preload" as="image" href="/_next/static/media/vl-logo-1.1.png" />
      </head>
      <body className={`homepage1-body ${poppins.variable}`} style={{fontFamily: 'var(--font-poppins)'}}>
        <AppProvidersWrapper> {children}</AppProvidersWrapper>
      </body>
    </html>
  );
}
