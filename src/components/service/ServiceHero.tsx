import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import userImage1 from "../../assets/user-1.jpg";
import userImage2 from "../../assets/user-2.jpg";
import userImage3 from "../../assets/user-3.jpg";

export const ServiceHero = ({ service }: any) => {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm font-bold text-slate-700 mb-6">
              <ShieldCheck size={16} className="text-brand-blue" />
              Trusted by 10,000+ Businesses
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              {service.heroTitle}
              <span className="text-brand-blue">.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl text-slate-500 leading-relaxed max-w-xl">
              {service.heroSubtitle}
            </p>

            {/* CTA + Rating */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">

              {/* CTA Button */}
              <button className="group bg-brand-blue hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-blue/20 hover:shadow-slate-900/20 active:scale-95 flex items-center gap-3">
                Start Registration
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Rating Block */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src={userImage1} alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src={userImage2} alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src={userImage3} alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>

                <div className="text-sm">
                  <p className="font-bold text-slate-900">4.9/5 Rating</p>
                  <p className="text-slate-500">From 5,000+ reviews</p>
                </div>
              </div>

            </div>

            {/* Feature List */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
              {["Fast Processing", "Expert Support", "No Hidden Fees", "100% Secure"].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-slate-600 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  {feat}
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden">

              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Sparkles size={80} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Get Free Consultation
                </h3>
                <p className="text-slate-500 mb-8 font-medium">
                  Response within 15 minutes
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all"
                    placeholder="Full Name"
                  />
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all"
                    placeholder="Mobile Number"
                  />

                  <button className="w-full bg-brand-blue text-white rounded-2xl py-5 font-black text-lg shadow-lg shadow-brand-blue/20 hover:bg-slate-900 transition-all active:scale-[0.98]">
                    Request a Callback
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium uppercase tracking-widest mt-6">
                    🔒 Data Encrypted & Secure
                  </p>
                </form>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};