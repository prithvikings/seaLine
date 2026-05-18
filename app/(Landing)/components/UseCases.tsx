import React from "react";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-zinc-400 shrink-0"
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

const UseCases = () => {
  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        {/* Top Indicator Row */}
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 03 of 07 ] · Use Cases
          </div>
        </div>

        {/* Header Section */}
        <div className="py-24 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            Built For Finance Leaders
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>Designed for Real</span>
            <span>Decision Makers</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              Finexis adapts to CFOs, founders, and finance teams who need
              accurate insights without complex tools or heavy setup.
            </p>
          </div>
        </div>

        {/* Row 1: Text Left, Graphic Right */}
        <div className="flex flex-col md:flex-row border-b border-zinc-200">
          {/* Text Block */}
          <div className="w-full md:w-1/2 flex flex-col order-1 md:order-1 md:border-r border-zinc-200 bg-white">
            <div className="p-10 md:p-12 flex-grow">
              <h3 className="text-2xl font-medium text-zinc-900 mb-4">
                Financial Control at Scale
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Finexis gives CFOs real-time visibility, accurate forecasting,
                and confidence across complex financial operations.
              </p>
            </div>
            <div className="flex flex-col">
              {[
                "Real-time financial visibility",
                "Accurate AI forecasting",
                "Risk and variance detection",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-10 py-5 border-t border-zinc-200 flex items-center gap-4 text-sm text-zinc-700 bg-zinc-50/30"
                >
                  <CheckIcon /> {item}
                </div>
              ))}
            </div>
          </div>
          {/* Graphic Block */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-zinc-50 border-t md:border-t-0 border-zinc-200 order-2 md:order-2 p-10 min-h-[400px]">
            <div className="w-full max-w-sm h-64 bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-xs text-zinc-400">
              [ Dashboard UI Placeholder ]
            </div>
          </div>
        </div>

        {/* Row 2: Graphic Left, Text Right (Mobile: Text Top, Graphic Bottom) */}
        <div className="flex flex-col md:flex-row border-b border-zinc-200">
          {/* Graphic Block - Rendered second on mobile, positioned first on desktop */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-zinc-50 border-t md:border-t-0 md:border-r border-zinc-200 order-2 md:order-1 p-10 min-h-[400px]">
            <div className="w-full max-w-sm h-64 bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-xs text-zinc-400">
              [ Automation UI Placeholder ]
            </div>
          </div>
          {/* Text Block - Rendered first on mobile, positioned second on desktop */}
          <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2 bg-white">
            <div className="p-10 md:p-12 flex-grow">
              <h3 className="text-2xl font-medium text-zinc-900 mb-4">
                Automate Finance Tasks
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Finexis removes repetitive finance tasks and day-to-day work so
                teams can focus on analysis instead of manual reporting.
              </p>
            </div>
            <div className="flex flex-col">
              {[
                "Automated financial reporting",
                "Error and anomaly alerts",
                "Faster monthly close",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-10 py-5 border-t border-zinc-200 flex items-center gap-4 text-sm text-zinc-700 bg-zinc-50/30"
                >
                  <CheckIcon /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Text Left, Graphic Right */}
        <div className="flex flex-col md:flex-row">
          {/* Text Block */}
          <div className="w-full md:w-1/2 flex flex-col order-1 md:order-1 md:border-r border-zinc-200 bg-white">
            <div className="p-10 md:p-12 flex-grow">
              <h3 className="text-2xl font-medium text-zinc-900 mb-4">
                Faster Strategic Decisions
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Finexis helps founders understand burn, runway, and growth
                trends without relying on manual reports or spreadsheets.
              </p>
            </div>
            <div className="flex flex-col">
              {[
                "Burn and runway clarity",
                "Growth trend insights",
                "Instant decision signals",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-10 py-5 border-t border-zinc-200 flex items-center gap-4 text-sm text-zinc-700 bg-zinc-50/30"
                >
                  <CheckIcon /> {item}
                </div>
              ))}
            </div>
          </div>
          {/* Graphic Block */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-zinc-50 border-t md:border-t-0 border-zinc-200 order-2 md:order-2 p-10 min-h-[400px]">
            <div className="w-full max-w-sm h-64 bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-xs text-zinc-400">
              [ Trends UI Placeholder ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
