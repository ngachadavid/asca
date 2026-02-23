export default function ImpactSection() {
  const cards = [
    {
      icon: "/homepage/impact.webp",
      title: "Education & Retention",
      description:
        "Keeping children in school through mentorship, support, and engagement programs. We provide learning resources, mentorship, and guidance to ensure children stay motivated and succeed academically.",
      bgColor: "bg-blue-200",
    },
    {
      icon: "/homepage/impact1.webp",
      title: "Nutrition & Basic Needs",
      description:
        "Providing nourishment and resources to combat hunger and poverty. Our programs ensure children have access to balanced meals and essential resources that support their growth and well-being.",
      bgColor: "bg-blue-300",
    },
    {
      icon: "/homepage/impact1.webp",
      title: "Emotional Care & Inclusion",
      description:
        "Creating safe communities and support systems for children facing loss and isolation. We facilitate counseling, social activities, and community engagement to foster inclusion and emotional resilience.",
      bgColor: "bg-blue-400",
    },
    {
      icon: "/homepage/impact.webp",
      title: "Skills & Opportunities",
      description:
        "Equipping children with skills and opportunities for long-term growth and success. We provide workshops, mentorship, and hands-on experiences to help children build confidence and future career paths.",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <section className="py-20 w-full max-w-6xl px-4 mx-auto bg-white">
      {/* Heading */}
      <div className="w-full md:w-[70%] mx-auto text-center mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-black mb-4 ">
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