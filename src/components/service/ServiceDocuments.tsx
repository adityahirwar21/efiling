import { FileText, CheckCircle, Info, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceDocuments = ({ documents }: any) => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue mb-4">
                Documentation Guide
              </h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1]">
                Everything you need <br /> 
                <span className="text-slate-400">to get started.</span>
              </h3>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We've simplified the paperwork. Upload these digital copies to our secure dashboard and our experts will handle the verification within 24 hours.
              </p>
              
              <div className="mt-10 p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl">
                <div className="flex gap-4">
                  <div className="bg-brand-blue text-white p-2 rounded-lg h-fit">
                    <Info size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Digital Submission</h4>
                    <p className="text-sm text-slate-600 mt-1">No physical courier needed. Scanned copies or high-quality photos are accepted.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Document Cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {documents.map((doc: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-[2rem] hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-brand-blue transition-colors">
                        {doc}
                      </h4>
                      <p className="text-sm text-slate-500 mt-0.5 font-medium">
                        Standard KYC Requirement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="hidden sm:block text-[10px] font-black uppercase tracking-tighter text-slate-300 group-hover:text-brand-blue/40">
                      Required
                    </span>
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-100">
                      <CheckCircle size={14} />
                      Ready
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 font-medium italic">
              <span className="w-8 h-[1px] bg-slate-200"></span>
              Files should be in PDF, JPG, or PNG format
              <span className="w-8 h-[1px] bg-slate-200"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};