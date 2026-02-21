import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Rocket, Shield, Zap, Star } from 'lucide-react';
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

export const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#eff6ff_0%,#ffffff_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-pastel-mint px-4 py-1.5 text-sm font-bold text-brand-green"
            >
              <Star className="h-4 w-4 fill-current" />
              Rated 4.9/5 by 10,000+ Startups
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-6xl font-black tracking-tight text-slate-900 lg:text-8xl"
            >
              Legal Compliance <br />
              <span className="text-brand-blue">Made Simple.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-8 max-w-2xl text-xl text-slate-600"
            >
              1XFILING is India's premium platform for business registrations, tax filings, and legal compliance. Launch your dream business in days.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="w-full rounded-full bg-brand-blue px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-200 transition-transform hover:scale-105 sm:w-auto">
                Start Your Business
              </button>
              <button className="w-full rounded-full border border-slate-200 bg-white px-10 py-5 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-50 sm:w-auto">
                View All Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBar />

      <ServiceQuickAccess />

      <BrandLogos />

      <StatsSection />

      <ProductsSection />

      <HowItWorks />

      {/* Categories Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-black text-slate-900">Our Services</h2>
              <p className="mt-4 text-lg text-slate-600">Everything you need to run a compliant business in India.</p>
            </div>
            <Link to="/services" className="hidden items-center gap-2 font-bold text-brand-blue lg:flex">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all hover:border-brand-blue/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-blue text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  {idx === 0 ? <Rocket /> : idx === 1 ? <Shield /> : <Zap />}
                </div>
                <h3 className="mt-8 text-2xl font-bold text-slate-900">{category.name}</h3>
                <div className="mt-6 space-y-4">
                  {category.services.slice(0, 3).map((service) => (
                    <Link
                      key={service.id}
                      to={`/${category.id}/${service.id}`}
                      className="flex items-center justify-between text-slate-600 hover:text-brand-blue"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                  {category.services.length === 0 && (
                    <p className="text-sm text-slate-400 italic">Coming soon...</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StartBusinessSection />

      <ComplianceCalendar />

      <Testimonials />

      <FAQSection />

      {/* Trust Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black">Why 1XFILING?</h2>
              <p className="mt-6 text-xl text-slate-400">We combine technology with human expertise to deliver a seamless legal experience.</p>
              <div className="mt-12 space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Zap className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Lightning Fast</h4>
                    <p className="mt-2 text-slate-400">Automated workflows ensure your applications are filed within hours, not days.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Shield className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Secure & Private</h4>
                    <p className="mt-2 text-slate-400">Your data is encrypted and handled with the highest security standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-12">
              <div className="text-6xl font-black text-brand-blue">10k+</div>
              <div className="mt-2 text-xl font-bold">Businesses Registered</div>
              <div className="mt-12 space-y-6">
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-full w-[95%] rounded-full bg-brand-blue" />
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>Customer Satisfaction</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
