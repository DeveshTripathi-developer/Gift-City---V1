import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export function Footer() {
  const footerLinks = [
    { label: 'GIFT City', href: '#gift-city' },
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'Our Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Connect', href: '#connect' },
    { label: 'Disclosures', href: '#regulatory' },
  ];

  return (
    <footer className="bg-[#f8f5ee] text-stone-700 py-12 sm:py-14 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: Brand, Registered Office, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-stone-200">
          {/* Logo & Tagline */}
          <div className="md:col-span-4 space-y-2.5">
            <Link href="#home" className="inline-block" aria-label="Anand Rathi Wealth IFSC Home">
              <div className="h-10 sm:h-11 w-auto max-w-[260px] sm:max-w-[280px]">
                <Logo className="h-full w-auto" theme="light" />
              </div>
            </Link>
            <p className="text-xs text-stone-500 font-medium tracking-wide">
              Private Wealth. uncomplicated
            </p>
            <p className="text-xs text-stone-500 leading-relaxed max-w-sm pt-1">
              Registered Fund Management Entity (Non Retail) regulated by the International Financial Services Centres Authority (IFSCA).
            </p>
          </div>

          {/* Registered Office Details */}
          <div className="md:col-span-5 space-y-1.5 text-xs text-stone-600">
            <p className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-2">
              Registered Office
            </p>
            <p className="font-medium text-stone-800">
              Anand Rathi FME (IFSC) Private Limited
            </p>
            <p className="leading-relaxed text-stone-600">
              Office No. SI–M–1092, Shilp Incubation Centre, Unit B, First Floor, Plot 11T 3 &amp; 11T 5, Block – 11, GIFT SEZ, GIFT City, Dist. Gandhinagar – 382 050
            </p>
            <div className="pt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-stone-500">
              <span>IFSCA Reg: <span className="font-mono text-stone-800 font-medium">FDM2026FNR1141</span></span>
              <span>·</span>
              <a href="mailto:arfme@rathi.com" className="text-[#b17a2b] hover:underline font-medium">
                arfme@rathi.com
              </a>
              <span>·</span>
              <a href="tel:8401478245" className="hover:underline font-medium">
                8401478245
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </p>
            <nav className="flex flex-col space-y-2 text-xs font-medium text-stone-600">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#b17a2b] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom credits & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Anand Rathi FME (IFSC) Private Limited. All rights reserved.
          </p>
          <p>
            Regulated by International Financial Services Centres Authority (IFSCA), GIFT City.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
