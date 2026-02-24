'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Testimonial() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto relative">
        
        <div className="absolute top-2 left-2 w-full h-full bg-black"></div>

        <div className="relative -top-2 -left-2 bg-gray-200 border-2 border-black p-8 md:p-12">
          
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
            {t('testimonial.title')}
          </h2>

          <p className="font-semibold text-black/90 mb-8">
            {t('testimonial.subtitle')}
          </p>

          <div className="space-y-6 text-black/80 leading-relaxed text-base md:text-lg">
            <p>{t('testimonial.paragraphs.p1')}</p>
            <p>{t('testimonial.paragraphs.p2')}</p>
            <p>{t('testimonial.paragraphs.p3')}</p>
            <p>{t('testimonial.paragraphs.p4')}</p>
            <p>{t('testimonial.paragraphs.p5')}</p>
            <p>{t('testimonial.paragraphs.p6')}</p>
            <p>{t('testimonial.paragraphs.p7')}</p>
            <p>{t('testimonial.paragraphs.p8')}</p>
          </div>

          <div className="mt-10 border-t pt-6">
            <p className="font-semibold text-gray-900">
              {t('testimonial.signature')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}