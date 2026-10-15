import React from 'react';

export function GiftCitySection() {
  return (
    <section id="gift-city" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Column: Eyebrow + Large Serif Headline + Gold Accent Bar */}
          <div className="lg:col-span-5">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#b17a2b] mb-2.5 sm:mb-3">
              WHAT IS GIFT CITY AND WHY DOES IT EXIST?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.14] text-stone-900 font-normal tracking-tight">
              India&apos;s gateway to<br className="hidden sm:inline" /> international<br className="hidden sm:inline" /> finance
            </h2>
            <div className="w-14 sm:w-16 h-[2px] bg-[#b17a2b] mt-4 sm:mt-5" aria-hidden="true" />
          </div>

          {/* Right Column: 3 Explanatory Paragraphs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5 text-stone-700 text-sm sm:text-[15px] leading-relaxed font-normal pt-0.5 sm:pt-1">
            <p>
              GIFT City in Gandhinagar is home to India&apos;s first International Financial Services Centre.
            </p>
            <p>
              It brings banking, capital markets, funds, insurance and other financial services into a unified international ecosystem regulated by the International Financial Services Centres Authority, IFSCA.
            </p>
            <p>
              GIFT IFSC was created with a clear objective: to build a globally competitive financial ecosystem within India and enable financial activities that were traditionally carried out through overseas jurisdictions to be conducted from India.
            </p>
          </div>
        </div>

        {/* Full-width Divider Line with compact spacing */}
        <div className="w-full h-px bg-stone-200/90 my-6 sm:my-7" aria-hidden="true" />

        {/* Bottom Centered Italic Callout Statement with tight top/bottom spacing */}
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4 py-1">
          <p className="font-serif italic text-base sm:text-lg md:text-xl lg:text-[22px] text-stone-800 leading-relaxed font-normal">
            For investors, this creates a regulated platform connecting Indian investment capabilities with international capital and global financial structures.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GiftCitySection;
