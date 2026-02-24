import DonateHero from '@/components/donate/DonateHero'
import DonateMissionSection from '@/components/donate/DonateMission'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <DonateHero />
    <DonateMissionSection />
    <Footer />
    </>
  )
}
