import React from "react";
import { motion } from "motion/react";
import {
  MousePointer2,
  UploadCloud,
  Cpu,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    icon: MousePointer2,
    title: "Choose Service",
    description: "Select your required legal or tax service.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: UploadCloud,
    title: "Upload Documents",
    description: "Securely upload documents digitally.",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Cpu,
    title: "Processing Begins",
    description: "Experts handle your compliance work.",
    gradient: "from-emerald-500 to-green-600"
  },
  {
    icon: CheckCircle2,
    title: "Work Completed",
    description: "Receive certificates & filings digitally.",
    gradient: "from-orange-500 to-amber-500"
  }
];

export const HowItWorks = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">

        {/* header */}
        <div className="text-center mb-20">

          <span className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            Simple. Fast. Reliable.
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Complete your compliance in just a few simple steps
          </p>

        </div>


        {/* steps container */}
        <div className="relative">

          {/* animated progress line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="
              absolute top-10 left-0 h-[3px]
              bg-gradient-to-r from-brand-blue via-brand-blue to-transparent
            "
          />
          <motion.div
  initial={{ left: 0 }}
  whileInView={{ left: "100%" }}
  viewport={{ once: true }}
  transition={{ duration: 1.5 }}
  className="absolute top-[34px] w-4 h-4 rounded-full bg-brand-blue shadow-lg"
/>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity:0, y:50 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:index * 0.2 }}
                  className="relative group"
                >

                  {/* icon with animation */}
                  <div className="flex justify-center">

                    <motion.div
                      initial={{ scale:0 }}
                      whileInView={{ scale:1 }}
                      viewport={{ once:true }}
                      transition={{
                        type:"spring",
                        stiffness:200,
                        delay:index * 0.2
                      }}
                      className="relative"
                    >

                      {/* pulse glow */}
                      <div className={`
                        absolute inset-0 rounded-full blur-xl opacity-30
                        bg-gradient-to-br ${step.gradient}
                        group-hover:opacity-60 transition
                      `}></div>


                      {/* icon circle */}
                      <div className={`
                        relative w-20 h-20 rounded-full
                        bg-gradient-to-br ${step.gradient}
                        flex items-center justify-center
                        text-white shadow-xl
                      `}>
                        <Icon size={32}/>
                      </div>

                    </motion.div>

                  </div>


                  {/* card */}
                  <motion.div
                    initial={{ opacity:0, y:30 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ delay:index * 0.3 }}
                    className="
  mt-8
  bg-white/70 backdrop-blur-xl
  border border-slate-200
  rounded-2xl p-6 text-center
  hover:shadow-2xl
  hover:-translate-y-3
  hover:border-brand-blue/30
  transition-all duration-300
"
                  >

                    {/* step number */}
                    <div className="text-sm font-bold text-brand-blue mb-2">
                      STEP {index + 1}
                    </div>

                    {/* title */}
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    {/* description */}
                    <p className="mt-2 text-slate-600 text-sm">
                      {step.description}
                    </p>

                  </motion.div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};