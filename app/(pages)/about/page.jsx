import TheChallenge from '@/components/about/Challenge'
import AboutHero from '@/components/about/Hero'
import OurResponse from '@/components/about/Response'
import OurValues from '@/components/about/Values'
import DonateCTA from '@/components/global/DonateCTA'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <AboutHero />
    <TheChallenge />
    <OurResponse />
    <DonateCTA />
    <OurValues />
    <Footer />
    </>
  )
}
