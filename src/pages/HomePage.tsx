import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import LifeMadePossible from '../components/LifeMadePossible';
import CtaSection from '../components/CtaSection';
import Testimonials from '../components/Testimonials';
import PromiseSection from '../components/PromiseSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import AccoladesSection from '../components/AccoladesSection';
import LeadForm from '../components/LeadForm';

export default function HomePage() {
  return (
    <main className="flex-1 pt-[100px]">
      <Hero />
      <Features />
      <LifeMadePossible />
      <CtaSection />
      <Testimonials />
      <PromiseSection />
      <ServicesSection />
      <FaqSection />
      <AccoladesSection />
      <LeadForm />
    </main>
  );
}
