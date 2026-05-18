export default function VoiceShowcase() {
  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2 block">
            [ Intelligence ]
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Multilingual AI Voice Agents.
          </h2>
          <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
            Execute intelligent negotiation and real-time analysis autonomously.
            Our agents adapt to regional languages, optimize tone contextually,
            and update repayment commitments instantly.
          </p>
          <ul className="space-y-4">
            {[
              "Real-time sentiment analysis",
              "Predictive escalation probability",
              "Automated compliance logging",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm font-medium text-zinc-700"
              >
                <svg
                  className="w-5 h-5 text-blue-600"
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
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 shadow-sm">
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border border-zinc-100 shadow-sm">
              <span className="text-xs font-bold text-blue-600 mb-1 block">
                AI AGENT
              </span>
              <p className="text-sm text-zinc-800">
                "Your EMI payment is currently overdue by 7 days. How can we
                assist you today?"
              </p>
            </div>
            <div className="bg-zinc-800 text-white p-4 rounded-lg shadow-sm ml-8">
              <span className="text-xs font-bold text-zinc-400 mb-1 block">
                BORROWER
              </span>
              <p className="text-sm">"I can make the payment by Friday."</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm ring-1 ring-blue-600/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                INTENT: COMMITMENT
              </div>
              <span className="text-xs font-bold text-blue-600 mb-1 block">
                AI AGENT
              </span>
              <p className="text-sm text-zinc-800">
                "Understood. Updating your file with a repayment commitment for
                Friday."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
