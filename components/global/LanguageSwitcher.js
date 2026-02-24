"use client";

import { useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4">
          <clipPath id="t">
            <path d="M0 0v30h60V0z"/>
          </clipPath>
          <g clipPath="url(#t)">
            <path fill="#012169" d="M0 0h60v30H0z"/>
            <path fill="#FFF" d="M0 0l60 30m0-30L0 30"/>
            <path fill="#C8102E" d="M0 0l60 30m0-30L0 30" transform="rotate(90 30 15) scale(.6)"/>
            <path fill="#FFF" d="M25 0h10v30H25zM0 10h60v10H0z"/>
            <path fill="#C8102E" d="M27 0h6v30h-6zM0 12h60v6H0z"/>
          </g>
        </svg>
      )
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-6 h-4">
          <rect width="1" height="2" fill="#0055A4"/>
          <rect x="1" width="1" height="2" fill="#FFF"/>
          <rect x="2" width="1" height="2" fill="#EF4135"/>
        </svg>
      )
    },
    { 
      code: 'de', 
      name: 'Deutsch', 
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-6 h-4">
          <rect width="5" height="1" fill="#000"/>
          <rect y="1" width="5" height="1" fill="#DD0000"/>
          <rect y="2" width="5" height="1" fill="#FFCE00"/>
        </svg>
      )
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-white rounded-md hover:bg-gray-50 transition font-semibold"
      >
        {currentLanguage.flag}
        <span className="hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-black rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-left ${
                locale === lang.code ? 'bg-blue-100 font-bold' : ''
              }`}
            >
              {lang.flag}
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}