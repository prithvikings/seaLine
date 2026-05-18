import React from "react";

const MainFeatures = () => {
  const featuresData = [
    {
      title: "Anomaly Detection",
      desc: "Instantly flag unusual spend, data errors, or unexpected shifts.",
    },
    {
      title: "AI Forecasting",
      desc: "Predict cash flow, revenue, and runway with models that adapt as your data changes.",
    },
    {
      title: "Scenario Modeling",
      desc: "Simulate best, worst, and base-case financial outcomes to plan decisions with confidence.",
    },
    {
      title: "Real-Time Dashboards",
      desc: "Live financial visibility across KPIs, forecasts, and performance metrics.",
    },
    {
      title: "Tool Integrations",
      desc: "Connect accounting, banking, and ERP tools in minutes. No complex setup.",
    },
    {
      title: "Automated Reporting",
      desc: "Generate clean, ready-to-share reports without manual exports or spreadsheets.",
    },
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        {/* Top Indicator Row */}
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 02 of 07 ] · Main Features
          </div>
        </div>

        {/* Header Section */}
        <div className="py-24 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            How Finexis Helps
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>Built to Remove</span>
            <span>Financial Guesswork</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              From forecasting to reporting, Finexis automates critical finance
              tasks using AI so teams reduce errors and reclaim time.
            </p>
          </div>
        </div>

        {/* The Gap Trick Grid: Parent is gray, gap is 1px, children are white */}
        <div className="bg-zinc-200 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white flex flex-col h-full">
                {/* Visual Graphic Area */}
                <div className="w-full h-64 p-8 flex items-center justify-center border-b border-zinc-100">
                  <div className="w-full h-full bg-zinc-50 border border-zinc-100 flex items-center justify-center font-mono text-xs text-zinc-400">
                    [ UI Graphic Placeholder ]
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-8 flex flex-col gap-2 flex-grow">
                  <h3 className="text-lg font-medium text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
