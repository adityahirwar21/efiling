import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";
import Logo from "../assets/logo.svg";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Private Limited Company", to: "/startup/private-limited-company" },
      { name: "FSSAI Registration", to: "/registrations/fssai-basic" },
      { name: "GST Registration", to: "/gst/gst-registration" },
      { name: "Annual Compliance", to: "/compliance/proprietorship-compliance" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Contact", to: "/contact" },
      { name: "Careers", to: "/careers" },
      { name: "Blog", to: "/blog" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", to: "/privacy" },
      { name: "Terms of Service", to: "/terms" },
      { name: "Refund Policy", to: "/refund" }
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/efilingcart" },
  { icon: Instagram, href: "https://www.instagram.com/efilingcart" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/efilingcart" },
  { icon: Twitter, href: "https://twitter.com/efilingcart" }
];

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="E-Filing Cart Logo"
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-md">
              E-Filing Cart is a modern legal & compliance platform helping
              startups, SMEs, and enterprises simplify company registration,
              GST filing, tax returns, and ongoing compliance across India.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue" />
                info@efilingcart.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue" />
                +91 98267 65899
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-blue" />
                India
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-brand-blue transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ================= SOCIAL + NEWSLETTER ================= */}
        <div className="mt-20 border-t border-white/10 pt-12 grid md:grid-cols-2 gap-10 items-center">

          {/* Social Left */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-400 hover:bg-brand-blue hover:text-white transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Right */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Subscribe to Newsletter
            </h4>

            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-3">
              Monthly compliance, GST & tax updates. No spam.
            </p>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} E-Filing Cart. All rights reserved.</p>

          <div className="flex gap-6 text-xs">
            <span>Built for Startups & Businesses</span>
            <span>•</span>
            <span>Secure & Encrypted</span>
            <span>•</span>
            <span>Compliance Focused</span>
          </div>
        </div>

      </div>
    </footer>
  );
};