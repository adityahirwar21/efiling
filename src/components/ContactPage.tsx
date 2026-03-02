import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ArrowRight
} from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] bg-brand-blue/20 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Let’s Simplify Your
            <span className="block text-brand-blue">
              Compliance Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Whether it's company registration, GST filing, or tax compliance —
            our experts at E-Filing Cart are ready to assist you.
          </motion.p>

        </div>
      </section>

      {/* MAIN */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 lg:p-12"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Get in Touch
              </h2>

              <p className="mt-3 text-slate-500 text-sm">
                Our team typically responds within 2–12 hours.
              </p>

              <form className="mt-10 space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-blue transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-blue transition"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-blue transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-blue transition"
                />

                <textarea
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-blue transition"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition"
                >
                  Submit Request
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  🔒 Your data is encrypted and 100% confidential.
                </p>

              </form>
            </motion.div>

            {/* INFO SIDE */}
            <div className="flex flex-col justify-center space-y-14">

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact Details
                </h2>
                <p className="mt-4 text-slate-600">
                  Prefer speaking directly? Connect with us through any of the following channels.
                </p>
              </div>

              <div className="space-y-8">

                {[
                  {
                    icon: Phone,
                    title: "Call Support",
                    content: "+91 98267 65899",
                    sub: "Mon–Sat, 9 AM – 7 PM"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@efilingcart.com",
                    sub: "Fast response guaranteed"
                  },
                  {
                    icon: MessageSquare,
                    title: "WhatsApp Assistance",
                    content: "Chat with Compliance Expert",
                    sub: "Instant business support"
                  },
                  {
                    icon: MapPin,
                    title: "Head Office",
                    content: "India (Serving Nationwide)",
                    sub: "100% Digital Platform"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-slate-700">{item.content}</p>
                        <p className="text-sm text-slate-500">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Office Hours */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-brand-blue" size={20} />
                  <h4 className="font-semibold text-slate-900">
                    Business Hours
                  </h4>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-slate-900">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-slate-900">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-500 font-medium">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[400px] w-full grayscale hover:grayscale-0 transition duration-500">
        <iframe
          src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title="India Location"
        />
      </section>

    </div>
  );
};