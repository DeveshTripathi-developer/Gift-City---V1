'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#fbf9f5] via-[#f8f5ee] to-[#f4ede2] text-stone-900 border-b border-stone-200 overflow-hidden py-8 sm:py-10 lg:py-12">
      {/* Subtle architectural geometric rings */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-36 -right-36 w-[560px] h-[560px] rounded-full border border-[#b17a2b]/10 pointer-events-none" 
        aria-hidden="true" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: 'easeOut' }}
        className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full border border-stone-300/60 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-8"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-normal mb-6 text-stone-900">
              Anand Rathi Wealth.<br />
              <span className="text-[#b17a2b] italic font-serif">Now at GIFT City.</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-light mb-4 max-w-2xl">
              A structured, data-backed approach to investing through India&apos;s International Financial Services Centre.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Anand Rathi FME (IFSC) Private Limited brings the investment philosophy and disciplined processes of Anand Rathi Wealth Limited to GIFT City. Built for investors seeking a structured route to participate in investment opportunities through the IFSC ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="#philosophy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#b17a2b] text-white hover:bg-[#95631f] transition-all text-center shadow-xs"
              >
                <span>Explore Our Approach</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>
              <Link
                href="#connect"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 hover:border-[#b17a2b] transition-all text-center shadow-xs"
              >
                <span>Connect With Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#b17a2b]" />
              </Link>
            </div>
          </motion.div>

          {/* Philosophy Highlight Note */}
          <motion.div 
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-4 lg:justify-self-end w-full max-w-md"
          >
            <aside className="border border-[#e0d6c3] bg-white shadow-xs p-6 sm:p-8 relative">
              <span className="font-serif text-5xl sm:text-6xl text-[#b17a2b] leading-none block select-none -mb-3" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug my-4 font-normal">
                Investment outcomes should be driven by process, not prediction.
              </p>
              <div className="w-12 h-px bg-[#b17a2b]/40 my-4" />
              <small className="block text-xs uppercase tracking-widest text-[#b17a2b] font-semibold">
                OUR INVESTMENT PHILOSOPHY
              </small>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
