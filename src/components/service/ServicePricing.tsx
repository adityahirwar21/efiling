import { motion } from "framer-motion";
import { Check, Tag, ShieldCheck, Zap, Info } from "lucide-react";

interface PricingProps {
  pricing: {
    ourPrice: number;
    marketRate: number;
  };
}

export const ServicePricing = ({ pricing }: PricingProps) => {
  if (!pricing) return null;

  const savings = pricing.marketRate - pricing.ourPrice;

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full text-emerald-700 text-sm font-bold mb-6"
            >
              <Tag size={16} />
              Best Value Guaranteed
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Simple pricing. <br />
              <span className="text-brand-blue">No surprises.</span>
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-md">
              Get full-service registration with expert support. We’ve cut the
              middleman to pass the savings directly to you.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Government fee facilitation included",
                "Expert document verification",
                "Real-time application tracking",
                "Dedicated relationship manager",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-semibold"
                >
                  <div className="bg-brand-blue/10 p-1 rounded-full text-brand-blue">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - PRICING CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Savings Badge */}
            {savings > 0 && (
              <div className="absolute -top-6 -right-6 z-20 bg-emerald-500 text-white px-6 py-3 rounded-2xl font-black shadow-xl rotate-12 flex flex-col items-center">
                <span className="text-xs uppercase opacity-80">Save</span>
                <span className="text-xl">
                  ₹{savings.toLocaleString()}
                </span>
              </div>
            )}

            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Premium Plan
                  </h3>
                  <p className="text-slate-500 font-medium">
                    All-inclusive package
                  </p>
                </div>
                <Zap className="text-brand-blue fill-brand-blue" size={32} />
              </div>

              {/* Price Display */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">
                    ₹{pricing.ourPrice.toLocaleString()}
                  </span>
                  <span className="text-slate-400 font-bold text-xl line-through">
                    ₹{pricing.marketRate.toLocaleString()}
                  </span>
                </div>

                <p className="text-emerald-600 font-bold text-sm flex items-center gap-1">
                  <ShieldCheck size={16} />
                  Inclusive of all professional fees
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 space-y-6">
                <button className="w-full bg-slate-900 hover:bg-brand-blue text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                  Get Started Now
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <Info size={14} />
                    100% Refund Policy
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={14} />
                    Secure Payment
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};