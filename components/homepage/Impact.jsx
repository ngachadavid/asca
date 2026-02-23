export default function ImpactSection() {
  const cards = [
  {
    icon: "/homepage/impact.webp",
    title: "Education & Retention",
    description:
      "We support the development and education of children from socially and economically disadvantaged families. Through mentorship, guidance, and access to learning resources, we help children stay motivated, attend school regularly, and succeed academically, building a foundation for a brighter future.",
    bgColor: "bg-blue-200",
  },
  {
    icon: "/homepage/impact1.webp",
    title: "School Dropout Prevention",
    description:
      "ASCA works to combat school dropout, particularly among orphaned children and those coping with bereavement. By combining academic support with emotional guidance, personalized learning plans, and close follow-ups, we ensure children remain engaged in school and continue their educational journey.",
    bgColor: "bg-blue-300",
  },
  {
    icon: "/homepage/impact1.webp",
    title: "Social Inclusion & Poverty Alleviation",
    description:
      "We fight isolation and extreme poverty by creating safe, supportive environments for children and families in need. Through community programs, social activities, and counseling, we foster inclusion, resilience, and a sense of belonging, empowering children to overcome challenges and participate fully in society.",
    bgColor: "bg-blue-400",
  },
  {
    icon: "/homepage/impact.webp",
    title: "Nutrition & Well-Being",
    description:
      "ASCA addresses hunger and malnutrition by providing essential resources and nourishment. Our programs ensure children have access to balanced meals, health education, and support for their physical and emotional well-being, enabling them to grow, learn, and thrive in a safe and healthy environment.",
    bgColor: "bg-blue-500",
  },
];

  return (
    <section className="py-20 w-full max-w-6xl px-4 mx-auto bg-white">
      {/* Heading */}
      <div className="w-full md:w-[70%] mx-auto text-center mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
          Discover How ASCA Luxembourg Supports Vulnerable Children for a Better World
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* Black shadow underlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>

            {/* Main card */}
            <div
              className={`${card.bgColor} border border-black relative -top-2 -left-2 flex flex-col items-cener text-start`}
            >
              <img src={card.icon} alt={card.title} className="h-64 w-full object-cover mb-4" />
              <h3 className="mt-4 px-6 text-start font-semibold text-lg md:text-xl mb-2 text-black/90">{card.title}</h3>
              <p className="px-6 text-black/80 text-base md:text-lg mb-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}