import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    title: (
      <>
        <span className="text-brand-blue">600,000+</span> businesses trust our SMB offerings
      </>
    ),
    quote: "Earlier I used to call multiple customers, track my bank account or check messages for payments. Now I can send UPI links in reminders and customers can pay from home. Compliance is easy.",
    name: 'Shalini Prasad',
    role: 'Business Owner, Printing Goods',
    image: 'https://picsum.photos/seed/shalini/100/100',
    link: 'Explore products for Small Businesses'
  },
  {
    id: '2',
    title: (
      <>
        Over <span className="text-brand-blue">1,200</span> enterprises use our compliance stack
      </>
    ),
    quote: "1XFILING has made core GST returns simple and easy for us. Instead of taking 7 to 8 days to do reconciliation, now it's just a matter of hours. The people there assist us at any given point in time.",
    name: 'Manivannan P',
    role: 'Group Manager, Titan',
    image: 'https://picsum.photos/seed/manivannan/100/100',
    link: 'Explore our products for Large Enterprises'
  },
  {
    id: '3',
    title: (
      <>
        Over <span className="text-brand-blue">5 million</span> tax payers have filed with us
      </>
    ),
    quote: "I have been using 1XFILING's DIY e-filing of ITR for last 3 years. I use it for my entire family's income tax returns. Very effective and least time consuming.",
    name: 'Mr. Manmohan',
    role: 'Tax Payer, Kochi, Kerala',
    image: 'https://picsum.photos/seed/manmohan/100/100',
    link: 'File ITRs yourself or seek expert assistance'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-black text-slate-800 lg:text-5xl">
            Trusted by experts and businesses
          </h2>
          <div className="hidden gap-4 lg:flex">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-all hover:text-slate-900 hover:shadow-md"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-all hover:text-slate-900 hover:shadow-md"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-4"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative min-w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-xl md:min-w-[360px]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-brand-blue" />
              
              <h3 className="text-lg font-bold leading-tight text-slate-900 md:text-xl">
                {testimonial.title}
              </h3>
              
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">{testimonial.role}</div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="#" 
                  className="group inline-flex items-center gap-2 text-xs font-bold text-brand-blue transition-all hover:gap-3"
                >
                  {testimonial.link}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
