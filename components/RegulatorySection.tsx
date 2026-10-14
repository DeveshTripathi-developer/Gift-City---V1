import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function RegulatorySection() {
  const regulatoryDetails = [
    { label: 'Entity Name', value: 'Anand Rathi FME (IFSC) Private Limited' },
    { label: 'Entity Type', value: 'Registered Fund Management Entity, Non Retail' },
    { label: 'Regulator', value: 'International Financial Services Centres Authority (IFSCA)' },
    { label: 'IFSCA Registration Number', value: '[Insert registration number]' },
    { label: 'Date of Registration', value: '11 September 2026' },
    { label: 'Registered Office', value: '[Insert approved GIFT City registered office address]' },
    { label: 'Principal Officer', value: '[Insert]' },
    { label: 'Compliance Officer', value: '[Insert]' },
    { label: 'Contact Details', value: '[Insert official email and telephone number]' },
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

  const serviceProviders = [
    { role: 'Trustee', name: '[Insert]' },
    { role: 'Custodian', name: '[Insert]' },
    { role: 'Fund Administrator', name: '[Insert]' },
    { role: 'Auditor', name: '[Insert]' },
    { role: 'Banker', name: '[Insert]' },
    { role: 'Legal Counsel', name: '[Insert]' },
  ];

  const disclosures = [
    'Investments in securities and investment funds are subject to market and other risks.',
    'Past performance may not be indicative of future performance.',
    'The value of investments may rise or fall and investors may receive back less than the amount invested.',
    'Currency movements may affect investment values and returns where investments are denominated in a currency different from the investor\'s base currency.',
    'Investors should review the relevant placement memorandum, risk factors, eligibility requirements, taxation considerations and other scheme documentation before investing.',
  ];

  return (
    <section id="regulatory" className="py-20 lg:py-24 bg-[#f4f2ed] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-3">
            REGULATORY & INVESTOR INFORMATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
            Clear information. Informed decisions.
          </h2>
        </div>

        {/* 4 Info Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Panel 1: Regulatory Information */}
          <div className="bg-white border border-stone-200 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-stone-900 font-normal mb-5">
              Regulatory Information
            </h3>
            <ul className="divide-y divide-stone-100 text-xs sm:text-sm">
              {regulatoryDetails.map((item, idx) => (
                <li key={idx} className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                  <span className="sm:col-span-5 text-stone-500 font-normal">
                    {item.label}
                  </span>
                  <span className="sm:col-span-7 font-medium text-stone-900 break-words">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel 2: Scheme Information */}
          <div className="bg-white border border-stone-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-stone-900 font-normal mb-2">
                Scheme Information
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                For every scheme, direct access is provided to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-stone-700">
                {schemeDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2 py-1 border-b border-stone-100">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b17a2b] shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Regulatory compliance adheres to IFSCA Fund Management Entity standards.
            </div>
          </div>

          {/* Panel 3: Service Providers */}
          <div className="bg-white border border-stone-200 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-stone-900 font-normal mb-5">
              Service Providers
            </h3>
            <ul className="divide-y divide-stone-100 text-xs sm:text-sm">
              {serviceProviders.map((item, idx) => (
                <li key={idx} className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                  <span className="sm:col-span-5 text-stone-500 font-normal">
                    {item.role}
                  </span>
                  <span className="sm:col-span-7 font-medium text-stone-900">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel 4: Investor Grievance Redressal */}
          <div className="bg-white border border-stone-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-stone-900 font-normal mb-3">
                Investor Grievance Redressal
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Investors may contact the designated grievance officer for queries or concerns relating to the platform or relevant scheme.
              </p>
              <ul className="divide-y divide-stone-100 text-xs sm:text-sm">
                <li className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                  <span className="sm:col-span-5 text-stone-500 font-normal">Grievance Officer</span>
                  <span className="sm:col-span-7 font-medium text-stone-900">[Insert]</span>
                </li>
                <li className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                  <span className="sm:col-span-5 text-stone-500 font-normal">Email</span>
                  <span className="sm:col-span-7 font-medium text-stone-900">[Insert]</span>
                </li>
                <li className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                  <span className="sm:col-span-5 text-stone-500 font-normal">Telephone</span>
                  <span className="sm:col-span-7 font-medium text-stone-900">[Insert]</span>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-xs text-stone-500 leading-relaxed">
              Investors may also access the appropriate grievance redressal mechanism prescribed by IFSCA.
            </p>
          </div>
        </div>

        {/* Disclosures Subsection */}
        <div className="mt-8 bg-white border border-stone-200 p-6 sm:p-8">
          <h3 className="font-serif text-2xl text-stone-900 font-normal mb-4">
            Important Disclosures
          </h3>
          <div className="space-y-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
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
