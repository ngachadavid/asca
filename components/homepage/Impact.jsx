'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function ImpactSection() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: "/homepage/impact.webp",
      titleKey: "impact.education.title",
      descriptionKey: "impact.education.description",
      bgColor: "bg-blue-200",
    },
    {
      icon: "/homepage/impact1.webp",
      titleKey: "impact.dropout.title",
      descriptionKey: "impact.dropout.description",
      bgColor: "bg-blue-300",
    },
    {
      icon: "/homepage/impact1.webp",
      titleKey: "impact.inclusion.title",
      descriptionKey: "impact.inclusion.description",
      bgColor: "bg-blue-400",
    },
    {
      icon: "/homepage/impact.webp",
      titleKey: "impact.nutrition.title",
      descriptionKey: "impact.nutrition.description",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <section className="py-20 w-full max-w-6xl px-4 mx-auto bg-white">
      <div className="w-full md:w-[70%] mx-auto text-center mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
          {t('impact.title')}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <div className={`${card.bgColor} border border-black relative -top-2 -left-2 flex flex-col items-center text-start`}>
              <img src={card.icon} alt={t(card.titleKey)} className="h-64 w-full object-cover mb-4" />
              <h3 className="mt-4 px-6 text-start font-semibold text-lg md:text-xl mb-2 text-black/90">
                {t(card.titleKey)}
              </h3>
              <p className="px-6 text-black/80 text-base md:text-lg mb-4">
                {t(card.descriptionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}