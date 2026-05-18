"use client";
import { Play, Bot, User, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CommunicationHub() {
  return (
    <div className="flex h-[calc(100vh-2rem)] rounded-[2rem] border border-zinc-100 bg-white overflow-hidden shadow-sm mt-2">
      {/* Left: Communication Queue */}
      <div className="w-80 border-r border-zinc-100 bg-[#F9F9F8] flex flex-col shrink-0 z-10">
        {/* Search Header */}
        <div className="p-5 border-b border-zinc-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search transcripts, IDs..."
              className="w-full bg-white border border-zinc-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-medium text-zinc-900 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Queue List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div
              key={i}
              className={cn(
                "p-4 rounded-xl cursor-pointer transition-all border",
                i === 0
                  ? "bg-white border-zinc-200 shadow-sm"
                  : "bg-transparent border-transparent hover:bg-zinc-100/50 hover:border-zinc-200/50",
              )}
            >
              <div className="flex justify-between items-start mb-1.5">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    i === 0 ? "text-zinc-900" : "text-zinc-700",
                  )}
                >
                  ACC-892{item}1-M
                </span>
                <span className="text-[10px] font-bold text-zinc-400">
                  14:32
                </span>
              </div>
              <p className="text-xs text-zinc-500 truncate flex items-center gap-1.5">
                <Phone className="w-3 h-3" /> Outbound: Negotiator Agent
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className={cn(
                    "px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider border",
                    i === 0
                      ? "bg-teal-50 text-[#1A5C54] border-teal-100"
                      : "bg-zinc-100 text-zinc-500 border-zinc-200",
                  )}
                >
                  {i === 0 ? "Commitment Reached" : "Voicemail"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Transcript Workspace */}
      <div className="flex-1 flex flex-col bg-white relative">
        {/* Audio Player Header */}
        <div className="h-24 border-b border-zinc-100 p-6 flex items-center gap-6 bg-white shrink-0">
          <button className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors shadow-md active:scale-95">
            <Play className="w-5 h-5 ml-1 fill-current" />
          </button>

          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-zinc-900">
                Call Recording_89211.wav
              </span>
              <span className="text-xs font-bold text-zinc-400">
                01:24 / 04:12
              </span>
            </div>

            {/* Faux Audio Waveform for Light Mode */}
            <div className="h-8 w-full flex items-center gap-[2px]">
              {Array.from({ length: 90 }).map((_, i) => {
                const isPlayed = i < 30;
                return (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 rounded-full transition-all",
                      isPlayed ? "bg-[#1A5C54]" : "bg-zinc-200",
                    )}
                    style={{
                      height: `${((i * 17) % 100) * 0.6 + 20}%`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Transcript Dialogue */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#F3F4F1]/30">
          {/* AI Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-1 shadow-sm">
              <Bot className="w-4 h-4 text-[#1A5C54]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-zinc-900">
                  AI Negotiator
                </span>
                <span className="text-[10px] font-bold text-zinc-400">
                  00:12
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-100 shadow-sm text-sm text-zinc-700 leading-relaxed">
                Hello Marcus. I'm calling on behalf of the recovery team. I
                noticed your recent EMI payment of $480 is currently 42 days
                past due. I want to help you resolve this. Are you in a position
                to make a partial payment today?
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-1 shadow-sm">
              <User className="w-4 h-4 text-zinc-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-zinc-900">
                  Borrower (Marcus)
                </span>
                <span className="text-[10px] font-bold text-zinc-400">
                  00:28
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-100 shadow-sm text-sm text-zinc-700 leading-relaxed">
                Look, I can't do it today. My freelance client hasn't paid me
                yet. I should have the money by next Friday.
              </div>

              {/* Inline AI Sentiment extraction */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-100">
                <span className="text-[10px] text-orange-700 uppercase tracking-wider font-bold">
                  Intent: Promise to Pay
                </span>
                <span className="text-zinc-300">|</span>
                <span className="text-[10px] text-orange-600/80 font-medium">
                  Date Extracted: Next Friday
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
