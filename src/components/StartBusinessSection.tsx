import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose business structure',
    description: 'Select Private Limited, LLP, or OPC based on your needs.',
  },
  {
    number: '02',
    title: 'We prepare & register',
    description: 'DIN, DSC, company name approval, incorporation documents.',
  },
  {
    number: '03',
    title: 'GST & Tax setup',
    description: 'GST registration, PAN, TAN, and bank account opening support.',
  },
  {
    number: '04',
    title: 'Stay compliant',
    description: 'GST filing, income tax returns, ROC compliance & annual filing.',
  },
];

const features = [
  'Private Limited / LLP / OPC registration',
  'GST registration & monthly filing',
  'Income tax return filing',
  'ROC compliance & annual filing',
];

export const StartBusinessSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Subtle background gradient to match the reference */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pastel-mint/30 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Start your business in India
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Choose your business structure - Private Limited, LLP, or OPC. We guide you through company registration, GST registration, tax filing, and all compliance requirements so you can focus on growing your business.
            </p>
            
            <ul className="mt-10 space-y-4">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Steps */}
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand-blue/20 hover:shadow-md"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {step.number}
                </div>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
