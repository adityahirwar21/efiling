import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle, PhoneCall } from "lucide-react";
import { useState } from "react";

export const ServiceFAQ = ({ faqs }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background Subtle Gradient for Depth */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Editorial & Support Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-full text-brand-blue text-xs font-black uppercase tracking-widest mb-6"
              >
                <HelpCircle size={14} />
                Support Center
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Common <br />
                <span className="text-slate-400 font-medium">Questions.</span>
              </h2>
              
              <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-sm">
                Can't find what you're looking for? Our dedicated support team is available 24/7 to assist you with your registration.
              </p>

              {/* Support Contact Card */}
              <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/20">
                <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
                <p className="text-slate-400 text-sm mb-8">We’re here to help you navigate the process.</p>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all group">
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <MessageCircle size={18} className="text-brand-blue" />
                      Chat with Experts
                    </div>
                    <Plus size={16} className="opacity-40 group-hover:rotate-90 transition-transform" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between bg-brand-blue p-4 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-blue/20">
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <PhoneCall size={18} />
                      Request a Call
                    </div>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-tighter">Fastest</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Accordions */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq: any, idx: number) => {
                const isOpen = activeIndex === idx;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`
                      group border rounded-[2rem] transition-all duration-500 overflow-hidden
                      ${isOpen ? 'bg-slate-50 border-brand-blue/20 shadow-lg shadow-slate-100' : 'bg-white border-slate-100 hover:border-slate-200'}
                    `}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-8 text-left outline-none"
                    >
                      <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-brand-blue' : 'text-slate-900'}`}>
                        {faq.question}
                      </span>
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                        ${isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}
                      `}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8">
                            <div className="h-[1px] w-full bg-slate-200 mb-6" />
                            <p className="text-slate-600 leading-relaxed font-medium">
                              {faq.answer || "Our streamlined process ensures that we handle all documentation and liaison with government authorities, so you don't have to worry about a thing. Most applications are processed within the standard timeframe specified in our pricing guide."}
                            </p>
                            
                            {/* Detailed "Helpful" prompt to fill space */}
                            <div className="mt-6 flex items-center gap-4">
                              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Was this helpful?</span>
                              <div className="flex gap-2">
                                <button className="text-xs font-bold px-3 py-1 rounded-lg border border-slate-200 hover:bg-white transition-colors">Yes</button>
                                <button className="text-xs font-bold px-3 py-1 rounded-lg border border-slate-200 hover:bg-white transition-colors">No</button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Footer for FAQ */}
            <div className="mt-12 flex items-center justify-center gap-4 py-8 border-t border-slate-50">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold">A</div>
                ))}
              </div>
              <p className="text-sm text-slate-400 font-medium">
                Last updated: <span className="text-slate-900">February 2026</span> • Used by 500+ users today
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};