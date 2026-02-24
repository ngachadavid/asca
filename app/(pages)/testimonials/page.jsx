import Certifications from '@/components/testimonials/Certification'
import TestimonialsSection from '@/components/testimonials/Testimonial'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import TestimonialHero from '@/components/testimonials/Hero'
import React from 'react'

export const metadata = {
  title: "Testimonials & Recognition | ASCA Luxembourg",
  description:
    "Read testimonials from beneficiaries and partners, and explore the recognitions that reflect ASCA Luxembourg’s commitment to education, child welfare, and community empowerment.",
  keywords: [
    "ASCA Luxembourg testimonials",
    "charity reviews",
    "nonprofit recognition",
    "child welfare advocacy",
    "education support impact"
  ],
  openGraph: {
    title: "Stories of Impact & Recognition | ASCA Luxembourg",
    description:
      "Discover real stories and acknowledgements highlighting our impact on vulnerable children and communities.",
    url: "https://ascal.eu/testimonials",
    siteName: "ASCA Luxembourg",
    images: [
      {
        url: "/homepage/impact.webp",
        width: 1200,
        height: 630,
        alt: "ASCA Luxembourg testimonials and impact stories"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCA Luxembourg Testimonials",
    description:
      "Stories of hope, recognition, and community impact.",
    images: ["/homepage/impact.webp"]
  },
  alternates: {
    canonical: "https://ascal.eu/testimonials"
  }
}

export default function Page() {
  return (
    <>
      <Navbar />
      <TestimonialHero />
      <TestimonialsSection />
      <Certifications />
      <Footer />
    </>
  )
}