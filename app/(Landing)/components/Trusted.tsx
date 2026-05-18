import React from "react";

const Trusted = () => {
  const logos = [
    "Crust",
    "Stacker AI",
    "Cakm",
    "boldes",
    "Times",
    "Sematic",
    "Crust",
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white">
        {/* CSS Grid with divide-x handles the internal vertical borders automatically */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
          {/* Header Cell */}
          <div className="p-4 py-6 flex flex-col justify-center font-medium text-sm">
            <span className="text-zinc-800">
              Trusted by <span className="text-teal-700 text-base">5000+</span>
            </span>
            <span className="text-zinc-500">Top companies</span>
          </div>

          {/* Logo Cells */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="p-4 py-6 flex items-center justify-center h-24"
            >
              {/* Replace this span with your SVG logos */}
              <span className="font-bold text-lg text-zinc-800 tracking-tight">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
