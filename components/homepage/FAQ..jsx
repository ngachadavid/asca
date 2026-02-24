'use client';

import { useState } from "react";
import { useTranslation } from '@/lib/useTranslation';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  // Get FAQs from translations
  const faqs = t('faq.questions');

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-black mb-4 text-center">
          {t('faq.title')}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center p-4 text-left text-black/90 font-semibold transition"
                >
                  {faq.question}
                  <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="p-4 text-black/80 text-base bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}