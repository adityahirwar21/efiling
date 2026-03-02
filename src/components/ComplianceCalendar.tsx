import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Bell,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const deadlines = [
  {
    day: "07",
    month: "Mar",
    title: "TDS Payment",
    desc: "Deposit TDS deducted for February 2026",
    urgent: true
  },
  {
    day: "11",
    month: "Mar",
    title: "GSTR-1 Filing",
    desc: "Report monthly sales and outward supplies",
    urgent: true
  },
  {
    day: "20",
    month: "Mar",
    title: "GSTR-3B Filing",
    desc: "Summary GST return and payment",
    urgent: false
  },
  {
    day: "31",
    month: "Mar",
    title: "ITR Update Filing",
    desc: "Last date to file updated tax return",
    urgent: false
  }
];

export const ComplianceCalendar = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">

          <div className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
            <Bell size={16}/>
            Compliance monitoring
          </div>

          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900">
            Stay compliant without
            <span className="block">
              tracking deadlines manually
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Our system tracks GST, ROC, and tax deadlines automatically,
            sends reminders, and ensures your business never pays late fees
            or penalties.
          </p>

        </div>


        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 border border-slate-200 rounded-2xl">

            {/* header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200">

              <div>

                <div className="font-semibold text-slate-900">
                  Upcoming deadlines
                </div>

                <div className="text-sm text-slate-500">
                  Next compliance schedule
                </div>

              </div>

              <Calendar size={20} className="text-slate-400"/>

            </div>


            {/* list */}
            {deadlines.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity:0 }}
                whileInView={{ opacity:1 }}
                viewport={{ once:true }}
                transition={{ delay:index * 0.1 }}
                className="
                  flex items-center justify-between
                  p-6 border-b border-slate-100
                  hover:bg-slate-50 transition
                "
              >

                <div className="flex items-center gap-4">

                  {/* date */}
                  <div className="
                    w-14 h-14 border border-slate-200 rounded-xl
                    flex flex-col items-center justify-center
                    font-semibold text-slate-700
                  ">
                    <div className="text-xs">
                      {item.month}
                    </div>

                    <div className="text-lg">
                      {item.day}
                    </div>
                  </div>


                  {/* text */}
                  <div>

                    <div className="font-semibold text-slate-900">
                      {item.title}
                    </div>

                    <div className="text-sm text-slate-500">
                      {item.desc}
                    </div>

                  </div>

                </div>


                {/* status */}
                {item.urgent
                  ? <AlertTriangle size={18} className="text-red-500"/>
                  : <CheckCircle2 size={18} className="text-green-500"/>
                }

              </motion.div>

            ))}

          </div>



          {/* RIGHT PANEL */}
          <div className="space-y-6">

            {/* status */}
            <div className="border border-slate-200 rounded-2xl p-6">

              <div className="text-sm text-slate-500">
                Compliance score
              </div>

              <div className="text-3xl font-black text-slate-900 mt-1">
                98%
              </div>

              <div className="text-sm text-slate-500 mt-2">
                Businesses using 1XFILING stay compliant
              </div>

            </div>


            {/* features */}
            <div className="border border-slate-200 rounded-2xl p-6">

              <div className="font-semibold text-slate-900 mb-4">
                Included features
              </div>

              <div className="space-y-2 text-sm text-slate-600">

                <div>Automatic deadline tracking</div>
                <div>Email & WhatsApp reminders</div>
                <div>Expert filing support</div>
                <div>Penalty prevention system</div>

              </div>

            </div>


            {/* CTA */}
            <Link
              to="/contact"
              className="
                block text-center
                border border-slate-900
                text-slate-900
                rounded-xl py-3 font-semibold
                hover:bg-slate-900 hover:text-white
                transition
              "
            >
              Enable compliance tracking →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};