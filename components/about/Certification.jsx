import React from "react";

export default function Certifications() {
  const awards = [
    {
      title: "Certified Child Welfare Advocate",
      description:
        "Recognized for upholding the highest standards in supporting vulnerable children's education and wellbeing.",
      icon: "🏆",
    },
    {
      title: "Award for Community Empowerment",
      description:
        "Honored for fostering inclusion and providing vital resources to children facing extreme poverty.",
      icon: "🌟",
    },
    {
      title: "Excellence in Educational Support",
      description:
        "Acknowledged for impactful programs reducing school dropout and nurturing academic success.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-8 text-center">
            Recognition & Awards
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border-2 border-[#3399FF]"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">{award.icon}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-black/90 mb-4 text-center">
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-black/80 text-sm md:text-base leading-relaxed text-center">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}