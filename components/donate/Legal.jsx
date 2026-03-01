'use client';

import React from "react";
import { useTranslation } from '@/lib/useTranslation';

export default function LegalSection() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-white pt-32 md:pt-20 px-6 md:px-16">
            <div className="max-w-3xl mx-auto flex flex-col gap-10">

                {/* Header */}
                <div className="text-center mt-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        {t('legal.title')}
                    </h2>
                    <p className="text-black/60 text-sm">
                        {t('legal.lastUpdated')}
                    </p>
                </div>

                {/* Owner */}
                <div>
                    <h3 className="text-xl font-bold text-black mb-3">{t('legal.ownerTitle')}</h3>
                    <p className="text-black/80 leading-relaxed whitespace-pre-line">
                        {t('legal.ownerDetails')}
                        {'\n\n'}
                        Email: <a href={`mailto:${t('legal.ownerEmail')}`} className="text-[#3399FF] hover:underline">{t('legal.ownerEmail')}</a>{'\n'}
                        Phone: +352 621 381 195{'\n'}
                        Phone: +49 176 340 28033
                    </p>
                </div>

                {/* Legal Representatives */}
                <div>
                    <h3 className="text-xl font-bold text-black mb-3">{t('legal.representativesTitle')}</h3>
                    <p className="text-black/80 leading-relaxed">
                        {t('legal.representativesDetails')}
                    </p>
                </div>

                {/* General */}
                <div>
                    <h3 className="text-xl font-bold text-black mb-3">{t('legal.generalTitle')}</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        {t('legal.generalText')}
                    </p>
                    <p className="text-black/80 leading-relaxed">
                        {t('legal.disputeText')}
                    </p>
                </div>

            </div>
        </section>
    );
}