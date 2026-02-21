import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { categories } from '../data/services';
import { cn } from '../utils/cn';

export const ServicePage = () => {
  const { categoryId, serviceId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const service = category?.services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-slate-900">Service Not Found</h1>
        <p className="mt-4 text-slate-600">We're working on adding more services. Check back soon!</p>
        <Link to="/" className="mt-8 rounded-full bg-brand-blue px-8 py-3 font-bold text-white">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#eff6ff_0%,#ffffff_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-pastel-blue px-4 py-1.5 text-sm font-bold text-brand-blue">
              <ShieldCheck className="h-4 w-4" />
              Trusted by 10,000+ Businesses
            </div>
            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
              {service.heroTitle}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              {service.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-transform hover:scale-105">
                Start Registration
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-50">
                Talk to Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose This?</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pastel-mint text-brand-green">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{benefit}</h3>
                <p className="mt-3 text-slate-500">Essential advantage for your business growth and legal safety.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Documents Required</h2>
              <p className="mt-4 text-lg text-slate-600">Keep these documents ready for a smooth registration process.</p>
              <div className="mt-10 space-y-4">
                {service.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pastel-lavender text-brand-blue">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-brand-blue p-12 text-white">
              <h3 className="text-2xl font-bold">Don't have all documents?</h3>
              <p className="mt-4 text-blue-100">Our experts will help you arrange necessary documentation and affidavits.</p>
              <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-brand-blue">
                Get Help <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900">The 1XFILING Process</h2>
          <div className="mt-20">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-slate-100 lg:left-1/2" />
              <div className="space-y-12">
                {service.process.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "relative flex flex-col lg:flex-row lg:items-center",
                      idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                    )}
                  >
                    <div className="flex w-full lg:w-1/2">
                      <div className={cn(
                        "rounded-2xl border border-slate-100 bg-white p-8 shadow-sm lg:w-4/5",
                        idx % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      )}>
                        <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                        <p className="mt-2 text-slate-500">{step.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-blue text-lg font-bold text-white lg:left-1/2">
                      {idx + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
            <div className="bg-slate-900 p-10 text-center text-white">
              <h2 className="text-3xl font-bold">Transparent Pricing</h2>
              <p className="mt-2 text-slate-400">No hidden charges. Ever.</p>
            </div>
            <div className="p-10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-8">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Market Rate</div>
                  <div className="mt-1 text-2xl font-bold text-slate-400 line-through">₹{service.pricing.marketRate.toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-blue">1XFILING Price</div>
                  <div className="mt-1 text-5xl font-black text-slate-900">₹{service.pricing.ourPrice.toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-pastel-mint p-4 text-brand-green">
                <Clock className="h-5 w-5" />
                <span className="font-bold">Limited Time Offer: Save ₹{(service.pricing.marketRate - service.pricing.ourPrice).toLocaleString()}</span>
              </div>
              <button className="mt-10 w-full rounded-2xl bg-brand-blue py-5 text-xl font-bold text-white shadow-xl shadow-blue-200 transition-transform hover:scale-[1.02]">
                Get Started Now
              </button>
              <p className="mt-6 text-center text-sm text-slate-400">
                *Government fees and taxes extra as applicable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
