import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Rocket, FileText, Shield, Calculator, Landmark, Briefcase, CheckCircle } from 'lucide-react';
import { categories } from '../data/services';

const categoryIcons: Record<string, React.ReactNode> = {
  'startup': <Rocket className="h-6 w-6" />,
  'registrations': <FileText className="h-6 w-6" />,
  'ip': <Shield className="h-6 w-6" />,
  'gst': <Calculator className="h-6 w-6" />,
  'income-tax': <Landmark className="h-6 w-6" />,
  'mca': <Briefcase className="h-6 w-6" />,
  'compliance': <CheckCircle className="h-6 w-6" />,
};

const categoryColors: Record<string, string> = {
  'startup': 'bg-pastel-blue text-brand-blue',
  'registrations': 'bg-pastel-mint text-brand-green',
  'ip': 'bg-purple-50 text-purple-600',
  'gst': 'bg-amber-50 text-amber-600',
  'income-tax': 'bg-rose-50 text-rose-600',
  'mca': 'bg-indigo-50 text-indigo-600',
  'compliance': 'bg-emerald-50 text-emerald-600',
};

export const ServiceQuickAccess = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900">Quick Access Services</h2>
          <p className="mt-4 text-lg text-slate-600">Find the right compliance solution for your business in seconds.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/${category.id}`}
                className={`flex flex-col items-center justify-center rounded-3xl p-6 text-center transition-all hover:scale-105 hover:shadow-lg ${categoryColors[category.id] || 'bg-slate-100 text-slate-600'}`}
              >
                <div className="mb-4">
                  {categoryIcons[category.id]}
                </div>
                <span className="text-sm font-bold leading-tight">{category.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
