import React from "react";

// Accept heightClass as a prop, defaulting to "h-10" if nothing is passed
const Divider = ({ heightClass = "h-10" }) => {
  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div
        className={`max-w-7xl mx-auto border-x border-zinc-200 ${heightClass}`}
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 2px, #e4e4e7 2px, #e4e4e7 4px)`,
        }}
      ></div>
    </div>
  );
};

export default Divider;
