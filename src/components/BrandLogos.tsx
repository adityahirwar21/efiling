import React from 'react';
import { motion } from 'motion/react';

const brands = [
  { name: 'TechFlow', logo: 'https://picsum.photos/seed/techflow/200/80?grayscale' },
  { name: 'CloudScale', logo: 'https://picsum.photos/seed/cloudscale/200/80?grayscale' },
  { name: 'DataNexus', logo: 'https://picsum.photos/seed/datanexus/200/80?grayscale' },
  { name: 'BioGen', logo: 'https://picsum.photos/seed/biogen/200/80?grayscale' },
  { name: 'EcoSmart', logo: 'https://picsum.photos/seed/ecosmart/200/80?grayscale' },
  { name: 'FinLeap', logo: 'https://picsum.photos/seed/finleap/200/80?grayscale' },
];

export const BrandLogos = () => {
  return (
    <section className="border-y border-slate-50 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400">
          Trusted by India's fastest growing companies
        </p>
        
        <div className="mt-10 overflow-hidden">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex w-[200%] items-center gap-12"
          >
            {/* Double the brands for seamless loop */}
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex h-20 w-40 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-h-12 max-w-full object-contain opacity-50 transition-opacity hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
