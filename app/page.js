import Hero from '@/components/homepage/Hero'
import Navbar from '@/components/global/Navbar'
import React from 'react'
import MissionSection from '@/components/homepage/Mission'
import ImpactSection from '@/components/homepage/Impact'
import DonateCTA from '@/components/global/DonateCTA'
import Testimonial from '@/components/homepage/Testimonial'
import Footer from '@/components/global/Footer'
import FAQSection from '@/components/homepage/FAQ.'

export const metadata = {
  metadataBase: new URL("https://ascal.eu"),
  title: {
    default: "ASCA Luxembourg | Supporting Vulnerable Children Through Education & Care",
    template: "%s | ASCA Luxembourg"
  },
  description:
    "ASCA Luxembourg (Appui Scolaire Carlo Acutis) is a non-profit organization dedicated to supporting orphaned and vulnerable children through education, nutrition, emotional care, and community empowerment.",
  keywords: [
    "ASCA Luxembourg",
    "Appui Scolaire Carlo Acutis",
    "education charity Luxembourg",
    "support orphaned children",
    "fight school dropout",
    "child nutrition support",
    "non-profit Luxembourg"
  ],
  openGraph: {
    title: "ASCA Luxembourg | Education, Hope & Dignity",
    description:
      "Supporting disadvantaged children through education, nourishment, and emotional care.",
    url: "https://ascal.eu",
    siteName: "ASCA Luxembourg",
    images: [
      {
        url: "/homepage/impact.webp",
        width: 1200,
        height: 630,
        alt: "ASCA Luxembourg supporting children"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCA Luxembourg | Education, Hope & Dignity",
    description:
      "Supporting vulnerable children through education, nutrition, and care.",
    images: ["/homepage/impact.webp"]
  },
  alternates: {
    canonical: "https://ascal.eu"
  }
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionSection />
      <ImpactSection />
      <Testimonial />
      <FAQSection />
      <DonateCTA />
      <Footer />
    </>
  )
}