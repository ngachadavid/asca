'use client';

import React from "react";
import { useTranslation } from "@/lib/useTranslation";

export default function ContactCTA() {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto relative">
                <div className="w-full md:w-[80%] relative bg-linear-to-br from-blue-400 via-blue-500 to-cyan-500 p-12 md:p-16 text-start border-2 border-black">
                    <div className="w-full md:w-[70%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {t('contactCTA.title')}
                        </h2>

                        <p className="text-white text-lg md:text-xl mb-6 max-w-3xl">
                            {t('contactCTA.description')}
                        </p>

                        <div className="relative inline-block">

                            {/* Main button */}
                            <a
                                href="mailto:info@ascal.eu"
                                className="relative inline-block px-6 py-3 bg-white text-blue-600 font-semibold border border-black"
                            >
                                {t('contactCTA.button')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-10 w-64 md:w-80 lg:w-96 hidden md:block">
                    <img
                        src="/faq/impact4.jpg"
                        alt="ASCA Community"
                        className="relative w-full h-auto border border-black object-cover"
                    />
                </div>
            </div>
        </section>
    );
}