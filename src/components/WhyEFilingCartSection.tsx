import React, { useEffect, useState } from "react";
import { Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const features = [
  {
    title: "Fast & Efficient Processing",
    description:
      "Smart automation ensures your registrations, GST filings, and compliance tasks are completed quickly and accurately.",
    icon: Zap
  },
  {
    title: "Enterprise-Level Security",
    description:
      "Industry-grade encryption and strict privacy controls protect your business data at every step.",
    icon: Shield
  }
];

const stats = [
  { label: "Businesses Registered", value: 1000, suffix: "+" },
  { label: "Customer Satisfaction", value: 95, suffix: "%" },
  { label: "On-time Filing", value: 98, suffix: "%" }
];

/* ================= HOOK ================= */

const useCounter = (end: number, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

/* ================= COMPONENT ================= */

const WhyEFilingCartSection = () => {
  const businesses = useCounter(stats[0].value);
  const satisfaction = useCounter(stats[1].value);
  const onTime = useCounter(stats[2].value);

  return (
    <section className="relative bg-slate-950 py-28 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest text-brand-blue uppercase">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
              Why E-Filing Cart?
            </h2>

            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              E-Filing Cart combines intelligent automation with real expert guidance 
              to make legal, tax, and compliance processes faster, safer, and stress-free.
            </p>

            <div className="mt-12 space-y-6">
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/20">
                      <Icon className="text-brand-blue" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="text-5xl md:text-6xl font-black text-brand-blue">
              {businesses.toLocaleString()}+
            </div>

            <p className="mt-3 text-xl font-bold">
              {stats[0].label}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Trusted by startups, professionals, and growing companies across India.
            </p>

            {/* Progress */}
            <div className="mt-10">
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Customer Satisfaction</span>
                <span className="text-brand-blue">{satisfaction}%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${satisfaction}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-brand-blue"
                />
              </div>
            </div>

            {/* Extra Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 text-center">
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-2xl font-bold text-brand-blue">
                  24×7
                </div>
                <div className="text-xs text-slate-400 mt-1">Support</div>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-2xl font-bold text-brand-blue">
                  {onTime}%
                </div>
                <div className="text-xs text-slate-400 mt-1">On-time Filing</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyEFilingCartSection;