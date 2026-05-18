import React from "react";

const Metrics = () => {
  const metricsData = [
    {
      value: "96%",
      label: "Collection Routes Automated",
      description: "Leading banks and modern non-banking companies",
    },
    {
      value: "40%",
      label: "Faster Default Predictions",
      description: "Intelligent overdue tracking and AI workflows",
    },
    {
      value: "8x",
      label: "Drop In Collection Costs",
      description: "Replaced manual call sheets and data extractions",
    },
    {
      value: "95%",
      label: "Higher Repayment Successes",
      description: "AI-powered escalations and borrower tracking",
    },
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 01 of 07 ] · Metrics
          </div>
        </div>

        <div className="py-20 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            Operational Impact
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>AI-Powered Systems</span>
            <span>Drive Returns</span>
          </div>

          <div className="desc max-w-lg mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              Banks using AI-driven recovery workflows notice earlier default
              detections, smarter risk predictions, and massive cost savings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
          {metricsData.map((metric, index) => (
            <div key={index} className="flex flex-col bg-white">
              <div className="p-8 h-32 flex items-center text-5xl font-medium text-zinc-900 border-b border-zinc-200">
                {metric.value}
              </div>

              <div className="px-8 py-4 h-16 flex items-center font-mono text-[10px] font-bold tracking-widest uppercase text-zinc-800 border-b border-zinc-200">
                {metric.label}
              </div>

              <div className="p-8 flex-grow">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
