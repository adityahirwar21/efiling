import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Retail Store Owner",
    quote:
      "GST returns filing is now smooth and completely hassle-free. The support team is very responsive.",
    image: "https://picsum.photos/seed/amit/100",
  },
  {
    name: "Neha Kulkarni",
    role: "Chartered Accountant",
    quote:
      "I recommend E-Filing Cart to my clients regularly. Their compliance tracking system is excellent.",
    image: "https://picsum.photos/seed/neha/100",
  },
  {
    name: "Rakesh Jain",
    role: "Manufacturing Business Owner",
    quote:
      "From registration to monthly compliance, everything is handled professionally and on time.",
    image: "https://picsum.photos/seed/rakesh/100",
  },
  {
    name: "Divya Nair",
    role: "Freelancer",
    quote:
      "Income tax filing used to stress me out. Now it takes just a few clicks and expert guidance.",
    image: "https://picsum.photos/seed/divya/100",
  },
  {
    name: "Sandeep Mishra",
    role: "E-commerce Seller",
    quote:
      "Managing GST for multiple states became very easy with their organized dashboard.",
    image: "https://picsum.photos/seed/sandeep/100",
  },
  {
    name: "Kavita Shah",
    role: "Startup Co-Founder",
    quote:
      "Private limited company registration was completed faster than expected with clear documentation support.",
    image: "https://picsum.photos/seed/kavita/100",
  },
  {
    name: "Arjun Reddy",
    role: "Logistics Business Owner",
    quote:
      "Their reminders ensure we never miss compliance deadlines. Highly dependable service.",
    image: "https://picsum.photos/seed/arjun/100",
  },
  {
    name: "Pooja Singh",
    role: "Consultant",
    quote:
      "Professional team, transparent pricing, and quick turnaround. Exactly what businesses need.",
    image: "https://picsum.photos/seed/pooja/100",
  },
  {
    name: "Vikram Chauhan",
    role: "IT Services Provider",
    quote:
      "ROC compliance and annual filings are handled seamlessly. Saves us valuable time.",
    image: "https://picsum.photos/seed/vikram/100",
  },
  {
    name: "Sneha Iyer",
    role: "Boutique Owner",
    quote:
      "Very smooth onboarding process and expert guidance throughout GST registration.",
    image: "https://picsum.photos/seed/sneha/100",
  },
  {
    name: "Harish Patel",
    role: "Construction Contractor",
    quote:
      "Accurate tax calculations and reliable filing services. I trust them completely.",
    image: "https://picsum.photos/seed/harish/100",
  },
  {
    name: "Meera Joshi",
    role: "Digital Marketing Agency Owner",
    quote:
      "Their compliance support allows me to focus on growing my business without legal worries.",
    image: "https://picsum.photos/seed/meera/100",
  },
];

const TestimonialCard = ({ item }: { item: typeof testimonials[number] }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="
      min-w-[340px]
      max-w-[380px]
      bg-white/80 backdrop-blur-xl
      border border-slate-200
      rounded-3xl
      p-8
      shadow-sm
      hover:shadow-2xl
      transition-all duration-300
    "
  >
    {/* Stars */}
    <div className="flex gap-1 text-amber-400 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-slate-700 leading-relaxed text-base">
      “{item.quote}”
    </p>

    {/* User */}
    <div className="mt-8 flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
      />

      <div>
        <div className="font-semibold text-slate-900">
          {item.name}
        </div>
        <div className="text-sm text-slate-500">
          {item.role}
        </div>
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      {/* Soft Brand Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center mb-20">

        <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold mb-6">
          Client Testimonials
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Trusted by 5,000+ Businesses Across India
        </h2>

        <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
          Real experiences from founders, professionals, and enterprises
          using <strong>E-Filing Cart</strong> for company registration,
          GST filing, and complete compliance management.
        </p>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Row 1 */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-10 w-max mb-10"
      >
        {duplicated.map((item, i) => (
          <div key={`row1-${i}`}>
            <TestimonialCard item={item} />
          </div>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-10 w-max"
      >
        {duplicated.map((item, i) => (
          <div key={`row2-${i}`}>
            <TestimonialCard item={item} />
          </div>
        ))}
      </motion.div>

    </section>
  );
};