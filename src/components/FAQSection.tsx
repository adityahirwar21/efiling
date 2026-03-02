import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const categories = {
  "Income Tax": [
    {
      question: "Who is required to file an Income Tax Return (ITR)?",
      answer: "Individuals whose total income exceeds ₹2.5 lakh (₹3 lakh for senior citizens and ₹5 lakh for super senior citizens) must file ITR. Filing is also important for claiming refunds, carrying forward losses, and for visa/loan documentation."
    },
    {
      question: "What documents are required for ITR filing?",
      answer: "Key documents include PAN, Aadhaar, Form 16 (for salaried), Form 26AS, AIS/TIS, bank statements, capital gains statements, and deduction proofs (like 80C/80D)."
    },
    {
      question: "Can freelancers and digital marketers file ITR?",
      answer: "Yes, independent professionals, freelancers, and agency owners must file ITR-3 or ITR-4. Under the presumptive taxation scheme (Section 44ADA), eligible professionals can declare 50% of their gross receipts as profit."
    },
    {
      question: "What if I missed the deadline to file my ITR?",
      answer: "If you miss the original deadline, you can still file a Belated Return before December 31st of the assessment year with a late fee. Alternatively, you can file an Updated Return (ITR-U) up to 2 years from the end of the assessment year under certain conditions."
    }
  ],
  "GST": [
    {
      question: "Who should register under GST?",
      answer: "Businesses exceeding ₹40 lakh turnover for goods (₹20 lakh for service providers) must register. However, inter-state sellers, e-commerce operators, and businesses involved in export/import must register regardless of turnover."
    },
    {
      question: "What is the penalty for late GST return filing?",
      answer: "A late fee of ₹50 per day (₹20 for nil returns) is charged, subject to a maximum cap, along with 18% per annum interest on the outstanding tax amount."
    },
    {
      question: "Can I cancel my GST registration if my business closes?",
      answer: "Yes, you can apply for GST cancellation online and file the final return (GSTR-10) within the prescribed timeline."
    }
  ],
  "Company Registration": [
    {
      question: "How long does company registration take?",
      answer: "Private Limited Company registration usually takes 7–10 working days, subject to MCA portal processing and document verification."
    },
    {
      question: "Is physical presence required for company registration?",
      answer: "No, the entire process with E-Filing Cart is 100% online. All documents are submitted electronically and digitally signed using a DSC."
    },
    {
      question: "What is the difference between a Proprietorship and a Private Limited Company?",
      answer: "A Sole Proprietorship is run by a single individual with unlimited liability. A Private Limited Company is a separate legal entity offering limited liability protection and better fundraising capability."
    }
  ],
  "Registrations & Licenses": [
    {
      question: "Is FSSAI license mandatory for food businesses?",
      answer: "Yes, any entity handling food—including home bakers, cloud kitchens, and food delivery services—must have at least basic FSSAI Registration to operate legally."
    },
    {
      question: "What are the benefits of MSME (Udyam) Registration?",
      answer: "MSME registration provides benefits such as collateral-free loans, lower interest rates, subsidy on trademark fees, and protection against delayed payments."
    }
  ],
  "Intellectual Property": [
    {
      question: "Why should I register a Trademark?",
      answer: "Registering a trademark gives you exclusive legal rights over your brand name or logo and protects it from misuse by competitors."
    },
    {
      question: "How long is a trademark valid?",
      answer: "A registered trademark is valid for 10 years and can be renewed indefinitely for subsequent 10-year periods."
    }
  ],
  "Compliance & MCA": [
    {
      question: "What is DIN eKYC?",
      answer: "It is a mandatory annual compliance for company directors holding a DIN. Non-filing can attract penalties."
    },
    {
      question: "Do you provide monthly bookkeeping services?",
      answer: "Yes, E-Filing Cart offers monthly bookkeeping, payroll management, and accounting services to keep your business compliant and organized."
    }
  ]
};

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("Income Tax");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about Income Tax, GST, company registration, and compliance services at E-Filing Cart.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-16">

          {/* Left Sidebar Categories */}
          <div className="space-y-4">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`relative w-full text-left px-5 py-4 rounded-xl transition ${
                  activeCategory === cat
                    ? "bg-white shadow-lg text-brand-blue"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue rounded-l-xl"
                  />
                )}
                <span className="font-semibold">{cat}</span>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {categories[activeCategory].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex justify-between w-full text-left"
                    >
                      <span className="font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`transition-transform ${
                          openIndex === index ? "rotate-180 text-brand-blue" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};