import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GiftCitySection from '@/components/GiftCitySection';
import PhilosophySection from '@/components/PhilosophySection';
import ExperienceSection from '@/components/ExperienceSection';
import InvestmentLeadershipSection from '@/components/InvestmentLeadershipSection';
import ConnectSection from '@/components/ConnectSection';
import RegulatorySection from '@/components/RegulatorySection';
import FounderPhilosophySection from '@/components/FounderPhilosophySection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-[#1a140e] font-sans antialiased selection:bg-[#b17a2b] selection:text-white">
      {/* Top Navigation Bar with Logo */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* GIFT City */}
        <ScrollReveal viewportAmount={0.12} yOffset={32}>
          <GiftCitySection />
        </ScrollReveal>

        {/* Our Philosophy */}
        <ScrollReveal viewportAmount={0.08} yOffset={32}>
          <PhilosophySection />
        </ScrollReveal>

        {/* Our Foundation & Experience */}
        <ScrollReveal viewportAmount={0.08} yOffset={32}>
          <ExperienceSection />
        </ScrollReveal>

        {/* Investment Leadership */}
        <ScrollReveal viewportAmount={0.12} yOffset={32}>
          <InvestmentLeadershipSection />
        </ScrollReveal>

        {/* Connect With Us Interactive Form */}
        <ScrollReveal viewportAmount={0.08} yOffset={32}>
          <ConnectSection />
        </ScrollReveal>

        {/* Founder Philosophy Section ("Clarity before action. Process before prediction.") */}
        <ScrollReveal viewportAmount={0.08} yOffset={32}>
          <FounderPhilosophySection />
        </ScrollReveal>

        {/* Regulatory & Investor Information */}
        <ScrollReveal viewportAmount={0.08} yOffset={32}>
          <RegulatorySection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
