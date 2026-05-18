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

// Visual placeholder for the toggle switch
const ToggleSwitch = () => (
  <div className="w-8 h-4 bg-blue-600 rounded-full p-0.5 flex items-center justify-end shrink-0">
    <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      badge: null,
      desc: "A simple way to explore AI-powered default insights without upfront commitment.",
      price: "$0",
      period: "/forever",
      billingText: "No credit card required",
      hasToggle: false,
      promo: null,
      buttonText: "Get Started",
      buttonPrimary: false,
      features: [
        "Core analytics dashboards",
        "Basic AI predictions",
        "Delinquency lists",
        "Standard integrations",
        "Email support",
      ],
    },
    {
      name: "Growth",
      badge: "MOST POPULAR",
      desc: "Built for teams that need faster recovery, automation, and better visibility.",
      price: "$16",
      period: "/monthly",
      billingText: "Billed yearly",
      hasToggle: true,
      promo: "2 MONTHS FREE",
      buttonText: "Get Started",
      buttonPrimary: true,
      features: [
        "Advanced predictions models",
        "Real-time overdue detection",
        "Automated routing",
        "Priority integrations",
        "Team access",
      ],
    },
    {
      name: "Scale",
      badge: null,
      desc: "Designed for growing companies with complex repayment workflows and higher data volume.",
      price: "$59",
      period: "/monthly",
      billingText: "Billed yearly",
      hasToggle: true,
      promo: "2 MONTHS FREE",
      buttonText: "Get Started",
      buttonPrimary: false,
      features: [
        "Custom AI predictions models",
        "Advanced overdue detection",
        "Real-time AI calling",
        "Role-based access control",
        "Dedicated onboarding",
      ],
    },
  ];

  return (
    <div className="w-full border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto border-x border-zinc-200 bg-white flex flex-col">
        {/* Top Indicator Row */}
        <div className="w-full border-b border-zinc-200 p-8 flex items-center">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            [ 05 of 07 ] · Pricing
          </div>
        </div>

        {/* Header Section */}
        <div className="py-24 px-8 flex flex-col items-center gap-6 text-center border-b border-zinc-200">
          <div className="badge flex items-center font-mono text-[10px] border border-zinc-200 px-2 py-1 gap-2 uppercase tracking-wider text-zinc-600">
            <div className="bg-emerald-950 size-1.5"></div>
            Simple and Transparent
          </div>

          <div className="title flex flex-col items-center justify-center text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
            <span>Pricing That Scales</span>
            <span>With Growth</span>
          </div>

          <div className="desc max-w-xl mt-2">
            <p className="text-zinc-500 text-sm leading-relaxed">
              Flexible plans designed to support early teams today and complex
              recovery pipelines as your company scales.
            </p>
          </div>
        </div>

        {/* Pricing Grid - Using the 1px gap inversion trick */}
        <div className="bg-zinc-200 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px]">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white flex flex-col h-full">
                {/* Plan Header & Price Box */}
                <div className="p-8 md:p-10 flex flex-col gap-6 border-b border-zinc-200">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium text-zinc-900">
                        {plan.name}
                      </h3>
                      {plan.badge && (
                        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500 min-h-[40px] leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-medium text-zinc-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {plan.period}
                      </span>
                    </div>

                    {/* Billing Toggle/Info Row - Fixed height to maintain alignment */}
                    <div className="flex items-center gap-3 h-6">
                      {plan.hasToggle ? (
                        <>
                          <ToggleSwitch />
                          <span className="text-xs text-zinc-600 font-medium">
                            {plan.billingText}
                          </span>
                          {plan.promo && (
                            <span className="bg-zinc-100 text-zinc-600 text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
                              {plan.promo}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-xs text-zinc-500">
                          {plan.billingText}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 mt-4 text-sm font-mono transition-colors ${
                      plan.buttonPrimary
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 border border-zinc-200"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features List */}
                <div className="flex flex-col flex-grow bg-white">
                  {/* Tailwind's divide-y handles the inner borders automatically */}
                  <div className="flex flex-col divide-y divide-zinc-100 px-8 md:px-10">
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="py-4 flex items-center gap-4 text-sm text-zinc-600"
                      >
                        <CheckIcon />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
