"use client";

import React, { useState } from "react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "The compassion and commitment shown by the ASCA team made a real difference in our child’s educational journey.",
      name: "Teacher and Volunteer",
    },
    {
      quote:
        "ASCA Luxembourg’s expert support helps vulnerable students overcome obstacles and gain confidence in their abilities.",
      name: "Community Outreach Coordinator",
    },
    {
      quote:
        "As a volunteer, I witnessed firsthand the incredible impact ASCA has on vulnerable children. Their dedication to creating safe, nurturing environments is truly inspiring.",
      name: "Sophie Laurent",
    },
    {
      quote:
        "Their holistic approach ensures children not only stay in school but feel valued and supported every step of the way.",
      name: "Social Worker",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-xl md:text-3xl font-bold text-black mb-8 text-center">
          What People Are Saying
        </h2>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Gradient Card */}
          <div className="bg-linear-to-r from-blue-400 via-white to-blue-400 rounded-3xl p-12 md:p-16 shadow-xl border-2 border-gray-200 relative">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <svg
                className="w-16 h-16 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-center text-black/80 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Name */}
            <p className="text-center text-black font-bold text-xl md:text-2xl">
              {testimonials[currentIndex].name}
            </p>

            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-600 rounded-full p-3 transition"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-600 rounded-full p-3 transition"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}