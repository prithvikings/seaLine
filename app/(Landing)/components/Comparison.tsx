import React from "react";

// Minimal SVG Icons
const CrossIcon = () => (
  <svg
    className="w-4 h-4 text-zinc-400 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Comparison = () => {
  const comparisonData = [
    {
      traditional: "Long setup and manual configuration",
      finexis: "Fast onboarding with minimal setup",
    },
    {
      traditional: "Static models and assumptions",
      finexis: "Adaptive AI forecasting based on live data",
    },
    {
      traditional: "Manual reports updated periodically",
      finexis: "Real-time insights and automated reporting",
    },
    {
      traditional: "Issues discovered after the fact",
      finexis: "Proactive anomaly detection before problems grow",
    },
    {
      traditional: "Breaks down as data and teams grow",
      finexis: "Built to scale with complex finance operations",
    },
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        {/* Top Indicator Row (Fixed the numbering error from your image) */}
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 04 of 07 ] · Comparison
          </div>
        </div>

        {/* Header Section */}
        <div className="py-24 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            Why Finexis
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>A Smarter Alternative</span>
            <span>to Traditional Tools</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              Finexis replaces manual finance workflows and fragmented tools
              with AI-driven intelligence built for modern teams.
            </p>
          </div>
        </div>

        {/* The Comparison Table (Flexbox implementation) */}
        <div className="flex flex-col w-full">
          {/* Table Header Row */}
          <div className="flex flex-col md:flex-row border-b border-zinc-200">
            {/* Left Header */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-zinc-50 border-b md:border-b-0 md:border-r border-zinc-200 flex items-center">
              <span className="text-lg text-zinc-600">
                Traditional Finance Tools
              </span>
            </div>
            {/* Right Header (Brand Emphasis) */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-blue-600 flex items-center">
              <span className="text-lg font-medium text-white">
                Finexis (AI-Powered)
              </span>
            </div>
          </div>

          {/* Table Body Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              // `last:border-b-0` prevents a double border at the very bottom of the section
              className="flex flex-col md:flex-row border-b last:border-b-0 border-zinc-200"
            >
              {/* Left Cell (De-emphasized) */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center gap-4 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-200">
                <CrossIcon />
                <span className="text-sm text-zinc-500">{row.traditional}</span>
              </div>

              {/* Right Cell (Emphasized) */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center gap-4 bg-white">
                <div className="bg-blue-50 p-1 rounded-full shrink-0">
                  <CheckIcon />
                </div>
                <span className="text-sm font-medium text-zinc-800">
                  {row.finexis}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
