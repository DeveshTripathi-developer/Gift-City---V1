import React from 'react';

export function GiftCitySection() {
  return (
    <section id="gift-city" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading and kicker */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight mb-5">
              India&apos;s gateway to international finance
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              GIFT City in Gandhinagar is home to India&apos;s first International Financial Services Centre.
            </p>
          </div>

          {/* Right Column: Context, details & quote card */}
          <div className="lg:col-span-7 space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              It brings banking, capital markets, funds, insurance, and other financial services into a unified international ecosystem regulated by the International Financial Services Centres Authority (IFSCA).
            </p>
            <p>
              GIFT IFSC was created with a clear objective: to build a globally competitive financial ecosystem within India and enable financial activities that were traditionally carried out through overseas jurisdictions to be conducted directly from India.
            </p>
            <p>
              For investors, this creates a regulated platform connecting Indian investment capabilities with international capital and global financial structures.
            </p>

            <div className="pt-4">
              <div className="p-6 bg-[#f8f5ee] border-l-4 border-[#b17a2b]">
                <p className="font-serif text-xl sm:text-2xl text-[#1a140e] leading-snug m-0">
                  A unified international ecosystem, within India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftCitySection;
