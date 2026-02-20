"use client";
import { useState } from "react";

export default function OurResponse() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Education & Retention",
      content:
        "We work to keep children engaged in school through mentorship, learning resources, and continuous encouragement. Education becomes a pathway forward, not a privilege at risk.",
    },
    {
      title: "Nutrition & Basic Support",
      content:
        "By addressing hunger and essential needs, we create the stability children require to focus, grow, and participate fully in school and community life.",
    },
    {
      title: "Emotional Care & Inclusion",
      content:
        "Through safe spaces, guidance, and community connection, we help children rebuild confidence and feel seen, supported, and valued.",
    },
    {
      title: "Skills & Future Opportunities",
      content:
        "We prepare children for long-term success by nurturing practical skills, resilience, and ambition — empowering them to shape their own futures with confidence.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">

        {/* Left – 40% */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Our Response
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Lasting change begins with thoughtful support. We focus on practical,
            consistent interventions that help children regain stability,
            confidence, and opportunity.
          </p>
        </div>

        {/* Right – 60% */}
        <div className="md:col-span-3 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-lg text-[#3399FF]">
                    {item.title}
                  </span>
                  <span className="text-2xl font-light text-[#3399FF]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 text-gray-700 text-lg leading-relaxed bg-white">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}