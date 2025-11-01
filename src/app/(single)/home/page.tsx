'use client'
import TopBanner from '@/components/layouts/TopBanner'
import React from 'react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import Causes from './components/Causes'
import Donation from './components/Donation'
import About from './components/About'
import EventArea from './components/EventArea'

import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import CtaArea from '@/components/layouts/CtaArea'
import HomeFooter from '@/components/layouts/Footer/HomeFooter'

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
      {/* <Testimonial /> */}
      {/* <Gallery /> */}
      <Blog />
      <Contact />
      <CtaArea />
      <HomeFooter />
    </>

  )
}

export default HomeSinglePage