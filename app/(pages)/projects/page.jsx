import Projects from '@/components/about/Projects'
import FAQHero from '@/components/about/ProjectsHero'
import ContactCTA from '@/components/global/ContactCTA'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <FAQHero />
    <Projects />
    <ContactCTA />
    <Footer />
    </>
  )
}
