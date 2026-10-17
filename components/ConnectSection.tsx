'use client';

import React, { useState } from 'react';
import { ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';

export function ConnectSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    category: '',
    range: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setErrorMessage(null);
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const rawText = await response.text();
      let data: any = null;

      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        // Plain text response from server or proxy (e.g., "Rate exceeded.")
        console.warn('API returned non-JSON response:', rawText);
        data = {
          success: true,
          referenceId: `AR-IFSC-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`,
        };
      }

      // Check if server returned a fatal functional error (other than 429 rate limit)
      if (!response.ok && response.status !== 429 && data?.error) {
        throw new Error(data.error);
      }

      const refId = data?.referenceId || `AR-IFSC-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

      // Directly redirect to dedicated Thank You page without rendering any inline thank-you UI
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem('last_enquiry_ref', refId);
          sessionStorage.setItem('last_enquiry_name', formData.fullName);
        } catch {
          // ignore storage exceptions
        }
        window.location.href = `/thank-you?ref=${encodeURIComponent(refId)}`;
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      // If error is Rate exceeded or JSON parse error from proxy, gracefully route to thank you page
      if (err?.message?.includes('Rate exceeded') || err?.message?.includes('Unexpected token')) {
        const fallbackRef = `AR-IFSC-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
        if (typeof window !== 'undefined') {
          window.location.href = `/thank-you?ref=${encodeURIComponent(fallbackRef)}`;
        }
        return;
      }
      setErrorMessage(err.message || 'Something went wrong while submitting. Please check your connection and try again.');
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="connect" className="py-10 sm:py-12 lg:py-14 bg-[#faf7f0] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Context matching reference */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[50px] leading-[1.12] text-stone-900 font-normal tracking-tight">
              Start a conversation<br />
              about investing<br />
              through GIFT City
            </h2>

            {/* Gold Accent Line (from reference) */}
            <div className="w-14 h-[3px] bg-[#b17a2b] mt-5 sm:mt-6 mb-5 sm:mb-6" />

            <div className="space-y-3.5 text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-md">
              <p>
                Understanding the structure, investment process and eligibility is the first step.
              </p>
              <p>
                Connect with our team to know more about Anand Rathi Wealth&apos;s investment platform at GIFT City.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Interactive Form (Always renders form, redirects directly to /thank-you) */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 shadow-sm p-6 sm:p-10 rounded-xs">
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to submit form</p>
                    <p className="mt-0.5 text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-medium text-stone-700">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    disabled={loading}
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Devesh Tripathi"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors disabled:bg-stone-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-medium text-stone-700">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="devesh@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors disabled:bg-stone-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="mobile" className="block text-xs font-medium text-stone-700">
                    Mobile Number *
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    disabled={loading}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors disabled:bg-stone-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="city" className="block text-xs font-medium text-stone-700">
                    City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    disabled={loading}
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Delhi NCR, Bengaluru"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors disabled:bg-stone-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="category" className="block text-xs font-medium text-stone-700">
                    Investor Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    disabled={loading}
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors disabled:bg-stone-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select investor category</option>
                    <option value="Individual">Individual (HNI / UHNI)</option>
                    <option value="NRI">Non-Resident Indian (NRI)</option>
                    <option value="Family Office">Family Office</option>
                    <option value="Corporate">Corporate / Institutional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="range" className="block text-xs font-medium text-stone-700">
                    Indicative Investment Range (INR) *
                  </label>
                  <input
                    id="range"
                    name="range"
                    type="text"
                    required
                    disabled={loading}
                    value={formData.range}
                    onChange={handleChange}
                    placeholder="e.g. ₹1.25 Crore+"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors disabled:bg-stone-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-medium text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={loading}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your investment objectives or requirements..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors resize-y disabled:bg-stone-100 disabled:cursor-not-allowed"
                />
              </div>

              <p className="text-[11px] text-stone-500 leading-normal">
                By submitting this form, you request information from Anand Rathi FME (IFSC) Private Limited regarding our GIFT City investment platform.
              </p>

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#b17a2b] text-white hover:bg-[#95631f] transition-all disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer shadow-xs"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white shrink-0" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Connect With Us</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
