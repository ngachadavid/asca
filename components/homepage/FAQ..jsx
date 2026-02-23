'use client'
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does ASCA Luxembourg support orphaned students?",
      answer:
        "We provide educational assistance, mentorship, and emotional support to help orphaned and vulnerable children remain engaged in school. Our goal is to create stability that allows them to focus, learn, and build confidence in their future.",
    },
    {
      question: "What initiatives address school dropout among bereaved children?",
      answer:
        "Our programs combine academic support with counseling and personalized guidance. By addressing both emotional and educational needs, we help children stay motivated and reduce the risk of leaving school prematurely.",
    },
    {
      question: "How does ASCA tackle hunger and malnutrition?",
      answer:
        "We work alongside community partners to ensure children have access to nutritious meals and basic health awareness. Proper nourishment is essential for learning, development, and overall well-being.",
    },
    {
      question: "Who can benefit from ASCA Luxembourg’s services?",
      answer:
        "Our programs are designed for children facing social and economic hardship, particularly those at risk of school dropout. We prioritize children who require consistent support to overcome educational and emotional barriers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-black mb-4 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center p-4 text-left text-black/90 font-semibold transition"
                >
                  {faq.question}
                  <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="p-4 text-black/80 text-base bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}