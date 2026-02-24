'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function TheChallenge() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        
        {/* Left – 40% */}
        <div className="md:col-span-2">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
            {t('theChallenge.title')}
          </h2>
          <p className="mt-6 text-black/90 text-lg">
            {t('theChallenge.intro')}
          </p>
        </div>

        {/* Right – 60% */}
        <div className="md:col-span-3 space-y-8 text-black/80 text-base leading-relaxed">
          <p>{t('theChallenge.paragraphs.p1')}</p>
          <p>{t('theChallenge.paragraphs.p2')}</p>
          <p>{t('theChallenge.paragraphs.p3')}</p>
          <p>{t('theChallenge.paragraphs.p4')}</p>
        </div>
      </div>
    </section>
  );
}