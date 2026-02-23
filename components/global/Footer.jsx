import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Column 1 – Organization */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3399FF]">
            ASCA Luxembourg
          </h3>
          <p className="text-white/70 leading-relaxed text-sm">
            Carlo Acutis Luxembourg Educational Support ASBL <br />
            Non-Profit Association <br />
            Registration Number: F14177
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3399FF]">Quick Links</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
            <li><Link href="/donate" className="hover:text-white transition">Donate</Link></li>
          </ul>
        </div>

        {/* Column 3 – Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3399FF]">Address</h4>
          <p className="text-white/70 leading-relaxed text-sm">
            21, Bënzelter Wee <br />
            L-9742 Boxhorn <br />
            Grand Duchy of Luxembourg
          </p>
        </div>

        {/* Column 4 – Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3399FF]">Contact</h4>
          <a
            href="mailto:ascalux.org@gmail.com"
            className="text-white/70 hover:text-white transition text-sm"
          >
            ascalux.org@gmail.com
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} ASCA Luxembourg. All rights reserved.
      </div>
    </footer>
  );
}