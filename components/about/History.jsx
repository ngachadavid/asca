'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function History() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Content - Left Side */}
        <div className="md:w-1/2 text-start">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
            {t('history.title')}
          </h2>
          <p className="mt-6 text-black/80 text-base leading-relaxed whitespace-pre-line">
            {t('history.text')}
          </p>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-[40%] relative">
          {/* Black shadow */}
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
          
          {/* Main image */}
          <img 
            src="/homepage/class.webp" 
            alt="ASCA Story - Inspired by Carlo Acutis" 
            className="relative w-full h-64 border border-black object-cover"
          />
        </div>
      </div>
    </section>
  );
}