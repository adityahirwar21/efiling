import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2, UploadCloud, Cpu, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <MousePointer2 className="h-8 w-8" />,
    title: 'Select Service',
    description: 'Choose from our wide range of legal and tax services.'
  },
  {
    icon: <UploadCloud className="h-8 w-8" />,
    title: 'Upload Docs',
    description: 'Securely upload your documents to our digital vault.'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Expert Processing',
    description: 'Our experts and AI handle the filing with precision.'
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: 'Digital Delivery',
    description: 'Receive your certificates and filings in your dashboard.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900">How it Works</h2>
          <p className="mt-4 text-lg text-slate-600">A simple 4-step process to get your business compliant.</p>
        </div>

        <div className="relative">
          {/* Dotted Line */}
          <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 border-t-2 border-dotted border-brand-blue/20 lg:block" />
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white border-4 border-pastel-blue text-brand-blue shadow-xl">
                  {step.icon}
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-4 text-slate-600 max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
