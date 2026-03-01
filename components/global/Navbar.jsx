"use client";
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-20">
      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 py-3 items-center justify-between">
        {/* Left - Logo + Name */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/homepage/asca.jpeg" alt="ASCA Logo" className="h-16 w-auto" />

            {/* Brand Text */}
            <div className="flex items-center gap-3">
              {/* ASCA Luxembourg Stacked */}
              <div className="flex flex-col items-start leading-none -space-y-2">
                <span className="font-semibold text-3xl text-[#3399FF]">ASCA</span>
                <span className="font-medium text-lg text-[#3399FF]">Luxembourg</span>
              </div>

              {/* Vertical Separator */}
              <div className="h-12 w-px bg-[#3399FF]"></div>

              {/* Tagline */}
              <span className="text-lg text-[#3399FF] max-w-xs">
                {t('nav.tagline')}
              </span>
            </div>
          </Link>
        </div>

        {/* Middle - Navigation Links */}
        <ul className="flex space-x-8 text-gray-900 font-bold">
          <li>
            <Link href="/about" className="hover:text-[#3399FF] transition">
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-[#3399FF] transition">
              {t('nav.projects')}
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-[#3399FF] transition">
              {t('nav.testimonials')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#3399FF] transition">
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        {/* Right - Language Switcher + Donate Button */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button href="/donate">{t('nav.donate')}</Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Top Row - Logo + Name + Tagline */}
        <div className="px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <img src="/homepage/asca.jpeg" alt="ASCA Logo" className="h-10 w-auto" />

            <div className="flex items-center gap-2">
              {/* ASCA Luxembourg Stacked */}
              <div className="flex flex-col items-start leading-none -space-y-1">
                <span className="font-semibold text-xl text-[#3399FF]">ASCA</span>
                <span className="font-medium text-sm text-[#3399FF]">Luxembourg</span>
              </div>

              {/* Separator */}
              <div className="h-8 w-px bg-[#3399FF]"></div>

              {/* Tagline */}
              <span className="text-sm text-[#3399FF]">
                {t('nav.tagline')}
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom Row - Blue Bar with Actions */}
        <div className="bg-[#3399FF] px-4 py-2 flex items-center justify-between">
          {/* Language Switcher */}
          <div className="scale-90 origin-left">

            <Button href="/donate" className="">
              {t('nav.donate')}
            </Button>
          </div>

          {/* Donate Button + Hamburger */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col space-y-1 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-900 hover:text-[#3399FF] transition py-2"
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-900 hover:text-[#3399FF] transition py-2"
              >
                {t('nav.projects')}
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-900 hover:text-[#3399FF] transition py-2"
              >
                {t('nav.testimonials')}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-900 hover:text-[#3399FF] transition py-2"
              >
                {t('nav.contact')}
              </Link>
              <Link
                href="/legal"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-900 hover:text-[#3399FF] transition py-2"
              >
                {t('nav.legal')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}