import React from 'react';
import { Tag, Headphones, ShieldCheck, Bell } from 'lucide-react';

const trustItems = [
  {
    icon: <Tag className="h-6 w-6" />,
    title: 'Transparent Pricing',
    description: 'No hidden costs, fixed professional fees.',
    bgColor: 'bg-pastel-blue',
    iconColor: 'text-brand-blue'
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: 'Expert Support',
    description: 'Dedicated account managers for you.',
    bgColor: 'bg-pastel-mint',
    iconColor: 'text-brand-green'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Secure & Digital',
    description: '100% paperless and encrypted process.',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: 'Deadline Reminders',
    description: 'Never miss a compliance due date.',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  }
];

export const TrustBar = () => {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bgColor} ${item.iconColor}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
