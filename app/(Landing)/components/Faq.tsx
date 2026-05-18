"use client";
import React, { useState } from "react";

// Individual Accordion Component with Smooth Expand Animation
const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <span className="ml-4 flex-shrink-0 text-zinc-400 font-mono text-lg leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Modern CSS Grid expand trick for smooth height animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm text-zinc-500 leading-relaxed pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  // Separating into columns to match your designer's explicit order
  const leftColQs = [
    {
      q: "What is Finexis?",
      a: "Finexis is an AI-driven financial intelligence platform designed to automate reporting, forecasting, and anomaly detection for modern teams.",
    },
    {
      q: "Do I need to know finance to use Finexis?", // Fixed designer's typo
      a: "No. Finexis translates complex financial data into plain-English insights so founders and operators can make decisions without a CPA.",
    },
    {
      q: "How does Finexis handle data security?",
      a: "We use bank-level AES-256 encryption. Your data is siloed, anonymized for model training, and compliant with SOC2 standards.",
    },
    {
      q: "Is Finexis a waitlist product?",
      a: "Currently, yes. We are onboarding companies in cohorts to ensure our infrastructure scales flawlessly and every team gets dedicated support.",
    },
  ];

  const rightColQs = [
    {
      q: "Who is Finexis built for?",
      a: "Early-stage founders, scaling CFOs, and lean finance teams who want to eliminate manual spreadsheet errors and reclaim hours of busywork.",
    },
    {
      q: "What tools does Finexis replace?",
      a: "Finexis handles the work of fragmented FP&A software, manual Excel models, and static reporting dashboards.",
    },
    {
      q: "Can Finexis scale as my company grows?",
      a: "Absolutely. Our architecture is built to handle millions of transaction rows and integrates directly with enterprise ERPs when you are ready.",
    },
    {
      q: "Does Finexis integrate with existing tools?",
      a: "Yes. We connect seamlessly with Quickbooks, Xero, Stripe, Mercury, and standard banking APIs within minutes.",
    },
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        {/* Top Indicator Row */}
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 07 of 07 ] · FAQs
          </div>
        </div>

        {/* Header Section */}
        <div className="py-24 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            Common Questions
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>Answers Before</span>
            <span>You Get Started</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              Clear answers to common questions about setup, security,
              integrations, and how Finexis fits into your finance stack.
            </p>
          </div>
        </div>

        {/* FAQ Grid Layout - Explicit Gutter, Independent Columns */}
        <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          {/* Left Column */}
          <div className="flex flex-col border-t border-zinc-200">
            {leftColQs.map((item, index) => (
              <FAQItem
                key={`left-${index}`}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col border-t border-zinc-200 mt-8 lg:mt-0">
            {rightColQs.map((item, index) => (
              <FAQItem
                key={`right-${index}`}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
