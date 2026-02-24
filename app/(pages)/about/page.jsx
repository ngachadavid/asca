import TheChallenge from '@/components/about/Challenge'
import AboutHero from '@/components/about/Hero'
import History from '@/components/about/History'
import OurResponse from '@/components/about/Response'
import OurValues from '@/components/about/Values'
import DonateCTA from '@/components/global/DonateCTA'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export const metadata = {
  title: "About Us",
  description:
    "Learn about ASCA Luxembourg’s mission, history, and commitment to supporting vulnerable children through education, nutrition, and compassionate care.",
  keywords: [
    "About ASCA Luxembourg",
    "Carlo Acutis charity",
    "education support Luxembourg",
    "non-profit mission",
    "support vulnerable children"
  ],
  openGraph: {
    title: "About ASCA Luxembourg | Our Mission & Commitment",
    description:
      "Discover the story, values, and vision behind ASCA Luxembourg and our dedication to empowering vulnerable children.",
    url: "https://ascal.eu/about",
    siteName: "ASCA Luxembourg",
    images: [
      {
        url: "/homepage/carlo.webp",
        width: 1200,
        height: 630,
        alt: "ASCA Luxembourg mission and history"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About ASCA Luxembourg",
    description:
      "Learn about our mission to fight school dropout, poverty, and hunger among vulnerable children.",
    images: ["/homepage/carlo.webp"]
  },
  alternates: {
    canonical: "https://ascal.eu/about"
  }
}

export default function Page() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <History />
      <TheChallenge />
      <OurResponse />
      <DonateCTA />
      <OurValues />
      <Footer />
    </>
  )
}