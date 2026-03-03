import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/services';
import { Testimonials } from './Testimonials';
import { BrandLogos } from './BrandLogos';
import { StatsSection } from './StatsSection';
import { ProductsSection } from './ProductsSection';
import { StartBusinessSection } from './StartBusinessSection';
import { FAQSection } from './FAQSection';
import { TrustBar } from './TrustBar';
import { ServiceQuickAccess } from './ServiceQuickAccess';
import { HowItWorks } from './HowItWorks';
import { ComplianceCalendar } from './ComplianceCalendar';
import HeroBackground from "../assets/hero-background.jpg";
import WhyEFilingCartSection from './WhyEFilingCartSection'; // renamed
import userImage1 from "../assets/user-1.jpg";
import userImage2 from "../assets/user-2.jpg";
import userImage3 from "../assets/user-3.jpg";

export const HomePage = () => {
  return (
    <div className="relative">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pb-16 lg:pt-12 lg:pb-20">

        {/* ================= BACKGROUND IMAGE ================= */}
        <div className="absolute inset-0 -z-20">
          <img
            src={HeroBackground}
            alt=""
            className="w-full h-full object-cover scale-105 blur-[2px] opacity-50"
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative mx-auto max-w-5xl px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold">
            Trusted Legal & Tax Compliance Platform for Indian Businesses
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-5xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            India’s Trusted Online <br />
            <span className="text-brand-blue">
              Legal, Tax & Compliance Services Platform
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-md lg:text-lg text-slate-600 max-w-6xl mx-auto leading-relaxed">
            Join thousands of businesses who trust <strong>E-Filing Cart </strong> 
            to manage their MCA, GST, and Income Tax compliance. Our
            digital platform with expert CA & legal support ensures 
            end-to-end workflows, paperless filing, and secure documentation.
          </p>

          {/* ================= FEATURE PILLS ================= */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "GST Registration & Filing",
              "Private Limited & LLP Registration",
              "Trademark Registration",
            ].map((feature, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 bg-white/70 backdrop-blur hover:border-brand-blue hover:text-brand-blue hover:shadow-md transition-all duration-300"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-10">
            <Link
              to="/start-business"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-b from-gray-800 via-black to-gray-900"
            >
              Start Your Business →
            </Link>

            <p className="text-sm text-slate-500 mt-2">
              Fast process • Expert support • 100% online
            </p>
          </div>

          {/* ================= TRUST SECTION ================= */}
          <div className="mt-10 flex justify-center items-center gap-4">
            <div className="flex -space-x-2">
              <img src={userImage1} alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              <img src={userImage2} alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              <img src={userImage3} alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            </div>

            <div className="text-sm text-slate-700 font-semibold">
              Trusted by 1,000+ founders & businesses across India
            </div>
          </div>

        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <BrandLogos />
      <TrustBar />
      <StatsSection />
      <WhyEFilingCartSection />
      <ProductsSection />
      <HowItWorks />
      <StartBusinessSection />
      <Testimonials />
      <FAQSection />

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/919826765899?text=Hi%20E-Filing%20Cart%2C%20I%20want%20to%20start%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M19.11 17.26c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.86.14.18 1.96 3 4.75 4.2.66.28 1.18.45 1.58.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 3C8.82 3 3 8.82 3 16c0 2.82.92 5.43 2.48 7.55L3 29l5.63-1.47A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" />
        </svg>
      </a>

    </div>
  );
};