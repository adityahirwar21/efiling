import React from "react";
import { motion } from "motion/react";
import { ArrowRight, User, Briefcase, Building2, Landmark } from "lucide-react";

const products = [
  {
    title: "Individuals",
    description: "ITR filing, capital gains advisory, tax planning & expert CA support.",
    icon: User
  },
  {
    title: "Tax Professionals",
    description: "Manage clients efficiently, automate returns & scale your practice.",
    icon: Briefcase
  },
  {
    title: "SMEs & Startups",
    description: "Company registration, GST, payroll & end-to-end compliance support.",
    icon: Building2
  },
  {
    title: "Enterprises",
    description: "Advanced compliance automation, strategic advisory & dedicated experts.",
    icon: Landmark
  }
];

export const ProductsSection = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Center Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Solutions
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Compliance Solutions for
            <span className="block text-brand-blue">
              Every Stage of Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Whether you're filing your first tax return or managing large-scale
            corporate compliance, <strong>E-Filing Cart</strong> adapts and scales with your business needs.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  group relative
                  bg-white
                  border border-slate-200
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900">
                  For {product.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center text-brand-blue font-semibold text-sm group-hover:translate-x-1 transition">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>

                {/* subtle hover border glow */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-blue/30 transition pointer-events-none"></div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};