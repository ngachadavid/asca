'use client';

import React, { useState } from "react";
import Button from "./Button";
import { useTranslation } from '@/lib/useTranslation';

export default function ContactSection() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="w-full bg-white py-32 md:py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="md:w-[70%] w-full text-center mx-auto mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-black/90 text-lg md:text-xl leading-relaxed mb-6">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="md:w-1/2 mx-auto w-full">
          {status === 'success' ? (
            <p className="text-green-600 text-center text-lg font-semibold">
              Message sent successfully!
            </p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-black font-semibold mb-2">
                  {t('contact.form.name')}
                </label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]" />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-semibold mb-2">
                  {t('contact.form.email')}
                </label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-black font-semibold mb-2">
                  {t('contact.form.subject')}
                </label>
                <input type="text" id="subject" name="subject" required
                  className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]" />
              </div>

              <div>
                <label htmlFor="message" className="block text-black font-semibold mb-2">
                  {t('contact.form.message')} <span className="text-gray-500 font-normal">{t('contact.form.optional')}</span>
                </label>
                <textarea id="message" name="message" rows="5"
                  className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF] resize-none"></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}

              <Button
                type="submit"
                bgColor="#3399FF"
                className="w-full md:w-auto"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : t('contact.form.submit')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}