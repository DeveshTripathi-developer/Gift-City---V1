import React from 'react';

export function RegulatorySection() {
  const regulatoryDetails = [
    { label: 'Entity Name', value: 'Anand Rathi FME (IFSC) Private Limited' },
    { label: 'Entity Type', value: 'Registered Fund Management Entity, Non Retail' },
    { label: 'Regulator', value: 'International Financial Services Centres Authority' },
    { label: 'IFSCA Registration Number', value: 'FDM2026FNR1141' },
    { label: 'Date of Registration', value: '11 September 2026' },
    { label: 'Registered Office', value: 'Office No. SI–M–1092, Shilp Incubation Centre, Unit B, First Floor, Plot 11T 3 & 11T 5, Block – 11, GIFT SEZ, GIFT City, Dist. Gandhinagar – 382 050' },
    { label: 'Principal Officer', value: 'Dipalkumar Patel' },
    { label: 'Compliance Officer', value: 'Sarfaraj Rathod' },
    { label: 'Contact Details', value: 'arfme@rathi.com, 8401478245' },
  ];

  const schemeDocs = [
    'Placement Memorandum',
    'Key Investment Terms',
    'Risk Factors',
    'Fees and Expenses',
    'Valuation Policy',
    'Conflict of Interest Policy',
    'Investor Reports',
    'Applicable Disclosures',
    'Audited Financial Statements',
  ];

  const disclosures = [
    'Investments in securities and investment funds are subject to market and other risks.',
    'Past performance may not be indicative of future performance.',
    'The value of investments may rise or fall and investors may receive back less than the amount invested.',
    'Currency movements may affect investment values and returns where investments are denominated in a currency different from the investor\'s base currency.',
    'Investors should review the relevant placement memorandum, risk factors, eligibility requirements, taxation considerations and other scheme documentation before investing.',
  ];

  return (
    <section id="regulatory" className="py-10 sm:py-12 lg:py-14 bg-[#f8f6f1] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline matching reference */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-stone-900 font-normal tracking-tight leading-tight">
            Regulatory and Investor Information
          </h2>
        </div>

        {/* 2 White Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Regulatory Information */}
          <div className="bg-white border border-stone-200/90 p-7 sm:p-9 shadow-xs rounded-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl sm:text-[28px] text-stone-900 font-normal mb-6 tracking-tight">
                Regulatory Information
              </h3>
              <div className="space-y-3 text-xs sm:text-[13.5px] text-stone-700 leading-relaxed">
                {regulatoryDetails.map((item, idx) => (
                  <p key={idx}>
                    <strong className="font-semibold text-stone-900">{item.label}:</strong>{' '}
                    {item.label === 'Contact Details' ? (
                      <span>
                        <a href="mailto:arfme@rathi.com" className="text-[#b17a2b] hover:underline font-medium">arfme@rathi.com</a>,{' '}
                        <a href="tel:8401478245" className="hover:underline">8401478245</a>
                      </span>
                    ) : item.label === 'IFSCA Registration Number' ? (
                      <span className="font-mono text-stone-900 font-medium">
                        {item.value}
                      </span>
                    ) : (
                      item.value
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Scheme Information */}
          <div className="bg-white border border-stone-200/90 p-7 sm:p-9 shadow-xs rounded-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl sm:text-[28px] text-stone-900 font-normal mb-3 tracking-tight">
                Scheme Information
              </h3>
              <p className="text-xs sm:text-[13.5px] text-stone-600 mb-5 font-normal">
                For every scheme, investors can access:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-[13.5px] text-stone-700 leading-normal">
                {schemeDocs.map((doc, idx) => (
                  <li key={idx} className="pl-1">
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclosures Subsection */}
        <div className="mt-8 bg-white border border-stone-200/90 p-7 sm:p-8 rounded-xs shadow-xs">
          <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal mb-3.5 tracking-tight">
            Important Disclosures
          </h3>
          <div className="space-y-2 text-xs sm:text-[13px] text-stone-600 leading-relaxed">
            {disclosures.map((disc, idx) => (
              <p key={idx}>
                {disc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegulatorySection;
