import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Shield, Users, Rocket, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Happy Clients', value: '50,000+' },
  { label: 'Expert Professionals', value: '100+' },
  { label: 'Cities Covered', value: '500+' },
];

const values = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Trust & Integrity',
    description: 'We believe in absolute transparency and ethical practices in every filing we handle.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology to make complex legal processes simple and accessible.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Customer First',
    description: 'Our success is measured by the growth and satisfaction of the businesses we serve.'
  }
];

export const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-brand-green blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tight text-white lg:text-7xl"
          >
            Simplifying Business <br /> for India's Entrepreneurs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-xl text-slate-400"
          >
            1XFILING was born out of a simple idea: that starting and running a business in India shouldn't be a legal nightmare. We're on a mission to automate compliance and empower growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-[32px] bg-white p-8 shadow-2xl lg:grid-cols-4 lg:p-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-black text-brand-blue lg:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">Our Story</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Founded in 2014, 1XFILING started as a small team of chartered accountants and lawyers who saw the struggles of first-time entrepreneurs. The endless paperwork, confusing regulations, and lack of transparent pricing were holding back India's potential.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We decided to build a technology-first platform that could handle everything from company incorporation to complex GST reconciliations. Today, we are proud to be the compliance partner for over 50,000 businesses across the country.
              </p>
              
              <div className="mt-10 space-y-4">
                {[
                  'ISO 27001 Certified for Data Security',
                  'Recognized by Startup India',
                  'Trusted by 1,200+ Enterprises',
                  'Pan-India Presence'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-green" />
                    <span className="text-lg font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/growth/800/600" 
                alt="Our Journey" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 rounded-3xl bg-brand-blue p-8 text-white shadow-xl lg:block hidden">
                <Award className="h-12 w-12 mb-4" />
                <div className="text-2xl font-black">Award Winning</div>
                <div className="text-sm opacity-80">Legal-Tech Platform 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-[40px] bg-white p-12 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mt-8 text-3xl font-black text-slate-900">Our Mission</h3>
              <p className="mt-4 text-xl leading-relaxed text-slate-600">
                To make business compliance so seamless that entrepreneurs can focus 100% of their energy on building their products and serving their customers.
              </p>
            </div>
            <div className="rounded-[40px] bg-white p-12 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mt-8 text-3xl font-black text-slate-900">Our Vision</h3>
              <p className="mt-4 text-xl leading-relaxed text-slate-600">
                To become the operating system for Indian businesses, where every legal and financial need is met with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">The Values that Drive Us</h2>
          <p className="mt-4 text-xl text-slate-600">Our culture is built on a foundation of excellence and empathy.</p>
          
          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 text-brand-blue shadow-inner">
                  {value.icon}
                </div>
                <h4 className="mt-8 text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[48px] bg-brand-blue p-12 text-center lg:p-24">
            <h2 className="text-4xl font-black text-white lg:text-6xl">Ready to grow your business?</h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-blue-100">
              Join thousands of successful entrepreneurs who trust 1XFILING for their business compliance.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-2xl bg-white px-10 py-5 text-lg font-bold text-brand-blue shadow-xl transition-all hover:scale-105 active:scale-95">
                Get Started Now
              </button>
              <button className="rounded-2xl border-2 border-white/30 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
