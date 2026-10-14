'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function InvestmentLeadershipSection() {
  const leaders = [
    {
      name: 'Dipal Patel',
      image: '/Dipal Patel.jpeg',
      designation: '[Approved Designation]',
      desc: 'Leading investment structuring and client portfolio solutions within the GIFT City International Financial Services Centre.',
      bio: "Dipal's BIO",
    },
    {
      name: 'Sarfaraj Rathod',
      image: '/Sarfaraj Rathod.jpeg',
      designation: '[Approved Designation]',
      desc: "Sarfaraj brings expertise across financial and regulatory disciplines, supporting the platform's investment, operating and governance framework.",
      bio: "Sarfaraj's BIO",
    },
  ];

  return (
    <section id="leadership" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
            Investment thinking backed by experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaders.map((leader) => (
            <motion.article
              key={leader.name}
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: '0 12px 30px -10px rgba(177, 122, 43, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 25,
              }}
              className="overflow-hidden border border-stone-200 bg-[#fbfaf7] hover:border-[#b17a2b]/70 rounded-lg transition-colors flex flex-col cursor-default"
            >
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex-1">
                  <div className="mb-5 flex items-center gap-4 sm:gap-5">
                    <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#b17a2b]/40 bg-stone-100 sm:h-[88px] sm:w-[88px]">
                      <Image
                        src={leader.image}
                        alt={`Portrait of ${leader.name}`}
                        fill
                        sizes="(max-width: 639px) 72px, 88px"
                        className="object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mb-1.5">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-[#95631f] uppercase tracking-wider font-semibold">
                        {leader.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {leader.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs">
                  <span className="italic text-[#b17a2b] font-medium">{leader.bio}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-stone-500">Anand Rathi Wealth IFSC</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestmentLeadershipSection;
