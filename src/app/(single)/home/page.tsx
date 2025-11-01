'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import TopBanner from '@/components/layouts/TopBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

// Lazy load below-the-fold components for better performance
const Causes = dynamic(() => import('./components/Causes'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

const EventArea = dynamic(() => import('./components/EventArea'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

const Team = dynamic(() => import('./components/Team'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

const Donation = dynamic(() => import('./components/Donation'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

const Blog = dynamic(() => import('./components/Blog'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

const CtaArea = dynamic(() => import('@/components/layouts/CtaArea'), {
  loading: () => <div style={{ minHeight: '200px' }} />
})

const HomeFooter = dynamic(() => import('@/components/layouts/Footer/HomeFooter'), {
  loading: () => <div style={{ minHeight: '300px' }} />
})

const HomeSinglePage = () => {
  // Initialize smooth scroll functionality
  useSmoothScroll()

  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <About />
      <Causes />
      <EventArea />
      <Team />
      <Donation />
      <Blog />
      <Contact />
      <CtaArea />
      <HomeFooter />
    </>
  )
}

export default HomeSinglePage