'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Mail, Clock, Copy, Check, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SubmissionResult {
  referenceId: string;
  submittedAt: string;
  deliveryStatus: {
    sent: boolean;
    method: string;
    note: string;
    smtpConfigured?: boolean;
    recipients: {
      to: string;
      cc: string[];
    };
  };
  message: string;
}

export function ConnectSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    country: '',
    category: '',
    range: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      setSubmissionResult(data);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'Something went wrong while submitting. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyRef = (id: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmissionResult(null);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      country: '',
      category: '',
      range: '',
      message: '',
    });
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

          {/* Right Column: Interactive Form & Beautiful Submission View */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 shadow-sm p-6 sm:p-10 rounded-xs">
            {submitted && submissionResult ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {/* Header with Gold Badge */}
                <div className="text-center pb-6 border-b border-stone-200">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f4ede2] border-2 border-[#b17a2b]/30 mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#b17a2b]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal tracking-tight">
                    Thank You for Reaching Out
                  </h3>
                  <p className="mt-2 text-base sm:text-lg font-serif text-[#b17a2b] italic">
                    Our team will connect with you shortly.
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your enquiry has been successfully registered and routed to our dedicated GIFT City private wealth advisory desk.
                  </p>
                </div>

                {/* Reference ID Banner */}
                <div className="bg-white border border-stone-200 p-4 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                      Enquiry Reference ID
                    </span>
                    <span className="font-mono text-sm sm:text-base font-semibold text-stone-900">
                      {submissionResult.referenceId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyRef(submissionResult.referenceId)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-sm transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-600" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Email Dispatch Details Card */}
                <div className="bg-white border border-stone-200 p-5 rounded-sm space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-800">
                    <Mail className="w-4 h-4 text-[#b17a2b]" />
                    <span>Email Notification Triggered</span>
                  </div>
                  
                  <div className="p-3 bg-[#faf8f5] border border-stone-200/80 rounded-sm text-xs space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-stone-700 w-12 shrink-0">TO:</span>
                      <span className="font-mono text-stone-900 break-all">{submissionResult.deliveryStatus.recipients.to}</span>
                      <span className="text-[10px] uppercase font-semibold text-[#b17a2b] bg-[#f4ede2] px-1.5 py-0.5 rounded-xs sm:ml-auto">
                        Lead Desk
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 pt-1 border-t border-stone-200/60">
                      <span className="font-semibold text-stone-700 w-12 shrink-0">CC:</span>
                      <div className="flex flex-wrap gap-1.5 text-stone-800">
                        {submissionResult.deliveryStatus.recipients.cc.map((ccEmail, idx) => (
                          <span key={idx} className="font-mono bg-white px-2 py-0.5 border border-stone-200 rounded-xs text-[11px]">
                            {ccEmail}
                          </span>
                        ))}
                      </div>
                    </div>
                    {submissionResult.deliveryStatus.smtpConfigured === false && (
                      <div className="mt-2 p-2 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] rounded-xs">
                        ⚠️ <strong>Local Server Notice:</strong> SMTP credentials are missing in your local server&apos;s <code>.env.local</code> file. Please create <code>.env.local</code> on your machine and restart <code>npm run dev</code>.
                      </div>
                    )}
                  </div>
                </div>

                {/* Submitted Data Summary */}
                <div className="bg-white border border-stone-200 p-5 rounded-sm">
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block mb-3">
                    Submitted Particulars
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-stone-500 block">Investor Name</span>
                      <span className="font-medium text-stone-900">{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Contact Email</span>
                      <span className="font-medium text-stone-900">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Phone</span>
                      <span className="font-medium text-stone-900">{formData.mobile}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Residence</span>
                      <span className="font-medium text-stone-900">{formData.country}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Category</span>
                      <span className="font-medium text-stone-900">{formData.category}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Indicative Range</span>
                      <span className="font-medium text-[#b17a2b]">{formData.range}</span>
                    </div>
                  </div>
                </div>

                {/* Next Steps Guidance */}
                <div className="p-4 bg-[#f8f5ee] border-l-3 border-[#b17a2b] text-xs text-stone-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                    <Clock className="w-3.5 h-3.5 text-[#b17a2b]" />
                    <span>What happens next?</span>
                  </div>
                  <p className="leading-relaxed">
                    A dedicated Relationship Manager from Anand Rathi Wealth IFSC will review your requirements and get in touch within 24 business hours to discuss GIFT City structures and eligibility.
                  </p>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                  <a
                    href="#home"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors text-center"
                  >
                    Back to Top
                  </a>
                </div>
              </motion.div>
            ) : (
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="rahul@example.com"
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
                    <label htmlFor="country" className="block text-xs font-medium text-stone-700">
                      Country of Residence *
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      disabled={loading}
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. United Arab Emirates"
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
                      Indicative Investment Range *
                    </label>
                    <input
                      id="range"
                      name="range"
                      type="text"
                      required
                      disabled={loading}
                      value={formData.range}
                      onChange={handleChange}
                      placeholder="e.g. USD 150,000+"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
