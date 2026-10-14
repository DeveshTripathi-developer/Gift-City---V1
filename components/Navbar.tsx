'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import ReadingProgressBar from './ReadingProgressBar';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'GIFT City', href: '#gift-city' },
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'Our Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Regulatory Information', href: '#regulatory' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link 
          href="#home" 
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b17a2b] rounded-sm"
          aria-label="Anand Rathi Wealth IFSC Home"
        >
          <div className="h-11 sm:h-13 w-auto max-w-[260px] sm:max-w-[320px]">
            <Logo className="h-full w-auto" theme="light" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#b17a2b] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#connect"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase bg-[#b17a2b] text-white hover:bg-[#95631f] border border-[#b17a2b] transition-all rounded-none shadow-xs"
          >
            <span>Connect With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 border border-stone-300 rounded-sm hover:bg-stone-50 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-5 pt-3 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium text-stone-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#b17a2b] transition-colors border-b border-stone-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide bg-[#b17a2b] text-white hover:bg-[#95631f] transition-colors text-center"
              >
                <span>Connect With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Horizontal Reading Progress Bar */}
      <ReadingProgressBar className="absolute bottom-0 left-0 right-0 z-50" />
    </header>
  );
}

export default Navbar;
