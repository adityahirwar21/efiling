import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Heart, Zap, ArrowRight, GraduationCap, Coffee, Globe } from 'lucide-react';

const positions = [
  {
    id: '1',
    title: 'Senior GST Expert',
    department: 'Compliance',
    location: 'Bangalore / Remote',
    type: 'Full-time'
  },
  {
    id: '2',
    title: 'Full Stack Developer (React/Node)',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time'
  },
  {
    id: '3',
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Mumbai',
    type: 'Full-time'
  },
  {
    id: '4',
    title: 'Customer Success Associate',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    id: '5',
    title: 'Legal Content Writer',
    department: 'Marketing',
    location: 'Bangalore / Remote',
    type: 'Contract'
  }
];

const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance for you and your family, plus mental health support.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Growth Mindset',
    description: 'Annual learning budget for courses, certifications, and attending global conferences.'
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: 'Work-Life Harmony',
    description: 'Flexible working hours and a hybrid work model to keep you energized.'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Impact',
    description: 'Work on products that help thousands of businesses launch and grow every day.'
  }
];

export const CareersPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-blue py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md"
          >
            <Users className="h-4 w-4" />
            We're Hiring!
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-black tracking-tight text-white lg:text-7xl"
          >
            Build the future of <br /> business compliance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-xl text-blue-100"
          >
            Join a team of passionate experts, engineers, and designers working together to simplify legal and financial hurdles for entrepreneurs in India.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-slate-900 lg:text-4xl">Why join 1XFILING?</h2>
            <p className="mt-4 text-lg text-slate-600">We care about your growth, your health, and your happiness.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-3xl font-black text-slate-900 lg:text-4xl">Open Positions</h2>
              <p className="mt-2 text-lg text-slate-600">Find the role that fits your skills and passion.</p>
            </div>
            <div className="flex gap-4">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">All Departments</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">Remote</span>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {positions.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-6 transition-all hover:shadow-lg md:flex-row md:items-center md:p-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-4 w-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-blue">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600">Don't see a role that fits? Send us your resume anyway!</p>
            <a href="mailto:careers@1xfiling.com" className="mt-4 inline-block font-bold text-brand-blue hover:underline">
              careers@1xfiling.com
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">Our Values</h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                At 1XFILING, we're not just building a platform; we're building a culture of excellence, transparency, and empathy.
              </p>
              
              <div className="mt-10 space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pastel-blue text-brand-blue">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Continuous Learning</h3>
                    <p className="mt-2 text-slate-600">We believe in staying curious and constantly upgrading our skills to stay ahead.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pastel-mint text-brand-green">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Radical Transparency</h3>
                    <p className="mt-2 text-slate-600">Open communication is at the heart of everything we do, from product to people.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/office/800/600" 
                alt="Our Team" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-8 shadow-xl lg:block hidden">
                <div className="text-4xl font-black text-brand-blue">50+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
