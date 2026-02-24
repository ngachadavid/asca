"use client";
import { useState } from "react";
import { useTranslation } from '@/lib/useTranslation';

export default function OurResponse() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const items = t('ourResponse.items');

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">

        {/* Left – 40% */}
        <div className="md:col-span-2">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
            {t('ourResponse.title')}
          </h2>
          <p className="mt-6 text-black/90 text-lg">
            {t('ourResponse.intro')}
          </p>
        </div>

        {/* Right – 60% */}
        <div className="md:col-span-3 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-lg text-[#3399FF]">
                    {item.title}
                  </span>
                  <span className="text-2xl font-light text-[#3399FF]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 text-gray-700 text-lg leading-relaxed bg-white">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}