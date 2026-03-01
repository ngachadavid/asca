'use client';

import React from "react";
import Button from "./Button";
import { useTranslation } from '@/lib/useTranslation';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-32 md:py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Left Side - Copy */}
        <div className="md:w-[70%] w-full text-center mx-auto mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-black/90 text-lg md:text-xl leading-relaxed mb-6">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 mx-auto w-full">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-black font-semibold mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-black font-semibold mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-black font-semibold mb-2">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-black font-semibold mb-2">
                {t('contact.form.message')} <span className="text-gray-500 font-normal">{t('contact.form.optional')}</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button 
              href="#" 
              bgColor="#3399FF"
              className="w-full md:w-auto"
            >
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}