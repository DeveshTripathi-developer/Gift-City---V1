'use client';

import React, { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Check, ArrowUpRight, Mail, Phone, Clock, FileCheck2, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RegulatorySection from '@/components/RegulatorySection';
import Footer from '@/components/Footer';

function subscribe(callback: () => void) {
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', callback);
    return () => window.removeEventListener('popstate', callback);
  }
  return () => {};
}

function getSnapshot(): string {
  if (typeof window === 'undefined') return '';
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get('ref') || sessionStorage.getItem('last_enquiry_ref') || '';
  } catch {
    return '';
  }
}

function getServerSnapshot(): string {
  return '';
}

export default function ThankYouPage() {
  const refId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-[#1a140e] font-sans antialiased selection:bg-[#b17a2b] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero Thank You Section (Guaranteed visible, matching reference layout in warm light luxury theme) */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-[#faf7f0] border-b border-stone-200 overflow-hidden text-center">
          {/* Concentric rings background inspired by reference image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 sm:opacity-40">
            <div className="w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] lg:w-[700px] lg:h-[700px] rounded-full border border-[#b17a2b]/20" />
            <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] rounded-full border border-[#b17a2b]/25" />
            <div className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#b17a2b]/30" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {/* Circular Seal / Checkmark Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-[#b17a2b] shadow-sm text-[#b17a2b] mx-auto">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
              </div>

              {/* Entity Name Sub-badge */}
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#95631f]">
                ANAND RATHI FME (IFSC) PRIVATE LIMITED
              </p>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-stone-900 font-normal tracking-tight">
                <span>Thank you.</span>
                <span className="block text-[#b17a2b] mt-1 sm:mt-1.5 font-normal">
                  We have received your details.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                Our GIFT City team will connect with you shortly to walk you through the structure, investment process and eligibility.
              </p>

              {/* Reference ID Banner (if provided) */}
              {refId && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#b17a2b]/30 rounded-xs text-xs font-mono text-stone-800 shadow-xs">
                  <span className="text-stone-500 font-sans font-medium uppercase tracking-wider text-[10px]">Reference:</span>
                  <span className="font-semibold text-stone-900">{refId}</span>
                </div>
              )}

              {/* Action Buttons: Homepage Button & Explore Approach */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#b17a2b] text-white hover:bg-[#95631f] transition-all shadow-xs cursor-pointer"
                >
                  <span>Back to Home</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#philosophy"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition-colors shadow-xs"
                >
                  <span>Explore Our Approach</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: WHAT HAPPENS NEXT */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-2">
                WHAT HAPPENS NEXT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
                Clarity before action.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-2.5 font-normal">
                Here is how we will take this conversation forward.
              </p>
            </div>

            {/* Sections 3, 4, 5: The Three Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Section 3 / Step 1 */}
              <div className="bg-[#faf8f5] border border-stone-200/90 p-6 sm:p-8 rounded-xs flex flex-col justify-between shadow-xs hover:border-[#b17a2b]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-normal text-[#b17a2b]">01</span>
                    <FileCheck2 className="w-5 h-5 text-[#b17a2b]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal mb-3 tracking-tight">
                    We review your details
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Our team looks at your country of residence, investor category and indicative investment range, so the conversation starts in the right place.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200/60 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  Initial Assessment
                </div>
              </div>

              {/* Section 4 / Step 2 */}
              <div className="bg-[#faf8f5] border border-stone-200/90 p-6 sm:p-8 rounded-xs flex flex-col justify-between shadow-xs hover:border-[#b17a2b]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-normal text-[#b17a2b]">02</span>
                    <Clock className="w-5 h-5 text-[#b17a2b]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal mb-3 tracking-tight">
                    We connect with you
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    A member of the GIFT City team will reach out on the email or mobile number you shared.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200/60 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  Direct Outreach
                </div>
              </div>

              {/* Section 5 / Step 3 */}
              <div className="bg-[#faf8f5] border border-stone-200/90 p-6 sm:p-8 rounded-xs flex flex-col justify-between shadow-xs hover:border-[#b17a2b]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-normal text-[#b17a2b]">03</span>
                    <Sparkles className="w-5 h-5 text-[#b17a2b]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal mb-3 tracking-tight">
                    We keep it uncomplicated
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    We explain how investing through GIFT City works, who is eligible and what the process looks like, before you make any decision.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200/60 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  Transparent Guidance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Prefer to talk sooner? */}
        <section className="py-12 sm:py-16 bg-[#faf7f0] border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-stone-200/90 p-8 sm:p-10 lg:p-12 shadow-xs rounded-xs">
              <div className="max-w-2xl mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-2">
                  DIRECT CONTACT
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
                  Prefer to talk sooner?
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-2 font-normal">
                  Write to us or call the GIFT City team directly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                {/* Email Box */}
                <div className="p-6 bg-[#faf8f5] border border-stone-200 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#b17a2b]">
                    <Mail className="w-4 h-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      EMAIL
                    </span>
                  </div>
                  <p>
                    <a
                      href="mailto:enquiry@rathi.com"
                      className="font-serif text-xl sm:text-2xl text-stone-900 hover:text-[#b17a2b] transition-colors break-words"
                    >
                      enquiry@rathi.com
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 pt-1">
                    Direct enquiry mailbox for GIFT City private wealth advisory.
                  </p>
                </div>

                {/* Phone Box */}
                <div className="p-6 bg-[#faf8f5] border border-stone-200 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#b17a2b]">
                    <Phone className="w-4 h-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      PHONE
                    </span>
                  </div>
                  <p>
                    <a
                      href="tel:8401478245"
                      className="font-serif text-xl sm:text-2xl text-stone-900 hover:text-[#b17a2b] transition-colors"
                    >
                      8401478245
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 pt-1">
                    GIFT City desk available during Indian financial market hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Regulatory and Investor Information & Important Disclosures */}
        <RegulatorySection />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}
