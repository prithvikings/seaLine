export default function Capabilities() {
  const features = [
    {
      title: "Prompt Tracking",
      description:
        "Track real user prompts and see when AI mentions your brand in its responses.",
      tag: "AI Visibility",
    },
    {
      title: "Citations Analysis",
      description:
        "Understand which citations drive visibility and discover what content gets recommended.",
      tag: "Intelligence",
    },
    {
      title: "Agent Analytics",
      description:
        "See in real time when AI crawlers from ChatGPT, Gemini, and others read your pages.",
      tag: "Infrastructure",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2 block">
            [ Platform ]
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Everything you need to{" "}
            <span className="text-blue-600 border-b-2 border-blue-600 border-dotted">
              scale recovery
            </span>
            .
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl text-lg">
            Track, analyze, and optimize your portfolio's performance across all
            communication channels with enterprise-grade infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="h-48 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center overflow-hidden">
                {/* Placeholder for complex SVG visualizations */}
                <span className="text-zinc-300 text-sm font-medium">
                  Visualization Component
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
