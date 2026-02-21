import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories } from '../data/services';
import { cn } from '../utils/cn';

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-brand-blue">1XFILING</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveMenu(category.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 py-8 text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue">
                {category.name}
                <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === category.id && "rotate-180")} />
              </button>

              <AnimatePresence>
                {activeMenu === category.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full w-[600px] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Popular Services</h3>
                        <div className="space-y-3">
                          {category.services.length > 0 ? (
                            category.services.slice(0, 5).map((service) => (
                              <Link
                                key={service.id}
                                to={`/${category.id}/${service.id}`}
                                className="block rounded-lg p-2 transition-colors hover:bg-pastel-blue"
                                onClick={() => setActiveMenu(null)}
                              >
                                <div className="font-semibold text-slate-900">{service.name}</div>
                                <div className="text-xs text-slate-500">{service.description}</div>
                              </Link>
                            ))
                          ) : (
                            <div className="text-sm text-slate-400 italic">Coming soon...</div>
                          )}
                        </div>
                      </div>
                      <div className="rounded-xl bg-pastel-mint p-6">
                        <h3 className="mb-2 text-lg font-bold text-slate-900">Need Help?</h3>
                        <p className="mb-4 text-sm text-slate-600">Talk to our experts for a free consultation about your business needs.</p>
                        <button className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold text-brand-blue shadow-sm transition-transform hover:scale-105">
                          Book Free Call
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/about" className="py-8 text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue">
            About
          </Link>
          <Link to="/contact" className="py-8 text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue">
            Contact
          </Link>
          <Link to="/careers" className="py-8 text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue">
            Careers
          </Link>
          <Link to="/blog" className="py-8 text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue">
            Blog
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-full bg-pastel-blue px-6 py-2.5 text-sm font-bold text-brand-blue transition-all hover:bg-brand-blue hover:text-white">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {categories.map((category) => (
                <div key={category.id} className="py-2">
                  <div className="font-bold text-slate-900">{category.name}</div>
                  <div className="mt-2 grid grid-cols-1 gap-1 pl-4">
                    {category.services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/${category.id}/${service.id}`}
                        className="py-2 text-sm text-slate-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/about"
                className="block py-4 font-bold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-4 font-bold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="block py-4 font-bold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="block py-4 font-bold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <button className="mt-4 w-full rounded-xl bg-brand-blue py-3 font-bold text-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
