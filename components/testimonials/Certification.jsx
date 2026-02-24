"use client";

import React from "react";
import { useTranslation } from "@/lib/useTranslation";

export default function Certifications() {
  const { t } = useTranslation();
  const awards = t("certifications.awards");

  const icons = ["🏆", "🌟", "📚"]; // Icons stay in component

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-8 text-center">
            {t("certifications.header")}
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border-2 border-[#3399FF]"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">{icons[index]}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-black/90 mb-4 text-center">
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-black/80 text-sm md:text-base leading-relaxed text-center">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}