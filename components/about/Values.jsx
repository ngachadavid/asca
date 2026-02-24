'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function OurValues() {
  const { t } = useTranslation();

  // Static bg colors
  const bgColors = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500"];

  // Pull cards text from JSON
  const cards = t('ourValues.cards');

  return (
    <section className="py-24 w-full max-w-6xl px-4 mx-auto bg-white">
      {/* Heading */}
      <div className="w-full md:w-[60%] mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          {t('ourValues.title')}
        </h2>
        <p className="text-gray-700 text-lg">
          {t('ourValues.intro')}
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
              className={`${bgColors[index]} border border-black relative -top-2 -left-2 p-8 flex flex-col text-start`}
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