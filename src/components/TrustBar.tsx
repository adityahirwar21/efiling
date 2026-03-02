import React from 'react';
import { Tag, Headphones, ShieldCheck, Bell } from 'lucide-react';

const trustItems = [
  {
    icon: Tag,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Fixed, upfront professional fees.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated CA & compliance experts for your business.',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & 100% Digital',
    description: 'Fully encrypted, paperless and secure online process.',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Bell,
    title: 'Compliance Reminders',
    description: 'Never miss GST, ROC, or Income Tax deadlines.',
    gradient: 'from-amber-500 to-orange-500'
  }
];

export const TrustBar = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Why 1,000+ Businesses Trust E-Filing Cart
          </h2>
          <p className="mt-3 text-slate-600">
            Professional, reliable and built for Indian startups & growing businesses
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group relative
                  bg-white/70 backdrop-blur-xl
                  border border-slate-200/60
                  rounded-2xl
                  p-6
                  hover:border-slate-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br ${item.gradient}
                  flex items-center justify-center
                  text-white
                  shadow-md
                  group-hover:scale-110
                  transition
                `}>
                  <Icon className="w-6 h-6"/>
                </div>

                {/* Text */}
                <h3 className="mt-4 font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* subtle hover glow */}
                <div className="
                  absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition
                  pointer-events-none
                  bg-gradient-to-br from-blue-50 via-transparent to-transparent
                "></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};