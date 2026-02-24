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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recognition & Awards
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Honored for our commitment to transforming children's lives
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 hover:border-[#3399FF] transition shadow-lg hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">{award.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}