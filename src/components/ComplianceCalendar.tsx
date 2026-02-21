import React from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, AlertCircle, ChevronRight } from 'lucide-react';

const deadlines = [
  {
    date: 'Mar 07, 2026',
    title: 'TDS Payment',
    description: 'Payment of TDS/TCS deducted/collected for Feb 2026.',
    urgent: true
  },
  {
    date: 'Mar 11, 2026',
    title: 'GSTR-1 Filing',
    description: 'Details of outward supplies for Feb 2026.',
    urgent: true
  },
  {
    date: 'Mar 15, 2026',
    title: 'Advance Tax',
    description: 'Fourth installment of advance tax for FY 2025-26.',
    urgent: false
  },
  {
    date: 'Mar 20, 2026',
    title: 'GSTR-3B Filing',
    description: 'Summary return and tax payment for Feb 2026.',
    urgent: false
  },
  {
    date: 'Mar 31, 2026',
    title: 'ITR-U Filing',
    description: 'Last date to file updated income tax return for FY 2022-23.',
    urgent: false
  }
];

export const ComplianceCalendar = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900">Compliance Calendar</h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Stay ahead of your business obligations. Our dynamic calendar tracks all critical tax and legal deadlines so you never pay a late fee again.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="h-12 w-12 rounded-full border-4 border-white object-cover"
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900">
                Joined by <span className="text-brand-blue">2,000+</span> businesses this month
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {deadlines.map((deadline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-6">
                  <div className={`flex h-16 w-16 flex-col items-center justify-center rounded-2xl ${deadline.urgent ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-600'}`}>
                    <span className="text-xs font-black uppercase">{deadline.date.split(' ')[0]}</span>
                    <span className="text-xl font-black">{deadline.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900">{deadline.title}</h4>
                      {deadline.urgent && (
                        <span className="flex items-center gap-1 rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-black uppercase text-rose-600">
                          <AlertCircle className="h-3 w-3" />
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{deadline.description}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-blue" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
