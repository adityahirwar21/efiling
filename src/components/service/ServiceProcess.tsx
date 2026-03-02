import { motion } from "framer-motion";
import { Settings, FileCheck, ShieldAlert, Rocket, ArrowRight } from "lucide-react";

export const ServiceProcess = () => {

  // ✅ Direct Default Process Steps
  const process = [
    { 
      title: "Consultation", 
      description: "Quick call to finalize your requirements." 
    },
    { 
      title: "Document Check", 
      description: "Expert verification for zero rejections." 
    },
    { 
      title: "Government Filing", 
      description: "Smooth application on official portals." 
    },
    { 
      title: "Final Delivery", 
      description: "Get your certificates digitally in 3 days." 
    }
  ];

  const stepIcons = [
    <Settings className="w-6 h-6" />,
    <FileCheck className="w-6 h-6" />,
    <ShieldAlert className="w-6 h-6" />,
    <Rocket className="w-6 h-6" />,
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-blue font-black uppercase tracking-[0.3em] text-xs"
          >
            Workflow Execution
          </motion.span>
          <h2 className="mt-4 text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Four simple steps to <br />
            <span className="text-slate-400 font-medium">
              your business growth.
            </span>
          </h2>
        </div>

        <div className="relative">
          
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-brand-blue to-pastel-blue"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative group z-10"
              >
                <div className="absolute -top-12 -left-4 text-8xl font-black text-slate-50 group-hover:text-brand-blue/5 transition-colors duration-500 select-none">
                  0{idx + 1}
                </div>

                <div className="relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] group-hover:border-brand-blue/20 transition-all duration-500">
                  
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 group-hover:bg-brand-blue text-white flex items-center justify-center mb-8 transform group-hover:rotate-[10deg] transition-all duration-500 shadow-xl shadow-slate-900/20">
                    {stepIcons[idx]}
                  </div>

                  <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-500 leading-relaxed font-medium text-sm lg:text-base">
                    {step.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 lg:hidden">
                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-blue w-1/3" />
                    </div>
                  </div>
                </div>

                {idx !== process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-slate-200 group-hover:text-brand-blue group-hover:translate-x-2 transition-all duration-500 z-20">
                    <ArrowRight size={32} strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span className="animate-pulse w-3 h-3 bg-emerald-500 rounded-full" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Live Support Available</p>
              <p className="text-sm text-slate-500 font-medium">
                Average completion time: 12-14 business days
              </p>
            </div>
          </div>

          <button className="w-full md:w-auto bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-blue/30 transition-all">
            Get Started Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};