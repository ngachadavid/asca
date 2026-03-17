'use client';

import Button from "../global/Button";
import { useTranslation } from "@/lib/useTranslation";

export default function TestimonialHero() {
  const { t } = useTranslation();

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-end justify-start relative"
      style={{ backgroundImage: "url('/homepage/asc1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-start w-full max-w-7xl md:w-[70%] 2xl:w-[50%] px-6 mb-12 ml-0 md:ml-10 2xl:ml-32">
        <h1 className="text-xl md:text-4xl font-bold text-white leading-tight mb-6">
          {t('testimonialHero.title')}
        </h1>

        {/* CTA Button */}
        <div>
          <Button href="/donate">{t('testimonialHero.cta')}</Button>
        </div>
      </div>
    </section>
  );
}