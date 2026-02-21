import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Who should file an ITR?",
    answer: "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh."
  },
  {
    question: "How can I claim deductions for tax saving?",
    answer: "You can claim deductions under various sections of the Income Tax Act, most notably Section 80C (investments in PPF, ELSS, LIC, etc.), Section 80D (medical insurance), and Section 24 (home loan interest)."
  },
  {
    question: "I receive my salary income after deduction of TDS. Am I required to file an income tax return?",
    answer: "Yes, filing an ITR is mandatory if your gross total income exceeds the basic exemption limit, even if TDS has been deducted. Filing also allows you to claim refunds if excess tax was deducted."
  },
  {
    question: "How do I check TDS details from my form 26AS?",
    answer: "You can download Form 26AS from the TRACES portal or through your net banking account. It provides a consolidated view of all tax-related information associated with your PAN."
  },
  {
    question: "How can I claim an income tax refund?",
    answer: "You can claim a refund by filing your income tax return. If the tax paid (via TDS, TCS, or Advance Tax) is more than your actual tax liability, the Income Tax Department will process the refund after verifying your return."
  },
  {
    question: "Is my data filed with 1XFILING secure?",
    answer: "Yes, we use bank-grade 256-bit SSL encryption to ensure your data is always safe and secure. We are ISO 27001 certified and follow strict data privacy protocols."
  },
  {
    question: "What are the GST services offered by 1XFILING?",
    answer: "We offer end-to-end GST services including registration, monthly/quarterly return filing, reconciliation, annual returns (GSTR-9), and representation for GST audits."
  },
  {
    question: "How to e-verify my ITR?",
    answer: "You can e-verify your ITR using Aadhaar OTP, Net Banking, Bank Account EVC, or Demat Account EVC. This is a mandatory step to complete the filing process."
  },
  {
    question: "How to choose a suitable mutual fund for SIP?",
    answer: "Choosing a mutual fund depends on your financial goals, risk appetite, and investment horizon. We recommend consulting with our wealth experts to build a diversified portfolio."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-800 lg:text-4xl">
          Frequently Asked Questions
        </h2>
        
        <div className="mt-12 border-t border-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-8 text-left transition-all hover:text-brand-blue"
              >
                <span className="text-lg font-bold text-slate-800 md:text-xl">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-lg leading-relaxed text-slate-500">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
