import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Choose business structure",
    description:
      "Select Private Limited, LLP, or OPC based on your goals and growth plans.",
  },
  {
    number: "02",
    title: "We prepare & register",
    description:
      "We handle DIN, DSC, company name approval, and incorporation filing.",
  },
  {
    number: "03",
    title: "GST & Tax setup",
    description:
      "Complete GST registration, PAN, TAN, and bank account setup.",
  },
  {
    number: "04",
    title: "Stay compliant",
    description:
      "Ongoing GST filing, ROC compliance, and income tax filing support.",
  },
];

const features = [
  "Private Limited, LLP & OPC registration",
  "GST registration & monthly filing",
  "Income tax & compliance filing",
  "Dedicated compliance manager",
];

export const StartBusinessSection = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Start Your Company
            </span>

            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Launch your business
              <span className="block text-brand-blue">
                without legal stress
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We handle registration, GST, tax setup, and compliance —
              so you can focus on building and growing your business.
            </p>


            {/* features */}
            <div className="mt-10 space-y-4">

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:index * 0.1 }}
                  className="flex items-center gap-3"
                >

                  <div className="
                    w-6 h-6 rounded-full
                    bg-green-100
                    flex items-center justify-center
                  ">
                    <Check size={14} className="text-green-600"/>
                  </div>

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>

                </motion.div>
              ))}

            </div>


            {/* CTA */}
            <div className="mt-12">

              <Link
                            to="/start-business"
                            className="
                  relative inline-flex items-center gap-2
                  px-8 py-4 rounded-full text-lg font-semibold text-white
                  bg-gradient-to-b from-gray-800 via-black to-gray-900
                  shadow-[0_8px_20px_rgba(0,0,0,0.5)]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.7)]
                  hover:scale-105 transition-all duration-300
                  overflow-hidden
                "
                          >
                            {/* Shine effect */}
                            <span className="absolute inset-0 rounded-full overflow-hidden">
                              <span className="
                    absolute -top-1/2 left-[-75%]
                    w-[50%] h-[200%]
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    rotate-12
                    animate-[shine_3s_linear_infinite]
                  "></span>
                            </span>
              
                            <span className="relative z-10">
                              Start Your Business →
                            </span>
                          </Link>

              <p className="text-sm text-slate-500 mt-3">
                Takes only 10–15 minutes to begin
              </p>

            </div>

          </div>


          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* vertical line */}
            <div className="
              absolute left-5 top-0 bottom-0 w-[2px]
              bg-gradient-to-b from-brand-blue via-slate-200 to-transparent
            "></div>


            <div className="space-y-10">

              {steps.map((step, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity:0, y:40 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:index * 0.15 }}
                  className="relative flex gap-6 group"
                >

                  {/* number indicator */}
                  <div className="relative z-10">

                    <div className="
                      w-10 h-10 rounded-full
                      bg-white border-2 border-brand-blue
                      flex items-center justify-center
                      font-bold text-brand-blue
                      shadow-md
                    ">
                      {step.number}
                    </div>

                    {/* pulse animation */}
                    <div className="
                      absolute inset-0 rounded-full
                      bg-brand-blue/20 blur-lg opacity-0
                      group-hover:opacity-100 transition
                    "></div>

                  </div>


                  {/* card */}
                  <div className="
                    flex-1
                    bg-white/70 backdrop-blur-xl
                    border border-slate-200
                    rounded-2xl
                    p-6
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all duration-300
                  ">

                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};