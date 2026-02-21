import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-brand-green blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tight text-white lg:text-7xl"
          >
            Get in touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-xl text-slate-400"
          >
            Have questions about company registration, GST, or tax filing? Our experts are here to help you navigate the complexities of Indian business compliance.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-slate-50 p-8 lg:p-12"
            >
              <h2 className="text-3xl font-black text-slate-900">Send us a message</h2>
              <p className="mt-4 text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-bold text-slate-700">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      className="mt-2 block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-bold text-slate-700">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      className="mt-2 block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-2 block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Contact Information</h2>
                <p className="mt-4 text-lg text-slate-600">Prefer a direct conversation? Reach out to us through any of these channels.</p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Call Us</h3>
                    <p className="mt-1 text-slate-600">+91 1800 123 4567</p>
                    <p className="text-sm text-slate-500">Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <p className="mt-1 text-slate-600">support@1xfiling.com</p>
                    <p className="text-sm text-slate-500">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Visit Us</h3>
                    <p className="mt-1 text-slate-600">123 Business Hub, MG Road</p>
                    <p className="text-sm text-slate-500">Bangalore, KA 560001</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Live Chat</h3>
                    <p className="mt-1 text-slate-600">Available on WhatsApp</p>
                    <p className="text-sm text-slate-500">Instant support</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-3xl border border-slate-100 p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-brand-blue" />
                  <h3 className="text-xl font-bold text-slate-900">Office Hours</h3>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-slate-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Saturday</span>
                    <span className="font-bold text-slate-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Sunday</span>
                    <span className="font-bold text-brand-green">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.984761273941!2d77.59202731536484!3d12.971598690855988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625565000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
        />
      </section>
    </div>
  );
};
