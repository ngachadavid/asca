import FAQHero from '@/components/about/FAQHero'
import FAQSection from '@/components/about/FAQs'
import ContactCTA from '@/components/global/ContactCTA'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <FAQHero />
    <FAQSection />
    <ContactCTA />
    </>
  )
}
