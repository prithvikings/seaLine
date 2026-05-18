import React from "react";

const CTA = () => {
  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col relative overflow-hidden">
        {/* Content Section */}
        <div className="pt-32 pb-16 px-8 flex flex-col items-center gap-6 text-center relative z-10">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600 bg-white">
            <div className="bg-emerald-900 size-1.5"></div>
            Get Started
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
            <span>Move Faster With</span>
            <span>Financial Confidence</span>
          </div>

          <div className="desc max-w-2xl mt-4">
            <p className="text-zinc-500 text-base leading-relaxed">
              Finexis gives your team AI-driven clarity, real-time insights, and
              the control needed to make better financial decisions without
              manual work.
            </p>
          </div>

          <div className="btn-group flex flex-col sm:flex-row mt-8 gap-4">
            {/* Dark Emerald Primary Button */}
            <button className="px-8 py-3.5 bg-emerald-900 text-white font-mono text-sm hover:bg-emerald-950 transition-colors">
              Request Demo
            </button>
            {/* Secondary Button */}
            <button className="px-8 py-3.5 bg-zinc-50 text-zinc-900 font-mono text-sm border border-zinc-200 hover:bg-zinc-100 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* The Halftone Wave Graphic Area */}
        <div className="w-full h-64 md:h-80 relative flex items-end justify-center border-t border-zinc-100 mt-10">
          {/* Fallback CSS Halftone Simulation 
            Replace this entire div with your exported Figma SVG 
          */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, #064e3b 1.5px, transparent 2px)",
              backgroundSize: "10px 10px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 100%)",
              opacity: 0.4,
            }}
          ></div>

          {/* Solid Emerald Base Anchor */}
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-emerald-900"></div>

          <div className="relative z-20 mb-10 pointer-events-none">
            <span className="font-mono text-xs text-emerald-100 bg-emerald-950/80 px-3 py-1.5 rounded backdrop-blur-md border border-emerald-800">
              [ Export Halftone SVG from Figma and insert here ]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
