'use client';

import { createContext, useContext, useState } from 'react';
import en from '@/locales/en/common.json';
import fr from '@/locales/fr/common.json';
import de from '@/locales/de/common.json';

const translations = {
  en,
  fr,
  de,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale] || translations.en;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
}