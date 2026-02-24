'use client';

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  const links = t('footer.links');

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Column 1 – Organization */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3399FF]">
            {t('footer.organization')}
          </h3>
          <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line">
            {t('footer.organizationDetails')}
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3399FF]">
            {t('footer.quickLinks')}
          </h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/" className="hover:text-white transition">{links.home}</Link></li>
            <li><Link href="/about" className="hover:text-white transition">{links.about}</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">{links.projects}</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition">{links.testimonials}</Link></li>
            <li><Link href="/donate" className="hover:text-white transition">{links.donate}</Link></li>
          </ul>
        </div>

        {/* Column 3 – Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3399FF]">{t('footer.addressTitle')}</h4>
          <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line">
            {t('footer.addressDetails')}
          </p>
        </div>

        {/* Column 4 – Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3399FF]">{t('footer.contactTitle')}</h4>
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
        {t('footer.bottomText', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}