import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Globe, Award } from "lucide-react";

export const ServiceBenefits = () => {

  // ✅ Direct Default Benefits
  const benefits = [
    {
      title: "Full Control",
      description: "Complete authority over business decisions."
    },
    {
      title: "Easy Compliance",
      description: "Minimal government filings required."
    },
    {
      title: "Simple Taxation",
      description: "Taxed as individual income."
    },
    {
      title: "Fast Setup",
      description: "Start your business within days."
    },
    {
      title: "Low Maintenance",
      description: "Minimal legal and audit costs involved."
    }
  ];

  const icons = [<Zap />, <Shield />, <Globe />, <Award />, <CheckCircle2 />];

  return (
    <section className="relative bg-white py-24 lg:py-40 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <h2 className="text-[15vw] text-center font-black text-slate-50 leading-none">
          BENEFITS
          EFILINGCART
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-brand-blue mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            The Advantage
          </motion.div>
          
          <h3 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight max-w-4xl">
            Success built on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-slate-400">
              superior standards.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`
                group relative bg-white border border-slate-100 p-8 lg:p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]
                ${idx === 0 ? 'md:col-span-3 lg:col-span-7' : ''}
                ${idx === 1 ? 'md:col-span-3 lg:col-span-5' : ''}
                ${idx === 2 ? 'md:col-span-6 lg:col-span-4' : ''}
                ${idx === 3 ? 'md:col-span-3 lg:col-span-4' : ''}
                ${idx === 4 ? 'md:col-span-3 lg:col-span-4' : ''}
              `}
            >
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors duration-500 shadow-lg shadow-slate-900/10">
                  {icons[idx]}
                </div>

                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-4">
                  {benefit.title}
                </h4>

                <p className="text-slate-500 leading-relaxed font-medium">
                  {benefit.description}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-slate-100 group-hover:w-12 group-hover:bg-brand-blue transition-all" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                    Proven Impact
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};