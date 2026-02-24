"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function DonateMissionSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Content - Left Side */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-black/90 text-lg md:text-xl leading-relaxed mb-6">
            {t("donateMissionSection.paragraphs.p1")}
          </h2>

          <h2 className="text-black/90 text-lg md:text-xl leading-relaxed">
            {t("donateMissionSection.paragraphs.p2")}
          </h2>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-[40%] relative">
          {/* Black shadow */}
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
          
          {/* Main image */}
          <img 
            src="/homepage/impact.webp" 
            alt="Support children through ASCA Luxembourg" 
            className="relative w-full h-64 border border-black object-cover"
          />
        </div>
      </div>
    </section>
  );
}