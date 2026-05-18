import React from "react";

const MainFeatures = () => {
  const featuresData = [
    {
      title: "Risk Intelligence",
      desc: "Instantly flag overdue debts, data shifts, or unexpected delays.",
    },
    {
      title: "AI Predictions",
      desc: "Predict recoveries, risk, and defaults with models that adapt as your data changes.",
    },
    {
      title: "Borrower Behavior",
      desc: "Evaluate high, risks, and base-tier repayment patterns to plan workflows with confidence.",
    },
    {
      title: "Recovery AI Platform",
      desc: "Live repayment visibility across KPIs, pipelines, and collections metrics.",
    },
    {
      title: "Data Integrations",
      desc: "Connect portfolios, ledgers, and CRM tools in minutes. No complex setup.",
    },
    {
      title: "Workflow Automation",
      desc: "Generate smart, ready-to-route workflows without manual agents or call sheets.",
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
            How RecovAI Works
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>Built to Manage</span>
            <span>Borrower Escalation</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              From predictions to workflows, RecovAI automates critical recovery
              tasks using AI so teams cut down losses and boost ROI.
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
