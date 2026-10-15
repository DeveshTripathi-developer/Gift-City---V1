'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function InvestmentLeadershipSection() {
  const leaders = [
    {
      name: 'Dipal Patel',
      image: '/Dipal Patel.jpeg',
      designation: 'Principal Officer',
      desc: 'Mr. Patel is an investment and wealth management professional with over seven years of experience across portfolio management, investment products, and wealth advisory. Since April 2026, he has been associated with Anand Rathi FME (IFSC) Private Limited, following his tenure as Principal Officer at ASK Wealth Advisors, where he oversaw investment activities at GIFT IFSC from May 2024 to April 2026. Prior to that, he worked with IDFC FIRST Bank and Anand Rathi Wealth in roles spanning investment product management, portfolio analysis, financial strategy, and business development. He is a CFA charter holder, an FRM-certified professional, and holds an MBA from IIM Raipur.',
    },
    {
      name: 'Sarfaraj Rathod',
      image: '/Sarfaraj Rathod.jpeg',
      designation: 'Compliance Officer',
      desc: 'Mr Rathod is a Compliance Officer at Anand Rathi IFSC (FME), who is Chartered Accountant with over four years of experience in financial services advisory, including deep expertise in the GIFT IFSC ecosystem. His core areas include regulatory structuring, IFSCA compliance, and tax advisory for global institutions establishing presence in IFSC. He has been involved in end-to-end setup and strategic advisory for FMEs, AIFs, treasury centres, and leasing structures, with hands-on engagement with regulators and policy-level matters.',
    },
  ];

  return (
    <section id="leadership" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-6 sm:mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-2.5">
            GIFT CITY STEWARDSHIP
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
            Investment thinking backed by experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch">
          {leaders.map((leader) => (
            <motion.article
              key={leader.name}
              whileHover={{
                y: -4,
                boxShadow: '0 14px 30px -10px rgba(177, 122, 43, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 25,
              }}
              className="overflow-hidden border border-stone-200 bg-[#fbfaf7] hover:border-[#b17a2b]/70 rounded-xl transition-all flex flex-col shadow-xs cursor-default"
            >
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Photo & Header Row */}
                <div className="mb-5 sm:mb-6 flex items-center gap-4 sm:gap-5 pb-5 border-b border-stone-200/80">
                  <div className="relative h-[74px] w-[74px] shrink-0 overflow-hidden rounded-full border-2 border-[#b17a2b]/40 bg-stone-100 sm:h-[84px] sm:w-[84px] shadow-xs">
                    <Image
                      src={leader.image}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      sizes="(max-width: 639px) 74px, 84px"
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl sm:text-[26px] text-stone-900 font-normal mb-1 tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#95631f] uppercase tracking-wider font-semibold">
                      {leader.designation}
                    </p>
                  </div>
                </div>

                {/* Detailed Experience Bio */}
                <p className="text-xs sm:text-[13.5px] text-stone-700 leading-relaxed font-normal text-justify sm:text-left">
                  {leader.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestmentLeadershipSection;
