"use client";

import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left - Logo + Name */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/homepage/logo.webp" alt="ASCA Logo" className="h-16 w-auto md:h-20" />
            <span className="font-bold text-lg md:text-xl text-[#3399FF]">ASCA Luxembourg</span>
          </Link>
        </div>

        {/* Middle - Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-900 font-bold">
          <li>
            <Link href="/about" className="hover:text-[#3399FF] transition">About</Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[#3399FF] transition">FAQ</Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-[#3399FF] transition">Testimonials</Link>
          </li>
        </ul>

        {/* Right - Donate Button (Desktop) */}
        <div className="hidden md:block">
          <Button href="/donate">Donate</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 z-30"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            href="/about" 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-900 hover:text-[#3399FF] transition"
          >
            About
          </Link>
          <Link 
            href="/faq" 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-900 hover:text-[#3399FF] transition"
          >
            FAQ
          </Link>
          <Link 
            href="/testimonials" 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-900 hover:text-[#3399FF] transition"
          >
            Testimonials
          </Link>
          <div onClick={() => setIsMenuOpen(false)}>
            <Button href="/donate">Donate</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}