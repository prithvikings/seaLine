"use client";
import { cn } from "@/lib/utils";
import { AlertCircle, Bot, CheckCircle2 } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto h-full">
      {/* Welcome Header - Tightened margins */}
      <div className="flex items-center text-xl font-medium text-zinc-900 tracking-tight">
        Hey Neeraj, command center is ready
        <span className="inline-flex gap-1 ml-3">
          <kbd className="px-2 py-0.5 rounded border border-zinc-200 bg-white text-zinc-500 text-xs font-semibold shadow-sm">
            Ctrl
          </kbd>
          <span className="text-zinc-300 text-sm">+</span>
          <kbd className="px-2 py-0.5 rounded border border-zinc-200 bg-white text-zinc-500 text-xs font-semibold shadow-sm">
            K
          </kbd>
        </span>
      </div>

      {/* Main Grid Layout - Compressed gap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Compressed Feature Banner */}
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-6 md:p-8 flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-[#1A2E2A] opacity-90 z-0" />
            <div className="relative z-10 max-w-md">
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-2 tracking-tight">
                Make Sealine work for <i className="text-zinc-400">you</i>
              </h2>
              <p className="text-zinc-400 text-xs mb-5">
                Automate aggressive escalation workflows for high-risk Q3
                segments.
              </p>
              <button className="px-5 py-2 bg-white text-zinc-900 rounded-lg text-xs font-bold hover:bg-zinc-100 transition-colors shadow-sm">
                Configure Workflows
              </button>
            </div>
          </div>

          {/* Compact Activity Feed (No scrolling needed) */}
          <div className="flex flex-col">
            <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 pl-1">
              Live Operations
            </h3>
            <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white overflow-hidden shadow-sm">
              <FeedItem
                icon={<Bot className="w-4 h-4 text-[#1A5C54]" />}
                time="03:24 AM"
                message="System automatically triggered 'Empathetic' voice agent for 14 accounts in Salary-Delay."
              />
              <FeedItem
                icon={<AlertCircle className="w-4 h-4 text-orange-500" />}
                time="02:49 AM"
                message="High-risk anomaly detected in regional batch Q3_delinquency (West Coast)."
              />
              <FeedItem
                icon={<CheckCircle2 className="w-4 h-4 text-zinc-400" />}
                time="Yesterday"
                message="Workflow '7-Day Extension' activated for Borrower ID: ACC-89211."
                isLast
              />
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar Stats) */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {/* Dense KPI Grid (Replaces the tall vertical stats) */}
          <div className="bg-[#F9F9F8] rounded-[2rem] p-6 grid grid-cols-2 gap-x-4 gap-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-light text-zinc-900 tracking-tight">
                247
              </span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                Active Workflows
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-[#1A5C54] tracking-tight">
                76%
              </span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                Recovery Rate
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-zinc-900 tracking-tight">
                1,420
              </span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                Resolutions
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-orange-600 tracking-tight">
                84
              </span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                Critical Risks
              </span>
            </div>
          </div>

          {/* Single Operational Target Widget */}
          <div className="bg-[#F9F9F8] rounded-[2rem] p-6">
            <h4 className="text-sm font-semibold text-zinc-900 mb-1">
              Daily Resolution Target
            </h4>
            <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
              Resolve pending high-risk accounts to maintain portfolio
              stability.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div className="w-[68%] h-full bg-[#1A5C54] rounded-full" />
              </div>
              <span className="text-[10px] font-bold text-zinc-600 uppercase">
                68 / 100 Accounts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact Feed Item Helper
function FeedItem({
  icon,
  time,
  message,
  isLast = false,
}: {
  icon: React.ReactNode;
  time: string;
  message: string;
  isLast?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 hover:bg-zinc-50/80 transition-colors",
        !isLast && "border-b border-zinc-100",
      )}
    >
      <div className="mt-0.5 shrink-0 bg-[#F9F9F8] p-2 rounded-xl border border-zinc-100">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-zinc-700 leading-relaxed font-medium">
          {message}
        </div>
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
          {time}
        </div>
      </div>
    </div>
  );
}
