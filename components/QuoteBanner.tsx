import React from 'react';

export function QuoteBanner() {
  return (
    <section className="bg-[#f0e8d9] py-8 sm:py-10 border-t border-b border-[#e5dccb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight mb-2">
              Clarity before action.<br />
              Process before prediction.
            </h2>
          </div>
          <div className="max-w-md text-stone-700 text-sm sm:text-base leading-relaxed">
            <p className="mb-3">
              A philosophy shaped over decades and carried forward into every investment framework.
            </p>
            <p className="text-xs uppercase tracking-wider text-[#95631f] font-semibold">
              Anand Rathi Wealth IFSC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteBanner;
