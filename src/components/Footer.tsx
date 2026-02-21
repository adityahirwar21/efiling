import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-brand-blue">
              1XFILING
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              India's most trusted legal-tech platform for startups and businesses. We simplify compliance so you can focus on growth.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-900">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/startup/private-limited" className="hover:text-brand-blue">Private Limited Company</Link></li>
              <li><Link to="/registrations/fssai" className="hover:text-brand-blue">FSSAI Registration</Link></li>
              <li><Link to="/gst/registration" className="hover:text-brand-blue">GST Registration</Link></li>
              <li><Link to="/compliance/annual-filing" className="hover:text-brand-blue">Annual Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-900">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-brand-blue">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-brand-blue">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-brand-blue">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-900">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/privacy" className="hover:text-brand-blue">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-blue">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-brand-blue">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} 1XFILING. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
