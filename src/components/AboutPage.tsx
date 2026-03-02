import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Zap,
  Bot,
  Plus,
  Minus,
  Quote,
  Activity,
  FileText,
  PieChart,
  Scale,
  Building,
  Fingerprint,
  Lock,
  ArrowRight
} from "lucide-react";

const stats = [
  { label: "AI Filing Precision", value: "99.9%" },
  { label: "Expert Professionals", value: "50+" },
  { label: "Faster Processing", value: "10x" },
  { label: "Secure Data Points", value: "2M+" }
];

const coreValues = [
  {
    title: "AI-Driven Intelligence",
    desc: "We don’t just file returns — our AI continuously optimizes financial data for greater compliance accuracy.",
    icon: <Cpu className="text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Radical Transparency",
    desc: "No hidden charges. Clear pricing, real-time dashboards, and complete visibility into every process.",
    icon: <PieChart className="text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Your financial data is protected with bank-level encryption and strict compliance standards.",
    icon: <Lock className="text-indigo-600" />,
    color: "bg-indigo-50"
  }
];

export const AboutPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F8FAFC] text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Bot size={14} /> AI-Powered Compliance Platform
          </motion.div>

          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-tight tracking-tighter mb-8">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Smart Compliance
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
            E-Filing Cart is a next-generation compliance platform redefining how Indian businesses manage
            GST, Income Tax, and Corporate filings through AI-powered automation and expert validation.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
              Explore Platform <ArrowRight size={20} />
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
              Meet Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white border border-slate-100 rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
                  {s.value}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-6">
              Our Vision
            </h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
              Why we built <br /> E-Filing Cart
            </h3>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Indian businesses face complex compliance requirements, strict deadlines, and constant regulatory changes.
              We built E-Filing Cart to simplify this complexity using technology and automation.
            </p>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-semibold italic">
              “Compliance should empower growth, not create stress.”
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Fingerprint />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Custom AI Models</h5>
                  <p className="text-sm text-slate-500">
                    Designed specifically for Indian tax regulations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Activity />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Real-Time Insights</h5>
                  <p className="text-sm text-slate-500">
                    Monitor compliance health 24/7 with smart dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[3rem] shadow-xl border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800"
              alt="Data Dashboard"
              className="rounded-[2.5rem] w-full object-cover h-[500px]"
            />
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900">
            Everything You Need, <span className="text-blue-600">Automated</span>
          </h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {coreValues.map((v, i) => (
            <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mb-8`}>
                {v.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h4>
              <p className="text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[4rem] p-16 lg:p-24 text-white text-center">
            <Quote className="text-blue-500 mx-auto mb-8" size={60} />
            <h3 className="text-3xl lg:text-5xl font-bold leading-tight italic mb-10">
              "Our mission is to make compliance effortless for every Indian entrepreneur.
              Technology should reduce complexity — not create it."
            </h3>

            <h5 className="text-2xl font-black">Hitesh Ahuja</h5>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              Founder & CEO
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-black text-center mb-16">
            Frequently Asked Questions
          </h3>

          {[
            {
              q: "Is E-Filing Cart an AI-only platform?",
              a: "No. We use AI for speed and precision, but every filing is verified by experienced CAs and compliance professionals."
            },
            {
              q: "How secure is my data?",
              a: "Your data is protected with enterprise-grade encryption and strict security protocols."
            },
            {
              q: "Do you serve businesses across India?",
              a: "Yes. We provide fully digital compliance services to businesses across India."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 mb-4">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex justify-between p-8 text-left font-bold"
              >
                {item.q}
                {activeFaq === idx ? <Minus /> : <Plus />}
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-slate-500"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};