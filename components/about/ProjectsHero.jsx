'use client';

import { useTranslation } from '@/lib/useTranslation';
import Button from "../global/Button";

export default function ProjectsHero() {
  const { t } = useTranslation();

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-end justify-start relative"
      style={{ backgroundImage: "url('/homepage/class.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-start w-full md:w-[50%] px-6 mb-4">
        <h1 className="text-xl md:text-4xl font-bold text-white leading-tight mb-6">
          {t('projectsHero.title')}
        </h1>

        {/* CTA Button */}
        <div>
          <Button href="/testimonials">{t('projectsHero.cta')}</Button>
        </div>
      </div>
    </section>
  );
}