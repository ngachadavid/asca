import Projects from '@/components/about/Projects'
import FAQHero from '@/components/about/ProjectsHero'
import ContactCTA from '@/components/global/ContactCTA'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export const metadata = {
  title: "Our Projects | Creating Impact Through Education & Support",
  description:
    "Discover ASCA Luxembourg’s projects supporting vulnerable children through education, nutrition, and community empowerment in Burundi and Senegal.",
  keywords: [
    "charity projects Africa",
    "education support Burundi",
    "Keur Moussa Senegal project",
    "orphanage support",
    "ASCA Luxembourg projects"
  ],
  openGraph: {
    title: "Explore Our Projects | ASCA Luxembourg",
    description:
      "See how our initiatives provide education, nourishment, and hope to children facing poverty and school dropout.",
    url: "https://ascal.eu/projects",
    siteName: "ASCA Luxembourg",
    images: [
      {
        url: "/projects/kr.webp",
        width: 1200,
        height: 630,
        alt: "ASCA Luxembourg education and support projects"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCA Luxembourg Projects",
    description:
      "Education, nourishment, and opportunity for vulnerable children.",
    images: ["/projects/kr.webp"]
  },
  alternates: {
    canonical: "https://ascal.eu/projects"
  }
}

export default function Page() {
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