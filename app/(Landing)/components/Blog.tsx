import React from "react";

const Blogs = () => {
  const blogsData = [
    {
      date: "FEB 17, 2026",
      category: "DEBT OPERATIONS",
      title: "Repayment Insights Every Early-Stage Manager Needs",
      desc: "Learn how AI calling tools help agencies gain real-time visibility into default risk rate, and key metrics to make decisions.",
    },
    {
      date: "FEB 13, 2026",
      category: "COLLECTIONS",
      title: "AI Collections: A Game-Changer for NBFC",
      desc: "Learn how AI collections tools empower NBFC to make faster, smarter decisions with accurate, real-time repayment patterns.",
    },
    {
      date: "FEB 1, 2026",
      category: "WORKFLOW ESCALATES",
      title: "How AI Calling Automation Saves Time and Reduces Losses",
      desc: "Explore how AI-powered calling automation tools simplify default workflows, and give teams clearer visibility into failures.",
    },
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        {/* Top Indicator Row */}
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 06 of 07 ] · Blogs
          </div>
        </div>

        {/* Header Section */}
        <div className="py-24 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            Insights & Updates
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>Practical Insights</span>
            <span>for Modern Lenders</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              RecovAI shares clear, actionable perspectives on AI-driven
              default, collections, and decision-making to help teams stay
              informed and ahead.
            </p>
          </div>
        </div>

        {/* Blogs Grid - Gap Inversion Trick */}
        <div className="bg-zinc-200 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {blogsData.map((blog, index) => (
              <div
                key={index}
                className="bg-white flex flex-col h-full cursor-pointer group hover:bg-zinc-50 transition-colors"
              >
                {/* Image Container */}
                <div className="p-6 border-b border-zinc-200">
                  {/* Replace this div with an actual <img /> tag later */}
                  <div className="w-full aspect-[4/3] bg-zinc-900 flex items-center justify-center overflow-hidden">
                    <span className="font-mono text-xs text-zinc-700 uppercase tracking-widest group-hover:scale-105 transition-transform duration-500">
                      [ Image Placeholder ]
                    </span>
                  </div>
                </div>

                {/* Meta Data Row */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-200">
                  <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                    {blog.date}
                  </span>
                  <span className="bg-blue-50 text-blue-600 font-mono text-[9px] px-2 py-1 uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <h3 className="text-xl font-medium text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {blog.desc}
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

export default Blogs;
