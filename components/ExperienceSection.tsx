'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Leader {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  fullBio: string;
  url: string;
}

export function ExperienceSection() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const metrics = [
    { value: '₹1,08,377\u00A0crore+', label: 'AUM as of 30 September 2026' },
    { value: '14,309+', label: 'Client families' },
    { value: '431', label: 'Relationship Managers' },
    { value: '19+', label: 'Cities in India' },
  ];

  const leaders: Leader[] = [
    {
      name: 'Anand Rathi',
      title: 'Founder & Group Chairman',
      role: '(Non-Executive Director)',
      image: '/anand-rathi.jpg',
      bio: 'Anand Rathi established the Anand Rathi Group in 1994. He is a gold medalist Chartered Accountant and has over 50 years of diverse experience.',
      fullBio: 'Anand Rathi established the Anand Rathi Group in 1994. He is a gold medalist Chartered Accountant and has over 50 years of diverse experience. Under his leadership, Anand Rathi Group has emerged as one of India’s premier financial services conglomerates with an extensive pan-India network and international footprint. He previously served as the President of the Bombay Stock Exchange (BSE) and has been a driving force in pioneering research-backed wealth management in India.',
      url: 'https://www.anandrathiwealth.in/Leaders/AnandRathi',
    },
    {
      name: 'Pradeep Gupta',
      title: 'Co-Founder & Vice Chairman',
      role: '(Non-Executive Director)',
      image: '/pradeep-gupta.png',
      bio: "Pradeep Gupta has been instrumental in laying the foundation of the Group's Institutional Broking and Investment Services arm. He has over 20 years of experience in the financial markets.",
      fullBio: "Pradeep Gupta has been instrumental in laying the foundation of the Group's Institutional Broking and Investment Services arm. He has over 20 years of experience in the financial markets. His vision and deep understanding of capital markets and international financial flows have guided the firm's strategic expansion, establishing disciplined wealth management and advisory platforms serving ultra-high-net-worth families globally.",
      url: 'https://www.anandrathiwealth.in/Leaders/PradeepGupta',
    },
    {
      name: 'Rakesh Rawal',
      title: 'Chief Executive Officer',
      role: '(Whole-Time Director)',
      image: '/rakesh-rawal.png',
      bio: 'Rakesh Rawal is one of the longest standing CEOs in the private wealth industry, serving as the CEO of Anand Rathi Wealth since 2007.',
      fullBio: 'Rakesh Rawal is one of the longest standing CEOs in the private wealth industry, serving as the CEO of Anand Rathi Wealth since 2007. With more than three decades of experience spanning premier private banks and asset management, he has spearheaded the disciplined processes, unique client-centric framework, and sustained growth that established Anand Rathi Wealth as an NSE 500 listed leader managing over ₹1,00,000 Crore in AUM.',
      url: 'https://www.anandrathiwealth.in/Leaders/RakeshRawal',
    },
    {
      name: 'Feroze Azeez',
      title: 'Joint CEO',
      role: '',
      image: '/feroze-azeez.png',
      bio: 'Feroze Azeez drives the strategic direction of the company, shaping the evolving and dynamic business landscape to make Anand Rathi Wealth an NSE500 listed company.',
      fullBio: 'Feroze Azeez drives the strategic direction of the company, shaping the evolving and dynamic business landscape to make Anand Rathi Wealth an NSE500 listed company. Frequently ranked among India’s top wealth managers and widely respected for his quantitative approach to asset allocation, financial product structuring, and investor education, he has played an indispensable role in institutionalizing transparent, uncomplicated wealth management across India and GIFT City.',
      url: 'https://www.anandrathiwealth.in/Leaders/FerozeAzeez',
    },
  ];

  return (
    <section id="experience" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foundation Head */}
        <div className="max-w-3xl mb-5 sm:mb-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight mb-2.5 sm:mb-3">
            Built on more than two decades of experience
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Anand Rathi Wealth Limited is an NSE 500 listed company serving HNIs and UHNIs in India and internationally.
          </p>
        </div>

        {/* Narrative & Philosophy Context */}
        <div className="max-w-4xl space-y-3 sm:space-y-3.5 text-stone-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-7">
          <p>
            As of 30 September 2026, Anand Rathi Wealth oversees more than ₹1,08,377 crore in AUM across 14,309+ client families, supported by 431 Relationship Managers and a presence across 19+ cities in India, with an international presence in Dubai. We have opened our United Kingdom unit, which has also received FCA approval, further strengthening our global footprint.
          </p>
          <p className="font-serif text-base sm:text-lg text-stone-800 italic">
            Our growth has been shaped by a consistent philosophy: keep investing structured, measurable and uncomplicated.
          </p>
        </div>

        {/* 4 Quantitative Metrics - Positioned after Our Growth content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 py-6 sm:py-7 border-t border-b border-stone-200">
          {metrics.map((m, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              className="space-y-1"
            >
              <strong className="block font-serif text-xl sm:text-2xl md:text-3xl lg:text-[1.75rem] xl:text-3xl font-normal text-[#b17a2b] tabular-nums tracking-tight whitespace-nowrap">
                {m.value}
              </strong>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Leadership section header matching the Meet the Visionaries style */}
        <div className="mt-12 sm:mt-16 mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-2">
            LEADERSHIP THAT SHAPED THE ORGANISATION
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            Meet the Visionaries
          </h3>
          <p className="text-sm sm:text-base text-stone-600 font-normal mt-2.5">
            Experience behind the philosophy — disciplined leaders with decades of market stewardship.
          </p>
          <div className="w-14 h-1 bg-[#b17a2b] mx-auto mt-4" />
        </div>

        {/* 4 Leadership Cards in 2x2 Overlapping Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-9">
          {leaders.map((leader, idx) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (idx % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center group"
            >
              {/* Leader Photo - Further reduced compact portrait height */}
              <div 
                onClick={() => setSelectedLeader(leader)}
                className="relative w-full sm:w-[145px] md:w-[155px] h-[175px] sm:h-[168px] md:h-[176px] shrink-0 rounded-2xl overflow-hidden shadow-sm bg-[#bfc5cd] border border-stone-300/80 cursor-pointer"
                title={`Click to view full bio of ${leader.name}`}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 155px"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping White Information Card */}
              <div className="relative z-10 w-[92%] sm:w-auto -mt-4 sm:mt-0 sm:-ml-6 md:-ml-8 bg-white py-3 px-3.5 sm:py-3.5 sm:px-4.5 shadow-md hover:shadow-lg transition-all rounded-2xl border border-stone-200/90 text-center flex-1 flex flex-col justify-center">
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900 tracking-tight leading-tight">
                    {leader.name}
                  </h4>
                  <p className="font-bold text-xs sm:text-[13px] text-stone-900 mt-0.5">
                    {leader.title}
                  </p>
                  {leader.role ? (
                    <p className="text-[10px] sm:text-[11px] text-stone-500 italic mt-0.5">
                      {leader.role}
                    </p>
                  ) : (
                    <div className="h-3 sm:h-3.5" aria-hidden="true" />
                  )}
                  <p className="text-xs text-stone-600 leading-snug mt-1.5 mb-2.5 line-clamp-2 font-normal">
                    {leader.bio}
                  </p>
                </div>
                <div className="pt-0.5">
                  <a
                    href={leader.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b17a2b] hover:text-[#95631f] transition-all group/link hover:underline focus-visible:outline-2 focus-visible:outline-[#b17a2b]"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedLeader && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leader-modal-title"
          >
            <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden border border-stone-200 relative">
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-stone-200">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 id="leader-modal-title" className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#b17a2b] uppercase tracking-wider mt-0.5">
                      {selectedLeader.title}
                    </p>
                    {selectedLeader.role && (
                      <p className="text-xs text-stone-500 italic">
                        {selectedLeader.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-stone-200 my-4" />

                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedLeader.fullBio}
                </p>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <a
                    href={selectedLeader.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#b17a2b] hover:text-[#95631f] hover:underline"
                  >
                    <span>Official Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#b17a2b] text-white hover:bg-[#95631f] transition-colors rounded-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
