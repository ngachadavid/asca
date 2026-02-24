'use client';

import React from "react";
import Button from "./Button";
import { useTranslation } from '@/lib/useTranslation';

export default function DonateCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
        
        <div className="relative bg-linear-to-br from-blue-400 via-blue-500 to-cyan-500 p-12 md:p-16 text-start border-2 border-black">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('donateCTA.title')}
          </h2>
          
          <p className="text-white text-lg md:text-xl mb-4 max-w-3xl">
            {t('donateCTA.description')}
          </p>
          
          <p className="text-white/90 text-lg md:text-xl mb-8"> 
            {t('donateCTA.inquiry')}
          </p>

          <Button
            href="/donate" 
            bgColor="#FFFFFF"
            className="text-blue-600!"
          >
            {t('donateCTA.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}