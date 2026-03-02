import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { categories } from "../data/services";
import { cn } from "../utils/cn";
import Logo from "../assets/logo.svg";

export const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (

    <header className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8">

          {categories.map((category) => (

            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
            >

              {/* Menu Button */}
              <button className="flex items-center gap-1 py-8 text-sm font-semibold text-slate-700 hover:text-brand-blue transition">

                {category.name}

                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeMenu === category.id && "rotate-180"
                  )}
                />

              </button>

              {/* Mega Menu */}
              <AnimatePresence>

                {activeMenu === category.id && (

                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden"
                  >

                    <div className="grid grid-cols-3">

                      {/* Left Info Panel */}
                      <div className="col-span-1 bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 p-6">

                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {category.name}
                        </h3>

                        <p className="text-sm text-slate-600 mb-4">
                          Explore all professional services under {category.name}.
                        </p>

                        <Link
                          to={`/${category.id}`}
                          onClick={() => setActiveMenu(null)}
                          className="text-sm font-semibold text-brand-blue hover:underline"
                        >
                          View all services →
                        </Link>

                      </div>

                      {/* Services Grid */}
                      <div className="col-span-2 p-6">

                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                          All Services
                        </h4>

                        {/* IMPORTANT: No slice, scroll enabled */}
                        <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2">

                          {category.services.map((service) => (

                            <Link
                              key={service.id}
                              to={`/${category.id}/${service.id}`}
                              onClick={() => setActiveMenu(null)}
                              className="group rounded-xl border border-transparent p-3 hover:border-slate-200 hover:bg-slate-50 transition-all hover:shadow-sm"
                            >

                              <div className="font-semibold text-slate-800 group-hover:text-brand-blue transition">
                                {service.name}
                              </div>

                            </Link>

                          ))}

                        </div>

                        {/* CTA */}
                        <div className="mt-6 flex items-center justify-between rounded-xl bg-brand-blue p-4 text-white">

                          <div>
                            <div className="text-sm font-semibold">
                              Need expert help?
                            </div>
                            <div className="text-xs opacity-90">
                              Talk with our team
                            </div>
                          </div>

                          <Link
                            to="/contact"
                            onClick={() => setActiveMenu(null)}
                            className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-brand-blue hover:bg-slate-100 transition"
                          >
                            Contact
                          </Link>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">

          <Link to="/contact">
            <button
              className="
      relative overflow-hidden
      rounded-full px-6 py-2.5 text-sm font-bold text-white
      bg-gradient-to-b from-[#3b8cff] via-[#2279BD] to-[#0f5c99]
      border border-white/20
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(34,121,189,0.5)]
      hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_30px_rgba(34,121,189,0.7)]
      hover:scale-105
      transition-all duration-300
    "
            >
              {/* Shine effect */}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span
                  className="
          absolute -top-1/2 left-[-75%]
          w-[50%] h-[200%]
          bg-gradient-to-r from-transparent via-white/30 to-transparent
          rotate-12
          animate-[shine_3s_linear_infinite]
        "
                ></span>
              </span>

              <span className="relative z-10">
                Get Started
              </span>
            </button>
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >

            <div className="px-4 py-4 space-y-4">

              {categories.map((category) => (

                <div key={category.id}>

                  <div className="font-bold text-slate-900 mb-2">
                    {category.name}
                  </div>

                  <div className="space-y-2 pl-3">

                    {category.services.map((service) => (

                      <Link
                        key={service.id}
                        to={`/${category.id}/${service.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-slate-600 hover:text-brand-blue"
                      >
                        {service.name}
                      </Link>

                    ))}

                  </div>

                </div>

              ))}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
    relative block w-full overflow-hidden
    rounded-xl py-3 text-center font-bold text-white
    bg-gradient-to-b from-[#3b8cff] via-[#2279BD] to-[#0f5c99]
    border border-white/20
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(34,121,189,0.5)]
    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_30px_rgba(34,121,189,0.7)]
    active:scale-[0.98]
    transition-all duration-300
  "
              >
                {/* Shine effect */}
                <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span
                    className="
        absolute -top-1/2 left-[-75%]
        w-[50%] h-[200%]
        bg-gradient-to-r from-transparent via-white/30 to-transparent
        rotate-12
        animate-[shine_3s_linear_infinite]
      "
                  ></span>
                </span>

                <span className="relative z-10">
                  Get Started
                </span>
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );

};