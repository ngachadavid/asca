import Link from 'next/link';
import Button from '../global/Button';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Left - Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="/homepage/logo.webp" alt="ASCA Logo" className="h-20 w-36" />
          <span className="font-bold text-xl text-[#3399FF]">ASCA Luxembourg</span>
        </div>

        {/* Middle - Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-900 font-bold">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
        </ul>

        {/* Right - Donate Button */}
        <div>
          <Button href="/donate">Donate</Button>
        </div>
      </div>
    </nav>
  );
}