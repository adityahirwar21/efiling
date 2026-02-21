import React from 'react';
import { motion } from 'motion/react';
import { CloudUpload, Factory, Wallet, Store, FileCheck } from 'lucide-react';

const stats = [
  {
    value: '250M +',
    label: 'invoices uploaded',
    icon: <CloudUpload className="h-6 w-6 text-blue-400" />,
    bgColor: 'bg-blue-50',
  },
  {
    value: '6M +',
    label: 'Businesses visible',
    icon: <Factory className="h-6 w-6 text-purple-400" />,
    bgColor: 'bg-purple-50',
  },
  {
    value: '$300B +',
    label: 'trade value filled',
    icon: <Wallet className="h-6 w-6 text-emerald-400" />,
    bgColor: 'bg-emerald-50',
  },
  {
    value: '35,000 +',
    label: 'retail investors',
    icon: <Store className="h-6 w-6 text-pink-400" />,
    bgColor: 'bg-pink-50',
  },
  {
    value: '6M +',
    label: 'tax returns filed',
    icon: <FileCheck className="h-6 w-6 text-orange-400" />,
    bgColor: 'bg-orange-50',
  },
];

export const StatsSection = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-black tracking-tight text-slate-900 lg:text-6xl">
              Numbers don't <br /> lie!
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-500">
              Products that perform seamlessly during any kind of surge, so you don't have to worry about uptime and reliability. Ingest and process any amount of data any time of the month, smoothly.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              {stats.slice(0, 3).map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative rounded-3xl border border-slate-50 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-slate-500">{stat.label}</div>
                  <div className={`absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bgColor}`}>
                    {stat.icon}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 space-y-6 sm:mt-24">
              {stats.slice(3).map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.1 }}
                  className="relative rounded-3xl border border-slate-50 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-slate-500">{stat.label}</div>
                  <div className={`absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bgColor}`}>
                    {stat.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
