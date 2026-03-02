import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, Heart, Zap, ArrowRight, 
  GraduationCap, Coffee, Globe, Sparkles, 
  MapPin, Clock, Search, Send, ShieldCheck 
} from 'lucide-react';

const positions = [
  { id: '1', title: 'Senior GST Expert', department: 'Compliance', location: 'Remote', type: 'Full-time', salary: '₹12L - ₹18L' },
  { id: '2', title: 'Full Stack Developer', department: 'Engineering', location: 'Bangalore', type: 'Full-time', salary: '₹15L - ₹25L' },
  { id: '3', title: 'BDM - Enterprise', department: 'Sales', location: 'Mumbai', type: 'Hybrid', salary: '₹10L + Incentives' },
  { id: '4', title: 'Customer Success', department: 'Operations', location: 'Remote', type: 'Full-time', salary: '₹6L - ₹9L' },
];

const perks = [
  { icon: <Heart />, title: 'Premium Health', desc: 'Zero-deductible insurance for you & dependents.' },
  { icon: <Zap />, title: 'Fast Growth', desc: 'Bi-annual appraisals and clear leadership tracks.' },
  { icon: <Coffee />, title: 'Work Harmony', desc: 'Flexible hours & hybrid-first remote culture.' },
  { icon: <GraduationCap />, title: 'Learning Stash', desc: '₹50k annual budget for your certifications.' },
  { icon: <Globe />, title: 'Work from Anywhere', desc: '1 month "work-from-mountains" every year.' },
  { icon: <ShieldCheck />, title: 'ESOPs', desc: 'Wealth creation through employee stock options.' },
];

export const CareersPage = () => {
  return (
    <div className="bg-white selection:bg-brand-blue selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Now Hiring Pioneers
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]"
          >
            Design the <span className="text-brand-blue">future</span> <br /> 
            of Indian <span className="text-slate-500 italic">Business.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 mx-auto max-w-2xl text-xl text-slate-400 font-medium leading-relaxed"
          >
            We are building the operating system for compliance. Join 100+ misfits, experts, and engineers on a mission to empower 1M founders.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <button className="bg-brand-blue hover:bg-white hover:text-brand-blue text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-brand-blue/20">
              View Openings ↓
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all">
              Our Culture
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= PERKS GRID (BHARA HARA) ================= */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-4">The 1X Experience</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                Built for <span className="text-slate-400">High-Performers.</span>
              </h3>
            </div>
            <p className="text-slate-500 font-bold text-lg lg:max-w-sm">
              We stripped away the corporate fluff to focus on what matters: your health, wealth, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-brand-blue/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-blue mb-8 shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  {React.cloneElement(perk.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{perk.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS (MODERN LIST) ================= */}
      <section className="py-24 lg:py-32 bg-slate-950 text-white rounded-[4rem] mx-4 lg:mx-10 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Search size={300} strokeWidth={1} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-20">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter">Open <br /> Roles.</h2>
              <p className="mt-6 text-slate-400 text-xl max-w-md">Find your place in the most impactful legal-tech team in Asia.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {['All', 'Engineering', 'Sales', 'Remote'].map((cat) => (
                <button key={cat} className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-all font-bold text-sm">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {positions.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white hover:border-white transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest rounded-full">
                        {job.department}
                      </span>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{job.type}</span>
                    </div>
                    <h4 className="text-3xl font-black text-white group-hover:text-slate-900 transition-colors">{job.title}</h4>
                    <div className="mt-6 flex flex-wrap gap-6 text-slate-400 group-hover:text-slate-500 transition-colors font-bold text-sm">
                      <span className="flex items-center gap-2"><MapPin size={18} className="text-brand-blue" /> {job.location}</span>
                      <span className="flex items-center gap-2"><Sparkles size={18} className="text-brand-blue" /> {job.salary}</span>
                    </div>
                  </div>
                  
                  <button className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-slate-900 transition-all group-hover:shadow-2xl">
                    Apply Now
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
            <h4 className="text-3xl font-black mb-4">No exact match?</h4>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">We are always looking for smart humans. Send your portfolio and tell us how you can add value.</p>
            <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black flex items-center gap-3 mx-auto hover:bg-brand-blue hover:text-white transition-all">
              <Send size={20} />
              careers@1xfiling.com
            </button>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION (EDITORIAL) ================= */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Culture" 
                className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-blue p-10 rounded-[3rem] shadow-2xl text-white hidden lg:block">
                <p className="text-5xl font-black">94%</p>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest mt-2">Employee <br /> Retention Rate</p>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
                Not your average <br /> <span className="text-brand-blue">9-to-5.</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Build a Career, Not a Job</h4>
                    <p className="text-slate-500 font-medium">We invest heavily in lateral growth. A developer today can be a product lead tomorrow.</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Radical Ownership</h4>
                    <p className="text-slate-500 font-medium">We don't micromanage. You own your outcomes, and we give you the tools to win.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about joining our tribe.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is the interview process?', a: 'Typically 3 stages: A quick intro call, a functional task/coding round, and a culture-fit conversation with the leadership team.' },
              { q: 'Is the remote work permanent?', a: 'We follow a hybrid-first model. Most roles are remote-friendly, but we have hubs in Bangalore and Mumbai for collaborative weeks.' },
              { q: 'What kind of tech stack do you use?', a: 'Engineering uses React, Node, AWS, and Python. Compliance uses custom automation engines built in-house.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-brand-blue/30 transition-all cursor-pointer">
                <summary className="list-none flex justify-between items-center font-bold text-lg text-slate-900">
                  {faq.q}
                  <span className="text-brand-blue group-open:rotate-45 transition-transform"><ArrowRight size={20} /></span>
                </summary>
                <p className="mt-6 text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};