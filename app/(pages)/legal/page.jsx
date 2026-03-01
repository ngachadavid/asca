import LegalSection from '@/components/donate/Legal'
import ContactSection from '@/components/global/ContactForm'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export const metadata = {
  title: "Legal Notice | ASCA Luxembourg",
  description:
    "Find the official legal information and ownership details for the ASCA Luxembourg website.",
  keywords: [
    "legal notice",
    "imprint",
    "ASCA Luxembourg legal",
    "mentions légales",
    "impressum"
  ],
  openGraph: {
    title: "Legal Notice | ASCA Luxembourg",
    description:
      "Find the official legal information and ownership details for the ASCA Luxembourg website.",
    url: "https://ascal.eu/legal",
    siteName: "ASCA Luxembourg",
    images: [
      {
        url: "/projects/kr.webp",
        width: 1200,
        height: 630,
        alt: "ASCA Luxembourg legal notice"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice | ASCA Luxembourg",
    description:
      "Official legal information and ownership details for ASCA Luxembourg.",
    images: ["/projects/kr.webp"]
  },
  alternates: {
    canonical: "https://ascal.eu/legal"
  }
}

export default function Page() {
  return (
    <>
      <Navbar />
      <LegalSection />
      <ContactSection />
      <Footer />
    </>
  )
}