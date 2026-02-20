import Hero from '@/components/homepage/Hero'
import Navbar from '@/components/global/Navbar'
import React from 'react'
import MissionSection from '@/components/homepage/Mission'
import ImpactSection from '@/components/homepage/Impact'
import DonateCTA from '@/components/global/DonateCTA'
import ContactSection from '@/components/global/ContactForm'

export default function page() {
  return (
    <>
    <Navbar />
    <Hero />
    <MissionSection />
    <ImpactSection />
    <DonateCTA />
    <ContactSection />
    </>
  )
}
