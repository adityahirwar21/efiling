import React from 'react';
import { motion } from 'motion/react';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white">
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-slate-900 lg:text-5xl"
        >
          {title}
        </motion.h1>
        <p className="mt-4 text-slate-500">Last updated: February 21, 2026</p>
      </div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy">
    <div className="space-y-8 text-slate-600 leading-relaxed">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
        <p>
          At 1XFILING, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Name and contact information</li>
          <li>Business details and PAN/GST numbers</li>
          <li>Financial information for tax filing purposes</li>
          <li>Documents required for government registrations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Provide and maintain our legal and tax services</li>
          <li>Process government filings on your behalf</li>
          <li>Communicate with you about your account and services</li>
          <li>Improve our platform and user experience</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
        <p>
          We implement bank-grade security measures, including 256-bit SSL encryption, to protect your data. Access to your sensitive information is strictly limited to authorized personnel who need it to perform their duties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@1xfiling.com.
        </p>
      </section>
    </div>
  </LegalLayout>
);

export const TermsOfService = () => (
  <LegalLayout title="Terms of Service">
    <div className="space-y-8 text-slate-600 leading-relaxed">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using 1XFILING, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
        <p>
          1XFILING provides a technology platform that facilitates legal, tax, and compliance services. We act as an intermediary between you and various government departments.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Providing accurate and complete information</li>
          <li>Maintaining the confidentiality of your account</li>
          <li>Ensuring all documents provided are genuine</li>
          <li>Paying all service fees and government charges on time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
        <p>
          1XFILING shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore.
        </p>
      </section>
    </div>
  </LegalLayout>
);

export const RefundPolicy = () => (
  <LegalLayout title="Refund Policy">
    <div className="space-y-8 text-slate-600 leading-relaxed">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Refund Eligibility</h2>
        <p>
          We strive to provide the best service possible. You may be eligible for a refund if:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>We are unable to complete the service due to internal errors</li>
          <li>You cancel the service before any work has commenced</li>
          <li>There is a duplicate payment for the same service</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Non-Refundable Items</h2>
        <p>Refunds will not be provided for:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Government fees already paid to the respective departments</li>
          <li>Services that have already been completed or filed</li>
          <li>Delays caused by government processing times</li>
          <li>Rejection of applications by government authorities due to incorrect information provided by the user</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Refund Process</h2>
        <p>
          To request a refund, please email support@1xfiling.com with your order details. Approved refunds will be processed within 7-10 working days to the original payment method.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cancellation Policy</h2>
        <p>
          You can cancel your service request at any time. However, the refund amount will depend on the stage of the service and any costs already incurred by 1XFILING.
        </p>
      </section>
    </div>
  </LegalLayout>
);
