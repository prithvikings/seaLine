import React from "react";

const Hero = () => {
  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto py-24 flex flex-col items-center gap-4 justify-center border-x border-zinc-200 bg-white">
        <div className="badge flex items-center font-mono text-xs border border-zinc-300 p-1 mt-8 gap-2 bg-white">
          <div className="bg-emerald-950 size-2 rounded-full"></div>
          AI-Driven Borrower Recovery
        </div>
        <div className="title flex items-center justify-center text-6xl font-medium text-zinc-800">
          <h1>
            <span className="text-center">AI Automation</span> <br />
            <span className="flex items-center justify-center mt-2">
              Solves Default
            </span>
          </h1>
        </div>
        <div className="desc max-w-lg text-center mt-2">
          <p className="text-zinc-700 text-sm font-sans">
            Automate borrower analysis and collection workflows. The AI maps
            risk patterns so your team recovers funds instantly.
          </p>
        </div>
        <div className="btn-group flex mt-2 gap-2">
          <button className="px-3 py-1.5 bg-teal-900 text-white font-mono text-sm">
            Request Demo
          </button>
          <button className="px-3 py-1.5 bg-zinc-200 font-mono text-sm">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
