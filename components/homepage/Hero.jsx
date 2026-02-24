'use client';

import Button from "../global/Button";
import { useTranslation } from '@/lib/useTranslation';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-end justify-start relative"
      style={{ backgroundImage: "url('/homepage/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-start w-full max-w-7xl md:w-[50%] px-6 mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight">
          {t('hero.title')}
        </h1>
        <h2 className="mb-6 mt-4 text-lg md:text-lg text-gray-200">
          {t('hero.subtitle')}
        </h2>
        {/* Right - Donate Button */}
        <div>
          <Button href="/about">{t('hero.cta')}</Button>
        </div>
      </div>
    </section>
  );
}