'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

// Disable SSR for all components to prevent hydration issues
const TopBanner = dynamic(() => import('@/components/layouts/TopBanner'), {
  ssr: false
})

const Header = dynamic(() => import('./components/Header'), {
  ssr: false
})

const Hero = dynamic(() => import('./components/Hero'), {
  ssr: false
})

const About = dynamic(() => import('./components/About'), {
  ssr: false
})

const Causes = dynamic(() => import('./components/Causes'), {
  ssr: false
})

const EventArea = dynamic(() => import('./components/EventArea'), {
  ssr: false
})

const Team = dynamic(() => import('./components/Team'), {
  ssr: false
})

const Donation = dynamic(() => import('./components/Donation'), {
  ssr: false
})

const Blog = dynamic(() => import('./components/Blog'), {
  ssr: false
})

const Contact = dynamic(() => import('./components/Contact'), {
  ssr: false
})

const CtaArea = dynamic(() => import('@/components/layouts/CtaArea'), {
  ssr: false
})

const HomeFooter = dynamic(() => import('@/components/layouts/Footer/HomeFooter'), {
  ssr: false
})

const HomeSinglePage = () => {
  const pathname = usePathname()
  useSmoothScroll()

  return (
    <>
      {pathname === '/home' && <TopBanner />}
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