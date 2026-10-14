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
    <footer className="bg-[#f8f5ee] text-stone-700 py-14 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-stone-200">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <Link href="#home" className="inline-block" aria-label="Anand Rathi Wealth IFSC Home">
              <div className="h-10 sm:h-12 w-auto max-w-[260px] sm:max-w-[300px]">
                <Logo className="h-full w-auto" theme="light" />
              </div>
            </Link>
            <p className="text-xs text-stone-500 font-medium tracking-wide">
              Private Wealth. uncomplicated
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-stone-600">
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

        {/* Bottom credits & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
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
