'use client';

import React from 'react';
import { Cog, Database, Search } from 'lucide-react';
import { motion } from 'motion/react';

export function PhilosophySection() {
  const values = [
    {
      title: 'FEARLESS APPROACH',
      desc: 'Showing information that you need to see, without fear',
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Head */}
          <circle cx="12" cy="4" r="2.2" fill="currentColor" stroke="none" />
          {/* Outstretched arms */}
          <path d="M5 8l7 4 7-4" />
          {/* Torso */}
          <path d="M12 12v5" />
          {/* Outstretched legs in star-jump pose */}
          <path d="M7 21l5-4 5 4" />
        </svg>
      ),
    },
    {
      title: 'UNCOMPLICATED',
      desc: 'Uncomplicating financial concepts to enable full understanding before your decision making',
      icon: <Cog className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} aria-hidden="true" />,
    },
    {
      title: 'BACKED BY DATA',
      desc: 'Data at scale will help you take a considered decision',
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} aria-hidden="true" />,
    },
    {
      title: 'TRANSPARENCY',
      desc: 'Transparency = Trust = Implementation. Trust created with transparency. Value created by Implementation',
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} aria-hidden="true" />,
    },
  ];

  return (
    <section id="philosophy" className="py-10 sm:py-12 lg:py-14 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Intro Header - Stacked Editorial Alignment matching reference */}
        <div className="mb-7 pb-5 sm:mb-8 sm:pb-6 border-b border-stone-200/80 max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-stone-900 font-normal tracking-tight leading-[1.14]">
            Our philosophy.<br />
            In a new financial ecosystem.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mt-3.5 sm:mt-4 mb-2">
            For more than two decades, Anand Rathi Wealth has built its investment approach around a fundamental principle:
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-[25px] text-[#b17a2b] font-normal leading-snug tracking-tight">
            Investment outcomes should be driven by process, not prediction.
          </p>
        </div>

        {/* Section Heading with matching font-serif */}
        <div className="mb-6 sm:mb-7">
          <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            Values that create trust
          </h3>
          {/* Gold Underline Bar */}
          <div className="w-14 h-1 bg-[#b17a2b] mt-2.5" />
        </div>

        {/* 4 Cards in 1 Row (Responsive: 1 col on mobile, 2 col on tablet, 4 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {values.map((v, idx) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-xl border border-stone-200/90 hover:border-[#b17a2b]/70 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              {/* Subtle top edge hover accent */}
              <div 
                className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-[#b17a2b] transition-colors rounded-full" 
                aria-hidden="true" 
              />

              <div>
                {/* Icon & Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#fbf6ed] border border-[#f0e4cf] flex items-center justify-center text-[#b17a2b] group-hover:bg-[#b17a2b] group-hover:text-white transition-colors duration-300 shadow-xs">
                    {v.icon}
                  </div>
                  <span className="font-serif text-xs font-semibold tracking-wider text-stone-400 group-hover:text-[#b17a2b] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-900 group-hover:text-[#95631f] transition-colors mb-2.5 leading-snug">
                  {v.title}
                </h4>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                <span className="tracking-wide uppercase text-[10px] text-stone-400 group-hover:text-stone-500 transition-colors">
                  Core Value
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b17a2b]/40 group-hover:bg-[#b17a2b] transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Objective at GIFT City Summary Card */}
        <div className="mt-7 sm:mt-8 p-5 sm:p-6 bg-white rounded-xl border border-stone-200/90 border-l-4 border-l-[#b17a2b] shadow-xs">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
            The objective at GIFT City is to bring this thinking together within a unified investment platform, enabling investors to experience the Anand Rathi Wealth proposition through the IFSC ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
