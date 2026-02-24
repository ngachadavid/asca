'use client';

import Button from "../global/Button";
import { useTranslation } from '@/lib/useTranslation';

export default function AboutHero() {
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
          {t('aboutHero.title')}
        </h1>
       
        {/* Right - Donate Button */}
        <div>
          <Button href="/donate">{t('aboutHero.button')}</Button>
        </div>
      </div>
    </section>
  );
}