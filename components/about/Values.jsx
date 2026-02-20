export default function OurValues() {
  const cards = [
    {
      title: "Dignity First",
      description:
        "Every child deserves to be treated with respect and care. We approach our work with empathy, ensuring that support empowers rather than labels or defines.",
      bgColor: "bg-blue-200",
    },
    {
      title: "Consistency Over Charity",
      description:
        "Real change doesn’t come from one-time gestures. We focus on steady, reliable support that builds trust and creates lasting stability in children’s lives.",
      bgColor: "bg-blue-300",
    },
    {
      title: "Community-Led Support",
      description:
        "We believe solutions are strongest when rooted in community. By working closely with families, educators, and local partners, we ensure our impact is meaningful and sustainable.",
      bgColor: "bg-blue-400",
    },
    {
      title: "Long-Term Impact",
      description:
        "Our goal isn’t short-term relief, but long-term transformation. We invest in education, resilience, and opportunity so children can shape their own futures with confidence.",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <section className="py-24 w-full max-w-6xl px-4 mx-auto">
      {/* Heading */}
      <div className="w-full md:w-[60%] mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          The Values That Guide Our Work
        </h2>
        <p className="text-gray-700 text-lg">
          Our mission is shaped by principles that ensure every action is thoughtful, sustainable, and centered around the well-being of children.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* Black shadow underlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>

            {/* Main card */}
            <div
              className={`${card.bgColor} border border-black relative -top-2 -left-2 p-8 flex flex-col text-start`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black/90">
                {card.title}
              </h3>
              <p className="text-black/80 text-base md:text-lg">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}