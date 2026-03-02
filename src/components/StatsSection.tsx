import React from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";
import {
  CloudUpload,
  Factory,
  Wallet,
  Store,
  FileCheck
} from "lucide-react";

const stats = [
  {
    value: 120000,
    suffix: "+",
    label: "Compliance Documents Processed",
    icon: CloudUpload
  },
  {
    value: 1800,
    suffix: "+",
    label: "Businesses Served",
    icon: Factory
  },
  {
    value: 480,
    suffix: "Cr+",
    prefix: "₹",
    label: "Compliance Value Managed",
    icon: Wallet
  },
  {
    value: 800,
    suffix: "+",
    label: "Active Founders & Startups",
    icon: Store
  },
  {
    value: 95000,
    suffix: "+",
    label: "GST & Income Tax Returns Filed",
    icon: FileCheck
  }
];

export const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Nationwide Trust
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Built on Trust. <span className="text-brand-blue">Backed by Results.</span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            From startups to growing enterprises, thousands rely on 
            <strong> E-Filing Cart </strong>
            for company registration, GST filing, tax returns, and end-to-end compliance management.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-14 gap-x-10">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* icon */}
                <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Icon size={26} />
                </div>

                {/* number */}
                <div className="text-3xl lg:text-4xl font-bold text-slate-900">
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                  {stat.suffix}
                </div>

                {/* label */}
                <div className="mt-3 text-slate-500 text-sm font-medium">
                  {stat.label}
                </div>

                {/* vertical divider for desktop */}
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200" />
                )}
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};