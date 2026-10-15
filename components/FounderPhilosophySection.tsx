'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function FounderPhilosophySection() {
  return (
    <section 
      id="founder-philosophy" 
      className="py-10 sm:py-12 lg:py-14 bg-[#ede4d4] border-b border-[#ded3bf] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Primary Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-[1.12] tracking-tight">
              <span className="block text-stone-900 font-normal">
                Clarity before action.
              </span>
              <span className="block text-[#b17a2b] italic font-normal mt-1">
                Process before prediction.
              </span>
            </h2>

            {/* Sub-headline */}
            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mt-2.5 sm:mt-3 font-normal max-w-2xl">
              A philosophy shaped over decades and carried forward into every investment framework.
            </p>

            {/* Full-width Subtle Divider Line */}
            <div className="w-full h-px bg-[#cfc1ad] my-4 sm:my-5" aria-hidden="true" />

            {/* Decorative Gold Quotation Mark */}
            <span 
              className="block font-serif text-3xl sm:text-4xl text-[#b17a2b] leading-none mb-2 select-none" 
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Three Philosophy Quote Paragraphs */}
            <div className="space-y-2.5 sm:space-y-3 font-serif italic text-sm sm:text-[15.5px] md:text-base text-stone-800 leading-relaxed font-normal">
              <p>
                Your clients may know what they &ldquo;want&rdquo;, but may not always know what they &ldquo;need&rdquo;.
              </p>
              <p>
                Look them in the eye and advise them on what they really need to do! It will require knowledge, data and an uncomplicated approach to evoke client conviction to act.
              </p>
              <p>
                If you are unwavering in delivering such uncomplicated and fearless advice, then your clients will truly experience the unmatched value of the AnandRathi proposition!
              </p>
            </div>

            {/* Founder Attribution Block */}
            <div className="mt-5 sm:mt-6 pt-1">
              <p className="font-serif text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                Mr. Anand Rathi
              </p>
              <p className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#95631f] mt-0.5">
                Founder &amp; Chairman, Anand Rathi Group
              </p>
            </div>
          </motion.div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[400px]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src="/leaders/Anand_Rathi_Portrait.png"
                  alt="Mr. Anand Rathi, Founder & Chairman, Anand Rathi Group"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 640px) min(340px, calc(100vw - 32px)), 400px"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderPhilosophySection;
