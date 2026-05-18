//components/composite/BorrowerDetailWorkspace.tsx
"use client";
import { ShieldAlert, CreditCard, Send, PhoneCall, Scale } from "lucide-react";
import { BehavioralMetric } from "@/components/atomic/BehavioralMetric";
import { TimelineEvent } from "@/components/atomic/TimelineEvent";
import { RiskBadge } from "@/components/atomic/RiskBadge";

export default function BorrowerDetailWorkspace() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* LEFT PANEL: Profile & Financial Summary (3 Columns) */}
      <div className="lg:col-span-3 flex flex-col gap-4">
        {/* Core Identity Panel */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold text-zinc-100 tracking-tight">
                Marcus Vance
              </h2>
              <span className="text-[11px] font-mono text-zinc-500">
                ID: ACC-89211-M
              </span>
            </div>
            <RiskBadge level="critical" />
          </div>

          <div className="space-y-3 border-t border-zinc-900 pt-3 text-xs">
            <div className="flex justify-between">
              <span className="text-zinc-500">Employment</span>
              <span className="text-zinc-300 font-medium">Logistics Ops</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Credit Score</span>
              <span className="text-zinc-300 font-mono">590</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Primary Contact</span>
              <span className="text-zinc-300 font-mono">+1 (555) 014-9921</span>
            </div>
          </div>
        </div>

        {/* Loan Financial Metadata */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5 text-zinc-400" /> Financial
            Standing
          </h3>
          <div className="space-y-2">
            <div className="p-2 bg-zinc-900/40 border border-zinc-800 rounded">
              <span className="text-[10px] text-zinc-500 block">
                Principal Balance
              </span>
              <span className="text-lg font-semibold text-zinc-200 tracking-tight">
                $14,250.00
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-zinc-900/40 border border-zinc-800 rounded">
                <span className="text-[10px] text-zinc-500 block">
                  Days Overdue
                </span>
                <span className="text-sm font-semibold text-rose-400 font-mono">
                  42 Days
                </span>
              </div>
              <div className="p-2 bg-zinc-900/40 border border-zinc-800 rounded">
                <span className="text-[10px] text-zinc-500 block">
                  Next EMI Due
                </span>
                <span className="text-sm font-semibold text-zinc-300 font-mono">
                  $480/mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER PANEL: AI Behavioral Analysis & Timeline (6 Columns) */}
      <div className="lg:col-span-6 flex flex-col gap-6">
        {/* AI Behavioral Telemetry Grid */}
        <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-5">
          <h3 className="text-sm font-semibold text-zinc-100 mb-4 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" /> AI Behavioral
            Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <BehavioralMetric
              label="Repayment Tendency"
              value="Salary-Linked Delay"
              intensity="high"
            />
            <BehavioralMetric
              label="Communication Behavior"
              value="Responsive (Mornings)"
              intensity="low"
            />
            <BehavioralMetric
              label="Financial Volatility"
              value="High Multi-Account Stress"
              intensity="volatile"
            />
            <BehavioralMetric
              label="Agent Sentiment"
              value="Defensive / Evasive"
              intensity="medium"
            />
          </div>
        </div>

        {/* Audit Timeline */}
        <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-5">
          <h3 className="text-sm font-semibold text-zinc-100 mb-4">
            Historical Activity & Audit Log
          </h3>
          <div className="space-y-4">
            <TimelineEvent
              type="ai_insight"
              title="AI Call Transcript Summary Analysis"
              timestamp="May 18, 2026 — 14:32"
              meta="CRITICAL INSIGHT: Borrower indicates cashflow bottleneck due to freelance employer payment delays. Confirms intent to execute repayment plan by next Friday if given extension window."
            />
            <TimelineEvent
              type="call"
              title="Automated AI Voice Outreach Initiated"
              timestamp="May 18, 2026 — 14:30"
            />
            <TimelineEvent
              type="missed"
              title="EMI Default — Account Flagged High Risk"
              timestamp="May 01, 2026 — 00:01"
              isLast={true}
            />
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: AI Recommended Decisions (3 Columns) */}
      <div className="lg:col-span-3 flex flex-col gap-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 block">
            AI Suggested Action
          </h3>

          <div className="space-y-3">
            <div className="p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
              <span className="text-xs font-semibold text-cyan-300 block">
                Offer Window Restructure
              </span>
              <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
                Based on historic behavior, granting a temporary 7-day payment
                hold generates a 84% recovery probability.
              </p>
            </div>

            {/* Direct Contextual Execution Operations */}
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-xs text-zinc-200 transition-colors group">
              <span className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-zinc-500" /> SMS Extension
                Proposal
              </span>
              <span className="text-[10px] text-zinc-600 font-mono group-hover:text-zinc-400">
                Execute
              </span>
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-xs text-zinc-200 transition-colors group">
              <span className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-zinc-500" /> Trigger
                Negotiator Voice Agent
              </span>
              <span className="text-[10px] text-zinc-600 font-mono group-hover:text-zinc-400">
                Queue
              </span>
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-rose-950/20 border border-rose-900/30 hover:border-rose-800 text-xs text-rose-400 transition-colors group">
              <span className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-rose-500" /> Escalate to
                Legal Council
              </span>
              <span className="text-[10px] text-rose-700 font-mono group-hover:text-rose-500">
                Hard Path
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
