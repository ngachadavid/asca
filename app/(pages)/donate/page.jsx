import BankDetailsSection from '@/components/donate/BankDetails'
import DonateHero from '@/components/donate/DonateHero'
import DonateMissionSection from '@/components/donate/DonateMission'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import React from 'react'

export const metadata = {
  title: "Donate | Support Vulnerable Children",
  description:
    "Your donation to ASCA Luxembourg helps provide education, nutrition, and emotional support to vulnerable children facing poverty and school dropout.",
  keywords: [
    "donate to children charity",
    "support orphaned children",
    "education charity Luxembourg",
    "fight hunger and poverty",
    "ASCA Luxembourg donation"
  ],
  openGraph: {
    title: "Make a Difference Today | Donate to ASCA Luxembourg",
    description:
      "Help us support children in need through education, nourishment, and compassionate care. Every contribution creates lasting impact.",
    url: "https://ascal.eu/donate",
    siteName: "ASCA Luxembourg",
    images: [
      {
        url: "/homepage/impact.webp",
        width: 1200,
        height: 630,
        alt: "Support vulnerable children through ASCA Luxembourg"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Vulnerable Children | Donate Today",
    description:
      "Your generosity helps children access education, nutrition, and hope for a better future.",
    images: ["/homepage/impact.webp"]
  },
  alternates: {
    canonical: "https://ascal.eu/donate"
  }
}

export default function Page() {
  return (
    <>
      <Navbar />
      {/* <DonateHero /> */}
      <BankDetailsSection />
      <DonateMissionSection />
      <Footer />
    </>
  )
}