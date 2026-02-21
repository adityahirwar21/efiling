import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'For Individuals',
    description: 'For salaried, self employed professionals.',
    bgColor: 'bg-indigo-50',
    img: 'https://picsum.photos/seed/person1/300/300',
  },
  {
    title: 'For Tax Experts',
    description: 'File income tax returns in 3 min, invest and grow your wealth.',
    bgColor: 'bg-slate-50',
    img: 'https://picsum.photos/seed/person2/300/300',
  },
  {
    title: 'For SMEs',
    description: 'For less than ₹50Cr turnover businesses.',
    bgColor: 'bg-emerald-50',
    img: 'https://picsum.photos/seed/person3/300/300',
  },
  {
    title: 'For Enterprise',
    description: 'Explore SME suite including Invoicing and TDS solution.',
    bgColor: 'bg-slate-50',
    img: 'https://picsum.photos/seed/person4/300/300',
  },
];

export const ProductsSection = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative flex h-[320px] flex-col justify-between overflow-hidden rounded-[32px] ${product.bgColor} p-8 transition-all hover:shadow-xl`}
              >
                <div className="relative z-10">
                  <p className="text-sm font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
                    {product.description}
                  </p>
                  <div className="mt-4 h-32 w-full overflow-hidden rounded-2xl">
                    <img 
                      src={product.img} 
                      alt={product.title}
                      className="h-full w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="relative z-10 flex items-end justify-between">
                  <h3 className="text-2xl font-black text-slate-900">
                    {product.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Decorative background elements to mimic the illustration style */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
              Products for <br /> everyone
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-500">
              Built for scale, made by experts and secure by design. Bringing you maximum tax savings, unmatched speed and complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
