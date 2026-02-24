"use client";

import Button from "../global/Button";
import { useTranslation } from "@/lib/useTranslation";

export default function DonateHero() {
  const { t } = useTranslation();

  return (
    <section
      className="h-screen w-full bg-cover bg-top flex items-end justify-start relative"
      style={{ backgroundImage: "url('/projects/ker.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-start w-full md:w-[50%] px-6 mb-4">
        <h1 className="text-xl md:text-4xl font-bold text-white leading-tight mb-6">
          {t("donateHero.title")}
        </h1>

        {/* CTA Button */}
        <div>
          <Button href="/testimonials">{t("donateHero.cta")}</Button>
        </div>
      </div>
    </section>
  );
}