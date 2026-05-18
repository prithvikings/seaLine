"use client";
import {
  Share,
  Briefcase,
  Bot,
  Mail,
  MessageSquare,
  FileText,
  PhoneCall,
  Scale,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      {/* Header & Share */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
          Portfolio Risk Insights
        </h1>
        <button className="w-10 h-10 rounded-full border border-dashed border-zinc-300 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors">
          <Share className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-zinc-100 pb-px">
        <button className="pb-3 text-sm font-medium text-zinc-900 border-b-2 border-zinc-900">
          Global Portfolio
        </button>
        <button className="pb-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 transition-colors">
          AI Agent Performance
        </button>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Recovery Rate Card */}
        <div className="bg-[#F9F9F8] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-3xl font-semibold text-zinc-900">76.4%</div>
            <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase mt-1">
              Avg Recovery Rate
            </div>
          </div>
          {/* Faux Semi-Circle Chart */}
          <div className="mt-8 flex justify-center relative">
            <div className="w-32 h-16 rounded-t-full border-[12px] border-b-0 border-[#1A5C54] relative">
              <div className="absolute -bottom-2 -right-3 w-4 h-4 rounded-full bg-white border-4 border-[#1A5C54]" />
            </div>
            <div className="absolute bottom-0 text-center">
              <span className="text-xs text-zinc-500 block">Top</span>
              <span className="text-lg font-semibold text-zinc-900 leading-none">
                12%
              </span>
            </div>
          </div>
        </div>

        {/* AI Interventions Card */}
        <div className="bg-[#F9F9F8] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-3xl font-semibold text-zinc-900">1,420</div>
            <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase mt-1">
              AI Automated Resolutions
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between text-sm text-zinc-600 border-t border-zinc-200/60 pt-4">
            <span>68% without human input</span>
            <div className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center text-[10px]">
              i
            </div>
          </div>
        </div>

        {/* Total Accounts Card */}
        <div className="bg-[#F9F9F8] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-3xl font-semibold text-zinc-900">12,481</div>
            <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase mt-1">
              High-Risk Accounts Monitored
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-zinc-200/60 pt-4">
            <div className="flex items-center gap-2 text-sm text-zinc-700">
              <Briefcase className="w-4 h-4 text-zinc-400" /> Active Portfolios
              <span className="text-zinc-500 ml-1">4 batches</span>
            </div>
            <button className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors">
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Escalation Breakdown */}
        <div className="bg-[#F9F9F8] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-zinc-900">
              Escalation Channels
            </h3>
            <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
              Total Workflows | 5
            </span>
          </div>

          <div className="space-y-4">
            <UsageBar icon={Bot} label="AI VOICE AGENT" percentage={65} />
            <UsageBar
              icon={MessageSquare}
              label="SMS REMINDERS"
              percentage={20}
            />
            <UsageBar icon={Mail} label="EMAIL NOTICES" percentage={10} />
            <UsageBar icon={PhoneCall} label="HUMAN AGENT" percentage={4} />
            <UsageBar icon={Scale} label="LEGAL ROUTING" percentage={1} />
          </div>
        </div>

        {/* Repayment Volume Graph */}
        <div className="bg-[#F9F9F8] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-zinc-900">
              Daily Repayment Volume
            </h3>
            <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
              30-Day Trend
            </span>
          </div>

          {/* Faux Contribution Graph */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[400px] flex gap-1.5">
              {Array.from({ length: 20 }).map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1.5">
                  {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const isActive = colIndex === 18 && rowIndex === 3;
                    const isLight =
                      (colIndex === 19 && rowIndex === 2) ||
                      (colIndex === 17 && rowIndex === 5) ||
                      (colIndex > 10 && rowIndex % 2 === 0);

                    return (
                      <div
                        key={rowIndex}
                        className={cn(
                          "w-3 h-3 rounded-sm transition-colors",
                          isActive
                            ? "bg-[#1A5C54]"
                            : isLight
                              ? "bg-[#A7C8C3]"
                              : "bg-zinc-200/60",
                        )}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
            Lower Volume
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-zinc-200/60" />
              <div className="w-3 h-3 rounded-sm bg-[#A7C8C3]" />
              <div className="w-3 h-3 rounded-sm bg-[#3B8276]" />
              <div className="w-3 h-3 rounded-sm bg-[#1A5C54]" />
            </div>
            Higher Volume
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for the horizontal bars
function UsageBar({
  icon: Icon,
  label,
  percentage,
}: {
  icon: any;
  label: string;
  percentage: number;
}) {
  const isEmpty = percentage === 0;
  return (
    <div className="flex items-center gap-4">
      <Icon className="w-4 h-4 text-zinc-700 shrink-0" />
      <div className="flex-1 flex items-center gap-3">
        <div
          className={cn(
            "h-6 rounded-md flex items-center px-2 text-xs font-semibold",
            isEmpty
              ? "bg-[#1A5C54] w-12 text-white"
              : "bg-[#1A5C54] text-white",
          )}
          style={{ width: isEmpty ? "48px" : `${percentage}%` }}
        >
          {percentage}%
        </div>
        <span className="text-[10px] font-bold text-zinc-800 tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
