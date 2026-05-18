import React from "react";

const Navbar = () => {
  const navLink = ["Features", "Pricing", "About", "Blog", "Contact"];
  return (
    <div className="w-full border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-10 py-6 border-x border-zinc-200">
        <div className="flex items-center gap-2 text-xl font-bold text-zinc-900">
          <div className="flex flex-wrap w-5 h-5 gap-[2px]">
            <div className="w-[8px] h-[8px] bg-teal-900"></div>
            <div className="w-[8px] h-[8px] bg-teal-900"></div>
            <div className="w-[8px] h-[8px] bg-teal-900"></div>
            <div className="w-[8px] h-[8px] bg-white"></div>
          </div>
          RecovAI
        </div>
        <div className="navigation_links flex items-center justify-center gap-6">
          {navLink.map((item) => (
            <a
              key={item}
              href="#"
              className="font-medium text-sm text-zinc-600 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="cta">
          <button className="px-3 py-1.5 bg-teal-900 text-white font-mono text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
